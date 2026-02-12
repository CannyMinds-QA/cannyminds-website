import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import {
    ArrowForward,
    Gavel,
    VerifiedUser,
    Security,
    AssignmentTurnedIn,
    ReportProblem,
    Home,
    ChevronRight,
    FindInPage,
    History,
    Lock,
    Rule,
} from "@mui/icons-material";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Governance, Risk & Compliance (GRC) Solutions | CannyMinds",
    description: "Ensure regulatory compliance, automate audit trails, and manage operational risk with CannyECM. Built for RBI, IRDAI, GDPR, and ISO standards.",
    keywords: [
        "GRC software",
        "regulatory compliance management",
        "audit trail software",
        "risk management system",
        "RBI compliance software",
        "IRDAI reporting automation",
        "GDPR compliance tools",
        "legal document management"
    ],
    alternates: {
        canonical: "/solutions/finance/governance-compliance",
    },
    openGraph: {
        title: "Governance & Compliance Solutions",
        description: "Stay audit-ready, always. Automate compliance and mitigate risk with CannyECM.",
        images: [{ url: "/images/compliance-solutions-og.jpg", width: 1200, height: 630 }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Governance & Compliance Solutions | CannyMinds",
    "description": "GRC solutions for regulatory reporting, audit management, and risk mitigation.",
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

export default function GovernanceCompliancePage() {
    const challenges = [
        {
            title: "Changing Regulations",
            description: "Keeping up with frequent updates from RBI, IRDAI, and SEBI is a constant struggle for compliance teams.",
            icon: Gavel
        },
        {
            title: "Manual Audits",
            description: "Scrambling to find documents during an audit leads to stress, delays, and potential fines.",
            icon: FindInPage
        },
        {
            title: "Data Silos",
            description: "Risk data trapped in spreadsheets and emails makes it impossible to get a holistic view of exposure.",
            icon: ReportProblem
        },
        {
            title: "Lack of Accountability",
            description: "Without immutable logs, it's difficult to prove who accessed or modified sensitive financial records.",
            icon: History
        }
    ];

    const keyFeatures = [
        {
            title: "Regulatory Reporting Automation",
            description: "Auto-generate required reports for regulators. Map data fields directly to regulatory templates to ensure accuracy and timeliness.",
            icon: AssignmentTurnedIn,
            benefits: ["Zero manual errors", "On-time filing", "Traceable data lineage"]
        },
        {
            title: "Immutable Audit Trails",
            description: "Record every action—view, edit, print, download—on every document. Tamper-proof logs that stand up to forensic scrutiny.",
            icon: History,
            benefits: ["Forensic-ready logs", "User activity tracking", "Alerts on suspicious access"]
        },
        {
            title: "Policy & Procedure Management",
            description: "Centralize all SOPs and compliance policies. Track employee attestation to ensure everyone knows the rules.",
            icon: Rule,
            benefits: ["Version control", "Read receipts", "Quiz/Attestation support"]
        },
        {
            title: "Data Retention & Archival",
            description: "Automate retention schedules based on document type (e.g., keep loan docs for 7 years). Secure destruction after expiry.",
            icon: Lock,
            benefits: ["Compliance with data laws", "Reduced storage costs", "Legal hold capabilities"]
        }
    ];

    const benefits = [
        { benefit: "Audit Readiness", description: "Be ready for an audit at a moment's notice with organized, searchable records." },
        { benefit: "Risk Reduction", description: "Proactively identify and mitigate operational and compliance risks." },
        { benefit: "Cost Savings", description: "Avoid hefty non-compliance fines and reduce the cost of manual reporting." },
        { benefit: "Board Confidence", description: "Give leadership visibility into the organization's compliance posture." },
        { benefit: "Data Integrity", description: "Ensure that your financial records are accurate, complete, and unalterable." },
        { benefit: "Standardization", description: "Enforce consistent processes across all branches and departments." },
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
                            <span className="text-gray-900 font-medium">Governance & Compliance</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-slate-50 via-gray-50 to-white py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 text-slate-800 font-medium text-sm mb-6">
                                    <Gavel sx={{ fontSize: 18 }} />
                                    GRC & Audit
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Uncompromising Governance & Compliance
                                </h1>

                                <p className="text-xl font-semibold text-slate-600 mb-4">
                                    Navigate Regulations with Confidence.
                                </p>

                                <div className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    Simplify your compliance journey. From RBI reporting to ISO audits, CannyECM provides the tools you need to manage risk and demonstrate control.
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-900 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Speak to an Expert
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                </div>
                            </div>

                            <div className="relative">
                                <ImagePlaceholder className="aspect-[4/3] rounded-2xl bg-slate-100" text="Compliance Dashboard" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Challenges Section */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                The Compliance Burden
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Why manual compliance management is a high-stakes gamble.
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
                                CannyECM GRC Suite
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Automated controls for a regulated world.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {keyFeatures.map((feature, index) => (
                                <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-200 text-slate-700 mb-6">
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
                                                <p className="text-sm font-medium">Interface: {feature.title}</p>
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
                                Control Your Risk
                            </h2>
                            <p className="text-lg text-gray-600">
                                Make compliance a competitive advantage, not a cost center.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-6 hover:shadow-md transition-all">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Security className="text-slate-600" sx={{ fontSize: 28 }} />
                                        <h3 className="text-lg font-bold text-gray-900">{item.benefit}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 lg:px-12 bg-slate-900 text-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Is Your Organization Audit-Ready?
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            Don't wait for a finding to fix your compliance gaps.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                        >
                            Get a Compliance Assessment
                            <ArrowForward sx={{ fontSize: 20 }} />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
