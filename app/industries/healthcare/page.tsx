import type { Metadata } from "next";
import IndustryPageLayout, {
  IndustryChallenge,
  IndustrySolution,
  IndustryBenefit,
  IndustryUseCase,
  WhyChooseUsItem
} from "@/components/templates/IndustryPageLayout";
import {
  LocalHospital,
  Security,
  CloudDone,
  VerifiedUser,
  Description,
  People,
  Scanner,
  Visibility,
  CheckCircle,
  Medication
} from "@mui/icons-material";

export const metadata: Metadata = {
  title: "Healthcare & Pharmaceuticals IT Solutions | CannyMinds",
  description: "HIPAA-compliant digital solutions for healthcare, hospitals, and pharmaceutical companies. Secure patient records, compliance management, and workflow automation.",
  alternates: {
    canonical: "https://www.cannymindstech.com/industries/healthcare",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Healthcare & Pharmaceuticals IT Solutions",
  "description": "HIPAA-compliant digital solutions for healthcare providers."
};

export default function HealthcareIndustryPage() {
  const challenges: IndustryChallenge[] = [
    {
      title: "[Write Challenge Title]",
      description: "[Write 30-50 words describing HIPAA compliance, data privacy, audit requirements]",
      icon: VerifiedUser,
    },
    {
      title: "[Write Challenge Title]",
      description: "[Write 30-50 words describing patient record management, interoperability challenges]",
      icon: Description,
    },
    {
      title: "[Write Challenge Title]",
      description: "[Write 30-50 words describing supply chain or pharmacy inventory challenges]",
      icon: Medication,
    },
    {
      title: "[Write Challenge Title]",
      description: "[Write 30-50 words describing workforce management, shift scheduling, credentialing]",
      icon: People,
    },
  ];

  const solutions: IndustrySolution[] = [
    {
      title: "CannyECM for Healthcare",
      description: "[Write 50-80 words: How CannyECM helps hospitals manage patient records, medical reports, HIPAA forms, insurance claims, etc.]",
      icon: Description,
      link: "/solutions/document-management",
    },
    {
      title: "CannyHR for Hospitals",
      description: "[Write 50-80 words: How CannyHR manages medical staff credentialing, shift scheduling, payroll, compliance training, etc.]",
      icon: People,
      link: "/solutions/hr-management",
    },
    {
      title: "CannyScan for Medical Records",
      description: "[Write 50-80 words: How CannyScan digitizes legacy patient files, x-rays, paper charts, administrative documents, etc.]",
      icon: Scanner,
      link: "/solutions/scanning-solution",
    },
    {
      title: "CannyTrack for Patient Care",
      description: "[Write 50-80 words: How CannyTrack monitors patient flow, equipment usage, staff allocation, etc.]",
      icon: Visibility,
      link: "/solutions/tracking-system",
    },
  ];

  const benefits: IndustryBenefit[] = [
    {
      title: "HIPAA Compliance",
      description: "[Write 30-50 words about built-in security controls, audit trails, regulatory compliance]",
      icon: VerifiedUser,
    },
    {
      title: "Data Security",
      description: "[Write 30-50 words about end-to-end encryption, role-based access controls, PHI protection]",
      icon: Security,
    },
    {
      title: "Operational Efficiency",
      description: "[Write 30-50 words about reducing wait times, automating admissions, faster claim processing]",
      icon: CheckCircle,
    },
    {
      title: "Cost Reduction",
      description: "[Write 30-50 words about reducing paper costs, storage needs, administrative overhead]",
      icon: CloudDone,
    },
    {
      title: "Patient Experience",
      description: "[Write 30-50 words about faster service, accurate records, better care coordination]",
      icon: LocalHospital,
    },
    {
      title: "Pharmacy Management",
      description: "[Write 30-50 words about inventory tracking, prescription management, supply chain visibility]",
      icon: Medication,
    },
  ];

  const useCases: IndustryUseCase[] = [
    {
      title: "[Use Case 1 Title: e.g., 'Regional Hospital Digitizes 1M+ Patient Records']",
      company: "[Write company type: e.g., 'Multi-specialty hospital with 300 beds']",
      challenge: "[Write 40-60 words describing the specific challenge this hospital faced]",
      solution: "[Write 60-80 words explaining which CannyMinds products were used and how they solved the problem]",
      results: [
        "[Quantifiable result #1: e.g., '100% HIPAA compliance achieved']",
        "[Quantifiable result #2: e.g., 'Reduced record retrieval time from 30 mins to 30 seconds']",
        "[Quantifiable result #3: e.g., 'Saved $120,000 in storage space annually']"
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
      title: "Healthcare Expertise",
      description: "[Write about experience in healthcare IT, understanding of clinical workflows]"
    },
    {
      title: "HIPAA Certified",
      description: "[Write about security certifications, compliance guarantees]"
    },
    {
      title: "Interoperability",
      description: "[Write about HL7/FHIR standards support, integration with EMR/EHR systems]"
    },
    {
      title: "24/7 Support",
      description: "[Write about critical support for medical facilities]"
    },
    {
      title: "Scalable Solutions",
      description: "[Write about solutions for small clinics to large hospital networks]"
    }
  ];

  return (
    <IndustryPageLayout
      title="[Write Main Heading: Healthcare & Pharmaceuticals IT Solutions]"
      subtitle="[Write sub-heading: HIPAA-compliant digital solutions designed specifically for hospitals, clinics, and pharmaceutical companies to secure patient data and streamline workflows.]"
      heroIcon={LocalHospital}
      heroColorClass="text-cyan-600"
      heroBgClass="bg-gradient-to-br from-cyan-50 to-white"

      overviewTitle="[Write H2: Digital Transformation in Healthcare]"
      overviewContent={
        <>
          <p>[Write Paragraph 1: Discuss challenges in modern healthcare, data explosion, regulatory pressure, need for interoperability and patient-centric care]</p>
          <p>[Write Paragraph 2: Explain how CannyMinds empowers healthcare providers with secure, compliant, and efficient digital tools]</p>
        </>
      }

      challenges={challenges}
      solutions={solutions}
      benefits={benefits}
      useCases={useCases}
      whyChooseUs={whyChooseUs}
      whyChooseUsTitle="[Write H2: Why Healthcare Leaders Trust CannyMinds]"

      ctaBgClass="bg-cyan-600"
      jsonLd={jsonLd}
    />
  );
}
