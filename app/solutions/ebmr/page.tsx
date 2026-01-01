import type { Metadata } from "next";
import ServicePageLayout from "@/components/templates/ServicePageLayout";
import {
  Science,
  CheckCircle,
  VerifiedUser,
  Security,
  CloudDone,
  Assessment,
  Biotech,
  Assignment,
} from "@mui/icons-material";

export const metadata: Metadata = {
  title: "Canny eBMR - Electronic Batch Manufacturing Record | CannyMinds",
  description: "FDA 21 CFR Part 11 compliant electronic batch record system for pharmaceutical and life sciences manufacturing. Ensure compliance, reduce errors, accelerate production.",
  openGraph: {
    title: "Canny eBMR - Electronic Batch Manufacturing Record | CannyMinds",
    description: "FDA 21 CFR Part 11 compliant electronic batch record system for pharmaceutical and life sciences manufacturing. Ensure compliance, reduce errors, accelerate production.",
    images: [{ url: "/images/ebmr-og.jpg", width: 1200, height: 630, alt: "Canny eBMR Solution" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Canny eBMR",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "description": "Electronic Batch Manufacturing Record system for pharmaceutical compliance.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
};

export default function CannyEBMRPage() {
  return (
    <ServicePageLayout
      title="Canny eBMR - Electronic Batch Records"
      subtitle="FDA 21 CFR Part 11 compliant electronic batch manufacturing record system. Ensure compliance, reduce errors, and accelerate production release times."
      serviceCategory="Solutions"
      heroImageAlt="Tablet showing electronic batch record interface in a cleanroom environment"
      jsonLd={jsonLd}

      overview={
        <>
          <p>
            In the highly regulated pharmaceutical and life sciences industries, paper-based batch records are a liability. They are prone to errors, hard to manage, and slow down product release.
          </p>
          <p>
            <strong>Canny eBMR</strong> is a comprehensive Electronic Batch Manufacturing Record system designed to digitize and automate your manufacturing documentation. It ensures full compliance with <strong>FDA 21 CFR Part 11</strong>, cGMP, and other global regulatory standards.
          </p>
          <p>
            By replacing paper with intelligent digital workflows, Canny eBMR enables "Review by Exception," significantly reducing batch review times and accelerating time-to-market.
          </p>
        </>
      }

      features={[
        {
          title: "Audit Trails & E-Signatures",
          description: "Full compliance with 21 CFR Part 11. Track every action with time-stamped audit trails and secure electronic signatures.",
          icon: VerifiedUser,
        },
        {
          title: "Automated Workflows",
          description: "Enforce standard operating procedures (SOPs) automatically. Prevent operators from proceeding if steps are missed or values are out of spec.",
          icon: Assignment,
        },
        {
          title: "Deviation Management",
          description: "Real-time flagging of deviations. Initiate and track investigations directly within the batch record to resolve issues faster.",
          icon: Security,
        },
        {
          title: "Integration Ready",
          description: "Seamlessly integrate with ERP (SAP, Oracle), LIMS, and shop floor equipment for automated data capture.",
          icon: CloudDone,
        },
        {
          title: "Real-Time Analytics",
          description: "Monitor production in real-time. Visualize KPIs like Yield, OEE, and Cycle Time to optimize manufacturing performance.",
          icon: Assessment,
        },
        {
          title: "Master Recipe Management",
          description: "Centralized version control for master batch records (MBRs). Ensure only approved recipes are used in production.",
          icon: Biotech,
        },
      ]}

      benefits={[
        {
          title: "100% Compliance",
          description: "Eliminate data integrity issues and ensure audit readiness with automated compliance checks.",
          icon: CheckCircle,
        },
        {
          title: "Faster Batch Release",
          description: "Reduce review times from weeks to days or hours with 'Review by Exception'.",
          icon: CheckCircle,
        },
        {
          title: "Error Reduction",
          description: "Prevent calculation errors and missing entries with built-in validation rules.",
          icon: CheckCircle,
        },
        {
          title: "Paperless Operation",
          description: "Eliminate the costs and risks of physical document storage and retrieval.",
          icon: CheckCircle,
        },
      ]}

      howItWorks={[
        {
          stepNumber: "1",
          title: "Digitize",
          description: "Convert existing paper Master Batch Records into intelligent digital templates."
        },
        {
          stepNumber: "2",
          title: "Execute",
          description: "Operators execute batches using tablets or HMIs with real-time validation and guidance."
        },
        {
          stepNumber: "3",
          title: "Review",
          description: "QA reviews only exceptions and deviations, as the system validates standard entries automatically."
        },
        {
          stepNumber: "4",
          title: "Release",
          description: "Accelerated batch release and secure archival of the electronic record."
        }
      ]}
    />
  );
}
