import type { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import {
    Settings,
    CheckCircle,
    ArrowForward,
    VerifiedUser,
    Assignment,
    Approval,
    Description,
    Timeline,
} from '@mui/icons-material';

export const metadata: Metadata = {
    title: 'Change Control Management for Pharmaceutical | CannyECM',
    description: 'Manage change control processes for pharmaceutical manufacturing. Change requests, impact assessment tracking, approval routing, and documentation with FDA 21 CFR Part 11 compliance.',
    keywords: [
        'change control pharma',
        'pharmaceutical change management',
        'GMP change control',
        'FDA change control documentation',
        'CAPA change management',
        'regulatory change control',
        'controlled document changes',
    ],
    openGraph: {
        title: 'Change Control Management | CannyECM Pharma',
        description: 'Comprehensive change control for pharmaceutical compliance. FDA 21 CFR Part 11 ready.',
        images: [{ url: '/images/pharma-change-control-og.jpg', width: 1200, height: 630 }],
    },
};

export default function ChangeControlPage() {
    const cannyEcmOffers = [
        {
            title: "Change Requests",
            description: "Initiate and track change requests with structured forms and categorization.",
            icon: Assignment,
        },
        {
            title: "Impact Assessment Tracking",
            description: "Document and track impact assessments for proposed changes across departments.",
            icon: Timeline,
        },
        {
            title: "Approval Routing",
            description: "Configure multi-level approval workflows based on change type and impact level.",
            icon: Approval,
        },
        {
            title: "Documentation of Reason",
            description: "Capture complete documentation of reason and authorization for every change.",
            icon: Description,
        },
    ];

    const regulatoryContext = {
        requirement: "Any change to controlled documents or processes must be documented, approved, and traceable.",
        standards: [
            "FDA 21 CFR Part 211 - cGMP requirements",
            "ICH Q10 - Pharmaceutical Quality System",
            "EU GMP Annex 15 - Qualification and Validation",
            "ISO 13485 - Medical Device QMS",
        ],
    };

    const changeTypes = [
        "Process changes",
        "Equipment modifications",
        "Document revisions",
        "Supplier changes",
        "Raw material specifications",
        "Packaging changes",
    ];

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-white pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-orange-50 to-white py-16 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-orange-600 font-semibold mb-4">
                                <Settings sx={{ fontSize: 20 }} />
                                <span>CannyECM for Pharmaceutical</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Change Control Management
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Any change to controlled documents or processes must be documented, approved, and traceable.
                                CannyECM provides comprehensive change control that supports CAPA and regulatory change management expectations.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all inline-flex items-center gap-2"
                                >
                                    Request Demo
                                    <ArrowForward sx={{ fontSize: 18 }} />
                                </Link>
                                <Link
                                    href="/solutions/pharmaceutical"
                                    className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-orange-600 hover:text-orange-600 transition-all"
                                >
                                    View All Pharma Solutions
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CannyECM Offers */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            CannyECM Offers
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            Complete change control workflow management for pharmaceutical compliance.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {cannyEcmOffers.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                                        <item.icon sx={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Regulatory Requirement */}
                <section className="py-16 px-4 md:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    Regulatory Requirement
                                </h2>
                                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-6">
                                    <p className="text-gray-700 font-medium">
                                        {regulatoryContext.requirement}
                                    </p>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Applicable regulatory standards:
                                </p>
                                <ul className="space-y-3">
                                    {regulatoryContext.standards.map((standard, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <VerifiedUser className="text-orange-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{standard}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Change Types Managed</h3>
                                <ul className="space-y-4">
                                    {changeTypes.map((type, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <CheckCircle className="text-orange-500 flex-shrink-0" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{type}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Value Section */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 md:p-12 rounded-2xl border border-orange-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                                Value
                            </h2>
                            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                                Supports CAPA and regulatory change management expectations.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-xl text-center">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-4">
                                        <VerifiedUser sx={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">CAPA Alignment</h3>
                                    <p className="text-gray-600 text-sm">Integrates with CAPA workflows for corrective actions.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl text-center">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-4">
                                        <Timeline sx={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Complete Traceability</h3>
                                    <p className="text-gray-600 text-sm">Full audit trail of all changes from request to closure.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl text-center">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-4">
                                        <Approval sx={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Audit Ready</h3>
                                    <p className="text-gray-600 text-sm">Documentation ready for regulatory inspections.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 px-4 md:px-8 bg-orange-600">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Implement Compliant Change Control
                        </h2>
                        <p className="text-orange-100 mb-8">
                            See how CannyECM can help you manage changes with full regulatory compliance.
                        </p>
                        <Link
                            href="/contact"
                            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
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
