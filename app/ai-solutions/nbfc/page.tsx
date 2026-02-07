import type { Metadata } from 'next'
import NBFCSolutionsPage from './NBFCClient'

export const metadata: Metadata = {
    title: 'AI for NBFCs & Fintech | Credit Scoring & Risk Management',
    description: 'Enhance credit assessment, automate loan processing, and ensure compliance for Non-Banking Financial Companies.',
    alternates: {
        canonical: 'https://www.cannymindstech.com/ai-solutions/nbfc',
    },
    openGraph: {
        title: 'AI for NBFCs & Fintech | Credit Scoring & Risk Management',
        description: 'See how CannyMinds AI improves credit scoring accuracy and risk management for NBFCs and Fintechs.',
        url: 'https://www.cannymindstech.com/ai-solutions/nbfc',
    },
}

export default function Page() {
    return <NBFCSolutionsPage />
}
