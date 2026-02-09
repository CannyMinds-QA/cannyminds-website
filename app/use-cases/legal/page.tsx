
import type { Metadata } from "next";
import UseCasePageLayout, {
    UseCaseChallenge,
    UseCaseItem,
    UseCaseBenefit
} from "@/components/templates/UseCasePageLayout";

export const metadata: Metadata = {
    title: "Legal Firms Use Cases | CannyMinds",
    description: "Explore how CannyMinds ECM secures case management, document control, and compliance for law firms and legal departments.",
    alternates: {
        canonical: "https://cannyminds-website.vercel.app/use-cases/legal",
    },
    keywords: "legal case management software, law firm document management, secure evidence handling, legal workflow automation, court filing software",
    openGraph: {
        title: "Legal Firms Use Cases | CannyMinds",
        description: "Secure, structured, and traceable digital case management for law firms. Ensure client confidentiality and compliance.",
        images: [
            {
                url: "/images/use-cases/legal-og.jpg",
                width: 1200,
                height: 630,
                alt: "Legal professionals managing digital case files",
            },
        ],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "CannyECM Use Cases for Legal Firms",
    "description": "Comprehensive guide on how CannyMinds ECM solutions resolve document management challenges in legal firms.",
    "author": {
        "@type": "Organization",
        "name": "CannyMinds Technology Solutions"
    },
    "publisher": {
        "@type": "Organization",
        "name": "CannyMinds Technology Solutions",
        "logo": {
            "@type": "ImageObject",
            "url": "https://cannyminds-website.vercel.app/logo.png"
        }
    }
};

export default function LegalUseCasePage() {
    const challenges: UseCaseChallenge[] = [
        {
            challenge: "Dispersed case files",
            impact: "Delayed case preparation",
        },
        {
            challenge: "Weak access control",
            impact: "Confidentiality risk",
        },
        {
            challenge: "No version control",
            impact: "Filing incorrect documents",
        },
        {
            challenge: "Manual approvals",
            impact: "Missed legal timelines",
        },
        {
            challenge: "Poor audit trail",
            impact: "Compliance exposure",
        },
        {
            challenge: "Long retention periods",
            impact: "Storage & retrieval issues",
        },
    ];

    const useCases: UseCaseItem[] = [
        {
            title: "1. Case File & Matter Management",
            scenario: "Each legal matter involves hundreds of documents across stages, clients, and courts.",
            cannyEcmUseCase: [
                "Case-wise document repositories",
                "Metadata tagging (Case No., Client, Court, Stage)",
                "Secure role-based access",
                "Complete document history",
            ],
            benefits: [
                "Faster case preparation",
                "No document misplacement",
                "Improved collaboration",
            ],
            image: "/images/use-cases/legal/case-files.jpg",
        },
        {
            title: "2. Contract & Agreement Management",
            scenario: "Contracts go through drafting, review, approval, and execution cycles involving multiple parties.",
            cannyEcmUseCase: [
                "Central contract repository",
                "Controlled versioning",
                "Automated review & approval workflows",
                "Renewal and expiry tracking",
            ],
            benefits: [
                "Reduced legal risk",
                "Faster contract cycles",
                "Clear accountability",
            ],
            image: "/images/use-cases/legal/contracts.jpg",
        },
        {
            title: "3. Court Filing & Evidence Management",
            scenario: "Court filings require accurate, timely, and verified documents to avoid procedural errors.",
            cannyEcmUseCase: [
                "Secure storage of pleadings and evidence",
                "Filing-ready document sets",
                "Version-controlled drafts",
                "Complete filing history",
            ],
            benefits: [
                "Avoid filing errors",
                "Meet court deadlines",
                "Strong evidentiary control",
            ],
            image: "/images/use-cases/legal/court-filing.jpg",
        },
        {
            title: "4. Legal Workflow & Approval Automation",
            scenario: "Legal reviews and sign-offs often rely on emails and manual tracking, causing delays.",
            cannyEcmUseCase: [
                "Workflow-driven reviews and approvals",
                "Escalations and reminders",
                "Clear audit trail of decisions",
            ],
            benefits: [
                "Faster turnaround",
                "Reduced dependency on emails",
                "Transparent approvals",
            ],
            image: "/images/use-cases/legal/workflow.jpg",
        },
        {
            title: "5. Client Communication & Confidential Document Sharing",
            scenario: "Clients require secure access to legal documents without compromising confidentiality.",
            cannyEcmUseCase: [
                "Controlled client access portals",
                "Document-level security",
                "Activity tracking and access logs",
            ],
            benefits: [
                "Enhanced client trust",
                "Secure collaboration",
                "Full visibility on access",
            ],
            image: "/images/use-cases/legal/client-sharing.jpg",
        },
        {
            title: "6. Compliance, Retention & Audit Management",
            scenario: "Legal documents must be retained for long periods and retrievable on demand for audits.",
            cannyEcmUseCase: [
                "Configurable retention policies",
                "Legal hold management",
                "Immutable audit trails",
                "Secure archival",
            ],
            benefits: [
                "Regulatory compliance",
                "Reduced legal exposure",
                "Audit-ready records",
            ],
            image: "/images/use-cases/legal/compliance.jpg",
        },
    ];

    const benefitsData: UseCaseBenefit[] = [
        {
            area: "Case Management",
            value: "Faster and organized handling",
        },
        {
            area: "Confidentiality",
            value: "Strong access control",
        },
        {
            area: "Compliance",
            value: "Audit-ready documentation",
        },
        {
            area: "Productivity",
            value: "Automated workflows",
        },
        {
            area: "Client Trust",
            value: "Secure information sharing",
        },
    ];

    return (
        <UseCasePageLayout
            title="CannyECM – Use Case for Legal Firms"
            industry="Legal Firms"
            heroColor="bg-slate-50"
            subtitle={
                <>
                    Secure Case Management • Document Control • Compliance & Confidentiality
                    <br /><br />
                    CannyECM enables legal firms to manage information securely, efficiently, and with complete traceability.
                </>
            }

            industryContextTitle="Industry Context"
            industryContextContent={
                <>
                    <p>
                        Law firms and legal departments handle highly confidential, time-sensitive, and evidence-critical documents across multiple cases, clients, and jurisdictions.
                    </p>
                    <p className="font-bold mt-4 mb-2">Typical documents include:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>Case files and pleadings</li>
                        <li>Contracts, agreements, and deeds</li>
                        <li>Legal opinions and research notes</li>
                        <li>Court filings and evidence documents</li>
                        <li>Client correspondence and notices</li>
                        <li>Compliance and regulatory records</li>
                    </ul>
                    <p className="font-bold mt-4 mb-2">Manual or poorly controlled document handling leads to:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>Missed deadlines & court dates</li>
                        <li>Confidentiality breaches</li>
                        <li>Difficulty during audits or litigation</li>
                        <li>Inefficient case management</li>
                    </ul>
                </>
            }

            challengesTitle="Key Business Challenges"
            challenges={challenges}

            solutionOverviewTitle="CannyECM Solution Overview"
            solutionOverviewContent={
                <>
                    <p>
                        CannyECM provides a centralized legal document repository with role-based access control, case-wise document structuring, workflow automation, and complete audit trails & retention management.
                    </p>
                    <p className="mt-4 font-bold">Designed for:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Law firms</li>
                        <li>Corporate legal departments</li>
                        <li>Litigation & advisory practices</li>
                        <li>Compliance & regulatory teams</li>
                    </ul>
                </>
            }

            useCasesTitle="Key Legal Firm Use Cases"
            useCases={useCases}

            securityTitle="Security & Compliance Alignment"
            securityContent={
                <>
                    <p className="mb-6">
                        CannyECM supports role-based access control, confidentiality enforcement, tamper-proof audit trails, and secure document storage.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-left">
                        <div className="bg-slate-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Bar Council</h4>
                            <p className="text-sm text-slate-300">Aligned with legal compliance expectations.</p>
                        </div>
                        <div className="bg-slate-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">ISO 27001</h4>
                            <p className="text-sm text-slate-300">Information Security Management compliance.</p>
                        </div>
                        <div className="bg-slate-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">GDPR / DPDP</h4>
                            <p className="text-sm text-slate-300">Data protection law compliance where applicable.</p>
                        </div>
                        <div className="bg-slate-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Confidentiality</h4>
                            <p className="text-sm text-slate-300">Strict adherence to client confidentiality requirements.</p>
                        </div>
                    </div>
                </>
            }

            benefitsTitle="Business Benefits"
            benefits={benefitsData}

            conclusionTitle="Conclusion"
            conclusionContent={
                <>
                    CannyECM empowers legal firms to move from fragmented, manual document handling to secure, structured, and traceable digital case management. By centralizing documents, automating workflows, and enforcing confidentiality, CannyECM enhances legal accuracy, efficiency, and client confidence.
                </>
            }

            jsonLd={jsonLd}
        />
    );
}
