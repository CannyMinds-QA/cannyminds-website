import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SecureImage from "@/components/ui/SecureImage";
import SocialShare from "@/components/ui/SocialShare";
import {
  CheckCircle as CheckIcon,
  Star as StarIcon,
  Scanner as ScannerIcon,
  Security as SecurityIcon,
  AutoFixHigh as EnhanceIcon,
  QrCodeScanner as BarcodeIcon,
  FactCheck as QualityIcon,
  Assessment as ReportIcon,
  CloudUpload as CloudIcon,
  ArrowForward as ArrowIcon,
  Description as DocumentIcon,
  Image as ImageIcon,
  Compress as CompressIcon,
  TextFields as OCRIcon,
  Verified as VerifiedIcon,
  RateReview as ReviewIcon,
} from '@mui/icons-material';
import FAQ from "@/components/sections/FAQ";

// SEO Metadata
export const metadata: Metadata = {
  title: "CannyScan - Document Digitization & Scanning Solution | OCR & Barcode Extraction",
  description: "Professional document digitization with image cleansing, OCR extraction, barcode reading, auto-cropping, and quality control workflows. Export to DMS with audit reports.",
  keywords: [
    "CannyScan",
    "document digitization",
    "document scanning software",
    "OCR extraction",
    "barcode extraction",
    "image cleansing",
    "auto crop scanning",
    "punch hole removal",
    "document quality control",
    "scanning workflow",
    "digitization solution",
    "DMS integration"
  ],
  authors: [{ name: "CannyMinds Technology Solutions" }],
  openGraph: {
    title: "CannyScan - Document Digitization & Scanning Solution",
    description: "Professional document digitization with image cleansing, OCR extraction, barcode reading, and quality control workflows.",
    type: "website",
    siteName: 'CannyMinds',
    locale: 'en_US',
    url: "https://www.cannymindstech.com/product/scanning-solution",
    images: [
      {
        url: "https://www.cannymindstech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CannyScan Document Digitization Solution",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "CannyScan - Document Digitization & Scanning Solution",
    description: "Professional document digitization with image cleansing, OCR extraction, barcode reading, and quality control workflows.",
    images: ['https://www.cannymindstech.com/og-image.jpg'],
  },
  alternates: {
    canonical: "https://www.cannymindstech.com/product/scanning-solution",
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
          "item": "https://www.cannymindstech.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://www.cannymindstech.com/#products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "CannyScan - Document Digitization"
        }
      ]
    },
    {
      "@type": "SoftwareApplication",
      "name": "CannyScan",
      "applicationCategory": "BusinessApplication",
      "description": "Document digitization solution with image cleansing, OCR extraction, barcode reading, and quality control",
      "operatingSystem": "Web, Windows",
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
          "name": "What is CannyScan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CannyScan is a professional document digitization solution that provides image enhancement, OCR extraction, barcode reading, quality control workflows, and comprehensive reporting for converting paper documents into searchable digital assets."
          }
        },
        {
          "@type": "Question",
          "name": "What features does CannyScan offer for image enhancement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CannyScan provides image cleansing with auto crop, punch hole removal, edge deduction, automatic document separation with blank page detection, auto file name creation, and image compression for optimized storage."
          }
        },
        {
          "@type": "Question",
          "name": "Does CannyScan support OCR and barcode extraction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. CannyScan includes barcode extraction, OCR (Optical Character Recognition) extraction, and data validation capabilities to convert scanned documents into searchable, indexed digital files."
          }
        },
        {
          "@type": "Question",
          "name": "How does CannyScan handle quality control?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CannyScan offers manual and automatic verification of information and documents, review and comments functionality, and approve-reject workflows to ensure scanning quality meets organizational standards."
          }
        }
      ]
    }
  ]
};

