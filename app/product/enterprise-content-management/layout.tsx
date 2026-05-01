import React from "react";

// JSON-LD Structured Data — @graph schema (matches CannyPQMS / CannyRMS rich-snippet pattern)
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
                    "name": "Enterprise Content Management",
                    "item": "https://www.cannymindstech.com/product/enterprise-content-management"
                }
            ]
        },
        {
            "@type": "WebPage",
            "@id": "https://www.cannymindstech.com/product/enterprise-content-management",
            "url": "https://www.cannymindstech.com/product/enterprise-content-management",
            "name": "Enterprise Content Management System | CannyECM",
            "description": "Enterprise content management system with 99% OCR accuracy, workflow automation, and cloud/on-premise/hybrid deployment. Organize 50,000+ documents with advanced ECM features.",
            "image": {
                "@type": "ImageObject",
                "url": "https://www.cannymindstech.com/images/products/cannyecm/cannyecm1.png",
                "width": 1200,
                "height": 800
            },
            "author": {
                "@type": "Person",
                "name": "Christopher",
                "jobTitle": "Head of Technical Department & Investor",
                "url": "https://www.cannymindstech.com/about"
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
            "dateModified": "2026-04-24",
            "mainEntity": {
                "@id": "https://www.cannymindstech.com/product/enterprise-content-management#software"
            }
        },
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.cannymindstech.com/product/enterprise-content-management#software",
            "name": "CannyECM",
            "url": "https://www.cannymindstech.com/product/enterprise-content-management",
            "screenshot": "https://www.cannymindstech.com/images/products/cannyecm/cannyecm1.png",
            "applicationCategory": "BusinessApplication",
            "applicationSubCategory": "Enterprise Content Management",
            "operatingSystem": "Web-based (Cloud, On-Premise, Hybrid)",
            "description": "Enterprise content management system with OCR-powered full-text search, workflow automation, role-based access control, and flexible cloud/on-premise/hybrid deployment. Organize, search, retrieve, and share documents with enterprise-grade security.",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "67",
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
                "Secure Login with SSO, LDAP, and Multi-Factor Authentication",
                "Dashboard & Analytics",
                "User Management with Bulk Import/Export",
                "Role-Based Permissions at File, Folder, and Cabinet Level",
                "OCR-Powered Full-Text Search (Elasticsearch)",
                "Audit Trail and Reports with Hash Verification",
                "Unlimited Folder Hierarchy and Document Organization",
                "In-Browser File Viewing, Annotations, and Digital Signatures",
                "Automatic Version Control and Duplicate Detection",
                "Collaborative Office Document Editing (Word, Excel, PowerPoint)",
                "Multi-Format Support (PDF, Office, Images, CAD, Audio, Video)",
                "Visual Workflow Builder with Approvals and Reminders",
                "Custom Metadata Fields with Validation and Retention Rules",
                "Master Data Management (Groups, Departments, Categories)",
                "File Sync with Network Drives and Amazon S3",
                "System Monitoring and Background Process Queues",
                "Trash and File Recovery"
            ]
        }
        // NOTE: FAQPage and HowTo schemas intentionally omitted.
        // - FAQPage rich results are restricted to government and recognized health-authority
        //   sites since Aug 2023 (Google). Emitting it on a B2B SaaS domain is dead weight.
        // - HowTo rich results were deprecated entirely in Sept 2023.
        // The FAQ and 4-step process remain as visible on-page content for users and keyword
        // coverage — they just aren't marked up as structured data because they can't earn a
        // rich result on this domain class.
    ]
};

export default function EnterpriseContentManagementLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Note: LCP hero image is preloaded by next/image when the <Image> below
                uses `priority`. A hand-written <link rel="preload"> here would point
                to the raw PNG, but next/image actually serves AVIF/WebP from
                /_next/image?... — a manual preload would cause a duplicate fetch. */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
