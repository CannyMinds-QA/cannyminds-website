import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import {
    ArrowForward,
    CheckCircle,
    BugReport,
    Visibility,
    Science,
    TrendingUp,
    Security,
    Home,
    ChevronRight,
    Warning,
    Lightbulb,
    Assessment,
} from "@mui/icons-material";
import Image from "next/image";
import BookDownloadCard from "@/components/pharmaceutical/BookDownloadCard";

export const metadata: Metadata = {
    title: "Quality Inspection & CAPA Management",
    description: "AI-driven visual inspection and automated CAPA management for pharma. Improve defect detection and reduce deviations with FDA-compliant systems.",
    keywords: [
        "pharmaceutical quality inspection",
        "automated CAPA management",
        "visual inspection AI",
        "deviation management pharma",
        "lab data management system",
        "LIMS integration",
        "quality control automation",
        "GMP quality compliance",
    ],
    alternates: {
        canonical: "https://www.cannymindstech.com/solutions/pharmaceutical/quality-inspection-capa",
    },
    openGraph: {
        title: "Quality Inspection & CAPA",
        description: "Ensure consistent quality with AI-powered inspection and automated CAPA workflows.",
        type: 'website',
        siteName: 'CannyMinds',
        locale: 'en_US',
        images: [
            {
                url: "https://www.cannymindstech.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Quality Inspection & CAPA Solutions"
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Quality Inspection & CAPA",
        description: "Ensure consistent quality with AI-powered inspection and automated CAPA workflows.",
        images: ['https://www.cannymindstech.com/og-image.jpg'],
    },
};

import { baseUrl } from "@/lib/enhanced-seo";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Quality Inspection & CAPA | CannyMinds",
    "description": "AI-driven quality control solutions including visual inspection, CAPA management, and lab data integration.",
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

export default function QualityInspectionCapaPage() {
    const challenges = [
        {
            challenge: "Time-consuming Quality Inspections",
            impact: "Production bottlenecks and human error variability in visual inspection.",
        },
        {
            challenge: "Inconsistent Deviation Identification",
            impact: "Reactive quality management and recurring issues that should have been prevented.",
        },
        {
            challenge: "Manual CAPA Processes",
            impact: "Slow root cause analysis, ineffective corrective actions, and repeat deviations.",
        },
        {
            challenge: "Scattered Laboratory Data",
            impact: "Lab data across instruments and paper records makes trend analysis difficult.",
        },
    ];

    const qualityInspectionFeatures = [
        "Computer vision checks for defects (cracks, color variations, fill levels)",
        "Real-time defect detection and automatic categorization",
        "24/7 automated visual inspection without fatigue",
        "Consistent quality standards application across all batches",
        "Detailed defect trending data and analytics",
        "Integration with production line systems",
    ];

    const capaFeatures = [
        "AI-assisted deviation intake and auto-classification (Critical/Major/Minor)",
        "Raise deviation against SOP/STP with evidence and photo attachments",
        "Generative AI analysis of deviation patterns across batches",
        "AI-suggested root cause analysis based on historical data",
        "Automated tracking of CAPA closure with effectiveness monitoring",
        "Trend analysis across product lines and equipment types",
        "Root cause tracking with approval/closure workflow",
    ];

    const labDataFeatures = [
        "Intelligent extraction from LIMS and laboratory instruments",
        "Automated OOS (Out of Specification) flagging and alerts",
        "Real-time trend monitoring across test parameters",
        "Paperless lab operations integration",
        "Full data traceability from sample to result",
    ];

    const deviationFeatures = [
        "Raise deviation against SOP/STP documents",
        "Attach evidence and photos for investigation",
        "Root cause tracking with structured workflows",
        "Approval/closure workflow with electronic signatures",
        "Integration with CAPA processes for corrective actions",
    ];

    const qmsFeatures = [
        "Document control integration for controlled documents",
        "Change control integration for process changes",
        "Training records management and compliance tracking",
        "CAPA tracking support with effectiveness monitoring",
        "Audit tracking and findings management",
    ];

    const stats = [
        { value: "99.5%", label: "Defect Detection Accuracy" },
        { value: "50%", label: "Reduction in Recurring Deviations" },
        { value: "35-50%", label: "Faster Investigation Cycle" },
        { value: "Zero", label: "Human Fatigue Errors" },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center pt-16 pb-12 bg-gradient-to-b from-green-50 to-white">
                    <div className="absolute inset-0 opacity-5">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                                backgroundSize: "40px 40px",
                            }}
                        />
                    </div>

                    <div className="container mx-auto px-6 lg:px-12 relative z-10">
                        {/* Breadcrumbs */}
                        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
                            <Link href="/" className="hover:text-primary flex items-center gap-1">
                                <Home sx={{ fontSize: 16 }} />
                                Home
                            </Link>
                            <ChevronRight sx={{ fontSize: 16 }} className="text-gray-400" />
                            <Link href="/solutions" className="hover:text-primary">
                                Solutions
                            </Link>
                            <ChevronRight sx={{ fontSize: 16 }} className="text-gray-400" />
                            <Link href="/solutions/pharmaceutical" className="hover:text-primary">
                                Pharmaceutical
                            </Link>
                            <ChevronRight sx={{ fontSize: 16 }} className="text-gray-400" />
                            <span className="text-gray-900 font-medium">Quality Inspection & CAPA</span>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="max-w-4xl">
                                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                    <BugReport sx={{ fontSize: 18 }} />
                                    Quality AI
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Quality Inspection & CAPA Management
                                </h1>

                                <div className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    Transform quality management with AI-powered visual inspection, intelligent deviation analysis, and automated CAPA processes. Achieve 99.5% defect detection accuracy while reducing recurring deviations by 50%.
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Request Demo
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                    <Link
                                        href="/solutions/pharmaceutical/regulatory-compliance"
                                        className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-green-600 hover:text-green-600 transition-colors"
                                    >
                                        View Regulatory Solutions
                                    </Link>
                                </div>
                            </div>
                            <div className="relative flex justify-center">
                                <Image
                                    src="/images/solutions/Pharma/quality-inspection-capa/Quality-Inspection-CAPA-Management.png"
                                    alt="Quality Inspection & CAPA Management"
                                    width={600}
                                    height={450}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-8 bg-green-600">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                            {stats.map((item, idx) => (
                                <div key={idx}>
                                    <div className="text-3xl font-bold mb-1">{item.value}</div>
                                    <div className="text-green-200 text-sm">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Book Download Sidebar - Fixed on right side */}
                <div className="hidden xl:block fixed right-4 top-32 w-52 z-40">
                    <BookDownloadCard />
                </div>

                {/* Challenges Section */}
                <section className="py-12 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-5xl">
                        <div className="flex items-center gap-3 mb-8 justify-center">
                            <Warning className="text-orange-600" sx={{ fontSize: 28 }} />
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Key Quality Challenges
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {challenges.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-200 transition-all"
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="text-orange-500 font-bold text-lg">{idx + 1}.</span>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-2">{item.challenge}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                <span className="text-orange-600 font-medium">Impact:</span> {item.impact}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quality Inspection Section */}
                <section className="py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                                        <Visibility sx={{ fontSize: 28 }} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                            Quality Inspection Automation
                                        </h2>
                                        <p className="text-gray-500">Computer Vision for Consistent Quality</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Lightbulb className="text-yellow-500" sx={{ fontSize: 20 }} />
                                        <span className="font-semibold text-gray-700">Scenario</span>
                                    </div>
                                    <p className="text-gray-600">
                                        Visual inspection of tablets, vials, and packaging relies on subjective human judgment and is prone to fatigue. Inspectors working long shifts experience decreased accuracy, leading to inconsistent defect detection and quality escapes.
                                    </p>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Our computer vision solution provides 24/7 automated inspection without fatigue. Quality images and inspection records are stored through our <Link href="/product/scanning-solution" className="text-primary hover:underline font-medium">digitization services</Link>, creating a complete visual quality history for each batch.
                                </p>

                                <ul className="space-y-3">
                                    {qualityInspectionFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                                <div className="flex justify-center mb-8">
                                    <Image
                                        src="/images/solutions/Pharma/quality-inspection-capa/Quality-Inspection-Automation.png"
                                        alt="Visual Inspection Dashboard"
                                        width={800}
                                        height={450}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <TrendingUp className="text-green-600" />
                                    Inspection Impact
                                </h3>

                                <div className="space-y-6">
                                    <div className="bg-white rounded-xl p-5 border border-gray-200">
                                        <div className="text-3xl font-bold text-green-600 mb-1">99.5%</div>
                                        <div className="text-gray-700 font-medium">Defect Detection Accuracy</div>
                                        <p className="text-gray-500 text-sm mt-2">Consistent detection across all inspection points</p>
                                    </div>

                                    <div className="bg-white rounded-xl p-5 border border-gray-200">
                                        <div className="text-3xl font-bold text-green-600 mb-1">Zero</div>
                                        <div className="text-gray-700 font-medium">Human Fatigue Errors</div>
                                        <p className="text-gray-500 text-sm mt-2">24/7 automated inspection without performance degradation</p>
                                    </div>

                                    <div className="bg-white rounded-xl p-5 border border-gray-200">
                                        <div className="text-3xl font-bold text-green-600 mb-1">Complete</div>
                                        <div className="text-gray-700 font-medium">Defect Trending Data</div>
                                        <p className="text-gray-500 text-sm mt-2">Analytics for continuous quality improvement</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CAPA Section */}
                <section className="py-12 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
                                <div className="flex justify-center mb-8">
                                    <Image
                                        src="/images/solutions/Pharma/quality-inspection-capa/CAPA-Management-Intelligence.png"
                                        alt="Deviation & CAPA Analytics"
                                        width={800}
                                        height={450}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <TrendingUp className="text-purple-600" />
                                    CAPA Intelligence
                                </h3>

                                <div className="space-y-6">
                                    <div className="bg-white rounded-xl p-5 border border-gray-200">
                                        <div className="text-3xl font-bold text-purple-600 mb-1">50%</div>
                                        <div className="text-gray-700 font-medium">Reduction in Recurring Deviations</div>
                                        <p className="text-gray-500 text-sm mt-2">AI identifies patterns humans miss</p>
                                    </div>

                                    <div className="bg-white rounded-xl p-5 border border-gray-200">
                                        <div className="text-3xl font-bold text-purple-600 mb-1">35-50%</div>
                                        <div className="text-gray-700 font-medium">Faster Investigation Cycle</div>
                                        <p className="text-gray-500 text-sm mt-2">Automated summarization and root cause suggestions</p>
                                    </div>

                                    <div className="bg-white rounded-xl p-5 border border-gray-200">
                                        <div className="text-3xl font-bold text-purple-600 mb-1">Improved</div>
                                        <div className="text-gray-700 font-medium">CAPA Effectiveness</div>
                                        <p className="text-gray-500 text-sm mt-2">Stronger inspection readiness for regulatory bodies</p>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                                        <BugReport sx={{ fontSize: 28 }} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                            CAPA Management Intelligence
                                        </h2>
                                        <p className="text-gray-500">GenAI-Powered Deviation & CAPA</p>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl mb-6 border border-gray-200">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Lightbulb className="text-yellow-500" sx={{ fontSize: 20 }} />
                                        <span className="font-semibold text-gray-700">Scenario</span>
                                    </div>
                                    <p className="text-gray-600">
                                        Recurring deviations across similar equipment types were not easily correlated, leading to ineffective root cause analysis. Manual CAPA processes meant investigators spent hours gathering data instead of analyzing problems.
                                    </p>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Our deviation management integrates with our <Link href="/product/rms" className="text-primary hover:underline font-medium">records management system</Link> to provide complete traceability from deviation to resolution, with all supporting evidence securely stored and easily retrievable for audits.
                                </p>

                                <ul className="space-y-3">
                                    {capaFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="text-purple-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Lab Data Management Section */}
                <section className="py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600">
                                        <Science sx={{ fontSize: 28 }} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                            Laboratory Data Management
                                        </h2>
                                        <p className="text-gray-500">Intelligent Lab Data Integration</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Lightbulb className="text-yellow-500" sx={{ fontSize: 20 }} />
                                        <span className="font-semibold text-gray-700">Scenario</span>
                                    </div>
                                    <p className="text-gray-600">
                                        Lab data scattered across instruments and paper records makes trend analysis difficult. OOS investigations take days because investigators must manually gather data from multiple sources.
                                    </p>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {labDataFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="text-cyan-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200">
                                    <h4 className="font-bold text-gray-900 mb-3">Key Benefits</h4>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="text-cyan-500" sx={{ fontSize: 16 }} />
                                            Faster OOS investigations with centralized data
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="text-cyan-500" sx={{ fontSize: 16 }} />
                                            Full data traceability from sample to result
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="text-cyan-500" sx={{ fontSize: 16 }} />
                                            Improved lab efficiency with paperless operations
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                        <Assessment sx={{ fontSize: 28 }} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                            QMS Integration
                                        </h2>
                                        <p className="text-gray-500">Quality Management System Backbone</p>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Our quality solutions form the document backbone of your Quality Management System, feeding other QMS modules (CAPA, audit, training) with controlled documents. This helps pharma firms align with ISO 9001, ISO 27001, and FDA 21 CFR Part 11 requirements.
                                </p>

                                <ul className="space-y-3 mb-6">
                                    {qmsFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                                    <h4 className="font-bold text-gray-900 mb-3">Reports & Dashboards</h4>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="text-blue-500" sx={{ fontSize: 16 }} />
                                            Document status reports and pending approvals
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="text-blue-500" sx={{ fontSize: 16 }} />
                                            Deviation and change control metrics
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="text-blue-500" sx={{ fontSize: 16 }} />
                                            Version histories and compliance dashboards
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Compliance Section */}
                <section className="py-12 px-6 lg:px-12 bg-slate-900 text-white">
                    <div className="container mx-auto max-w-5xl text-center">
                        <Security sx={{ fontSize: 48 }} className="text-green-400 mb-4" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Quality & Compliance Framework
                        </h2>
                        <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
                            Our quality solutions meet the stringent requirements of pharmaceutical regulatory bodies worldwide
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-slate-800 p-6 rounded-xl">
                                <div className="text-lg font-bold text-green-400 mb-2">FDA 21 CFR Part 11</div>
                                <p className="text-sm text-slate-400">Electronic Records & Signatures</p>
                            </div>
                            <div className="bg-slate-800 p-6 rounded-xl">
                                <div className="text-lg font-bold text-green-400 mb-2">GxP / GMP</div>
                                <p className="text-sm text-slate-400">Good Manufacturing Practices</p>
                            </div>
                            <div className="bg-slate-800 p-6 rounded-xl">
                                <div className="text-lg font-bold text-green-400 mb-2">ALCOA+</div>
                                <p className="text-sm text-slate-400">Data Integrity Principles</p>
                            </div>
                            <div className="bg-slate-800 p-6 rounded-xl">
                                <div className="text-lg font-bold text-green-400 mb-2">ISO 9001</div>
                                <p className="text-sm text-slate-400">Quality Management Systems</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bg-slate-50 py-8 text-center text-sm text-gray-500">
                    <div className="container mx-auto">
                        {jsonLd.dateModified && jsonLd.dateModified !== jsonLd.datePublished ? (
                            <span>Last Updated: <time dateTime={jsonLd.dateModified}>{new Date(jsonLd.dateModified).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</time></span>
                        ) : (
                            <span>Published: <time dateTime={jsonLd.datePublished}>{new Date(jsonLd.datePublished).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</time></span>
                        )}
                    </div>
                </div>

                {/* Related Solutions */}
                <section className="py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Related Solutions
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Link
                                href="/solutions/pharmaceutical/batch-record-automation"
                                className="bg-blue-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-400 transition-all group"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                                    Batch Record Automation
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    AI-powered eBMR and predictive maintenance for faster batch release.
                                </p>
                                <span className="text-blue-600 font-medium inline-flex items-center gap-1">
                                    Learn more <ArrowForward sx={{ fontSize: 16 }} />
                                </span>
                            </Link>

                            <Link
                                href="/solutions/pharmaceutical/regulatory-compliance"
                                className="bg-purple-50 border border-purple-200 rounded-xl p-6 hover:shadow-lg hover:border-purple-400 transition-all group"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600">
                                    Regulatory Compliance
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Document control, SOP management, and regulatory submission support.
                                </p>
                                <span className="text-purple-600 font-medium inline-flex items-center gap-1">
                                    Learn more <ArrowForward sx={{ fontSize: 16 }} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 px-6 lg:px-12 bg-green-600">
                    <div className="container mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Transform Your Quality Operations?
                        </h2>
                        <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                            See how AI-powered quality inspection and CAPA management can improve your compliance posture.
                        </p>
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-green-50 transition-colors shadow-lg inline-flex items-center gap-2"
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
