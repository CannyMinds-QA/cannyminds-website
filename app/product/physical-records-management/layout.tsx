import type { Metadata } from "next";
import { generateAlternates } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Physical Records Management System | CannyRMS 2026",
    description: "Physical records management system with 8-step workflow, barcode tracking, and complete audit trails. Enterprise solution to manage 100,000+ physical records with compliance-ready features. 30-day free trial.",
    keywords: [
        "physical records management system",
        "physical records management",
        "physical record management",
        "records management system",
        "physical document management",
        "records management software",
        "CannyRMS",
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
        title: "Physical Records Management System | CannyRMS 2026",
        description: "Physical records management system with 8-step workflow, barcode scanning, and approval workflows. Manage 100,000+ physical records with enterprise-grade compliance features.",
        type: "article",
        url: "https://www.cannymindstech.com/product/physical-records-management",
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
        title: "Physical Records Management System | CannyRMS",
        description: "Physical records management system with barcode tracking, workflow automation, and compliance-ready audit trails for enterprises.",
        images: ["/images/rms/cannyrms-dashboard.png"],
    },
    alternates: generateAlternates("/product/physical-records-management"),
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
                    "name": "Products",
                    "item": "https://www.cannymindstech.com/#products"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Physical Records Management"
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
                "@type": "Organization",
                "name": "CannyMinds Technology Solutions",
                "url": "https://www.cannymindstech.com"
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
            "dateModified": "2026-02-04",
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
            "offers": {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise Installation & Customization Service",
                    "description": "Full setup, configuration, and deployment of this software on client infrastructure."
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
