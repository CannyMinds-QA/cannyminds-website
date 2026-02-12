import type { Metadata } from "next";
import Link from "next/link";
import {
    ArrowForward,
    CheckCircle,
    Science,
    VerifiedUser,
    Security,
    Description,
    BugReport,
    Home,
    ChevronRight,
    FolderSpecial,
} from "@mui/icons-material";
import Image from "next/image";
import BookDownloadCard from "@/components/pharmaceutical/BookDownloadCard";

export const metadata: Metadata = {
    title: "Pharmaceutical Manufacturing Solutions",
    description: "AI-powered batch record automation, quality inspection, and CAPA management solutions for pharma. FDA 21 CFR Part 11 compliant.",
    keywords: [
        "pharmaceutical digital transformation",
        "pharma manufacturing AI",
        "FDA 21 CFR Part 11 compliance",
        "eBMR automation",
        "pharmaceutical quality inspection",
        "CAPA management pharma",
        "GxP compliance solutions",
        "pharmaceutical document management",
    ],
    alternates: {
        canonical: "/solutions/pharmaceutical",
    },
    openGraph: {
        title: "Pharmaceutical Solutions",
        description: "Transform pharma manufacturing with AI-driven compliance, quality control, and automation.",
        images: [{ url: "/images/pharma-solutions-og.jpg", width: 1200, height: 630 }],
    },
};

import { baseUrl } from "@/lib/enhanced-seo";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pharmaceutical Solutions | CannyMinds",
    "description": "Digital transformation solutions for pharmaceutical manufacturing including batch record automation, quality inspection, and regulatory compliance.",
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

