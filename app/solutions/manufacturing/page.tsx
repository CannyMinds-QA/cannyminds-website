import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowForward,
    CheckCircle,
    Factory,
    Settings,
    Speed,
    Security,
    Home,
    ChevronRight,
    Description,
    Verified,
    ChangeCircle,
    Business,
    Build,
    LocalShipping,
} from "@mui/icons-material";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Manufacturing Solutions | Digital Transformation for Industry 4.0 | CannyMinds",
    description: "Comprehensive manufacturing solutions including shop floor automation, document control, quality management, engineering change management, and equipment maintenance.",
    keywords: [
        "manufacturing automation",
        "shop floor automation",
        "manufacturing document control",
        "quality management system",
        "engineering change management",
        "equipment maintenance software",
        "vendor management",
        "FMCG digital transformation",
        "paperless manufacturing",
        "Industry 4.0 solutions",
        "smart manufacturing",
    ],
    alternates: {
        canonical: "/solutions/manufacturing",
    },
    openGraph: {
        title: "Manufacturing Solutions",
        description: "Transform your manufacturing operations with intelligent automation and real-time quality control.",
        images: [{ url: "/images/manufacturing-solutions-og.jpg", width: 1200, height: 630 }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Manufacturing Solutions | CannyMinds",
    "description": "Digital transformation solutions for manufacturing including shop floor automation, production recording, and workflow management.",
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

export default function ManufacturingOverviewPage() {
    const solutions = [
        {
            title: "Shop Floor Automation",
            description: "Transform manufacturing operations with AI-powered shop floor automation, real-time monitoring, and intelligent process control.",
            href: "/solutions/manufacturing/shop-floor-automation",
            icon: Settings,
        },
        {
            title: "Document Control & SOPs",
            description: "Centralized engineering drawing management, SOP control, and work instruction automation with version control.",
            href: "/solutions/manufacturing/document-control",
            icon: Description,
        },
        {
            title: "Quality Management",
            description: "Digitized QA/QC records with automated CAPA workflows, NCR tracking, and complete audit trails.",
            href: "/solutions/manufacturing/quality-management",
            icon: Verified,
        },
        {
            title: "Engineering Change Management",
            description: "Controlled ECN/ECR workflows with impact analysis, automated approvals, and complete change history.",
            href: "/solutions/manufacturing/engineering-change-management",
            icon: ChangeCircle,
        },
        {
            title: "Vendor & Procurement",
            description: "Centralized vendor document repository with contract lifecycle management and approval workflows.",
            href: "/solutions/manufacturing/vendor-procurement",
            icon: Business,
        },
        {
            title: "Equipment Maintenance",
            description: "Digital equipment manuals, service logs, and asset documentation with maintenance workflows.",
            href: "/solutions/manufacturing/equipment-maintenance",
            icon: Build,
        },
        {
            title: "FMCG Digital Transformation",
            description: "End-to-end digital transformation solutions for fast-moving consumer goods manufacturing.",
            href: "/solutions/manufacturing/fmcg-digital-transformation",
            icon: LocalShipping,
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
                        <nav className="flex items-center gap-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-primary flex items-center gap-1">
                                <Home sx={{ fontSize: 16 }} />
                                Home
                            </Link>
                            <ChevronRight sx={{ fontSize: 16 }} className="text-gray-400" />
                            <span className="text-gray-900 font-medium">Manufacturing Solutions</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-6">
                                    <Factory sx={{ fontSize: 18 }} />
                                    Manufacturing Industry
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    AI-Powered Manufacturing Solutions
                                </h1>

                                <div className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    Transform your manufacturing operations with intelligent automation, predictive maintenance, and real-time quality control powered by AI.
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Request Demo
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                </div>
                            </div>

                            <div className="relative flex justify-center">
                                <Image
                                    src="/images/solutions/manfactureing/overview/Mechanical-overview.png"
                                    alt="Mechanical Engineering Overview"
                                    width={600}
                                    height={450}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solutions Grid */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Our Manufacturing Solutions
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {solutions.map((solution, index) => (
                                <Link
                                    key={index}
                                    href={solution.href}
                                    className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-300 transition-all"
                                >
                                    <div className="w-12 h-12 bg-orange-100 rounded-[10px] flex items-center justify-center text-orange-600 mb-4">
                                        <solution.icon sx={{ fontSize: 28 }} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                        {solution.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {solution.description}
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-orange-600 font-medium">
                                        Learn More <ArrowForward sx={{ fontSize: 16 }} />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 lg:px-12 bg-orange-600">
                    <div className="container mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Transform Your Manufacturing?
                        </h2>
                        <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                            Contact us to discuss how our AI-powered solutions can optimize your production operations.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
                        >
                            Schedule Consultation
                            <ArrowForward sx={{ fontSize: 20 }} />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
