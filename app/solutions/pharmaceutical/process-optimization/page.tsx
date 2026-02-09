"use client";

import UseCasePageLayout, { UseCaseChallenge, UseCaseItem, UseCaseBenefit } from "@/components/templates/UseCasePageLayout";

export default function ProcessOptimizationPage() {
    const challenges: UseCaseChallenge[] = [
        {
            challenge: "Sub-Optimal Yields & Variability",
            impact: "Significant variations in yield between batches even when operating within validated ranges, leading to material wastage."
        },
        {
            challenge: "Complex Parameter Interdependencies",
            impact: "Operators struggle to manually correlate dozens of critical process parameters (CPPs) with final quality attributes (CQAs)."
        },
        {
            challenge: "Reactive Process Adjustments",
            impact: "Delayed detection of process drift results in batch rejections or expensive rework sessions."
        }
    ];

    const useCases: UseCaseItem[] = [
        {
            title: "AI-Driven Yield Maximization",
            scenario: "An API manufacturer needs to optimize chemical reaction parameters to increase high-purity yield without violating safety or compliance limits.",
            cannyEcmUseCase: [
                "Multi-parameter analysis across historical and real-time batch data.",
                "AI-driven operating range optimization within the validated Design Space.",
                "What-if simulations to predict the impact of parameter changes on final quality.",
                "Closed-loop insights linking MES, LIMS, and Process Analytical Technology (PAT)."
            ],
            benefits: [
                "3–7% yield improvement across key pharmaceutical products.",
                "Reduced batch-to-batch variability and improved consistency.",
                "Faster scale-up and technology transfer across manufacturing sites."
            ]
        },
        {
            title: "Proactive Drift Detection & Control",
            scenario: "Detecting subtle shifts in temperature or pressure that might lead to an out-of-specification (OOS) event later in the run.",
            cannyEcmUseCase: [
                "Early detection of process drift and variability trends using GenAI patterns.",
                "Continuous learning models that refine 'Golden Batch' profiles over time.",
                "Real-time alerts for operators to make compliant adjustments.",
                "GMP-compliant documentation for design-space justification during audits."
            ],
            benefits: [
                "Significant reduction in process-related deviations and CAPAs.",
                "Lower material and energy wastage from failed batches.",
                "Enhanced process understanding for more robust regulatory submissions."
            ]
        }
    ];

    const benefits: UseCaseBenefit[] = [
        { area: "Profitability", value: "Increased manufacturing margins through higher yield and reduced waste." },
        { area: "Quality by Design", value: "Strong alignment with QbD principles for more stable, predictable production." },
        { area: "Throughput", value: "Improved asset utilization and faster cycle times across the plant." },
        { area: "Audit Transparency", value: "Data-driven justification for operational decisions during regulatory reviews." }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "AI Process Optimization for Pharmaceutical Manufacturing",
        "description": "Maximize pharmaceutical yield and ensure consistent quality with GenAI process optimization. Identify parameter drift and optimize the Design Space within GxP compliance.",
        "publisher": {
            "@type": "Organization",
            "name": "CannyMinds Technology Solutions"
        }
    };

    return (
        <UseCasePageLayout
            industry="Pharmaceutical"
            title="Process Optimization: Advanced Manufacturing Intelligence"
            heroColor="bg-indigo-50/30"
            subtitle={
                <p>
                    Achieve the "Golden Batch" ogni time. Our **AI-driven optimization** suite analyzes complex correlations in seconds,
                    detecting process drift and maximizing yield while staying strictly within validated compliance ranges.
                </p>
            }
            industryContextContent={
                <p>
                    Modern pharmaceutical processes—from bio-fermentation to solid dosage compression—operate in a multi-variate design space.
                    Even subtle shifts in humidity, raw material purity, or equipment speed can impact final product efficacy.
                    CannyAI provides the analytical depth needed to navigate this complexity, turning manufacturing
                    data into a sustainable competitive advantage.
                </p>
            }
            challenges={challenges}
            solutionOverviewContent={
                <p>
                    Our Process Optimization solution acts as a virtual "SME in the Cloud." By integrating data from **MES**,
                    **LIMS**, and **PAT systems**, the AI identifies the precise combination of parameters that
                    results in optimal yield and quality. Every recommendation is presented within the context
                    of the approved Design Space, ensuring your operational Agility never compromises your Regulatory Integrity.
                </p>
            }
            useCases={useCases}
            securityContent={
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-indigo-600">Compliant Intelligence</h3>
                    <p>
                        We ensure that AI optimization remains fully transparent and audit-ready:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Validated Design Space Enforcement:</strong> AI recommendations are hard-capped by GxP registered ranges.</li>
                        <li><strong>Explainable AI (XAI):</strong> Clear reasoning provided for every optimization recommendation.</li>
                        <li><strong>Human-in-the-Loop Controls:</strong> All process changes require authorized personnel approval.</li>
                        <li><strong>Historical Performance Analysis:</strong> Continuous verification of AI outcomes against actual yield data.</li>
                    </ul>
                </div>
            }
            benefits={benefits}
            conclusionContent={
                <p>
                    Unlock the hidden potential of your production lines. With CannyAI Process Optimization,
                    you move beyond 'compliance by inspection' to 'compliance by intelligent design.'
                </p>
            }
            jsonLd={jsonLd}
        />
    );
}
