"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  KeyboardArrowDown,
  KeyboardArrowRight,
  LocalHospital,
  Factory,
  AccountBalance,
  AccountBalanceWallet,
  School,
  Description,
  People,
  Scanner,
  VerifiedUser,
  Settings,
  Science,
  Receipt,
  Gavel,
  Business,
  HealthAndSafety,
  Construction,
  BusinessCenter,
  ShoppingCart,
  Psychology,
  AutoAwesome,
  Biotech,
  Campaign,
  Checkroom,
  Home as HomeIcon,
} from "@mui/icons-material";

export default function Navigation() {
  const pathname = usePathname();
  /* REMOVED: const [isScrolled, setIsScrolled] = useState(false); */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [bpmDropdownOpen, setBpmDropdownOpen] = useState(false);
  const [aiDropdownOpen, setAiDropdownOpen] = useState(false);

  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileBpmOpen, setMobileBpmOpen] = useState(false);
  const [mobileAiOpen, setMobileAiOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  // State for tracking expanded items in mobile menu (3rd level)
  const [expandedMobileIndustry, setExpandedMobileIndustry] = useState<string | null>(null);

  const [activeMenuTab, setActiveMenuTab] = useState<'industry' | 'solutions'>('industry');
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>('manufacturing');
  const [hoveredBpmCategory, setHoveredBpmCategory] = useState<string | null>('Document Lifecycle & Control Processes');

  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"]
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(8px)", "blur(16px)"]
  );

  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 6px -1px rgba(0, 0, 0, 0.1)"]
  );

  /* REMOVED: scroll listener effect. Using framer-motion values directly */
  useEffect(() => {
    // Keep click outside listener
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.nav-dropdown-container')) {
        setSolutionsDropdownOpen(false);
        setBpmDropdownOpen(false);
        setAiDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // AI Solutions Industries
  const aiIndustries = [
    { name: "Healthcare", slug: "healthcare", icon: LocalHospital, description: "Clinical AI & patient care automation" },
    { name: "Pharmaceutical", slug: "pharmaceutical", icon: Biotech, description: "Drug discovery & batch record AI" },
    { name: "Insurance", slug: "insurance", icon: VerifiedUser, description: "Claims processing & fraud detection" },
    { name: "NBFC & Finance", slug: "nbfc", icon: AccountBalance, description: "Loan processing & credit scoring AI" },
    { name: "Manufacturing", slug: "manufacturing", icon: Factory, description: "Predictive maintenance & quality AI" },
    { name: "Textile", slug: "textile", icon: Checkroom, description: "Design AI & defect detection" },
    { name: "E-Commerce", slug: "ecommerce", icon: ShoppingCart, description: "Personalization & pricing AI" },
    { name: "Real Estate", slug: "real-estate", icon: HomeIcon, description: "Property valuation & document AI" },
    { name: "Marketing", slug: "marketing", icon: Campaign, description: "Content generation & analytics AI" },
    { name: "Professional Services", slug: "professional-services", icon: Gavel, description: "Legal, HR & accounting AI" },
  ];

  const industryData: Record<string, {
    name: string;
    href: string;
    icon: typeof AccountBalance;
    subTopics: { name: string; href: string }[];
    groups?: { title: string; items: { name: string; href: string }[] }[];
  }> = {
    'manufacturing': {
      name: "Manufacturing",
      href: "/solutions/manufacturing",
      icon: Factory,
      subTopics: [
        { name: "Overview", href: "/solutions/manufacturing" },
        { name: "Shop Floor Automation", href: "/solutions/manufacturing/shop-floor-automation" },
        { name: "Document Control & SOPs", href: "/solutions/manufacturing/document-control" },
        { name: "Quality Management", href: "/solutions/manufacturing/quality-management" },
        { name: "Engineering Change Mgmt", href: "/solutions/manufacturing/engineering-change-management" },
        { name: "Vendor & Procurement", href: "/solutions/manufacturing/vendor-procurement" },
        { name: "Equipment Maintenance", href: "/solutions/manufacturing/equipment-maintenance" },
        { name: "FMCG Digital Transformation", href: "/solutions/manufacturing/fmcg-digital-transformation" },
        { name: "Bottling Manufacturing", href: "/solutions/manufacturing/bottling" },
      ]
    },

    'pharmaceutical': {
      name: "Pharmaceutical",
      href: "/solutions/pharmaceutical",
      icon: Science,
      subTopics: [
        { name: "Overview", href: "/solutions/pharmaceutical" },
        { name: "Batch Record Automation", href: "/solutions/pharmaceutical/batch-record-automation" },
        { name: "Quality Inspection & CAPA", href: "/solutions/pharmaceutical/quality-inspection-capa" },
        { name: "Regulatory Compliance", href: "/solutions/pharmaceutical/regulatory-compliance" },
      ]
    },
    'healthcare': {
      name: "Healthcare",
      href: "/solutions/healthcare",
      icon: LocalHospital,
      subTopics: [
        { name: "Overview", href: "/solutions/healthcare" },
        { name: "Patient Records & EHR", href: "/solutions/healthcare/patient-records" },
        { name: "Clinical Workflow Automation", href: "/solutions/healthcare/clinical-workflows" },
        { name: "Compliance & Audit", href: "/solutions/healthcare/compliance-audit" },
        { name: "Document Digitization", href: "/solutions/healthcare/document-digitization" },
      ]
    },
    'professional-services': {
      name: "Professional Services",
      href: "/solutions/professional-services",
      icon: Gavel,
      subTopics: [
        { name: "Overview", href: "/solutions/professional-services" },
        { name: "Legal Firms", href: "/solutions/professional-services/legal" },
        { name: "Audit Firms", href: "/solutions/professional-services/audit-firms" },
      ]
    },
    'finance': {
      name: "Finance Industries",
      href: "/solutions/finance",
      icon: AccountBalance,
      subTopics: [
        { name: "Overview", href: "/solutions/finance" },
        { name: "Banking Technology", href: "/solutions/finance/banking-technology" },
        { name: "Insurance Technology", href: "/solutions/finance/insurance-technology" },
        { name: "Governance & Compliance", href: "/solutions/finance/governance-compliance" },
      ]
    },
  };



  const bpmCategories = [
    { name: "Document Lifecycle & Control Processes", icon: Description },
    { name: "Quality Management Processes", icon: VerifiedUser },
    { name: "Audit & Compliance Processes", icon: VerifiedUser },
    { name: "Production & Operations Processes", icon: Factory },
    { name: "Engineering & Change Management", icon: Construction },
    { name: "Validation & Qualification Processes", icon: VerifiedUser },
    { name: "Healthcare & Clinical Processes", icon: LocalHospital },
    { name: "Legal & Contract Management", icon: Gavel },
    { name: "Finance & BFSI Processes", icon: AccountBalance },
    { name: "Procurement & Vendor Management", icon: Business },
    { name: "HR & Administration Processes", icon: People },
    { name: "IT & Information Security Processes", icon: Settings },
    { name: "Risk Management & Governance", icon: HealthAndSafety },
    { name: "Customer Service & Support", icon: People },
    { name: "Records Retention & Legal Hold", icon: Description },
  ];

  const bpmDetails: Record<string, string[]> = {
    "Document Lifecycle & Control Processes": [
      "Document creation, review & approval",
      "SOP creation, revision & periodic review",
      "Policy approval & distribution",
      "Document change control",
      "Document archival & retention",
      "Obsolete document withdrawal"
    ],
    "Quality Management Processes": [
      "Deviation management",
      "CAPA initiation, review & closure",
      "Non-conformance (NCR) handling",
      "Quality event investigation",
      "Root cause analysis (RCA) approvals",
      "Quality review board workflows"
    ],
    "Audit & Compliance Processes": [
      "Internal audit planning & execution",
      "Audit observation tracking",
      "Management response & closure",
      "Regulatory inspection readiness",
      "Compliance checklist reviews",
      "Evidence submission & sign-off"
    ],
    "Production & Operations Processes": [
      "Batch record review & release",
      "Production approval workflows",
      "Line clearance approvals",
      "Equipment usage authorization",
      "Process deviation escalation",
      "Manufacturing change approvals"
    ],
    "Engineering & Change Management": [
      "Engineering Change Request (ECR)",
      "Engineering Change Notice (ECN)",
      "Impact assessment workflows",
      "Technical document approvals",
      "Equipment modification approvals",
      "Process optimization approvals"
    ],
    "Validation & Qualification Processes": [
      "Validation protocol review & approval",
      "IQ / OQ / PQ document approvals",
      "Validation deviation handling",
      "Revalidation scheduling",
      "Computer System Validation (CSV) approvals"
    ],
    "Healthcare & Clinical Processes": [
      "Clinical documentation review",
      "Patient consent approvals",
      "Incident reporting & investigation",
      "Clinical audit workflows",
      "Discharge summary approvals",
      "Accreditation compliance tracking"
    ],
    "Legal & Contract Management": [
      "Contract drafting & review",
      "Legal approval workflows",
      "Contract execution & sign-off",
      "Renewal & expiry approvals",
      "Litigation document review",
      "Client authorization workflows"
    ],
    "Finance & BFSI Processes": [
      "Customer onboarding approvals (KYC)",
      "Loan / credit approval workflows",
      "Insurance claim processing",
      "Risk & compliance approvals",
      "Financial policy approvals",
      "Audit sign-offs"
    ],
    "Procurement & Vendor Management": [
      "Vendor onboarding & approval",
      "Supplier document validation",
      "Contract & PO approvals",
      "Vendor compliance reviews",
      "Certificate expiry alerts & renewals"
    ],
    "HR & Administration Processes": [
      "Employee onboarding approvals",
      "Policy acknowledgement workflows",
      "Training & certification approvals",
      "Employee exit clearances",
      "Asset allocation & recovery"
    ],
    "IT & Information Security Processes": [
      "Access request & approval",
      "Role change workflows",
      "Incident & breach reporting",
      "Security policy approvals",
      "System change approvals"
    ],
    "Risk Management & Governance": [
      "Risk identification & assessment",
      "Risk mitigation approvals",
      "Governance committee reviews",
      "Board-level document approvals",
      "Compliance deviation escalations"
    ],
    "Customer Service & Support": [
      "Complaint registration & routing",
      "Investigation & resolution approvals",
      "Customer communication sign-off",
      "SLA escalation workflows"
    ],
    "Records Retention & Legal Hold": [
      "Retention period approvals",
      "Record destruction authorization",
      "Legal hold initiation & release",
      "Regulatory preservation workflows"
    ]
  };




  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/#solutions", hasDropdown: true, dropdownType: "solutions" },
    { name: "AI Solutions", href: "/ai-solutions", hasDropdown: true, dropdownType: "ai" },
    { name: "BPM", href: "/bpm", hasDropdown: true, dropdownType: "bpm" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      style={{
        backgroundColor,
        boxShadow,
        backdropFilter
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="group cursor-pointer"
            >
              <div className="relative w-32 h-12 sm:w-40 sm:h-14 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="CannyMinds Technology Solutions"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, index) => (
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative nav-dropdown-container"
                >
                  <motion.button
                    onClick={() => {
                      if (link.dropdownType === "solutions") {
                        setSolutionsDropdownOpen(!solutionsDropdownOpen);
                        setBpmDropdownOpen(false);
                        setAiDropdownOpen(false);
                      } else if (link.dropdownType === "bpm") {
                        setBpmDropdownOpen(!bpmDropdownOpen);
                        setSolutionsDropdownOpen(false);
                        setAiDropdownOpen(false);

                      } else if (link.dropdownType === "ai") {
                        setAiDropdownOpen(!aiDropdownOpen);
                        setSolutionsDropdownOpen(false);
                        setBpmDropdownOpen(false);
                      }
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-sm xl:text-base text-gray-700 hover:text-primary font-medium transition-colors relative group flex items-center gap-1 whitespace-nowrap bg-transparent border-0 cursor-pointer"
                  >
                    {link.name}
                    <KeyboardArrowDown
                      sx={{ fontSize: 20 }}
                      className={`transition-transform ${(link.dropdownType === "solutions" && solutionsDropdownOpen) || (link.dropdownType === "bpm" && bpmDropdownOpen) || (link.dropdownType === "ai" && aiDropdownOpen) ? 'rotate-180' : ''}`}
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </motion.button>

                  {/* Solutions Mega Menu Dropdown */}
                  {link.dropdownType === "solutions" && solutionsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="fixed left-0 right-0 bg-white shadow-2xl border-t border-gray-200 z-[100]"
                      style={{
                        top: '80px',
                        maxHeight: 'calc(100vh - 80px)',
                        overflowY: 'auto'
                      }}
                    >
                      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
                        <div className="grid grid-cols-12 min-h-[300px]">
                          {/* Column 1: Browse By */}
                          <div className="col-span-2 bg-gray-50 p-6 border-r border-gray-200">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Browse By</h4>
                            <div className="space-y-1">
                              <button
                                onClick={() => setActiveMenuTab('industry')}
                                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${activeMenuTab === 'industry'
                                  ? 'bg-primary text-white'
                                  : 'text-gray-700 hover:bg-gray-100'
                                  }`}
                              >
                                By Industry
                                <KeyboardArrowRight sx={{ fontSize: 18 }} />
                              </button>
                              <div className="border-t border-gray-200 my-3"></div>
                              <Link
                                href="/products"
                                onClick={() => setSolutionsDropdownOpen(false)}
                                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                              >
                                All Products
                              </Link>
                            </div>
                          </div>

                          {/* Column 2: Industry List */}
                          <div className="col-span-3 p-6 border-r border-gray-200">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Select Industry</h4>
                            <div className="space-y-1">
                              {Object.entries(industryData).map(([key, industry]) => {
                                const IconComponent = industry.icon;
                                return (
                                  <button
                                    key={key}
                                    onMouseEnter={() => setHoveredIndustry(key)}
                                    onClick={() => setHoveredIndustry(key)}
                                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between group ${hoveredIndustry === key
                                      ? 'bg-primary/10 text-primary'
                                      : 'text-gray-700 hover:bg-gray-50'
                                      }`}
                                  >
                                    <span className="flex items-center gap-2">
                                      <IconComponent sx={{ fontSize: 18 }} className={hoveredIndustry === key ? 'text-primary' : 'text-gray-400'} />
                                      {industry.name}
                                    </span>
                                    <KeyboardArrowRight sx={{ fontSize: 18 }} className={hoveredIndustry === key ? 'text-primary' : 'text-gray-300'} />
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Column 3: Sub-Topics */}
                          <div className="col-span-7 p-6 bg-gray-50/50">
                            {hoveredIndustry && industryData[hoveredIndustry] && (
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                key={hoveredIndustry}
                              >
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                                  {industryData[hoveredIndustry].name}
                                </h4>
                                <div className="space-y-1">
                                  {industryData[hoveredIndustry].subTopics.map((topic) => (
                                    <Link
                                      key={topic.name}
                                      href={topic.href}
                                      onClick={() => setSolutionsDropdownOpen(false)}
                                      className={`block px-3 py-2 rounded-lg text-sm transition-all ${pathname === topic.href ? 'text-primary bg-primary/5 font-medium' : 'text-gray-600 hover:text-primary hover:bg-white'}`}
                                    >
                                      {topic.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* BPM Dropdown */}
                  {link.dropdownType === "bpm" && bpmDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="fixed left-0 right-0 bg-white shadow-2xl border-t border-gray-200 p-8 z-[100]"
                      style={{
                        top: '80px',
                        maxHeight: 'calc(100vh - 80px)',
                        overflowY: 'auto'
                      }}
                    >
                      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
                        <div className="grid grid-cols-12 min-h-[500px]">
                          {/* Left Column: BPM Categories List */}
                          <div className="col-span-4 p-6 border-r border-gray-200 overflow-y-auto max-h-[600px]">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                              Select Process Category
                            </h4>
                            <div className="space-y-1">
                              {bpmCategories.map((category) => {
                                const IconComponent = category.icon;
                                const isActive = hoveredBpmCategory === category.name;
                                return (
                                  <button
                                    key={category.name}
                                    onMouseEnter={() => setHoveredBpmCategory(category.name)}
                                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between group ${isActive
                                      ? 'bg-primary/10 text-primary'
                                      : 'text-gray-700 hover:bg-gray-50'
                                      }`}
                                  >
                                    <span className="flex items-center gap-2">
                                      <IconComponent sx={{ fontSize: 18 }} className={isActive ? 'text-primary' : 'text-gray-400'} />
                                      <span className="line-clamp-1">{category.name}</span>
                                    </span>
                                    {isActive && <KeyboardArrowRight sx={{ fontSize: 18 }} className="text-primary flex-shrink-0" />}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Right Column: Dynamic Content Details */}
                          <div className="col-span-8 p-8 bg-gray-50/50 relative overflow-y-auto max-h-[600px]">
                            {hoveredBpmCategory && bpmDetails[hoveredBpmCategory] ? (
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                key={hoveredBpmCategory}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                                  {(() => {
                                    const CategoryIcon = bpmCategories.find(c => c.name === hoveredBpmCategory)?.icon || Settings;
                                    return <CategoryIcon sx={{ fontSize: 28 }} className="text-primary" />;
                                  })()}
                                  <h3 className="text-xl font-bold text-gray-800">
                                    {hoveredBpmCategory}
                                  </h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  {bpmDetails[hoveredBpmCategory].map((point, index) => (
                                    <div
                                      key={index}
                                      className="flex items-start gap-3 p-3 rounded-lg bg-white border border-gray-100"
                                    >
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                                      <span className="text-sm text-gray-600 leading-relaxed font-medium">
                                        {point}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
                                  <Link
                                    href="/bpm"
                                    onClick={() => setBpmDropdownOpen(false)}
                                    className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1 group"
                                  >
                                    {/* View All BPM Solutions */}
                                    {/* <KeyboardArrowRight sx={{ fontSize: 18 }} className="group-hover:translate-x-1 transition-transform" /> */}
                                  </Link>
                                </div>
                              </motion.div>
                            ) : (
                              <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
                                <Settings sx={{ fontSize: 48, opacity: 0.2, marginBottom: 2 }} />
                                <p className="text-sm font-medium">Select a category from the left to view details</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}



                  {/* AI Solutions Dropdown */}
                  {link.dropdownType === "ai" && aiDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="fixed left-0 right-0 bg-white shadow-2xl border-t border-gray-200 p-8 z-[100]"
                      style={{
                        top: '80px',
                        maxHeight: 'calc(100vh - 80px)',
                        overflowY: 'auto'
                      }}
                    >
                      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2">
                            <Psychology sx={{ fontSize: 24, color: '#3170b5' }} />
                            <h3 className="text-lg font-bold text-primary">
                              AI Solutions by Industry
                            </h3>
                          </div>
                          <Link
                            href="/ai-solutions"
                            onClick={() => setAiDropdownOpen(false)}
                            className="text-sm text-primary font-medium hover:underline flex items-center gap-1"
                          >
                            View All AI Solutions
                            <KeyboardArrowRight sx={{ fontSize: 18 }} />
                          </Link>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl">
                          {aiIndustries.map((industry) => {
                            const IconComponent = industry.icon;
                            return (
                              <Link
                                key={industry.slug}
                                href={`/ai-solutions/${industry.slug}`}
                                onClick={() => setAiDropdownOpen(false)}
                                className={`flex items-start gap-2 px-4 py-3 rounded-lg transition-all group border w-fit ${pathname === `/ai-solutions/${industry.slug}` ? 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/30 shadow-md' : 'border-gray-100 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:border-primary/30 hover:shadow-md'}`}
                              >
                                {pathname === `/ai-solutions/${industry.slug}` && <KeyboardArrowRight sx={{ fontSize: 18 }} className="text-primary mt-1 flex-shrink-0" />}
                                <div className="flex flex-col">
                                  <div className="flex items-center gap-2 mb-1">
                                    <IconComponent sx={{ fontSize: 20 }} className={`${pathname === `/ai-solutions/${industry.slug}` ? 'text-primary' : 'text-primary'}`} />
                                    <div className={`font-semibold text-sm transition-colors ${pathname === `/ai-solutions/${industry.slug}` ? 'text-primary' : 'text-gray-800 group-hover:text-primary'}`}>
                                      {industry.name}
                                    </div>
                                  </div>
                                  <div className="text-xs text-gray-500 ml-7">
                                    {industry.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}

                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm xl:text-base font-medium transition-colors relative group whitespace-nowrap ${pathname === link.href ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
                >
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block"
                  >
                    {link.name}
                  </motion.span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              )
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <motion.a
            href="/contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block px-4 xl:px-6 py-2.5 bg-primary text-white font-semibold rounded-lg shadow-lg shadow-primary/30 hover:bg-primary-600 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 text-sm xl:text-base whitespace-nowrap"
          >
            Get Started
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden pb-6 pt-4 border-t border-gray-200 bg-white"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <div key={link.name} className="border-b border-gray-100 pb-2">
                    <button
                      onClick={() => {
                        if (link.dropdownType === "solutions") {
                          setMobileSolutionsOpen(!mobileSolutionsOpen);
                          setMobileBpmOpen(false);
                          setMobileAiOpen(false);
                        } else if (link.dropdownType === "bpm") {
                          setMobileBpmOpen(!mobileBpmOpen);
                          setMobileSolutionsOpen(false);
                          setMobileAiOpen(false);
                        } else if (link.dropdownType === "ai") {
                          setMobileAiOpen(!mobileAiOpen);
                          setMobileSolutionsOpen(false);
                          setMobileBpmOpen(false);
                        }
                      }}
                      className="text-gray-700 hover:text-primary hover:bg-gray-50 font-medium py-3 px-4 transition-colors flex items-center justify-between w-full rounded-lg"
                    >
                      <span>{link.name}</span>
                      <KeyboardArrowDown
                        sx={{ fontSize: 20 }}
                        className={`transition-transform duration-200 ${(link.dropdownType === "solutions" && mobileSolutionsOpen) ||
                          (link.dropdownType === "bpm" && mobileBpmOpen) ||
                          (link.dropdownType === "ai" && mobileAiOpen)
                          ? 'rotate-180'
                          : ''
                          }`}
                      />
                    </button>

                    {/* Solutions Dropdown - Mobile */}
                    {link.dropdownType === "solutions" && mobileSolutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="ml-4 mt-2 flex flex-col gap-2 max-h-[70vh] overflow-y-auto"
                      >
                        {/* By Industry - Mobile */}
                        <div className="bg-gray-50 rounded-lg p-2">
                          <button
                            onClick={() => setMobileIndustryOpen(!mobileIndustryOpen)}
                            className="flex items-center justify-between w-full text-sm font-semibold text-primary py-2 px-2"
                          >
                            <span className="flex items-center gap-2">
                              <Factory sx={{ fontSize: 18 }} />
                              By Industry
                            </span>
                            <KeyboardArrowDown
                              sx={{ fontSize: 18 }}
                              className={`transition-transform ${mobileIndustryOpen ? 'rotate-180' : ''}`}
                            />
                          </button>
                          {mobileIndustryOpen && (
                            <div className="mt-1 space-y-1">
                              {Object.entries(industryData).map(([key, industry]) => {
                                const IconComponent = industry.icon;
                                const isExpanded = expandedMobileIndustry === key;
                                return (
                                  <div key={industry.name} className="border-b border-gray-100 last:border-0">
                                    <button
                                      onClick={() => setExpandedMobileIndustry(isExpanded ? null : key)}
                                      className="w-full flex items-center justify-between text-gray-700 hover:text-primary hover:bg-white text-xs py-2 px-3 transition-colors rounded-md"
                                    >
                                      <div className="flex items-center gap-2">
                                        <IconComponent sx={{ fontSize: 16 }} />
                                        <span>{industry.name}</span>
                                      </div>
                                      <KeyboardArrowDown
                                        sx={{ fontSize: 16 }}
                                        className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                      />
                                    </button>
                                    {isExpanded && (
                                      <div className="ml-6 mt-1 space-y-1 mb-2">
                                        {industry.subTopics.map((topic) => (
                                          <Link
                                            key={topic.name}
                                            href={topic.href}
                                            onClick={() => {
                                              setIsMobileMenuOpen(false);
                                              setMobileSolutionsOpen(false);
                                              setMobileIndustryOpen(false);
                                              setExpandedMobileIndustry(null);
                                            }}
                                            className="block text-gray-600 hover:text-primary text-sm py-2 px-3 transition-colors"
                                          >
                                            {topic.name}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>


                      </motion.div>
                    )}

                    {/* BPM Dropdown - Mobile */}
                    {link.dropdownType === "bpm" && mobileBpmOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="ml-4 mt-2 flex flex-col gap-1"
                      >
                        <div className="bg-gray-50 rounded-lg p-2">
                          <div className="flex items-center gap-2 text-sm font-semibold text-primary py-2 px-2 mb-1">
                            <Settings sx={{ fontSize: 18 }} />
                            CannyECM BPM Workflows
                          </div>
                          <div className="space-y-1">
                            {bpmCategories.map((category) => {
                              const IconComponent = category.icon;
                              return (
                                <div
                                  key={category.name}
                                  className="flex items-center gap-2 text-gray-600 text-xs py-2 px-3 bg-white rounded-md"
                                >
                                  <IconComponent sx={{ fontSize: 14 }} />
                                  {category.name}
                                </div>
                              );

                            })}
                          </div>
                          <Link
                            href="/bpm"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setMobileBpmOpen(false);
                            }}
                            className="block text-primary font-semibold text-xs py-2 px-3 mt-2 border-t border-gray-200"
                          >
                            View All BPM Solutions →
                          </Link>
                        </div>
                      </motion.div>
                    )}



                    {/* AI Solutions Dropdown - Mobile */}
                    {link.dropdownType === "ai" && mobileAiOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="ml-4 mt-2 flex flex-col gap-2"
                      >
                        <div className="bg-gray-50 rounded-lg p-2">
                          <div className="flex items-center gap-2 text-sm font-semibold text-primary py-2 px-2 mb-1">
                            <Psychology sx={{ fontSize: 18 }} />
                            AI Solutions by Industry
                          </div>
                          <div className="mt-1 space-y-1">
                            {aiIndustries.map((industry) => {
                              const IconComponent = industry.icon;
                              return (
                                <Link
                                  key={industry.slug}
                                  href={`/ai-solutions/${industry.slug}`}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileAiOpen(false);
                                  }}
                                  className="block text-gray-600 hover:text-primary hover:bg-white text-xs py-2 px-3 transition-colors rounded-md"
                                >
                                  <div className="flex items-start gap-2">
                                    <IconComponent sx={{ fontSize: 16 }} className="mt-0.5" />
                                    <div>
                                      <div className="font-semibold">{industry.name}</div>
                                      <div className="text-[10px] text-gray-500 mt-0.5">
                                        {industry.description}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                          <Link
                            href="/ai-solutions"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setMobileAiOpen(false);
                            }}
                            className="block text-primary font-semibold text-xs py-2 px-3 mt-2 border-t border-gray-200"
                          >
                            View All AI Solutions →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-primary hover:bg-gray-50 font-medium py-3 px-4 transition-colors rounded-lg"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-lg text-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
