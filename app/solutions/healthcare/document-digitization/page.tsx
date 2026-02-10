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
    Scanner,
    Search,
    Description,
    Inventory,
    CloudUpload,
    Cancel,
} from "@mui/icons-material";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Medical Document Digitization | Hospital Scanning & OCR",
    description:
        "Convert paper medical records to searchable digital files. Bulk scanning, OCR for medical forms, barcode reading, and legacy record migration for hospitals.",
    keywords: [
        "hospital document scanning",
        "medical record digitization",
        "healthcare OCR",
        "paper to digital hospital",
        "medical document scanning",
        "hospital legacy migration",
        "bulk document scanning",
        "healthcare digitization services",
        "medical form OCR",
        "patient record digitization",
    ],
    alternates: {
        canonical: "/solutions/healthcare/document-digitization",
    },
    openGraph: {
        title: "Medical Document Digitization | CannyMinds",
        description:
            "Scan, OCR, and migrate paper medical records into a searchable digital system. Convert decades of paper archives.",
        images: [
            {
                url: "/images/healthcare-digitization-og.jpg",
                width: 1200,
                height: 630,
            },
        ],
    },
};

const lastUpdated: string = new Date().toISOString().split("T")[0]!;

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            name: "Medical Document Digitization | CannyMinds",
            description:
                "Convert paper medical records to searchable digital files with bulk scanning, OCR, auto-classification, and legacy migration for hospitals.",
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
                    name: "Healthcare Solutions",
                    item: `${baseUrl}/solutions/healthcare`,
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Medical Document Digitization",
                },
            ],
        },
    ],
};

