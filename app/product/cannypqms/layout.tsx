
import React from "react";

// JSON-LD Structured Data — @graph schema
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
                    "name": "Pharma QMS",
                    "item": "https://www.cannymindstech.com/product/cannypqms"
                }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.cannymindstech.com/product/cannypqms",
            "url": "https://www.cannymindstech.com/product/cannypqms",
            "name": "Pharmaceutical Quality Management System | CannyPQMS",
            "description": "CannyPQMS is a pharma QMS software with 18 modules — CAPA, DMS, Audit, Validation & 21 CFR Part 11 e-Sign. FDA, WHO, ICH Q9 compliant. Request a demo.",
            "image": {
                "@type": "ImageObject",
                "url": "https://www.cannymindstech.com/images/pharma-qms/cannypqms-quality-management-kpi-dashboard.png",
                "width": 1200,
                "height": 630
            },
            "author": {
                "@type": "Person",
                "name": "Udayakumar Murugan",
                "jobTitle": "Chief Executive Officer",
                "url": "https://in.linkedin.com/in/udayakumar-murugan-732b3864"
            },
            "publisher": {
                "@type": "Organization",
                "name": "CannyMinds Technology Solutions",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.cannymindstech.com/logo.png",
                    "width": 200,
                    "height": 60
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
            "dateModified": "2026-03-29",
            "mainEntity": {
                "@id": "https://www.cannymindstech.com/product/cannypqms#software"
            }
        },
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.cannymindstech.com/product/cannypqms#software",
            "name": "CannyPQMS",
            "url": "https://www.cannymindstech.com/product/cannypqms",
            "screenshot": "https://www.cannymindstech.com/images/pharma-qms/cannypqms-quality-management-kpi-dashboard.png",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "On-Premise (Windows Server / Linux)",
            "description": "Enterprise pharmaceutical quality management system with 18 GxP-critical modules including CAPA management, document control, deviation tracking, audit management, and 21 CFR Part 11 electronic signatures.",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": 4.8,
                "ratingCount": 12,
                "bestRating": 5,
                "worstRating": 1
            },
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR",
                "description": "Contact sales for enterprise pricing",
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "priceType": "https://schema.org/InvoicePrice"
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
                "CAPA Management",
                "Document Management System",
                "Deviation Management",
                "Change Control Management",
                "Audit Management",
                "Training Management",
                "Supplier Quality Management",
                "Complaint Management",
                "Risk Management (ICH Q9)",
                "Non-Conformance Management",
                "Calibration Management",
                "Equipment Asset Management",
                "Validation Management",
                "Regulatory Compliance Management",
                "Management Review",
                "Dashboard & Reporting",
                "Electronic Signature (21 CFR Part 11)",
                "Collaboration Workflow Builder"
            ]
        }
    ]
};


export default function PharmaQMSLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Preload LCP hero image for faster paint */}
            <link
                rel="preload"
                href="/images/pharma-qms/cannypqms-quality-management-kpi-dashboard.png"
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
