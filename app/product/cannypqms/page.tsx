import type { Metadata } from "next";
import { generateAlternates } from '@/lib/enhanced-seo';
import SocialShare from "@/components/ui/SocialShare";
import ProductFAQ from "@/components/sections/ProductFAQ";
import Link from "next/link";
import Image from "next/image";
import SecureImage from "@/components/ui/SecureImage";

import {
  ArrowForward,
  CheckCircle,
  Star,
  Verified,
  Shield,
  Assignment,
  Assessment,
  Science,
  Biotech,
  LocalPharmacy,
  MedicalServices,
  VerifiedUser,
  Task,
  BugReport,
  Policy,
  ManageAccounts,
  Inventory,
  PrecisionManufacturing,
  FactCheck,
  DocumentScanner,
  Warning,
  Business,
  Phone,
  Timeline,
  AccountTree,
  Gavel,
  Analytics,
  Loop,
  Build,
  Engineering,
  Lock,
  Key,
} from "@mui/icons-material";

export const metadata: Metadata = {
  title: "Pharmaceutical Quality Management System | CannyPQMS",
  description:
    "CannyPQMS pharmaceutical quality management software with 18 modules. CAPA, DMS, Audit, e-Sign (21 CFR Part 11). FDA, WHO, ICH Q9 compliant. Request a demo.",
  authors: [
    { name: "Udayakumar Murugan", url: "https://in.linkedin.com/in/udayakumar-murugan-732b3864" },
  ],
  openGraph: {
    title: "Pharmaceutical Quality Management System | CannyPQMS",
    description:
      "CannyPQMS pharmaceutical quality management software with 18 modules. CAPA, DMS, Audit, e-Sign (21 CFR Part 11). FDA, WHO, ICH Q9 compliant. Request a demo.",
    type: "article",
    siteName: "CannyMinds",
    locale: "en_US",
    url: "https://www.cannymindstech.com/product/cannypqms",
    images: [
      {
        url: "https://www.cannymindstech.com/images/pharma-qms/cannypqms-quality-management-kpi-dashboard.png",
        width: 1200,
        height: 630,
        alt: "CannyPQMS Pharmaceutical Quality Management System Dashboard",
      },
    ],
    publishedTime: "2026-01-15T00:00:00.000Z",
    modifiedTime: "2026-03-28T00:00:00.000Z",
    authors: ["https://in.linkedin.com/in/udayakumar-murugan-732b3864"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmaceutical Quality Management System | CannyPQMS",
    description:
      "CannyPQMS pharmaceutical quality management software with 18 modules. CAPA, DMS, Audit, e-Sign (21 CFR Part 11). FDA, WHO, ICH Q9 compliant. Request a demo.",
    images: [
      {
        url: "https://www.cannymindstech.com/images/pharma-qms/cannypqms-quality-management-kpi-dashboard.png",
        alt: "CannyPQMS Pharmaceutical Quality Management System Dashboard",
      },
    ],
    site: "@cannyminds",
    creator: "@cannyminds",
  },
  alternates: generateAlternates("/product/cannypqms"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function CannyPQMSPage() {
  return (
    <>
      <div className="min-h-screen bg-white">

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="bg-gray-50 border-b border-gray-200 py-4 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm overflow-x-auto">
              <li><Link href="/" className="text-primary hover:text-primary/80 whitespace-nowrap">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/product" className="text-primary hover:text-primary/80 whitespace-nowrap">Products</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600 font-medium truncate">Pharma QMS</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative w-full bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              CannyPQMS: The Pharmaceutical Quality Management System Built for{" "}
              <span className="text-red-600">Zero FDA Warning Letters.</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Left Column */}
              <div className="space-y-6">

                {/* Trust Badges */}
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <Shield className="text-blue-600" sx={{ fontSize: 18 }} />
                    <div>
                      <div className="text-xs font-bold text-gray-900">FDA 21 CFR Part 11</div>
                      <div className="text-[10px] text-gray-500">Compliant</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <Science className="text-purple-600" sx={{ fontSize: 18 }} />
                    <div>
                      <div className="text-xs font-bold text-gray-900">ICH Q9</div>
                      <div className="text-[10px] text-gray-500">Risk Management</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <Verified className="text-green-600" sx={{ fontSize: 18 }} />
                    <div>
                      <div className="text-xs font-bold text-gray-900">ISO 9001:2015</div>
                      <div className="text-[10px] text-gray-500">Certified</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <LocalPharmacy className="text-red-600" sx={{ fontSize: 18 }} />
                    <div>
                      <div className="text-xs font-bold text-gray-900">EMA / WHO / CDSCO</div>
                      <div className="text-[10px] text-gray-500">Ready</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <Lock className="text-gray-700" sx={{ fontSize: 18 }} />
                    <div>
                      <div className="text-xs font-bold text-gray-900">On-Premise</div>
                      <div className="text-[10px] text-gray-500">Deployment</div>
                    </div>
                  </div>
                </div>

                {/* Subheadline */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  Enterprise{" "}
                  <strong className="text-gray-900">pharmaceutical quality management system</strong>{" "}
                  with 18 integrated modules.{" "}
                  <a
                    href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/part-11-electronic-records-electronic-signatures-scope-and-application"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    FDA 21 CFR Part 11
                  </a>{" "}
                  compliant. Audit-ready from Day 1.
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
                    href="#modules"
                    className="bg-white text-gray-700 border-2 border-gray-300 px-8 py-3 rounded-lg font-bold hover:border-primary hover:text-primary transition-all inline-flex items-center justify-center gap-2"
                  >
                    View All 18 Modules
                    <Assignment sx={{ fontSize: 20 }} />
                  </a>
                </div>

                {/* Key Benefits */}
                <div className="flex items-center gap-4 text-sm flex-wrap">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-red-600" sx={{ fontSize: 18 }} />
                    <span className="font-medium text-gray-700">Prevent Warning Letters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-600" sx={{ fontSize: 18 }} />
                    <span className="font-medium text-gray-700">21 CFR Part 11</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600" sx={{ fontSize: 18 }} />
                    <span className="font-medium text-gray-700">18 Modules</span>
                  </div>
                </div>


                {/* Author Attribution */}
                <div className="flex items-center justify-between gap-2 pt-4 border-t border-gray-200 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/about/Udayakumar-Murugan-Director.png"
                      alt="Udayakumar Murugan - Chief Executive Officer at CannyMinds Technology Solutions"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>
                      By{" "}
                      <a
                        href="https://in.linkedin.com/in/udayakumar-murugan-732b3864"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-semibold"
                      >
                        Udayakumar Murugan
                      </a>
                    </span>
                    <span className="text-gray-400">•</span>
                    <span>Updated March 2026</span>
                  </div>
                  <SocialShare
                    title="CannyPQMS:Pharmaceutical Quality Management System"
                    description="Enterprise pharma QMS with 18 modules:CAPA, DMS, Audit, Validation & 21 CFR Part 11 e-Sign. FDA, WHO, ICH Q9 compliant."
                  />
                </div>
              </div>

              {/* Right Column:Hero Image */}
              <div className="pt-4 lg:pt-0">
                <div className="rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                  <SecureImage
                    src="/images/pharma-qms/cannypqms-quality-management-kpi-dashboard.png"
                    alt="CannyPQMS Quality Dashboard - Real-time compliance visibility across all 18 QMS modules"
                    width={800}
                    height={520}
                    className="w-full h-auto"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center text-white">
              {[
                { value: "18 Integrated", label: "Modules", icon: <Inventory sx={{ fontSize: 32 }} /> },
                { value: "FDA · EMA · WHO", label: "Compliance", icon: <Shield sx={{ fontSize: 32 }} /> },
                { value: "On-Premise", label: "Deployment", icon: <Lock sx={{ fontSize: 32 }} /> },
                { value: "21 CFR Part 11", label: "e-Signature", icon: <VerifiedUser sx={{ fontSize: 32 }} /> },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="mb-2 text-white/90">{stat.icon}</div>
                  <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm sm:text-base text-white/90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: What is a Pharmaceutical QMS? */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              What is a Pharmaceutical Quality Management System?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                A <strong className="text-gray-900">pharmaceutical quality management system</strong> (pharma QMS) is a formalised, documented framework of policies, processes, procedures, and records that a pharmaceutical manufacturer puts in place to ensure every product it makes is consistently safe, effective, and of the quality intended. Under international regulatory frameworks:including the{" "}
                <a href="https://www.fda.gov/drugs/pharmaceutical-quality-resources/current-good-manufacturing-practice-cgmp-regulations" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">US FDA&apos;s 21 CFR Parts 210 and 211</a>,{" "}
                the{" "}
                <a href="https://www.ich.org/page/quality-guidelines" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">ICH Q10 guideline on Pharmaceutical Quality System</a>,{" "}
                the EU&apos;s GMP Annex 11, and the WHO&apos;s Good Manufacturing Practice guidelines:a QMS is not optional. It is a legal prerequisite for manufacturing, importing, and exporting pharmaceutical products to regulated markets. A QMS covers every lifecycle stage of a medicine: raw material qualification, in-process controls, batch release, deviation and CAPA management, equipment qualification, analytical validation, change control, and post-market complaint handling. For manufacturers operating in countries such as India, Nigeria, or the USA, the <strong className="text-gray-900">pharmaceutical quality management system</strong> is the single most scrutinised aspect of any regulatory inspection. An inspector from the FDA, NAFDAC (Nigeria), EMA, or WHO is not examining your factory walls:they are examining your QMS records. Failures in the QMS:missing CAPA root causes, uncontrolled SOP versions, undocumented deviations:are directly cited in FDA Warning Letters, Form 483 observations, and import alerts. A robust, technology-enabled <strong className="text-gray-900">pharmaceutical quality management system</strong> is therefore both a patient safety obligation and a business survival requirement for any company participating in the global medicines supply chain.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: What is CannyPQMS? */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              CannyPQMS: Pharmaceutical Quality Management Software for Regulated Manufacturers
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                CannyPQMS is an enterprise <strong className="text-gray-900">pharmaceutical quality management system</strong> (pharma QMS software) developed by CannyMinds Technology Solutions. It unifies 18 GxP-critical quality processes:including CAPA management, document control, deviation tracking, audit management, and 21 CFR Part 11 electronic signatures:into a single on-premise platform purpose-built for regulated pharmaceutical environments.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Unlike generic enterprise software adapted from manufacturing or ISO-only industries, CannyPQMS is designed exclusively for pharma, biotech, medical device manufacturers, contract research organisations (CROs), and API producers who operate under FDA 21 CFR Part 11, ICH Q9, EMA GMP, WHO GMP, and CDSCO India Schedule M compliance frameworks. Every module generates an immutable, timestamped change record. Every workflow enforces multi-level approval before a quality record is closed. Every record is signed with a 21 CFR Part 11 compliant electronic signature that displays the signatory&apos;s printed name, date, time, and the meaning of the signature act.
              </p>
              <p className="text-gray-700 leading-relaxed">
                CannyPQMS is deployed on-premise:meaning all quality data resides within the pharmaceutical manufacturer&apos;s own IT infrastructure, satisfying data sovereignty requirements for FDA, NAFDAC, and EMA inspections. No third-party cloud dependencies. No data residency concerns. CannyPQMS is deployed across pharmaceutical manufacturers in India, Nigeria, and the USA:helping quality teams pass FDA inspections, respond to Form 483 observations, and achieve zero critical audit findings.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Pain Points */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
              What Happens When Pharmaceutical Quality Management Fails?
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              The consequences of inadequate <strong className="text-gray-900">pharmaceutical quality management</strong> are not theoretical. The US FDA publishes Warning Letters and import alerts publicly. A single critical finding:an unlinked CAPA, a missing deviation log, a calibration overdue by 47 days:can trigger consequences that cost a manufacturer months or years of market access.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Pain Point 1 */}
              <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BugReport className="text-red-600" sx={{ fontSize: 22 }} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">FDA Form 483:CAPA Not Linked to Root Cause</h3>
                  </div>
                  <div className="border border-red-200 bg-red-50 p-3 rounded-lg mb-3">
                    <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-1">Problem:</p>
                    <p className="text-sm text-gray-700 leading-relaxed">12 open CAPAs with no documented root cause analysis. No answer on record. <strong className="text-gray-900">Warning Letter. Export ban. Revenue loss in the crores.</strong></p>
                  </div>
                  <div className="border border-green-200 bg-green-50 p-3 rounded-lg">
                    <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">CannyPQMS Fix:</p>
                    <p className="text-sm text-gray-700 leading-relaxed">CAPA module mandates root cause linkage before closure. Every CAPA traces back to its originating event with timestamps and e-signatures at every stage.</p>
                  </div>
                </div>
              </div>

              {/* Pain Point 2 */}
              <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DocumentScanner className="text-red-600" sx={{ fontSize: 22 }} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">SOP Version Chaos:Operator Follows Obsolete Procedure</h3>
                  </div>
                  <div className="border border-red-200 bg-red-50 p-3 rounded-lg mb-3">
                    <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-1">Problem:</p>
                    <p className="text-sm text-gray-700 leading-relaxed">Batch manufactured using SOP v2.1. Current approved version is 3.0. SOPs in a shared drive anyone could edit. <strong className="text-gray-900">Batch recall. Investigation. CAPA spiral.</strong></p>
                  </div>
                  <div className="border border-green-200 bg-green-50 p-3 rounded-lg">
                    <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">CannyPQMS Fix:</p>
                    <p className="text-sm text-gray-700 leading-relaxed">DMS enforces version control with controlled distribution. Obsolete SOPs automatically superseded. Operators only access the currently approved version.</p>
                  </div>
                </div>
              </div>

              {/* Pain Point 3 */}
              <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Warning className="text-red-600" sx={{ fontSize: 22 }} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Audit Finding:No Deviation Log for OOS Result</h3>
                  </div>
                  <div className="border border-red-200 bg-red-50 p-3 rounded-lg mb-3">
                    <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-1">Problem:</p>
                    <p className="text-sm text-gray-700 leading-relaxed">OOS result verbally discussed, never formally logged. No investigation. No CAPA. <strong className="text-gray-900">The batch was released.</strong></p>
                  </div>
                  <div className="border border-green-200 bg-green-50 p-3 rounded-lg">
                    <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">CannyPQMS Fix:</p>
                    <p className="text-sm text-gray-700 leading-relaxed">Deviation module mandates formal logging of every OOS/OOT event with investigation timeline and mandatory CAPA linkage before closure.</p>
                  </div>
                </div>
              </div>

              {/* Pain Point 4 */}
              <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Build className="text-red-600" sx={{ fontSize: 22 }} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Calibration Overdue:Batch Released with Uncalibrated Instrument</h3>
                  </div>
                  <div className="border border-red-200 bg-red-50 p-3 rounded-lg mb-3">
                    <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-1">Problem:</p>
                    <p className="text-sm text-gray-700 leading-relaxed">HPLC calibration expired 47 days ago. Discovered during EMA inspection. <strong className="text-gray-900">Batch recall. GMP certificate withdrawal.</strong></p>
                  </div>
                  <div className="border border-green-200 bg-green-50 p-3 rounded-lg">
                    <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">CannyPQMS Fix:</p>
                    <p className="text-sm text-gray-700 leading-relaxed">Calibration module tracks every instrument, sends alerts at 30/15/7 days before expiry, and blocks batch release when any linked instrument is overdue.</p>
                  </div>
                </div>
              </div>

              {/* Pain Point 5 */}
              <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ManageAccounts className="text-red-600" sx={{ fontSize: 22 }} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Supplier Quality Failure:Unqualified Vendor Supplied API</h3>
                  </div>
                  <div className="border border-red-200 bg-red-50 p-3 rounded-lg mb-3">
                    <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-1">Problem:</p>
                    <p className="text-sm text-gray-700 leading-relaxed">API supplier onboarded without qualification. No AVL entry created. Contamination event triggers <strong className="text-gray-900">multi-batch recall and regulatory notification.</strong></p>
                  </div>
                  <div className="border border-green-200 bg-green-50 p-3 rounded-lg">
                    <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">CannyPQMS Fix:</p>
                    <p className="text-sm text-gray-700 leading-relaxed">Supplier module enforces full qualification before AVL activation. Periodic requalification auto-scheduled. No qualified supplier, no purchase order.</p>
                  </div>
                </div>
              </div>

              {/* Pain Point 6 */}
              <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Loop className="text-red-600" sx={{ fontSize: 22 }} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Change Control Gap:Process Change Made Without Validation</h3>
                  </div>
                  <div className="border border-red-200 bg-red-50 p-3 rounded-lg mb-3">
                    <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-1">Problem:</p>
                    <p className="text-sm text-gray-700 leading-relaxed">Granulation speed adjusted verbally. No change control. No impact assessment. Six weeks later <strong className="text-gray-900">batch fails dissolution testing.</strong></p>
                  </div>
                  <div className="border border-green-200 bg-green-50 p-3 rounded-lg">
                    <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">CannyPQMS Fix:</p>
                    <p className="text-sm text-gray-700 leading-relaxed">Change Control mandates formal request, cross-functional impact assessment, multi-level e-signature approval, and post-implementation effectiveness check before any change is physically implemented.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: 18 Modules */}
        <section id="modules" className="py-16 bg-gray-50 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
              What Are the 18 Modules of CannyPQMS?
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed italic">
              CannyPQMS covers every GxP process in a single pharmaceutical quality management system. No separate point solutions. No data silos between quality functions. Every module shares one immutable activity log, one user permission framework, and one compliance dashboard.
            </p>

            {/* Module Overview Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-14">
              {[
                { n: 1, icon: <DocumentScanner sx={{ fontSize: 22 }} />, name: "Document Management" },
                { n: 2, icon: <Loop sx={{ fontSize: 22 }} />, name: "Change Control" },
                { n: 3, icon: <Warning sx={{ fontSize: 22 }} />, name: "Deviation Management" },
                { n: 4, icon: <Task sx={{ fontSize: 22 }} />, name: "CAPA Management" },
                { n: 5, icon: <FactCheck sx={{ fontSize: 22 }} />, name: "Audit Management" },
                { n: 6, icon: <Engineering sx={{ fontSize: 22 }} />, name: "Training Management" },
                { n: 7, icon: <ManageAccounts sx={{ fontSize: 22 }} />, name: "Supplier Quality" },
                { n: 8, icon: <Assessment sx={{ fontSize: 22 }} />, name: "Complaint Management" },
                { n: 9, icon: <Analytics sx={{ fontSize: 22 }} />, name: "Risk Management" },
                { n: 10, icon: <Policy sx={{ fontSize: 22 }} />, name: "Non-Conformance" },
                { n: 11, icon: <PrecisionManufacturing sx={{ fontSize: 22 }} />, name: "Calibration" },
                { n: 12, icon: <Build sx={{ fontSize: 22 }} />, name: "Equipment / Assets" },
                { n: 13, icon: <VerifiedUser sx={{ fontSize: 22 }} />, name: "Validation" },
                { n: 14, icon: <Gavel sx={{ fontSize: 22 }} />, name: "Regulatory Compliance" },
                { n: 15, icon: <Timeline sx={{ fontSize: 22 }} />, name: "Management Review" },
                { n: 16, icon: <Analytics sx={{ fontSize: 22 }} />, name: "Dashboard & Reporting" },
                { n: 17, icon: <Key sx={{ fontSize: 22 }} />, name: "Electronic Signature" },
                { n: 18, icon: <AccountTree sx={{ fontSize: 22 }} />, name: "Collaboration Tool" },
              ].map(({ n, icon, name }) => (
                <a
                  key={n}
                  href={`#module-${n}`}
                  className="border border-gray-200 rounded-lg p-3 text-center hover:border-primary hover:shadow-md transition-all cursor-pointer block"
                >
                  <div className="flex justify-center mb-1 text-gray-500">{icon}</div>
                  <p className="text-[10px] text-gray-400 font-bold mb-0.5">Module {n}</p>
                  <p className="text-xs font-bold text-gray-800 leading-tight">{name}</p>
                </a>
              ))}
            </div>

            {/* Module 1: DMS */}
            <div id="module-1" className="py-10 border-b border-gray-100 last:border-0">
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <DocumentScanner className="text-blue-600" sx={{ fontSize: 26 }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Module 1 of 18</p>
                      <h3 className="text-xl font-bold text-gray-900">Document Management System (DMS)</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Uncontrolled documents are the most frequently cited category in FDA 483 observations:because when operators access SOPs from shared drives, email attachments, or printed binders, there is no guarantee they are working from the current approved version. CannyPQMS DMS controls the complete lifecycle of every GxP-critical document:from first-draft creation through multi-level review, approval, controlled distribution, periodic review, and final archival:ensuring the only version an operator can access is the one QA has approved.
                  </p>
                  <div className="max-w-2xl mx-auto w-full">
                    <div className="overflow-hidden">
                      <SecureImage src="/images/pharma-qms/cannypqms-document-management-system-dashboard.png" alt="CannyPQMS Document Management System - Document lifecycle management with version control" width={600} height={400} className="w-full h-auto" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">What it does:</p>
                    <ul className="space-y-2">
                      {["Create SOPs, policies, work instructions, and quality records with structured templates", "Route through configurable multi-level review and approval workflows with e-signatures", "Automatically supersede and retire obsolete document versions upon approval", "Distribute controlled copies exclusively to authorised, role-matched recipients", "Schedule periodic document reviews with automated reminders to document owners", "Log every document action in a tamper-evident, timestamped action history"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Regulatory Compliance</p>
                    <p className="text-sm text-blue-900">FDA 21 CFR Part 11, FDA 21 CFR Part 211.68, EU GMP Annex 11, ICH Q10 Section 4</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Why This Matters</p>
                    <p className="text-sm text-amber-900 leading-relaxed">Failure to maintain version-controlled documents is one of the top three most-cited observations in FDA 483s. An operator following an obsolete SOP is a GMP violation regardless of intent.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 2: CCM */}
            <div id="module-2" className="py-10 border-b border-gray-100 last:border-0">
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                      <Loop className="text-purple-600" sx={{ fontSize: 26 }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Module 2 of 18</p>
                      <h3 className="text-xl font-bold text-gray-900">Change Control Management (CCM)</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    When a process change is implemented without a formal change record:even a minor equipment setting adjustment:and that change affects a validated parameter, the entire validation for that process must be reassessed. Every batch manufactured between the undocumented change and its discovery is in question. CannyPQMS CCM enforces an impact-first philosophy across every proposed change to pharmaceutical processes, equipment, materials, facilities, computer systems, and quality documents: no change is physically implemented without a documented impact assessment and multi-level approved sign-off.
                  </p>
                  <div className="max-w-2xl mx-auto w-full">
                    <div className="overflow-hidden">
                      <SecureImage src="/images/pharma-qms/cannypqms-change-control-management-workflow.png" alt="CannyPQMS Change Control Management - Impact assessment and approval workflow" width={600} height={400} className="w-full h-auto" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">What it does:</p>
                    <ul className="space-y-2">
                      {["Initiate change requests with mandatory classification (minor / major / critical)", "Conduct cross-functional impact assessment and risk evaluation", "Route multi-level approval workflows with 21 CFR Part 11 compliant e-signatures", "Verify and document effectiveness of the change after implementation", "Link change records bidirectionally to Validation, Deviation, and CAPA modules"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Regulatory Compliance</p>
                    <p className="text-sm text-blue-900">ICH Q10 Section 3.2, FDA 21 CFR Part 211.100, EU GMP Chapter 4, Schedule M (India)</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Why This Matters</p>
                    <p className="text-sm text-amber-900 leading-relaxed">One unapproved change to a validated process parameter can collapse years of validation work. The cost is not just the investigation:it is the revalidation protocol, the process performance qualification batches, the regulatory notification if the change is post-approval, and the batch review for every batch made since the change occurred without authorisation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 3: Deviation */}
            <div id="module-3" className="py-10 border-b border-gray-100 last:border-0">
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                      <Warning className="text-orange-600" sx={{ fontSize: 26 }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Module 3 of 18</p>
                      <h3 className="text-xl font-bold text-gray-900">Deviation / Incident Management</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Deviations managed verbally:a supervisor told, a decision made on the floor, no record written:leave a batch with no auditable justification for its release. Under FDA 21 CFR Part 211.192, every unexplained discrepancy must be fully investigated with a written record. CannyPQMS enforces a mandatory, structured pathway for logging, investigating, and closing every quality deviation:including OOS results, OOT observations, process parameter excursions, equipment failures, and environmental monitoring excursions:so that every deviation has a paper trail from detection to resolution.
                  </p>
                  <div className="max-w-2xl mx-auto w-full">
                    <div className="overflow-hidden">
                      <SecureImage src="/images/pharma-qms/cannypqms-deviation-management-investigation.png" alt="CannyPQMS Deviation Management - OOS investigation and CAPA linkage workflow" width={600} height={400} className="w-full h-auto" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">What it does:</p>
                    <ul className="space-y-2">
                      {["Log every deviation with automatic severity classification (critical / major / minor)", "Assign investigators with due-date tracking and automated escalation alerts", "Track root cause analysis methodology with structured evidence attachment", "Block deviation closure until a CAPA has been raised, assigned, and accepted", "Generate investigation reports formatted for regulatory inspection submission"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Regulatory Compliance</p>
                    <p className="text-sm text-blue-900">FDA 21 CFR Part 211.192, FDA 21 CFR Part 211.100, ICH Q10 Section 3.1, EMA GMP Chapter 1</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Why This Matters</p>
                    <p className="text-sm text-amber-900 leading-relaxed">A deviation verbally discussed but not formally documented does not legally exist in the eyes of a regulatory inspector. An FDA auditor who finds an OOS result with no corresponding deviation record can trigger a Critical GMP finding.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 4: CAPA */}
            <div id="module-4" className="py-10 border-b border-gray-100 last:border-0">
              <div className="flex flex-col lg:flex-row-reverse gap-10 items-start">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                      <Task className="text-red-600" sx={{ fontSize: 26 }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Module 4 of 18</p>
                      <h3 className="text-xl font-bold text-gray-900">CAPA Management</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Drives the complete corrective and preventive action lifecycle:from root cause-linked initiation through action planning, evidence collection, effectiveness verification, and final closure:for every quality event that requires systematic corrective action. CAPA is the cornerstone quality system element under FDA 21 CFR Part 820.100 and ICH Q10.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">What it does:</p>
                    <ul className="space-y-2">
                      {["Initiate CAPAs from deviations, audit findings, complaints, NCRs, and management review", "Build structured action plans with owner assignment, action type, and due dates", "Mandate documented effectiveness verification before the CAPA can be formally closed", "Analyse CAPA trends by event source, product, site, and root cause category", "Display open CAPA ageing by 0–30, 31–60, 61–90, and 90+ day buckets on the dashboard"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Regulatory Compliance</p>
                    <p className="text-sm text-blue-900">FDA 21 CFR Part 820.100, ICH Q10 Section 3.1, ISO 13485 Section 8.5.2, EU GMP Chapter 1, WHO GMP</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Why This Matters</p>
                    <p className="text-sm text-amber-900 leading-relaxed">Inadequate CAPA systems are the single most frequently cited category of FDA 483 observations. An FDA inspector who finds CAPAs closed without root cause verification will issue a repeat observation:escalating directly to Warning Letter territory.</p>
                  </div>
                </div>
                <div className="flex-1 lg:max-w-[520px]">
                  <div className="overflow-hidden">
                    <SecureImage src="/images/pharma-qms/cannypqms-capa-management-workflow.png" alt="CannyPQMS CAPA Management - Root cause analysis and effectiveness verification" width={600} height={400} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* Module 5: Audit */}
            <div id="module-5" className="py-10 border-b border-gray-100 last:border-0">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                      <FactCheck className="text-green-600" sx={{ fontSize: 26 }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Module 5 of 18</p>
                      <h3 className="text-xl font-bold text-gray-900">Audit Management</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Paper-based audit binders tell a different story during an inspection than the reality of your programme:findings logged in one folder, CAPA responses in another, follow-up status unknown. CannyPQMS gives QA teams a complete, paperless platform for planning, scheduling, executing, reporting, and closing every type of GxP audit:internal self-inspections, supplier/vendor audits, regulatory mock audits, and follow-up audits:with every finding, response, and CAPA link stored in one place and retrievable instantly.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">What it does:</p>
                    <ul className="space-y-2">
                      {["Schedule and plan internal GMP self-inspections, supplier audits, and mock audits", "Execute audits in real time with digital checklist completion and finding entry", "Automatically link every critical or major finding to a CAPA record", "Generate formatted audit reports ready for internal review and regulatory submission", "Track outstanding audit findings and CAPA closures on a dedicated audit-status dashboard"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Regulatory Compliance</p>
                    <p className="text-sm text-blue-900">ISO 19011, FDA 21 CFR Part 211.180, WHO GMP TRS 986 Annex 2, EU GMP Chapter 9</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Why This Matters</p>
                    <p className="text-sm text-amber-900 leading-relaxed">When an FDA investigator asks for the last three years of internal audit findings on Day 1 of an inspection, searching through binders, email folders, and file shares is not a credible response. It signals a quality programme that exists on paper rather than in practice:and experienced inspectors know the difference immediately.</p>
                  </div>
                </div>
                <div className="flex-1 lg:max-w-[520px]">
                  <div className="overflow-hidden">
                    <SecureImage src="/images/pharma-qms/cannypqms-audit-management-scheduling-dashboard.png" alt="CannyPQMS Audit Management - GMP self-inspection scheduling and findings tracking" width={600} height={400} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* Module 6: Training */}
            <div id="module-6" className="py-10 border-b border-gray-100 last:border-0">
              <div className="flex flex-col lg:flex-row-reverse gap-10 items-start">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center">
                      <Engineering className="text-teal-600" sx={{ fontSize: 26 }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Module 6 of 18</p>
                      <h3 className="text-xl font-bold text-gray-900">Training Management</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    An operator who signed a training record last quarter may be working from a procedure that was revised last week. The training gap is not intentional:the SOP changed and retraining was never triggered. CannyPQMS automatically assigns new training tasks to every affected operator whenever an SOP is approved or revised, ensuring every person performing GxP-critical activities is documented as trained on the current, approved version before they are permitted to perform that activity.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">What it does:</p>
                    <ul className="space-y-2">
                      {["Build role-based training matrices linking job functions to required SOPs", "Automatically assign SOP-based training tasks whenever an SOP is approved or revised", "Track training completion, competency assessment scores, and pass/fail records", "Alert training coordinators when SOP revisions require retraining of impacted personnel", "Generate training effectiveness reports with department-level compliance rates"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Regulatory Compliance</p>
                    <p className="text-sm text-blue-900">FDA 21 CFR Part 211.68, EU GMP Chapter 2, WHO GMP TRS 986, CDSCO Schedule M</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Why This Matters</p>
                    <p className="text-sm text-amber-900 leading-relaxed">If an operator executes a GxP step using a procedure that was superseded last month, the training record cannot shift liability to the operator:the quality system allowed it to happen. The site bears the GMP violation, the batch investigation, and the CAPA. Under both FDA and EMA frameworks, responsibility for ensuring personnel are trained on current procedures rests with the quality system, not with individual operators.</p>
                  </div>
                </div>
                <div className="flex-1 lg:max-w-[520px]">
                  <div className="overflow-hidden">
                    <SecureImage src="/images/pharma-qms/cannypqms-training-management-compliance.png" alt="CannyPQMS Training Management - Role-based training matrix and SOP compliance tracking" width={600} height={400} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* Module 7: Supplier */}
            <div id="module-7" className="py-10 border-b border-gray-100 last:border-0">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                      <ManageAccounts className="text-indigo-600" sx={{ fontSize: 26 }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Module 7 of 18</p>
                      <h3 className="text-xl font-bold text-gray-900">Supplier / Vendor Quality Management</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    A supplier audit failure looks like this in practice: a critical excipient supplier passed qualification two years ago, periodic requalification was never scheduled, and the supplier changed their manufacturing site without notifying you. The contamination event that follows is entirely your liability:under FDA 21 CFR Part 211.84, the finished-dose manufacturer bears full responsibility for the quality of every material used. CannyPQMS governs the complete supplier lifecycle:from initial qualification through ongoing performance monitoring, periodic requalification, and disqualification of underperforming vendors.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">What it does:</p>
                    <ul className="space-y-2">
                      {["Execute structured vendor qualification workflow before a supplier can be approved", "Plan, schedule, and execute supplier facility audits with digital finding entry", "Score and track supplier performance with configurable evaluation scorecards", "Manage the Approved Vendor List (AVL) with QA-only approval controls", "Trigger automatic disqualification alerts when a supplier's score drops below threshold"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Regulatory Compliance</p>
                    <p className="text-sm text-blue-900">FDA 21 CFR Part 211.84, ICH Q10 Section 3.3, ISO 9001:2015 Section 8.4, EU GMP Chapter 7, WHO GMP</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Why This Matters</p>
                    <p className="text-sm text-amber-900 leading-relaxed">A supplier approved two years ago and never requalified may have changed their manufacturing site, process, or quality team since then. Using an out-of-requalification supplier puts every batch that consumed their material at risk of rejection during QP release:because the approved vendor list entry cannot demonstrate current qualification status. One question from an inspector about your last supplier requalification date should not require searching through paper files.</p>
                  </div>
                </div>
                <div className="flex-1 lg:max-w-[520px]">
                  <div className="overflow-hidden">
                    <SecureImage src="/images/pharma-qms/cannypqms-supplier-quality-management-qualification.png" alt="CannyPQMS Supplier Quality Management - Approved vendor list and qualification workflow" width={600} height={400} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* Module 8: Complaint */}
            <div id="module-8" className="py-10 border-b border-gray-100 last:border-0">
              <div className="flex flex-col lg:flex-row-reverse gap-10 items-start">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center">
                      <Assessment className="text-yellow-600" sx={{ fontSize: 26 }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Module 8 of 18</p>
                      <h3 className="text-xl font-bold text-gray-900">Complaint Management</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    A pharmacist calls to report a foreign particle in a blister pack. The complaint is logged in a spreadsheet, the sample is sent to QC, and the investigation sits open for six weeks with no formal root cause and no CAPA linked. Under FDA 21 CFR Part 211.198, every written complaint must be reviewed, evaluated, and responded to:with records accessible to FDA inspectors. CannyPQMS gives you a structured, inspection-ready system for receiving, classifying, investigating, and resolving every post-market product complaint before it becomes a regulatory finding.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">What it does:</p>
                    <ul className="space-y-2">
                      {["Intake every complaint with mandatory classification by type and severity", "Conduct complaint investigations with root cause analysis and impact assessment", "Generate regulatory reports for FDA MedWatch, CDSCO, EMA EVDAS, and NAFDAC", "Link systemic complaints to CAPA records for product and process improvement", "Analyse complaint trends by product, batch, market, and root cause category"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Regulatory Compliance</p>
                    <p className="text-sm text-blue-900">FDA 21 CFR Part 211.198, FDA 21 CFR Part 314.81, EU GMP Chapter 8, ICH Q10 Section 3.4</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Why This Matters</p>
                    <p className="text-sm text-amber-900 leading-relaxed">Manufacturers that fail to maintain adequate complaint files, or that fail to evaluate whether a complaint constitutes a potentially serious adverse drug reaction, are in violation of both FDA and EMA post-marketing surveillance requirements.</p>
                  </div>
                </div>
                <div className="flex-1 lg:max-w-[520px]">
                  <div className="overflow-hidden">
                    <SecureImage src="/images/pharma-qms/cannypqms-complaint-management-handling-process.png" alt="CannyPQMS Complaint Management - Post-market complaint investigation and regulatory reporting" width={600} height={400} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* Module 9: Risk */}
            <div id="module-9" className="py-10 border-b border-gray-100 last:border-0">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center">
                      <Analytics className="text-rose-600" sx={{ fontSize: 26 }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Module 9 of 18</p>
                      <h3 className="text-xl font-bold text-gray-900">Risk Management (QRM)</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <a href="https://www.ich.org/page/quality-guidelines" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">ICH Q9(R1)</a>:updated in 2023:now explicitly requires that quality risk management be prospective, documented, and proportionate to the risk level. Manual risk registers in spreadsheets cannot demonstrate this: they have no version history, no linkage to mitigating actions, and no evidence of review. CannyPQMS applies the structured, science-based risk assessment methodology defined in ICH Q9(R1) to help manufacturers identify, quantify, mitigate, and monitor quality risks throughout the product and process lifecycle:with every risk assessment stored as a retrievable, signed, timestamped record.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">What it does:</p>
                    <ul className="space-y-2">
                      {["Identify and document quality risks using FMEA, HACCP, fault tree, and cause-and-effect analysis", "Score risks on a configurable probability × severity × detectability matrix (RPN)", "Assign mitigation actions with owner, target date, and expected residual risk score", "Monitor residual risk and control effectiveness on a live QRM dashboard", "Generate ICH Q9-compliant risk assessment reports for regulatory filings"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Regulatory Compliance</p>
                    <p className="text-sm text-blue-900">ICH Q9(R1) 2023, ISO 14971, FDA Process Validation Guidance 2011, EU GMP Annex 20</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Why This Matters</p>
                    <p className="text-sm text-amber-900 leading-relaxed">A process risk identified post-market:after batches have shipped:costs vastly more than the same risk identified pre-production. You are looking at a batch recall investigation, root cause analysis across multiple lots, customer notifications, potential regulatory reporting, and a revalidation exercise. The same risk, identified during a pre-batch FMEA and mitigated with a control measure, costs an afternoon of structured assessment. The difference is whether the risk management programme was prospective or reactive.</p>
                  </div>
                </div>
                <div className="flex-1 lg:max-w-[520px]">
                  <div className="overflow-hidden">
                    <SecureImage src="/images/pharma-qms/cannypqms-risk-management-fishbone-analysis.png" alt="CannyPQMS Risk Management - ICH Q9 FMEA risk assessment and mitigation tracking" width={600} height={400} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* Module 10: NCR */}
            <div id="module-10" className="py-10 border-b border-gray-100 last:border-0">
              <div className="flex flex-col lg:flex-row-reverse gap-10 items-start">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                      <Policy className="text-amber-600" sx={{ fontSize: 26 }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Module 10 of 18</p>
                      <h3 className="text-xl font-bold text-gray-900">Non-Conformance Management (NCR)</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Provides a mandatory quality gate for every material, component, intermediate, and finished product that fails to meet its specification. Under FDA 21 CFR Part 211.165 and 211.192, OOS results must trigger a formal investigation, and no material or batch may be released without a complete, auditable disposition record.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">What it does:</p>
                    <ul className="space-y-2">
                      {["Log every non-conformance with mandatory reference to batch number, material code, and specification", "Route rejected material and batch disposition decisions through QA-approval workflow", "Track investigations with root cause analysis and automated alerts for overdue NCRs", "Record final disposition with e-signature of authorising QP or QA manager", "Link systemic or recurrent NCRs to the CAPA module for corrective action"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Regulatory Compliance</p>
                    <p className="text-sm text-blue-900">FDA 21 CFR Part 211.165, FDA 21 CFR Part 211.192, ISO 9001:2015 Section 8.7, ICH Q10</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Why This Matters</p>
                    <p className="text-sm text-amber-900 leading-relaxed">A non-conformance fixed on the production floor with no NCR raised means no root cause was documented, no CAPA was triggered, and no one was watching for recurrence. Eight months later the same issue returns:but now the investigation team has no prior history to reference, no corrective action to assess for effectiveness, and an inspector who will ask why the same problem occurred twice with no record of the first occurrence.</p>
                  </div>
                </div>
                <div className="flex-1 lg:max-w-[520px]">
                  <div className="overflow-hidden">
                    <SecureImage src="/images/pharma-qms/cannypqms-non-conformance-management-workflow.png" alt="CannyPQMS Non-Conformance Management - Material disposition and investigation workflow" width={600} height={400} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* Module 11: Calibration */}
            <div id="module-11" className="py-10 border-b border-gray-100 last:border-0">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center">
                      <PrecisionManufacturing className="text-cyan-600" sx={{ fontSize: 26 }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Module 11 of 18</p>
                      <h3 className="text-xl font-bold text-gray-900">Calibration Management</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Tracks the calibration status of every instrument, measurement device, and reference standard in the pharmaceutical manufacturing and QC environment:ensuring no measurement used to make a quality or release decision is generated by an instrument of unknown or expired calibration status.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">What it does:</p>
                    <ul className="space-y-2">
                      {["Maintain a complete calibration register for every instrument including HPLC, balances, and pH meters", "Schedule calibration tasks with configurable frequencies based on instrument criticality", "Send multi-stage automated alerts at 30, 15, and 7 days before calibration due dates", "Display a real-time calibration compliance dashboard with in-calibration / due-soon / overdue status", "Initiate out-of-tolerance investigation workflow when calibration result falls outside acceptance criteria"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Regulatory Compliance</p>
                    <p className="text-sm text-blue-900">ISO/IEC 17025, FDA 21 CFR Part 211.68, EU GMP Annex 15, CDSCO Schedule M</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Why This Matters</p>
                    <p className="text-sm text-amber-900 leading-relaxed">When an out-of-calibration instrument is discovered during an inspection, the question is not just "why did this happen":it is "which batches were released based on data generated by this instrument since the last verified calibration?" Every analytical result produced over that period is now under formal review, every batch that passed specification using that data is a potential recall candidate, and the investigation scope has just expanded to six months of production history.</p>
                  </div>
                </div>
                <div className="flex-1 lg:max-w-[520px]">
                  <div className="overflow-hidden">
                    <SecureImage src="/images/pharma-qms/cannypqms-calibration-management-schedule.png" alt="CannyPQMS Calibration Management - Instrument calibration schedule and compliance dashboard" width={600} height={400} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* Module 12: Equipment */}
            <div id="module-12" className="py-10 border-b border-gray-100 last:border-0">
              <div className="flex flex-col lg:flex-row-reverse gap-10 items-start">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">
                      <Build className="text-slate-600" sx={{ fontSize: 26 }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Module 12 of 18</p>
                      <h3 className="text-xl font-bold text-gray-900">Equipment / Asset Management</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Tracks the complete lifecycle of every pharmaceutical manufacturing and testing asset:from initial installation qualification through routine preventive maintenance, breakdown repair, and final decommissioning. Integrates directly with the Validation Management module to link every IQ/OQ/PQ record to the corresponding equipment asset record.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">What it does:</p>
                    <ul className="space-y-2">
                      {["Maintain a complete asset register with qualification status and current operational status", "Schedule and manage preventive maintenance (PM) activities with automatic work orders", "Log every breakdown event with downtime duration, repair performed, and root cause", "Link equipment qualification protocols (IQ/OQ/PQ) to each asset record", "Maintain a complete, searchable maintenance history for every asset"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Regulatory Compliance</p>
                    <p className="text-sm text-blue-900">FDA 21 CFR Part 211.67, EU GMP Chapter 3, GAMP 5, CDSCO Schedule M</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Why This Matters</p>
                    <p className="text-sm text-amber-900 leading-relaxed">An unplanned equipment breakdown during a batch run costs more than just the downtime hours:it costs the batch if contamination cannot be ruled out, it costs the investigation to determine whether any in-process results generated before the failure are valid, and it costs the requalification if the repair constitutes a change. A missed preventive maintenance window is a predictable event that became an unpredictable one. That is the real cost of an unmanaged maintenance schedule.</p>
                  </div>
                </div>
                <div className="flex-1 lg:max-w-[520px]">
                  <div className="overflow-hidden">
                    <SecureImage src="/images/pharma-qms/cannypqms-equipment-asset-management-lifecycle.png" alt="CannyPQMS Equipment Asset Management - Qualification status and maintenance history" width={600} height={400} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* Module 13: Validation */}
            <div id="module-13" className="py-10 border-b border-gray-100 last:border-0">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                      <VerifiedUser className="text-green-600" sx={{ fontSize: 26 }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Module 13 of 18</p>
                      <h3 className="text-xl font-bold text-gray-900">Validation Management</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Provides a structured, protocol-driven platform for managing every validation and qualification activity:including process validation, cleaning validation, equipment qualification (IQ/OQ/PQ), analytical method validation, and Computer System Validation (CSV) under GAMP 5. FDA&apos;s Process Validation Guidance (2011) defines validation as a three-stage lifecycle.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">What it does:</p>
                    <ul className="space-y-2">
                      {["Create, version-control, and route for approval all validation and qualification protocols", "Track validation execution with real-time progress and deviation logging during execution", "Manage Computer System Validation (CSV) activities in accordance with GAMP 5", "Generate validation summary reports compatible with FDA, EMA, and WHO filing requirements", "Display a validation status dashboard showing current qualification status for every process and system"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Regulatory Compliance</p>
                    <p className="text-sm text-blue-900">FDA Process Validation Guidance 2011, EU GMP Annex 15, GAMP 5, ICH Q2(R2) 2022</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Why This Matters</p>
                    <p className="text-sm text-amber-900 leading-relaxed">When a piece of equipment is changed:replaced, upgraded, or significantly repaired:without triggering a revalidation assessment, the validated state of every process that uses that equipment is broken from that moment forward. Batches manufactured after the change, under a validation that no longer covers the actual equipment state, cannot be defensibly released. The CannyPQMS Equipment and Validation modules are linked: an equipment change event automatically flags all associated validation records for impact review.</p>
                  </div>
                </div>
                <div className="flex-1 lg:max-w-[520px]">
                  <div className="overflow-hidden">
                    <SecureImage src="/images/pharma-qms/cannypqms-validation-management-iq-oq-pq.png" alt="CannyPQMS Validation Management - Process validation IQ OQ PQ lifecycle and qualification status" width={600} height={400} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* Module 14: Regulatory */}
            <div id="module-14" className="py-10 border-b border-gray-100 last:border-0">
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <Gavel className="text-blue-600" sx={{ fontSize: 26 }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Module 14 of 18</p>
                      <h3 className="text-xl font-bold text-gray-900">Regulatory Compliance Management</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Provides a centralised tracking system for every regulatory commitment, inspection finding, submission deadline, and correspondence across every market in which the pharmaceutical manufacturer operates simultaneously. For manufacturers across multiple regulatory jurisdictions, managing commitments in spreadsheets creates systemic risk of missed deadlines.
                  </p>
                  <div className="max-w-2xl mx-auto w-full">
                    <div className="overflow-hidden">
                      <SecureImage src="/images/pharma-qms/cannypqms-regulatory-compliance-inspection-readiness.png" alt="CannyPQMS Regulatory Compliance Management - Multi-jurisdiction FDA inspection readiness" width={600} height={400} className="w-full h-auto" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">What it does:</p>
                    <ul className="space-y-2">
                      {["Track regulatory commitments simultaneously across FDA, EMA, WHO, ICH, NAFDAC, and CDSCO", "Use built-in inspection readiness checklists to conduct pre-inspection gap assessments", "Log every regulatory commitment with configurable escalation alerts for approaching deadlines", "Track regulatory submission status, correspondence history, and regulatory authority responses", "Maintain an inspection history log with documented responses and CAPA linkages"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Regulatory Compliance</p>
                    <p className="text-sm text-blue-900">FDA 21 CFR (all applicable parts), EMA GMP Directive 2003/94/EC, WHO GMP, CDSCO Schedule M, NAFDAC Nigeria</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Why This Matters</p>
                    <p className="text-sm text-amber-900 leading-relaxed">A commitment made in a Form 483 response that is not implemented by the stated deadline escalates directly from an observation to a Warning Letter, and from a Warning Letter to an import alert.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 15: MRM */}
            <div id="module-15" className="py-10 border-b border-gray-100 last:border-0">
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center">
                      <Timeline className="text-violet-600" sx={{ fontSize: 26 }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Module 15 of 18</p>
                      <h3 className="text-xl font-bold text-gray-900">Management Review (MRM)</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Without a structured QMS, management review meetings become slide-deck presentations with no binding decisions and no follow-up mechanism:meeting minutes that record what was discussed but not what was decided, by whom, or by when. An inspector reviewing three years of management review records with no action items closed will cite this as evidence of a non-functioning quality system. CannyPQMS structures the periodic executive-level quality review required by ISO 9001 Clause 9.3 and ICH Q10 Section 3.5 into a data-driven process with traceable decisions, assigned actions, and verified outcomes.
                  </p>
                  <div className="max-w-2xl mx-auto w-full">
                    <div className="overflow-hidden">
                      <SecureImage src="/images/pharma-qms/cannypqms-management-review-quality-dashboard.png" alt="CannyPQMS Management Review Module - Live QMS KPI aggregation and decision tracking" width={600} height={400} className="w-full h-auto" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">What it does:</p>
                    <ul className="space-y-2">
                      {["Automatically pull live KPI data from all 18 QMS modules into a management review input screen", "Build structured management review agendas with pre-configured input categories", "Log management decisions, quality commitments, and action items within the meeting record", "Track status and closure of all management review action items across review cycles", "Generate formatted management review reports for regulatory inspection presentation"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Regulatory Compliance</p>
                    <p className="text-sm text-blue-900">ISO 9001:2015 Clause 9.3, ICH Q10 Section 3.5, EU GMP Chapter 1</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Why This Matters</p>
                    <p className="text-sm text-amber-900 leading-relaxed">An FDA or EMA inspector who finds management review minutes with no meaningful quality data and no action items will cite this as evidence of insufficient senior management engagement:a systemic finding affecting the entire QMS rating.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 16: Dashboard */}
            <div id="module-16" className="py-10 border-b border-gray-100 last:border-0">
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                      <Analytics className="text-emerald-600" sx={{ fontSize: 26 }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Module 16 of 18</p>
                      <h3 className="text-xl font-bold text-gray-900">Dashboard &amp; Reporting</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    During an unannounced inspection, a quality director needs to answer questions immediately: how many open CAPAs are overdue? When was the last internal audit conducted and what findings are still open? Which instruments have calibration expiring this month? If that information requires pulling files from three systems and a spreadsheet, the answer comes too late and looks too fragile. CannyPQMS pulls live data from all 18 QMS modules into a single, role-configurable compliance and performance view:so the answers are always current to the minute, in one place.
                  </p>
                  <div className="max-w-2xl mx-auto w-full">
                    <div className="overflow-hidden">
                      <SecureImage src="/images/pharma-qms/cannypqms-quality-management-kpi-dashboard.png" alt="CannyPQMS Dashboard and Reporting - Real-time quality KPIs across all 18 modules" width={600} height={400} className="w-full h-auto" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">What it does:</p>
                    <ul className="space-y-2">
                      {["Display real-time quality KPIs from all 18 QMS modules on a single configurable dashboard", "Show CAPA ageing by time buckets (0–30, 31–60, 61–90, 90+ days) across the open CAPA portfolio", "Generate compliance reports pre-formatted for FDA, EMA, WHO, and CDSCO inspection submission", "Provide trend analysis for deviations, NCRs, complaints, and audit findings", "Export all dashboard views as audit-ready PDFs with generation timestamp and user identity"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Why This Matters</p>
                    <p className="text-sm text-amber-900 leading-relaxed">A quality director who can answer every inspector question in real time from a live compliance dashboard demonstrates precisely the quality culture that regulators are looking for. Inspection readiness is a continuous state, not a pre-inspection sprint.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 17: eSign */}
            <div id="module-17" className="py-10 border-b border-gray-100 last:border-0">
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <Key className="text-blue-600" sx={{ fontSize: 26 }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Module 17 of 18</p>
                      <h3 className="text-xl font-bold text-gray-900">Electronic Signature (e-Sign)</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    A non-compliant electronic signature:one that lacks two-component authentication, does not display the signatory's printed name and the meaning of the signature act, or uses a shared login credential:fails every Part 11 test. Those quality records carry no more legal weight than an unsigned document, and an inspector who identifies the deficiency can challenge the integrity of every record signed that way. CannyPQMS provides fully compliant 21 CFR Part 11 electronic signatures across every approval, review, and quality record closure workflow in all 18 modules:replacing paper signatures while meeting or exceeding their regulatory evidential value.
                  </p>
                  <div className="max-w-2xl mx-auto w-full">
                    <div className="overflow-hidden">
                      <SecureImage src="/images/pharma-qms/cannypqms-electronic-signature-21-cfr-part-11.png" alt="CannyPQMS Electronic Signature - 21 CFR Part 11 compliant e-signature with audit trail" width={600} height={400} className="w-full h-auto" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">What it does:</p>
                    <ul className="space-y-2">
                      {["Apply 21 CFR Part 11 compliant e-signatures on every quality record:SOPs, CAPA, deviations, validation, batch records", "Require two-component authentication (unique user ID plus password) before any signature is applied", "Log every signature event with printed name, date/time to the second, IP address, and terminal identifier", "Display meaning of each signature (Reviewed / Approved / Verified / Released) on the signed record", "Enforce signature sequence rules:a record cannot be approved before reviewed, or released before approved"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Regulatory Compliance</p>
                    <p className="text-sm text-blue-900">FDA 21 CFR Part 11, EU GMP Annex 11 Section 12, CDSCO Schedule M, NAFDAC Nigeria GMP Guidelines</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Why This Matters</p>
                    <p className="text-sm text-amber-900 leading-relaxed">Electronic signatures that do not satisfy all requirements of 21 CFR Part 11 are not legally equivalent to handwritten signatures:meaning quality records are technically unsigned from a regulatory standpoint. Non-compliant e-signatures can invalidate the entire electronic quality record system.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 18: Collaboration */}
            <div id="module-18" className="py-10 border-b border-gray-100 last:border-0">
              <div className="flex flex-col gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center">
                      <AccountTree className="text-pink-600" sx={{ fontSize: 26 }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Module 18 of 18</p>
                      <h3 className="text-xl font-bold text-gray-900">Collaboration Tool</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    When approvals happen outside the QMS:in email threads, over the phone, in verbal team meetings:those decisions have no tamper-evident record, no timestamp, and no named signatory. During an inspection, the approver may not remember the decision, the email may not be findable, and the record will not satisfy a 21 CFR Part 11 review. CannyPQMS gives quality teams a visual, drag-and-drop workflow builder to design, deploy, and modify custom multi-stakeholder approval and review workflows for any recurring quality process:keeping every approval inside the QMS, where it is attributable, reviewable, and permanent.
                  </p>
                  <div className="max-w-2xl mx-auto w-full">
                    <div className="overflow-hidden">
                      <SecureImage src="/images/pharma-qms/cannypqms-quality-management-kpi-dashboard.png" alt="CannyPQMS Collaboration Tool - Quality workflow builder with multi-stakeholder approval routing" width={600} height={400} className="w-full h-auto" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">What it does:</p>
                    <ul className="space-y-2">
                      {["Build fully custom quality approval workflows visually with drag-and-drop interface", "Route workflow tasks to QA, production, regulatory affairs, validation, and executive management", "Send real-time in-system and email notifications to every workflow participant", "Track real-time approval status with complete, timestamped traceable record of every action", "Create and save reusable workflow templates for recurring quality events"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Why This Matters</p>
                    <p className="text-sm text-amber-900 leading-relaxed">A QA approval that was sent as an email reply and saved in a personal inbox cannot be produced during an inspection. The approver may have left the company. The email thread may be buried or deleted. The record does not carry a timestamp that a regulator will accept as tamper-evident, and it cannot demonstrate that the right person with the right authority approved the right version of the right document. Any quality decision made outside the QMS is a decision the QMS cannot stand behind.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Mid-page CTA + Electronic QMS section */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Replace Spreadsheets with an Electronic Quality Management System?
              </h2>
              <p className="text-white/85 text-lg mb-4 leading-relaxed">
                CannyPQMS is a purpose-built <strong className="text-white">electronic quality management system</strong> for pharma:not a generic ERP module or an ISO-only tool adapted for GxP. Every workflow, every record, and every e-signature is designed around the specific documentation and traceability requirements of FDA, EMA, WHO, CDSCO, and NAFDAC inspections.
              </p>
              <p className="text-white/80 mb-8 leading-relaxed">
                No cloud dependency. No per-user SaaS pricing. On-premise deployment means your quality data stays inside your facility:exactly what regulators expect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Request a Demo
                </Link>
                <a
                  href="tel:+919361801926"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Compliance Table */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Which Regulatory Standards Does CannyPQMS Support?
            </h2>

            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left px-4 py-3 font-bold text-gray-900 border-b border-gray-200">Regulatory Body</th>
                    <th className="text-left px-4 py-3 font-bold text-gray-900 border-b border-gray-200">Standard</th>
                    <th className="text-left px-4 py-3 font-bold text-gray-900 border-b border-gray-200">What CannyPQMS Covers</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { body: "US FDA", standard: "21 CFR Part 11", coverage: "Electronic records, e-signatures, audit trails" },
                    { body: "US FDA", standard: "21 CFR Part 211", coverage: "Current GMP for finished pharmaceuticals" },
                    { body: "US FDA", standard: "21 CFR Part 820", coverage: "Quality System Regulation for medical devices" },
                    { body: "EMA", standard: "EU GMP Annex 11", coverage: "Computerised systems in regulated environments" },
                    { body: "EMA", standard: "EU GMP Chapter 1", coverage: "Pharmaceutical quality system" },
                    { body: "WHO", standard: "WHO GMP TRS 986/1025", coverage: "Good Manufacturing Practice for global export" },
                    { body: "ICH", standard: "ICH Q9(R1) 2023", coverage: "Quality Risk Management:FMEA, HACCP" },
                    { body: "ICH", standard: "ICH Q10", coverage: "Pharmaceutical Quality System:lifecycle approach" },
                    { body: "ICH", standard: "ICH Q2(R2) 2022", coverage: "Analytical procedure validation" },
                    { body: "CDSCO", standard: "Schedule M (revised)", coverage: "Indian GMP requirements:revised 2023" },
                    { body: "NAFDAC", standard: "Nigeria GMP Guidelines", coverage: "West Africa and Nigerian regulatory compliance" },
                    { body: "ISO", standard: "ISO 9001:2015", coverage: "Quality Management System certification" },
                    { body: "ISO", standard: "ISO 13485", coverage: "Medical devices quality management system" },
                    { body: "ISO/IEC", standard: "ISO 17025", coverage: "Calibration and testing laboratory requirements" },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-100">{row.body}</td>
                      <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.standard}</td>
                      <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{row.coverage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <LocalPharmacy className="text-orange-600" sx={{ fontSize: 24 }} />
                  <h3 className="text-lg font-bold text-gray-900">For Indian Pharmaceutical Manufacturers</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  India is the world&apos;s largest producer of generic medicines, supplying approximately 40% of generic drugs consumed in the USA and 25% of all medicines in the UK. Indian pharmaceutical manufacturers face a demanding dual-regulatory environment: satisfying CDSCO Schedule M (significantly revised and strengthened in 2023) for domestic market approval while simultaneously maintaining compliance with FDA 21 CFR, WHO GMP, and EMA GMP for export markets. CannyPQMS is deployed by pharmaceutical manufacturers in India and is aligned with the revised CDSCO Schedule M requirements. For companies seeking WHO-GMP certification for export to Nigeria, other African markets, and the USA, CannyPQMS provides the documentation infrastructure, audit trail depth, and inspection readiness tools required to satisfy WHO-GMP assessors.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Business className="text-green-600" sx={{ fontSize: 24 }} />
                  <h3 className="text-lg font-bold text-gray-900">For Nigerian &amp; African Pharmaceutical Manufacturers</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  NAFDAC (the National Agency for Food and Drug Administration and Control) regulates pharmaceutical manufacturing in Nigeria. NAFDAC GMP requirements are aligned with WHO GMP guidelines, meaning manufacturers operating under WHO-GMP documentation frameworks are broadly positioned to satisfy NAFDAC inspection requirements. For Nigerian pharmaceutical manufacturers, CannyPQMS provides particular value in tracking NAFDAC commitments alongside WHO GMP requirements, providing the controlled SOP infrastructure that NAFDAC inspectors examine first, and delivering the documented CAPA and Deviation evidence that demonstrates to NAFDAC assessors the manufacturer&apos;s commitment to continuous improvement. South African and Nigerian manufacturers handling patient-level data must comply with POPIA (2021) and Nigeria&apos;s NDPR (2019):CannyPQMS&apos;s on-premise architecture directly supports these data residency requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: 21 CFR Part 11 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
              How Does CannyPQMS Achieve FDA 21 CFR Part 11 Compliance?
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
              FDA 21 CFR Part 11 establishes the technical and procedural criteria under which the FDA considers electronic records and electronic signatures to be trustworthy, reliable, and equivalent to paper records. Meeting Part 11 requires both technical system controls and procedural safeguards. The following table maps each applicable Part 11 requirement to the specific CannyPQMS implementation.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left px-4 py-3 font-bold text-gray-900 border-b border-gray-200 w-1/2">21 CFR Part 11 Requirement</th>
                    <th className="text-left px-4 py-3 font-bold text-gray-900 border-b border-gray-200 w-1/2">CannyPQMS Implementation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      req: "11.10(a):Validation of systems to ensure accuracy, reliability, consistent intended performance, and the ability to discern invalid or altered records",
                      impl: "Validation Management module manages IQ/OQ/PQ for CannyPQMS itself; full CSV conducted under GAMP 5 methodology"
                    },
                    {
                      req: "11.10(b):The ability to generate accurate and complete copies of records in both human readable and electronic form for inspection, review, and copying by the agency",
                      impl: "All records exportable as PDF with complete metadata, generation timestamp, and user identity captured"
                    },
                    {
                      req: "11.10(e):Use of secure, computer-generated, time-stamped audit trails",
                      impl: "Every record action logged with user ID, date/time to the second, IP address, action type, and before/after data state"
                    },
                    {
                      req: "11.10(g):Use of authority checks to ensure that only authorised individuals can use the system, electronically sign a record, access the operation or computer system input or output device",
                      impl: "Role-based access control; users can only perform functions within their configured role; every role and permission change logged"
                    },
                    {
                      req: "11.50:Signature manifestations on electronic records",
                      impl: "e-Signature displays printed name of signatory, date and time of signing, and the meaning of the signature act on every signed record"
                    },
                    {
                      req: "11.100:General requirements for electronic signatures:each electronic signature shall be unique to one individual and shall not be reused by, or reassigned to, anyone else",
                      impl: "Each user has a unique, non-reassignable user ID; system enforces uniqueness and prevents credential sharing"
                    },
                    {
                      req: "11.200:Electronic signature components and controls:electronic signatures shall employ at least two distinct identification components such as an identification code and password",
                      impl: "Two-component authentication (unique user ID plus password) required before any electronic signature can be applied; failed authentication attempts logged and accounts locked after configurable failed attempt threshold"
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-4 text-gray-700 border-b border-gray-100 align-top font-medium">{row.req}</td>
                      <td className="px-4 py-4 text-gray-600 border-b border-gray-100 align-top">{row.impl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 7: Industries */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">
              Which Regulated Industries Does CannyPQMS Serve?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <LocalPharmacy className="text-blue-600" sx={{ fontSize: 28 }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Pharmaceutical Manufacturers</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Bulk drug and finished formulation manufacturers operating under CDSCO Schedule M, WHO-GMP, or FDA 21 CFR Part 211 approval. CAPA management, deviation tracking, document control, change control, and validation management are the core processes these manufacturers need to maintain continuous regulatory approval status across all applicable markets. CannyPQMS provides all 18 of these processes in a single, audit trail-integrated system purpose-built for pharmaceutical GMP environments.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Biotech className="text-purple-600" sx={{ fontSize: 28 }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Biotech &amp; Biopharmaceutical Companies</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Biopharmaceutical developers and manufacturers managing complex biological processes:including monoclonal antibody manufacturing, cell and gene therapy production, and vaccine manufacture:where risk management (ICH Q9), robust CAPA systems, and thorough validation (IQ/OQ/PQ) are essential for clinical and commercial manufacturing compliance. The ICH Q9 Risk Management and Validation Management modules are particularly relevant for biotech manufacturers.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MedicalServices className="text-green-600" sx={{ fontSize: 28 }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Medical Device Manufacturers</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Companies manufacturing Class II and Class III medical devices under ISO 13485 and FDA 21 CFR Part 820 requiring CAPA management, non-conformance management, complaint handling, calibration management, and supplier quality as mandatory QMS elements. CannyPQMS&apos;s CAPA and NCR modules are specifically designed to satisfy the requirements of FDA 21 CFR Part 820.100 and ISO 13485 Section 8.5.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Science className="text-amber-600" sx={{ fontSize: 28 }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Contract Research Organisations (CROs)</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  CROs managing GCP-critical documentation, SOP training compliance, supplier quality assurance, and audit management across multiple concurrent client projects require quality system infrastructure that can simultaneously manage multiple project-specific quality requirements without creating data silos or traceable record gaps. CannyPQMS&apos;s Document Management and Training modules are particularly valuable for CROs managing multi-sponsor quality programmes.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PrecisionManufacturing className="text-orange-600" sx={{ fontSize: 28 }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">API Manufacturers</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  API producers:including those manufacturing under ICH Q7 (Good Manufacturing Practice Guide for Active Pharmaceutical Ingredients):managing raw material NCRs, in-process deviation management, change control for synthetic process steps, and supplier qualification for reagents and starting materials. API manufacturers exporting to FDA-regulated markets must maintain ICH Q7-compliant quality systems, and CannyPQMS provides the QMS infrastructure to satisfy ICH Q7 documentation and control requirements.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <ProductFAQ
          items={[
            {
              question: "What is CannyPQMS and how is it different from generic QMS software?",
              answer: "CannyPQMS is a pharmaceutical-specific quality management system built exclusively for GxP-regulated industries:pharmaceutical manufacturers, biotech companies, medical device manufacturers, contract research organisations (CROs), and API producers. The fundamental difference between CannyPQMS and generic QMS software lies in design intent and regulatory depth. Generic QMS tools are designed for ISO 9001 compliance across all industries, then adapted for pharmaceutical use. CannyPQMS is designed from first principles to satisfy FDA 21 CFR Part 11, ICH Q9, EMA GMP Annex 11, and WHO GMP requirements:meaning every module generates a regulatory-grade audit trail, every approval workflow enforces the multi-level, e-signed approval chains required by GxP, and every module is integrated with every other module. In practice, a deviation automatically triggers a CAPA, which links back to the originating audit finding or batch record:and every step of that chain is visible in a single activity log query."
            },
            {
              question: "Does CannyPQMS satisfy FDA 21 CFR Part 11 for electronic records and signatures?",
              answer: "Yes. CannyPQMS is designed to satisfy all applicable requirements of FDA 21 CFR Part 11. Specifically, CannyPQMS implements system validation (Part 11.10(a)) through Computer System Validation conducted under GAMP 5 methodology; generates secure, computer-generated, time-stamped audit trails (Part 11.10(e)) for every record action; enforces authority checks and role-based access (Part 11.10(g)); displays complete signature manifestation on every signed record (Part 11.50); ensures each user has a unique, non-reassignable user ID (Part 11.100); and requires two-component authentication:unique user ID plus password:before any electronic signature can be applied (Part 11.200). The Validation Management module manages the IQ/OQ/PQ documentation for the CannyPQMS system itself, ensuring the system's own validation lifecycle is conducted in compliance with both GAMP 5 and Part 11 requirements."
            },
            {
              question: "Can CannyPQMS manage CAPA from multiple quality event sources simultaneously?",
              answer: "Yes. The CAPA module is designed to accept CAPA initiation from every quality event source in the QMS:including deviations (manufacturing process, laboratory, environmental monitoring), audit findings (internal self-inspection, supplier audit, regulatory mock audit), customer complaints (product quality, adverse events, labelling), non-conformance reports (materials, intermediates, finished product), supplier quality failures, and management review action decisions. When a CAPA is initiated from any of these sources, the system automatically captures the bidirectional link to the originating event. The CAPA system tracks the complete action plan with owner, action type, due date, and evidence of completion for every action item:and mandates a documented effectiveness verification check with objective evidence before the CAPA can be formally closed."
            },
            {
              question: "Is CannyPQMS suitable for Indian pharmaceutical manufacturers seeking WHO-GMP certification?",
              answer: "Yes. CannyPQMS is deployed by pharmaceutical manufacturers across India and is aligned with both the revised CDSCO Schedule M (revised 2023) and WHO-GMP requirements as published in WHO Technical Report Series publications including TRS 986 and TRS 1025. For companies seeking WHO-GMP certification in support of export to Nigeria, other African markets, and the USA, CannyPQMS provides the complete quality documentation infrastructure, audit trail depth, and inspection readiness capability that WHO-GMP assessors examine during facility inspections. The Regulatory Compliance module tracks WHO-GMP commitments, inspection findings, and corrective action deadlines in a structured, auditable format ready for regulatory submission."
            },
            {
              question: "How long does a CannyPQMS implementation take, and what does the implementation include?",
              answer: "A standard CannyPQMS implementation:including system installation and configuration on the client's on-premise infrastructure, user role and permission setup, document template configuration in the DMS module, SOP and quality record migration from existing paper or electronic systems, training matrix setup, and Computer System Validation (CSV) conducted under GAMP 5 methodology:typically takes 8 to 12 weeks depending on the number of modules deployed, the complexity of existing quality workflows, and the volume of existing documents and records to migrate. The implementation is conducted by CannyMinds implementation consultants with pharmaceutical GxP experience, ensuring the system configuration reflects regulatory requirements rather than generic software defaults."
            },
            {
              question: "Does CannyPQMS integrate with the CannyeBMR Electronic Batch Manufacturing Records system?",
              answer: "Yes. CannyPQMS integrates bidirectionally with CannyeBMR (Electronic Batch Manufacturing Records). Batch deviations captured and logged in CannyeBMR during batch execution automatically initiate corresponding deviation records in CannyPQMS:eliminating the risk of a batch-level deviation being documented in the BMR but not formally tracked in the QMS. Conversely, batch release approval workflows in CannyeBMR can be configured to query the open CAPA and deviation status for the relevant batch from CannyPQMS:preventing batch release authorisation when any unresolved quality events linked to that batch remain open in the QMS."
            },
            {
              question: "Is CannyPQMS deployed on-premise or in the cloud, and why does this matter for pharmaceutical manufacturers?",
              answer: "CannyPQMS is deployed exclusively on-premise, within the pharmaceutical manufacturer's own IT infrastructure. This is a deliberate architectural decision based on the specific requirements of GxP-regulated pharmaceutical quality data. For FDA-regulated manufacturers, quality records are subject to inspection under 21 CFR Part 211.180:meaning all records must be within the manufacturer's own controlled environment. For manufacturers operating in jurisdictions with data sovereignty requirements:including India's Digital Personal Data Protection Act (DPDPA) 2023, South Africa's POPIA 2021, and Nigeria's NDPR 2019:on-premise deployment ensures patient and quality data never leaves the manufacturer's own national infrastructure."
            },
            {
              question: "Which regulatory markets does CannyPQMS support for multi-market pharmaceutical manufacturers?",
              answer: "CannyPQMS supports simultaneous multi-market regulatory compliance tracking across FDA 21 CFR (all applicable parts), EMA GMP Directive 2003/94/EC, WHO GMP TRS 986 and 1025, ICH Q9(R1) and Q10, CDSCO India Schedule M (revised 2023), and NAFDAC Nigeria GMP Guidelines. For manufacturers exporting to multiple markets simultaneously:for example, an Indian API manufacturer supplying active ingredients to a US generic company and a Nigerian finished-dose producer:CannyPQMS provides a single compliance dashboard that tracks all applicable regulatory commitments, inspection findings, and submission deadlines across every jurisdiction without requiring separate quality systems for each market."
            }
          ]}
          title="Frequently Asked Questions about CannyPQMS Pharmaceutical Quality Management System"
          description="Detailed answers to technical and operational questions about CannyPQMS pharma QMS software, FDA 21 CFR Part 11 compliance, and GxP implementation."
          id="pqms-faq"
        />

        {/* Author Bio Section */}
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/about/Udayakumar-Murugan-Director.png"
                    alt="Udayakumar Murugan - Chief Executive Officer at CannyMinds Technology Solutions"
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">Udayakumar Murugan</h3>
                    <a
                      href="https://in.linkedin.com/in/udayakumar-murugan-732b3864"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0a66c2] hover:text-[#004182] transition-colors"
                      aria-label="Udayakumar Murugan's LinkedIn Profile"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-primary font-semibold mb-3">Chief Executive Officer | B.E. (Electrical), PSG</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Udayakumar Murugan is the Chief Executive Officer of CannyMinds Technology Solutions, bringing over 20 years of hands-on experience in enterprise software, quality management systems, and compliance technology. He has led the successful deployment of pharmaceutical QMS, document management, and records management solutions for clients across <Link href="/solutions/pharmaceutical" className="text-primary hover:underline font-semibold">pharmaceutical manufacturing</Link>, biotech, medical devices, and <Link href="/solutions/manufacturing" className="text-primary hover:underline font-semibold">regulated manufacturing</Link> sectors:ensuring 100% audit readiness and regulatory compliance across FDA, EMA, WHO, and CDSCO inspections.
                  </p>
                  <div>
                    <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Professional Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs border border-blue-100 font-medium">ISO 27001 Information Security</span>
                      <span className="px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-xs border border-red-100 font-medium">FDA 21 CFR Part 11 Compliance</span>
                      <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-xs border border-purple-100 font-medium">ICH Q9 Risk Management</span>
                      <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-xs border border-green-100 font-medium">GxP Compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="get-started" className="py-12 bg-gradient-to-r from-primary to-blue-700 scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Pass Your Next FDA or WHO-GMP Inspection?
                </h2>
                <p className="text-blue-100 leading-relaxed mb-4">
                  CannyPQMS gives your pharmaceutical quality team 18 fully integrated QMS modules, complete FDA 21 CFR Part 11 compliance, Africa and India regulatory depth including NAFDAC and CDSCO Schedule M support, and a real-time compliance dashboard that makes audit readiness your default operational state:not a crisis response mounted in the weeks before an inspector arrives.
                </p>
                <p className="text-blue-100 leading-relaxed text-sm">
                  Every quality event is documented. Every CAPA is linked to its root cause. Every deviation is investigated. Every SOP version is controlled. Every instrument is calibrated. Every supplier is qualified. Every management review is recorded.
                </p>
                <p className="text-white/80 text-sm mt-4">
                  Join pharmaceutical manufacturers across India, Nigeria, and the USA who have deployed CannyPQMS to pass FDA inspections, achieve WHO-GMP certification, and eliminate critical audit findings.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-start">
                <Link
                  href="/contact"
                  className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
                >
                  Request Demo <ArrowForward sx={{ fontSize: 20 }} />
                </Link>
                <Link
                  href="tel:+919361801926"
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone sx={{ fontSize: 20 }} /> Talk to Expert
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
              Related Products &amp; Solutions
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              CannyPQMS works seamlessly with our other enterprise solutions for pharmaceutical manufacturers.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Assignment sx={{ fontSize: 22 }} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">CannyeBMR</h3>
                    <p className="text-xs text-gray-500">Electronic Batch Manufacturing Records</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Bidirectional integration with CannyPQMS. Batch deviations in eBMR automatically create deviation records in the QMS.
                </p>
                <Link href="/product/ebmr" className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn about CannyeBMR <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <DocumentScanner sx={{ fontSize: 22 }} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">CannyECM</h3>
                    <p className="text-xs text-gray-500">Enterprise Content Management</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Digital document management with workflow automation, OCR, and FDA 21 CFR Part 11 compliance for unstructured content.
                </p>
                <Link href="/product/enterprise-content-management" className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn about CannyECM <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Inventory sx={{ fontSize: 22 }} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">CannyRMS</h3>
                    <p className="text-xs text-gray-500">Physical Records Management</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Enterprise physical records management with barcode tracking, audit trails, and 30-second document retrieval for pharma batch records.
                </p>
                <Link href="/product/physical-records-management" className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn about CannyRMS <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <LocalPharmacy sx={{ fontSize: 22 }} className="text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Pharma Solutions</h3>
                    <p className="text-xs text-gray-500">Pharmaceutical Solutions Hub</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Explore CannyMinds&apos; complete suite of technology solutions designed for pharmaceutical and life sciences manufacturers.
                </p>
                <Link href="/solutions/pharmaceutical" className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Explore Pharma Solutions <ArrowForward sx={{ fontSize: 16 }} />
                </Link>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
}
