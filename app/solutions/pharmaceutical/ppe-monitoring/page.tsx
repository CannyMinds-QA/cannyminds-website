"use client";

import UseCasePageLayout, { UseCaseChallenge, UseCaseItem, UseCaseBenefit } from "@/components/templates/UseCasePageLayout";

export default function PPEMonitoringPage() {
    const challenges: UseCaseChallenge[] = [
        {
            challenge: "Manual Gowning Compliance Checks",
            impact: "Supervisors cannot monitor every gowning event in real-time, leading to potential contamination risks in sterile areas."
        },
        {
            challenge: "Inconsistent Personnel Discipline",
            impact: "Minor breaches in PPE (missing masks, hairnets, or gloves) go unnoticed until they appear as deviations or cluster infections."
        },
        {
            challenge: "Audit Gaps in Personnel Control",
            impact: "Lack of objective evidence to prove gowning compliance to auditors and regulatory inspectors during sterile plant visits."
        }
    ];

    const useCases: UseCaseItem[] = [
        {
            title: "Automated Gowning Verification",
            scenario: "Operators entering a Grade A/B sterile cleanroom must adhere to strict gowning protocols every single time.",
            cannyEcmUseCase: [
                "AI vision analysis of CCTV feeds at gowned airlocks.",
                "Real-time detection of missing PPE (masks, goggles, gloves, booties).",
                "Instant visual feedback for the operator before entry is granted.",
                "Automated logging of compliance events with timestamped image proof."
            ],
            benefits: [
                "Near-zero risk of contamination from personnel gowning errors.",
                "Objective, continuous monitoring without increasing supervisor workload.",
                "Human-in-the-loop: AI alerts supervisors for intentional or repeat breaches."
            ]
        },
        {
            title: "Personnel Safety & Area Monitoring",
            scenario: "Detecting if unauthorized personnel are entering high-risk or restricted API reaction zones.",
            cannyEcmUseCase: [
                "Area-specific facial or badge-based access verification.",
                "Detection of slips, falls, or personnel in distress in solitary work zones.",
                "AI-driven alerts for overcrowding in small, sensitive production suites.",
                "Automated safety compliance dashboards for EH&S and Quality teams."
            ],
            benefits: [
                "Enhanced personnel safety and rapid response to accidents.",
                "Improved discipline and compliance in high-risk zones.",
                "Clear documentation of area access for security and quality audits."
            ]
        }
    ];

    const benefits: UseCaseBenefit[] = [
        { area: "Contamination Control", value: "Significant reduction in cleanroom contamination incidents linked to personnel behavior." },
        { area: "Compliance Proof", value: "Visual, audit-ready evidence of gowning discipline for FDA/EMA inspections." },
        { area: "Training Effectiveness", value: "Identifies recurring breaches to trigger targeted personnel retraining." },
        { area: "Safety ROI", value: "Lower risk of workplace accidents and improved security across restricted zones." }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "AI PPE Monitoring for Pharmaceutical Facilities",
        "description": "Ensure pharmaceutical cleanroom compliance with AI Vision PPE monitoring. Detect gowning breaches in real-time and provide visual proof for GxP personnel control.",
        "publisher": {
            "@type": "Organization",
            "name": "CannyMinds Technology Solutions"
        }
    };

    return (
        <UseCasePageLayout
            industry="Pharmaceutical"
            title="AI Vision: Gowning & PPE Compliance Monitoring"
            heroColor="bg-orange-50/20"
            subtitle={
                <p>
                    Protect your cleanroom integrity with **autonomous PPE monitoring**. Our AI vision solution detects gowning breaches
                    in real-time, preventing contamination and providing objective proof of personnel discipline for GxP compliance.
                </p>
            }
            industryContextContent={
                <p>
                    Personnel are the single largest source of contamination in pharmaceutical cleanrooms.
                    Strict gowning procedures are the industry standard, but manual enforcement is often inconsistent.
                    **CannyAI PPE Monitoring** acts as a tireless, 24/7 compliance assistant, ensuring that
                    every entry into a sterile or sensitive zone meets the highest standards of safety and quality.
                </p>
            }
            challenges={challenges}
            solutionOverviewContent={
                <p>
                    Positioned as a **Decision Support System**, our PPE monitoring solution analyzes existing CCTV feeds
                    at airlocks and production suites. By identifying missing PPE or incorrect gowning sequences, the AI
                    notifies supervisors or triggers local alerts, ensuring that deviations are captured and corrected
                    *before* they impact product quality. Optimized for 21 CFR Part 11 linked data integrity.
                </p>
            }
            useCases={useCases}
            securityContent={
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-orange-600">Privacy & Control Guardrails</h3>
                    <p>
                        We balance high-tech monitoring with personnel privacy and operational control:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Non-Intrusive Observation:</strong> System focuses on PPE detection, not intrusive surveillance.</li>
                        <li><strong>Decision Support Only:</strong> AI alerts personnel; it does not take autonomous GxP actions.</li>
                        <li><strong>Secure Metadata Archival:</strong> Encryption of video logs and compliance data.</li>
                        <li><strong>Role-Based Access:</strong> Only authorized Quality and Safety personnel can view breach evidence.</li>
                    </ul>
                </div>
            }
            benefits={benefits}
            conclusionContent={
                <p>
                    Build a culture of "Right-First-Time" gowning. Our PPE monitoring suite is the final
                    defense line for your sterile manufacturing and high-potency API zones.
                </p>
            }
            jsonLd={jsonLd}
        />
    );
}
