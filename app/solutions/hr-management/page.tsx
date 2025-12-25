import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
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

// SEO Metadata
export const metadata: Metadata = {
  title: "CannyHR - Complete HR & Payroll Management Software | HRMS Solution 2025",
  description: "CannyHR is a comprehensive Hire-to-Retire HR and payroll management platform with time tracking, leave management, performance reviews, and 350+ biometric integrations. Mobile app included.",
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
    title: "CannyHR - Complete HR & Payroll Management Software",
    description: "Comprehensive Hire-to-Retire HRMS with payroll, attendance tracking, leave management, and performance reviews.",
    type: "article",
    authors: ["Christopher"],
  },
  robots: { index: true, follow: true },
};

// JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://cannymindstech.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://cannymindstech.com/#products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "CannyHR - HR & Payroll Management"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "CannyHR - Complete HR & Payroll Management Software",
      "description": "Comprehensive guide to CannyHR HR and payroll management platform with attendance tracking, leave management, performance reviews, and mobile access.",
      "image": "https://cannymindstech.com/images/cannyhr-dashboard.jpg",
      "author": {
        "@type": "Person",
        "name": "Christopher",
        "jobTitle": "Head of Technical Department & Investor",
        "url": "https://cannymindstech.com/about"
      },
      "publisher": {
        "@type": "Organization",
        "name": "CannyMinds Technology Solutions",
        "logo": {
          "@type": "ImageObject",
          "url": "https://cannymindstech.com/logo.png"
        },
        "url": "https://cannymindstech.com"
      },
      "datePublished": "2025-01-15",
      "dateModified": new Date().toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://cannymindstech.com/solutions/hr-management"
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "CannyHR",
      "applicationCategory": "BusinessApplication",
      "description": "Complete HR and payroll management system with attendance tracking and performance management",
      "operatingSystem": "Web, Windows, macOS, Linux, iOS, Android",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "10"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is CannyHR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CannyHR is a comprehensive Hire-to-Retire HR and payroll management platform that automates employee lifecycle management, payroll processing, time tracking, leave management, and performance reviews with mobile access."
          }
        },
        {
          "@type": "Question",
          "name": "Does CannyHR support biometric devices?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. CannyHR integrates with 350+ biometric devices for accurate attendance tracking and check-in/check-out functionality."
          }
        },
        {
          "@type": "Question",
          "name": "Is CannyHR available on mobile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. CannyHR provides native mobile applications for iOS and Android, enabling employees to access payslips, apply for leave, mark attendance, and manage their profiles on the go."
          }
        }
      ]
    }
  ]
};

