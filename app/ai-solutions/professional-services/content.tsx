
import Link from "next/link";
import {
    Gavel,
    Description,
    AccountBalance,
    Receipt,
    Analytics,
    Assessment,
    PersonSearch,
    SupportAgent,
    RateReview,
} from "@mui/icons-material";

export const professionalServicesContent = {
    hero: {
        title: "Gen AI for Legal, Accounting & HR",
        subtitle: "Automate Expertise, Accelerate Decisions, Ensure Compliance",
        description: (
            <>
                Transform your professional services operations with <Link href="/solutions/product/document-management" className="text-blue-600 hover:underline">AI-powered contract intelligence</Link>, <Link href="/solutions/product/invoice-management" className="text-blue-600 hover:underline">automated financial matching</Link>, intelligent tax assistance, and smart HR automation that delivers faster turnaround and reduced operational costs.
            </>
        ),
    },
    useCases: [
        // I. Legal & Compliance
        {
            id: "contract-analysis",
            title: "Contract Analysis & Knowledge Graph",
            icon: Gavel,
            problem: "Large organizations have thousands of contracts scattered across systems. Manually locating specific clauses, understanding obligations, or assessing cumulative risk is slow and error-prone.",
            solution: "Builds a contract knowledge graph and enables a chat interface for queries such as renewals, active agreements, obligations, and risks. The AI synthesizes information from entire contract libraries to provide instant, specific answers.",
            capabilities: [
                "Contract knowledge graph building",
                "Natural language query interface",
                "Obligation and risk identification",
                "Renewal tracking automation",
                "Cross-contract analysis"
            ],
            benefits: {
                cost: "70% reduction in legal review time",
                quality: "Faster identification of risk exposure across contracts"
            }
        },
        {
            id: "contract-lifecycle",
            title: "Contract Lifecycle Management (CLM)",
            icon: Description,
            problem: "The end-to-end management of a contract—from initial request to drafting, negotiation, approval, and renewal—is often fragmented, causing delays and increasing the risk of non-compliance.",
            solution: "Manages the creation, review, and tracking of contracts. The AI assists in drafting based on templates, flags non-standard clauses during review, and automatically tracks renewal dates and key performance indicators (KPIs).",
            capabilities: [
                "Template-based drafting",
                "Non-standard clause detection",
                "Automated approval workflows",
                "Renewal date tracking",
                "KPI monitoring"
            ],
            benefits: {
                cost: "50% faster contract negotiation",
                quality: "Ensured consistency and reduced non-compliance risk"
            }
        },
        {
            id: "gst-assistant",
            title: "GST Assistant (Tax & Regulatory)",
            icon: AccountBalance,
            problem: "Businesses need instant, accurate advice on complex and constantly evolving tax laws (like GST in India). Relying solely on human consultants is expensive and can be slow.",
            solution: "Answers GST queries using case-based knowledge derived from official circulars, previous rulings, and legal precedents. The AI provides specific, fact-checked answers with references.",
            capabilities: [
                "Case-based knowledge retrieval",
                "Circular and ruling analysis",
                "Legal precedent lookup",
                "Fact-checked answers with references",
                "Real-time tax law updates"
            ],
            benefits: {
                cost: "60% reduction in consultant dependency",
                quality: "Minimized penalties with timely, accurate compliance"
            }
        },
        // II. Accounting & Finance
        {
            id: "three-way-match",
            title: "Three-Way Match Automation",
            icon: Receipt,
            problem: "The crucial accounting process of matching an invoice against the Purchase Order (PO) and the Goods Receipt Note (GRN) is highly manual and resource-intensive, slowing down vendor payments and consuming large amounts of staff time.",
            solution: "Automates invoice, PO, and GRN matching (3-way match). The AI uses document understanding to extract and compare data points across all three documents and automatically flags discrepancies for review.",
            capabilities: [
                "Automated document extraction",
                "Invoice-PO-GRN comparison",
                "Discrepancy detection and flagging",
                "Exception handling workflows",
                "Audit trail generation"
            ],
            benefits: {
                cost: "80% faster vendor payment cycles",
                quality: "Reduced financial error and fraud risk"
            }
        },
        {
            id: "accounting-assistant",
            title: "Accounting Data Assistant",
            icon: Analytics,
            problem: "Finance and business teams often need to ask specific questions about accounting records, transactions, or balance sheet items but lack the technical skills to query the ERP or accounting system directly.",
            solution: "Answers questions about accounting records and transactions in natural language. Users can ask, 'What was the variance in travel expenditure between Q3 and Q4 last year?' and receive a dynamic report and explanation.",
            capabilities: [
                "Natural language query processing",
                "ERP and accounting system integration",
                "Dynamic report generation",
                "Variance analysis and explanation",
                "Transaction lookup and drill-down"
            ],
            benefits: {
                cost: "Democratized financial data access",
                quality: "Faster insights for operational decision-making"
            }
        },
        {
            id: "financial-narratives",
            title: "Automated Financial Statement Narratives",
            icon: Assessment,
            problem: "Drafting the mandatory narrative sections of financial reports (e.g., Management Discussion and Analysis) is time-consuming, requiring staff to translate complex data tables into readable text.",
            solution: "Generates draft narrative text and commentary for quarterly and annual financial statements based on underlying accounting data (e.g., explaining revenue variance, profitability trends).",
            capabilities: [
                "MD&A draft generation",
                "Revenue and variance explanation",
                "Profitability trend analysis",
                "Quarterly and annual report support",
                "Regulatory compliance formatting"
            ],
            benefits: {
                cost: "Accelerated financial reporting cycle",
                quality: "Consistent and accurate reporting narratives"
            }
        },
        // III. Human Resources (HR) & Talent
        {
            id: "candidate-recruitment",
            title: "Automated Candidate Recruitment",
            icon: PersonSearch,
            problem: "Sourcing and initial screening of candidates across multiple channels (LinkedIn, job boards, emails) is a high-volume, manual process that can introduce bias and slow down the hiring pipeline.",
            solution: "Sources, screens, and evaluates candidates using multi-channel intelligence. The AI analyzes resumes, profiles, and initial screening questions to rank candidates based on job requirements and predicted success factors.",
            capabilities: [
                "Multi-channel candidate sourcing",
                "Resume and profile analysis",
                "AI-powered candidate ranking",
                "Bias reduction algorithms",
                "Predictive success scoring"
            ],
            benefits: {
                cost: "60% faster time-to-hire",
                quality: "Improved candidate quality with reduced bias"
            }
        },
        {
            id: "hr-support-chatbot",
            title: "HR Policy & Employee Support Chatbot",
            icon: SupportAgent,
            problem: "HR staff are constantly interrupted by routine employee queries regarding leave policies, benefits, payroll, or IT support, diverting their focus from strategic initiatives.",
            solution: "Provides 24/7 self-service support for employees on HR policies, payroll, and benefits. The chatbot can instantly access and explain complex documents (like the employee handbook or benefits guide) in simple language.",
            capabilities: [
                "24/7 self-service support",
                "Policy document interpretation",
                "Benefits and payroll queries",
                "Leave balance and application",
                "Multi-language support"
            ],
            benefits: {
                cost: "70% reduction in routine HR queries",
                quality: "Faster resolution and higher employee satisfaction"
            }
        },
        {
            id: "performance-review",
            title: "Performance Review Drafting Assistant",
            icon: RateReview,
            problem: "Managers often struggle to write detailed, objective, and constructive performance reviews for their team members, leading to delays and inconsistent feedback quality.",
            solution: "Drafts performance review summaries and feedback points based on project logs, goal tracking data, and manager input (e.g., bullet points on achievements and areas for development).",
            capabilities: [
                "Review summary generation",
                "Goal tracking integration",
                "Achievement highlighting",
                "Development area identification",
                "Consistent feedback formatting"
            ],
            benefits: {
                cost: "50% faster review completion",
                quality: "Improved feedback quality and consistency"
            }
        }
    ],
    regulatoryMapping: [
        {
            regulation: "GDPR (Data Protection)",
            expectation: "Personal data protection for employee and candidate information.",
            alignment: "Privacy-first AI design, consent tracking, and secure data handling for HR processes."
        },
        {
            regulation: "SOX Compliance (Sarbanes-Oxley)",
            expectation: "Internal controls, financial accuracy, and audit trail requirements.",
            alignment: "Automated audit trails, financial validation, and compliance documentation."
        },
        {
            regulation: "Labor Law Compliance",
            expectation: "Adherence to employment regulations, fair hiring practices, and workplace policies.",
            alignment: "Bias reduction in recruitment, policy compliance checking, and documentation."
        },
        {
            regulation: "GST/Tax Regulations",
            expectation: "Accurate tax calculation, filing, and compliance with evolving tax laws.",
            alignment: "Real-time tax law updates, case-based guidance, and compliance tracking."
        }
    ],
    caseStudies: [
        {
            title: "Legal Operations Transformation",
            scenario: "Large enterprise with 10,000+ contracts across multiple systems facing manual review bottlenecks.",
            solution: "Contract knowledge graph with AI-powered CLM and natural language query interface.",
            outcome: "Legal review time reduced by 70%, contract negotiation accelerated by 50%, complete obligation visibility."
        },
        {
            title: "Finance Automation Excellence",
            scenario: "Manufacturing company processing 5,000+ invoices monthly with 3-day average matching time.",
            solution: "AI-powered three-way match automation with accounting data assistant.",
            outcome: "Matching time reduced to 4 hours, 80% automation rate, significant reduction in payment errors."
        },
        {
            title: "HR Digital Transformation",
            scenario: "Technology company with 500+ monthly applications and overwhelmed HR team.",
            solution: "Automated candidate screening with HR policy chatbot and performance review assistant.",
            outcome: "Time-to-hire reduced by 60%, 70% fewer routine HR queries, consistent performance reviews."
        }
    ]
};
