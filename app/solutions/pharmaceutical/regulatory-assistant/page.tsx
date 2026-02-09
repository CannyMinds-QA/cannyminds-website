"use client";

import UseCasePageLayout, { UseCaseChallenge, UseCaseItem, UseCaseBenefit } from "@/components/templates/UseCasePageLayout";

export default function RegulatoryAssistantPage() {
    const challenges: UseCaseChallenge[] = [
        {
            challenge: "High Stress Audit Preparation",
            impact: "Preparing for FDA/EMA inspections requires weeks of manual document collation, causing operational disruption and high pressure on QA teams."
        },
        {
            challenge: "Fragmented Data Visibility",
            impact: "Inspectors' questions often require data from siloed MES, QMS, and ERP systems, leading to delayed or inconsistent responses."
        },
        {
            challenge: "Risk of Compliance Observations",
            impact: "Incomplete traceability or missing documentation during an audit can lead to 483s, warning letters, and severe regulatory action."
        }
    ];

    const useCases: UseCaseItem[] = [
        {
            title: "Inspection-Ready Document Dashboards",
            scenario: "An FDA inspector asks for all deviation and CAPA records for a specific parenteral product line over the last two years.",
            cannyEcmUseCase: [
                "Automated compilation of inspection-ready data from QMS, eBMR, and LIMS.",
                "Customized dashboards aligned with FDA 21 CFR 211 and EU GMP Annex 11.",
                "Instant retrieval of source documents with verified audit trails.",
                "Traceability mapping between change controls, validations, and batch records."
            ],
            benefits: [
                "40–60% reduction in audit preparation and manual document collation effort.",
                "Reduced risk of regulatory observations due to 'missing' or 'delayed' records.",
                "Significant reduction in operational stress during global agency inspections."
            ]
        },
        {
            title: "GenAI-Powered Regulatory Q&A Support",
            scenario: "Quickly drafting accurate responses to complex inspector queries during the 'Back-Room' audit process.",
            cannyEcmUseCase: [
                "Context-aware AI search across thousands of SOPs and historical investigations.",
                "AI-drafted response summaries with direct evidence links for human approval.",
                "Real-time identification of compliance gaps to address before the inspector visits.",
                "Immutable transaction logs of all documents presented to auditors."
            ],
            benefits: [
                "Faster and more accurate responses during live inspections.",
                "Improved 'Regulator Confidence' through organized, data-driven transparency.",
                "Consistent messaging across multi-site global audits."
            ]
        }
    ];

    const benefits: UseCaseBenefit[] = [
        { area: "Audit Speed", value: "Drastic reduction in the time taken to respond to inspector document requests." },
        { area: "Traceability", value: "End-to-end mapping of quality events to regulatory commitments." },
        { area: "Remediation ROI", value: "Lower cost of post-audit remediation through higher 'Right-First-Time' responses." },
        { area: "Multi-Market Ready", value: "Dashboards pre-configured for FDA, EMA, WHO, and local GxP standards." }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "GenAI Regulatory & Audit Assistant for Pharma",
        "description": "Simplify FDA, EMA, and WHO inspections with CannyAI Regulatory Assistant. Automated audit document preparation, instant GxP record retrieval, and 21 CFR Part 11 compliance.",
        "publisher": {
            "@type": "Organization",
            "name": "CannyMinds Technology Solutions"
        }
    };

    return (
        <UseCasePageLayout
            industry="Pharmaceutical"
            title="GenAI Regulatory & Audit Assistant: Always Inspection-Ready"
            heroColor="bg-slate-50/10"
            subtitle={
                <p>
                    Transform your regulatory audit from a high-stress event into a **seamless, technology-driven capability**.
                    Our Regulatory Assistant automates document preparation and provides instant, traceable answers
                    for absolute audit transparency.
                </p>
            }
            industryContextContent={
                <p>
                    In the eyes of a regulator, "if it's not documented, it didn't happen."
                    Global inspections from agencies like the **FDA**, **EMA**, and **WHO** test the ultimate integrity
                    of your Pharmaceutical Quality System. The ability to present accurate, cross-linked data within
                    minutes—not hours—is the hallmark of a world-class manufacturing facility.
                </p>
            }
            challenges={challenges}
            solutionOverviewContent={
                <p>
                    Our Regulatory & Audit Assistant functions as an intelligent layer over your **CannyECM** or existing
                    document systems. By consolidating data from production, quality, and lab systems, it enables
                    your Regulatory Affairs teams to manage inspections with confidence. It supports the
                    entire audit lifecycle—from pre-audit risk assessment to live inspection support and
                    post-audit response management—within a fully validated, **Human-in-the-loop** framework.
                </p>
            }
            useCases={useCases}
            securityContent={
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 border-b pb-2">Global Compliance Mapping</h3>
                    <p>
                        We ensure our system architecture speaks the language of global regulators:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                        <li className="flex items-center gap-2 text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                            <strong>FDA 21 CFR Part 11:</strong> Immutable Audit Trails & Signatures
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                            <strong>ALCOA+ Pillars:</strong> Attributable & Contemporaneous Data
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                            <strong>WHO GMP:</strong> Robust Documentation Robustness
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                            <strong>ICH Q10:</strong> Pharmaceutical Quality System Support
                        </li>
                    </ul>
                </div>
            }
            benefits={benefits}
            conclusionContent={
                <p>
                    Don't just survive your next audit—excel in it. Our Regulatory Assistant is the technology
                    partner you need for seamless, global GxP compliance.
                </p>
            }
            jsonLd={jsonLd}
        />
    );
}
