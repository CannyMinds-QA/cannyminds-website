import type { Metadata } from 'next'
import TextileSolutionsPage from './TextileClient'

export const metadata: Metadata = {
    title: 'AI for Textile & Apparel | Design & Supply Chain',
    description: 'Optimize supply chains, predict trends, and automate quality inspection in textile manufacturing.',
    alternates: {
        canonical: 'https://www.cannymindstech.com/ai-solutions/textile',
    },
    openGraph: {
        title: 'AI for Textile & Apparel | Design & Supply Chain',
        description: 'See how CannyMinds AI enhances textile manufacturing with design automation and supply chain optimization.',
        url: 'https://www.cannymindstech.com/ai-solutions/textile',
    },
}

export default function Page() {
    return <TextileSolutionsPage />
}
