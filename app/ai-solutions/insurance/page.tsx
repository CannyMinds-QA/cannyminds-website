import type { Metadata } from 'next'
import InsuranceSolutionsPage from './InsuranceClient'

export const metadata: Metadata = {
    title: 'AI for Insurance | Claims Processing & Fraud Detection',
    description: 'Automate claims, detect fraud, and enhance underwriting with Generative AI for insurance. SOC 2 and GDPR compliant.',
    alternates: {
        canonical: 'https://www.cannymindstech.com/ai-solutions/insurance',
    },
    openGraph: {
        title: 'Gen AI for Insurance Operations | CannyMinds',
        description: 'Automate claims, detect fraud, and enhance underwriting with Generative AI for insurance.',
        url: 'https://www.cannymindstech.com/ai-solutions/insurance',
        siteName: 'CannyMinds',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/ai-Solution/Gen AI for Insurance Operations/Gen AI for Insurance Operations.png',
                width: 1200,
                height: 630,
                alt: 'Gen AI for Insurance Operations',
            }
        ],
    },
}

export default function Page() {
    return <InsuranceSolutionsPage />
}
