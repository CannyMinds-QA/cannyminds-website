import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import IndustryClient from './IndustryClient';

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
    return <IndustryClient industrySlug={industry} />;
}
