import type { Metadata } from 'next'
import RealEstateSolutionsPage from './RealEstateClient'

export const metadata: Metadata = {
    title: 'AI in Real Estate | Property Management & Valuation',
    description: 'Revolutionize property valuation, tenant screening, and lease management with predictive AI solutions.',
    alternates: {
        canonical: 'https://www.cannymindstech.com/ai-solutions/real-estate',
    },
    openGraph: {
        title: 'Gen AI for Real Estate & Construction | CannyMinds',
        description: 'Revolutionize property valuation, tenant screening, and lease management with Generative AI for real estate.',
        url: 'https://www.cannymindstech.com/ai-solutions/real-estate',
        siteName: 'CannyMinds',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/ai-Solution/Gen AI for Real Estate & Construction/Gen AI for Real Estate & Construction.png',
                width: 1200,
                height: 630,
                alt: 'Gen AI for Real Estate & Construction',
            }
        ],
    },
}

export default function Page() {
    return <RealEstateSolutionsPage />
}
