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
    Search,
    Security,
    Person,
    MedicalServices,
    Cancel,
    Assignment,
} from "@mui/icons-material";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Patient Record Management | EHR Document Integration",
    description:
        "Centralize patient files in one secure system. Link documents to EHR/EMR, control access by role, and find any record in seconds. HIPAA compliant.",
    keywords: [
        "patient record management",
        "EHR document management",
        "hospital record system",
        "electronic health record integration",
        "patient file management software",
        "centralized patient records",
        "medical record organization",
        "hospital DMS",
        "patient document folder",
        "clinical document access",
    ],
    alternates: {
        canonical: "/solutions/healthcare/patient-records",
    },
    openGraph: {
        title: "Patient Record Management | CannyMinds",
        description:
            "One patient, one digital folder. Centralize, search, and secure every patient document in your hospital.",
        images: [
            {
                url: "/images/healthcare-patient-records-og.jpg",
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
            name: "Patient Record Management | CannyMinds",
            description:
                "How hospitals manage patient records with CannyECM — centralized folders, role-based access, instant search, and full audit trails.",
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
                    name: "Patient Records & EHR",
                },
            ],
        },
    ],
};

export default function PatientRecordsPage() {
    const problems = [
        "Patient files are split across reception, labs, radiology, and billing. Nobody has a complete view",
        "During emergencies, doctors wait while staff search physical file rooms",
        "Duplicate records get created because different departments maintain their own copies",
        "When a patient returns after 2 years, finding their old records takes hours",
        "Paper-based records can't be accessed remotely, which is a problem for telemedicine consultations",
    ];

    const steps = [
        {
            step: "1",
            title: "Scan or Upload the Document",
            description:
                "Whether it's a new admission form from reception, a lab report from the pathology department, or an insurance document from billing: scan it with your existing scanner or upload the digital file. The system accepts PDFs, images, Word files, and most other common formats.",
            icon: Assignment,
        },
        {
            step: "2",
            title: "System Tags and Files It Automatically",
            description:
                "CannyECM reads the document using OCR and extracts key information: patient name, ID, date, department. The document gets filed into the correct patient folder automatically. You can also add custom metadata like visit number, doctor name, or insurance reference.",
            icon: FolderShared,
        },
        {
            step: "3",
            title: "Clinicians Search and Retrieve Instantly",
            description:
                "A doctor needs this patient's blood work from last month? Type the patient name or ID in the search bar. Every document linked to that patient shows up: lab reports, prescriptions, discharge summaries, consent forms. Filter by date, department, or document type to narrow it down.",
            icon: Search,
        },
        {
            step: "4",
            title: "Full Audit Trail of Who Accessed What",
            description:
                "Every time someone opens, downloads, prints, or shares a patient document, the system logs it: who, when, from which device, and from which IP address. This is essential for HIPAA compliance and internal accountability.",
            icon: Security,
        },
    ];

    const benefits = [
        {
            role: "Doctors",
            benefit: "Faster clinical decisions",
            detail:
                "Pull up any patient's complete document history during consultations. No waiting for paper files. Compare old and new lab results side by side. Access records during rounds from any device.",
            icon: MedicalServices,
        },
        {
            role: "Nurses",
            benefit: "No more chasing paper charts",
            detail:
                "Patient charts follow the patient digitally. During shift handover, the incoming nurse has instant access to all documents. No Physical handover of thick folders.",
            icon: Person,
        },
        {
            role: "Admin Staff",
            benefit: "Reduced record loss and duplication",
            detail:
                "One patient folder means no duplicate records. When a file is scanned, it exists in one place. If a patient returns after years, their old records are exactly where they should be.",
            icon: FolderShared,
        },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />


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
                                Patient Records & EHR
                            </span>
                        </nav>
                    </div>
                </div>

                {/* Hero */}
                <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-teal-50 via-cyan-50 to-white py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 font-medium text-sm mb-6">
                                    <LocalHospital sx={{ fontSize: 18 }} />
                                    Healthcare Solutions
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    How Hospitals Manage Patient Records with CannyECM
                                </h1>

                                <div className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    Every patient generates a trail of documents: admission
                                    forms, lab reports, prescriptions, consent forms, insurance
                                    papers. In most hospitals, these documents end up scattered
                                    across departments, making it hard to get a complete picture
                                    when you actually need one.
                                </div>

                                <p className="text-lg text-gray-700 mb-8">
                                    <Link
                                        href="/product/document-management"
                                        className="text-primary hover:underline font-medium"
                                    >
                                        CannyECM
                                    </Link>{" "}
                                    gives every patient a single digital folder. Everything
                                    linked, everything searchable, everything audited.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Request Demo
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                </div>
                            </div>

                            <div className="relative">
                                <ImagePlaceholder
                                    className="aspect-[4/3] rounded-2xl"
                                    text="Patient Record Management Dashboard"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Real Problem */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            The Real Problem: Paper Files and Disconnected Systems
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Talk to any hospital administrator and you&apos;ll hear the same
                            frustrations. These are the ones we hear most often.
                        </p>

                        <div className="space-y-4 max-w-4xl mx-auto">
                            {problems.map((problem, idx) => (
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

                {/* What CannyECM Does */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            What CannyECM Does for Patient Records
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            We don&apos;t replace your HIS or EMR. We sit alongside it and
                            handle the document side: the scans, PDFs, reports, and
                            approvals that your clinical system doesn&apos;t manage well.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                                    <FolderShared sx={{ fontSize: 28 }} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    One Patient, One Digital Folder
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Every document related to a patient, from every department,
                                    lives in one digital folder. Admission forms from
                                    reception, lab results from pathology, X-rays from
                                    radiology, billing invoices from accounts. One place.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 mb-4">
                                    <Assignment sx={{ fontSize: 28 }} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    Metadata That Makes Sense
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Tag every document with Patient ID, Visit Number,
                                    Department, Doctor Name, and Document Type. When you search
                                    later, these tags make the difference between finding a
                                    document in 3 seconds versus 30 minutes.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-xl p-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                    <Security sx={{ fontSize: 28 }} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    Role-Based Access: Doctors See Clinical, Billing Sees
                                    Invoices
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    A cardiologist doesn&apos;t need to see billing documents. A
                                    billing clerk doesn&apos;t need access to treatment notes. Set
                                    up roles so each person only sees what they should. This
                                    isn&apos;t just good practice; it&apos;s a{" "}
                                    <Link
                                        href="/solutions/healthcare/compliance-audit"
                                        className="text-primary hover:underline"
                                    >
                                        HIPAA requirement
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
                            How It Works: Step by Step
                        </h2>

                        <div className="space-y-12">
                            {steps.map((s, idx) => (
                                <div
                                    key={idx}
                                    className={`grid lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                                >
                                    <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                                {s.step}
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                                {s.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed ml-16">
                                            {s.description}
                                        </p>
                                    </div>
                                    <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                                        <ImagePlaceholder
                                            className="aspect-[4/3] rounded-xl"
                                            text={s.title}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Who Benefits */}
                <section className="py-16 px-6 lg:px-12 bg-teal-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
                            Who Benefits and How
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {benefits.map((b, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-teal-200 rounded-xl p-6"
                                >
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-4">
                                        <b.icon sx={{ fontSize: 28 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                                        {b.role}
                                    </h3>
                                    <p className="text-teal-600 font-medium text-sm mb-3">
                                        {b.benefit}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {b.detail}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Security Section */}
                <section className="py-16 px-6 lg:px-12 bg-slate-900 text-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <Security sx={{ fontSize: 48 }} className="text-teal-400 mb-4" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            Security for Patient Data
                        </h2>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            Patient data is sensitive. Here&apos;s what we do to protect it.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
                            {[
                                "AES-256 encryption at rest and in transit",
                                "Role-based access: each user sees only what they should",
                                "Session timeouts after inactivity",
                                "IP-based access restrictions for extra control",
                                "Complete audit trail: who accessed what, when, from where",
                                "Automated data retention and secure deletion",
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-lg"
                                >
                                    <CheckCircle
                                        className="text-green-400 flex-shrink-0 mt-0.5"
                                        sx={{ fontSize: 18 }}
                                    />
                                    <span className="text-slate-300 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-slate-400 text-sm mt-8">
                            For a detailed look at compliance features, see our{" "}
                            <Link
                                href="/solutions/healthcare/compliance-audit"
                                className="text-teal-400 hover:underline"
                            >
                                Healthcare Compliance & Audit Readiness
                            </Link>{" "}
                            page.
                        </p>
                    </div>
                </section>

                {/* Related Pages */}
                <section className="py-12 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
                            Related Healthcare Solutions
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link
                                href="/solutions/healthcare/clinical-workflows"
                                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-300 transition-all group"
                            >
                                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-teal-600">
                                    Clinical Workflow Automation →
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Automate treatment plan approvals and discharge summaries.
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
                                    HIPAA and NABH compliance with complete audit trails.
                                </p>
                            </Link>
                            <Link
                                href="/solutions/healthcare/document-digitization"
                                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-300 transition-all group"
                            >
                                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-teal-600">
                                    Medical Document Digitization →
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Scan and digitize paper records with OCR.
                                </p>
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
                            Ready to Centralize Your Patient Records?
                        </h2>
                        <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
                            We&apos;ll show you how CannyECM works with your hospital&apos;s
                            actual document types: admission forms, lab reports, consent
                            forms. Not a generic demo.
                        </p>
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-white text-teal-700 font-bold rounded-lg hover:bg-teal-50 transition-colors shadow-lg inline-flex items-center gap-2"
                        >
                            Schedule Demo
                            <ArrowForward sx={{ fontSize: 20 }} />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
