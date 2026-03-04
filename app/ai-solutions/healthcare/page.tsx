import { Metadata } from "next";
import HealthcareClient from "./HealthcareClient";
import { baseUrl, generateAlternates } from '@/lib/enhanced-seo';

export const metadata: Metadata = {
    title: "Generative AI for Healthcare & Hospitals | CannyMinds",
    description:
        "Transform patient care with HIPAA-compliant Gen AI. Automate registration, billing, and clinical coding with enterprise-grade AI solutions.",
    keywords: [
        "Generative AI for Healthcare",
        "Gen AI for Hospitals",
        "Healthcare AI Automation",
        "Patient Registration AI",
        "Medical Billing Automation",
        "Clinical Coding AI",
        "HIPAA Compliant AI",
        "CannyMinds Healthcare Solutions",
    ],
    alternates: generateAlternates('/ai-solutions/healthcare'),
    openGraph: {
        title: "Generative AI for Healthcare & Hospitals | CannyMinds",
        description:
            "Transform patient care with HIPAA-compliant Gen AI. Automate registration, billing, and clinical coding with enterprise-grade AI solutions.",
        url: "https://www.cannymindstech.com/ai-solutions/healthcare",
        siteName: "CannyMinds",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/images/ai-Solution/healthcare/Gen AI for Healthcare & Hospitals.png",
                width: 1200,
                height: 630,
                alt: "Gen AI for Healthcare & Hospitals",
            },
        ],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "name": "Generative AI for Healthcare & Hospitals | CannyMinds",
            "description": "Transform patient care with HIPAA-compliant Gen AI. Automate registration, billing, and clinical coding.",
            "url": `${baseUrl}/ai-solutions/healthcare`,
            "publisher": {
                "@type": "Organization",
                "name": "CannyMinds Technology Solutions",
                "logo": {
                    "@type": "ImageObject",
                    "url": `${baseUrl}/logo.png`
                }
            },
            "datePublished": new Date().toISOString().split('T')[0],
            "dateModified": new Date().toISOString().split('T')[0]
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": `${baseUrl}/`
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "AI Solutions",
                    "item": `${baseUrl}/ai-solutions`
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Healthcare AI Solutions"
                }
            ]
        }
    ]
};

export default function HealthcarePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HealthcareClient />
        </>
    );
}
