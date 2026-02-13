import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import {
    ArrowForward,
    VerifiedUser,
    Security,
    Home,
    ChevronRight,
    Search,
    History,
    AssignmentTurnedIn,
    Groups,
    Lock,
    AccessTime,
    Topic,
    Rule,
    FactCheck
} from "@mui/icons-material";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Audit Management Software | CPA & Audit Firms | CannyMinds",
    description: "Streamline audit engagements with secure working papers, evidence management, and automated review workflows. Compliant with ICAI & International Standards.",
    keywords: [
        "audit documentation software",
        "audit working papers management",
        "audit evidence tool",
        "cpa firm software",
        "internal audit management system",
        "peer review documentation",
        "client portal for auditors"
    ],
    alternates: {
        canonical: "https://www.cannymindstech.com/solutions/professional-services/audit-firms",
    },
    openGraph: {
        title: "Audit Management Solutions | CannyMinds",
        description: "Ensure audit quality and compliance with structured, secure digital working papers.",
        type: 'website',
        siteName: 'CannyMinds',
        locale: 'en_US',
        images: [
            {
                url: "https://www.cannymindstech.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Audit Management Solutions"
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Audit Management Solutions | CannyMinds",
        description: "Ensure audit quality and compliance with structured, secure digital working papers.",
        images: ['https://www.cannymindstech.com/og-image.jpg'],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Audit Management Solutions | CannyMinds",
    "description": "Digital audit working papers and evidence management for audit firms.",
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

export default function AuditFirmsPage() {
    const challenges = [
        {
            title: "Scattered Evidence",
            description: "Evidence stored across emails, physical files, and laptops makes it impossible to verify audit conclusions.",
            icon: Search
        },
        {
            title: "Review Bottlenecks",
            description: "Manual review cycles delay audit sign-offs. Partners struggle to track the status of multiple engagements.",
            icon: AccessTime
        },
        {
            title: "Peer Review Risk",
            description: "Incomplete documentation and lack of version control lead to non-compliance during peer reviews.",
            icon: Rule
        },
        {
            title: "Data Security",
            description: "Storing sensitive client financial data on unsecured devices poses a massive liability risk.",
            icon: Lock
        }
    ];

    const keyFeatures = [
        {
            title: "Digital Working Papers",
            description: "Standardize your audit files. Link evidence directly to audit steps for a clear trail from planning to reporting.",
            icon: Topic,
            benefits: ["Standardized folder structures", "Cross-referencing", "Review notes tracking"],
            image: "/images/solutions/Quality%20Audits%20start%20with%20Quality%20Documentation/Digital%20Working%20Papers.png"
        },
        {
            title: "Evidence Management",
            description: "Centralize all audit evidence. Upload, tag, and secure client documents in a single, searchable repository.",
            icon: FactCheck,
            benefits: ["Support for all file types", "Version control", "Tamper-proof logs"],
            image: "/images/solutions/Quality%20Audits%20start%20with%20Quality%20Documentation/Evidence%20Management.png"
        },
        {
            title: "Client Collaboration Portal",
            description: "Request and receive PBC (Provided by Client) documents securely. Track outstanding items automatically.",
            icon: Groups,
            benefits: ["Automated reminders", "Secure upload link", "Audit trail of submissions"],
            image: "/images/solutions/Quality%20Audits%20start%20with%20Quality%20Documentation/Client%20Collaboration%20Portal.png"
        },
        {
            title: "Review & Sign-off",
            description: "Streamline the review process with digital stamps, review notes, and tiered approval workflows.",
            icon: AssignmentTurnedIn,
            benefits: ["Partner sign-off", "Review query management", "Dashboard visibility"],
            image: "/images/solutions/Quality%20Audits%20start%20with%20Quality%20Documentation/Review%20&%20Sign-off.png"
        }
    ];

    const benefits = [
        { benefit: "Audit Quality", description: "Ensure every engagement meets your firm's quality standards." },
        { benefit: "Compliance", description: "Ready for Peer Review, PCAOB, or NFRA inspections at any time." },
        { benefit: "Efficiency", description: "Roll forward recurring audits instantly. Stop reinventing the wheel." },
        { benefit: "Client Satisfaction", description: "A smoother, more organized audit experience for your clients." },
        { benefit: "Remote Auditing", description: "Audit from anywhere with secure cloud access to working papers." },
        { benefit: "Risk Management", description: "Enforce retention policies and access controls to protect firm liability." },
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
                            <Link href="/solutions/professional-services" className="hover:text-primary">
                                Professional Services
                            </Link>
                            <ChevronRight sx={{ fontSize: 16 }} className="text-gray-400" />
                            <span className="text-gray-900 font-medium">Audit Firms</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-blue-900 via-slate-900 to-black text-white py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-800 text-blue-100 font-medium text-sm mb-6 border border-blue-700">
                                    <VerifiedUser sx={{ fontSize: 18 }} />
                                    Audit & Assurance
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                    Quality Audits start with Quality Documentation
                                </h1>

                                <p className="text-xl font-semibold text-blue-200 mb-4">
                                    Compliance. Traceability. Efficiency.
                                </p>

                                <div className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                                    Move from scattered spreadsheets to a secure, integrated audit platform. CannyECM empowers your team to deliver high-quality audits with less friction.
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Request Demo
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                </div>
                            </div>

                            <div className="relative">
                                <Image
                                    src="/images/solutions/Quality%20Audits%20start%20with%20Quality%20Documentation/Quality%20Audits%20start%20with%20Quality%20Documentation.png"
                                    alt="Audit Management Dashboard"
                                    width={600}
                                    height={450}
                                    className="w-full h-auto object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Challenges Section */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                The Compliance Challenge
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                In an era of stricter regulation, manual documentation is a liability.
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
                                Built for Auditors
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Features that align with your methodology and standards.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {keyFeatures.map((feature, index) => (
                                <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-800 mb-6">
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
                                        <div className="relative">
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                width={600}
                                                height={450}
                                                className="w-full h-auto object-contain"
                                            />
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
                                Why Firms Choose CannyECM
                            </h2>
                            <p className="text-lg text-gray-600">
                                More than just storage—it's your audit engine.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-blue-50 to-white border border-blue-50 rounded-xl p-6 hover:shadow-md transition-all">
                                    <div className="flex items-center gap-3 mb-3">
                                        <VerifiedUser className="text-blue-600" sx={{ fontSize: 28 }} />
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
                            Ready for Your Next Peer Review?
                        </h2>
                        <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
                            Ensure your documentation is always audit-ready with CannyECM.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
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
