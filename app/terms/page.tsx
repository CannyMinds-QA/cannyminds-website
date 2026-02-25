import { Metadata } from 'next';
import { baseUrl } from '@/lib/enhanced-seo';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | CannyMinds Technology Solutions',
  description: 'Terms of Service for CannyMinds Technology Solutions. Read our terms and conditions for using our services and products.',
  alternates: {
    canonical: 'https://www.cannymindstech.com/terms',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.cannymindstech.com/terms',
    title: 'Terms of Service | CannyMinds Technology Solutions',
    description: 'Terms of Service for CannyMinds Technology Solutions. Read our terms and conditions for using our services and products.',
    siteName: 'CannyMinds',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.cannymindstech.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CannyMinds Terms of Service',
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Terms of Service | CannyMinds Technology Solutions",
      "description": "Terms of Service for CannyMinds Technology Solutions. Read our terms and conditions for using our services and products.",
      "url": `${baseUrl}/terms`,
      "publisher": {
        "@type": "Organization",
        "name": "CannyMinds Technology Solutions",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.png`
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${baseUrl}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Terms of Service"
        }
      ]
    }
  ]
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-200">Last updated: February 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the services provided by CannyMinds Technology Solutions (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">2. Services Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CannyMinds Technology Solutions provides enterprise software solutions including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><Link href="/product/enterprise-content-management" className="text-primary hover:underline">Content Management Systems (CannyECM)</Link></li>
                <li><Link href="/product/hr-management" className="text-primary hover:underline">HR Management Solutions (CannyHR)</Link></li>
                <li><Link href="/product/scanning-solution" className="text-primary hover:underline">Scanning and Digitization Services (CannyScan)</Link></li>
                <li><Link href="/product/tracking-system" className="text-primary hover:underline">Document Tracking Systems (CannyTrack)</Link></li>
                <li><Link href="/ai-solutions" className="text-primary hover:underline">AI-powered Business Solutions</Link></li>
                <li><Link href="/solutions/pharmaceutical" className="text-primary hover:underline">Pharmaceutical Compliance Solutions</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed">
                Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account. You agree to notify us immediately of any unauthorized use of your account or any other security breach.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, trademarks, logos, and intellectual property displayed on our website and within our software products are the property of CannyMinds Technology Solutions. Unauthorized use, reproduction, or distribution is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">5. Data Protection</h2>
              <p className="text-gray-700 leading-relaxed">
                We are committed to protecting your data in compliance with applicable data protection regulations. Our software solutions are designed to meet industry standards including ISO 27001, HIPAA, and FDA 21 CFR Part 11 requirements where applicable. For detailed information on how we handle your data, please review our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">6. Service Availability</h2>
              <p className="text-gray-700 leading-relaxed">
                While we strive to maintain 99.9% uptime, we do not guarantee uninterrupted access to our services. Scheduled maintenance and updates will be communicated in advance whenever possible.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                CannyMinds Technology Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">8. Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after any modifications constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">9. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">10. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                For any questions regarding these Terms of Service, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700"><strong>CannyMinds Technology Solutions</strong></p>
                <p className="text-gray-700">Email: <a href="mailto:info@cannymindstech.com" className="text-primary hover:underline">info@cannymindstech.com</a></p>
                <p className="text-gray-700">Phone: <a href="tel:+914440000000" className="text-primary hover:underline">+91-44-4000-0000</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>
      </main>
    </>
  );
}
