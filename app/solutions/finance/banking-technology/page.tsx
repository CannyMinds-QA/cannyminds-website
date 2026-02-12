import { Metadata } from "next";
import Link from "next/link";

import {
    ArrowForward,
    AccountBalance,
    VerifiedUser,
    Speed,
    Security,
    Home,
    ChevronRight,
    CreditScore,
    GroupAdd,
    AssignmentTurnedIn,
    TrendingUp,
    Money,
    Savings,
} from "@mui/icons-material";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Banking Technology Solutions | Loan Processing & KYC Automation | CannyMinds",
    description: "Accelerate loan origination, automate KYC/onboarding, and streamline credit approvals with CannyECM. Secure, compliant banking workflow automation.",
    keywords: [
        "loan origination system",
        "banking document management",
        "digital kyc verification",
        "credit approval workflow",
        "core banking integration",
        "mortgage processing software",
        "customer onboarding automation",
        "retail banking solutions"
    ],
    alternates: {
        canonical: "/solutions/finance/banking-technology",
    },
    openGraph: {
        title: "Banking Technology Solutions",
        description: "Transform your banking operations. From instant account opening to automated loan approvals.",
        images: [{ url: "/images/banking-solutions-og.jpg", width: 1200, height: 630 }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Banking Technology Solutions | CannyMinds",
    "description": "Digital banking solutions for loan processing, KYC automation, and customer onboarding.",
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

export default function BankingTechnologyPage() {
    const challenges = [
        {
            title: "Slow Loan Processing",
            description: "Manual document collection and verification delays loan disbursals, leading to customer churn.",
            icon: Speed
        },
        {
            title: "High Operational Cost",
            description: "Physical file handling, storage, and retrieval consume significant staff time and office space.",
            icon: Money
        },
        {
            title: "Compliance Risks",
            description: "Inconsistent KYC checks and lack of audit trails expose banks to regulatory penalties.",
            icon: Security
        },
        {
            title: "Fragmented Customer Data",
            description: "Customer documents scattered across branches prevent a unified view for better service.",
            icon: GroupAdd
        }
    ];

    const keyFeatures = [
        {
            title: "Digital Loan Origination",
            description: "Automate the entire loan lifecycle from application to disbursal. Integrated document checklist, credit bureau checks, and sanction letter generation.",
            icon: CreditScore,
            benefits: ["Reduce TAT by 60%", "Paperless workflow", "Instant eligibility checks"]
        },
        {
            title: "Automated KYC & Onboarding",
            description: "Seamless digital onboarding with AI-powered ID verification and liveliness checks. Compliant with Video KYC norms.",
            icon: VerifiedUser,
            benefits: ["5-minute account opening", "Fraud prevention", "Enhanced customer experience"]
        },
        {
            title: "Centralized Document Repository",
            description: "A secure, searchable digital vault for all customer mandates, agreements, and collateral documents.",
            icon: AccountBalance,
            benefits: ["Instant retrieval", "Branch-level access control", "Secure archival"]
        },
        {
            title: "Credit Operation Workflows",
            description: "Streamline credit appraisal with multi-level approval hierarchies and automated deviation workflows.",
            icon: AssignmentTurnedIn,
            benefits: ["Standardized decisioning", "Full audit trail", "Faster credit memos"]
        }
    ];

    const benefits = [
        { benefit: "Faster Time-to-Money", description: "Disburse loans faster to capture market opportunities." },
        { benefit: "Reduced NPA Risk", description: "Better documentation and credit checks reduce bad loans." },
        { benefit: "Lower Cost of Operations", description: "Eliminate printing, courier, and storage costs." },
        { benefit: "Superior Customer Experience", description: "Offer instant, digital-first banking services." },
        { benefit: "Regulatory Compliance", description: "Always stay ahead of RBI guidelines." },
        { benefit: "Scalability", description: "Handle volume spikes without adding headcount." },
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
                            <Link href="/solutions/finance" className="hover:text-primary">
                                Finance Solutions
                            </Link>
                            <ChevronRight sx={{ fontSize: 16 }} className="text-gray-400" />
                            <span className="text-gray-900 font-medium">Banking Technology</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-blue-50 via-sky-50 to-white py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
                                    <Savings sx={{ fontSize: 18 }} />
                                    Banking & Lending
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Next-Gen Banking Technology
                                </h1>

                                <p className="text-xl font-semibold text-blue-600 mb-4">
                                    From Interaction to Transaction, Digitally.
                                </p>

                                <div className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    Empower your bank with intelligent workflows for Loan Origination, Account Opening, and Credit Operations. Deliver the speed your customers demand with the security regulators require.
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Request Demo
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                </div>
                            </div>

                            <div className="relative">
                                <ImagePlaceholder className="aspect-[4/3] rounded-2xl bg-blue-100" text="Digital Banking Workflow" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Challenges Section */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Challenges in Traditional Banking
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Legacy processes are slow, costly, and prone to error.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {challenges.map((challenge, index) => (
                                <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-500 mb-4">
                                        <challenge.icon sx={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{challenge.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{challenge.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Features Section */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                CannyECM for Banking
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                A comprehensive suite to digitize core banking operations.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {keyFeatures.map((feature, index) => (
                                <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-6">
                                            <feature.icon sx={{ fontSize: 24 }} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {feature.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {feature.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <VerifiedUser className="text-green-500 flex-shrink-0" sx={{ fontSize: 20 }} />
                                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                        <div className="aspect-video bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center p-8">
                                            <div className="text-center text-gray-400">
                                                <feature.icon sx={{ fontSize: 48, marginBottom: 2, opacity: 0.5 }} />
                                                <p className="text-sm font-medium">Screen: {feature.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Transform Your Bank
                            </h2>
                            <p className="text-lg text-gray-600">
                                Measurable impact across your organization.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6 hover:shadow-md transition-all">
                                    <div className="flex items-center gap-3 mb-3">
                                        <TrendingUp className="text-blue-600" sx={{ fontSize: 28 }} />
                                        <h3 className="text-lg font-bold text-gray-900">{item.benefit}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 lg:px-12 bg-blue-900 text-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Upgrade Your Banking Stack?
                        </h2>
                        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                            Join leading financial institutions in the digital revolution.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            Schedule a Demo
                            <ArrowForward sx={{ fontSize: 20 }} />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
