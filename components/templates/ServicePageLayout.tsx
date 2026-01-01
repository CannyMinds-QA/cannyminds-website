"use client";

import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import SocialShare from "@/components/ui/SocialShare";
import Link from "next/link";
import {
    ArrowForward,
    CheckCircle,
    Star,
    KeyboardArrowLeft,
    TrendingUp
} from "@mui/icons-material";
import { ReactNode } from "react";

// Types for the template props
interface Feature {
    title: string;
    description: string;
    icon: any; // MUI Icon component
}

interface Benefit {
    title: string;
    description: string;
    icon: any;
}

interface Step {
    title: string;
    description: string;
    stepNumber: string;
}

interface FAQ {
    question: string;
    answer: string;
}

interface ServicePageLayoutProps {
    // Hero Section
    title: string; // The main H1
    subtitle: string; // The sub-heading text
    serviceCategory: "Solutions" | "BPM" | "Industry" | "Service"; // For breadcrumbs
    heroImageAlt: string; // Alt text for the hero placeholder

    // Content Sections
    overview: ReactNode; // The "What is..." section content
    features: Feature[];
    benefits: Benefit[];
    howItWorks?: Step[]; // Optional
    faqs?: FAQ[]; // Optional

    // SEO Schema (passed as object)
    jsonLd: Record<string, any>;
}

export default function ServicePageLayout({
    title,
    subtitle,
    serviceCategory,
    heroImageAlt,
    overview,
    features,
    benefits,
    howItWorks,
    faqs,
    jsonLd
}: ServicePageLayoutProps) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Navigation />

            <main className="min-h-screen bg-white">
                {/* Breadcrumb */}
                <nav className="bg-gray-50 border-b border-gray-200 py-4 mt-16 sm:mt-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ol className="flex items-center space-x-2 text-xs sm:text-sm overflow-x-auto">
                            <li><Link href="/" className="text-primary hover:text-primary/80 whitespace-nowrap">Home</Link></li>
                            <li className="text-gray-400">/</li>
                            <li className="text-gray-500 font-medium">{serviceCategory}</li>
                            <li className="text-gray-400">/</li>
                            <li className="text-gray-800 font-semibold truncate max-w-[200px] sm:max-w-md">{title}</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-12 md:py-20 lg:py-24 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] z-0"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-6 border border-blue-100 uppercase tracking-wider">
                                    <Star sx={{ fontSize: 16 }} />
                                    Enterprise Grade Solution
                                </div>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
                                    {title}
                                </h1>

                                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                                    {subtitle}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                    <Link
                                        href="/contact"
                                        className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 inline-flex items-center justify-center gap-2 group"
                                    >
                                        Get Started
                                        <ArrowForward sx={{ fontSize: 20 }} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        href="#features"
                                        className="bg-white text-secondary border border-gray-200 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all inline-flex items-center justify-center gap-2 hover:border-gray-300"
                                    >
                                        Learn More
                                    </Link>
                                </div>

                                <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
                                    <span className="flex items-center gap-1.5"><CheckCircle sx={{ fontSize: 16, color: '#25d366' }} /> No Credit Card</span>
                                    <span className="flex items-center gap-1.5"><CheckCircle sx={{ fontSize: 16, color: '#25d366' }} /> Free Consultation</span>
                                </div>
                            </div>

                            {/* Hero Image Placeholder */}
                            <div className="relative">
                                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                                        <span className="text-gray-500 font-semibold">[Hero Image: {heroImageAlt}]</span>
                                    </div>
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
                                        <Star sx={{ fontSize: 48, color: '#94a3b8' }} />
                                    </div>
                                    <p className="text-gray-400 font-medium">1000 x 750px</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-prose mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Overview</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                What is {title}?
                            </p>
                        </div>
                        <div className="prose prose-lg prose-blue mx-auto text-gray-600">
                            {overview}
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section id="features" className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Key Features</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Powerful tools designed to streamline your operations and drive growth.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, idx) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                                            <Icon sx={{ fontSize: 24 }} />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">Why Choose Our Solution?</h2>
                                <div className="space-y-6">
                                    {benefits.map((benefit, idx) => {
                                        const Icon = benefit.icon;
                                        return (
                                            <div key={idx} className="flex gap-4">
                                                <div className="flex-shrink-0 mt-1">
                                                    <Icon className="text-green-500" sx={{ fontSize: 24 }} />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</h3>
                                                    <p className="text-gray-600">{benefit.description}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Benefits Image Placeholder */}
                            <div className="bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-2xl p-12 border border-gray-100 text-center flex flex-col items-center justify-center min-h-[400px]">
                                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                                    <TrendingUp className="text-primary" sx={{ fontSize: 40 }} />
                                </div>
                                <p className="text-gray-500 font-semibold">[Benefits Illustration]</p>
                                <p className="text-sm text-gray-400 mt-2">Charts, Graphs, or Dashboard View</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works (Optional) */}
                {howItWorks && howItWorks.length > 0 && (
                    <section className="py-20 bg-gradient-to-b from-gray-900 to-secondary text-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                    A simple, streamlined process to get you up and running.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-4 gap-8">
                                {howItWorks.map((step, idx) => (
                                    <div key={idx} className="relative">
                                        {/* Connector Line (Desktop) */}
                                        {idx < howItWorks.length - 1 && (
                                            <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-700 -z-10"></div>
                                        )}

                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto shadow-lg shadow-blue-900/50 relative z-10 border-4 border-gray-900">
                                                {step.stepNumber}
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* FAQs (Optional) */}
                {faqs && faqs.length > 0 && (
                    <section className="py-20 bg-gray-50">
                        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-center text-secondary mb-12">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                                        <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-3">
                                            <span className="text-primary">Q.</span> {faq.question}
                                        </h3>
                                        <p className="text-gray-600 pl-7 text-sm">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
                                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                    Join hundreds of companies using CannyMinds to streamline operations and drive growth.
                                </p>
                                <Link
                                    href="/contact"
                                    className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-lg"
                                >
                                    Get Started Now
                                    <ArrowForward sx={{ fontSize: 20 }} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
