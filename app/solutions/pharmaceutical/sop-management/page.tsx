import type { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import {
    Description,
    CheckCircle,
    ArrowForward,
    VerifiedUser,
    History,
    People,
    CompareArrows,
    Update,
    Groups,
    SmartToy,
    Search,
    QuestionAnswer,
} from '@mui/icons-material';

export const metadata: Metadata = {
    title: 'SOP Management for Pharmaceutical | CannyECM + AI Assistant',
    description: 'Complete SOP lifecycle management with AI-powered knowledge assistant. Creation, revision, controlled publishing, version comparison, natural-language Q&A, and role-specific access with FDA 21 CFR Part 11 compliance.',
    keywords: [
        'SOP management pharma',
        'standard operating procedures pharmaceutical',
        'SOP version control',
        'GMP SOP management',
        'FDA compliant SOP system',
        'pharmaceutical SOP software',
        'SOP knowledge assistant',
        'AI SOP search pharma',
    ],
    openGraph: {
        title: 'SOP Management for Pharmaceutical | CannyECM + AI',
        description: 'Complete SOP lifecycle management with AI-powered knowledge assistant for pharmaceutical manufacturing.',
        images: [{ url: '/images/pharma-sop-management-og.jpg', width: 1200, height: 630 }],
    },
};

export default function SOPManagementPage() {
    const ecmFeatures = [
        {
            title: "Creation & Revision",
            description: "Create new SOPs and revisions with controlled publishing workflows.",
            icon: Description,
        },
        {
            title: "Revision Control",
            description: "Full version history with side-by-side comparison of document versions.",
            icon: CompareArrows,
        },
        {
            title: "Retire/Supersede",
            description: "Properly retire or supersede outdated procedures with full audit trail.",
            icon: History,
        },
        {
            title: "Functional Group Assignment",
            description: "Assign SOPs to specific functional groups and departments for role-based access.",
            icon: Groups,
        },
    ];

    const aiFeatures = [
        {
            title: "Natural-Language Q&A",
            description: "Operators ask questions in plain language and get instant, source-linked answers from approved SOPs.",
            icon: QuestionAnswer,
        },
        {
            title: "Intelligent Search",
            description: "AI-powered search across SOPs, MBRs, and equipment logs with version-controlled responses.",
            icon: Search,
        },
        {
            title: "Change Impact Analysis",
            description: "AI-driven cross-linking of procedural dependencies for comprehensive change control.",
            icon: SmartToy,
        },
    ];

    const outcomes = [
        {
            title: "Always Current",
            description: "Ensure all personnel access only the latest approved version of each SOP.",
        },
        {
            title: "Easily Auditable",
            description: "Complete version history and change tracking for regulatory inspections.",
        },
        {
            title: "Role-Specific",
            description: "Personnel see only the SOPs relevant to their job function and department.",
        },
        {
            title: "Instant Answers",
            description: "30-50% reduction in time spent searching for procedural knowledge.",
        },
    ];

    const pharmaContext = [
        "SOPs for manufacturing processes",
        "Quality control procedures",
        "Equipment operation manuals",
        "Safety protocols",
        "Cleaning and sanitization procedures",
        "Documentation and record-keeping guidelines",
    ];

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-white pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-green-50 to-white py-16 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-green-600 font-semibold mb-4">
                                <Description sx={{ fontSize: 20 }} />
                                <span>CannyECM + AI for Pharmaceutical</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                SOP Management
                            </h1>
                            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                                Standard Operating Procedures (SOPs) are the backbone of pharmaceutical manufacturing.
                                CannyECM provides complete SOP lifecycle management from creation to retirement,
                                combined with AI-powered knowledge assistant for instant procedural answers.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Regulated organizations maintain SOPs that are always current, easily auditable, and role-specific.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all inline-flex items-center gap-2"
                                >
                                    Request Demo
                                    <ArrowForward sx={{ fontSize: 18 }} />
                                </Link>
                                <Link
                                    href="/solutions/pharmaceutical"
                                    className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-green-600 hover:text-green-600 transition-all"
                                >
                                    View All Pharma Solutions
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ECM Features */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Document Management Features
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            Complete SOP lifecycle management for pharmaceutical compliance.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {ecmFeatures.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
                                        <item.icon sx={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* AI Features */}
                <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <SmartToy className="text-blue-600" sx={{ fontSize: 32 }} />
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                AI-Powered Knowledge Assistant
                            </h2>
                        </div>
                        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            Turn static documents into actionable intelligence with GenAI.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            {aiFeatures.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                        <item.icon sx={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pharma Context */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    Pharma Context
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    In pharmaceutical manufacturing, SOPs define how critical processes are performed.
                                    These documents must be centrally stored, retrievable by role and department, and fully traceable.
                                </p>
                                <p className="text-gray-700 font-medium mb-4">
                                    Common SOP types managed:
                                </p>
                                <ul className="space-y-3">
                                    {pharmaContext.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Outcomes</h3>
                                <div className="space-y-6">
                                    {outcomes.map((outcome, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold flex-shrink-0">
                                                {idx + 1}
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

                {/* Compliance Benefits */}
                <section className="py-16 px-4 md:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 md:p-12 rounded-2xl border border-green-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                                Compliance Benefits
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-green-600 mx-auto mb-4 shadow-md">
                                        <VerifiedUser sx={{ fontSize: 32 }} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Eliminates Rogue Versions</h3>
                                    <p className="text-gray-600 text-sm">No more outdated or uncontrolled document copies circulating.</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-green-600 mx-auto mb-4 shadow-md">
                                        <Update sx={{ fontSize: 32 }} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">FDA/WHO/GMP Compliance</h3>
                                    <p className="text-gray-600 text-sm">Meets document control expectations from all major regulatory bodies.</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-green-600 mx-auto mb-4 shadow-md">
                                        <People sx={{ fontSize: 32 }} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Speeds Audit Response</h3>
                                    <p className="text-gray-600 text-sm">Instant retrieval of any SOP version during regulatory inspections.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 px-4 md:px-8 bg-green-600">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Streamline Your SOP Management
                        </h2>
                        <p className="text-green-100 mb-8">
                            See how CannyECM with AI can help you maintain compliant, auditable SOPs with instant knowledge access.
                        </p>
                        <Link
                            href="/contact"
                            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
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
