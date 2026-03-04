import { Metadata } from 'next';
import { generateAlternates } from '@/lib/enhanced-seo';

export const metadata: Metadata = {
    title: 'Blog | CannyMinds Technology Solutions',
    description: 'Insights on enterprise content management and digital transformation.',
    alternates: generateAlternates('/blog'),
    openGraph: {
        title: 'Blog | CannyMinds Technology Solutions',
        description: 'Insights on enterprise content management and digital transformation.',
        url: 'https://www.cannymindstech.com/blog',
        type: 'website',
        siteName: 'CannyMinds',
        images: [{ url: 'https://www.cannymindstech.com/og-image.jpg', width: 1200, height: 630 }],
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
