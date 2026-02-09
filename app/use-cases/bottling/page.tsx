
import type { Metadata } from "next";
import UseCasePageLayout, {
    UseCaseChallenge,
    UseCaseItem,
    UseCaseBenefit
} from "@/components/templates/UseCasePageLayout";

export const metadata: Metadata = {
    title: "Bottling Manufacturing Use Cases | CannyMinds",
    description: "See how CannyMinds ECM ensures traceability, quality compliance, and audit readiness for bottling manufacturing companies.",
    alternates: {
        canonical: "https://www.cannymindstech.com/use-cases/bottling",
    },
    keywords: "bottling manufacturing documentation, batch record management software, fssai compliance software, bottling quality control, beverage manufacturing traceability",
    openGraph: {
        title: "Bottling Manufacturing Use Cases | CannyMinds",
        description: "Digitize batch records, automate quality workflows, and ensure complete traceability for bottling plants.",
        images: [
            {
                url: "/images/use-cases/bottling-og.jpg",
                width: 1200,
                height: 630,
                alt: "Automated bottling line with digital monitoring",
            },
        ],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "CannyECM Use Cases for Bottling Manufacturing Companies",
    "description": "Comprehensive guide on how CannyMinds ECM solutions resolve documentation and compliance challenges in bottling manufacturing.",
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

export default function BottlingUseCasePage() {
    const challenges: UseCaseChallenge[] = [
        {
            challenge: "Paper-based batch records",
            impact: "Delayed batch release",
        },
        {
            challenge: "Manual quality documentation",
            impact: "Risk of errors",
        },
        {
            challenge: "Poor traceability",
            impact: "Product recall risk",
        },
        {
            challenge: "SOP non-compliance",
            impact: "Regulatory violations",
        },
        {
            challenge: "Disconnected departments",
            impact: "Operational inefficiency",
        },
        {
            challenge: "Audit pressure",
            impact: "Compliance exposure",
        },
    ];

    const useCases: UseCaseItem[] = [
        {
            title: "1. Batch Manufacturing Record (BMR) Management",
            scenario: "Each bottling batch generates multiple production and quality records that need to be linked.",
            cannyEcmUseCase: [
                "Digitized batch records linked to batch number",
                "Structured templates for production entries",
                "Workflow-based review and approval",
                "Secure archival with retention rules",
            ],
            benefits: [
                "Faster batch release",
                "Reduced documentation errors",
                "Complete batch traceability",
            ],
            image: "/images/use-cases/bottling/bmr.jpg",
        },
        {
            title: "2. Quality Control & Laboratory Documentation",
            scenario: "QC teams generate lab reports for raw materials, in-process, and finished goods continuously.",
            cannyEcmUseCase: [
                "Central QC document repository",
                "Automated approval workflows",
                "Linking QC results to batches",
                "Controlled access for QA teams",
            ],
            benefits: [
                "Improved quality assurance",
                "Faster deviation handling",
                "Strong audit readiness",
            ],
            image: "/images/use-cases/bottling/qc-lab.jpg",
        },
        {
            title: "3. SOP, Work Instruction & Hygiene Compliance",
            scenario: "Operators must follow approved SOPs for bottling, cleaning, and hygiene protocols.",
            cannyEcmUseCase: [
                "Central SOP and WI repository",
                "Version control with effective dates",
                "Shop-floor access to latest SOPs",
                "Employee acknowledgement tracking",
            ],
            benefits: [
                "Process standardization",
                "Reduced contamination risk",
                "Regulatory compliance",
            ],
            image: "/images/use-cases/bottling/sop-hygiene.jpg",
        },
        {
            title: "4. Equipment Maintenance & CIP Documentation",
            scenario: "Bottling lines require regular maintenance and cleaning-in-place (CIP) records for audit.",
            cannyEcmUseCase: [
                "Digital maintenance logs",
                "CIP and sanitation records",
                "Asset-wise document mapping",
                "Approval and audit trails",
            ],
            benefits: [
                "Improved equipment uptime",
                "Verified cleaning compliance",
                "Reduced downtime",
            ],
            image: "/images/use-cases/bottling/maintenance.jpg",
        },
        {
            title: "5. Vendor & Raw Material Documentation",
            scenario: "Suppliers provide certificates and compliance documents that must match specific batches.",
            cannyEcmUseCase: [
                "Centralized vendor document repository",
                "Linking certificates to materials and batches",
                "Automated expiry alerts",
                "Audit-ready documentation",
            ],
            benefits: [
                "Strong supplier governance",
                "Reduced material rejection",
                "Faster audits",
            ],
            image: "/images/use-cases/bottling/vendor-docs.jpg",
        },
        {
            title: "6. Regulatory, Audit & Recall Readiness",
            scenario: "Audits and potential recalls require instant access to complete history of a batch.",
            cannyEcmUseCase: [
                "End-to-end batch traceability",
                "Instant retrieval of production & QC records",
                "Immutable audit trails",
                "Secure long-term retention",
            ],
            benefits: [
                "Faster audits",
                "Reduced recall impact",
                "Improved regulatory confidence",
            ],
            image: "/images/use-cases/bottling/audit-recall.jpg",
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
            title="CannyECM – Use Case for Bottling Manufacturing"
            industry="Bottling Manufacturing"
            heroColor="bg-cyan-50"
            subtitle={
                <>
                    Batch Documentation • Quality Compliance • Traceability & Audit Readiness
                    <br /><br />
                    CannyECM enables bottling companies to digitize, control, and govern documents across the entire production and quality lifecycle.
                </>
            }

            industryContextTitle="Industry Context"
            industryContextContent={
                <>
                    <p>
                        Bottling manufacturing companies operate in high-volume, fast-moving, and tightly regulated environments, where batch-wise documentation, quality control, and traceability are critical.
                    </p>
                    <p className="font-bold mt-4 mb-2">Typical documents include:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>Batch Manufacturing Records (BMR)</li>
                        <li>Quality Control (QC) & lab reports</li>
                        <li>SOPs and work instructions</li>
                        <li>Cleaning & sanitation logs</li>
                        <li>Equipment maintenance records</li>
                        <li>Vendor and raw material certificates</li>
                        <li>Regulatory and audit documents</li>
                    </ul>
                    <p className="font-bold mt-4 mb-2">Manual or paper-based systems result in:</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>Production delays & bottlenecks</li>
                        <li>Quality deviations & errors</li>
                        <li>Higher recall risks</li>
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
                        CannyECM provides a centralized document repository with batch-wise and product-wise structuring, role-based access control, workflow automation, and complete audit trails & retention management.
                    </p>
                    <p className="mt-4 font-bold">Designed for:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Beverage bottling plants</li>
                        <li>Water & soft drink manufacturers</li>
                        <li>Alcoholic beverage bottlers</li>
                        <li>FMCG bottling operations</li>
                    </ul>
                </>
            }

            useCasesTitle="Key Bottling Use Cases"
            useCases={useCases}

            securityTitle="Security & Compliance Alignment"
            securityContent={
                <>
                    <p className="mb-6">
                        CannyECM supports role-based access control, complete audit trails, document version control, and secure long-term storage to meet industry standards.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-left">
                        <div className="bg-cyan-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">FSSAI</h4>
                            <p className="text-sm text-cyan-100">Compliant with Food Safety regulations and documentation.</p>
                        </div>
                        <div className="bg-cyan-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">ISO 22000</h4>
                            <p className="text-sm text-cyan-100">Supports Food Safety Management Systems documentation.</p>
                        </div>
                        <div className="bg-cyan-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">ISO 9001</h4>
                            <p className="text-sm text-cyan-100">Aligned with Quality Management Systems requirements.</p>
                        </div>
                        <div className="bg-cyan-900 p-4 rounded-lg">
                            <h4 className="font-bold mb-2">ISO 27001</h4>
                            <p className="text-sm text-cyan-100">Ensures information security compliance.</p>
                        </div>
                    </div>
                </>
            }

            benefitsTitle="Business Benefits"
            benefits={benefitsData}

            conclusionTitle="Conclusion"
            conclusionContent={
                <>
                    CannyECM enables bottling manufacturing companies to move from paper-heavy, error-prone documentation to digital, traceable, and compliant operations. By centralizing batch records, automating approvals, and enforcing governance, CannyECM strengthens product quality, operational efficiency, and regulatory compliance across the bottling lifecycle.
                </>
            }

            jsonLd={jsonLd}
        />
    );
}
