import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SecureImage from "@/components/ui/SecureImage";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import {
    ArrowForward,
    CheckCircle,
    Factory,
    Settings,
    Speed,
    TrendingUp,
    Security,
    Home,
    ChevronRight,
    Warning,
    Assignment,
    Cancel,
    Science,
    VerifiedUser,
    LocalDrink,
    WaterDrop,
    Liquor,
    Inventory,
    Description,
    Build,
    Rule,
} from "@mui/icons-material";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Bottling Manufacturing Solutions | Traceability & Compliance | CannyMinds",
    description: "End-to-end digital transformation for bottling plants. Automate batch records (BMR), ensure FSSAI/FDA compliance, and achieve 100% traceability from raw material to finished goods.",
    keywords: [
        "bottling manufacturing software",
        "electronic batch manufacturing records",
        "beverage plant automation",
        "bottling quality control",
        "food safety compliance software",
        "FSSAI compliance for bottling",
        "traceability in beverage industry",
        "digital BMR for bottling",
        "cleaning in place documentation",
        "bottling inventory management",
    ],
    alternates: {
        canonical: "/solutions/manufacturing/bottling",
    },
    openGraph: {
        title: "Bottling Manufacturing Solutions",
        description: "Digitize your bottling operations. From mixing and filling to packing and dispatch, ensure quality and compliance at every step.",
        images: [{ url: "/images/manufacturing-solutions-og.jpg", width: 1200, height: 630 }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Bottling Manufacturing Solutions | CannyMinds",
    "description": "Comprehensive digital solutions for bottling manufacturing including Electronic Batch Records, Quality Control, and Compliance Management.",
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

export default function BottlingSolutionsPage() {
    const challenges = [
        {
            title: "Manual Batch Records",
            description: "Paper-based BMRs lead to data entry errors, delayed release times, and difficult retrieval during audits.",
            icon: Description
        },
        {
            title: "Traceability Gaps",
            description: "Inability to quickly link finished goods back to raw material batches creates massive risk during product recalls.",
            icon: Warning
        },
        {
            title: "Quality & Compliance Risks",
            description: "Manual QC logs and disconnected lab reports make it hard to enforce SOPs and prove compliance (FSSAI/ISO).",
            icon: Rule
        },
        {
            title: "Unscheduled Downtime",
            description: "Lack of real-time visibility into equipment health and maintenance schedules reduces line efficiency.",
            icon: Build
        }
    ];

    const keyFeatures = [
        {
            title: "Electronic Batch Records (eBMR)",
            description: "Digitize the entire production lifecycle. Capture real-time data from mixing, filling, labeling, and packing lines directly into secure digital templates.",
            icon: Assignment,
            benefits: ["Eliminate paper forms", "Real-time validation", "Faster batch release"]
        },
        {
            title: "Quality Control & Lab Automation",
            description: "Integrate QC testing with production workflows. Automate sample tracking, test result entry, and Certificate of Analysis (CoA) generation.",
            icon: Science,
            benefits: ["Automated pass/fail logic", "Integrated lab instruments", "Instant trend analysis"]
        },
        {
            title: "End-to-End Traceability",
            description: "Achieve granular visibility from raw material receipt to finished goods dispatch. Instantly trace any bottle back to its ingredients and process parameters.",
            icon: Inventory,
            benefits: ["One-click recall reports", "Supplier performance tracking", "Regulatory confidence"]
        },
        {
            title: "Maintenance & CIP Management",
            description: "Digitize Cleaning-in-Place (CIP) logs and equipment maintenance schedules. Ensure assets are clean, calibrated, and ready for production.",
            icon: Settings,
            benefits: ["Automated reminders", "Digital cleanliness proof", "Extended asset life"]
        }
    ];

    const benefits = [
        { benefit: "100% Audit Readiness", description: "Be ready for FSSAI, FDA, or ISO audits at any moment with instant access to all records." },
        { benefit: "Reduced Waste", description: "Catch quality issues early in the process to minimize rework and material wastage." },
        { benefit: "Higher Throughput", description: "Streamline batch release processes to ship products to market faster." },
        { benefit: "Brand Protection", description: "Minimize safety risks and ensure consistent product quality to protect your reputation." },
        { benefit: "Operational Visibility", description: "Gain real-time insights into line performance, yields, and losses." },
        { benefit: "Paperless Plant", description: " eliminate the costs and risks associated with managing physical documents." },
    ];

    const complianceStandards = [
        { name: "FSSAI", description: "Food Safety and Standards Authority of India compliance." },
        { name: "ISO 22000", description: "Food Safety Management Systems standards." },
        { name: "HACCP", description: "Hazard Analysis Critical Control Point documentation." },
        { name: "FDA 21 CFR Part 11", description: "Electronic records and signatures compliance." },
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
                            <Link href="/solutions/manufacturing" className="hover:text-primary">
                                Manufacturing
                            </Link>
                            <ChevronRight sx={{ fontSize: 16 }} className="text-gray-400" />
                            <span className="text-gray-900 font-medium">Bottling Solutions</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-700 font-medium text-sm mb-6">
                                    <LocalDrink sx={{ fontSize: 18 }} />
                                    Bottling & Beverage Industry
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Digital Transformation for Bottling Plants
                                </h1>

                                <p className="text-xl font-semibold text-cyan-700 mb-4">
                                    Ensure Quality, Compliance & Traceability
                                </p>

                                <div className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    From standardizing SOPs to automating batch records and quality checks. Ensure your bottling operations are efficient, compliant, and ready for any audit.
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Request Demo
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                </div>
                            </div>

                            <div className="relative flex justify-center">
                                <Image
                                    src="/images/solutions/manfactureing/bottling/hero.png"
                                    alt="Bottling Plant Automation"
                                    width={600}
                                    height={450}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Challenges Section */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Challenges in Modern Bottling
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                High-speed lines and strict regulations make manual documentation a bottleneck for growth.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {challenges.map((challenge, index) => (
                                <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-red-50 rounded-[10px] flex items-center justify-center text-red-500 mb-4">
                                        <challenge.icon sx={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{challenge.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{challenge.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Features / Solutions Section */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Comprehensive Bottling Solutions
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                A unified platform to manage production, quality, and maintenance with total digital control.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {keyFeatures.map((feature, index) => (
                                <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-cyan-100 text-cyan-600 mb-6">
                                            <feature.icon sx={{ fontSize: 24 }} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {feature.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {feature.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <CheckCircle className="text-green-500 flex-shrink-0" sx={{ fontSize: 20 }} />
                                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''} flex justify-center`}>
                                        <Image
                                            src={`/images/solutions/manfactureing/bottling/${index === 0 ? 'Electronic-Batch-Records-bottle.png' :
                                                index === 1 ? 'Quality-Control-Lab-Automation.png' :
                                                    index === 2 ? 'End-to-End-Traceability.png' :
                                                        'Maintenance-CIP-Management.png'
                                                }`}
                                            alt={feature.title}
                                            width={800}
                                            height={450}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Compliance Section */}
                <section className="py-16 px-6 lg:px-12 bg-cyan-900 text-white">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    Built for Compliance
                                </h2>
                                <p className="text-cyan-100 text-lg mb-8 leading-relaxed">
                                    Our platform is designed from the ground up to meet the rigorous standards of the food and beverage industry. Never worry about an audit again.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {complianceStandards.map((std, index) => (
                                        <div key={index} className="bg-cyan-800/50 p-4 rounded-lg border border-cyan-700">
                                            <h4 className="font-bold text-white mb-1">{std.name}</h4>
                                            <p className="text-xs text-cyan-200">{std.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative h-full flex items-center justify-center">
                                <VerifiedUser sx={{ fontSize: 120 }} className="text-cyan-400 opacity-20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
                                        <p className="text-cyan-200 font-medium">Audit Readiness</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Why Upgrade to Digital?
                            </h2>
                            <p className="text-lg text-gray-600">
                                Tangible business impact for your bottling plant.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 rounded-xl p-6 hover:shadow-md transition-all">
                                    <div className="flex items-center gap-3 mb-3">
                                        <TrendingUp className="text-cyan-600" sx={{ fontSize: 28 }} />
                                        <h3 className="text-lg font-bold text-gray-900">{item.benefit}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 lg:px-12 bg-gray-900 text-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Modernize Your Bottling Line?
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            See how CannyECM can transform your documentation, quality, and compliance processes.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-500 transition-colors"
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
