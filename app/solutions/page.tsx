import type { Metadata } from 'next';
import AllIndustriesShowcase from '@/components/solutions/AllIndustriesShowcase';
import { baseUrl, generateAlternates } from '@/lib/enhanced-seo';

export const metadata: Metadata = {
    title: 'Industry Solutions | CannyMinds',
    description: 'Explore tailored software solutions for Pharmaceutical, Manufacturing, Healthcare, Finance, and more. ISO-certified compliance.',
    keywords: [
        'industry solutions',
        'pharmaceutical software',
        'manufacturing automation',
        'healthcare it solutions',
        'financial technology',
        'legal tech',
        'cannyminds industries'
    ],
    openGraph: {
        title: 'Industry Solutions | CannyMinds',
        description: 'Explore tailored software solutions for Pharmaceutical, Manufacturing, Healthcare, Finance, and more.',
        url: 'https://www.cannymindstech.com/solutions',
        type: 'website',
        siteName: 'CannyMinds',
        locale: 'en_US',
        images: [
            {
                url: 'https://www.cannymindstech.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'CannyMinds Industry Solutions',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Industry Solutions | CannyMinds',
        description: 'Explore tailored software solutions for Pharmaceutical, Manufacturing, Healthcare, Finance, and more.',
        images: ['https://www.cannymindstech.com/og-image.jpg'],
    },
    alternates: generateAlternates('/solutions'),
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "CollectionPage",
            "name": "Industry Solutions | CannyMinds",
            "description": "Explore tailored software solutions for Pharmaceutical, Manufacturing, Healthcare, Finance, and Professional Services.",
            "url": `${baseUrl}/solutions`,
            "publisher": {
                "@type": "Organization",
                "name": "CannyMinds Technology Solutions",
                "logo": {
                    "@type": "ImageObject",
                    "url": `${baseUrl}/logo.png`
                }
            },
            "about": {
                "@type": "ItemList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Healthcare Solutions",
                        "url": `${baseUrl}/solutions/healthcare`
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Finance Solutions",
                        "url": `${baseUrl}/solutions/finance`
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Manufacturing Solutions",
                        "url": `${baseUrl}/solutions/manufacturing`
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": "Pharmaceutical Solutions",
                        "url": `${baseUrl}/solutions/pharmaceutical`
                    },
                    {
                        "@type": "ListItem",
                        "position": 5,
                        "name": "Professional Services Solutions",
                        "url": `${baseUrl}/solutions/professional-services`
                    }
                ]
            }
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
                    "name": "Solutions"
                }
            ]
        }
    ]
};

export default function AllSolutionsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main>
                <AllIndustriesShowcase />
            </main>
        </>
    );
}
