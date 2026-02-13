import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import {
    ArrowForward,
    CheckCircle,
    Verified,
    Speed,
    Security,
    Home,
    ChevronRight,
    BugReport,
    FindInPage,
    Assignment,
    Timeline,
    FactCheck,
    Loop,
    Assessment,
    Gavel,
} from "@mui/icons-material";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Quality Management (QA/QC, CAPA, NCR) | Manufacturing Solutions | CannyMinds",
    description: "Digitized quality management with automated CAPA workflows, NCR tracking, root cause analysis, and complete audit trails for manufacturing excellence.",
    keywords: [
        "quality management system",
        "CAPA software",
        "NCR management",
        "QA QC automation",
        "corrective action preventive action",
        "non-conformance tracking",
        "root cause analysis",
        "quality audit software",
        "manufacturing quality control",
        "ISO quality management",
    ],
    alternates: {
        canonical: "https://www.cannymindstech.com/solutions/manufacturing/quality-management",
    },
    openGraph: {
        title: "Quality Management | Manufacturing Solutions",
        description: "Transform quality management with digitized QA/QC records, automated CAPA workflows, and comprehensive audit trails.",
        type: 'website',
        siteName: 'CannyMinds',
        locale: 'en_US',
        images: [
            {
                url: "https://www.cannymindstech.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Quality Management Solutions"
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Quality Management | Manufacturing Solutions",
        description: "Transform quality management with digitized QA/QC records, automated CAPA workflows, and comprehensive audit trails.",
        images: ['https://www.cannymindstech.com/og-image.jpg'],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Quality Management | CannyMinds",
    "description": "Comprehensive quality management solution for manufacturing with CAPA, NCR, and QA/QC automation.",
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
    "mainEntity": {
        "@type": "SoftwareApplication",
        "name": "CannyECM Quality Management",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web-based"
    },
    "datePublished": new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0]
};

export default function QualityManagementPage() {
    const qualityFeatures = [
        {
            title: "Digitized QA/QC Records",
            description: "Transform paper-based quality records into searchable digital documents with automated data capture and validation.",
            icon: FactCheck,
        },
        {
            title: "CAPA Workflow Automation",
            description: "Streamline Corrective and Preventive Action processes with automated routing, escalations, and closure tracking.",
            icon: Loop,
        },
        {
            title: "NCR Management",
            description: "Comprehensive Non-Conformance Report tracking from identification through investigation to resolution.",
            icon: BugReport,
        },
        {
            title: "Root Cause Analysis",
            description: "Structured documentation for 5-Why analysis, fishbone diagrams, and corrective action planning.",
            icon: FindInPage,
        },
        {
            title: "Complete Audit Trails",
            description: "Immutable record of all quality events, approvals, and changes for regulatory compliance.",
            icon: Timeline,
        },
        {
            title: "Secure Retention",
            description: "Long-term storage with retention policies aligned to regulatory requirements and industry standards.",
            icon: Security,
        },
    ];

    const workflowSteps = [
        {
            step: "1",
            title: "Issue Identification",
            description: "Capture quality deviations, non-conformances, and inspection failures with standardized forms.",
        },
        {
            step: "2",
            title: "Investigation & Analysis",
            description: "Document root cause analysis using structured methodologies and attach supporting evidence.",
        },
        {
            step: "3",
            title: "Action Planning",
            description: "Define corrective and preventive actions with assigned owners and target completion dates.",
        },
        {
            step: "4",
            title: "Implementation",
            description: "Track action execution with status updates, evidence uploads, and progress monitoring.",
        },
        {
            step: "5",
            title: "Verification & Closure",
            description: "Verify effectiveness of actions and formally close with appropriate approvals.",
        },
    ];

    const benefits = [
        {
            title: "Improved Product Quality",
            description: "Systematic issue tracking and resolution leads to fewer defects and higher customer satisfaction.",
            stat: "40%",
            statLabel: "Reduction in defects",
        },
        {
            title: "Faster Issue Resolution",
            description: "Automated workflows and clear accountability reduce time to close quality issues.",
            stat: "60%",
            statLabel: "Faster CAPA closure",
        },
        {
            title: "Strong Audit Readiness",
            description: "Complete documentation and traceability ensures smooth audits every time.",
            stat: "100%",
            statLabel: "Audit trail coverage",
        },
    ];

    const complianceStandards = [
        { name: "ISO 9001", description: "Quality Management Systems" },
        { name: "ISO 14001", description: "Environmental Management" },
        { name: "ISO 45001", description: "Occupational Health & Safety" },
        { name: "IATF 16949", description: "Automotive Quality Management" },
        { name: "AS9100", description: "Aerospace Quality Management" },
        { name: "FDA 21 CFR Part 11", description: "Electronic Records" },
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
                            <Link href="/solutions/manufacturing" className="hover:text-primary">
                                Manufacturing
                            </Link>
                            <ChevronRight sx={{ fontSize: 16 }} className="text-gray-400" />
                            <span className="text-gray-900 font-medium">Quality Management</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-6">
                                    <Verified sx={{ fontSize: 18 }} />
                                    Quality Assurance
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Quality Management System
                                </h1>

                                <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    Digitized QA/QC records with automated CAPA workflows, NCR tracking, root cause analysis documentation, and secure retention for complete audit readiness.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Request Demo
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                    <Link
                                        href="/solutions/pharmaceutical/quality-inspection-capa"
                                        className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors border border-orange-200"
                                    >
                                        See Pharma QMS
                                    </Link>
                                </div>
                            </div>

                            <div className="relative flex justify-center">
                                <Image
                                    src="/images/solutions/manfactureing/Quality-Management-System/Quality-Management-System.png"
                                    alt="Quality Management Dashboard"
                                    width={600}
                                    height={450}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quality Features Grid */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Comprehensive Quality Management
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Quality deviations and corrective actions require rigorous documentation and closure tracking. Our solution provides end-to-end quality management automation.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {qualityFeatures.map((feature, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-orange-100 rounded-[10px] flex items-center justify-center text-orange-600 mb-4">
                                        <feature.icon sx={{ fontSize: 28 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CAPA Workflow */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            CAPA Workflow Process
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Streamlined Corrective and Preventive Action workflow from issue identification to verified closure.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
                            {workflowSteps.map((step, index) => (
                                <div key={index} className="relative h-full">
                                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 h-full">
                                        <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                                            {step.step}
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                    {index < workflowSteps.length - 1 && (
                                        <div className="hidden lg:flex absolute top-1/2 -right-6 z-10 items-center justify-center transform -translate-y-1/2">
                                            <ArrowForward className="text-orange-500" sx={{ fontSize: 32 }} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits with Stats */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Measurable Business Benefits
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Transform your quality management with quantifiable improvements in product quality, issue resolution, and audit readiness.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 text-center border border-orange-100">
                                    <div className="text-5xl font-bold text-orange-600 mb-2">{benefit.stat}</div>
                                    <div className="text-orange-700 font-medium mb-4">{benefit.statLabel}</div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Compliance Standards */}
                <section className="py-16 px-6 lg:px-12 bg-gray-900 text-white">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                            Compliance & Standards Alignment
                        </h2>
                        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                            Our quality management system supports role-based access control, complete audit trails, electronic record integrity, and secure document storage aligned with industry standards.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {complianceStandards.map((standard, index) => (
                                <div key={index} className="bg-gray-800 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-orange-400 mb-2">{standard.name}</h3>
                                    <p className="text-gray-300">{standard.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Integration with Other Solutions */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Related Manufacturing Solutions
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Link
                                href="/solutions/manufacturing/document-control"
                                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-300 transition-all"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                    Document Control
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm">
                                    Engineering drawings, SOPs, and work instruction management with version control.
                                </p>
                                <span className="inline-flex items-center gap-1 text-orange-600 font-medium text-sm">
                                    Learn More <ArrowForward sx={{ fontSize: 16 }} />
                                </span>
                            </Link>

                            <Link
                                href="/solutions/manufacturing/engineering-change-management"
                                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-300 transition-all"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                    Engineering Change Management
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm">
                                    Controlled ECN/ECR workflows with impact analysis and automated approvals.
                                </p>
                                <span className="inline-flex items-center gap-1 text-orange-600 font-medium text-sm">
                                    Learn More <ArrowForward sx={{ fontSize: 16 }} />
                                </span>
                            </Link>

                            <Link
                                href="/solutions/manufacturing/equipment-maintenance"
                                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-300 transition-all"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                    Equipment Maintenance
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm">
                                    Digital maintenance logs and asset documentation for operational continuity.
                                </p>
                                <span className="inline-flex items-center gap-1 text-orange-600 font-medium text-sm">
                                    Learn More <ArrowForward sx={{ fontSize: 16 }} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 lg:px-12 bg-orange-600">
                    <div className="container mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Elevate Your Quality Management?
                        </h2>
                        <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                            Contact us to discover how our quality management solution can reduce defects, accelerate CAPA closure, and ensure audit readiness.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
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
