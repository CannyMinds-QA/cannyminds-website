import type { Metadata } from "next";
import ServicePageLayout from "@/components/templates/ServicePageLayout";
import {
  Business,
  CheckCircle,
  Speed,
  Security,
  CloudDone,
  Assessment,
  ShoppingCart,
} from "@mui/icons-material";

export const metadata: Metadata = {
  title: "Procurement & Purchase Order Automation | BPM Solutions | CannyMinds",
  description: "Streamline procurement from requisition to PO approval. Reduce cycle times, control spending, and automate vendor management.",
  openGraph: {
    title: "Procurement & Purchase Order Automation | BPM Solutions | CannyMinds",
    description: "Streamline procurement from requisition to PO approval. Reduce cycle times, control spending, and automate vendor management.",
    images: [{ url: "/images/procurement-og.jpg", width: 1200, height: 630, alt: "Procurement Automation" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CannyMinds Procurement Automation",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "description": "Enterprise procurement and purchase order automation software.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
};

export default function ProcurementPage() {
  return (
    <ServicePageLayout
      title="Procurement & Purchase Order Automation"
      subtitle="Streamline procurement from requisition to PO approval. Reduce cycle times, control spending, and automate vendor management."
      serviceCategory="BPM"
      heroImageAlt="Procurement Dashboard showing spend analysis and active purchase orders"
      jsonLd={jsonLd}

      overview={
        <>
          <p>
            Traditional procurement processes are plagued by paper forms, slow approvals, and lack of spending visibility. This leads to maverick spending, delayed purchases, and compliance issues.
          </p>
          <p>
            <strong>CannyMinds Procurement Automation</strong> digitizes your improved purchasing workflow. Empower employees to raise requisitions easily, route them for approval based on budget rules, and automatically generate Purchase Orders (POs) sent directly to vendors.
          </p>
          <p>
            Gain complete control over your organizational spending and build better relationships with your suppliers.
          </p>
        </>
      }

      features={[
        {
          title: "Purchase Requisitions",
          description: "User-friendly forms for employees to request goods and services. Catalog integration ensures standardized ordering.",
          icon: ShoppingCart,
        },
        {
          title: "PO Approval Workflows",
          description: "Route approvals automatically based on amount, department, GL code, or project. Eliminate manual email chains.",
          icon: Business,
        },
        {
          title: "Vendor Management",
          description: "Centralized vendor portal for onboarding, document management, and performance tracking.",
          icon: Security,
        },
        {
          title: "Budget Control",
          description: "Real-time checks against budget limits during requisition. Prevent overspending before it happens.",
          icon: Assessment,
        },
        {
          title: "ERP Integration",
          description: "Sync POs and goods receipts with your ERP finance module. 3-way matching support.",
          icon: CloudDone,
        },
        {
          title: "Spend Analytics",
          description: "Deep insights into spending patterns, vendor performance, and potential cost savings.",
          icon: Speed,
        },
      ]}

      benefits={[
        {
          title: "Faster Cycles",
          description: "Reduce procurement cycle time by 60% with automated workflows and approvals.",
          icon: CheckCircle,
        },
        {
          title: "Cost Savings",
          description: "Eliminate maverick spending and negotiate better terms with consolidated vendor data.",
          icon: CheckCircle,
        },
        {
          title: "Compliance",
          description: "Ensure 100% adherence to purchasing policies and audit requirements.",
          icon: CheckCircle,
        },
        {
          title: "Visibility",
          description: "Full potential visibility into committed spend and pipeline.",
          icon: CheckCircle,
        },
      ]}

      howItWorks={[
        {
          stepNumber: "1",
          title: "Request",
          description: "Employee creates requisition from catalog or free text form."
        },
        {
          stepNumber: "2",
          title: "Approve",
          description: "Request routed to manager and finance based on rules."
        },
        {
          stepNumber: "3",
          title: "Order",
          description: "Approved request auto-converts to PO and is sent to vendor."
        },
        {
          stepNumber: "4",
          title: "Receive",
          description: "Goods receipt logged and matched against PO for payment."
        }
      ]}
    />
  );
}