export default function DocumentDigitizationPage() {
    const paperProblems = [
        "Basement storage rooms full of old patient files, some going back 15-20 years",
        "Lab reports printed and filed manually, often misfiled or placed in the wrong patient folder",
        "Insurance claim forms photocopied and stored in binders; retrieving one claim takes 30+ minutes",
        "Fading ink on old records; the older the record, the harder it is to read",
        "Physical space costs keep increasing. More patients mean more paper, more filing cabinets, more storage rooms",
    ];

    const digitizationFeatures = [
        {
            title: "Bulk Scanning Integration",
            description:
                "Connect your existing high-speed scanners: Kodak, Canon, Fujitsu, or whatever you already have. Set up scanning stations at reception, medical records, or any department. Documents are scanned in batches and processed automatically.",
            icon: Scanner,
            details: [
                "Works with existing scanner hardware",
                "Batch scanning for high-volume processing",
                "Automatic image cleanup and enhancement",
                "Duplex scanning support",
            ],
        },
        {
            title: "OCR for Printed and Handwritten Medical Forms",
            description:
                "Our OCR engine reads text from scanned documents: printed forms, typed reports, and even handwritten notes. It extracts patient names, dates, ID numbers, and other identifiers so you don't have to type them manually.",
            icon: Description,
            details: [
                "99%+ accuracy on printed text",
                "Handwriting recognition for common medical forms",
                "Multi-language support",
                "Barcode and QR code reading",
            ],
        },
        {
            title: "Auto-Classification of Document Types",
            description:
                "The system identifies what type of document it's looking at: lab report, consent form, discharge summary, prescription, insurance form. It tags the document automatically so you don't have to classify every single scan manually.",
            icon: Inventory,
            details: [
                "Identifies document type from content and layout",
                "Custom classification rules per hospital",
                "Accuracy improves with usage",
                "Manual override always available",
            ],
        },
    ];

    const migrationSteps = [
        {
            step: "1",
            title: "Assessment & Planning",
            detail:
                "We visit your storage facility, assess the volume of records, identify document types, and create a digitization plan with timelines and resource requirements.",
        },
        {
            step: "2",
            title: "Scanning & Processing",
            detail:
                "Records are scanned on-site or at our secure facility. Each document is processed through OCR, image cleanup, and quality verification before being uploaded.",
        },
        {
            step: "3",
            title: "Metadata Mapping",
            detail:
                "Using a CSV template, we map existing metadata (patient ID, date, department) to the digital system. This ensures every migrated document is properly tagged and searchable.",
        },
        {
            step: "4",
            title: "Verification & Handover",
            detail:
                "Every digital copy is verified against the original. No data loss; originals can be spot-checked against digital copies. We provide a complete audit report of the migration.",
        },
    ];

    const searchCapabilities = [
        "Full-text search across all scanned documents: find a word or phrase inside any document",
        "Find a patient's lab report from 3 years ago in under 5 seconds",
        "Filter by date range, document type, department, or doctor name",
        "Search across handwritten notes (where OCR has extracted the text)",
        "Combine search terms: 'Patient 12345 + lab report + 2024' returns exactly what you need",
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navigation />

            <main className="min-h-screen bg-white">
                {/* Breadcrumb */}
                <div className="bg-gray-50 border-b border-gray-200">
                    <div className="container mx-auto px-6 py-3">
                        <nav className="flex items-center gap-2 text-sm text-gray-600">
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
                            <Link
                                href="/solutions/healthcare"
                                className="hover:text-primary"
                            >
                                Healthcare
                            </Link>
                            <ChevronRight
                                sx={{ fontSize: 16 }}
                                className="text-gray-400"
                            />
                            <span className="text-gray-900 font-medium">
                                Medical Document Digitization
                            </span>
                        </nav>
                    </div>
                </div>

                {/* Hero */}
                <section className="bg-gradient-to-br from-teal-50 via-green-50 to-white py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 font-medium text-sm mb-6">
                                    <LocalHospital sx={{ fontSize: 18 }} />
                                    Healthcare Solutions
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Convert Paper Medical Records to Searchable Digital Files
                                </h1>

                                <div className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    Most hospitals have years (sometimes decades) of patient
                                    records stored in boxes but not accessible. When a doctor
                                    needs a patient&apos;s old X-ray report or a surgeon needs
                                    a previous operative summary, someone has to physically dig
                                    through storage rooms.
                                </div>

                                <p className="text-lg text-gray-700 mb-8">
                                    Our{" "}
                                    <Link
                                        href="/product/scanning-solution"
                                        className="text-primary hover:underline font-medium"
                                    >
                                        CannyScan
                                    </Link>{" "}
                                    digitization service converts all of that into searchable,
                                    indexed digital files, integrated with{" "}
                                    <Link
                                        href="/product/document-management"
                                        className="text-primary hover:underline font-medium"
                                    >
                                        CannyECM
                                    </Link>{" "}
                                    for storage, access control, and{" "}
                                    <Link
                                        href="/solutions/healthcare/compliance-audit"
                                        className="text-primary hover:underline"
                                    >
                                        compliance
                                    </Link>
                                    .
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Get Digitization Assessment
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                </div>
                            </div>

                            <div className="relative">
                                <ImagePlaceholder
                                    className="aspect-[4/3] rounded-2xl"
                                    text="Document Digitization Workflow"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Paper Problem */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            The Paper Problem in Hospitals
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Paper doesn&apos;t go away just because you buy an HIS system.
                            These are the realities we see in every hospital we work with.
                        </p>

                        <div className="space-y-4 max-w-4xl mx-auto">
                            {paperProblems.map((problem, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-lg p-4"
                                >
                                    <Cancel
                                        className="text-red-400 flex-shrink-0 mt-0.5"
                                        sx={{ fontSize: 20 }}
                                    />
                                    <p className="text-gray-700">{problem}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How CannyECM Digitizes */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            How CannyECM Digitizes Hospital Documents
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            We use a combination of hardware integration, OCR, and
                            intelligent classification to turn paper into searchable digital
                            records.
                        </p>

                        <div className="space-y-8">
                            {digitizationFeatures.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-gray-200 rounded-xl p-8"
                                >
                                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                                        <div>
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
                                                    <feature.icon sx={{ fontSize: 28 }} />
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900">
                                                    {feature.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                        <ul className="space-y-3">
                                            {feature.details.map((detail, dIdx) => (
                                                <li
                                                    key={dIdx}
                                                    className="flex items-center gap-2 text-sm"
                                                >
                                                    <CheckCircle
                                                        className="text-green-500 flex-shrink-0"
                                                        sx={{ fontSize: 16 }}
                                                    />
                                                    <span className="text-gray-700">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Legacy Record Migration */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex items-center gap-3 justify-center mb-4">
                            <CloudUpload
                                sx={{ fontSize: 32 }}
                                className="text-teal-600"
                            />
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Legacy Record Migration
                            </h2>
                        </div>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Moving years of paper archives into a digital system is a
                            project, not a feature. Here&apos;s how we handle it.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {migrationSteps.map((ms, idx) => (
                                <div
                                    key={idx}
                                    className="bg-teal-50 border border-teal-200 rounded-xl p-6 relative"
                                >
                                    <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                                        {ms.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {ms.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {ms.detail}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6 mt-8 max-w-4xl mx-auto">
                            <p className="text-gray-600 text-sm leading-relaxed text-center">
                                <strong>No data loss guarantee:</strong> Originals can be
                                verified against digital copies at any point during or after
                                the migration. We provide a CSV-based bulk import with
                                metadata mapping so every document is properly tagged from day
                                one.
                            </p>
                        </div>
                    </div>
                </section>

                {/* What You Can Search */}
                <section className="py-16 px-6 lg:px-12 bg-slate-900 text-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <Search sx={{ fontSize: 48 }} className="text-teal-400 mb-4" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            What You Can Search After Digitization
                        </h2>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            Once your records are digitized, you gain search capabilities
                            that paper can never provide.
                        </p>

                        <div className="space-y-4 text-left max-w-3xl mx-auto">
                            {searchCapabilities.map((cap, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-lg"
                                >
                                    <CheckCircle
                                        className="text-green-400 flex-shrink-0 mt-0.5"
                                        sx={{ fontSize: 18 }}
                                    />
                                    <span className="text-slate-300 text-sm">{cap}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-slate-400 text-sm mt-8">
                            All searches are logged in the{" "}
                            <Link
                                href="/solutions/healthcare/compliance-audit"
                                className="text-teal-400 hover:underline"
                            >
                                audit trail
                            </Link>{" "}
                            for HIPAA compliance. Search results respect{" "}
                            <Link
                                href="/solutions/healthcare/patient-records"
                                className="text-teal-400 hover:underline"
                            >
                                role-based access controls
                            </Link>
                            .
                        </p>
                    </div>
                </section>

                {/* Related Solutions */}
                <section className="py-12 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
                            Related Healthcare Solutions
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link
                                href="/solutions/healthcare/patient-records"
                                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-300 transition-all group"
                            >
                                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-teal-600">
                                    Patient Records & EHR →
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Digitized records feed into centralized patient folders.
                                </p>
                            </Link>
                            <Link
                                href="/solutions/healthcare/compliance-audit"
                                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-300 transition-all group"
                            >
                                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-teal-600">
                                    Compliance & Audit Readiness →
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Apply retention policies to newly digitized records.
                                </p>
                            </Link>
                            <Link
                                href="/solutions/healthcare/clinical-workflows"
                                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-300 transition-all group"
                            >
                                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-teal-600">
                                    Clinical Workflow Automation →
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Route digitized documents through approval workflows.
                                </p>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Product Links */}
                <section className="py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
                            Powered By
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/product/scanning-solution"
                                className="px-6 py-3 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors font-medium text-sm"
                            >
                                CannyScan: Scanning Solution →
                            </Link>
                            <Link
                                href="/product/document-management"
                                className="px-6 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm"
                            >
                                CannyECM: Document Management →
                            </Link>
                            <Link
                                href="/product/rms"
                                className="px-6 py-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors font-medium text-sm"
                            >
                                CannyRMS: Records Management →
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

                {/* CTA */}
                <section className="py-16 px-6 lg:px-12 bg-teal-700">
                    <div className="container mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Go Paperless?
                        </h2>
                        <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
                            We&apos;ll assess your paper archives, estimate the digitization
                            timeline, and show you what the searchable system looks like
                            once it&apos;s done. No commitment required.
                        </p>
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-white text-teal-700 font-bold rounded-lg hover:bg-teal-50 transition-colors shadow-lg inline-flex items-center gap-2"
                        >
                            Request Free Assessment
                            <ArrowForward sx={{ fontSize: 20 }} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
