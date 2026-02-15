"use client";

import { LinkedIn, X, Facebook, Instagram } from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const products = [
    { name: "All Products", href: "/products" },
    { name: "Manufacturing", href: "/solutions/manufacturing" },
    { name: "FMCG Digital Transformation", href: "/solutions/manufacturing/fmcg-digital-transformation" },
    { name: "Bottling Manufacturing", href: "/solutions/manufacturing/bottling" },
    { name: "Enterprise Content Management", href: "/product/enterprise-content-management" },
    { name: "CannyHR", href: "/product/hr-management" },
    { name: "CannyScan", href: "/product/scanning-solution" },
    { name: "CannyTrack", href: "/product/tracking-system" },
    { name: "CannyRMS", href: "/product/rms" },
    { name: "Canny eBMR", href: "/product/ebmr" },
  ];

  const aiSolutions = [
    { name: "Manufacturing AI", href: "/ai-solutions/manufacturing" },
    { name: "Professional Services AI", href: "/ai-solutions/professional-services" },
    { name: "NBFC & Finance AI", href: "/ai-solutions/nbfc" },
    { name: "Banking Technology", href: "/solutions/finance/banking-technology" },
    { name: "Insurance Technology", href: "/solutions/finance/insurance-technology" },
    { name: "Governance & Compliance", href: "/solutions/finance/governance-compliance" },
    { name: "Audit Management", href: "/solutions/professional-services/audit-firms" },
  ];

  const services = [
    "Digital Transformation",
    "AI & Automation",
    "Software Development",
    "Digital Marketing",
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const certifications = [
    { name: "ISO 9001:2015", image: "/certifications/iso-9001-2015.png" },
    { name: "ISO 15489:2016", image: "/certifications/iso-15489-2016.png" },
    { name: "ISO 22716:2007", image: "/certifications/iso-22716-2007.jpg" },
    { name: "FDA 21 CFR Part 11", image: "/certifications/fda-21-cfr-part-11.png" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 relative overflow-hidden rounded-lg">
                <Image
                  src="/og-image.jpg"
                  alt="CannyMinds Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">CannyMinds</div>
                <div className="text-sm text-gray-600">Technology Solutions</div>
              </div>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Empowering businesses worldwide with innovative IT solutions and
              digital transformation services.
            </p>
            <div className="flex gap-4">
              {[
                { id: "linkedin", icon: LinkedIn, label: "LinkedIn" },
                { id: "twitter", icon: X, label: "X (Twitter)" },
                { id: "facebook", icon: Facebook, label: "Facebook" },
                { id: "instagram", icon: Instagram, label: "Instagram" },
              ].map((social) => (
                <motion.a
                  key={social.id}
                  href={
                    social.id === "linkedin" ? "https://in.linkedin.com/company/cannyminds-technology-solutions" :
                      social.id === "twitter" ? "https://x.com/cannyminds" :
                        social.id === "facebook" ? "https://www.facebook.com/p/CannyMinds-Technology-Solutions-100063646614219/" :
                          social.id === "instagram" ? "https://www.instagram.com/cannyminds_technology/" : "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon sx={{ fontSize: 26 }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Solutions</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">AI Solutions</h3>
            <ul className="space-y-2">
              {aiSolutions.map((solution) => (
                <li key={solution.name}>
                  <Link
                    href={solution.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-4 pb-0">
          <div className="flex justify-center items-center">
            <p className="text-gray-600 text-sm text-center">
              © {currentYear} CannyMinds Technology Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
