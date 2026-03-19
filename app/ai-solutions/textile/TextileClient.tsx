"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SecureImage from "@/components/ui/SecureImage";
import TableOfContents from "@/components/ui/TableOfContents";
import { TextAnimate } from "@/registry/magicui/text-animate";
import { textileContent } from "./content";
import {
    ArrowForward,
    CheckCircle,
    WarningAmber,
    VerifiedUser,
    Business,
    Group,
    Support,
    CalendarToday,
    Update,
    AccessTime
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

export default function TextileSolutionsPage() {
    const [isGeminiModalOpen, setIsGeminiModalOpen] = useState(false);
    const [isPromptCopied, setIsPromptCopied] = useState(false);

    const basePrompt = "Act as an expert supply chain and manufacturing AI consultant. Please read the CannyMinds AI Solutions for the Textile & Apparel industry at https://www.cannymindstech.com/ai-solutions/textile. Provide a high-level, professional summary outlining the primary use cases, core business benefits, and specifically why their approach to Generative AI and Computer Vision is critical for modernizing textile manufacturing.";
    const encodedPrompt = encodeURIComponent(basePrompt);

    const handleCopyAndOpenGemini = () => {
        navigator.clipboard.writeText(basePrompt);
        setIsPromptCopied(true);
        setTimeout(() => {
            window.open("https://gemini.google.com/app", "_blank", "noopener,noreferrer");
            setIsGeminiModalOpen(false);
            setIsPromptCopied(false);
        }, 1500);
    };

    const tocItems = [
        { id: "use-cases-grid", title: "Overview" },
        ...textileContent.useCases.map((uc) => ({ id: uc.id, title: uc.title })),
        { id: "regulatory-compliance", title: "Regulatory Hub" },
        { id: "case-studies", title: "Results" },
    ];

    return (
        <>
            <main className="min-h-screen bg-white">

                {/* HERO SECTION */}
                <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-indigo-50 pt-20">
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
                                <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-6 border border-indigo-200">
                                    Textile & Apparel Industry
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                    <TextAnimate animation="blurIn" by="word">
                                        {textileContent.hero.title}
                                    </TextAnimate>
                                </h1>

                                <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                                    {textileContent.hero.subtitle}. {textileContent.hero.description}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                                    >
                                        Schedule Design Automation Demo
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors"
                                    >
                                        Talk to Expert
                                    </Link>
                                </div>

                                {/* TRUSTED BY STRIP */}
                                <div className="mt-12 flex flex-col gap-4">
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{textileContent.trustSignals.trustedByText}</p>
                                    <div className="flex flex-wrap gap-4">
                                        {textileContent.trustSignals.certifications.map((cert, i) => (
                                            <div key={i} className="flex items-center gap-2 bg-white/60 border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-700 shadow-sm font-semibold">
                                                <CheckCircle sx={{ fontSize: 18 }} className="text-green-600" />
                                                {cert}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* AI SUMMARIZATION */}
                                <div className="mt-12 flex flex-wrap items-center gap-3">
                                    <span className="text-sm font-medium text-gray-500 flex items-center gap-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                                        Summarize this page:
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <a href={`https://chatgpt.com/?q=${encodedPrompt}`} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-200">ChatGPT</a>
                                        <a href={`https://claude.ai/new?q=${encodedPrompt}`} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-full border border-amber-200">Claude</a>
                                        <button
                                            title="Open Gemini Prompt Modal"
                                            className="text-xs font-semibold text-blue-700 hover:text-blue-800 transition-colors bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full border border-blue-200"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsGeminiModalOpen(true);
                                            }}
                                        >
                                            Gemini
                                        </button>
                                    </div>
                                </div>

                                {/* AUTHOR & DATE BANNER (E-E-A-T) */}
                                <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center gap-x-4 xl:gap-x-6 gap-y-4 lg:pr-6">
                                    <div className="flex items-center gap-3 pr-2 xl:pr-4 sm:border-r border-gray-200 shrink-0">
                                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 relative">
                                            <Image
                                                src="/images/about/Udayakumar-Murugan-Director.png"
                                                alt="Udhayakumar Murunga"
                                                fill
                                                className="object-cover"
                                                sizes="48px"
                                            />
                                        </div>
                                        <div>
                                            <a href="https://www.linkedin.com/in/udayakumar-murugan-732b3864/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 text-sm xl:text-base hover:text-blue-600 transition-colors block leading-tight">Udhayakumar Murunga</a>
                                            <div className="text-xs xl:text-sm text-gray-500 mt-0.5">Chief Executive Officer</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-x-4 xl:gap-x-6 gap-y-2">
                                        <div className="flex items-center gap-1.5 text-xs xl:text-sm text-gray-500 font-medium">
                                            <CalendarToday sx={{ fontSize: 16 }} className="xl:!text-[18px]" />
                                            12 February 2026
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs xl:text-sm text-gray-500 font-medium">
                                            <Update sx={{ fontSize: 16 }} className="xl:!text-[18px]" />
                                            Updated 19 March 2026
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs xl:text-sm text-gray-500 font-medium">
                                            <AccessTime sx={{ fontSize: 16 }} className="xl:!text-[18px]" />
                                            5 min read
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Hero Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="aspect-video">
                                    <Image
                                        src="/images/ai-Solution/gen-ai-for-textile-apparel-industry/gen-ai-for-textile-apparel-industry.png"
                                        alt="gen-ai-for-textile-apparel-industry"
                                        width={800}
                                        height={450}
                                        className="w-full h-full object-cover"
                                        priority
                                        unoptimized
                                    />
                                </div>
                                {/* Decorative Elements */}
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-100 rounded-xl -z-10" />
                                <div className="absolute -top-4 -left-4 w-16 h-16 bg-indigo-100 rounded-lg -z-10" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-6 lg:px-12 py-12">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* TOC */}
                        <aside className="lg:col-span-3 hidden lg:block">
                            <TableOfContents items={tocItems} />
                        </aside>

                        {/* Main Content */}
                        <div className="lg:col-span-9 space-y-24">

                            {/* USE CASES GRID (Quick Access) */}
                            <section id="use-cases-grid" className="scroll-mt-24">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    className="text-center mb-16"
                                >
                                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                        8+ Ways Gen AI Transforms Textile & Apparel
                                    </h2>
                                    <p className="text-gray-600 max-w-2xl mx-auto">
                                        From merchandising automation to AI-powered design, explore our comprehensive suite of textile industry solutions.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={staggerContainer}
                                    className="grid md:grid-cols-2 gap-6"
                                >
                                    {[...textileContent.useCases.slice(0, 6)].map((useCase) => {
                                        const Icon = useCase.icon;
                                        return (
                                            <motion.div
                                                key={useCase.id}
                                                variants={fadeInUp}
                                                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                            >
                                                <Icon className="text-blue-600 mb-4" sx={{ fontSize: 40 }} />
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
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
                            </section>

                            {/* DEEP DIVE SECTIONS */}
                            <div className="space-y-16">
                                {textileContent.useCases.map((useCase, index) => {
                                    const isEven = index % 2 === 0;
                                    const Icon = useCase.icon;

                                    return (
                                        <section
                                            key={useCase.id}
                                            id={useCase.id}
                                            className={`scroll-mt-24 p-8 rounded-2xl border ${isEven ? 'bg-white border-gray-100 shadow-sm' : 'bg-gray-50 border-gray-100'
                                                }`}
                                        >
                                            <div>
                                                <motion.div
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true }}
                                                    variants={fadeInUp}
                                                >
                                                    <div className="flex items-center gap-4 mb-6">
                                                        <Icon className="text-blue-600" sx={{ fontSize: 40 }} />
                                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                                            {useCase.title}
                                                        </h2>
                                                    </div>

                                                    <div className="mb-8 p-6 bg-red-50 rounded-xl border border-red-100">
                                                        <h3 className="flex items-center gap-2 text-red-800 font-bold mb-2">
                                                            <WarningAmber fontSize="small" /> The Problem
                                                        </h3>
                                                        <p className="text-red-700/80 leading-relaxed">
                                                            {useCase.problem}
                                                        </p>
                                                    </div>

                                                    <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
                                                        {useCase.solution}
                                                    </p>

                                                    {useCase.image && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 20 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.6 }}
                                                            className="mb-8 flex justify-center"
                                                        >
                                                            <Image
                                                                src={useCase.image}
                                                                alt={useCase.imageAlt || useCase.title}
                                                                width={800}
                                                                height={600}
                                                                className="w-full max-w-xl h-auto object-cover"
                                                                unoptimized
                                                            />
                                                        </motion.div>
                                                    )}

                                                    <div className="grid sm:grid-cols-2 gap-6 bg-blue-50/50 p-6 rounded-xl border border-blue-100 mb-8">
                                                        <div>
                                                            <div className="text-3xl font-bold text-blue-600 mb-1">{useCase.benefits.cost.split(" ")[0]}</div>
                                                            <div className="text-sm text-gray-600 font-medium">Efficiency Gain</div>
                                                            <div className="text-xs text-gray-500 mt-1">{useCase.benefits.cost}</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-3xl font-bold text-green-600 mb-1">High</div>
                                                            <div className="text-sm text-gray-600 font-medium">Quality Impact</div>
                                                            <div className="text-xs text-gray-500 mt-1">{useCase.benefits.quality}</div>
                                                        </div>
                                                    </div>

                                                    <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                                                        <h3 className="text-lg font-bold text-gray-900 mb-4">Key Capabilities</h3>
                                                        <ul className="space-y-3">
                                                            {useCase.capabilities.map((cap, i) => (
                                                                <li key={i} className="flex items-start gap-3">
                                                                    <CheckCircle className="text-green-500 mt-0.5 shrink-0" sx={{ fontSize: 18 }} />
                                                                    <span className="text-gray-700 text-sm">{cap}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <div className="mt-6 pt-6 border-t border-gray-100">
                                                            <div className="flex flex-wrap gap-2">
                                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
                                                                    OEKO-TEX
                                                                </span>
                                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                                                                    GOTS Compliant
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </section>
                                    );
                                })}
                            </div>

                            {/* REGULATORY HUB */}
                            <section id="regulatory-compliance" className="scroll-mt-24 bg-slate-900 text-white rounded-2xl p-8 lg:p-12">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold mb-4">Regulatory & Compliance Hub</h2>
                                    <p className="text-slate-400 max-w-2xl mx-auto">
                                        Our Gen AI architecture is built from the ground up to meet textile industry compliance standards.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {textileContent.regulatoryMapping.map((reg, i) => (
                                        <div key={i} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                                            <h3 className="text-lg font-bold text-blue-400 mb-2">{reg.regulation}</h3>
                                            <div className="mb-4">
                                                <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Expectation</span>
                                                <p className="text-slate-300 text-sm mt-1">{reg.expectation}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Gen AI Alignment</span>
                                                <p className="text-white font-medium mt-1">{reg.alignment}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* CASE STUDIES */}
                            <section id="case-studies" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                    Proven Textile Industry Results
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {textileContent.caseStudies.map((study, i) => (
                                        <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                                            <div className="text-sm font-bold text-blue-600 mb-2">Case Study #{i + 1}</div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">{study.title}</h3>
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
                            </section>

                        </div>
                    </div>
                </div>

                {/* WHY TRUST US / EXPERTISE */}
                <section className="py-20 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
                        <div className="w-16 h-16 bg-white shadow-sm border border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <VerifiedUser className="text-blue-600" sx={{ fontSize: 32 }} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Trust CannyMinds?</h2>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            {textileContent.expertiseContext}
                        </p>
                    </div>
                </section>

                {/* CTA FOOTER */}
                <section className="py-24 bg-blue-600">
                    <div className="container mx-auto px-6 lg:px-12 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                            Ready to Transform Your Textile Operations?
                        </h2>
                        <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
                            Schedule a demo with our Textile AI team to see Merchandising Automation and Design Intelligence in action.
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

            {/* Gemini Prompt Modal Dialog */}
            {isGeminiModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-gray-100 overflow-hidden relative"
                    >
                        <button
                            onClick={() => setIsGeminiModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                            aria-label="Close"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>

                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Summarize with Gemini</h3>
                                <p className="text-sm text-gray-500 mt-0.5">Google Gemini requires manual prompt pasting.</p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                            To ensure security, Gemini restricts auto-filling prompts from external links. Please copy the optimized prompt below and paste it into the chat once Gemini opens.
                        </p>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6 relative group">
                            <p className="text-sm font-medium text-slate-800 break-words font-mono leading-relaxed">
                                {basePrompt}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 justify-end mt-2">
                            <button
                                onClick={() => setIsGeminiModalOpen(false)}
                                className="px-5 py-2.5 rounded-xl font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:text-gray-900 transition-colors w-full sm:w-auto"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleCopyAndOpenGemini}
                                disabled={isPromptCopied}
                                className="px-6 py-2.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto disabled:opacity-90 disabled:cursor-not-allowed"
                            >
                                {isPromptCopied ? (
                                    <>
                                        <CheckCircle sx={{ fontSize: 18 }} />
                                        Copied! Opening tab...
                                    </>
                                ) : (
                                    "Copy Prompt & Open Gemini"
                                )}
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
}
