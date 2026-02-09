import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple validation functions
const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isValidPhone = (phone: string): boolean => {
    const cleanPhone = phone.replace(/[\s\-+()]/g, "");
    return cleanPhone.length >= 10 && /^\d+$/.test(cleanPhone);
};

const sanitizeInput = (input: string): string => {
    return input
        .trim()
        .replace(/[<>]/g, "") // Remove potential HTML tags
        .substring(0, 200); // Limit length
};

// Resource mapping (keeps actual paths hidden from frontend)
const RESOURCE_MAP: Record<string, string> = {
    "pharma-guide": "/downloads/cannyminds-pharma-guide.pdf",
};

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Extract and sanitize inputs
        const name = sanitizeInput(body.name || "");
        const email = sanitizeInput(body.email || "");
        const phone = sanitizeInput(body.phone || "");
        const company = sanitizeInput(body.company || "");
        const resource = sanitizeInput(body.resource || "");
        const timestamp = body.timestamp || new Date().toISOString();

        // Validate required fields
        const errors: string[] = [];

        if (!name || name.length < 2) {
            errors.push("Valid name is required");
        }

        if (!email || !isValidEmail(email)) {
            errors.push("Valid email is required");
        }

        if (!phone || !isValidPhone(phone)) {
            errors.push("Valid phone number is required");
        }

        if (!company || company.length < 2) {
            errors.push("Company name is required");
        }

        if (!resource || !RESOURCE_MAP[resource]) {
            errors.push("Invalid resource requested");
        }

        if (errors.length > 0) {
            return NextResponse.json(
                { success: false, errors },
                { status: 400 }
            );
        }

        // Log the download request (in production, this would go to a database or CRM)
        const leadData = {
            name,
            email,
            phone,
            company,
            resource,
            timestamp,
            ip: request.headers.get("x-forwarded-for") || "unknown",
            userAgent: request.headers.get("user-agent") || "unknown",
        };

        console.log("Download request received:", JSON.stringify(leadData, null, 2));

        // Send email notification
        const smtpConfig = {
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "587"),
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
            to: process.env.COMPANY_EMAIL,
        };

        if (smtpConfig.host && smtpConfig.user && smtpConfig.pass && smtpConfig.to) {
            try {
                const transporter = nodemailer.createTransport({
                    host: smtpConfig.host,
                    port: 465,
                    secure: true,
                    auth: {
                        user: smtpConfig.user,
                        pass: smtpConfig.pass,
                    },
                    tls: {
                        rejectUnauthorized: false,
                    },
                });

                const resourceName = resource === "pharma-guide" ? "Pharmaceutical Compliance Guide" : resource;

                await transporter.sendMail({
                    from: `"${process.env.EMAIL_FROM_NAME || "CannyMinds Website"}" <${smtpConfig.user}>`,
                    to: smtpConfig.to,
                    replyTo: email,
                    subject: `Book Download: ${name} - ${resourceName}`,
                    text: `
                        New Book Download Request
                        ---------------------------
                        Name: ${name}
                        Email: ${email}
                        Phone: ${phone}
                        Company: ${company}
                        Resource: ${resourceName}
                        Timestamp: ${timestamp}
                    `,
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                            <h2 style="color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">📚 Book Download Request</h2>

                            <div style="margin: 20px 0; padding: 15px; background: #f0fdf4; border-radius: 6px; border-left: 4px solid #22c55e;">
                                <p style="margin: 0; font-weight: bold; color: #166534;">Resource Downloaded:</p>
                                <p style="margin: 5px 0 0; color: #15803d; font-size: 16px;">${resourceName}</p>
                            </div>

                            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                                <tr>
                                    <td style="padding: 10px 0; color: #64748b; font-weight: bold; width: 140px;">NAME:</td>
                                    <td style="padding: 10px 0; color: #1e293b;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; color: #64748b; font-weight: bold;">EMAIL:</td>
                                    <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; color: #64748b; font-weight: bold;">PHONE:</td>
                                    <td style="padding: 10px 0;"><a href="tel:${phone.replace(/\D/g, "")}" style="color: #3b82f6; text-decoration: none;">${phone}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; color: #64748b; font-weight: bold;">COMPANY:</td>
                                    <td style="padding: 10px 0; vertical-align: middle;">
                                        ${company}
                                        <a href="https://www.google.com/search?q=${encodeURIComponent(company)}" target="_blank" style="margin-left: 10px; font-size: 11px; color: #64748b; text-decoration: none; background: #f1f5f9; padding: 2px 8px; border-radius: 4px; border: 1px solid #e2e8f0;">🔍 Search</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; color: #64748b; font-weight: bold;">TIMESTAMP:</td>
                                    <td style="padding: 10px 0; color: #1e293b;">${new Date(timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
                                </tr>
                            </table>

                            <div style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 20px;">
                                Sent via CannyMinds Website - Book Download Form
                            </div>
                        </div>
                    `,
                });

                console.log("✅ Book download notification email sent successfully");
            } catch (emailError) {
                console.error("Email sending failed:", emailError);
                // Don't fail the download if email fails
            }
        } else {
            console.warn("SMTP configuration incomplete, skipping email notification");
        }

        // Return the download URL
        const downloadUrl = RESOURCE_MAP[resource];

        return NextResponse.json({
            success: true,
            downloadUrl,
            message: "Thank you! Your download is ready.",
        });

    } catch (error) {
        console.error("Download request error:", error);
        return NextResponse.json(
            { success: false, error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}

// Prevent other methods
export async function GET() {
    return NextResponse.json(
        { error: "Method not allowed" },
        { status: 405 }
    );
}
