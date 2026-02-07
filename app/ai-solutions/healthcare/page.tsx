import { Metadata } from "next";
import HealthcareClient from "./HealthcareClient";

export const metadata: Metadata = {
    title: "Generative AI for Healthcare & Hospitals | CannyMinds",
    description:
        "Transform patient care with HIPAA-compliant Gen AI. Automate registration, billing, and clinical coding with enterprise-grade AI solutions.",
    keywords: [
        "Generative AI for Healthcare",
        "Gen AI for Hospitals",
        "Healthcare AI Automation",
        "Patient Registration AI",
        "Medical Billing Automation",
        "Clinical Coding AI",
        "HIPAA Compliant AI",
        "CannyMinds Healthcare Solutions",
    ],
    alternates: {
        canonical: "https://www.cannymindstech.com/ai-solutions/healthcare",
    },
    openGraph: {
        title: "Generative AI for Healthcare & Hospitals | CannyMinds",
        description:
            "Transform patient care with HIPAA-compliant Gen AI. Automate registration, billing, and clinical coding with enterprise-grade AI solutions.",
        url: "https://www.cannymindstech.com/ai-solutions/healthcare",
        type: "website",
        images: [
            {
                url: "/images/ai-solutions/healthcare-hero.jpg",
                width: 1200,
                height: 630,
                alt: "Generative AI for Healthcare Solutions",
            },
        ],
    },
};

export default function HealthcarePage() {
    return <HealthcareClient />;
}
