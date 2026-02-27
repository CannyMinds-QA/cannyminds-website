import type { Metadata } from 'next'
import ManufacturingSolutionsPage from './ManufacturingClient'
import { baseUrl } from '@/lib/enhanced-seo'

export const metadata: Metadata = {
    title: 'AI in Manufacturing & Automotive | Smart Factory Solutions',
    description: 'Transform manufacturing with AI-powered predictive maintenance, quality control, and safety monitoring. ISO & IATF compliant solutions.',
    alternates: {
        canonical: 'https://www.cannymindstech.com/ai-solutions/manufacturing',
    },
    openGraph: {
        title: 'AI in Manufacturing & Automotive | Smart Factory Solutions',
        description: 'Transform manufacturing with AI-powered predictive maintenance, quality control, and safety monitoring.',
        url: 'https://www.cannymindstech.com/ai-solutions/manufacturing',
        siteName: 'CannyMinds',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/ai-Solution/Gen AI for Manufacturing & Automotive/Gen AI for Manufacturing & Automotive.png',
                width: 1200,
                height: 630,
                alt: 'Gen AI for Manufacturing & Automotive',
            }
        ],
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "name": "AI in Manufacturing & Automotive | CannyMinds",
            "description": "Transform manufacturing with AI-powered predictive maintenance, quality control, and safety monitoring.",
            "url": `${baseUrl}/ai-solutions/manufacturing`,
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
                    "name": "Manufacturing AI Solutions"
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
            <ManufacturingSolutionsPage />
        </>
    );
}
