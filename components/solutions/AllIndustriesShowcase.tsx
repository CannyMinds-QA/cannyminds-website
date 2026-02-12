"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Factory,
    Science,
    LocalHospital,
    Gavel,
    AccountBalance,
    VerifiedUser,
    Checkroom,
    ShoppingCart,
    Home as HomeIcon,
    Campaign,
    ArrowForward
} from "@mui/icons-material";

const industries = [
    {
        name: "Manufacturing",
        description: "Optimize production with Shop Floor Automation, Quality Management, and Document Control.",
        icon: Factory,
        href: "/solutions/manufacturing",
        color: "text-amber-600",
        bg: "bg-amber-50"
    },
    {
        name: "Pharmaceutical",
        description: "Ensure FDA compliance with Electronic Batch Records (e-BMR) and Quality Management Systems.",
        icon: Science,
        href: "/solutions/pharmaceutical",
        color: "text-cyan-600",
        bg: "bg-cyan-50"
    },
    {
        name: "Healthcare",
        description: "Streamline patient records, clinical workflows, and compliance audits.",
        icon: LocalHospital,
        href: "/solutions/healthcare",
        color: "text-emerald-600",
        bg: "bg-emerald-50"
    },
    {
        name: "Professional Services",
        description: "Empower legal and audit firms with secure document management and automated workflows.",
        icon: Gavel,
        href: "/solutions/professional-services",
        color: "text-slate-600",
        bg: "bg-slate-50"
    },
    {
        name: "Finance (NBFC)",
        description: "Modernize banking and insurance with automated loan processing and KYC/KYB solutions.",
        icon: AccountBalance,
        href: "/solutions/finance",
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        name: "Insurance",
        description: "Accelerate claim processing and fraud detection with intelligent automation.",
        icon: VerifiedUser,
        href: "/ai-solutions/insurance",
        color: "text-indigo-600",
        bg: "bg-indigo-50"
    },
    {
        name: "Textile",
        description: "Enhance design and production with specialized textile manufacturing solutions.",
        icon: Checkroom,
        href: "/ai-solutions/textile",
        color: "text-pink-600",
        bg: "bg-pink-50"
    },
    {
        name: "E-Commerce",
        description: "Boost sales with personalized shopping experiences and dynamic pricing engines.",
        icon: ShoppingCart,
        href: "/ai-solutions/ecommerce",
        color: "text-orange-600",
        bg: "bg-orange-50"
    },
    {
        name: "Real Estate",
        description: "Streamline property management and valuation with AI-driven insights.",
        icon: HomeIcon,
        href: "/ai-solutions/real-estate",
        color: "text-teal-600",
        bg: "bg-teal-50"
    },
    {
        name: "Marketing",
        description: "Drive growth with AI content generation and predictive customer analytics.",
        icon: Campaign,
        href: "/ai-solutions/marketing",
        color: "text-purple-600",
        bg: "bg-purple-50"
    }
];

export default function AllIndustriesShowcase() {
    return (
        <div className="bg-white font-sans text-gray-900">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gray-50 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
                        >
                            Solutions by <span className="text-primary">Industry</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600 mb-8 leading-relaxed"
                        >
                            Tailored software solutions designed to meet the unique challenges and regulatory requirements of your industry.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => {
                            const Icon = industry.icon;
                            return (
                                <motion.div
                                    key={industry.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link href={industry.href} className="block group h-full">
                                        <div className="h-full bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
                                            <div className={`w-14 h-14 rounded-xl ${industry.bg} ${industry.color} flex items-center justify-center mb-6`}>
                                                <Icon sx={{ fontSize: 32 }} />
                                            </div>

                                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                                {industry.name}
                                            </h3>

                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                {industry.description}
                                            </p>

                                            <div className="flex items-center text-primary font-semibold text-sm">
                                                <span>Explore Solutions</span>
                                                <ArrowForward sx={{ fontSize: 18 }} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
