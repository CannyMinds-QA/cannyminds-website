
// JSON-LD Structured Data - matching ECM formula
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.cannymindstech.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Products",
                    "item": "https://www.cannymindstech.com/product"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Physical Records Management",
                    "item": "https://www.cannymindstech.com/product/physical-records-management"
                }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.cannymindstech.com/product/physical-records-management",
            "url": "https://www.cannymindstech.com/product/physical-records-management",
            "name": "Physical Records Management System - CannyRMS",
            "description": "Comprehensive guide to physical records management systems. Learn how CannyRMS delivers enterprise-grade physical records management with barcode tracking, approval workflows, and complete audit trails.",
            "image": {
                "@type": "ImageObject",
                "url": "https://www.cannymindstech.com/images/rms/cannyrms-dashboard.png",
                "width": 1200,
                "height": 630
            },
            "author": {
                "@type": "Person",
                "name": "Maheshkumar",
                "jobTitle": "VP - Operations",
                "url": "https://in.linkedin.com/in/mahesh-kumar-0a02249"
            },
            "publisher": {
                "@type": "Organization",
                "name": "CannyMinds Technology Solutions",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.cannymindstech.com/logo.png"
                },
                "url": "https://www.cannymindstech.com",
                "sameAs": [
                    "https://in.linkedin.com/company/cannyminds-technology-solutions",
                    "https://x.com/cannyminds",
                    "https://www.facebook.com/p/CannyMinds-Technology-Solutions-100063646614219/",
                    "https://www.youtube.com/channel/UCs6j4JpOxqSsULlTss3cSxg",
                    "https://www.instagram.com/cannyminds_technology/"
                ]
            },
            "datePublished": "2026-01-15",
            "dateModified": "2026-03-10",
            "mainEntity": {
                "@id": "https://www.cannymindstech.com/product/physical-records-management#software"
            }
        },
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.cannymindstech.com/product/physical-records-management#software",
            "name": "CannyRMS",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Cross-platform (On-Premise Deployment)",
            "description": "Enterprise physical records management software for tracking cartons, files, and documents with barcode scanning, approval workflows, and complete audit trails.",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "29",
                "bestRating": "5",
                "worstRating": "1"
            },
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR",
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "priceType": "https://schema.org/InvoicePrice",
                    "description": "Contact sales for enterprise pricing"
                },
                "availability": "https://schema.org/InStock",
                "url": "https://www.cannymindstech.com/contact",
                "seller": {
                    "@type": "Organization",
                    "name": "CannyMinds Technology Solutions",
                    "url": "https://www.cannymindstech.com",
                    "sameAs": [
                        "https://in.linkedin.com/company/cannyminds-technology-solutions",
                        "https://x.com/cannyminds",
                        "https://www.facebook.com/p/CannyMinds-Technology-Solutions-100063646614219/",
                        "https://www.youtube.com/channel/UCs6j4JpOxqSsULlTss3cSxg",
                        "https://www.instagram.com/cannyminds_technology/"
                    ]
                }
            },
            "featureList": [
                "Barcode-based document tracking",
                "8-step retrieval workflow",
                "Manager approval system",
                "Physical handover with signatures",
                "Document refiling tracking",
                "Complete audit trail",
                "Role-based access control",
                "Real-time storage utilization reports",
                "Bulk Excel upload",
                "Multi-location warehouse support"
            ]
        }
    ]
};

// Note: FAQPage and HowTo JSON-LD intentionally removed.
// - FAQPage rich results restricted to government/health-authority sites since Aug 2023 (Google).
// - HowTo rich results deprecated entirely in Sept 2023.
// The FAQ and retrieval-process content remains visible on the page for users and keyword
// coverage — it just no longer ships as structured data because it cannot earn a rich result.

export default function RMSLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Preload LCP hero video poster for faster paint */}
            <link
                rel="preload"
                href="/images/rms/cannyrms-dashboard.png"
                as="image"
                type="image/png"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
