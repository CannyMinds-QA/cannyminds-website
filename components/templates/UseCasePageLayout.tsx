"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import SocialShare from "@/components/ui/SocialShare";
import TableOfContents from "@/components/ui/TableOfContents";
import {
    ArrowForward,
    CheckCircle,
    Warning,
    VerifiedUser,
    Home,
    ChevronRight,
    TrendingUp,
    Security,
    Speed,
    Lightbulb,
} from "@mui/icons-material";
import { ReactNode } from "react";

export interface UseCaseChallenge {
    challenge: string;
    impact: string;
}

export interface UseCaseItem {
    title: string;
    scenario: string;
    cannyEcmUseCase: string[];
    benefits: string[];
    image?: string;
}

export interface UseCaseBenefit {
    area: string;
    value: string;
}

interface UseCasePageLayoutProps {
    title: string;
    subtitle: ReactNode;
    industry: string;
    heroImage?: string;
    heroColor?: string;

    industryContextTitle?: string;
    industryContextContent: ReactNode;

    challengesTitle?: string;
    challenges: UseCaseChallenge[];

    solutionOverviewTitle?: string;
    solutionOverviewContent: ReactNode;

    useCasesTitle?: string;
    useCases: UseCaseItem[];

    securityTitle?: string;
    securityContent: ReactNode;

    benefitsTitle?: string;
    benefits: UseCaseBenefit[];

    conclusionTitle?: string;
    conclusionContent: ReactNode;

    jsonLd: Record<string, unknown>;
}

