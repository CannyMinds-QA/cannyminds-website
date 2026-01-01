import type { Metadata } from "next";
import ServicePageLayout from "@/components/templates/ServicePageLayout";
import {
  Settings,
  CheckCircle,
  AutoAwesome,
  Code,
  CloudDone,
  Extension,
  TrendingUp,
} from "@mui/icons-material";

export const metadata: Metadata = {
  title: "Custom Workflow Automation Solutions | BPM Solutions | CannyMinds",
  description: "Build tailored business workflows without coding. Automate unique processes with visual designers, business rules, and pre-built integrations.",
  openGraph: {
    title: "Custom Workflow Automation Solutions | BPM Solutions | CannyMinds",
    description: "Build tailored business workflows without coding. Automate unique processes with visual designers, business rules, and pre-built integrations.",
    images: [{ url: "/images/custom-workflows-og.jpg", width: 1200, height: 630, alt: "Custom Workflow Automation" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CannyMinds Custom Workflows",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "description": "Custom workflow automation and business process management platform.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
};

export default function CustomWorkflowsPage() {
  return (
    <ServicePageLayout
      title="Custom Workflow Automation Solutions"
      subtitle="Build tailored business workflows without coding. Automate unique processes with visual designers and pre-built integrations."
      serviceCategory="BPM"
      heroImageAlt="Visual Workflow Designer interface with drag-and-drop components"
      jsonLd={jsonLd}

      overview={
        <>
          <p>
            Every business has unique processes that give them a competitive edge. Off-the-shelf software often forces you to change your process to fit the tool. Traditional custom development is slow, expensive, and hard to maintain.
          </p>
          <p>
            <strong>CannyMinds Custom Workflow Automation</strong> gives you the best of both worlds. Build enterprise-grade applications and workflows using low-code visual tools. Connect to your existing systems, define complex business rules, and deploy in days, not months.
          </p>
          <p>
            Whether it's a specific approval chain, a complex data routing process, or a unique customer onboarding journey, we can automate it.
          </p>
        </>
      }

      features={[
        {
          title: "Visual Workflow Designer",
          description: "Drag-and-drop interface to design process flows, user forms, and data models without writing code.",
          icon: Settings,
        },
        {
          title: "Business Rules Engine",
          description: "Define complex logic and decision trees to automate routing, approvals, and data validation.",
          icon: AutoAwesome,
        },
        {
          title: "Integration Hub",
          description: "Connect with hundreds of third-party apps and legacy systems via API, databases, and pre-built connectors.",
          icon: Extension,
        },
        {
          title: "Low-Code Development",
          description: "Empower business users to build applications while IT maintains governance and security.",
          icon: Code,
        },
        {
          title: "Cloud & On-Premise",
          description: "Flexible deployment options to meet your security and compliance requirements.",
          icon: CloudDone,
        },
        {
          title: "Process Optimization",
          description: "Identify bottlenecks and optimize workflows with built-in analytics and heatmaps.",
          icon: TrendingUp,
        },
      ]}

      benefits={[
        {
          title: "Faster Time to Market",
          description: "Launch new business applications and workflows 10x faster than traditional coding.",
          icon: CheckCircle,
        },
        {
          title: "Reduced Costs",
          description: "Lower development and maintenance costs by using a unified low-code platform.",
          icon: CheckCircle,
        },
        {
          title: "Business Agility",
          description: "Adapt to market changes quickly by updating workflows in real-time without downtime.",
          icon: CheckCircle,
        },
        {
          title: "Scalability",
          description: "Pay as you grow with a platform that scales from simple departmental tools to enterprise-wide automation.",
          icon: CheckCircle,
        },
      ]}

      howItWorks={[
        {
          stepNumber: "1",
          title: "Map",
          description: "Define your current process and identify automation opportunities."
        },
        {
          stepNumber: "2",
          title: "Design",
          description: "Build forms and workflows using the visual drag-and-drop designer."
        },
        {
          stepNumber: "3",
          title: "Integrate",
          description: "Connect to your ERP, CRM, and other systems for seamless data flow."
        },
        {
          stepNumber: "4",
          title: "Deploy",
          description: "Test and launch your custom application to users on web and mobile."
        }
      ]}
    />
  );
}
