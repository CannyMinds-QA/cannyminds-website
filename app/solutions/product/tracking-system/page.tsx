import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import SocialShare from "@/components/ui/SocialShare";
import {
  CheckCircle as CheckIcon,
  Star as StarIcon,
  Visibility as VisibilityIcon,
  Screenshot as ScreenshotIcon,
  Security as SecurityIcon,
  Assessment as AssessmentIcon,
  Computer as ComputerIcon,
  CloudUpload as CloudIcon,
  Block as BlockIcon,
  Timeline as TimelineIcon,
  ArrowForward as ArrowIcon,
  InsertChart as ChartIcon,
} from '@mui/icons-material';

// SEO Metadata
export const metadata: Metadata = {
  title: "CannyTrack - Employee Productivity Monitoring Software",
  description: "Workforce productivity monitoring with activity tracking, screenshots, and data loss prevention. Consent-based, real-time analytics with offline support.",
  keywords: [
    "CannyTrack",
    "productivity monitoring software",
    "employee tracking system",
    "workforce management software",
    "activity tracking",
    "screenshot monitoring",
    "data loss prevention",
    "app URL tracking",
    "remote employee monitoring",
    "productivity analytics"
  ],
  authors: [{ name: "Christopher" }],
  openGraph: {
    title: "CannyTrack - Employee Productivity Monitoring Software",
    description: "Workforce productivity monitoring with activity tracking, screenshots, and data loss prevention. Consent-based, real-time analytics with offline support.",
    type: "article",
    url: "https://www.cannymindstech.com/solutions/tracking-system",
    authors: ["Christopher"],
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CannyTrack - Employee Productivity Monitoring Software",
      },
    ],
  },
  alternates: {
    canonical: "https://www.cannymindstech.com/solutions/tracking-system",
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
          "name": "CannyTrack - Productivity Monitoring"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "CannyTrack - Employee Productivity Monitoring & Tracking Software",
      "description": "Comprehensive guide to CannyTrack productivity monitoring platform with activity tracking, screenshot capture, and data loss prevention.",
      "image": "https://cannymindstech.com/images/cannytrack-dashboard.jpg",
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
        "@id": "https://cannymindstech.com/solutions/tracking-system"
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "CannyTrack",
      "applicationCategory": "BusinessApplication",
      "description": "Employee productivity monitoring and tracking system with activity analytics and data loss prevention",
      "operatingSystem": "Web, Windows, macOS, Linux",
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
          "name": "What is CannyTrack?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CannyTrack is a workforce productivity monitoring solution that provides visibility into remote employee activities with consent-based tracking, activity monitoring, screenshots, app/URL tracking, and data loss prevention."
          }
        },
        {
          "@type": "Question",
          "name": "Is CannyTrack consent-based?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. CannyTrack operates on a consent-based model with transparent employee notification. Employees have dashboard access to view their own tracking data."
          }
        },
        {
          "@type": "Question",
          "name": "Does CannyTrack work offline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. CannyTrack stores data locally during connectivity outages and syncs automatically when connection is restored, preserving data integrity."
          }
        }
      ]
    }
  ]
};

