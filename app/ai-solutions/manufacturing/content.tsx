
import Link from "next/link";
import {
    Security,
    Assessment,
    RecordVoiceOver,
    Translate,
    Engineering,
    CameraAlt,
    Build,
    Code,
    Timeline,
    Visibility,
    Warning,
    DirectionsCar,
    Receipt,
    Inventory,
    School,
    Gavel,
    Speed,
} from "@mui/icons-material";

export const manufacturingContent = {
    hero: {
        title: "Gen AI for Manufacturing & Automotive",
        subtitle: "Safety, Efficiency, and Quality at Scale",
        description: (
            <>
                Transform your manufacturing operations with <Link href="/bpm/safety-compliance" className="text-blue-600 hover:underline">AI-powered safety monitoring</Link>, <Link href="/solutions/product/tracking-system" className="text-blue-600 hover:underline">predictive maintenance</Link>, intelligent quality inspection, and smart supply chain management that delivers zero-defect production and reduced downtime.
            </>
        ),
    },
    useCases: [
        {
            id: "ai-safety-monitoring",
            title: "AI Safety Monitoring",
            icon: Security,
            problem: "Constant manual monitoring of high-risk sites is impossible. Safety officers cannot be everywhere at once to catch PPE violations or workers entering dangerous 'Red Zones.'",
            solution: "Uses camera feeds to detect PPE non-compliance, unsafe proximity to machines, fall risks, and restricted zone breaches. The system can trigger real-time audio alerts or stop machinery if a person enters a hazard zone.",
            capabilities: [
                "Real-time PPE compliance detection",
                "Red Zone breach monitoring",
                "Fall risk identification",
                "Automated audio/visual alerts",
                "Machine emergency stop integration"
            ],
            benefits: {
                cost: "80% reduction in safety incidents",
                quality: "Significantly improved EHS compliance scores"
            }
        },
        {
            id: "incident-analysis",
            title: "Incident Analysis Assistant",
            icon: Assessment,
            problem: "Vital safety insights are often trapped in thousands of unstructured near-miss reports, handwritten logs, and hours of CCTV footage that are rarely reviewed comprehensively.",
            solution: "Summarizes near-miss reports, CCTV events, and safety logs to identify recurring risk patterns. It can cross-reference incidents across different sites to find systemic safety failures.",
            capabilities: [
                "Near-miss report summarization",
                "CCTV event analysis",
                "Cross-site incident correlation",
                "Risk pattern identification",
                "Root cause analysis"
            ],
            benefits: {
                cost: "60% faster incident investigation",
                quality: "Preventive risk reduction by addressing root causes"
            }
        },
        {
            id: "toolbox-talk",
            title: "Toolbox Talk Generator",
            icon: RecordVoiceOver,
            problem: "Daily safety briefings ('Toolbox Talks') are often generic and repetitive, leading to worker disengagement and a lack of awareness regarding current, specific site risks.",
            solution: "Generates daily safety briefings based on specific site risks and recent incidents. It creates highly relevant, fresh content that keeps safety top-of-mind for the crew.",
            capabilities: [
                "Site-specific content generation",
                "Recent incident integration",
                "Multi-language support",
                "Engagement tracking",
                "Compliance documentation"
            ],
            benefits: {
                cost: "90% reduction in briefing preparation time",
                quality: "Higher safety awareness and protocol retention"
            }
        },
        {
            id: "multilingual-shopfloor",
            title: "Multilingual Shopfloor Assistant",
            icon: Translate,
            problem: "On diverse manufacturing floors, language barriers can lead to misunderstanding of SOPs, incorrect machine operation, and delayed resolution of technical issues.",
            solution: "Answers SOP, machine usage, and safety questions in local languages. Workers can ask questions via voice or text and receive immediate, translated guidance from the official manuals.",
            capabilities: [
                "10+ language support",
                "Voice and text interaction",
                "SOP and manual access",
                "Safety protocol guidance",
                "Real-time translation"
            ],
            benefits: {
                cost: "50% faster issue resolution",
                quality: "Improved operational consistency across diverse teams"
            }
        },
        {
            id: "service-technician",
            title: "Service Technician Copilot",
            icon: Engineering,
            problem: "Maintenance technicians lose significant time searching through thousands of pages of technical manuals or waiting for senior experts to help diagnose complex machine faults.",
            solution: "Guides technicians step-by-step to diagnose faults using manuals, past tickets, and sensor data. It acts as a conversational expert that can suggest the most likely fix based on the current machine symptoms.",
            capabilities: [
                "Step-by-step diagnostic guidance",
                "Historical ticket analysis",
                "Sensor data interpretation",
                "Expert knowledge synthesis",
                "Repair procedure recommendation"
            ],
            benefits: {
                cost: "40% reduction in MTTR",
                quality: "Decreased reliance on external experts"
            }
        },
        {
            id: "visual-fault-diagnosis",
            title: "Visual Fault Diagnosis",
            icon: CameraAlt,
            problem: "Describing a mechanical problem over the phone or in a text log is difficult and often leads to misdiagnosis, requiring multiple trips to fix a single issue.",
            solution: "Technicians upload photos or videos of equipment, and Gen AI identifies visible faults like leaks, wear, or misalignment. The AI 'sees' the issue and maps it to the correct part or repair procedure.",
            capabilities: [
                "Photo/video fault detection",
                "Leak and wear identification",
                "Misalignment detection",
                "Part mapping",
                "Repair procedure linking"
            ],
            benefits: {
                cost: "60% improvement in First Time Right repairs",
                quality: "Faster diagnosis with visual evidence"
            }
        },
        {
            id: "parts-recommendation",
            title: "Parts Recommendation Assistant",
            icon: Build,
            problem: "Identifying the correct spare part for an old or complex machine can be difficult, leading to incorrect orders, returns, and extended machine downtime.",
            solution: "Recommends compatible spare parts based on machine model, fault history, and real-time inventory. It ensures that the technician always has the exact component required for the specific serial number of the machine.",
            capabilities: [
                "Machine-specific part matching",
                "Compatibility verification",
                "Real-time inventory check",
                "Alternative part suggestions",
                "Order automation"
            ],
            benefits: {
                cost: "70% reduction in incorrect part orders",
                quality: "Reduced downtime from part availability"
            }
        },
        {
            id: "plc-log-interpreter",
            title: "PLC Log Interpreter",
            icon: Code,
            problem: "Programmable Logic Controller (PLC) logs and error codes are highly technical 'machine language' that requires a specialized engineer to interpret.",
            solution: "Interprets PLC alarms, error codes, and ladder logic logs into plain language explanations. It tells the technician exactly what is wrong and what part of the logic is failing without requiring deep coding knowledge.",
            capabilities: [
                "Error code translation",
                "Ladder logic interpretation",
                "Alarm pattern analysis",
                "Root cause identification",
                "Plain language explanations"
            ],
            benefits: {
                cost: "50% faster PLC troubleshooting",
                quality: "Democratized technical knowledge on shopfloor"
            }
        },
        {
            id: "predictive-maintenance",
            title: "Predictive Maintenance Assistant",
            icon: Timeline,
            problem: "Reactive maintenance (fixing things when they break) is expensive, while scheduled maintenance often replaces parts that are still perfectly functional.",
            solution: "Predicts failures using vibration, temperature, runtime, real-time PLC data and maintenance history. It provides a 'health score' for machines and alerts teams weeks before a likely breakdown occurs.",
            capabilities: [
                "Vibration and temperature monitoring",
                "Machine health scoring",
                "Failure prediction (2-4 weeks ahead)",
                "Maintenance schedule optimization",
                "Asset life extension"
            ],
            benefits: {
                cost: "50% reduction in unplanned downtime",
                quality: "Optimized maintenance extending asset life"
            }
        },
        {
            id: "defect-detection",
            title: "In-line Defect Detection",
            icon: Visibility,
            problem: "Manual quality inspection is subjective and prone to human error, especially on high-speed production lines, leading to defective products reaching the assembly stage.",
            solution: "Detects surface defects, assembly issues, or weld anomalies using high-speed vision models. It inspects every single unit on the line with 100% consistency.",
            capabilities: [
                "Surface defect detection",
                "Assembly verification",
                "Weld quality inspection",
                "100% inspection coverage",
                "Real-time reject triggering"
            ],
            benefits: {
                cost: "70% reduction in scrap and rework",
                quality: "Improved final product quality with zero escapes"
            }
        },
        {
            id: "safety-zone-monitoring",
            title: "Safety Zone Monitoring",
            icon: Warning,
            problem: "Construction sites are chaotic, and workers often unknowingly step into the swing radius of heavy equipment like cranes or excavators, leading to fatal accidents.",
            solution: "Detects unsafe worker movement near heavy equipment. The system can sound a loud alarm or vibrate the worker's wearable device if they enter a high-risk zone around active machinery.",
            capabilities: [
                "Real-time worker tracking",
                "Equipment swing radius monitoring",
                "Wearable device integration",
                "Audio/haptic alerts",
                "Incident prevention logging"
            ],
            benefits: {
                cost: "90% reduction in zone-related incidents",
                quality: "Proactive site safety management"
            }
        },
        {
            id: "service-bay-assistant",
            title: "Service Bay Assistant",
            icon: DirectionsCar,
            problem: "Automotive mechanics face increasingly complex electronics in modern vehicles, making it difficult to keep up with repair workflows for every new model.",
            solution: "Guides mechanics through diagnostics and repair workflows in the service bay, providing visual cues and torque specifications for the specific VIN (Vehicle Identification Number) they are working on.",
            capabilities: [
                "VIN-specific repair guidance",
                "Diagnostic workflow navigation",
                "Torque specification lookup",
                "Visual repair instructions",
                "Service history integration"
            ],
            benefits: {
                cost: "35% faster service turnaround",
                quality: "Improved customer satisfaction at dealerships"
            }
        },
        {
            id: "warranty-claim",
            title: "Warranty Claim Assistant",
            icon: Receipt,
            problem: "Processing warranty claims is a paperwork-heavy process that requires matching job cards, photos of damaged parts, and repair logs to specific OEM (Original Equipment Manufacturer) rules.",
            solution: "Extracts and structures warranty evidence from job cards and photos. It automatically prepares the claim for submission, ensuring all necessary proof is included to minimize rejections.",
            capabilities: [
                "Job card data extraction",
                "Photo evidence processing",
                "OEM rule compliance checking",
                "Claim documentation preparation",
                "Rejection prevention"
            ],
            benefits: {
                cost: "60% faster claim processing",
                quality: "Improved cash flow with fewer rejections"
            }
        },
        {
            id: "inventory-forecasting",
            title: "Inventory & Spares Forecasting",
            icon: Inventory,
            problem: "Supply chains often struggle to balance the cost of holding spare parts with the critical need to avoid 'stock-outs' that can halt production.",
            solution: "Predicts spare part demand based on failure patterns and machine usage. It uses historical data to ensure the right parts are in the right location at the right time.",
            capabilities: [
                "Demand prediction",
                "Failure pattern analysis",
                "Location-based optimization",
                "Stock-out prevention",
                "Capital optimization"
            ],
            benefits: {
                cost: "30% reduction in inventory holding costs",
                quality: "Zero production halts from stock-outs"
            }
        },
        {
            id: "digital-twin-training",
            title: "Digital Twin Training Assistant",
            icon: School,
            problem: "Training new technicians on live, expensive machinery is risky and can lead to accidental damage or injury.",
            solution: "Simulates machine breakdown scenarios for technician training. Using a digital twin, technicians can practice 'fixing' a machine in a virtual environment that responds exactly like the physical asset.",
            capabilities: [
                "Virtual breakdown simulation",
                "Interactive repair practice",
                "Risk-free learning environment",
                "Progress tracking",
                "Competency assessment"
            ],
            benefits: {
                cost: "50% faster skill development",
                quality: "Safer, more effective training programs"
            }
        },
        {
            id: "audit-documentation",
            title: "Audit & Documentation Assistant",
            icon: Gavel,
            problem: "Preparing for ISO, IATF, and safety audits is a massive administrative burden that requires gathering months of documentation across multiple departments.",
            solution: "Prepares ISO, IATF, and safety audit documentation by automatically compiling logs, maintenance records, and training certificates into audit-ready reports.",
            capabilities: [
                "Automated document compilation",
                "ISO/IATF compliance mapping",
                "Training record aggregation",
                "Maintenance log organization",
                "Audit-ready report generation"
            ],
            benefits: {
                cost: "70% reduction in audit preparation effort",
                quality: "Significantly reduced non-compliance risk"
            }
        }
    ],
    regulatoryMapping: [
        {
            regulation: "ISO 45001 (Occupational Health & Safety)",
            expectation: "Systematic approach to managing workplace safety risks and improving OHS performance.",
            alignment: "AI-powered safety monitoring, incident analysis, and automated safety briefing generation."
        },
        {
            regulation: "IATF 16949 (Automotive Quality)",
            expectation: "Defect prevention, variation reduction, and continuous improvement in automotive supply chain.",
            alignment: "In-line defect detection, predictive maintenance, and automated quality documentation."
        },
        {
            regulation: "ISO 9001 (Quality Management)",
            expectation: "Consistent quality, customer satisfaction, and continual improvement processes.",
            alignment: "100% inspection coverage, traceability, and automated audit documentation."
        },
        {
            regulation: "Industry 4.0 Standards",
            expectation: "Connected manufacturing, smart automation, and data-driven decision making.",
            alignment: "IoT integration, digital twins, predictive analytics, and AI-driven optimization."
        }
    ],
    caseStudies: [
        {
            title: "Safety Transformation at Auto Plant",
            scenario: "Large automotive plant with 5,000+ workers experiencing 15+ safety incidents per quarter.",
            solution: "AI safety monitoring across 200+ cameras with real-time PPE detection and zone breach alerts.",
            outcome: "80% reduction in safety incidents, zero fatalities, and improved EHS audit scores."
        },
        {
            title: "Predictive Maintenance Excellence",
            scenario: "Heavy machinery manufacturer facing $2M annual losses from unplanned downtime.",
            solution: "IoT sensor integration with AI-powered failure prediction across 50+ critical machines.",
            outcome: "50% reduction in unplanned downtime, 30% lower maintenance costs, extended asset life."
        },
        {
            title: "Zero-Defect Production Line",
            scenario: "Electronics manufacturer with 3% defect rate impacting customer satisfaction and rework costs.",
            solution: "High-speed AI vision inspection at 100% coverage with real-time defect classification.",
            outcome: "Defect rate reduced to 0.1%, 70% less scrap, and improved customer quality scores."
        }
    ]
};
