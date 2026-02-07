import Link from "next/link";
import {
    Assignment,
    Warning,
    Visibility,
    Build,
    TrendingUp,
    Rule,
    LibraryBooks,
    CleaningServices,
    Inventory,
    School,
    Gavel,
    Description,
    VerifiedUser,
    FactCheck,
    Policy,
    Psychology,
    AutoGraph,
    Engineering,
    Science,
    Speed,
    Security,
} from "@mui/icons-material";

export const pharmaContent = {
    hero: {
        title: "Gen AI for Pharmaceutical Manufacturing",
        subtitle: "Compliance, Quality, Efficiency, and Cost Optimization",
        description: (
            <>
                Transform your pharmaceutical operations with <Link href="/solutions/product/ebmr" className="text-blue-600 hover:underline">FDA-compliant Generative AI</Link>. From <Link href="/solutions/product/ebmr" className="text-blue-600 hover:underline">eBMR</Link> to Regulatory Audits, we ensure integrity, speed, and precision.
            </>
        ),
    },
    useCases: [
        {
            id: "ebmr",
            title: "Gen AI-Enabled Electronic Batch Manufacturing Records (eBMR)",
            icon: Assignment,
            problem: "Pharmaceutical plants often rely on paper-based BMRs or fragmented systems, leading to manual errors, slow review cycles, data integrity risks (ALCOA+), and high audit preparation effort.",
            solution: "Gen AI-powered eBMR digitizes and automates the entire lifecycle. It provides contextual validation against MBRs, real-time error detection, and automated review-by-exception.",
            capabilities: [
                "AI-based digitization of paper BMRs & logbooks",
                "Real-time deviation detection during execution",
                "Automated batch review by exception",
                "FDA 21 CFR Part 11 compliant e-signatures",
                "Integration with MES, LIMS, and ERP"
            ],
            benefits: {
                cost: "45–65% reduction in manual review effort",
                quality: "Strong ALCOA+ data integrity compliance"
            }
        },
        {
            id: "capa",
            title: "Gen AI-Enabled Deviation & CAPA Management",
            icon: Warning,
            problem: "Manual, reactive deviation management leads to delayed investigations, inconsistent root cause analysis, and poor cross-linking of quality events, increasing regulatory risk.",
            solution: "Gen AI automates deviation intake, summarizes investigations using historical data, and recommends CAPAs aligned with regulatory expectations.",
            capabilities: [
                "AI-assisted deviation classification",
                "Automated investigation summarization",
                "Root cause pattern analysis",
                "Gen AI-recommended CAPAs",
                "Effectiveness tracking with risk alerts"
            ],
            benefits: {
                cost: "35–50% reduction in investigation cycle time",
                quality: "Consistent root cause analysis & reduced repeat deviations"
            }
        },
        {
            id: "visual-inspection",
            title: "AI Vision–Enabled Quality Inspection",
            icon: Visibility,
            problem: "Manual visual inspection is prone to fatigue and subjectivity, leading to false positives, high rejection rates, and limited traceability for micro-defects.",
            solution: "High-resolution AI vision systems detect cracks, contamination, and seal integrity issues in real-time with self-learning accuracy.",
            capabilities: [
                "Inspection for tablets, vials, ampoules, & blisters",
                "Real-time detection of cracks, chips, & particles",
                "Self-learning models improving with history",
                "Root cause insights linking to process parameters",
                "GMP-compliant image storage & audit trails"
            ],
            benefits: {
                cost: "30–50% reduction in manual inspection manpower",
                quality: "Near-100% inspection coverage & consistency"
            }
        },
        {
            id: "predictive-maintenance",
            title: "Gen AI-Enabled Predictive Maintenance",
            icon: Build,
            problem: "Reactive maintenance causes unplanned downtime and batch rejections. Validated equipment failures directly impact product quality and compliance.",
            solution: "Gen AI predicts failures using sensor data (vibration, heat) and historical logs, enabling proactive maintenance without disrupting validated processes.",
            capabilities: [
                "Real-time health monitoring (IoT sensors)",
                "AI-driven failure prediction",
                "Root cause analysis for equipment deviations",
                "Spare parts optimization",
                "GMP-compliant maintenance documentation"
            ],
            benefits: {
                cost: "25–45% reduction in unplanned downtime",
                quality: "Improved equipment reliability & process consistency"
            }
        },
        {
            id: "process-optimization",
            title: "Gen AI-Enabled Process Optimization",
            icon: TrendingUp,
            problem: "Complex processes (API, sterile) suffer from yield variability and parameter drift. Manual analysis is too slow to prevent batch failures.",
            solution: "Gen AI analyzes CPPs and CQAs to recommend optimal parameters within validated ranges, ensuring consistent yield and quality.",
            capabilities: [
                "Multi-parameter analysis (CPPs & CQAs)",
                "Optimization within validated ranges",
                "What-if simulations for yield impact",
                "Early detection of process drift",
                "Closed-loop insights with MES/LIMS"
            ],
            benefits: {
                cost: "3–7% yield improvement",
                quality: "Reduced batch-to-batch variability"
            }
        },
        {
            id: "regulatory-assistant",
            title: "Gen AI-Enabled Regulatory & Audit Assistant",
            icon: Gavel,
            problem: "Audit preparation is stressful and manual. Delays in retrieving documents during FDA/EMA inspections can lead to 483s and warning letters.",
            solution: "A virtual assistant that compiles, validates, and presents audit-ready documentation (SOPs, BMRs, Deviations) instantly.",
            capabilities: [
                "Automated audit document preparation",
                "Context-aware response generation",
                "Cross-system data consolidation",
                "Traceability mapping (Observation -> CAPA)",
                "Mock inspection support"
            ],
            benefits: {
                cost: "40–60% reduction in audit prep effort",
                quality: "Improved inspection confidence & outcomes"
            }
        },
        {
            id: "sop-assistant",
            title: "Gen AI-Enabled SOP & Knowledge Assistant",
            icon: LibraryBooks,
            problem: "Thousands of static SOPs make knowledge access difficult. Operators may use outdated procedures, leading to deviations.",
            solution: "A secure, conversational interface for checking approved SOPs. Answers are role-based, version-controlled, and linked to the source.",
            capabilities: [
                "Natural-language Q&A across SOPs",
                "Role-based, context-aware answers",
                "Version control enforcement",
                "Source-linked responses for traceability",
                "Audit-ready interaction logs"
            ],
            benefits: {
                cost: "30–50% less time searching documents",
                quality: "Improved SOP adherence & consistency"
            }
        },
        {
            id: "cleaning-validation",
            title: "Gen AI-Enabled Cleaning Validation Optimization",
            icon: CleaningServices,
            problem: "Cleaning validation is conservative and data-heavy, leading to excessive downtime, water use, and over-designed cleaning cycles.",
            solution: "Gen AI uses historical lab results (swab/rinse) to recommend optimized cleaning cycles that meet MACO/PDE limits without waste.",
            capabilities: [
                "Analysis of historical swab/rinse/TOC data",
                "AI-driven cycle optimization",
                "Risk-based limit justification (PDE/MACO)",
                "Early warning for cleaning failures",
                "GMP-compliant revalidation support"
            ],
            benefits: {
                cost: "15–30% reduction in cleaning cycle time",
                quality: "Reduced cleaning failures & repeat testing"
            }
        },
        {
            id: "supply-chain",
            title: "Gen AI-Enabled Supply Chain & Inventory",
            icon: Inventory,
            problem: "Static forecasting leads to material shortages or expiry write-offs. Supply risks for APIs and excipients are often invisible until too late.",
            solution: "Gen AI predicts demand using market signals and production plans, optimizing inventory levels while ensuring GMP material traceability.",
            capabilities: [
                "AI-driven demand forecasting",
                "Expiry-aware inventory planning",
                "Supplier risk analysis",
                "Scenario-based planning",
                "Batch-level material traceability"
            ],
            benefits: {
                cost: "20–35% reduction in carrying costs",
                quality: "Improved material availability & traceability"
            }
        },
        {
            id: "training",
            title: "Gen AI-Enabled Training & GMP Compliance",
            icon: School,
            problem: "Generic training doesn't stick. Manual tracking of training status across shifts creates compliance gaps and audit risks.",
            solution: "Personalized, role-based micro-learning generated from SOPs. Automated compliance tracking ensures everyone is audit-ready.",
            capabilities: [
                "Role-based content generation from SOPs",
                "AI-driven effectiveness assessments",
                "Automated assignment on SOP changes",
                "Real-time compliance dashboards",
                "Audit-ready training records"
            ],
            benefits: {
                cost: "30–50% reduction in admin effort",
                quality: "Improved GMP awareness & reduced deviations"
            }
        }
    ],
    regulatoryMapping: [
        {
            regulation: "FDA 21 CFR Part 11",
            expectation: "Secure electronic records, audit trails, and e-signatures.",
            alignment: "Immutable audit trails, role-based access, and validated AI documentation."
        },
        {
            regulation: "FDA 21 CFR Parts 210 & 211 (cGMP)",
            expectation: "Complete production records and timely deviation investigations.",
            alignment: "Automated batch record compilation and rapid deviation root cause analysis."
        },
        {
            regulation: "EU GMP Annex 11",
            expectation: "Validated computerized systems and data integrity.",
            alignment: "GAMP 5–aligned validation, controlled model updates, and end-to-end integrity."
        },
        {
            regulation: "Data Integrity (ALCOA+)",
            expectation: "Attributable, Legible, Contemporaneous, Original, Accurate.",
            alignment: "Automated capture, timestamping, and secure version control."
        }
    ],
    caseStudies: [
        {
            title: "Gen AI-Enabled eBMR Review",
            scenario: "Multi-site dosage manufacturer faced slow batch release due to manual review.",
            solution: "Gen AI highlighted exceptions; QA performed final approval (Human-in-the-Loop).",
            outcome: "55% reduction in review time, positive FDA feedback on data integrity."
        },
        {
            title: "Deviation & CAPA Intelligence",
            scenario: "Recurring deviations across equipment were not easily correlated manually.",
            solution: "Gen AI analyzed history to find trends and probable causes.",
            outcome: "Faster investigations, reduced repeat deviations, improved CAPA effectiveness."
        },
        {
            title: "Audit Readiness & FDA Support",
            scenario: "FDA inspection required rapid access to years of evidence.",
            solution: "CannyECM dashboards compiled data instantly; Gen AI retrieved documents.",
            outcome: "Zero data integrity observations, reduced inspection stress."
        }
    ]
};
