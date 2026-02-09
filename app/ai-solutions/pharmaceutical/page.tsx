import { Metadata } from "next";
import PharmaClient from "./PharmaClient";

export const metadata: Metadata = {
    title: "Gen AI for Pharmaceutical Manufacturing & Quality | CannyMinds",
    description:
        "Accelerate compliance, quality, and time-to-market with FDA-compliant Generative AI. Automate eBMR, CAPA, and predictive maintenance.",
    keywords: [
        "Gen AI for Pharmaceutical",
        "Pharmaceutical Manufacturing AI",
        "eBMR Automation",
        "FDA Compliance AI",
        "Predictive Maintenance Pharma",
        "CAPA Intelligence",
        "Pharma Quality Inspection AI",
        "CannyMinds Pharma Solutions",
    ],
    alternates: {
        canonical: "https://cannyminds-website.vercel.app/ai-solutions/pharmaceutical",
    },
    openGraph: {
        title: "Gen AI for Pharmaceutical Manufacturing & Quality | CannyMinds",
        description:
            "Accelerate compliance, quality, and time-to-market with FDA-compliant Generative AI. Automate eBMR, CAPA, and predictive maintenance.",
        url: "https://cannyminds-website.vercel.app/ai-solutions/pharmaceutical",
        type: "website",
        images: [
            {
                url: "/images/ai-solutions/pharmaceutical-hero.jpg",
                width: 1200,
                height: 630,
                alt: "Gen AI for Pharmaceutical Manufacturing",
            },
        ],
    },
};

export default function PharmaPage() {
    return <PharmaClient />;
}
