import type { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import {
    Description,
    CheckCircle,
    ArrowForward,
    VerifiedUser,
    Speed,
    Security,
    Timeline,
    Email,
    NotificationsActive,
} from '@mui/icons-material';

export const metadata: Metadata = {
    title: 'Document Control & Approval Workflows for Pharma | CannyECM',
    description: 'Automated document routing and approval processes for pharmaceutical manufacturing. Draft, review, approve, and publish workflows compliant with FDA 21 CFR Part 11 and GMP requirements.',
    keywords: [
        'document control pharma',
        'approval workflows pharmaceutical',
        'FDA 21 CFR Part 11 document control',
        'GMP document management',
        'pharmaceutical document lifecycle',
        'electronic signatures pharma',
        'audit trail document control',
    ],
    openGraph: {
        title: 'Document Control & Approval Workflows | CannyECM Pharma',
        description: 'Automated document routing and approval for pharmaceutical manufacturing. FDA 21 CFR Part 11 compliant.',
        images: [{ url: '/images/pharma-document-control-og.jpg', width: 1200, height: 630 }],
    },
};

export default function DocumentControlPage() {
    const workflowSteps = [
        { step: "Draft", color: "bg-purple-500", description: "Create new documents with templates" },
        { step: "Review", color: "bg-blue-500", description: "Route to QA reviewers for feedback" },
        { step: "Approve", color: "bg-green-500", description: "Multi-level approval with e-signatures" },
        { step: "Publish", color: "bg-orange-500", description: "Controlled distribution to users" },
    ];

    const features = [
        {
            title: "Role-based Routing",
            description: "Route documents to QA reviewers, approvers, and compliance heads based on their roles and responsibilities.",
            icon: Timeline,
        },
        {
            title: "Configurable Workflow States",
            description: "Define custom workflow states to match your organization's approval hierarchy and process requirements.",
            icon: Description,
        },
        {
            title: "Automatic Email Notifications",
            description: "Keep stakeholders informed with automatic notifications at each stage of the document lifecycle.",
            icon: Email,
        },
        {
            title: "Escalations and Reminders",
            description: "Set up automatic escalations for pending approvals and reminders to ensure timely document processing.",
            icon: NotificationsActive,
        },
    ];

    const pharmaUseCases = [
        "SOP approval routes: operators → QA → compliance head",
        "Policy updates with controlled electronic signatures",
        "Batch record reviews with multi-level sign-off",
        "Change control documentation approvals",
    ];

    const benefits = [
        {
            title: "Full Digital Trail",
            description: "Complete audit trail of who did what and when—critical for FDA and EMA inspections.",
            icon: Security,
        },
        {
            title: "Reduced Cycle Time",
            description: "Significantly faster document turnaround compared to paper-based manual flows.",
            icon: Speed,
        },
        {
            title: "Regulatory Compliance",
            description: "Meets FDA/WHO/GMP document control expectations with electronic signatures.",
            icon: VerifiedUser,
        },
    ];

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-white pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                                <Description sx={{ fontSize: 20 }} />
                                <span>CannyECM for Pharmaceutical</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Document Control & Approval Workflows
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Automated routing and approval processes for document lifecycle management.
                                From draft to review to approval to publish—all tracked, audited, and compliant
                                with FDA 21 CFR Part 11 requirements.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-2"
                                >
                                    Request Demo
                                    <ArrowForward sx={{ fontSize: 18 }} />
                                </Link>
                                <Link
                                    href="/solutions/pharmaceutical"
                                    className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all"
                                >
                                    View All Pharma Solutions
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Workflow Visualization */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Document Lifecycle Workflow
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                            {workflowSteps.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="text-center">
                                        <div className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg mb-2 shadow-lg`}>
                                            {item.step}
                                        </div>
                                        <p className="text-sm text-gray-600 max-w-[120px]">{item.description}</p>
                                    </div>
                                    {idx < workflowSteps.length - 1 && (
                                        <ArrowForward className="text-gray-300 hidden md:block" sx={{ fontSize: 32 }} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-16 px-4 md:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Key Features
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            CannyECM provides comprehensive document control capabilities designed for regulated pharmaceutical environments.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            {features.map((feature, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                                        <feature.icon sx={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pharma Use Cases */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    Pharma Use Cases
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    Our document control workflows are designed specifically for pharmaceutical manufacturing compliance requirements.
                                </p>
                                <ul className="space-y-4">
                                    {pharmaUseCases.map((useCase, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="text-green-500 flex-shrink-0 mt-1" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{useCase}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Value</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                        Eliminates rogue document versions
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                        Ensures FDA/WHO/GMP compliance
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                        Speeds audit response time
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                        Full traceability for inspections
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-16 px-4 md:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
                            Business Benefits
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                                        <benefit.icon sx={{ fontSize: 32 }} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 px-4 md:px-8 bg-primary">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Streamline Document Control?
                        </h2>
                        <p className="text-blue-100 mb-8">
                            See how CannyECM can automate your document approval workflows while maintaining full regulatory compliance.
                        </p>
                        <Link
                            href="/contact"
                            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
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
