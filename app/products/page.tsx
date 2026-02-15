import type { Metadata } from 'next';
import AllProductsShowcase from '@/components/solutions/AllProductsShowcase';
import { baseUrl } from '@/lib/enhanced-seo';

export const metadata: Metadata = {
    title: 'All Products | Enterprise Software by CannyMinds',
    description: 'Explore our complete suite of enterprise software products including CannyECM, CannyRMS, CannyScan, CannyTrack, and CannyHR. Built for scalability and compliance.',
    keywords: [
        'enterprise software',
        'CannyECM',
        'CannyRMS',
        'CannyScan',
        'CannyTrack',
        'CannyHR',
        'document management',
        'records management',
        'productivity tracking',
        'HRMS'
    ],
    openGraph: {
        title: 'All Products | Enterprise Software by CannyMinds',
        description: 'Explore our complete suite of enterprise software products. ISO-certified, FDA-compliant systems trusted by global organizations.',
        url: 'https://www.cannymindstech.com/products',
        type: 'website',
        siteName: 'CannyMinds',
        locale: 'en_US',
        images: [
            {
                url: 'https://www.cannymindstech.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'CannyMinds Enterprise Software Products',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'All Products | Enterprise Software by CannyMinds',
        description: 'Explore our complete suite of enterprise software products. ISO-certified, FDA-compliant systems trusted by global organizations.',
        images: ['https://www.cannymindstech.com/og-image.jpg'],
    },
    alternates: {
        canonical: 'https://www.cannymindstech.com/products',
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "CollectionPage",
            "name": "Enterprise Software Products | CannyMinds",
            "description": "Complete suite of enterprise software products for document management, HR, productivity tracking, and records management.",
            "url": `${baseUrl}/products`,
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
                        "@type": "SoftwareApplication",
                        "position": 1,
                        "name": "CannyECM",
                        "applicationCategory": "BusinessApplication",
                        "description": "Smart Content Management Software",
                        "url": `${baseUrl}/product/enterprise-content-management`
                    },
                    {
                        "@type": "SoftwareApplication",
                        "position": 2,
                        "name": "CannyRMS",
                        "applicationCategory": "BusinessApplication",
                        "description": "Physical Records Management System",
                        "url": `${baseUrl}/product/rms`
                    },
                    {
                        "@type": "SoftwareApplication",
                        "position": 3,
                        "name": "CannyScan",
                        "applicationCategory": "BusinessApplication",
                        "description": "Document Digitization & Scanning Solution",
                        "url": `${baseUrl}/product/scanning-solution`
                    },
                    {
                        "@type": "SoftwareApplication",
                        "position": 4,
                        "name": "CannyTrack",
                        "applicationCategory": "BusinessApplication",
                        "description": "Employee Productivity Monitoring Software",
                        "url": `${baseUrl}/product/tracking-system`
                    },
                    {
                        "@type": "SoftwareApplication",
                        "position": 5,
                        "name": "CannyHR",
                        "applicationCategory": "BusinessApplication",
                        "description": "HR & Payroll Management System",
                        "url": `${baseUrl}/product/hr-management`
                    },
                    {
                        "@type": "SoftwareApplication",
                        "position": 6,
                        "name": "CannyECM e-BMR",
                        "applicationCategory": "BusinessApplication",
                        "description": "Electronic Batch Manufacturing Record",
                        "url": `${baseUrl}/product/ebmr`
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
                    "name": "Products"
                }
            ]
        }
    ]
};

export default function AllProductsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main>
                <AllProductsShowcase />
            </main>
        </>
    );
}
