import type { Metadata } from 'next'
import RealEstateSolutionsPage from './RealEstateClient'
import { baseUrl, generateAlternates } from '@/lib/enhanced-seo'

export const metadata: Metadata = {
    title: 'AI in Real Estate | Property Management & Valuation',
    description: 'Revolutionize property valuation, tenant screening, and lease management with predictive AI solutions.',
    alternates: generateAlternates('/ai-solutions/real-estate'),
    openGraph: {
        title: 'AI in Real Estate | Property Management & Valuation',
        description: 'Revolutionize property valuation, tenant screening, and lease management with Generative AI for real estate.',
        url: 'https://www.cannymindstech.com/ai-solutions/real-estate',
        siteName: 'CannyMinds',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/ai-Solution/Gen AI for Real Estate & Construction/Gen AI for Real Estate & Construction.png',
                width: 1200,
                height: 630,
                alt: 'Gen AI for Real Estate & Construction',
            }
        ],
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "name": "AI in Real Estate | CannyMinds",
            "description": "Revolutionize property valuation, tenant screening, and lease management with predictive AI solutions.",
            "url": `${baseUrl}/ai-solutions/real-estate`,
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
                    "name": "Real Estate AI Solutions"
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
            <RealEstateSolutionsPage />
        </>
    );
}
