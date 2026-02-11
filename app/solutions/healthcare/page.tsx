import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import {
    ArrowForward,
    CheckCircle,
    LocalHospital,
    Home,
    ChevronRight,
    FolderShared,
    AccountTree,
    VerifiedUser,
    Scanner,
} from "@mui/icons-material";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Healthcare Solutions | Hospital Document Management",
    description:
        "CannyECM for hospitals and clinics. Manage patient records, automate clinical workflows, meet HIPAA and NABH compliance, and digitize paper medical files.",
    keywords: [
        "healthcare document management",
        "hospital document management system",
        "patient record management software",
        "clinical workflow automation",
        "HIPAA compliant DMS",
        "NABH documentation",
        "medical document digitization",
        "healthcare ECM",
        "hospital paperless solution",
        "EHR document integration",
    ],
    alternates: {
        canonical: "/solutions/healthcare",
    },
    openGraph: {
        title: "Healthcare Solutions | CannyMinds",
        description:
            "Document management built for hospitals. Patient records, clinical workflows, compliance, and digitization, all in one system.",
        images: [
            { url: "/images/healthcare-solutions-og.jpg", width: 1200, height: 630 },
        ],
    },
};

const lastUpdated: string = new Date().toISOString().split("T")[0]!;

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            name: "Healthcare Solutions | CannyMinds",
            description:
                "CannyECM for hospitals and clinics: patient record management, clinical workflow automation, compliance, and medical document digitization.",
            publisher: {
                "@type": "Organization",
                name: "CannyMinds Technology Solutions",
                logo: {
                    "@type": "ImageObject",
                    url: `${baseUrl}/logo.png`,
                },
            },
            author: {
                "@type": "Organization",
                name: "CannyMinds Technology Solutions",
            },
            datePublished: lastUpdated,
            dateModified: lastUpdated,
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
                    name: "Healthcare Solutions",
                },
            ],
        },
    ],
};

