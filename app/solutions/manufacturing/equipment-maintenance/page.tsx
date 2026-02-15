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
    Build,
    Description,
    MenuBook,
    History,
    Timer,
    Verified,
    Engineering,
    Settings,
    Category,
    Assessment,
} from "@mui/icons-material";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Equipment Maintenance & Asset Documentation | Manufacturing Solutions ",
    description: "Digital equipment manuals, service logs, and asset documentation management with maintenance workflows and secure long-term retention for manufacturing.",
    keywords: [
        "equipment maintenance documentation",
        "asset documentation management",
        "maintenance log software",
        "equipment manual management",
        "preventive maintenance documentation",
        "asset management system",
        "maintenance workflow automation",
        "equipment service records",
        "manufacturing asset management",
        "maintenance compliance",
    ],
    alternates: {
        canonical: "https://www.cannymindstech.com/solutions/manufacturing/equipment-maintenance",
    },
    openGraph: {
        title: "Equipment Maintenance | Manufacturing Solutions",
        description: "Comprehensive equipment documentation and maintenance workflow management for operational continuity.",
        type: 'website',
        url: "https://www.cannymindstech.com/solutions/manufacturing/equipment-maintenance",
        siteName: 'CannyMinds',
        locale: 'en_US',
        images: [
            {
                url: "https://www.cannymindstech.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Equipment Maintenance Solutions"
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Equipment Maintenance | Manufacturing Solutions",
        description: "Comprehensive equipment documentation and maintenance workflow management for operational continuity.",
        images: ['https://www.cannymindstech.com/og-image.jpg'],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "name": "Equipment Maintenance ",
            "description": "Digital equipment documentation and maintenance management for manufacturing operations.",
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
                "name": "CannyECM Maintenance Management",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web-based"
            },
            "datePublished": new Date().toISOString().split('T')[0],
            "dateModified": new Date().toISOString().split('T')[0]
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: `${baseUrl}/`,
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Solutions",
                    item: `${baseUrl}/solutions`,
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Manufacturing Solutions",
                    item: `${baseUrl}/solutions/manufacturing`,
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: "Equipment Maintenance",
                },
            ],
        },
    ],
};

