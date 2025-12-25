import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import SocialShare from "@/components/ui/SocialShare";
import {
  CheckCircle as CheckIcon,
  Star as StarIcon,
  Description as DocumentIcon,
  Security as SecurityIcon,
  Search as SearchIcon,
  CloudUpload as CloudIcon,
  Share as ShareIcon,
  Assignment as WorkflowIcon,
  Storage as StorageIcon,
  TrendingUp as TrendingUpIcon,
  Computer as ComputerIcon,
  Public as PublicIcon,
  Business as BusinessIcon,
  ArrowForward as ArrowIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';

// SEO Metadata
export const metadata: Metadata = {
  title: "CannyDocs - Enterprise Document Management Software | DMS Solution 2025",
  description: "CannyDocs is a powerful enterprise document management system with OCR, workflow automation, and cloud/on-premise deployment. Organize 50,000+ documents with 80% OCR accuracy. Get 30-day free trial.",
  keywords: [
    "CannyDocs",
    "document management software",
    "enterprise DMS",
    "OCR document management",
    "workflow automation software",
    "cloud document storage",
    "on-premise DMS",
    "document management system",
    "paperless office solution",
    "secure document storage"
  ],
  authors: [{ name: "Christopher" }],
  openGraph: {
    title: "CannyDocs - Enterprise Document Management Software",
    description: "Powerful DMS with OCR, workflow automation, and enterprise security. Trusted by growing businesses worldwide.",
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
          "name": "CannyDocs - Document Management Software"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "CannyDocs - Enterprise Document Management Software",
      "description": "Comprehensive guide to CannyDocs enterprise document management system with OCR, workflow automation, and cloud/on-premise deployment options.",
      "image": "https://cannymindstech.com/images/cannydocs-dashboard.jpg",
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
        "@id": "https://cannymindstech.com/solutions/document-management"
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "CannyDocs",
      "applicationCategory": "BusinessApplication",
      "description": "Enterprise document management system with OCR and workflow automation",
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
          "name": "What is CannyDocs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CannyDocs is an enterprise document management software that helps organizations digitize, organize, and manage documents with OCR technology, workflow automation, and secure cloud/on-premise storage."
          }
        },
        {
          "@type": "Question",
          "name": "What are the system requirements for CannyDocs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For cloud deployment, you only need a modern web browser (Chrome, Firefox, Safari, Edge). For on-premise, you need Windows Server 2016+/Linux, 16GB RAM minimum, SQL Server/PostgreSQL database, and .NET Core runtime."
          }
        },
        {
          "@type": "Question",
          "name": "Does CannyDocs support mobile access?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. CannyDocs is fully responsive and accessible via mobile browsers on iOS and Android devices. Native mobile apps are planned for future releases."
          }
        }
      ]
    }
  ]
};

