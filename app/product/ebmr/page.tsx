import { Metadata } from "next";
import Link from "next/link";

import {
    ArrowForward,
    CheckCircle,
    Science,
    VerifiedUser,
    Security,
    CloudDone,
    Assessment,
    Biotech,
    Assignment,
    Home,
    ChevronRight,
    Warning,
    Speed,
    Description,
    History,
    Edit,
    Gavel,
    Factory,
    LocalHospital,
    Business,
    TrendingUp,
} from "@mui/icons-material";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import BookDownloadCard from "@/components/pharmaceutical/BookDownloadCard";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "CannyECM e-BMR | Electronic Batch Manufacturing Record | CannyMinds",
    description: "Digitize, control, and comply with confidence. Transform paper-based Batch Manufacturing Records into a fully digital, compliant, and audit-ready system.",
    keywords: [
        "electronic batch record",
        "eBMR software",
        "batch manufacturing record",
        "pharmaceutical manufacturing",
        "21 CFR Part 11 compliance",
        "WHO GMP",
        "EU GMP Annex 11",
        "Schedule M compliance",
        "ALCOA+ data integrity",
        "batch record automation",
        "pharmaceutical compliance software",
    ],
    alternates: {
        canonical: "/product/ebmr",
    },
    openGraph: {
        title: "CannyECM e-BMR | Electronic Batch Manufacturing Record",
        description: "Transform paper-based batch records into a fully digital, compliant, and audit-ready system.",
        images: [{ url: "/images/ebmr-og.jpg", width: 1200, height: 630 }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CannyECM e-BMR",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "description": "Electronic Batch Manufacturing Record system for pharmaceutical compliance with 21 CFR Part 11, WHO GMP, EU GMP Annex 11.",
    "publisher": {
        "@type": "Organization",
        "name": "CannyMinds Technology Solutions",
        "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`
        }
    },
    "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
    },
    "datePublished": new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0]
};

