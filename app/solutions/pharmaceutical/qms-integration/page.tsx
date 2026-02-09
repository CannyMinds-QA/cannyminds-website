import type { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import {
    VerifiedUser,
    CheckCircle,
    ArrowForward,
    Description,
    Settings,
    School,
    BugReport,
    Assessment,
} from '@mui/icons-material';

export const metadata: Metadata = {
    title: 'QMS Integration for Pharmaceutical | CannyECM',
    description: 'CannyECM forms the document backbone of Quality Management System (QMS). Document control, change control, deviation management, training records, CAPA tracking, and audit tracking.',
    keywords: [
        'QMS integration pharma',
        'quality management system pharmaceutical',
        'pharmaceutical QMS software',
        'document control QMS',
        'CAPA management pharma',
        'GMP QMS integration',
        'FDA QMS compliance',
    ],
    openGraph: {
        title: 'QMS Integration | CannyECM Pharma',
        description: 'CannyECM as the document backbone of your pharmaceutical Quality Management System.',
        images: [{ url: '/images/pharma-qms-integration-og.jpg', width: 1200, height: 630 }],
    },
};

export default function QMSIntegrationPage() {
    const qmsIncludes = [
        {
            title: "Document Control",
            description: "Central repository for all controlled documents with version management.",
            icon: Description,
        },
        {
            title: "Change Control",
            description: "Manage changes to documents, processes, and equipment with approval workflows.",
            icon: Settings,
        },
        {
            title: "Deviation Management",
            description: "Track and investigate deviations from standard procedures and specifications.",
            icon: BugReport,
        },
        {
            title: "Training Records",
            description: "Manage employee training documentation and qualification records.",
            icon: School,
        },
        {
            title: "CAPA Tracking",
            description: "Corrective and Preventive Action management with root cause analysis.",
            icon: VerifiedUser,
        },
        {
            title: "Audit Tracking",
            description: "Internal and external audit management with finding resolution tracking.",
            icon: Assessment,
        },
    ];

    const cannyEcmRole = {
        description: "CannyECM forms the document backbone of QMS and feeds other QMS modules (CAPA, audit, training) with controlled documents.",
        functions: [
            "Central repository for all QMS documents",
            "Feeds controlled documents to CAPA processes",
            "Links training records to current SOPs",
            "Provides audit trail for QMS audits",
            "Ensures document version consistency across modules",
        ],
    };

    const regulatoryStandards = [
        { standard: "ISO 9001", description: "Quality Management Systems" },
        { standard: "ISO 27001", description: "Information Security Management" },
        { standard: "FDA 21 CFR Part 11", description: "Electronic Records & Signatures" },
        { standard: "ICH Q10", description: "Pharmaceutical Quality System" },
    ];

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-white pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-indigo-600 font-semibold mb-4">
                                <VerifiedUser sx={{ fontSize: 20 }} />
                                <span>CannyECM for Pharmaceutical</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                QMS (Quality Management System) Integration
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                CannyECM forms the document backbone of your Quality Management System and feeds other
                                QMS modules (CAPA, audit, training) with controlled documents. This helps pharma firms
                                align with ISO 9001, ISO 27001, and FDA 21 CFR Part 11 requirements.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all inline-flex items-center gap-2"
                                >
                                    Request Demo
                                    <ArrowForward sx={{ fontSize: 18 }} />
                                </Link>
                                <Link
                                    href="/solutions/pharmaceutical"
                                    className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all"
                                >
                                    View All Pharma Solutions
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What QMS Includes */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            What QMS Includes
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            A pharmaceutical QMS encompasses multiple integrated components.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {qmsIncludes.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                                        <item.icon sx={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CannyECM Role */}
                <section className="py-16 px-4 md:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    CannyECM Role
                                </h2>
                                <p className="text-gray-600 mb-6 text-lg">
                                    {cannyEcmRole.description}
                                </p>
                                <ul className="space-y-4">
                                    {cannyEcmRole.functions.map((func, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="text-indigo-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{func}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Regulatory Impact</h3>
                                <p className="text-gray-600 mb-6">
                                    Helps pharma firms align with these regulatory standards:
                                </p>
                                <div className="space-y-4">
                                    {regulatoryStandards.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-3 bg-indigo-50 rounded-lg">
                                            <div className="w-20 font-bold text-indigo-600">{item.standard}</div>
                                            <div className="text-gray-600 text-sm">{item.description}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Summary Table */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Summary
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-indigo-600 text-white">
                                        <th className="p-4 text-left font-bold">Function</th>
                                        <th className="p-4 text-center font-bold">Included in CannyECM</th>
                                        <th className="p-4 text-left font-bold">Pharma Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { func: "Enterprise Document Repository", value: "Centralized control" },
                                        { func: "Workflow & Approval", value: "Faster, auditable processes" },
                                        { func: "SOP / STP / Protocol", value: "Compliance backbone" },
                                        { func: "COA / Specifications", value: "Traceable product quality records" },
                                        { func: "Policy / Manual", value: "Document governance" },
                                        { func: "Change Control", value: "Meets regulatory requirements" },
                                        { func: "License Documents", value: "Prevents expiry risk" },
                                        { func: "Deviation Management", value: "CAPA / CAPA feed" },
                                        { func: "Reports & Dashboards", value: "Data-driven quality insights" },
                                        { func: "QMS Integration", value: "Core quality governance" },
                                        { func: "Regulatory Compliant", value: "Audit & inspection readiness" },
                                    ].map((row, idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                            <td className="p-4 border-b border-gray-200 font-medium">{row.func}</td>
                                            <td className="p-4 border-b border-gray-200 text-center">
                                                <CheckCircle className="text-green-500 mx-auto" sx={{ fontSize: 24 }} />
                                            </td>
                                            <td className="p-4 border-b border-gray-200 text-gray-600">{row.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 px-4 md:px-8 bg-indigo-600">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Strengthen Your QMS with CannyECM
                        </h2>
                        <p className="text-indigo-100 mb-8">
                            See how CannyECM can form the document backbone of your Quality Management System.
                        </p>
                        <Link
                            href="/contact"
                            className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
                        >
                            Schedule a Demo
                            <ArrowForward sx={{ fontSize: 18 }} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
