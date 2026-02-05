import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CannyRMS - Physical Records Management | 2025",
    description: "Enterprise physical records management with 8-step workflow, barcode tracking, and complete audit trails. Manage 100,000+ cartons. 30-day free trial.",
    keywords: [
        "CannyRMS",
        "physical records management system",
        "records management software",
        "document tracking system",
        "barcode records management",
        "file tracking software",
        "warehouse records management",
        "document retrieval system",
        "records audit trail",
        "compliance records management",
        "physical file management",
        "carton tracking system",
        "records lifecycle management",
        "document storage management",
        "records handover system",
        "file refiling software",
        "enterprise records management",
        "physical document tracking",
        "records approval workflow",
        "bank loan document management",
        "pharmaceutical batch records",
        "legal file tracking",
    ],
    authors: [{ name: "CannyMinds Technology Solutions" }],
    openGraph: {
        title: "CannyRMS - Physical Records Management | Barcode Tracking 2025",
        description: "Enterprise RMS with 8-step workflow, barcode scanning, approval system. Manage 100,000+ physical records. 30-day free trial.",
        type: "article",
        url: "https://www.cannymindstech.com/solutions/rms",
        siteName: "CannyMinds Technology Solutions",
        images: [
            {
                url: "/images/rms/cannyrms-dashboard.png",
                width: 1200,
                height: 630,
                alt: "CannyRMS Physical Records Management System Dashboard",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CannyRMS - Physical Records Management System",
        description: "Enterprise-grade records management with barcode tracking, workflow automation, and compliance-ready audit trails.",
        images: ["/images/rms/cannyrms-dashboard.png"],
    },
    alternates: {
        canonical: "https://www.cannymindstech.com/solutions/rms",
    },
    robots: {
        index: true,
        follow: true,
    },
};

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
                    "name": "Solutions",
                    "item": "https://www.cannymindstech.com/#solutions"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "CannyRMS - Physical Records Management"
                }
            ]
        },
        {
            "@type": "Article",
            "headline": "CannyRMS - Enterprise Physical Records Management System",
            "description": "Comprehensive guide to CannyRMS physical records management system with barcode tracking, approval workflows, and complete audit trails.",
            "image": "https://www.cannymindstech.com/images/rms/cannyrms-dashboard.png",
            "author": {
                "@type": "Organization",
                "name": "CannyMinds Technology Solutions",
                "url": "https://www.cannymindstech.com"
            },
            "publisher": {
                "@type": "Organization",
                "name": "CannyMinds Technology Solutions",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://cannymindstech.com/logo.png"
                },
                "url": "https://cannymindstech.com"
            },
            "datePublished": "2025-01-15",
            "dateModified": "2025-02-04",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://cannymindstech.com/solutions/rms"
            }
        },
        {
            "@type": "SoftwareApplication",
            "name": "CannyRMS",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, Windows, macOS, Linux",
            "description": "Enterprise physical records management software for tracking cartons, files, and documents with barcode scanning, approval workflows, and complete audit trails.",
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
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150",
                "bestRating": "5"
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is CannyRMS?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "CannyRMS is an enterprise physical records management system that helps organizations track, manage, and secure physical documents stored in warehouses. It uses barcode scanning, approval workflows, and complete audit trails to ensure documents are always accounted for."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does the 8-step workflow work?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "CannyRMS uses an 8-step workflow: 1) System Setup, 2) Inward Upload, 3) Search, 4) Request, 5) Approval, 6) Verification, 7) Handover, 8) Refiling. Each step is tracked with timestamps and user information for complete auditability."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What industries use physical records management software?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Physical records management is used in banking (loan documents, KYC files), pharmaceuticals (batch records, regulatory files), legal firms (case files, contracts), healthcare (patient records), government agencies, and manufacturing companies for compliance and operational efficiency."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can CannyRMS integrate with other systems?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. CannyRMS integrates with CannyECM (digital document management), CannyScan (document scanning), and other enterprise systems via REST APIs. It can also connect to existing ERP and HR systems."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is CannyRMS compliant with regulatory requirements?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, CannyRMS provides complete audit trails, role-based access control, approval workflows, and immutable logs that support regulatory compliance including FDA 21 CFR Part 11, ISO 15489 (Records Management), and data protection regulations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How many records can CannyRMS handle?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "CannyRMS is designed for enterprise scale. A single installation can manage 100,000+ cartons and millions of individual documents across multiple warehouse locations with no performance degradation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does CannyRMS support barcode scanning?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. CannyRMS generates barcode labels for locations (racks, shelves) and documents. During pickup and refiling, staff scan barcodes to instantly verify they have the correct document, reducing errors and ensuring accuracy."
                    }
                }
            ]
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
