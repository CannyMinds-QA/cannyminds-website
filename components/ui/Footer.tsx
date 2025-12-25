"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const products = [
    { name: "CannyDocs", href: "/solutions/document-management" },
    { name: "CannyHR", href: "/solutions/hr-management" },
    { name: "CannyScan", href: "/solutions/scanning-solution" },
    { name: "CannyTrack", href: "/solutions/tracking-system" },
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
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  const certifications = [
    { name: "ISO 9001:2015", image: "/certifications/iso-9001-2015.png" },
    { name: "ISO 15489:2016", image: "/certifications/iso-15489-2016.png" },
    { name: "ISO 22716:2007", image: "/certifications/iso-22716-2007.jpg" },
    { name: "FDA 21 CFR Part 11", image: "/certifications/fda-21-cfr-part-11.png" },
  ];

  return (
    <footer className="bg-gradient-to-br from-secondary to-primary text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-2xl">C</span>
              </div>
              <div>
                <div className="text-xl font-bold">CannyMinds</div>
                <div className="text-sm text-blue-200">Technology Solutions</div>
              </div>
            </div>
            <p className="text-blue-100 mb-4 leading-relaxed">
              Empowering businesses worldwide with innovative IT solutions and
              digital transformation services.
            </p>
            <div className="flex gap-4">
              {["linkedin", "twitter", "facebook", "instagram"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social}
                >
                  <span className="text-lg">
                    {social === "linkedin" && "in"}
                    {social === "twitter" && "𝕏"}
                    {social === "facebook" && "f"}
                    {social === "instagram" && "📷"}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="border-t border-white/20 pt-8 pb-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold mb-2">Certified & Compliant</h3>
            <p className="text-blue-100 text-sm">Trusted by organizations worldwide for quality and compliance</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white rounded-lg p-3 hover:shadow-xl transition-shadow">
                <div className="relative w-20 h-20">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-sm">
              © {currentYear} CannyMinds Technology Solutions. All rights reserved.
            </p>
            <p className="text-blue-200 text-sm">
              Global Offices: India • USA • Nigeria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
