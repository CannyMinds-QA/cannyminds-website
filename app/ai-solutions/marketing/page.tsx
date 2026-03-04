import type { Metadata } from 'next'
import MarketingSolutionsPage from './MarketingClient'
import { baseUrl, generateAlternates } from '@/lib/enhanced-seo'

export const metadata: Metadata = {
    title: 'Generative AI for Marketing',
    description: 'Scale content creation, personalize campaigns, and optimize ad spend with our Gen AI marketing suite.',
    alternates: generateAlternates('/ai-solutions/marketing'),
    openGraph: {
        title: 'Generative AI for Marketing',
        description: 'Scale content creation, personalize campaigns, and optimize ad spend with Generative AI for marketing.',
        url: 'https://www.cannymindstech.com/ai-solutions/marketing',
        siteName: 'CannyMinds',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/ai-Solution/Gen AI for Marketing & Creative/Gen AI for Marketing & Creative.png',
                width: 1200,
                height: 630,
                alt: 'Gen AI for Marketing & Creative',
            }
        ],
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "name": "Generative AI for Marketing | CannyMinds",
            "description": "Scale content creation, personalize campaigns, and optimize ad spend with our Gen AI marketing suite.",
            "url": `${baseUrl}/ai-solutions/marketing`,
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
                    "name": "Marketing AI Solutions"
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
            <MarketingSolutionsPage />
        </>
    );
}
