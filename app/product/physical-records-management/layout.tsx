
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
                "url": "https://www.cannymindstech.com"
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
                    "name": "CannyMinds Technology Solutions"
                }
            }
        }
    ]
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How does CannyRMS protect physical records from unauthorized access?",
            "acceptedAnswer": { "@type": "Answer", "text": "CannyRMS enforces security at the software level through role-based access control (RBAC) — users can only see and access records they are authorized for. Every action is logged with a timestamp, user ID, and geolocation (IP address), creating a tamper-evident audit trail. Multi-level approval workflows ensure no document is retrieved without manager sign-off, and configurable session timeouts prevent unauthorized access from unattended terminals." }
        },
        {
            "@type": "Question",
            "name": "What happens when a specific physical file needs to be retrieved urgently?",
            "acceptedAnswer": { "@type": "Answer", "text": "Clients can request file retrieval through our secure online portal. Utilizing barcode tracking, our team quickly locates the physical box and file. We offer physical delivery or 'Scan-on-Demand' where the document is digitized and sent securely within hours." }
        },
        {
            "@type": "Question",
            "name": "Why do large paper-driven firms experience severe chain of custody failures?",
            "acceptedAnswer": { "@type": "Answer", "text": "Without enforced barcode tracking, companies rely on emails or verbal requests to transfer files. When a file is misplaced, there is zero verifiable proof of who possessed it last, breaking the chain of custody and incurring severe legal exposure." }
        },
        {
            "@type": "Question",
            "name": "Can CannyRMS manage records across multiple physical warehouse locations?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, the system supports a centralized, multi-site architecture. You can map out several distinct warehouses, defining buildings, floors, racks, and shelves for each, providing a unified search interface across your entire physical footprint." }
        },
        {
            "@type": "Question",
            "name": "What are the consequences of failing to destroy physical records after their retention period ends?",
            "acceptedAnswer": { "@type": "Answer", "text": "Retaining documents longer than their legally mandated lifecycle exposes organizations to unnecessary discovery risks during litigation. If the opposing counsel subpoenas documents you were legally allowed to destroy years ago, you must still produce them." }
        },
        {
            "@type": "Question",
            "name": "Can physical records in CannyRMS be linked to digital documents in CannyECM?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. CannyRMS integrates with CannyECM to create a unified hybrid records management environment. A physical file stored in a warehouse can be linked to its scanned digital counterpart in CannyECM, giving users a single search interface to locate either the physical location or the digital version of any document." }
        },
        {
            "@type": "Question",
            "name": "How long does a typical CannyRMS implementation take?",
            "acceptedAnswer": { "@type": "Answer", "text": "A standard CannyRMS implementation — including warehouse mapping, barcode configuration, user role setup, and data migration via bulk Excel upload — typically takes 4 to 8 weeks depending on the volume of existing records and number of warehouse locations. Steril-Gene Life Sciences, for example, had 1 crore (10 million) documents fully catalogued and tracked within their project timeline." }
        },
        {
            "@type": "Question",
            "name": "Is there a mobile app for barcode scanning in the field?",
            "acceptedAnswer": { "@type": "Answer", "text": "CannyRMS supports barcode scanning via standard barcode scanners connected to workstations as well as mobile-compatible browser access for field retrieval and verification workflows. Staff can scan barcodes during document handover, refiling, and condition checks from any device with a browser connection to the system." }
        }
    ]
};

const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Retrieve a Physical Record Using CannyRMS",
    "description": "Step-by-step process for retrieving physical documents using CannyRMS barcode tracking system with full audit trail and manager approval.",
    "step": [
        { "@type": "HowToStep", "position": 1, "name": "Setup & Configuration", "text": "Map your physical warehouse with a 3-level barcode hierarchy: Carton (C001-C999), File (F0001-F9999), and Document (D00001-D99999). Configure user roles, approval levels, and location grids." },
        { "@type": "HowToStep", "position": 2, "name": "Inward Registration", "text": "Register incoming physical records by scanning barcodes at receipt. System logs the intake date, condition, location, and assigned custodian." },
        { "@type": "HowToStep", "position": 3, "name": "Search & Locate", "text": "Search by document name, barcode, date, or metadata. The system returns the exact warehouse shelf location within seconds." },
        { "@type": "HowToStep", "position": 4, "name": "Retrieval Request", "text": "Submit a retrieval request through the portal. The request is timestamped, assigned a tracking ID, and routed to the designated manager for approval." },
        { "@type": "HowToStep", "position": 5, "name": "Manager Approval", "text": "Authorized manager reviews and approves the request. Rejection with reason is also possible. All decisions are logged with user ID and timestamp." },
        { "@type": "HowToStep", "position": 6, "name": "Physical Verification", "text": "Staff locates the physical file at the confirmed shelf location. Barcode is scanned to verify the correct document before handover." },
        { "@type": "HowToStep", "position": 7, "name": "Handover & Dispatch", "text": "Document is handed over with a digital acknowledgement signature from the recipient. Delegate handover (collect on behalf) is supported with chain-of-custody logging." },
        { "@type": "HowToStep", "position": 8, "name": "Refiling", "text": "After use, the document is scanned back to its original location. The system updates location status and closes the retrieval cycle with a complete audit trail." }
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
            />
            {children}
        </>
    );
}
