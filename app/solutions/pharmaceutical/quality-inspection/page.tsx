"use client";

import UseCasePageLayout, { UseCaseChallenge, UseCaseItem, UseCaseBenefit } from "@/components/templates/UseCasePageLayout";

export default function QualityInspectionPage() {
    const challenges: UseCaseChallenge[] = [
        {
            challenge: "Human Fatigue & Subjectivity",
            impact: "Inconsistent defect detection in high-speed production lines, leading to potential quality escapes or high false-rejection rates."
        },
        {
            challenge: "Difficulty with Micro-Defects",
            impact: "Manual inspection often misses micro-cracks in glass vials, seal integrity issues, or subtle contamination in sterile environments."
        },
        {
            challenge: "Scalability Constraints",
            impact: "Traditional rule-based vision systems are complex to configure and struggle with variable defects in high-mix manufacturing."
        }
    ];

    const useCases: UseCaseItem[] = [
        {
            title: "Autonomous Defect Detection",
            scenario: "A sterile filling line requires 100% inspection of glass vials for particulates, fill levels, and stopper integrity.",
            cannyEcmUseCase: [
                "Real-time AI analysis of high-speed camera feeds.",
                "Automated detection of cracks, chips, contamination, and seal failures.",
                "Deep learning models that differentiate between critical defects and cosmetic variations.",
                "Visual evidence capture with timestamped pass/fail markers."
            ],
            benefits: [
                "Near-100% inspection coverage with objective high repeatability.",
                "Significant reduction in false positives and material wastage.",
                "Consistent inspection quality across shifts and plant sites."
            ]
        },
        {
            title: "Packaging & Label Verification",
            scenario: "Ensuring correct batch codes, expiry dates, and tamper-evident seals across multiple product variants.",
            cannyEcmUseCase: [
                "AI-driven OCR (Optical Character Recognition) for batch-level verification.",
                "Automated check for label alignment, wrinkles, or missing print.",
                "Real-time alerts for suspected cross-product contamination in packaging lines.",
                "Integration with serialization systems for end-to-end traceability."
            ],
            benefits: [
                "Elimination of labeling-related product recalls.",
                "Improved throughput of final packaging and secondary operations.",
                "Audit-ready documentation with visual proof of label accuracy."
            ]
        }
    ];

    const benefits: UseCaseBenefit[] = [
        { area: "OEE & Yield", value: "30-50% reduction in manual inspection overhead and rework costs." },
        { area: "Patient Safety", value: "Near-zero risk of micro-defects or contaminated batches reaching the market." },
        { area: "Regulatory Confidence", value: "Standardized inspection reports with image evidence for FDA/EMA audits." },
        { area: "Operational Speed", value: "Optimized line efficiency without compromising quality at high production speeds." }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "AI Vision-Enabled Quality Inspection for Pharma",
        "description": "Automate pharmaceutical quality inspection with AI Vision. High-accuracy defect detection for tablets, vials, and packaging. GMP-compliant inspection logs with visual proof.",
        "publisher": {
            "@type": "Organization",
            "name": "CannyMinds Technology Solutions"
        }
    };

    return (
        <UseCasePageLayout
            industry="Pharmaceutical"
            title="AI Vision: Autonomous Quality Inspection & Defect Detection"
            heroColor="bg-teal-50/30"
            subtitle={
                <p>
                    Ensure 100% product safety with **high-speed AI vision**. Our solution eliminates human subjectivity,
                    detects micro-defects with precision, and provides visual proof for absolute regulatory confidence.
                </p>
            }
            industryContextContent={
                <p>
                    In pharmaceutical manufacturing, even a single defective vial or tablet can lead to catastrophic brand damage
                    and regulatory action. Traditional manual inspection is limited by human fatigue, while older vision systems
                    are too rigid for modern production. **CannyAI Vision** provides a self-learning, flexible alternative
                    that delivers objective, reliable results at scale.
                </p>
            }
            challenges={challenges}
            solutionOverviewContent={
                <p>
                    Our AI Vision system operates as a non-intrusive compliance layer over your production line.
                    Using deep learning models trained on millions of data points, it identifies anomalies in
                    real-time—from glass cracks to labeling errors. Every inspection event is logged with
                    visual evidence, ensuring your quality data is both **traceable** and **indisputable**.
                </p>
            }
            useCases={useCases}
            securityContent={
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-teal-600">Traceable Quality Governance</h3>
                    <p>
                        We ensure that every automated decision is backed by a secure audit trail:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Image Evidence Archival:</strong> Secure storage of defect images with batch linkage.</li>
                        <li><strong>Immutable Inspection Logs:</strong> Audit trails tracking system configuration and pass/fail results.</li>
                        <li><strong>Human-in-the-Loop Review:</strong> AI flags anomalies for final QA oversight when needed.</li>
                        <li><strong>GxP Aligned Storage:</strong> Data integrity controls for long-term archival of quality records.</li>
                    </ul>
                </div>
            }
            benefits={benefits}
            conclusionContent={
                <p>
                    Transform your quality control from a bottleneck into a competitive advantage.
                    With CannyAI Vision, you can achieve unprecedented levels of manufacturing precision and patient safety.
                </p>
            }
            jsonLd={jsonLd}
        />
    );
}
