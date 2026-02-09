import type { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import {
    SmartToy,
    CheckCircle,
    ArrowForward,
    VerifiedUser,
    Description,
    Speed,
    Visibility,
    Engineering,
    TrendingUp,
    Security,
} from '@mui/icons-material';

export const metadata: Metadata = {
    title: 'Production AI for Pharmaceutical | eBMR, Predictive Maintenance, Process Optimization',
    description: 'AI-powered production solutions for pharmaceutical manufacturing. Electronic Batch Records (eBMR), predictive maintenance, process optimization, and PPE monitoring with FDA 21 CFR Part 11 compliance.',
    keywords: [
        'pharmaceutical production AI',
        'eBMR pharmaceutical',
        'electronic batch records',
        'predictive maintenance pharma',
        'process optimization pharma',
        'PPE monitoring AI',
        'GMP manufacturing AI',
        'FDA 21 CFR Part 11 AI',
    ],
    openGraph: {
        title: 'Production AI for Pharmaceutical Manufacturing',
        description: 'AI-powered eBMR, predictive maintenance, and process optimization for pharma.',
        images: [{ url: '/images/pharma-production-ai-og.jpg', width: 1200, height: 630 }],
    },
};

export default function ProductionAIPage() {
    const aiModules = [
        {
            id: "ebmr",
            title: "Electronic Batch Records (eBMR)",
            subtitle: "GenAI-Enabled Batch Record Management",
            description: "Transform paper-intensive batch record review into intelligent, automated processes.",
            icon: Description,
            color: "blue",
            scenario: "A multi-site dosage manufacturer experienced prolonged batch release timelines due to manual, paper-intensive BMR review.",
            features: [
                "AI-based digitization of paper BMRs, logbooks, and IPC records",
                "Real-time error and deviation detection during batch execution",
                "Automated review-by-exception using GenAI reasoning",
                "FDA 21 CFR Part 11 compliant electronic signatures",
                "Batch genealogy and traceability tracking",
            ],
            benefits: [
                "45–65% reduction in manual batch record review effort",
                "Batch release timelines reduced from days to hours",
                "Consistent and standardized reviews across products",
            ],
        },
        {
            id: "predictive-maintenance",
            title: "Predictive Maintenance",
            subtitle: "AI-Driven Equipment Health Monitoring",
            description: "Prevent unplanned downtime with machine learning models that predict equipment failures.",
            icon: Engineering,
            color: "green",
            scenario: "Critical production equipment failures causing unplanned downtime and batch losses.",
            features: [
                "Real-time sensor data analysis from production equipment",
                "Machine learning models for failure prediction",
                "Maintenance scheduling optimization",
                "Equipment health dashboards and alerts",
                "Integration with CMMS systems",
            ],
            benefits: [
                "25-45% reduction in unplanned downtime",
                "Extended equipment lifespan",
                "Optimized spare parts inventory",
            ],
        },
        {
            id: "process-optimization",
            title: "Process Optimization",
            subtitle: "AI-Powered Manufacturing Intelligence",
            description: "Optimize manufacturing processes with AI that detects drift and recommends adjustments.",
            icon: TrendingUp,
            color: "purple",
            scenario: "Yield variations across batches due to subtle process parameter drifts going undetected.",
            features: [
                "Process parameter monitoring and drift detection",
                "AI recommendations for process adjustments",
                "Yield optimization through pattern analysis",
                "Golden batch identification and replication",
                "Statistical process control integration",
            ],
            benefits: [
                "3-7% yield improvement across key products",
                "Reduced batch-to-batch variability",
                "Data-driven process decisions",
            ],
        },
        {
            id: "ppe-monitoring",
            title: "PPE Monitoring (AI Vision)",
            subtitle: "Computer Vision for Safety Compliance",
            description: "Ensure workplace safety with AI vision that monitors PPE compliance in real-time.",
            icon: Visibility,
            color: "orange",
            scenario: "Manual safety audits unable to ensure consistent PPE compliance across production areas.",
            features: [
                "Real-time camera-based PPE detection",
                "Automated alerts for non-compliance",
                "Gowning procedure verification",
                "Entry/exit monitoring for cleanrooms",
                "Safety compliance dashboards and reports",
            ],
            benefits: [
                "100% real-time PPE compliance monitoring",
                "Reduced contamination risk",
                "Automated safety audit documentation",
            ],
        },
    ];

    const complianceStandards = [
        "FDA 21 CFR Part 11 - Electronic Records",
        "EU GMP Annex 11 - Computerised Systems",
        "GAMP 5 - Risk-Based Validation",
        "ALCOA+ - Data Integrity Principles",
    ];

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-white pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <SmartToy sx={{ fontSize: 18 }} />
                                AI for Manufacturing
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Production AI for Pharmaceutical
                            </h1>
                            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                                Transform pharmaceutical manufacturing with GenAI and machine learning. From intelligent batch records
                                to predictive maintenance, our AI solutions deliver measurable improvements while maintaining
                                strict GxP compliance.
                            </p>
                            <p className="text-lg text-gray-700 font-medium mb-8">
                                Human-in-the-loop architecture ensures AI enhances compliance rather than bypassing it.
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
                                    href="/solutions/pharmaceutical/ai-quality"
                                    className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all"
                                >
                                    View Quality AI →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Stats */}
                <section className="py-8 px-4 md:px-8 bg-indigo-600">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                            <div>
                                <div className="text-3xl font-bold mb-1">45-65%</div>
                                <div className="text-indigo-200 text-sm">Batch Review Reduction</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-1">25-45%</div>
                                <div className="text-indigo-200 text-sm">Downtime Reduction</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-1">3-7%</div>
                                <div className="text-indigo-200 text-sm">Yield Improvement</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-1">100%</div>
                                <div className="text-indigo-200 text-sm">PPE Compliance</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI Modules */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Production AI Solutions
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Each module is designed to work standalone or integrated for comprehensive manufacturing intelligence.
                        </p>

                        <div className="space-y-12">
                            {aiModules.map((module, idx) => (
                                <div
                                    key={module.id}
                                    id={module.id}
                                    className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                                >
                                    <div className={`bg-${module.color}-50 px-6 py-4 border-b border-gray-200`}>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 bg-${module.color}-100 rounded-lg flex items-center justify-center text-${module.color}-600`}>
                                                <module.icon sx={{ fontSize: 24 }} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{module.title}</h3>
                                                <p className="text-sm text-gray-500">{module.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <p className="text-gray-600 mb-6">{module.description}</p>

                                        <div className="bg-gray-50 p-4 rounded-lg mb-6">
                                            <p className="text-sm font-semibold text-gray-500 mb-2">SCENARIO:</p>
                                            <p className="text-gray-700">{module.scenario}</p>
                                        </div>

                                        <div className="grid lg:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-4">Features</h4>
                                                <ul className="space-y-2">
                                                    {module.features.map((feature, fIdx) => (
                                                        <li key={fIdx} className="flex items-start gap-2">
                                                            <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 18 }} />
                                                            <span className="text-gray-700 text-sm">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                                <h4 className="font-bold text-green-800 mb-4">Business Benefits</h4>
                                                <ul className="space-y-3">
                                                    {module.benefits.map((benefit, bIdx) => (
                                                        <li key={bIdx} className="flex items-center gap-2">
                                                            <TrendingUp className="text-green-600" sx={{ fontSize: 18 }} />
                                                            <span className="text-green-700 font-medium">{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Compliance */}
                <section className="py-16 px-4 md:px-8 bg-slate-900 text-white">
                    <div className="max-w-7xl mx-auto text-center">
                        <Security sx={{ fontSize: 48 }} className="text-blue-400 mb-4" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">
                            Built for Regulatory Compliance
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {complianceStandards.map((standard, idx) => (
                                <div key={idx} className="bg-slate-800 px-4 py-2 rounded-lg text-slate-300">
                                    {standard}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Solutions */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Related Solutions
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link
                                href="/solutions/pharmaceutical/ai-quality"
                                className="bg-purple-50 border border-purple-200 rounded-xl p-6 hover:shadow-lg hover:border-purple-400 transition-all group"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600">Quality & Compliance AI</h3>
                                <p className="text-gray-600 mb-4">Quality inspection, deviation analysis, CAPA management, and regulatory assistance.</p>
                                <span className="text-purple-600 font-medium inline-flex items-center gap-1">
                                    Learn more <ArrowForward sx={{ fontSize: 16 }} />
                                </span>
                            </Link>
                            <Link
                                href="/solutions/pharmaceutical/cannyecm"
                                className="bg-blue-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-400 transition-all group"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">CannyECM</h3>
                                <p className="text-gray-600 mb-4">Enterprise document management for SOPs, STPs, change control, and QMS.</p>
                                <span className="text-blue-600 font-medium inline-flex items-center gap-1">
                                    Learn more <ArrowForward sx={{ fontSize: 16 }} />
                                </span>
                            </Link>
                            <Link
                                href="/solutions/pharmaceutical/cannyscan"
                                className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 hover:shadow-lg hover:border-cyan-400 transition-all group"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600">CannyScan</h3>
                                <p className="text-gray-600 mb-4">Document digitization with OCR and intelligent data extraction.</p>
                                <span className="text-cyan-600 font-medium inline-flex items-center gap-1">
                                    Learn more <ArrowForward sx={{ fontSize: 16 }} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 px-4 md:px-8 bg-indigo-600">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Transform Your Manufacturing Operations
                        </h2>
                        <p className="text-indigo-100 mb-8">
                            See how AI can improve efficiency while maintaining strict regulatory compliance.
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