export default function HealthcareOverviewPage() {
    const solutions = [
        {
            title: "Patient Records & EHR Integration",
            description:
                "One patient, one digital folder. Link every document to the right patient, control who sees what, and find any file in seconds. No more chasing paper charts across departments.",
            href: "/solutions/healthcare/patient-records",
            icon: FolderShared,
            highlights: [
                "Centralized patient document folder",
                "Role-based clinical access",
                "Instant search by Patient ID or name",
            ],
        },
        {
            title: "Clinical Workflow Automation",
            description:
                "Treatment plan approvals, discharge summaries, referral letters: route them automatically to the right doctor or department head. No more walking around with files.",
            href: "/solutions/healthcare/clinical-workflows",
            icon: AccountTree,
            highlights: [
                "Visual workflow designer",
                "Auto-escalation on missed deadlines",
                "Approve from any device",
            ],
        },
        {
            title: "Compliance & Audit Readiness",
            description:
                "HIPAA, NABH, JCI. The system logs every document access, enforces retention policies, and gives you audit-ready reports. You don't have to prepare for audits, you're always ready.",
            href: "/solutions/healthcare/compliance-audit",
            icon: VerifiedUser,
            highlights: [
                "Complete audit trail with IP and timestamps",
                "Automated retention and secure deletion",
                "HIPAA and NABH aligned controls",
            ],
        },
        {
            title: "Medical Document Digitization",
            description:
                "Basements full of old patient files? Scan them in bulk, let OCR read the text, and make everything searchable. Find a lab report from 5 years ago in seconds.",
            href: "/solutions/healthcare/document-digitization",
            icon: Scanner,
            highlights: [
                "Bulk scanning with existing scanners",
                "OCR for printed and handwritten forms",
                "Legacy record migration",
            ],
        },
    ];

    const challenges = [
        {
            problem: "Patient files scattered across departments",
            impact:
                "Doctors wait for records, nurses chase paper charts, and nobody has a single view of the patient's history during emergencies.",
        },
        {
            problem: "Manual approval processes for clinical documents",
            impact:
                "Discharge summaries sit unsigned for hours. Treatment plans wait in someone's inbox. Nobody knows where the document is stuck.",
        },
        {
            problem: "Audit preparation takes weeks, not hours",
            impact:
                "When NABH or HIPAA auditors arrive, staff scramble to find documents, check access logs, and prove retention compliance manually.",
        },
        {
            problem: "Basement storage rooms full of old records",
            impact:
                "Retrieval takes hours or days. Records get damaged, lost, or misfiled. And you're still paying for physical storage space every month.",
        },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navigation />

            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative pt-24 pb-16 bg-gradient-to-b from-teal-50 to-white">
                    <div className="absolute inset-0 opacity-5">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                                backgroundSize: "40px 40px",
                            }}
                        />
                    </div>

                    <div className="container mx-auto px-6 lg:px-12 relative z-10">
                        {/* Breadcrumbs */}
                        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
                            <Link
                                href="/"
                                className="hover:text-primary flex items-center gap-1"
                            >
                                <Home sx={{ fontSize: 16 }} />
                                Home
                            </Link>
                            <ChevronRight
                                sx={{ fontSize: 16 }}
                                className="text-gray-400"
                            />
                            <Link href="/solutions" className="hover:text-primary">
                                Solutions
                            </Link>
                            <ChevronRight
                                sx={{ fontSize: 16 }}
                                className="text-gray-400"
                            />
                            <span className="text-gray-900 font-medium">Healthcare</span>
                        </nav>

                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <LocalHospital sx={{ fontSize: 18 }} />
                                Healthcare Industry
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Healthcare Document Management Solutions
                            </h1>

                            <div className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                Hospitals run on documents: patient records, consent forms,
                                discharge summaries, lab reports, insurance claims. When these
                                documents are stuck in paper files and disconnected systems,
                                things slow down, get lost, or fall out of compliance.{" "}
                                <Link
                                    href="/product/document-management"
                                    className="text-primary hover:underline font-medium"
                                >
                                    CannyECM
                                </Link>{" "}
                                gives hospitals a single system to manage all of it.
                            </div>

                            <p className="text-lg text-gray-700 mb-8">
                                Our healthcare solutions are built around real hospital
                                workflows, not generic document management features. Whether
                                you need to{" "}
                                <Link
                                    href="/solutions/healthcare/patient-records"
                                    className="text-primary hover:underline"
                                >
                                    organize patient records
                                </Link>
                                ,{" "}
                                <Link
                                    href="/solutions/healthcare/clinical-workflows"
                                    className="text-primary hover:underline"
                                >
                                    automate clinical approvals
                                </Link>
                                , stay{" "}
                                <Link
                                    href="/solutions/healthcare/compliance-audit"
                                    className="text-primary hover:underline"
                                >
                                    HIPAA and NABH compliant
                                </Link>
                                , or{" "}
                                <Link
                                    href="/solutions/healthcare/document-digitization"
                                    className="text-primary hover:underline"
                                >
                                    digitize years of paper archives
                                </Link>
                                , we have you covered.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                                >
                                    Request Hospital Demo
                                    <ArrowForward sx={{ fontSize: 20 }} />
                                </Link>
                                <Link
                                    href="#solutions"
                                    className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-teal-500 hover:text-teal-600 transition-colors"
                                >
                                    Explore Solutions
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-8 bg-teal-700">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                            {[
                                { value: "75%", label: "Faster Record Retrieval" },
                                { value: "99%", label: "OCR Accuracy" },
                                { value: "100%", label: "Audit Trail Coverage" },
                                { value: "60%", label: "Less Paper Storage Cost" },
                            ].map((stat, idx) => (
                                <div key={idx}>
                                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-teal-200 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Challenges Section */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            What Hospitals Actually Deal With
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            These aren&apos;t theoretical problems. Every hospital we work
                            with has dealt with at least two or three of these.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {challenges.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-200 transition-all"
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="text-teal-600 font-bold text-lg">
                                            {idx + 1}.
                                        </span>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-2">
                                                {item.problem}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                <span className="text-red-500 font-medium">
                                                    Impact:
                                                </span>{" "}
                                                {item.impact}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solutions Grid */}
                <section id="solutions" className="py-16 px-6 lg:px-12 scroll-mt-24">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Our Healthcare Solutions
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            Each solution addresses a specific part of hospital document
                            management. Pick what you need, or use them together.
                        </p>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {solutions.map((solution, idx) => (
                                <Link
                                    key={idx}
                                    href={solution.href}
                                    className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-teal-400 transition-all group"
                                >
                                    <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                                        <solution.icon sx={{ fontSize: 28 }} />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                                        {solution.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {solution.description}
                                    </p>

                                    <ul className="space-y-2 mb-6">
                                        {solution.highlights.map((highlight, hIdx) => (
                                            <li key={hIdx} className="flex items-start gap-2 text-sm">
                                                <CheckCircle
                                                    className="text-green-500 flex-shrink-0 mt-0.5"
                                                    sx={{ fontSize: 16 }}
                                                />
                                                <span className="text-gray-700">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <span className="text-teal-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Learn More <ArrowForward sx={{ fontSize: 16 }} />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Cross-linking to related products */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Powered by CannyMinds Products
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link
                                href="/product/document-management"
                                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all group"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary">
                                    CannyECM
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    The core document management engine behind all our healthcare
                                    solutions. OCR, version control, audit trails, and
                                    role-based access.
                                </p>
                            </Link>
                            <Link
                                href="/product/scanning-solution"
                                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all group"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary">
                                    CannyScan
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Enterprise scanning solution for hospitals. Bulk scan paper
                                    records with automatic image cleanup and OCR extraction.
                                </p>
                            </Link>
                            <Link
                                href="/product/rms"
                                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all group"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary">
                                    CannyRMS
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Records management for physical archives. Track, retrieve,
                                    and manage paper records alongside your digital system.
                                </p>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Related Industries */}
                <section className="py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
                            We Also Serve These Industries
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/solutions/pharmaceutical"
                                className="px-6 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm"
                            >
                                Pharmaceutical →
                            </Link>
                            <Link
                                href="/solutions/manufacturing"
                                className="px-6 py-3 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors font-medium text-sm"
                            >
                                Manufacturing →
                            </Link>
                            <Link
                                href="/solutions/finance"
                                className="px-6 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors font-medium text-sm"
                            >
                                Banking & Finance →
                            </Link>
                            <Link
                                href="/solutions/professional-services/legal"
                                className="px-6 py-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors font-medium text-sm"
                            >
                                Legal →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Last Updated */}
                <div className="bg-slate-50 py-8 text-center text-sm text-gray-500">
                    <div className="container mx-auto">
                        <span>
                            Last Updated:{" "}
                            <time dateTime={lastUpdated}>
                                {new Date(
                                    lastUpdated
                                ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </time>
                        </span>
                    </div>
                </div>

                {/* CTA Section */}
                <section className="py-16 px-6 lg:px-12 bg-teal-700">
                    <div className="container mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Want to See How It Works for Your Hospital?
                        </h2>
                        <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
                            We&apos;ll walk you through how CannyECM handles patient records,
                            clinical workflows, and compliance — using your hospital&apos;s
                            actual document types. No generic demos.
                        </p>
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-white text-teal-700 font-bold rounded-lg hover:bg-teal-50 transition-colors shadow-lg inline-flex items-center gap-2"
                        >
                            Schedule a Hospital Demo
                            <ArrowForward sx={{ fontSize: 20 }} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
