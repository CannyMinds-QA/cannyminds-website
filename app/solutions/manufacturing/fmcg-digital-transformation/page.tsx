
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import {
    Factory,
    Speed,
    CheckCircle,
    Assignment,
    Description,
    Verified,
    Security,
    Home,
    ChevronRight,
    ArrowForward,
    Settings,
    LocalShipping,
    HealthAndSafety,
    Build,
} from "@mui/icons-material";
import { baseUrl } from "@/lib/enhanced-seo";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
    title: "FMCG Digital Transformation | Manufacturing Solutions | CannyMinds",
    description: "A comprehensive guide to digitizing FMCG manufacturing: from electronic batch records and quality control to vendor management and equipment maintenance.",
    keywords: [
        "FMCG digital transformation",
        "paperless manufacturing",
        "electronic batch records fmcg",
        "FMCG quality management software",
        "manufacturing compliance automation",
        "digital SOP management",
    ],
    alternates: {
        canonical: "https://www.cannymindstech.com/solutions/manufacturing/fmcg-digital-transformation",
    },
    openGraph: {
        title: "FMCG Digital Transformation | CannyMinds Solutions",
        description: "Transform high-speed FMCG operations with end-to-end digital documentation and workflow automation.",
        type: 'website',
        siteName: 'CannyMinds',
        locale: 'en_US',
        images: [
            {
                url: "https://www.cannymindstech.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "FMCG Digital Transformation Solutions"
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "FMCG Digital Transformation | CannyMinds Solutions",
        description: "Transform high-speed FMCG operations with end-to-end digital documentation and workflow automation.",
        images: ['https://www.cannymindstech.com/og-image.jpg'],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Digital Transformation in FMCG Manufacturing",
    "description": "How to transition from paper-based operations to a fully digital, compliant, and efficient FMCG manufacturing environment.",
    "author": {
        "@type": "Organization",
        "name": "CannyMinds Technology Solutions"
    },
    "publisher": {
        "@type": "Organization",
        "name": "CannyMinds Technology Solutions",
        "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`
        }
    },
    "datePublished": new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0]
};

