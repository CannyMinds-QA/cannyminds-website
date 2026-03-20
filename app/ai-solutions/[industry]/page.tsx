import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import IndustryClient from './IndustryClient';
import { baseUrl } from '@/lib/enhanced-seo';

// Industries handled only by this catch-all route (others have dedicated page.tsx files)
const CATCH_ALL_INDUSTRIES = ['legal', 'retail', 'supply-chain'] as const;

export function generateStaticParams() {
    return CATCH_ALL_INDUSTRIES.map((industry) => ({ industry }));
}

// Helper to format title case
const toTitleCase = (str: string) => {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

type Props = {
    params: Promise<{ industry: string }>; // Updated to Promise for Next.js 15
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { industry } = await params;

    // Specific titles for known industries
    const titles: Record<string, string> = {
        'legal': 'Generative AI for Legal Services | CannyMinds',
        'manufacturing': 'Generative AI for Manufacturing & Logistics | CannyMinds',
        'retail': 'Generative AI for Retail & E-Commerce | CannyMinds',
        'insurance': 'Generative AI for Insurance Operations | CannyMinds',
        'nbfc': 'Generative AI for NBFC & Lending | CannyMinds',
        'supply-chain': 'Generative AI for Supply Chain Management | CannyMinds',
        'real-estate': 'Generative AI for Real Estate | CannyMinds',
        'marketing': 'Generative AI for Marketing & content | CannyMinds',
        'professional-services': 'Generative AI for Professional Services | CannyMinds',
        'textile': 'Generative AI for Textile Industry | CannyMinds',
        'ecommerce': 'Generative AI for E-Commerce & Retail | CannyMinds',
    };

    const title = titles[industry] || `Generative AI for ${toTitleCase(industry)} | CannyMinds`;

    return {
        title,
        description: `Discover how CannyMinds uses Generative AI to transform ${toTitleCase(industry)} operations. Automate workflows, enhance decision-making, and drive efficiency with our enterprise AI solutions.`,
        alternates: {
            canonical: `https://www.cannymindstech.com/ai-solutions/${industry}`,
            languages: {
                'en': `https://www.cannymindstech.com/ai-solutions/${industry}`,
                'x-default': `https://www.cannymindstech.com/ai-solutions/${industry}`,
            },
        },
        openGraph: {
            title,
            description: `Discover how CannyMinds uses Generative AI to transform ${toTitleCase(industry)} operations.`,
            url: `https://www.cannymindstech.com/ai-solutions/${industry}`,
            type: 'website',
        }
    };
}

export default async function IndustryPage({ params }: Props) {
    const { industry } = await params;

    if (!CATCH_ALL_INDUSTRIES.includes(industry as typeof CATCH_ALL_INDUSTRIES[number])) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "name": `Generative AI for ${toTitleCase(industry)} | CannyMinds`,
                "description": `Transform ${toTitleCase(industry)} operations with AI automation, intelligent workflows, and data-driven insights.`,
                "url": `${baseUrl}/ai-solutions/${industry}`,
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
                        "name": `${toTitleCase(industry)} AI Solutions`
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <IndustryClient industrySlug={industry} />
        </>
    );
}
