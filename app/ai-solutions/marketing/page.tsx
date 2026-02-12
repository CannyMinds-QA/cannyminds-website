import type { Metadata } from 'next'
import MarketingSolutionsPage from './MarketingClient'

export const metadata: Metadata = {
    title: 'Generative AI for Marketing | Content & Campaign Automation',
    description: 'Scale content creation, personalize campaigns, and optimize ad spend with our Gen AI marketing suite.',
    alternates: {
        canonical: 'https://www.cannymindstech.com/ai-solutions/marketing',
    },
    openGraph: {
        title: 'Gen AI for Marketing & Creative | CannyMinds',
        description: 'Scale content creation, personalize campaigns, and optimize ad spend with Generative AI for marketing.',
        url: 'https://www.cannymindstech.com/ai-solutions/marketing',
        siteName: 'CannyMinds',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/ai-Solution/Gen AI for Marketing & Creative/Gen AI for Marketing & Creative.png',
                width: 1200,
                height: 630,
                alt: 'Gen AI for Marketing & Creative',
            }
        ],
    },
}

export default function Page() {
    return <MarketingSolutionsPage />
}
