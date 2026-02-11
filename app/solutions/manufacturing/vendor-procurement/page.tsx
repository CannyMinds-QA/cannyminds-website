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
    Business,
    Description,
    Gavel,
    Search,
    Timer,
    Visibility,
    ShoppingCart,
    Handshake,
    Inventory,
} from "@mui/icons-material";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Vendor & Procurement Document Management | Manufacturing Solutions | CannyMinds",
    description: "Centralized vendor document repository and contract lifecycle management with approval workflows and easy retrieval for manufacturing procurement teams.",
    keywords: [
        "vendor document management",
        "procurement document control",
        "contract lifecycle management",
        "supplier document management",
        "purchase document workflow",
        "vendor governance",
        "contract management software",
        "procurement automation",
        "supplier compliance",
        "manufacturing procurement",
    ],
    alternates: {
        canonical: "/solutions/manufacturing/vendor-procurement",
    },
    openGraph: {
        title: "Vendor & Procurement Management | Manufacturing Solutions",
        description: "Streamline vendor documentation and contract management with centralized control and automated workflows.",
        images: [{ url: "/images/manufacturing-procurement-og.jpg", width: 1200, height: 630 }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Vendor & Procurement Management | CannyMinds",
    "description": "Comprehensive vendor document and contract management for manufacturing procurement.",
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
        "name": "CannyECM Vendor Management",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web-based"
    },
    "datePublished": new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0]
};

export default function VendorProcurementPage() {
    const features = [
        {
            title: "Centralized Vendor Repository",
            description: "Single source of truth for all vendor documents including certificates, specifications, and correspondence.",
            icon: Business,
        },
        {
            title: "Contract Lifecycle Management",
            description: "Complete contract management from creation through negotiation, execution, and renewal tracking.",
            icon: Gavel,
        },
        {
            title: "Purchase Document Workflows",
            description: "Automated approval workflows for purchase orders, RFQs, and vendor agreements.",
            icon: ShoppingCart,
        },
        {
            title: "Easy Audit Retrieval",
            description: "Quick search and retrieval of vendor documents during audits with full traceability.",
            icon: Search,
        },
        {
            title: "Expiry Alerts & Renewals",
            description: "Automated notifications for contract expirations, certificate renewals, and compliance deadlines.",
            icon: Timer,
        },
        {
            title: "Transparent Documentation",
            description: "Complete visibility into vendor relationships with documented communication history.",
            icon: Visibility,
        },
    ];

    const documentTypes = [
        { type: "Vendor Certificates", examples: ["ISO certificates", "Quality certifications", "Insurance documents"] },
        { type: "Contracts & Agreements", examples: ["Master agreements", "NDAs", "Service level agreements"] },
        { type: "Purchase Documents", examples: ["Purchase orders", "RFQs", "Quotations", "Invoices"] },
        { type: "Technical Documents", examples: ["Material specs", "Test reports", "Compliance certificates"] },
        { type: "Correspondence", examples: ["Emails", "Meeting notes", "Change requests"] },
        { type: "Performance Records", examples: ["Scorecards", "Audit reports", "Quality metrics"] },
    ];

    const benefits = [
        {
            title: "Better Vendor Governance",
            description: "Comprehensive oversight of vendor relationships with documented compliance and performance tracking.",
            icon: Handshake,
        },
        {
            title: "Reduced Procurement Cycle Time",
            description: "Automated workflows accelerate approval processes and reduce procurement delays.",
            icon: Speed,
        },
        {
            title: "Transparent Documentation",
            description: "Clear audit trail of all vendor interactions and document changes.",
            icon: Visibility,
        },
        {
            title: "Compliance Assurance",
            description: "Ensure vendors meet regulatory and contractual requirements with tracked certifications.",
            icon: Security,
        },
        {
            title: "Cost Savings",
            description: "Prevent contract lapses, duplicate purchases, and missed renewal opportunities.",
            icon: Inventory,
        },
        {
            title: "Risk Mitigation",
            description: "Proactive alerts for expiring documents and contracts reduce supply chain risks.",
            icon: Timer,
        },
    ];

    const workflowSteps = [
        {
            step: "1",
            title: "Vendor Onboarding",
            description: "Collect and validate vendor documentation during registration.",
        },
        {
            step: "2",
            title: "Document Storage",
            description: "Organize documents in structured vendor folders with metadata tagging.",
        },
        {
            step: "3",
            title: "Contract Management",
            description: "Track contract terms, obligations, and renewal dates.",
        },
        {
            step: "4",
            title: "Purchase Workflows",
            description: "Route purchase documents through approval chains automatically.",
        },
        {
            step: "5",
            title: "Compliance Monitoring",
            description: "Track certificate validity and compliance status continuously.",
        },
        {
            step: "6",
            title: "Performance Review",
            description: "Document vendor performance and maintain historical records.",
        },
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
                            <span className="text-gray-900 font-medium">Vendor & Procurement</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-6">
                                    <Business sx={{ fontSize: 18 }} />
                                    Vendor Management
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Vendor & Procurement Document Management
                                </h1>

                                <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    Centralized vendor document repository with contract lifecycle management, automated approval workflows, and easy retrieval during audits.
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
                                        href="/product/document-management"
                                        className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors border border-orange-200"
                                    >
                                        Explore CannyECM
                                    </Link>
                                </div>
                            </div>

                            <div className="relative flex justify-center">
                                <Image
                                    src="/images/solutions/manfactureing/Vendor-Procurement-Document-Management/Vendor-Procurement-Document-Management.png"
                                    alt="Vendor Document Management Dashboard"
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
                                The Challenge with Vendor Documentation
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Vendor documents and contracts are often spread across emails and shared folders, risking loss and creating compliance gaps. Common challenges include:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <p className="font-medium text-red-800">Scattered Documents</p>
                                        <p className="text-red-600 text-sm">Vendor files in emails, drives, and filing cabinets</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <p className="font-medium text-red-800">Expired Certificates</p>
                                        <p className="text-red-600 text-sm">No alerts for expiring vendor certifications</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <p className="font-medium text-red-800">Contract Lapses</p>
                                        <p className="text-red-600 text-sm">Missed renewal dates causing service disruptions</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <p className="font-medium text-red-800">Audit Difficulties</p>
                                        <p className="text-red-600 text-sm">Time-consuming document searches during audits</p>
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
                            Comprehensive Vendor Management Features
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Our solution provides end-to-end vendor document management from onboarding through performance tracking.
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
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Managed Document Types
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Comprehensive management of all vendor and procurement documentation.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {documentTypes.map((doc, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <Description className="text-orange-600" sx={{ fontSize: 24 }} />
                                        {doc.type}
                                    </h3>
                                    <ul className="space-y-2">
                                        {doc.examples.map((example, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                                                <CheckCircle sx={{ fontSize: 16 }} className="text-green-600" />
                                                {example}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Workflow */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Vendor Document Workflow
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Streamlined process from vendor onboarding through ongoing compliance monitoring.
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

                {/* Benefits Section */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Business Benefits
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Transform your vendor management with measurable improvements in governance, efficiency, and compliance.
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
                                    Engineering drawings, SOPs, and work instruction management.
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
                                href="/solutions/manufacturing/equipment-maintenance"
                                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-300 transition-all"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                    Equipment Maintenance
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm">
                                    Digital maintenance logs and asset documentation management.
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
                            Ready to Streamline Vendor Management?
                        </h2>
                        <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                            Contact us to discover how our vendor document management solution can improve governance and reduce procurement cycle time.
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
