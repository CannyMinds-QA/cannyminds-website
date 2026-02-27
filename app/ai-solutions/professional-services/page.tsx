import type { Metadata } from 'next'
import ProfessionalServicesPage from './ProfessionalServicesClient'
import { baseUrl } from '@/lib/enhanced-seo'

export const metadata: Metadata = {
    title: 'AI for Professional Services | Legal & Consulting Automation',
    description: 'Streamline contract review, automate reports, and improve knowledge management for legal and consulting firms.',
    alternates: {
        canonical: 'https://www.cannymindstech.com/ai-solutions/professional-services',
    },
    openGraph: {
        title: 'AI for Professional Services | Legal & Consulting Automation',
        description: 'Streamline contract review, automate reports, and improve knowledge management in legal and consulting firms with Generative AI.',
        url: 'https://www.cannymindstech.com/ai-solutions/professional-services',
        siteName: 'CannyMinds',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/ai-Solution/Gen AI for Legal, Accounting & HR/Gen AI for Legal, Accounting & HR.png',
                width: 1200,
                height: 630,
                alt: 'Gen AI for Legal, Accounting & HR',
            }
        ],
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "name": "AI for Professional Services | CannyMinds",
            "description": "Streamline contract review, automate reports, and improve knowledge management for legal and consulting firms.",
            "url": `${baseUrl}/ai-solutions/professional-services`,
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
                    "name": "Professional Services AI Solutions"
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
            <ProfessionalServicesPage />
        </>
    );
}
