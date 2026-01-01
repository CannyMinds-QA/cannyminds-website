import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import {
    Speed,
    Gavel,
    Receipt,
    Business,
    AccountTree,
    HealthAndSafety,
    ArrowForward,
    TrendingUp,
    Settings,
    HeadsetMic
} from '@mui/icons-material';

export const metadata: Metadata = {
    title: 'BPM Solutions | Business Process Management | CannyMinds',
    description: 'Streamline your business operations with CannyMinds BPM solutions. Automate finance, legal, HR, and procurement workflows for maximum efficiency.',
    openGraph: {
        title: 'BPM Solutions | Business Process Management | CannyMinds',
        description: 'Streamline your business operations with CannyMinds BPM solutions. Automate finance, legal, HR, and procurement workflows for maximum efficiency.',
        images: [{ url: '/images/bpm-hub-og.jpg', width: 1200, height: 630, alt: 'CannyMinds BPM Solutions' }],
    },
};

const bpmSolutions = [
    {
        title: "Invoice Management",
        description: "Automate accounts payable, reduce processing time by 80%, and eliminate manual data entry errors.",
        href: "/bpm/invoice-management",
        icon: Receipt,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "hover:border-blue-500"
    },
    {
        title: "Procurement",
        description: "Streamline purchase requisitions, approvals, and vendor management in one unified platform.",
        href: "/bpm/procurement",
        icon: Business,
        color: "text-green-600",
        bg: "bg-green-50",
        border: "hover:border-green-500"
    },
    {
        title: "Legal Management",
        description: "Centralize contract lifecycle management, case tracking, and compliance documentation.",
        href: "/bpm/legal-management",
        icon: Gavel,
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "hover:border-purple-500"
    },
    {
        title: "Project Management",
        description: "Track project milestones, resource allocation, and deliverables with real-time dashboards.",
        href: "/bpm/project-management",
        icon: AccountTree,
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "hover:border-orange-500"
    },
    {
        title: "Safety Compliance",
        description: "Ensure workplace safety with automated incident reporting, audits, and regulatory compliance tracking.",
        href: "/bpm/safety-compliance",
        icon: HealthAndSafety,
        color: "text-red-600",
        bg: "bg-red-50",
        border: "hover:border-red-500"
    },
    {
        title: "Custom Workflows",
        description: "Design and deploy bespoke business processes tailored to your organization's unique needs.",
        href: "/bpm/custom-workflows",
        icon: Settings,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "hover:border-indigo-500"
    }
];

export default function BPMHubPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-white pt-20">

                {/* Hero Section */}
                <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Transform Operations with <br className="hidden md:block" />
                            <span className="text-primary">Business Process Management</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Eliminate bottlenecks and silence the chaos of manual processes.
                            Our suite of BPM tools helps you automate, monitor, and optimize your
                            business workflows from end-to-end.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="#solutions"
                                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2"
                            >
                                Explore Solutions
                                <ArrowForward sx={{ fontSize: 20 }} />
                            </Link>
                            <Link
                                href="/#contact"
                                className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                            >
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Solutions Grid */}
                <section id="solutions" className="py-20 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Suite</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Specialized BPM Modules</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {bpmSolutions.map((sol, idx) => (
                                <Link
                                    key={idx}
                                    href={sol.href}
                                    className={`group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 ${sol.border}`}
                                >
                                    <div className={`w-16 h-16 ${sol.bg} ${sol.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <sol.icon sx={{ fontSize: 32 }} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                        {sol.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {sol.description}
                                    </p>
                                    <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                                        Learn more <ArrowForward sx={{ fontSize: 18, marginLeft: '8px' }} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="py-20 bg-gray-50 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Why Leading Enterprises Trust CannyMinds BPM
                                </h2>
                                <div className="space-y-8">
                                    {[
                                        {
                                            title: "Rapid Deployment",
                                            desc: "Launch critical workflows in days, not months, with our low-code architecture.",
                                            icon: Speed
                                        },
                                        {
                                            title: "Seamless Integration",
                                            desc: "Connects effortlessly with your existing ERP, CRM, and HRMS systems.",
                                            icon: Settings
                                        },
                                        {
                                            title: "Measurable ROI",
                                            desc: "Real-time analytics to track efficiency gains and cost savings from Day 1.",
                                            icon: TrendingUp
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                                                <item.icon />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                                                <p className="text-gray-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
                                <div className="bg-white p-8 rounded-2xl shadow-xl relative z-10 border border-gray-100">
                                    <div className="text-center py-12">
                                        <HeadsetMic sx={{ fontSize: 64, color: '#94a3b8', marginBottom: '1.5rem' }} />
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
                                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                            Our process experts can analyze your unique requirements and build a tailored automation strategy.
                                        </p>
                                        <Link
                                            href="/#contact"
                                            className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                                        >
                                            Talk to an Expert
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
