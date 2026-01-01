"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  KeyboardArrowDown,
  KeyboardArrowRight,
  LocalHospital,
  Factory,
  AccountBalance,
  AccountBalanceWallet,
  Store,
  School,
  Description,
  People,
  Scanner,
  Inventory,
  VerifiedUser,
  Settings,
  Visibility,
  Science,
  Psychology,
  Receipt,
  Gavel,
  Business,
  HealthAndSafety,
  Construction,
  CloudUpload,
  AutoGraph,
  BusinessCenter,
  ShoppingCart
} from "@mui/icons-material";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [bpmDropdownOpen, setBpmDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [useCasesDropdownOpen, setUseCasesDropdownOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  const [mobileBusinessNeedOpen, setMobileBusinessNeedOpen] = useState(false);
  const [mobileBpmOpen, setMobileBpmOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileUseCasesOpen, setMobileUseCasesOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.nav-dropdown-container')) {
        setSolutionsDropdownOpen(false);
        setBpmDropdownOpen(false);
        setServicesDropdownOpen(false);
        setUseCasesDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const industries = [
    { name: "Healthcare & Pharmaceuticals", href: "/industries/healthcare", description: "HIPAA-compliant digital solutions" },
    { name: "Manufacturing & Engineering", href: "/industries/manufacturing", description: "Production & quality management" },
    { name: "Banking, Finance & Insurance", href: "/industries/banking-finance", description: "Secure financial automation" },
    { name: "Government & Public Sector", href: "/industries/government", description: "Transparent governance solutions" },
    { name: "Retail & E-commerce", href: "/industries/retail", description: "Omnichannel retail solutions" },
    { name: "Education & Training", href: "/industries/education", description: "Modern learning management" },
  ];

  const businessNeeds = [
    {
      name: "Document Management & Control",
      href: "/solutions/document-management",
      description: "Centralize, secure & automate documents",
      icon: Description
    },
    {
      name: "HR & Workforce Automation",
      href: "/solutions/hr-management",
      description: "End-to-end HR, payroll & attendance",
      icon: People
    },
    {
      name: "Digital Transformation & Scanning",
      href: "/solutions/scanning-solution",
      description: "Go paperless with intelligent scanning",
      icon: Scanner
    },
    {
      name: "Productivity & Workforce Monitoring",
      href: "/solutions/tracking-system",
      description: "Track employee activity & productivity",
      icon: Visibility
    },
    {
      name: "Retail Management System",
      href: "/solutions/rms",
      description: "Complete retail & inventory solution",
      icon: Inventory
    },
    {
      name: "Electronic Batch Manufacturing",
      href: "/solutions/ebmr",
      description: "FDA compliant eBMR for pharma",
      icon: Science
    },
    {
      name: "AI & Intelligent Automation",
      href: "/solutions/ai-solutions",
      description: "ML, automation & process optimization",
      icon: Psychology
    },
    {
      name: "Compliance Management",
      href: "/about#certifications",
      description: "ISO & FDA certified solutions",
      icon: VerifiedUser
    },
  ];

  const bpmSolutions = [
    {
      name: "Invoice Management",
      href: "/bpm/invoice-management",
      description: "Automate invoice processing & approvals",
      icon: Receipt
    },
    {
      name: "Legal & Contract Management",
      href: "/bpm/legal-management",
      description: "Manage contracts, agreements & compliance",
      icon: Gavel
    },
    {
      name: "Procurement & Purchase Orders",
      href: "/bpm/procurement",
      description: "Streamline purchasing workflows",
      icon: Business
    },
    {
      name: "Safety & Compliance Workflows",
      href: "/bpm/safety-compliance",
      description: "Manage safety protocols & audits",
      icon: HealthAndSafety
    },
    {
      name: "Project & Task Management",
      href: "/bpm/project-management",
      description: "Track projects & automate tasks",
      icon: Construction
    },
    {
      name: "Custom Workflow Automation",
      href: "/bpm/custom-workflows",
      description: "Build tailored business processes",
      icon: Settings
    },
  ];

  const serviceItems = [
    {
      name: "Document Digitalization Service",
      href: "/solutions/scanning-solution",
      description: "Professional document scanning & digitization",
      icon: Scanner
    },
    {
      name: "Digital Transformation",
      href: "/services",
      description: "End-to-end business digitization solutions",
      icon: CloudUpload
    },
    {
      name: "Process Automation",
      href: "/services",
      description: "Streamline workflows with smart automation",
      icon: AutoGraph
    }
  ];

  const useCaseIndustries = [
    { name: "Healthcare & Pharmaceuticals", href: "/use-cases#healthcare", icon: LocalHospital },
    { name: "Manufacturing & Engineering", href: "/use-cases#manufacturing", icon: Factory },
    { name: "Banking, Finance & Insurance", href: "/use-cases#banking-finance", icon: AccountBalance },
    { name: "Education", href: "/use-cases#education", icon: School },
    { name: "Retail & E-commerce", href: "/use-cases#retail", icon: ShoppingCart },
    { name: "Legal", href: "/use-cases#legal", icon: Gavel },
  ];


  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/#solutions", hasDropdown: true, dropdownType: "solutions" },
    { name: "BPM", href: "/bpm", hasDropdown: true, dropdownType: "bpm" },
    { name: "Services", href: "/services", hasDropdown: true, dropdownType: "services" },
    { name: "Use Cases", href: "/use-cases", hasDropdown: true, dropdownType: "useCases" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg backdrop-blur-md bg-white/95" : "bg-white/80 backdrop-blur-sm"
        }`}
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
                        setServicesDropdownOpen(false);
                        setUseCasesDropdownOpen(false);
                      } else if (link.dropdownType === "bpm") {
                        setBpmDropdownOpen(!bpmDropdownOpen);
                        setSolutionsDropdownOpen(false);
                        setServicesDropdownOpen(false);
                        setUseCasesDropdownOpen(false);
                      } else if (link.dropdownType === "services") {
                        setServicesDropdownOpen(!servicesDropdownOpen);
                        setSolutionsDropdownOpen(false);
                        setBpmDropdownOpen(false);
                        setUseCasesDropdownOpen(false);
                      } else if (link.dropdownType === "useCases") {
                        setUseCasesDropdownOpen(!useCasesDropdownOpen);
                        setSolutionsDropdownOpen(false);
                        setBpmDropdownOpen(false);
                        setServicesDropdownOpen(false);
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
                      className={`transition-transform ${(link.dropdownType === "solutions" && solutionsDropdownOpen) || (link.dropdownType === "bpm" && bpmDropdownOpen) || (link.dropdownType === "services" && servicesDropdownOpen) || (link.dropdownType === "useCases" && useCasesDropdownOpen) ? 'rotate-180' : ''}`}
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </motion.button>

                  {/* Solutions Mega Menu Dropdown */}
                  {link.dropdownType === "solutions" && solutionsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="fixed left-0 right-0 bg-white shadow-2xl border-t border-gray-200 p-8 z-[100]"
                      style={{
                        top: '80px',
                        maxHeight: 'calc(100vh - 80px)',
                        overflowY: 'auto'
                      }}
                    >
                      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
                        <div className="flex items-center gap-2 mb-6">
                          <AccountBalanceWallet sx={{ fontSize: 24, color: '#3170b5' }} />
                          <h3 className="text-lg font-bold text-primary">
                            Solutions by Business Need
                          </h3>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
                          {businessNeeds.map((need) => {
                            const IconComponent = need.icon;
                            return (
                              <Link
                                key={need.name}
                                href={need.href}
                                className="block px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors group border border-gray-100"
                              >
                                <div className="flex items-start gap-3">
                                  <IconComponent sx={{ fontSize: 24, color: '#3170b5' }} className="mt-0.5" />
                                  <div className="flex-1">
                                    <div className="font-semibold text-gray-800 text-sm group-hover:text-primary transition-colors">
                                      {need.name}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-0.5">
                                      {need.description}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* BPM Dropdown */}
                  {link.dropdownType === "bpm" && bpmDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="fixed left-0 right-0 bg-white shadow-2xl border-t border-gray-200 p-8 z-[100]"
                      style={{
                        top: '80px',
                        maxHeight: 'calc(100vh - 80px)',
                        overflowY: 'auto'
                      }}
                    >
                      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
                        <div className="flex items-center gap-2 mb-6">
                          <Settings sx={{ fontSize: 24, color: '#3170b5' }} />
                          <h3 className="text-lg font-bold text-primary">
                            Business Process Management Solutions
                          </h3>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
                          {bpmSolutions.map((solution) => {
                            const IconComponent = solution.icon;
                            return (
                              <Link
                                key={solution.name}
                                href={solution.href}
                                className="block px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors group border border-gray-100"
                              >
                                <div className="flex items-start gap-3">
                                  <IconComponent sx={{ fontSize: 24, color: '#3170b5' }} className="mt-0.5" />
                                  <div className="flex-1">
                                    <div className="font-semibold text-gray-800 text-sm group-hover:text-primary transition-colors">
                                      {solution.name}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-0.5">
                                      {solution.description}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Services Dropdown */}
                  {link.dropdownType === "services" && servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="fixed left-0 right-0 bg-white shadow-2xl border-t border-gray-200 p-8 z-[100]"
                      style={{
                        top: '80px',
                        maxHeight: 'calc(100vh - 80px)',
                        overflowY: 'auto'
                      }}
                    >
                      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
                        <div className="flex items-center gap-2 mb-6">
                          <Settings sx={{ fontSize: 24, color: '#3170b5' }} />
                          <h3 className="text-lg font-bold text-primary">
                            Professional Services
                          </h3>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
                          {serviceItems.map((service) => {
                            const IconComponent = service.icon;
                            return (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors group border border-gray-100"
                              >
                                <div className="flex items-start gap-3">
                                  <IconComponent sx={{ fontSize: 24, color: '#3170b5' }} className="mt-0.5" />
                                  <div className="flex-1">
                                    <div className="font-semibold text-gray-800 text-sm group-hover:text-primary transition-colors">
                                      {service.name}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-0.5">
                                      {service.description}
                                    </div>
                                  </div>
                                </div>
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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
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
                          {industries.map((industry) => (
                            <Link
                              key={industry.name}
                              href={industry.href}
                              className="block px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors group border border-gray-100"
                            >
                              <div className="font-semibold text-gray-800 text-sm group-hover:text-primary transition-colors">
                                {industry.name}
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                {industry.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-6 border-t border-gray-100 pt-4">
                          <Link
                            href="/use-cases"
                            className="text-primary font-semibold text-sm hover:underline flex items-center gap-1"
                          >
                            View All Use Cases <KeyboardArrowRight fontSize="small" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}

                </div>
              ) : (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-sm xl:text-base text-gray-700 hover:text-primary font-medium transition-colors relative group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
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
            className="lg:hidden pb-6 pt-4 border-t border-gray-200"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                link.hasDropdown ? (
                  <div key={link.name} className="border-b border-gray-100 pb-2">
                    <button
                      onClick={() => {
                        if (link.dropdownType === "solutions") {
                          setSolutionsDropdownOpen(!solutionsDropdownOpen);
                          setMobileBpmOpen(false);
                        } else if (link.dropdownType === "bpm") {
                          setMobileBpmOpen(!mobileBpmOpen);
                          setSolutionsDropdownOpen(false);
                          setMobileServicesOpen(false);
                        } else if (link.dropdownType === "services") {
                          setMobileServicesOpen(!mobileServicesOpen);
                          setSolutionsDropdownOpen(false);
                          setMobileBpmOpen(false);
                          setMobileUseCasesOpen(false);
                        } else if (link.dropdownType === "useCases") {
                          setMobileUseCasesOpen(!mobileUseCasesOpen);
                          setSolutionsDropdownOpen(false);
                          setMobileBpmOpen(false);
                          setMobileServicesOpen(false);
                        }
                      }}
                      className="text-gray-700 hover:text-primary hover:bg-gray-50 font-medium py-3 px-4 transition-colors flex items-center justify-between w-full rounded-lg"
                    >
                      <span>{link.name}</span>
                      <KeyboardArrowDown
                        sx={{ fontSize: 20 }}
                        className={`transition-transform ${(link.dropdownType === "solutions" && solutionsDropdownOpen) ||
                          (link.dropdownType === "bpm" && mobileBpmOpen) ||
                          (link.dropdownType === "services" && mobileServicesOpen) ||
                          (link.dropdownType === "useCases" && mobileUseCasesOpen)
                          ? 'rotate-180'
                          : ''
                          }`}
                      />
                    </button>

                    {/* Solutions Dropdown - Mobile */}
                    {link.dropdownType === "solutions" && solutionsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="ml-4 mt-2 flex flex-col gap-2"
                      >
                        {/* By Business Need - Mobile */}
                        <div className="bg-gray-50 rounded-lg p-2">
                          <button
                            onClick={() => setMobileBusinessNeedOpen(!mobileBusinessNeedOpen)}
                            className="flex items-center justify-between w-full text-sm font-semibold text-secondary py-2 px-2"
                          >
                            <span className="flex items-center gap-2">
                              <AccountBalanceWallet sx={{ fontSize: 18 }} />
                              Business Solutions
                            </span>
                            <KeyboardArrowDown
                              sx={{ fontSize: 18 }}
                              className={`transition-transform ${mobileBusinessNeedOpen ? 'rotate-180' : ''}`}
                            />
                          </button>
                          {mobileBusinessNeedOpen && (
                            <div className="mt-1 space-y-1">
                              {businessNeeds.map((need) => {
                                const IconComponent = need.icon;
                                return (
                                  <Link
                                    key={need.name}
                                    href={need.href}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setSolutionsDropdownOpen(false);
                                      setMobileBusinessNeedOpen(false);
                                    }}
                                    className="block text-gray-600 hover:text-secondary hover:bg-white text-xs py-2 px-3 transition-colors rounded-md"
                                  >
                                    <div className="flex items-center gap-2">
                                      <IconComponent sx={{ fontSize: 16 }} />
                                      <span>{need.name}</span>
                                    </div>
                                  </Link>
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
                        className="ml-4 mt-2 flex flex-col gap-2"
                      >
                        <div className="bg-gray-50 rounded-lg p-2">
                          <div className="mt-1 space-y-1">
                            {bpmSolutions.map((solution) => {
                              const IconComponent = solution.icon;
                              return (
                                <Link
                                  key={solution.name}
                                  href={solution.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileBpmOpen(false);
                                  }}
                                  className="block text-gray-600 hover:text-primary hover:bg-white text-xs py-2 px-3 transition-colors rounded-md"
                                >
                                  <div className="flex items-start gap-2">
                                    <IconComponent sx={{ fontSize: 16 }} className="mt-0.5" />
                                    <div>
                                      <div className="font-semibold">{solution.name}</div>
                                      <div className="text-[10px] text-gray-500 mt-0.5">
                                        {solution.description}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Services Dropdown - Mobile */}
                    {link.dropdownType === "services" && mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="ml-4 mt-2 flex flex-col gap-2"
                      >
                        <div className="bg-gray-50 rounded-lg p-2">
                          <div className="mt-1 space-y-1">
                            {serviceItems.map((service) => {
                              const IconComponent = service.icon;
                              return (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileServicesOpen(false);
                                  }}
                                  className="block text-gray-600 hover:text-primary hover:bg-white text-xs py-2 px-3 transition-colors rounded-md"
                                >
                                  <div className="flex items-start gap-2">
                                    <IconComponent sx={{ fontSize: 16 }} className="mt-0.5" />
                                    <div>
                                      <div className="font-semibold">{service.name}</div>
                                      <div className="text-[10px] text-gray-500 mt-0.5">
                                        {service.description}
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Use Cases Dropdown - Mobile */}
                    {link.dropdownType === "useCases" && mobileUseCasesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="ml-4 mt-2 flex flex-col gap-2"
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
                              {industries.map((industry) => (
                                <Link
                                  key={industry.name}
                                  href={industry.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileUseCasesOpen(false);
                                    setMobileIndustryOpen(false);
                                  }}
                                  className="block text-gray-600 hover:text-primary hover:bg-white text-xs py-2 px-3 transition-colors rounded-md"
                                >
                                  {industry.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="bg-gray-50 rounded-lg p-2 mt-2">
                          <Link
                            href="/use-cases"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setMobileUseCasesOpen(false);
                            }}
                            className="block text-primary font-semibold text-xs py-2 px-3 hover:bg-white transition-colors rounded-md"
                          >
                            View All Use Cases →
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
