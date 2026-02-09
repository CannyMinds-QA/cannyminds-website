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
  const [useCasesDropdownOpen, setUseCasesDropdownOpen] = useState(false);
  const [aiDropdownOpen, setAiDropdownOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  const [mobileBpmOpen, setMobileBpmOpen] = useState(false);
  const [mobileUseCasesOpen, setMobileUseCasesOpen] = useState(false);
  const [mobileAiOpen, setMobileAiOpen] = useState(false);
  const [mobileDepartmentOpen, setMobileDepartmentOpen] = useState(false);
  const [mobileServiceCategoryOpen, setMobileServiceCategoryOpen] = useState(false);

  // State for tracking expanded items in mobile menu (3rd level)
  const [expandedMobileIndustry, setExpandedMobileIndustry] = useState<string | null>(null);
  const [expandedMobileDepartment, setExpandedMobileDepartment] = useState<string | null>(null);
  const [expandedMobileService, setExpandedMobileService] = useState<string | null>(null);

  const [activeMenuTab, setActiveMenuTab] = useState<'industry' | 'department' | 'service' | 'solutions'>('industry');
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>('financial-services');
  const [hoveredDepartment, setHoveredDepartment] = useState<string | null>('human-resources');
  const [hoveredService, setHoveredService] = useState<string | null>('document-management');

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
        setUseCasesDropdownOpen(false);
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
    'financial-services': {
      name: "Financial Services",
      href: "/industries/financial-services",
      icon: AccountBalance,
      subTopics: [
        { name: "Overview", href: "/industries/financial-services" },
        { name: "Document Management", href: "/industries/financial-services/document-management" },
        { name: "Records & Archives", href: "/industries/financial-services/records-archives" },
        { name: "Digitization Services", href: "/industries/financial-services/digitization" },
        { name: "Workflow Automation", href: "/industries/financial-services/workflow-automation" },
        { name: "Compliance Solutions", href: "/industries/financial-services/compliance" },
      ]
    },
    'healthcare': {
      name: "Healthcare",
      href: "/use-cases/healthcare",
      icon: LocalHospital,
      subTopics: [
        { name: "Overview", href: "/use-cases/healthcare" },
        { name: "Patient Records", href: "/use-cases/healthcare/patient-records" },
        { name: "Medical Archives", href: "/use-cases/healthcare/medical-archives" },
        { name: "Imaging & Digitization", href: "/use-cases/healthcare/digitization" },
        { name: "Compliance", href: "/use-cases/healthcare/compliance" },
        { name: "Workforce Management", href: "/use-cases/healthcare/workforce" },
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
    'manufacturing': {
      name: "Manufacturing",
      href: "/industries/manufacturing",
      icon: Factory,
      subTopics: [
        { name: "Overview", href: "/industries/manufacturing" },
        { name: "Production Documents", href: "/industries/manufacturing/production" },
        { name: "Quality Records", href: "/industries/manufacturing/quality" },
        { name: "Supplier Management", href: "/industries/manufacturing/supplier" },
        { name: "Compliance", href: "/industries/manufacturing/compliance" },
      ]
    },
    'government': {
      name: "Government",
      href: "/industries/government",
      icon: AccountBalanceWallet,
      subTopics: [
        { name: "Overview", href: "/industries/government" },
        { name: "Citizen Services", href: "/industries/government/citizen-services" },
        { name: "Land Records", href: "/industries/government/land-records" },
        { name: "e-Office", href: "/industries/government/e-office" },
        { name: "Public Archives", href: "/industries/government/archives" },
      ]
    },
    'legal': {
      name: "Legal Services",
      href: "/industries/legal",
      icon: Gavel,
      subTopics: [
        { name: "Overview", href: "/industries/legal" },
        { name: "Case Management", href: "/industries/legal/case-management" },
        { name: "Contracts", href: "/industries/legal/contracts" },
        { name: "Litigation Support", href: "/industries/legal/litigation" },
        { name: "Compliance", href: "/industries/legal/compliance" },
      ]
    },
    'insurance': {
      name: "Insurance",
      href: "/industries/insurance",
      icon: VerifiedUser,
      subTopics: [
        { name: "Overview", href: "/industries/insurance" },
        { name: "Policy Management", href: "/industries/insurance/policy" },
        { name: "Claims Processing", href: "/industries/insurance/claims" },
        { name: "Underwriting", href: "/industries/insurance/underwriting" },
        { name: "Agent Management", href: "/industries/insurance/agents" },
      ]
    },
    'education': {
      name: "Education",
      href: "/industries/education",
      icon: School,
      subTopics: [
        { name: "Overview", href: "/industries/education" },
        { name: "Student Records", href: "/industries/education/student-records" },
        { name: "Admissions", href: "/industries/education/admissions" },
        { name: "Examinations", href: "/industries/education/examinations" },
        { name: "Faculty Management", href: "/industries/education/faculty" },
      ]
    },
  };

  const departmentData: Record<string, { name: string; href: string; icon: typeof People; subTopics: { name: string; href: string }[] }> = {
    'human-resources': {
      name: "Human Resources",
      href: "/departments/human-resources",
      icon: People,
      subTopics: [
        { name: "Overview", href: "/departments/human-resources" },
        { name: "Employee Records", href: "/departments/human-resources/employee-records" },
        { name: "Onboarding", href: "/departments/human-resources/onboarding" },
        { name: "Payroll", href: "/departments/human-resources/payroll" },
        { name: "Attendance", href: "/departments/human-resources/attendance" },
      ]
    },
    'finance': {
      name: "Finance & Accounting",
      href: "/departments/finance",
      icon: Receipt,
      subTopics: [
        { name: "Overview", href: "/departments/finance" },
        { name: "Invoice Processing", href: "/departments/finance/invoice-processing" },
        { name: "Expense Management", href: "/departments/finance/expense" },
        { name: "Audit Trail", href: "/departments/finance/audit" },
      ]
    },
    'legal-compliance': {
      name: "Legal & Compliance",
      href: "/departments/legal-compliance",
      icon: Gavel,
      subTopics: [
        { name: "Overview", href: "/departments/legal-compliance" },
        { name: "Contracts", href: "/departments/legal-compliance/contracts" },
        { name: "Regulatory Filing", href: "/departments/legal-compliance/regulatory" },
        { name: "Policy Management", href: "/departments/legal-compliance/policy" },
      ]
    },
    'operations': {
      name: "Operations",
      href: "/departments/operations",
      icon: Settings,
      subTopics: [
        { name: "Overview", href: "/departments/operations" },
        { name: "SOPs", href: "/departments/operations/sops" },
        { name: "Vendor Management", href: "/departments/operations/vendor" },
        { name: "Quality Records", href: "/departments/operations/quality" },
      ]
    },
  };

  const serviceData: Record<string, { name: string; href: string; icon: typeof Description; subTopics: { name: string; href: string }[] }> = {
    'digitization': {
      name: "Document Digitization",
      href: "/services/digitization",
      icon: Scanner,
      subTopics: [
        { name: "Overview", href: "/services/digitization" },
        { name: "Bulk Scanning", href: "/services/digitization/bulk-scanning" },
        { name: "OCR & Indexing", href: "/services/digitization/ocr-indexing" },
        { name: "Quality Assurance", href: "/services/digitization/quality-assurance" },
        { name: "Secure Delivery", href: "/services/digitization/secure-delivery" },
      ]
    },
    'manpower': {
      name: "Scanning Manpower",
      href: "/services/manpower",
      icon: People,
      subTopics: [
        { name: "Overview", href: "/services/manpower" },
        { name: "On-site Resources", href: "/services/manpower/on-site" },
        { name: "Dedicated Teams", href: "/services/manpower/dedicated-teams" },
        { name: "Managed Services", href: "/services/manpower/managed-services" },
      ]
    },
    'implementation': {
      name: "Implementation & Migration",
      href: "/services/implementation",
      icon: Settings,
      subTopics: [
        { name: "Overview", href: "/services/implementation" },
        { name: "System Setup", href: "/services/implementation/setup" },
        { name: "Data Migration", href: "/services/implementation/data-migration" },
        { name: "Integration Services", href: "/services/implementation/integration" },
        { name: "Go-Live Support", href: "/services/implementation/go-live" },
      ]
    },
    'training': {
      name: "Software Training",
      href: "/services/training",
      icon: School,
      subTopics: [
        { name: "Overview", href: "/services/training" },
        { name: "User Training", href: "/services/training/user-training" },
        { name: "Admin Training", href: "/services/training/admin-training" },
        { name: "Train the Trainer", href: "/services/training/train-the-trainer" },
      ]
    },
    'consulting': {
      name: "Consulting & Advisory",
      href: "/services/consulting",
      icon: BusinessCenter,
      subTopics: [
        { name: "Overview", href: "/services/consulting" },
        { name: "Process Assessment", href: "/services/consulting/process-assessment" },
        { name: "Digital Strategy", href: "/services/consulting/digital-strategy" },
        { name: "Compliance Advisory", href: "/services/consulting/compliance" },
      ]
    },
    'support': {
      name: "Support & Maintenance",
      href: "/services/support",
      icon: Construction,
      subTopics: [
        { name: "Overview", href: "/services/support" },
        { name: "Annual Maintenance", href: "/services/support/amc" },
        { name: "Helpdesk Support", href: "/services/support/helpdesk" },
        { name: "System Upgrades", href: "/services/support/upgrades" },
      ]
    },
  };

  const bpmCategories = [
    { name: "Document Lifecycle & Control Processes", href: "/bpm#document-lifecycle", icon: Description },
    { name: "Quality Management Processes", href: "/bpm#quality-management", icon: VerifiedUser },
    { name: "Audit & Compliance Processes", href: "/bpm#audit-compliance", icon: VerifiedUser },
    { name: "Production & Operations Processes", href: "/bpm#production-operations", icon: Factory },
    { name: "Engineering & Change Management", href: "/bpm#engineering-change", icon: Construction },
    { name: "Validation & Qualification Processes", href: "/bpm#validation-qualification", icon: VerifiedUser },
    { name: "Healthcare & Clinical Processes", href: "/bpm#healthcare-clinical", icon: LocalHospital },
    { name: "Legal & Contract Management", href: "/bpm#legal-contract", icon: Gavel },
    { name: "Finance & BFSI Processes", href: "/bpm#finance-bfsi", icon: AccountBalance },
    { name: "Procurement & Vendor Management", href: "/bpm#procurement-vendor", icon: Business },
    { name: "HR & Administration Processes", href: "/bpm#hr-administration", icon: People },
    { name: "IT & Information Security Processes", href: "/bpm#it-security", icon: Settings },
    { name: "Risk Management & Governance", href: "/bpm#risk-governance", icon: HealthAndSafety },
    { name: "Customer Service & Support", href: "/bpm#customer-service", icon: People },
    { name: "Records Retention & Legal Hold", href: "/bpm#records-retention", icon: Description },
  ];

  const useCaseIndustries = [
    { name: "Healthcare Industry", href: "/use-cases/healthcare", icon: LocalHospital },
    { name: "Pharmaceutical Manufacturing", href: "/use-cases/pharmaceutical", icon: Science },
    { name: "Manufacturing & Engineering", href: "/use-cases/manufacturing-engineering", icon: Factory },
    { name: "FMCG Manufacturing", href: "/use-cases/fmcg", icon: Factory },
    { name: "Bottling Manufacturing", href: "/use-cases/bottling", icon: Factory },
    { name: "Banking, Finance & Insurance", href: "/use-cases/bfsi", icon: AccountBalance },
    { name: "Legal Firms", href: "/use-cases/legal", icon: Gavel },
    { name: "Audit Firms", href: "/use-cases/audit-firms", icon: VerifiedUser },
  ];


  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/#solutions", hasDropdown: true, dropdownType: "solutions" },
    { name: "AI Solutions", href: "/ai-solutions", hasDropdown: true, dropdownType: "ai" },
    { name: "BPM", href: "/bpm", hasDropdown: true, dropdownType: "bpm" },
    { name: "Use Cases", href: "/use-cases", hasDropdown: true, dropdownType: "useCases" },
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
                        setUseCasesDropdownOpen(false);
                        setAiDropdownOpen(false);
                      } else if (link.dropdownType === "bpm") {
                        setBpmDropdownOpen(!bpmDropdownOpen);
                        setSolutionsDropdownOpen(false);
                        setUseCasesDropdownOpen(false);
                        setAiDropdownOpen(false);
                      } else if (link.dropdownType === "useCases") {
                        setUseCasesDropdownOpen(!useCasesDropdownOpen);
                        setSolutionsDropdownOpen(false);
                        setBpmDropdownOpen(false);
                        setAiDropdownOpen(false);
                      } else if (link.dropdownType === "ai") {
                        setAiDropdownOpen(!aiDropdownOpen);
                        setSolutionsDropdownOpen(false);
                        setBpmDropdownOpen(false);
                        setUseCasesDropdownOpen(false);
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
                      className={`transition-transform ${(link.dropdownType === "solutions" && solutionsDropdownOpen) || (link.dropdownType === "bpm" && bpmDropdownOpen) || (link.dropdownType === "useCases" && useCasesDropdownOpen) || (link.dropdownType === "ai" && aiDropdownOpen) ? 'rotate-180' : ''}`}
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </motion.button>

                  {/* Solutions Mega Menu Dropdown - 3 Column Layout */}
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
                        <div className="grid grid-cols-12 min-h-[400px]">
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
                              <button
                                onClick={() => setActiveMenuTab('department')}
                                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${activeMenuTab === 'department'
                                  ? 'bg-primary text-white'
                                  : 'text-gray-700 hover:bg-gray-100'
                                  }`}
                              >
                                By Department
                                <KeyboardArrowRight sx={{ fontSize: 18 }} />
                              </button>
                              <button
                                onClick={() => setActiveMenuTab('service')}
                                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${activeMenuTab === 'service'
                                  ? 'bg-primary text-white'
                                  : 'text-gray-700 hover:bg-gray-100'
                                  }`}
                              >
                                By Service
                                <KeyboardArrowRight sx={{ fontSize: 18 }} />
                              </button>

                              {/* Divider */}
                              <div className="border-t border-gray-200 my-3"></div>

                              {/* All Products Link - Styled differently */}
                              <Link
                                href="/solutions"
                                onClick={() => setSolutionsDropdownOpen(false)}
                                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${activeMenuTab === 'solutions'
                                  ? 'bg-primary text-white'
                                  : 'text-gray-700 hover:bg-gray-100'
                                  }`}
                              >
                                <span className="flex items-center gap-2">
                                  All Products
                                </span>
                              </Link>
                            </div>
                          </div>

                          {/* Column 2: Industry/Department/Service List */}
                          <div className="col-span-4 p-6 border-r border-gray-200">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                              {activeMenuTab === 'industry' ? 'Select Industry' : activeMenuTab === 'department' ? 'Select Department' : 'Select Service'}
                            </h4>
                            <div className="space-y-1">
                              {activeMenuTab === 'industry' && (
                                Object.entries(industryData).map(([key, industry]) => {
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
                                })
                              )}
                              {activeMenuTab === 'department' && (
                                Object.entries(departmentData).map(([key, dept]) => {
                                  const IconComponent = dept.icon;
                                  return (
                                    <button
                                      key={key}
                                      onMouseEnter={() => setHoveredDepartment(key)}
                                      onClick={() => setHoveredDepartment(key)}
                                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between group ${hoveredDepartment === key
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                      <span className="flex items-center gap-2">
                                        <IconComponent sx={{ fontSize: 18 }} className={hoveredDepartment === key ? 'text-primary' : 'text-gray-400'} />
                                        {dept.name}
                                      </span>
                                      <KeyboardArrowRight sx={{ fontSize: 18 }} className={hoveredDepartment === key ? 'text-primary' : 'text-gray-300'} />
                                    </button>
                                  );
                                })
                              )}
                              {activeMenuTab === 'service' && (
                                Object.entries(serviceData).map(([key, service]) => {
                                  const IconComponent = service.icon;
                                  return (
                                    <button
                                      key={key}
                                      onMouseEnter={() => setHoveredService(key)}
                                      onClick={() => setHoveredService(key)}
                                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between group ${hoveredService === key
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                      <span className="flex items-center gap-2">
                                        <IconComponent sx={{ fontSize: 18 }} className={hoveredService === key ? 'text-primary' : 'text-gray-400'} />
                                        {service.name}
                                      </span>
                                      <KeyboardArrowRight sx={{ fontSize: 18 }} className={hoveredService === key ? 'text-primary' : 'text-gray-300'} />
                                    </button>
                                  );
                                })
                              )}
                            </div>
                          </div>

                          {/* Column 3: Sub-Topics */}
                          <div className="col-span-6 p-6 bg-gray-50/50 relative pointer-events-auto">
                            {activeMenuTab === 'industry' && hoveredIndustry && industryData[hoveredIndustry] && (
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                key={hoveredIndustry}
                              >
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                                  {industryData[hoveredIndustry].name}
                                </h4>
                                <div className={`grid gap-x-8 gap-y-6 ${hoveredIndustry === 'pharmaceutical' ? 'grid-cols-1' : 'grid-cols-2'}`}>
                                  {industryData[hoveredIndustry].groups ? (
                                    industryData[hoveredIndustry].groups.map((group) => (
                                      <div key={group.title} className="space-y-3">
                                        <h5 className="text-[10px] font-bold text-primary/60 uppercase tracking-widest pl-3">
                                          {group.title}
                                        </h5>
                                        <div className="space-y-1">
                                          {group.items.map((item) => (
                                            <Link
                                              key={item.name}
                                              href={item.href}
                                              onClick={() => setSolutionsDropdownOpen(false)}
                                              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 w-fit ${pathname === item.href ? 'text-primary bg-primary/5 font-medium' : 'text-gray-600 hover:text-primary hover:bg-white hover:shadow-sm'}`}
                                            >
                                              {pathname === item.href && <KeyboardArrowRight sx={{ fontSize: 16 }} className="text-primary" />}
                                              {item.name}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    ))
                                  ) : (
                                    industryData[hoveredIndustry].subTopics.map((topic) => (
                                      <Link
                                        key={topic.name}
                                        href={topic.href}
                                        onClick={() => setSolutionsDropdownOpen(false)}
                                        className={`px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 w-fit ${pathname === topic.href ? 'text-primary bg-primary/5 font-medium' : 'text-gray-600 hover:text-primary hover:bg-white hover:shadow-sm'}`}
                                      >
                                        {pathname === topic.href && <KeyboardArrowRight sx={{ fontSize: 16 }} className="text-primary" />}
                                        {topic.name}
                                      </Link>
                                    ))
                                  )}
                                </div>
                              </motion.div>
                            )}
                            {activeMenuTab === 'department' && hoveredDepartment && departmentData[hoveredDepartment] && (
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                key={hoveredDepartment}
                              >
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                                  {departmentData[hoveredDepartment].name}
                                </h4>
                                <div className="grid grid-cols-2 gap-2">
                                  {departmentData[hoveredDepartment].subTopics.map((topic) => (
                                    <Link
                                      key={topic.name}
                                      href={topic.href}
                                      onClick={() => setSolutionsDropdownOpen(false)}
                                      className={`px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 w-fit ${pathname === topic.href ? 'text-primary bg-primary/5 font-medium' : 'text-gray-600 hover:text-primary hover:bg-white hover:shadow-sm'}`}
                                    >
                                      {pathname === topic.href && <KeyboardArrowRight sx={{ fontSize: 16 }} className="text-primary" />}
                                      {topic.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                            {activeMenuTab === 'service' && hoveredService && serviceData[hoveredService] && (
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                key={hoveredService}
                              >
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                                  {serviceData[hoveredService].name}
                                </h4>
                                <div className="grid grid-cols-2 gap-2">
                                  {serviceData[hoveredService].subTopics.map((topic) => (
                                    <Link
                                      key={topic.name}
                                      href={topic.href}
                                      onClick={() => setSolutionsDropdownOpen(false)}
                                      className={`px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${pathname === topic.href ? 'text-primary bg-primary/5 font-medium' : 'text-gray-600 hover:text-primary hover:bg-white hover:shadow-sm'}`}
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
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2">
                            <Settings sx={{ fontSize: 24, color: '#3170b5' }} />
                            <h3 className="text-lg font-bold text-primary">
                              CannyECM BPM Workflows
                            </h3>
                          </div>
                          <Link
                            href="/bpm"
                            onClick={() => setBpmDropdownOpen(false)}
                            className="text-sm text-primary font-medium hover:underline flex items-center gap-1"
                          >
                            View All BPM Solutions
                            <KeyboardArrowRight sx={{ fontSize: 18 }} />
                          </Link>
                        </div>
                        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-7xl">
                          {bpmCategories.map((category) => {
                            const IconComponent = category.icon;
                            return (
                              <Link
                                key={category.name}
                                href={category.href}
                                onClick={() => setBpmDropdownOpen(false)}
                                className={`flex items-center gap-2 p-3 rounded-lg transition-colors group border w-fit ${pathname === category.href ? 'bg-primary/5 border-primary/30' : 'border-gray-100 hover:bg-primary/5 hover:border-primary/30'}`}
                              >
                                {pathname === category.href && <KeyboardArrowRight sx={{ fontSize: 16 }} className="text-primary" />}
                                <IconComponent sx={{ fontSize: 18 }} className={`flex-shrink-0 ${pathname === category.href ? 'text-primary' : 'text-primary'}`} />
                                <span className={`text-sm transition-colors leading-tight ${pathname === category.href ? 'text-primary font-medium' : 'text-gray-700 group-hover:text-primary'}`}>
                                  {category.name}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Use Cases Dropdown */}
                  {link.dropdownType === "useCases" && useCasesDropdownOpen && (
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
                        <div className="flex items-center gap-2 mb-6">
                          <Factory sx={{ fontSize: 24, color: '#3170b5' }} />
                          <h3 className="text-lg font-bold text-primary">
                            Industry Use Cases
                          </h3>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
                          {useCaseIndustries.map((industry) => {
                            const IconComponent = industry.icon;
                            return (
                              <Link
                                key={industry.name}
                                href={industry.href}
                                onClick={() => setUseCasesDropdownOpen(false)}
                                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors group border w-fit ${pathname === industry.href ? 'bg-primary/5 border-primary/30' : 'border-gray-100 hover:bg-primary/5'}`}
                              >
                                {pathname === industry.href && <KeyboardArrowRight sx={{ fontSize: 18 }} className="text-primary" />}
                                <IconComponent sx={{ fontSize: 20, color: '#3170b5' }} />
                                <div className={`font-semibold text-sm transition-colors ${pathname === industry.href ? 'text-primary' : 'text-gray-800 group-hover:text-primary'}`}>
                                  {industry.name}
                                </div>
                              </Link>
                            );
                          })}
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
            className="hidden lg:block px-4 xl:px-6 py-2.5 bg-primary text-white font-semibold rounded-lg shadow-lg shadow-primary/30 transition-all duration-300 text-sm xl:text-base whitespace-nowrap"
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
                          setMobileUseCasesOpen(false);
                          setMobileAiOpen(false);
                        } else if (link.dropdownType === "bpm") {
                          setMobileBpmOpen(!mobileBpmOpen);
                          setMobileSolutionsOpen(false);
                          setMobileUseCasesOpen(false);
                          setMobileAiOpen(false);
                        } else if (link.dropdownType === "useCases") {
                          setMobileUseCasesOpen(!mobileUseCasesOpen);
                          setMobileSolutionsOpen(false);
                          setMobileBpmOpen(false);
                          setMobileAiOpen(false);
                        } else if (link.dropdownType === "ai") {
                          setMobileAiOpen(!mobileAiOpen);
                          setMobileSolutionsOpen(false);
                          setMobileBpmOpen(false);
                          setMobileUseCasesOpen(false);
                        }
                      }}
                      className="text-gray-700 hover:text-primary hover:bg-gray-50 font-medium py-3 px-4 transition-colors flex items-center justify-between w-full rounded-lg"
                    >
                      <span>{link.name}</span>
                      <KeyboardArrowDown
                        sx={{ fontSize: 20 }}
                        className={`transition-transform duration-200 ${(link.dropdownType === "solutions" && mobileSolutionsOpen) ||
                          (link.dropdownType === "bpm" && mobileBpmOpen) ||
                          (link.dropdownType === "useCases" && mobileUseCasesOpen) ||
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

                        {/* By Department - Mobile */}
                        <div className="bg-gray-50 rounded-lg p-2">
                          <button
                            onClick={() => setMobileDepartmentOpen(!mobileDepartmentOpen)}
                            className="flex items-center justify-between w-full text-sm font-semibold text-primary py-2 px-2"
                          >
                            <span className="flex items-center gap-2">
                              <People sx={{ fontSize: 18 }} />
                              By Department
                            </span>
                            <KeyboardArrowDown
                              sx={{ fontSize: 18 }}
                              className={`transition-transform ${mobileDepartmentOpen ? 'rotate-180' : ''}`}
                            />
                          </button>
                          {mobileDepartmentOpen && (
                            <div className="mt-1 space-y-1">
                              {Object.entries(departmentData).map(([key, dept]) => {
                                const IconComponent = dept.icon;
                                const isExpanded = expandedMobileDepartment === key;
                                return (
                                  <div key={dept.name} className="border-b border-gray-100 last:border-0">
                                    <button
                                      onClick={() => setExpandedMobileDepartment(isExpanded ? null : key)}
                                      className="w-full flex items-center justify-between text-gray-700 hover:text-primary hover:bg-white text-xs py-2 px-3 transition-colors rounded-md"
                                    >
                                      <div className="flex items-center gap-2">
                                        <IconComponent sx={{ fontSize: 16 }} />
                                        <span>{dept.name}</span>
                                      </div>
                                      <KeyboardArrowDown
                                        sx={{ fontSize: 16 }}
                                        className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                      />
                                    </button>
                                    {isExpanded && (
                                      <div className="ml-6 mt-1 space-y-1 mb-2">
                                        {dept.subTopics.map((topic) => (
                                          <Link
                                            key={topic.name}
                                            href={topic.href}
                                            onClick={() => {
                                              setIsMobileMenuOpen(false);
                                              setMobileSolutionsOpen(false);
                                              setMobileDepartmentOpen(false);
                                              setExpandedMobileDepartment(null);
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

                        {/* By Service - Mobile */}
                        <div className="bg-gray-50 rounded-lg p-2">
                          <button
                            onClick={() => setMobileServiceCategoryOpen(!mobileServiceCategoryOpen)}
                            className="flex items-center justify-between w-full text-sm font-semibold text-primary py-2 px-2"
                          >
                            <span className="flex items-center gap-2">
                              <Settings sx={{ fontSize: 18 }} />
                              By Service
                            </span>
                            <KeyboardArrowDown
                              sx={{ fontSize: 18 }}
                              className={`transition-transform ${mobileServiceCategoryOpen ? 'rotate-180' : ''}`}
                            />
                          </button>
                          {mobileServiceCategoryOpen && (
                            <div className="mt-1 space-y-1">
                              {Object.entries(serviceData).map(([key, service]) => {
                                const IconComponent = service.icon;
                                const isExpanded = expandedMobileService === key;
                                return (
                                  <div key={service.name} className="border-b border-gray-100 last:border-0">
                                    <button
                                      onClick={() => setExpandedMobileService(isExpanded ? null : key)}
                                      className="w-full flex items-center justify-between text-gray-700 hover:text-primary hover:bg-white text-xs py-2 px-3 transition-colors rounded-md"
                                    >
                                      <div className="flex items-center gap-2">
                                        <IconComponent sx={{ fontSize: 16 }} />
                                        <span>{service.name}</span>
                                      </div>
                                      <KeyboardArrowDown
                                        sx={{ fontSize: 16 }}
                                        className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                      />
                                    </button>
                                    {isExpanded && (
                                      <div className="ml-6 mt-1 space-y-1 mb-2">
                                        {service.subTopics.map((topic) => (
                                          <Link
                                            key={topic.name}
                                            href={topic.href}
                                            onClick={() => {
                                              setIsMobileMenuOpen(false);
                                              setMobileSolutionsOpen(false);
                                              setMobileServiceCategoryOpen(false);
                                              setExpandedMobileService(null);
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
                                <Link
                                  key={category.name}
                                  href={category.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileBpmOpen(false);
                                  }}
                                  className="flex items-center gap-2 text-gray-600 hover:text-primary hover:bg-white text-xs py-2 px-3 transition-colors rounded-md"
                                >
                                  <IconComponent sx={{ fontSize: 14 }} />
                                  {category.name}
                                </Link>
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

                    {/* Use Cases Dropdown - Mobile */}
                    {link.dropdownType === "useCases" && mobileUseCasesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="ml-4 mt-2 flex flex-col gap-2"
                      >
                        <div className="bg-gray-50 rounded-lg p-2">
                          <div className="flex items-center gap-2 text-sm font-semibold text-primary py-2 px-2 mb-1">
                            <Factory sx={{ fontSize: 18 }} />
                            Industry Use Cases
                          </div>
                          <div className="mt-1 space-y-1">
                            {useCaseIndustries.map((industry) => {
                              const IconComponent = industry.icon;
                              return (
                                <Link
                                  key={industry.name}
                                  href={industry.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileUseCasesOpen(false);
                                  }}
                                  className="block text-gray-600 hover:text-primary hover:bg-white text-xs py-2 px-3 transition-colors rounded-md"
                                >
                                  <div className="flex items-center gap-2">
                                    <IconComponent sx={{ fontSize: 16 }} />
                                    <span>{industry.name}</span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
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
