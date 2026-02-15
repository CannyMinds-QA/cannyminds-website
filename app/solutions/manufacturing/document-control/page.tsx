import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import {
    ArrowForward,
    CheckCircle,
    Description,
    Architecture,
    Verified,
    Speed,
    Security,
    Home,
    ChevronRight,
    FolderCopy,
    Rule,
    History,
    Lock,
    Assignment,
    Timeline,
} from "@mui/icons-material";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Document Control & SOP Management | Manufacturing Solutions ",
    description: "Centralized engineering drawing management, SOP control, and work instruction automation for manufacturing. Ensure version control, compliance, and traceability.",
    keywords: [
        "engineering document management",
        "CAD file management",
        "SOP management system",
        "work instruction control",
        "manufacturing document control",
        "technical document management",
        "engineering drawing management",
        "version control manufacturing",
        "ISO document control",
        "document lifecycle management",
    ],
    alternates: {
        canonical: "https://www.cannymindstech.com/solutions/manufacturing/document-control",
    },
    openGraph: {
        title: "Document Control & SOP Management | Manufacturing Solutions",
        description: "Transform engineering documentation with centralized control, automated approvals, and complete traceability.",
        type: 'website',
        url: "https://www.cannymindstech.com/solutions/manufacturing/document-control",
        siteName: 'CannyMinds',
        locale: 'en_US',
        images: [
            {
                url: "https://www.cannymindstech.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Document Control & SOP Management Solutions"
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Document Control & SOP Management | Manufacturing Solutions",
        description: "Transform engineering documentation with centralized control, automated approvals, and complete traceability.",
        images: ['https://www.cannymindstech.com/og-image.jpg'],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "name": "Document Control & SOP Management ",
            "description": "Engineering drawing management, SOP control, and work instruction automation for manufacturing excellence.",
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
                "name": "CannyECM Document Control",
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
                    name: "Document Control & SOP Management",
                },
            ],
        },
    ],
};

