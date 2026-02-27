import type { Metadata } from 'next'
import NBFCSolutionsPage from './NBFCClient'
import { baseUrl } from '@/lib/enhanced-seo'

export const metadata: Metadata = {
    title: 'AI for NBFCs & Fintech | Credit Scoring & Risk Management',
    description: 'Enhance credit assessment, automate loan processing, and ensure compliance for Non-Banking Financial Companies.',
    alternates: {
        canonical: 'https://www.cannymindstech.com/ai-solutions/nbfc',
    },
    openGraph: {
        title: 'AI for NBFCs & Fintech | Credit Scoring & Risk Management',
        description: 'Enhance credit assessment, automate loan processing, and ensure compliance with Generative AI for NBFC.',
        url: 'https://www.cannymindstech.com/ai-solutions/nbfc',
        siteName: 'CannyMinds',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/ai-Solution/Gen AI for Lending finance/Gen AI for Lending & NBFC Operations.png',
                width: 1200,
                height: 630,
                alt: 'Gen AI for Lending & NBFC Operations',
            }
        ],
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "name": "AI for NBFCs & Fintech | CannyMinds",
            "description": "Enhance credit assessment, automate loan processing, and ensure compliance for Non-Banking Financial Companies.",
            "url": `${baseUrl}/ai-solutions/nbfc`,
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
                    "name": "NBFC AI Solutions"
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
            <NBFCSolutionsPage />
        </>
    );
}
