import type { Metadata } from 'next'
import InsuranceSolutionsPage from './InsuranceClient'

export const metadata: Metadata = {
    title: 'AI for Insurance | Claims Processing & Fraud Detection',
    description: 'Automate claims, detect fraud, and enhance underwriting with Generative AI for insurance. SOC 2 and GDPR compliant.',
    alternates: {
        canonical: 'https://www.cannymindstech.com/ai-solutions/insurance',
    },
    openGraph: {
        title: 'AI for Insurance | Claims Processing & Fraud Detection',
        description: 'Discover how CannyMinds AI streamlines insurance operations, from claims processing to fraud detection.',
        url: 'https://www.cannymindstech.com/ai-solutions/insurance',
    },
}

export default function Page() {
    return <InsuranceSolutionsPage />
}