export default function PharmaceuticalOverviewPage() {
    const solutions = [
        {
            title: "Batch Record Automation",
            description: "Transform paper-intensive batch record review into intelligent, automated processes with AI-powered eBMR and predictive maintenance.",
            href: "/solutions/pharmaceutical/batch-record-automation",
            icon: Description,
            color: "blue",
            highlights: [
                "45-65% reduction in manual review effort",
                "Batch release in hours, not days",
                "FDA 21 CFR Part 11 compliant",
            ],
        },
        {
            title: "Quality Inspection & CAPA",
            description: "AI-powered visual inspection, deviation analysis, CAPA management, and laboratory data management for consistent quality excellence.",
            href: "/solutions/pharmaceutical/quality-inspection-capa",
            icon: BugReport,
            color: "green",
            highlights: [
                "99.5% defect detection accuracy",
                "50% reduction in recurring deviations",
                "Faster OOS investigations",
            ],
        },
        {
            title: "Regulatory Compliance",
            description: "Complete document control, SOP management, change control, and regulatory submission support with full audit trails.",
            href: "/solutions/pharmaceutical/regulatory-compliance",
            icon: VerifiedUser,
            color: "purple",
            highlights: [
                "60% faster document preparation",
                "Eliminates rogue document versions",
                "Audit-ready at all times",
            ],
        },
    ];

    const challenges = [
        {
            challenge: "Paper-based Batch Manufacturing Records",
            impact: "Slow batch release, manual data entry errors, and compliance delays in high-volume production.",
        },
        {
            challenge: "Data Integrity & Regulatory Scrutiny",
            impact: "Non-compliance with ALCOA+ principles leading to FDA 483s, warning letters, and audit observations.",
        },
        {
            challenge: "Manual Quality Inspection",
            impact: "Human fatigue and subjectivity causing inconsistent defect detection in tablets, vials, and packaging.",
        },
        {
            challenge: "Siloed Data Across Systems",
            impact: "Lack of real-time visibility across MES, LIMS, and QMS causing delayed decision making.",
        },
        {
            challenge: "Complex Change Control",
            impact: "Untracked changes to controlled documents and processes creating compliance gaps.",
        },
        {
            challenge: "Reactive Equipment Maintenance",
            impact: "Unplanned downtime disrupting production schedules and causing batch losses.",
        },
    ];

    const certifications = [
        { name: "ISO 9001:2015", description: "Quality Management" },
        { name: "ISO 15489:2016", description: "Records Management" },
        { name: "ISO 27001", description: "Information Security" },
        { name: "FDA 21 CFR Part 11", description: "Electronic Records" },
    ];

    const stats = [
        { value: "45-65%", label: "Batch Review Reduction" },
        { value: "99.5%", label: "Defect Detection Accuracy" },
        { value: "50%", label: "Fewer Recurring Deviations" },
        { value: "60%", label: "Faster Document Preparation" },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
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
                            <span className="text-gray-900 font-medium">Pharmaceutical</span>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="max-w-4xl">
                                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                    <Science sx={{ fontSize: 18 }} />
                                    Pharmaceutical Industry
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Accelerating Pharma Manufacturing With Digital Transformation
                                </h1>

                                <div className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    Accelerate pharmaceutical manufacturing with AI-powered automation. From electronic batch records (eBMR) to quality inspection and regulatory compliance, ensuring FDA 21 CFR Part 11 adherence and operational excellence.
                                </div>



                                <p className="text-lg text-gray-700 mb-8">
                                    Our solutions align with global standards including <strong>ISO 9001</strong>, <strong>ISO 15489</strong>, <strong>ISO 27001</strong>, and <strong>FDA 21 CFR Part 11</strong>, enabling organizations to confidently meet audit, retention, and compliance requirements.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Request Consultation
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                    <Link
                                        href="#solutions"
                                        className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-primary hover:text-primary transition-colors"
                                    >
                                        Explore Solutions
                                    </Link>
                                </div>
                            </div>
                            <div className="relative flex justify-center">
                                <Image
                                    src="/images/solutions/Pharma/overview/Pharma-Manufacturing.png"
                                    alt="Pharmaceutical Manufacturing"
                                    width={600}
                                    height={450}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-8 bg-primary">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                            {stats.map((stat, idx) => (
                                <div key={idx}>
                                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-blue-200 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Book Download Sidebar - Fixed on right side */}
                <div className="hidden xl:block fixed right-4 top-32 w-52 z-40">
                    <BookDownloadCard />
                </div>

                {/* Industry Context */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            Industry Context
                        </h2>
                        <div className="flex justify-center mb-8">
                            <Image
                                src="/images/solutions/Pharma/overview/Industry-Context.png"
                                alt="Pharmaceutical Industry Overview"
                                width={1000}
                                height={500}
                            />
                        </div>
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                            <p>
                                The pharmaceutical industry operates in a high-stakes environment where documentation is just as important as the product itself. Meeting global standards such as FDA 21 CFR Part 11, EU GMP Annex 11, and ALCOA+ principles requires more than just digitization—it requires intelligent, validated systems that can predict quality shifts and ensure 100% data integrity throughout the product lifecycle.
                            </p>
                            <p className="mt-4">
                                We specialize in Enterprise Content Management (ECM),Physical Record Management, Onsite & Offsite Digitizatio and Compliance-driven Information Governance—with a strong focus on regulated industries such as Pharmaceuticals, Life Sciences, Healthcare, and Manufacturing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Challenges Section */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Key Business Challenges
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            Pharmaceutical manufacturers face unique challenges that require specialized solutions
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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

                {/* Solutions Section */}
                <section id="solutions" className="py-16 px-6 lg:px-12 scroll-mt-24">
                    <div className="container mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Our Pharmaceutical Solutions
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            Comprehensive solutions designed to address every aspect of pharmaceutical manufacturing
                        </p>

                        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {solutions.map((solution, idx) => (
                                <Link
                                    key={idx}
                                    href={solution.href}
                                    className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-400 transition-all group"
                                >
                                    <div className="w-14 h-14 bg-blue-100 rounded-[10px] flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                        <solution.icon sx={{ fontSize: 28 }} />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {solution.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {solution.description}
                                    </p>

                                    <ul className="space-y-2 mb-6">
                                        {solution.highlights.map((highlight, hIdx) => (
                                            <li key={hIdx} className="flex items-start gap-2 text-sm">
                                                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />
                                                <span className="text-gray-700">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <span className="text-blue-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Learn More <ArrowForward sx={{ fontSize: 16 }} />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Supporting Services */}
                <section className="py-24 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
                            Supporting Services
                        </h2>

                        <div className="space-y-24">
                            {/* Digitization Services */}
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                        <Description sx={{ fontSize: 28 }} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Digitization Services</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                        Convert paper batch records, logbooks, and legacy documents into searchable digital formats. Our <Link href="/product/scanning-solution" className="text-primary hover:underline font-medium">scanning and digitization services</Link> include image enhancement, OCR extraction, barcode reading, and quality verification—all integrated with your document management systems.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            "Image cleansing and auto-crop",
                                            "OCR and barcode extraction",
                                            "Data validation and quality check",
                                            "On-site manpower support for bulk scanning"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <CheckCircle className="text-green-500 flex-shrink-0" sx={{ fontSize: 20 }} />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex justify-center p-2">
                                    <Image
                                        src="/images/solutions/Pharma/overview/Digitization-Services.png"
                                        alt="Digitization Workflow Dashboard"
                                        width={600}
                                        height={450}
                                    />
                                </div>
                            </div>

                            {/* Records Management */}
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="order-2 lg:order-1 flex justify-center p-2">
                                    <Image
                                        src="/images/solutions/Pharma/overview/Records-Management.png"
                                        alt="Records Management System"
                                        width={600}
                                        height={450}
                                    />
                                </div>
                                <div className="order-1 lg:order-2">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                                        <FolderSpecial sx={{ fontSize: 28 }} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Records Management</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                        Manage physical records with complete traceability. Our <Link href="/product/rms" className="text-primary hover:underline font-medium">records management system</Link> provides secure storage, retrieval tracking, and audit trails for batch records, stability samples, and regulatory archives.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            "Rack and space optimization",
                                            "Request and retrieval tracking",
                                            "Complete audit trail"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <CheckCircle className="text-green-500 flex-shrink-0" sx={{ fontSize: 20 }} />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Compliance Section */}
                <section className="py-16 px-6 lg:px-12 bg-slate-900 text-white">
                    <div className="container mx-auto text-center">
                        <Security sx={{ fontSize: 48 }} className="text-blue-400 mb-4" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Built for Regulatory Compliance
                        </h2>
                        <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
                            Our solutions are architected on a &quot;Validated-Ready&quot; framework, meticulously aligned with global regulatory mandates
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {certifications.map((cert, idx) => (
                                <div key={idx} className="bg-slate-800 px-6 py-4 rounded-lg">
                                    <div className="text-lg font-bold text-blue-400">{cert.name}</div>
                                    <div className="text-sm text-slate-400">{cert.description}</div>
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
                            <div className="bg-slate-800/50 p-4 rounded-lg">
                                <CheckCircle className="text-green-400 mb-2" />
                                <p className="text-sm text-slate-300">Controlled electronic signatures</p>
                            </div>
                            <div className="bg-slate-800/50 p-4 rounded-lg">
                                <CheckCircle className="text-green-400 mb-2" />
                                <p className="text-sm text-slate-300">Secure, immutable audit trails</p>
                            </div>
                            <div className="bg-slate-800/50 p-4 rounded-lg">
                                <CheckCircle className="text-green-400 mb-2" />
                                <p className="text-sm text-slate-300">Time/date stamps on all actions</p>
                            </div>
                            <div className="bg-slate-800/50 p-4 rounded-lg">
                                <CheckCircle className="text-green-400 mb-2" />
                                <p className="text-sm text-slate-300">Role-based access controls</p>
                            </div>
                        </div>

                        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                            {jsonLd.dateModified && jsonLd.dateModified !== jsonLd.datePublished ? (
                                <span>Last Updated: <time dateTime={jsonLd.dateModified}>{new Date(jsonLd.dateModified).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</time></span>
                            ) : (
                                <span>Published: <time dateTime={jsonLd.datePublished}>{new Date(jsonLd.datePublished).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</time></span>
                            )}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 lg:px-12 bg-primary">
                    <div className="container mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Transform Your Pharmaceutical Operations?
                        </h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            Schedule a consultation with our experts to see how we can address your specific challenges while maintaining strict regulatory compliance.
                        </p>
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center gap-2"
                        >
                            Book a Free Demo
                            <ArrowForward sx={{ fontSize: 20 }} />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
