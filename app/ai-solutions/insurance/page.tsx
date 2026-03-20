import type { Metadata } from 'next'
import InsuranceSolutionsPage from './InsuranceClient'
import { baseUrl, generateAlternates } from '@/lib/enhanced-seo'

export const metadata: Metadata = {
    title: 'AI for Insurance | Claims Processing & Fraud Detection',
    description: 'Automate claims, detect fraud, and enhance underwriting with Generative AI for insurance. SOC 2 and GDPR compliant.',
    alternates: generateAlternates('/ai-solutions/insurance'),
    openGraph: {
        title: 'AI for Insurance | Claims Processing & Fraud Detection',
        description: 'Automate claims, detect fraud, and enhance underwriting with Generative AI for insurance.',
        url: 'https://www.cannymindstech.com/ai-solutions/insurance',
        siteName: 'CannyMinds',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/ai-Solution/Gen AI for Insurance Operations/Gen AI for Insurance Operations.png',
                width: 1200,
                height: 630,
                alt: 'Gen AI for Insurance Operations',
            }
        ],
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "name": "AI for Insurance | CannyMinds",
            "description": "Automate claims, detect fraud, and enhance underwriting with Generative AI for insurance.",
            "url": `${baseUrl}/ai-solutions/insurance`,
            "publisher": {
                "@type": "Organization",
                "name": "CannyMinds Technology Solutions",
                "logo": {
                    "@type": "ImageObject",
                    "url": `${baseUrl}/logo.png`
                }
            },
            "datePublished": "2025-01-01",
            "dateModified": "2025-01-01"
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
                    "name": "Insurance AI Solutions"
                }
            ]
        }
    ]
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <InsuranceSolutionsPage />
        </>
    );
}
