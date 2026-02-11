import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import {
    ArrowForward,
    CheckCircle,
    Description,
    Engineering,
    Speed,
    TrendingUp,
    Security,
    Home,
    ChevronRight,
    Warning,
    Lightbulb,
    VerifiedUser,
} from "@mui/icons-material";
import Image from "next/image";
import BookDownloadCard from "@/components/pharmaceutical/BookDownloadCard";

export const metadata: Metadata = {
    title: "Batch Record Automation & eBMR",
    description: "Automate pharma batch record reviews with AI-powered eBMR. reduce manual effort by 65%, ensure 21 CFR Part 11 compliance, and speed up batch release.",
    keywords: [
        "eBMR automation",
        "electronic batch record pharma",
        "batch record review automation",
        "pharmaceutical production AI",
        "predictive maintenance pharma",
        "FDA 21 CFR Part 11 eBMR",
        "batch release acceleration",
        "GMP batch records",
    ],
    alternates: {
        canonical: "/solutions/pharmaceutical/batch-record-automation",
    },
    openGraph: {
        title: "Batch Record Automation",
        description: "Transform paper-intensive batch record review into intelligent, automated processes.",
        images: [{ url: "/images/pharma-ebmr-og.jpg", width: 1200, height: 630 }],
    },
};

import { baseUrl } from "@/lib/enhanced-seo";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Batch Record Automation | CannyMinds",
    "description": "AI-powered electronic batch record (eBMR) automation and predictive maintenance solutions for pharmaceutical manufacturing.",
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

