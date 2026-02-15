
import Link from "next/link";
import {
    PersonSearch,
    Description,
    Assignment,
    Warning,
    TrackChanges,
    Gavel,
    AccountBalance,
    Construction,
    CheckCircle,
    Summarize,
    Mic,
    SmartToy,
    Speed,
    Security,
} from "@mui/icons-material";

export const nbfcContent = {
    hero: {
        title: "Gen AI for Lending & NBFC Operations",
        subtitle: "Accelerate Lending, Reduce Risk, Enhance Collections",
        description: (
            <>
                Transform your lending operations with AI-powered lead qualification, automated credit decisioning, <Link href="/product/enterprise-content-management" className="text-blue-600 hover:underline">intelligent document processing</Link>, and smart collection management that delivers faster turnaround and lower NPAs.
            </>
        ),
    },
    useCases: [
        {
            id: "lead-qualification",
            title: "Lead Qualification Assistant",
            icon: PersonSearch,
            problem: "Sales teams spend significant time manually reviewing incoming forms, application calls, and initial documents to assess the completeness and intent of a lead, slowing down the sales cycle.",
            solution: "AI analyzes forms, call transcripts, and submitted documents for completeness and intent. The AI flags missing fields, assesses lead seriousness, and routes qualified leads to the appropriate relationship manager.",
            capabilities: [
                "Form and document completeness analysis",
                "Call transcript intent assessment",
                "Missing field detection and alerts",
                "Lead scoring and prioritization",
                "Automated routing to relationship managers"
            ],
            benefits: {
                cost: "60% faster lead qualification",
                quality: "Improved sales team efficiency focusing on high-intent leads"
            }
        },
        {
            id: "document-intake",
            title: "Document Intake & Classification",
            icon: Description,
            problem: "The onboarding process requires classifying and extracting data from various unstructured KYC documents, bank statements, and income proofs, demanding extensive manual data entry into the Loan Origination System (LOS).",
            solution: "AI extracts KYC, bank statement, and income data from documents into the LOS. It automatically classifies document types (e.g., PAN card, 3-month bank statement) and extracts key variables (e.g., average monthly balance, date of birth).",
            capabilities: [
                "Auto-classification of KYC documents",
                "Bank statement data extraction",
                "Income proof analysis",
                "Average monthly balance calculation",
                "Seamless LOS integration"
            ],
            benefits: {
                cost: "80% reduction in manual data entry",
                quality: "Accelerated loan origination with improved data accuracy"
            }
        },
        {
            id: "credit-memo",
            title: "Credit Memo Drafting Assistant",
            icon: Assignment,
            problem: "Credit analysts must manually compile and draft lengthy, structured credit memos that synthesize borrower information, risk analysis, and justification for the final lending decision, a process that is time-consuming and often inconsistent.",
            solution: "AI drafts structured credit notes and approval memos using analyst inputs (e.g., risk rating, financial projections) and internal policy guidelines. The AI ensures all mandatory sections and compliance language are included.",
            capabilities: [
                "Automated credit memo generation",
                "Risk analysis synthesis",
                "Policy guideline compliance",
                "Mandatory section validation",
                "Consistent formatting and language"
            ],
            benefits: {
                cost: "50% faster TAT for credit decisions",
                quality: "Improved consistency and compliance of credit documentation"
            }
        },
        {
            id: "exception-summarizer",
            title: "Exception & Deviation Summarizer",
            icon: Warning,
            problem: "Loan exceptions and deviations from standard policy require significant effort to document, summarize, and escalate to senior management for approval, slowing down the decision process for complex cases.",
            solution: "AI summarizes deviations and complex escalation notes from the analyst's input into a concise, actionable format for management review. The AI highlights the key risks and mitigating factors of the exception.",
            capabilities: [
                "Deviation summary generation",
                "Risk factor highlighting",
                "Mitigating factor identification",
                "Escalation note formatting",
                "Management-ready presentation"
            ],
            benefits: {
                cost: "40% faster exception approvals",
                quality: "Clearer risk communication to sanctioning authorities"
            }
        },
        {
            id: "case-tracking",
            title: "Case Tracking Copilot",
            icon: TrackChanges,
            problem: "Tracking the movement of a loan file through various departments (sales, credit, legal, disbursement) relies on manual status updates, leading to poor visibility and delays going undetected.",
            solution: "AI tracks file movement and flags bottlenecks by analyzing workflow logs and communication patterns. The AI can identify where files are stalled (e.g., 'Legal review queue time is 48% higher than average').",
            capabilities: [
                "Real-time file tracking across departments",
                "Bottleneck detection and alerts",
                "Queue time analysis",
                "Delay prediction and prevention",
                "Workflow optimization insights"
            ],
            benefits: {
                cost: "30% reduction in processing delays",
                quality: "Proactive bottleneck resolution improving customer experience"
            }
        },
        {
            id: "rbi-audit",
            title: "RBI & Audit Assistant",
            icon: Gavel,
            problem: "Preparing for regulatory audits (like the RBI) and internal reviews requires dedicated staff to manually pull, log, and format data to demonstrate compliance across thousands of files.",
            solution: "AI prepares audit-ready logs and automated responses to auditor queries by querying internal systems and formatting data according to regulatory requirements.",
            capabilities: [
                "Automated audit log preparation",
                "Regulatory data formatting",
                "Auditor query response generation",
                "Compliance evidence compilation",
                "Cross-system data aggregation"
            ],
            benefits: {
                cost: "60% faster audit preparation",
                quality: "Reduced operational risk and compliance costs"
            }
        },
        {
            id: "reconciliation",
            title: "Reconciliation Assistant",
            icon: AccountBalance,
            problem: "Matching transactions—disbursements made, customer repayments received, and corresponding bank credits—is a high-volume, repetitive task that requires meticulous manual checking, leading to potential leakage.",
            solution: "AI matches disbursements, repayments, and bank credits across multiple systems and ledgers. The AI identifies and flags any discrepancies or mismatches for manual review.",
            capabilities: [
                "Multi-system transaction matching",
                "Disbursement-repayment reconciliation",
                "Bank credit verification",
                "Discrepancy detection and flagging",
                "Daily and monthly closing automation"
            ],
            benefits: {
                cost: "70% reduction in reconciliation time",
                quality: "Reduced financial leakage and error risk"
            }
        },
        {
            id: "construction-tracker",
            title: "Construction Progress Tracker",
            icon: Construction,
            problem: "For construction loans, accurately determining the stage of progress (e.g., foundation, slab) to approve the next loan tranche relies on subjective, sporadic site visits and manual reports by field officers.",
            solution: "AI analyzes site images and videos uploaded by field officers/customers to objectively identify the construction stage (like foundation, plinth, slab, brickwork, finishing) using computer vision models.",
            capabilities: [
                "AI-powered image/video analysis",
                "Construction stage identification",
                "Progress percentage calculation",
                "Fraud detection in site photos",
                "Geotagging verification"
            ],
            benefits: {
                cost: "80% faster site verification",
                quality: "Objective progress visibility reducing fraudulent disbursements"
            }
        },
        {
            id: "tranche-eligibility",
            title: "Tranche Eligibility Assistant",
            icon: CheckCircle,
            problem: "Once the construction stage is verified, an employee must manually compare the detected stage against the approved disbursement milestones in the loan agreement to confirm eligibility for the next tranche.",
            solution: "AI maps the detected construction stage against approved disbursement milestones in the system and highlights readiness for release based on pre-defined rules.",
            capabilities: [
                "Milestone mapping automation",
                "Eligibility rule validation",
                "Tranche readiness assessment",
                "Covenant compliance checking",
                "Release recommendation generation"
            ],
            benefits: {
                cost: "60% faster tranche release",
                quality: "Improved compliance with loan covenants"
            }
        },
        {
            id: "progress-report",
            title: "Progress Report Generator",
            icon: Summarize,
            problem: "Generating official inspection and progress reports after a site visit is a manual documentation task that consumes field officer time and often lacks consistent formatting and evidence.",
            solution: "AI auto-generates inspection and progress reports by combining the AI-verified stage, field officer's voice notes, and geotagged image evidence into a consistent, finalized PDF document.",
            capabilities: [
                "Automated report generation",
                "Voice note transcription and integration",
                "Geotagged image embedding",
                "Consistent PDF formatting",
                "Digital signature integration"
            ],
            benefits: {
                cost: "70% reduction in documentation time",
                quality: "Consistent, high-quality documentation for every site visit"
            }
        },
        {
            id: "voice-collection",
            title: "Voice-based Collection Notes",
            icon: Mic,
            problem: "Field collection officers spend valuable time after a client visit manually writing up or typing their notes, client commitment details, and next steps into the collection system.",
            solution: "AI converts spoken field notes into structured entries mapped to the collection system fields. The officer can speak naturally, and the AI extracts key details (e.g., 'client promised payment by 15th').",
            capabilities: [
                "Voice-to-text transcription",
                "Commitment detail extraction",
                "Payment promise date identification",
                "Collection system field mapping",
                "Multi-language support"
            ],
            benefits: {
                cost: "50% faster field updates",
                quality: "More detailed, accurate collection notes"
            }
        },
        {
            id: "emi-query",
            title: "EMI & Account Query Assistant",
            icon: SmartToy,
            problem: "The customer service team's call volume is dominated by high-frequency, low-complexity queries about EMI dates, account balances, and the No Objection Certificate (NOC) process.",
            solution: "AI handles balance, EMI dates, NOC process requests, and common account queries via automated chat and voice channels (IVR). The AI can access and convey sensitive account data securely.",
            capabilities: [
                "EMI date and amount inquiries",
                "Account balance queries",
                "NOC process guidance",
                "Payment history retrieval",
                "Multi-channel support (chat, voice, IVR)"
            ],
            benefits: {
                cost: "50% reduction in call center volume",
                quality: "24/7 self-service available to customers"
            }
        }
    ],
    regulatoryMapping: [
        {
            regulation: "RBI Guidelines for NBFCs",
            expectation: "Fair lending practices, disclosure requirements, and customer protection standards.",
            alignment: "Transparent AI decision-making, automated disclosure generation, and complaint tracking."
        },
        {
            regulation: "RBI KYC/AML Norms",
            expectation: "Customer due diligence, ongoing monitoring, and suspicious transaction reporting.",
            alignment: "AI-powered KYC verification, transaction monitoring, and automated STR generation."
        },
        {
            regulation: "Data Protection (DPDP Act)",
            expectation: "Personal data protection, consent management, and data subject rights.",
            alignment: "Built-in consent management, data encryption, and automated data request handling."
        },
        {
            regulation: "SOC 2 Type II",
            expectation: "Security, availability, processing integrity, confidentiality, and privacy controls.",
            alignment: "Enterprise-grade security, continuous monitoring, and documented audit trails."
        }
    ],
    caseStudies: [
        {
            title: "Loan Origination Transformation",
            scenario: "Mid-sized NBFC processing 5,000+ loan applications monthly with 7-day average TAT.",
            solution: "AI-powered document processing, credit memo generation, and automated underwriting assistance.",
            outcome: "TAT reduced to 2 days, 80% reduction in manual data entry, 30% improvement in credit quality."
        },
        {
            title: "Construction Finance Automation",
            scenario: "Housing finance company struggling with subjective site inspections and delayed tranche releases.",
            solution: "Computer vision for construction progress tracking with automated tranche eligibility assessment.",
            outcome: "Site verification time reduced by 80%, fraudulent disbursement attempts detected, 60% faster tranche release."
        },
        {
            title: "Collection Efficiency Improvement",
            scenario: "NBFC with 100+ field collection officers facing documentation delays and inconsistent follow-ups.",
            solution: "Voice-based collection notes with AI-powered commitment tracking and automated reminders.",
            outcome: "50% faster field updates, 20% improvement in collection efficiency, better customer communication."
        }
    ]
};
