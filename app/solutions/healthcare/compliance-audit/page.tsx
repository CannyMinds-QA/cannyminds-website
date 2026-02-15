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
    VerifiedUser,
    Security,
    GavelRounded,
    History,
    DeleteSweep,
    FactCheck,
    Cancel,
} from "@mui/icons-material";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "HIPAA Compliance & Audit Readiness | Healthcare DMS",
    description:
        "Stay audit-ready with built-in HIPAA and NABH compliance. Complete audit trails, automatic retention, role-based access, and secure deletion. CannyECM for hospitals.",
    keywords: [
        "HIPAA compliance document management",
        "hospital audit readiness",
        "NABH documentation system",
        "healthcare regulatory compliance",
        "HIPAA audit trail",
        "medical document retention",
        "hospital access control",
        "JCI accreditation documentation",
        "healthcare data security",
        "ISO 27001 healthcare",
    ],
    alternates: {
        canonical: "https://www.cannymindstech.com/solutions/healthcare/compliance-audit",
    },
    openGraph: {
        title: "HIPAA Compliance & Audit Readiness | CannyMinds",
        description:
            "Complete audit trails, role-based access, automatic retention, and secure deletion — CannyECM keeps hospitals audit-ready.",
        type: 'website',
        url: "https://www.cannymindstech.com/solutions/healthcare/compliance-audit",
        siteName: 'CannyMinds',
        locale: 'en_US',
        images: [
            {
                url: "https://www.cannymindstech.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "HIPAA Compliance & Audit Readiness Solutions",
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "HIPAA Compliance & Audit Readiness | CannyMinds",
        description: "Complete audit trails, role-based access, automatic retention, and secure deletion — CannyECM keeps hospitals audit-ready.",
        images: ['https://www.cannymindstech.com/og-image.jpg'],
    },
};

const lastUpdated: string = new Date().toISOString().split("T")[0]!;

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            name: "HIPAA Compliance & Audit Readiness | CannyMinds",
            description:
                "How CannyECM helps hospitals meet HIPAA, NABH, JCI, and ISO requirements through built-in compliance controls and complete audit trails.",
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
                    item: `${baseUrl}/solutions/healthcare`,
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: "Compliance & Audit Readiness",
                },
            ],
        },
    ],
};

