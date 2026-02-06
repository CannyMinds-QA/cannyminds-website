"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import { TextAnimate } from "@/registry/magicui/text-animate";
import { pharmaContent } from "./content";
import {
    ArrowForward,
    CheckCircle,
    WarningAmber,
    Psychology,
    VerifiedUser,
    Business,
    Group,
    Support
} from "@mui/icons-material";

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function PharmaSolutionsPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-white">

                {/* HERO SECTION */}
                <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-purple-50 pt-20">
                    {/* Subtle Pattern Background */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                    </div>

                    <div className="container mx-auto px-6 lg:px-12 relative z-10 py-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeInUp}
                            >
                                <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-6 border border-purple-200">
                                    Pharmaceutical Manufacturing
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                    <TextAnimate animation="blurIn" by="word">
                                        {pharmaContent.hero.title}
                                    </TextAnimate>
                                </h1>

                                <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                                    {pharmaContent.hero.subtitle}. {pharmaContent.hero.description}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                                    >
                                        Schedule FDA Compliance Assessment
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors"
                                    >
                                        Talk to Expert
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Hero Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="aspect-video rounded-2xl overflow-hidden border-2 border-purple-200 bg-white shadow-lg">
                                    <Image
                                        src="/images/ai-solutions/pharmaceutical-hero.jpg"
                                        alt="Pharmaceutical AI Solutions - FDA Compliant Manufacturing Automation"
                                        width={800}
                                        height={450}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                </div>
                                {/* Decorative Elements */}
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 rounded-xl -z-10" />
                                <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-100 rounded-lg -z-10" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* USE CASES GRID (Quick Access) */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6 lg:px-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                11 Ways GenAI Transforms Pharma
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                From eBMR to Predictive Maintenance, explore our comprehensive suite of GxP-compliant AI solutions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {[...pharmaContent.useCases.slice(0, 6)].map((useCase) => { // Show top 6 initially
                                const Icon = useCase.icon;
                                return (
                                    <motion.div
                                        key={useCase.id}
                                        variants={fadeInUp}
                                        className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                                            <Icon />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title.split("GenAI-Enabled ")[1] || useCase.title}</h3>
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                            {useCase.problem}
                                        </p>
                                        <a href={`#${useCase.id}`} className="text-blue-600 font-medium hover:underline text-sm inline-flex items-center gap-1">
                                            Deep Dive <ArrowForward sx={{ fontSize: 16 }} />
                                        </a>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* DEEP DIVE SECTIONS */}
                <div className="space-y-0">
                    {pharmaContent.useCases.map((useCase, index) => {
                        const isEven = index % 2 === 0;
                        const Icon = useCase.icon;

                        return (
                            <section
                                key={useCase.id}
                                id={useCase.id}
                                className={`py-24 ${isEven ? 'bg-white' : 'bg-gray-50'}`}
                            >
                                <div className="container mx-auto px-6 lg:px-12">
                                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                                        {/* Left: Content */}
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={fadeInUp}
                                        >
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className={`p-3 rounded-lg ${isEven ? 'bg-blue-100 text-blue-700' : 'bg-white text-blue-700 shadow-sm'}`}>
                                                    <Icon fontSize="large" />
                                                </div>
                                                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                                                    Use Case #{index + 1}
                                                </span>
                                            </div>

                                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                                {useCase.title}
                                            </h2>

                                            <div className="mb-8 p-6 bg-red-50 rounded-xl border border-red-100">
                                                <h4 className="flex items-center gap-2 text-red-800 font-bold mb-2">
                                                    <WarningAmber fontSize="small" /> The Problem
                                                </h4>
                                                <p className="text-red-700/80 leading-relaxed">
                                                    {useCase.problem}
                                                </p>
                                            </div>

                                            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
                                                {useCase.solution}
                                            </p>

                                            <div className="grid sm:grid-cols-2 gap-6 bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                                <div>
                                                    <div className="text-3xl font-bold text-blue-600 mb-1">{useCase.benefits.cost.split(" ")[0]}</div>
                                                    <div className="text-sm text-gray-600 font-medium">Cost Savings</div>
                                                    <div className="text-xs text-gray-500 mt-1">{useCase.benefits.cost}</div>
                                                </div>
                                                <div>
                                                    <div className="text-3xl font-bold text-green-600 mb-1">High</div>
                                                    <div className="text-sm text-gray-600 font-medium">Quality Impact</div>
                                                    <div className="text-xs text-gray-500 mt-1">{useCase.benefits.quality}</div>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Right: Capabilities List */}
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={fadeInUp}
                                            className={`p-8 rounded-2xl ${isEven ? 'bg-gray-50 border border-gray-100' : 'bg-white shadow-lg border border-gray-100'}`}
                                        >
                                            <h3 className="text-xl font-bold text-gray-900 mb-6">Key Capabilities</h3>
                                            <ul className="space-y-4">
                                                {useCase.capabilities.map((cap, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <CheckCircle className="text-green-500 mt-0.5 shrink-0" sx={{ fontSize: 20 }} />
                                                        <span className="text-gray-700">{cap}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="mt-8 pt-8 border-t border-gray-200">
                                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">FDA Alignment</h3>
                                                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold border border-green-100">
                                                    21 CFR Part 11
                                                </div>
                                                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold border border-green-100 ml-2">
                                                    GMP Compliant
                                                </div>
                                            </div>
                                        </motion.div>

                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>

                {/* REGULATORY HUB */}
                <section className="py-24 bg-slate-900 text-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Regulatory & Compliance Hub</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">
                                Our GenAI architecture is built from the ground up to meet the strictest global standards.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {pharmaContent.regulatoryMapping.map((reg, i) => (
                                <div key={i} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                                    <h3 className="text-xl font-bold text-blue-400 mb-2">{reg.regulation}</h3>
                                    <div className="mb-4">
                                        <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Expectation</span>
                                        <p className="text-slate-300 text-sm mt-1">{reg.expectation}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">GenAI Alignment</span>
                                        <p className="text-white font-medium mt-1">{reg.alignment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CASE STUDIES */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
                            Proven Inspection-Safe Results
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {pharmaContent.caseStudies.map((study, i) => (
                                <div key={i} className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                                    <div className="text-sm font-bold text-blue-600 mb-2">Case Study #{i + 1}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h3>
                                    <div className="space-y-4 text-sm">
                                        <div>
                                            <strong className="block text-gray-900">Scenario:</strong>
                                            <span className="text-gray-600">{study.scenario}</span>
                                        </div>
                                        <div>
                                            <strong className="block text-gray-900">Solution:</strong>
                                            <span className="text-gray-600">{study.solution}</span>
                                        </div>
                                        <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                                            <strong className="block text-green-800">Outcome:</strong>
                                            <span className="text-green-700">{study.outcome}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Expert Insights Section - E-E-A-T Enhancement */}
                <section className="py-16 bg-gray-50 border-t border-gray-200">
                    <div className="container mx-auto px-6 lg:px-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="max-w-5xl mx-auto"
                        >
                            <div className="grid lg:grid-cols-3 gap-8 items-start">
                                {/* Author Card */}
                                <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                                    <div className="flex flex-col items-center text-center">
                                        {/* Author Image Placeholder */}
                                        <div className="w-24 h-24 rounded-full bg-white border-2 border-purple-200 mb-4 overflow-hidden flex items-center justify-center">
                                            <Image
                                                src="/images/author-udayakumar.jpg"
                                                alt="Udayakumar Murugan - GenAI Expert"
                                                width={96}
                                                height={96}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Udayakumar Murugan</h4>
                                        <p className="text-sm font-semibold text-purple-600 mb-2">Subject Matter Expert – GenAI</p>
                                        <p className="text-xs text-gray-600 mb-4">Founder & Director</p>
                                        <div className="text-xs text-gray-500 space-y-1">
                                            <p>CannyMinds Technology Solutions Pvt Ltd, India</p>
                                            <p>CannyMinds Technology Solutions LLC, USA</p>
                                            <p>USP Soft Solutions Nigeria Ltd, Nigeria</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Experience & Expertise */}
                                <div className="lg:col-span-2 space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            20+ Years of Enterprise AI Excellence
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            Our pharmaceutical AI solutions are developed by a team with deep domain expertise,
                                            combining decades of enterprise software experience with cutting-edge Generative AI capabilities.
                                            We understand the unique challenges of pharmaceutical manufacturing and have designed
                                            solutions that deliver measurable ROI while ensuring FDA 21 CFR Part 11 compliance.
                                        </p>
                                    </div>

                                    {/* Trust Indicators */}
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100">
                                            <VerifiedUser className="text-green-600 flex-shrink-0" sx={{ fontSize: 24 }} />
                                            <div>
                                                <p className="font-semibold text-gray-900 text-sm">ISO 27001 Certified</p>
                                                <p className="text-xs text-gray-600">Enterprise-grade security standards</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100">
                                            <Business className="text-blue-600 flex-shrink-0" sx={{ fontSize: 24 }} />
                                            <div>
                                                <p className="font-semibold text-gray-900 text-sm">Global Presence</p>
                                                <p className="text-xs text-gray-600">Operations in India, USA & Nigeria</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100">
                                            <Group className="text-purple-600 flex-shrink-0" sx={{ fontSize: 24 }} />
                                            <div>
                                                <p className="font-semibold text-gray-900 text-sm">500+ AI Implementations</p>
                                                <p className="text-xs text-gray-600">Across diverse industries worldwide</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100">
                                            <Support className="text-orange-600 flex-shrink-0" sx={{ fontSize: 24 }} />
                                            <div>
                                                <p className="font-semibold text-gray-900 text-sm">Dedicated Support</p>
                                                <p className="text-xs text-gray-600">24/7 expert assistance & training</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA FOOTER */}
                <section className="py-24 bg-blue-600">
                    <div className="container mx-auto px-6 lg:px-12 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                            Ready for Audit-Proof AI?
                        </h2>
                        <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
                            Schedule a demo with our Pharma SME team to see eBMR and Deviation Intelligence in action.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                            >
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