export default function EquipmentMaintenancePage() {
    const features = [
        {
            title: "Digital Equipment Manuals",
            description: "Centralized repository for all equipment manuals, technical specifications, and operational guides.",
            icon: MenuBook,
        },
        {
            title: "Service Log Management",
            description: "Complete digital service logs with maintenance history, parts replacement, and technician notes.",
            icon: History,
        },
        {
            title: "Maintenance Approval Workflows",
            description: "Automated approval processes for maintenance requests, work orders, and service completion.",
            icon: Verified,
        },
        {
            title: "Asset-wise Document Mapping",
            description: "Organize all documents by equipment/asset with easy navigation and comprehensive asset profiles.",
            icon: Category,
        },
        {
            title: "Secure Long-term Retention",
            description: "Compliant document retention with configurable policies aligned to regulatory requirements.",
            icon: Security,
        },
        {
            title: "Preventive Maintenance Scheduling",
            description: "Document-driven PM schedules with automatic reminders and compliance tracking.",
            icon: Timer,
        },
    ];

    const documentTypes = [
        { type: "Equipment Manuals", items: ["Operating manuals", "Technical specifications", "Installation guides", "Troubleshooting guides"] },
        { type: "Service Records", items: ["Maintenance logs", "Service reports", "Parts replacement records", "Calibration certificates"] },
        { type: "Compliance Documents", items: ["Safety inspections", "Regulatory certifications", "Audit reports", "Compliance checklists"] },
        { type: "Training Materials", items: ["Operator training", "Safety procedures", "Maintenance SOPs", "Quick reference guides"] },
    ];

    const benefits = [
        {
            title: "Improved Asset Uptime",
            description: "Quick access to manuals and service history enables faster troubleshooting and repairs.",
            stat: "30%",
            statLabel: "Reduction in downtime",
        },
        {
            title: "Faster Troubleshooting",
            description: "Instant access to equipment documentation accelerates problem diagnosis.",
            stat: "50%",
            statLabel: "Faster resolution",
        },
        {
            title: "Compliance Ready",
            description: "Complete maintenance records meet regulatory and audit requirements.",
            stat: "100%",
            statLabel: "Audit trail coverage",
        },
    ];

    const workflowSteps = [
        {
            step: "1",
            title: "Asset Registration",
            description: "Register equipment with all relevant documentation and specifications.",
        },
        {
            step: "2",
            title: "Document Upload",
            description: "Upload manuals, specs, and maintenance procedures to asset profiles.",
        },
        {
            step: "3",
            title: "PM Scheduling",
            description: "Set up preventive maintenance schedules with document references.",
        },
        {
            step: "4",
            title: "Work Order Management",
            description: "Create and track maintenance work orders with approval workflows.",
        },
        {
            step: "5",
            title: "Service Documentation",
            description: "Record service activities, parts used, and technician observations.",
        },
        {
            step: "6",
            title: "History & Reporting",
            description: "Maintain complete maintenance history and generate compliance reports.",
        },
    ];

    const complianceFeatures = [
        { feature: "Complete audit trails", description: "Track all document access and modifications" },
        { feature: "Electronic signatures", description: "Secure approval and sign-off processes" },
        { feature: "Retention policies", description: "Automated document lifecycle management" },
        { feature: "Access controls", description: "Role-based permissions for sensitive documents" },
        { feature: "Version control", description: "Track all document revisions and changes" },
        { feature: "Backup & recovery", description: "Secure document storage with disaster recovery" },
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
                            <span className="text-gray-900 font-medium">Equipment Maintenance</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-6">
                                    <Build sx={{ fontSize: 18 }} />
                                    Asset Management
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Equipment Maintenance & Asset Documentation
                                </h1>

                                <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    Digital equipment manuals and service logs with maintenance approval workflows, asset-wise document mapping, and secure long-term retention for operational continuity.
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
                                        href="/product/enterprise-content-management"
                                        className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors border border-orange-200"
                                    >
                                        Explore CannyECM
                                    </Link>
                                </div>
                            </div>

                            <div className="relative flex justify-center">
                                <Image
                                    src="/images/solutions/manfactureing/Equipment-Maintenance-And-Asset-Documentation/Equipment-Maintenance.png"
                                    alt="Equipment Maintenance Dashboard"
                                    width={600}
                                    height={450}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problem Statement */}
                <section className="py-12 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                The Importance of Maintenance Documentation
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Maintenance logs and equipment manuals are required for operational continuity and audit compliance. Without proper documentation management:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <p className="font-medium text-red-800">Extended Downtime</p>
                                        <p className="text-red-600 text-sm">Technicians waste time searching for manuals</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <p className="font-medium text-red-800">Incomplete History</p>
                                        <p className="text-red-600 text-sm">Missing service records affect troubleshooting</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <p className="font-medium text-red-800">Compliance Risk</p>
                                        <p className="text-red-600 text-sm">Audit failures due to missing documentation</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <p className="font-medium text-red-800">Knowledge Loss</p>
                                        <p className="text-red-600 text-sm">Institutional knowledge leaves with technicians</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Comprehensive Maintenance Documentation
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Our solution provides complete equipment documentation management from manuals to maintenance history.
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

                {/* Document Types */}
                <section className="py-12 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Managed Document Types
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Comprehensive management of all equipment and maintenance documentation.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {documentTypes.map((doc, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <Description className="text-orange-600" sx={{ fontSize: 24 }} />
                                        {doc.type}
                                    </h3>
                                    <ul className="space-y-2">
                                        {doc.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                                                <CheckCircle sx={{ fontSize: 16 }} className="text-green-600" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Workflow */}
                <section className="py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Maintenance Documentation Workflow
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Streamlined process from asset registration through comprehensive maintenance history.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {workflowSteps.map((step, index) => (
                                <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100">
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

                {/* Benefits with Stats */}
                <section className="py-12 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Measurable Business Benefits
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Transform your maintenance operations with quantifiable improvements.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
                                    <div className="text-5xl font-bold text-orange-600 mb-2">{benefit.stat}</div>
                                    <div className="text-orange-700 font-medium mb-4">{benefit.statLabel}</div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Compliance Features */}
                <section className="py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Compliance & Security Features
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Built-in compliance features ensure your maintenance documentation meets regulatory requirements.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {complianceFeatures.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                    <CheckCircle className="text-green-600 flex-shrink-0" sx={{ fontSize: 24 }} />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">{item.feature}</h3>
                                        <p className="text-gray-600 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Solutions */}
                <section className="py-12 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Related Manufacturing Solutions
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Link
                                href="/solutions/manufacturing/shop-floor-automation"
                                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-300 transition-all"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                    Shop Floor Automation
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm">
                                    AI-powered production recording and paperless manufacturing.
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
                <section className="py-12 px-6 lg:px-12 bg-orange-600">
                    <div className="container mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Improve Equipment Uptime?
                        </h2>
                        <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                            Contact us to discover how our maintenance documentation solution can reduce downtime and ensure compliance.
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
