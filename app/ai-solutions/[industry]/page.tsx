"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import {
  Psychology,
  Speed,
  Security,
  TrendingUp,
  LocalHospital,
  Factory,
  AccountBalance,
  ShoppingCart,
  Gavel,
  Campaign,
  Home as HomeIcon,
  Checkroom,
  Biotech,
  ArrowForward,
  CheckCircle,
  ArrowBack,
  Lightbulb,
  Timeline,
  Support,
  VerifiedUser,
  AutoAwesome,
  Description,
  SmartToy,
  Analytics,
  Build,
  Business,
  Assignment,
  Group,
  AttachMoney,
  LocalShipping,
  Inventory,
  Search,
  PersonSearch,
  Receipt,
  Gavel as LegalIcon,
  Assessment,
  ChatBubble,
  Mic,
  ViewInAr,
  CameraAlt,
  Brush,
  TrendingFlat,
  Category,
  Storefront,
  Star,
  Email,
  Share,
  Movie,
  Edit,
  Layers,
  ContactMail,
  WorkOutline,
  Calculate,
} from "@mui/icons-material";

// Comprehensive Industry Data with Real Content from Documents
const industryData: Record<string, {
  name: string;
  icon: typeof LocalHospital;
  primaryColor: string;
  lightBg: string;
  borderColor: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  overview: string;
  challenges: string[];
  useCases: {
    title: string;
    icon: typeof Speed;
    description: string;
    benefits: string[];
    metrics?: string;
  }[];
  benefits: { icon: typeof Speed; title: string; description: string }[];
  stats: { value: string; label: string }[];
  whyChooseUs: string[];
  compliance?: string[];
  caseStudyTeaser?: string;
}> = {
  healthcare: {
    name: "Healthcare",
    icon: LocalHospital,
    primaryColor: "text-red-600",
    lightBg: "bg-red-50",
    borderColor: "border-red-200",
    heroTitle: "Generative AI Solutions for Healthcare",
    heroSubtitle: "Transform Patient Care with Intelligent Automation",
    heroDescription: "Streamline patient registration, automate billing workflows, enhance clinical coding accuracy, and improve TPA communication with enterprise-grade AI solutions designed for healthcare compliance.",
    overview: "Healthcare organizations face mounting pressure to deliver quality patient care while managing complex administrative workflows, regulatory compliance, and rising costs. CannyMinds Healthcare AI solutions leverage advanced Generative AI to automate document-intensive processes like patient registration, billing, clinical coding, and insurance communication—reducing administrative burden by up to 70% while improving accuracy and patient satisfaction.",
    challenges: [
      "Manual patient registration causing long wait times and data entry errors",
      "Complex medical billing with high claim rejection rates",
      "Inconsistent clinical coding affecting reimbursement accuracy",
      "Delayed TPA communication impacting patient care",
      "HIPAA compliance requirements for all data handling",
      "Integration with existing EHR and practice management systems"
    ],
    useCases: [
      {
        title: "Intelligent Patient Registration",
        icon: PersonSearch,
        description: "AI-powered document extraction automatically captures patient demographics, insurance details, and medical history from ID cards, insurance cards, and intake forms. Real-time validation ensures data accuracy while reducing registration time from 15 minutes to under 3 minutes.",
        benefits: [
          "80% reduction in registration time",
          "95%+ data extraction accuracy",
          "Seamless EHR integration",
          "Multi-language support for diverse patient populations"
        ],
        metrics: "Process 500+ patient registrations per day with 2 FTE reduction"
      },
      {
        title: "Automated Medical Billing",
        icon: Receipt,
        description: "End-to-end billing automation from charge capture to claim submission. AI validates CPT/ICD codes, identifies missing documentation, and auto-generates clean claims that pass payer edits on first submission.",
        benefits: [
          "40% reduction in claim denials",
          "First-pass claim acceptance rate above 95%",
          "Automated eligibility verification",
          "Real-time billing analytics dashboard"
        ],
        metrics: "Recover $2M+ annually in previously denied claims"
      },
      {
        title: "Clinical Coding Assistant",
        icon: Assignment,
        description: "Generative AI analyzes clinical documentation to suggest accurate ICD-10, CPT, and HCPCS codes. Natural language processing extracts diagnoses, procedures, and modifiers while flagging coding discrepancies for coder review.",
        benefits: [
          "30% improvement in coding accuracy",
          "Reduced coder burnout with AI assistance",
          "Audit-ready documentation",
          "Continuous learning from coder feedback"
        ],
        metrics: "Process 200+ charts per coder per day vs. 80 manually"
      },
      {
        title: "TPA Communication Automation",
        icon: ChatBubble,
        description: "Intelligent automation of pre-authorization requests, claim status inquiries, and denial appeals. AI generates context-aware correspondence and tracks communication workflows across multiple TPAs.",
        benefits: [
          "60% faster pre-authorization turnaround",
          "Automated denial appeal generation",
          "Real-time claim status tracking",
          "Unified TPA communication dashboard"
        ],
        metrics: "Handle 1000+ TPA interactions daily without manual intervention"
      },
      {
        title: "Medical Records Processing",
        icon: Description,
        description: "Extract and structure data from handwritten clinical notes, lab reports, discharge summaries, and referral letters. AI converts unstructured medical documents into searchable, coded clinical data.",
        benefits: [
          "90% reduction in manual data entry",
          "Improved clinical decision support",
          "Enhanced care coordination",
          "HIPAA-compliant processing"
        ],
        metrics: "Digitize 10,000+ pages of medical records per month"
      },
      {
        title: "Patient Communication AI",
        icon: SmartToy,
        description: "Deploy intelligent chatbots for appointment scheduling, prescription refill requests, and clinical inquiries. AI assistants provide 24/7 patient support while escalating complex issues to clinical staff.",
        benefits: [
          "24/7 patient self-service",
          "50% reduction in call center volume",
          "Personalized health reminders",
          "Multilingual patient support"
        ],
        metrics: "Automate 70% of routine patient inquiries"
      }
    ],
    benefits: [
      { icon: Speed, title: "Faster Patient Care", description: "Reduce administrative wait times by 60% for improved patient experience" },
      { icon: Security, title: "HIPAA Compliant", description: "Enterprise-grade security with full HIPAA, HITECH, and SOC 2 compliance" },
      { icon: TrendingUp, title: "Revenue Optimization", description: "Increase clean claim rates and reduce revenue cycle days" },
      { icon: Support, title: "24/7 AI Support", description: "Round-the-clock intelligent assistance for staff and patients" }
    ],
    stats: [
      { value: "70%", label: "Admin Time Saved" },
      { value: "95%", label: "Data Accuracy" },
      { value: "40%", label: "Fewer Denials" },
      { value: "50+", label: "Healthcare Clients" }
    ],
    whyChooseUs: [
      "20+ years of healthcare IT experience",
      "Pre-built integrations with Epic, Cerner, Meditech, and 50+ EHR systems",
      "HIPAA BAA and SOC 2 Type II certified",
      "Dedicated healthcare AI implementation team",
      "Proven ROI within 6 months of deployment"
    ],
    compliance: ["HIPAA", "HITECH", "SOC 2 Type II", "GDPR"],
    caseStudyTeaser: "A 500-bed hospital reduced patient registration time by 75% and recovered $1.8M in denied claims within the first year of deployment."
  },

  pharmaceutical: {
    name: "Pharmaceutical",
    icon: Biotech,
    primaryColor: "text-purple-600",
    lightBg: "bg-purple-50",
    borderColor: "border-purple-200",
    heroTitle: "Generative AI for Pharmaceutical Manufacturing",
    heroSubtitle: "Accelerate Compliance, Quality, and Time-to-Market",
    heroDescription: "Automate electronic Batch Manufacturing Records (eBMR), streamline CAPA processes, enhance quality inspections, and enable predictive maintenance—all while ensuring FDA 21 CFR Part 11 compliance.",
    overview: "Pharmaceutical manufacturing demands rigorous quality control, complete traceability, and regulatory compliance. CannyMinds Pharma AI solutions digitize and automate critical processes including eBMR review, deviation management, CAPA workflows, and quality inspections. Our AI is purpose-built for FDA 21 CFR Part 11 compliance with complete audit trails, electronic signatures, and data integrity controls.",
    challenges: [
      "Manual eBMR review causing batch release delays",
      "Inconsistent deviation identification and CAPA tracking",
      "Time-consuming quality inspections with human variability",
      "Unplanned equipment downtime affecting production schedules",
      "Complex FDA 21 CFR Part 11 compliance requirements",
      "Integration with existing MES, LIMS, and QMS systems"
    ],
    useCases: [
      {
        title: "Electronic Batch Record (eBMR) Automation",
        icon: Description,
        description: "AI-powered review of electronic batch records identifies deviations, missing entries, and out-of-spec results in real-time. Automated cross-referencing against SOPs and master batch records ensures consistency and compliance.",
        benefits: [
          "80% faster batch record review",
          "100% compliance with master batch record",
          "Automated deviation flagging",
          "Complete audit trail for FDA inspections"
        ],
        metrics: "Reduce batch release time from 5 days to 1 day"
      },
      {
        title: "CAPA Management Intelligence",
        icon: Build,
        description: "Generative AI analyzes deviation patterns, suggests root causes, and recommends corrective and preventive actions based on historical data and industry best practices. Automated tracking ensures timely CAPA closure.",
        benefits: [
          "50% reduction in recurring deviations",
          "AI-suggested root cause analysis",
          "Automated CAPA effectiveness verification",
          "Trend analysis across product lines"
        ],
        metrics: "Close CAPAs 40% faster with higher effectiveness rates"
      },
      {
        title: "Quality Inspection Automation",
        icon: CameraAlt,
        description: "Computer vision and AI models automate visual inspection of tablets, capsules, vials, and packaging. Real-time defect detection identifies cracks, color variations, fill level issues, and labeling errors.",
        benefits: [
          "99.5% defect detection accuracy",
          "24/7 inspection capability",
          "Consistent quality standards",
          "Detailed defect categorization and trending"
        ],
        metrics: "Inspect 100,000+ units per hour with zero human fatigue"
      },
      {
        title: "Predictive Equipment Maintenance",
        icon: Timeline,
        description: "IoT sensors and AI models predict equipment failures before they occur. Maintenance scheduling optimization reduces unplanned downtime while extending equipment life.",
        benefits: [
          "50% reduction in unplanned downtime",
          "Optimized spare parts inventory",
          "Extended equipment lifespan",
          "Maintenance cost reduction"
        ],
        metrics: "Predict failures 2 weeks in advance with 90% accuracy"
      },
      {
        title: "Regulatory Document Generation",
        icon: Assignment,
        description: "AI assists in generating regulatory submissions, stability reports, and validation documents. Automated cross-referencing ensures consistency across dossiers and compliance with regional requirements.",
        benefits: [
          "60% faster document preparation",
          "Consistent formatting and terminology",
          "Automated reference checking",
          "Multi-region submission support"
        ],
        metrics: "Reduce regulatory submission preparation by 3 months"
      },
      {
        title: "Laboratory Data Management",
        icon: Analytics,
        description: "Intelligent extraction and analysis of laboratory data from instruments, LIMS, and paper records. AI identifies trends, flags OOS results, and generates stability reports automatically.",
        benefits: [
          "Automated OOS investigation initiation",
          "Real-time trend monitoring",
          "Paperless lab operations",
          "Seamless LIMS integration"
        ],
        metrics: "Process 10,000+ test results per day with full traceability"
      }
    ],
    benefits: [
      { icon: Speed, title: "Faster Time-to-Market", description: "Accelerate batch release and regulatory submissions" },
      { icon: Security, title: "FDA 21 CFR Part 11", description: "Purpose-built for pharmaceutical regulatory compliance" },
      { icon: TrendingUp, title: "Quality Excellence", description: "Consistent quality with AI-powered inspection" },
      { icon: Lightbulb, title: "Predictive Insights", description: "Prevent issues before they impact production" }
    ],
    stats: [
      { value: "80%", label: "Faster Batch Review" },
      { value: "99.5%", label: "Inspection Accuracy" },
      { value: "50%", label: "Less Downtime" },
      { value: "30+", label: "Pharma Clients" }
    ],
    whyChooseUs: [
      "FDA 21 CFR Part 11 compliant by design",
      "Pre-validated templates for IQ/OQ/PQ",
      "Integration with SAP, Oracle, and major MES systems",
      "Experienced pharma validation team",
      "GxP-qualified cloud infrastructure"
    ],
    compliance: ["FDA 21 CFR Part 11", "EU Annex 11", "GMP", "GAMP 5"],
    caseStudyTeaser: "A leading generic manufacturer reduced batch release time by 75% and eliminated 200+ hours of manual eBMR review per month."
  },

  insurance: {
    name: "Insurance",
    icon: VerifiedUser,
    primaryColor: "text-blue-600",
    lightBg: "bg-blue-50",
    borderColor: "border-blue-200",
    heroTitle: "Generative AI Solutions for Insurance",
    heroSubtitle: "Automate Claims, Detect Fraud, Accelerate Underwriting",
    heroDescription: "Transform insurance operations with intelligent document processing, AI-powered claims automation, advanced fraud detection, and data-driven underwriting decisions that improve loss ratios and customer satisfaction.",
    overview: "Insurance companies process millions of documents and claims annually, facing challenges with manual processing delays, fraudulent claims, and inconsistent underwriting decisions. CannyMinds Insurance AI solutions leverage Intelligent Document Processing (IDP), machine learning fraud detection, and generative AI to automate end-to-end insurance workflows—from policy issuance to claims settlement.",
    challenges: [
      "Manual claims processing causing settlement delays",
      "Fraudulent claims increasing loss ratios",
      "Inconsistent underwriting decisions across teams",
      "Document-heavy processes slowing operations",
      "Customer dissatisfaction with claim turnaround times",
      "Legacy system integration complexity"
    ],
    useCases: [
      {
        title: "Intelligent Claims Processing",
        icon: Description,
        description: "End-to-end claims automation from FNOL to settlement. AI extracts data from claim forms, medical records, police reports, and repair estimates. Automated adjudication for straightforward claims with routing of complex cases to adjusters.",
        benefits: [
          "70% faster claims processing",
          "Straight-through processing for 60% of claims",
          "Reduced manual data entry by 85%",
          "Consistent adjudication decisions"
        ],
        metrics: "Process 10,000+ claims per month with 3x fewer adjusters"
      },
      {
        title: "AI-Powered Fraud Detection",
        icon: Security,
        description: "Machine learning models analyze claim patterns, claimant behavior, provider networks, and external data sources to identify suspicious claims in real-time. Network analysis detects organized fraud rings and repeat offenders.",
        benefits: [
          "Detect 95% of fraudulent claims",
          "Reduce false positives by 60%",
          "Real-time fraud scoring",
          "Organized fraud ring identification"
        ],
        metrics: "Save $5M+ annually in prevented fraudulent payouts"
      },
      {
        title: "Automated Underwriting",
        icon: Assessment,
        description: "AI analyzes application data, medical records, financial documents, and third-party data sources for instant risk assessment. Generative AI explains underwriting decisions and suggests appropriate coverage and pricing.",
        benefits: [
          "60% faster underwriting decisions",
          "More accurate risk pricing",
          "Expanded risk appetite with AI insights",
          "Consistent underwriting across channels"
        ],
        metrics: "Underwrite 80% of applications automatically"
      },
      {
        title: "Document Intelligence Platform",
        icon: Layers,
        description: "Unified intelligent document processing for all insurance document types—applications, policies, endorsements, claims, medical records, and correspondence. AI extraction with 99%+ accuracy across structured and unstructured documents.",
        benefits: [
          "99%+ extraction accuracy",
          "Support for 100+ document types",
          "Handwritten text recognition",
          "Multi-language processing"
        ],
        metrics: "Process 1M+ documents per month with 90% automation"
      },
      {
        title: "Customer Service Automation",
        icon: SmartToy,
        description: "Deploy AI chatbots and voice assistants for policy inquiries, claims status, coverage questions, and routine transactions. Seamless handoff to human agents for complex issues.",
        benefits: [
          "24/7 customer self-service",
          "80% first-call resolution",
          "Reduced call center costs by 40%",
          "Improved customer satisfaction scores"
        ],
        metrics: "Handle 100,000+ customer interactions monthly"
      },
      {
        title: "Policy Document Generation",
        icon: Edit,
        description: "Generative AI creates policy documents, endorsements, and correspondence from structured data. Ensure compliance with regulatory requirements and brand consistency across all customer communications.",
        benefits: [
          "90% faster document generation",
          "Zero manual formatting errors",
          "Regulatory compliance built-in",
          "Personalized customer communications"
        ],
        metrics: "Generate 50,000+ policy documents per month automatically"
      }
    ],
    benefits: [
      { icon: Speed, title: "Faster Settlement", description: "Reduce claims cycle time from weeks to days" },
      { icon: Security, title: "Fraud Prevention", description: "AI-powered detection saves millions annually" },
      { icon: TrendingUp, title: "Better Loss Ratios", description: "Accurate underwriting improves profitability" },
      { icon: Support, title: "24/7 Service", description: "AI assistants provide round-the-clock support" }
    ],
    stats: [
      { value: "70%", label: "Faster Claims" },
      { value: "95%", label: "Fraud Detection" },
      { value: "$5M+", label: "Annual Savings" },
      { value: "40+", label: "Insurance Clients" }
    ],
    whyChooseUs: [
      "Pre-built models for P&C, Life, and Health insurance",
      "Integration with Guidewire, Duck Creek, and major PAS systems",
      "Regulatory compliance for all 50 US states",
      "SOC 2 Type II and ISO 27001 certified",
      "Dedicated insurance domain experts"
    ],
    compliance: ["SOC 2 Type II", "ISO 27001", "State Insurance Regulations", "GDPR"],
    caseStudyTeaser: "A regional P&C insurer reduced claims processing time by 65% and detected $3.2M in fraudulent claims in the first year."
  },

  nbfc: {
    name: "NBFC & Finance",
    icon: AccountBalance,
    primaryColor: "text-green-600",
    lightBg: "bg-green-50",
    borderColor: "border-green-200",
    heroTitle: "Generative AI for NBFC & Financial Services",
    heroSubtitle: "Automate Lending, Enhance Credit Decisions, Ensure Compliance",
    heroDescription: "Streamline loan origination, accelerate credit decisioning, automate KYC verification, optimize collections, and ensure RBI compliance with AI solutions designed for Indian financial services.",
    overview: "Non-Banking Financial Companies operate in a highly competitive, regulated environment where speed, accuracy, and compliance are critical. CannyMinds NBFC AI solutions automate the entire lending lifecycle—from lead qualification and credit assessment to collections and compliance reporting. Our AI is built for Indian regulatory requirements including RBI guidelines, KYC norms, and GST compliance.",
    challenges: [
      "Manual loan processing causing slow turnaround times",
      "High cost of customer acquisition with low conversion",
      "Inconsistent credit decisions across branches",
      "Complex KYC and AML compliance requirements",
      "Inefficient collection processes with high NPAs",
      "Integration with multiple bureau and verification systems"
    ],
    useCases: [
      {
        title: "Intelligent Lead Qualification",
        icon: PersonSearch,
        description: "AI analyzes lead data, digital footprint, and bureau information to score and prioritize leads. Automated nurturing campaigns engage prospects while AI identifies the right products and optimal contact times.",
        benefits: [
          "40% improvement in lead conversion",
          "Automated lead scoring and routing",
          "Personalized product recommendations",
          "Reduced cost per acquisition"
        ],
        metrics: "Convert 3x more leads with the same sales team"
      },
      {
        title: "Automated Credit Assessment",
        icon: Assessment,
        description: "AI-powered credit memo generation analyzing financial statements, bank statements, ITR, GST returns, and alternative data. Machine learning models provide credit scores and loan recommendations with explainable decisions.",
        benefits: [
          "80% faster credit decisions",
          "Alternative data for thin-file customers",
          "Reduced credit risk with AI scoring",
          "Consistent underwriting standards"
        ],
        metrics: "Process 500+ loan applications per day automatically"
      },
      {
        title: "KYC and Document Verification",
        icon: VerifiedUser,
        description: "Automated extraction and verification of KYC documents including Aadhaar, PAN, bank statements, and address proofs. Real-time validation against government databases and AML screening.",
        benefits: [
          "90% faster KYC completion",
          "Real-time document verification",
          "Automated AML/CFT screening",
          "Digital KYC compliance"
        ],
        metrics: "Complete KYC in under 5 minutes vs. 2 days manually"
      },
      {
        title: "Collections Optimization",
        icon: AttachMoney,
        description: "AI predicts payment behavior and recommends optimal collection strategies for each customer. Automated communication via preferred channels with personalized messaging improves recovery rates.",
        benefits: [
          "25% improvement in recovery rates",
          "Reduced collection costs",
          "Personalized repayment plans",
          "Compliance with RBI collection guidelines"
        ],
        metrics: "Recover Rs. 10Cr+ additional annually for mid-size NBFC"
      },
      {
        title: "Regulatory Compliance Automation",
        icon: Gavel,
        description: "Automated generation of RBI reports, compliance dashboards, and audit documentation. AI monitors regulatory changes and flags compliance gaps with recommended actions.",
        benefits: [
          "100% on-time regulatory submissions",
          "Automated compliance monitoring",
          "Audit-ready documentation",
          "Regulatory change tracking"
        ],
        metrics: "Reduce compliance team effort by 60%"
      },
      {
        title: "Customer Service AI",
        icon: SmartToy,
        description: "Multilingual AI assistants handle loan inquiries, EMI calculations, payment status, and document submissions. Voice bots in Hindi and regional languages improve rural customer engagement.",
        benefits: [
          "24/7 customer support",
          "10+ Indian language support",
          "70% query automation",
          "Improved customer satisfaction"
        ],
        metrics: "Handle 50,000+ customer queries monthly"
      }
    ],
    benefits: [
      { icon: Speed, title: "Faster Disbursement", description: "Same-day loan disbursement with AI automation" },
      { icon: Security, title: "RBI Compliant", description: "Built for Indian regulatory requirements" },
      { icon: TrendingUp, title: "Lower NPAs", description: "Better credit decisions reduce defaults" },
      { icon: Timeline, title: "Real-time Processing", description: "Process applications in minutes" }
    ],
    stats: [
      { value: "80%", label: "Faster Processing" },
      { value: "25%", label: "Lower NPAs" },
      { value: "90%", label: "KYC Automation" },
      { value: "35+", label: "NBFC Clients" }
    ],
    whyChooseUs: [
      "Purpose-built for Indian NBFC regulatory environment",
      "Integration with CIBIL, Experian, CRIF, and all major bureaus",
      "Aadhaar, PAN, and GST verification APIs",
      "RBI digital lending compliance",
      "Multilingual support for pan-India operations"
    ],
    compliance: ["RBI Guidelines", "KYC/AML Norms", "Digital Lending Guidelines", "GDPR"],
    caseStudyTeaser: "A vehicle finance NBFC reduced loan processing time from 7 days to 4 hours and improved collection efficiency by 30%."
  },

  manufacturing: {
    name: "Manufacturing & Automotive",
    icon: Factory,
    primaryColor: "text-orange-600",
    lightBg: "bg-orange-50",
    borderColor: "border-orange-200",
    heroTitle: "Generative AI for Manufacturing & Automotive",
    heroSubtitle: "Optimize Production, Ensure Safety, Predict Maintenance",
    heroDescription: "Transform manufacturing operations with AI-powered safety monitoring, predictive maintenance, automated quality inspection, and intelligent document processing for Shop Floor, EHS, and R&D functions.",
    overview: "Manufacturing and automotive industries face intense pressure to improve productivity, ensure worker safety, maintain quality, and reduce costs. CannyMinds Manufacturing AI solutions leverage computer vision, IoT analytics, and generative AI to automate safety compliance, predict equipment failures, detect defects in real-time, and digitize paper-based processes across the shop floor.",
    challenges: [
      "Worker safety incidents and compliance violations",
      "Unplanned equipment downtime affecting production",
      "Manual quality inspection with inconsistent results",
      "Paper-based processes slowing operations",
      "Complex supplier and logistics management",
      "Integration with legacy OT and IT systems"
    ],
    useCases: [
      {
        title: "AI Safety Monitoring",
        icon: Security,
        description: "Computer vision monitors PPE compliance, restricted zone access, forklift safety, and hazardous conditions in real-time. Instant alerts and automated incident documentation improve safety outcomes.",
        benefits: [
          "90% reduction in safety incidents",
          "Real-time PPE compliance monitoring",
          "Automated incident documentation",
          "OSHA compliance support"
        ],
        metrics: "Monitor 100+ safety parameters across entire facility"
      },
      {
        title: "Predictive Maintenance",
        icon: Timeline,
        description: "IoT sensors and AI models analyze equipment vibration, temperature, and performance data to predict failures 2-4 weeks in advance. Optimized maintenance scheduling reduces downtime and extends asset life.",
        benefits: [
          "50% reduction in unplanned downtime",
          "Predict failures 2-4 weeks ahead",
          "Optimize spare parts inventory",
          "Extend equipment lifespan by 20%"
        ],
        metrics: "Prevent 500+ hours of downtime annually per plant"
      },
      {
        title: "Automated Quality Inspection",
        icon: CameraAlt,
        description: "High-speed computer vision systems detect surface defects, dimensional variations, assembly errors, and cosmetic issues. AI learns from operator feedback to continuously improve detection accuracy.",
        benefits: [
          "99.5% defect detection rate",
          "100% inline inspection coverage",
          "Reduced scrap and rework",
          "Real-time quality analytics"
        ],
        metrics: "Inspect 1000+ parts per minute with zero fatigue"
      },
      {
        title: "Shop Floor Document Digitization",
        icon: Description,
        description: "Digitize work orders, quality checklists, maintenance logs, and traveler documents. AI extracts data from handwritten forms and integrates with MES and ERP systems for real-time visibility.",
        benefits: [
          "Eliminate paper from shop floor",
          "Real-time production visibility",
          "Searchable historical records",
          "Reduced administrative overhead"
        ],
        metrics: "Digitize 50,000+ documents per month"
      },
      {
        title: "Supply Chain Intelligence",
        icon: LocalShipping,
        description: "AI analyzes supplier performance, logistics data, and demand signals to optimize inventory levels and identify supply chain risks. Predictive analytics improve on-time delivery performance.",
        benefits: [
          "25% reduction in inventory costs",
          "Early supply risk identification",
          "Optimized safety stock levels",
          "Improved supplier performance"
        ],
        metrics: "Reduce stockouts by 40% while cutting inventory costs"
      },
      {
        title: "Energy and Sustainability AI",
        icon: TrendingUp,
        description: "Monitor and optimize energy consumption across manufacturing processes. AI identifies energy waste, recommends efficiency improvements, and tracks sustainability KPIs for ESG reporting.",
        benefits: [
          "15% reduction in energy costs",
          "Automated ESG reporting",
          "Carbon footprint tracking",
          "Utility cost optimization"
        ],
        metrics: "Save $500K+ annually in energy costs per plant"
      }
    ],
    benefits: [
      { icon: Security, title: "Safer Workplaces", description: "AI monitoring prevents incidents before they occur" },
      { icon: Speed, title: "Higher Uptime", description: "Predictive maintenance maximizes equipment availability" },
      { icon: TrendingUp, title: "Quality Excellence", description: "100% inspection ensures zero-defect delivery" },
      { icon: Timeline, title: "Real-time Visibility", description: "Digital shop floor with instant insights" }
    ],
    stats: [
      { value: "50%", label: "Less Downtime" },
      { value: "90%", label: "Fewer Incidents" },
      { value: "99.5%", label: "Defect Detection" },
      { value: "60+", label: "Plant Deployments" }
    ],
    whyChooseUs: [
      "Purpose-built for discrete and process manufacturing",
      "Edge AI for real-time processing without cloud dependency",
      "Integration with Siemens, Rockwell, and major PLC/SCADA systems",
      "ISO 27001 and IEC 62443 certified",
      "Experienced manufacturing domain consultants"
    ],
    compliance: ["OSHA", "ISO 45001", "IATF 16949", "ISO 14001"],
    caseStudyTeaser: "An automotive Tier-1 supplier reduced quality escapes by 85% and achieved 50% reduction in unplanned downtime within 6 months."
  },

  textile: {
    name: "Textile Industry",
    icon: Checkroom,
    primaryColor: "text-pink-600",
    lightBg: "bg-pink-50",
    borderColor: "border-pink-200",
    heroTitle: "Generative AI for Textile Industry",
    heroSubtitle: "Design Innovation, Quality Control, Inventory Optimization",
    heroDescription: "Transform textile operations with AI-powered merchandising, automated fabric defect detection, intelligent inventory management, and generative design tools that accelerate fashion cycles.",
    overview: "The textile industry faces unique challenges in design innovation, quality control, and inventory management across complex supply chains. CannyMinds Textile AI solutions bring intelligent automation to merchandising processes, fabric inspection, pattern design, and demand forecasting—helping brands and manufacturers respond faster to fashion trends while maintaining quality and optimizing costs.",
    challenges: [
      "Long design-to-market cycles missing trend windows",
      "Manual fabric inspection with inconsistent quality",
      "Excess inventory and dead stock from poor forecasting",
      "Complex merchandising processes across seasons",
      "Color matching and consistency across batches",
      "Supplier quality management challenges"
    ],
    useCases: [
      {
        title: "AI-Powered Merchandising",
        icon: Category,
        description: "Generative AI analyzes market trends, historical sales, and competitor data to recommend product assortments, pricing strategies, and buy quantities. Automated tech pack generation accelerates design-to-production handoff.",
        benefits: [
          "30% faster merchandising cycles",
          "Trend-responsive product planning",
          "Reduced markdowns with better forecasting",
          "Automated tech pack generation"
        ],
        metrics: "Reduce time-to-market by 6 weeks per season"
      },
      {
        title: "Fabric Defect Detection",
        icon: CameraAlt,
        description: "High-speed computer vision systems inspect fabric rolls for weaving defects, color variations, contamination, and surface irregularities. Real-time grading and automated roll mapping improve cutting efficiency.",
        benefits: [
          "99% defect detection accuracy",
          "100% fabric inspection coverage",
          "Automated roll grading and mapping",
          "Reduced fabric waste by 15%"
        ],
        metrics: "Inspect 500+ meters per minute with consistent accuracy"
      },
      {
        title: "Generative Design Tools",
        icon: Brush,
        description: "AI generates new fabric patterns, colorways, and design variations based on trend inputs and brand guidelines. Designers can explore thousands of options in hours instead of weeks.",
        benefits: [
          "10x faster design exploration",
          "Trend-aligned design suggestions",
          "Consistent brand aesthetics",
          "Reduced designer burnout"
        ],
        metrics: "Generate 1000+ design variations in minutes"
      },
      {
        title: "Quality Control Automation",
        icon: Assessment,
        description: "End-to-end quality management from incoming fabric inspection to finished garment QC. AI tracks quality metrics, identifies recurring issues, and recommends corrective actions.",
        benefits: [
          "50% reduction in quality issues",
          "Automated QC documentation",
          "Supplier quality scorecards",
          "Trend analysis for root cause"
        ],
        metrics: "Reduce customer returns by 40%"
      },
      {
        title: "Inventory Intelligence",
        icon: Inventory,
        description: "AI-powered demand forecasting and inventory optimization across raw materials, WIP, and finished goods. Dynamic safety stock calculations reduce carrying costs while preventing stockouts.",
        benefits: [
          "25% reduction in inventory costs",
          "Prevent fabric stockouts",
          "Optimize working capital",
          "Better fill rates to customers"
        ],
        metrics: "Reduce dead stock by 35% while improving fill rates"
      },
      {
        title: "Color Matching AI",
        icon: Layers,
        description: "Spectrophotometric analysis with AI ensures color consistency across batches and suppliers. Automated shade matching and approval workflows accelerate production approvals.",
        benefits: [
          "Consistent color across production",
          "Faster shade approval cycles",
          "Reduced color-related rejections",
          "Digital color library management"
        ],
        metrics: "Achieve 95% first-time shade approval rate"
      }
    ],
    benefits: [
      { icon: Lightbulb, title: "Design Innovation", description: "AI accelerates creative exploration and trend response" },
      { icon: Security, title: "Quality Assurance", description: "100% inspection ensures consistent quality" },
      { icon: TrendingUp, title: "Cost Optimization", description: "Reduce waste, inventory, and markdowns" },
      { icon: Timeline, title: "Faster Cycles", description: "Compress design-to-delivery timelines" }
    ],
    stats: [
      { value: "40%", label: "Faster Design" },
      { value: "99%", label: "Defect Detection" },
      { value: "25%", label: "Lower Inventory" },
      { value: "20+", label: "Textile Clients" }
    ],
    whyChooseUs: [
      "Deep expertise in textile and apparel industry",
      "Pre-trained models for fabric defect detection",
      "Integration with PLM, ERP, and CAD systems",
      "Edge AI for real-time inspection",
      "Sustainability and ESG reporting support"
    ],
    compliance: ["OEKO-TEX", "GOTS", "ISO 9001", "SA8000"],
    caseStudyTeaser: "A leading fabric manufacturer reduced quality inspection time by 70% and improved first-pass yield by 25% with AI-powered inspection."
  },

  ecommerce: {
    name: "E-Commerce & Retail",
    icon: ShoppingCart,
    primaryColor: "text-violet-600",
    lightBg: "bg-violet-50",
    borderColor: "border-violet-200",
    heroTitle: "Generative AI for E-Commerce & Retail",
    heroSubtitle: "Personalize, Automate, Convert",
    heroDescription: "Transform your online retail experience with AI-powered product descriptions, intelligent search, personalized recommendations, dynamic pricing, and automated customer service that drives conversion and loyalty.",
    overview: "E-commerce success depends on delivering personalized experiences at scale while managing complex product catalogs, dynamic pricing, and customer expectations for instant service. CannyMinds E-Commerce AI solutions leverage generative AI for content creation, machine learning for personalization, and intelligent automation for customer service—helping retailers increase conversion rates, average order value, and customer lifetime value.",
    challenges: [
      "Time-consuming product content creation for large catalogs",
      "Generic search results missing customer intent",
      "Low conversion rates from lack of personalization",
      "Price competitiveness without margin erosion",
      "High customer service costs with inconsistent quality",
      "Returns and reviews management complexity"
    ],
    useCases: [
      {
        title: "AI Product Description Generation",
        icon: Edit,
        description: "Generative AI creates compelling, SEO-optimized product descriptions, bullet points, and meta tags from product attributes and images. Automated content generation for thousands of SKUs in hours.",
        benefits: [
          "Generate descriptions 100x faster",
          "SEO-optimized content automatically",
          "Consistent brand voice across catalog",
          "Multi-language content generation"
        ],
        metrics: "Create content for 10,000+ SKUs in one day"
      },
      {
        title: "Intelligent Search & Discovery",
        icon: Search,
        description: "AI-powered search understands natural language queries, visual search, and customer intent. Semantic search surfaces relevant products even with typos, synonyms, or conversational queries.",
        benefits: [
          "40% improvement in search conversion",
          "Visual search capability",
          "Natural language understanding",
          "Personalized search results"
        ],
        metrics: "Increase search revenue by 25%"
      },
      {
        title: "Personalized Recommendations",
        icon: Star,
        description: "Machine learning analyzes browsing behavior, purchase history, and customer segments to deliver hyper-personalized product recommendations across all touchpoints.",
        benefits: [
          "35% increase in average order value",
          "Higher customer engagement",
          "Cross-sell and upsell optimization",
          "Real-time personalization"
        ],
        metrics: "Drive 30% of revenue through recommendations"
      },
      {
        title: "Dynamic Pricing Engine",
        icon: TrendingFlat,
        description: "AI optimizes prices in real-time based on demand, competition, inventory levels, and customer segments. Automated repricing maintains competitiveness while protecting margins.",
        benefits: [
          "15% improvement in margins",
          "Competitive price positioning",
          "Inventory-aware pricing",
          "Customer segment pricing"
        ],
        metrics: "Increase gross margin by 3-5 percentage points"
      },
      {
        title: "Customer Service Automation",
        icon: SmartToy,
        description: "AI chatbots handle order tracking, returns, product questions, and issue resolution 24/7. Seamless escalation to human agents with full context for complex issues.",
        benefits: [
          "70% of queries handled automatically",
          "24/7 instant customer support",
          "Reduced service costs by 50%",
          "Improved customer satisfaction"
        ],
        metrics: "Handle 100,000+ customer interactions monthly"
      },
      {
        title: "Review Analysis & Response",
        icon: ChatBubble,
        description: "AI analyzes customer reviews to extract sentiment, product feedback, and improvement opportunities. Automated response generation for common review scenarios maintains engagement.",
        benefits: [
          "Automated review response",
          "Product insight extraction",
          "Sentiment trend tracking",
          "Competitive review analysis"
        ],
        metrics: "Process 50,000+ reviews monthly with actionable insights"
      }
    ],
    benefits: [
      { icon: TrendingUp, title: "Revenue Growth", description: "Personalization and optimization drive higher sales" },
      { icon: Speed, title: "Faster Operations", description: "Automate content, pricing, and service" },
      { icon: Lightbulb, title: "Better Insights", description: "AI-powered analytics inform decisions" },
      { icon: Support, title: "24/7 Service", description: "Always-on customer support at scale" }
    ],
    stats: [
      { value: "35%", label: "Higher AOV" },
      { value: "70%", label: "Query Automation" },
      { value: "25%", label: "Better Conversion" },
      { value: "45+", label: "E-Commerce Clients" }
    ],
    whyChooseUs: [
      "Pre-built integrations with Shopify, Magento, and major platforms",
      "Proven results with D2C and marketplace retailers",
      "Multi-language and multi-currency support",
      "SOC 2 Type II and PCI DSS compliant",
      "Dedicated e-commerce AI specialists"
    ],
    compliance: ["SOC 2 Type II", "PCI DSS", "GDPR", "CCPA"],
    caseStudyTeaser: "A fashion e-commerce brand increased conversion by 40% and reduced customer service costs by 55% with AI-powered personalization and chatbots."
  },

  "real-estate": {
    name: "Real Estate",
    icon: HomeIcon,
    primaryColor: "text-teal-600",
    lightBg: "bg-teal-50",
    borderColor: "border-teal-200",
    heroTitle: "Generative AI for Real Estate",
    heroSubtitle: "Engage, Analyze, Automate",
    heroDescription: "Transform real estate operations with AI chatbots, voice assistants, automated property analysis, blueprint-to-BOQ conversion, and intelligent document processing for faster transactions.",
    overview: "Real estate transactions involve complex documentation, customer engagement across long sales cycles, and property analysis requiring specialized expertise. CannyMinds Real Estate AI solutions automate customer engagement with intelligent chatbots, streamline property analysis and valuation, convert blueprints to BOQs automatically, and digitize transaction documents—helping developers, brokers, and property managers close deals faster.",
    challenges: [
      "Long response times losing customer interest",
      "Manual property valuation with inconsistent accuracy",
      "Time-consuming BOQ preparation from blueprints",
      "Document-heavy transaction processes",
      "Site safety and construction monitoring",
      "Customer follow-up and lead nurturing"
    ],
    useCases: [
      {
        title: "Real Estate Chatbot",
        icon: SmartToy,
        description: "AI chatbot handles property inquiries, schedules site visits, qualifies leads, and provides instant property information 24/7. Integration with CRM ensures seamless lead management.",
        benefits: [
          "24/7 lead engagement",
          "Instant property information",
          "Automated site visit scheduling",
          "Lead qualification and scoring"
        ],
        metrics: "Convert 3x more website visitors to qualified leads"
      },
      {
        title: "Voice AI for Sales",
        icon: Mic,
        description: "AI voice assistants conduct outbound calls for lead follow-up, appointment reminders, and customer surveys. Natural conversation in multiple languages improves customer engagement.",
        benefits: [
          "Automated follow-up calls",
          "Multi-language support",
          "Sentiment analysis on calls",
          "Call analytics and insights"
        ],
        metrics: "Handle 10,000+ calls per month automatically"
      },
      {
        title: "Blueprint to BOQ Automation",
        icon: ViewInAr,
        description: "AI analyzes architectural blueprints to automatically generate Bills of Quantities, material estimates, and cost projections. Reduce BOQ preparation time from weeks to hours.",
        benefits: [
          "90% faster BOQ preparation",
          "Consistent quantity calculations",
          "Cost estimation accuracy",
          "Revision tracking and comparison"
        ],
        metrics: "Generate BOQ for 50-unit project in under 4 hours"
      },
      {
        title: "Property Valuation AI",
        icon: Assessment,
        description: "Machine learning models analyze comparable sales, location data, property features, and market trends for instant property valuations. Explainable AI provides valuation rationale.",
        benefits: [
          "Instant valuation reports",
          "95% accuracy vs. manual appraisal",
          "Market trend analysis",
          "Comparable property identification"
        ],
        metrics: "Value 1000+ properties per day automatically"
      },
      {
        title: "Construction Safety Monitor",
        icon: Security,
        description: "Computer vision monitors construction sites for safety violations, PPE compliance, and hazardous conditions. Real-time alerts and automated incident documentation improve site safety.",
        benefits: [
          "Real-time safety monitoring",
          "PPE compliance tracking",
          "Automated incident reports",
          "Reduced site accidents"
        ],
        metrics: "Reduce site safety incidents by 70%"
      },
      {
        title: "Transaction Document Processing",
        icon: Description,
        description: "AI extracts and processes data from sale agreements, title documents, lease contracts, and property papers. Automated verification and compliance checking accelerate closings.",
        benefits: [
          "80% faster document processing",
          "Automated compliance checks",
          "Reduced transaction errors",
          "Digital document storage"
        ],
        metrics: "Process 500+ transactions per month with 90% automation"
      }
    ],
    benefits: [
      { icon: Speed, title: "Faster Transactions", description: "Automate documentation and processing" },
      { icon: TrendingUp, title: "Accurate Valuations", description: "AI-powered analysis for informed decisions" },
      { icon: Lightbulb, title: "Smart Engagement", description: "24/7 AI assistants for customer interaction" },
      { icon: Security, title: "Safer Sites", description: "AI monitoring for construction safety" }
    ],
    stats: [
      { value: "95%", label: "Valuation Accuracy" },
      { value: "80%", label: "Faster Processing" },
      { value: "3x", label: "Lead Conversion" },
      { value: "25+", label: "Real Estate Clients" }
    ],
    whyChooseUs: [
      "Deep real estate domain expertise in India and international markets",
      "Pre-built integrations with major CRM and PMS platforms",
      "Multilingual chatbots for regional markets",
      "RERA compliance support",
      "Experienced real estate technology team"
    ],
    compliance: ["RERA", "GDPR", "SOC 2", "ISO 27001"],
    caseStudyTeaser: "A leading developer increased lead conversion by 250% and reduced BOQ preparation time by 85% with AI-powered engagement and automation."
  },

  marketing: {
    name: "Marketing & Advertising",
    icon: Campaign,
    primaryColor: "text-red-600",
    lightBg: "bg-red-50",
    borderColor: "border-red-200",
    heroTitle: "Generative AI for Marketing",
    heroSubtitle: "Create, Optimize, Analyze at Scale",
    heroDescription: "Supercharge your marketing with AI-powered content creation, design generation, campaign optimization, SEO automation, and predictive analytics that deliver measurable ROI.",
    overview: "Modern marketing demands personalized content at scale, data-driven optimization, and creative output that keeps pace with digital channels. CannyMinds Marketing AI solutions leverage generative AI for content and design creation, machine learning for campaign optimization, and predictive analytics for audience insights—enabling marketing teams to produce more with less while improving performance across channels.",
    challenges: [
      "Content creation bottlenecks limiting campaign velocity",
      "Inconsistent brand voice across channels and teams",
      "Manual campaign optimization missing opportunities",
      "Difficulty scaling personalization efforts",
      "Time-consuming SEO and performance analysis",
      "Limited creative resources for design needs"
    ],
    useCases: [
      {
        title: "AI Content Generation",
        icon: Edit,
        description: "Generate blog posts, social media content, email campaigns, ad copy, and landing pages with consistent brand voice. AI creates multiple variations for A/B testing and personalization.",
        benefits: [
          "Create content 10x faster",
          "Consistent brand voice",
          "Multiple variation generation",
          "Multi-language content"
        ],
        metrics: "Produce 500+ content pieces per month"
      },
      {
        title: "Design Generation AI",
        icon: Brush,
        description: "Generate social media graphics, banner ads, email templates, and marketing collateral from text prompts. AI ensures brand consistency with style guidelines and asset libraries.",
        benefits: [
          "Generate designs in minutes",
          "Brand-consistent visuals",
          "Multiple format variations",
          "Reduce design costs"
        ],
        metrics: "Create 1000+ design assets per month"
      },
      {
        title: "Campaign Performance Optimization",
        icon: Analytics,
        description: "AI analyzes campaign performance across channels and automatically optimizes targeting, bidding, and creative. Predictive models identify winning combinations before budget is wasted.",
        benefits: [
          "40% improvement in ROAS",
          "Automated bid optimization",
          "Cross-channel insights",
          "Predictive performance modeling"
        ],
        metrics: "Improve marketing ROI by 3x within 6 months"
      },
      {
        title: "SEO Content Optimization",
        icon: Search,
        description: "AI analyzes search intent, competitor content, and ranking factors to optimize existing content and generate new SEO-focused articles. Automated keyword research and content briefs accelerate production.",
        benefits: [
          "Improve organic rankings",
          "Automated content optimization",
          "Competitive content analysis",
          "Keyword opportunity identification"
        ],
        metrics: "Increase organic traffic by 150% in 12 months"
      },
      {
        title: "Social Media Automation",
        icon: Share,
        description: "AI generates, schedules, and optimizes social media content across platforms. Automated engagement responses and sentiment monitoring keep brands connected with audiences.",
        benefits: [
          "Automated content calendar",
          "Optimal posting times",
          "Engagement automation",
          "Sentiment monitoring"
        ],
        metrics: "Manage 10+ social channels with 50% less effort"
      },
      {
        title: "Video Content Creation",
        icon: Movie,
        description: "Generate video scripts, storyboards, and edited video content from text prompts. AI creates product videos, social clips, and marketing videos with minimal production resources.",
        benefits: [
          "Create videos 5x faster",
          "Automated script generation",
          "Template-based production",
          "Multi-format output"
        ],
        metrics: "Produce 100+ videos per month"
      }
    ],
    benefits: [
      { icon: Lightbulb, title: "Creative at Scale", description: "Generate unlimited content and designs" },
      { icon: TrendingUp, title: "Higher ROI", description: "AI optimization improves campaign performance" },
      { icon: Speed, title: "Faster Execution", description: "Launch campaigns in days, not weeks" },
      { icon: Analytics, title: "Deeper Insights", description: "Predictive analytics for smarter decisions" }
    ],
    stats: [
      { value: "10x", label: "Faster Content" },
      { value: "40%", label: "Higher ROAS" },
      { value: "3x", label: "More Output" },
      { value: "50+", label: "Marketing Clients" }
    ],
    whyChooseUs: [
      "Proven results with Fortune 500 marketing teams",
      "Integration with major marketing platforms",
      "Brand voice training and customization",
      "Multilingual content generation",
      "Dedicated marketing AI specialists"
    ],
    compliance: ["GDPR", "CCPA", "CAN-SPAM", "Brand Safety"],
    caseStudyTeaser: "A global consumer brand increased content output by 800% while reducing production costs by 60% with AI-powered content generation."
  },

  "professional-services": {
    name: "Legal, HR & Accounting",
    icon: Gavel,
    primaryColor: "text-slate-600",
    lightBg: "bg-slate-50",
    borderColor: "border-slate-200",
    heroTitle: "AI for Legal, HR & Accounting",
    heroSubtitle: "Automate Documents, Accelerate Decisions",
    heroDescription: "Transform professional services with AI-powered contract analysis, intelligent recruitment, automated accounting, and compliance monitoring that improve efficiency and reduce risk.",
    overview: "Professional services firms handle massive volumes of documents requiring specialized expertise. CannyMinds solutions automate contract analysis and lifecycle management for legal teams, resume screening and candidate matching for HR, invoice processing and GST compliance for accounting, and audit preparation across all functions—reducing manual effort by 70% while improving accuracy and compliance.",
    challenges: [
      "Time-consuming contract review and analysis",
      "Manual resume screening missing qualified candidates",
      "Complex GST and compliance requirements",
      "Inconsistent audit preparation processes",
      "Document-heavy workflows slowing operations",
      "Difficulty scaling with client demands"
    ],
    useCases: [
      {
        title: "Contract Analysis & CLM",
        icon: LegalIcon,
        description: "AI analyzes contracts to extract key terms, identify risks, track obligations, and compare against standard templates. Automated contract lifecycle management from drafting to renewal.",
        benefits: [
          "80% faster contract review",
          "Identify risky clauses automatically",
          "Obligation tracking and alerts",
          "Standard template comparison"
        ],
        metrics: "Review 1000+ contracts per month with 90% automation"
      },
      {
        title: "Intelligent Recruitment",
        icon: Group,
        description: "AI screens resumes, matches candidates to job requirements, and ranks applicants based on fit. Automated initial screening and interview scheduling accelerate time-to-hire.",
        benefits: [
          "Screen 1000s of resumes in minutes",
          "Reduce bias with objective scoring",
          "Better candidate-job matching",
          "Automated interview scheduling"
        ],
        metrics: "Reduce time-to-hire by 50%"
      },
      {
        title: "GST Compliance Assistant",
        icon: Calculate,
        description: "AI monitors GST compliance, validates invoices, identifies input tax credit opportunities, and generates GST returns. Automated reconciliation ensures accurate filings.",
        benefits: [
          "Automated GST return preparation",
          "ITC optimization identification",
          "Invoice validation and matching",
          "Compliance monitoring"
        ],
        metrics: "Reduce GST compliance effort by 70%"
      },
      {
        title: "Invoice Processing Automation",
        icon: Receipt,
        description: "AI extracts data from invoices, validates against POs and contracts, routes for approval, and integrates with accounting systems. Handle invoices in any format including handwritten.",
        benefits: [
          "90% automation rate",
          "3-way matching automation",
          "Faster approval cycles",
          "Reduced duplicate payments"
        ],
        metrics: "Process 10,000+ invoices per month automatically"
      },
      {
        title: "Employee Document Management",
        icon: ContactMail,
        description: "Digitize and manage employee documents, automate onboarding paperwork, and ensure compliance with labor regulations. AI-powered document extraction and verification.",
        benefits: [
          "Digital employee files",
          "Automated onboarding",
          "Compliance document tracking",
          "Secure document storage"
        ],
        metrics: "Reduce onboarding time by 60%"
      },
      {
        title: "Audit Preparation AI",
        icon: Assessment,
        description: "AI organizes and prepares documents for internal and external audits. Automated sampling, testing, and documentation ensures audit readiness year-round.",
        benefits: [
          "Always audit-ready",
          "Automated sampling and testing",
          "Exception identification",
          "Audit trail documentation"
        ],
        metrics: "Reduce audit preparation time by 50%"
      }
    ],
    benefits: [
      { icon: Speed, title: "Time Savings", description: "Automate hours of manual document work" },
      { icon: Security, title: "Compliance Ready", description: "Built-in regulatory compliance features" },
      { icon: TrendingUp, title: "Cost Reduction", description: "Significant operational savings" },
      { icon: Lightbulb, title: "Better Decisions", description: "AI insights for informed choices" }
    ],
    stats: [
      { value: "80%", label: "Faster Review" },
      { value: "90%", label: "Automation Rate" },
      { value: "50%", label: "Cost Savings" },
      { value: "40+", label: "Professional Clients" }
    ],
    whyChooseUs: [
      "Deep expertise in legal, HR, and accounting processes",
      "Pre-built models for Indian regulatory compliance",
      "Integration with Tally, SAP, and major ERP systems",
      "SOC 2 Type II and ISO 27001 certified",
      "Experienced domain consultants"
    ],
    compliance: ["SOC 2 Type II", "ISO 27001", "GDPR", "Indian Labor Laws"],
    caseStudyTeaser: "A leading law firm reduced contract review time by 75% and a CA firm automated 90% of GST compliance work with AI solutions."
  }
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
};

