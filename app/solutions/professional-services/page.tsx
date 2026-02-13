import { Metadata } from "next";
import Link from "next/link";

import {
    ArrowForward,
    Gavel,
    VerifiedUser,
    Security,
    Home,
    ChevronRight,
    FindInPage,
    Work,
    Balance,
    Lock,
} from "@mui/icons-material";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Professional Services Solutions | Legal & Audit Firms | CannyMinds",
    description: "Secure document management and compliance solutions for Law Firms, Audit Practices, and Consultancies. Ensure client confidentiality and regulatory alignment.",
    keywords: [
        "legal document management",
        "audit firm software",
        "professional services automation",
        "client portal for lawyers",
        "audit evidence management",
        "legal case management",
        "compliance software"
    ],
    alternates: {
        canonical: "https://www.cannymindstech.com/solutions/professional-services",
    },
    openGraph: {
        title: "Professional Services Solutions | CannyMinds",
        description: "Elevate your practice with secure, compliant, and efficient document workflows.",
        url: "https://www.cannymindstech.com/solutions/professional-services",
        images: [{ url: "https://www.cannymindstech.com/og-image.jpg", width: 1200, height: 630 }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Professional Services Solutions | CannyMinds",
    "description": "IT solutions for Legal and Audit firms focusing on document security and compliance.",
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

export default function ProfessionalServicesPage() {
    const subSolutions = [
        {
            title: "Legal Firms",
            description: "Case management, contract automation, and secure discovery.",
            href: "/solutions/professional-services/legal",
            icon: Gavel,
            features: ["Matter-centric Filing", "Court Deadline Tracking", "Discovery Management"]
        },
        {
            title: "Audit Firms",
            description: "Audit working papers, evidence control, and peer review readiness.",
            href: "/solutions/professional-services/audit-firms",
            icon: VerifiedUser,
            features: ["Engagement Files", "Evidence Linking", "Review Workflows"]
        }
    ];

    const benefits = [
        {
            title: "Client Confidentiality",
            description: "Bank-grade encryption and strict role-based access control to protect sensitive client data (Attorney-Client Privilege / NDA).",
            icon: Lock
        },
        {
            title: "Regulatory Compliance",
            description: "Stay aligned with Bar Council, ICAI, GDPR, and other regulatory frameworks automatically.",
            icon: Balance
        },
        {
            title: "Operational Efficiency",
            description: "Stop wasting billable hours searching for documents. Instant retrieval and automated workflows.",
            icon: Work
        }
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
                            <span className="text-gray-900 font-medium">Professional Services</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-700 text-slate-200 font-medium text-sm mb-6 border border-slate-600">
                                    <VerifiedUser sx={{ fontSize: 18 }} />
                                    Trusted by Professionals
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                    Secure Solutions for <br />
                                    <span className="text-blue-400">High-Trust</span> Industries
                                </h1>

                                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                    Whether you are arguing a case or auditing a balance sheet, your reputation relies on accuracy and confidentiality. CannyECM protects both.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="#solutions"
                                        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors inline-flex items-center gap-2 shadow-lg shadow-blue-900/50"
                                    >
                                        Explore Solutions
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                </div>
                            </div>

                            <div className="relative">
                                {/* Abstract representation of security/documents */}
                                <div className="aspect-[4/3] rounded-2xl bg-slate-800 border border-slate-700 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                                    <Security sx={{ fontSize: 80, color: '#60a5fa', marginBottom: 2 }} />
                                    <h3 className="text-2xl font-bold text-white mb-2">100% Audit Traceability</h3>
                                    <p className="text-slate-400">Every view. Every print. Every edit. Logged forever.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sub-Solutions Grid */}
                <section id="solutions" className="py-20 px-6 lg:px-12 -mt-10">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-8">
                            {subSolutions.map((solution, index) => (
                                <Link
                                    key={index}
                                    href={solution.href}
                                    className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex flex-col"
                                >
                                    <div className="w-14 h-14 bg-slate-100 rounded-[10px] flex items-center justify-center text-slate-700 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <solution.icon sx={{ fontSize: 32 }} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {solution.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                        {solution.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {solution.features.map((feature, i) => (
                                                <span key={i} className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full border border-gray-200">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                        <span className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                            View Solution <ArrowForward sx={{ fontSize: 18 }} />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Shared Benefits Section */}
                <section className="py-20 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                The CannyECM Advantage
                            </h2>
                            <p className="text-lg text-gray-600">
                                Built for professions where "good enough" isn't an option.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md text-blue-600 mb-6">
                                        <benefit.icon sx={{ fontSize: 32 }} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-6 lg:px-12 bg-white border-t border-gray-100">
                    <div className="container mx-auto text-center max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Ready to Modernize Your Practice?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Join forward-thinking firms that use CannyECM to attract better clients and talent.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                        >
                            Schedule a Consultation
                            <ArrowForward sx={{ fontSize: 20 }} />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
