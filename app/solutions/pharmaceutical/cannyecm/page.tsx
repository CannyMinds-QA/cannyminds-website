import type { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import {
    Description,
    CheckCircle,
    ArrowForward,
    VerifiedUser,
    Settings,
    History,
    Badge,
    BugReport,
    Assessment,
    Policy,
    Approval,
    CompareArrows,
    Groups,
    Security,
} from '@mui/icons-material';

export const metadata: Metadata = {
    title: 'CannyECM for Pharmaceutical | Enterprise Content Management | FDA 21 CFR Part 11',
    description: 'CannyECM - unified platform for pharmaceutical document management. SOP, STP, change control, deviation management, QMS integration, and license tracking. FDA 21 CFR Part 11 compliant.',
    keywords: [
        'pharmaceutical ECM',
        'enterprise content management pharma',
        'FDA 21 CFR Part 11 ECM',
        'GMP document management',
        'pharmaceutical document control',
        'SOP management pharma',
        'QMS integration pharma',
        'change control pharmaceutical',
    ],
    openGraph: {
        title: 'CannyECM for Pharmaceutical | Enterprise Content Management',
        description: 'Unified platform for pharmaceutical document management with FDA 21 CFR Part 11 compliance.',
        images: [{ url: '/images/cannyecm-pharma-og.jpg', width: 1200, height: 630 }],
    },
};

export default function CannyECMPage() {
    const ecmModules = [
        {
            id: "document-control",
            title: "Document Control & Approval Workflows",
            description: "Automated routing and approval processes for document lifecycle management.",
            icon: Approval,
            features: [
                "Role-based routing (QA reviewers, Approvers)",
                "Configurable workflow states (Draft → Review → Approve → Publish)",
                "Automatic email notifications at each stage",
                "Escalations and reminders for pending approvals",
                "Electronic signatures with full audit trail",
            ],
            pharmaValue: "Full digital trail of who did what and when—critical for FDA and EMA inspections.",
        },
        {
            id: "sop-management",
            title: "SOP (Standard Operating Procedures)",
            description: "Complete SOP lifecycle management from creation to retirement.",
            icon: Description,
            features: [
                "Creation, revision, and controlled publishing",
                "Revision control with version comparison",
                "Retire/supersede outdated procedures",
                "Assignment to functional groups",
                "Role-specific document access",
            ],
            pharmaValue: "Regulated organizations maintain SOPs that are always current, easily auditable, and role-specific.",
        },
        {
            id: "stp-protocol",
            title: "STP & Protocol Management",
            description: "Standard Test Procedures and protocol management for quality control.",
            icon: VerifiedUser,
            features: [
                "Secure storage with traceable history",
                "Automated access restrictions",
                "Link COA to product batches",
                "One-place retrieval of release documentation",
                "Quick audit trails for inspections",
            ],
            pharmaValue: "Traceable product quality records for regulatory compliance and customer trust.",
        },
        {
            id: "change-control",
            title: "Change Control",
            description: "Manage changes to controlled documents and processes.",
            icon: Settings,
            features: [
                "Change requests with structured forms",
                "Impact assessment tracking",
                "Multi-level approval routing",
                "Documentation of reason and authorization",
                "CAPA integration for corrective actions",
            ],
            pharmaValue: "Any change to controlled docs or processes is documented, approved, and traceable.",
        },
        {
            id: "deviation-management",
            title: "Deviation Management",
            description: "Track and investigate deviations from standard procedures.",
            icon: BugReport,
            features: [
                "Raise deviation against SOP/STP",
                "Attach evidence and photos",
                "Root cause tracking",
                "Approval/closure workflow",
                "Integration with CAPA processes",
            ],
            pharmaValue: "Mandatory part of CAPA and internal QA processes.",
        },
        {
            id: "license-management",
            title: "License Document Management",
            description: "Track licenses, permits, and certifications with expiry alerts.",
            icon: Badge,
            features: [
                "Expiry alerts and notifications",
                "Document classification by type",
                "Renewals workflow automation",
                "License expiry calendars",
                "Compliance tracking dashboard",
            ],
            pharmaValue: "Prevents legal lapses due to expired licenses.",
        },
        {
            id: "qms-integration",
            title: "QMS Integration",
            description: "Forms the document backbone of Quality Management System.",
            icon: Assessment,
            features: [
                "Document control integration",
                "Change control integration",
                "Training records management",
                "CAPA tracking support",
                "Audit tracking and findings",
            ],
            pharmaValue: "Helps pharma firms align with ISO 9001, ISO 27001, and FDA 21 CFR Part 11.",
        },
        {
            id: "policies-manuals",
            title: "Policies & Manuals",
            description: "Corporate policies, quality manuals, and compliance documentation.",
            icon: Policy,
            features: [
                "Version control for all policies",
                "Controlled distribution to departments",
                "Read/acknowledge tracking",
                "Policy awareness documentation",
                "Audit-ready policy repository",
            ],
            pharmaValue: "Regulatory bodies expect documented policy awareness across departments.",
        },
    ];

    const complianceFeatures = [
        { standard: "FDA 21 CFR Part 11", description: "Electronic Records & Signatures" },
        { standard: "EU GMP Annex 11", description: "Computerised Systems" },
        { standard: "ISO 9001", description: "Quality Management Systems" },
        { standard: "ISO 27001", description: "Information Security Management" },
        { standard: "ISO 15489", description: "Records Management" },
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
            <Navigation />
            <main className="min-h-screen bg-white pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <Description sx={{ fontSize: 18 }} />
                                Enterprise Content Management
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                CannyECM for Pharmaceutical
                            </h1>
                            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                                A unified platform to store, organize, search, retrieve, and secure all enterprise documents.
                                CannyECM delivers centralized control for SOPs, STPs, Protocols, Specifications, COAs, QMS records,
                                and Manuals—all retrievable by role/department and fully traceable.
                            </p>
                            <p className="text-lg text-gray-700 font-medium mb-8">
                                FDA 21 CFR Part 11 compliant with electronic signatures and complete audit trails.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-2"
                                >
                                    Request Demo
                                    <ArrowForward sx={{ fontSize: 18 }} />
                                </Link>
                                <Link
                                    href="/solutions/pharmaceutical/ai-quality"
                                    className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all"
                                >
                                    View AI Solutions →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Navigation */}
                <section className="py-8 px-4 md:px-8 bg-gray-50 border-y border-gray-200">
                    <div className="max-w-7xl mx-auto">
                        <p className="text-sm font-semibold text-gray-500 mb-4">JUMP TO MODULE:</p>
                        <div className="flex flex-wrap gap-2">
                            {ecmModules.map((module) => (
                                <a
                                    key={module.id}
                                    href={`#${module.id}`}
                                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-primary hover:text-primary transition-all"
                                >
                                    {module.title.split(' ')[0]}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ECM Modules */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            CannyECM Modules
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Comprehensive document management capabilities designed for regulated pharmaceutical environments.
                        </p>

                        <div className="space-y-12">
                            {ecmModules.map((module, idx) => (
                                <div
                                    key={module.id}
                                    id={module.id}
                                    className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all"
                                >
                                    <div className="grid lg:grid-cols-3 gap-8">
                                        <div className="lg:col-span-2">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                                    <module.icon sx={{ fontSize: 28 }} />
                                                </div>
                                                <div>
                                                    <span className="text-xs font-bold text-primary">MODULE {idx + 1}</span>
                                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">{module.title}</h3>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 mb-6">{module.description}</p>
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {module.features.map((feature, fIdx) => (
                                                    <div key={fIdx} className="flex items-start gap-2">
                                                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 18 }} />
                                                        <span className="text-gray-700 text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                            <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                                                <VerifiedUser sx={{ fontSize: 20 }} />
                                                Pharma Value
                                            </h4>
                                            <p className="text-blue-700">{module.pharmaValue}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="py-16 px-4 md:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Key Benefits for Pharma
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                            {keyBenefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200">
                                    <CheckCircle className="text-primary flex-shrink-0" sx={{ fontSize: 24 }} />
                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Compliance Section */}
                <section className="py-16 px-4 md:px-8 bg-slate-900 text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <Security sx={{ fontSize: 32 }} className="text-blue-400" />
                            <h2 className="text-2xl md:text-3xl font-bold">
                                Regulatory Compliance
                            </h2>
                        </div>
                        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
                            CannyECM is built on a "Validated-Ready" architecture, aligned with global regulatory mandates.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            {complianceFeatures.map((item, idx) => (
                                <div key={idx} className="bg-slate-800 p-4 rounded-lg text-center">
                                    <div className="text-lg font-bold text-blue-400 mb-1">{item.standard}</div>
                                    <div className="text-sm text-slate-400">{item.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Solutions */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Related Solutions
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link
                                href="/solutions/pharmaceutical/cannyscan"
                                className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 hover:shadow-lg hover:border-cyan-400 transition-all group"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600">CannyScan</h3>
                                <p className="text-gray-600 mb-4">Document digitization with OCR, barcode extraction, and quality checks.</p>
                                <span className="text-cyan-600 font-medium inline-flex items-center gap-1">
                                    Learn more <ArrowForward sx={{ fontSize: 16 }} />
                                </span>
                            </Link>
                            <Link
                                href="/solutions/pharmaceutical/cannyrms"
                                className="bg-amber-50 border border-amber-200 rounded-xl p-6 hover:shadow-lg hover:border-amber-400 transition-all group"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600">CannyRMS</h3>
                                <p className="text-gray-600 mb-4">Physical records management for files, cartons, and storage locations.</p>
                                <span className="text-amber-600 font-medium inline-flex items-center gap-1">
                                    Learn more <ArrowForward sx={{ fontSize: 16 }} />
                                </span>
                            </Link>
                            <Link
                                href="/solutions/pharmaceutical/ai-quality"
                                className="bg-purple-50 border border-purple-200 rounded-xl p-6 hover:shadow-lg hover:border-purple-400 transition-all group"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600">AI Solutions</h3>
                                <p className="text-gray-600 mb-4">GenAI-powered quality inspection, deviation analysis, and compliance.</p>
                                <span className="text-purple-600 font-medium inline-flex items-center gap-1">
                                    Learn more <ArrowForward sx={{ fontSize: 16 }} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 px-4 md:px-8 bg-primary">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Transform Your Document Management?
                        </h2>
                        <p className="text-blue-100 mb-8">
                            See how CannyECM can streamline compliance and improve operational efficiency.
                        </p>
                        <Link
                            href="/contact"
                            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
                        >
                            Schedule a Demo
                            <ArrowForward sx={{ fontSize: 18 }} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
