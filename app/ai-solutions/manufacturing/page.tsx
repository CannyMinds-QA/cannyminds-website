import type { Metadata } from 'next'
import ManufacturingSolutionsPage from './ManufacturingClient'

export const metadata: Metadata = {
    title: 'AI in Manufacturing & Automotive | Smart Factory Solutions',
    description: 'Transform manufacturing with AI-powered predictive maintenance, quality control, and safety monitoring. ISO & IATF compliant solutions.',
    alternates: {
        canonical: 'https://cannyminds-website.vercel.app/ai-solutions/manufacturing',
    },
    openGraph: {
        title: 'AI in Manufacturing & Automotive | Smart Factory Solutions',
        description: 'Detailed insights on how CannyMinds AI transforms manufacturing through predictive maintenance and automated quality control.',
        url: 'https://cannyminds-website.vercel.app/ai-solutions/manufacturing',
    },
}

export default function Page() {
    return <ManufacturingSolutionsPage />
}
