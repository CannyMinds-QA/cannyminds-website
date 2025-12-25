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
  Settings
} from "@mui/icons-material";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  const [mobileBusinessNeedOpen, setMobileBusinessNeedOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
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

  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

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
      icon: People
    },
    {
      name: "Compliance Management",
      href: "/about#certifications",
      description: "ISO & FDA certified solutions",
      icon: VerifiedUser
    },
    {
      name: "Business Process Automation",
      href: "/services",
      description: "Streamline workflows & operations",
      icon: Settings
    },
  ];


  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/#solutions", hasDropdown: true },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg backdrop-blur-md bg-white/95" : "bg-white/80 backdrop-blur-sm"
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
                  className="relative"
                  onMouseEnter={() => {
                    if (closeTimeout) {
                      clearTimeout(closeTimeout);
                      setCloseTimeout(null);
                    }
                    setSolutionsDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => {
                      setSolutionsDropdownOpen(false);
                    }, 300);
                    setCloseTimeout(timeout);
                  }}
                >
                  <motion.a
                    href={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-sm xl:text-base text-gray-700 hover:text-primary font-medium transition-colors relative group flex items-center gap-1 whitespace-nowrap"
                  >
                    {link.name}
                    <KeyboardArrowDown
                      sx={{ fontSize: 20 }}
                      className={`transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`}
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </motion.a>

                  {/* Mega Menu Dropdown */}
                  {solutionsDropdownOpen && (
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
                      onMouseEnter={() => {
                        if (closeTimeout) {
                          clearTimeout(closeTimeout);
                          setCloseTimeout(null);
                        }
                      }}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => {
                          setSolutionsDropdownOpen(false);
                        }, 300);
                        setCloseTimeout(timeout);
                      }}
                    >
                      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
                        <div className="grid grid-cols-2 gap-8">
                        {/* By Industry Column */}
                        <div>
                          <div className="flex items-center gap-2 mb-3 px-3">
                            <Factory sx={{ fontSize: 20, color: '#3170b5' }} />
                            <h3 className="text-xs font-bold text-primary uppercase tracking-wider">
                              By Industry
                            </h3>
                          </div>
                          <div className="space-y-1">
                            {industries.map((industry) => (
                              <Link
                                key={industry.name}
                                href={industry.href}
                                className="block px-3 py-2 rounded-lg hover:bg-primary/5 transition-colors group"
                              >
                                <div className="font-semibold text-gray-800 text-sm group-hover:text-primary transition-colors">
                                  {industry.name}
                                </div>
                                <div className="text-xs text-gray-500 mt-0.5">
                                  {industry.description}
                                </div>
                              </Link>
                            ))}
                            <Link
                              href="/#solutions"
                              className="block px-3 py-2 mt-2 text-primary font-semibold text-sm hover:bg-primary/5 rounded-lg transition-colors"
                            >
                              View All Industries →
                            </Link>
                          </div>
                        </div>

                        {/* By Business Need Column */}
                        <div>
                          <div className="flex items-center gap-2 mb-3 px-3">
                            <AccountBalanceWallet sx={{ fontSize: 20, color: '#1e3a8a' }} />
                            <h3 className="text-xs font-bold text-secondary uppercase tracking-wider">
                              By Business Need
                            </h3>
                          </div>
                          <div className="space-y-1">
                            {businessNeeds.map((need) => {
                              const IconComponent = need.icon;
                              return (
                                <Link
                                  key={need.name}
                                  href={need.href}
                                  className="block px-3 py-2 rounded-lg hover:bg-secondary/5 transition-colors group"
                                >
                                  <div className="flex items-start gap-2">
                                    <IconComponent sx={{ fontSize: 20, color: '#3170b5' }} className="mt-0.5" />
                                    <div className="flex-1">
                                      <div className="font-semibold text-gray-800 text-sm group-hover:text-secondary transition-colors">
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
                      onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                      className="text-gray-700 hover:text-primary hover:bg-gray-50 font-medium py-3 px-4 transition-colors flex items-center justify-between w-full rounded-lg"
                    >
                      <span>{link.name}</span>
                      <KeyboardArrowDown
                        sx={{ fontSize: 20 }}
                        className={`transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {solutionsDropdownOpen && (
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
                                    setSolutionsDropdownOpen(false);
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

                        {/* By Business Need - Mobile */}
                        <div className="bg-gray-50 rounded-lg p-2">
                          <button
                            onClick={() => setMobileBusinessNeedOpen(!mobileBusinessNeedOpen)}
                            className="flex items-center justify-between w-full text-sm font-semibold text-secondary py-2 px-2"
                          >
                            <span className="flex items-center gap-2">
                              <AccountBalanceWallet sx={{ fontSize: 18 }} />
                              By Business Need
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
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-primary hover:bg-gray-50 font-medium py-3 px-4 transition-colors rounded-lg"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-lg text-center shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
