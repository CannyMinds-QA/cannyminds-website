import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import TawkProvider from "@/components/ui/TawkProvider";
import { enhancedMetadata as seoMetadata } from "@/lib/enhanced-seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = seoMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#3170b5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        {/* Preconnect: establish early connections to third-party origins */}
        <link rel="preconnect" href="https://va.tawk.to" />
        <link rel="dns-prefetch" href="https://va.tawk.to" />
        <link rel="preconnect" href="https://embed.tawk.to" />
        <link rel="dns-prefetch" href="https://embed.tawk.to" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="0QPPhEaCa6E3iNGO8b5ttw" async></script>
        <meta name="ahrefs-site-verification" content="99e32a8d5cf6c0e56b76bd14a0ba19104d7bc3a634f23bfb63da66d0abdaf6e2" />

        {/* Organization Schema - Site-wide (Google Official Guidelines) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'CannyMinds Technology Solutions',
              alternateName: 'CannyMinds',
              url: 'https://www.cannymindstech.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.cannymindstech.com/logo.png',
                width: 600,
                height: 60,
                caption: 'CannyMinds Technology Solutions Logo'
              },
              description: 'Enterprise content management and digital transformation solutions provider specializing in document management, workflow automation, and compliance for healthcare, pharmaceutical, manufacturing, and finance industries.',
              foundingDate: '2020',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
                addressRegion: 'Tamil Nadu',
                addressLocality: 'India'
              },
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'Customer Service',
                  url: 'https://www.cannymindstech.com/contact',
                  availableLanguage: ['English']
                },
                {
                  '@type': 'ContactPoint',
                  contactType: 'Sales',
                  url: 'https://www.cannymindstech.com/contact',
                  availableLanguage: ['English']
                },
                {
                  '@type': 'ContactPoint',
                  contactType: 'Technical Support',
                  url: 'https://www.cannymindstech.com/contact',
                  availableLanguage: ['English']
                }
              ],
              sameAs: [
                'https://in.linkedin.com/company/cannyminds-technology-solutions',
                'https://x.com/cannyminds',
                'https://www.facebook.com/p/CannyMinds-Technology-Solutions-100063646614219/',
                'https://www.instagram.com/cannyminds_technology/'
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <Navigation />
          {children}
          <Footer />
        </SmoothScroll>
        <TawkProvider />
        <WhatsAppButton />

      </body>
    </html>
  );
}
