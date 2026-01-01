import type { Metadata } from "next";
import IndustryPageLayout, {
  IndustryChallenge,
  IndustrySolution,
  IndustryBenefit,
  IndustryUseCase,
  WhyChooseUsItem
} from "@/components/templates/IndustryPageLayout";
import {
  AccountBalance,
  CheckCircle,
  Description,
  People,
  Scanner,
  Visibility,
  Security,
  Gavel,
  Assessment,
} from "@mui/icons-material";

export const metadata: Metadata = {
  title: "Government & Public Sector IT Solutions | CannyMinds",
  description: "FOIA-compliant digital solutions for government agencies. Secure document management, public records management, audit trails, and workflow automation.",
  alternates: {
    canonical: "https://www.cannymindstech.com/industries/government",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  "name": "Government & Public Sector IT Solutions",
  "description": "Digital transformation solutions for government and public sector."
};

export default function GovernmentIndustryPage() {
  const challenges: IndustryChallenge[] = [
    {
      title: "[Write Challenge Title]",
      description: "[Write 30-50 words describing SOX compliance, regulatory challenges, audit requirements]",
      icon: Gavel,
    },
    {
      title: "[Write Challenge Title]",
      description: "[Write 30-50 words describing secure document storage, customer data protection]",
      icon: Security,
    },
    {
      title: "[Write Challenge Title]",
      description: "[Write 30-50 words describing KYC/AML documentation, contract management]",
      icon: Assessment,
    },
    {
      title: "[Write Challenge Title]",
      description: "[Write 30-50 words describing loan/policy processing, workflow challenges]",
      icon: Description,
    },
  ];

  const solutions: IndustrySolution[] = [
    {
      title: "CannyECM for Government",
      description: "[Write 50-80 words: How CannyECM helps banks/Government Agencies manage loan documents, policies, contracts, KYC/AML documentation, SOX compliance, audit trails, etc.]",
      icon: Description,
      link: "/solutions/document-management",
    },
    {
      title: "CannyHR for Public Sector",
      description: "[Write 50-80 words: How CannyHR manages employee compliance, certifications, payroll for financial staff, background checks, regulatory training, etc.]",
      icon: People,
      link: "/solutions/hr-management",
    },
    {
      title: "CannyScan for Archives",
      description: "[Write 50-80 words: How CannyScan digitizes legacy financial records, loan applications, insurance policies, contracts, regulatory documentation, etc.]",
      icon: Scanner,
      link: "/solutions/scanning-solution",
    },
    {
      title: "CannyTrack for Operations",
      description: "[Write 50-80 words: How CannyTrack monitors compliance activities, tracks client interactions, manages remote financial advisors, etc.]",
      icon: Visibility,
      link: "/solutions/tracking-system",
    },
  ];

  const benefits: IndustryBenefit[] = [
    {
      title: "SOX Compliance",
      description: "[Write 30-50 words about Sarbanes-Oxley compliance, audit trails, financial controls]",
      icon: Gavel,
    },
    {
      title: "Data Security",
      description: "[Write 30-50 words about encryption, secure access, PCI DSS compliance, customer data protection]",
      icon: Security,
    },
    {
      title: "Audit Readiness",
      description: "[Write 30-50 words about automated audit trails, version control, compliance reporting]",
      icon: Assessment,
    },
    {
      title: "Cost Reduction",
      description: "[Write 30-50 words about reducing storage costs, manual processing, compliance penalties - include percentages if possible]",
      icon: CheckCircle,
    },
    {
      title: "KYC/AML Efficiency",
      description: "[Write 30-50 words about faster customer onboarding, automated compliance checks, document verification]",
      icon: Description,
    },
    {
      title: "Risk Management",
      description: "[Write 30-50 words about document security, access controls, compliance tracking]",
      icon: AccountBalance,
    },
  ];

  const useCases: IndustryUseCase[] = [
    {
      title: "[Use Case 1 Title: e.g., 'Large Manufacturing Plant Achieves ISO Certification']",
      company: "[Write company type: e.g., 'Mid-sized automotive parts manufacturer with 500 employees']",
      challenge: "[Write 40-60 words describing the specific challenge this company faced]",
      solution: "[Write 60-80 words explaining which CannyMinds products were used and how they solved the problem]",
      results: [
        "[Quantifiable result #1: e.g., 'Achieved ISO 9001:2015 certification in 6 months']",
        "[Quantifiable result #2: e.g., 'Reduced document retrieval time by 80%']",
        "[Quantifiable result #3: e.g., '$75,000 annual savings in storage costs']"
      ]
    },
    {
      title: "[Use Case 2 Title]",
      company: "[Write company type]",
      challenge: "[Write 40-60 words]",
      solution: "[Write 60-80 words]",
      results: [
        "[Result 1]",
        "[Result 2]",
        "[Result 3]"
      ]
    }
  ];

  const whyChooseUs: WhyChooseUsItem[] = [
    {
      title: "Industry Expertise",
      description: "[Write about years of experience in manufacturing, number of manufacturing clients, industry certifications]"
    },
    {
      title: "Proven Track Record",
      description: "[Write about 500+ clients, 20+ years, success metrics]"
    },
    {
      title: "ISO Certified Solutions",
      description: "[Write about ISO 9001:2015 certification and compliance features]"
    },
    {
      title: "Flexible Deployment",
      description: "[Write about cloud, on-premise, hybrid options]"
    },
    {
      title: "24/7 Global Support",
      description: "[Write about support coverage, offices in India/USA/Nigeria]"
    }
  ];

  return (
    <IndustryPageLayout
      title="[Write Main Heading: Government & Public Sector IT Solutions]"
      subtitle="[Write sub-heading: ISO-compliant digital solutions for government agencies. Manage quality documents, automate production workflows, achieve compliance, and optimize workforce management.]"
      heroIcon={AccountBalance}
      heroColorClass="text-green-700"
      heroBgClass="bg-gradient-to-br from-green-50 to-white"

      overviewTitle="[Write H2: Digital Transformation for Government & Public Sector]"
      overviewContent={
        <>
          <p>[Write Paragraph 1: Discuss current state of manufacturing industry, Industry 4.0 trends, digital transformation adoption, competitive pressure, need for modern IT solutions]</p>
          <p>[Write Paragraph 2: Explain how CannyMinds helps manufacturers, our ISO-certified solutions, integration with existing systems, proven track record in manufacturing sector]</p>
        </>
      }

      challenges={challenges}
      solutions={solutions}
      benefits={benefits}
      useCases={useCases}
      whyChooseUs={whyChooseUs}
      whyChooseUsTitle="[Write H2: Why Government IT Leaders Trust CannyMinds]"

      ctaBgClass="bg-green-700"
      jsonLd={jsonLd}
    />
  );
}

