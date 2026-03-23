
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
            "@type": "Article",
            "headline": "Physical Records Management System - CannyRMS",
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
                "url": "https://www.cannymindstech.com"
            },
            "datePublished": "2026-01-15",
            "dateModified": "2026-03-10",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.cannymindstech.com/product/physical-records-management"
            }
        },
        {
            "@type": "SoftwareApplication",
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
                    "@type": "PriceSpecification",
                    "description": "Contact sales for enterprise pricing"
                },
                "availability": "https://schema.org/InStock",
                "url": "https://www.cannymindstech.com/contact",
                "seller": {
                    "@type": "Organization",
                    "name": "CannyMinds Technology Solutions"
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
        },
        {
            "@type": "Product",
            "name": "CannyRMS - Physical Records Management System",
            "description": "Enterprise physical records management software for tracking cartons, files, and documents with barcode scanning, approval workflows, and complete audit trails.",
            "brand": {
                "@type": "Brand",
                "name": "CannyMinds Technology Solutions"
            },
            "manufacturer": {
                "@type": "Organization",
                "name": "CannyMinds Technology Solutions",
                "url": "https://www.cannymindstech.com"
            },
            "image": "https://www.cannymindstech.com/images/rms/cannyrms-dashboard.png",
            "url": "https://www.cannymindstech.com/product/physical-records-management",
            "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "url": "https://www.cannymindstech.com/contact",
                "description": "Contact sales for enterprise pricing",
                "seller": {
                    "@type": "Organization",
                    "name": "CannyMinds Technology Solutions"
                }
            }
        }
    ]
};

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
