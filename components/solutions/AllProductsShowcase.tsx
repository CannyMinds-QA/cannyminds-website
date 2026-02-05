"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Description as DocIcon,
    People as PeopleIcon,
    Scanner as ScanIcon,
    Visibility as TrackIcon,
    Inventory as InventoryIcon,
    Science as ScienceIcon,
    Psychology as AiIcon,
    ArrowForward as ArrowIcon,
    CheckCircle as CheckIcon,
    TrendingUp,
    Security,
    Speed,
    CloudDone,
    Star,
} from "@mui/icons-material";

const products = [
    {
        name: "CannyECM",
        title: "Enterprise Content Management",
        description: "Transform your document chaos into organized perfection. Enterprise-grade ECM with industry-leading OCR, intelligent workflow automation, and flexible cloud/on-premise deployment options.",
        longDescription: "A comprehensive document management system designed for high-volume enterprises. Go paperless with advanced OCR, automate approvals with custom workflows, and ensure compliance with secure audit trails.",
        icon: DocIcon,
        color: "text-blue-600",
        bg: "bg-blue-50",
        borderColor: "hover:border-blue-500",
        link: "/solutions/product/document-management",
        features: ["80%+ OCR Accuracy", "Workflow Automation", "Cloud & On-Premise", "Version Control", "Secure Sharing"],
        stats: { value: "50K+", label: "Docs Managed" },
    },
    {
        name: "CannyHR",
        title: "HR & Payroll Management",
        description: "Complete hire-to-retire HRMS solution. Streamline payroll, attendance, and recruitment.",
        longDescription: "End-to-end HR automation from recruitment to retirement. simplify complex payroll calculations, track attendance with biometric integration, and empower employees with self-service portals.",
        icon: PeopleIcon,
        color: "text-purple-600",
        bg: "bg-purple-50",
        borderColor: "hover:border-purple-500",
        link: "/solutions/product/hr-management",
        features: ["Payroll Automation", "350+ Integrations", "Mobile App", "Self-Service Portal", "Performance Reviews"],
        stats: { value: "10K+", label: "Employees" },
    },
    {
        name: "CannyScan",
        title: "Professional Document Scanning",
        description: "Transformation of paper into digital assets. Professional scanning for all document types.",
        longDescription: "Professional digitization services for all your physical records. We handle everything from standard documents to large-format blueprints and sensitive microfilms with improved accessibility.",
        icon: ScanIcon,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        borderColor: "hover:border-emerald-500",
        link: "/solutions/product/scanning-solution",
        features: ["99.9% Accuracy", "Secure Storage", "Onsite & Offsite", "Large Format", "Microfilm Digitization"],
        stats: { value: "1M+", label: "Pages Scanned" },
    },
    {
        name: "CannyTrack",
        title: "Workforce Productivity",
        description: "Boost remote team productivity with intelligent monitoring and activity tracking.",
        longDescription: "Gain actionable insights into your team's productivity without compromising privacy. Track active hours, application usage, and project time allocation with transparent monitoring tools.",
        icon: TrackIcon,
        color: "text-orange-600",
        bg: "bg-orange-50",
        borderColor: "hover:border-orange-500",
        link: "/solutions/product/tracking-system",
        features: ["Real-time Analytics", "Consent-based", "Offline Support", "App Usage Tracking", "Productivity Scores"],
        stats: { value: "25%", label: "Productivity Gain" },
    },
    {
        name: "CannyRMS",
        title: "Retail Management System",
        description: "Complete retail operations platform. Manage inventory, POS, and multi-location stores.",
        longDescription: "Unify your retail operations across all channels. Manage inventory in real-time, streamline point-of-sale transactions, and get detailed sales analytics to optimize store performance.",
        icon: InventoryIcon,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        borderColor: "hover:border-indigo-500",
        link: "/solutions/product/rms",
        features: ["Inventory Mgmt", "Multi-location POS", "Real-time Analytics", "Loyalty Programs", "Supplier Management"],
        stats: { value: "99.9%", label: "Uptime" },
    },
    {
        name: "Canny eBMR",
        title: "Electronic Batch Records",
        description: "FDA 21 CFR Part 11 compliant eBMR for pharmaceutical manufacturing.",
        longDescription: "Digitalize your pharmaceutical manufacturing process with full FDA compliance. Eliminate paper errors, ensure data integrity, and accelerate batch release times with electronic records.",
        icon: ScienceIcon,
        color: "text-cyan-600",
        bg: "bg-cyan-50",
        borderColor: "hover:border-cyan-500",
        link: "/solutions/product/ebmr",
        features: ["FDA Compliant", "E-Signatures", "Audit Trails", "Batch Tracking", "Deviation Mgt"],
        stats: { value: "100%", label: "Compliance" },
    },
    {
        name: "AI Solutions",
        title: "AI & Intelligent Automation",
        description: "Transform your business with cutting-edge AI, machine learning, and predictive analytics.",
        longDescription: "Leverage the power of artificial intelligence to solve complex business problems. From predictive maintenance to intelligent process automation and custom machine learning models.",
        icon: AiIcon,
        color: "text-violet-600",
        bg: "bg-violet-50",
        borderColor: "hover:border-violet-500",
        link: "/solutions/product/ai-solutions",
        features: ["ML & AI Models", "Process Automation", "Predictive Analytics", "NLP Services", "Computer Vision"],
        stats: { value: "40%", label: "Cost Reduction" },
    },
];

