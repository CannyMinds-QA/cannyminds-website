import type { Metadata } from "next";
import UseCasePageLayout, {
  UseCaseChallenge,
  UseCaseItem,
  UseCaseBenefit
} from "@/components/templates/UseCasePageLayout";

export const metadata: Metadata = {
  title: "Healthcare Use Cases | CannyMinds",
  description: "Explore how CannyMinds transforms healthcare operations with secure ECM, workflow automation, and compliance solutions for hospitals and clinics.",
  alternates: {
    canonical: "https://www.cannymindstech.com/use-cases/healthcare",
  },
  keywords: "healthcare use cases, hospital document management, clinical workflow automation, hipaa compliance solutions, electronic patient records, healthcare it solutions",
  openGraph: {
    title: "Healthcare Use Cases | CannyMinds",
    description: "Real-world examples of digital transformation in healthcare. See how hospitals improve patient care and compliance with CannyMinds.",
    images: [
      {
        url: "/images/use-cases/healthcare-og.jpg",
        width: 1200,
        height: 630,
        alt: "Doctors reviewing digital patient records",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "CannyECM Use Cases for Healthcare Industry",
  "description": "Comprehensive guide on how CannyMinds ECM solutions solve critical challenges in healthcare documentation and workflows.",
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

export default function HealthcareUseCasePage() {
  const challenges: UseCaseChallenge[] = [
    {
      challenge: "Paper-based & siloed records",
      impact: "Slow clinical decisions",
    },
    {
      challenge: "Manual approvals",
      impact: "Delayed treatment & billing",
    },
    {
      challenge: "Weak version control",
      impact: "Use of outdated clinical data",
    },
    {
      challenge: "Limited audit trails",
      impact: "Compliance gaps",
    },
    {
      challenge: "Data security risks",
      impact: "Patient privacy violations",
    },
    {
      challenge: "Disconnected workflows",
      impact: "Inefficient operations",
    },
  ];

  const useCases: UseCaseItem[] = [
    {
      title: "1. Electronic Patient Record (EPR) Management",
      scenario: "Patient records are distributed across departments and systems.",
      cannyEcmUseCase: [
        "Digitize and centralize patient documents",
        "Metadata tagging (Patient ID, Visit No., Date)",
        "Role-based access (Doctor, Nurse, Admin)",
        "Secure retrieval and audit trails",
      ],
      benefits: [
        "Faster clinical decisions",
        "Improved continuity of care",
        "Reduced record loss",
      ],
      // Placeholder path - these images likely don't exist yet, but layout will handle it
      image: "/images/use-cases/healthcare/epr.jpg",
    },
    {
      title: "2. Clinical Documentation & Approval Workflow",
      scenario: "Clinical notes and treatment plans require review and approval.",
      cannyEcmUseCase: [
        "Standardized clinical document templates",
        "Automated review and approval workflows",
        "Controlled versioning with history",
      ],
      benefits: [
        "Reduced documentation errors",
        "Clear accountability",
        "Standardized clinical records",
      ],
      image: "/images/use-cases/healthcare/clinical-docs.jpg",
    },
    {
      title: "3. Consent & Authorization Management",
      scenario: "Consent forms must be securely stored and retrievable during audits.",
      cannyEcmUseCase: [
        "Digitize consent forms at point of care",
        "Link consent to patient records",
        "Immutable audit trails and retention rules",
      ],
      benefits: [
        "Legal & regulatory protection",
        "Faster audit response",
        "Improved patient trust",
      ],
      image: "/images/use-cases/healthcare/consent.jpg",
    },
    {
      title: "4. Diagnostic & Lab Report Management",
      scenario: "Diagnostic reports are generated across systems and locations.",
      cannyEcmUseCase: [
        "Central repository for lab & imaging reports",
        "Automated classification and indexing",
        "Secure sharing with clinicians",
      ],
      benefits: [
        "Faster diagnosis",
        "Reduced duplicate tests",
        "Improved collaboration",
      ],
      image: "/images/use-cases/healthcare/lab-reports.jpg",
    },
    {
      title: "5. Billing, Insurance & Claims Documentation",
      scenario: "Claims require multiple validations and approvals.",
      cannyEcmUseCase: [
        "Workflow-driven claims documentation",
        "Automated approvals and escalations",
        "Complete traceability",
      ],
      benefits: [
        "Faster claim settlements",
        "Reduced rejections",
        "Transparent billing",
      ],
      image: "/images/use-cases/healthcare/billing.jpg",
    },
    {
      title: "6. Policy, SOP & Accreditation Management",
      scenario: "Hospitals must maintain updated policies for accreditation.",
      cannyEcmUseCase: [
        "Centralized policy & SOP repository",
        "Version control with effective dates",
        "Automated review and approval cycles",
      ],
      benefits: [
        "Always audit-ready",
        "Reduced compliance risk",
        "Controlled dissemination",
      ],
      image: "/images/use-cases/healthcare/policy.jpg",
    },
    {
      title: "7. Incident, Quality & Patient Safety Management",
      scenario: "Adverse events require investigation and closure.",
      cannyEcmUseCase: [
        "Digitized incident reporting",
        "Workflow-based investigation & CAPA tracking",
        "Secure record retention",
      ],
      benefits: [
        "Improved patient safety",
        "Strong quality governance",
        "Accreditation compliance",
      ],
      image: "/images/use-cases/healthcare/incident.jpg",
    },
  ];

  const benefitsData: UseCaseBenefit[] = [
    {
      area: "Clinical Care",
      value: "Faster access to patient data",
    },
    {
      area: "Compliance",
      value: "Audit-ready documentation",
    },
    {
      area: "Security",
      value: "Protected patient information",
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
      title="CannyECM – Use Case for Healthcare Industry"
      industry="Healthcare"
      heroColor="bg-cyan-50"
      subtitle={
        <>
          Clinical Documentation • Workflow Automation • Privacy & Compliance
          <br /><br />
          CannyECM provides a centralized, secure, and compliant Enterprise Content Management platform tailored for healthcare environments.
        </>
      }

      industryContextTitle="Industry Context"
      industryContextContent={
        <>
          <p>
            Healthcare organizations manage large volumes of sensitive, regulated, and time-critical information across patient care, clinical operations, billing, and compliance.
          </p>
          <p className="font-bold mt-4 mb-2">Typical documents include:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Patient medical records (EMR/EHR attachments)</li>
            <li>Clinical notes, prescriptions & discharge summaries</li>
            <li>Diagnostic & lab reports</li>
            <li>Consent forms & authorizations</li>
            <li>Insurance, billing & claims documents</li>
            <li>Policies, SOPs & accreditation records</li>
          </ul>
          <p className="font-bold mt-4 mb-2">Manual or fragmented document handling leads to:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li>Delays in patient care</li>
            <li>Privacy & security risks</li>
            <li>Poor audit readiness</li>
            <li>Operational inefficiencies</li>
          </ul>
        </>
      }

      challengesTitle="Key Business Challenges"
      challenges={challenges}

      solutionOverviewTitle="CannyECM Solution Overview"
      solutionOverviewContent={
        <>
          <p>
            CannyECM is designed for <strong>Hospitals & Multi-specialty Centers, Clinics & Nursing Homes, Diagnostic & Pathology Labs, and Medical Colleges & Healthcare Networks.</strong>
          </p>
          <p className="mt-4">It enables:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Centralized document repository</li>
            <li>Role-based secure access</li>
            <li>Workflow automation</li>
            <li>Complete audit trails</li>
            <li>Document lifecycle & retention management</li>
          </ul>
        </>
      }

      useCasesTitle="Key Healthcare Use Cases"
      useCases={useCases}

      securityTitle="Security & Compliance Alignment"
      securityContent={
        <>
          <p className="mb-6">
            CannyECM supports role-based access control, complete audit trails, controlled document versioning, and secure data storage.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-bold mb-2">HIPAA</h4>
              <p className="text-sm text-blue-200">Aligned with data privacy principles for protected health information.</p>
            </div>
            <div className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-bold mb-2">NABH / JCI</h4>
              <p className="text-sm text-blue-200">Meets stringent documentation requirements for accreditation.</p>
            </div>
            <div className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-bold mb-2">ISO 27001</h4>
              <p className="text-sm text-blue-200">Adheres to international standards for Information Security Management.</p>
            </div>
            <div className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-bold mb-2">ISO 15489</h4>
              <p className="text-sm text-blue-200">Follows best practices for Records Management.</p>
            </div>
          </div>
        </>
      }

      benefitsTitle="Business Benefits"
      benefits={benefitsData}

      conclusionTitle="Conclusion"
      conclusionContent={
        <>
          CannyECM enables healthcare organizations to transform document-heavy, manual processes into secure, efficient, and compliant digital workflows. By centralizing clinical information, automating approvals, and enforcing governance, CannyECM improves patient care quality, operational efficiency, and regulatory compliance across the healthcare ecosystem.
        </>
      }

      jsonLd={jsonLd}
    />
  );
}
