import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import SocialShare from "@/components/ui/SocialShare";
import {
  CheckCircle as CheckIcon,
  Star as StarIcon,
  Scanner as ScannerIcon,
  Security as SecurityIcon,
  PhotoLibrary as PhotoIcon,
  CloudUpload as CloudIcon,
  Assignment as WorkflowIcon,
  Computer as ComputerIcon,
  ArrowForward as ArrowIcon,
  Description as DocumentIcon,
  Assessment as AssessmentIcon,
} from '@mui/icons-material';

// SEO Metadata
export const metadata: Metadata = {
  title: "CannyScan - Professional Document Scanning Services | Digitization Solution 2025",
  description: "CannyScan provides professional document scanning and digitization services for paper documents, microfilm, large-format plans, and books. Onsite and offsite scanning with 99.9% accuracy. Secure cloud hosting included.",
  keywords: [
    "CannyScan",
    "document scanning services",
    "digitization services",
    "microfilm scanning",
    "large format scanning",
    "book scanning services",
    "paper to digital conversion",
    "onsite scanning",
    "offsite scanning",
    "professional scanning services"
  ],
  authors: [{ name: "Christopher" }],
  openGraph: {
    title: "CannyScan - Professional Document Scanning Services",
    description: "Professional document scanning and digitization services with 99.9% accuracy. Onsite/offsite options. Secure cloud hosting.",
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
          "name": "CannyScan - Document Scanning Services"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "CannyScan - Professional Document Scanning Services",
      "description": "Comprehensive guide to CannyScan professional document scanning and digitization services with onsite/offsite options, large-format scanning, and secure cloud hosting.",
      "image": "https://cannymindstech.com/images/cannyscan-service.jpg",
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
        "@id": "https://cannymindstech.com/solutions/scanning-solution"
      }
    },
    {
      "@type": "Service",
      "name": "CannyScan",
      "serviceType": "Document Scanning and Digitization Services",
      "description": "Professional document scanning services for all document types including microfilm and large-format materials",
      "provider": {
        "@type": "Organization",
        "name": "CannyMinds Technology Solutions"
      },
      "areaServed": "Worldwide",
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
          "name": "What is CannyScan document scanning service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CannyScan is a professional document scanning and digitization service that converts paper documents into searchable digital files. We handle all document types—from standard office papers to large-format technical drawings, microfilm, books, and photographs—with high-quality scanning equipment and OCR technology."
          }
        },
        {
          "@type": "Question",
          "name": "What types of documents can you scan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We scan all document types: standard office documents, legal files, medical records, blueprints (up to A0 size), technical manuals, microfilm/microfiche, bound books, photographs, maps, and historical documents. Our equipment handles sizes from business cards to large-format engineering drawings."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer onsite or offsite scanning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both. Offsite scanning is ideal for large projects where documents are transported to our secure facility. Onsite scanning is available for organizations that cannot remove documents from their premises due to security or compliance requirements. Both options include secure cloud hosting."
          }
        },
        {
          "@type": "Question",
          "name": "What is the accuracy of your OCR technology?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our OCR (Optical Character Recognition) achieves 99.9% accuracy on clear, well-printed documents. All scanned text becomes searchable and editable. We use advanced OCR software that handles multiple languages, fonts, and document layouts with manual quality control reviews."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a scanning project take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Project timelines depend on document volume and complexity. Small projects (1,000-5,000 pages) typically complete within 5-7 business days. Large enterprise projects (100,000+ pages) are planned with phased delivery schedules. Rush services available for urgent requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Is my data secure during the scanning process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We follow strict security protocols including secure transportation, 24/7 monitored facilities, chain of custody tracking, and background-verified staff. Digital files are encrypted with 256-bit AES encryption. We maintain compliance with HIPAA, GLBA, and GDPR standards."
          }
        },
        {
          "@type": "Question",
          "name": "Can scanned documents be integrated with CannyDocs DMS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. CannyScan integrates seamlessly with CannyDocs Document Management System. Scanned files are uploaded directly to your CannyDocs repository with proper indexing, metadata, and folder organization—ready for immediate use with full-text search capabilities."
          }
        },
        {
          "@type": "Question",
          "name": "How much does professional document scanning cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing depends on document volume, type, complexity, and delivery timeline. Standard office documents typically range from ₹0.50-₹2 per page. Large-format, microfilm, and specialty scanning have custom pricing. Contact us for a free project assessment and detailed quote."
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
              <li className="text-gray-600 font-medium truncate">CannyScan - Document Scanning Services</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div>
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <StarIcon sx={{ fontSize: 18 }} />
                  Professional Scanning Services
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
                  Transform Physical Documents into Digital Assets with <span className="text-purple-600">CannyScan</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  Professional document scanning and digitization services for all document types. From paper files to microfilm,
                  large-format plans to historical books—we digitize everything with <strong>99.9% accuracy</strong>. Onsite and offsite
                  options available with secure cloud hosting.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="#get-started"
                    className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                  >
                    Request a Quote
                    <ArrowIcon sx={{ fontSize: 20 }} />
                  </Link>
                  <Link
                    href="#services"
                    className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all inline-flex items-center justify-center gap-2"
                  >
                    Our Services
                    <ScannerIcon sx={{ fontSize: 20 }} />
                  </Link>
                </div>

                {/* Social Share */}
                <div className="flex items-center gap-4 mb-6">
                  <SocialShare
                    title="CannyScan - Professional Document Scanning Services"
                    description="Professional document digitization with 99.9% OCR accuracy, cloud storage, and secure archival. Transform your paper documents into searchable digital assets."
                  />
                  <span className="text-sm text-gray-600">Share this service</span>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-600 flex-wrap">
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 18, color: '#25d366' }} /> 99.9% Accuracy</span>
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 18, color: '#25d366' }} /> Onsite/Offsite Options</span>
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 18, color: '#25d366' }} /> Secure Cloud Hosting</span>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center" role="img" aria-label="CannyScan professional scanning equipment and digitized documents">
                <ScannerIcon sx={{ fontSize: 120, color: '#94a3b8' }} aria-hidden="true" />
                <p className="text-gray-600 font-semibold mt-6 text-lg">IMAGE PLACEHOLDER</p>
                <p className="text-sm text-gray-500 mt-2">CannyScan Scanning Services</p>
                <p className="text-xs text-gray-400 mt-1">Recommended size: 1200x800px</p>
              </div>

            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              {[
                { number: "10+", label: "Happy Clients" },
                { number: "1M+", label: "Documents Scanned" },
                { number: "99.9%", label: "Accuracy Rate" },
                { number: "A0", label: "Max Format Size" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
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
                  { title: "Scanning Services & Capabilities", href: "#services" },
                  { title: "Document Types We Handle", href: "#document-types" },
                  { title: "Service Delivery Options", href: "#delivery-options" },
                  { title: "Benefits of Document Digitization", href: "#benefits" },
                  { title: "Industry Use Cases", href: "#use-cases" },
                  { title: "How CannyScan Works", href: "#how-it-works" },
                  { title: "Technical Specifications", href: "#technical-specs" },
                  { title: "Integration with CannyDocs", href: "#integration" },
                  { title: "Why Choose CannyScan", href: "#why-choose" },
                  { title: "Security & Compliance", href: "#security" },
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
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* What is CannyScan */}
          <section id="what-is" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              What is CannyScan Document Scanning Service?
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>CannyScan</strong> is CannyMinds&apos; professional document scanning and digitization service designed to convert
                your physical records into searchable, secure digital formats. Whether you&apos;re managing decades of paper archives,
                microfilm collections, large-format engineering drawings, or historical books, CannyScan provides end-to-end digitization
                solutions that <strong>reclaim office space, reduce storage costs, and enable instant digital access</strong>.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                With specialized equipment for every document type—from standard A4 pages to massive A0 blueprints and delicate microfilm—
                CannyScan delivers high-quality digital images with OCR (Optical Character Recognition) for full-text searchability.
                Choose between onsite scanning at your premises or offsite scanning at our secure facilities, with all digitized content
                hosted in secure cloud storage for instant access.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                <p className="font-semibold text-secondary mb-2">Perfect For:</p>
                <p className="text-gray-700">
                  Organizations with large paper archives, government agencies, legal firms, architectural offices, libraries, museums,
                  healthcare providers, and any business needing to digitize physical records for compliance, preservation, or accessibility.
                </p>
              </div>
            </div>
          </section>

          {/* Scanning Services */}
          <section id="services" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Comprehensive Scanning Services & Capabilities
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Standard Document Scanning",
                  icon: <DocumentIcon sx={{ fontSize: 40 }} />,
                  description: "High-speed scanning of standard paper documents (A4, Letter, Legal sizes) with automatic OCR and indexing.",
                  features: ["Up to 120 pages/minute", "Automatic OCR processing", "Color/Grayscale/B&W", "PDF, TIFF, JPEG formats"]
                },
                {
                  title: "Large-Format Scanning",
                  icon: <PhotoIcon sx={{ fontSize: 40 }} />,
                  description: "Specialized equipment for oversized documents including blueprints, maps, architectural plans, and engineering drawings.",
                  features: ["A12 to A0 sizes supported", "Up to 44-inch width", "High-resolution scanning", "Preserves fine details"]
                },
                {
                  title: "Microfilm & Microfiche",
                  icon: <PhotoIcon sx={{ fontSize: 40 }} />,
                  description: "Professional microfilm and microfiche digitization for archived engineering drawings, historical records, and newspapers.",
                  features: ["16mm & 35mm microfilm", "Roll film & microfiche", "Restoration & enhancement", "Frame-by-frame scanning"]
                },
                {
                  title: "Book & Bound Documents",
                  icon: <DocumentIcon sx={{ fontSize: 40 }} />,
                  description: "Specialized book scanners for textbooks, manuals, ledgers, and bound volumes without damaging bindings.",
                  features: ["Non-destructive scanning", "Gutter shadow removal", "Page curl correction", "Maintains book integrity"]
                },
                {
                  title: "Photo & Negative Scanning",
                  icon: <PhotoIcon sx={{ fontSize: 40 }} />,
                  description: "High-resolution scanning of photographs, photo albums, slides, and negatives for preservation and digital access.",
                  features: ["Up to 4800 DPI resolution", "Color restoration", "Dust & scratch removal", "Album preservation"]
                },
                {
                  title: "Technical Manual Scanning",
                  icon: <WorkflowIcon sx={{ fontSize: 40 }} />,
                  description: "Digitization of technical manuals, binders, and complex documents with detailed indexing and metadata.",
                  features: ["Tab/section indexing", "Hyperlinked TOC", "Searchable bookmarks", "Multi-part assembly"]
                },
              ].map((service, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-purple-600 transition-all">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, fidx) => (
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

          {/* CTA - After Services */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-purple-100 to-purple-50 border-2 border-purple-300 rounded-xl p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                Ready to Digitize Your Document Archives?
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Get a free consultation and quote for your scanning project. We handle projects of any size.
              </p>
              <Link
                href="#get-started"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl"
              >
                Get Free Quote
                <ArrowIcon sx={{ fontSize: 20 }} />
              </Link>
            </div>
          </section>

          {/* Document Types */}
          <section id="document-types" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Document Types We Handle
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  category: "Standard Documents",
                  types: ["Invoices & receipts", "Contracts & agreements", "HR records & personnel files", "Medical records & charts", "Legal documents & court files", "Correspondence & letters"]
                },
                {
                  category: "Large-Format Materials",
                  types: ["Architectural blueprints", "Engineering drawings (A0 to A12)", "Construction plans", "Maps & surveys", "Technical schematics", "CAD drawings"]
                },
                {
                  category: "Archived Media",
                  types: ["Microfilm (16mm, 35mm)", "Microfiche cards", "Roll film", "Aperture cards", "Jacketed microfilm", "COM/CIM media"]
                },
                {
                  category: "Books & Bound Materials",
                  types: ["Textbooks & manuals", "Historical books", "Ledgers & journals", "Technical documentation", "Reference materials", "Bound reports"]
                },
                {
                  category: "Photographs & Images",
                  types: ["Printed photographs", "Photo albums", "Slides (35mm, 120mm)", "Negatives", "Transparencies", "Historical images"]
                },
                {
                  category: "Specialized Documents",
                  types: ["Technical manuals", "Indexed binders", "Ring-bound materials", "Multi-part forms", "Fragile documents", "Historical artifacts"]
                },
              ].map((category, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-secondary mb-6">{category.category}</h3>
                  <div className="space-y-3">
                    {category.types.map((type, tidx) => (
                      <div key={tidx} className="flex items-start gap-2">
                        <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Service Delivery Options */}
          <section id="delivery-options" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Flexible Service Delivery Options
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <ComputerIcon sx={{ fontSize: 32, color: '#9333ea' }} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Onsite Scanning</h3>
                <p className="text-gray-700 mb-6">
                  Our team brings professional scanning equipment directly to your location. Ideal for sensitive documents that
                  cannot leave your premises or large-volume projects where transportation is impractical.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Documents never leave your premises</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Professional equipment & trained operators</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Flexible scheduling (business hours or after-hours)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Real-time progress monitoring</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-secondary">Best for: Government, Healthcare, Legal, Financial Institutions</p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
                  <SecurityIcon sx={{ fontSize: 32, color: '#3170b5' }} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Offsite Scanning</h3>
                <p className="text-gray-700 mb-6">
                  Documents are securely transported to our state-of-the-art scanning facilities with chain-of-custody tracking.
                  Cost-effective for large projects with shorter turnaround times.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Secure transportation with tracking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Climate-controlled scanning environment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Industrial-grade scanning equipment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Faster turnaround times</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-secondary">Best for: Businesses, Archives, Libraries, Small-Medium Projects</p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <CloudIcon sx={{ fontSize: 32, color: '#22c55e' }} />
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-3">Secure Cloud Hosting Included</h4>
                  <p className="text-gray-700 mb-4">
                    All digitized documents are uploaded to secure cloud storage with role-based access control. Access your digital
                    archive from anywhere, anytime with encrypted connections and comprehensive audit trails.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">AES-256 encryption at rest</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">TLS 1.3 encryption in transit</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Role-based access control</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Automated backups & redundancy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Business Benefits of Document Digitization
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-8">
                <div className="text-5xl font-bold text-green-600 mb-3">80%</div>
                <h3 className="font-bold text-secondary text-lg mb-2">Space Savings</h3>
                <p className="text-gray-600 text-sm">Eliminate 80% of physical storage space and reduce facility costs</p>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-8">
                <div className="text-5xl font-bold text-primary mb-3">10x</div>
                <h3 className="font-bold text-secondary text-lg mb-2">Faster Access</h3>
                <p className="text-gray-600 text-sm">Find documents in seconds instead of hours with digital search</p>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-xl p-8">
                <div className="text-5xl font-bold text-purple-600 mb-3">50%</div>
                <h3 className="font-bold text-secondary text-lg mb-2">Cost Reduction</h3>
                <p className="text-gray-600 text-sm">Lower operational costs through digital workflows</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              {[
                {
                  title: "1. Reclaim Premium Office Space",
                  content: "Convert filing cabinets and storage rooms into productive workspace. The average filing cabinet costs $1,000+ annually in space and maintenance—digitization eliminates these ongoing costs while freeing up valuable real estate."
                },
                {
                  title: "2. Instant Document Access from Anywhere",
                  content: "Enable remote work and distributed teams with cloud-hosted digital archives. Employees can access documents instantly from any location, improving productivity and enabling flexible work arrangements."
                },
                {
                  title: "3. Enhanced Document Security & Compliance",
                  content: "Protect against fire, flood, and physical theft with encrypted digital storage. Maintain audit trails, enforce retention policies, and meet GDPR, HIPAA, and ISO 27001 compliance requirements automatically."
                },
                {
                  title: "4. Disaster Recovery & Business Continuity",
                  content: "Eliminate risk of catastrophic document loss from natural disasters. Automated backups and geo-redundant storage ensure your critical records survive any physical disaster."
                },
                {
                  title: "5. Improved Collaboration & Productivity",
                  content: "Multiple users can access the same document simultaneously without physical handling. Version control and change tracking prevent conflicts and lost updates."
                },
                {
                  title: "6. Environmental Sustainability",
                  content: "Reduce carbon footprint and demonstrate corporate social responsibility. Going paperless eliminates paper consumption, printing costs, and transportation emissions from document storage."
                },
              ].map((benefit, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl font-bold text-secondary mb-3">{benefit.title}</h3>
                  <p className="text-lg leading-relaxed">{benefit.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section id="use-cases" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Industry-Specific Use Cases
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  industry: "Legal & Law Firms",
                  icon: <DocumentIcon sx={{ fontSize: 32 }} />,
                  description: "Digitize case files, court documents, contracts, and historical records for instant access and e-discovery.",
                  use_cases: ["Case file digitization", "Contract archives", "Court document scanning", "E-discovery preparation"]
                },
                {
                  industry: "Healthcare & Medical",
                  icon: <SecurityIcon sx={{ fontSize: 32 }} />,
                  description: "Convert patient records, medical charts, X-rays, and lab results to HIPAA-compliant digital formats.",
                  use_cases: ["Patient record conversion", "Medical imaging digitization", "Lab result archives", "HIPAA compliance"]
                },
                {
                  industry: "Government & Public Sector",
                  icon: <SecurityIcon sx={{ fontSize: 32 }} />,
                  description: "Digitize public records, permits, licenses, historical documents, and maps for citizen access.",
                  use_cases: ["Public record digitization", "Historical document preservation", "Permit & license scanning", "Map digitization"]
                },
                {
                  industry: "Architecture & Engineering",
                  icon: <DocumentIcon sx={{ fontSize: 32 }} />,
                  description: "Scan large-format blueprints, CAD drawings, site plans, and technical specifications.",
                  use_cases: ["Blueprint scanning (A0-A12)", "CAD drawing archives", "Site plan digitization", "Technical specs"]
                },
                {
                  industry: "Libraries & Museums",
                  icon: <DocumentIcon sx={{ fontSize: 32 }} />,
                  description: "Preserve rare books, historical documents, photographs, and archives for public digital access.",
                  use_cases: ["Rare book digitization", "Historical preservation", "Photo archive scanning", "Microfilm conversion"]
                },
                {
                  industry: "Financial Services",
                  icon: <SecurityIcon sx={{ fontSize: 32 }} />,
                  description: "Digitize loan files, account records, compliance documents, and customer correspondence.",
                  use_cases: ["Loan document scanning", "Account record archives", "Compliance documentation", "Customer files"]
                },
              ].map((useCase, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600">
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">{useCase.industry}</h3>
                  <p className="text-gray-700 mb-6">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.use_cases.map((use_case, uidx) => (
                      <div key={uidx} className="flex items-start gap-2">
                        <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{use_case}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA - After Use Cases */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-8 text-center text-white shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Digitization Project?
              </h3>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Get a free consultation and project quote. We handle projects of any size—from small archives to enterprise digitization.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                Schedule Consultation
                <ArrowIcon sx={{ fontSize: 20 }} />
              </Link>
            </div>
          </section>

          {/* How CannyScan Works */}
          <section id="how-it-works" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              How CannyScan Document Scanning Works
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700 text-lg leading-relaxed">
                Our professional scanning process ensures high-quality digitization with minimal disruption to your operations.
                Whether you choose onsite or offsite scanning, we follow a proven workflow to deliver accurate, organized digital archives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  step: "Step 1",
                  title: "Consultation & Assessment",
                  description: "We assess your document volume, types, condition, and digitization requirements. Our team provides a detailed project plan with timeline and pricing.",
                  icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
                },
                {
                  step: "Step 2",
                  title: "Document Preparation & Indexing",
                  description: "Documents are organized, indexed, and prepared for scanning. We remove staples, repair damaged pages, and create a tracking system for your files.",
                  icon: <WorkflowIcon sx={{ fontSize: 40 }} />,
                },
                {
                  step: "Step 3",
                  title: "High-Quality Scanning & OCR",
                  description: "Documents are scanned using professional equipment with quality control checks. OCR technology makes all text searchable and editable.",
                  icon: <ScannerIcon sx={{ fontSize: 40 }} />,
                },
                {
                  step: "Step 4",
                  title: "Quality Control & Delivery",
                  description: "Every scan is reviewed for quality. Digital files are organized, named according to your preferences, and delivered via secure cloud storage or physical media.",
                  icon: <CheckIcon sx={{ fontSize: 40 }} />,
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-xl p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600">
                    {item.icon}
                  </div>
                  <div className="text-sm font-bold text-purple-600 mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-secondary mb-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Specifications */}
          <section id="technical-specs" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              Technical Specifications & Capabilities
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-3">
                  <ScannerIcon sx={{ fontSize: 28, color: '#7c3aed' }} />
                  Scanning Equipment
                </h3>
                <div className="space-y-3">
                  {[
                    "Maximum Document Size: A0 (33.1\" × 46.8\")",
                    "Minimum Document Size: Business card",
                    "Flatbed Scanners: Up to 1200 DPI resolution",
                    "Sheet-Fed Scanners: Up to 600 DPI, 120 pages/minute",
                    "Large-Format Scanners: Technical drawings, blueprints",
                    "Microfilm/Microfiche Readers: Digital conversion",
                    "Book Scanners: Non-destructive scanning for bound materials",
                  ].map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-3">
                  <DocumentIcon sx={{ fontSize: 28, color: '#7c3aed' }} />
                  Output Formats & Quality
                </h3>
                <div className="space-y-3">
                  {[
                    "Formats: PDF, PDF/A, TIFF, JPEG, PNG",
                    "Searchable PDF: Full OCR with 99.9% accuracy",
                    "Color: 24-bit color, 8-bit grayscale, or 1-bit B&W",
                    "Compression: Optimized file sizes without quality loss",
                    "Multi-page Documents: Automatically combined",
                    "Metadata: Filename, date, keywords, custom fields",
                    "Quality Assurance: Manual review of every scan",
                  ].map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <p className="font-semibold text-secondary mb-2">Document Handling Capacity:</p>
              <p className="text-gray-700">
                We can handle projects of any size—from small 100-document archives to enterprise digitization projects
                with millions of pages. Our equipment and processes scale to meet your timeline and quality requirements.
              </p>
            </div>
          </section>

          {/* Integration with CannyDocs */}
          <section id="integration" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              Seamless Integration with CannyDocs DMS
            </h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                CannyScan professional scanning services integrate perfectly with <strong>CannyDocs Document Management System</strong>.
                Your scanned documents can be delivered directly into your CannyDocs repository with proper indexing, metadata,
                and folder organization—ready for immediate use.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Direct Upload to CannyDocs",
                  description: "Scanned documents are uploaded directly to your CannyDocs repository with proper folder structure and permissions.",
                  icon: <CloudIcon sx={{ fontSize: 40 }} />,
                },
                {
                  title: "Automatic Metadata Tagging",
                  description: "Document metadata, categories, and custom fields are automatically populated based on your indexing requirements.",
                  icon: <WorkflowIcon sx={{ fontSize: 40 }} />,
                },
                {
                  title: "OCR & Full-Text Search",
                  description: "All scanned documents are OCR-processed, making them immediately searchable within CannyDocs using keywords, dates, or metadata.",
                  icon: <ScannerIcon sx={{ fontSize: 40 }} />,
                },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-purple-600 transition-all">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/solutions/document-management"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold text-lg"
              >
                Learn More About CannyDocs DMS
                <ArrowIcon sx={{ fontSize: 20 }} />
              </Link>
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
                  name: "Rajesh Kumar",
                  role: "Legal Compliance Manager",
                  company: "Law Firm",
                  testimonial: "CannyScan digitized 50,000 case files with incredible accuracy. The searchable PDFs have transformed how our team accesses legal documents. Project completed ahead of schedule.",
                  rating: 5,
                },
                {
                  name: "Priya Sharma",
                  role: "Records Manager",
                  company: "Healthcare Organization",
                  testimonial: "Professional, secure, and HIPAA-compliant scanning of patient records. The team handled sensitive medical documents with care. We now have 30 years of records accessible digitally.",
                  rating: 5,
                },
                {
                  name: "Amit Patel",
                  role: "Project Architect",
                  company: "Engineering Firm",
                  testimonial: "Large-format scanning of A0 blueprints exceeded our expectations. High resolution captures every detail. Integration with CannyDocs made our entire archive searchable instantly.",
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
                Document security is our top priority. CannyScan follows strict protocols to protect your sensitive information
                throughout the scanning process, from pickup to digital delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {[
                {
                  title: "Physical Security",
                  features: [
                    "Secure document transportation in locked containers",
                    "24/7 monitored scanning facility with access controls",
                    "Chain of custody tracking for every document",
                    "Secure document destruction after scanning (if requested)",
                    "Background-verified scanning technicians",
                  ],
                  icon: <SecurityIcon sx={{ fontSize: 40 }} />,
                },
                {
                  title: "Digital Security",
                  features: [
                    "256-bit AES encryption for all digital files",
                    "Secure cloud storage with redundant backups",
                    "Password-protected file delivery",
                    "Audit trails for all document access",
                    "GDPR and data privacy compliance",
                  ],
                  icon: <CloudIcon sx={{ fontSize: 40 }} />,
                },
              ].map((category, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600">
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

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <p className="font-semibold text-secondary mb-2">Industry Compliance:</p>
              <p className="text-gray-700">
                We maintain compliance with industry-specific regulations including HIPAA (healthcare), GLBA (financial services),
                and SOC 2 standards. Confidentiality agreements and custom security protocols available for sensitive projects.
              </p>
            </div>
          </section>

          {/* Author Bio */}
          <section id="author" className="mb-20">
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-purple-600">C</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-secondary mb-2">About the Author</h3>
                  <p className="text-lg font-semibold text-purple-600 mb-4">
                    Christopher - Head of Technical Department & Investor
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Christopher leads CannyMinds Technology Solutions' technical innovation and product development.
                    As Head of the Technical Department and a key investor, he oversees the design and implementation
                    of enterprise document management solutions, including CannyScan professional scanning services.
                    With deep expertise in digitization workflows, OCR technology, and document security standards,
                    Christopher ensures CannyScan delivers industry-leading accuracy and compliance for organizations
                    transforming their paper archives into searchable digital assets.
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
                  question: "What is CannyScan document scanning service?",
                  answer: "CannyScan is a professional document scanning and digitization service that converts paper documents into searchable digital files. We handle all document types—from standard office papers to large-format technical drawings, microfilm, books, and photographs—with high-quality scanning equipment and OCR technology.",
                },
                {
                  question: "What types of documents can you scan?",
                  answer: "We scan all document types: standard office documents, legal files, medical records, blueprints (up to A0 size), technical manuals, microfilm/microfiche, bound books, photographs, maps, and historical documents. Our equipment handles sizes from business cards to large-format engineering drawings.",
                },
                {
                  question: "Do you offer onsite or offsite scanning?",
                  answer: "Both. Offsite scanning is ideal for large projects where documents are transported to our secure facility. Onsite scanning is available for organizations that cannot remove documents from their premises due to security or compliance requirements. Both options include secure cloud hosting.",
                },
                {
                  question: "What is the accuracy of your OCR technology?",
                  answer: "Our OCR (Optical Character Recognition) achieves 99.9% accuracy on clear, well-printed documents. All scanned text becomes searchable and editable. We use advanced OCR software that handles multiple languages, fonts, and document layouts with manual quality control reviews.",
                },
                {
                  question: "How long does a scanning project take?",
                  answer: "Project timelines depend on document volume and complexity. Small projects (1,000-5,000 pages) typically complete within 5-7 business days. Large enterprise projects (100,000+ pages) are planned with phased delivery schedules. Rush services available for urgent requirements.",
                },
                {
                  question: "What formats do you deliver scanned documents in?",
                  answer: "We deliver documents in PDF, searchable PDF (with OCR), PDF/A (archival standard), TIFF, JPEG, or PNG formats. Files are organized according to your naming conventions and folder structure. All formats include metadata tagging for easy retrieval.",
                },
                {
                  question: "Is my data secure during the scanning process?",
                  answer: "Absolutely. We follow strict security protocols including secure transportation, 24/7 monitored facilities, chain of custody tracking, and background-verified staff. Digital files are encrypted with 256-bit AES encryption. We maintain compliance with HIPAA, GLBA, and GDPR standards.",
                },
                {
                  question: "Can scanned documents be integrated with CannyDocs DMS?",
                  answer: "Yes. CannyScan integrates seamlessly with CannyDocs Document Management System. Scanned files are uploaded directly to your CannyDocs repository with proper indexing, metadata, and folder organization—ready for immediate use with full-text search capabilities.",
                },
                {
                  question: "What happens to my original documents after scanning?",
                  answer: "You decide. We can return original documents to you via secure transportation, store them in our climate-controlled facility, or provide secure destruction services with certificates of destruction. All options maintain chain of custody documentation.",
                },
                {
                  question: "How much does professional document scanning cost?",
                  answer: "Pricing depends on document volume, type, complexity, and delivery timeline. Standard office documents typically range from ₹0.50-₹2 per page. Large-format, microfilm, and specialty scanning have custom pricing. Contact us for a free project assessment and detailed quote.",
                },
                {
                  question: "Do you handle sensitive or confidential documents?",
                  answer: "Yes. We routinely handle sensitive legal, medical, financial, and government documents. Our team signs confidentiality agreements, and we implement custom security protocols for high-sensitivity projects. HIPAA-compliant processes available for healthcare organizations.",
                },
                {
                  question: "Can you scan damaged or fragile documents?",
                  answer: "Yes. We have specialized equipment and trained technicians for handling delicate, aged, or damaged documents. This includes fragile historical papers, brittle microfilm, torn pages, and bound materials. We assess document condition and recommend appropriate scanning methods.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-600 transition-all">
                  <h3 className="text-lg font-bold text-secondary mb-3 flex items-start gap-3">
                    <span className="text-purple-600 flex-shrink-0">Q{idx + 1}.</span>
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
                  description: "Complete DMS with digital asset management, automated workflows, and 80% OCR accuracy. Manage scanned documents with version control and advanced search.",
                  link: "/solutions/document-management",
                  color: "blue",
                },
                {
                  name: "CannyHR",
                  tagline: "HR & Payroll Management",
                  description: "Hire-to-Retire HRMS with payroll, attendance tracking, leave management, and 350+ biometric integrations. Digitize employee records and automate HR workflows.",
                  link: "/solutions/hr-management",
                  color: "green",
                },
                {
                  name: "CannyTrack",
                  tagline: "Productivity Monitoring",
                  description: "Workforce productivity tracking with activity monitoring, screenshots, and data loss prevention. Monitor remote teams with consent-based tracking.",
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
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-12 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Digitize Your Document Archive?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your paper documents into searchable digital assets. Get a free consultation and project quote
                for professional scanning services. No project too large or too small.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Get Free Consultation
                  <ArrowIcon sx={{ fontSize: 20 }} />
                </Link>
                <Link
                  href="/#contact"
                  className="bg-purple-700 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition-all inline-flex items-center justify-center gap-2"
                >
                  Request Project Quote
                  <DocumentIcon sx={{ fontSize: 20 }} />
                </Link>
              </div>
              <p className="text-sm text-white/70 mt-6">
                Trusted by 10+ organizations for secure, accurate document scanning
              </p>
            </div>
          </section>

        </article>

        <Footer />

      </div>
    </>
  );
}
