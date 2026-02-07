// Using Resend for faster, more reliable email delivery
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Nodemailer code (commented out - uncomment if you want to switch back to SMTP)
// import nodemailer from 'nodemailer';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5; // Max 5 submissions per hour per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

    // Rate limiting check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long.' },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: 'Message is too long. Please keep it under 5000 characters.' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    if (!process.env.COMPANY_EMAIL) {
      console.error('COMPANY_EMAIL is not configured');
      return NextResponse.json(
        { error: 'Recipient email is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Send email via Resend (faster & better deliverability)
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'CannyMinds <onboarding@resend.dev>',
      to: [process.env.COMPANY_EMAIL],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
              .value { background: white; padding: 12px; border-radius: 4px; border-left: 3px solid #667eea; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">🔔 New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Name</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">📧 Email</div>
                  <div class="value">${email}</div>
                </div>
                
                ${phone ? `
                <div class="field">
                  <div class="label">📱 Phone</div>
                  <div class="value">${phone}</div>
                </div>
                ` : ''}
                
                ${company ? `
                <div class="field">
                  <div class="label">🏢 Company</div>
                  <div class="value">${company}</div>
                </div>
                ` : ''}
                
                ${service ? `
                <div class="field">
                  <div class="label">🎯 Service Interested In</div>
                  <div class="value">${service}</div>
                </div>
                ` : ''}
                
                <div class="field">
                  <div class="label">💬 Message</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
                
                <div class="footer">
                  <p>This email was sent from the CannyMinds website contact form.</p>
                  <p>Submitted on ${new Date().toLocaleString('en-US', { 
                    dateStyle: 'full', 
                    timeStyle: 'short' 
                  })}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully!',
        emailId: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

/* 
 * ====================================================================================
 * NODEMAILER CODE (Commented out - slower delivery, often goes to spam)
 * Uncomment below and comment out Resend code if you want to use SMTP instead
 * ====================================================================================

// Check if SMTP is configured
if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
  console.error('SMTP configuration is incomplete');
  return NextResponse.json(
    { error: 'Email service is not configured. Please contact support.' },
    { status: 500 }
  );
}

// Create SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Send email
await transporter.sendMail({
  from: `"${process.env.EMAIL_FROM_NAME || 'CannyMinds Website'}" <${process.env.SMTP_USER}>`,
  to: process.env.COMPANY_EMAIL,
  replyTo: email,
  subject: `New Contact Form Submission from ${name}`,
  text: `[Plain text version]`,
  html: `[Same HTML template as above]`
});

// SMTP-specific error handling
if (error instanceof Error) {
  if (error.message.includes('EAUTH') || error.message.includes('authentication')) {
    return NextResponse.json(
      { error: 'Email authentication failed. Please contact support.' },
      { status: 500 }
    );
  }
  if (error.message.includes('ECONNECTION') || error.message.includes('ETIMEDOUT')) {
    return NextResponse.json(
      { error: 'Unable to connect to email server. Please try again later.' },
      { status: 500 }
    );
  }
}

*/

