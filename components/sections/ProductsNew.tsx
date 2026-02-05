"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Description as DocIcon,
  People as PeopleIcon,
  Scanner as ScanIcon,
  Inventory as InventoryIcon,
  ArrowForward as ArrowIcon,
  CheckCircle as CheckIcon,
} from "@mui/icons-material";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
} as const;

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      delay: 0.1,
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.3,
    },
  }),
};

// Featured products for home page (4 key products)
const products = [
  {
    name: "CannyECM",
    title: "Enterprise Content Management",
    description: "Enterprise-grade ECM with OCR, workflow automation, and cloud/on-premise deployment.",
    icon: DocIcon,
    link: "/solutions/product/document-management",
    features: ["80% OCR Accuracy", "Workflow Automation", "Cloud & On-Premise"],
  },
  {
    name: "CannyHR",
    title: "HR & Payroll Management",
    description: "Complete hire-to-retire HRMS with payroll, attendance, and 350+ biometric integrations.",
    icon: PeopleIcon,
    link: "/solutions/product/hr-management",
    features: ["Payroll Automation", "350+ Integrations", "Mobile App"],
  },
  {
    name: "CannyRMS",
    title: "Records Management System",
    description: "Physical records management with barcode tracking, audit trails, and compliance support.",
    icon: InventoryIcon,
    link: "/solutions/product/rms",
    features: ["Barcode Tracking", "Audit Trails", "FDA Compliant"],
  },
  {
    name: "CannyScan",
    title: "Document Scanning Services",
    description: "Professional scanning for paper documents, microfilm, and blueprints with 99.9% accuracy.",
    icon: ScanIcon,
    link: "/solutions/product/scanning-solution",
    features: ["99.9% Accuracy", "All Document Types", "Secure Storage"],
  },
];

export default function ProductsNew() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900"
            >
              Enterprise Software Solutions &amp; Business Automation Tools
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg text-gray-600"
            >
              Comprehensive enterprise software trusted by 500+ companies worldwide
            </motion.p>
          </motion.div>
        </div>

        {/* Products Grid - 2x2 layout for featured products */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={product.name}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  transition: { duration: 0.2 },
                }}
              >
                <Link href={product.link}>
                  <div className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-primary hover:shadow-xl h-full cursor-pointer transition-all">
                    {/* Icon */}
                    <div className="mb-4">
                      <motion.div
                        variants={iconVariants}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        className="inline-flex p-3 rounded-lg bg-primary/10"
                      >
                        <IconComponent className="text-primary" sx={{ fontSize: 32 }} />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{product.title}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {product.features.map((feature, i) => (
                          <motion.span
                            key={feature}
                            custom={i}
                            variants={featureVariants}
                            className="inline-flex items-center gap-1 text-xs text-gray-600"
                          >
                            <CheckIcon sx={{ fontSize: 12 }} className="text-green-600" />
                            {feature}
                          </motion.span>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.div
                        className="pt-3 flex items-center gap-2 text-primary font-medium text-sm"
                        whileHover={{ x: 5 }}
                      >
                        Learn More
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                        >
                          <ArrowIcon sx={{ fontSize: 16 }} />
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/solutions">
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                View All Products
                <ArrowIcon fontSize="small" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
