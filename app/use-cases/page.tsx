
import type { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import {
    LocalHospital,
    Factory,
    AccountBalance,
    School,
    ShoppingCart,
    Gavel,
    ArrowForward,
    Science,
    VerifiedUser,
    Construction
} from "@mui/icons-material";

export const metadata: Metadata = {
    title: "Industry Use Cases | CannyMinds Technology",
    description: "Explore how CannyMinds solves real-world business challenges across Healthcare, Manufacturing, Finance, and more with our tailored IT solutions.",
};

const useCases = [
    {
        industry: "Healthcare",
        href: "/use-cases/healthcare",
        icon: LocalHospital,
        color: "text-red-500",
        bg: "bg-red-50",
        borderColor: "border-red-100",
        highlightColor: "bg-red-500",
        lightHighlight: "bg-red-50/50",
        description: "Digital transformation for modern patient care.",
        problems: [
            "Inefficient manual patient record management",
            "Compliance risks (HIPAA regulatory adherence)",
            "Slow appointment scheduling and patient intake"
        ],
        solutions: [
            "CannyECM for secure electronic health records",
            "Automated compliance workflows and audit trails",
            "Integrated patient portal and scheduling system"
        ]
    },
    {
        industry: "Pharmaceutical",
        href: "/use-cases/pharmaceutical",
        icon: Science,
        color: "text-purple-600",
        bg: "bg-purple-50",
        borderColor: "border-purple-100",
        highlightColor: "bg-purple-600",
        lightHighlight: "bg-purple-50/50",
        description: "Streamlining drug manufacturing and compliance.",
        problems: [
            "Complex batch record documentation",
            "Strict regulatory compliance (FDA/21 CFR)",
            "Slow quality control approvals"
        ],
        solutions: [
            "Digital Batch Manufacturing Records (eBMR)",
            "Automated quality management workflows",
            "Real-time compliance monitoring"
        ]
    },
    {
        industry: "Manufacturing & Engineering",
        href: "/use-cases/manufacturing-engineering",
        icon: Factory,
        color: "text-orange-500",
        bg: "bg-orange-50",
        borderColor: "border-orange-100",
        highlightColor: "bg-orange-500",
        lightHighlight: "bg-orange-50/50",
        description: "Optimizing production and supply chain workflows.",
        problems: [
            "Paper-based batch records causing delays",
            "Lack of real-time inventory visibility",
            "Quality control tracking issues"
        ],
        solutions: [
            "Electronic Batch Manufacturing Records (eBMR)",
            "IoT-enabled real-time inventory tracking",
            "Automated quality assurance dashboards"
        ]
    },
    {
        industry: "FMCG Manufacturing",
        href: "/use-cases/fmcg",
        icon: ShoppingCart,
        color: "text-green-600",
        bg: "bg-green-50",
        borderColor: "border-green-100",
        highlightColor: "bg-green-600",
        lightHighlight: "bg-green-50/50",
        description: "High-speed production documentation and quality control.",
        problems: [
            "Manual production logs slow down lines",
            "Inconsistent quality documentation",
            "Recall management challenges"
        ],
        solutions: [
            "Digitized production logs & checklists",
            "Automated quality deviation workflows",
            "End-to-end batch traceability"
        ]
    },
    {
        industry: "Bottling Manufacturing",
        href: "/use-cases/bottling",
        icon: Factory,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
        borderColor: "border-cyan-100",
        highlightColor: "bg-cyan-600",
        lightHighlight: "bg-cyan-50/50",
        description: "Ensuring traceability and compliance in bottling lines.",
        problems: [
            "Fragmented batch documentation",
            "Manual lab & sanitation records",
            "Audit readiness gaps"
        ],
        solutions: [
            "Integrated batch record management",
            "Digital lab and sanitation logs",
            "Automated audit trail generation"
        ]
    },
    {
        industry: "Banking & Finance",
        href: "/use-cases/bfsi",
        icon: AccountBalance,
        color: "text-blue-500",
        bg: "bg-blue-50",
        borderColor: "border-blue-100",
        highlightColor: "bg-blue-500",
        lightHighlight: "bg-blue-50/50",
        description: "Secure, automated financial operations.",
        problems: [
            "Slow manual loan processing times",
            "Fraud detection reliant on manual review",
            "Complex regulatory reporting requirements"
        ],
        solutions: [
            "AI-driven loan origination & processing",
            "Real-time fraud detection algorithms",
            "Automated regulatory reporting tools"
        ]
    },
    {
        industry: "Legal Firms",
        href: "/use-cases/legal",
        icon: Gavel,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        borderColor: "border-indigo-100",
        highlightColor: "bg-indigo-600",
        lightHighlight: "bg-indigo-50/50",
        description: "Streamlining legal workflows and case management.",
        problems: [
            "Overwhelming volume of legal documents",
            "Tracking critical dates & deadlines",
            "Secure client communication"
        ],
        solutions: [
            "AI-powered Document Management System",
            "Automated case management & calendaring",
            "Encrypted client portal for secure sharing"
        ]
    },
    {
        industry: "Audit Firms",
        href: "/use-cases/audit-firms",
        icon: VerifiedUser,
        color: "text-slate-600",
        bg: "bg-slate-50",
        borderColor: "border-slate-100",
        highlightColor: "bg-slate-600",
        lightHighlight: "bg-slate-50/50",
        description: "Enhancing audit quality and evidence management.",
        problems: [
            "Dispersed audit working papers",
            "Manual review & sign-off bottlenecks",
            "Difficulty in tracking audit evidence"
        ],
        solutions: [
            "Centralized audit documentation platform",
            "Workflow-driven review & approval",
            "Secure evidence linking & retention"
        ]
    }
];

export default function UseCasesPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-16 sm:pt-20">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-gray-900 to-primary text-white py-20 md:py-32">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                    <div className="container mx-auto px-6 lg:px-12 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                Solving Real-World Problems
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8 max-w-3xl mx-auto">
                                Discover how CannyMinds leverages technology to tackle critical challenges across diverse industries.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
                                >
                                    Start Your Story
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases Grid */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid gap-12 max-w-7xl mx-auto">
                            {useCases.map((useCase, index) => {
                                const IconComponent = useCase.icon;
                                return (
                                    <div
                                        key={index}
                                        id={useCase.industry.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}
                                        className="flex flex-col md:flex-row gap-8 bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow scroll-mt-24"
                                    >
                                        {/* Header / Industry Icon */}
                                        <div className="md:w-1/3 flex flex-col items-start">
                                            <div className={`w-16 h-16 rounded-2xl ${useCase.bg} ${useCase.color} flex items-center justify-center mb-6`}>
                                                <IconComponent sx={{ fontSize: 32 }} />
                                            </div>
                                            <h2 className="text-2xl font-bold text-secondary mb-3">{useCase.industry}</h2>
                                            <p className="text-gray-600 mb-6">{useCase.description}</p>
                                            <Link href={useCase.href} className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all mt-auto group">
                                                Solve This For Me <ArrowForward fontSize="small" className="group-hover:text-primary" />
                                            </Link>
                                        </div>

                                        {/* Problem / Solution Grid */}
                                        <div className="md:w-2/3 grid md:grid-cols-2 gap-8 relative">
                                            {/* Divider for desktop */}
                                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 -translate-x-1/2"></div>

                                            <div className={`rounded-xl p-6 border ${useCase.borderColor} ${useCase.lightHighlight}`}>
                                                <h3 className={`text-lg font-bold ${useCase.color} mb-4 flex items-center gap-2`}>
                                                    <span className={`w-2 h-2 rounded-full ${useCase.highlightColor}`}></span>
                                                    The Challenge
                                                </h3>
                                                <ul className="space-y-3">
                                                    {useCase.problems.map((prob, i) => (
                                                        <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                                                            <span className="text-red-400 mt-1.5">•</span>
                                                            {prob}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="bg-green-50/50 rounded-xl p-6 border border-green-100">
                                                <h3 className="text-lg font-bold text-green-600 mb-4 flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-green-600"></span>
                                                    The Solution
                                                </h3>
                                                <ul className="space-y-3">
                                                    {useCase.solutions.map((sol, i) => (
                                                        <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                                                            <span className="text-green-400 mt-1.5">•</span>
                                                            {sol}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6 lg:px-12 text-center">
                        <h2 className="text-3xl font-bold text-secondary mb-6">Have a Unique Use Case?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                            Every business is different. We specialize in tailoring our solutions to fit your specific operational needs and challenges.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
                        >
                            Discuss Your Requirements
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
