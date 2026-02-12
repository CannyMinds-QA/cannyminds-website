import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import {
    ArrowForward,
    Security,
    VerifiedUser,
    Speed,
    Assessment,
    Home,
    ChevronRight,
    Description,
    HealthAndSafety,
    Gavel,
    TrendingUp,
    SupportAgent,
    AssignmentLate,
} from "@mui/icons-material";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Insurance Technology Solutions | Claims Processing & Policy Management | CannyMinds",
    description: "Automate insurance claims processing, streamline policy administration, and detect fraud with CannyECM. Digital transformation for modern insurers.",
    keywords: [
        "insurance claims automation",
        "policy administration system",
        "insurance document management",
        "fraud detection software",
        "digital underwriting",
        "insurance workflow automation",
        "claims processing software",
        "insurtech solutions"
    ],
    alternates: {
        canonical: "/solutions/finance/insurance-technology",
    },
    openGraph: {
        title: "Insurance Technology Solutions",
        description: "Faster claims. Smarter underwriting. Better customer experiences.",
        images: [{ url: "/images/insurance-solutions-og.jpg", width: 1200, height: 630 }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Insurance Technology Solutions | CannyMinds",
    "description": "Digital insurance solutions for claims automation, policy management, and fraud detection.",
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

export default function InsuranceTechnologyPage() {
    const challenges = [
        {
            title: "Slow Claims Settlement",
            description: "Manual document verification delays payouts, frustrating customers during critical moments.",
            icon: Speed
        },
        {
            title: "Fraud Leakage",
            description: "A lack of integrated data checks makes it hard to detect suspicious claims and duplicate submissions.",
            icon: AssignmentLate
        },
        {
            title: "Policy Administration overhead",
            description: "Managing millions of policy documents, endorsements, and renewals manually is inefficient.",
            icon: Description
        },
        {
            title: "Regulatory Compliance",
            description: "Meeting IRDAI reporting standards requires accurate, timely data that manual systems cannot provide.",
            icon: Gavel
        }
    ];

    const keyFeatures = [
        {
            title: "Automated Claims Processing",
            description: "End-to-end digital workflow for claims. From First Notice of Loss (FNOL) to final settlement, automate document collection and assessment.",
            icon: HealthAndSafety,
            benefits: ["Instant claim registration", "AI-based damage assessment", "Faster payouts"]
        },
        {
            title: "Digital Policy Management",
            description: "Centralized repository for all policy documents. Generate, store, and retrieve policy schedules and endorsements instantly.",
            icon: Security,
            benefits: ["Zero paper handling", "Version control", "Customer self-service access"]
        },
        {
            title: "Underwriting Workflows",
            description: "Streamline risk assessment with automated data collection and rules-based underwriting decisions.",
            icon: Assessment,
            benefits: ["Consistent risk scoring", "Faster quote generation", "Reduced manual errors"]
        },
        {
            title: "Fraud Detection",
            description: "Integrate with external databases and use pattern matching to flag suspicious claims before payout.",
            icon: VerifiedUser,
            benefits: ["Reduced claims leakage", "Investigative case management", "ROI protection"]
        }
    ];

    const benefits = [
        { benefit: "Customer Trust", description: "Deliver settlements when customers need them most." },
        { benefit: "Operational Efficiency", description: "Reduce claims processing costs by up to 40%." },
        { benefit: "Risk Mitigation", description: "Better data means smarter underwriting and fraud prevention." },
        { benefit: "Agent Empowerment", description: "Give agents instant access to policy info and claim status." },
        { benefit: "Regulatory Compliance", description: "Automated reporting for IRDAI and other bodies." },
        { benefit: "Scalability", description: "Handle peak claim volumes (e.g., during disasters) seamlessly." },
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
                            <span className="text-gray-900 font-medium">Insurance Technology</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-indigo-50 via-purple-50 to-white py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-6">
                                    <Security sx={{ fontSize: 18 }} />
                                    InsurTech & Claims
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Intelligent Insurance Automation
                                </h1>

                                <p className="text-xl font-semibold text-indigo-600 mb-4">
                                    Claims. Policy. Compliance. Simplified.
                                </p>

                                <div className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    Transform your insurance operations with CannyECM. Deliver speed and transparency to your policyholders while reducing fraud and operational costs.
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Request Demo
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                </div>
                            </div>

                            <div className="relative">
                                <ImagePlaceholder className="aspect-[4/3] rounded-2xl bg-indigo-100" text="Insurance Digital Workflow" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Challenges Section */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Challenges in Insurance Operations
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                The gap between customer expectations and operational reality.
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
                                CannyECM for Insurers
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                A modern platform for the entire policy lifecycle.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {keyFeatures.map((feature, index) => (
                                <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 mb-6">
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
                                                <p className="text-sm font-medium">Visualization: {feature.title}</p>
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
                                Why Upgrade to Digital Insurance?
                            </h2>
                            <p className="text-lg text-gray-600">
                                Tangible benefits for insurers and customers alike.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-xl p-6 hover:shadow-md transition-all">
                                    <div className="flex items-center gap-3 mb-3">
                                        <TrendingUp className="text-indigo-600" sx={{ fontSize: 28 }} />
                                        <h3 className="text-lg font-bold text-gray-900">{item.benefit}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 lg:px-12 bg-indigo-900 text-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Transform Your Claims Process?
                        </h2>
                        <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
                            See how CannyECM can help you settle claims faster and with higher accuracy.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
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
