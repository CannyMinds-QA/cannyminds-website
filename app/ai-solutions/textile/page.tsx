import type { Metadata } from 'next'
import TextileSolutionsPage from './TextileClient'

export const metadata: Metadata = {
    title: 'AI for Textile & Apparel | Design & Supply Chain',
    description: 'Optimize supply chains, predict trends, and automate quality inspection in textile manufacturing.',
    alternates: {
        canonical: 'https://www.cannymindstech.com/ai-solutions/textile',
    },
    openGraph: {
        title: 'Gen AI for Textile & Apparel | CannyMinds',
        description: 'Optimize supply chains, predict trends, and automate quality inspection with Generative AI for textile.',
        url: 'https://www.cannymindstech.com/ai-solutions/textile',
        siteName: 'CannyMinds',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/ai-Solution/Gen AI for Textile & Apparel Industry/Gen AI for Textile & Apparel Industry.png',
                width: 1200,
                height: 630,
                alt: 'Gen AI for Textile & Apparel Industry',
            }
        ],
    },
}

export default function Page() {
    return <TextileSolutionsPage />
}
