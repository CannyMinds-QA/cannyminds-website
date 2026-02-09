import type { Metadata } from 'next'
import MarketingSolutionsPage from './MarketingClient'

export const metadata: Metadata = {
    title: 'Generative AI for Marketing | Content & Campaign Automation',
    description: 'Scale content creation, personalize campaigns, and optimize ad spend with our Gen AI marketing suite.',
    alternates: {
        canonical: 'https://cannyminds-website.vercel.app/ai-solutions/marketing',
    },
    openGraph: {
        title: 'Generative AI for Marketing | Content & Campaign Automation',
        description: 'Learn how CannyMinds AI automates marketing workflows, from content generation to campaign optimization.',
        url: 'https://cannyminds-website.vercel.app/ai-solutions/marketing',
    },
}

export default function Page() {
    return <MarketingSolutionsPage />
}
