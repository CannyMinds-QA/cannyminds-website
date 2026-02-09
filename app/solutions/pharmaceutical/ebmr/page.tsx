"use client";

import UseCasePageLayout, { UseCaseChallenge, UseCaseItem, UseCaseBenefit } from "@/components/templates/UseCasePageLayout";

export default function eBMRPage() {
    const challenges: UseCaseChallenge[] = [
        {
            challenge: "Manual Data Entry & Fragmented Systems",
            impact: "High risk of record errors, illegible entries, and incomplete documentation impacting batch release."
        },
        {
            challenge: "Data Integrity (ALCOA+) Violations",
            impact: "Difficulty ensuring Attributable, Legible, Contemporaneous, Original, and Accurate data in paper systems."
        },
        {
            challenge: "Prolonged Review Cycles",
            impact: "QA teams spend days manually reconciling paper logbooks, weighing sheets, and IPC records."
        }
    ];

    const useCases: UseCaseItem[] = [
        {
            title: "Real-Time Batch Execution & Monitoring",
            scenario: "A production supervisor needs to ensure all CPPs (Critical Process Parameters) are within range during a complex formulation batch.",
            cannyEcmUseCase: [
                "Digital capture of shop-floor data with immediate validation.",
                "Automated enforcement of master batch record (MBR) limits.",
                "Instant alerts for parameter drift or process deviations.",
                "Verified-at-source data entries with timestamped audit trails."
            ],
            benefits: [
                "100% adherence to validated process parameters.",
                "Elimination of contemporaneous recording gaps.",
                "Real-time visibility into batch progress."
            ]
        },
        {
            title: "GenAI-Powered Review by Exception",
            scenario: "A QA manager is overwhelmed with hundreds of pages of BMRs that need review before batch release.",
            cannyEcmUseCase: [
                "AI-driven scanning of batch data to highlight anomalies and exceptions.",
                "Automated intelligent summaries of all deviations during the run.",
                "Digital checklist verification against predefined release criteria.",
                "One-click investigation summaries for minor inconsistencies."
            ],
            benefits: [
                "45–65% reduction in manual batch record review time.",
                "Release timelines reduced from days to a few hours.",
                "Higher accuracy in identifying critical quality shifts."
            ]
        }
    ];

    const benefits: UseCaseBenefit[] = [
        { area: "Review Efficiency", value: "Over 50% faster batch disposition and release." },
        { area: "Data Integrity", value: "Guaranteed ALCOA+ compliance with immutable audit trails." },
        { area: "Operational Cost", value: "Reduced dependency on additional QA headcount for manual verification." },
        { area: "Audit Readiness", value: "Inspection-ready BMR logs accessible instantly for FDA/EMA audits." }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Electronic Batch Manufacturing Records (eBMR) AI Solution",
        "description": "Digitize and automate your pharmaceutical batch record lifecycle with CannyECM eBMR. FDA 21 CFR Part 11 compliant, GenAI-powered review by exception, and real-time ALCOA+ data integrity.",
        "publisher": {
            "@type": "Organization",
            "name": "CannyMinds Technology Solutions"
        }
    };

    return (
        <UseCasePageLayout
            industry="Pharmaceutical"
            title="GenAI-Enabled Electronic Batch Records (eBMR)"
            heroColor="bg-blue-50/30"
            subtitle={
                <p>
                    Transition from paper-heavy logs to **intelligent, real-time batch records**. Our eBMR solution automates compliance,
                    accelerates release timelines, and ensures absolute data integrity from shop-floor to QA release.
                </p>
            }
            industryContextContent={
                <p>
                    In a GxP environment, the **Batch Manufacturing Record (BMR)** is the ultimate proof of quality.
                    Fragmented or paper-based systems often become bottlenecks, causing expensive delays in market supply.
                    CannyECM eBMR bridges this gap by providing a validated digital framework for secure data capture and intelligent analysis.
                </p>
            }
            challenges={challenges}
            solutionOverviewContent={
                <p>
                    Our eBMR solution integrates directly with your existing LIMS, MES, and ERP systems to provide a single,
                    immutable source of truth. Using **GenAI-powered reasoning**, the system identifies critical exceptions
                    in seconds, allowing QA teams to focus on investigations rather than manual documentation reconciliation.
                    Fully compliant with **21 CFR Part 11** and **EU GMP Annex 11**.
                </p>
            }
            useCases={useCases}
            securityContent={
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-blue-400">FDA-Aligned Guardrails</h3>
                    <p>
                        The system enforces strict compliance controls to ensure every data point is secure and attributable:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-300">
                        <li><strong>Immutable Audit Trails:</strong> Automatic logs for all creation, modification, and approval actions.</li>
                        <li><strong>Dual-Factor Electronic Signatures:</strong> Secure, Part 11 compliant approval workflows.</li>
                        <li><strong>Version Control:</strong> Strict enforcement of effective Master Batch Records.</li>
                        <li><strong>Human-in-the-Loop:</strong> AI highlights exceptions; personnel make final GxP decisions.</li>
                    </ul>
                </div>
            }
            benefits={benefits}
            conclusionContent={
                <p>
                    Eliminate documentation bottlenecks and bring life-saving medicines to market faster.
                    Our eBMR solution is the foundation of a modern, "Quality-by-Design" pharmaceutical plant.
                </p>
            }
            jsonLd={jsonLd}
        />
    );
}
