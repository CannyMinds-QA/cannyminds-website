import type { Metadata } from "next";
import { generateAlternates } from '@/lib/enhanced-seo';
import SocialShare from "@/components/ui/SocialShare";
import ProductFAQ from "@/components/sections/ProductFAQ";
import Link from "next/link";
import Image from "next/image";
import SecureImage from "@/components/ui/SecureImage";

// SEO Metadata
export const metadata: Metadata = {
  title: "Physical Records Management System | CannyRMS",
  description: "Enterprise physical records management system with barcode tracking, 21 CFR Part 11 compliant audit trails, and 30-second document retrieval.",
  keywords: [
    "physical records management",
    "physical document management",
    "best records management software",
    "physical records management system",
    "paper based document management system",
    "paper document storage systems",
    "physical document inventory management",
    "best physical document storage system",
    "physical document verification",
    "document tracking system",
    "CannyRMS",
    "FDA compliant records management",
    "barcode document tracking",
    "enterprise records management",
    "secure document storage",
    "GDPR compliant records",
    "pharma records management",
    "legal document tracking"
  ],
  authors: [{ name: "Maheshkumar", url: "https://in.linkedin.com/in/mahesh-kumar-0a02249" }],
  openGraph: {
    title: "Physical Records Management System | CannyRMS",
    description: "Enterprise physical records management system with barcode tracking, 21 CFR Part 11 compliant audit trails, and 30-second document retrieval.",
    type: "website",
    siteName: 'CannyMinds',
    locale: 'en_US',
    url: "https://www.cannymindstech.com/product/physical-records-management",
    images: [
      {
        url: "https://www.cannymindstech.com/images/rms/cannyrms-dashboard.png",
        width: 1200,
        height: 630,
        alt: "CannyRMS Physical Records Management",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Physical Records Management System | CannyRMS",
    description: "Enterprise physical records management system with barcode tracking, 21 CFR Part 11 compliant audit trails, and 30-second document retrieval.",
    images: ['https://www.cannymindstech.com/images/rms/cannyrms-dashboard.png'],
    site: '@cannyminds',
    creator: '@cannyminds',
  },
  alternates: generateAlternates('/product/physical-records-management'),
  robots: { index: true, follow: true },
};

import {
  ArrowForward,
  CheckCircle,
  Star,
  FolderOff,
  AccessTime,
  LockOpen,
  VisibilityOff,
  HistoryEdu,
  People,
  LocationOn,
  QrCode,
  Category,
  Upload,
  Search,
  RequestPage,
  Approval,
  Verified,
  MoveDown,
  Replay,
  Speed,
  Visibility,
  Shield,
  Assessment,
  Security,
  Https,
  Assignment,
  Key,
  Schedule,
  Lightbulb,
  Business,
  Phone,
  Storage,
  Dashboard,
  AccountBalance,
  LocalPharmacy,
  Gavel,
  AccountBalanceWallet,
  Description,
  Warehouse,
  Policy as PolicyIcon,
  Lock,
  VerifiedUser,
  PrecisionManufacturing as Precision,
  Inventory,
} from "@mui/icons-material";


export default function CannyRMSPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b border-gray-200 py-4 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm overflow-x-auto">
              <li><Link href="/" className="text-primary hover:text-primary/80 whitespace-nowrap">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/product" className="text-primary hover:text-primary/80 whitespace-nowrap">Products</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600 font-medium truncate">Physical Records Management</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative w-full bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">

            {/* Headline - Full Width Single Column */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Physical Records Management: One Missing File = <span className="text-red-600">Critical Audit Finding</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Left Column - Content */}
              <div className="space-y-6">

                {/* Trust Badges */}
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <Shield className="text-blue-600" sx={{ fontSize: 18 }} />
                    <div>
                      <div className="text-xs font-bold text-gray-900">ISO 27001:2013</div>
                      <div className="text-[10px] text-gray-500">Information Security</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <Verified className="text-green-600" sx={{ fontSize: 18 }} />
                    <div>
                      <div className="text-xs font-bold text-gray-900">ISO 9001:2015</div>
                      <div className="text-[10px] text-gray-500">Quality Management</div>
                    </div>
                  </div>
                </div>

                {/* Subheadline */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  Enterprise physical records management with <strong className="text-gray-900">barcode tracking and audit trails</strong>. Be audit-ready for{" "}
                  <a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/part-11-electronic-records-electronic-signatures-scope-and-application" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">FDA</a>,{" "}
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">RBI</a>, and{" "}
                  <a href="https://gdpr.eu/article-5-how-to-process-personal-data/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">GDPR</a> inspections.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                  >
                    Request Demo
                    <ArrowForward sx={{ fontSize: 20 }} />
                  </Link>
                  <a
                    href="#features"
                    className="bg-white text-gray-700 border-2 border-gray-300 px-8 py-3 rounded-lg font-bold hover:border-primary hover:text-primary transition-all inline-flex items-center justify-center gap-2"
                  >
                    View Features
                    <Assignment sx={{ fontSize: 20 }} />
                  </a>
                </div>

                {/* Key Benefits */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" sx={{ fontSize: 18 }} />
                    <span className="font-medium text-gray-700">Prevent Penalties</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-600" sx={{ fontSize: 18 }} />
                    <span className="font-medium text-gray-700">Audit Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600" sx={{ fontSize: 18 }} />
                    <span className="font-medium text-gray-700">30s Retrieval</span>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="text-amber-400" sx={{ fontSize: 13 }} />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3 italic">
                    "CannyMinds successfully digitized approximately <strong className="text-gray-800 font-medium">1 crore documents</strong> and implemented an integrated <Link href="/product/enterprise-content-management" className="text-primary hover:underline font-medium">Enterprise Content Management</Link> and <strong className="text-gray-800 font-medium">Physical Record Management solution</strong> for our organization. Their expertise significantly improved our document control, compliance, and operational efficiency."
                  </p>
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-200">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0">
                      SK
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Dr. Saravana Kumar</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wide">Steril-Gene Life Sciences (P) Ltd.</p>
                    </div>
                  </div>
                </div>

                {/* Author Attribution + Share - E-E-A-T */}
                <div className="flex items-center justify-between gap-2 pt-4 border-t border-gray-200 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/about/Maheshkumar-Director.png"
                      alt="Maheshkumar - VP Operations at CannyMinds Technology Solutions"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>By <a href="https://in.linkedin.com/in/mahesh-kumar-0a02249" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Maheshkumar</a></span>
                    <span className="text-gray-400">•</span>
                    <span>Updated 10 March 2026</span>
                  </div>
                  <SocialShare
                    title="CannyRMS - Physical Records Management System"
                    description="Enterprise physical records management system with barcode tracking, FDA 21 CFR Part 11 compliant audit trails, and 30-second document retrieval."
                  />
                </div>

              </div>

              {/* Right Column - Product Demo */}
              <div className="pt-4 lg:pt-0">
                <div className="relative bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden aspect-video">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/images/rms/cannyrms-dashboard.png"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    aria-label="CannyRMS Dashboard - Barcode tracking and file search interface"
                  >
                    <source src="/videos/rms/cannyrms-demo.webm" type="video/webm" />
                  </video>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Key Stats Bar */}
        <section className="py-12 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center text-white">
              {[
                { value: "<30 Sec", label: "Avg File Retrieval*", icon: <Speed sx={{ fontSize: 32 }} /> },
                { value: "100%", label: "Zero Audit Findings*", icon: <Verified sx={{ fontSize: 32 }} /> },
                { value: "1M+", label: "Documents Tracked*", icon: <FolderOff sx={{ fontSize: 32 }} /> },
                { value: "8-Step", label: "Secure Workflow", icon: <Assignment sx={{ fontSize: 32 }} /> },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="mb-2 text-white/90">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm sm:text-base text-white/90">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-xs text-white/70">
                *Based on client deployments across 50+ organizations (2020-2025). Individual results may vary.
              </p>
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
                  { title: "What is CannyRMS?", href: "#overview" },
                  { title: "Industry Challenges", href: "#challenges" },
                  { title: "Which Industries Need It?", href: "#sector-spotlights" },
                  { title: "Audit Readiness Simulator", href: "#audit-simulator" },
                  { title: "8-Step Document Lifecycle", href: "#lifecycle" },
                  { title: "Zero-Error Features", href: "#features" },
                  { title: "Reports & Dashboards", href: "#reports" },
                  { title: "How CannyRMS Secures Records?", href: "#security" },
                  { title: "Key Benefits", href: "#benefits" },
                  { title: "Get Started", href: "#get-started" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-3 text-primary hover:text-primary/80 hover:bg-primary/5 p-3 rounded-lg transition-all group"
                  >
                    <ArrowForward className="text-primary group-hover:translate-x-1 transition-transform" sx={{ fontSize: 20 }} />
                    <span className="font-medium">{item.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Overview - Primary Keyword Section */}
        <section id="overview" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
              What is a Physical Records Management System?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
                CannyRMS delivers comprehensive <strong className="text-gray-900">physical records management</strong> with
                advanced <strong className="text-gray-900">barcode tracking</strong>, complete <strong className="text-gray-900">audit trails</strong>,
                and <Link href="/ai-solutions/nbfc" className="text-primary hover:underline font-semibold">automated compliance workflows</Link> for regulated industries.
              </p>
              <p className="text-gray-600 leading-relaxed text-center">
                From <Link href="/solutions/pharmaceutical" className="text-primary hover:underline font-semibold">pharmaceutical</Link> batch records to <Link href="/solutions/professional-services" className="text-primary hover:underline font-semibold">legal</Link> evidence files, our system ensures
                100% document location accuracy, instant retrieval, and audit-ready documentation
                for <a href="https://www.fda.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">FDA</a>,{" "}
                <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">RBI</a>, and{" "}
                <a href="https://gdpr.eu" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">GDPR</a> inspections.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

          {/* Nightmare Scenarios - The "Why" */}
          <section id="challenges" className="mb-32 scroll-mt-28">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                The High Price of "One Missing File"
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                In regulated industries, paperwork isn't just administrative it's legal defense.
                Losing a single record can trigger a chain reaction of fines, operational shutdowns, and reputational ruin.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Banking Audit Gaps",
                  subtitle: "RBI Compliance Risk",
                  description: (
                    <>
                      A misplaced <a href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=10927" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline font-semibold">KYC document</a> during an inspection isn't just an error—it's an immediate audit finding. Say hello to operational scrutiny and mandatory remediation plans.
                    </>
                  ),
                  icon: AccountBalance,
                  color: "red",
                  stat: "Audit Finding"
                },
                {
                  title: "Pharma Observations",
                  subtitle: "Production Delays",
                  description: (
                    <>
                      FDA auditors don't wait. If you can't produce specific batch records instantly, you're looking at <a href="https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-references/inspection-observations" target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:underline font-semibold">Form 483 observations</a> and paused batch releases.
                    </>
                  ),
                  icon: LocalPharmacy,
                  color: "orange",
                  stat: "FDA Observation"
                },
                {
                  title: "Legal Chain of Custody",
                  subtitle: "Evidence Admissibility",
                  description: "Lose the physical evidence file, break the chain of custody. It's that simple. And it risks evidence admissibility and your client's trust.",
                  icon: Gavel,
                  color: "purple",
                  stat: "Custody Gap"
                },
                {
                  title: "Public Accountability",
                  subtitle: "Audit Scrutiny",
                  description: "CAG audits are unforgiving. If you're using offsite storage without tracking, missing files will lead to immediate findings on asset management.",
                  icon: AccountBalanceWallet,
                  color: "blue",
                  stat: "Audit Exception"
                },
                {
                  title: "Asset Documentation",
                  subtitle: "Financial Liability",
                  description: "Lose the original property deed, lose the loan security. Banks then have to scramble with expensive compensation and legal reconstruction.",
                  icon: Description,
                  color: "teal",
                  stat: "Asset Risk"
                },
                {
                  title: "Data Privacy Gaps",
                  subtitle: "Compliance Violations",
                  description: (
                    <>
                      Physical files with personal data need access logs. Period. Unlogged access is a straight-up control gap under <a href="https://gdpr.eu/article-5-how-to-process-personal-data/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:underline font-semibold">GDPR Article 5</a>.
                    </>
                  ),
                  icon: Security,
                  color: "indigo",
                  stat: "Control Gap"
                }
              ].map((scenario, idx) => {
                const Icon = scenario.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-4 rounded-xl bg-${scenario.color}-50 text-${scenario.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon sx={{ fontSize: 28 }} />
                      </div>
                      <span className={`text-xs font-bold text-${scenario.color}-700 bg-${scenario.color}-50 px-3 py-1.5 rounded-full border border-${scenario.color}-100`}>
                        {scenario.stat}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{scenario.title}</h3>
                    <p className={`text-sm font-semibold text-${scenario.color}-600 mb-4 uppercase tracking-wide`}>{scenario.subtitle}</p>
                    <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {scenario.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Sector Spotlights - Deep Dives */}
          <section id="sector-spotlights" className="mb-32 scroll-mt-28">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Which Industries Need Physical Records Management Software?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Generic solutions fail in specialized audits. CannyRMS is purpose-built for the unique regulatory pressures of your industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pharma */}
              <div className="bg-white rounded-2xl p-8 border border-red-200 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-6 -right-6 p-4 opacity-[0.05] group-hover:opacity-10 transition-opacity transform rotate-12">
                  <LocalPharmacy sx={{ fontSize: 180 }} />
                </div>
                <div className="relative z-10">
                  <span className="inline-block bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide border border-red-100">PHARMA & LIFESCIENCES</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ensure Data Integrity</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle sx={{ fontSize: 20, color: '#dc2626' }} className="mt-0.5 shrink-0" />
                      <span><strong>Prevent Backdating:</strong> Stop worrying about BMR tampering—immutable logs make it impossible.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle sx={{ fontSize: 20, color: '#dc2626' }} className="mt-0.5 shrink-0" />
                      <span><strong><a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/CFRSearch.cfm?CFRPart=11" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">FDA 21 CFR Part 11</a>:</strong> Fully compliant electronic signatures for every single move.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle sx={{ fontSize: 20, color: '#dc2626' }} className="mt-0.5 shrink-0" />
                      <span><strong>Batch Tracking:</strong> Instantly link physical logs to batch numbers.</span>
                    </li>
                  </ul>
                  <div className="text-red-900 text-xs font-semibold bg-red-50 p-4 rounded-xl border border-red-100 flex gap-3 items-center">
                    <Shield sx={{ fontSize: 20 }} />
                    Prevent Critical MHRA Observations & Warning Letters
                  </div>
                </div>
              </div>

              {/* Legal */}
              <div className="bg-white rounded-2xl p-8 border border-purple-200 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-6 -right-6 p-4 opacity-[0.05] group-hover:opacity-10 transition-opacity transform rotate-12">
                  <Gavel sx={{ fontSize: 180 }} />
                </div>
                <div className="relative z-10">
                  <span className="inline-block bg-purple-50 text-purple-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide border border-purple-100">LEGAL & LAW FIRMS</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">E-Discovery Readiness</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle sx={{ fontSize: 20, color: '#9333ea' }} className="mt-0.5 shrink-0" />
                      <span><strong>Chain of Custody:</strong> Prove exactly who held the evidence, and when they held it.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle sx={{ fontSize: 20, color: '#9333ea' }} className="mt-0.5 shrink-0" />
                      <span><strong>Retention Compliance:</strong> Auto-destroy files the moment legal holds expire.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle sx={{ fontSize: 20, color: '#9333ea' }} className="mt-0.5 shrink-0" />
                      <span><strong>Legacy File Indexing:</strong> Dig up old paper records for e-discovery in seconds.</span>
                    </li>
                  </ul>
                  <div className="text-purple-900 text-xs font-semibold bg-purple-50 p-4 rounded-xl border border-purple-100 flex gap-3 items-center">
                    <Shield sx={{ fontSize: 20 }} />
                    Avoid Spoliation Sanctions & Inadmissible Evidence
                  </div>
                </div>
              </div>

              {/* Banking */}
              <div className="bg-white rounded-2xl p-8 border border-blue-200 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-6 -right-6 p-4 opacity-[0.05] group-hover:opacity-10 transition-opacity transform rotate-12">
                  <AccountBalance sx={{ fontSize: 180 }} />
                </div>
                <div className="relative z-10">
                  <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide border border-blue-100">BANKING & FINANCE</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Audit-Proof Operations</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle sx={{ fontSize: 20, color: '#3b82f6' }} className="mt-0.5 shrink-0" />
                      <span><strong>Loan File Integrity:</strong> Produce original docs on demand during RBI audits.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle sx={{ fontSize: 20, color: '#3b82f6' }} className="mt-0.5 shrink-0" />
                      <span><strong>Privacy Compliance:</strong> Mask customer data in logs (GDPR/DPDP ready).</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle sx={{ fontSize: 20, color: '#3b82f6' }} className="mt-0.5 shrink-0" />
                      <span><strong>Social Compliance:</strong> Keep track of your marketing material disclosures.</span>
                    </li>
                  </ul>
                  <div className="text-blue-900 text-xs font-semibold bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3 items-center">
                    <Shield sx={{ fontSize: 20 }} />
                    Avoid RBI Penalties & UDAAP Violations
                  </div>
                </div>
              </div>

              {/* Manufacturing & Export */}
              <div className="bg-white rounded-2xl p-8 border border-orange-200 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-6 -right-6 p-4 opacity-[0.05] group-hover:opacity-10 transition-opacity transform rotate-12">
                  <Precision sx={{ fontSize: 180 }} />
                </div>
                <div className="relative z-10">
                  <span className="inline-block bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide border border-orange-100">MANUFACTURING & EXPORT</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Export Documentation Control</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle sx={{ fontSize: 20, color: '#ea580c' }} className="mt-0.5 shrink-0" />
                      <span><strong>Shipping Records:</strong> Track Bills of Lading, Packing Lists, and Customs docs.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle sx={{ fontSize: 20, color: '#ea580c' }} className="mt-0.5 shrink-0" />
                      <span><strong>Quality Certificates:</strong> Link test reports to shipment batches. No mix-ups.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle sx={{ fontSize: 20, color: '#ea580c' }} className="mt-0.5 shrink-0" />
                      <span><strong>Vendor Records:</strong> Organize supplier agreements and compliance docs in one place.</span>
                    </li>
                  </ul>
                  <div className="text-orange-900 text-xs font-semibold bg-orange-50 p-4 rounded-xl border border-orange-100 flex gap-3 items-center">
                    <Shield sx={{ fontSize: 20 }} />
                    Ensure Customs Compliance & Avoid Shipment Delays
                  </div>
                </div>
              </div>

              {/* Records Management Service Providers */}
              <div className="bg-white rounded-2xl p-8 border border-teal-200 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-6 -right-6 p-4 opacity-[0.05] group-hover:opacity-10 transition-opacity transform rotate-12">
                  <Inventory sx={{ fontSize: 180 }} />
                </div>
                <div className="relative z-10">
                  <span className="inline-block bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide border border-teal-100">RMS SERVICE PROVIDERS</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Client Management</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle sx={{ fontSize: 20, color: '#0d9488' }} className="mt-0.5 shrink-0" />
                      <span><strong>Client Segregation:</strong> Keep every client's storage and access completely isolated.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle sx={{ fontSize: 20, color: '#0d9488' }} className="mt-0.5 shrink-0" />
                      <span><strong>SLA Tracking:</strong> Stay on top of retrieval times and service promises.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle sx={{ fontSize: 20, color: '#0d9488' }} className="mt-0.5 shrink-0" />
                      <span><strong>Billing Integration:</strong> Auto-track storage and retrievals for painless invoicing.</span>
                    </li>
                  </ul>
                  <div className="text-teal-900 text-xs font-semibold bg-teal-50 p-4 rounded-xl border border-teal-100 flex gap-3 items-center">
                    <Shield sx={{ fontSize: 20 }} />
                    Scale Operations & Improve Client Satisfaction
                  </div>
                </div>
              </div>

              {/* Government & PSUs */}
              <div className="bg-white rounded-2xl p-8 border border-gray-300 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-6 -right-6 p-4 opacity-[0.05] group-hover:opacity-10 transition-opacity transform rotate-12">
                  <AccountBalanceWallet sx={{ fontSize: 180 }} />
                </div>
                <div className="relative z-10">
                  <span className="inline-block bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide border border-gray-200">GOVERNMENT & PSUs</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Public Records Accountability</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle sx={{ fontSize: 20, color: '#374151' }} className="mt-0.5 shrink-0" />
                      <span><strong>CAG Audit Readiness:</strong> Produce records for government audits on demand.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle sx={{ fontSize: 20, color: '#374151' }} className="mt-0.5 shrink-0" />
                      <span><strong>RTI Compliance:</strong> Locate files for RTI requests faster than ever.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle sx={{ fontSize: 20, color: '#374151' }} className="mt-0.5 shrink-0" />
                      <span><strong>Long-Term Archival:</strong> Handle retention schedules for permanent records.</span>
                    </li>
                  </ul>
                  <div className="text-gray-900 text-xs font-semibold bg-gray-100 p-4 rounded-xl border border-gray-200 flex gap-3 items-center">
                    <Shield sx={{ fontSize: 20 }} />
                    Ensure Transparency & Accountability
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Virtual Audit Simulator */}
          <section id="audit-simulator" className="mb-32 bg-gradient-to-br from-primary/5 via-white to-blue-50 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-gray-200 scroll-mt-28">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-primary font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  Audit Readiness Assessment
                </div>
                <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6">
                  Is Your Facility Audit-Ready?
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Inspections can happen without warning. Compare document retrieval reliability in your current system versus CannyRMS.
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">Scenario: &quot;Show me Batch Record #B-9021&quot;</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                        <div className="font-semibold text-red-700">Manual Process:</div>
                        <div className="text-gray-600 italic text-xs mt-1">&quot;Searching warehouse... calling vendor... 3 days delay...&quot;</div>
                        <div className="text-red-600 font-bold mt-2">Result: Major Finding ❌</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                        <div className="font-semibold text-green-700">With CannyRMS:</div>
                        <div className="text-gray-600 text-xs mt-1">&quot;Search #B-9021... Located: Rack 4, Shelf 2.&quot;</div>
                        <div className="text-green-600 font-bold mt-2">Result: Compliant (30s) ✅</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-200 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Assessment className="text-primary" />
                    <span className="font-bold text-gray-900">Audit Readiness Report</span>
                  </div>
                  <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold">PASSED</div>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                    <span className="text-gray-700">File Tracking Accuracy</span>
                    <span className="font-bold text-green-600">100.0%</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                    <span className="text-gray-700">Avg. Retrieval Time</span>
                    <span className="font-bold text-blue-600">42 Seconds</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                    <span className="text-gray-700">Geolocation Logged</span>
                    <span className="font-bold text-green-600">All Actions</span>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                    <span className="text-gray-700">Chain of Custody Gaps</span>
                    <span className="font-bold text-green-600">0 Found</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-500 mb-3">Secure your compliance standing.</p>
                  <Link href="/contact" className="block w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors">
                    Schedule a Compliance Health Check
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Solution Bridge - Digital Twin */}
          <section id="what-is" className="mb-32 bg-gradient-to-br from-blue-50 via-white to-primary/5 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-gray-200 scroll-mt-28">
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-primary font-bold tracking-wider uppercase mb-2">The Solution</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Manage Physical Files Like <span className="text-primary">Digital Assets</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Gain complete visibility into your offsite storage. CannyRMS creates a <strong>&quot;Digital Twin&quot;</strong> for every physical file.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Just like Googling a document, you can now search, track, and audit physical files in real-time.
                  Bridge the gap between analog chaos and digital precision without needing to scan every single page.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <div className="text-2xl font-bold text-primary mb-1">0%</div>
                    <div className="text-sm text-gray-600">Lost Files</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-gray-600">Location Visibility</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-4 border-b border-gray-200 pb-4">
                  <Search className="text-primary" />
                  <div className="text-sm font-mono text-gray-500">Search Physical Records...</div>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded text-green-700">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span>File #A-2938 Found</span>
                    </div>
                    <span className="text-green-600 font-semibold">Loc: R3-S2-B1</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 p-2">
                    <HistoryEdu sx={{ fontSize: 16 }} />
                    <span>Last Access: John D. (2 mins ago)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 p-2">
                    <Approval sx={{ fontSize: 16 }} />
                    <span>Checkout Status: Approved</span>
                  </div>
                </div>
              </div>
            </div>
          </section>




          {/* Document Lifecycle */}
          <section id="lifecycle" className="mb-32 scroll-mt-28">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
              Complete Document Lifecycle Workflow
            </h2>
            <div className="space-y-6">
              {[
                {
                  phase: "1",
                  title: "Physical Records System Setup & Barcode Configuration",
                  description: "Set it and forget it. Configure your users, locations, and barcodes once, and you're ready to roll. It's the foundation for everything else.",
                  features: ["3-level barcode hierarchy", "User roles & granular permissions", "Warehouse/rack/shelf location setup", "Dynamic Barcode Range with overlap detection", "Barcode label printing (batch support)", "Custom categories & metadata fields"],
                  example: <>A <Link href="/solutions/pharmaceutical" className="text-blue-700 hover:underline font-semibold">pharmaceutical</Link> company creates user groups (QA Approvers, Warehouse Staff), configures Building A with 50 racks, allocates barcode ranges for cartons (C001-C999), files (F0001-F9999), and documents (D00001-D99999).</>,
                  color: "blue",
                  image: "/images/rms/cannyrms-dashboard.png",
                  caption: "CannyRMS Admin Panel"
                },
                {
                  phase: "2",
                  title: "Document Inward Upload & Barcode Assignment",
                  description: "Got 50,000 records? Don't type them in. Just drag-and-drop your Excel sheet, and we'll flag the duplicates for you automatically.",
                  features: ["Template-based bulk upload", "Automatic validation", "Capacity tracking", "Unique barcode assignment", "Dynamic Reference"],
                  example: <>A <Link href="/solutions/finance" className="text-green-700 hover:underline font-semibold">bank</Link> uploads 50,000 loan files via Excel. CannyRMS validates data, checks for duplicates, and assigns each record to a location.</>,
                  color: "green",
                  image: "/images/rms/cannyrms-upload-inward.png",
                  caption: "Bulk Inward - Excel Upload"
                },
                {
                  phase: "3",
                  title: "Quick File Search & Location Retrieval",
                  description: "Find it. Fast. Search by document number, barcode, or location and get the full movement history in seconds.",
                  features: ["Multi-criteria search", "Real-time status (IN/OUT)", "Complete movement history with geolocation", "Location verification", "Dynamic Reference lookup"],
                  example: "An auditor searches by loan number (Dynamic Reference) and instantly sees: Location (Building B, Rack 23), Status (IN storage), and full access history with IP addresses and timestamps.",
                  color: "purple",
                  image: "/images/rms/cannyrms-quick-search.png",
                  caption: "Quick Search Interface"
                },
                {
                  phase: "4",
                  title: "Document Retrieval Request & Approval Workflow",
                  description: "Need a file? Raise a formal request with a justification. The system handles the delegate assignment and return timeline for you.",
                  features: ["Structured request forms", "Original vs copy selection", "Delegate assignment option", "Return date specification", "Extension requests with approval", "Email notification triggers"],
                  example: <><Link href="/solutions/professional-services" className="text-orange-700 hover:underline font-semibold">Legal</Link> team requests original contracts for court: Category 'Legal', Access Type 'Original', Duration '30 days', Delegate 'Paralegal John', Reason 'Court Case #789'. System sends email to manager for approval.</>,
                  color: "orange",
                  image: "/images/rms/cannyrms-retrieval-request.png",
                  caption: "Retrieval Request Form"
                },
                {
                  phase: "5",
                  title: "Manager Approval & Notification Workflow",
                  description: "No loose ends. All requests hit the manager's inbox for approval, complete with full context and delegate info.",
                  features: ["Complete request visibility", "Approve/reject with comments", "Bulk approval processing", "Instant email notifications", "Mobile-friendly approval"],
                  example: "Department head receives email alert for pending request. Reviews justification, sees delegate assignment, and approves with note 'Approved for billing reconciliation'. Requester receives approval notification instantly.",
                  color: "red",
                  image: "/images/rms/cannyrms-manager-approval.png",
                  caption: "Manager Approval Interface"
                },
                {
                  phase: "6",
                  title: "Document Verification & Condition Check",
                  description: "Before handing anything over, warehouse staff verify condition and availability. Every check is logged with geolocation.",
                  features: ["Final document check", "Condition verification", "Availability confirmation", "Issue flagging with photos", "Geolocation & IP logging"],
                  example: "Staff confirms document is in stated location (Building A, Rack 23, Shelf 2), notes 'No damage', captures photo if needed, and marks as verified. System logs staff ID, IP address, and location.",
                  color: "teal",
                  image: "/images/rms/cannyrms-verification.png",
                  caption: "Return Verification Screen"
                },
                {
                  phase: "7",
                  title: "Secure Document Handover with Digital Signatures",
                  description: "Release files securely with pick lists and digital signatures. The moment it leaves, the return-date clock starts ticking.",
                  features: ["Pick list generation", "Barcode verification", "Delegate handover (collect on behalf)", "Digital signature capture", "Return date tracking", "Geolocation logging"],
                  example: "Manager requests file but assigns assistant as delegate. Warehouse prints pick list, scans barcode, captures assistant's signature, and logs both requester and actual recipient for chain of custody.",
                  color: "indigo",
                  image: "/images/rms/cannyrms-handover.png",
                  caption: "Handover with Digital Signature"
                },
                {
                  phase: "8",
                  title: "Document Refiling & Audit Trail Logging",
                  description: "Scanned back in, verified, and back to its rack. If a file is overdue, we'll send automated alerts until it's returned.",
                  features: ["Return verification with barcode scan", "Condition check & damage reporting", "Overdue alerts & email reminders", "Original location guidance", "Status update to IN", "Geolocation & IP logging"],
                  example: "User returns contract 2 days before due date. Staff scans barcode, checks condition, confirms return in system. System logs IP address, updates status to IN, and sends confirmation email. Overdue files trigger automatic reminders.",
                  color: "cyan",
                  image: "/images/rms/cannyrms-refiling.png",
                  caption: "Refiling & Overdue Tracking"
                },
              ].map((step, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex flex-col gap-6">
                    {/* Title and Description always at the top */}
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <div className={`hidden md:block h-px flex-1 mx-6 bg-gradient-to-r from-${step.color}-200 to-transparent rounded-full`}></div>
                      </div>
                      <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-4xl">{step.description}</p>
                    </div>

                    <div className="grid lg:grid-cols-[1.85fr_1fr] gap-10 items-start">
                      {/* Left Side: Product Image */}
                      {step.image && (
                        <div className="relative border border-gray-100 bg-gray-50 flex items-center justify-center">
                          <SecureImage
                            src={step.image}
                            alt={`CannyRMS ${step.title}`}
                            width={1200}
                            height={675}
                            className="w-full h-auto object-cover transform transition-transform duration-500 select-none"
                          />
                          {step.caption && (
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-bold text-gray-700 shadow-lg border border-gray-100">
                              {step.caption}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Right Side: Features & Real-World Application */}
                      <div className="space-y-8">
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm mb-4 uppercase tracking-widest border-b border-gray-100 pb-2 inline-block">Key Modules</h4>
                          <ul className="grid sm:grid-cols-1 gap-3">
                            {step.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-600 bg-gray-50/50 p-2 rounded-lg">
                                <CheckCircle sx={{ fontSize: 18, color: '#3b82f6' }} className="mt-0.5 shrink-0" />
                                <span className="font-medium text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className={`bg-${step.color}-50 p-6 rounded-2xl border border-${step.color}-100 relative overflow-hidden`}>
                          <div className={`absolute top-0 right-0 w-32 h-32 bg-${step.color}-100/30 rounded-full -translate-y-1/2 translate-x-1/2`}></div>
                          <h4 className={`font-bold text-${step.color}-800 text-sm mb-3 flex items-center gap-2 relative z-10`}>
                            <Lightbulb sx={{ fontSize: 18 }} /> Real-World Use Case:
                          </h4>
                          <p className={`text-sm text-${step.color}-900 italic leading-relaxed relative z-10 font-medium`}>{step.example}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Advanced Barcode Tracking System */}
          <section id="barcode-tracking" className="mb-32 scroll-mt-28">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
              How Does Barcode Tracking Work in CannyRMS?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Achieve 100% file location accuracy with our 3-level barcode hierarchy. Track every document movement
              from carton to file to individual document with real-time visibility across all warehouse locations.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Category className="text-primary" sx={{ fontSize: 32 }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3-Level Hierarchy</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Carton → File → Document tracking with unique barcode IDs. Prevents duplicates and ensures
                  precise location identification.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5" sx={{ fontSize: 16 }} />
                    <span>Carton-level tracking (C001-C999)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5" sx={{ fontSize: 16 }} />
                    <span>File-level tracking (F0001-F9999)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-primary mt-0.5" sx={{ fontSize: 16 }} />
                    <span>Document-level tracking (D00001-D99999)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <LocationOn className="text-green-600" sx={{ fontSize: 32 }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Location Visibility</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Instant file location visibility across multiple warehouses, buildings, racks, and shelves.
                  Know exactly where every document is at all times.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 mt-0.5" sx={{ fontSize: 16 }} />
                    <span>Multi-warehouse support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 mt-0.5" sx={{ fontSize: 16 }} />
                    <span>Building/Floor/Rack/Shelf mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 mt-0.5" sx={{ fontSize: 16 }} />
                    <span>Live status updates (IN/OUT)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <QrCode className="text-blue-600" sx={{ fontSize: 32 }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scan & Track Every Movement</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Every movement logged with barcode scanning, timestamps, user ID, IP address, and geolocation
                  for complete audit trail compliance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-600 mt-0.5" sx={{ fontSize: 16 }} />
                    <span>Barcode scan verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-600 mt-0.5" sx={{ fontSize: 16 }} />
                    <span>Automatic movement logging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-600 mt-0.5" sx={{ fontSize: 16 }} />
                    <span>Complete audit trail history</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Core Features - Benefits First */}
          <section id="features" className="mb-32 scroll-mt-28">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              What Features Ensure Zero-Error Records Compliance?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Zero-Error Retrieval",
                  description: "Locate any file in seconds using barcode tracking. Eliminate manual searches and lost files.",
                  icon: QrCode
                },
                {
                  title: "Audit-Ready Trails",
                  description: "Every touchpoint is logged with geolocation. Know exactly who accessed what, when, and from where.",
                  icon: PolicyIcon
                },
                {
                  title: "Chain of Custody",
                  description: "Secure handover protocols with delegate support. Digital signatures for every file movement.",
                  icon: VerifiedUser
                },
                {
                  title: "Email Notifications",
                  description: "Automated alerts for requests, approvals, rejections, overdue returns, and due date reminders.",
                  icon: Replay
                },
                {
                  title: "Data Modification Requests",
                  description: "Request metadata changes with manager approval. Complete audit trail for all modifications.",
                  icon: RequestPage
                },
                {
                  title: "Approval Workflows",
                  description: "Multi-level approval gates with extension requests. Prevent unauthorized access to sensitive documents.",
                  icon: Lock
                },
                {
                  title: "Retention Schedules",
                  description: "Automated alerts for record destruction or archival. Compliance with data retention laws made automatic.",
                  icon: AccessTime
                },
                {
                  title: "Space Optimization",
                  description: "Visual capacity indicators by rack/shelf. Auto-suggest optimal placement for new files.",
                  icon: Warehouse
                },
                {
                  title: "3-Level Barcode System",
                  description: "Hierarchical tracking: Carton → File → Document. Overlap detection prevents duplicate barcodes.",
                  icon: Category
                }
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:border-primary/20">
                    <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon sx={{ fontSize: 28 }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </section>


          {/* Reports Section */}
          {/* Reports Section */}
          <section id="reports" className="mb-32 scroll-mt-28">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              Reports & Dashboards
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Get complete visibility with powerful reports. Filter by date range, search specific records,
              and export to CSV, PDF, or Excel formats.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Activity Logs", description: "Complete audit trail with IP address, geolocation, user ID, timestamp, and action details for every operation." },
                { title: "Location Storage Report", description: "Visual capacity indicators (% full) by warehouse, rack, and shelf. Auto-suggest optimal placement for new files." },
                { title: "Inward Report", description: "Track all uploaded documents with dates, quantities, categories, and sources." },
                { title: "Retrieval Report", description: "Monitor all retrieval activities   requests, approvals, handovers, and returns." },
                { title: "Refiling Report", description: "Track returned documents, overdue files, refiling rates by department." },
                { title: "Dashboard Analytics", description: "Visual dashboards with key metrics, pending actions, and trend analysis." },
              ].map((report, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Dashboard sx={{ fontSize: 20, color: '#3170b5' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{report.title}</h4>
                    <p className="text-sm text-gray-600">{report.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Security Section */}
          <section id="security" className="mb-32 scroll-mt-28">
            {/* Title and Description - Full Width */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
                How Does CannyRMS Secure Physical Document Access?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
                CannyRMS implements enterprise-grade security with granular role-based access control.
                Configure permissions at module level (Inward, Retrieval, Verification, Reports) and
                action level (Create, Read, Update, Delete, Approve). Every action is logged with
                IP address, geolocation, and timestamp for complete accountability.
              </p>
            </div>

            {/* Split Layout: Features (Left) & Image (Right) */}
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-start">
              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Security, title: "Role-Based Access Control", description: "Users only see what they're authorized to access" },
                  { icon: Https, title: "Secure Transmission", description: "HTTPS encrypted connections for all data" },
                  { icon: Assignment, title: "Complete Audit Logs", description: "Every action is recorded with timestamps" },
                  { icon: LocationOn, title: "Geolocation Tracking", description: "IP address & location logged for every action" },
                  { icon: Approval, title: "Approval Workflows", description: "Multi-level authorization for document access" },
                  { icon: Key, title: "Password Policies", description: "Configurable complexity requirements" },
                  { icon: Schedule, title: "Session Management", description: "Automatic timeout for security" },
                ].map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                      <Icon className="text-green-600 flex-shrink-0" sx={{ fontSize: 24 }} />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center lg:justify-end">
                <SecureImage
                  src="/images/common/security.png"
                  alt="CannyRMS Enterprise Security - Role Based Access Control, Audit Logs, and Geolocation Tracking"
                  width={600}
                  height={600}
                  className="w-1/2 h-auto object-contain select-none"
                />
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="mb-32 scroll-mt-28">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Key Benefits
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Speed, title: "Efficiency", stat: "90%", label: "Time Saved*", description: "Find documents in seconds instead of hours." },
                { icon: Visibility, title: "Visibility", stat: "100%", label: "Tracked*", description: "Real-time storage utilization and document status." },
                { icon: Shield, title: "Security", stat: "Zero", label: "Breaches*", description: "Role-based access and complete audit trails." },
                { icon: Assessment, title: "Compliance", stat: "100%", label: "Audit Ready*", description: "Regulatory-ready logs and accountability." },
              ].map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary" sx={{ fontSize: 32 }} />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-1">{benefit.stat}</div>
                    <div className="text-sm text-gray-500 mb-3">{benefit.label}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-gray-500 text-center mt-6">
              *Based on client deployments across 50+ organizations (2020–2025). Individual results may vary.
            </p>
          </section>

          {/* Testimonials Carousel - E-E-A-T */}
          <section className="mb-32 scroll-mt-28">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  initials: "SK",
                  name: "Dr. Saravana Kumar",
                  company: "Steril-Gene Life Sciences (P) Ltd.",
                  badge: "Pharmaceutical",
                  quote: "CannyMinds successfully digitized approximately 1 crore documents and implemented an integrated Enterprise Content Management and Physical Record Management solution. Their expertise significantly improved our document control, compliance, and operational efficiency.",
                  gradient: "from-primary to-secondary"
                },
                {
                  initials: "OK",
                  name: "Oscar Kazadi",
                  company: "Proco & Cie SARL – DRC Congo",
                  badge: "International",
                  quote: "CannyMinds successfully implemented CannyScan, CannyDocs, and CannyRMS for our organization, delivering a seamless end-to-end digital transformation. Their professionalism and timely execution significantly enhanced our document management efficiency.",
                  gradient: "from-blue-500 to-blue-700"
                },
                {
                  initials: "RE",
                  name: "Rajesh",
                  company: "Eastman Exports – Global Clothing",
                  badge: "Manufacturing",
                  quote: "CannyMinds implemented a comprehensive Enterprise Document Management solution that transformed our document workflows. The system dramatically reduced retrieval times and gave us complete visibility over our records across departments.",
                  gradient: "from-green-500 to-green-700"
                }
              ].map((t, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} className="text-amber-400" sx={{ fontSize: 16 }} />)}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed italic flex-1 mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{t.name}</p>
                      <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wide">{t.company}</p>
                      <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full mt-1 inline-block">{t.badge}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Methodology Transparency Section - E-E-A-T */}
          <section className="mb-32 scroll-mt-28">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 border border-blue-100">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
                How We Measure Success
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-gray-600 mb-8 text-center">
                  All performance metrics on this page are measured across 50+ client deployments
                  (2020-2025) using the following methodology:
                </p>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex gap-4">
                      <div className="w-3 h-3 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-gray-900 mb-2">File Retrieval Time (&lt;30 seconds)</p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Average of 10,000+ retrieval operations measured from search initiation to
                          physical file location confirmation (excludes transport time from offsite storage).
                          Measured using barcode scan timestamps across all client deployments.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex gap-4">
                      <div className="w-3 h-3 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-gray-900 mb-2">Zero Audit Findings (100%)</p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Based on client-reported audit outcomes from FDA, RBI, MHRA, and internal audits.
                          Sample size: 500+ inspections across <Link href="/solutions/pharmaceutical" className="text-primary hover:underline font-semibold">pharma</Link>, <Link href="/solutions/finance" className="text-primary hover:underline font-semibold">banking</Link>, and <Link href="/solutions/professional-services" className="text-primary hover:underline font-semibold">legal</Link> sectors (2020-2025).
                          Clients using CannyRMS reported zero findings related to physical records management.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex gap-4">
                      <div className="w-3 h-3 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-gray-900 mb-2">Documents Tracked (1M+)</p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Total physical records managed across all active client deployments.
                          Includes files, cartons, and documents with barcode tracking enabled.
                          Verified through system database records and client usage reports.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    <strong>Disclaimer:</strong> Individual results may vary based on implementation scope,
                    user training adherence, and proper system usage. Contact us for a customized assessment
                    specific to your organization's requirements.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </section>

        {/* Author Profile Section - E-E-A-T */}
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/about/Maheshkumar-Director.png"
                    alt="Maheshkumar - VP Operations at CannyMinds Technology Solutions"
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">Maheshkumar</h3>
                    <a
                      href="https://in.linkedin.com/in/mahesh-kumar-0a02249"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0a66c2] hover:text-[#004182] transition-colors"
                      aria-label="Maheshkumar's LinkedIn Profile"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-primary font-semibold mb-3">VP - Operations | B.E., MBA</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Maheshkumar is the Vice President of Operations at CannyMinds Technology Solutions, bringing over 25 years of hands-on experience in <Link href="/product/enterprise-content-management" className="text-primary hover:underline font-semibold">enterprise document management</Link>, compliance technology, and <Link href="/ai-solutions/professional-services" className="text-primary hover:underline font-semibold">business process automation</Link>. He has led the successful deployment of physical and digital records management systems for clients across <Link href="/solutions/finance" className="text-primary hover:underline font-semibold">banking</Link>, <Link href="/solutions/pharmaceutical" className="text-primary hover:underline font-semibold">pharmaceuticals</Link>, <Link href="/solutions/manufacturing" className="text-primary hover:underline font-semibold">manufacturing</Link>, and <Link href="/solutions/professional-services" className="text-primary hover:underline font-semibold">legal</Link> sectors, ensuring 100% audit readiness and regulatory compliance.
                  </p>
                  <div>
                    <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Professional Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs border border-blue-100 font-medium">ISO 27001 Information Security</span>
                      <span className="px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-xs border border-red-100 font-medium">FDA 21 CFR Part 11 Compliance</span>
                      <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-xs border border-green-100 font-medium">RBI Records Management</span>
                      <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-xs border border-purple-100 font-medium">GDPR Document Controls</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="get-started" className="py-12 bg-gradient-to-r from-primary to-blue-700 scroll-mt-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Records Management?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join organizations that have transformed physical records management from chaos into a
              streamlined, controlled, and fully auditable system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
              >
                Get Started Now <ArrowForward sx={{ fontSize: 20 }} />
              </Link>
              <Link
                href="tel:+919361801926"
                className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone sx={{ fontSize: 20 }} /> Talk to Expert
              </Link>
            </div>
          </div>
        </section>

        {/* Trusted By Industry Leaders - E-E-A-T */}
        <section className="py-12 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs text-gray-500 uppercase tracking-wider mb-8">
              Trusted By Industry Leaders
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Business className="text-gray-400" sx={{ fontSize: 48 }} />
                </div>
                <p className="text-sm font-bold text-gray-700">Eastman Exports</p>
                <p className="text-xs text-gray-500">Global Clothing</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <LocalPharmacy className="text-gray-400" sx={{ fontSize: 48 }} />
                </div>
                <p className="text-sm font-bold text-gray-700">Softgel Healthcare</p>
                <p className="text-xs text-gray-500">Pharmaceutical</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <LocalPharmacy className="text-gray-400" sx={{ fontSize: 48 }} />
                </div>
                <p className="text-sm font-bold text-gray-700">Steril-Gene Life Sciences</p>
                <p className="text-xs text-gray-500">Pharmaceutical</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-3 mx-auto">
                  <Business className="text-gray-400" sx={{ fontSize: 48 }} />
                </div>
                <p className="text-sm font-bold text-gray-700">Proco & Cie SARL</p>
                <p className="text-xs text-gray-500">DRC Congo</p>
              </div>
            </div>
          </div>
        </section>

        <ProductFAQ
          items={[
            {
              question: "How does CannyRMS protect physical records from unauthorized access?",
              answer: "CannyRMS enforces security at the software level through role-based access control (RBAC) — users can only see and access records they are authorized for. Every action is logged with a timestamp, user ID, and geolocation (IP address), creating a tamper-evident audit trail. Multi-level approval workflows ensure no document is retrieved without manager sign-off, and configurable session timeouts prevent unauthorized access from unattended terminals."
            },
            {
              question: "What happens when a specific physical file needs to be retrieved urgently?",
              answer: "Clients can request file retrieval through our secure online portal. Utilizing barcode tracking, our team quickly locates the physical box and file. We offer physical delivery or \"Scan-on-Demand\" where the document is digitized and sent securely within hours."
            },
            {
              question: "Why do large paper-driven firms experience severe \"chain of custody\" failures?",
              answer: "Without enforced barcode tracking, companies rely on emails or verbal requests to transfer files. When a file is misplaced, there is zero verifiable proof of who possessed it last, breaking the chain of custody and incurring severe legal exposure."
            },
            {
              question: "Can CannyRMS manage records across multiple physical warehouse locations?",
              answer: "Yes, the system supports a centralized, multi-site architecture. You can map out several distinct warehouses, defining buildings, floors, racks, and shelves for each, providing a unified search interface across your entire physical footprint."
            },
            {
              question: "What are the consequences of failing to destroy physical records after their retention period ends?",
              answer: "Retaining documents longer than their legally mandated lifecycle exposes organizations to unnecessary discovery risks during litigation. If the opposing counsel subpoenas documents you were legally allowed to destroy years ago, you must still produce them."
            },
            {
              question: "Can physical records in CannyRMS be linked to digital documents in CannyECM?",
              answer: "Yes. CannyRMS integrates with CannyECM to create a unified hybrid records management environment. A physical file stored in a warehouse can be linked to its scanned digital counterpart in CannyECM, giving users a single search interface to locate either the physical location or the digital version of any document."
            },
            {
              question: "How long does a typical CannyRMS implementation take?",
              answer: "A standard CannyRMS implementation — including warehouse mapping, barcode configuration, user role setup, and data migration via bulk Excel upload — typically takes 4 to 8 weeks depending on the volume of existing records and number of warehouse locations. Steril-Gene Life Sciences, for example, had 1 crore (10 million) documents fully catalogued and tracked within their project timeline."
            },
            {
              question: "Is there a mobile app for barcode scanning in the field?",
              answer: "CannyRMS supports barcode scanning via standard barcode scanners connected to workstations as well as mobile-compatible browser access for field retrieval and verification workflows. Staff can scan barcodes during document handover, refiling, and condition checks from any device with a browser connection to the system."
            }
          ]}
        />

        {/* Cross-Linking: Related Solutions */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4 text-center">
              Explore Our Complete Business Solutions Suite
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              CannyRMS works seamlessly with our other enterprise solutions. Build a complete <Link href="/blog/digital-transformation-documentation" className="text-primary hover:underline font-semibold">digital transformation</Link> ecosystem for your organization.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* CannyECM */}
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Assignment sx={{ fontSize: 24 }} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">CannyECM</h3>
                    <p className="text-xs text-gray-500">Enterprise Content Management</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive digital document management with <Link href="/ai-solutions/pharmaceutical" className="text-primary hover:underline font-semibold">workflow automation</Link>, OCR, and FDA 21 CFR Part 11 compliance.
                </p>
                <Link href="/product/enterprise-content-management" className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn about CannyECM <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </div>

              {/* CannyScan */}
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <QrCode sx={{ fontSize: 24 }} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">CannyScan</h3>
                    <p className="text-xs text-gray-500">Enterprise Scanning Solution</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  High-speed document scanning with OCR, batch processing, and direct integration with CannyRMS and CannyECM.
                </p>
                <Link href="/product/scanning-solution" className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Explore CannyScan <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </div>

              {/* CannyTrack */}
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <LocationOn sx={{ fontSize: 24 }} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">CannyTrack</h3>
                    <p className="text-xs text-gray-500">Document Tracking System</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Real-time tracking of documents with barcode scanning, chain of custody management, and automated alerts.
                </p>
                <Link href="/product/tracking-system" className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Discover CannyTrack <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div >

    </>
  );
}
