import type { Metadata } from 'next'
import TextileSolutionsPage from './TextileClient'
import { baseUrl, generateAlternates } from '@/lib/enhanced-seo'

export const metadata: Metadata = {
    title: 'AI for Textile & Apparel | Design & Supply Chain',
    description: 'Optimize supply chains, predict trends, and automate quality inspection in textile manufacturing.',
    alternates: generateAlternates('/ai-solutions/textile'),
    openGraph: {
        title: 'AI for Textile & Apparel | Design & Supply Chain',
        description: 'Optimize supply chains, predict trends, and automate quality inspection with Generative AI for textile.',
        url: 'https://www.cannymindstech.com/ai-solutions/textile',
        siteName: 'CannyMinds',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/ai-Solution/Gen AI for Textile & Apparel Industry/Gen AI for Textile & Apparel Industry.png',
                width: 1200,
                height: 630,
                alt: 'Gen AI for Textile & Apparel Industry',
            }
        ],
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "name": "AI for Textile & Apparel | CannyMinds",
            "description": "Optimize supply chains, predict trends, and automate quality inspection in textile manufacturing.",
            "url": `${baseUrl}/ai-solutions/textile`,
            "author": {
                "@type": "Person",
                "name": "Udhayakumar Murunga",
                "jobTitle": "Chief Executive Officer",
                "url": "https://www.linkedin.com/in/udayakumar-murugan-732b3864/?originalSubdomain=in"
            },
            "publisher": {
                "@type": "Organization",
                "name": "CannyMinds Technology Solutions",
                "logo": {
                    "@type": "ImageObject",
                    "url": `${baseUrl}/logo.png`
                }
            },
            "datePublished": "2026-02-12",
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
                    "name": "Textile AI Solutions"
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
            <TextileSolutionsPage />
        </>
    );
}
