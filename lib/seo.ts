import { Metadata } from "next";

export const siteConfig = {
  name: "CannyMinds Technology Solutions",
  description:
    "Leading IT solutions provider specializing in digital transformation, AI & automation, software development, and business process services. ISO certified with global presence.",
  url: "https://www.cannymindstech.com",
  ogImage: "https://www.cannymindstech.com/og-image.jpg",
  keywords: [
    "digital transformation",
    "IT solutions",
    "software development",
    "AI automation",
    "document management",
    "HR software",
    "business process services",
    "digital marketing",
    "enterprise solutions",
    "cloud solutions",
    "CannyDocs",
    "CannyHR",
    "CannyScan",
    "CannyTrack",
    "ISO certified IT company",
  ],
  authors: [{ name: "CannyMinds Technology Solutions" }],
  creator: "CannyMinds Technology Solutions",
  publisher: "CannyMinds Technology Solutions",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Innovate. Digitalize. Transform.`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@cannyminds",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CannyMinds Technology Solutions",
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  image: siteConfig.ogImage,
  sameAs: [
    "https://www.linkedin.com/company/cannyminds",
    "https://twitter.com/cannyminds",
    "https://www.facebook.com/cannyminds",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9361801926",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-214-727-0422",
      contactType: "Customer Service",
      areaServed: "US",
      availableLanguage: "English",
    },
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "No 88 Ram Nagar 6th St, Velachery",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600042",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "8751 Collin McKinney Pkwy Suite 1102",
      addressLocality: "McKinney",
      addressRegion: "TX",
      postalCode: "75070",
      addressCountry: "US",
    },
  ],
  founder: {
    "@type": "Person",
    name: "CannyMinds Founders",
  },
  foundingDate: "2003",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: "100+",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "500",
  },
  offers: {
    "@type": "AggregateOffer",
    offerCount: "8",
    lowPrice: "999",
    highPrice: "99999",
    priceCurrency: "USD",
  },
};
