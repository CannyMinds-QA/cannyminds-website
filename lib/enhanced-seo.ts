import { Metadata } from "next";

/**
 * Enhanced SEO Configuration for CannyMinds Landing Page
 * Optimized for Google's 2025 Algorithm Updates
 * Includes E-E-A-T, Local SEO, and Rich Snippets
 */

export const enhancedSiteConfig = {
  name: "CannyMinds",
  tagline: "Enterprise Software & AI Experts",

  // Primary description optimized for featured snippets (Shortened < 160 chars)
  description:
    "CannyMinds delivers ISO-certified digital transformation, AI automation, and enterprise software solutions. Serving global clients in India, USA, and Nigeria.",

  // Extended description for better keyword coverage
  longDescription:
    "Transform your business with CannyMinds Technology Solutions - your trusted partner for digital transformation, AI-powered automation, custom software development, and enterprise IT services. With ISO 9001:2015, ISO 15489:2016, ISO 22716:2007, and FDA 21 CFR Part 11 certifications, we deliver world-class solutions including CannyECM (document management), CannyHR (HR & payroll), CannyScan (digitization), and CannyTrack (productivity monitoring). Serving global clients with 24/7 support and industry-leading expertise.",

  url: "https://www.cannymindstech.com",
  ogImage: "https://www.cannymindstech.com/og-image.jpg",

  // Enhanced keywords with long-tail variations
  keywords: [
    // Primary keywords
    "digital transformation services",
    "AI automation solutions",
    "enterprise software development",
    "IT consulting services",

    // Location-based keywords
    "IT solutions provider Chennai",
    "software development company India",
    "digital transformation company USA",
    "IT services Nigeria",
    "enterprise software UAE",

    // Product-specific keywords
    "document management software",
    "HR payroll management system",
    "document scanning services",
    "employee productivity monitoring",
    "CannyECM document management",
    "CannyHR payroll software",
    "CannyScan digitization",
    "CannyTrack productivity tool",

    // Service-specific long-tail keywords
    "business process automation services",
    "robotic process automation solutions",
    "cloud migration services",
    "digital marketing for enterprises",
    "ISO certified IT company",
    "ISO 27001 certified software company",
    "GDPR compliant software solutions",

    // Industry-specific
    "enterprise digital transformation",
    "business intelligence solutions",
    "data analytics services",
    "custom CRM development",
    "ERP implementation services",

    // Technology stack
    "AI machine learning solutions",
    "cloud computing services",
    "mobile app development",
    "web application development",
    "SaaS software solutions",
  ],

  authors: [{ name: "CannyMinds Technology Solutions", url: "https://www.cannymindstech.com/about" }],
  creator: "CannyMinds Technology Solutions",
  publisher: "CannyMinds Technology Solutions",

  // Business information for local SEO
  business: {
    founded: "2003",
    employees: "50+",
    clients: "50+",
    countries: "4",
    offices: 4,
    rating: 4.9,
    reviews: 10,
  },

  // Social media profiles
  socialProfiles: {
    linkedin: "https://www.linkedin.com/company/cannyminds",
    twitter: "https://twitter.com/cannyminds",
    facebook: "https://www.facebook.com/cannyminds",
    instagram: "https://www.instagram.com/cannyminds",
    youtube: "https://www.youtube.com/cannyminds",
  },
};

