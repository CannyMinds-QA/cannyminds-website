
import Link from "next/link";
import {
    Description,
    Security,
    Layers,
    Assignment,
    Assessment,
    SmartToy,
    Autorenew,
    Gavel,
    Speed,
    VerifiedUser,
} from "@mui/icons-material";

export const insuranceContent = {
    hero: {
        title: "Gen AI for Insurance Operations",
        subtitle: "Automate Claims, Detect Fraud, Accelerate Underwriting",
        description: (
            <>
                Transform insurance operations with <Link href="/solutions/product/document-management" className="text-blue-600 hover:underline">intelligent document processing</Link>, AI-powered claims automation, advanced fraud detection, and data-driven underwriting decisions that improve loss ratios and customer satisfaction.
            </>
        ),
    },
    useCases: [
        {
            id: "claims-automation",
            title: "AI-Driven Claims Automation",
            icon: Description,
            problem: "Manual claims processing is slow, error-prone, and expensive. Adjusters spend hours reading claim forms, medical bills, police reports, and invoices. This leads to delayed settlements, customer dissatisfaction, and high operational costs.",
            solution: "AI automatically reads claim forms, medical bills, police reports, and invoices using AI-OCR. It validates data against policy rules, flags missing documents and discrepancies, and routes claims for straight-through processing (STP) or exception handling.",
            capabilities: [
                "AI-OCR for claim forms, medical bills, police reports",
                "Automatic data validation against policy rules",
                "Missing document detection and alerts",
                "Straight-through processing (STP) for simple claims",
                "Exception routing for complex claims"
            ],
            benefits: {
                cost: "70% faster claims processing",
                quality: "60% of claims eligible for straight-through processing"
            }
        },
        {
            id: "fraud-detection",
            title: "Fraud Detection & Anomaly Detection AI",
            icon: Security,
            problem: "Insurance fraud costs the industry billions annually. Traditional rule-based systems miss sophisticated fraud patterns, while manual investigation is time-consuming and inconsistent. Organized fraud rings and repeat offenders often go undetected.",
            solution: "AI identifies duplicate claims, inflated bills, and abnormal claim patterns. It detects policy misuse and repeat claim behavior, learning continuously from historical fraud cases to improve detection accuracy.",
            capabilities: [
                "Duplicate claim detection across policies",
                "Inflated bill and invoice analysis",
                "Abnormal claim pattern recognition",
                "Repeat offender identification",
                "Organized fraud ring detection"
            ],
            benefits: {
                cost: "95% fraud detection rate",
                quality: "60% reduction in false positives vs rule-based systems"
            }
        },
        {
            id: "intelligent-document-processing",
            title: "Intelligent Document Processing (IDP)",
            icon: Layers,
            problem: "Insurance companies receive thousands of documents daily - policies, endorsements, claims, KYC documents. Manual classification and data entry is slow, expensive, and error-prone, creating backlogs and delays.",
            solution: "AI auto-classifies incoming documents (policy, endorsement, claims, KYC), extracts structured and unstructured data, and eliminates manual indexing and data entry with 99%+ accuracy.",
            capabilities: [
                "Auto-classification of 100+ document types",
                "Structured and unstructured data extraction",
                "Handwritten text recognition",
                "Multi-language document support",
                "Seamless integration with core systems"
            ],
            benefits: {
                cost: "85% reduction in manual data entry",
                quality: "99%+ extraction accuracy across document types"
            }
        },
        {
            id: "policy-issuance",
            title: "Policy Issuance & Endorsement Automation",
            icon: Assignment,
            problem: "Policy issuance and endorsement processing involves repetitive manual steps - data entry, rule validation, document generation, and approvals. This creates bottlenecks, delays customer onboarding, and increases operational costs.",
            solution: "AI auto-generates policies and endorsements from proposal data, validates underwriting rules automatically, and streamlines approvals and issuance for faster customer onboarding.",
            capabilities: [
                "Auto-generation of policy documents",
                "Endorsement processing automation",
                "Underwriting rule validation",
                "Automated approval workflows",
                "Real-time policy issuance"
            ],
            benefits: {
                cost: "80% faster policy issuance",
                quality: "Zero manual errors in policy documents"
            }
        },
        {
            id: "underwriting-assistance",
            title: "AI-Based Underwriting Assistance",
            icon: Assessment,
            problem: "Underwriters spend significant time gathering data, assessing risk, and making pricing decisions. Inconsistent risk assessment leads to adverse selection, while slow turnaround times impact customer experience and sales.",
            solution: "AI pre-assesses risk using historical claims data, suggests premium adjustments and risk flags, and speeds up underwriting decisions with explainable AI recommendations.",
            capabilities: [
                "Historical claims data analysis",
                "Risk scoring and prediction",
                "Premium adjustment suggestions",
                "Risk flag identification",
                "Explainable AI recommendations"
            ],
            benefits: {
                cost: "60% faster underwriting decisions",
                quality: "More accurate risk pricing with AI insights"
            }
        },
        {
            id: "customer-service-automation",
            title: "Customer Service Automation",
            icon: SmartToy,
            problem: "High call center volumes for routine inquiries about policy details, claim status, renewals, and endorsements. Limited availability outside business hours and long wait times lead to customer frustration and churn.",
            solution: "AI-powered chatbots and virtual assistants answer policy, claims, renewal, and endorsement queries. They provide real-time claim status and work 24x7 across channels (web, WhatsApp, mobile app).",
            capabilities: [
                "Policy and coverage inquiries",
                "Real-time claim status updates",
                "Renewal and premium information",
                "Document submission assistance",
                "Multi-channel support (web, WhatsApp, app)"
            ],
            benefits: {
                cost: "50% reduction in call center volume",
                quality: "24x7 availability with instant responses"
            }
        },
        {
            id: "renewal-collection",
            title: "Renewal & Collection Automation",
            icon: Autorenew,
            problem: "Policy renewals and premium collections involve manual follow-ups, leading to missed renewals, lapsed policies, and revenue leakage. Identifying high-risk churn customers is reactive rather than proactive.",
            solution: "AI predicts renewal probability, sends automated reminders and follow-ups, and flags high-risk churn customers for proactive retention interventions.",
            capabilities: [
                "Renewal probability prediction",
                "Automated reminder campaigns",
                "Multi-channel follow-up (SMS, email, WhatsApp)",
                "Churn risk identification",
                "Personalized retention offers"
            ],
            benefits: {
                cost: "15% improvement in renewal rates",
                quality: "Proactive churn prevention with AI predictions"
            }
        },
        {
            id: "compliance-audit",
            title: "Compliance & Audit Automation",
            icon: Gavel,
            problem: "Insurance companies face stringent regulatory requirements. Manual audit trail maintenance, document version control, and compliance monitoring are time-consuming and prone to errors, risking regulatory penalties.",
            solution: "AI automatically maintains audit trails, ensures document version control, and flags non-compliance risks in real-time, enabling proactive regulatory compliance.",
            capabilities: [
                "Automated audit trail maintenance",
                "Document version control",
                "Regulatory compliance monitoring",
                "Non-compliance risk alerts",
                "Audit-ready reporting"
            ],
            benefits: {
                cost: "40% reduction in audit preparation time",
                quality: "Real-time compliance monitoring and risk alerts"
            }
        }
    ],
    regulatoryMapping: [
        {
            regulation: "IRDAI Guidelines (India)",
            expectation: "Policyholder protection, claims settlement timelines, and disclosure requirements.",
            alignment: "Automated claims processing with SLA tracking, transparent communication, and compliance dashboards."
        },
        {
            regulation: "Data Protection (GDPR/DPDP)",
            expectation: "Personal data protection, consent management, and data subject rights.",
            alignment: "Built-in consent management, data encryption, and automated data subject request handling."
        },
        {
            regulation: "Anti-Money Laundering (AML)",
            expectation: "Customer due diligence, suspicious activity monitoring, and reporting.",
            alignment: "AI-powered KYC verification, transaction monitoring, and automated STR generation."
        },
        {
            regulation: "SOC 2 Type II",
            expectation: "Security, availability, processing integrity, confidentiality, and privacy controls.",
            alignment: "Enterprise-grade security, continuous monitoring, and documented audit trails."
        }
    ],
    caseStudies: [
        {
            title: "Claims Processing Transformation",
            scenario: "Large general insurer processing 50,000+ claims monthly with 15-day average settlement time.",
            solution: "AI-powered claims automation with OCR, rule validation, and straight-through processing.",
            outcome: "Settlement time reduced to 3 days, 65% claims processed via STP, $2M annual savings."
        },
        {
            title: "Fraud Detection Excellence",
            scenario: "Health insurer facing $10M annual fraud losses with rule-based detection missing patterns.",
            solution: "ML-based fraud detection with anomaly detection and network analysis.",
            outcome: "95% fraud detection rate, $8M in prevented losses, 60% fewer false positives."
        },
        {
            title: "Customer Service Revolution",
            scenario: "Insurer with 500K+ policyholders facing high call center costs and customer complaints.",
            solution: "AI chatbot across web and WhatsApp handling policy, claims, and renewal queries.",
            outcome: "50% call reduction, 90% customer satisfaction, 24x7 availability achieved."
        }
    ]
};
