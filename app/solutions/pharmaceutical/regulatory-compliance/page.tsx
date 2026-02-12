import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import {
    ArrowForward,
    CheckCircle,
    VerifiedUser,
    Description,
    Settings,
    Policy,
    Badge,
    Approval,
    TrendingUp,
    Security,
    Home,
    ChevronRight,
    Warning,
    Lightbulb,
} from "@mui/icons-material";
import Image from "next/image";
import BookDownloadCard from "@/components/pharmaceutical/BookDownloadCard";

export const metadata: Metadata = {
    title: "Regulatory Compliance & Document Control",
    description: "Streamline FDA 21 CFR Part 11 compliance with AI-driven document control, SOP management, and regulatory submission support.",
    keywords: [
        "regulatory compliance software",
        "pharmaceutical document control",
        "SOP management system",
        "FDA submission support",
        "audit trail software",
        "change control management",
        "21 CFR Part 11 software",
        "electronic document management",
    ],
    alternates: {
        canonical: "/solutions/pharmaceutical/regulatory-compliance",
    },
    openGraph: {
        title: "Regulatory Compliance",
        description: "Streamline compliance with AI-driven document control and regulatory support.",
        images: [{ url: "/images/pharma-compliance-og.jpg", width: 1200, height: 630 }],
    },
};

import { baseUrl } from "@/lib/enhanced-seo";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Regulatory Compliance | CannyMinds",
    "description": "Comprehensive regulatory compliance solutions including document control, SOP management, and submission support.",
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

