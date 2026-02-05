import type { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import AllProductsShowcase from '@/components/solutions/AllProductsShowcase';

export const metadata: Metadata = {
    title: 'All Solutions | Enterprise Software Products by CannyMinds',
    description: 'Explore all enterprise software solutions from CannyMinds: Document Management, HR, Scanning, Productivity Tracking, RMS, eBMR, and AI Automation. ISO-certified, FDA-compliant systems.',
    keywords: [
        'enterprise software solutions',
        'document management system',
        'HR management software',
        'scanning services',
        'productivity monitoring',
        'retail management system',
        'eBMR software',
        'AI automation',
        'CannyMinds products',
    ],
    openGraph: {
        title: 'All Solutions | Enterprise Software Products by CannyMinds',
        description: 'Explore all enterprise software solutions from CannyMinds. ISO-certified, FDA-compliant systems trusted by 500+ organizations globally.',
        url: 'https://www.cannymindstech.com/solutions',
        type: 'website',
    },
};

export default function AllSolutionsPage() {
    return (
        <>
            <Navigation />
            <AllProductsShowcase />
            <Footer />
        </>
    );
}