export default function DocumentControlPage() {
    const challenges = [
        {
            challenge: "Paper-based or shared-drive documents",
            impact: "Production delays and confusion",
            icon: FolderCopy,
        },
        {
            challenge: "No version control",
            impact: "Use of outdated drawings causing rework",
            icon: History,
        },
        {
            challenge: "Manual approvals",
            impact: "Engineering change delays",
            icon: Assignment,
        },
        {
            challenge: "Poor traceability",
            impact: "Audit failures and compliance risks",
            icon: Timeline,
        },
    ];

    const engineeringFeatures = [
        "Central repository for drawings and technical files",
        "Strict version control (latest approved version only)",
        "Approval workflows for design changes",
        "Access control by role and department",
        "CAD file format support (DWG, DXF, PDF)",
        "Drawing revision history tracking",
    ];

    const sopFeatures = [
        "Central SOP and Work Instruction repository",
        "Versioning with effective dates",
        "Automated review and approval cycles",
        "Controlled access on shop floor",
        "Training acknowledgment tracking",
        "Periodic review reminders",
    ];

    const benefits = [
        {
            title: "Eliminate Obsolete Documents",
            description: "Ensure operators always access the latest approved drawings and SOPs, preventing costly errors from outdated information.",
            icon: Verified,
        },
        {
            title: "Faster Approvals",
            description: "Automated workflows reduce design approval time from weeks to days, accelerating time-to-market.",
            icon: Speed,
        },
        {
            title: "Full Traceability",
            description: "Complete audit trail of all document changes, approvals, and access for regulatory compliance.",
            icon: Timeline,
        },
        {
            title: "Process Standardization",
            description: "Standardized SOPs and work instructions ensure consistent quality across all production lines.",
            icon: Rule,
        },
        {
            title: "Secure Access Control",
            description: "Role-based permissions ensure only authorized personnel can view, edit, or approve documents.",
            icon: Lock,
        },
        {
            title: "ISO Compliance Ready",
            description: "Built-in controls support ISO 9001, ISO 14001, and other quality management standards.",
            icon: Security,
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
                            <span className="text-gray-900 font-medium">Document Control & SOP Management</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-6">
                                    <Description sx={{ fontSize: 18 }} />
                                    Document Control
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Document Control & SOP Management
                                </h1>

                                <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    Centralized engineering document management with automated version control, approval workflows, and complete traceability for manufacturing excellence.
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
                                    src="/images/solutions/manfactureing/Document-Control-And-SOP-Management/Document-Control-SOP-Management.png"
                                    alt="Document Control Dashboard"
                                    width={600}
                                    height={450}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Challenges Section */}
                <section className="py-12 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Key Business Challenges
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Manufacturing organizations face critical document management challenges that impact production quality and compliance.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {challenges.map((item, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                    <div className="w-12 h-12 bg-red-100 rounded-[10px] flex items-center justify-center text-red-600 mb-4">
                                        <item.icon sx={{ fontSize: 28 }} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{item.challenge}</h3>
                                    <p className="text-red-600 text-sm font-medium">{item.impact}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Engineering Drawing Management */}
                <section className="py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-4">
                                    <Architecture sx={{ fontSize: 16 }} />
                                    Engineering Documents
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Engineering Drawing & Design Document Management
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Engineering drawings and CAD files undergo frequent revisions and approvals that must be tracked meticulously. Our solution provides a central repository with strict version control ensuring only the latest approved versions are accessible.
                                </p>

                                <ul className="space-y-3 mb-6">
                                    {engineeringFeatures.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle sx={{ fontSize: 20 }} className="text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                                    <p className="text-orange-800 font-medium">Key Benefits:</p>
                                    <ul className="text-orange-700 text-sm mt-2 space-y-1">
                                        <li>• Eliminate use of obsolete drawings</li>
                                        <li>• Faster design approvals</li>
                                        <li>• Full traceability of changes</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative flex justify-center">
                                <Image
                                    src="/images/solutions/manfactureing/Document-Control-And-SOP-Management/CAD-Viewer.png"
                                    alt="Engineering Drawing Management"
                                    width={600}
                                    height={450}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SOP Management */}
                <section className="py-12 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1 relative flex justify-center">
                                <Image
                                    src="/images/solutions/manfactureing/Document-Control-And-SOP-Management/SOP-Work-Instruction.png"
                                    alt="SOP & Work Instruction Control"
                                    width={600}
                                    height={450}
                                />
                            </div>

                            <div className="order-1 lg:order-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-4">
                                    <Assignment sx={{ fontSize: 16 }} />
                                    Process Documents
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    SOP, Work Instruction & Process Document Control
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Operators must follow the latest approved SOPs and work instructions to ensure consistent quality. Our system provides controlled access on the shop floor with automated review cycles and training acknowledgment tracking.
                                </p>

                                <ul className="space-y-3 mb-6">
                                    {sopFeatures.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle sx={{ fontSize: 20 }} className="text-green-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                                    <p className="text-orange-800 font-medium">Key Benefits:</p>
                                    <ul className="text-orange-700 text-sm mt-2 space-y-1">
                                        <li>• Process standardization across production lines</li>
                                        <li>• Reduced operational errors</li>
                                        <li>• Compliance with ISO standards</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Business Benefits
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Transform your document management with measurable improvements across operations, quality, and compliance.
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

                {/* Integration Section */}
                <section className="py-12 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Seamless Integration
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Our document control solution integrates with your existing manufacturing systems for a unified workflow experience.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-2">ERP Systems</h3>
                                <p className="text-gray-600 text-sm">SAP, Oracle, Microsoft Dynamics integration</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-2">CAD Software</h3>
                                <p className="text-gray-600 text-sm">AutoCAD, SolidWorks, CATIA compatibility</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-2">PLM Systems</h3>
                                <p className="text-gray-600 text-sm">Product Lifecycle Management integration</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-2">QMS Tools</h3>
                                <p className="text-gray-600 text-sm">Quality Management System connectivity</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Solutions */}
                <section className="py-12 px-6 lg:px-12">
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
                                    AI-powered production recording and paperless manufacturing operations.
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
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 px-6 lg:px-12 bg-orange-600">
                    <div className="container mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Transform Your Document Control?
                        </h2>
                        <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                            Contact us to discover how our document management solution can eliminate version confusion and ensure compliance.
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
