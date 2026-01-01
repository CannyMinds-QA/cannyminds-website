import type { Metadata } from "next";
import ServicePageLayout from "@/components/templates/ServicePageLayout";
import {
  Inventory,
  CheckCircle,
  Speed,
  Security,
  Assessment,
  Warehouse,
  LocalShipping,
  Storefront,
} from "@mui/icons-material";

export const metadata: Metadata = {
  title: "CannyRMS - Retail Management System & POS | CannyMinds",
  description: "Comprehensive Retail Management System (RMS) and POS solution. Manage multi-location inventory, sales, warehouse, and customer loyalty from one platform.",
  openGraph: {
    title: "CannyRMS - Retail Management System & POS | CannyMinds",
    description: "Comprehensive Retail Management System (RMS) and POS solution. Manage multi-location inventory, sales, warehouse, and customer loyalty from one platform.",
    images: [{ url: "/images/rms-og.jpg", width: 1200, height: 630, alt: "CannyRMS Retail Solution" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CannyRMS",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android, Windows",
  "description": "Integrated Retail Management System for inventory, POS, and supply chain.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
};

export default function CannyRMSPage() {
  return (
    <ServicePageLayout
      title="CannyRMS - Retail Management System"
      subtitle="Complete retail ecosystem for modern businesses. Seamlessly manage inventory, point-of-sale, warehouses, and e-commerce from a single unified platform."
      serviceCategory="Solutions"
      heroImageAlt="Modern retail POS tablet and dashboard showing sales analytics"
      jsonLd={jsonLd}

      overview={
        <>
          <p>
            In today's omnichannel retail environment, managing separate systems for POS, inventory, and e-commerce is a recipe for inefficiency. <strong>CannyRMS</strong> unifies your entire retail operation.
          </p>
          <p>
            From single boutiques to large multi-location chains, our <strong>Retail Management System</strong> provides real-time visibility into stock levels, sales performance, and customer trends.
          </p>
          <p>
            Optimize your supply chain, reduce shrinkage, and deliver exceptional customer experiences with a cloud-ready, secure, and scalable solution.
          </p>
        </>
      }

      features={[
        {
          title: "Intelligent Inventory",
          description: "Real-time stock tracking across all locations. Automated reordering, transfer management, and cycle counting tools.",
          icon: Inventory,
        },
        {
          title: "Omnichannel POS",
          description: "Fast, intuitive Point of Sale compatible with all devices. Process transactions offline and sync when online.",
          icon: Storefront,
        },
        {
          title: "Warehouse Management",
          description: "Streamline receiving, picking, packing, and shipping. Optimize warehouse layout and bin management.",
          icon: Warehouse,
        },
        {
          title: "Multi-Store Management",
          description: "Centralized control for chains. Manage pricing, promotions, and staff permissions across unlimited locations.",
          icon: LocalShipping,
        },
        {
          title: "Advanced Analytics",
          description: "Deep insights into best sellers, slow movers, margins, and staff performance with visual dashboards.",
          icon: Assessment,
        },
        {
          title: "Customer Loyalty",
          description: "Built-in CRM and loyalty programs. Track purchase history and run targeted marketing campaigns.",
          icon: Security,
        },
      ]}

      benefits={[
        {
          title: "Inventory Accuracy",
          description: "Eliminate stock discrepancies and stockouts with real-time tracking.",
          icon: CheckCircle,
        },
        {
          title: "Operational Efficiency",
          description: "Automate manual tasks like ordering and reporting to save hours every week.",
          icon: Speed,
        },
        {
          title: "Increased Sales",
          description: "Deliver better customer service and faster checkout experiences.",
          icon: CheckCircle,
        },
        {
          title: "Scalability",
          description: "Grow from one store to one hundred without changing your software.",
          icon: CheckCircle,
        },
      ]}

      howItWorks={[
        {
          stepNumber: "1",
          title: "Migrate",
          description: "We help import your existing product, customer, and supplier data seamlessly."
        },
        {
          stepNumber: "2",
          title: "Configure",
          description: "Recall customizes workflows, receipts, and permissions to match your business rules."
        },
        {
          stepNumber: "3",
          title: "Train",
          description: "Comprehensive training ensures your staff are confident using the system from day one."
        },
        {
          stepNumber: "4",
          title: "Grow",
          description: "Leverage insights and automation to expand your product lines and locations."
        }
      ]}
    />
  );
}
