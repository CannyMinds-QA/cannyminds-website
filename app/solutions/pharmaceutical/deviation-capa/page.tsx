"use client";

import UseCasePageLayout, { UseCaseChallenge, UseCaseItem, UseCaseBenefit } from "@/components/templates/UseCasePageLayout";

export default function DeviationCAPAPage() {
    const challenges: UseCaseChallenge[] = [
        {
            challenge: "Delayed Investigations",
            impact: "Manual data gathering from siloed systems prolongs deviation closure, causing batch release bottlenecks and supply delays."
        },
        {
            challenge: "Inconsistent Root Cause Analysis",
            impact: "Heavy dependency on human SMEs leads to inconsistent investigations and high rates of 'human error' as a superficial root cause."
        },
        {
            challenge: "Ineffective CAPAs",
            impact: "Poor cross-linking between deviations resulting in repeat occurrences and increased regulatory scrutiny during inspections."
        }
    ];

    const useCases: UseCaseItem[] = [
        {
            title: "AI-Assisted Investigation & Summary",
            scenario: "A Batch Manager needs to investigate an autoclave temperature spike across several historical runs.",
            cannyEcmUseCase: [
                "Automated intake and classification of deviations (Critical, Major, Minor).",
                "Instant summarization of related historical deviations and CAPAs using GenAI.",
                "Cross-system data correlation across BMR, QMS, and Equipment Logs.",
                "Drafting of regulatory-ready investigation reports with intelligent root cause indicators."
            ],
            benefits: [
                "35–50% reduction in deviation investigation cycle time.",
                "Standardized, high-quality investigations across multiple manufacturing sites.",
                "Reduced QA workload for document collation and reconciliation."
            ]
        },
        {
            title: "Proactive CAPA Effectiveness Tracking",
            scenario: "Ensuring that a corrective action implemented three months ago is actually preventing repeat incidents.",
            cannyEcmUseCase: [
                "Pattern analysis and 'repeat deviation' detection using semantic AI search.",
                "Automated alerts for early signs of CAPA failure or effectiveness drift.",
                "Intelligent recommendation of preventive actions based on industry-wide GMP trends.",
                "Immutable audit trails of the entire CAPA lifecycle for inspection readiness."
            ],
            benefits: [
                "Significant reduction in recurring deviations and repeat investigations.",
                "Improved CAPA closure rates and effectiveness justifications.",
                "Enhanced regulatory defensibility during FDA, EMA, and WHO audits."
            ]
        }
    ];

    const benefits: UseCaseBenefit[] = [
        { area: "Cycle Time ROI", value: "40-60% reduction in QA effort for deviation and CAPA management." },
        { area: "Quality Culture", value: "Shifting from reactive firefighting to data-driven proactive quality intelligence." },
        { area: "Regulatory Safety", value: "Minimized risk of FDA 483s and warning letters due to inadequate investigations." },
        { area: "Supply Reliability", value: "Faster batch release through expedited and accurate quality event closures." }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "GenAI-Enabled Deviation & CAPA Management for Pharma",
        "description": "Accelerate pharmaceutical investigations with AI-powered Deviation & CAPA management. Intelligent root cause analysis, automated summaries, and GxP-compliant audit trails.",
        "publisher": {
            "@type": "Organization",
            "name": "CannyMinds Technology Solutions"
        }
    };

    return (
        <UseCasePageLayout
            industry="Pharmaceutical"
            title="Deviation & CAPA: Intelligent Quality Intelligence"
            heroColor="bg-red-50/20"
            subtitle={
                <p>
                    Transform your QMS from a recording system into a **predictive intelligence hub**.
                    Our GenAI-enabled Deviation and CAPA suite reduces investigation times by 50%
                    while ensuring deep root cause analysis and absolute audit readiness.
                </p>
            }
            industryContextContent={
                <p>
                    Deviation management is a hallmark of a robust Pharmaceutical Quality System (PQS).
                    Regulators don't just expect deviations to be fixed—they expect them to be understood and prevented.
                    In a complex, multi-site environment, tracking the 'why' behind every spike or anomaly requires
                    more than spreadsheets; it requires the cognitive depth of **CannyAI**.
                </p>
            }
            challenges={challenges}
            solutionOverviewContent={
                <p>
                    Our Deviation & CAPA solution augments your existing QMS (like TrackWise or Veeva) by
                    providing a high-speed intelligence layer. Using **GenAI reasoning**, it scans
                    thousands of historical records to identify patterns humans might miss.
                    Final investigations and final CAPA approvals remain with your Quality personnel,
                    ensuring a **Human-in-the-loop** approach that satisfies all GMP validation requirements.
                </p>
            }
            useCases={useCases}
            securityContent={
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-red-600">Regulatory Integrity Controls</h3>
                    <p>
                        We ensure that every digitized investigation is inspection-safe and data-integrity compliant:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Cross-Linked Evidence:</strong> Direct links between deviations, BMRs, and laboratory results.</li>
                        <li><strong>Immutable History:</strong> Audit logs for every edit or summary generated by the AI.</li>
                        <li><strong>Human-in-the-Loop:</strong> AI provides analysis; Quality leads make the GxP decisions.</li>
                        <li><strong>Traceable Reasoning:</strong> Source-linked summaries explaining exactly which documents informed the AI.</li>
                    </ul>
                </div>
            }
            benefits={benefits}
            conclusionContent={
                <p>
                    Stop reacting to deviations and start mastering them. Our intelligent QMS suite is the future of
                    zero-defect pharmaceutical manufacturing.
                </p>
            }
            jsonLd={jsonLd}
        />
    );
}
