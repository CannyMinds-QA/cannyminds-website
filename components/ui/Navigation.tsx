"use client";

import { m as motion, useScroll, useTransform, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState, useEffect, useRef } from "react";
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (type: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(type);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small delay to allow moving mouse into the dropdown
  };

  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileBpmOpen, setMobileBpmOpen] = useState(false);
  const [mobileAiOpen, setMobileAiOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  // State for tracking expanded items in mobile menu (3rd level)
  const [expandedMobileIndustry, setExpandedMobileIndustry] = useState<string | null>(null);

  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>('manufacturing');
  const [hoveredBpmCategory, setHoveredBpmCategory] = useState<string | null>('Document Lifecycle & Control Processes');

  const { scrollY } = useScroll();

  // Optimize: Use simpler transforms to reduce calculation overhead
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
    // Keep click outside listener for mobile/touch
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.nav-dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
        { name: "Pharmaceutical Quality Management System", href: "/product/cannypqms" },
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
    { name: "Blog", href: "/blog" },
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
              <div className="group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="CannyMinds Technology Solutions"
                  width={160}
                  height={56}
                  className="object-contain object-left w-32 h-12 sm:w-40 sm:h-14"
                  priority
                  sizes="(max-width: 640px) 128px, 160px"
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
            <LayoutGroup>
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href || 
                              (link.dropdownType === 'ai' && pathname.startsWith('/ai-solutions')) ||
                              (link.dropdownType === 'solutions' && pathname.startsWith('/solutions')) ||
                              (link.dropdownType === 'bpm' && pathname.startsWith('/bpm'));

                return link.hasDropdown ? (
                  <div
                    key={link.name}
                    className="relative nav-dropdown-container h-full flex items-center"
                    onMouseEnter={() => handleMouseEnter(link.dropdownType!)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <motion.button
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`text-sm xl:text-base font-medium transition-colors relative group flex items-center gap-1 whitespace-nowrap bg-transparent border-0 cursor-pointer py-2 ${activeDropdown === link.dropdownType || isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
                    >
                      {link.name}
                      <KeyboardArrowDown
                        sx={{ fontSize: 20 }}
                        className={`transition-transform duration-300 ${activeDropdown === link.dropdownType ? 'rotate-180' : ''}`}
                      />
                      
                      {isActive && (
                        <motion.div
                          layoutId="active-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                          initial={false}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </motion.button>

                    <AnimatePresence>
                      {/* Solutions Mega Menu Dropdown */}
                      {link.dropdownType === "solutions" && activeDropdown === "solutions" && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="fixed left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100 z-[100] overflow-hidden rounded-b-2xl"
                          style={{
                            top: '80px',
                            maxHeight: 'calc(100vh - 80px)',
                            overflowY: 'auto'
                          }}
                        >
                          <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
                            <div className="grid grid-cols-12 min-h-[300px]">
                              {/* Column 1: Browse By */}
                              <div className="col-span-2 bg-gray-50/30 p-5 border-r border-gray-100">
                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Browse By</h4>
                                <div className="space-y-1">
                                  <div className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-between bg-primary text-white shadow-md shadow-primary/20">
                                    By Industry
                                    <KeyboardArrowRight sx={{ fontSize: 16 }} />
                                  </div>
                                  <div className="border-t border-gray-100 my-3"></div>
                                  <Link
                                    href="/product"
                                    onClick={() => setActiveDropdown(null)}
                                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-100 flex items-center gap-2 transition-colors"
                                  >
                                    All Products
                                  </Link>
                                </div>
                              </div>

                              {/* Column 2: Industry List */}
                              <div className="col-span-3 p-5 border-r border-gray-100 bg-white">
                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Select Industry</h4>
                                <div className="space-y-0.5">
                                  {Object.entries(industryData).map(([key, industry], idx) => {
                                    const IconComponent = industry.icon;
                                    return (
                                      <motion.button
                                        key={key}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.04 }}
                                        onMouseEnter={() => setHoveredIndustry(key)}
                                        onClick={() => setHoveredIndustry(key)}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between group ${hoveredIndustry === key
                                          ? 'bg-primary/5 text-primary'
                                          : 'text-gray-600 hover:bg-blue-50/50'
                                          }`}
                                      >
                                        <span className="flex items-center gap-2.5">
                                          <IconComponent sx={{ fontSize: 18 }} className={hoveredIndustry === key ? 'text-primary' : 'text-gray-400'} />
                                          {industry.name}
                                        </span>
                                        <KeyboardArrowRight sx={{ fontSize: 16 }} className={hoveredIndustry === key ? 'text-primary' : 'text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity'} />
                                      </motion.button>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Column 3: Sub-Topics */}
                              <div className="col-span-7 p-6 bg-gray-50/30">
                                {hoveredIndustry && industryData[hoveredIndustry] && (
                                  <motion.div
                                    initial={{ opacity: 0, scale: 0.99 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                    key={hoveredIndustry}
                                  >
                                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                                      {industryData[hoveredIndustry].name} Solutions
                                    </h4>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
                                      {industryData[hoveredIndustry].subTopics.map((topic, idx) => (
                                        <motion.div
                                          key={topic.name}
                                          initial={{ opacity: 0, scale: 0.98 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ delay: idx * 0.03 }}
                                        >
                                          <Link
                                            href={topic.href}
                                            onClick={() => setActiveDropdown(null)}
                                            className={`block px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${pathname === topic.href ? 'text-primary bg-primary/5 font-bold border-l-2 border-primary pl-2.5' : 'text-gray-500 hover:text-primary hover:bg-white hover:shadow-sm pl-3'}`}
                                          >
                                            {topic.name}
                                          </Link>
                                        </motion.div>
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
                      {link.dropdownType === "bpm" && activeDropdown === "bpm" && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="fixed left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100 z-[100] overflow-hidden rounded-b-2xl"
                          style={{
                            top: '80px',
                            maxHeight: 'calc(100vh - 80px)',
                            overflowY: 'auto'
                          }}
                        >
                          <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
                            <div className="grid grid-cols-12 min-h-[500px]">
                              {/* Left Column: BPM Categories List */}
                              <div className="col-span-4 p-5 border-r border-gray-100 bg-white overflow-y-auto max-h-[600px]">
                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                                  Process Categories
                                </h4>
                                <div className="space-y-0.5">
                                  {bpmCategories.map((category, idx) => {
                                    const IconComponent = category.icon;
                                    const isHovered = hoveredBpmCategory === category.name;
                                    return (
                                      <motion.button
                                        key={category.name}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.03 }}
                                        onMouseEnter={() => setHoveredBpmCategory(category.name)}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between group ${isHovered
                                          ? 'bg-primary/10 text-primary'
                                          : 'text-gray-600 hover:bg-gray-50'
                                          }`}
                                      >
                                        <span className="flex items-center gap-2.5">
                                          <IconComponent sx={{ fontSize: 16 }} className={isHovered ? 'text-primary' : 'text-gray-400'} />
                                          <span className="line-clamp-1">{category.name}</span>
                                        </span>
                                        {isHovered && <KeyboardArrowRight sx={{ fontSize: 16 }} className="text-primary flex-shrink-0" />}
                                      </motion.button>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Right Column: Dynamic Content Details */}
                              <div className="col-span-8 p-6 bg-gray-50/30 relative overflow-y-auto max-h-[600px]">
                                {hoveredBpmCategory && bpmDetails[hoveredBpmCategory] ? (
                                  <motion.div
                                    initial={{ opacity: 0, scale: 0.99 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    key={hoveredBpmCategory}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                                      {(() => {
                                        const CategoryIcon = bpmCategories.find(c => c.name === hoveredBpmCategory)?.icon || Settings;
                                        return <CategoryIcon sx={{ fontSize: 24 }} className="text-primary" />;
                                      })()}
                                      <h3 className="text-lg font-bold text-gray-800 tracking-tight">
                                        {hoveredBpmCategory}
                                      </h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                      {bpmDetails[hoveredBpmCategory].map((point, index) => (
                                        <motion.div
                                          key={index}
                                          initial={{ opacity: 0, scale: 0.98 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ delay: index * 0.04 }}
                                          className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                                        >
                                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                                          <span className="text-[11px] text-gray-500 leading-relaxed font-semibold">
                                            {point}
                                          </span>
                                        </motion.div>
                                      ))}
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
                                      <Link
                                        href="/bpm"
                                        onClick={() => setActiveDropdown(null)}
                                        className="text-[11px] font-bold text-primary hover:text-primary-600 flex items-center gap-1.5 group bg-primary/5 px-4 py-2 rounded-lg transition-all"
                                      >
                                        Explore All BPM Solutions
                                        <KeyboardArrowRight sx={{ fontSize: 16 }} className="group-hover:translate-x-0.5 transition-transform" />
                                      </Link>
                                    </div>
                                  </motion.div>
                                ) : (
                                  <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
                                    <Settings sx={{ fontSize: 40, opacity: 0.2, marginBottom: 2 }} />
                                    <p className="text-xs font-bold">Select a category from the left</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* AI Solutions Dropdown */}
                      {link.dropdownType === "ai" && activeDropdown === "ai" && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="fixed left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100 p-6 z-[100] overflow-hidden rounded-b-2xl"
                          style={{
                            top: '80px',
                            maxHeight: 'calc(100vh - 80px)',
                            overflowY: 'auto'
                          }}
                        >
                          <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
                            <div className="flex items-center justify-between mb-8">
                              <div className="flex items-center gap-3">
                                <div className="p-1.5 bg-primary/10 rounded-lg">
                                  <Psychology sx={{ fontSize: 20, color: '#3170b5' }} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 tracking-tight">
                                  Enterprise AI Solutions
                                </h3>
                              </div>
                              <Link
                                href="/ai-solutions"
                                onClick={() => setActiveDropdown(null)}
                                className="text-xs text-primary font-bold hover:text-primary-600 flex items-center gap-1 px-3 py-1.5 bg-primary/5 rounded-lg transition-all"
                              >
                                View All AI Solutions
                                <KeyboardArrowRight sx={{ fontSize: 16 }} />
                              </Link>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
                              {aiIndustries.map((industry, idx) => {
                                const IconComponent = industry.icon;
                                const isCurrentPath = pathname === `/ai-solutions/${industry.slug}`;
                                return (
                                  <motion.div
                                    key={industry.slug}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.04 }}
                                  >
                                    <Link
                                      href={`/ai-solutions/${industry.slug}`}
                                      onClick={() => setActiveDropdown(null)}
                                      className={`flex items-start gap-3 p-3 rounded-xl transition-all group border h-full ${isCurrentPath ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-white border-gray-100 hover:border-primary/20 hover:shadow-lg hover:shadow-gray-200/40 hover:-translate-y-0.5'}`}
                                    >
                                      <div className={`p-2 rounded-lg flex-shrink-0 transition-colors ${isCurrentPath ? 'bg-white/20 text-white' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                                        <IconComponent sx={{ fontSize: 20 }} />
                                      </div>
                                      <div className="flex flex-col min-w-0">
                                        <div className={`font-bold text-xs mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis ${isCurrentPath ? 'text-white' : 'text-gray-800 group-hover:text-primary'}`}>
                                          {industry.name}
                                        </div>
                                        <div className={`text-[10px] leading-snug line-clamp-2 ${isCurrentPath ? 'text-white/80' : 'text-gray-400 font-medium group-hover:text-gray-500'}`}>
                                          {industry.description}
                                        </div>
                                      </div>
                                    </Link>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm xl:text-base font-medium transition-colors relative group whitespace-nowrap py-2 flex items-center ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block"
                    >
                      {link.name}
                    </motion.span>
                    {isActive && (
                      <motion.div
                        layoutId="active-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </LayoutGroup>
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
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="lg:hidden pb-6 pt-2 border-t border-gray-100 bg-white/95 backdrop-blur-md max-h-[calc(100vh-64px)] sm:max-h-[calc(100vh-80px)] overflow-y-auto overscroll-y-contain"
              data-lenis-prevent
            >
              <div className="flex flex-col gap-1 px-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {link.hasDropdown ? (
                      <div className="border-b border-gray-50 last:border-0 pb-1">
                        <button
                          onClick={() => {
                            if (link.dropdownType === "solutions") {
                              const opening = !mobileSolutionsOpen;
                              setMobileSolutionsOpen(opening);
                              if (!opening) {
                                setMobileIndustryOpen(false);
                                setExpandedMobileIndustry(null);
                              }
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
                          className={`flex items-center justify-between w-full py-3 px-3 rounded-xl transition-all ${((link.dropdownType === "solutions" && mobileSolutionsOpen) || (link.dropdownType === "bpm" && mobileBpmOpen) || (link.dropdownType === "ai" && mobileAiOpen)) ? 'bg-primary/5 text-primary' : 'text-gray-700'}`}
                        >
                          <span className="font-semibold text-sm">{link.name}</span>
                          <KeyboardArrowDown
                            sx={{ fontSize: 20 }}
                            className={`transition-transform duration-300 ${(link.dropdownType === "solutions" && mobileSolutionsOpen) ||
                              (link.dropdownType === "bpm" && mobileBpmOpen) ||
                              (link.dropdownType === "ai" && mobileAiOpen)
                              ? 'rotate-180'
                              : ''
                              }`}
                          />
                        </button>

                        <AnimatePresence>
                          {/* Solutions Dropdown - Mobile */}
                          {link.dropdownType === "solutions" && mobileSolutionsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-2 mt-1 space-y-1 overflow-hidden"
                            >
                              <div className="bg-gray-50/80 rounded-2xl p-2 border border-gray-100/50">
                                <button
                                  onClick={() => setMobileIndustryOpen(!mobileIndustryOpen)}
                                  className="flex items-center justify-between w-full text-xs font-bold text-primary py-2 px-3"
                                >
                                  <span className="flex items-center gap-2 uppercase tracking-tight">
                                    <Factory sx={{ fontSize: 16 }} />
                                    Explore By Industry
                                  </span>
                                  <KeyboardArrowDown
                                    sx={{ fontSize: 18 }}
                                    className={`transition-transform ${mobileIndustryOpen ? 'rotate-180' : ''}`}
                                  />
                                </button>
                                
                                <AnimatePresence>
                                  {mobileIndustryOpen && (
                                    <motion.div 
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="space-y-1 overflow-hidden"
                                    >
                                      {Object.entries(industryData).map(([key, industry]) => {
                                        const IconComponent = industry.icon;
                                        const isExpanded = expandedMobileIndustry === key;
                                        return (
                                          <div key={industry.name} className="border-t border-gray-100/50 first:border-0">
                                            <button
                                              onClick={() => setExpandedMobileIndustry(isExpanded ? null : key)}
                                              className="w-full flex items-center justify-between text-gray-600 py-3 px-3 transition-colors"
                                            >
                                              <div className="flex items-center gap-3">
                                                <div className="p-1.5 bg-white rounded-lg shadow-sm">
                                                  <IconComponent sx={{ fontSize: 16 }} className="text-primary" />
                                                </div>
                                                <span className="text-[13px] font-medium">{industry.name}</span>
                                              </div>
                                              <KeyboardArrowDown
                                                sx={{ fontSize: 16 }}
                                                className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                                              />
                                            </button>
                                            
                                            {isExpanded && (
                                              <motion.div 
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="ml-11 flex flex-col gap-1 pb-2"
                                              >
                                                {industry.subTopics.map((topic) => (
                                                  <Link
                                                    key={topic.name}
                                                    href={topic.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="block text-gray-500 text-[13px] py-2 hover:text-primary transition-colors"
                                                  >
                                                    {topic.name}
                                                  </Link>
                                                ))}
                                              </motion.div>
                                            )}
                                          </div>
                                        );
                                      })}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </motion.div>
                          )}

                          {/* BPM Dropdown - Mobile */}
                          {link.dropdownType === "bpm" && mobileBpmOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-2 mt-1 space-y-1 overflow-hidden"
                            >
                              <div className="bg-gray-50/80 rounded-2xl p-3 border border-gray-100/50">
                                <div className="flex items-center gap-2 text-xs font-bold text-primary mb-3 uppercase tracking-tight">
                                  <Settings sx={{ fontSize: 16 }} />
                                  Core BPM Workflows
                                </div>
                                <div className="grid grid-cols-1 gap-2">
                                  {bpmCategories.slice(0, 6).map((category) => {
                                    const IconComponent = category.icon;
                                    return (
                                      <div
                                        key={category.name}
                                        className="flex items-center gap-3 text-gray-600 text-[13px] py-2.5 px-3 bg-white rounded-xl shadow-sm border border-gray-100"
                                      >
                                        <IconComponent sx={{ fontSize: 16 }} className="text-primary/70" />
                                        <span className="line-clamp-1">{category.name}</span>
                                      </div>
                                    );
                                  })}
                                </div>
                                <Link
                                  href="/bpm"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block text-primary font-bold text-xs py-3 px-3 mt-3 border-t border-gray-200 text-center"
                                >
                                  View All 15+ BPM Categories →
                                </Link>
                              </div>
                            </motion.div>
                          )}

                          {/* AI Solutions Dropdown - Mobile */}
                          {link.dropdownType === "ai" && mobileAiOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-2 mt-1 space-y-1 overflow-hidden"
                            >
                              <div className="bg-gray-50/80 rounded-2xl p-3 border border-gray-100/50">
                                <div className="flex items-center gap-2 text-xs font-bold text-primary mb-3 uppercase tracking-tight">
                                  <Psychology sx={{ fontSize: 16 }} />
                                  Industry AI Modules
                                </div>
                                <div className="space-y-2">
                                  {aiIndustries.map((industry) => {
                                    const IconComponent = industry.icon;
                                    return (
                                      <Link
                                        key={industry.slug}
                                        href={`/ai-solutions/${industry.slug}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block bg-white p-3 rounded-xl shadow-sm border border-gray-100 active:scale-[0.98] transition-all"
                                      >
                                        <div className="flex items-start gap-3">
                                          <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                            <IconComponent sx={{ fontSize: 18 }} />
                                          </div>
                                          <div>
                                            <div className="font-bold text-sm text-gray-800">{industry.name}</div>
                                            <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">
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
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block text-primary font-bold text-xs py-3 px-3 mt-3 border-t border-gray-200 text-center"
                                >
                                  Explore All AI Solutions →
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-4 px-3 rounded-xl font-semibold text-sm transition-all ${pathname === link.href ? 'text-primary bg-primary/5' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-6 flex items-center justify-center py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary/95 transition-all text-sm active:scale-[0.98]"
                  >
                    Get Started Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
