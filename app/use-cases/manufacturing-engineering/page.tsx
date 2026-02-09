
import type { Metadata } from "next";
import UseCasePageLayout, {
    UseCaseChallenge,
    UseCaseItem,
    UseCaseBenefit
} from "@/components/templates/UseCasePageLayout";

export const metadata: Metadata = {
    title: "Manufacturing & Engineering Use Cases | CannyMinds",
    description: "See how CannyMinds ECM transforms manufacturing and engineering documentation, from CAD files to quality records.",
    alternates: {
        canonical: "https://www.cannymindstech.com/use-cases/manufacturing-engineering",
    },
    keywords: "engineering document management, manufacturing workflow automation, cad file management, quality assurance software, engineering change management",
    openGraph: {
        title: "Manufacturing & Engineering Use Cases | CannyMinds",
        description: "Centralized, secure, and traceable document management for manufacturing plants and engineering firms.",
        images: [
            {
                url: "/images/use-cases/manufacturing-og.jpg",
                width: 1200,
                height: 630,
                alt: "Engineers reviewing digital blueprints on site",
            },
        ],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "CannyECM Use Cases for Manufacturing & Engineering",
    "description": "Comprehensive guide on how CannyMinds ECM solutions resolve document management challenges in manufacturing and engineering.",
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

export default function ManufacturingUseCasePage() {
    const challenges: UseCaseChallenge[] = [
        {
            challenge: "Paper-based or shared-drive documents",
            impact: "Production delays",
        },
        {
            challenge: "No version control",
            impact: "Use of outdated drawings",
        },
        {
            challenge: "Manual approvals",
            impact: "Engineering change delays",
        },
        {
            challenge: "Poor traceability",
            impact: "Audit failures",
        },
        {
            challenge: "Disconnected departments",
            impact: "Operational inefficiency",
        },
        {
            challenge: "Compliance pressure",
            impact: "Regulatory risk",
        },
    ];

    const useCases: UseCaseItem[] = [
        {
            title: "1. Engineering Drawing & Design Document Management",
            scenario: "Engineering drawings and CAD files undergo frequent revisions and approvals that must be tracked.",
            cannyEcmUseCase: [
                "Central repository for drawings and technical files",
                "Strict version control (latest approved version only)",
                "Approval workflows for design changes",
                "Access control by role and department",
            ],
            benefits: [
                "Eliminate use of obsolete drawings",
                "Faster design approvals",
                "Full traceability of changes",
            ],
            image: "/images/use-cases/manufacturing/engineering-drawings.jpg",
        },
        {
            title: "2. SOP, Work Instruction & Process Document Control",
            scenario: "Operators must follow the latest approved SOPs and work instructions to ensure quality.",
            cannyEcmUseCase: [
                "Central SOP and WI repository",
                "Versioning with effective dates",
                "Automated review and approval cycles",
                "Controlled access on shop floor",
            ],
            benefits: [
                "Process standardization",
                "Reduced operational errors",
                "Compliance with ISO standards",
            ],
            image: "/images/use-cases/manufacturing/sop-control.jpg",
        },
        {
            title: "3. Quality Management (QA/QC, CAPA, NCR)",
            scenario: "Quality deviations and corrective actions require rigorous documentation and closure tracking.",
            cannyEcmUseCase: [
                "Digitized QA/QC records",
                "CAPA and NCR workflow automation",
                "Root cause analysis documentation",
                "Secure retention and audit trails",
            ],
            benefits: [
                "Improved product quality",
                "Faster issue resolution",
                "Strong audit readiness",
            ],
            image: "/images/use-cases/manufacturing/qa-qc.jpg",
        },
        {
            title: "4. Engineering Change Management (ECN/ECR)",
            scenario: "Engineering changes must be reviewed, approved, and communicated accurately to avoid rework.",
            cannyEcmUseCase: [
                "Controlled ECN/ECR workflows",
                "Impact analysis documentation",
                "Automated approvals and notifications",
                "Complete change history",
            ],
            benefits: [
                "Faster change implementation",
                "Reduced rework",
                "End-to-end traceability",
            ],
            image: "/images/use-cases/manufacturing/ecn-ecr.jpg",
        },
        {
            title: "5. Vendor, Procurement & Contract Document Management",
            scenario: "Vendor documents and contracts are often spread across emails and folders, risking loss.",
            cannyEcmUseCase: [
                "Centralized vendor document repository",
                "Contract lifecycle management",
                "Approval workflows for purchase documents",
                "Easy retrieval during audits",
            ],
            benefits: [
                "Better vendor governance",
                "Reduced procurement cycle time",
                "Transparent documentation",
            ],
            image: "/images/use-cases/manufacturing/procurement.jpg",
        },
        {
            title: "6. Equipment Maintenance & Asset Documentation",
            scenario: "Maintenance logs and manuals are required for operational continuity and audit compliance.",
            cannyEcmUseCase: [
                "Digital equipment manuals and service logs",
                "Maintenance approval workflows",
                "Asset-wise document mapping",
                "Secure long-term retention",
            ],
            benefits: [
                "Improved asset uptime",
                "Faster troubleshooting",
                "Compliance with maintenance standards",
            ],
            image: "/images/use-cases/manufacturing/maintenance.jpg",
        },
    ];

    const benefitsData: UseCaseBenefit[] = [
        {
            area: "Operations",
            value: "Faster access to accurate documents",
        },
        {
            area: "Quality",
            value: "Reduced errors and rework",
        },
        {
            area: "Compliance",
            value: "Always audit-ready",
        },
        {
            area: "Productivity",
            value: "Automated workflows",
        },
        {
            area: "Governance",
            value: "Full traceability & control",
        },
    ];

    return (
        <UseCasePageLayout
            title="CannyECM – Use Case for Manufacturing & Engineering"
            industry="Manufacturing & Engineering"
            heroColor="bg-orange-50"
            subtitle={
                <>
                    Document Control • Workflow Automation • Compliance & Traceability
                    <br /><br />
                    CannyECM provides a centralized, secure, and traceable Enterprise Content Management platform built for manufacturing and engineering environments.
                </>
            }

            industryContextTitle="Industry Context"
            industryContextContent={
                <>
                    <p>
                        Manufacturing and engineering organizations manage high-volume, highly controlled documents across the product lifecycle—design, production, quality, maintenance, and compliance.
                    </p>
                    <p className="font-bold mt-4 mb-2">Typical documents include:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>Engineering drawings & CAD files</li>
                        <li>SOPs, work instructions, and manuals</li>
                        <li>Quality records (QA/QC, CAPA, NCR)</li>
                        <li>Vendor and procurement documents</li>
                        <li>Equipment maintenance logs</li>
                        <li>Regulatory and audit documentation</li>
                    </ul>
                    <p className="font-bold mt-4 mb-2">Manual or fragmented systems lead to:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>Production errors & rework</li>
                        <li>Delays in go-to-market</li>
                        <li>Compliance & audit risks</li>
                        <li>Operational inefficiency</li>
                    </ul>
                </>
            }

            challengesTitle="Key Business Challenges"
            challenges={challenges}

            solutionOverviewTitle="CannyECM Solution Overview"
            solutionOverviewContent={
                <>
                    <p>
                        CannyECM enables organizations with a centralized document repository, role-based secure access, automated workflows, complete audit trails, and document lifecycle & retention management.
                    </p>
                    <p className="mt-4 font-bold">Designed for:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Manufacturing plants</li>
                        <li>Engineering firms</li>
                        <li>EPC companies</li>
                        <li>Automotive, Pharma, FMCG, Heavy Engineering</li>
                    </ul>
                </>
            }

            useCasesTitle="Key Manufacturing Use Cases"
            useCases={useCases}

            securityTitle="Security & Compliance Alignment"
            securityContent={
                <>
                    <p className="mb-6">
                        CannyECM supports role-based access control, complete audit trails, electronic record integrity, and secure document storage.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-left">
                        <div className="bg-orange-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">ISO 9001</h4>
                            <p className="text-sm text-orange-100">Quality Management Systems compliance.</p>
                        </div>
                        <div className="bg-orange-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">ISO 14001</h4>
                            <p className="text-sm text-orange-100">Environmental Management Systems support.</p>
                        </div>
                        <div className="bg-orange-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">ISO 45001</h4>
                            <p className="text-sm text-orange-100">Occupational Health & Safety standards.</p>
                        </div>
                        <div className="bg-orange-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">ISO 27001</h4>
                            <p className="text-sm text-orange-100">Information Security Management compliance.</p>
                        </div>
                    </div>
                </>
            }

            benefitsTitle="Business Benefits"
            benefits={benefitsData}

            conclusionTitle="Conclusion"
            conclusionContent={
                <>
                    CannyECM empowers Manufacturing and Engineering organizations to replace fragmented, manual document handling with secure, automated, and compliant digital processes. From engineering design to production, quality, and compliance—CannyECM ensures accuracy, efficiency, and governance across the entire lifecycle.
                </>
            }

            jsonLd={jsonLd}
        />
    );
}
