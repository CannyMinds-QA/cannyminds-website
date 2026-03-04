import type { Metadata } from 'next'
import EcommerceSolutionsPage from './EcommerceClient'
import { baseUrl, generateAlternates } from '@/lib/enhanced-seo'

export const metadata: Metadata = {
    title: 'AI for E-Commerce & Retail | Personalization & Automation',
    description: 'Boost sales with AI-driven product recommendations, automated content generation, and customer support. PCI DSS compliant.',
    alternates: generateAlternates('/ai-solutions/ecommerce'),
    openGraph: {
        title: 'AI for E-Commerce & Retail | Personalization & Automation',
        description: 'Boost sales with AI-driven product recommendations, automated content generation, and customer support with Generative AI.',
        url: 'https://www.cannymindstech.com/ai-solutions/ecommerce',
        siteName: 'CannyMinds',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/ai-Solution/Gen AI for E-Commerce & Retail/Gen AI for E-Commerce & Retail.png',
                width: 1200,
                height: 630,
                alt: 'Gen AI for E-Commerce & Retail',
            }
        ],
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "name": "AI for E-Commerce & Retail | CannyMinds",
            "description": "Boost sales with AI-driven product recommendations, automated content generation, and customer support.",
            "url": `${baseUrl}/ai-solutions/ecommerce`,
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
                    "name": "E-Commerce AI Solutions"
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
            <EcommerceSolutionsPage />
        </>
    );
}