export default function CannyScanProductPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />


      <div className="min-h-screen bg-white">

        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b border-gray-200 py-4 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm overflow-x-auto">
              <li><Link href="/" className="text-purple-600 hover:text-purple-800 whitespace-nowrap">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/#products" className="text-purple-600 hover:text-purple-800 whitespace-nowrap">Products</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600 font-medium truncate">CannyScan - Document Digitization</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">

              <div>
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                  <ScannerIcon sx={{ fontSize: 16 }} />
                  Document Digitization Solution
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 leading-tight">
                  <span className="text-purple-600">CannyScan</span> - Complete Document Digitization
                </h1>

                <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                  Professional document scanning with <strong>image cleansing, OCR extraction, barcode reading</strong>,
                  and quality control workflows. Transform paper documents into searchable digital assets with
                  comprehensive audit trails and DMS integration.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Link
                    href="#get-started"
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 text-sm"
                  >
                    Request Demo
                    <ArrowIcon sx={{ fontSize: 18 }} />
                  </Link>
                  <Link
                    href="#features"
                    className="bg-white text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all inline-flex items-center justify-center gap-2 text-sm"
                  >
                    Explore Features
                    <ScannerIcon sx={{ fontSize: 18 }} />
                  </Link>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap mb-4">
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} /> Image Enhancement</span>
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} /> OCR & Barcode</span>
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} /> Quality Control</span>
                </div>

                {/* Social Share */}
                <div className="flex items-center gap-3">
                  <SocialShare
                    title="CannyScan - Document Digitization Solution"
                    description="Professional document digitization with image cleansing, OCR extraction, barcode reading, and quality control workflows."
                  />
                  <span className="text-xs text-gray-500">Share this product</span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative flex justify-center">
                <SecureImage
                  src="/images/products/cannyscan2.png"
                  alt="CannyScan Document Digitization Process Flow"
                  width={600}
                  height={400}
                  className="rounded-2xl select-none"
                  priority
                />
              </div>

            </div>
          </div>
        </section>

        {/* Core Features Stats */}
        <section className="py-12 bg-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center text-white">
              {[
                { label: "Enhance", icon: <EnhanceIcon sx={{ fontSize: 32 }} />, desc: "Image Cleansing" },
                { label: "Extract", icon: <BarcodeIcon sx={{ fontSize: 32 }} />, desc: "OCR & Barcode" },
                { label: "Quality Check", icon: <QualityIcon sx={{ fontSize: 32 }} />, desc: "Verify & Approve" },
                { label: "Report", icon: <ReportIcon sx={{ fontSize: 32 }} />, desc: "Audit Trails" },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="mb-2 text-white/90">{stat.icon}</div>
                  <div className="text-lg font-bold">{stat.label}</div>
                  <div className="text-sm text-white/80">{stat.desc}</div>
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
                  { title: "What is CannyScan?", href: "#what-is" },
                  { title: "Enhance Features", href: "#enhance" },
                  { title: "Extract Capabilities", href: "#extract" },
                  { title: "Quality Check Workflow", href: "#quality" },
                  { title: "Reporting & Audit", href: "#reporting" },
                  { title: "Process Flow", href: "#process" },
                  { title: "Integration with CannyECM", href: "#integration" },
                  { title: "Frequently Asked Questions", href: "#faq" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-3 text-purple-600 hover:text-purple-800 hover:bg-purple-50 p-3 rounded-lg transition-all group"
                  >
                    <ArrowIcon className="text-purple-600 group-hover:translate-x-1 transition-transform" sx={{ fontSize: 20 }} />
                    <span className="font-medium">{item.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* What is CannyScan */}
          <section id="what-is" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              CannyScan - Features
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>CannyScan</strong> is a comprehensive document digitization solution designed to transform
                paper documents into high-quality, searchable digital assets. With advanced image enhancement,
                OCR and barcode extraction, quality control workflows, and comprehensive reporting, CannyScan
                ensures accurate, efficient, and auditable document digitization.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-8">
                <p className="font-semibold text-secondary mb-2">CannyScan Core Capabilities:</p>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div className="flex items-center gap-2">
                    <EnhanceIcon sx={{ fontSize: 20, color: '#9333ea' }} />
                    <span><strong>Enhance:</strong> Image cleansing & optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarcodeIcon sx={{ fontSize: 20, color: '#9333ea' }} />
                    <span><strong>Extract:</strong> OCR & barcode data capture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <QualityIcon sx={{ fontSize: 20, color: '#9333ea' }} />
                    <span><strong>Quality Check:</strong> Verify & approve workflow</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ReportIcon sx={{ fontSize: 20, color: '#9333ea' }} />
                    <span><strong>Reporting:</strong> Audit trails & analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Features Grid */}
          <section id="features" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              CannyScan Feature Categories
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Enhance */}
              <div id="enhance" className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                    <EnhanceIcon sx={{ fontSize: 32, color: '#9333ea' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary">Enhance</h3>
                    <p className="text-purple-600 font-medium">Image Cleansing & Optimization</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  Advanced image processing to ensure high-quality, clean, and optimized scanned documents.
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-purple-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <ImageIcon sx={{ fontSize: 24, color: '#9333ea' }} className="mt-0.5" />
                      <div>
                        <h4 className="font-bold text-secondary">Image Cleansing</h4>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li className="flex items-center gap-2">
                            <CheckIcon sx={{ fontSize: 14, color: '#25d366' }} />
                            <span>Auto Crop</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckIcon sx={{ fontSize: 14, color: '#25d366' }} />
                            <span>Punch Hole Removal</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckIcon sx={{ fontSize: 14, color: '#25d366' }} />
                            <span>Edge Deduction</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-purple-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <DocumentIcon sx={{ fontSize: 24, color: '#9333ea' }} className="mt-0.5" />
                      <div>
                        <h4 className="font-bold text-secondary">Automatic Document Separation</h4>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li className="flex items-center gap-2">
                            <CheckIcon sx={{ fontSize: 14, color: '#25d366' }} />
                            <span>Blank Page Detection</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckIcon sx={{ fontSize: 14, color: '#25d366' }} />
                            <span>Auto File Name Creation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-purple-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CompressIcon sx={{ fontSize: 24, color: '#9333ea' }} className="mt-0.5" />
                      <div>
                        <h4 className="font-bold text-secondary">Image Compression</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Optimized file sizes without quality loss for efficient storage
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extract */}
              <div id="extract" className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BarcodeIcon sx={{ fontSize: 32, color: '#3170b5' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary">Extract</h3>
                    <p className="text-blue-600 font-medium">Data Capture & Recognition</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  Intelligent data extraction from scanned documents using OCR and barcode recognition technology.
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <BarcodeIcon sx={{ fontSize: 24, color: '#3170b5' }} className="mt-0.5" />
                      <div>
                        <h4 className="font-bold text-secondary">Bar-code Extraction</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Automatic barcode detection and data extraction for document indexing
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <OCRIcon sx={{ fontSize: 24, color: '#3170b5' }} className="mt-0.5" />
                      <div>
                        <h4 className="font-bold text-secondary">OCR Extraction</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Optical Character Recognition to convert scanned text into searchable, editable content
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <VerifiedIcon sx={{ fontSize: 24, color: '#3170b5' }} className="mt-0.5" />
                      <div>
                        <h4 className="font-bold text-secondary">Data Validation</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Automated validation of extracted data against business rules and formats
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality Check */}
              <div id="quality" className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                    <QualityIcon sx={{ fontSize: 32, color: '#22c55e' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary">Quality Check</h3>
                    <p className="text-green-600 font-medium">Verification & Approval Workflow</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  Comprehensive quality assurance to ensure scanning accuracy meets organizational standards.
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-green-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <QualityIcon sx={{ fontSize: 24, color: '#22c55e' }} className="mt-0.5" />
                      <div>
                        <h4 className="font-bold text-secondary">Manual / Automatic Verification</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Verify information and documents through automated checks or manual review
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-green-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <ReviewIcon sx={{ fontSize: 24, color: '#22c55e' }} className="mt-0.5" />
                      <div>
                        <h4 className="font-bold text-secondary">Review and Comments</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Add review notes and comments for quality documentation
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-green-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckIcon sx={{ fontSize: 24, color: '#22c55e' }} className="mt-0.5" />
                      <div>
                        <h4 className="font-bold text-secondary">Approve – Reject</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Structured approval workflow with accept/reject decisions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reporting */}
              <div id="reporting" className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                    <ReportIcon sx={{ fontSize: 32, color: '#f97316' }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary">Reporting</h3>
                    <p className="text-orange-600 font-medium">Audit Trails & Analytics</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  Comprehensive reporting for tracking, auditing, and analyzing digitization activities.
                </p>

                <div className="space-y-4">
                  <div className="bg-white border border-orange-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <ReportIcon sx={{ fontSize: 24, color: '#f97316' }} className="mt-0.5" />
                      <div>
                        <h4 className="font-bold text-secondary">Total Records Scanned</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Track total volume of documents processed through the system
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-orange-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CloudIcon sx={{ fontSize: 24, color: '#f97316' }} className="mt-0.5" />
                      <div>
                        <h4 className="font-bold text-secondary">Records Exported / Not Exported</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Monitor export status and identify pending items
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-orange-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <SecurityIcon sx={{ fontSize: 24, color: '#f97316' }} className="mt-0.5" />
                      <div>
                        <h4 className="font-bold text-secondary">Audit Reports</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Comprehensive audit trails for compliance and accountability
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Document Digitisation Process Flow */}
          <section id="process" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
              Document Digitisation Process Flow
            </h2>

            <p className="text-gray-700 text-lg text-center mb-12 max-w-3xl mx-auto">
              CannyScan follows a structured, end-to-end workflow to ensure high-quality document digitization
              from initial data entry to final export.
            </p>

            <div className="relative">
              {/* Process Flow Diagram Image */}
              <div className="mb-12 relative flex justify-center">
                <SecureImage
                  src="/images/products/cannyscan1.jpg"
                  alt="Document Digitisation Process Flow Diagram"
                  width={1000}
                  height={600}
                  className="rounded-2xl shadow-sm select-none"
                />
              </div>

              {/* Process Steps */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  {
                    step: "1",
                    title: "Inventory / Data Entry",
                    description: "Document receipt and initial data entry with tracking assignment",
                    icon: <DocumentIcon sx={{ fontSize: 32 }} />,
                    color: "purple"
                  },
                  {
                    step: "2",
                    title: "Batch Preparation",
                    description: "Documents organized into batches for efficient scanning",
                    icon: <DocumentIcon sx={{ fontSize: 32 }} />,
                    color: "blue"
                  },
                  {
                    step: "3",
                    title: "Scanning",
                    description: "High-quality document scanning with image enhancement",
                    icon: <ScannerIcon sx={{ fontSize: 32 }} />,
                    color: "green"
                  },
                  {
                    step: "4",
                    title: "Quality Check",
                    description: "Verification of scan quality with approve/reject workflow",
                    icon: <QualityIcon sx={{ fontSize: 32 }} />,
                    color: "orange"
                  },
                ].map((item, idx) => (
                  <div key={idx} className={`bg-gradient-to-br from-${item.color}-50 to-white border-2 border-${item.color}-200 rounded-xl p-6 text-center`}>
                    <div className={`w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 text-${item.color}-600`}>
                      <span className="text-xl font-bold">{item.step}</span>
                    </div>
                    <div className={`text-${item.color}-600 mb-2`}>{item.icon}</div>
                    <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "5",
                    title: "Indexing & Tagging",
                    description: "Metadata assignment and document classification",
                    icon: <BarcodeIcon sx={{ fontSize: 32 }} />,
                    color: "cyan"
                  },
                  {
                    step: "6",
                    title: "Images & Metadata Extraction",
                    description: "OCR and barcode extraction with data validation",
                    icon: <OCRIcon sx={{ fontSize: 32 }} />,
                    color: "indigo"
                  },
                  {
                    step: "7",
                    title: "Final QC & Export",
                    description: "Final quality review and export preparation",
                    icon: <VerifiedIcon sx={{ fontSize: 32 }} />,
                    color: "pink"
                  },
                  {
                    step: "8",
                    title: "Export / Upload to DMS",
                    description: "Digital documents uploaded to CannyECM or other DMS",
                    icon: <CloudIcon sx={{ fontSize: 32 }} />,
                    color: "teal"
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-purple-300 transition-all">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                      <span className="text-xl font-bold">{item.step}</span>
                    </div>
                    <div className="text-purple-600 mb-2">{item.icon}</div>
                    <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Re-scan and Rejection Flow Note */}
              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Re-Scan Flow:</strong> Documents that fail quality check are flagged for re-scanning.
                  Rejected documents can be returned to the scanning stage with comments for correction.
                </p>
              </div>
            </div>
          </section>

          {/* Integration with CannyECM */}
          <section id="integration" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              Seamless Integration with CannyECM
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  CannyScan integrates directly with <strong>CannyECM Enterprise Content Management</strong> system,
                  enabling end-to-end document lifecycle management from paper to searchable digital archive.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckIcon sx={{ fontSize: 20, color: '#25d366' }} className="mt-0.5" />
                    <span className="text-gray-700">Direct upload to CannyECM repository</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon sx={{ fontSize: 20, color: '#25d366' }} className="mt-0.5" />
                    <span className="text-gray-700">Automatic metadata tagging and indexing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon sx={{ fontSize: 20, color: '#25d366' }} className="mt-0.5" />
                    <span className="text-gray-700">Full-text search capability for scanned documents</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon sx={{ fontSize: 20, color: '#25d366' }} className="mt-0.5" />
                    <span className="text-gray-700">Workflow automation for document approval</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon sx={{ fontSize: 20, color: '#25d366' }} className="mt-0.5" />
                    <span className="text-gray-700">Audit trail continuity from scan to archive</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/product/enterprise-content-management"
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold"
                  >
                    Learn More About CannyECM
                    <ArrowIcon sx={{ fontSize: 20 }} />
                  </Link>
                </div>
              </div>

              <div className="relative flex justify-center">
                <SecureImage
                  src="/images/products/cannyscan.png"
                  alt="CannyScan and CannyECM Integration"
                  width={600}
                  height={400}
                  className="rounded-2xl select-none"
                />
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQ
            id="faq"
            className="mb-20"
            title="Frequently Asked Questions"
            items={[
              {
                question: "What is CannyScan?",
                answer: "CannyScan is a professional document digitization solution that provides image enhancement, OCR extraction, barcode reading, quality control workflows, and comprehensive reporting for converting paper documents into searchable digital assets."
              },
              {
                question: "What image enhancement features does CannyScan offer?",
                answer: "CannyScan provides image cleansing with auto crop, punch hole removal, and edge deduction. It also includes automatic document separation with blank page detection, auto file name creation, and image compression for optimized storage."
              },
              {
                question: "Does CannyScan support OCR and barcode extraction?",
                answer: "Yes. CannyScan includes barcode extraction, OCR (Optical Character Recognition) extraction, and data validation capabilities to convert scanned documents into searchable, indexed digital files."
              },
              {
                question: "How does CannyScan handle quality control?",
                answer: "CannyScan offers both manual and automatic verification of scanned information and documents. It includes review and comments functionality, and a structured approve-reject workflow to ensure scanning quality meets organizational standards."
              },
              {
                question: "What reporting capabilities does CannyScan provide?",
                answer: "CannyScan provides reports on total records scanned, records exported vs. not exported, and comprehensive audit reports for compliance and tracking purposes."
              },
              {
                question: "Can CannyScan integrate with CannyECM?",
                answer: "Yes. CannyScan integrates seamlessly with CannyECM Enterprise Content Management system. Digitized documents can be directly uploaded to CannyECM with proper metadata, indexing, and folder organization for immediate use."
              },
              {
                question: "What happens if a scanned document fails quality check?",
                answer: "Documents that fail quality check are flagged for re-scanning. The rejection workflow allows reviewers to add comments explaining the issue, and documents are returned to the scanning stage for correction."
              },
            ]}
          />

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Related Solutions
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "CannyECM",
                  title: "Enterprise Content Management",
                  description: "FDA 21 CFR Part 11 compliant ECM for SOPs, STPs, COAs, change control, and QMS integration.",
                  features: ["Document Control", "Approval Workflows", "QMS Integration", "Audit Trails"],
                  link: "/product/enterprise-content-management",
                  color: "from-blue-50 to-white border-blue-200"
                },
                {
                  name: "CannyRMS",
                  title: "Physical Records Management",
                  description: "Web-based system to digitize, control, and optimize physical file and storage management.",
                  features: ["Rack Optimization", "Retrieval Tracking", "Audit Compliance", "Billing Support"],
                  link: "/product/rms",
                  color: "from-orange-50 to-white border-orange-200"
                },
                {
                  name: "CannyHR",
                  title: "HR Management System",
                  description: "Comprehensive HR solution for employee management, payroll, and attendance tracking.",
                  features: ["Employee Records", "Payroll Automation", "Leave Management", "Performance Reviews"],
                  link: "/product/hr-management",
                  color: "from-green-50 to-white border-green-200"
                },
              ].map((product, idx) => (
                <Link
                  key={idx}
                  href={product.link}
                  className={`bg-gradient-to-br ${product.color} border-2 rounded-xl p-8 hover:shadow-lg transition-all group block`}
                >
                  <h3 className="text-2xl font-bold text-secondary mb-2 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm font-semibold text-purple-600 mb-4">{product.title}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-2">
                        <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowIcon sx={{ fontSize: 18 }} />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section id="get-started" className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Digitize Your Documents?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Transform paper documents into searchable digital assets with CannyScan.
              Image enhancement, OCR extraction, quality control, and seamless DMS integration.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link
                href="/#contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-flex items-center gap-2"
              >
                Request Demo
                <ArrowIcon sx={{ fontSize: 20 }} />
              </Link>
              <Link
                href="/#contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Contact Sales
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-white/80 flex-wrap">
              <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 18 }} /> Image Enhancement</span>
              <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 18 }} /> OCR & Barcode</span>
              <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 18 }} /> CannyECM Integration</span>
            </div>
          </section>

        </article>

      </div>

    </>
  );
}