export default function ComplianceAuditPage() {
    const struggles = [
        "Accreditation bodies (NABH, JCI) show up and ask for specific documents. Staff scramble to find them across departments",
        "HIPAA requires proof of access controls and audit logs, but paper systems can't track who looked at what",
        "Retention policies exist on paper but nobody enforces them; records pile up or get destroyed too early",
        "When an incident happens, there's no way to quickly trace the document history and access pattern",
        "SOPs and policies exist in multiple versions across departments, so nobody knows which one is current",
    ];

    const hipaaFeatures = [
        {
            title: "Role-Based Access Controls",
            description:
                "Every user is assigned a role: doctor, nurse, admin, billing, specialist. Each role has specific permissions: what they can view, download, edit, print, or share. A billing clerk can't access clinical notes. A junior doctor can view but not delete records.",
        },
        {
            title: "Encryption at Rest and in Transit",
            description:
                "All patient documents are encrypted using AES-256 when stored and TLS 1.3 during transmission. Even if someone accessed the database directly, the files would be unreadable.",
        },
        {
            title: "Complete Audit Logs",
            description:
                "Every document interaction is logged: who opened it, when, from which device, from which IP address, and what they did (viewed, edited, downloaded, printed, shared). These logs are tamper-proof and can be exported as PDF reports.",
        },
        {
            title: "Automated Retention with Secure Deletion",
            description:
                "Set retention periods per document type. Patient records might be 10 years. Consent forms might be 7 years. When the period expires, the system alerts you. When you approve deletion, it's permanent, with a certificate of destruction.",
        },
    ];

    const nabhFeatures = [
        {
            title: "Policy & SOP Version Control",
            description:
                "Every policy document has a version history. When a new version is published, the old one is automatically archived. Staff always see the latest version. During audits, you can show the complete version timeline.",
        },
        {
            title: "Training Record Management",
            description:
                "Link training completion certificates to employee profiles. When NABH asks 'has every nurse been trained on the new infection control protocol?', you pull up the records instantly.",
        },
        {
            title: "Incident Documentation Trails",
            description:
                "When a clinical incident occurs, the system captures the initial report, investigation documents, corrective actions, and closure, all linked together with timestamps. A complete trail from report to resolution.",
        },
    ];

    const isoAlignments = [
        {
            standard: "ISO 27001",
            area: "Information Security Management",
            features: [
                "Data classification and labeling",
                "Access control policies",
                "Incident management",
                "Business continuity documentation",
            ],
        },
        {
            standard: "ISO 15489",
            area: "Records Management",
            features: [
                "Records creation and capture controls",
                "Metadata management",
                "Retention and disposition schedules",
                "Transfer and migration protocols",
            ],
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
                                Compliance & Audit Readiness
                            </span>
                        </nav>
                    </div>
                </div>

                {/* Hero */}
                <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-teal-50 via-sky-50 to-white py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 font-medium text-sm mb-6">
                                    <LocalHospital sx={{ fontSize: 18 }} />
                                    Healthcare Solutions
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    HIPAA and NABH Compliance: Keep Your Hospital Audit-Ready
                                </h1>

                                <div className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    Hospitals don&apos;t fail audits because they don&apos;t
                                    do the work. They fail because they can&apos;t prove
                                    they did the work. Missing access logs, outdated SOPs,
                                    no retention schedule. These are the gaps that
                                    auditors find.
                                </div>

                                <p className="text-lg text-gray-700 mb-8">
                                    <Link
                                        href="/product/enterprise-content-management"
                                        className="text-primary hover:underline font-medium"
                                    >
                                        CannyECM
                                    </Link>{" "}
                                    builds compliance into the system, not around it. Every
                                    access is logged. Every policy is versioned. Every
                                    retention period is enforced. You don&apos;t prepare for
                                    audits; you&apos;re always ready.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Request Compliance Demo
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-2xl p-8 text-white">
                                <VerifiedUser
                                    sx={{ fontSize: 48 }}
                                    className="text-teal-400 mb-4"
                                />
                                <h3 className="text-xl font-bold mb-4">
                                    Standards We Align With
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        {
                                            name: "HIPAA",
                                            detail: "Health Insurance Portability and Accountability",
                                        },
                                        {
                                            name: "NABH",
                                            detail: "National Accreditation Board for Hospitals",
                                        },
                                        {
                                            name: "JCI",
                                            detail: "Joint Commission International",
                                        },
                                        {
                                            name: "ISO 27001",
                                            detail: "Information Security Management",
                                        },
                                        {
                                            name: "ISO 15489",
                                            detail: "Records Management",
                                        },
                                    ].map((std, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 bg-slate-800 rounded-lg px-4 py-3"
                                        >
                                            <CheckCircle
                                                className="text-green-400"
                                                sx={{ fontSize: 18 }}
                                            />
                                            <div>
                                                <span className="font-bold text-teal-400">
                                                    {std.name}
                                                </span>
                                                <span className="text-slate-400 text-sm ml-2">
                                                    : {std.detail}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Hospitals Struggle */}
                <section className="py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Why Hospitals Struggle with Compliance
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Compliance isn&apos;t hard because the rules are complex. It&apos;s
                            hard because systems make it difficult to follow and prove
                            the rules.
                        </p>

                        <div className="space-y-4 max-w-4xl mx-auto">
                            {struggles.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-lg p-4"
                                >
                                    <Cancel
                                        className="text-red-400 flex-shrink-0 mt-0.5"
                                        sx={{ fontSize: 20 }}
                                    />
                                    <p className="text-gray-700">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HIPAA Section */}
                <section className="py-12 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex items-center gap-3 justify-center mb-4">
                            <Security
                                sx={{ fontSize: 32 }}
                                className="text-teal-600"
                            />
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                HIPAA: Access Controls, Encryption, Audit Logs
                            </h2>
                        </div>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            HIPAA requires specific technical safeguards for Protected
                            Health Information (PHI). Here&apos;s exactly how CannyECM
                            addresses each one.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {hipaaFeatures.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-gray-200 rounded-xl p-6"
                                >
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NABH / JCI Section */}
                <section className="py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex items-center gap-3 justify-center mb-4">
                            <GavelRounded
                                sx={{ fontSize: 32 }}
                                className="text-teal-600"
                            />
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                NABH / JCI: Policy Versioning and Training Records
                            </h2>
                        </div>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Indian hospitals pursuing NABH accreditation and international
                            hospitals targeting JCI have specific documentation
                            requirements. CannyECM handles these out of the box.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            {nabhFeatures.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="bg-teal-50 border border-teal-200 rounded-xl p-6"
                                >
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ISO Alignment */}
                <section className="py-12 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
                            ISO 27001 and ISO 15489 Alignment
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {isoAlignments.map((iso, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-gray-200 rounded-xl p-6"
                                >
                                    <h3 className="text-xl font-bold text-teal-600 mb-1">
                                        {iso.standard}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4">{iso.area}</p>
                                    <ul className="space-y-2">
                                        {iso.features.map((feat, fIdx) => (
                                            <li
                                                key={fIdx}
                                                className="flex items-center gap-2 text-sm"
                                            >
                                                <CheckCircle
                                                    className="text-green-500 flex-shrink-0"
                                                    sx={{ fontSize: 16 }}
                                                />
                                                <span className="text-gray-700">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <p className="text-center mt-8 text-gray-500 text-sm">
                            Our pharmaceutical solutions follow similar compliance patterns
                            — see{" "}
                            <Link
                                href="/solutions/pharmaceutical/regulatory-compliance"
                                className="text-primary hover:underline"
                            >
                                Pharma Regulatory Compliance
                            </Link>
                            .
                        </p>
                    </div>
                </section>

                {/* Audit Trail Details */}
                <section className="py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex items-center gap-3 justify-center mb-4">
                            <History
                                sx={{ fontSize: 32 }}
                                className="text-teal-600"
                            />
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Audit Trail: Every Action Is Logged
                            </h2>
                        </div>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            When an auditor asks &quot;who accessed this patient
                            record?&quot;, you should be able to answer in seconds, not
                            days.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {[
                                {
                                    label: "Who",
                                    detail:
                                        "User name, role, and department logged with every action",
                                },
                                {
                                    label: "When",
                                    detail:
                                        "Precise timestamp down to the second for every action",
                                },
                                {
                                    label: "Where",
                                    detail:
                                        "IP address and device information captured automatically",
                                },
                                {
                                    label: "What",
                                    detail:
                                        "View, edit, download, print, share, delete: every action type is logged",
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-4 bg-slate-50 rounded-lg p-5"
                                >
                                    <span className="text-teal-600 font-bold text-lg min-w-[60px]">
                                        {item.label}
                                    </span>
                                    <p className="text-gray-600 text-sm">{item.detail}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mt-8 max-w-4xl mx-auto">
                            <div className="flex items-start gap-3">
                                <FactCheck
                                    className="text-teal-600 flex-shrink-0"
                                    sx={{ fontSize: 24 }}
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">
                                        Tamper-Proof and Exportable
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Audit logs cannot be edited or deleted, not even by
                                        administrators. When you need to share them with auditors,
                                        export them as PDF reports with date ranges, user filters,
                                        or document-specific views.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Retention Policies */}
                <section className="py-12 px-6 lg:px-12 bg-slate-900 text-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <DeleteSweep
                            sx={{ fontSize: 48 }}
                            className="text-teal-400 mb-4"
                        />
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            Retention Policies That Run Themselves
                        </h2>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            Set how long each document type should be kept. The system
                            handles the rest.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
                            {[
                                "Set retention periods per document type (e.g., patient records = 10 years)",
                                "Automated email alerts 30 days before any document expires",
                                "Secure deletion with proof-of-destruction certificate",
                                "Retention hold for documents under legal review",
                                "Bulk retention application for legacy document migration",
                                "Reports showing which documents are approaching expiry",
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
                            Need help managing physical records too? See our{" "}
                            <Link
                                href="/product/rms"
                                className="text-teal-400 hover:underline"
                            >
                                Records Management System
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/product/tracking-system"
                                className="text-teal-400 hover:underline"
                            >
                                Document Tracking System
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
                                    Centralize patient documents with role-based access.
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
                                    Every workflow action is logged automatically for compliance.
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
                                    Digitize paper records and apply retention policies.
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
                <section className="py-12 px-6 lg:px-12 bg-teal-700">
                    <div className="container mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Need to Get Audit-Ready?
                        </h2>
                        <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
                            We&apos;ll show you how CannyECM handles HIPAA and NABH
                            requirements — audit trails, retention policies, access
                            controls — using a working system, not a slideshow.
                        </p>
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-white text-teal-700 font-bold rounded-lg hover:bg-teal-50 transition-colors shadow-lg inline-flex items-center gap-2"
                        >
                            Schedule Compliance Demo
                            <ArrowForward sx={{ fontSize: 20 }} />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
