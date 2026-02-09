import type { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import {
    Science,
    CheckCircle,
    ArrowForward,
    VerifiedUser,
    Lock,
    Link as LinkIcon,
    History,
    Search,
} from '@mui/icons-material';

export const metadata: Metadata = {
    title: 'STP & Protocol Management for Pharmaceutical | CannyECM',
    description: 'Manage Standard Test Procedures (STPs) and protocols for pharmaceutical manufacturing. Secure storage, traceable history, COA linking, and quick audit trails.',
    keywords: [
        'STP management pharma',
        'standard test procedures pharmaceutical',
        'protocol management pharma',
        'COA document management',
        'pharmaceutical test documentation',
        'quality control protocols',
        'product release documentation',
    ],
    openGraph: {
        title: 'STP & Protocol Management | CannyECM Pharma',
        description: 'Standard Test Procedures and protocol management for pharmaceutical quality control.',
        images: [{ url: '/images/pharma-stp-protocol-og.jpg', width: 1200, height: 630 }],
    },
};

export default function STPProtocolPage() {
    const cannyEcmFeatures = [
        {
            title: "Secure Storage",
            description: "Store all STPs and protocols with traceable version history and access controls.",
            icon: Lock,
        },
        {
            title: "Automated Access Restrictions",
            description: "Role-based access ensures only authorized personnel can view or modify test procedures.",
            icon: VerifiedUser,
        },
        {
            title: "COA Linking",
            description: "Link Certificates of Analysis (COA) directly to product batches for complete traceability.",
            icon: LinkIcon,
        },
        {
            title: "Traceable History",
            description: "Complete audit trail of all changes, approvals, and access to test documentation.",
            icon: History,
        },
    ];

    const outcomes = [
        {
            title: "One-Place Retrieval",
            description: "All product release documentation accessible from a single, searchable repository.",
        },
        {
            title: "Quick Audit Trails",
            description: "Instant access to complete document history during regulatory inspections.",
        },
        {
            title: "Batch Traceability",
            description: "Link test results and COAs directly to specific product batches.",
        },
    ];

    const documentTypes = [
        "Standard Test Procedures (STPs)",
        "Analytical Method Protocols",
        "Certificates of Analysis (COA)",
        "Stability Study Protocols",
        "Method Validation Documents",
        "Specifications Documents",
    ];

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-white pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-purple-50 to-white py-16 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-purple-600 font-semibold mb-4">
                                <Science sx={{ fontSize: 20 }} />
                                <span>CannyECM for Pharmaceutical</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                STP & Protocol Management
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Standard Test Procedures (STPs) and protocols define how quality testing is performed
                                in pharmaceutical manufacturing. CannyECM provides secure storage with traceable history,
                                automated access restrictions, and direct linking to product batches.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all inline-flex items-center gap-2"
                                >
                                    Request Demo
                                    <ArrowForward sx={{ fontSize: 18 }} />
                                </Link>
                                <Link
                                    href="/solutions/pharmaceutical"
                                    className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-all"
                                >
                                    View All Pharma Solutions
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support in CannyECM */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Support in CannyECM
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            Comprehensive test procedure and protocol management for pharmaceutical quality control.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {cannyEcmFeatures.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                                        <item.icon sx={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Document Types & Outcomes */}
                <section className="py-16 px-4 md:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    Document Types Managed
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    CannyECM handles all test-related documentation required for pharmaceutical quality assurance.
                                </p>
                                <ul className="space-y-3">
                                    {documentTypes.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="text-purple-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Outcome</h3>
                                <div className="space-y-6">
                                    {outcomes.map((outcome, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                                                <Search sx={{ fontSize: 20 }} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">{outcome.title}</h4>
                                                <p className="text-gray-600 text-sm">{outcome.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pharma Value */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 md:p-12 rounded-2xl border border-purple-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                                Pharma Value
                            </h2>
                            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                                Traceable product quality records are essential for regulatory compliance and customer trust.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                                    <p className="text-gray-600">Document Traceability</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">Instant</div>
                                    <p className="text-gray-600">Audit Response Time</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">Zero</div>
                                    <p className="text-gray-600">Uncontrolled Copies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 px-4 md:px-8 bg-purple-600">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Manage Your Test Procedures Effectively
                        </h2>
                        <p className="text-purple-100 mb-8">
                            See how CannyECM can help you maintain compliant, traceable STPs and protocols.
                        </p>
                        <Link
                            href="/contact"
                            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
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
