import type { Metadata } from 'next';
import AllIndustriesShowcase from '@/components/solutions/AllIndustriesShowcase';

export const metadata: Metadata = {
    title: 'Industry Solutions | CannyMinds',
    description: 'Explore tailored software solutions for Pharmaceutical, Manufacturing, Healthcare, Finance, and more. ISO-certified compliance and automation.',
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
    },
    alternates: {
        canonical: 'https://www.cannymindstech.com/solutions',
    },
};

export default function AllSolutionsPage() {
    return (
        <main>
            <AllIndustriesShowcase />
        </main>
    );
}
