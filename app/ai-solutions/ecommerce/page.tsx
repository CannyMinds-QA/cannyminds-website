import type { Metadata } from 'next'
import EcommerceSolutionsPage from './EcommerceClient'

export const metadata: Metadata = {
    title: 'AI for E-Commerce & Retail | Personalization & Automation',
    description: 'Boost sales with AI-driven product recommendations, automated content generation, and customer support. PCI DSS compliant.',
    alternates: {
        canonical: 'https://www.cannymindstech.com/ai-solutions/ecommerce',
    },
    openGraph: {
        title: 'AI for E-Commerce & Retail | Personalization & Automation',
        description: 'Explore how CannyMinds AI revolutionizes e-commerce with personalization and automated operations.',
        url: 'https://www.cannymindstech.com/ai-solutions/ecommerce',
    },
}

export default function Page() {
    return <EcommerceSolutionsPage />
}
