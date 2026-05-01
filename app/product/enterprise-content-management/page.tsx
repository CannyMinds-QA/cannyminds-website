import type { Metadata } from "next";
import { generateAlternates } from '@/lib/enhanced-seo';
import Link from "next/link";
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
  Storage as StorageIcon,
  Computer as ComputerIcon,
  Public as PublicIcon,
  Business as BusinessIcon,
  ArrowForward as ArrowIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';
import ProductFAQ from "@/components/sections/ProductFAQ";
// SEO Metadata
export const metadata: Metadata = {
  title: "Enterprise Content Management System | CannyECM",
  description: "Enterprise content management system with 99% OCR accuracy, workflow automation, and cloud/on-premise/hybrid deployment. 30-day free trial.",
  keywords: [
    "enterprise content management system",
    "enterprise content management",
    "content management system",
    "enterprise document management",
    "ECM software",
    "CannyECM",
    "content management software",
    "document management system",
    "OCR content management",
    "workflow automation software",
    "cloud document storage",
    "on-premise ECM",
    "paperless office solution",
    "secure document storage"
  ],
  authors: [{ name: "Christopher", url: "https://www.cannymindstech.com/about" }],
  openGraph: {
    title: "Enterprise Content Management System | CannyECM",
    description: "Enterprise content management system with 99% OCR accuracy, workflow automation, and cloud/on-premise/hybrid deployment. 30-day free trial.",
    type: "article",
    siteName: "CannyMinds",
    locale: "en_US",
    url: "https://www.cannymindstech.com/product/enterprise-content-management",
    images: [
      {
        url: "https://www.cannymindstech.com/images/products/cannyecm/cannyecm1.png",
        width: 1200,
        height: 800,
        alt: "CannyECM Dashboard — Enterprise Content Management Software",
      },
    ],
    publishedTime: "2026-01-15T00:00:00.000Z",
    modifiedTime: "2026-04-24T00:00:00.000Z",
    authors: ["https://www.cannymindstech.com/about"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Content Management System | CannyECM",
    description: "Enterprise content management system with 99% OCR accuracy, workflow automation, and cloud/on-premise/hybrid deployment. 30-day free trial.",
    images: [
      {
        url: "https://www.cannymindstech.com/images/products/cannyecm/cannyecm1.png",
        alt: "CannyECM Dashboard — Enterprise Content Management Software",
      },
    ],
    site: "@cannyminds",
    creator: "@cannyminds",
  },
  alternates: generateAlternates("/product/enterprise-content-management"),
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

// JSON-LD structured data (BreadcrumbList, WebPage, SoftwareApplication,
// FAQPage, HowTo) is emitted from ./layout.tsx — co-located with the LCP
// image preload and matching the CannyPQMS / CannyRMS rich-snippet pattern.

export default function CannyECMProductPage() {
  return (
    <>
      <main className="min-h-screen bg-white">

        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b border-gray-200 py-4 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm overflow-x-auto">
              <li><Link href="/" className="text-primary hover:text-primary/80 whitespace-nowrap">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/product" className="text-primary hover:text-primary/80 whitespace-nowrap">Products</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600 font-medium truncate">Enterprise Content Management</li>
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
                  Enterprise Content Management System with <span className="text-primary">Advanced ECM Features</span>
                </h1>

                <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                  Transform your business with CannyECM, an enterprise content management system featuring <strong>99% OCR accuracy</strong>, intelligent workflow automation,
                  and military-grade security. Go paperless and organize <strong>50,000+ documents</strong> effortlessly with cloud,
                  on-premise, or hybrid deployment options.
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
                  alt="CannyECM Dashboard showing document management interface with search, folders, and workflow features"
                  width={1200}
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 600px"
                  priority
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
                  { title: "What is Enterprise Content Management?", href: "#what-is-ecm" },
                  { title: "What is CannyECM?", href: "#what-is" },
                  { title: "Key Features & Capabilities", href: "#features" },
                  { title: "Benefits for Your Organization", href: "#benefits" },
                  { title: "Deployment Options", href: "#deployment" },
                  { title: "Industry Use Cases", href: "#use-cases" },
                  { title: "How CannyECM Works", href: "#how-it-works" },
                  { title: "Technical Specifications", href: "#technical-specs" },
                  { title: "Integration Capabilities", href: "#integrations" },
                  { title: "Why Choose CannyECM", href: "#comparison" },
                  { title: "vs Other ECM Platforms", href: "#competitor-comparison" },
                  { title: "Capability Matrix", href: "#capability-matrix" },
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

          {/* What is ECM (generic awareness section — captures top-funnel queries) */}
          <section id="what-is-ecm" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              What is Enterprise Content Management?
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>Enterprise content management (ECM)</strong> — often called <strong>document management software</strong> or
                a <strong>document management system (DMS)</strong> — is the discipline and software category for capturing,
                organizing, securing, and retrieving the documents an organization runs on: invoices, contracts, HR records,
                quality certificates, patient files, loan applications, and any other unstructured content. An ECM system
                replaces paper filing and shared network folders with a centralized, searchable, audit-logged repository so
                every team works from one source of truth, with permission controls and retention rules enforced automatically.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Modern document management software combines <strong>document management</strong> (versioning, metadata, search),
                <strong> workflow automation</strong> (multi-step approvals, conditional routing), <strong>records management</strong>
                (retention, disposition, legal hold), and <strong>compliance controls</strong> (audit trails, role-based access,
                encryption) in a single platform that deploys in the cloud, on-premise, or as a hybrid. Buyers evaluating
                document management software typically prioritize five things: built-in OCR accuracy, deployment flexibility,
                workflow capabilities, compliance certifications, and integration depth with their existing ERP and CRM systems.
              </p>
            </div>

            {/* Core ECM components — captures "ECM components" + "ECM technologies" queries */}
            <div className="mt-8">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
                Core Components of an Enterprise Content Management System
              </h3>
              <p className="text-gray-600 mb-6 max-w-3xl text-sm">
                Every ECM platform is built from the same six functional layers. CannyECM ships all six in one product.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                      <th scope="col" className="py-4 px-6 text-left font-bold">Component</th>
                      <th scope="col" className="py-4 px-6 text-left font-bold">What it does</th>
                      <th scope="col" className="py-4 px-6 text-left font-bold">Underlying technology</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { component: "Capture & Ingestion", purpose: "Turn paper and digital files into searchable records", tech: "OCR, scanner integration, drag-and-drop upload, network drive / S3 sync" },
                      { component: "Document Management", purpose: "Organize, version, and retrieve files at any scale", tech: "Cabinet/folder hierarchy, automatic versioning, metadata schemas" },
                      { component: "Search & Discovery", purpose: "Find any document in seconds across millions of files", tech: "Full-text indexing on Elasticsearch, metadata + tag filters, AND/OR booleans" },
                      { component: "Workflow & Process", purpose: "Route documents for review, approval, or sign-off automatically", tech: "Visual workflow builder, conditional logic, deadline reminders, electronic signatures" },
                      { component: "Records Management", purpose: "Apply retention rules, legal hold, and disposition", tech: "Retention policies on metadata, automated lifecycle, audit-proof deletion" },
                      { component: "Security & Compliance", purpose: "Control access, log every action, prove compliance", tech: "RBAC, AES-256 encryption, TLS 1.3, immutable audit trail, SSO/SAML/OAuth" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="py-3 px-6 font-bold text-secondary text-sm border-t border-gray-200 align-top">{row.component}</td>
                        <td className="py-3 px-6 text-sm text-gray-700 border-t border-gray-200 align-top">{row.purpose}</td>
                        <td className="py-3 px-6 text-sm text-gray-600 border-t border-gray-200 align-top">{row.tech}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ECM vs DMS — captures DMS terminology + disambiguation query */}
            <div className="mt-10 bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
              <h3 className="text-xl md:text-2xl font-bold text-secondary mb-3">
                Document Management System (DMS) vs Enterprise Content Management (ECM): What&apos;s the Difference?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A <strong>document management system</strong> handles file storage, versioning, and retrieval — the document
                lifecycle. <strong>Enterprise content management</strong> is broader: it includes everything a DMS does, plus
                workflow automation, records management, compliance controls, and integration with the rest of your business
                applications. CannyECM is sold as ECM but functions as both. If you need just storage and search, the DMS
                portion of CannyECM covers that on its own; if you need approvals, retention, and audit-grade compliance, the
                full ECM stack is included in the same product without a separate license.
              </p>
            </div>
          </section>

          {/* What is CannyECM */}
          <section id="what-is" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
              What is CannyECM Content Management Software?
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>CannyECM</strong> is a comprehensive enterprise content management system (ECM) designed to eliminate paper-based
                workflows and digitize your entire document ecosystem. Built for modern businesses, CannyECM operates seamlessly on any
                browser and offers flexible deployment — <strong>cloud, on-premise, or hybrid</strong> — for organizations managing
                invoices, contracts, <Link href="/product/hr-management" className="text-primary hover:underline">HR records</Link>, and
                compliance documentation. The platform combines <strong>OCR technology powered by Elasticsearch</strong> with up to 99% accuracy,
                full-text search across PDFs, Microsoft Office files, images, and CAD drawings, a visual workflow builder with multi-step
                approvals and automatic reminders, role-based access control at file, folder, and cabinet level, and AES-256 encryption
                at rest with TLS 1.3 in transit. CannyECM is compliant with GDPR, HIPAA, ISO 27001:2013,
                SOC 2 Type II, SOX, and PCI DSS, and integrates with SAP, Oracle, Microsoft Dynamics, Salesforce, Microsoft 365,
                Google Workspace, SharePoint, Slack, and Microsoft Teams to provide a centralized way to <strong>organize, search,
                retrieve, and share</strong> documents with enterprise-grade security.
              </p>

              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Learn more about <Link href="/blog/digital-transformation-documentation" className="text-primary hover:underline font-medium">why documentation is the foundation of successful digital transformation</Link>.
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

            {/* Deployment comparison table — structured summary of the 3 options above (AI-citable) */}
            <div className="mt-12 overflow-x-auto">
              <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 text-center">
                Deployment Options Compared
              </h3>
              <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                    <th scope="col" className="py-4 px-6 text-left font-bold">Attribute</th>
                    <th scope="col" className="py-4 px-6 text-center font-bold">Cloud (SaaS)</th>
                    <th scope="col" className="py-4 px-6 text-center font-bold">On-Premise</th>
                    <th scope="col" className="py-4 px-6 text-center font-bold">Hybrid</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { attribute: "Hosting", cloud: "Fully hosted", onprem: "Your infrastructure", hybrid: "Cloud storage + on-premise app access" },
                    { attribute: "Infrastructure investment", cloud: "Zero", onprem: "Required", hybrid: "Partial" },
                    { attribute: "Updates", cloud: "Automatic", onprem: "Customer-managed", hybrid: "Configurable" },
                    { attribute: "Backups & monitoring", cloud: "24/7 included", onprem: "Customer-managed", hybrid: "Configurable" },
                    { attribute: "Deployment speed", cloud: "Instant", onprem: "Traditional install", hybrid: "Configurable" },
                    { attribute: "Cost model", cloud: "Subscription", onprem: "No recurring cloud fees", hybrid: "Mixed" },
                    { attribute: "Data residency", cloud: "US, EU, Asia-Pacific, Middle East", onprem: "Full data sovereignty", hybrid: "Configurable" },
                    { attribute: "Best for", cloud: "SMBs, Startups, Distributed Teams", onprem: "Government, Healthcare, Finance", hybrid: "Enterprises, Multi-Location Businesses" },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-4 px-6 font-semibold text-secondary border-t border-gray-200">{row.attribute}</td>
                      <td className="py-4 px-6 text-center text-sm text-gray-700 border-t border-gray-200">{row.cloud}</td>
                      <td className="py-4 px-6 text-center text-sm text-gray-700 border-t border-gray-200">{row.onprem}</td>
                      <td className="py-4 px-6 text-center text-sm text-gray-700 border-t border-gray-200">{row.hybrid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                <h3 className="text-2xl font-bold text-secondary mb-4">Healthcare Document Management Software</h3>
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
                <h3 className="text-2xl font-bold text-secondary mb-4">Document Management Software for Law Firms</h3>
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
                <h3 className="text-2xl font-bold text-secondary mb-4">Finance & Banking Document Management</h3>
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
                <h3 className="text-2xl font-bold text-secondary mb-4">Manufacturing Document Control Software</h3>
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

            {/* Industry-by-capability matrix — structured summary of the 4 cards above (AI-citable) */}
            <div className="mt-12 overflow-x-auto">
              <h3 className="text-xl md:text-2xl font-bold text-secondary mb-4 text-center">
                Industry Use Cases at a Glance
              </h3>
              <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                    <th scope="col" className="py-4 px-6 text-left font-bold">Industry</th>
                    <th scope="col" className="py-4 px-6 text-left font-bold">Document Types</th>
                    <th scope="col" className="py-4 px-6 text-left font-bold">Key Compliance</th>
                    <th scope="col" className="py-4 px-6 text-left font-bold">Featured Capability</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      industry: "Healthcare & Medical",
                      docs: "Patient records, medical histories, insurance claims, lab results",
                      compliance: "HIPAA",
                      capability: "Electronic Health Records (EHR), patient portal access",
                    },
                    {
                      industry: "Legal & Law Firms",
                      docs: "Case files, contracts, legal briefs, client communications",
                      compliance: "Conflict checking, version control",
                      capability: "Matter-centric organization, client portals",
                    },
                    {
                      industry: "Finance & Banking",
                      docs: "Loan applications, KYC documents, compliance reports",
                      compliance: "SOX, KYC/AML",
                      capability: "Loan processing workflows, audit trails",
                    },
                    {
                      industry: "Manufacturing",
                      docs: "Quality certificates, supplier contracts, shipping documents",
                      compliance: "ISO quality integration",
                      capability: "Certificate tracking, multi-location access",
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-4 px-6 font-semibold text-secondary border-t border-gray-200">{row.industry}</td>
                      <td className="py-4 px-6 text-sm text-gray-700 border-t border-gray-200">{row.docs}</td>
                      <td className="py-4 px-6 text-sm text-gray-700 border-t border-gray-200">{row.compliance}</td>
                      <td className="py-4 px-6 text-sm text-gray-700 border-t border-gray-200">{row.capability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                href="/contact"
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
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">System Requirements</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th scope="col" className="py-2 pr-2 text-xs font-bold uppercase tracking-wider text-secondary">Deployment</th>
                        <th scope="col" className="py-2 px-2 text-xs font-bold uppercase tracking-wider text-secondary">Component</th>
                        <th scope="col" className="py-2 pl-2 text-xs font-bold uppercase tracking-wider text-secondary">Requirement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { deployment: "Cloud", component: "Browser", requirement: "Chrome 90+, Firefox 88+, Safari 14+, Edge 90+" },
                        { deployment: "Cloud", component: "Network", requirement: "Internet connection, minimum 5 Mbps recommended" },
                        { deployment: "Cloud", component: "Software", requirement: "None — no installation required" },
                        { deployment: "On-Premise", component: "Operating System", requirement: "Windows Server 2016+ or Linux (Ubuntu 18.04+, RHEL 7+)" },
                        { deployment: "On-Premise", component: "RAM", requirement: "16 GB minimum (32 GB recommended)" },
                        { deployment: "On-Premise", component: "Storage", requirement: "100 GB SSD (scales with document volume)" },
                        { deployment: "On-Premise", component: "Database", requirement: "SQL Server 2016+ or PostgreSQL 12+" },
                        { deployment: "On-Premise", component: "Runtime", requirement: ".NET Core 6.0" },
                        { deployment: "On-Premise", component: "Search Engine", requirement: "Elasticsearch 7.x" },
                      ].map((row, idx, arr) => {
                        const showDeployment = idx === 0 || arr[idx - 1].deployment !== row.deployment;
                        return (
                          <tr key={idx} className="border-b border-gray-200 last:border-0 align-top">
                            <td className="py-3 pr-2 text-sm font-bold text-secondary">
                              {showDeployment ? row.deployment : ""}
                            </td>
                            <td className="py-3 px-2 text-sm font-medium text-gray-800">{row.component}</td>
                            <td className="py-3 pl-2 text-sm text-gray-600">{row.requirement}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
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

          {/* Competitor Comparison */}
          <section id="competitor-comparison" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
              CannyECM vs Other Enterprise Content Management Platforms
            </h2>
            <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto text-sm">
              Architectural comparison of CannyECM against widely-used ECM and document management platforms across deployment options and built-in versus add-on capabilities.
            </p>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              Teams typically evaluate CannyECM as a <strong>SharePoint alternative</strong> when they need built-in OCR and a
              visual workflow builder without separate licenses for Syntex or Power Automate, or as an <strong>M-Files /
              OpenText alternative</strong> when they want flexible cloud-and-on-premise deployment without enterprise-tier
              pricing complexity. Organizations migrating off Box typically need on-premise or hybrid deployment for compliance
              reasons that Box cannot meet.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                    <th scope="col" className="py-4 px-4 text-left font-bold">Capability</th>
                    <th scope="col" className="py-4 px-4 text-center font-bold">CannyECM</th>
                    <th scope="col" className="py-4 px-4 text-center font-bold">Microsoft SharePoint</th>
                    <th scope="col" className="py-4 px-4 text-center font-bold">M-Files</th>
                    <th scope="col" className="py-4 px-4 text-center font-bold">OpenText Documentum</th>
                    <th scope="col" className="py-4 px-4 text-center font-bold">Box</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { capability: "Cloud (SaaS) deployment", a: "Yes", b: "Yes (Microsoft 365)", c: "Yes", d: "Yes", e: "Yes" },
                    { capability: "On-premise deployment", a: "Yes", b: "Yes (SharePoint Server)", c: "Yes", d: "Yes", e: "No (cloud only)" },
                    { capability: "Hybrid deployment", a: "Yes", b: "Yes", c: "Yes", d: "Yes", e: "No" },
                    { capability: "Native OCR (no add-on)", a: "Yes (Elasticsearch)", b: "Add-on (Syntex)", c: "Yes", d: "Yes", e: "Add-on (Box AI)" },
                    { capability: "Native workflow builder", a: "Yes (visual)", b: "Power Automate (separate)", c: "Yes", d: "Yes", e: "Yes (Box Relay)" },
                    { capability: "Office in-browser editing", a: "Yes", b: "Native", c: "Yes", d: "Limited", e: "Yes" },
                    { capability: "CAD (DWG) format support", a: "Yes", b: "Limited", c: "Yes", d: "Yes", e: "Limited" },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-3 px-4 font-semibold text-secondary border-t border-gray-200">{row.capability}</td>
                      <td className="py-3 px-4 text-center text-gray-700 border-t border-gray-200 font-medium">{row.a}</td>
                      <td className="py-3 px-4 text-center text-gray-600 border-t border-gray-200">{row.b}</td>
                      <td className="py-3 px-4 text-center text-gray-600 border-t border-gray-200">{row.c}</td>
                      <td className="py-3 px-4 text-center text-gray-600 border-t border-gray-200">{row.d}</td>
                      <td className="py-3 px-4 text-center text-gray-600 border-t border-gray-200">{row.e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4 max-w-3xl mx-auto">
              Comparison reflects publicly-documented architectural capabilities of the named products. Vendor capabilities evolve;
              verify current feature availability with each vendor before purchase decisions. &ldquo;Native&rdquo; means built-in to the
              base product without a separate license.
            </p>
          </section>

          {/* Capability Matrix */}
          <section id="capability-matrix" className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
              Complete CannyECM Capability Matrix
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto text-sm">
              Every capability that ships with CannyECM, grouped by category. Use this as your evaluation checklist.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                    <th scope="col" className="py-4 px-6 text-left font-bold">Category</th>
                    <th scope="col" className="py-4 px-6 text-left font-bold">Capability</th>
                    <th scope="col" className="py-4 px-6 text-left font-bold">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { category: "Authentication", capability: "Single Sign-On (SSO)", detail: "Azure AD, Google Workspace, OAuth 2.0, SAML 2.0" },
                    { category: "Authentication", capability: "Directory integration", detail: "LDAP, Active Directory" },
                    { category: "Authentication", capability: "Multi-factor authentication", detail: "TOTP, hardware keys, configurable enforcement" },
                    { category: "Authentication", capability: "Access policies", detail: "IP restrictions, session timeout, password expiry/reset rules" },
                    { category: "Access Control", capability: "Role-based permissions (RBAC)", detail: "File, folder, and cabinet level with custom role templates" },
                    { category: "Access Control", capability: "Guest access", detail: "Time-limited credentials with reduced scope" },
                    { category: "Access Control", capability: "Permission audit", detail: "Track every permission change with timestamp and user" },
                    { category: "Search", capability: "Full-text OCR search", detail: "Up to 99% accuracy, powered by Elasticsearch" },
                    { category: "Search", capability: "Advanced filters", detail: "Metadata, tags, file type, date range, AND/OR boolean filters" },
                    { category: "Storage", capability: "Supported formats", detail: "PDF, Microsoft Office, images (JPG/PNG/GIF/BMP/TIFF), audio/video, CAD (DWG), CSV/text" },
                    { category: "Storage", capability: "Folder hierarchy", detail: "Unlimited nesting — cabinet → folder → document" },
                    { category: "Storage", capability: "External sync", detail: "Network drives, Amazon S3, manual or automatic sync" },
                    { category: "Editing", capability: "In-browser Office editing", detail: "Word, Excel, PowerPoint with concurrent multi-user editing" },
                    { category: "Editing", capability: "Annotations", detail: "Sticky notes, stamps, watermarks, digital signatures, zoom/rotate" },
                    { category: "Workflow", capability: "Visual workflow builder", detail: "Drag-and-drop diagram with conditions and parallel reviews" },
                    { category: "Workflow", capability: "Multi-step approvals", detail: "Deadline reminders, automatic escalation on overdue tasks" },
                    { category: "Version Control", capability: "Automatic versioning", detail: "Saved on every edit; full immutable history" },
                    { category: "Version Control", capability: "Rollback & comparison", detail: "One-click restore, version diff, duplicate-upload detection" },
                    { category: "Audit", capability: "Action logs", detail: "User, timestamp, IP address, device for every view/edit/download" },
                    { category: "Audit", capability: "Audit reports", detail: "PDF export with hash verification for tamper-proof evidence" },
                    { category: "Compliance", capability: "Standards", detail: "GDPR, HIPAA, ISO 27001:2013, SOC 2 Type II, SOX, PCI DSS" },
                    { category: "Compliance", capability: "Encryption", detail: "AES-256 at rest, TLS 1.3 in transit" },
                    { category: "Integration", capability: "API surface", detail: "REST, SOAP, webhooks, CSV/Excel import, direct database access" },
                    { category: "Integration", capability: "Enterprise systems", detail: "SAP ERP, Oracle E-Business Suite, Microsoft Dynamics, NetSuite, Workday" },
                    { category: "Integration", capability: "Productivity suites", detail: "Microsoft 365, Google Workspace, SharePoint, Slack, Microsoft Teams" },
                    { category: "Administration", capability: "User management", detail: "Bulk import/export, clone settings, reassign on offboarding" },
                    { category: "Administration", capability: "System monitoring", detail: "Health status, background queues (encryption, OCR, email, downloads)" },
                  ].map((row, idx, arr) => {
                    const showCategory = idx === 0 || arr[idx - 1].category !== row.category;
                    return (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="py-3 px-6 font-bold text-secondary border-t border-gray-200 align-top">
                          {showCategory ? row.category : ""}
                        </td>
                        <td className="py-3 px-6 font-medium text-gray-800 text-sm border-t border-gray-200 align-top">{row.capability}</td>
                        <td className="py-3 px-6 text-sm text-gray-600 border-t border-gray-200 align-top">{row.detail}</td>
                      </tr>
                    );
                  })}
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

              <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Compliance Standards</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b-2 border-green-300">
                        <th scope="col" className="py-2 pr-2 text-xs font-bold uppercase tracking-wider text-secondary">Standard</th>
                        <th scope="col" className="py-2 px-2 text-xs font-bold uppercase tracking-wider text-secondary">Region</th>
                        <th scope="col" className="py-2 px-2 text-xs font-bold uppercase tracking-wider text-secondary">Covers</th>
                        <th scope="col" className="py-2 pl-2 text-xs font-bold uppercase tracking-wider text-secondary">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          standard: "ISO 27001:2013",
                          region: "International",
                          description: "Information security management system",
                          source: "https://www.iso.org/isoiec-27001-information-security.html",
                          sourceLabel: "iso.org"
                        },
                        {
                          standard: "GDPR",
                          region: "EU",
                          description: "Personal data protection regulation",
                          source: "https://commission.europa.eu/law/law-topic/data-protection_en",
                          sourceLabel: "European Commission"
                        },
                        {
                          standard: "HIPAA",
                          region: "USA",
                          description: "Protected Health Information (PHI) handling",
                          source: "https://www.hhs.gov/hipaa/",
                          sourceLabel: "hhs.gov"
                        },
                        {
                          standard: "SOC 2 Type II",
                          region: "USA / global",
                          description: "Security, availability & confidentiality controls",
                          source: "https://www.aicpa-cima.com/",
                          sourceLabel: "AICPA"
                        },
                        {
                          standard: "SOX",
                          region: "USA",
                          description: "Sarbanes-Oxley financial retention & audit trails",
                          source: "https://www.sec.gov/",
                          sourceLabel: "sec.gov"
                        },
                        {
                          standard: "PCI DSS",
                          region: "Global (payments)",
                          description: "Payment Card Industry Data Security Standard",
                          source: "https://www.pcisecuritystandards.org/",
                          sourceLabel: "PCI SSC"
                        },
                      ].map((item, idx) => (
                        <tr key={idx} className="border-b border-gray-200 last:border-0 align-top">
                          <td className="py-3 pr-2">
                            <div className="flex items-start gap-1.5">
                              <CheckIcon sx={{ fontSize: 16, color: '#25d366' }} className="mt-0.5 flex-shrink-0" />
                              <span className="font-bold text-secondary text-sm">{item.standard}</span>
                            </div>
                          </td>
                          <td className="py-3 px-2 text-xs text-gray-700">{item.region}</td>
                          <td className="py-3 px-2 text-xs text-gray-600">{item.description}</td>
                          <td className="py-3 pl-2 text-xs">
                            <a
                              href={item.source}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="text-primary hover:underline whitespace-nowrap"
                            >
                              {item.sourceLabel} ↗
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg mb-10">
              <p className="font-semibold text-secondary mb-2">Data Residency & Sovereignty</p>
              <p className="text-gray-700">
                For organizations with strict data residency requirements, CannyECM offers region-specific cloud hosting
                (US, EU, Asia-Pacific, Middle East) or on-premise deployment for complete data sovereignty. All data remains
                within your chosen jurisdiction, ensuring compliance with local data protection laws.
              </p>
            </div>

            {/* Roles & Permissions Matrix */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-3 text-center">
                Roles &amp; Permissions Matrix
              </h3>
              <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto text-sm">
                Default permission template across the four built-in role types. Permissions are configurable per role at
                file, folder, and cabinet level via custom role templates.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                      <th scope="col" className="py-4 px-4 text-left font-bold">Permission</th>
                      <th scope="col" className="py-4 px-4 text-center font-bold">Administrator</th>
                      <th scope="col" className="py-4 px-4 text-center font-bold">Manager</th>
                      <th scope="col" className="py-4 px-4 text-center font-bold">User</th>
                      <th scope="col" className="py-4 px-4 text-center font-bold">Guest</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { permission: "View documents", admin: "All", manager: "Team scope", user: "Permitted folders", guest: "Shared only" },
                      { permission: "Edit documents", admin: "All", manager: "Team scope", user: "Own / shared", guest: "—" },
                      { permission: "Upload documents", admin: "Yes", manager: "Yes", user: "Yes", guest: "—" },
                      { permission: "Delete documents", admin: "Yes", manager: "Per policy", user: "Own / per policy", guest: "—" },
                      { permission: "Share documents", admin: "Yes", manager: "Yes", user: "Yes (per policy)", guest: "—" },
                      { permission: "Approve workflows", admin: "Yes", manager: "Team scope", user: "—", guest: "—" },
                      { permission: "View audit reports", admin: "Full", manager: "Team scope", user: "Own actions", guest: "—" },
                      { permission: "Manage users", admin: "Yes", manager: "Team scope", user: "—", guest: "—" },
                      { permission: "Configure system", admin: "Yes", manager: "—", user: "—", guest: "—" },
                      { permission: "Time-limited access", admin: "—", manager: "—", user: "—", guest: "Yes (expiry-bound)" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="py-3 px-4 font-semibold text-secondary border-t border-gray-200">{row.permission}</td>
                        <td className="py-3 px-4 text-center text-gray-700 border-t border-gray-200">{row.admin}</td>
                        <td className="py-3 px-4 text-center text-gray-700 border-t border-gray-200">{row.manager}</td>
                        <td className="py-3 px-4 text-center text-gray-700 border-t border-gray-200">{row.user}</td>
                        <td className="py-3 px-4 text-center text-gray-700 border-t border-gray-200">{row.guest}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4 max-w-3xl mx-auto text-center">
                Default template shown. Administrators can clone and adjust roles, set permissions per file/folder/cabinet,
                and reassign documents when an employee leaves.
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
                    alt="Christopher, Head of Technical Department and Investor at CannyMinds Technology Solutions"
                    fill
                    sizes="96px"
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
                      Last updated: April 24, 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Product Specific FAQ */}
          <ProductFAQ
            items={[
              {
                question: "How does CannyECM ensure 21 CFR Part 11 and ISO 15489 compliant audit trails?",
                answer: "CannyECM automatically logs every user action, including document views, edits, and downloads, in an immutable audit trail. This ensures complete traceability for regulatory bodies, meeting both FDA 21 CFR Part 11 and ISO 15489:2016 standards."
              },
              {
                question: "Can CannyECM integrate with existing ERP systems like SAP or Oracle?",
                answer: "Yes, CannyECM provides robust API endpoints that allow seamless integration with major ERPs like SAP, Oracle, and Microsoft Dynamics, enabling automated document linking to financial and operational records."
              },
              {
                question: "What are the risks of using basic shared drives instead of a dedicated Enterprise Content Management system?",
                answer: "Basic shared drives (like network folders) lack granular audit trails, automated retention policies, and robust version control. This exposes organizations to compliance violations, accidental data deletion, and severe security vulnerabilities compared to a structured ECM."
              },
              {
                question: "How do automated retention and disposal schedules protect organizations legally?",
                answer: "Automatically enforcing document lifecycles ensures you do not prematurely delete required legal records, avoiding fines. Conversely, it ensures you securely destroy data past its legal retention period, drastically reducing liability during legal discovery."
              },
              {
                question: "Can CannyECM handle large-scale document migrations from legacy systems?",
                answer: "Yes. CannyECM provides bulk import tools and dedicated migration APIs capable of ingesting millions of records, preserving original folder structures, metadata relationships, and version histories from legacy systems like Documentum or SharePoint."
              },
              {
                question: "How does the automated workflow engine improve document approval processes?",
                answer: "Our drag-and-drop workflow builder allows organizations to design multi-step approval routing, conditional logic, and parallel reviews. It eliminates bottlenecks by automatically pushing documents to the next approver and escalating overdue tasks."
              },
              {
                question: "How does CannyECM handle version control when multiple users edit the same document?",
                answer: "CannyECM uses strict check-in/check-out locks and maintains a complete, immutable version history. Older versions can be instantly previewed or rolled back, and the audit trail tracks exactly who made each specific change."
              },
              {
                question: "Does CannyECM support full-text search across scanned PDFs and images?",
                answer: "Yes, utilizing embedded enterprise OCR, CannyECM indexes the full text of uploaded PDFs and images, enabling users to search for specific words or phrases contained within the document content itself, not just the metadata."
              }
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
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-flex items-center gap-2"
              >
                Start 30-Day Free Trial
                <CheckIcon sx={{ fontSize: 20 }} />
              </Link>
              <Link
                href="/contact"
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
