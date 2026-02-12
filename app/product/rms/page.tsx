"use client";

import SocialShare from "@/components/ui/SocialShare";
import FAQ from "@/components/sections/FAQ";
import Link from "next/link";
import Image from "next/image";
import SecureImage from "@/components/ui/SecureImage";
import { motion } from "framer-motion";
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
              <li><Link href="/#products" className="text-primary hover:text-primary/80 whitespace-nowrap">Products</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600 font-medium truncate">CannyRMS - Physical Records Management</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative w-full flex min-h-[60vh] items-center bg-gradient-to-br from-primary/5 via-white to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <div className="space-y-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary leading-tight">
                  CannyRMS: How One Missing File May Result in a <span className="text-red-600">Critical Audit Finding</span>. Secure your Records!
                </h1>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  With CannyRMS, you have <strong>accurate tracking and auditing</strong>, ensuring your bank, pharma, or law firm is not caught out on
                  <strong> compliance</strong>. Prepare your firm for <a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/part-11-electronic-records-electronic-signatures-scope-and-application" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">FDA</a>, <a href="https://m.rbi.org.in/scripts/BS_ViewMasCirculardetails.aspx?id=9862" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">RBI</a>, and GDPR audits.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 text-sm"
                  >
                    Request Demo
                    <ArrowForward sx={{ fontSize: 18 }} />
                  </Link>
                  <a
                    href="#features"
                    className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-all inline-flex items-center justify-center gap-2 text-sm"
                  >
                    View Features
                    <Assignment sx={{ fontSize: 18 }} />
                  </a>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-600 flex-wrap">
                  <span className="flex items-center gap-2 font-medium"><CheckCircle sx={{ fontSize: 16, color: '#dc2626' }} /> Prevent Penalties</span>
                  <span className="flex items-center gap-2 font-medium"><CheckCircle sx={{ fontSize: 16, color: '#25d366' }} /> Audit Readiness</span>
                  <span className="flex items-center gap-2 font-medium"><CheckCircle sx={{ fontSize: 16, color: '#2563eb' }} /> Rapid Retrieval</span>
                </div>

                {/* Social Share */}
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">Trusted By</span>
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-600">100+</div>
                      <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] text-blue-600"><Business sx={{ fontSize: 14 }} /></div>
                      <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-[10px] text-green-600"><Shield sx={{ fontSize: 14 }} /></div>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-gray-200 mx-2"></div>
                  <SocialShare
                    title="CannyRMS - Enterprise Physical Records Management System"
                    description="Prevent compliance fines with CannyRMS. Enterprise physical records management with barcode tracking & audit trails."
                    url="https://www.cannymindstech.com/solutions/rms"
                  />
                  <span className="text-xs text-gray-500">Share this solution</span>
                </div>
              </div>

              {/* Hero Image/GIF with Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0]
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.2 },
                  scale: { duration: 0.6, delay: 0.2 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative"
              >
                {/* Outer glow layer */}
                {/* <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/30 via-primary/40 to-cyan-500/30 rounded-3xl blur-2xl opacity-60"></div> */}

                {/* Inner glow layer */}
                {/* <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-2xl blur-xl"></div> */}

                {/* Animated shimmer effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl animate-shimmer"></div>

                {/* Video container - no border */}
                <div className="relative bg-white">
                  <SecureImage
                    src="/videos/rms/cannyrms-demo.gif"
                    alt="CannyRMS Dashboard showing records management interface with barcode tracking and file search"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover select-none"
                    unoptimized
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Stats Bar */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center text-white">
              {[
                { value: "30 Sec", label: "File Retrieval Time", icon: <Speed sx={{ fontSize: 32 }} /> },
                { value: "100%", label: "Audit Compliance", icon: <Verified sx={{ fontSize: 32 }} /> },
                { value: "Zero", label: "Lost Files Forever", icon: <FolderOff sx={{ fontSize: 32 }} /> },
                { value: "8-Step", label: "Secure Workflow", icon: <Assignment sx={{ fontSize: 32 }} /> },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="mb-2 text-white/90">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm sm:text-base text-white/90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 text-center">
              Table of Contents
            </h2>
            <div className="bg-white rounded-xl shadow-md p-8">
              <nav className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Digital Twin Solution", href: "#what-is" },
                  { title: "Zero-Error Features", href: "#features" },
                  { title: "Reports & Dashboards", href: "#reports" },
                  { title: "Enterprise Security", href: "#security" },
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

        {/* Main Content */}
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

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
                  description: "A misplaced KYC document during an inspection isn't just an error—it's an immediate audit finding. Say hello to operational scrutiny and mandatory remediation plans.",
                  icon: AccountBalance,
                  color: "red",
                  stat: "Audit Finding"
                },
                {
                  title: "Pharma Observations",
                  subtitle: "Production Delays",
                  description: "FDA auditors don't wait. If you can't produce specific batch records instantly, you're looking at Form 483 observations and paused batch releases.",
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
                  description: "Physical files with personal data need access logs. Period. Unlogged access is a straight-up control gap under GDPR.",
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
                Industry-Specific Compliance Controls
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
                      <span><strong>FDA 21 CFR Part 11:</strong> Fully compliant electronic signatures for every single move.</span>
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
                  title: "System Setup",
                  description: "Set it and forget it. Configure your users, locations, and barcodes once, and you're ready to roll. It's the foundation for everything else.",
                  features: ["3-level barcode hierarchy", "User roles & granular permissions", "Warehouse/rack/shelf location setup", "Dynamic Barcode Range with overlap detection", "Barcode label printing (batch support)", "Custom categories & metadata fields"],
                  example: "A pharmaceutical company creates user groups (QA Approvers, Warehouse Staff), configures Building A with 50 racks, allocates barcode ranges for cartons (C001-C999), files (F0001-F9999), and documents (D00001-D99999).",
                  color: "blue",
                  image: "/images/rms/cannyrms-dashboard.png",
                  caption: "CannyRMS Admin Panel"
                },
                {
                  phase: "2",
                  title: "Inward Upload",
                  description: "Got 50,000 records? Don't type them in. Just drag-and-drop your Excel sheet, and we'll flag the duplicates for you automatically.",
                  features: ["Template-based bulk upload", "Automatic validation", "Capacity tracking", "Unique barcode assignment", "Dynamic Reference"],
                  example: "A bank uploads 50,000 loan files via Excel. CannyRMS validates data, checks for duplicates, and assigns each record to a location.",
                  color: "green",
                  image: "/images/rms/cannyrms-upload-inward.png",
                  caption: "Bulk Inward - Excel Upload"
                },
                {
                  phase: "3",
                  title: "Quick Search",
                  description: "Find it. Fast. Search by document number, barcode, or location and get the full movement history in seconds.",
                  features: ["Multi-criteria search", "Real-time status (IN/OUT)", "Complete movement history with geolocation", "Location verification", "Dynamic Reference lookup"],
                  example: "An auditor searches by loan number (Dynamic Reference) and instantly sees: Location (Building B, Rack 23), Status (IN storage), and full access history with IP addresses and timestamps.",
                  color: "purple",
                  image: "/images/rms/cannyrms-quick-search.png",
                  caption: "Quick Search Interface"
                },
                {
                  phase: "4",
                  title: "Retrieval Request",
                  description: "Need a file? Raise a formal request with a justification. The system handles the delegate assignment and return timeline for you.",
                  features: ["Structured request forms", "Original vs copy selection", "Delegate assignment option", "Return date specification", "Extension requests with approval", "Email notification triggers"],
                  example: "Legal team requests original contracts for court: Category 'Legal', Access Type 'Original', Duration '30 days', Delegate 'Paralegal John', Reason 'Court Case #789'. System sends email to manager for approval.",
                  color: "orange",
                  image: "/images/rms/cannyrms-retrieval-request.png",
                  caption: "Retrieval Request Form"
                },
                {
                  phase: "5",
                  title: "Manager Approval",
                  description: "No loose ends. All requests hit the manager's inbox for approval, complete with full context and delegate info.",
                  features: ["Complete request visibility", "Approve/reject with comments", "Bulk approval processing", "Instant email notifications", "Mobile-friendly approval"],
                  example: "Department head receives email alert for pending request. Reviews justification, sees delegate assignment, and approves with note 'Approved for billing reconciliation'. Requester receives approval notification instantly.",
                  color: "red",
                  image: "/images/rms/cannyrms-manager-approval.png",
                  caption: "Manager Approval Interface"
                },
                {
                  phase: "6",
                  title: "Verification",
                  description: "Before handing anything over, warehouse staff verify condition and availability. Every check is logged with geolocation.",
                  features: ["Final document check", "Condition verification", "Availability confirmation", "Issue flagging with photos", "Geolocation & IP logging"],
                  example: "Staff confirms document is in stated location (Building A, Rack 23, Shelf 2), notes 'No damage', captures photo if needed, and marks as verified. System logs staff ID, IP address, and location.",
                  color: "teal",
                  image: "/images/rms/cannyrms-verification.png",
                  caption: "Return Verification Screen"
                },
                {
                  phase: "7",
                  title: "Handover",
                  description: "Release files securely with pick lists and digital signatures. The moment it leaves, the return-date clock starts ticking.",
                  features: ["Pick list generation", "Barcode verification", "Delegate handover (collect on behalf)", "Digital signature capture", "Return date tracking", "Geolocation logging"],
                  example: "Manager requests file but assigns assistant as delegate. Warehouse prints pick list, scans barcode, captures assistant's signature, and logs both requester and actual recipient for chain of custody.",
                  color: "indigo",
                  image: "/images/rms/cannyrms-handover.png",
                  caption: "Handover with Digital Signature"
                },
                {
                  phase: "8",
                  title: "Refiling",
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
                        <div className="border border-gray-100 bg-gray-50 flex items-center justify-center">
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

          {/* Core Features - Benefits First */}
          <section id="features" className="mb-32 scroll-mt-28">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Features Built for Zero-Error Compliance
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
                Enterprise Security
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
                  onContextMenu={(e) => e.preventDefault()}
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
                { icon: Speed, title: "Efficiency", stat: "90%", label: "Time Saved", description: "Find documents in seconds instead of hours." },
                { icon: Visibility, title: "Visibility", stat: "100%", label: "Tracked", description: "Real-time storage utilization and document status." },
                { icon: Shield, title: "Security", stat: "Zero", label: "Breaches", description: "Role-based access and complete audit trails." },
                { icon: Assessment, title: "Compliance", stat: "100%", label: "Audit Ready", description: "Regulatory-ready logs and accountability." },
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
          </section>

        </article>

        {/* CTA Section */}
        <section id="get-started" className="py-20 bg-gradient-to-r from-primary to-blue-700 scroll-mt-28">
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
                href="tel:+919876543210"
                className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone sx={{ fontSize: 20 }} /> Talk to Expert
              </Link>
            </div>
          </div>
        </section>

        <FAQ
          id="faq"
          className="scroll-mt-28"
          title="Frequently Asked Questions"
          description="Everything you need to know about CannyRMS physical records management."
          items={[
            {
              question: "What is CannyRMS?",
              answer: "CannyRMS is a Physical Records Management System that creates a 'Digital Twin' for your physical files. It uses barcode tracking and warehouse management to provide real-time visibility into offsite document storage."
            },
            {
              question: "How does barcode tracking work?",
              answer: "Each physical file and storage location is assigned a unique barcode. When files are moved, checked out, or returned, staff scan the barcode to update the system. This creates a complete audit trail of every movement."
            },
            {
              question: "What is Dynamic Barcode Range?",
              answer: "Dynamic Barcode Range allows you to generate barcode sequences on-the-fly based on configurable rules. Instead of pre-printing fixed barcode sheets, you can define a starting number, prefix, and range size. The system automatically assigns the next available barcode when a new file is registered, ensuring uniqueness and eliminating manual errors."
            },
            {
              question: "What is Dynamic Reference?",
              answer: "Dynamic Reference is a flexible metadata field that links physical records to external identifiers. For example, you can associate a file with a loan number, batch ID, case number, or employee ID. This allows cross-referencing between CannyRMS and your existing business systems, making searches and audits faster."
            },
            {
              question: "What is Geolocation Tracking in CannyRMS?",
              answer: "Every action in CannyRMS is logged with the user's IP address and geographic location. This includes login attempts, file access, retrievals, approvals, and modifications. Geolocation tracking enables forensic analysis during security audits and helps identify unauthorized access from unexpected locations."
            },
            {
              question: "Does CannyRMS send email notifications?",
              answer: "Yes. CannyRMS sends automated email notifications for request submissions, manager approvals/rejections, overdue file alerts, and upcoming due date reminders. This reduces manual follow-ups and ensures timely action on pending tasks."
            },
            {
              question: "Can I modify record metadata after upload?",
              answer: "Yes, through Data Modification Requests. Users can request changes to existing record metadata (like correcting a file number or category). These requests require manager approval, and every modification is logged in the audit trail with before/after values."
            },
            {
              question: "Is CannyRMS compliant with FDA 21 CFR Part 11?",
              answer: "Yes. CannyRMS includes electronic signatures, immutable audit trails, and user authentication controls required for FDA 21 CFR Part 11 compliance, making it suitable for pharmaceutical and life sciences organizations."
            },
            {
              question: "What is Delegate Handover?",
              answer: "Delegate Handover allows a requester to assign another person to collect documents on their behalf. For example, a manager can request files but assign their assistant as the delegate. The system tracks both the original requester and the actual recipient, maintaining complete chain of custody."
            },
            {
              question: "How does the 3-level barcode system work?",
              answer: "CannyRMS uses a hierarchical barcode structure: Carton (storage box) → File (folder within carton) → Document (individual paper within file). Each level has pre-allocated barcode ranges with automatic overlap detection to prevent duplicates. This enables tracking at any granularity level."
            },
            {
              question: "Can CannyRMS integrate with existing systems?",
              answer: "Yes. CannyRMS integrates seamlessly with CannyECM (document management), CannyScan (digitization), and third-party ERP systems via REST APIs."
            },
            {
              question: "How quickly can I find a file?",
              answer: "With CannyRMS, you can locate any file in under 30 seconds. Search by document number, barcode, category, or any custom metadata field and get the exact rack/shelf/box location."
            },
            {
              question: "What industries use CannyRMS?",
              answer: "CannyRMS is used by banks (for loan files and KYC documents), pharmaceutical companies (for batch records and validation logs), legal firms (for case files and evidence), and government agencies (for archival records)."
            }
          ]}
        />

        {/* Cross-Linking: Related Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4 text-center">
              Explore Our Complete Business Solutions Suite
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              CannyRMS works seamlessly with our other enterprise solutions. Build a complete digital transformation ecosystem for your organization.
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
                  Comprehensive digital document management with workflow automation, OCR, and FDA 21 CFR Part 11 compliance.
                </p>
                <Link href="/product/document-management" className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
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
