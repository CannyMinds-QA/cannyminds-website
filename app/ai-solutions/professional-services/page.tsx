import type { Metadata } from 'next'
import ProfessionalServicesPage from './ProfessionalServicesClient'

export const metadata: Metadata = {
    title: 'AI for Professional Services | Legal & Consulting Automation',
    description: 'Streamline contract review, automate reports, and improve knowledge management for legal and consulting firms.',
    alternates: {
        canonical: 'https://www.cannymindstech.com/ai-solutions/professional-services',
    },
    openGraph: {
        title: 'Gen AI for Legal, Accounting & HR | CannyMinds',
        description: 'Streamline contract review, automate reports, and improve knowledge management in legal and consulting firms with Generative AI.',
        url: 'https://www.cannymindstech.com/ai-solutions/professional-services',
        siteName: 'CannyMinds',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/images/ai-Solution/Gen AI for Legal, Accounting & HR/Gen AI for Legal, Accounting & HR.png',
                width: 1200,
                height: 630,
                alt: 'Gen AI for Legal, Accounting & HR',
            }
        ],
    },
}

export default function Page() {
    return <ProfessionalServicesPage />
}
