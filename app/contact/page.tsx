import type { Metadata } from 'next';
import SocialShare from '@/components/ui/SocialShare';
import ContactForm from '@/components/contact/ContactForm';
import Link from 'next/link';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  ArrowForward as ArrowIcon,
} from '@mui/icons-material';
import GlobalOfficesNew from '@/components/sections/GlobalOfficesNew';
import { baseUrl, generateAlternates } from '@/lib/enhanced-seo';

export const metadata: Metadata = {
  title: 'Contact CannyMinds | Get in Touch Today',
  description: 'Contact CannyMinds for digital transformation and enterprise software. Offices in India, USA, Nigeria. 24/7 support for enterprise clients.',
  keywords: [
    'contact CannyMinds',
    'CannyMinds contact',
    'IT support India',
    'digital transformation contact',
    'enterprise software support',
    'CannyMinds offices',
    'technology solutions contact',
  ],
  openGraph: {
    title: 'Contact CannyMinds | Get in Touch Today',
    description: 'Contact CannyMinds for digital transformation and enterprise software. Offices in India, USA, Nigeria. 24/7 support for enterprise clients.',
    url: 'https://www.cannymindstech.com/contact',
    type: 'website',
    siteName: 'CannyMinds',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.cannymindstech.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact CannyMinds Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact CannyMinds | Get in Touch Today',
    description: 'Contact CannyMinds for digital transformation and enterprise software. Offices in India, USA, Nigeria. 24/7 support for enterprise clients.',
    images: ['https://www.cannymindstech.com/og-image.jpg'],
  },
  alternates: generateAlternates('/contact'),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "name": "Contact CannyMinds | Get in Touch Today",
      "description": "Contact CannyMinds for digital transformation and enterprise software. Offices in India, USA, Nigeria. 24/7 support for enterprise clients.",
      "url": `${baseUrl}/contact`,
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
          "name": "Contact"
        }
      ]
    }
  ]
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16 sm:pt-20">

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get in Touch with CannyMinds
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Have questions about our solutions or services? We're here to help you transform your business with innovative technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">

              {/* Contact Form */}
              <ContactForm />

              {/* Quick Contact Info */}
              <div className="space-y-3">
                {/* Quick Contact Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-lg">

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <PhoneIcon sx={{ fontSize: 20, color: 'white' }} />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Quick Contact
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {/* Email */}
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                          <EmailIcon sx={{ fontSize: 22, color: 'white' }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-gray-900 mb-1.5 text-base sm:text-lg">Email Us</h3>
                          <a
                            href="mailto:info@cannymindstech.com"
                            className="text-primary font-semibold text-sm sm:text-base block mb-1 break-all"
                          >
                            info@cannymindstech.com
                          </a>
                          <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            We'll respond within 24 hours
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <PhoneIcon sx={{ fontSize: 22, color: 'white' }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Call Us</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
                            <a
                              href="tel:+919361801926"
                              className="text-green-700 font-semibold text-xs sm:text-sm"
                            >
                              +91 93618 01926
                            </a>
                            <a
                              href="tel:+919444216400"
                              className="text-green-700 font-semibold text-xs sm:text-sm"
                            >
                              +91 94442 16400
                            </a>
                            <a
                              href="tel:+919361801928"
                              className="text-green-700 font-semibold text-xs sm:text-sm"
                            >
                              +91 93618 01928
                            </a>
                            <a
                              href="tel:+919444333574"
                              className="text-green-700 font-semibold text-xs sm:text-sm"
                            >
                              +91 94443 33574
                            </a>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 mt-2 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            Global Support Line
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <LocationIcon sx={{ fontSize: 22, color: 'white' }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-gray-900 mb-1.5 text-base sm:text-lg">Visit Us</h3>
                          <p className="text-gray-700 font-semibold mb-1 text-sm sm:text-base">
                            No 88 Ram Nagar 6th St, Velachery<br />
                            Chennai-600042, Tamil Nadu, India
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Compliance Certifications */}
                <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2.5">Certifications & Compliance</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {/* FDA 21 CFR Part 11 */}
                    <div className="bg-white rounded-lg p-1.5 border border-gray-200 hover:border-gray-300 transition-colors">
                      <div className="aspect-square relative mb-1 rounded overflow-hidden bg-gray-50">
                        <img
                          src="/certifications/fda-21-cfr-part-11.jpg"
                          alt="FDA 21 CFR Part 11"
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <p className="text-[10px] font-medium text-gray-700 text-center leading-tight">FDA 21 CFR</p>
                    </div>

                    {/* ISO 9001:2015 */}
                    <div className="bg-white rounded-lg p-1.5 border border-gray-200 hover:border-gray-300 transition-colors">
                      <div className="aspect-square relative mb-1 rounded overflow-hidden bg-gray-50">
                        <img
                          src="/certifications/iso-9001-2015.png"
                          alt="ISO 9001:2015"
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <p className="text-[10px] font-medium text-gray-700 text-center leading-tight">ISO 9001</p>
                    </div>

                    {/* ISO 15489:2016 */}
                    <div className="bg-white rounded-lg p-1.5 border border-gray-200 hover:border-gray-300 transition-colors">
                      <div className="aspect-square relative mb-1 rounded overflow-hidden bg-gray-50">
                        <img
                          src="/certifications/iso-15489-2016.png"
                          alt="ISO 15489:2016"
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <p className="text-[10px] font-medium text-gray-700 text-center leading-tight">ISO 15489</p>
                    </div>

                    {/* ISO 27001 */}
                    <div className="bg-white rounded-lg p-1.5 border border-gray-200 hover:border-gray-300 transition-colors">
                      <div className="aspect-square relative mb-1 rounded overflow-hidden bg-gray-50">
                        <img
                          src="/certifications/iso-22716-2007.png"
                          alt="ISO 27001"
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <p className="text-[10px] font-medium text-gray-700 text-center leading-tight">ISO 22716</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Office Locations & Partners */}
        <GlobalOfficesNew />

        {/* CTA Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-12 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join 100+ organizations worldwide that trust CannyMinds for their digital transformation journey.
                Let's discuss how we can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+919361801926"
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <PhoneIcon sx={{ fontSize: 20 }} />
                  Call Now
                </a>
                <a
                  href="mailto:info@cannymindstech.com"
                  className="bg-primary text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all inline-flex items-center justify-center gap-2"
                >
                  <EmailIcon sx={{ fontSize: 20 }} />
                  Email Us
                </a>
              </div>

              {/* Social Share */}
              <div className="mt-8 flex justify-center">
                <SocialShare
                  title="Contact CannyMinds Technology Solutions - Get in Touch Today"
                  description="Contact CannyMinds for digital transformation, AI automation, and enterprise software services. Offices in India, USA, and Nigeria. 24/7 support available."
                />
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
