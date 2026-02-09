import type { Metadata } from 'next'
import ProfessionalServicesPage from './ProfessionalServicesClient'

export const metadata: Metadata = {
    title: 'AI for Professional Services | Legal & Consulting Automation',
    description: 'Streamline contract review, automate reports, and improve knowledge management for legal and consulting firms.',
    alternates: {
        canonical: 'https://cannyminds-website.vercel.app/ai-solutions/professional-services',
    },
    openGraph: {
        title: 'AI for Professional Services | Legal & Consulting Automation',
        description: 'Discover AI solutions tailored for professional services, enhancing efficiency in legal and consulting operations.',
        url: 'https://cannyminds-website.vercel.app/ai-solutions/professional-services',
    },
}

export default function Page() {
    return <ProfessionalServicesPage />
}
