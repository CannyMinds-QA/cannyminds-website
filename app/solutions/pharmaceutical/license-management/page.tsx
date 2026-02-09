import type { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import {
    Badge,
    CheckCircle,
    ArrowForward,
    NotificationsActive,
    Category,
    Autorenew,
    CalendarMonth,
    Warning,
} from '@mui/icons-material';

export const metadata: Metadata = {
    title: 'License Document Management for Pharmaceutical | CannyECM',
    description: 'Manage pharmaceutical licenses, permits, and certifications. Expiry alerts, document classification, renewals workflow, and compliance tracking.',
    keywords: [
        'license management pharma',
        'pharmaceutical license tracking',
        'drug license management',
        'GMP certificate management',
        'FDA license compliance',
        'expiry alert system pharma',
        'regulatory license management',
    ],
    openGraph: {
        title: 'License Document Management | CannyECM Pharma',
        description: 'Track and manage pharmaceutical licenses with expiry alerts and renewals workflow.',
        images: [{ url: '/images/pharma-license-management-og.jpg', width: 1200, height: 630 }],
    },
};

export default function LicenseManagementPage() {
    const cannyEcmFeatures = [
        {
            title: "Expiry Alerts & Notifications",
            description: "Automated alerts as per Reminder Policy feature of CannyECM. Never miss a renewal deadline.",
            icon: NotificationsActive,
        },
        {
            title: "Document Classification",
            description: "Categorize licenses by type, authority, location, and expiry date for easy management.",
            icon: Category,
        },
        {
            title: "Renewals Workflow",
            description: "Automated workflow for license renewal process with approval routing.",
            icon: Autorenew,
        },
        {
            title: "Expiry Calendar",
            description: "Visual calendar view of all upcoming license expirations across the organization.",
            icon: CalendarMonth,
        },
    ];

    const licenseTypes = [
        "Drug Manufacturing License",
        "Drug Sales License",
        "Import/Export Licenses",
        "GMP Certificates",
        "ISO Certifications",
        "Environmental Permits",
        "Fire Safety Certificates",
        "Controlled Substance Licenses",
    ];

    const benefits = [
        {
            title: "Prevents Legal Lapses",
            description: "Proactive alerts prevent operations with expired licenses, avoiding regulatory penalties.",
        },
        {
            title: "Centralized Repository",
            description: "All licenses in one searchable location with complete version history.",
        },
        {
            title: "Audit Ready",
            description: "Instant retrieval of current and historical license documents during inspections.",
        },
    ];

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-white pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-red-50 to-white py-16 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-red-600 font-semibold mb-4">
                                <Badge sx={{ fontSize: 20 }} />
                                <span>CannyECM for Pharmaceutical</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                License Document Management
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Pharmaceutical operations require numerous licenses, permits, and certifications.
                                CannyECM provides expiry alerts, document classification, and renewals workflow
                                to prevent legal lapses due to expired licenses.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all inline-flex items-center gap-2"
                                >
                                    Request Demo
                                    <ArrowForward sx={{ fontSize: 18 }} />
                                </Link>
                                <Link
                                    href="/solutions/pharmaceutical"
                                    className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-red-600 hover:text-red-600 transition-all"
                                >
                                    View All Pharma Solutions
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CannyECM Software Features */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            CannyECM Software Features
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            Comprehensive license tracking and management for pharmaceutical compliance.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {cannyEcmFeatures.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600 mb-4">
                                        <item.icon sx={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* License Types */}
                <section className="py-16 px-4 md:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    License Types Managed
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    CannyECM tracks all types of licenses and certifications required for pharmaceutical operations.
                                </p>
                                <ul className="space-y-3">
                                    {licenseTypes.map((type, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="text-red-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{type}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <Warning className="text-amber-500" sx={{ fontSize: 28 }} />
                                    <h3 className="text-xl font-bold text-gray-900">Risk Prevention</h3>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    Operating with expired licenses can result in:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                                        Regulatory penalties and fines
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                                        Production shutdowns
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                                        Import/export restrictions
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                                        Loss of customer trust
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
                            Benefits
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 px-4 md:px-8 bg-red-600">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Never Miss a License Renewal
                        </h2>
                        <p className="text-red-100 mb-8">
                            See how CannyECM can help you track and manage all your pharmaceutical licenses.
                        </p>
                        <Link
                            href="/contact"
                            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
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