export default function CannyDocsProductPage() {
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
              <li className="text-gray-600 font-medium truncate">CannyDocs - Document Management Software</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-white to-primary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <StarIcon sx={{ fontSize: 18 }} />
                  Trusted by Growing Businesses Worldwide
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
                  Transform Your Document Management with <span className="text-primary">CannyDocs</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  Enterprise-grade document management system with <strong>80% OCR accuracy</strong>, intelligent workflow automation,
                  and military-grade security. Go paperless and organize <strong>50,000+ documents</strong> effortlessly with cloud,
                  on-premise, or hybrid deployment.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="#get-started"
                    className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                  >
                    Start 30-Day Free Trial
                    <ArrowIcon sx={{ fontSize: 20 }} />
                  </Link>
                  <Link
                    href="#features"
                    className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-all inline-flex items-center justify-center gap-2"
                  >
                    Explore Features
                    <DocumentIcon sx={{ fontSize: 20 }} />
                  </Link>
                </div>

                {/* Social Share */}
                <div className="flex items-center gap-4">
                  <SocialShare
                    title="CannyDocs - Enterprise Document Management Software"
                    description="Transform your document management with CannyDocs. 80% OCR accuracy, workflow automation, and enterprise security."
                  />
                  <span className="text-sm text-gray-600">Share this product</span>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-600 flex-wrap">
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 18, color: '#25d366' }} /> No Credit Card</span>
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 18, color: '#25d366' }} /> Free Setup</span>
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 18, color: '#25d366' }} /> 24/7 Support</span>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center" role="img" aria-label="CannyDocs Dashboard Screenshot showing document management interface with search, folders, and workflow features">
                <DocumentIcon sx={{ fontSize: 120, color: '#94a3b8' }} aria-hidden="true" />
                <p className="text-gray-600 font-semibold mt-6 text-lg">IMAGE PLACEHOLDER</p>
                <p className="text-sm text-gray-500 mt-2">CannyDocs Dashboard Screenshot</p>
                <p className="text-xs text-gray-400 mt-1">Recommended size: 1200x800px</p>
              </div>

            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center text-white">
              {[
                { number: "10+", label: "Happy Clients" },
                { number: "100K+", label: "Documents Managed" },
                { number: "80%", label: "OCR Accuracy" },
                { number: "99.9%", label: "Uptime Guarantee" },
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
                  { title: "What is CannyDocs?", href: "#what-is" },
                  { title: "Key Features & Capabilities", href: "#features" },
                  { title: "Benefits for Your Organization", href: "#benefits" },
                  { title: "Deployment Options", href: "#deployment" },
                  { title: "Industry Use Cases", href: "#use-cases" },
                  { title: "How CannyDocs Works", href: "#how-it-works" },
                  { title: "Technical Specifications", href: "#technical-specs" },
                  { title: "Integration Capabilities", href: "#integrations" },
                  { title: "Why Choose CannyDocs", href: "#comparison" },
                  { title: "Implementation Process", href: "#implementation" },
                  { title: "Security & Compliance", href: "#security" },
                  { title: "Frequently Asked Questions", href: "#faq" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-3 text-primary hover:text-primary/80 hover:bg-primary/5 p-3 rounded-lg transition-all group"
                  >
                    <ArrowIcon className="text-primary group-hover:translate-x-1 transition-transform" sx={{ fontSize: 20 }} />
                    <span className="font-medium">{item.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* What is CannyDocs */}
          <section id="what-is" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              What is CannyDocs Document Management Software?
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>CannyDocs</strong> is a comprehensive enterprise document management system (DMS) designed to eliminate paper-based
                workflows and digitize your entire document ecosystem. Whether you're managing invoices, contracts, HR records, or
                compliance documentation, CannyDocs provides a centralized platform to <strong>organize, search, retrieve, and share</strong> professional
                documents with military-grade security.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Built for modern businesses, CannyDocs operates seamlessly on any browser and offers flexible deployment options—<strong>cloud,
                on-premise, or hybrid</strong>. With advanced <strong>OCR technology powered by Elasticsearch</strong>, full-text search capabilities,
                and intuitive workflow automation, CannyDocs transforms how organizations handle document management challenges.
              </p>

              <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="font-semibold text-secondary mb-2">🎯 Perfect For:</p>
                <p className="text-gray-700">
                  Healthcare, Legal, Finance, Manufacturing, Government, and any organization managing large volumes of documents
                  requiring compliance, security, and efficient retrieval.
                </p>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section id="features" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Powerful Features That Set CannyDocs Apart
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Feature 1 */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <SearchIcon sx={{ fontSize: 32, color: '#3170b5' }} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Advanced OCR & Full-Text Search</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Built-in Elasticsearch and OCR engine with <strong>80% accuracy</strong> enables instant full-text search across
                  document names, metadata, and content—even within scanned images.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span>Search by name, content, or metadata</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span>Supports PDF, JPG, JPEG formats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span>Instant retrieval from 50,000+ documents</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <SecurityIcon sx={{ fontSize: 32, color: '#3170b5' }} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Enterprise-Grade Security</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Military-grade AES-256 encryption, role-based access control, and comprehensive audit trails ensure your
                  sensitive documents remain secure and compliant.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span>Auto-encrypt all documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span>Role-based permissions (RBAC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span>LDAP/Active Directory integration</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <WorkflowIcon sx={{ fontSize: 32, color: '#3170b5' }} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Intelligent Workflow Automation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Create custom approval workflows with automated alerts, email triggers, escalations, and deviation handling—no
                  coding required.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span>Drag-and-drop workflow builder</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span>Multi-level approval processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span>Automated email notifications</span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <ShareIcon sx={{ fontSize: 32, color: '#3170b5' }} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Secure Document Sharing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Share documents securely with time-bound encrypted links, email distribution, and granular permissions for
                  internal and external collaboration.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span>Time-bound encrypted links</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span>Email documents directly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span>Version control & watermarking</span>
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <CloudIcon sx={{ fontSize: 32, color: '#3170b5' }} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Flexible Cloud & On-Premise</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Choose your deployment model: Cloud (SaaS), On-Premise (full control), or Hybrid (best of both worlds) based
                  on your compliance and infrastructure needs.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span>Bulk upload via drag-and-drop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span>Automatic backup & disaster recovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span>Unlimited scalable storage</span>
                  </li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <StorageIcon sx={{ fontSize: 32, color: '#3170b5' }} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Smart Document Organization</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Organize with unlimited folder hierarchies, custom metadata fields, document sets, and intelligent tagging for
                  effortless categorization.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span>Unlimited folder hierarchy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span>Custom metadata & indexing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span>Auto-link related documents</span>
                  </li>
                </ul>
              </div>

            </div>
          </section>

          {/* Image Placeholder: Features Overview */}
          <div className="mb-20 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-12 text-center" role="img" aria-label="CannyDocs Features Infographic illustrating OCR technology, workflow automation, cloud storage, and security features">
            <TrendingUpIcon sx={{ fontSize: 80, color: '#94a3b8' }} aria-hidden="true" />
            <p className="text-gray-600 font-semibold mt-6 text-lg">IMAGE PLACEHOLDER</p>
            <p className="text-sm text-gray-500 mt-2">CannyDocs Features Infographic</p>
            <p className="text-xs text-gray-400 mt-1">Recommended size: 1400x700px</p>
          </div>

          {/* Benefits Section */}
          <section id="benefits" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Business Benefits of CannyDocs
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-8">
                <div className="text-5xl font-bold text-green-600 mb-3">75%</div>
                <h3 className="font-bold text-secondary text-lg mb-2">Faster Retrieval</h3>
                <p className="text-gray-600 text-sm">Find any document in seconds instead of hours with intelligent search</p>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-8">
                <div className="text-5xl font-bold text-primary mb-3">60%</div>
                <h3 className="font-bold text-secondary text-lg mb-2">Cost Reduction</h3>
                <p className="text-gray-600 text-sm">Eliminate physical storage, printing, and manual processing costs</p>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-xl p-8">
                <div className="text-5xl font-bold text-purple-600 mb-3">99%</div>
                <h3 className="font-bold text-secondary text-lg mb-2">Compliance Ready</h3>
                <p className="text-gray-600 text-sm">Meet GDPR, HIPAA, ISO 27001 requirements with audit trails</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              {[
                {
                  title: "1. Enhanced Productivity & Efficiency",
                  content: "Eliminate time-consuming document searches and manual filing. CannyDocs' intelligent OCR and search capabilities reduce document retrieval time by 75%, allowing employees to focus on high-value tasks instead of administrative overhead."
                },
                {
                  title: "2. Significant Cost Savings",
                  content: "Save on physical storage space (averaging $1,000 per filing cabinet annually), printing costs (70-80% reduction), and administrative labor (50% reduction through automation). Digital document management delivers ROI within the first year."
                },
                {
                  title: "3. Improved Security & Compliance",
                  content: "Military-grade AES-256 encryption, role-based access controls, and comprehensive audit trails ensure compliance with GDPR, HIPAA, SOX, and ISO 27001 standards. Automated retention policies and secure deletion protect sensitive information."
                },
                {
                  title: "4. Better Collaboration & Remote Work",
                  content: "Enable seamless collaboration across distributed teams with secure document sharing, version control, and simultaneous access. Perfect for hybrid work environments where teams need instant access to documents from anywhere."
                },
                {
                  title: "5. Disaster Recovery & Business Continuity",
                  content: "Automated backups, geo-redundant storage, and instant recovery capabilities protect critical business documents from fires, floods, and natural disasters. Resume operations within hours instead of weeks."
                },
                {
                  title: "6. Environmental Sustainability",
                  content: "Reduce your carbon footprint by going paperless. The average office uses 10,000 sheets of paper annually. CannyDocs helps organizations demonstrate corporate social responsibility while cutting costs."
                },
              ].map((benefit, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl font-bold text-secondary mb-3">{benefit.title}</h3>
                  <p className="text-lg leading-relaxed">{benefit.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA - After Benefits */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/30 rounded-xl p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                Ready to Save 60% on Document Processing Costs?
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Join growing organizations that have transformed their document workflows with CannyDocs. Start your free 30-day trial today.
              </p>
              <Link
                href="#get-started"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowIcon sx={{ fontSize: 20 }} />
              </Link>
            </div>
          </section>

          {/* Deployment Options */}
          <section id="deployment" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Flexible Deployment Options
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {/* On-Premise */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <ComputerIcon sx={{ fontSize: 32, color: '#3170b5' }} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">On-Premise</h3>
                <p className="text-gray-700 mb-6">Install on your company infrastructure for complete data control and customization.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Full data sovereignty</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">No recurring cloud fees</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Custom integrations</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-secondary">Best for: Government, Healthcare, Finance</p>
              </div>

              {/* Cloud */}
              <div className="bg-gradient-to-br from-primary/5 to-white border-2 border-primary rounded-xl p-8 relative shadow-lg">
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <PublicIcon sx={{ fontSize: 32, color: '#3170b5' }} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Cloud (SaaS)</h3>
                <p className="text-gray-700 mb-6">Fully hosted solution with automatic updates, backups, and 24/7 monitoring.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Zero infrastructure investment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Instant deployment & scaling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Automatic updates</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-secondary">Best for: SMBs, Startups, Distributed Teams</p>
              </div>

              {/* Hybrid */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <BusinessIcon sx={{ fontSize: 32, color: '#3170b5' }} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Hybrid</h3>
                <p className="text-gray-700 mb-6">Cloud storage with on-premise application access for maximum flexibility.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Best of both worlds</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Scalable cloud storage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">On-premise control</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-secondary">Best for: Enterprises, Multi-Location Businesses</p>
              </div>

            </div>
          </section>

          {/* Image Placeholder: Deployment */}
          <div className="mb-20 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-12 text-center" role="img" aria-label="Deployment Options Diagram showing Cloud, On-Premise, and Hybrid deployment architectures for CannyDocs">
            <PublicIcon sx={{ fontSize: 80, color: '#94a3b8' }} aria-hidden="true" />
            <p className="text-gray-600 font-semibold mt-6 text-lg">IMAGE PLACEHOLDER</p>
            <p className="text-sm text-gray-500 mt-2">Deployment Options Diagram</p>
            <p className="text-xs text-gray-400 mt-1">Recommended size: 1200x600px</p>
          </div>

          {/* Use Cases */}
          <section id="use-cases" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Industry-Specific Use Cases
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  industry: "Healthcare & Medical",
                  icon: <SecurityIcon sx={{ fontSize: 32 }} />,
                  description: "Manage patient records, medical histories, insurance claims, and lab results with HIPAA-compliant security.",
                  features: ["Electronic Health Records (EHR)", "HIPAA compliance", "Patient portal access", "Automated retention policies"]
                },
                {
                  industry: "Legal & Law Firms",
                  icon: <DocumentIcon sx={{ fontSize: 32 }} />,
                  description: "Organize case files, contracts, legal briefs, and client communications with matter-based filing.",
                  features: ["Matter-centric organization", "Client portals", "Conflict checking", "Version control"]
                },
                {
                  industry: "Finance & Banking",
                  icon: <SecurityIcon sx={{ fontSize: 32 }} />,
                  description: "Handle loan applications, KYC documents, compliance reports with SOX and regulatory compliance.",
                  features: ["KYC/AML documentation", "Loan processing workflows", "SOX compliance", "Audit trails"]
                },
                {
                  industry: "Manufacturing",
                  icon: <StorageIcon sx={{ fontSize: 32 }} />,
                  description: "Manage quality certificates, supplier contracts, shipping documents across global operations.",
                  features: ["Certificate tracking", "Supplier management", "ISO quality integration", "Multi-location access"]
                },
              ].map((useCase, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">{useCase.industry}</h3>
                  <p className="text-gray-700 mb-6">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.features.map((feature, fidx) => (
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

          {/* CTA - After Use Cases */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-xl p-8 text-center text-white shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                See CannyDocs in Action for Your Industry
              </h3>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Schedule a personalized demo tailored to your industry&apos;s specific document management needs.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                Schedule Demo
                <ArrowIcon sx={{ fontSize: 20 }} />
              </Link>
            </div>
          </section>

          {/* How CannyDocs Works */}
          <section id="how-it-works" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              How CannyDocs Works: Simple 4-Step Process
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Upload & Digitize",
                  description: "Bulk upload paper documents via scanner or drag-and-drop digital files. CannyDocs automatically processes PDFs, JPEGs, and images with OCR extraction.",
                  icon: <CloudIcon sx={{ fontSize: 40 }} />
                },
                {
                  step: "2",
                  title: "Organize & Index",
                  description: "Automatically classify documents into folder hierarchies with custom metadata, tags, and categories. AI-powered suggestions speed up organization.",
                  icon: <StorageIcon sx={{ fontSize: 40 }} />
                },
                {
                  step: "3",
                  title: "Search & Retrieve",
                  description: "Find any document in seconds using full-text search across filenames, metadata, and content. Advanced filters narrow results instantly.",
                  icon: <SearchIcon sx={{ fontSize: 40 }} />
                },
                {
                  step: "4",
                  title: "Share & Collaborate",
                  description: "Securely share documents with time-bound links, email distribution, or workflow approvals. Track all access with audit logs.",
                  icon: <ShareIcon sx={{ fontSize: 40 }} />
                },
              ].map((process, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto shadow-lg">
                    {process.step}
                  </div>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto text-primary">
                    {process.icon}
                  </div>
                  <h3 className="font-bold text-xl text-secondary mb-3">{process.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{process.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Specifications */}
          <section id="technical-specs" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Technical Specifications & Capabilities
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">System Requirements</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-secondary mb-2">Cloud Deployment:</p>
                    <ul className="space-y-1 text-gray-700 text-sm ml-4">
                      <li>• Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)</li>
                      <li>• Internet connection (minimum 5 Mbps recommended)</li>
                      <li>• No software installation required</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-secondary mb-2">On-Premise Deployment:</p>
                    <ul className="space-y-1 text-gray-700 text-sm ml-4">
                      <li>• Windows Server 2016+ or Linux (Ubuntu 18.04+, RHEL 7+)</li>
                      <li>• 16GB RAM minimum (32GB recommended)</li>
                      <li>• 100GB SSD storage (scales with document volume)</li>
                      <li>• SQL Server 2016+ or PostgreSQL 12+</li>
                      <li>• .NET Core 6.0 runtime</li>
                      <li>• Elasticsearch 7.x for search functionality</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Search Speed</span>
                    <span className="text-primary font-bold">0.3s average</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">OCR Accuracy</span>
                    <span className="text-primary font-bold">Up to 80%</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Concurrent Users</span>
                    <span className="text-primary font-bold">10,000+</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Document Capacity</span>
                    <span className="text-primary font-bold">Unlimited</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Uptime SLA</span>
                    <span className="text-primary font-bold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700 font-medium">Backup Frequency</span>
                    <span className="text-primary font-bold">Real-time</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Integration Capabilities */}
          <section id="integrations" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Seamless Integration with Your Existing Systems
            </h2>

            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-primary/20 rounded-xl p-8 mb-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                CannyDocs doesn't replace your existing tools—it enhances them. Our comprehensive API and pre-built connectors
                integrate seamlessly with your ERP, CRM, accounting software, and custom applications to create a unified document
                management ecosystem.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  category: "Enterprise Systems",
                  integrations: ["SAP ERP", "Oracle E-Business Suite", "Microsoft Dynamics", "NetSuite", "Workday"],
                  icon: <BusinessIcon sx={{ fontSize: 32 }} />
                },
                {
                  category: "Collaboration Tools",
                  integrations: ["Microsoft Office 365", "Google Workspace", "SharePoint", "Slack", "Microsoft Teams"],
                  icon: <ShareIcon sx={{ fontSize: 32 }} />
                },
                {
                  category: "Authentication",
                  integrations: ["Active Directory", "LDAP", "SAML 2.0", "OAuth 2.0", "Single Sign-On (SSO)"],
                  icon: <SecurityIcon sx={{ fontSize: 32 }} />
                },
                {
                  category: "CRM Platforms",
                  integrations: ["Salesforce", "HubSpot", "Zoho CRM", "Microsoft Dynamics CRM", "Custom CRM"],
                  icon: <BusinessIcon sx={{ fontSize: 32 }} />
                },
                {
                  category: "Accounting Software",
                  integrations: ["QuickBooks", "Xero", "SAP FICO", "Oracle Financials", "Sage"],
                  icon: <DocumentIcon sx={{ fontSize: 32 }} />
                },
                {
                  category: "Custom Applications",
                  integrations: ["RESTful API", "SOAP Web Services", "Webhooks", "CSV/Excel Import", "Database Direct Access"],
                  icon: <ComputerIcon sx={{ fontSize: 32 }} />
                },
              ].map((integration, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary transition-colors">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    {integration.icon}
                  </div>
                  <h3 className="font-bold text-lg text-secondary mb-4">{integration.category}</h3>
                  <ul className="space-y-2">
                    {integration.integrations.map((item, iidx) => (
                      <li key={iidx} className="flex items-start gap-2">
                        <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose CannyDocs */}
          <section id="comparison" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Why Organizations Choose CannyDocs Over Traditional Filing
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                    <th className="py-4 px-6 text-left font-bold">Feature</th>
                    <th className="py-4 px-6 text-center font-bold">Traditional Filing</th>
                    <th className="py-4 px-6 text-center font-bold">CannyDocs DMS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Document Retrieval Time", traditional: "10-30 minutes", cannydocs: "< 5 seconds" },
                    { feature: "Search Capability", traditional: "Manual browsing", cannydocs: "Full-text OCR search" },
                    { feature: "Storage Cost", traditional: "High annual costs", cannydocs: "Cost-effective solution" },
                    { feature: "Security & Access Control", traditional: "Physical locks only", cannydocs: "AES-256 encryption, RBAC" },
                    { feature: "Remote Access", traditional: "Not possible", cannydocs: "Anytime, anywhere" },
                    { feature: "Disaster Recovery", traditional: "None (fire/flood risk)", cannydocs: "Automated backup, geo-redundancy" },
                    { feature: "Version Control", traditional: "Manual tracking", cannydocs: "Automatic with full history" },
                    { feature: "Compliance Audit Trail", traditional: "Paper logs", cannydocs: "Complete digital audit logs" },
                    { feature: "Collaboration", traditional: "Physical handoff", cannydocs: "Real-time sharing" },
                    { feature: "Environmental Impact", traditional: "High paper consumption", cannydocs: "100% paperless" },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-4 px-6 font-semibold text-secondary border-t border-gray-200">{row.feature}</td>
                      <td className="py-4 px-6 text-center text-gray-600 border-t border-gray-200">
                        <span className="inline-flex items-center gap-1">
                          <CancelIcon sx={{ fontSize: 18, color: '#ef4444' }} />
                          {row.traditional}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center font-semibold text-primary border-t border-gray-200">
                        <span className="inline-flex items-center gap-1">
                          <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} />
                          {row.cannydocs}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Customer Testimonials */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              What Our Customers Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "CannyDocs transformed our document workflow completely. We went from spending 2 hours daily searching for patient records to finding them in seconds. The OCR accuracy is impressive, and HIPAA compliance was seamless.",
                  author: "Dr. Sarah Mitchell",
                  role: "Medical Director",
                  company: "Riverside Healthcare Center",
                  rating: 5
                },
                {
                  quote: "Implementation was smooth, and the ROI was evident within 3 months. We eliminated 5 filing cabinets and reduced document processing costs by 60%. The workflow automation saved our team 15 hours per week.",
                  author: "Michael Chen",
                  role: "Operations Manager",
                  company: "Thompson Legal Associates",
                  rating: 5
                },
                {
                  quote: "The hybrid deployment option was perfect for our compliance needs. We keep sensitive data on-premise while leveraging cloud scalability. Integration with our ERP system was straightforward with their API.",
                  author: "Jennifer Williams",
                  role: "IT Director",
                  company: "GlobalTech Manufacturing",
                  rating: 5
                },
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} sx={{ fontSize: 20, color: '#FFD700' }} />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-secondary">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-primary font-semibold">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-green-50 border-2 border-green-200 px-6 py-4 rounded-xl">
                <StarIcon sx={{ fontSize: 28, color: '#FFD700' }} />
                <div className="text-left">
                  <div className="text-2xl font-bold text-secondary">4.9/5.0</div>
                  <div className="text-sm text-gray-600">Based on client feedback</div>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Process */}
          <section id="implementation" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Simple Implementation Process
            </h2>

            <div className="space-y-6">
              {[
                {
                  phase: "Phase 1: Discovery & Planning (Week 1)",
                  description: "Our implementation team conducts a detailed discovery session to understand your document types, workflows, user roles, and compliance requirements. We create a customized implementation plan with timelines and milestones.",
                  deliverables: ["Requirements documentation", "System architecture design", "Project timeline", "Success metrics definition"]
                },
                {
                  phase: "Phase 2: Configuration & Setup (Week 2)",
                  description: "We configure CannyDocs based on your requirements—setting up folder structures, metadata fields, user roles, permissions, and workflow templates. For on-premise deployments, we install and configure all necessary infrastructure.",
                  deliverables: ["Configured CannyDocs instance", "User accounts & permissions", "Workflow templates", "Integration setup"]
                },
                {
                  phase: "Phase 3: Data Migration (Week 3)",
                  description: "Our migration specialists transfer your existing documents from legacy systems, file servers, or physical archives. We preserve folder structures, metadata, and version history. OCR processing is applied to scanned documents.",
                  deliverables: ["Migrated documents", "OCR processing complete", "Data validation report", "Backup verification"]
                },
                {
                  phase: "Phase 4: Training & Testing (Week 4)",
                  description: "Comprehensive training sessions for administrators, power users, and end users. We conduct User Acceptance Testing (UAT) with your team to ensure everything works as expected. Final adjustments based on feedback.",
                  deliverables: ["Admin training (2 days)", "User training sessions", "UAT completion", "Training materials & videos"]
                },
                {
                  phase: "Phase 5: Go-Live & Support (Week 5+)",
                  description: "Official launch with our team on standby for immediate support. We monitor system performance, address any issues, and provide ongoing optimization recommendations. Regular check-ins during the first month.",
                  deliverables: ["Production launch", "24/7 support activation", "Performance monitoring", "Post-launch optimization"]
                },
              ].map((phase, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-secondary mb-3">{phase.phase}</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">{phase.description}</p>
                      <div>
                        <p className="font-semibold text-secondary mb-2">Deliverables:</p>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {phase.deliverables.map((deliverable, didx) => (
                            <li key={didx} className="flex items-start gap-2">
                              <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Security & Compliance */}
          <section id="security" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Enterprise-Grade Security & Compliance
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Security Features</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Military-Grade Encryption",
                      description: "All documents encrypted with AES-256 encryption at rest and TLS 1.3 in transit"
                    },
                    {
                      title: "Role-Based Access Control (RBAC)",
                      description: "Granular permissions at document, folder, and feature levels with custom role definitions"
                    },
                    {
                      title: "Comprehensive Audit Trails",
                      description: "Track every action—view, edit, download, share—with timestamp, user, and IP address"
                    },
                    {
                      title: "Secure Authentication",
                      description: "LDAP/Active Directory integration, SSO, multi-factor authentication (MFA)"
                    },
                    {
                      title: "Data Loss Prevention (DLP)",
                      description: "Prevent unauthorized downloads, watermark documents, expire shared links automatically"
                    },
                    {
                      title: "Regular Security Audits",
                      description: "Annual penetration testing, vulnerability assessments, and security certifications"
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="pb-4 border-b border-gray-200 last:border-0">
                      <h4 className="font-bold text-secondary mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Compliance Standards</h3>
                <div className="space-y-4">
                  {[
                    {
                      standard: "ISO 27001:2013",
                      description: "Information security management system certification"
                    },
                    {
                      standard: "GDPR Compliant",
                      description: "Full compliance with EU General Data Protection Regulation"
                    },
                    {
                      standard: "HIPAA Compliant",
                      description: "Protected Health Information (PHI) handling for healthcare organizations"
                    },
                    {
                      standard: "SOC 2 Type II",
                      description: "Security, availability, and confidentiality controls audited"
                    },
                    {
                      standard: "SOX Compliance",
                      description: "Sarbanes-Oxley financial document retention and audit trails"
                    },
                    {
                      standard: "PCI DSS",
                      description: "Payment Card Industry Data Security Standard for financial documents"
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="pb-4 border-b border-gray-200 last:border-0">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckIcon sx={{ fontSize: 18, color: '#25d366' }} />
                        <h4 className="font-bold text-secondary">{item.standard}</h4>
                      </div>
                      <p className="text-sm text-gray-600 ml-7">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="font-semibold text-secondary mb-2">Data Residency & Sovereignty</p>
              <p className="text-gray-700">
                For organizations with strict data residency requirements, CannyDocs offers region-specific cloud hosting
                (US, EU, Asia-Pacific, Middle East) or on-premise deployment for complete data sovereignty. All data remains
                within your chosen jurisdiction, ensuring compliance with local data protection laws.
              </p>
            </div>
          </section>

          {/* Author Bio Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-white border-2 border-primary/20 rounded-xl p-8 shadow-md">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0 shadow-lg">
                  C
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-secondary mb-2">About the Author</h3>
                    <p className="text-lg font-semibold text-primary mb-1">Christopher</p>
                    <p className="text-sm text-gray-600">Head of Technical Department & Investor | CannyMinds Technology Solutions</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Christopher is the Head of Technical Department and Investor at CannyMinds Technology Solutions with over 10 years of experience in enterprise software development and document management systems. He leads the technical vision and development of CannyDocs and oversees all product innovation, ensuring cutting-edge solutions that help businesses achieve digital transformation and operational efficiency.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} />
                      <span>10+ years DMS experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} />
                      <span>Technical Leadership</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} />
                      <span>ISO 27001 Certified</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 italic">
                      Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                {
                  q: "What is CannyDocs?",
                  a: "CannyDocs is an enterprise document management software that helps organizations digitize, organize, and manage documents with OCR technology, workflow automation, and secure cloud/on-premise storage."
                },
                {
                  q: "How does CannyDocs OCR work?",
                  a: "CannyDocs uses advanced OCR powered by Elasticsearch to convert scanned documents into searchable text with up to 80% accuracy, enabling full-text search across all document content."
                },
                {
                  q: "Is CannyDocs secure?",
                  a: "Yes. CannyDocs implements military-grade AES-256 encryption, role-based access control, detailed audit trails, and compliance with ISO 27001, GDPR, HIPAA, and SOC 2 standards."
                },
                {
                  q: "What deployment options are available?",
                  a: "CannyDocs offers Cloud (SaaS), On-Premise, and Hybrid deployment models to match your compliance and infrastructure requirements."
                },
                {
                  q: "What file formats does CannyDocs support?",
                  a: "CannyDocs supports PDF, JPG, JPEG, PNG, and TIFF files. The OCR engine works best with PDF and high-quality scanned images."
                },
                {
                  q: "Can CannyDocs handle workflow automation?",
                  a: "Yes. CannyDocs includes a drag-and-drop workflow builder for custom approval processes, automated notifications, and multi-level approvals—no coding required."
                },
                {
                  q: "How long does implementation take?",
                  a: "Cloud deployment takes 1-2 weeks including configuration and training. On-premise deployment takes 2-4 weeks for infrastructure setup and customization."
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes. CannyDocs offers a 30-day free trial with no credit card required, giving you full access to all features including OCR, workflows, and cloud storage."
                },
                {
                  q: "Can I integrate CannyDocs with other systems?",
                  a: "Yes. CannyDocs provides API integration for ERP systems, CRM platforms, accounting software, and custom applications. LDAP/Active Directory integration is also supported."
                },
                {
                  q: "Does CannyDocs support mobile access?",
                  a: "Yes. CannyDocs is fully responsive and accessible via mobile browsers on iOS and Android devices for viewing, searching, and sharing documents."
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary transition-colors">
                  <h3 className="font-bold text-lg text-secondary mb-3">{faq.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Explore Our Complete Business Solutions Suite
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              CannyDocs works seamlessly with our other enterprise solutions. Build a complete digital transformation ecosystem for your organization.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "CannyHR",
                  title: "HR Management System",
                  description: "Comprehensive HR solution for employee management, payroll, attendance, and performance tracking.",
                  features: ["Employee Records", "Payroll Automation", "Leave Management", "Performance Reviews"],
                  link: "/solutions/hr-management",
                  color: "from-green-50 to-white border-green-200"
                },
                {
                  name: "CannyScan",
                  title: "Enterprise Scanning Solution",
                  description: "High-speed document scanning with OCR, batch processing, and direct integration with CannyDocs.",
                  features: ["Batch Scanning", "Auto-Classification", "Quality Enhancement", "Direct Upload to CannyDocs"],
                  link: "/solutions/scanning-solution",
                  color: "from-purple-50 to-white border-purple-200"
                },
                {
                  name: "CannyTrack",
                  title: "Document Tracking System",
                  description: "Real-time tracking of physical and digital documents with barcode/QR integration and chain of custody.",
                  features: ["Barcode Tracking", "Chain of Custody", "Location Monitoring", "Audit Compliance"],
                  link: "/solutions/tracking-system",
                  color: "from-orange-50 to-white border-orange-200"
                },
              ].map((product, idx) => (
                <Link
                  key={idx}
                  href={product.link}
                  className={`bg-gradient-to-br ${product.color} border-2 rounded-xl p-8 hover:shadow-lg transition-all group block`}
                >
                  <h3 className="text-2xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-4">{product.title}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-2">
                        <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowIcon sx={{ fontSize: 18 }} />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Pricing CTA */}
          <section id="get-started" className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Document Management?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Join growing businesses using CannyDocs to digitize and automate document workflows. Start your 30-day free trial today—no credit card required.
            </p>


            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link
                href="/#contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-flex items-center gap-2"
              >
                Start 30-Day Free Trial
                <CheckIcon sx={{ fontSize: 20 }} />
              </Link>
              <Link
                href="/#contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Request Demo
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-white/80 flex-wrap">
              <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 18 }} /> No Credit Card</span>
              <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 18 }} /> Free Setup & Training</span>
              <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 18 }} /> 24/7 Support</span>
            </div>
          </section>

        </article>

      </div>

      <Footer />
    </>
  );
}
