
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import { ArrowForward, CheckCircle } from "@mui/icons-material";
import { SvgIconComponent } from "@mui/icons-material";
import { ReactNode } from "react";

export interface IndustryChallenge {
    title: string;
    description: string;
    icon: SvgIconComponent;
}

export interface IndustrySolution {
    title: string;
    description: string;
    icon: SvgIconComponent;
    link: string;
}

export interface IndustryBenefit {
    title: string;
    description: string;
    icon: SvgIconComponent;
}

export interface IndustryUseCase {
    title: string;
    company?: string;
    challenge: string;
    solution: string;
    results: string[];
}

export interface WhyChooseUsItem {
    title: string;
    description: string;
}

interface IndustryPageLayoutProps {
    title: string;
    subtitle: string;
    heroIcon: SvgIconComponent;
    heroColorClass?: string; // e.g., "text-blue-700"
    heroBgClass?: string; // e.g., "bg-gradient-to-br from-blue-50 to-white"

    overviewTitle: string;
    overviewContent: ReactNode;

    challengesTitle?: string;
    challenges: IndustryChallenge[];

    solutionsTitle?: string;
    solutions: IndustrySolution[];

    benefitsTitle?: string;
    benefits: IndustryBenefit[];

    useCasesTitle?: string;
    useCases: IndustryUseCase[];

    whyChooseUsTitle?: string;
    whyChooseUs: WhyChooseUsItem[];

    ctaTitle?: string;
    ctaSubtitle?: string;
    ctaButtonText?: string;
    ctaBgClass?: string; // e.g., "bg-blue-700"

    jsonLd: Record<string, any>;
}

export default function IndustryPageLayout({
    title,
    subtitle,
    heroIcon: HeroIcon,
    heroColorClass = "text-primary",
    heroBgClass = "bg-gradient-to-br from-gray-50 to-white",

    overviewTitle,
    overviewContent,

    challengesTitle = "Key Challenges",
    challenges,

    solutionsTitle = "Our Solutions",
    solutions,

    benefitsTitle = "Why Choose Us",
    benefits,

    useCasesTitle = "Success Stories",
    useCases,

    whyChooseUsTitle = "Why Industry Leaders Trust CannyMinds",
    whyChooseUs,

    ctaTitle = "Ready to Transform Your Operations?",
    ctaSubtitle = "Schedule a consultation with our industry specialists.",
    ctaButtonText = "Contact Us Today",
    ctaBgClass = "bg-primary",

    jsonLd
}: IndustryPageLayoutProps) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navigation />

            <main className="min-h-screen">
                {/* SECTION 1: HERO */}
                <section className={`pt-32 pb-20 ${heroBgClass}`}>
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <HeroIcon className={heroColorClass} sx={{ fontSize: 48 }} />
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                {title}
                            </h1>

                            <p className="text-xl text-gray-600 mb-8">
                                {subtitle}
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link href="/contact">
                                    <button className={`px-8 py-4 ${ctaBgClass.includes('bg-white') ? 'bg-primary text-white' : heroColorClass.replace('text-', 'bg-')} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2`}>
                                        Request Demo
                                        <ArrowForward fontSize="small" />
                                    </button>
                                </Link>
                                <Link href="/#solutions">
                                    <button className={`px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors`}>
                                        View Solutions
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: INDUSTRY OVERVIEW */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                                {overviewTitle}
                            </h2>
                            <div className="prose prose-lg prose-blue mx-auto text-gray-600">
                                {overviewContent}
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: KEY CHALLENGES */}
                {challenges.length > 0 && (
                    <section className="py-20 bg-gray-50">
                        <div className="container mx-auto px-6 lg:px-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
                                {challengesTitle}
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                {challenges.map((challenge, index) => {
                                    const IconComponent = challenge.icon;
                                    return (
                                        <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                                            <IconComponent className={heroColorClass} mb-4 sx={{ fontSize: 40 }} />
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                                            <p className="text-gray-600">{challenge.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* SECTION 4: OUR SOLUTIONS */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
                            {solutionsTitle}
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {solutions.map((solution, index) => {
                                const IconComponent = solution.icon;
                                return (
                                    <Link key={index} href={solution.link}>
                                        <div className={`bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-gray-400 transition-colors h-full group`}>
                                            <IconComponent className={heroColorClass} mb-4 sx={{ fontSize: 40 }} />
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{solution.title}</h3>
                                            <p className="text-gray-600 mb-4">{solution.description}</p>
                                            <span className={`${heroColorClass} font-semibold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform`}>
                                                Learn More <ArrowForward fontSize="small" />
                                            </span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* SECTION 5: BENEFITS */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6 lg:px-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
                            {benefitsTitle}
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {benefits.map((benefit, index) => {
                                const IconComponent = benefit.icon;
                                return (
                                    <div key={index} className="bg-white rounded-lg p-6 text-center border border-gray-200">
                                        <IconComponent className={`${heroColorClass} mx-auto mb-4`} sx={{ fontSize: 48 }} />
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                        <p className="text-gray-600">{benefit.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* SECTION 6: USE CASES */}
                {useCases.length > 0 && (
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-6 lg:px-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
                                {useCasesTitle}
                            </h2>

                            <div className="max-w-5xl mx-auto space-y-8">
                                {useCases.map((useCase, index) => (
                                    <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            {useCase.title}
                                        </h3>
                                        {useCase.company && (
                                            <p className="text-sm text-gray-500 mb-4">
                                                <strong>Company:</strong> {useCase.company}
                                            </p>
                                        )}

                                        <div className="mb-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Challenge:</h4>
                                            <p className="text-gray-600">
                                                {useCase.challenge}
                                            </p>
                                        </div>

                                        <div className="mb-4">
                                            <h4 className="font-bold text-gray-900 mb-2">Solution:</h4>
                                            <p className="text-gray-600">
                                                {useCase.solution}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Results:</h4>
                                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                                {useCase.results.map((result, rIndex) => (
                                                    <li key={rIndex}>{result}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* SECTION 7: WHY CHOOSE CANNYMINDS */}
                {whyChooseUs.length > 0 && (
                    <section className="py-20 bg-gray-50">
                        <div className="container mx-auto px-6 lg:px-12">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                                    {whyChooseUsTitle}
                                </h2>

                                <div className="bg-white rounded-lg p-8 border border-gray-200">
                                    <ul className="space-y-4">
                                        {whyChooseUs.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircle className={`${heroColorClass} mt-1 flex-shrink-0`} />
                                                <div>
                                                    <strong className="text-gray-900">{item.title}:</strong>
                                                    <span className="text-gray-600"> {item.description}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* SECTION 8: FINAL CTA */}
                <section className={`py-20 ${ctaBgClass} text-white`}>
                    <div className="container mx-auto px-6 lg:px-12 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                            {ctaTitle}
                        </h2>

                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            {ctaSubtitle}
                        </p>

                        <Link href="/contact">
                            <button className={`px-8 py-4 bg-white ${heroColorClass} font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2`}>
                                {ctaButtonText}
                                <ArrowForward fontSize="small" />
                            </button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