export default function CannyTrackProductPage() {
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
              <li className="text-gray-600 font-medium truncate">CannyTrack - Productivity Monitoring System</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">

              <div>
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                  <StarIcon sx={{ fontSize: 16 }} />
                  Consent-Based Productivity Monitoring
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 leading-tight">
                  Boost Team Productivity with <span className="text-orange-600">CannyTrack</span>
                </h1>

                <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                  Comprehensive workforce monitoring solution providing real-time visibility into remote employee activities.
                  Track productivity with <strong>consent-based monitoring</strong>, activity analytics, optional screenshots,
                  app/URL tracking, and data loss prevention all while maintaining transparency and employee privacy.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Link
                    href="#get-started"
                    className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 text-sm"
                  >
                    Request Demo
                    <ArrowIcon sx={{ fontSize: 18 }} />
                  </Link>
                  <Link
                    href="#features"
                    className="bg-white text-orange-600 border-2 border-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all inline-flex items-center justify-center gap-2 text-sm"
                  >
                    See Features
                    <VisibilityIcon sx={{ fontSize: 18 }} />
                  </Link>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap mb-4">
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} /> Consent-Based</span>
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} /> Real-Time Analytics</span>
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} /> Offline Support</span>
                </div>

                {/* Social Share */}
                <div className="flex items-center gap-3">
                  <SocialShare
                    title="CannyTrack - Productivity & Workforce Monitoring"
                    description="Transparent productivity monitoring with activity tracking, screenshots, and data loss prevention for remote teams. Consent-based, real-time analytics with offline support."
                  />
                  <span className="text-xs text-gray-500">Share this product</span>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center" role="img" aria-label="CannyTrack dashboard showing productivity analytics, activity tracking, and workforce monitoring">
                <ChartIcon sx={{ fontSize: 120, color: '#94a3b8' }} aria-hidden="true" />
                <p className="text-gray-600 font-semibold mt-6 text-lg">IMAGE PLACEHOLDER</p>
                <p className="text-sm text-gray-500 mt-2">CannyTrack Dashboard</p>
                <p className="text-xs text-gray-400 mt-1">Recommended size: 1200x800px</p>
              </div>

            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-orange-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center text-white">
              {[
                { number: "10+", label: "Happy Clients" },
                { number: "2,000+", label: "Users Monitored" },
                { number: "Real-Time", label: "Activity Tracking" },
                { number: "100%", label: "Data Privacy" },
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
                  { title: "What is CannyTrack?", href: "#what-is" },
                  { title: "Activity Tracking", href: "#activity-tracking" },
                  { title: "Screenshot Monitoring", href: "#screenshots" },
                  { title: "App & URL Tracking", href: "#app-url" },
                  { title: "Data Loss Prevention", href: "#data-loss" },
                  { title: "Productivity Analytics", href: "#analytics" },
                  { title: "Consent & Transparency", href: "#consent" },
                  { title: "Offline Capabilities", href: "#offline" },
                  { title: "Reporting & Insights", href: "#reporting" },
                  { title: "Benefits & Use Cases", href: "#benefits" },
                  { title: "Security & Compliance", href: "#security" },
                  { title: "Frequently Asked Questions", href: "#faq" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-3 text-orange-600 hover:text-orange-800 hover:bg-orange-50 p-3 rounded-lg transition-all group"
                  >
                    <ArrowIcon className="text-orange-600 group-hover:translate-x-1 transition-transform" sx={{ fontSize: 20 }} />
                    <span className="font-medium">{item.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* What is CannyTrack */}
          <section id="what-is" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              What is CannyTrack Productivity Monitoring System?
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>CannyTrack</strong> is a comprehensive workforce management and productivity monitoring solution designed to
                provide managers with real-time visibility into remote employee activities while maintaining transparency and consent.
                The platform combines <strong>activity tracking, optional screenshot capture, app/URL monitoring, and data loss
                  prevention</strong> to help organizations optimize workforce utilization, identify productivity bottlenecks, and protect
                sensitive data.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Built with privacy in mind, CannyTrack operates on a <strong>consent-based model</strong> where employees are notified
                of monitoring and have dashboard access to view their own tracking data. The platform offers sensitive data blurring,
                customizable screenshot frequency, and role-based access controls to balance productivity insights with employee privacy.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
                <p className="font-semibold text-secondary mb-2">Perfect For:</p>
                <p className="text-gray-700">
                  Remote teams, hybrid workforces, BPOs, IT services, customer support centers, distributed teams, and any organization
                  needing to monitor productivity, optimize resource allocation, and prevent data breaches in remote work environments.
                </p>
              </div>
            </div>
          </section>

          {/* Core Features */}
          <section id="features" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Comprehensive Monitoring Features
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Activity Tracking",
                  icon: <TimelineIcon sx={{ fontSize: 40 }} />,
                  description: "Monitor mouse and keyboard activity with real-time status visibility showing active, idle, and away time.",
                  features: ["Mouse activity tracking", "Keyboard activity logging", "Idle time detection", "Active hours tracking"]
                },
                {
                  title: "Screenshot Monitoring",
                  icon: <ScreenshotIcon sx={{ fontSize: 40 }} />,
                  description: "Optional screenshot capture with configurable frequency, sensitive data blurring, and encrypted storage.",
                  features: ["Configurable frequency", "Data blurring options", "Encrypted storage", "Employee dashboard access"]
                },
                {
                  title: "App & URL Tracking",
                  icon: <ComputerIcon sx={{ fontSize: 40 }} />,
                  description: "Track application usage and website visits with time spent, categorization, and productivity scoring.",
                  features: ["App title & time tracking", "URL visit logging", "Productive/unproductive classification", "License optimization"]
                },
                {
                  title: "Data Loss Prevention",
                  icon: <SecurityIcon sx={{ fontSize: 40 }} />,
                  description: "Monitor digital asset movement and critical actions to prevent data breaches and unauthorized transfers.",
                  features: ["Asset movement tracking", "Critical action alerts", "USB/email monitoring", "Proactive threat detection"]
                },
                {
                  title: "Productivity Analytics",
                  icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
                  description: "Real-time dashboards with productivity metrics, team comparisons, and performance trends.",
                  features: ["Real-time dashboards", "Team comparisons", "High/low performer identification", "Trend analysis"]
                },
                {
                  title: "Offline Support",
                  icon: <CloudIcon sx={{ fontSize: 40 }} />,
                  description: "Local data storage during connectivity outages with automatic sync when connection is restored.",
                  features: ["Local storage", "Auto-sync on reconnect", "Data integrity", "No data loss"]
                },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-orange-600 transition-all">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-orange-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4">{feature.title}</h3>
                  <p className="text-gray-700 mb-6">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.features.map((item, fidx) => (
                      <div key={fidx} className="flex items-start gap-2">
                        <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Activity Tracking */}
          <section id="activity-tracking" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              Real-Time Activity Tracking & Status Monitoring
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                CannyTrack provides <strong>real-time visibility</strong> into employee activity with mouse and keyboard tracking,
                active/idle time detection, and work status monitoring. Managers see live dashboards showing who's working,
                who's idle, and who's on break enabling better resource allocation and productivity management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Mouse & Keyboard Activity",
                  features: [
                    "Real-time mouse movement tracking",
                    "Keyboard activity and typing speed",
                    "Active vs. idle time differentiation",
                    "Away time detection (bathroom, meetings)",
                    "Configurable idle thresholds (5-15 minutes)",
                    "Activity intensity heatmaps",
                  ],
                },
                {
                  title: "Work Status Indicators",
                  features: [
                    "Live status: Active, Idle, Away, Offline",
                    "Current application and window title",
                    "Active hours tracking per day/week",
                    "Break time logging",
                    "Remote/office location tracking",
                    "Team productivity comparison",
                  ],
                },
              ].map((category, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-8">
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

          {/* Consent & Transparency */}
          <section id="consent" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              Consent-Based Monitoring with Full Transparency
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                Unlike stealth monitoring tools, CannyTrack operates on a <strong>transparent, consent-based model</strong>.
                Employees are notified of monitoring, understand what data is collected, and have dashboard access to view
                their own tracking data. This builds trust while maintaining productivity accountability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Employee Notification",
                  description: "Clear notification during software installation. Employees understand what's monitored and why. No hidden or stealth tracking.",
                  icon: <VisibilityIcon sx={{ fontSize: 40 }} />,
                },
                {
                  title: "Dashboard Access",
                  description: "Employees access their own activity logs, screenshots, and productivity metrics. Full transparency into what managers see.",
                  icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
                },
                {
                  title: "Privacy Controls",
                  description: "Configurable screenshot blurring for sensitive data. Exclude personal apps and websites from tracking. Privacy-first design.",
                  icon: <SecurityIcon sx={{ fontSize: 40 }} />,
                },
              ].map((feature, idx) => (
                <div key={idx} className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-orange-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits & Use Cases */}
          <section id="benefits" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Business Benefits & Use Cases
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-8">
                <div className="text-5xl font-bold text-orange-600 mb-3">35%</div>
                <h3 className="font-bold text-secondary text-lg mb-2">Productivity Increase</h3>
                <p className="text-gray-600 text-sm">Average productivity gain from monitoring awareness and accountability</p>
              </div>
              <div className="text-center bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-8">
                <div className="text-5xl font-bold text-orange-600 mb-3">4x</div>
                <h3 className="font-bold text-secondary text-lg mb-2">Faster Data Breach Detection</h3>
                <p className="text-gray-600 text-sm">Identify suspicious file transfers and data exfiltration attempts quickly</p>
              </div>
              <div className="text-center bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-8">
                <div className="text-5xl font-bold text-orange-600 mb-3">90%</div>
                <h3 className="font-bold text-secondary text-lg mb-2">Reduction in Time Theft</h3>
                <p className="text-gray-600 text-sm">Eliminate unproductive time and ensure billable hours accuracy</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-secondary mb-4">Key Business Benefits</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "1. Optimize Remote Workforce Productivity",
                    content: "Gain visibility into distributed team activities without micromanagement. Identify productivity patterns, peak work hours, and optimization opportunities. Support remote employees with data-driven insights while maintaining work-life balance.",
                  },
                  {
                    title: "2. Prevent Data Loss & Insider Threats",
                    content: "Monitor critical data movements including file uploads, email attachments, USB transfers, and cloud storage activity. Detect anomalous behavior and potential data breaches before they cause damage. Protect intellectual property and sensitive customer data.",
                  },
                  {
                    title: "3. Accurate Client Billing & Time Tracking",
                    content: "For agencies and consulting firms, CannyTrack provides precise time logs for client billing. Track project hours, application usage, and deliverable progress. Eliminate billing disputes with screenshot evidence and activity logs.",
                  },
                  {
                    title: "4. Identify High & Low Performers",
                    content: "Performance analytics reveal top performers and struggling team members. Recognize productive employees, provide targeted coaching to underperformers, and make data-driven decisions about promotions, bonuses, and performance improvement plans.",
                  },
                  {
                    title: "5. Compliance & Audit Documentation",
                    content: "Maintain comprehensive audit trails for regulatory compliance (SOX, HIPAA, GDPR). Provide evidence of employee activities for compliance audits, security investigations, and legal disputes. Encrypted logs with tamper-proof timestamps.",
                  },
                  {
                    title: "6. Reduce Operational Costs",
                    content: "Identify software license waste by tracking application usage. Eliminate unnecessary subscriptions and optimize tool allocation. Reduce overtime costs by analyzing actual work hours vs. reported time. Improve resource utilization and project profitability.",
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

          {/* Industry Use Cases */}
          <section id="use-cases" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Industry Use Cases & Applications
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  industry: "IT Services & BPOs",
                  challenges: "Remote employees, client billing accuracy, data security, productivity accountability",
                  solutions: [
                    "Project-wise time tracking for client billing",
                    "Screenshot evidence for billable hours",
                    "Data loss prevention for client data",
                    "Remote team productivity monitoring",
                  ],
                },
                {
                  industry: "Financial Services & Banking",
                  challenges: "Sensitive data handling, compliance requirements, insider threat prevention",
                  solutions: [
                    "Monitor access to customer financial data",
                    "Track email and file transfer activities",
                    "Audit trails for compliance (SOX, GDPR)",
                    "Alert on suspicious data exfiltration",
                  ],
                },
                {
                  industry: "Healthcare Organizations",
                  challenges: "HIPAA compliance, patient data protection, remote healthcare workers",
                  solutions: [
                    "Monitor PHI (Protected Health Information) access",
                    "Track medical record viewing and downloads",
                    "HIPAA-compliant activity logging",
                    "Telehealth worker productivity tracking",
                  ],
                },
                {
                  industry: "Legal Firms & Consulting",
                  challenges: "Billable hours accuracy, client confidentiality, document security",
                  solutions: [
                    "Accurate time tracking for hourly billing",
                    "Monitor access to confidential case files",
                    "Screenshot proof for client deliverables",
                    "Attorney and paralegal productivity analytics",
                  ],
                },
                {
                  industry: "E-commerce & Customer Support",
                  challenges: "Distributed support teams, performance metrics, quality assurance",
                  solutions: [
                    "Monitor support ticket handling time",
                    "Track CRM and helpdesk application usage",
                    "Screenshot QA for customer interactions",
                    "Identify training needs from activity patterns",
                  ],
                },
                {
                  industry: "Software Development Teams",
                  challenges: "Remote developers, project deadline tracking, code security",
                  solutions: [
                    "Track development tool usage (IDE, Git, JIRA)",
                    "Monitor code commit patterns and productivity",
                    "Prevent unauthorized code repository access",
                    "Sprint velocity and developer efficiency analytics",
                  ],
                },
              ].map((usecase, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <ComputerIcon sx={{ fontSize: 32, color: '#ea580c' }} />
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
              Security, Privacy & Compliance Standards
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                Monitoring employee activity requires the highest security and privacy standards. CannyTrack implements
                enterprise-grade encryption, access controls, and privacy features to protect both employee and company data.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Data Security & Encryption",
                  features: [
                    "256-bit AES encryption for all captured data",
                    "Encrypted screenshot storage with access controls",
                    "Secure agent-to-server communication (TLS 1.3)",
                    "Role-based access control (RBAC) for dashboards",
                    "Multi-factor authentication (MFA) for admins",
                    "SOC 2 Type II compliant infrastructure",
                  ],
                  icon: <SecurityIcon sx={{ fontSize: 40 }} />,
                },
                {
                  title: "Privacy & Employee Rights",
                  features: [
                    "Consent-based monitoring with notification",
                    "Employee dashboard for self-view access",
                    "Screenshot blurring for sensitive data",
                    "Exclusion lists for personal apps/websites",
                    "GDPR Article 88 compliance (workplace monitoring)",
                    "Data retention policies and deletion rights",
                  ],
                  icon: <BlockIcon sx={{ fontSize: 40 }} />,
                },
              ].map((category, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-orange-600">
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
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-orange-600">C</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-secondary mb-2">About the Author</h3>
                  <p className="text-lg font-semibold text-orange-600 mb-4">
                    Christopher - Head of Technical Department & Investor
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Christopher leads CannyMinds Technology Solutions' technical innovation and product development.
                    As Head of the Technical Department and a key investor, he oversees the design and implementation
                    of enterprise productivity monitoring solutions, including CannyTrack's consent-based tracking and
                    data loss prevention features. With expertise in workforce analytics, cybersecurity, and privacy-compliant
                    monitoring technologies, Christopher ensures CannyTrack delivers transparent productivity insights while
                    respecting employee privacy and maintaining compliance with global data protection regulations.
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
                  question: "What is CannyTrack?",
                  answer: "CannyTrack is a workforce productivity monitoring solution that provides visibility into remote employee activities with consent-based tracking, activity monitoring, screenshots, app/URL tracking, and data loss prevention.",
                },
                {
                  question: "Is CannyTrack consent-based?",
                  answer: "Yes. CannyTrack operates on a consent-based model with transparent employee notification. Employees are informed about what's monitored, why it's monitored, and have dashboard access to view their own tracking data. No stealth or hidden monitoring.",
                },
                {
                  question: "Can employees see their own tracking data?",
                  answer: "Absolutely. Employees have full dashboard access to view their activity logs, screenshots, productivity metrics, and application usage. This transparency builds trust and allows self-assessment.",
                },
                {
                  question: "Does CannyTrack capture screenshots?",
                  answer: "Yes, with configurable frequency (every 5-30 minutes). Screenshots can be blurred to hide sensitive data like passwords, financial information, or personal content. Organizations can customize screenshot settings based on their privacy policies.",
                },
                {
                  question: "How does data loss prevention work?",
                  answer: "CannyTrack monitors critical data movement activities including file uploads/downloads, email attachments, USB transfers, cloud storage access, and print jobs. Administrators receive real-time alerts for suspicious activities and can review audit trails for compliance.",
                },
                {
                  question: "Does CannyTrack work offline?",
                  answer: "Yes. The desktop agent stores tracking data locally during connectivity outages and automatically syncs to the cloud when the connection is restored. This ensures no data loss and preserves tracking integrity.",
                },
                {
                  question: "Can I track time spent on specific applications and websites?",
                  answer: "Yes. CannyTrack logs all application usage and website visits with time spent. Applications and URLs are automatically categorized as productive or unproductive. Customize categories based on your organization's workflow.",
                },
                {
                  question: "Is CannyTrack GDPR compliant?",
                  answer: "Yes. CannyTrack is designed for GDPR Article 88 compliance (workplace monitoring). We implement consent mechanisms, data minimization, purpose limitation, employee access rights, and data retention controls as required by GDPR.",
                },
                {
                  question: "How do I prevent tracking personal activities?",
                  answer: "Administrators can configure exclusion lists for personal applications (social media, banking apps) and websites. Employees can also request additions to the exclusion list. CannyTrack focuses on work-related activity only.",
                },
                {
                  question: "Can CannyTrack be used for client billing?",
                  answer: "Absolutely. CannyTrack provides precise time tracking with screenshot evidence for billable hours. Ideal for agencies, consulting firms, and outsourcing companies that need accurate client billing and project time allocation.",
                },
                {
                  question: "What platforms does CannyTrack support?",
                  answer: "CannyTrack desktop agents are available for Windows, macOS, and Linux. The web-based management dashboard works on all modern browsers. Mobile app support (iOS/Android) is under development.",
                },
                {
                  question: "How long is tracking data retained?",
                  answer: "Data retention is configurable based on your compliance and storage requirements. Default retention is 90 days for screenshots and 1 year for activity logs. Organizations can customize retention policies and enable auto-deletion after specified periods.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-600 transition-all">
                  <h3 className="text-lg font-bold text-secondary mb-3 flex items-start gap-3">
                    <span className="text-orange-600 flex-shrink-0">Q{idx + 1}.</span>
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
                  description: "Secure document management with access control, version tracking, and audit trails. Perfect complement to CannyTrack for monitoring document access and preventing data leaks.",
                  link: "/solutions/product/document-management",
                  color: "blue",
                },
                {
                  name: "CannyHR",
                  tagline: "HR & Payroll Management",
                  description: "Complete HRMS with time tracking, attendance, and payroll. Integrate with CannyTrack for comprehensive workforce management and productivity analytics.",
                  link: "/solutions/product/hr-management",
                  color: "green",
                },
                {
                  name: "CannyScan",
                  tagline: "Document Scanning Services",
                  description: "Professional document digitization services with OCR and secure cloud storage. Digitize physical records for complete digital asset tracking.",
                  link: "/solutions/product/scanning-solution",
                  color: "purple",
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
            <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl p-12 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Boost Team Productivity?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Monitor remote workforce productivity with transparent, consent-based tracking. Get real-time insights,
                prevent data loss, and optimize team performance with CannyTrack. Request a demo today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Request Free Demo
                  <ArrowIcon sx={{ fontSize: 20 }} />
                </Link>
                <Link
                  href="/#contact"
                  className="bg-orange-700 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-800 transition-all inline-flex items-center justify-center gap-2"
                >
                  Start 14-Day Trial
                  <VisibilityIcon sx={{ fontSize: 20 }} />
                </Link>
              </div>
              <p className="text-sm text-white/70 mt-6">
                Trusted by 10+ organizations monitoring 2,000+ users
              </p>
            </div>
          </section>

        </article>

        <Footer />

      </div>
    </>
  );
}