export default function FMCGTransformationPage() {
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
                            <span className="text-gray-900 font-medium">FMCG Digital Transformation</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-5xl text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-medium text-sm mb-6">
                            <Factory sx={{ fontSize: 18 }} />
                            FMCG Solutions
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Digital Transformation in <br className="hidden md:block" />
                            <span className="text-green-700">FMCG Manufacturing</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Fast-Moving Consumer Goods (FMCG) manufacturers operate in high-speed, high-volume environments where every second counts.
                            Discover how shifting from paper to digital processes can revolutionize your production efficiency, quality control, and compliance.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Start Your Transformation
                                <ArrowForward sx={{ fontSize: 20 }} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Introduction / Context */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-4xl">
                        <div className="prose prose-lg max-w-none text-gray-600">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">The High-Speed Challenge</h2>
                            <p className="mb-6">
                                In the world of FMCG, production lines run continuously, producing thousands of units per hour. Amidst this speed, maintaining rigorous quality standards, ensuring regulatory compliance, and tracking every single batch is a massive challenge—especially when relying on paper.
                            </p>
                            <p className="mb-6">
                                Manual documentation creates a bottleneck. It slows down batch release, increases the risk of human error, and makes traceability during audits a nightmare. The solution lies in a holistic digital transformation that connects every aspect of your shop floor.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Topic 1: Production Records */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 bg-green-100 rounded-[10px] flex items-center justify-center text-green-700 mb-6">
                                    <Description sx={{ fontSize: 32 }} />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    1. Digitizing Production & Batch Records
                                </h2>
                                <p className="text-gray-600 mb-6 text-lg">
                                    The core of manufacturing compliance is the Batch Record. Moving to Electronic Batch Records (eBMR) eliminates physical paperwork and ensures data integrity.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-green-600 mt-1" />
                                        <div>
                                            <strong className="text-gray-900">Real-time Data Entry:</strong> Operators input data directly into digital tablets, with validation checks preventing errors at the source.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-green-600 mt-1" />
                                        <div>
                                            <strong className="text-gray-900">Automated Calculations:</strong> Yields, reconciliation, and run rates are calculated automatically, removing manual math errors.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-green-600 mt-1" />
                                        <div>
                                            <strong className="text-gray-900">Review by Exception:</strong> QA teams only need to review flagged deviations, significantly speeding up batch release.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative flex justify-center">
                                <Image
                                    src="/images/solutions/manfactureing/FMCG/Digitizing-Production-Batch-Records.png"
                                    alt="Digital Batch Record Interface"
                                    width={800}
                                    height={450}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Topic 2: SOPs & Process Control */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1 relative flex justify-center">
                                <Image
                                    src="/images/solutions/manfactureing/FMCG/SOP-Work-Instruction-Control.png"
                                    alt="Digital SOP Access on Shop Floor"
                                    width={800}
                                    height={450}
                                />
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="w-12 h-12 bg-blue-100 rounded-[10px] flex items-center justify-center text-blue-700 mb-6">
                                    <Assignment sx={{ fontSize: 32 }} />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    2. SOP & Work Instruction Control
                                </h2>
                                <p className="text-gray-600 mb-6 text-lg">
                                    Consistency is key to quality. Digital SOP management ensures that every operator is viewing the latest, approved version of work instructions.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-blue-600 mt-1" />
                                        <div>
                                            <strong className="text-gray-900">Centralized Repository:</strong> A single source of truth for all standard operating procedures.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-blue-600 mt-1" />
                                        <div>
                                            <strong className="text-gray-900">Version Control:</strong> Obsolete versions are automatically withdrawn, preventing the use of outdated procedures.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-blue-600 mt-1" />
                                        <div>
                                            <strong className="text-gray-900">Training Acknowledgment:</strong> Track who has read and understood the new procedures before they start their shift.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Topic 3: Quality & CAPA */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 bg-red-100 rounded-[10px] flex items-center justify-center text-red-700 mb-6">
                                    <Verified sx={{ fontSize: 32 }} />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    3. Quality Control, Deviations & CAPA
                                </h2>
                                <p className="text-gray-600 mb-6 text-lg">
                                    When issues arise, response time is critical. Digital Quality Management Systems (QMS) streamline the investigation and resolution process.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-red-600 mt-1" />
                                        <div>
                                            <strong className="text-gray-900">Integrated Workflows:</strong> Link deviations directly to batch records and initiate CAPA processes automatically.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-red-600 mt-1" />
                                        <div>
                                            <strong className="text-gray-900">Root Cause Analysis:</strong> Structured tools to identify the "Why" and prevent recurrence.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-red-600 mt-1" />
                                        <div>
                                            <strong className="text-gray-900">Audit Readiness:</strong> Retrieve quality history in seconds during regulatory inspections.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative flex justify-center">
                                <Image
                                    src="/images/solutions/manfactureing/FMCG/Quality-Control.png"
                                    alt="Quality Dashboard & CAPA Workflow"
                                    width={800}
                                    height={450}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Topic 4: Hygiene & Safety */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1 relative flex justify-center">
                                <Image
                                    src="/images/solutions/manfactureing/FMCG/Hygiene-Safety-Compliance.png"
                                    alt="Digital Hygiene & Safety Logs"
                                    width={800}
                                    height={450}
                                />
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="w-12 h-12 bg-yellow-100 rounded-[10px] flex items-center justify-center text-yellow-700 mb-6">
                                    <HealthAndSafety sx={{ fontSize: 32 }} />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    4. Hygiene, Safety & Compliance
                                </h2>
                                <p className="text-gray-600 mb-6 text-lg">
                                    FMCG plants must adhere to strict hygiene (GMP/GHP) and safety standards. Digital logs ensure these checks are never missed.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-yellow-600 mt-1" />
                                        <div>
                                            <strong className="text-gray-900">Scheduled Checklists:</strong> Digital forms for cleaning, sanitation, and safety inspections with mandatory fields.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-yellow-600 mt-1" />
                                        <div>
                                            <strong className="text-gray-900">Photo Evidence:</strong> Allow operators to attach photos of cleaned areas or safety hazards directly to the report.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Topic 5: Maintenance & Assets */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-12 h-12 bg-gray-200 rounded-[10px] flex items-center justify-center text-gray-700 mb-6">
                                    <Build sx={{ fontSize: 32 }} />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    5. Equipment Maintenance
                                </h2>
                                <p className="text-gray-600 mb-6 text-lg">
                                    Minimize downtime by keeping a digital history of every asset.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-gray-600 mt-1" />
                                        <div>
                                            <strong className="text-gray-900">Digital Logbooks:</strong> Replace paper equipment logs with searchable digital history.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-gray-600 mt-1" />
                                        <div>
                                            <strong className="text-gray-900">Preventive Maintenance:</strong> Schedule and track maintenance tasks to prevent breakdowns.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative flex justify-center">
                                <Image
                                    src="/images/solutions/manfactureing/FMCG/Equipment-Maintenance-FMCG.png"
                                    alt="Maintenance Schedule Dashboard"
                                    width={800}
                                    height={450}
                                />
                            </div>
                        </div>
                    </div>
                </section>


                {/* Topic 6: Vendor Management */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1 relative flex justify-center">
                                <Image
                                    src="/images/solutions/manfactureing/FMCG/Vendor-packaging-FMCG.png"
                                    alt="Vendor Portal & Certificates"
                                    width={800}
                                    height={450}
                                />
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="w-12 h-12 bg-purple-100 rounded-[10px] flex items-center justify-center text-purple-700 mb-6">
                                    <LocalShipping sx={{ fontSize: 32 }} />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    6. Vendor & Packaging Documentation
                                </h2>
                                <p className="text-gray-600 mb-6 text-lg">
                                    Manage the influx of raw material and packaging certificates from suppliers effortlessly.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-purple-600 mt-1" />
                                        <div>
                                            <strong className="text-gray-900">Certificate Management:</strong> Store COAs and compliance docs linked to specific receivals.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-purple-600 mt-1" />
                                        <div>
                                            <strong className="text-gray-900">Expiry Alerts:</strong> Get notified when supplier certifications or agreements are up for renewal.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Compliance & Standards (Expertise & Authority) */}
                <section className="py-16 px-6 lg:px-12 bg-gray-900 text-white">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Built for Regulatory Compliance</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                CannyMinds solutions are designed by industry experts to meet the most stringent global standards for FMCG manufacturing.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-colors">
                                <Security className="text-green-500 mb-4" sx={{ fontSize: 32 }} />
                                <h3 className="text-xl font-bold mb-2">FDA 21 CFR Part 11</h3>
                                <p className="text-sm text-gray-400">
                                    Full support for electronic records and electronic signatures (ERES), ensuring data integrity and audit trails.
                                </p>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-colors">
                                <Verified className="text-green-500 mb-4" sx={{ fontSize: 32 }} />
                                <h3 className="text-xl font-bold mb-2">ISO 22000 / FSSC</h3>
                                <p className="text-sm text-gray-400">
                                    Aligns with Food Safety Management Systems (FSMS) requirements for documentation and HACCP principles.
                                </p>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-colors">
                                <HealthAndSafety className="text-green-500 mb-4" sx={{ fontSize: 32 }} />
                                <h3 className="text-xl font-bold mb-2">GMP & GHP</h3>
                                <p className="text-sm text-gray-400">
                                    Digital workflows that enforce Good Manufacturing Practices and Good Hygiene Practices on the shop floor.
                                </p>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-colors">
                                <Settings className="text-green-500 mb-4" sx={{ fontSize: 32 }} />
                                <h3 className="text-xl font-bold mb-2">ISO 9001:2015</h3>
                                <p className="text-sm text-gray-400">
                                    Standardized document control and process management to meet Quality Management System (QMS) norms.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section (Helpfulness) */}
                <FAQ
                    title="Frequently Asked Questions"
                    description="Common questions about FMCG Digital Transformation."
                    items={[
                        {
                            question: "Can this system integrate with our existing ERP?",
                            answer: "Yes, CannyMinds ECM seamlessly integrates with major ERPs like SAP, Oracle, and Microsoft Dynamics to sync material master data, POs, and batch information."
                        },
                        {
                            question: "Is the system suitable for high-speed bottling lines?",
                            answer: "Absolutely. Our 'lite' shop floor interface is designed for rapid data capture, ensuring it keeps up with high-speed filling and packaging lines without slowing down operators."
                        },
                        {
                            question: "How long does implementation take?",
                            answer: "A typical pilot implementation for one manufacturing line can be completed in 4-6 weeks, with full plant roll-outs following a phased approach."
                        },
                        {
                            question: "Is the data stored securely?",
                            answer: "We use enterprise-grade encryption for data at rest and in transit, with role-based access controls to ensuring only authorized personnel can view or approve sensitive records."
                        }
                    ]}
                />

                {/* Author / Expert Bio (Trustworthiness) */}
                <section className="py-12 px-6 lg:px-12 border-t border-gray-100">
                    <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-6">
                        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-500">
                            CM
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide mb-1">Reviewed by Manufacturing Experts</p>
                            <h3 className="text-xl font-bold text-gray-900">CannyMinds Process Engineering Team</h3>
                            <p className="text-gray-600 mt-2">
                                Our solutions are architected by a team with over 15 years of experience in industrial automation, regulatory compliance, and digital transformation for the FMCG and pharmaceutical sectors.
                            </p>
                            <p className="text-xs text-gray-400 mt-2">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                    </div>
                </section>

                {/* Conclusion / CTA */}
                <section className="py-20 px-6 lg:px-12 bg-gray-900 text-white text-center">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Modernize Your FMCG Plant?
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                            Transitioning to a digital ecosystem lowers costs, improves quality, and makes compliance a natural byproduct of your process rather than a burden.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500 transition-colors shadow-lg"
                            >
                                Request a Demo
                            </Link>
                            <Link
                                href="/solutions/manufacturing"
                                className="px-8 py-4 bg-transparent border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                            >
                                Explore All Solutions
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}

