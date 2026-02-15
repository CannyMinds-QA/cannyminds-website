
import Link from "next/link";
import {
    SupportAgent,
    RecordVoiceOver,
    Campaign,
    Architecture,
    Security,
    Timeline,
    Gavel,
    Description,
    Receipt,
    School,
} from "@mui/icons-material";

export const realEstateContent = {
    hero: {
        title: "Gen AI for Real Estate & Construction",
        subtitle: "Build Smarter, Sell Faster, Operate Better",
        description: (
            <>
                Transform your real estate operations with AI-powered lead qualification, automated listings, intelligent site monitoring, and <Link href="/product/enterprise-content-management" className="text-blue-600 hover:underline">smart contract management</Link> that delivers faster sales cycles and reduced operational costs.
            </>
        ),
    },
    useCases: [
        {
            id: "ai-concierge",
            title: "AI Concierge / Multilingual Chatbot",
            icon: SupportAgent,
            problem: "Real estate inquiries come 24/7 across multiple channels and languages. Manual handling leads to missed leads, delayed responses, and inconsistent customer experience, especially outside business hours.",
            solution: "An intelligent real estate assistant that delivers real-time, multilingual engagement across web, WhatsApp, and voice—managing property queries, visit bookings, and financing details anytime, anywhere.",
            image: "/images/ai-Solution/multilingual chatbot.jpg",

            capabilities: [
                "24x7 multilingual support across time zones",
                "Omnichannel integration (WhatsApp, web, voice)",
                "Automated lead handling and site visit booking",
                "Financing and payment query resolution",
                "Seamless CRM integration"
            ],
            benefits: {
                cost: "60% reduction in operational costs",
                quality: "Improved response time and customer satisfaction"
            },
        },
        {
            id: "voice-lead-qualification",
            title: "Voice AI for Lead Qualification",
            icon: RecordVoiceOver,
            problem: "Sales teams waste significant time calling and qualifying leads manually. Many inquiries are low-intent or unqualified, reducing overall sales efficiency and conversion rates.",
            solution: "An advanced Voice AI system that automates calls to identify and qualify genuine leads, filtering out low-intent inquiries. It connects verified prospects to sales teams, boosting efficiency and conversion rates through natural voice interactions.",
            capabilities: [
                "Automated voice-based lead qualification",
                "Real-time inbound and outbound call handling",
                "Intent assessment and scoring",
                "CRM integration and status updates",
                "Handoff to human agents for hot leads"
            ],
            benefits: {
                cost: "70% reduction in qualification time",
                quality: "Sales teams focus only on verified, high-potential prospects"
            },
            image: "/images/ai-Solution/voice.png"
        },
        {
            id: "listing-generator",
            title: "Automated Listing & Ad Copy Generator",
            icon: Campaign,
            problem: "Creating property listings, ad captions, and marketing visuals is time-consuming and often inconsistent. Manual content creation delays campaign launches and reduces marketing effectiveness.",
            solution: "AI tool that auto-generates SEO-optimized property listings, ad captions, and visuals. Enhances marketing efficiency with consistent, high-quality content across platforms.",
            capabilities: [
                "SEO and LLM-optimized listings",
                "Automated property descriptions and headlines",
                "AI-generated visuals and banners",
                "Multi-platform content formatting",
                "Brand voice consistency"
            ],
            benefits: {
                cost: "80% faster time-to-market",
                quality: "Higher search rankings and qualified lead attraction"
            },
            image: "/images/ai-Solution/automated-listing.jpg"
        },
        {
            id: "blueprint-boq",
            title: "Blueprint to BOQ / Material Estimator",
            icon: Architecture,
            problem: "Extracting material quantities and cost estimates from architectural drawings is manual, error-prone, and time-consuming. This leads to inaccurate bids, planning delays, and cost overruns.",
            solution: "AI-driven system that analyzes architectural drawings or CAD files to extract material quantities and cost estimates. Helps project teams generate accurate BOQs instantly, reducing manual effort and planning delays.",
            capabilities: [
                "Automated extraction from blueprints/CAD files",
                "Real-time material and cost breakdowns",
                "Dimension and quantity identification",
                "Project management system integration",
                "Bid accuracy improvement"
            ],
            benefits: {
                cost: "90% reduction in estimation time",
                quality: "Improved bid accuracy and reduced cost overruns"
            },
            image: "/images/ai-Solution/blueprint.jpg"
        },
        {
            id: "site-safety-monitor",
            title: "AI Site Safety Monitor (Vision AI)",
            icon: Security,
            problem: "Construction sites face constant safety risks. Manual monitoring is inconsistent and cannot cover all areas 24/7, leading to accidents, compliance violations, and liability issues.",
            solution: "Vision AI system that continuously monitors CCTV feeds to detect safety violations in real time. Prevents accidents and enforces compliance by alerting supervisors instantly on risky behavior or unauthorized access.",
            capabilities: [
                "Real-time PPE violation detection",
                "Unsafe movement and zone breach alerts",
                "Automated supervisor notifications",
                "Incident logging with video snippets",
                "Compliance tracking and reporting"
            ],
            benefits: {
                cost: "75% reduction in on-site accidents",
                quality: "Improved workplace safety and compliance"
            },
            image: "/images/ai-Solution/AI-site.jpg"
        },
        {
            id: "construction-progress",
            title: "Construction Progress Tracker",
            icon: Timeline,
            problem: "Tracking construction progress manually through site visits is time-consuming and subjective. Delays are often discovered too late, leading to cost overruns and missed deadlines.",
            solution: "An intelligent vision-based system that turns drone and site visuals into live progress insights. It automatically benchmarks on-ground construction status against project timelines, revealing delays before they become costly.",
            capabilities: [
                "Computer vision progress analysis",
                "Timeline deviation alerts",
                "Interactive progress dashboards",
                "Milestone comparison and tracking",
                "Drone and camera image processing"
            ],
            benefits: {
                cost: "Early delay detection saving project costs",
                quality: "Proactive project control and execution efficiency"
            },
            image: "/images/ai-Solution/construction.jpg"
        },
        {
            id: "legal-document-analyzer",
            title: "Legal Document Analyzer",
            icon: Gavel,
            problem: "Reviewing lease deeds, sale agreements, and NDAs is time-consuming and requires specialized legal expertise. Important clauses, risks, or compliance issues can be missed in lengthy contracts.",
            solution: "AI-powered legal assistant that reads complex documents like lease deeds, sale agreements, and NDAs in seconds. It extracts key clauses, obligations, and potential risks—transforming lengthy contracts into clear, actionable summaries.",
            capabilities: [
                "Automated clause extraction",
                "Smart document summarization",
                "Risk and compliance highlighting",
                "Party and timeline identification",
                "Missing clause detection"
            ],
            benefits: {
                cost: "85% reduction in legal review time",
                quality: "Reduced risk from missed clauses or unfavorable terms"
            },
            image: "/images/ai-Solution/legal-document.png"
        },
        {
            id: "contract-lifecycle",
            title: "Contract Lifecycle Management Agent",
            icon: Description,
            problem: "Managing contracts across multiple properties, vendors, and tenants is complex. Missed renewals, lapsed SLAs, and overlooked obligations lead to revenue loss and compliance risks.",
            solution: "A proactive agent that manages contracts end-to-end—tracking expiries, renewals, SLAs, and obligations automatically. It triggers alerts, routes approvals, and runs follow-ups so nothing lapses and compliance stays visible.",
            capabilities: [
                "Automated renewal and expiry alerts",
                "SLA and obligation monitoring",
                "Workflow automation for approvals",
                "Escalation rules and approval history",
                "Audit trail and compliance reporting"
            ],
            benefits: {
                cost: "Zero missed renewals or expirations",
                quality: "Complete compliance visibility and control"
            },
            image: "/images/ai-Solution/contract-lifecycle.jpg"
        },
        {
            id: "invoice-processing",
            title: "Invoice & Payment Processing Agent",
            icon: Receipt,
            problem: "Validating invoices against purchase orders, BOQs, and contracts is manual and error-prone. Mismatches lead to payment delays, vendor disputes, and financial leakage.",
            solution: "An AI-powered finance assistant that reads, validates, and reconciles invoices with purchase orders and BOQs. It flags mismatches, streamlines approvals, and ensures faster, error-free payment cycles.",
            capabilities: [
                "Automated invoice data extraction",
                "PO, BOQ, and contract cross-checking",
                "Discrepancy detection and flagging",
                "Approval workflow automation",
                "Payment scheduling integration"
            ],
            benefits: {
                cost: "70% faster payment processing",
                quality: "Reduced errors and accelerated vendor payments"
            },
            image: "/images/ai-Solution/invoice&payment.jpg"
        },
        {
            id: "employee-training-bot",
            title: "AI Employees Training Bot",
            icon: School,
            problem: "Employees spend significant time searching for policies, regulations, and project data across multiple systems. Inconsistent answers and delayed information access reduce productivity.",
            solution: "An intelligent internal assistant that instantly helps employees with client queries on policies, regulations, documentation, and project data. It centralizes institutional knowledge, ensuring fast, consistent, and reliable information access across teams.",
            capabilities: [
                "Centralized knowledge access",
                "Natural language querying",
                "Real-time document sync",
                "Policy and regulation lookup",
                "Project data retrieval"
            ],
            benefits: {
                cost: "50% reduction in lookup time",
                quality: "Instant, accurate answers improving productivity"
            },
            image: "/images/ai-Solution/AI-employees.png"
        }
    ],
    regulatoryMapping: [
        {
            regulation: "RERA (Real Estate Regulatory Authority)",
            expectation: "Transparency, project registration, and buyer protection in real estate transactions.",
            alignment: "Automated compliance tracking, document management, and transparent reporting."
        },
        {
            regulation: "Construction Safety Standards (OSHA/Local)",
            expectation: "Workplace safety, PPE compliance, and incident reporting requirements.",
            alignment: "Vision AI safety monitoring, automated incident logging, and compliance reporting."
        },
        {
            regulation: "Data Protection (GDPR/DPDP Act)",
            expectation: "Personal data protection, consent management, and data subject rights.",
            alignment: "Privacy-first AI design, secure data handling, and consent tracking."
        },
        {
            regulation: "Anti-Money Laundering (AML)",
            expectation: "Customer due diligence, transaction monitoring, and suspicious activity reporting.",
            alignment: "AI-powered KYC verification, transaction monitoring, and automated STR generation."
        }
    ],
    caseStudies: [
        {
            title: "Lead Qualification Transformation",
            scenario: "Large real estate developer receiving 5,000+ monthly inquiries with 15% qualification rate.",
            solution: "Voice AI for lead qualification with AI Concierge for 24/7 multilingual support.",
            outcome: "Qualification rate improved to 45%, 70% reduction in sales team workload, 24/7 customer engagement."
        },
        {
            title: "Construction Site Safety Excellence",
            scenario: "Multi-project construction company facing frequent safety incidents and compliance issues.",
            solution: "Vision AI safety monitoring with automated progress tracking across all sites.",
            outcome: "75% reduction in safety incidents, real-time compliance visibility, early delay detection."
        },
        {
            title: "Contract & Invoice Automation",
            scenario: "Property management firm struggling with contract renewals and invoice processing delays.",
            solution: "Contract lifecycle management with AI-powered invoice validation and approval automation.",
            outcome: "Zero missed renewals, 70% faster invoice processing, complete audit trail visibility."
        }
    ]
};