export default function CannyEBMRPage() {
    const challenges = [
        {
            challenge: "Manual data entry errors and missing records",
            icon: Edit,
        },
        {
            challenge: "Time-consuming batch review and release cycles",
            icon: History,
        },
        {
            challenge: "Difficulty in tracking deviations and corrections",
            icon: Warning,
        },
        {
            challenge: "Risk of non-compliance with regulatory audits",
            icon: Gavel,
        },
        {
            challenge: "High storage and retrieval costs for physical records",
            icon: Description,
        },
    ];

    const features = [
        {
            title: "End-to-End Batch Lifecycle Management",
            description: "Digitize batch instructions, process parameters, in-process checks, and yield calculations in a single unified system.",
            icon: Assessment,
        },
        {
            title: "Controlled Workflows",
            description: "Automated workflows ensure batch records move through Production, QA, and QA Release with defined roles and approvals.",
            icon: Assignment,
        },
        {
            title: "Audit Trail & Traceability",
            description: "Every data entry, modification, and approval is time-stamped, user-identified, and fully traceable for complete accountability.",
            icon: History,
        },
        {
            title: "Electronic Signatures",
            description: "Supports compliant electronic signatures for operators, supervisors, QA, and all authorized personnel.",
            icon: VerifiedUser,
        },
        {
            title: "Deviation & Exception Handling",
            description: "Capture deviations, comments, and corrective actions directly within the batch record for seamless documentation.",
            icon: Warning,
        },
        {
            title: "Document Version Control",
            description: "Ensure only approved and current batch records are used for manufacturing with strict version management.",
            icon: Description,
        },
    ];

    const regulations = [
        { name: "21 CFR Part 11", description: "FDA Electronic Records" },
        { name: "WHO GMP", description: "World Health Organization" },
        { name: "EU GMP Annex 11", description: "European Union Standards" },
        { name: "Schedule M", description: "India GMP Requirements" },
        { name: "ALCOA+", description: "Data Integrity Principles" },
    ];

    const benefits = [
        { benefit: "Faster batch review and release", icon: Speed },
        { benefit: "Reduced human errors and rework", icon: CheckCircle },
        { benefit: "Improved regulatory audit readiness", icon: VerifiedUser },
        { benefit: "Enhanced data integrity and security", icon: Security },
        { benefit: "Lower operational and documentation costs", icon: TrendingUp },
    ];

    const idealFor = [
        { name: "Pharmaceutical Manufacturing Units", icon: Factory },
        { name: "API & Formulation Plants", icon: Science },
        { name: "Contract Manufacturing Organizations (CMOs)", icon: Business },
        { name: "Clinical Trial Manufacturing Facilities", icon: LocalHospital },
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
                        <nav className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
                            <Link href="/" className="hover:text-primary flex items-center gap-1">
                                <Home sx={{ fontSize: 16 }} />
                                Home
                            </Link>
                            <ChevronRight sx={{ fontSize: 16 }} className="text-gray-400" />
                            <Link href="/#products" className="hover:text-primary">
                                Products
                            </Link>
                            <ChevronRight sx={{ fontSize: 16 }} className="text-gray-400" />
                            <span className="text-gray-900 font-medium">e-BMR</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-6">
                                    <Biotech sx={{ fontSize: 18 }} />
                                    Pharmaceutical Manufacturing
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                    CannyECM for e-BMR
                                </h1>

                                <p className="text-xl font-semibold text-purple-600 mb-4">
                                    Electronic Batch Manufacturing Record
                                </p>

                                <p className="text-2xl font-medium text-gray-700 mb-6">
                                    Digitize, Control, and Comply with Confidence
                                </p>

                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    In pharmaceutical manufacturing, batch records are the backbone of product quality, regulatory compliance, and patient safety. CannyECM e-BMR transforms traditional paper-based Batch Manufacturing Records into a fully digital, compliant, and audit-ready system—streamlining operations while meeting global regulatory standards.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Request Demo
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                    <Link
                                        href="/solutions/pharmaceutical/batch-record-automation"
                                        className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors border border-purple-200"
                                    >
                                        Batch Record Automation
                                    </Link>
                                </div>
                            </div>

                            <div className="relative">
                                <ImagePlaceholder className="aspect-[4/3] rounded-2xl" text="e-BMR Dashboard Interface" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Book Download Sidebar - Fixed on right side */}
                <div className="hidden xl:block fixed right-4 top-32 w-52 z-40">
                    <BookDownloadCard />
                </div>

                {/* Challenges Section */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Challenges with Paper-Based BMR
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Traditional paper-based batch records create significant operational and compliance challenges that impact product quality and time-to-market.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {challenges.map((item, index) => (
                                <div key={index} className="bg-red-50 border border-red-100 rounded-xl p-6 flex items-start gap-4">
                                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0">
                                        <item.icon sx={{ fontSize: 24 }} />
                                    </div>
                                    <p className="text-gray-700 font-medium">{item.challenge}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solution Section */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    CannyECM e-BMR Solution
                                </h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    CannyECM provides a secure and centralized Electronic Batch Manufacturing Record (e-BMR) platform that covers the entire batch lifecycle—from material issuance to final batch release.
                                </p>

                                <h3 className="text-lg font-bold text-gray-900 mb-4">Key capabilities include:</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Digital batch record creation and execution",
                                        "Real-time data capture from shop floor operations",
                                        "Controlled workflows for review, approval, and release",
                                        "Secure electronic signatures with full audit trails",
                                        "Seamless integration with existing ERP, MES, and QMS systems",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle className="text-purple-600 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <ImagePlaceholder className="aspect-[4/3] rounded-2xl" text="e-BMR Workflow Diagram" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Key Features
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Comprehensive capabilities designed for pharmaceutical manufacturing excellence and regulatory compliance.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                                        <feature.icon sx={{ fontSize: 28 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Regulatory Compliance */}
                <section className="py-16 px-6 lg:px-12 bg-gray-900 text-white">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                            Regulatory Compliance
                        </h2>
                        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                            CannyECM e-BMR is designed to support compliance with global pharmaceutical regulatory standards.
                        </p>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {regulations.map((reg, index) => (
                                <div key={index} className="bg-gray-800 rounded-xl p-6 text-center">
                                    <div className="text-xl font-bold text-purple-400 mb-2">{reg.name}</div>
                                    <p className="text-gray-400 text-sm">{reg.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Benefits
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Transform your batch manufacturing operations with measurable improvements in efficiency, compliance, and cost savings.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                            {benefits.map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 text-center border border-purple-100">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-4">
                                        <item.icon sx={{ fontSize: 24 }} />
                                    </div>
                                    <p className="text-gray-800 font-medium">{item.benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ideal For */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Ideal For
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            CannyECM e-BMR is designed for pharmaceutical and life sciences organizations requiring compliant batch record management.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {idealFor.map((item, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                                    <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-4">
                                        <item.icon sx={{ fontSize: 28 }} />
                                    </div>
                                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Solutions */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Related Pharmaceutical Solutions
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            <Link
                                href="/solutions/pharmaceutical/batch-record-automation"
                                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-purple-300 transition-all"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                                    Batch Record Automation
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm">
                                    Comprehensive batch record digitization and workflow automation.
                                </p>
                                <span className="inline-flex items-center gap-1 text-purple-600 font-medium text-sm">
                                    Learn More <ArrowForward sx={{ fontSize: 16 }} />
                                </span>
                            </Link>

                            <Link
                                href="/solutions/pharmaceutical/quality-inspection-capa"
                                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-purple-300 transition-all"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                                    Quality Inspection & CAPA
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm">
                                    Automated quality control with deviation management and CAPA workflows.
                                </p>
                                <span className="inline-flex items-center gap-1 text-purple-600 font-medium text-sm">
                                    Learn More <ArrowForward sx={{ fontSize: 16 }} />
                                </span>
                            </Link>

                            <Link
                                href="/solutions/pharmaceutical/regulatory-compliance"
                                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-purple-300 transition-all"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                                    Regulatory Compliance
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm">
                                    Document control, SOP management, and regulatory submission support.
                                </p>
                                <span className="inline-flex items-center gap-1 text-purple-600 font-medium text-sm">
                                    Learn More <ArrowForward sx={{ fontSize: 16 }} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 lg:px-12 bg-purple-600">
                    <div className="container mx-auto text-center text-white max-w-4xl">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Transform Your Batch Records with CannyECM
                        </h2>
                        <p className="text-xl text-purple-100 mb-4">
                            Move from paper-based complexity to digital clarity.
                        </p>
                        <p className="text-lg text-purple-200 mb-8">
                            CannyECM e-BMR empowers pharmaceutical manufacturers with efficiency, compliance, and complete control over batch manufacturing records.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
                            >
                                Schedule Consultation
                                <ArrowForward sx={{ fontSize: 20 }} />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
}