export const enhancedMetadata: Metadata = {
  metadataBase: new URL(enhancedSiteConfig.url),

  title: {
    default: `${enhancedSiteConfig.name} | ${enhancedSiteConfig.tagline}`,
    template: `%s | ${enhancedSiteConfig.name}`,
  },

  description: enhancedSiteConfig.description,
  keywords: enhancedSiteConfig.keywords,
  authors: enhancedSiteConfig.authors,
  creator: enhancedSiteConfig.creator,
  publisher: enhancedSiteConfig.publisher,

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
    url: enhancedSiteConfig.url,
    title: `${enhancedSiteConfig.name} | ${enhancedSiteConfig.tagline}`,
    description: enhancedSiteConfig.description,
    siteName: enhancedSiteConfig.name,
    images: [
      {
        url: enhancedSiteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${enhancedSiteConfig.name} - Digital Transformation & AI Solutions`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${enhancedSiteConfig.name} | ${enhancedSiteConfig.tagline}`,
    description: enhancedSiteConfig.description,
    images: [enhancedSiteConfig.ogImage],
    creator: "@cannyminds",
    site: "@cannyminds",
  },

  alternates: {
    canonical: enhancedSiteConfig.url,
  },

  verification: {
    google: "fQ2boW5cw6cIVfgTxwovUdz1xrLT0xrySKRUjxU9cKg",
    yandex: "your-yandex-verification-code",
  },

  // Additional metadata
  category: "Technology Services",
  classification: "Business",
};

// Enhanced JSON-LD with multiple schemas
export const enhancedJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization Schema
    {
      "@type": "Organization",
      "@id": `${enhancedSiteConfig.url}/#organization`,
      name: "CannyMinds Technology Solutions",
      alternateName: "CannyMinds",
      url: enhancedSiteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${enhancedSiteConfig.url}/logo.png`,
        width: 512,
        height: 512,
      },
      image: enhancedSiteConfig.ogImage,
      description: enhancedSiteConfig.description,

      // Contact information
      email: "info@cannymindstech.com",
      telephone: "+91-9361801926",

      // Social profiles
      sameAs: Object.values(enhancedSiteConfig.socialProfiles),

      // Business details
      foundingDate: enhancedSiteConfig.business.founded,
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: enhancedSiteConfig.business.employees,
      },

      // Ratings
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: enhancedSiteConfig.business.rating,
        reviewCount: enhancedSiteConfig.business.reviews,
        bestRating: "5",
        worstRating: "1",
      },

      // Multiple contact points
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9361801926",
          contactType: "Customer Service",
          contactOption: "TollFree",
          areaServed: ["IN", "Asia"],
          availableLanguage: ["English", "Hindi", "Tamil"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
        },
        {
          "@type": "ContactPoint",
          telephone: "+1-214-727-0422",
          contactType: "Customer Service",
          areaServed: ["US", "North America"],
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          telephone: "+234-708-632-3687",
          contactType: "Customer Service",
          areaServed: ["NG", "Africa"],
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          contactType: "Technical Support",
          email: "support@cannymindstech.com",
          areaServed: "Worldwide",
        },
        {
          "@type": "ContactPoint",
          contactType: "Sales",
          email: "sales@cannymindstech.com",
          areaServed: "Worldwide",
        },
      ],

      // Addresses
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
          streetAddress: "8751 Collin McKinney Pkwy Suite 1102 #525",
          addressLocality: "McKinney",
          addressRegion: "TX",
          postalCode: "75070",
          addressCountry: "US",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "No:16, Adeola Adeleye Street, Off Coker Road, Illupeju",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
      ],

      // Services offered
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "IT Solutions and Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Digital Transformation Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Business Process Automation",
                  description: "End-to-end automation solutions for business processes",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cloud Migration Services",
                  description: "Seamless migration to cloud infrastructure",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Software Products",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "SoftwareApplication",
                  name: "CannyECM",
                  applicationCategory: "BusinessApplication",
                  description: "Smart document management software",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "SoftwareApplication",
                  name: "CannyHR",
                  applicationCategory: "BusinessApplication",
                  description: "HR and payroll management system",
                },
              },
            ],
          },
        ],
      },

      // Certifications
      accreditation: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          recognizedBy: {
            "@type": "Organization",
            name: "ISO",
          },
          name: "ISO 9001:2015 Quality Management System",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          recognizedBy: {
            "@type": "Organization",
            name: "ISO",
          },
          name: "ISO 15489:2016 Records Management",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          recognizedBy: {
            "@type": "Organization",
            name: "ISO",
          },
          name: "ISO 22716:2007 GMP Cosmetics",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          recognizedBy: {
            "@type": "Organization",
            name: "FDA",
          },
          name: "FDA 21 CFR Part 11 Compliance",
        },
      ],
    },

    // Website Schema
    {
      "@type": "WebSite",
      "@id": `${enhancedSiteConfig.url}/#website`,
      url: enhancedSiteConfig.url,
      name: enhancedSiteConfig.name,
      description: enhancedSiteConfig.description,
      publisher: {
        "@id": `${enhancedSiteConfig.url}/#organization`,
      },
      inLanguage: "en-US",

      // Search action for site search
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${enhancedSiteConfig.url}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },

    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": `${enhancedSiteConfig.url}/#webpage`,
      url: enhancedSiteConfig.url,
      name: `${enhancedSiteConfig.name} | ${enhancedSiteConfig.tagline}`,
      description: enhancedSiteConfig.description,
      isPartOf: {
        "@id": `${enhancedSiteConfig.url}/#website`,
      },
      about: {
        "@id": `${enhancedSiteConfig.url}/#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: enhancedSiteConfig.ogImage,
      },
      inLanguage: "en-US",
    },

    // Local Business Schema for each office
    {
      "@type": "LocalBusiness",
      "@id": `${enhancedSiteConfig.url}/#localbusiness-india`,
      name: "CannyMinds Technology Solutions - India",
      image: enhancedSiteConfig.ogImage,
      address: {
        "@type": "PostalAddress",
        streetAddress: "No 88 Ram Nagar 6th St, Velachery",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600042",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "12.9833",
        longitude: "80.2167",
      },
      telephone: "+91-9361801926",
      email: "info@cannymindstech.com",
      url: enhancedSiteConfig.url,
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
      priceRange: "$$",
    },

    // FAQ Schema for common questions
    {
      "@type": "FAQPage",
      "@id": `${enhancedSiteConfig.url}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does CannyMinds offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CannyMinds offers comprehensive IT solutions including digital transformation, AI automation, custom software development, cloud services, digital marketing, business process automation, and enterprise software products like CannyECM, CannyHR, CannyScan, and CannyTrack.",
          },
        },
        {
          "@type": "Question",
          name: "Is CannyMinds ISO certified?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, CannyMinds holds multiple certifications including ISO 9001:2015 (Quality Management System), ISO 15489:2016 (Records Management), ISO 22716:2007 (GMP Cosmetics), and FDA 21 CFR Part 11 Compliance, ensuring world-class quality, security, and compliance standards.",
          },
        },
        {
          "@type": "Question",
          name: "Where is CannyMinds located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CannyMinds has global offices in India (Chennai), USA (McKinney, Texas), and Nigeria (Lagos), serving clients worldwide with 24/7 support.",
          },
        },
        {
          "@type": "Question",
          name: "What is CannyECM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CannyECM is a smart document management software that enables professional document organization, version control, quick search, and instant retrieval through secure web browsers with cloud storage capabilities.",
          },
        },
      ],
    },

    // Breadcrumb Schema
    {
      "@type": "BreadcrumbList",
      "@id": `${enhancedSiteConfig.url}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: enhancedSiteConfig.url,
        },
      ],
    },
  ],
};
