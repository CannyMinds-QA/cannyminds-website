import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import {
    ArrowForward,
    Gavel,
    VerifiedUser,
    Security,
    Home,
    ChevronRight,
    Search,
    History,
    AssignmentTurnedIn,
    Groups,
    Lock,
    AccessTime,
} from "@mui/icons-material";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Legal Document Management Software | Law Firms | CannyMinds",
    description: "Secure case management, e-Discovery, and client collaboration for law firms. Manage highly confidential legal documents with CannyECM.",
    keywords: [
        "legal practice management software",
        "law firm document management",
        "e-discovery software",
        "legal case file management",
        "secure client portal legal",
        "contract lifecycle management",
        "legal deadline tracking"
    ],
    alternates: {
        canonical: "https://www.cannymindstech.com/solutions/professional-services/legal",
    },
    openGraph: {
        title: "Legal Document Management Solutions",
        description: "Win more cases with organized evidence and streamlined workflows.",
        type: 'website',
        siteName: 'CannyMinds',
        locale: 'en_US',
        images: [
            {
                url: "https://www.cannymindstech.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Legal Document Management Solutions"
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Legal Document Management Solutions",
        description: "Win more cases with organized evidence and streamlined workflows.",
        images: ['https://www.cannymindstech.com/og-image.jpg'],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Legal Document Management Solutions | CannyMinds",
    "description": "Secure document management for law firms, legal departments, and solo practitioners.",
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

export default function LegalFirmsPage() {
    const challenges = [
        {
            title: "Information Overload",
            description: "Thousands of documents per case—pleadings, evidence, research—scattered across emails and drives.",
            icon: Search
        },
        {
            title: "Missed Deadlines",
            description: "Manual tracking of court dates and filing deadlines exposes the firm to malpractice risks.",
            icon: AccessTime
        },
        {
            title: "Security Risks",
            description: "Sharing sensitive client files via unsecured email breaches confidentiality and compliance rules.",
            icon: Lock
        },
        {
            title: "Collaboration Silos",
            description: "Associates and partners struggle to work on the same brief without version conflicts.",
            icon: Groups
        }
    ];

    const keyFeatures = [
        {
            title: "Matter-Centric Management",
            description: "Organize everything by Case/Matter. All emails, documents, and notes in one searchable digital file.",
            icon: Gavel,
            benefits: ["Instant retrieval", "Case timeline view", "Role-based access"],
            image: "/images/solutions/The%20Digital%20Backbone%20for%20Modern%20Law%20Firms/Matter-Centric%20Management.png"
        },
        {
            title: "Secure Client Portal",
            description: "Stop emailing attachments. Share documents securely with clients via encrypted portals with audit logs.",
            icon: Lock,
            benefits: ["Bank-grade security", "Read/download tracking", "Professional image"],
            image: "/images/solutions/The%20Digital%20Backbone%20for%20Modern%20Law%20Firms/Secure%20Client%20Portal.png"
        },
        {
            title: "Contract Automation",
            description: "Draft, review, and approve contracts faster. Version control ensures you always work on the latest draft.",
            icon: AssignmentTurnedIn,
            benefits: ["Clause library", "Automated redlining", "E-Signature integration"],
            image: "/images/solutions/The%20Digital%20Backbone%20for%20Modern%20Law%20Firms/Contract%20Automation.png"
        },
        {
            title: "e-Discovery & Search",
            description: "Find the 'needle in the haystack' instantly with OCR and full-text search across all case files.",
            icon: Search,
            benefits: ["Search inside scanned PDFs", "Metadata tagging", "Saved search queries"],
            image: "/images/solutions/The%20Digital%20Backbone%20for%20Modern%20Law%20Firms/e-Discovery%20&%20Search.png"
        }
    ];

    const benefits = [
        { benefit: "Risk Reduction", description: "Never miss a filing deadline or lose a critical piece of evidence." },
        { benefit: "Higher Billable Utilization", description: "Spend less time searching and more time lawyering." },
        { benefit: "Client Trust", description: "Demonstrate that you treat their confidential data with the highest security." },
        { benefit: "Remote Work Ready", description: "Access case files securely from court, home, or client sites." },
        { benefit: "Audit Readiness", description: "Maintain a complete history of every document action for compliance." },
        { benefit: "Scalability", description: "Manage growing case volumes without adding administrative headcount." },
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
                            <Link href="/solutions/professional-services" className="hover:text-primary">
                                Professional Services
                            </Link>
                            <ChevronRight sx={{ fontSize: 16 }} className="text-gray-400" />
                            <span className="text-gray-900 font-medium">Legal Firms</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-slate-800 via-gray-800 to-black text-white py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-700 text-slate-200 font-medium text-sm mb-6 border border-slate-600">
                                    <Gavel sx={{ fontSize: 18 }} />
                                    Legal Technology
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                    The Digital Backbone for Modern Law Firms
                                </h1>

                                <p className="text-xl font-semibold text-slate-400 mb-4">
                                    Secure. Organized. Efficient.
                                </p>

                                <div className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                                    Manage cases, contracts, and clients with military-grade security. CannyECM helps you focus on winning cases, not managing files.
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Request Demo
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                </div>
                            </div>

                            <div className="relative">
                                <Image
                                    src="/images/solutions/The%20Digital%20Backbone%20for%20Modern%20Law%20Firms/The%20Digital%20Backbone%20for%20Modern%20Law%20Firms.png"
                                    alt="Legal Case Dashboard"
                                    width={600}
                                    height={450}
                                    className="w-full h-auto object-contain"
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
                                The Burden of Paperwork
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Administrative chaos is the enemy of legal strategy.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {challenges.map((challenge, index) => (
                                <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-500 mb-4">
                                        <challenge.icon sx={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{challenge.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{challenge.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Features Section */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                CannyECM Legal Suite
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Tools designed for the specific needs of attorneys and paralegals.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {keyFeatures.map((feature, index) => (
                                <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-200 text-slate-800 mb-6">
                                            <feature.icon sx={{ fontSize: 24 }} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {feature.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {feature.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <VerifiedUser className="text-green-500 flex-shrink-0" sx={{ fontSize: 20 }} />
                                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                        <div className="relative">
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                width={600}
                                                height={450}
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Transform Your Practice
                            </h2>
                            <p className="text-lg text-gray-600">
                                Deliver better outcomes for your clients and your firm.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-6 hover:shadow-md transition-all">
                                    <div className="flex items-center gap-3 mb-3">
                                        <VerifiedUser className="text-slate-600" sx={{ fontSize: 28 }} />
                                        <h3 className="text-lg font-bold text-gray-900">{item.benefit}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 lg:px-12 bg-slate-900 text-white">
                    <div className="container mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            See CannyECM in Action
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            Let us show you how we can streamline your case management workflow.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
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
