
import type { Metadata } from "next";
import UseCasePageLayout, {
    UseCaseChallenge,
    UseCaseItem,
    UseCaseBenefit
} from "@/components/templates/UseCasePageLayout";

export const metadata: Metadata = {
    title: "BFSI Use Cases | CannyMinds",
    description: "Explore how CannyMinds ECM secures document management and automates workflows for Banking, Finance, and Insurance sectors.",
    alternates: {
        canonical: "https://www.cannymindstech.com/use-cases/bfsi",
    },
    keywords: "bfsi document management, banking workflow automation, insurance claim processing software, kyc document management, financial audit compliance",
    openGraph: {
        title: "BFSI Use Cases | CannyMinds",
        description: "Secure, automated, and compliant digital workflows for Banks, NBFCs, and Insurance companies.",
        images: [
            {
                url: "/images/use-cases/bfsi-og.jpg",
                width: 1200,
                height: 630,
                alt: "Modern banking operations with digital document management",
            },
        ],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "CannyECM Use Cases for Banking, Finance & Insurance (BFSI)",
    "description": "Detailed guide on how CannyMinds ECM solutions resolve document management challenges in the BFSI sector.",
    "author": {
        "@type": "Organization",
        "name": "CannyMinds Technology Solutions"
    },
    "publisher": {
        "@type": "Organization",
        "name": "CannyMinds Technology Solutions",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.cannymindstech.com/logo.png"
        }
    }
};

