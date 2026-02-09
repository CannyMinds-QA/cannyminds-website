import type { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import {
    Inventory,
    CheckCircle,
    ArrowForward,
    Lock,
    Folder,
    ViewInAr,
    Search,
    FactCheck,
    Assessment,
    LocalShipping,
} from '@mui/icons-material';

export const metadata: Metadata = {
    title: 'CannyRMS - Physical Records Management for Pharmaceutical | CannyMinds',
    description: 'CannyRMS is a web-based Physical Records Management Software for pharmaceutical manufacturing. Track, retrieve, and audit physical files, cartons, and storage locations.',
    keywords: [
        'physical records management pharma',
        'pharmaceutical records storage',
        'GMP records management',
        'batch record storage',
        'pharmaceutical file tracking',
        'record room management',
        'FDA compliant records storage',
    ],
    openGraph: {
        title: 'CannyRMS - Physical Records Management | Pharmaceutical',
        description: 'Web-based physical records management for pharmaceutical manufacturing compliance.',
        images: [{ url: '/images/cannyrms-pharma-og.jpg', width: 1200, height: 630 }],
    },
};

export default function CannyRMSPage() {
    const solutionOverview = {
        type: "Web-based Physical Record Management System",
        deployment: "On-Premises (with support for Local or Cloud deployments)",
        interface: "Professional, intuitive, and user-friendly design",
        installation: "Simple and fast, with no prerequisite software required",
    };

    const coreCapabilities = [
        {
            title: "Security & Access Control",
            features: [
                "Secure login with role-based user access",
                "Administrator-controlled permissions for view, edit, and delete operations",
                "User creation with email validation and complete activity logging",
            ],
            icon: Lock,
        },
        {
            title: "File & Record Management",
            features: [
                "Easy indexing of files and cartons using unique reference IDs",
                "Customized key fields for departments and descriptions",
                "Validation of mandatory fields to ensure data accuracy",
                "Configurable dropdowns for standardized indexing",
            ],
            icon: Folder,
        },
        {
            title: "Rack & Space Optimization",
            features: [
                "Simple allocation of files to rack, shelf, and carton locations",
                "Customized rack labeling and support for multiple carton types",
                "Real-time rack availability visibility for optimum space utilization",
            ],
            icon: ViewInAr,
        },
        {
            title: "Request, Retrieval & Tracking",
            features: [
                "File requests restricted to authorized users",
                "Bulk upload of retrieval requests for faster processing",
                "Separate tracking of temporary and permanent retrievals",
                "End-to-end tracking of file status with instant system visibility",
            ],
            icon: LocalShipping,
        },
        {
            title: "Search, Audit & Compliance",
            features: [
                "Powerful search capabilities for quick file identification",
                "System-generated logs for all file movements and user actions",
                "Complete audit trail supporting compliance and accountability",
            ],
            icon: Search,
        },
        {
            title: "Reporting & Billing Support",
            features: [
                "Rack utilization and availability reports",
                "Operational and activity reports",
                "Capture of key data required for billing and invoicing",
            ],
            icon: Assessment,
        },
    ];

    const businessValue = [
        "Centralized and controlled management of physical records",
        "Faster retrieval times and reduced manual dependency",
        "Improved storage efficiency and cost optimization",
        "Enhanced security, traceability, and audit readiness",
        "Scalable solution suitable for record rooms, warehouses, and regulated environments",
    ];

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-white pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-amber-50 to-white py-16 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-amber-600 font-semibold mb-4">
                                <Inventory sx={{ fontSize: 20 }} />
                                <span>CannyRMS for Pharmaceutical</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                CannyRMS - Physical Records Management
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                CannyRMS is a robust, web-based Physical Records Management Software designed to
                                digitize, control, and optimize the management of physical files, cartons, and storage
                                locations. Built on a secure client-server architecture, CannyRMS enables organizations
                                to efficiently track, retrieve, and audit physical records while ensuring data security,
                                operational transparency, and optimal space utilization.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all inline-flex items-center gap-2"
                                >
                                    Request Demo
                                    <ArrowForward sx={{ fontSize: 18 }} />
                                </Link>
                                <Link
                                    href="/solutions/pharmaceutical"
                                    className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-amber-600 hover:text-amber-600 transition-all"
                                >
                                    View All Pharma Solutions
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution Overview */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Solution Overview
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                                <p className="text-sm font-bold text-amber-700 mb-2">Application Type</p>
                                <p className="text-gray-700">{solutionOverview.type}</p>
                            </div>
                            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                                <p className="text-sm font-bold text-amber-700 mb-2">Deployment Model</p>
                                <p className="text-gray-700">{solutionOverview.deployment}</p>
                            </div>
                            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                                <p className="text-sm font-bold text-amber-700 mb-2">User Interface</p>
                                <p className="text-gray-700">{solutionOverview.interface}</p>
                            </div>
                            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                                <p className="text-sm font-bold text-amber-700 mb-2">Installation</p>
                                <p className="text-gray-700">{solutionOverview.installation}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Capabilities */}
                <section className="py-16 px-4 md:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
                            Core Capabilities
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {coreCapabilities.map((capability, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600">
                                            <capability.icon sx={{ fontSize: 24 }} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">{capability.title}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {capability.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-2">
                                                <CheckCircle className="text-amber-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />
                                                <span className="text-gray-600 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Business Value */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-2xl border border-amber-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                                Business Value
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                                {businessValue.map((value, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                                        <CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                        <span className="text-gray-700">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Value Proposition */}
                <section className="py-16 px-4 md:px-8 bg-gray-50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            Transform Physical Record Handling
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            CannyRMS empowers organizations to transition from manual record handling to a structured,
                            secure, and fully traceable digital control system for physical records, delivering efficiency,
                            compliance, and long-term operational value.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 px-4 md:px-8 bg-amber-600">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Manage Your Physical Records Effectively
                        </h2>
                        <p className="text-amber-100 mb-8">
                            See how CannyRMS can help you track and manage physical records with full traceability.
                        </p>
                        <Link
                            href="/contact"
                            className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
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