const benefits = [
    { icon: TrendingUp, title: "Proven ROI", description: "Average 40% cost reduction" },
    { icon: Security, title: "Enterprise Security", description: "ISO 9001 & FDA Compliant" },
    { icon: Speed, title: "Rapid Deployment", description: "Go live in weeks" },
    { icon: CloudDone, title: "Flexible Hosting", description: "Cloud or On-premise" },
];

export default function AllProductsShowcase() {
    return (
        <div className="bg-white font-sans text-gray-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 bg-gray-50 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/solutions-hero.png"
                        alt="Enterprise Solutions Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/95" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
                        >
                            Enterprise Solutions <br />
                            <span className="text-primary">Built for Impact.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
                        >
                            A comprehensive suite of ISO-certified, FDA-compliant software designed to scale with your business.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a href="#products" className="px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                                View All Products
                            </a>
                            <Link href="/contact" className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 hover:border-gray-400 transition-colors">
                                Contact Sales
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Products List (Rectangular Cards) */}
            <section id="products" className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-5xl mx-auto space-y-6">
                        {products.map((product, index) => {
                            const IconComponent = product.icon;
                            return (
                                <motion.div
                                    key={product.name}
                                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.15,
                                        ease: [0.25, 0.1, 0.25, 1]
                                    }}
                                >
                                    <Link href={product.link} className="block group">
                                        <div className={`relative bg-white rounded-xl border border-gray-200 p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:border-transparent ${product.borderColor} hover:border-l-4`}>

                                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                                {/* Left: Icon & Title */}
                                                <div className="flex-shrink-0 flex md:block items-center gap-4 md:w-1/4">
                                                    <div className={`w-16 h-16 rounded-xl ${product.bg} ${product.color} flex items-center justify-center mb-0 md:mb-4 group-hover:scale-105 transition-transform`}>
                                                        <IconComponent sx={{ fontSize: 32 }} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                                                            {product.name}
                                                        </h3>
                                                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mt-1">
                                                            {product.title}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Middle: Description & Features */}
                                                <div className="flex-grow md:w-2/4">
                                                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                                        {product.longDescription}
                                                    </p>

                                                    <div className="flex flex-wrap gap-2">
                                                        {product.features.map((f) => (
                                                            <span key={f} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-gray-50 text-gray-700 rounded-md border border-gray-100 group-hover:border-gray-200 transition-colors">
                                                                <CheckIcon sx={{ fontSize: 14 }} className="text-green-600" />
                                                                {f}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Right: Stats & CTA */}
                                                <div className="w-full md:w-1/4 flex flex-row md:flex-col justify-between items-center md:items-end gap-4 md:border-l md:border-gray-100 md:pl-8">
                                                    <div className="text-left md:text-right">
                                                        <div className="flex items-center gap-2 md:justify-end text-gray-900 font-bold text-3xl">
                                                            {product.stats.value}
                                                        </div>
                                                        <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                                                            {product.stats.label}
                                                        </div>
                                                    </div>

                                                    <span className="flex items-center gap-2 text-primary font-bold text-sm bg-blue-50 px-4 py-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
                                                        Learn More <ArrowIcon sx={{ fontSize: 18 }} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Global Enterprises Trust Us</h2>
                        <p className="text-gray-600">Delivering reliability, security, and performance since 2003.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center hover:bg-white hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-white text-primary rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                                        <Icon />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                                    <p className="text-sm text-gray-600">{benefit.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Simple CTA */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="bg-primary rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10"></div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to modernize your operations?</h2>
                            <p className="text-blue-100 text-lg mb-8">
                                Join 500+ organizations that efficiently manage their business with CannyMinds.
                            </p>
                            <Link href="/contact">
                                <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
                                    Get Started Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
