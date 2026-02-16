import type { Metadata } from "next";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/enhanced-seo";
import Link from "next/link";
import Image from "next/image";
import SecureImage from "@/components/ui/SecureImage";
import SocialShare from "@/components/ui/SocialShare";
import {
  CheckCircle as CheckIcon,
  Star as StarIcon,
  People as PeopleIcon,
  AttachMoney as MoneyIcon,
  Schedule as ScheduleIcon,
  Assessment as AssessmentIcon,
  Security as SecurityIcon,
  CloudUpload as CloudIcon,
  PhoneAndroid as MobileIcon,
  Business as BusinessIcon,
  ArrowForward as ArrowIcon,
  Description as DocumentIcon,
} from '@mui/icons-material';
import FAQ from "@/components/sections/FAQ";

// SEO Metadata
export const metadata: Metadata = {
  title: "CannyHR - HR & Payroll Management | HRMS Solution 2026",
  description: "Complete HRMS with payroll, time tracking, leave management, and performance reviews. 350+ biometric integrations. Mobile app included.",
  keywords: [
    "CannyHR",
    "HR management software",
    "payroll management system",
    "HRMS software",
    "employee management system",
    "time and attendance software",
    "leave management system",
    "performance management software",
    "biometric integration",
    "HR automation"
  ],
  authors: [{ name: "Christopher" }],
  openGraph: {
    title: "CannyHR - HR & Payroll Management | HRMS Solution 2026",
    description: "Complete HRMS with payroll, time tracking, leave management, and performance reviews. 350+ biometric integrations. Mobile app included.",
    type: "website",
    siteName: 'CannyMinds',
    locale: 'en_US',
    url: "https://www.cannymindstech.com/product/hr-management",
    images: [
      {
        url: "https://www.cannymindstech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CannyHR - HR & Payroll Management Software",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "CannyHR - HR & Payroll Management | HRMS Solution 2026",
    description: "Complete HRMS with payroll, time tracking, leave management, and performance reviews. 350+ biometric integrations. Mobile app included.",
    images: ['https://www.cannymindstech.com/og-image.jpg'],
  },
  alternates: {
    canonical: "https://www.cannymindstech.com/product/hr-management",
  },
  robots: { index: true, follow: true },
};

// JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    generateBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Products", item: "/product" },
      { name: "CannyHR - HR & Payroll Management", item: "/product/hr-management" },
    ]),
    {
      "@type": "Article",
      "headline": "CannyHR - Complete HR & Payroll Management Software",
      "description": "Comprehensive guide to CannyHR HR and payroll management platform with attendance tracking, leave management, performance reviews, and mobile access.",
      "image": "https://www.cannymindstech.com/images/cannyhr-dashboard.jpg",
      "author": {
        "@type": "Person",
        "name": "Christopher",
        "jobTitle": "Head of Technical Department & Investor",
        "url": "https://www.cannymindstech.com/about"
      },
      "publisher": {
        "@type": "Organization",
        "name": "CannyMinds Technology Solutions",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.cannymindstech.com/logo.png"
        },
        "url": "https://www.cannymindstech.com"
      },
      "datePublished": "2026-01-15",
      "dateModified": new Date().toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.cannymindstech.com/solutions/hr-management"
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "CannyHR",
      "applicationCategory": "BusinessApplication",
      "description": "Complete HR and payroll management system with attendance tracking and performance management",
      "operatingSystem": "Web, Windows, macOS, Linux, iOS, Android",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": "https://www.cannymindstech.com/product/hr-management",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "Custom Pricing",
          "priceCurrency": "INR"
        }
      },
    },
    generateFAQSchema([
      {
        question: "What is CannyHR?",
        answer: "CannyHR is a comprehensive Hire-to-Retire HR and payroll management platform that automates employee lifecycle management, payroll processing, time tracking, leave management, and performance reviews with mobile access."
      },
      {
        question: "Does CannyHR support biometric devices?",
        answer: "Yes. CannyHR integrates with 350+ biometric devices for accurate attendance tracking and check-in/check-out functionality."
      },
      {
        question: "Is CannyHR available on mobile?",
        answer: "Yes. CannyHR provides native mobile applications for iOS and Android, enabling employees to access payslips, apply for leave, mark attendance, and manage their profiles on the go."
      }
    ]),
  ]
};

