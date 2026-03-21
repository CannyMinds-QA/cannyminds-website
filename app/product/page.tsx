import type { Metadata } from 'next';
import AllProductsShowcase from '@/components/solutions/AllProductsShowcase';
import { baseUrl, generateAlternates } from '@/lib/enhanced-seo';

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
        url: 'https://www.cannymindstech.com/product',
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
    alternates: generateAlternates('/product'),
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "CollectionPage",
            "name": "Enterprise Software Products | CannyMinds",
            "description": "Complete suite of enterprise software products for document management, HR, productivity tracking, and records management.",
            "url": `${baseUrl}/product`,
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
                        "item": {
                            "@type": "SoftwareApplication",
                            "name": "CannyECM",
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": "Cross-platform (On-Premise Deployment)",
                            "description": "Smart Content Management Software",
                            "url": `${baseUrl}/product/enterprise-content-management`
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "item": {
                            "@type": "SoftwareApplication",
                            "name": "CannyRMS",
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": "Cross-platform (On-Premise Deployment)",
                            "description": "Physical Records Management System",
                            "url": `${baseUrl}/product/physical-records-management`
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "item": {
                            "@type": "SoftwareApplication",
                            "name": "CannyScan",
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": "Cross-platform (On-Premise Deployment)",
                            "description": "Document Digitization & Scanning Solution",
                            "url": `${baseUrl}/product/scanning-solution`
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "item": {
                            "@type": "SoftwareApplication",
                            "name": "CannyTrack",
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": "Cross-platform (On-Premise Deployment)",
                            "description": "Employee Productivity Monitoring Software",
                            "url": `${baseUrl}/product/tracking-system`
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 5,
                        "item": {
                            "@type": "SoftwareApplication",
                            "name": "CannyHR",
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": "Cross-platform (On-Premise Deployment)",
                            "description": "HR & Payroll Management System",
                            "url": `${baseUrl}/product/hr-management`
                        }
                    },
                    {
                        "@type": "ListItem",
                        "position": 6,
                        "item": {
                            "@type": "SoftwareApplication",
                            "name": "CannyECM e-BMR",
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": "Cross-platform (On-Premise Deployment)",
                            "description": "Electronic Batch Manufacturing Record",
                            "url": `${baseUrl}/product/ebmr`
                        }
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
                    "name": "Products",
                    "item": "https://www.cannymindstech.com/product"
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
