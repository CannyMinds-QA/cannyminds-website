import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SecureImage from "@/components/ui/SecureImage";
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
import FAQ from "@/components/sections/FAQ";

// SEO Metadata
export const metadata: Metadata = {
  title: "CannyECM - Enterprise ECM | Content Management 2026",
  description: "Enterprise Content Management with 99% OCR accuracy, workflow automation, cloud/on-premise. Organize 50,000+ documents. 30-day free trial available.",
  keywords: [
    "CannyECM",
    "content management software",
    "enterprise ECM",
    "enterprise content management",
    "OCR content management",
    "workflow automation software",
    "cloud document storage",
    "on-premise ECM",
    "content management system",
    "paperless office solution",
    "secure document storage"
  ],
  authors: [{ name: "Christopher" }],
  openGraph: {
    title: "CannyECM - Enterprise ECM | Content Management 2026",
    description: "Enterprise Content Management with 99% OCR accuracy, workflow automation, cloud/on-premise. Organize 50,000+ documents. 30-day free trial available.",
    type: "website",
    siteName: 'CannyMinds',
    locale: 'en_US',
    url: "https://www.cannymindstech.com/product/enterprise-content-management",
    images: [
      {
        url: "https://www.cannymindstech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CannyECM Content Management Software",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "CannyECM - Enterprise ECM | Content Management 2026",
    description: "Enterprise Content Management with 99% OCR accuracy, workflow automation, cloud/on-premise. Organize 50,000+ documents. 30-day free trial available.",
    images: ['https://www.cannymindstech.com/og-image.jpg'],
  },
  alternates: {
    canonical: "https://www.cannymindstech.com/product/enterprise-content-management",
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
          "name": "CannyECM - Content Management Software"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "CannyECM - Enterprise Content Management Software",
      "description": "Comprehensive guide to CannyECM enterprise content management system with OCR, workflow automation, and cloud/on-premise deployment options.",
      "image": "https://www.cannymindstech.com/images/CannyECM-dashboard.jpg",
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
        "@id": "https://www.cannymindstech.com/solutions/document-management"
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "CannyECM",
      "applicationCategory": "BusinessApplication",
      "description": "Enterprise content management system with OCR and workflow automation",
      "operatingSystem": "Web, Windows, macOS, Linux",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": "https://www.cannymindstech.com/product/enterprise-content-management",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "Custom Pricing",
          "priceCurrency": "INR"
        }
      },
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
          "name": "What is CannyECM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CannyECM is an enterprise content management software that helps organizations digitize, organize, and manage documents with OCR technology, workflow automation, and secure cloud/on-premise storage."
          }
        },
        {
          "@type": "Question",
          "name": "What are the system requirements for CannyECM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For cloud deployment, you only need a modern web browser (Chrome, Firefox, Safari, Edge). For on-premise, you need Windows Server 2016+/Linux, 16GB RAM minimum, SQL Server/PostgreSQL database, and .NET Core runtime."
          }
        },
        {
          "@type": "Question",
          "name": "Does CannyECM support mobile access?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. CannyECM is fully responsive and accessible via mobile browsers on iOS and Android devices. Native mobile apps are planned for future releases."
          }
        }
      ]
    }
  ]
};

