import type { Metadata } from "next";
import ServicePageLayout from "@/components/templates/ServicePageLayout";
import {
  Receipt,
  CheckCircle,
  Speed,
  AutoAwesome,
  CloudDone,
  Security,
  TrendingUp,
} from "@mui/icons-material";

// SEO Metadata
export const metadata: Metadata = {
  title: "Invoice Management Automation | BPM Solutions | CannyMinds",
  description: "Automate your accounts payable with CannyMinds Invoice Management. Reduce processing time by 80%, eliminate errors, and gain complete visibility.",
  openGraph: {
    title: "Invoice Management Automation | BPM Solutions | CannyMinds",
    description: "Automate your accounts payable with CannyMinds Invoice Management. Reduce processing time by 80%, eliminate errors, and gain complete visibility.",
    images: [{ url: "/images/invoice-management-og.jpg", width: 1200, height: 630, alt: "Invoice Management Automation" }],
  },
};

// JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CannyMinds Invoice Management",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "description": "Automated invoice processing and accounts payable solution.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
};

export default function InvoiceManagementPage() {
  return (
    <ServicePageLayout
      title="Invoice Management Automation"
      subtitle="Automate invoice processing from capture to payment. Reduce processing time by 80%, eliminate errors, and gain complete visibility into your AP workflow."
      serviceCategory="BPM"
      heroImageAlt="Invoice Management Dashboard showing automated extraction and approval status"
      jsonLd={jsonLd}

      overview={
        <>
          <p>
            Manual invoice processing is a major bottleneck for modern finance teams. Misplaced invoices, data entry errors, and slow approval cycles lead to late payments and strained vendor relationships.
          </p>
          <p>
            <strong>CannyMinds Invoice Management</strong> automates the entire AP lifecycle. Using advanced OCR and AI, the system captures invoice data, validates it against purchase orders, and routes it for approval automatically. Gain real-time visibility into every liability and ensure compliance with zero manual effort.
          </p>
          <p>
            Whether you process 100 or 100,000 invoices a month, our solution scales with your business to deliver faster processing times and significant cost savings.
          </p>
        </>
      }

      features={[
        {
          title: "Intelligent Data Capture",
          description: "Automatically extract key data (Vendor, Date, Amount, Line Items) from email, PDF, or paper invoices with 99% accuracy using AI-driven OCR.",
          icon: Receipt,
        },
        {
          title: "Automated Approval workflows",
          description: "Route invoices based on amount, vendor, or department rules. Eliminate bottle-necks with smart escalation and mobile approvals.",
          icon: AutoAwesome,
        },
        {
          title: "3-Way Matching",
          description: "Automatically validate invoices against Purchase Orders (PO) and Goods Receipt Notes (GRN) to prevent overpayment and fraud.",
          icon: Security,
        },
        {
          title: "ERP Integration",
          description: "Seamlessly sync approved invoices and payment data with your existing ERP or accounting software (SAP, Oracle, QuickBooks, etc.).",
          icon: CloudDone,
        },
        {
          title: "Real-Time Analytics",
          description: "Monitor AP performance with dashboards for accruals, aging reports, processing times, and bottleneck identification.",
          icon: TrendingUp,
        },
        {
          title: "Fraud Prevention",
          description: "Automatically detect duplicate invoices, suspicious vendors, and pricing anomalies before payment is authorized.",
          icon: Speed,
        },
      ]}

      benefits={[
        {
          title: "80% Faster Processing",
          description: "Reduce invoice cycle time from days to minutes by eliminating manual data entry and routing.",
          icon: CheckCircle,
        },
        {
          title: "Cost Reduction",
          description: "Lower the cost per invoice by up to 60% by removing manual labor and printing costs.",
          icon: CheckCircle,
        },
        {
          title: "Total Visibility",
          description: "Track every invoice in real-time. Know exactly where cash is going and manage cash flow effectively.",
          icon: CheckCircle,
        },
        {
          title: "Improved Vendor Relations",
          description: "Pay on time, every time. Capture early payment discounts and avoid late fees.",
          icon: CheckCircle,
        },
      ]}

      howItWorks={[
        {
          stepNumber: "1",
          title: "Capture",
          description: "Invoices arrive via email, portal, or scan. AI instantly extracts all relevant data."
        },
        {
          stepNumber: "2",
          title: "Validate",
          description: "System performs 2-way or 3-way matching and checks for duplicates or fraud."
        },
        {
          stepNumber: "3",
          title: "Approve",
          description: "Invoices are routed for digital approval based on your business rules."
        },
        {
          stepNumber: "4",
          title: "Pay",
          description: "Approved data is pushed to your ERP for payment scheduling and archiving."
        }
      ]}

      faqs={[
        {
          question: "Does it integrate with my accounting software?",
          answer: "Yes, we support integration with major ERPs and accounting systems including SAP, Oracle, Microsoft Dynamics, QuickBooks, and Xero via API.",
        },
        {
          question: "Can it handle non-PO invoices?",
          answer: "Absolutely. Non-PO invoices can be routed for code-and-approve workflows based on departmental budgets or limits.",
        },
        {
          question: "Is the OCR accurate for handwritten invoices?",
          answer: "Our AI-powered OCR is optimized for printed text but includes capability for handwritten recognition. We also provide a verification interface for low-confidence characters.",
        }
      ]}
    />
  );
}