export default function BFSIUseCasePage() {
    const challenges: UseCaseChallenge[] = [
        {
            challenge: "Paper-based & siloed records",
            impact: "Slow customer processing",
        },
        {
            challenge: "Manual approvals",
            impact: "Loan & claim delays",
        },
        {
            challenge: "Weak version control",
            impact: "Regulatory violations",
        },
        {
            challenge: "Limited audit trails",
            impact: "Audit failures",
        },
        {
            challenge: "Data security risks",
            impact: "Customer data breaches",
        },
        {
            challenge: "Compliance pressure",
            impact: "Penalties & reputational risk",
        },
    ];

    const useCases: UseCaseItem[] = [
        {
            title: "1. Customer Onboarding & KYC Document Management",
            scenario: "Customer onboarding requires collecting, verifying, and retaining multiple documents efficiently.",
            cannyEcmUseCase: [
                "Centralized storage of KYC documents",
                "Metadata-based indexing (Customer ID, Account No.)",
                "Automated verification & approval workflows",
                "Secure access with audit trails",
            ],
            benefits: [
                "Faster onboarding",
                "Reduced manual errors",
                "Regulatory compliance",
            ],
            image: "/images/use-cases/bfsi/kyc.jpg",
        },
        {
            title: "2. Loan, Credit & Mortgage Document Management",
            scenario: "Loan processing involves multiple reviews and document validations that can delay approvals.",
            cannyEcmUseCase: [
                "Central loan document repository",
                "Automated approval workflows",
                "Version-controlled sanction letters",
                "End-to-end traceability",
            ],
            benefits: [
                "Faster loan approvals",
                "Reduced processing costs",
                "Transparent decision-making",
            ],
            image: "/images/use-cases/bfsi/loan-processing.jpg",
        },
        {
            title: "3. Insurance Policy & Claims Management",
            scenario: "Insurance policies and key claims require strict documentation and clear auditability.",
            cannyEcmUseCase: [
                "Digital policy & claim document storage",
                "Workflow-based claim processing",
                "Secure customer document access",
                "Complete claim history",
            ],
            benefits: [
                "Faster claim settlements",
                "Reduced fraud risk",
                "Improved customer satisfaction",
            ],
            image: "/images/use-cases/bfsi/claims.jpg",
        },
        {
            title: "4. Compliance, Audit & Regulatory Document Management",
            scenario: "Regulators demand accurate, timely, and traceable documentation to avoid penalties.",
            cannyEcmUseCase: [
                "Centralized compliance repository",
                "Automated review & approval cycles",
                "Immutable audit trails",
                "Controlled document retention",
            ],
            benefits: [
                "Always audit-ready",
                "Reduced compliance risk",
                "Faster regulatory reporting",
            ],
            image: "/images/use-cases/bfsi/compliance.jpg",
        },
        {
            title: "5. Risk, Policy & SOP Management",
            scenario: "Banks must ensure all employees follow the latest policies and SOPs to maintain governance.",
            cannyEcmUseCase: [
                "Central policy & SOP repository",
                "Version control with effective dates",
                "Controlled access & distribution",
                "Acknowledgement tracking",
            ],
            benefits: [
                "Strong governance",
                "Reduced operational risk",
                "Consistent compliance",
            ],
            image: "/images/use-cases/bfsi/risk-policy.jpg",
        },
        {
            title: "6. Vendor, Contract & Legal Document Management",
            scenario: "Vendor contracts and legal documents are critical assets that must be retained long-term.",
            cannyEcmUseCase: [
                "Central contract repository",
                "Approval and renewal workflows",
                "Secure long-term retention",
                "Quick retrieval during disputes",
            ],
            benefits: [
                "Improved contract governance",
                "Reduced legal risk",
                "Better vendor management",
            ],
            image: "/images/use-cases/bfsi/legal-contracts.jpg",
        },
    ];

    const benefitsData: UseCaseBenefit[] = [
        {
            area: "Customer Experience",
            value: "Faster service delivery",
        },
        {
            area: "Compliance",
            value: "Audit-ready documentation",
        },
        {
            area: "Security",
            value: "Protected customer data",
        },
        {
            area: "Efficiency",
            value: "Reduced manual effort",
        },
        {
            area: "Governance",
            value: "End-to-end traceability",
        },
    ];

    return (
        <UseCasePageLayout
            title="CannyECM – Use Case for BFSI"
            industry="Banking, Finance & Insurance"
            heroColor="bg-blue-50"
            subtitle={
                <>
                    Secure Document Management • Workflow Automation • Regulatory Compliance
                    <br /><br />
                    CannyECM enables BFSI organizations to manage information securely, efficiently, and compliantly.
                </>
            }

            industryContextTitle="Industry Context"
            industryContextContent={
                <>
                    <p>
                        Banks, financial institutions, and insurance companies manage highly sensitive, regulated, and high-volume documents across customer onboarding, operations, risk, compliance, and audits.
                    </p>
                    <p className="font-bold mt-4 mb-2">Typical documents include:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>Customer KYC & onboarding records</li>
                        <li>Loan, credit & mortgage documents</li>
                        <li>Insurance policies, claims & endorsements</li>
                        <li>Transaction records & statements</li>
                        <li>Compliance, audit & regulatory reports</li>
                        <li>Internal policies, SOPs & risk documents</li>
                    </ul>
                    <p className="font-bold mt-4 mb-2">Manual or fragmented document handling results in:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>Slow customer service and processing</li>
                        <li>Regulatory non-compliance risks</li>
                        <li>High operational risk</li>
                        <li>Poor audit readiness</li>
                    </ul>
                </>
            }

            challengesTitle="Key Business Challenges"
            challenges={challenges}

            solutionOverviewTitle="CannyECM Solution Overview"
            solutionOverviewContent={
                <>
                    <p>
                        CannyECM provides a centralized document repository with role-based secure access, comprehensive workflow automation, full audit trails, and robust document lifecycle & retention management.
                    </p>
                    <p className="mt-4 font-bold">Designed for:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Banks & NBFCs</li>
                        <li>Insurance companies</li>
                        <li>Financial institutions</li>
                        <li>FinTech organizations</li>
                    </ul>
                </>
            }

            useCasesTitle="Key BFSI Use Cases"
            useCases={useCases}

            securityTitle="Security & Compliance Alignment"
            securityContent={
                <>
                    <p className="mb-6">
                        CannyECM supports role-based access control, data encryption & secure storage, complete audit trails, and electronic record integrity.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-left">
                        <div className="bg-blue-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">RBI / IRDAI</h4>
                            <p className="text-sm text-blue-100">Meets documentation expectations for regulatory bodies.</p>
                        </div>
                        <div className="bg-blue-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">ISO 27001</h4>
                            <p className="text-sm text-blue-100">Adheres to international information security standards.</p>
                        </div>
                        <div className="bg-blue-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">ISO 22301</h4>
                            <p className="text-sm text-blue-100">Supports business continuity management systems.</p>
                        </div>
                        <div className="bg-blue-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">GDPR</h4>
                            <p className="text-sm text-blue-100">Compliant with data protection regulations where applicable.</p>
                        </div>
                    </div>
                </>
            }

            benefitsTitle="Business Benefits"
            benefits={benefitsData}

            conclusionTitle="Conclusion"
            conclusionContent={
                <>
                    CannyECM enables BFSI organizations to transform document-heavy, high-risk processes into secure, automated, and compliant digital workflows. By centralizing information, automating approvals, and enforcing governance, CannyECM improves customer trust, operational efficiency, and regulatory compliance across banking, finance, and insurance operations.
                </>
            }

            jsonLd={jsonLd}
        />
    );
}
