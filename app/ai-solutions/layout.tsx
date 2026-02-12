import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions & Generative AI for Enterprise | CannyMinds",
  description: "Industry-specific Generative AI solutions for Healthcare, Manufacturing, Finance, Insurance, and more. Transform your business with intelligent automation, document processing, and predictive analytics.",
  keywords: "generative AI, enterprise AI, AI automation, machine learning, document processing AI, healthcare AI, manufacturing AI, insurance AI, NBFC AI solutions, business intelligence",
  openGraph: {
    title: "AI Solutions & Generative AI for Enterprise | CannyMinds",
    description: "Industry-specific Generative AI solutions that automate processes, extract insights, and drive measurable ROI across your organization.",
    images: [{ url: "/images/ai-solutions-og.jpg", width: 1200, height: 630, alt: "CannyMinds AI Solutions" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions & Generative AI for Enterprise | CannyMinds",
    description: "Industry-specific Generative AI solutions that automate processes, extract insights, and drive measurable ROI.",
  },
  alternates: {
    canonical: "https://www.cannymindstech.com/ai-solutions",
  },
};

export default function AISolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
