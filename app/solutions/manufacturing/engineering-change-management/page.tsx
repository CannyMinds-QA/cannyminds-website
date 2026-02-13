import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import {
    ArrowForward,
    CheckCircle,
    Speed,
    Security,
    Home,
    ChevronRight,
    ChangeCircle,
    Assessment,
    Notifications,
    History,
    AccountTree,
    Groups,
    Timeline,
    TaskAlt,
} from "@mui/icons-material";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Engineering Change Management (ECN/ECR) | Manufacturing Solutions | CannyMinds",
    description: "Controlled ECN/ECR workflows with impact analysis, automated approvals, notifications, and complete change history for manufacturing engineering teams.",
    keywords: [
        "engineering change management",
        "ECN workflow",
        "ECR management",
        "engineering change notice",
        "engineering change request",
        "change control system",
        "impact analysis software",
        "change approval workflow",
        "manufacturing change management",
        "PLM change management",
    ],
    alternates: {
        canonical: "https://www.cannymindstech.com/solutions/manufacturing/engineering-change-management",
    },
    openGraph: {
        title: "Engineering Change Management | Manufacturing Solutions",
        description: "Streamline ECN/ECR workflows with automated impact analysis, approvals, and complete traceability.",
        type: 'website',
        siteName: 'CannyMinds',
        locale: 'en_US',
        images: [
            {
                url: "https://www.cannymindstech.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Engineering Change Management Solutions"
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Engineering Change Management | Manufacturing Solutions",
        description: "Streamline ECN/ECR workflows with automated impact analysis, approvals, and complete traceability.",
        images: ['https://www.cannymindstech.com/og-image.jpg'],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Engineering Change Management | CannyMinds",
    "description": "Comprehensive ECN/ECR workflow management with impact analysis and automated approvals.",
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
        "name": "CannyECM Change Management",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web-based"
    },
    "datePublished": new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0]
};

