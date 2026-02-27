import { Metadata } from "next";
import PharmaClient from "./PharmaClient";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Gen AI for Pharma Manufacturing | CannyMinds",
    description:
        "Accelerate compliance, quality, and time-to-market with FDA-compliant Generative AI. Automate eBMR, CAPA, and predictive maintenance.",
    keywords: [
        "Gen AI for Pharmaceutical",
        "Pharmaceutical Manufacturing AI",
        "eBMR Automation",
        "FDA Compliance AI",
        "Predictive Maintenance Pharma",
        "CAPA Intelligence",
        "Pharma Quality Inspection AI",
        "CannyMinds Pharma Solutions",
    ],
    alternates: {
        canonical: "https://www.cannymindstech.com/ai-solutions/pharmaceutical",
    },
    openGraph: {
        title: "Gen AI for Pharma Manufacturing | CannyMinds",
        description:
            "Accelerate compliance, quality, and time-to-market with FDA-compliant Generative AI. Automate eBMR, CAPA, and predictive maintenance.",
        url: "https://www.cannymindstech.com/ai-solutions/pharmaceutical",
        siteName: "CannyMinds",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/images/ai-Solution/Gen AI for Pharmaceutical Manufacturing/Gen AI for Pharmaceutical Manufacturing.png",
                width: 1200,
                height: 630,
                alt: "Gen AI for Pharmaceutical Manufacturing",
            },
        ],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "name": "Gen AI for Pharmaceutical Manufacturing & Quality | CannyMinds",
            "description": "Accelerate compliance, quality, and time-to-market with FDA-compliant Generative AI. Automate eBMR, CAPA, and predictive maintenance.",
            "url": `${baseUrl}/ai-solutions/pharmaceutical`,
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
                    "name": "Pharmaceutical AI Solutions"
                }
            ]
        }
    ]
};

export default function PharmaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PharmaClient />
        </>
    );
}
