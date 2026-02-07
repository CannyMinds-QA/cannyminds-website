import Link from "next/link";
import {
    PersonSearch,
    Translate,
    Mic,
    Receipt,
    Assignment,
    ChatBubble,
    Description,
    SmartToy,
    Schedule,
    Analytics,
    LocalHospital,
    Speed,
    Security,
} from "@mui/icons-material";

export const healthcareContent = {
    hero: {
        title: "Gen AI for Healthcare & Hospitals",
        subtitle: "Transform Patient Care with Intelligent Automation",
        description: (
            <>
                Streamline patient registration, automate billing workflows, enhance clinical coding accuracy, and improve TPA communication with enterprise-grade AI solutions designed for <Link href="/solutions/product/document-management" className="text-blue-600 hover:underline">HIPAA compliance</Link>.
            </>
        ),
    },
    useCases: [
        {
            id: "patient-registration",
            title: "Patient Registration Assistant",
            icon: PersonSearch,
            problem: "Manual patient registration is slow and error-prone, requiring staff to transcribe data from various unstructured documents like Aadhaar, insurance cards, and paper forms into the Hospital Information System (HIS). This leads to long queues and patient frustration.",
            solution: "Converts unstructured data from Aadhaar, insurance cards, referral letters, and forms into structured HIS fields automatically. The AI extracts relevant information (Name, DOB, Policy Number, referring physician) and validates it instantly.",
            capabilities: [
                "AI-based extraction from Aadhaar, PAN, insurance cards",
                "Auto-population of HIS/EMR fields",
                "Real-time data validation and error detection",
                "Multi-document batch processing",
                "Integration with existing Hospital Information Systems"
            ],
            benefits: {
                cost: "5-minute process reduced to under 1 minute",
                quality: "Improved data accuracy, preventing downstream billing errors"
            }
        },
        {
            id: "multilingual-helpdesk",
            title: "Multilingual Patient Helpdesk",
            icon: Translate,
            problem: "Hospitals serving diverse populations struggle to provide consistent, real-time support for common non-clinical inquiries across various local languages, leading to communication gaps and reliance on limited staff.",
            solution: "Instantly answers FAQs on OPD timings, doctors' availability, room types, and the billing process in local languages via chat or voice. The AI is trained on hospital-specific policies and data.",
            capabilities: [
                "Support for 10+ Indian regional languages",
                "Voice and text-based interactions",
                "Hospital-specific knowledge base",
                "24/7 automated response system",
                "Seamless escalation to human agents"
            ],
            benefits: {
                cost: "Reduced workload on front office staff for repetitive queries",
                quality: "Enhanced accessibility for non-English or regional language speakers"
            }
        },
        {
            id: "voice-ward-rounds",
            title: "Voice-based Ward Rounds Notes",
            icon: Mic,
            problem: "Nurses and ward staff spend significant time manually writing or typing non-clinical observations (e.g., patient mood, meal intake, visitor logs) and handover notes, diverting time from direct patient care.",
            solution: "Nurses and ward staff dictate non-clinical observations and handover notes using voice, and the AI transcribes, summarizes, and structures the information directly into the electronic health record (EHR) or handover system.",
            capabilities: [
                "Real-time voice-to-text transcription",
                "Automatic summarization of observations",
                "Structured data entry into EHR",
                "Shift handover report generation",
                "Multi-accent and medical terminology support"
            ],
            benefits: {
                cost: "50% reduction in documentation time",
                quality: "More time for direct patient care and accurate handover"
            }
        },
        {
            id: "medical-billing",
            title: "Automated Medical Billing",
            icon: Receipt,
            problem: "Complex medical billing with high claim rejection rates due to coding errors, missing documentation, and delayed submissions. Manual processes lead to revenue leakage and delayed reimbursements.",
            solution: "End-to-end billing automation from charge capture to claim submission. AI validates CPT/ICD codes, identifies missing documentation, and auto-generates clean claims that pass payer edits on first submission.",
            capabilities: [
                "Automated charge capture from clinical notes",
                "CPT/ICD code validation and suggestion",
                "Missing documentation alerts",
                "Real-time eligibility verification",
                "Denial prediction and prevention"
            ],
            benefits: {
                cost: "40% reduction in claim denials",
                quality: "First-pass claim acceptance rate above 95%"
            }
        },
        {
            id: "clinical-coding",
            title: "Clinical Coding Assistant",
            icon: Assignment,
            problem: "Inconsistent clinical coding affecting reimbursement accuracy. Manual coding is time-consuming and prone to errors, leading to claim rejections and compliance issues.",
            solution: "Generative AI analyzes clinical documentation to suggest accurate ICD-10, CPT, and HCPCS codes. Natural language processing extracts diagnoses, procedures, and modifiers while flagging coding discrepancies for coder review.",
            capabilities: [
                "AI-powered code suggestion from clinical notes",
                "Automatic extraction of diagnoses and procedures",
                "Modifier recommendation engine",
                "Coding discrepancy detection",
                "Continuous learning from coder feedback"
            ],
            benefits: {
                cost: "30% improvement in coding accuracy",
                quality: "Process 200+ charts per coder per day vs. 80 manually"
            }
        },
        {
            id: "tpa-communication",
            title: "TPA Communication Automation",
            icon: ChatBubble,
            problem: "Delayed TPA communication impacting patient care and cash flow. Manual pre-authorization requests, claim status inquiries, and denial appeals are time-consuming and inconsistent.",
            solution: "Intelligent automation of pre-authorization requests, claim status inquiries, and denial appeals. AI generates context-aware correspondence and tracks communication workflows across multiple TPAs.",
            capabilities: [
                "Automated pre-authorization requests",
                "Real-time claim status tracking",
                "AI-generated denial appeal letters",
                "Multi-TPA communication dashboard",
                "Escalation workflow management"
            ],
            benefits: {
                cost: "60% faster pre-authorization turnaround",
                quality: "Handle 1000+ TPA interactions daily without manual intervention"
            }
        },
        {
            id: "medical-records",
            title: "Medical Records Processing",
            icon: Description,
            problem: "Unstructured medical documents (handwritten notes, lab reports, discharge summaries) are difficult to search and analyze. Manual data entry is slow and error-prone.",
            solution: "Extract and structure data from handwritten clinical notes, lab reports, discharge summaries, and referral letters. AI converts unstructured medical documents into searchable, coded clinical data.",
            capabilities: [
                "Handwritten text recognition (HTR)",
                "Lab report data extraction",
                "Discharge summary structuring",
                "Referral letter processing",
                "HIPAA-compliant document handling"
            ],
            benefits: {
                cost: "90% reduction in manual data entry",
                quality: "Digitize 10,000+ pages of medical records per month"
            }
        },
        {
            id: "patient-chatbot",
            title: "Patient Communication AI",
            icon: SmartToy,
            problem: "High call center volume for routine inquiries like appointment scheduling, prescription refills, and test results. Patients expect 24/7 support but staff availability is limited.",
            solution: "Deploy intelligent chatbots for appointment scheduling, prescription refill requests, and clinical inquiries. AI assistants provide 24/7 patient support while escalating complex issues to clinical staff.",
            capabilities: [
                "Appointment scheduling and rescheduling",
                "Prescription refill requests",
                "Test result notifications",
                "Personalized health reminders",
                "Seamless handoff to human agents"
            ],
            benefits: {
                cost: "50% reduction in call center volume",
                quality: "Automate 70% of routine patient inquiries"
            }
        },
        {
            id: "appointment-optimization",
            title: "Smart Appointment Scheduling",
            icon: Schedule,
            problem: "Inefficient appointment scheduling leads to long wait times, no-shows, and underutilized doctor time slots. Manual scheduling cannot optimize for multiple constraints.",
            solution: "AI-powered scheduling that considers doctor availability, patient preferences, procedure duration, and historical no-show patterns to optimize appointment slots and reduce wait times.",
            capabilities: [
                "Intelligent slot optimization",
                "No-show prediction and overbooking",
                "Automated reminder and confirmation",
                "Wait time prediction",
                "Resource utilization analytics"
            ],
            benefits: {
                cost: "30% reduction in patient no-shows",
                quality: "Improved doctor utilization and patient satisfaction"
            }
        },
        {
            id: "analytics-dashboard",
            title: "Healthcare Analytics Dashboard",
            icon: Analytics,
            problem: "Hospital administrators lack real-time visibility into operational metrics, patient flow, and resource utilization. Manual reporting is delayed and often inaccurate.",
            solution: "AI-powered analytics dashboard that provides real-time insights into patient flow, bed occupancy, staff productivity, and financial performance with predictive forecasting.",
            capabilities: [
                "Real-time patient flow monitoring",
                "Bed occupancy and discharge prediction",
                "Staff productivity analytics",
                "Revenue cycle dashboards",
                "Predictive demand forecasting"
            ],
            benefits: {
                cost: "20% improvement in operational efficiency",
                quality: "Data-driven decision making for hospital administrators"
            }
        }
    ],
    regulatoryMapping: [
        {
            regulation: "HIPAA (Health Insurance Portability and Accountability Act)",
            expectation: "Protection of patient health information (PHI) with access controls and audit trails.",
            alignment: "End-to-end encryption, role-based access, and comprehensive audit logging for all AI interactions."
        },
        {
            regulation: "HITECH Act",
            expectation: "Meaningful use of electronic health records and breach notification requirements.",
            alignment: "Seamless EHR integration, automated compliance reporting, and breach detection capabilities."
        },
        {
            regulation: "SOC 2 Type II",
            expectation: "Security, availability, processing integrity, confidentiality, and privacy controls.",
            alignment: "Annual SOC 2 audits, continuous monitoring, and documented security policies."
        },
        {
            regulation: "NABH (India)",
            expectation: "Quality standards for patient care, documentation, and safety.",
            alignment: "Automated documentation compliance, quality metric tracking, and incident reporting."
        }
    ],
    caseStudies: [
        {
            title: "Patient Registration Transformation",
            scenario: "500-bed multi-specialty hospital faced 15-minute average registration time with frequent data errors.",
            solution: "Gen AI-powered document extraction from Aadhaar, insurance cards, and referral letters with real-time HIS integration.",
            outcome: "Registration time reduced to under 2 minutes, 95% data accuracy, and significant reduction in billing errors."
        },
        {
            title: "Revenue Cycle Optimization",
            scenario: "Hospital experiencing 25% claim denial rate and delayed reimbursements affecting cash flow.",
            solution: "AI-powered billing automation with code validation, denial prediction, and automated TPA communication.",
            outcome: "Claim denial rate reduced to 8%, recovered $1.8M in previously denied claims within first year."
        },
        {
            title: "Multilingual Patient Support",
            scenario: "Regional hospital serving patients speaking 5+ languages with limited multilingual staff.",
            solution: "AI chatbot supporting 10 Indian languages for appointment booking, FAQs, and basic clinical queries.",
            outcome: "70% of patient inquiries handled automatically, improved PSAT scores, and reduced front desk workload."
        }
    ]
};