export default function EngineeringChangeManagementPage() {
    const features = [
        {
            title: "Controlled ECN/ECR Workflows",
            description: "Structured change request and change notice workflows with configurable approval gates and routing rules.",
            icon: AccountTree,
        },
        {
            title: "Impact Analysis Documentation",
            description: "Comprehensive impact assessment templates covering technical, cost, quality, and schedule implications.",
            icon: Assessment,
        },
        {
            title: "Automated Approvals & Notifications",
            description: "Role-based approval routing with automatic notifications, reminders, and escalation rules.",
            icon: Notifications,
        },
        {
            title: "Complete Change History",
            description: "Immutable audit trail of all changes, approvals, comments, and revisions for full traceability.",
            icon: History,
        },
        {
            title: "Cross-Functional Coordination",
            description: "Involve engineering, manufacturing, quality, and procurement teams in the change review process.",
            icon: Groups,
        },
        {
            title: "Document Linkage",
            description: "Automatically link affected drawings, BOMs, specs, and work instructions to change records.",
            icon: ChangeCircle,
        },
    ];

    const workflowSteps = [
        {
            step: "1",
            title: "Change Request (ECR)",
            description: "Initiate change request with problem description, proposed solution, and justification.",
        },
        {
            step: "2",
            title: "Impact Assessment",
            description: "Cross-functional teams evaluate technical, cost, quality, and schedule impacts.",
        },
        {
            step: "3",
            title: "Review & Approval",
            description: "Stakeholders review assessment and approve or request modifications to the change.",
        },
        {
            step: "4",
            title: "Change Notice (ECN)",
            description: "Approved changes are documented with implementation instructions and affected items.",
        },
        {
            step: "5",
            title: "Implementation",
            description: "Execute change across affected documents, processes, and production with tracking.",
        },
        {
            step: "6",
            title: "Verification & Close",
            description: "Verify implementation effectiveness and formally close the change record.",
        },
    ];

    const benefits = [
        {
            title: "Faster Change Implementation",
            description: "Automated workflows and parallel approvals reduce change cycle time significantly.",
            icon: Speed,
        },
        {
            title: "Reduced Rework",
            description: "Thorough impact analysis prevents costly mistakes and production disruptions.",
            icon: TaskAlt,
        },
        {
            title: "End-to-End Traceability",
            description: "Complete audit trail from request to implementation for compliance and governance.",
            icon: Timeline,
        },
        {
            title: "Better Communication",
            description: "Automatic notifications ensure all stakeholders are informed of change status.",
            icon: Notifications,
        },
        {
            title: "Compliance Ready",
            description: "Documented change control process meets ISO, IATF, and industry-specific requirements.",
            icon: Security,
        },
        {
            title: "Cross-Functional Alignment",
            description: "Structured process ensures all departments are aligned before changes are implemented.",
            icon: Groups,
        },
    ];

    const impactAreas = [
        { area: "Engineering", items: ["Drawings", "CAD models", "Specifications", "BOMs"] },
        { area: "Manufacturing", items: ["Work instructions", "Process flows", "Tooling", "Equipment"] },
        { area: "Quality", items: ["Inspection criteria", "Test procedures", "Control plans", "FMEA"] },
        { area: "Supply Chain", items: ["Vendor specs", "Purchase orders", "Inventory", "Lead times"] },
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
                            <span className="text-gray-900 font-medium">Engineering Change Management</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-6">
                                    <ChangeCircle sx={{ fontSize: 18 }} />
                                    Change Management
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Engineering Change Management
                                </h1>

                                <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    Controlled ECN/ECR workflows with comprehensive impact analysis, automated approvals, real-time notifications, and complete change history for manufacturing excellence.
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
                                        href="/solutions/manufacturing/document-control"
                                        className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors border border-orange-200"
                                    >
                                        Document Control
                                    </Link>
                                </div>
                            </div>

                            <div className="relative flex justify-center">
                                <Image
                                    src="/images/solutions/manfactureing/Engineering-Change-Management/Engineering-Change-Management.png"
                                    alt="Engineering Change Management Dashboard"
                                    width={600}
                                    height={450}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problem Statement */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                The Challenge of Engineering Changes
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Engineering changes must be reviewed, approved, and communicated accurately to avoid costly rework and production delays. Without proper change control:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <p className="font-medium text-red-800">Rework and Scrap</p>
                                        <p className="text-red-600 text-sm">Production using outdated designs wastes materials and labor</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <p className="font-medium text-red-800">Delayed Time-to-Market</p>
                                        <p className="text-red-600 text-sm">Slow approval processes delay product launches</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <p className="font-medium text-red-800">Communication Gaps</p>
                                        <p className="text-red-600 text-sm">Teams unaware of changes cause inconsistencies</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <p className="font-medium text-red-800">Audit Findings</p>
                                        <p className="text-red-600 text-sm">Incomplete change documentation leads to non-conformances</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Comprehensive Change Management Features
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Our ECN/ECR solution provides all the tools needed for effective engineering change control.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
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

                {/* ECN/ECR Workflow */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            ECN/ECR Workflow Process
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Structured change management process from initial request through implementation and verification.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {workflowSteps.map((step, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                    <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                                        {step.step}
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 text-sm">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact Analysis Areas */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Cross-Functional Impact Analysis
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Comprehensive impact assessment across all affected departments and documentation.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {impactAreas.map((area, index) => (
                                <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">{area.area}</h3>
                                    <ul className="space-y-2">
                                        {area.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-700">
                                                <CheckCircle sx={{ fontSize: 16 }} className="text-orange-600" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Business Benefits
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Transform your engineering change process with measurable improvements.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-orange-100 rounded-[10px] flex items-center justify-center text-orange-600 mb-4">
                                        <benefit.icon sx={{ fontSize: 28 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Solutions */}
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
                                    Centralized engineering drawings and SOP management with version control.
                                </p>
                                <span className="inline-flex items-center gap-1 text-orange-600 font-medium text-sm">
                                    Learn More <ArrowForward sx={{ fontSize: 16 }} />
                                </span>
                            </Link>

                            <Link
                                href="/solutions/manufacturing/quality-management"
                                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-300 transition-all"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                    Quality Management
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm">
                                    Digitized QA/QC records with CAPA and NCR workflow automation.
                                </p>
                                <span className="inline-flex items-center gap-1 text-orange-600 font-medium text-sm">
                                    Learn More <ArrowForward sx={{ fontSize: 16 }} />
                                </span>
                            </Link>

                            <Link
                                href="/solutions/manufacturing/vendor-procurement"
                                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-300 transition-all"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                    Vendor & Procurement
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm">
                                    Centralized vendor documents and contract lifecycle management.
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
                            Ready to Streamline Engineering Changes?
                        </h2>
                        <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                            Contact us to discover how our ECN/ECR solution can reduce change cycle time and eliminate costly rework.
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
