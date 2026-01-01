import type { Metadata } from "next";
import ServicePageLayout from "@/components/templates/ServicePageLayout";
import {
  HealthAndSafety,
  CheckCircle,
  Security,
  Assignment,
  Notifications,
  Assessment,
  VerifiedUser,
} from "@mui/icons-material";

export const metadata: Metadata = {
  title: "Safety & Compliance Workflow Automation | BPM Solutions | CannyMinds",
  description: "Automate safety inspections, incident reporting, and compliance tracking. Ensure regulatory adherence and protect your workforce.",
  openGraph: {
    title: "Safety & Compliance Workflow Automation | BPM Solutions | CannyMinds",
    description: "Automate safety inspections, incident reporting, and compliance tracking. Ensure regulatory adherence and protect your workforce.",
    images: [{ url: "/images/safety-compliance-og.jpg", width: 1200, height: 630, alt: "Safety Compliance Automation" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CannyMinds Safety Compliance",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "description": "EHS management and safety compliance automation software.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
};

export default function SafetyCompliancePage() {
  return (
    <ServicePageLayout
      title="Safety & Compliance Workflow Automation"
      subtitle="Automate safety inspections, incident reporting, and compliance tracking. Ensure regulatory adherence and protect your workforce."
      serviceCategory="BPM"
      heroImageAlt="EHS Dashboard showing safety metrics and open incident reports"
      jsonLd={jsonLd}

      overview={
        <>
          <p>
            Ensuring workplace safety and regulatory compliance is critical, but manual record-keeping makes it hard to identify risks. Paper-based inspections and incident reports get lost or delayed, increasing liability.
          </p>
          <p>
            <strong>CannyMinds Safety & Compliance Solutions</strong> digitize your EHS (Environment, Health, and Safety) processes. Enable mobile incident reporting, automate corrective actions (CAPA), and track safety audits in real-time.
          </p>
          <p>
            Create a safer workplace culture while automating the evidence collection needed for regulatory audits.
          </p>
        </>
      }

      features={[
        {
          title: "Incident Reporting",
          description: "Mobile-friendly forms for employees to report hazards, near-misses, and incidents instantly, including photo evidence.",
          icon: Assignment,
        },
        {
          title: "Audit Management",
          description: "Schedule and conduct digital safety audits. Auto-generate corrective actions for non-conformances.",
          icon: HealthAndSafety,
        },
        {
          title: "Compliance Tracking",
          description: "Monitor adherence to OSHA, ISO, and internal standards. Receive alerts for expiring certifications or licenses.",
          icon: Notifications,
        },
        {
          title: "Corrective Actions (CAPA)",
          description: "Track corrective actions from initiation to closure. Ensure identified risks are actually resolved.",
          icon: Security,
        },
        {
          title: "Inspection Checklists",
          description: "Standardize routine inspections for equipment, facilities, and vehicles with digital checklists.",
          icon: VerifiedUser,
        },
        {
          title: "Safety Dashboard",
          description: "Visualize key safety metrics like TRIR, lost time injuries, and open action items in real-time.",
          icon: Assessment,
        },
      ]}

      benefits={[
        {
          title: "Reduced Risk",
          description: "Identify and mitigate hazards faster to prevent accidents and costly liabilities.",
          icon: CheckCircle,
        },
        {
          title: "Audit Readiness",
          description: "Always be ready for inspections with a complete, searchable digital trail of all safety activities.",
          icon: CheckCircle,
        },
        {
          title: "Safety Culture",
          description: "Engage employees in safety by making reporting easy and transparent.",
          icon: CheckCircle,
        },
        {
          title: "Efficiency",
          description: "Eliminate paperwork and manual data entry, allowing EHS teams to focus on prevention.",
          icon: CheckCircle,
        },
      ]}

      howItWorks={[
        {
          stepNumber: "1",
          title: "Report",
          description: "Employee logs hazard or incident via mobile app with photos."
        },
        {
          stepNumber: "2",
          title: "Assess",
          description: "Safety manager reviews report and assigns risk level/priority."
        },
        {
          stepNumber: "3",
          title: "Action",
          description: "Corrective action assigned automatically to responsible party."
        },
        {
          stepNumber: "4",
          title: "Verify",
          description: "Action completed and verified. Audit trail updated automatically."
        }
      ]}
    />
  );
}
