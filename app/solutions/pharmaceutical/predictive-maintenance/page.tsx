"use client";

import UseCasePageLayout, { UseCaseChallenge, UseCaseItem, UseCaseBenefit } from "@/components/templates/UseCasePageLayout";

export default function PredictiveMaintenancePage() {
    const challenges: UseCaseChallenge[] = [
        {
            challenge: "Unplanned Equipment Downtime",
            impact: "Reactive maintenance causes sudden batch interruptions, leading to significant production losses and potential batch discard."
        },
        {
            challenge: "Compliance Risk due to Failure",
            impact: "Equipment failures in validated processes (like HVAC or filling lines) require extensive re-validation and deviation investigations."
        },
        {
            challenge: "Inefficient Time-Based Maintenance",
            impact: "Scheduled maintenance often occurs too late or too early, wasting spare parts and labor while still risking sudden breakdowns."
        }
    ];

    const useCases: UseCaseItem[] = [
        {
            title: "Real-Time Health Monitoring",
            scenario: "Critical granulators and tablet presses need continuous monitoring to prevent wear-and-tear from impacting tablet uniformity.",
            cannyEcmUseCase: [
                "Integration of vibration, temperature, and torque sensors with AI monitoring.",
                "Automated detection of mechanical anomalies before they lead to failure.",
                "Real-time health dashboards for facility and engineering teams.",
                "Early warning alerts for potential equipment-related deviations."
            ],
            benefits: [
                "25–45% reduction in unplanned equipment downtime.",
                "Lower maintenance costs by shifting from reactive to predictive.",
                "Improved batch success rates by ensuring consistent equipment performance."
            ]
        },
        {
            title: "AI-Driven Failure Prediction",
            scenario: "Predicting when a filling machine's nozzle might clog or a sterile air filter needs replacement based on usage patterns.",
            cannyEcmUseCase: [
                "Analysis of historical maintenance logs and sensor trends using GenAI.",
                "AI-recommended maintenance windows synchronized with production schedules.",
                "Automated spare parts inventory triggers based on predicted needs.",
                "Compliance-ready maintenance logs with full audit trails."
            ],
            benefits: [
                "20–35% reduction in overall maintenance expenditure.",
                "Elimination of emergency repair chaos and overtime costs.",
                "Enhanced compliance with GMP and validation life-cycle requirements."
            ]
        }
    ];

    const benefits: UseCaseBenefit[] = [
        { area: "OEE Improvement", value: "Higher Overall Equipment Effectiveness across all critical production assets." },
        { area: "Production Reliability", value: "Stable production schedules with minimal interruptions to the market supply chain." },
        { area: "Spare Parts Optimization", value: "Reduced overstocking of critical components via predictive procurement." },
        { area: "Audit Readiness", value: "Digitized maintenance records with linkable evidence for GMP inspections." }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Predictive Maintenance AI for Pharmaceutical Manufacturing",
        "description": "Ensure continuous, compliant pharmaceutical operations with GenAI-powered predictive maintenance. Reduce unplanned downtime and lower maintenance costs with real-time sensor monitoring.",
        "publisher": {
            "@type": "Organization",
            "name": "CannyMinds Technology Solutions"
        }
    };

    return (
        <UseCasePageLayout
            industry="Pharmaceutical"
            title="Predictive Maintenance: Zero-Downtime Manufacturing"
            heroColor="bg-blue-50/20"
            subtitle={
                <p>
                    Prevent equipment failures before they happen. Our **AI-driven predictive maintenance** solution monitors
                    critical pharma assets in real-time, ensuring continuous production and 100% GxP compliance.
                </p>
            }
            industryContextContent={
                <p>
                    In pharmaceutical manufacturing, equipment reliability directly impacts product quality.
                    From granulators to sterile HVAC systems, every asset must operate within validated parameters.
                    Traditional time-based maintenance is no longer sufficient for high-demand sterile and API plants
                    where uptime is critical to patient safety and revenue.
                </p>
            }
            challenges={challenges}
            solutionOverviewContent={
                <p>
                    CannyAI Predictive Maintenance leverages the power of IoT and GenAI to turn raw sensor data into
                    actionable maintenance intelligence. By correlating vibration, energy, and temperature profiles
                    with historical failure modes, we provide a proactive shield against unplanned interruptions,
                    allowing your engineering teams to work with surgical precision.
                </p>
            }
            useCases={useCases}
            securityContent={
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-blue-600">Enterprise Asset Security</h3>
                    <p>
                        We protect your operational data with industry-leading security and compliance measures:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Secure IoT Integration:</strong> End-to-end encrypted data transmission from sensors.</li>
                        <li><strong>Role-Based Access:</strong> Granular control over maintenance schedules and configuration.</li>
                        <li><strong>Audit Trails:</strong> Every maintenance alert and technician response is logged for 21 CFR Part 11.</li>
                        <li><strong>Edge Computing Support:</strong> Local processing for sensitive production data to ensure low latency and security.</li>
                    </ul>
                </div>
            }
            benefits={benefits}
            conclusionContent={
                <p>
                    Stop reacting to failures and start predicting success. Our predictive maintenance suite is the key
                    to a more resilient, cost-effective, and compliant manufacturing operation.
                </p>
            }
            jsonLd={jsonLd}
        />
    );
}
