
import type { Metadata } from "next";
import UseCasePageLayout, {
    UseCaseChallenge,
    UseCaseItem,
    UseCaseBenefit
} from "@/components/templates/UseCasePageLayout";

export const metadata: Metadata = {
    title: "FMCG Manufacturing Use Cases | CannyMinds",
    description: "Discover how CannyMinds ECM streamlines FMCG manufacturing documentation, quality control, and compliance for high-speed production environments.",
    alternates: {
        canonical: "https://www.cannymindstech.com/use-cases/fmcg",
    },
    keywords: "fmcg manufacturing documentation, production record management, quality control software fmcg, supplier documentation management, batch traceability software",
    openGraph: {
        title: "FMCG Manufacturing Use Cases | CannyMinds",
        description: "Digital, controlled, and traceable documentation for FMCG production, quality, and compliance.",
        images: [
            {
                url: "/images/use-cases/fmcg-og.jpg",
                width: 1200,
                height: 630,
                alt: "FMCG production line with quality control checks",
            },
        ],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "CannyECM Use Cases for FMCG Manufacturing Companies",
    "description": "Comprehensive guide on how CannyMinds ECM solutions resolve critical documentation and quality challenges in FMCG manufacturing.",
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

export default function FMCGUseCasePage() {
    const challenges: UseCaseChallenge[] = [
        {
            challenge: "Paper-based production records",
            impact: "Delayed batch release",
        },
        {
            challenge: "Manual approvals",
            impact: "Slower throughput",
        },
        {
            challenge: "Poor SOP control",
            impact: "Process deviations",
        },
        {
            challenge: "Limited traceability",
            impact: "Recall exposure",
        },
        {
            challenge: "Audit pressure",
            impact: "Compliance risk",
        },
        {
            challenge: "Disconnected departments",
            impact: "Inefficiency",
        },
    ];

    const useCases: UseCaseItem[] = [
        {
            title: "1. Production & Batch Record Management",
            scenario: "Each production batch generates multiple operational and quality documents that require linkage.",
            cannyEcmUseCase: [
                "Digitized batch records linked to batch and SKU",
                "Standardized production templates",
                "Workflow-based review and approval",
                "Secure archival with retention rules",
            ],
            benefits: [
                "Faster batch closure",
                "Reduced documentation errors",
                "Complete batch traceability",
            ],
            image: "/images/use-cases/fmcg/production-records.jpg",
        },
        {
            title: "2. SOP, Work Instruction & Process Control",
            scenario: "Operators must follow the latest approved SOPs on the shop floor to ensure consistency.",
            cannyEcmUseCase: [
                "Central SOP repository with version control",
                "Effective date and change history management",
                "Mobile or kiosk access to latest SOPs",
                "Employee acknowledgement tracking",
            ],
            benefits: [
                "Standardized operations",
                "Reduced process deviations",
                "Consistent product quality",
            ],
            image: "/images/use-cases/fmcg/sop-control.jpg",
        },
        {
            title: "3. Quality Control, Deviations & CAPA",
            scenario: "Quality issues require investigation, documentation, and closure to prevent recurrence.",
            cannyEcmUseCase: [
                "Central QC & lab document repository",
                "Digitized deviation and CAPA workflows",
                "Root cause analysis documentation",
                "Linked evidence and approvals",
            ],
            benefits: [
                "Faster issue resolution",
                "Improved quality governance",
                "Strong audit readiness",
            ],
            image: "/images/use-cases/fmcg/capa.jpg",
        },
        {
            title: "4. Hygiene, Safety & Regulatory Compliance",
            scenario: "FMCG plants must maintain rigorous hygiene, safety, and regulatory records daily.",
            cannyEcmUseCase: [
                "Digitized sanitation & hygiene logs",
                "Safety inspection records",
                "Compliance approval workflows",
                "Secure retention and retrieval",
            ],
            benefits: [
                "Reduced compliance risk",
                "Faster audits",
                "Improved safety culture",
            ],
            image: "/images/use-cases/fmcg/hygiene-safety.jpg",
        },
        {
            title: "5. Equipment Maintenance & Asset Documentation",
            scenario: "High-speed production lines require reliable equipment documentation and maintenance history.",
            cannyEcmUseCase: [
                "Digital maintenance logs and manuals",
                "Asset-wise document mapping",
                "Approval and audit trails",
                "Long-term retention",
            ],
            benefits: [
                "Improved uptime",
                "Faster troubleshooting",
                "Reduced downtime",
            ],
            image: "/images/use-cases/fmcg/equipment-maintenance.jpg",
        },
        {
            title: "6. Vendor, Raw Material & Packaging Documentation",
            scenario: "Suppliers provide certificates and compliance documents for materials that must be tracked.",
            cannyEcmUseCase: [
                "Centralized vendor document repository",
                "Certificate expiry alerts",
                "Linking vendor docs to batches",
                "Audit-ready supplier records",
            ],
            benefits: [
                "Strong supplier governance",
                "Reduced material rejection",
                "Faster regulatory response",
            ],
            image: "/images/use-cases/fmcg/vendor-management.jpg",
        },
    ];

    const benefitsData: UseCaseBenefit[] = [
        {
            area: "Production",
            value: "Faster batch release",
        },
        {
            area: "Quality",
            value: "Reduced deviations",
        },
        {
            area: "Compliance",
            value: "Audit-ready documentation",
        },
        {
            area: "Traceability",
            value: "Recall preparedness",
        },
        {
            area: "Efficiency",
            value: "Reduced paperwork",
        },
    ];

    return (
        <UseCasePageLayout
            title="CannyECM – Use Case for FMCG"
            industry="FMCG Manufacturing"
            heroColor="bg-green-50"
            subtitle={
                <>
                    Production Documentation • Quality Compliance • Traceability & Governance
                    <br /><br />
                    CannyECM enables FMCG manufacturers to digitize, control, and govern documents across production, quality, and compliance operations.
                </>
            }

            industryContextTitle="Industry Context"
            industryContextContent={
                <>
                    <p>
                        Fast-Moving Consumer Goods (FMCG) manufacturers operate in high-speed, high-volume, multi-SKU environments, where consistent quality, process adherence, and traceable documentation are critical.
                    </p>
                    <p className="font-bold mt-4 mb-2">Typical documents include:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>Batch / production records</li>
                        <li>Quality control & lab reports</li>
                        <li>SOPs and work instructions</li>
                        <li>Hygiene, sanitation & safety logs</li>
                        <li>Equipment maintenance records</li>
                        <li>Vendor & raw material certificates</li>
                        <li>Regulatory, audit & compliance documents</li>
                    </ul>
                    <p className="font-bold mt-4 mb-2">Manual or fragmented documentation leads to:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>Production delays & line stoppages</li>
                        <li>Quality deviations & inconsistencies</li>
                        <li>Potential recall risks</li>
                        <li>Audit non-compliance</li>
                    </ul>
                </>
            }

            challengesTitle="Key Business Challenges"
            challenges={challenges}

            solutionOverviewTitle="CannyECM Solution Overview"
            solutionOverviewContent={
                <>
                    <p>
                        CannyECM provides a centralized document repository with product-wise and batch-wise structuring, role-based access control, workflow automation, and complete audit trails & retention management.
                    </p>
                    <p className="mt-4 font-bold">Designed for:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Food & beverage manufacturers</li>
                        <li>Personal care & cosmetics producers</li>
                        <li>Home & hygiene product manufacturers</li>
                        <li>Multi-plant FMCG operations</li>
                    </ul>
                </>
            }

            useCasesTitle="Key FMCG Manufacturing Use Cases"
            useCases={useCases}

            securityTitle="Security & Compliance Alignment"
            securityContent={
                <>
                    <p className="mb-6">
                        CannyECM supports role-based access control, complete audit trails, document version control, and secure long-term retention.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-left">
                        <div className="bg-green-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">ISO 9001</h4>
                            <p className="text-sm text-green-100">Quality Management Systems compliance.</p>
                        </div>
                        <div className="bg-green-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">ISO 22000 / FSSC</h4>
                            <p className="text-sm text-green-100">Food Safety Management Systems requirements.</p>
                        </div>
                        <div className="bg-green-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">GMP / GHP</h4>
                            <p className="text-sm text-green-100">Good Manufacturing & Hygiene Practices adherence.</p>
                        </div>
                        <div className="bg-green-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">ISO 27001</h4>
                            <p className="text-sm text-green-100">Information Security Management compliance.</p>
                        </div>
                    </div>
                </>
            }

            benefitsTitle="Business Benefits"
            benefits={benefitsData}

            conclusionTitle="Conclusion"
            conclusionContent={
                <>
                    CannyECM empowers FMCG manufacturing companies to replace manual, paper-heavy documentation with digital, controlled, and traceable processes. By centralizing production and quality records, automating workflows, and enforcing governance, CannyECM enhances operational efficiency, product quality, and regulatory compliance across FMCG manufacturing operations.
                </>
            }

            jsonLd={jsonLd}
        />
    );
}