export default async function IndustryAIPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry: industrySlug } = await params;
  const industry = industryData[industrySlug];

  if (!industry) {
    notFound();
  }

  const IconComponent = industry.icon;

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Hero Section - No Gradient */}
        <section className={`relative min-h-[60vh] flex items-center ${industry.lightBg} overflow-hidden`}>
          {/* Subtle Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  href="/ai-solutions"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
                >
                  <ArrowBack sx={{ fontSize: 20 }} />
                  Back to AI Solutions
                </Link>

                <div className={`inline-flex items-center gap-2 ${industry.lightBg} ${industry.primaryColor} border ${industry.borderColor} px-4 py-2 rounded-full text-sm font-medium mb-6`}>
                  <IconComponent sx={{ fontSize: 20 }} />
                  {industry.name} Industry
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {industry.heroTitle}
                </h1>

                <p className={`text-xl ${industry.primaryColor} font-semibold mb-4`}>
                  {industry.heroSubtitle}
                </p>

                <p className="text-lg text-gray-600 mb-8 max-w-xl">
                  {industry.heroDescription}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                  >
                    Request Demo
                    <ArrowForward sx={{ fontSize: 20 }} />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors"
                  >
                    Talk to Expert
                  </Link>
                </div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className={`aspect-video rounded-2xl overflow-hidden border-2 ${industry.borderColor} bg-white shadow-lg`}>
                  <Image
                    src={`/images/ai-solutions/${industrySlug}-hero.jpg`}
                    alt={`${industry.name} AI Solutions - ${industry.heroSubtitle}`}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Decorative Elements */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 ${industry.lightBg} rounded-xl -z-10`} />
                <div className={`absolute -top-4 -left-4 w-16 h-16 ${industry.lightBg} rounded-lg -z-10`} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {industry.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={cardVariants}
                  className="text-center p-6"
                >
                  <div className={`text-4xl md:text-5xl font-bold ${industry.primaryColor} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Why AI for {industry.name}?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {industry.overview}
              </p>

              {/* Challenges */}
              <div className={`${industry.lightBg} rounded-xl p-8 border ${industry.borderColor}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Challenges We Solve</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {industry.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className={industry.primaryColor} sx={{ fontSize: 20, marginTop: '2px' }} />
                      <span className="text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className={`${industry.primaryColor} font-semibold text-sm uppercase tracking-wider`}>
                AI Use Cases
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
                AI Solutions for {industry.name}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Proven use cases delivering measurable ROI for {industry.name.toLowerCase()} organizations
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {industry.useCases.map((useCase, index) => {
                const UseCaseIcon = useCase.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={useCase.title}
                    variants={cardVariants}
                    className={`bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all overflow-hidden`}
                  >
                    <div className={`grid lg:grid-cols-5 gap-0`}>
                      {/* Image Placeholder */}
                      <div className={`lg:col-span-2 ${industry.lightBg} p-8 flex items-center justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="text-center">
                          <UseCaseIcon className={industry.primaryColor} sx={{ fontSize: 60 }} />
                          <p className="text-gray-500 mt-3 text-sm">Use Case Image</p>
                          <p className="text-gray-400 text-xs">Recommended: 600x400px</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`lg:col-span-3 p-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-xl ${industry.lightBg} ${industry.primaryColor} flex items-center justify-center`}>
                            <UseCaseIcon sx={{ fontSize: 24 }} />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {useCase.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {useCase.description}
                        </p>

                        {/* Benefits */}
                        <div className="grid sm:grid-cols-2 gap-3 mb-6">
                          {useCase.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                              <CheckCircle sx={{ fontSize: 16 }} className="text-green-500" />
                              {benefit}
                            </div>
                          ))}
                        </div>

                        {/* Metrics */}
                        {useCase.metrics && (
                          <div className={`${industry.lightBg} rounded-lg p-4 border ${industry.borderColor}`}>
                            <div className="flex items-center gap-2">
                              <TrendingUp className={industry.primaryColor} sx={{ fontSize: 20 }} />
                              <span className={`font-semibold ${industry.primaryColor}`}>Impact:</span>
                              <span className="text-gray-700">{useCase.metrics}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={`py-20 ${industry.lightBg}`}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className={`${industry.primaryColor} font-semibold text-sm uppercase tracking-wider`}>
                  Why CannyMinds
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  Your Trusted AI Partner for {industry.name}
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  With 20+ years of enterprise software experience and deep domain expertise,
                  we deliver AI solutions that work in the real world.
                </p>

                <div className="space-y-4 mb-8">
                  {industry.whyChooseUs.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-6 h-6 rounded-full ${industry.lightBg} border ${industry.borderColor} flex items-center justify-center`}>
                        <CheckCircle sx={{ fontSize: 16 }} className={industry.primaryColor} />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Compliance Badges */}
                {industry.compliance && (
                  <div>
                    <p className="text-sm text-gray-500 mb-3">Compliance & Certifications:</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.compliance.map((cert) => (
                        <span
                          key={cert}
                          className={`px-3 py-1 ${industry.lightBg} border ${industry.borderColor} rounded-full text-xs font-medium ${industry.primaryColor}`}
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Benefits Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {industry.benefits.map((benefit) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.title}
                      variants={cardVariants}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
                    >
                      <div className={`w-12 h-12 rounded-xl ${industry.lightBg} ${industry.primaryColor} flex items-center justify-center mb-4`}>
                        <BenefitIcon sx={{ fontSize: 24 }} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {benefit.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Study Teaser */}
        {industry.caseStudyTeaser && (
          <section className="py-16 bg-white border-t border-gray-200">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`max-w-4xl mx-auto ${industry.lightBg} rounded-2xl p-8 md:p-12 border ${industry.borderColor}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-white ${industry.primaryColor} flex items-center justify-center flex-shrink-0 border ${industry.borderColor}`}>
                    <AutoAwesome sx={{ fontSize: 32 }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Success Story
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      &ldquo;{industry.caseStudyTeaser}&rdquo;
                    </p>
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 ${industry.primaryColor} font-semibold hover:underline`}
                    >
                      Read Full Case Study
                      <ArrowForward sx={{ fontSize: 18 }} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Expert Insights Section - E-E-A-T Enhancement */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Author Card */}
                <div className={`${industry.lightBg} rounded-2xl p-6 border ${industry.borderColor}`}>
                  <div className="flex flex-col items-center text-center">
                    {/* Author Image Placeholder */}
                    <div className={`w-24 h-24 rounded-full bg-white border-2 ${industry.borderColor} mb-4 overflow-hidden flex items-center justify-center`}>
                      <Image
                        src="/images/author-udayakumar.jpg"
                        alt="Udayakumar Murugan - GenAI Expert"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Udayakumar Murugan</h4>
                    <p className={`text-sm font-semibold ${industry.primaryColor} mb-2`}>Subject Matter Expert – GenAI</p>
                    <p className="text-xs text-gray-600 mb-4">Founder & Director</p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <p>CannyMinds Technology Solutions Pvt Ltd, India</p>
                      <p>CannyMinds Technology Solutions LLC, USA</p>
                      <p>USP Soft Solutions Nigeria Ltd, Nigeria</p>
                    </div>
                  </div>
                </div>

                {/* Experience & Expertise */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      20+ Years of Enterprise AI Excellence
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Our {industry.name.toLowerCase()} AI solutions are developed by a team with deep domain expertise,
                      combining decades of enterprise software experience with cutting-edge Generative AI capabilities.
                      We understand the unique challenges of {industry.name.toLowerCase()} operations and have designed
                      solutions that deliver measurable ROI while ensuring regulatory compliance.
                    </p>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <VerifiedUser className="text-green-600 flex-shrink-0" sx={{ fontSize: 24 }} />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">ISO 27001 Certified</p>
                        <p className="text-xs text-gray-600">Enterprise-grade security standards</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <Business className="text-blue-600 flex-shrink-0" sx={{ fontSize: 24 }} />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Global Presence</p>
                        <p className="text-xs text-gray-600">Operations in India, USA & Nigeria</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <Group className="text-purple-600 flex-shrink-0" sx={{ fontSize: 24 }} />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">500+ AI Implementations</p>
                        <p className="text-xs text-gray-600">Across diverse industries worldwide</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <Support className="text-orange-600 flex-shrink-0" sx={{ fontSize: 24 }} />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Dedicated Support</p>
                        <p className="text-xs text-gray-600">24/7 expert assistance & training</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your {industry.name} Operations?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Schedule a free consultation with our {industry.name.toLowerCase()} AI experts
                to discover how we can help you achieve measurable ROI.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Schedule Free Consultation
                  <ArrowForward sx={{ fontSize: 20 }} />
                </Link>
                <Link
                  href="/ai-solutions"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-gray-400 transition-colors"
                >
                  Explore All Industries
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Industries */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">
              Explore AI Solutions for Other Industries
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(industryData)
                .filter(([slug]) => slug !== industrySlug)
                .slice(0, 6)
                .map(([slug, ind]) => {
                  const IndIcon = ind.icon;
                  return (
                    <Link
                      key={slug}
                      href={`/ai-solutions/${slug}`}
                      className={`inline-flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all text-sm font-medium text-gray-700 hover:text-primary`}
                    >
                      <IndIcon sx={{ fontSize: 20 }} className={ind.primaryColor} />
                      {ind.name}
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
