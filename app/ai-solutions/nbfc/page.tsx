import type { Metadata } from 'next'
import NBFCSolutionsPage from './NBFCClient'

export const metadata: Metadata = {
    title: 'AI for NBFCs & Fintech | Credit Scoring & Risk Management',
    description: 'Enhance credit assessment, automate loan processing, and ensure compliance for Non-Banking Financial Companies.',
    alternates: {
        canonical: 'https://www.cannymindstech.com/ai-solutions/nbfc',
    },
    openGraph: {
        title: 'Gen AI for Lending & NBFC Operations | CannyMinds',
        description: 'Enhance credit assessment, automate loan processing, and ensure compliance with Generative AI for NBFC.',
        url: 'https://www.cannymindstech.com/ai-solutions/nbfc',
        siteName: 'CannyMinds',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/ai-Solution/Gen AI for Lending finance/Gen AI for Lending & NBFC Operations.png',
                width: 1200,
                height: 630,
                alt: 'Gen AI for Lending & NBFC Operations',
            }
        ],
    },
}

export default function Page() {
    return <NBFCSolutionsPage />
}
