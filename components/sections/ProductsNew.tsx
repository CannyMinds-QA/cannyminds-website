"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Description as DocIcon,
  People as PeopleIcon,
  Scanner as ScanIcon,
  Visibility as TrackIcon,
  Inventory as InventoryIcon,
  Science as ScienceIcon,
  Psychology as AiIcon,
  ArrowForward as ArrowIcon,
  CheckCircle as CheckIcon,
} from "@mui/icons-material";

const products = [
  {
    name: "CannyECM",
    title: "Enterprise Content Management",
    description: "Enterprise-grade ECM with OCR, workflow automation, and cloud/on-premise deployment. Organize 50,000+ documents effortlessly.",
    icon: DocIcon,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    link: "/solutions/document-management",
    features: ["80% OCR Accuracy", "Workflow Automation", "Cloud & On-Premise"],
  },
  {
    name: "CannyHR",
    title: "HR & Payroll Management",
    description: "Complete hire-to-retire HRMS with payroll, attendance, leave management, and 350+ biometric integrations.",
    icon: PeopleIcon,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    link: "/solutions/hr-management",
    features: ["Payroll Automation", "350+ Integrations", "Mobile App"],
  },
  {
    name: "CannyScan",
    title: "Document Scanning Services",
    description: "Professional scanning for paper documents, microfilm, blueprints with 99.9% accuracy. Onsite and offsite options available.",
    icon: ScanIcon,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    link: "/solutions/scanning-solution",
    features: ["99.9% Accuracy", "All Document Types", "Secure Cloud Storage"],
  },
  {
    name: "CannyTrack",
    title: "Productivity Monitoring",
    description: "Workforce productivity monitoring with activity tracking, screenshots, and data loss prevention for remote teams.",
    icon: TrackIcon,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    link: "/solutions/tracking-system",
    features: ["Real-time Analytics", "Consent-based", "Offline Support"],
  },
  {
    name: "CannyRMS",
    title: "Retail Management System",
    description: "Complete retail solution for inventory, POS, multi-location operations, warehouse management, and real-time analytics.",
    icon: InventoryIcon,
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50",
    link: "/solutions/rms",
    features: ["Inventory Management", "Multi-location POS", "Real-time Analytics"],
  },
  {
    name: "Canny eBMR",
    title: "Electronic Batch Manufacturing Record",
    description: "FDA 21 CFR Part 11 compliant eBMR system for pharmaceutical manufacturing with audit trails and e-signatures.",
    icon: ScienceIcon,
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50",
    link: "/solutions/ebmr",
    features: ["FDA Compliant", "E-Signatures", "Audit Trails"],
  },
  {
    name: "AI Solutions",
    title: "AI & Intelligent Automation",
    description: "Transform business with AI-powered automation, machine learning, and intelligent process optimization solutions.",
    icon: AiIcon,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    link: "/solutions/ai-solutions",
    features: ["ML & AI", "Process Automation", "Predictive Analytics"],
  },
];

export default function ProductsNew() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Our Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive enterprise software trusted by 500+ companies worldwide
            </p>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={product.link}>
                  <div className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-primary h-full cursor-pointer transition-colors">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10">
                        <IconComponent className="text-primary" sx={{ fontSize: 32 }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{product.title}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {product.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center gap-1 text-xs text-gray-600"
                          >
                            <CheckIcon sx={{ fontSize: 12 }} className="text-green-600" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="pt-3 flex items-center gap-2 text-primary font-medium text-sm">
                        Learn More
                        <ArrowIcon sx={{ fontSize: 16 }} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/contact">
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
              Get a Free Consultation
              <ArrowIcon fontSize="small" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