export default function CannyECMProductPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen bg-white">

        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b border-gray-200 py-4 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm overflow-x-auto">
              <li><Link href="/" className="text-primary hover:text-primary/80 whitespace-nowrap">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/#products" className="text-primary hover:text-primary/80 whitespace-nowrap">Products</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600 font-medium truncate">CannyECM - Content Management Software</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-white to-primary/5 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">

              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                  <StarIcon sx={{ fontSize: 16 }} />
                  Trusted by Growing Businesses Worldwide
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 leading-tight">
                  Transform Your Document Management with <span className="text-primary">CannyECM</span>
                </h1>

                <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                  Enterprise-grade document management system with <strong>99% OCR accuracy</strong>, intelligent workflow automation,
                  and military-grade security. Go paperless and organize <strong>50,000+ documents</strong> effortlessly with cloud,
                  on-premise, or hybrid deployment.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Link
                    href="#get-started"
                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 text-sm"
                  >
                    Start 30-Day Free Trial
                    <ArrowIcon sx={{ fontSize: 18 }} />
                  </Link>
                  <Link
                    href="#features"
                    className="bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-all inline-flex items-center justify-center gap-2 text-sm"
                  >
                    Explore Features
                    <DocumentIcon sx={{ fontSize: 18 }} />
                  </Link>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap mb-4">
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} /> No Credit Card</span>
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} /> Free Setup</span>
                  <span className="flex items-center gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} /> 24/7 Support</span>
                </div>

                {/* Social Share */}
                <div className="flex items-center gap-3">
                  <SocialShare
                    title="CannyECM - Enterprise Content Management Software"
                    description="Transform your content management with CannyECM. 99% OCR accuracy, workflow automation, and enterprise security."
                  />
                  <span className="text-xs text-gray-500">Share this product</span>
                </div>
              </div>

              {/* Product Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <SecureImage
                  src="/images/products/cannyecm/cannyecm1.png"
                  alt="CannyECM Dashboard Screenshot showing document management interface with search, folders, and workflow features"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center text-white">
              {[
                { number: "100+", label: "Happy Clients" },
                { number: "100K+", label: "Documents Managed" },
                { number: "99%", label: "OCR Accuracy" },
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
                  { title: "What is CannyECM?", href: "#what-is" },
                  { title: "Key Features & Capabilities", href: "#features" },
                  { title: "Benefits for Your Organization", href: "#benefits" },
                  { title: "Deployment Options", href: "#deployment" },
                  { title: "Industry Use Cases", href: "#use-cases" },
                  { title: "How CannyECM Works", href: "#how-it-works" },
                  { title: "Technical Specifications", href: "#technical-specs" },
                  { title: "Integration Capabilities", href: "#integrations" },
                  { title: "Why Choose CannyECM", href: "#comparison" },
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
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* What is CannyECM */}
          <section id="what-is" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              What is CannyECM Content Management Software?
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>CannyECM</strong> is a comprehensive enterprise content management system (ECM) designed to eliminate paper-based
                workflows and digitize your entire document ecosystem. Whether you&apos;re managing invoices, contracts, <Link href="/product/hr-management" className="text-primary hover:underline">HR records</Link>, or
                compliance documentation, CannyECM provides a centralized platform to <strong>organize, search, retrieve, and share</strong> professional
                documents with military-grade security.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Built for modern businesses, CannyECM operates seamlessly on any browser and offers flexible deployment options <strong>cloud,
                  on-premise, or hybrid</strong>. With advanced <strong>OCR technology powered by Elasticsearch</strong>, full-text search capabilities,
                and intuitive workflow automation, CannyECM transforms how organizations handle content management challenges.
              </p>

              <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="font-semibold text-secondary mb-2">🎯 Perfect For:</p>
                <p className="text-gray-700">
                  <Link href="/solutions/healthcare" className="text-primary hover:underline">Healthcare</Link>, <Link href="/solutions/professional-services/legal" className="text-primary hover:underline">Legal</Link>, <Link href="/solutions/finance" className="text-primary hover:underline">Finance</Link>, <Link href="/solutions/manufacturing" className="text-primary hover:underline">Manufacturing</Link>, Government, and any organization managing large volumes of documents
                  requiring compliance, security, and efficient retrieval. For pharmaceutical compliance, explore our <Link href="/solutions/pharmaceutical" className="text-primary hover:underline">Pharmaceutical Solutions</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section id="features" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
              Complete Features of CannyECM
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              CannyECM comes packed with everything you need to manage documents efficiently. Here&apos;s what you can do with our system.
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-2">Secure Login & Authentication</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Log in securely using your company credentials through SSO or LDAP integration. Enable two-factor authentication (MFA) for extra protection. Login with Azure, Google, or OAuth. Administrators can restrict access by IP address, set auto-logout after inactivity, and configure password policies with expiry and reset options.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-2">Dashboard & Analytics</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Get a quick overview of your entire document system at a glance. See total cabinets, folders, and files count along with storage usage. Track active users and view metadata statistics to understand how your document library is growing.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-2">User Management</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Create, update, and deactivate users easily. Clone user settings to quickly create similar accounts. Add guest users with time-limited access and assign reporting managers. When an employee leaves, reassign their documents to another user. Import and export users in bulk for easy onboarding. For complete HR workflows, explore our <Link href="/product/hr-management" className="text-primary hover:underline">HR Management System</Link>.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-2">Roles & Permissions</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Control who can view, edit, or delete files by creating custom roles for different teams. Set permissions at file, folder, or cabinet level and apply them to all subfolders automatically. Use ready-made role templates and track permission changes for audit purposes.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-2">Powerful Search</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Find any document in seconds using OCR technology that reads even scanned files. For high-volume document digitization, our <Link href="/product/scanning-solution" className="text-primary hover:underline">Enterprise Scanning Solution</Link> integrates seamlessly. Search by metadata, tags, document type, date range, or file type. Use AND/OR filters for precise results.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-2">Reports & Audit Trail</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Track every action on your documents with detailed logs. See who viewed, edited, or downloaded files along with device and IP details. Generate audit reports in PDF format with hash verification. For physical document tracking with barcode and chain of custody, see our <Link href="/product/tracking-system" className="text-primary hover:underline">Document Tracking System</Link>.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-2">Document Organization</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Organize documents in cabinets and folders with unlimited folder levels. Switch between thumbnail and list view. Sort by name, date modified, or date created. Navigate easily with tree view and copy or move files between folders. See storage used per cabinet or folder.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-2">File Viewing & Editing</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  View documents directly in your browser without downloading. Upload files using drag and drop. Add annotations, sticky notes, stamps, watermarks, and digital signatures. Zoom, rotate, and view in full screen. Print or download files with annotations included.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-2">Version Control</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Never lose previous versions of your documents. The system automatically saves new versions when you edit files. See what changed between versions and restore any previous version with one click. Smart detection prevents duplicate uploads.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-2">Office Document Editing</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Edit Word, Excel, and PowerPoint files directly in your browser. Multiple users can collaborate on the same file at the same time. All changes are saved automatically as new versions.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-2">Supports All File Types</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Store and view PDF documents, Microsoft Office files (Word, Excel, PowerPoint), images (JPG, PNG, GIF, BMP, TIFF), audio and video files, CAD drawings (DWG format), and text or CSV files.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-2">Workflow & Approvals</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Create approval workflows for documents that need review by multiple people. Design workflows with visual diagram builder. Add multiple approvers with conditions and set deadlines with automatic reminders.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-2">Metadata & Custom Fields</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Add custom information to documents like expiry dates, invoice numbers, or business-specific data. Create custom fields with validation rules. Set retention periods and reminders.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-2">Master Data Management</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Manage groups, departments, designations, locations, and categories in one place. Create document types and tags to classify files. Set up email templates for notifications. Import or export master data in bulk.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-2">System Configuration</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Set up company details and logo. Configure email settings for notifications. Set password policies and session timeouts. Configure SSO for company login and set up bulk upload configurations.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-2">File Sync & Storage</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Sync files from network drives or cloud storage. Choose manual or automatic sync and import files with metadata from CSV. Connect to local storage or Amazon S3. Handle conflicts when the same file is modified in multiple places.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-2">System Monitoring</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Monitor system health and track background processes. Track file encryption and OCR processing queues. Monitor email and download queues. View system health status and analyze logs to identify issues.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-2">Trash & Recovery</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Deleted files go to trash first, so you can recover them if needed. View file properties before restoring. Permanently delete files only when certain they are no longer needed.
                </p>
              </div>
            </div>
          </section>



          {/* Benefits Section */}
          <section id="benefits" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Business Benefits of CannyECM
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
                  content: "Eliminate time-consuming document searches and manual filing. CannyECM' intelligent OCR and search capabilities reduce document retrieval time by 75%, allowing employees to focus on high-value tasks instead of administrative overhead."
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
                  content: "Reduce your carbon footprint by going paperless. The average office uses 10,000 sheets of paper annually. CannyECM helps organizations demonstrate corporate social responsibility while cutting costs."
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
                Join growing organizations that have transformed their document workflows with CannyECM. Start your free 30-day trial today.
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



          {/* Use Cases */}
          <section id="use-cases" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Industry-Specific Use Cases
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Healthcare */}
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                  <SecurityIcon sx={{ fontSize: 32 }} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Healthcare & Medical</h3>
                <p className="text-gray-700 mb-6">
                  Manage patient records, medical histories, insurance claims, and lab results with HIPAA-compliant security. <Link href="/solutions/healthcare" className="text-primary hover:underline">Learn more about healthcare solutions</Link>.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" /><span className="text-sm text-gray-600">Electronic Health Records (EHR)</span></div>
                  <div className="flex items-start gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" /><span className="text-sm text-gray-600">HIPAA compliance</span></div>
                  <div className="flex items-start gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" /><span className="text-sm text-gray-600">Patient portal access</span></div>
                  <div className="flex items-start gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" /><span className="text-sm text-gray-600">Automated retention policies</span></div>
                </div>
              </div>

              {/* Legal */}
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                  <DocumentIcon sx={{ fontSize: 32 }} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Legal & Law Firms</h3>
                <p className="text-gray-700 mb-6">
                  Organize case files, contracts, legal briefs, and client communications with matter-based filing. Explore our <Link href="/solutions/professional-services/legal" className="text-primary hover:underline">legal document management solutions</Link>.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" /><span className="text-sm text-gray-600">Matter-centric organization</span></div>
                  <div className="flex items-start gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" /><span className="text-sm text-gray-600">Client portals</span></div>
                  <div className="flex items-start gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" /><span className="text-sm text-gray-600">Conflict checking</span></div>
                  <div className="flex items-start gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" /><span className="text-sm text-gray-600">Version control</span></div>
                </div>
              </div>

              {/* Finance */}
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                  <SecurityIcon sx={{ fontSize: 32 }} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Finance & Banking</h3>
                <p className="text-gray-700 mb-6">
                  Handle loan applications, KYC documents, compliance reports with SOX and regulatory compliance. See our <Link href="/solutions/finance" className="text-primary hover:underline">Finance solutions</Link>.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" /><span className="text-sm text-gray-600">KYC/AML documentation</span></div>
                  <div className="flex items-start gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" /><span className="text-sm text-gray-600">Loan processing workflows</span></div>
                  <div className="flex items-start gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" /><span className="text-sm text-gray-600">SOX compliance</span></div>
                  <div className="flex items-start gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" /><span className="text-sm text-gray-600">Audit trails</span></div>
                </div>
              </div>

              {/* Manufacturing */}
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                  <StorageIcon sx={{ fontSize: 32 }} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Manufacturing</h3>
                <p className="text-gray-700 mb-6">
                  Manage quality certificates, supplier contracts, and shipping documents across global operations. Digitize your <Link href="/solutions/manufacturing/shop-floor-automation" className="text-primary hover:underline">shop floor</Link> paperwork and explore <Link href="/solutions/manufacturing" className="text-primary hover:underline">manufacturing solutions</Link> including <Link href="/solutions/manufacturing/document-control" className="text-primary hover:underline">document control</Link> and <Link href="/solutions/manufacturing/quality-management" className="text-primary hover:underline">quality management</Link>.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" /><span className="text-sm text-gray-600">Certificate tracking</span></div>
                  <div className="flex items-start gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" /><span className="text-sm text-gray-600">Supplier management</span></div>
                  <div className="flex items-start gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" /><span className="text-sm text-gray-600">ISO quality integration</span></div>
                  <div className="flex items-start gap-2"><CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" /><span className="text-sm text-gray-600">Multi-location access</span></div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA - After Use Cases */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-xl p-8 text-center text-white shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                See CannyECM in Action for Your Industry
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

          {/* How CannyECM Works */}
          <section id="how-it-works" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              How CannyECM Works: Simple 4-Step Process
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Upload & Digitize",
                  description: "Bulk upload paper documents via scanner or drag-and-drop digital files. CannyECM automatically processes PDFs, JPEGs, and images with OCR extraction.",
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
                    <span className="text-primary font-bold">Up to 99%</span>
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
                CannyECM doesn't replace your existing tools it enhances them. Our comprehensive API and pre-built connectors
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

          {/* Why Choose CannyECM */}
          <section id="comparison" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Why Organizations Choose CannyECM Over Traditional Filing
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                    <th className="py-4 px-6 text-left font-bold">Feature</th>
                    <th className="py-4 px-6 text-center font-bold">Traditional Filing</th>
                    <th className="py-4 px-6 text-center font-bold">CannyECM DMS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Document Retrieval Time", traditional: "10-30 minutes", CannyECM: "< 5 seconds" },
                    { feature: "Search Capability", traditional: "Manual browsing", CannyECM: "Full-text OCR search" },
                    { feature: "Storage Cost", traditional: "High annual costs", CannyECM: "Cost-effective solution" },
                    { feature: "Security & Access Control", traditional: "Physical locks only", CannyECM: "AES-256 encryption, RBAC" },
                    { feature: "Remote Access", traditional: "Not possible", CannyECM: "Anytime, anywhere" },
                    { feature: "Disaster Recovery", traditional: "None (fire/flood risk)", CannyECM: "Automated backup, geo-redundancy" },
                    { feature: "Version Control", traditional: "Manual tracking", CannyECM: "Automatic with full history" },
                    { feature: "Compliance Audit Trail", traditional: "Paper logs", CannyECM: "Complete digital audit logs" },
                    { feature: "Collaboration", traditional: "Physical handoff", CannyECM: "Real-time sharing" },
                    { feature: "Environmental Impact", traditional: "High paper consumption", CannyECM: "100% paperless" },
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
                          {row.CannyECM}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  description: "We configure CannyECM based on your requirements setting up folder structures, metadata fields, user roles, permissions, and workflow templates. For on-premise deployments, we install and configure all necessary infrastructure.",
                  deliverables: ["Configured CannyECM instance", "User accounts & permissions", "Workflow templates", "Integration setup"]
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
                      description: "Track every action view, edit, download, share with timestamp, user, and IP address"
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
                For organizations with strict data residency requirements, CannyECM offers region-specific cloud hosting
                (US, EU, Asia-Pacific, Middle East) or on-premise deployment for complete data sovereignty. All data remains
                within your chosen jurisdiction, ensuring compliance with local data protection laws.
              </p>
            </div>
          </section>

          {/* Author Bio Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-white border-2 border-primary/20 rounded-xl p-8 shadow-md">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 relative flex-shrink-0 shadow-lg rounded-full overflow-hidden border-2 border-primary/20 bg-gray-100">
                  <SecureImage
                    src="/images/about/Christopher-Director.png"
                    alt="Christopher - Head of Technical Department"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-secondary mb-2">About the Author</h3>
                    <p className="text-lg font-semibold text-primary mb-1">Christopher</p>
                    <p className="text-sm text-gray-600">Head of Technical Department & Investor | CannyMinds Technology Solutions</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Christopher is the Head of Technical Department and Investor at CannyMinds Technology Solutions with over 10 years of experience in enterprise software development and content management systems. He leads the technical vision and development of CannyECM and oversees all product innovation, ensuring cutting-edge solutions that help businesses achieve digital transformation and operational efficiency.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} />
                      <span>10+ years ECM experience</span>
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
          <FAQ
            id="faq"
            className="mb-20"
            title="Frequently Asked Questions"
            items={[
              {
                question: "What is CannyECM?",
                answer: "CannyECM is an enterprise content management software that helps organizations digitize, organize, and manage documents with OCR technology, workflow automation, and secure cloud/on-premise storage."
              },
              {
                question: "How does CannyECM OCR work?",
                answer: "CannyECM uses advanced OCR powered by Elasticsearch to convert scanned documents into searchable text with up to 99% accuracy, enabling full-text search across all document content."
              },
              {
                question: "Is CannyECM secure?",
                answer: "Yes. CannyECM implements military-grade AES-256 encryption, role-based access control, detailed audit trails, and compliance with ISO 27001, GDPR, HIPAA, and SOC 2 standards."
              },
              {
                question: "What deployment options are available?",
                answer: "CannyECM offers Cloud (SaaS), On-Premise, and Hybrid deployment models to match your compliance and infrastructure requirements."
              },
              {
                question: "What file formats does CannyECM support?",
                answer: "CannyECM supports PDF, JPG, JPEG, PNG, and TIFF files. The OCR engine works best with PDF and high-quality scanned images."
              },
              {
                question: "Can CannyECM handle workflow automation?",
                answer: "Yes. CannyECM includes a drag-and-drop workflow builder for custom approval processes, automated notifications, and multi-level approvals no coding required."
              },
              {
                question: "How long does implementation take?",
                answer: "Cloud deployment takes 1-2 weeks including configuration and training. On-premise deployment takes 2-4 weeks for infrastructure setup and customization."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes. CannyECM offers a 30-day free trial with no credit card required, giving you full access to all features including OCR, workflows, and cloud storage."
              },
              {
                question: "Can I integrate CannyECM with other systems?",
                answer: "Yes. CannyECM provides API integration for ERP systems, CRM platforms, accounting software, and custom applications. LDAP/Active Directory integration is also supported."
              },
              {
                question: "Does CannyECM support mobile access?",
                answer: "Yes. CannyECM is fully responsive and accessible via mobile browsers on iOS and Android devices for viewing, searching, and sharing documents."
              },
            ]}
          />

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Explore Our Complete Business Solutions Suite
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              CannyECM works seamlessly with our other enterprise solutions. Build a complete digital transformation ecosystem for your organization.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "CannyHR",
                  title: "HR Management System",
                  description: "Comprehensive HR solution for employee management, payroll, attendance, and performance tracking.",
                  features: ["Employee Records", "Payroll Automation", "Leave Management", "Performance Reviews"],
                  link: "/product/hr-management",
                  color: "from-green-50 to-white border-green-200"
                },
                {
                  name: "CannyScan",
                  title: "Enterprise Scanning Solution",
                  description: "High-speed document scanning with OCR, batch processing, and direct integration with CannyECM.",
                  features: ["Batch Scanning", "Auto-Classification", "Quality Enhancement", "Direct Upload to CannyECM"],
                  link: "/product/scanning-solution",
                  color: "from-purple-50 to-white border-purple-200"
                },
                {
                  name: "CannyTrack",
                  title: "Document Tracking System",
                  description: "Real-time tracking of physical and digital documents with barcode/QR integration and chain of custody.",
                  features: ["Barcode Tracking", "Chain of Custody", "Location Monitoring", "Audit Compliance"],
                  link: "/product/tracking-system",
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
              Join growing businesses using CannyECM to digitize and automate document workflows. Start your 30-day free trial today no credit card required.
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

      </main>
    </>
  );
}
