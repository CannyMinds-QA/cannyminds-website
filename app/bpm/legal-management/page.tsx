import type { Metadata } from "next";
import ServicePageLayout from "@/components/templates/ServicePageLayout";
import {
  Gavel,
  CheckCircle,
  Security,
  Assignment,
  CloudDone,
  Notifications,
  TrendingUp,
} from "@mui/icons-material";

export const metadata: Metadata = {
  title: "Legal & Contract Management | BPM Solutions | CannyMinds",
  description: "Streamline your contract lifecycle from creation to renewal. Automate approvals, ensure compliance, and manage legal workflows efficiently.",
  openGraph: {
    title: "Legal & Contract Management | BPM Solutions | CannyMinds",
    description: "Streamline your contract lifecycle from creation to renewal. Automate approvals, ensure compliance, and manage legal workflows efficiently.",
    images: [{ url: "/images/legal-management-og.jpg", width: 1200, height: 630, alt: "Legal Management Automation" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CannyMinds Legal Management",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "description": "Enterprise contract lifecycle management and legal workflow automation software.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
};

export default function LegalManagementPage() {
  return (
    <ServicePageLayout
      title="Legal & Contract Management"
      subtitle="Streamline contract lifecycle from creation to renewal. Automate approvals, ensure compliance, and manage legal workflows efficiently."
      serviceCategory="BPM"
      heroImageAlt="Legal Dashboard showing contract status and upcoming renewals"
      jsonLd={jsonLd}

      overview={
        <>
          <p>
            Managing contracts manually leads to missed renewals, compliance risks, and slow deal cycles. Legal teams often struggle with version control and lack visibility into obligations.
          </p>
          <p>
            <strong>CannyMinds Legal Management</strong> provides a centralized repository for all your contracts and legal documents. Automate the drafting, approval, and signing process with intelligent workflows. Receive alerts for key dates and ensure every contract strictly adheres to company policies.
          </p>
          <p>
            Empower your legal team to focus on high-value strategic work rather than administrative tasks.
          </p>
        </>
      }

      features={[
        {
          title: "Contract Lifecycle Management",
          description: "Manage the entire lifecycle of contracts from request, drafting, negotiation, approval, execution, to renewal and archiving.",
          icon: Assignment,
        },
        {
          title: "Automated Workflows",
          description: "Design custom approval rules based on contract value, type, or department. Ensure the right stakeholders review every document.",
          icon: Gavel,
        },
        {
          title: "Compliance Alerts",
          description: "Never miss a renewal or expiration date. Set automated notifications for key milestones and obligations.",
          icon: Notifications,
        },
        {
          title: "E-Signature Integration",
          description: "Send contracts for secure digital signature directly from the platform. Integration with DocuSign, Adobe Sign, and more.",
          icon: Security,
        },
        {
          title: "Clause Library",
          description: "Standardize contract language with a pre-approved library of clauses and templates to speed up drafting and reduce risk.",
          icon: CloudDone,
        },
        {
          title: "Analytics & Reporting",
          description: "Gain insights into contract cycle times, risks, and obligations with customizable dashboards and reports.",
          icon: TrendingUp,
        },
      ]}

      benefits={[
        {
          title: "Faster Turnaround",
          description: "Accelerate deal cycles by up to 50% with automated drafting and approval workflows.",
          icon: CheckCircle,
        },
        {
          title: "Risk Reduction",
          description: "Minimize legal risk by ensuring standardized language and full visibility into all contractual obligations.",
          icon: CheckCircle,
        },
        {
          title: "Improved Visibility",
          description: "Centralized dashboard gives you instant access to the status of every contract in your organization.",
          icon: CheckCircle,
        },
        {
          title: "Cost Efficiency",
          description: "Reduce administrative costs and avoid penalties from missed deadlines or non-compliance.",
          icon: CheckCircle,
        },
      ]}

      howItWorks={[
        {
          stepNumber: "1",
          title: "Request",
          description: "Business users submit contract requests via a simple self-service portal."
        },
        {
          stepNumber: "2",
          title: "Draft",
          description: "System auto-generates contract using pre-approved templates and clauses."
        },
        {
          stepNumber: "3",
          title: "Negotiate",
          description: "Collaborate internally and externally with version control and redlining tools."
        },
        {
          stepNumber: "4",
          title: "Sign & Manage",
          description: "Execute via e-signature and track obligations throughout the contract life."
        }
      ]}
    />
  );
}