export default function CannyHRProductPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Navigation />

      <div className="min-h-screen bg-white">

        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b border-gray-200 py-4 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm overflow-x-auto">
              <li><Link href="/" className="text-primary hover:text-primary/80 whitespace-nowrap">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/#solutions" className="text-primary hover:text-primary/80 whitespace-nowrap">Solutions</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600 font-medium truncate">CannyHR - HR & Payroll Management Software</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <StarIcon sx={{ fontSize: 18 }} />
                  Complete Hire-to-Retire HRMS
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
                  Transform HR Operations with <span className="text-green-600">CannyHR</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  Complete HR and payroll management platform covering the entire employee lifecycle—from recruitment to retirement.
                  Automate payroll, track attendance with <strong>350+ biometric devices</strong>, manage leave, and conduct performance
                  reviews. Mobile app for employees and managers.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="#get-started"
                    className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                  >
                    Request Demo
                    <ArrowIcon sx={{ fontSize: 20 }} />
                  </Link>
                  <Link
                    href="#features"
                    className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all inline-flex items-center justify-center gap-2"
                  >
                    Explore Features
                    <PeopleIcon sx={{ fontSize: 20 }} />
                  </Link>
                </div>

                {/* Social Share */}
                <div className="flex items-center gap-4 mb-6">
                  <SocialShare
                    title="CannyHR - Complete HR & Payroll Management Solution"
                    description="All-in-one HRMS for attendance, payroll, leave management, and employee self-service. Integrated with 350+ biometric devices. Streamline your HR operations."
                  />
                  <span className="text-sm text-gray-600">Share this product</span>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-600 flex-wrap">
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 18, color: '#25d366' }} /> 350+ Biometric Devices</span>
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 18, color: '#25d366' }} /> Mobile App</span>
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 18, color: '#25d366' }} /> Cloud/On-Premise</span>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center" role="img" aria-label="CannyHR dashboard showing employee management, payroll, and attendance tracking">
                <PeopleIcon sx={{ fontSize: 120, color: '#94a3b8' }} aria-hidden="true" />
                <p className="text-gray-600 font-semibold mt-6 text-lg">IMAGE PLACEHOLDER</p>
                <p className="text-sm text-gray-500 mt-2">CannyHR Dashboard</p>
                <p className="text-xs text-gray-400 mt-1">Recommended size: 1200x800px</p>
              </div>

            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center text-white">
              {[
                { number: "10+", label: "Happy Clients" },
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
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* What is CannyHR */}
          <section id="what-is" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              What is CannyHR HR Management System?
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>CannyHR</strong> is a comprehensive Hire-to-Retire HR and payroll management platform designed to transform
                human capital operations using industry best practices. From recruiting and onboarding new hires to managing payroll,
                tracking attendance, processing leave requests, and conducting performance reviews—CannyHR automates the entire
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

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                Automate complex payroll calculations with <strong>CannyHR's intelligent payroll engine</strong>. Handle
                multi-location payroll, variable pay structures, statutory compliance, and banking integration—all in one platform.
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

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                Accurate attendance tracking integrated with <strong>350+ biometric devices</strong> including fingerprint scanners,
                face recognition systems, RFID cards, and mobile GPS-based attendance. Eliminate time theft, buddy punching,
                and manual errors with automated attendance reconciliation.
              </p>
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

          {/* Customer Testimonials */}
          <section id="testimonials" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              What Our Clients Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: "Suresh Menon",
                  role: "HR Director",
                  company: "Manufacturing Company",
                  testimonial: "CannyHR transformed our payroll from a 3-day manual process to 2 hours of automated processing. The biometric integration with our factory floor devices works flawlessly. Compliance reporting is now effortless.",
                  rating: 5,
                },
                {
                  name: "Anita Desai",
                  role: "Operations Manager",
                  company: "IT Services Firm",
                  testimonial: "Managing 500+ remote employees was a nightmare before CannyHR. The mobile app gives employees full transparency, reducing HR queries by 70%. The Invoice OCR for expense claims is a game-changer.",
                  rating: 5,
                },
                {
                  name: "Dr. Vikram Singh",
                  role: "Chief Administrator",
                  company: "Multi-Specialty Hospital",
                  testimonial: "Hospital shift management is complex, but CannyHR handles it perfectly. Night shift allowances, on-call duty tracking, and credential management for doctors are all automated. Highly recommended for healthcare.",
                  rating: 5,
                },
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} sx={{ fontSize: 20, color: '#f59e0b' }} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>
                  <div>
                    <div className="font-bold text-secondary">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8">
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div>
                  <div className="text-2xl font-bold text-secondary">4.9/5.0</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} sx={{ fontSize: 32, color: '#f59e0b' }} />
                  ))}
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">10+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
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
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-green-600">C</span>
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
          <section id="faq" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "What is CannyHR?",
                  answer: "CannyHR is a comprehensive Hire-to-Retire HR and payroll management platform that automates employee lifecycle management, payroll processing, time tracking, leave management, and performance reviews with mobile access.",
                },
                {
                  question: "Does CannyHR support biometric devices?",
                  answer: "Yes. CannyHR integrates with 350+ biometric devices for accurate attendance tracking and check-in/check-out functionality. We support fingerprint scanners, face recognition systems, RFID cards, and mobile GPS-based attendance from all major manufacturers.",
                },
                {
                  question: "Is CannyHR available on mobile?",
                  answer: "Yes. CannyHR provides native mobile applications for iOS and Android, enabling employees to access payslips, apply for leave, mark attendance, and manage their profiles on the go. Managers can approve requests and view team dashboards from mobile.",
                },
                {
                  question: "How does CannyHR handle statutory compliance?",
                  answer: "CannyHR automates statutory compliance for Provident Fund (PF), ESI, Professional Tax (PT), TDS, and other labor law requirements. The system generates compliant returns, challans, and reports automatically based on latest government regulations.",
                },
                {
                  question: "Can CannyHR handle multi-location payroll?",
                  answer: "Absolutely. CannyHR supports centralized payroll processing across multiple locations, branches, or subsidiaries. Each location can have different shift timings, leave policies, and statutory requirements—all managed from a single platform.",
                },
                {
                  question: "What is Invoice OCR for expense claims?",
                  answer: "Invoice OCR uses optical character recognition to automatically extract data from uploaded expense receipts and invoices. This reduces manual data entry time by 70%, speeds up claim approvals, and minimizes errors in reimbursement processing.",
                },
                {
                  question: "Does CannyHR support variable pay and incentives?",
                  answer: "Yes. CannyHR handles complex variable pay structures including performance bonuses, sales commissions, production incentives, shift allowances, and one-time payments. All variable components are automatically integrated into payroll calculations.",
                },
                {
                  question: "Can I customize leave policies in CannyHR?",
                  answer: "Yes. CannyHR allows full customization of leave policies including earned leave, sick leave, casual leave, compensatory off, maternity/paternity leave, and custom leave types. Set accrual rules, carry-forward limits, and encashment policies per department or employee grade.",
                },
                {
                  question: "How does performance management work in CannyHR?",
                  answer: "CannyHR provides structured performance review cycles with 360-degree feedback, goal setting and tracking, KPI dashboards, and competency assessments. Managers can conduct appraisals, provide ratings, and link performance to salary increments and promotions.",
                },
                {
                  question: "Is CannyHR available as cloud or on-premise?",
                  answer: "Both. CannyHR is available as a cloud-hosted SaaS solution for quick deployment, or as an on-premise installation for organizations with specific data residency or security requirements. Hybrid deployment models also available.",
                },
                {
                  question: "What integrations does CannyHR offer?",
                  answer: "CannyHR integrates with banking systems for salary transfers, 350+ biometric devices, email systems (SMTP/Office 365), and provides REST APIs for integration with ERP, accounting software, and third-party applications.",
                },
                {
                  question: "How long does CannyHR implementation take?",
                  answer: "Implementation timelines depend on organization size and complexity. Small businesses (50-200 employees) typically go live in 2-3 weeks. Large enterprises (1,000+ employees) with complex requirements may take 6-8 weeks including data migration, customization, and training.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-600 transition-all">
                  <h3 className="text-lg font-bold text-secondary mb-3 flex items-start gap-3">
                    <span className="text-green-600 flex-shrink-0">Q{idx + 1}.</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-8">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

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
                  description: "Complete DMS for HR documents including employee records, contracts, offer letters, and performance reviews. Automated workflows with 80% OCR accuracy.",
                  link: "/solutions/document-management",
                  color: "blue",
                },
                {
                  name: "CannyScan",
                  tagline: "Document Scanning Services",
                  description: "Professional scanning services for digitizing employee files, historical HR records, and compliance documents. Secure, accurate, and fast digitization.",
                  link: "/solutions/scanning-solution",
                  color: "purple",
                },
                {
                  name: "CannyTrack",
                  tagline: "Productivity Monitoring",
                  description: "Workforce productivity tracking with activity monitoring, screenshots, and data loss prevention. Monitor remote employees with consent-based tracking.",
                  link: "/solutions/tracking-system",
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
                Trusted by 10+ organizations managing 5,000+ employees
              </p>
            </div>
          </section>

        </article>

        <Footer />

      </div>
    </>
  );
}
