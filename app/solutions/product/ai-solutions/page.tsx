import type { Metadata } from "next";
import ServicePageLayout from "@/components/templates/ServicePageLayout";
import {
  Psychology,
  CheckCircle,
  AutoAwesome,
  SmartToy,
  Analytics,
  Insights,
  TrendingUp,
} from "@mui/icons-material";

export const metadata: Metadata = {
  title: "AI Solutions & Automation | Business Process AI | CannyMinds",
  description: "Transform your business with AI-powered automation, machine learning, and intelligent process optimization. Reduce costs, improve accuracy, and scale operations.",
  openGraph: {
    title: "AI Solutions & Automation | Business Process AI | CannyMinds",
    description: "Transform your business with AI-powered automation, machine learning, and intelligent process optimization. Reduce costs, improve accuracy, and scale operations.",
    images: [{ url: "/images/ai-solutions-og.jpg", width: 1200, height: 630, alt: "AI Solutions and Automation" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CannyMinds AI Solutions",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "description": "Enterprise AI and automation solutions for business process optimization.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
};

export default function AISolutionsPage() {
  return (
    <ServicePageLayout
      title="AI Solutions & Intelligent Automation"
      subtitle="Transform your business with AI-powered automation, machine learning, and intelligent process optimization. Reduce costs, improve accuracy, and scale operations."
      serviceCategory="Solutions"
      heroImageAlt="Dashboard showing AI confidence scores and automated process metrics"
      jsonLd={jsonLd}

      overview={
        <>
          <p>
            Artificial Intelligence is no longer a futuristic concept; it is a necessity for modern businesses to stay competitive. Manual processes are slow, error-prone, and cannot scale with demand.
          </p>
          <p>
            <strong>CannyMinds AI Solutions</strong> harness the power of Machine Learning, Natural Language Processing (NLP), and Computer Vision to automate complex tasks, extract insights from data, and predict future trends.
          </p>
          <p>
            From intelligent document processing to predictive maintenance and customer service chatbots, we build AI tools that deliver measurable ROI.
          </p>
        </>
      }

      features={[
        {
          title: "Intelligent Document Processing (IDP)",
          description: "Extract data from unstructured documents like invoices, receipts, and contracts with high accuracy using OCD and NLP.",
          icon: Psychology,
        },
        {
          title: "Robotic Process Automation (RPA)",
          description: "Automate repetitive, rule-based tasks across legacy applications to free up your workforce for higher-value work.",
          icon: SmartToy,
        },
        {
          title: "Predictive Analytics",
          description: "Forecast demand, identify risks, and optimize inventory using historical data and machine learning models.",
          icon: Analytics,
        },
        {
          title: "Business Process Automation",
          description: "End-to-end automation of complex workflows, integrating human decision points with AI-driven actions.",
          icon: AutoAwesome,
        },
        {
          title: "AI Insights & Recommendations",
          description: "Turn raw data into actionable insights. Identify trends, anomalies, and opportunities for optimization automatically.",
          icon: Insights,
        },
        {
          title: "Custom Model Development",
          description: "Build and deploy custom machine learning models tailored to your specific industry and business challenges.",
          icon: TrendingUp,
        },
      ]}

      benefits={[
        {
          title: "Productivity Gains",
          description: "Automate up to 80% of routine tasks, allowing your team to focus on strategic initiatives and innovation.",
          icon: CheckCircle,
        },
        {
          title: "Cost Reduction",
          description: "Significantly lower operational costs by reducing manual labor, errors, and processing time.",
          icon: CheckCircle,
        },
        {
          title: "Improved Decision Making",
          description: "Make faster, data-driven decisions with real-time insights and predictive analytics.",
          icon: CheckCircle,
        },
        {
          title: "Scalability",
          description: "Scale operations instantly without adding headcount. operate 24/7 with digital workers.",
          icon: CheckCircle,
        },
      ]}

      howItWorks={[
        {
          stepNumber: "1",
          title: "Discover",
          description: "We analyze your data and processes to identify high-impact automation opportunities."
        },
        {
          stepNumber: "2",
          title: "Model",
          description: "We select or train AI models customized to your specific data and requirements."
        },
        {
          stepNumber: "3",
          title: "Integrate",
          description: "Seamlessly integrate AI solutions with your existing software and workflows."
        },
        {
          stepNumber: "4",
          title: "Optimize",
          description: "Continuous monitoring and retraining ensures models improve over time."
        }
      ]}
    />
  );
}