export default function UseCasePageLayout({
    title,
    subtitle,
    industry,
    heroColor = "bg-blue-50",
    industryContextTitle = "Industry Context",
    industryContextContent,
    challengesTitle = "Key Business Challenges",
    challenges,
    solutionOverviewTitle = "Solution Overview",
    solutionOverviewContent,
    useCasesTitle = "Key Use Cases",
    useCases,
    securityTitle = "Security & Compliance",
    securityContent,
    benefitsTitle = "Business Benefits",
    benefits,
    conclusionTitle = "Conclusion",
    conclusionContent,
    jsonLd,
}: UseCasePageLayoutProps) {
    const [readingProgress, setReadingProgress] = useState(0);

    useEffect(() => {
        const updateReadingProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            setReadingProgress(progress);
        };

        window.addEventListener("scroll", updateReadingProgress);
        return () => window.removeEventListener("scroll", updateReadingProgress);
    }, []);

    const tocItems = [
        { id: "industry-context", title: "Industry Context" },
        { id: "challenges", title: "Challenges" },
        { id: "solution-overview", title: "Solution Overview" },
        { id: "use-cases", title: "Use Cases" },
        { id: "security", title: "Security & Compliance" },
        { id: "benefits", title: "Business Benefits" },
        { id: "conclusion", title: "Conclusion" },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navigation />

            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[60]">
                <div
                    className="h-full bg-primary transition-all duration-150"
                    style={{ width: `${readingProgress}%` }}
                />
            </div>

            <main className="min-h-screen bg-white">
                {/* HERO SECTION */}
                <section className={`relative pt-24 pb-16 ${heroColor}`}>
                    {/* Subtle Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                                backgroundSize: "40px 40px",
                            }}
                        />
                    </div>

                    <div className="container mx-auto px-6 lg:px-12 relative z-10">
                        {/* Breadcrumbs */}
                        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
                            <Link href="/" className="hover:text-primary flex items-center gap-1">
                                <Home sx={{ fontSize: 16 }} />
                                Home
                            </Link>
                            <ChevronRight sx={{ fontSize: 16 }} className="text-gray-400" />
                            <Link href="/use-cases" className="hover:text-primary">
                                Use Cases
                            </Link>
                            <ChevronRight sx={{ fontSize: 16 }} className="text-gray-400" />
                            <span className="text-gray-900 font-medium">{industry}</span>
                        </nav>

                        <div className="max-w-4xl">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-white/80 text-gray-700 font-medium text-sm mb-6 border border-gray-200">
                                {industry} Industry
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                {title}
                            </h1>

                            <div className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
                                {subtitle}
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                                >
                                    Request Consultation
                                    <ArrowForward sx={{ fontSize: 20 }} />
                                </Link>
                                <SocialShare
                                    title={title}
                                    description={typeof subtitle === "string" ? subtitle : industry + " use cases"}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* MAIN CONTENT WITH SIDEBAR */}
                <div className="container mx-auto px-6 lg:px-12 py-12">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Sticky TOC Sidebar */}
                        <aside className="lg:col-span-3 hidden lg:block">
                            <TableOfContents items={tocItems} />
                        </aside>

                        {/* Main Content */}
                        <div className="lg:col-span-9 space-y-16">
                            {/* INDUSTRY CONTEXT */}
                            <section id="industry-context" className="scroll-mt-24">
                                <div className="flex items-center gap-3 mb-6">
                                    <Lightbulb className="text-blue-600" sx={{ fontSize: 28 }} />
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        {industryContextTitle}
                                    </h2>
                                </div>
                                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                                    {industryContextContent}
                                </div>
                            </section>

                            {/* CHALLENGES */}
                            <section id="challenges" className="scroll-mt-24">
                                <div className="flex items-center gap-3 mb-8">
                                    <Warning className="text-orange-600" sx={{ fontSize: 28 }} />
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        {challengesTitle}
                                    </h2>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {challenges.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-200 transition-all"
                                        >
                                            <div className="flex items-start gap-3">
                                                <span className="text-orange-500 font-bold text-lg">{index + 1}.</span>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 mb-2">{item.challenge}</h3>
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        <span className="text-orange-600 font-medium">Impact:</span> {item.impact}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* SOLUTION OVERVIEW */}
                            <section id="solution-overview" className="scroll-mt-24">
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                                    <div className="flex items-center gap-3 mb-6">
                                        <VerifiedUser className="text-blue-600" sx={{ fontSize: 28 }} />
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                            {solutionOverviewTitle}
                                        </h2>
                                    </div>
                                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                        {solutionOverviewContent}
                                    </div>
                                </div>
                            </section>

                            {/* USE CASES */}
                            <section id="use-cases" className="scroll-mt-24">
                                <div className="flex items-center gap-3 mb-8">
                                    <CheckCircle className="text-green-600" sx={{ fontSize: 28 }} />
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        {useCasesTitle}
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    {useCases.map((useCase, index) => (
                                        <div
                                            key={index}
                                            id={`use-case-${index + 1}`}
                                            className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                                        >
                                            {/* Use Case Header */}
                                            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                                    {useCase.title}
                                                </h3>
                                            </div>

                                            <div className="p-6">
                                                <div className="grid md:grid-cols-12 gap-8 mb-8">
                                                    {/* Image Placeholder */}
                                                    <div className="md:col-span-8">
                                                        <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border border-gray-200 flex flex-col items-center justify-center text-gray-400 overflow-hidden">
                                                            {useCase.image ? (
                                                                <Image
                                                                    src={useCase.image}
                                                                    alt={useCase.title}
                                                                    width={600}
                                                                    height={450}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            ) : (
                                                                <>
                                                                    <svg className="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                    </svg>
                                                                    <span className="text-xs font-medium uppercase tracking-wider opacity-60">Use Case Image</span>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Scenario */}
                                                    <div className="md:col-span-4 flex flex-col justify-center">
                                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                            <Lightbulb sx={{ fontSize: 18 }} className="text-yellow-500" />
                                                            Scenario
                                                        </h4>
                                                        <p className="text-gray-700 bg-gray-50 p-6 rounded-xl border border-gray-100 leading-relaxed text-lg">
                                                            {useCase.scenario}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    {/* Solution */}
                                                    <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                                                        <h4 className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-4 flex items-center gap-2">
                                                            <VerifiedUser sx={{ fontSize: 16 }} />
                                                            CannyECM Solution
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {useCase.cannyEcmUseCase.map((item, i) => (
                                                                <li key={i} className="flex items-start gap-3">
                                                                    <CheckCircle
                                                                        className="text-blue-500 mt-0.5 flex-shrink-0"
                                                                        sx={{ fontSize: 18 }}
                                                                    />
                                                                    <span className="text-gray-700 text-sm">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Benefits */}
                                                    <div className="bg-green-50/50 p-5 rounded-xl border border-green-100">
                                                        <h4 className="text-sm font-bold text-green-700 uppercase tracking-wider mb-4 flex items-center gap-2">
                                                            <TrendingUp sx={{ fontSize: 16 }} />
                                                            Key Benefits
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {useCase.benefits.map((item, i) => (
                                                                <li key={i} className="flex items-start gap-3">
                                                                    <CheckCircle
                                                                        className="text-green-500 mt-0.5 flex-shrink-0"
                                                                        sx={{ fontSize: 18 }}
                                                                    />
                                                                    <span className="text-gray-700 text-sm">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* SECURITY & COMPLIANCE */}
                            <section id="security" className="scroll-mt-24">
                                <div className="bg-slate-900 text-white rounded-2xl p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Security className="text-blue-400" sx={{ fontSize: 28 }} />
                                        <h2 className="text-2xl md:text-3xl font-bold">
                                            {securityTitle}
                                        </h2>
                                    </div>
                                    <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed">
                                        {securityContent}
                                    </div>
                                </div>
                            </section>

                            {/* BUSINESS BENEFITS */}
                            <section id="benefits" className="scroll-mt-24">
                                <div className="flex items-center gap-3 mb-8">
                                    <TrendingUp className="text-purple-600" sx={{ fontSize: 28 }} />
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        {benefitsTitle}
                                    </h2>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 p-5 rounded-xl bg-gray-50 border border-gray-200 hover:shadow-md hover:border-purple-200 transition-all"
                                        >
                                            <CheckCircle className="text-purple-600 mt-0.5 flex-shrink-0" sx={{ fontSize: 20 }} />
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">{benefit.area}</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">{benefit.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* CONCLUSION */}
                            <section id="conclusion" className="scroll-mt-24">
                                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                        {conclusionTitle}
                                    </h2>
                                    <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-8">
                                        {conclusionContent}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link
                                            href="/contact"
                                            className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
                                        >
                                            Start Your Transformation
                                            <ArrowForward sx={{ fontSize: 20 }} />
                                        </Link>
                                        <Link
                                            href="/solutions"
                                            className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-primary hover:text-primary transition-colors inline-flex items-center justify-center gap-2"
                                        >
                                            Explore Solutions
                                        </Link>
                                    </div>
                                </div>
                            </section>

                            {/* Expert Insights Section */}
                            <section id="expert-insights" className="scroll-mt-24">
                                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl relative overflow-hidden group hover:border-primary/20 transition-all duration-300">
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-${industry === 'Healthcare' ? 'red' : 'blue'}-50 rounded-bl-full -mr-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform duration-500`} />

                                    <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                                        <div className="flex-shrink-0 text-center">
                                            <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4 overflow-hidden mx-auto relative">
                                                <Image
                                                    src="/images/author-udayakumar.jpg"
                                                    alt="Udayakumar Murugan"
                                                    width={128}
                                                    height={128}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">Udayakumar Murugan</h3>
                                            <p className={`text-sm font-semibold ${industry === 'Healthcare' ? 'text-red-600' : 'text-primary'} mb-1`}>Subject Matter Expert</p>
                                            <p className="text-xs text-gray-500 uppercase tracking-widest">Founder & CEO</p>
                                        </div>

                                        <div className="flex-1 text-center md:text-left">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                Strategic AI Implementation Partner
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                                &quot;Our mission is to bridge the gap between complex AI technology and practical business value.
                                                For the {industry} sector, this means deploying solutions that not only automate tasks but strictly adhere
                                                to {industry === 'Healthcare' ? 'HIPAA compliances' : 'regulatory standards'} while delivering measurable ROI.&quot;
                                            </p>

                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-10 h-10 rounded-full ${industry === 'Healthcare' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'} flex items-center justify-center`}>
                                                        <VerifiedUser sx={{ fontSize: 20 }} />
                                                    </div>
                                                    <div className="text-left">
                                                        <p className="font-bold text-gray-900 text-sm">ISO 27001</p>
                                                        <p className="text-xs text-gray-500">Certified Security</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-10 h-10 rounded-full ${industry === 'Healthcare' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'} flex items-center justify-center`}>
                                                        <Security sx={{ fontSize: 20 }} />
                                                    </div>
                                                    <div className="text-left">
                                                        <p className="font-bold text-gray-900 text-sm">Enterprise Grade</p>
                                                        <p className="text-xs text-gray-500">Data Protection</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* STICKY CTA FOOTER */}
                <section className="py-16 bg-primary">
                    <div className="container mx-auto px-6 lg:px-12 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                            Ready to Transform Your {industry} Operations?
                        </h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Schedule a consultation with our experts to see how CannyECM can address your specific challenges.
                        </p>
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center gap-2"
                        >
                            Book a Free Demo
                            <ArrowForward sx={{ fontSize: 20 }} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