export default function BatchRecordAutomationPage() {
    const challenges = [
        {
            challenge: "Paper-based Batch Manufacturing Records",
            impact: "Slow batch release, manual data entry errors, and compliance delays in high-volume production.",
        },
        {
            challenge: "Manual eBMR Review",
            impact: "Delays in batch release and high compliance risk due to time-consuming manual reviews.",
        },
        {
            challenge: "Unplanned Equipment Downtime",
            impact: "Disrupted production schedules, lost revenue, and batch failures.",
        },
        {
            challenge: "Inconsistent Review Standards",
            impact: "Variability across reviewers leading to missed deviations and audit findings.",
        },
    ];

    const ebmrFeatures = [
        "AI-based digitization of paper BMRs, logbooks, and IPC records",
        "Real-time error and deviation detection during batch execution",
        "Automated review-by-exception using GenAI reasoning",
        "FDA 21 CFR Part 11 compliant electronic signatures",
        "Batch genealogy and traceability tracking",
        "Automated cross-referencing against SOPs and master batch records",
        "Complete audit trail for FDA inspections",
    ];

    const ebmrBenefits = [
        { metric: "45-65%", description: "Reduction in manual batch record review effort" },
        { metric: "Hours", description: "Batch release timelines reduced from days to hours" },
        { metric: "100%", description: "Compliance with master batch record requirements" },
        { metric: "Zero", description: "Missed deviations with automated flagging" },
    ];

    const predictiveFeatures = [
        "Real-time sensor data analysis from production equipment",
        "Machine learning models for failure prediction weeks in advance",
        "Maintenance scheduling optimization based on equipment health",
        "Equipment health dashboards and automated alerts",
        "Integration with CMMS systems for work order generation",
        "Spare parts inventory optimization",
    ];

    const predictiveBenefits = [
        { metric: "25-50%", description: "Reduction in unplanned downtime" },
        { metric: "Extended", description: "Equipment lifespan through proactive care" },
        { metric: "Optimized", description: "Spare parts inventory and maintenance costs" },
        { metric: "3-7%", description: "Yield improvement through process optimization" },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
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
                            <span className="text-gray-900 font-medium">Batch Record Automation</span>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="max-w-4xl">
                                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                    <Description sx={{ fontSize: 18 }} />
                                    Production AI
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Batch Record Automation for Pharmaceutical Manufacturing
                                </h1>

                                <div className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    Transform paper-intensive batch record review into intelligent, automated processes. Our GenAI-enabled eBMR solution reduces manual review effort by 45-65% while ensuring FDA 21 CFR Part 11 compliance and accelerating batch release from days to hours.
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Request Demo
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                    <Link
                                        href="/solutions/pharmaceutical/quality-inspection-capa"
                                        className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-primary hover:text-primary transition-colors"
                                    >
                                        View Quality Solutions
                                    </Link>
                                </div>
                            </div>
                            <div className="relative flex justify-center">
                                <Image
                                    src="/images/solutions/Pharma/batch-record-automation/eBMR-Automation-for-Pharmaceutical-Manufacturing.png"
                                    alt="Batch Record Automation"
                                    width={600}
                                    height={450}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-8 bg-blue-600">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                            {ebmrBenefits.map((item, idx) => (
                                <div key={idx}>
                                    <div className="text-3xl font-bold mb-1">{item.metric}</div>
                                    <div className="text-blue-200 text-sm">{item.description}</div>
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
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-5xl">
                        <div className="flex items-center gap-3 mb-8 justify-center">
                            <Warning className="text-orange-600" sx={{ fontSize: 28 }} />
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Key Production Challenges
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

                {/* eBMR Solution Section */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                        <Description sx={{ fontSize: 28 }} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                            Electronic Batch Records (eBMR)
                                        </h2>
                                        <p className="text-gray-500">GenAI-Enabled Batch Record Management</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Lightbulb className="text-yellow-500" sx={{ fontSize: 20 }} />
                                        <span className="font-semibold text-gray-700">Scenario</span>
                                    </div>
                                    <p className="text-gray-600">
                                        A multi-site dosage manufacturer experienced prolonged batch release timelines due to manual, paper-intensive BMR review. Quality teams spent days reviewing each batch record, often missing critical deviations buried in pages of documentation.
                                    </p>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Many pharmaceutical companies still rely on paper batch records, creating bottlenecks in batch release and increasing compliance risk. Our <Link href="/product/scanning-solution" className="text-primary hover:underline font-medium">document digitization services</Link> convert these paper records into searchable digital formats, enabling AI-powered review and faster batch release.
                                </p>

                                <ul className="space-y-3">
                                    {ebmrFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                                <div className="flex justify-center mb-8">
                                    <Image
                                        src="/images/solutions/Pharma/batch-record-automation/pharma-eBMR.png"
                                        alt="eBMR Interface Dashboard"
                                        width={800}
                                        height={450}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <TrendingUp className="text-green-600" />
                                    Business Impact
                                </h3>

                                <div className="space-y-6">
                                    <div className="bg-white rounded-xl p-5 border border-gray-200">
                                        <div className="text-3xl font-bold text-blue-600 mb-1">45-65%</div>
                                        <div className="text-gray-700 font-medium">Reduction in Manual Review Effort</div>
                                        <p className="text-gray-500 text-sm mt-2">Automated review-by-exception focuses human attention only where needed</p>
                                    </div>

                                    <div className="bg-white rounded-xl p-5 border border-gray-200">
                                        <div className="text-3xl font-bold text-blue-600 mb-1">Days → Hours</div>
                                        <div className="text-gray-700 font-medium">Batch Release Acceleration</div>
                                        <p className="text-gray-500 text-sm mt-2">Real-time deviation detection and automated cross-referencing</p>
                                    </div>

                                    <div className="bg-white rounded-xl p-5 border border-gray-200">
                                        <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                                        <div className="text-gray-700 font-medium">Master Batch Record Compliance</div>
                                        <p className="text-gray-500 text-sm mt-2">Consistent and standardized reviews across all products</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Predictive Maintenance Section */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div className="order-2 lg:order-1 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                                <div className="flex justify-center mb-8">
                                    <Image
                                        src="/images/solutions/Pharma/batch-record-automation/Predictive-Equipment-Maintenance.png"
                                        alt="Predictive Maintenance Dashboard"
                                        width={800}
                                        height={450}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <TrendingUp className="text-green-600" />
                                    Maintenance Intelligence
                                </h3>

                                <div className="space-y-6">
                                    <div className="bg-white rounded-xl p-5 border border-gray-200">
                                        <div className="text-3xl font-bold text-green-600 mb-1">25-50%</div>
                                        <div className="text-gray-700 font-medium">Reduction in Unplanned Downtime</div>
                                        <p className="text-gray-500 text-sm mt-2">Predict failures weeks in advance with ML models</p>
                                    </div>

                                    <div className="bg-white rounded-xl p-5 border border-gray-200">
                                        <div className="text-3xl font-bold text-green-600 mb-1">Extended</div>
                                        <div className="text-gray-700 font-medium">Equipment Lifespan</div>
                                        <p className="text-gray-500 text-sm mt-2">Proactive maintenance based on actual equipment condition</p>
                                    </div>

                                    <div className="bg-white rounded-xl p-5 border border-gray-200">
                                        <div className="text-3xl font-bold text-green-600 mb-1">3-7%</div>
                                        <div className="text-gray-700 font-medium">Yield Improvement</div>
                                        <p className="text-gray-500 text-sm mt-2">AI process drift detection and optimization recommendations</p>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                                        <Engineering sx={{ fontSize: 28 }} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                            Predictive Equipment Maintenance
                                        </h2>
                                        <p className="text-gray-500">AI-Driven Equipment Health Monitoring</p>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl mb-6 border border-gray-200">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Lightbulb className="text-yellow-500" sx={{ fontSize: 20 }} />
                                        <span className="font-semibold text-gray-700">Scenario</span>
                                    </div>
                                    <p className="text-gray-600">
                                        Critical production equipment failures were causing unplanned downtime and batch losses. Reactive maintenance approaches meant equipment failures were only addressed after they occurred, disrupting production schedules and causing significant revenue loss.
                                    </p>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Our IoT-enabled predictive maintenance solution analyzes real-time sensor data to predict equipment failures before they occur. Historical maintenance records stored in our <Link href="/product/rms" className="text-primary hover:underline font-medium">records management system</Link> provide the data foundation for accurate predictions.
                                </p>

                                <ul className="space-y-3">
                                    {predictiveFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Compliance Section */}
                <section className="py-16 px-6 lg:px-12 bg-slate-900 text-white">
                    <div className="container mx-auto max-w-5xl text-center">
                        <Security sx={{ fontSize: 48 }} className="text-blue-400 mb-4" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Built for Regulatory Compliance
                        </h2>
                        <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
                            Our batch record automation solutions are designed to meet the stringent requirements of pharmaceutical manufacturing
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-slate-800 p-6 rounded-xl">
                                <div className="text-lg font-bold text-blue-400 mb-2">FDA 21 CFR Part 11</div>
                                <p className="text-sm text-slate-400">Electronic Records & Signatures with complete audit trails</p>
                            </div>
                            <div className="bg-slate-800 p-6 rounded-xl">
                                <div className="text-lg font-bold text-blue-400 mb-2">EU GMP Annex 11</div>
                                <p className="text-sm text-slate-400">Computerised Systems validation and compliance</p>
                            </div>
                            <div className="bg-slate-800 p-6 rounded-xl">
                                <div className="text-lg font-bold text-blue-400 mb-2">ALCOA+</div>
                                <p className="text-sm text-slate-400">Data Integrity Principles ensuring data quality</p>
                            </div>
                            <div className="bg-slate-800 p-6 rounded-xl">
                                <div className="text-lg font-bold text-blue-400 mb-2">GAMP 5</div>
                                <p className="text-sm text-slate-400">Risk-Based Validation framework</p>
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
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Related Solutions
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Link
                                href="/solutions/pharmaceutical/quality-inspection-capa"
                                className="bg-green-50 border border-green-200 rounded-xl p-6 hover:shadow-lg hover:border-green-400 transition-all group"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600">
                                    Quality Inspection & CAPA
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    AI-powered visual inspection, deviation analysis, and CAPA management for consistent quality.
                                </p>
                                <span className="text-green-600 font-medium inline-flex items-center gap-1">
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
                                    Document control, SOP management, and regulatory submission support with full audit trails.
                                </p>
                                <span className="text-purple-600 font-medium inline-flex items-center gap-1">
                                    Learn more <ArrowForward sx={{ fontSize: 16 }} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 lg:px-12 bg-primary">
                    <div className="container mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Automate Your Batch Records?
                        </h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            See how our eBMR solution can accelerate batch release while maintaining strict FDA compliance.
                        </p>
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center gap-2"
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