export default function RegulatoryCompliancePage() {
    const challenges = [
        {
            challenge: "Complex FDA 21 CFR Part 11 Compliance",
            impact: "High documentation burden and audit preparation costs.",
        },
        {
            challenge: "Siloed Data Across Systems",
            impact: "Documents scattered across departments causing lack of real-time visibility.",
        },
        {
            challenge: "Manual Regulatory Submissions",
            impact: "Time-consuming, repetitive preparation with inconsistent formatting.",
        },
        {
            challenge: "Uncontrolled Document Versions",
            impact: "Risk of using outdated SOPs leading to compliance gaps and audit findings.",
        },
    ];

    const documentControlFeatures = [
        "Central repository for all controlled documents",
        "Metadata tagging (document type, product, revision)",
        "Full-text and structured search capabilities",
        "Version history and audit logs for every action",
        "Role-based routing (QA reviewers, Approvers)",
        "Configurable workflow states (Draft → Review → Approve → Publish)",
        "Automatic email notifications and escalations",
        "Electronic signatures tied to approvals",
    ];

    const sopFeatures = [
        "Creation, revision, and controlled publishing",
        "Revision control with version comparison",
        "Retire/supersede outdated procedures",
        "Assignment to functional groups",
        "Role-specific document access controls",
        "Natural-language Q&A across SOPs and protocols",
        "Instant document retrieval during FDA/EMA inspections",
    ];

    const stpFeatures = [
        "Secure storage with traceable history",
        "Automated access restrictions by role",
        "Link COA to product batches",
        "One-place retrieval of product release documentation",
        "Quick audit trails for inspections",
    ];

    const changeControlFeatures = [
        "Change requests with structured forms",
        "Impact assessment tracking",
        "Multi-level approval routing",
        "Documentation of reason and authorization",
        "CAPA integration for corrective actions",
    ];

    const licenseFeatures = [
        "Expiry alerts and notifications as per Reminder Policy",
        "Document classification by type",
        "Renewals workflow automation",
        "License expiry calendars",
        "Compliance tracking dashboard",
    ];

    const policyFeatures = [
        "Version control for all corporate policies",
        "Controlled distribution to departments",
        "Read/acknowledge tracking (who has read)",
        "Policy awareness documentation",
        "Audit-ready policy repository",
    ];

    const regulatoryDocFeatures = [
        "AI-assisted generation of regulatory documents",
        "Automated cross-referencing for consistency",
        "Support for multi-region submission formats",
        "Streamlined stability reporting",
    ];

    const complianceExpectations = [
        "Controlled electronic signatures",
        "Secure, immutable audit trails",
        "Time/date stamps on all actions",
        "Version comparisons",
        "Access controls",
        "Archival and retrieval",
    ];

    const systemProvides = [
        "Comprehensive audit trail",
        "Role-based access",
        "Configurable workflows",
        "Document lifecycle controls",
        "Electronic signatures tied to approvals",
    ];

    const stats = [
        { value: "60%", label: "Faster Document Preparation" },
        { value: "40-60%", label: "Audit Effort Reduction" },
        { value: "100%", label: "Version Control Compliance" },
        { value: "Zero", label: "Rogue Document Versions" },
    ];

    const keyBenefits = [
        "Eliminates paper bottlenecks",
        "Reduces compliance risk",
        "Speeds audits and inspections",
        "Improves cross-department visibility",
        "Standardizes control across documents",
        "Supports QMS and CAPA traceability",
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 bg-gradient-to-b from-purple-50 to-white">
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
                            <span className="text-gray-900 font-medium">Regulatory Compliance</span>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="max-w-4xl">
                                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                    <VerifiedUser sx={{ fontSize: 18 }} />
                                    Regulatory & Documentation
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Regulatory Compliance & Document Control
                                </h1>

                                <div className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    Streamline compliance with AI-driven document control, SOP management, and regulatory submission support. Ensure audit readiness and reduce compliance risks with full traceability and 21 CFR Part 11 compliant workflows.
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Request Demo
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                    <Link
                                        href="/solutions/pharmaceutical/quality-inspection-capa"
                                        className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-purple-600 hover:text-purple-600 transition-colors"
                                    >
                                        View Quality Solutions
                                    </Link>
                                </div>
                            </div>
                            <div className="relative flex justify-center">
                                <Image
                                    src="/images/solutions/Pharma/regulatory-compliance/Regulatory-Compliance-Document-Control.png"
                                    alt="Regulatory Compliance & Document Control"
                                    width={600}
                                    height={450}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-8 bg-purple-600">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                            {stats.map((item, idx) => (
                                <div key={idx}>
                                    <div className="text-3xl font-bold mb-1">{item.value}</div>
                                    <div className="text-purple-200 text-sm">{item.label}</div>
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
                                Key Regulatory Challenges
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

                {/* Document Control Section */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                                        <Approval sx={{ fontSize: 28 }} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                            Document Control & Approval Workflows
                                        </h2>
                                        <p className="text-gray-500">Automated Document Lifecycle Management</p>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Centralized control for SOPs, STPs, Protocols, Specifications, COAs, QMS records, and Manuals—all retrievable by role/department and fully traceable. Documents such as SOPs, STPs, Protocols, Specifications, COAs, QMS records, Manuals are all centrally stored, retrievable by role/department, and fully traceable.
                                </p>

                                <div className="bg-gray-50 p-4 rounded-xl mb-6">
                                    <p className="text-sm font-semibold text-gray-500 mb-3">WORKFLOW:</p>
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="px-3 py-1.5 bg-gray-200 rounded-full text-sm font-medium text-gray-700">Draft</span>
                                        <ArrowForward className="text-gray-400" sx={{ fontSize: 16 }} />
                                        <span className="px-3 py-1.5 bg-yellow-100 rounded-full text-sm font-medium text-yellow-700">Review</span>
                                        <ArrowForward className="text-gray-400" sx={{ fontSize: 16 }} />
                                        <span className="px-3 py-1.5 bg-blue-100 rounded-full text-sm font-medium text-blue-700">Approve</span>
                                        <ArrowForward className="text-gray-400" sx={{ fontSize: 16 }} />
                                        <span className="px-3 py-1.5 bg-green-100 rounded-full text-sm font-medium text-green-700">Publish</span>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {documentControlFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="text-purple-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 bg-purple-50 p-5 rounded-xl border border-purple-200">
                                    <h4 className="font-bold text-gray-900 mb-2">Pharma Value</h4>
                                    <p className="text-gray-600 text-sm">
                                        Full digital trail of who did what and when—critical for FDA and EMA inspections. Reduced cycle time compared to paper/manual flows.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-center mb-6">
                                    <Image
                                        src="/images/solutions/Pharma/regulatory-compliance/workflow-pharma.png"
                                        alt="Document Control Workflow"
                                        width={600}
                                        height={450}
                                    />
                                </div>
                                {/* SOP Management */}
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                            <Description sx={{ fontSize: 24 }} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">SOP Management</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Complete SOP lifecycle management from creation to retirement. Regulated organizations maintain SOPs that are always current, easily auditable, and role-specific.
                                    </p>
                                    <ul className="space-y-2">
                                        {sopFeatures.slice(0, 4).map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                <CheckCircle className="text-blue-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* STP & Protocol */}
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                                            <VerifiedUser sx={{ fontSize: 24 }} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">STP & Protocol Management</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Standard Test Procedures and protocol management for traceable product quality records and customer trust.
                                    </p>
                                    <ul className="space-y-2">
                                        {stpFeatures.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Change Control & License Section */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Change Control */}
                            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                                        <Settings sx={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">Change Control</h3>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">
                                    Any change to controlled docs or processes is documented, approved, and traceable. Supports CAPA/regulatory change management expectations.
                                </p>
                                <ul className="space-y-2">
                                    {changeControlFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm">
                                            <CheckCircle className="text-orange-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* License Management */}
                            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                                        <Badge sx={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">License Document Management</h3>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">
                                    Track licenses, permits, and certifications with expiry alerts. Prevents legal lapses due to expired licenses.
                                </p>
                                <ul className="space-y-2">
                                    {licenseFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm">
                                            <CheckCircle className="text-amber-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Policies & Manuals */}
                            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                                        <Policy sx={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">Policies & Manuals</h3>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">
                                    Regulatory bodies expect documented policy awareness across departments. Corporate policies, quality manuals, and compliance documentation.
                                </p>
                                <ul className="space-y-2">
                                    {policyFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm">
                                            <CheckCircle className="text-indigo-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Regulatory Document Generation */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600">
                                        <Description sx={{ fontSize: 28 }} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                            Regulatory Document Generation
                                        </h2>
                                        <p className="text-gray-500">AI-Assisted Submission Preparation</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Lightbulb className="text-yellow-500" sx={{ fontSize: 20 }} />
                                        <span className="font-semibold text-gray-700">Scenario</span>
                                    </div>
                                    <p className="text-gray-600">
                                        Preparing regulatory submissions (dossiers) is manual, repetitive, and time-consuming. Inconsistent formatting and terminology across documents creates additional review cycles and delays.
                                    </p>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Our AI-assisted document generation accelerates regulatory submissions while ensuring consistency. Legacy paper documents can be converted through our <Link href="/product/scanning-solution" className="text-primary hover:underline font-medium">digitization services</Link>, and archived submissions are securely stored in our <Link href="/product/rms" className="text-primary hover:underline font-medium">records management system</Link> for quick retrieval during audits.
                                </p>

                                <ul className="space-y-3">
                                    {regulatoryDocFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="text-cyan-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
                                <div className="flex justify-center mb-8">
                                    <Image
                                        src="/images/solutions/Pharma/regulatory-compliance/Regulatory-Document-Generation.png"
                                        alt="Regulatory Submission Dashboard"
                                        width={800}
                                        height={450}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <TrendingUp className="text-cyan-600" />
                                    Submission Impact
                                </h3>

                                <div className="space-y-6">
                                    <div className="bg-white rounded-xl p-5 border border-gray-200">
                                        <div className="text-3xl font-bold text-cyan-600 mb-1">60%</div>
                                        <div className="text-gray-700 font-medium">Faster Document Preparation</div>
                                        <p className="text-gray-500 text-sm mt-2">AI-assisted generation with automated cross-referencing</p>
                                    </div>

                                    <div className="bg-white rounded-xl p-5 border border-gray-200">
                                        <div className="text-3xl font-bold text-cyan-600 mb-1">Consistent</div>
                                        <div className="text-gray-700 font-medium">Formatting & Terminology</div>
                                        <p className="text-gray-500 text-sm mt-2">Standardized outputs across all submission types</p>
                                    </div>

                                    <div className="bg-white rounded-xl p-5 border border-gray-200">
                                        <div className="text-3xl font-bold text-cyan-600 mb-1">Reduced</div>
                                        <div className="text-gray-700 font-medium">Submission Errors</div>
                                        <p className="text-gray-500 text-sm mt-2">Multi-region format support and validation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Key Benefits for Pharma
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {keyBenefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200">
                                    <CheckCircle className="text-purple-500 flex-shrink-0" sx={{ fontSize: 24 }} />
                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Compliance Section */}
                <section className="py-16 px-6 lg:px-12 bg-slate-900 text-white">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-12">
                            <Security sx={{ fontSize: 48 }} className="text-purple-400 mb-4" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Regulatory Compliance Support
                            </h2>
                            <p className="text-slate-300 max-w-2xl mx-auto">
                                Our solutions are built on a &quot;Validated-Ready&quot; architecture, aligned with global regulatory mandates for pharmaceutical manufacturing.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-slate-800 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-purple-400 mb-4">Regulators Expect:</h3>
                                <ul className="space-y-3">
                                    {complianceExpectations.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <CheckCircle className="text-purple-400" sx={{ fontSize: 18 }} />
                                            <span className="text-slate-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-slate-800 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-purple-400 mb-4">Our System Provides:</h3>
                                <ul className="space-y-3">
                                    {systemProvides.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <CheckCircle className="text-green-400" sx={{ fontSize: 18 }} />
                                            <span className="text-slate-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            <div className="bg-slate-800 px-6 py-4 rounded-lg text-center">
                                <div className="text-lg font-bold text-purple-400">FDA 21 CFR Part 11</div>
                                <div className="text-sm text-slate-400">Electronic Records</div>
                            </div>
                            <div className="bg-slate-800 px-6 py-4 rounded-lg text-center">
                                <div className="text-lg font-bold text-purple-400">EU GMP Annex 11</div>
                                <div className="text-sm text-slate-400">Computerised Systems</div>
                            </div>
                            <div className="bg-slate-800 px-6 py-4 rounded-lg text-center">
                                <div className="text-lg font-bold text-purple-400">ISO 9001</div>
                                <div className="text-sm text-slate-400">Quality Management</div>
                            </div>
                            <div className="bg-slate-800 px-6 py-4 rounded-lg text-center">
                                <div className="text-lg font-bold text-purple-400">ISO 27001</div>
                                <div className="text-sm text-slate-400">Information Security</div>
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
                                href="/solutions/pharmaceutical/quality-inspection-capa"
                                className="bg-green-50 border border-green-200 rounded-xl p-6 hover:shadow-lg hover:border-green-400 transition-all group"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600">
                                    Quality Inspection & CAPA
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    AI-powered visual inspection and CAPA management for quality excellence.
                                </p>
                                <span className="text-green-600 font-medium inline-flex items-center gap-1">
                                    Learn more <ArrowForward sx={{ fontSize: 16 }} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 lg:px-12 bg-purple-600">
                    <div className="container mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Streamline Your Regulatory Compliance?
                        </h2>
                        <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                            See how our document control and regulatory compliance solutions can prepare you for any audit.
                        </p>
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors shadow-lg inline-flex items-center gap-2"
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
