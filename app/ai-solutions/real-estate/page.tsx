import type { Metadata } from 'next'
import RealEstateSolutionsPage from './RealEstateClient'

export const metadata: Metadata = {
    title: 'AI in Real Estate | Property Management & Valuation',
    description: 'Revolutionize property valuation, tenant screening, and lease management with predictive AI solutions.',
    alternates: {
        canonical: 'https://www.cannymindstech.com/ai-solutions/real-estate',
    },
    openGraph: {
        title: 'AI in Real Estate | Property Management & Valuation',
        description: 'Explore CannyMinds AI solutions for real estate, including automated valuation and tenant screening.',
        url: 'https://www.cannymindstech.com/ai-solutions/real-estate',
    },
}

export default function Page() {
    return <RealEstateSolutionsPage />
}
