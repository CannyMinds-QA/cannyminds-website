import { Metadata } from "next";
import Link from "next/link";
import {
    ArrowForward,
    AccountBalance,
    Security,
    TrendingUp,
    Description,
    VerifiedUser,
    Gavel,
    Home,
    ChevronRight,
    Speed,
    Assessment,
    CloudSync,
} from "@mui/icons-material";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Finance & Insurance Solutions | Digital Transformation | CannyMinds",
    description: "Secure, compliant, and automated document management solutions for Banking, Financial Services, and Insurance (BFSI). Streamline loan processing, claims, and regulatory reporting.",
    keywords: [
        "banking document management software",
        "insurance claims automation",
        "finance digital transformation",
        "KYC automation software",
        "regulatory compliance software",
        "loan origination system",
        "fintech document solutions",
        "audit trail software for banks"
    ],
    alternates: {
        canonical: "/solutions/finance",
    },
    openGraph: {
        title: "Finance & Insurance Solutions | CannyMinds",
        description: "Modernize your financial operations with CannyECM. Secure, compliant, and automated workflows for the digital age.",
        images: [{ url: "/images/finance-solutions-og.jpg", width: 1200, height: 630 }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Finance & Insurance Solutions | CannyMinds",
    "description": "Digital transformation solutions for the financial sector including Banking, Insurance, and Compliance management.",
    "publisher": {
        "@type": "Organization",
        "name": "CannyMinds Technology Solutions",
        "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`
        }
    },
    "author": {
        "@type": "Organization",
        "name": "CannyMinds Technology Solutions"
    },
    "datePublished": new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0]
};

export default function FinanceSolutionsPage() {
    const subSolutions = [
        {
            title: "Banking Technology",
            description: "Accelerate loan processing, automate KYC/onboarding, and integrate with core banking systems for seamless operations.",
            href: "/solutions/finance/banking-technology",
            icon: AccountBalance,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Insurance Technology",
            description: "Streamline claims processing, policy administration, and underwriting with automated document workflows.",
            href: "/solutions/finance/insurance-technology",
            icon: Security,
            color: "text-indigo-600",
            bg: "bg-indigo-50"
        },
        {
            title: "Governance & Compliance",
            description: "Stay audit-ready with automated regulatory reporting, immutable audit trails, and strict data retention policies.",
            href: "/solutions/finance/governance-compliance",
            icon: Gavel,
            color: "text-slate-600",
            bg: "bg-slate-50"
        },
    ];

    const benefits = [
        {
            title: "Accelerated Turnaround",
            description: "Reduce loan and claim processing times from days to hours with automated workflows.",
            icon: Speed,
        },
        {
            title: "Regulatory Compliance",
            description: "Ensure adherence to RBI, IRDAI, and GDPR norms with built-in compliance controls.",
            icon: VerifiedUser,
        },
        {
            title: "360° Customer View",
            description: "Centralize all customer documents for a unified view, improving service and cross-selling.",
            icon: Assessment,
        },
        {
            title: "Operational Efficiency",
            description: "Eliminate manual data entry and paper handling to reduce operational costs.",
            icon: CloudSync,
        },
    ];

    return (
        <>
            <main className="min-h-screen bg-white">
                {/* JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {/* Breadcrumb */}
                <div className="bg-gray-50 border-b border-gray-200">
                    <div className="container mx-auto px-6 py-3">
                        <nav className="flex items-center gap-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-primary flex items-center gap-1">
                                <Home sx={{ fontSize: 16 }} />
                                Home
                            </Link>
                            <ChevronRight sx={{ fontSize: 16 }} className="text-gray-400" />
                            <span className="text-gray-900 font-medium">Finance Solutions</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
                                    <AccountBalance sx={{ fontSize: 18 }} />
                                    Finance & Insurance
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Secure Digital Transformation for Finance
                                </h1>

                                <p className="text-xl font-semibold text-blue-700 mb-4">
                                    Trust. Speed. Compliance.
                                </p>

                                <div className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    Modernize your legacy systems with CannyECM. We help banks, insurers, and fintechs securely digitize documents, automate complex workflows, and maintain strict regulatory compliance.
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Request Consultation
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                </div>
                            </div>

                            <div className="relative">
                                <ImagePlaceholder className="aspect-[4/3] rounded-2xl bg-blue-200" text="Finance Digital Transformation" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sub-Solutions Grid */}
                <section className="py-20 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Specialized Solutions for the Financial Sector
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Tailored workflows and document management for specific industry needs.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {subSolutions.map((solution, index) => (
                                <Link
                                    key={index}
                                    href={solution.href}
                                    className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-start"
                                >
                                    <div className={`w-14 h-14 rounded-[10px] ${solution.bg} ${solution.color} flex items-center justify-center mb-6`}>
                                        <solution.icon sx={{ fontSize: 32 }} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {solution.title}
                                    </h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        {solution.description}
                                    </p>
                                    <div className="mt-auto text-blue-600 font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                        Learn More <ArrowForward sx={{ fontSize: 18 }} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Why Leading Financial Institutions Choose CannyECM
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                We understand the unique challenges of the BFSI sector—security, scale, and speed.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                                    <benefit.icon className="text-blue-600 mb-4" sx={{ fontSize: 36 }} />
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 lg:px-12 bg-slate-900 text-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            Secure Your Future Today
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            Don't let legacy systems hold you back. Partner with CannyMinds for a secure, compliant, and efficient digital future.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                        >
                            Get Started
                            <ArrowForward sx={{ fontSize: 20 }} />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
