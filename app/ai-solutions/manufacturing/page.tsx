import type { Metadata } from 'next'
import ManufacturingSolutionsPage from './ManufacturingClient'

export const metadata: Metadata = {
    title: 'AI in Manufacturing & Automotive | Smart Factory Solutions',
    description: 'Transform manufacturing with AI-powered predictive maintenance, quality control, and safety monitoring. ISO & IATF compliant solutions.',
    alternates: {
        canonical: 'https://www.cannymindstech.com/ai-solutions/manufacturing',
    },
    openGraph: {
        title: 'Gen AI for Manufacturing & Automotive | CannyMinds',
        description: 'Transform manufacturing with AI-powered predictive maintenance, quality control, and safety monitoring.',
        url: 'https://www.cannymindstech.com/ai-solutions/manufacturing',
        siteName: 'CannyMinds',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/ai-Solution/Gen AI for Manufacturing & Automotive/Gen AI for Manufacturing & Automotive.png',
                width: 1200,
                height: 630,
                alt: 'Gen AI for Manufacturing & Automotive',
            }
        ],
    },
}

export default function Page() {
    return <ManufacturingSolutionsPage />
}
