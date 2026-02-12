import type { Metadata } from 'next'
import EcommerceSolutionsPage from './EcommerceClient'

export const metadata: Metadata = {
    title: 'AI for E-Commerce & Retail | Personalization & Automation',
    description: 'Boost sales with AI-driven product recommendations, automated content generation, and customer support. PCI DSS compliant.',
    alternates: {
        canonical: 'https://www.cannymindstech.com/ai-solutions/ecommerce',
    },
    openGraph: {
        title: 'Gen AI for E-Commerce & Retail | CannyMinds',
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

export default function Page() {
    return <EcommerceSolutionsPage />
}