export default function CannyHRProductPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />


      <div className="min-h-screen bg-white">

        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b border-gray-200 py-4 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm overflow-x-auto">
              <li><Link href="/" className="text-primary hover:text-primary/80 whitespace-nowrap">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/#products" className="text-primary hover:text-primary/80 whitespace-nowrap">Products</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600 font-medium truncate">CannyHR - HR & Payroll Management Software</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">

              <div>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                  <StarIcon sx={{ fontSize: 16 }} />
                  Complete Hire-to-Retire HRMS
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 leading-tight">
                  Transform HR Operations with <span className="text-green-600">CannyHR</span>
                </h1>

                <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                  Complete HR and payroll management platform covering the entire employee lifecycle from recruitment to retirement.
                  Automate payroll, track attendance with <strong>350+ biometric devices</strong>, manage leave, and conduct performance
                  reviews. Mobile app for employees and managers.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Link
                    href="#get-started"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 text-sm"
                  >
                    Request Demo
                    <ArrowIcon sx={{ fontSize: 18 }} />
                  </Link>
                  <Link
                    href="#features"
                    className="bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all inline-flex items-center justify-center gap-2 text-sm"
                  >
                    Explore Features
                    <PeopleIcon sx={{ fontSize: 18 }} />
                  </Link>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap mb-4">
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} /> 350+ Biometric Devices</span>
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} /> Mobile App</span>
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} /> Cloud/On-Premise</span>
                </div>

                {/* Social Share */}
                <div className="flex items-center gap-3">
                  <SocialShare
                    title="CannyHR - Complete HR & Payroll Management Solution"
                    description="All-in-one HRMS for attendance, payroll, leave management, and employee self-service. Integrated with 350+ biometric devices. Streamline your HR operations."
                  />
                  <span className="text-xs text-gray-500">Share this product</span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative flex justify-center">
                <SecureImage
                  src="/images/products/cannyhr/cannyhr4.png?v=1.1"
                  alt="CannyHR Dashboard showing employee management, payroll, and attendance tracking"
                  width={1200}
                  height={800}
                  className="rounded-2xl object-contain select-none"
                  priority
                  unoptimized
                />
              </div>

            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center text-white">
              {[
                { number: "100+", label: "Happy Clients" },
                { number: "5,000+", label: "Employees Managed" },
                { number: "350+", label: "Biometric Integrations" },
                { number: "70%", label: "Time Saved on Claims" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 text-center">
              Table of Contents
            </h2>
            <div className="bg-white rounded-xl shadow-md p-8">
              <nav className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "What is CannyHR?", href: "#what-is" },
                  { title: "Core HR Modules", href: "#modules" },
                  { title: "Payroll & Compensation", href: "#payroll" },
                  { title: "Time & Attendance", href: "#attendance" },
                  { title: "Leave Management", href: "#leave" },
                  { title: "Performance Management", href: "#performance" },
                  { title: "Employee Self-Service", href: "#self-service" },
                  { title: "Mobile Application", href: "#mobile" },
                  { title: "Integrations & API", href: "#integrations" },
                  { title: "Benefits & ROI", href: "#benefits" },
                  { title: "Security & Compliance", href: "#security" },
                  { title: "Frequently Asked Questions", href: "#faq" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-3 text-green-600 hover:text-green-800 hover:bg-green-50 p-3 rounded-lg transition-all group"
                  >
                    <ArrowIcon className="text-green-600 group-hover:translate-x-1 transition-transform" sx={{ fontSize: 20 }} />
                    <span className="font-medium">{item.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* What is CannyHR */}
          <section id="what-is" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              What is CannyHR HR Management System?
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>CannyHR</strong> is a comprehensive Hire-to-Retire HR and payroll management platform designed to transform
                human capital operations using industry best practices. From recruiting and onboarding new hires to managing payroll,
                tracking attendance, processing leave requests, and conducting performance reviews CannyHR automates the entire
                <strong> employee lifecycle</strong> in one integrated system.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Built for modern enterprises, CannyHR provides <strong>multi-dashboard architecture</strong> for managers,
                administrators, and employees, with mobile applications for on-the-go access. Integration with 350+ biometric devices
                ensures accurate attendance tracking, while the Invoice OCR feature reduces claim management time by 70%.
              </p>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <p className="font-semibold text-secondary mb-2">Perfect For:</p>
                <p className="text-gray-700">
                  Growing businesses, enterprises, manufacturing, healthcare, IT services, BPOs, retail chains, and any organization
                  needing to automate HR operations, ensure payroll accuracy, and provide employee self-service capabilities.
                </p>
              </div>
            </div>
          </section>

          {/* Core Modules */}
          <section id="modules" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Complete HR Modules for End-to-End Management
            </h2>

            {/* Features Diagram Image */}
            <div className="mb-12 relative flex justify-center max-w-4xl mx-auto">
              <SecureImage
                src="/images/products/cannyhr/cannyhr1.png?v=1.0"
                alt="CannyHR Complete HR Modules Overview"
                width={800}
                height={400}
                className="rounded-2xl object-contain h-[400px] select-none"
                unoptimized
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Recruitment & Onboarding",
                  icon: <PeopleIcon sx={{ fontSize: 40 }} />,
                  description: "Streamline hiring with applicant tracking, automated onboarding workflows, and digital form completion.",
                  features: ["Applicant tracking system", "Digital offer letters", "Onboarding automation", "Document collection"]
                },
                {
                  title: "Payroll & Compensation",
                  icon: <MoneyIcon sx={{ fontSize: 40 }} />,
                  description: "Accurate salary calculation, reimbursement processing, and automated payouts with banking integration.",
                  features: ["Salary calculation", "Reimbursement processing", "Bonus & incentives", "Payslip generation"]
                },
                {
                  title: "Time & Attendance",
                  icon: <ScheduleIcon sx={{ fontSize: 40 }} />,
                  description: "Track employee attendance with 350+ biometric device integrations and automated shift management.",
                  features: ["Biometric integration", "Shift scheduling", "Overtime tracking", "Late/early detection"]
                },
                {
                  title: "Leave Management",
                  icon: <ScheduleIcon sx={{ fontSize: 40 }} />,
                  description: "Manage leave requests, approvals, and balances with automated workflows and holiday calendars.",
                  features: ["Leave application", "Multi-level approvals", "Leave balance tracking", "Holiday management"]
                },
                {
                  title: "Performance Management",
                  icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
                  description: "Conduct performance reviews, set goals, track KPIs, and manage appraisals with structured workflows.",
                  features: ["360-degree reviews", "Goal setting & tracking", "KPI dashboards", "Appraisal cycles"]
                },
                {
                  title: "Employee Self-Service",
                  icon: <MobileIcon sx={{ fontSize: 40 }} />,
                  description: "Empower employees to access payslips, apply for leave, update personal information, and view benefits.",
                  features: ["Personal information", "Payslip access", "Leave application", "Benefits visibility"]
                },
              ].map((module, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-green-600 transition-all">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4">{module.title}</h3>
                  <p className="text-gray-700 mb-6">{module.description}</p>
                  <div className="space-y-2">
                    {module.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-2">
                        <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Payroll Section */}
          <section id="payroll" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              Comprehensive Payroll & Compensation Management
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700 text-lg leading-relaxed">
                Automate complex payroll calculations with <strong>CannyHR's intelligent payroll engine</strong>. Handle
                multi-location payroll, variable pay structures, statutory compliance, and banking integration all in one platform.
                Reduce payroll processing time by 60% while ensuring 100% accuracy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Automated Salary Calculation",
                  features: [
                    "CTC breakdown: Basic, HRA, DA, allowances",
                    "Statutory deductions: PF, ESI, PT, TDS",
                    "Variable pay: Bonuses, incentives, commissions",
                    "Arrears and advance salary management",
                    "Loss of Pay (LOP) auto-calculation",
                    "Overtime and shift allowance processing",
                  ],
                },
                {
                  title: "Reimbursement & Claims",
                  features: [
                    "Invoice OCR: 70% faster claim processing",
                    "Policy-based approval workflows",
                    "Medical, travel, and expense reimbursements",
                    "Receipt image upload and verification",
                    "Multi-level approval routing",
                    "Direct bank transfer integration",
                  ],
                },
                {
                  title: "Compliance & Reporting",
                  features: [
                    "Provident Fund (PF) returns generation",
                    "ESI returns and challans",
                    "Income Tax (TDS) calculations and Form 16",
                    "Professional Tax (PT) compliance",
                    "Payroll register and reports",
                    "Year-end tax statements (Form 12BB)",
                  ],
                },
                {
                  title: "Payslip & Banking",
                  features: [
                    "Digital payslip generation and distribution",
                    "Employee self-service payslip access",
                    "Banking integration for salary transfers",
                    "Salary credit via NEFT/RTGS/IMPS",
                    "Payment tracking and confirmation",
                    "Encrypted payslip storage",
                  ],
                },
              ].map((category, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-3">
                    <MoneyIcon sx={{ fontSize: 28, color: '#16a34a' }} />
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-2">
                        <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Time & Attendance */}
          <section id="attendance" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              Time & Attendance Tracking with 350+ Biometric Devices
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed">
                Accurate attendance tracking integrated with <strong>350+ biometric devices</strong> including fingerprint scanners,
                face recognition systems, RFID cards, and mobile GPS-based attendance. Eliminate time theft, buddy punching,
                and manual errors with automated attendance reconciliation.
              </p>
            </div>

            {/* Attendance Monitoring Diagram Image */}
            <div className="mt-8 mb-16 relative flex justify-center max-w-4xl mx-auto">
              <SecureImage
                src="/images/products/cannyhr/cannyhr3.png?v=1.1"
                alt="CannyHR Time & Attendance Monitoring Diagram"
                width={800}
                height={400}
                className="rounded-2xl object-contain h-[400px] select-none"
                unoptimized
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Biometric Integration",
                  description: "Connect with 350+ biometric devices from major manufacturers. Supports fingerprint, face recognition, RFID, and mobile attendance.",
                  icon: <SecurityIcon sx={{ fontSize: 40 }} />,
                },
                {
                  title: "Shift Management",
                  description: "Create flexible shift schedules with day, night, rotational shifts. Auto-assign shifts based on department, location, or role.",
                  icon: <ScheduleIcon sx={{ fontSize: 40 }} />,
                },
                {
                  title: "Overtime & Late Detection",
                  description: "Automatic overtime calculation, late arrivals, early departures tracking. Configurable grace periods and penalty rules.",
                  icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
                },
              ].map((feature, idx) => (
                <div key={idx} className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits & ROI */}
          <section id="benefits" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Business Benefits & ROI
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-8">
                <div className="text-5xl font-bold text-green-600 mb-3">60%</div>
                <h3 className="font-bold text-secondary text-lg mb-2">Payroll Time Savings</h3>
                <p className="text-gray-600 text-sm">Reduce payroll processing time from days to hours with automation</p>
              </div>
              <div className="text-center bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-8">
                <div className="text-5xl font-bold text-green-600 mb-3">70%</div>
                <h3 className="font-bold text-secondary text-lg mb-2">Claims Processing Speed</h3>
                <p className="text-gray-600 text-sm">Invoice OCR reduces manual data entry and speeds up approvals</p>
              </div>
              <div className="text-center bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-8">
                <div className="text-5xl font-bold text-green-600 mb-3">100%</div>
                <h3 className="font-bold text-secondary text-lg mb-2">Compliance Accuracy</h3>
                <p className="text-gray-600 text-sm">Automated statutory compliance for PF, ESI, PT, and TDS</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-secondary mb-4">Key Business Benefits</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "1. Eliminate Manual HR Processes",
                    content: "Automate repetitive tasks like attendance tracking, leave approvals, payroll calculations, and reimbursement processing. Free HR teams to focus on strategic initiatives like talent development and employee engagement.",
                  },
                  {
                    title: "2. Reduce Payroll Errors & Compliance Risk",
                    content: "Automated calculations eliminate human errors in salary computation, statutory deductions, and tax calculations. Stay compliant with labor laws, tax regulations, and audit requirements without manual effort.",
                  },
                  {
                    title: "3. Employee Self-Service & Satisfaction",
                    content: "Empower employees with mobile app access to payslips, leave balances, attendance records, and profile updates. Reduce HR support tickets by 50% while improving employee satisfaction and transparency.",
                  },
                  {
                    title: "4. Data-Driven HR Decisions",
                    content: "Real-time dashboards and analytics provide insights into headcount, attrition, performance trends, payroll costs, and departmental productivity. Make informed decisions backed by accurate HR data.",
                  },
                  {
                    title: "5. Scalable for Growth",
                    content: "CannyHR scales from 50 to 50,000+ employees without performance degradation. Cloud and on-premise deployment options ensure flexibility as your organization grows across locations.",
                  },
                  {
                    title: "6. Rapid ROI & Cost Savings",
                    content: "Typical ROI within 6-12 months through reduced administrative overhead, elimination of third-party payroll services, and prevention of compliance penalties. Average cost savings of 40% compared to legacy HRMS solutions.",
                  },
                ].map((benefit, idx) => (
                  <div key={idx}>
                    <h4 className="text-xl font-bold text-secondary mb-3">{benefit.title}</h4>
                    <p className="text-gray-700 text-lg leading-relaxed">{benefit.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section id="use-cases" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Industry Use Cases & Applications
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  industry: "Manufacturing & Production",
                  challenges: "Multiple shifts, large blue-collar workforce, piece-rate wages, overtime tracking",
                  solutions: [
                    "Biometric attendance for factory workers",
                    "Shift scheduling and rotational roster management",
                    "Piece-rate and production-based incentive calculation",
                    "Contractor and temporary worker management",
                  ],
                },
                {
                  industry: "IT Services & BPOs",
                  challenges: "Remote employees, flexible work hours, project-based billing, high attrition",
                  solutions: [
                    "Mobile attendance with GPS tracking for work-from-home",
                    "Project-wise timesheet tracking for client billing",
                    "Performance reviews with KPI dashboards",
                    "Exit interviews and rehire eligibility tracking",
                  ],
                },
                {
                  industry: "Healthcare & Hospitals",
                  challenges: "24/7 operations, multiple departments, varying shift allowances, compliance requirements",
                  solutions: [
                    "Duty roster management for doctors and nurses",
                    "Night shift and emergency duty allowances",
                    "Department-wise attendance and cost allocation",
                    "Credential tracking for medical licenses and certifications",
                  ],
                },
                {
                  industry: "Retail & Hospitality",
                  challenges: "Multi-location stores, hourly workers, high turnover, seasonal hiring",
                  solutions: [
                    "Centralized payroll across multiple store locations",
                    "Hourly wage and tip management",
                    "Seasonal employee onboarding and offboarding",
                    "Sales commission and incentive tracking",
                  ],
                },
                {
                  industry: "Education Institutions",
                  challenges: "Academic staff, contract faculty, stipend management, semester-based cycles",
                  solutions: [
                    "Faculty attendance and workload tracking",
                    "Stipend management for research scholars",
                    "Academic calendar integration for leave policies",
                    "Guest lecturer and visiting faculty payment processing",
                  ],
                },
                {
                  industry: "Government & Public Sector",
                  challenges: "Grade-based pay scales, pension management, long-term records, compliance",
                  solutions: [
                    "Grade pay and seniority-based increment automation",
                    "Pension and gratuity calculations",
                    "Service record maintenance for decades",
                    "RTI compliance and audit trail documentation",
                  ],
                },
              ].map((usecase, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <BusinessIcon sx={{ fontSize: 32, color: '#16a34a' }} />
                    <h3 className="text-xl font-bold text-secondary">{usecase.industry}</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-600 mb-4">Challenges: {usecase.challenges}</p>
                  <div className="space-y-2">
                    {usecase.solutions.map((solution, sidx) => (
                      <div key={sidx} className="flex items-start gap-2">
                        <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Security & Compliance */}
          <section id="security" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              Security & Compliance Standards
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                Employee data is highly sensitive. CannyHR implements enterprise-grade security controls and maintains
                compliance with Indian labor laws, tax regulations, and data privacy standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Data Security",
                  features: [
                    "256-bit AES encryption for data at rest and in transit",
                    "Role-based access control (RBAC) with granular permissions",
                    "Audit trails for all HR transactions and data changes",
                    "Secure cloud hosting with daily backups",
                    "Multi-factor authentication (MFA) for admin access",
                    "GDPR-compliant data handling and employee consent",
                  ],
                  icon: <SecurityIcon sx={{ fontSize: 40 }} />,
                },
                {
                  title: "Statutory Compliance",
                  features: [
                    "Provident Fund (PF) Act compliance and returns",
                    "Employees State Insurance (ESI) compliance",
                    "Professional Tax (PT) calculations per state rules",
                    "Income Tax Act (TDS) deductions and Form 16 generation",
                    "Shops & Establishments Act compliance",
                    "Labor Welfare Fund (LWF) and other statutory deductions",
                  ],
                  icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
                },
              ].map((category, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-6">{category.title}</h3>
                  <div className="space-y-3">
                    {category.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-2">
                        <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Author Bio */}
          <section id="author" className="mb-20">
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 relative flex-shrink-0 shadow-lg rounded-full overflow-hidden border-2 border-green-100 bg-gray-100">
                  <SecureImage
                    src="/images/about/Christopher-Director.png"
                    alt="Christopher - Head of Technical Department"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-secondary mb-2">About the Author</h3>
                  <p className="text-lg font-semibold text-green-600 mb-4">
                    Christopher - Head of Technical Department & Investor
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Christopher leads CannyMinds Technology Solutions' technical innovation and product development.
                    As Head of the Technical Department and a key investor, he oversees the design and implementation
                    of enterprise HR management solutions, including CannyHR's payroll automation and biometric integration.
                    With expertise in HR technology, compliance automation, and workforce analytics, Christopher ensures
                    CannyHR delivers accurate, scalable, and compliant solutions for organizations managing complex payroll
                    and attendance requirements across multiple locations.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}

          {/* Related Products */}
          <section id="related" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Related CannyMinds Products
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "CannyDocs",
                  tagline: "Document Management System",
                  description: "Complete DMS for HR documents including employee records, contracts, offer letters, and performance reviews. Automated workflows with 99% OCR accuracy.",
                  link: "/product/enterprise-content-management",
                  color: "blue",
                },
                {
                  name: "CannyScan",
                  tagline: "Document Scanning Services",
                  description: "Professional scanning services for digitizing employee files, historical HR records, and compliance documents. Secure, accurate, and fast digitization.",
                  link: "/product/scanning-solution",
                  color: "purple",
                },
                {
                  name: "CannyTrack",
                  tagline: "Productivity Monitoring",
                  description: "Workforce productivity tracking with activity monitoring, screenshots, and data loss prevention. Monitor remote employees with consent-based tracking.",
                  link: "/product/tracking-system",
                  color: "orange",
                },
              ].map((product, idx) => (
                <Link
                  key={idx}
                  href={product.link}
                  className={`bg-gradient-to-br from-${product.color}-50 to-white border-2 border-${product.color}-200 rounded-xl p-8 hover:border-${product.color}-600 transition-all group`}
                >
                  <h3 className="text-2xl font-bold text-secondary mb-2">{product.name}</h3>
                  <p className="text-sm font-semibold text-gray-600 mb-4">{product.tagline}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
                  <div className={`inline-flex items-center gap-2 text-${product.color}-600 font-semibold group-hover:gap-3 transition-all`}>
                    Learn More
                    <ArrowIcon sx={{ fontSize: 20 }} />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section id="get-started" className="mb-20">
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-12 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your HR Operations?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Automate payroll, attendance, and leave management with CannyHR. Get a free demo and see how
                CannyHR can reduce HR processing time by 60% and eliminate compliance risks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Request Free Demo
                  <ArrowIcon sx={{ fontSize: 20 }} />
                </Link>
                <Link
                  href="/#contact"
                  className="bg-green-700 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-all inline-flex items-center justify-center gap-2"
                >
                  Contact Sales Team
                  <PeopleIcon sx={{ fontSize: 20 }} />
                </Link>
              </div>
              <p className="text-sm text-white/70 mt-6">
                Trusted by 100+ organizations managing 5,000+ employees
              </p>
            </div>
          </section>

        </article>


      </div >
    </>
  );
}
