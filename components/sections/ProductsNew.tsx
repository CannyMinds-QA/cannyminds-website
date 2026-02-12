"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Description as DocIcon,
  Scanner as ScanIcon,
  Inventory as InventoryIcon,
  ArrowForward as ArrowIcon,
  Science as ScienceIcon,
} from "@mui/icons-material";

const products = [
  {
    name: "CannyECM",
    title: "Enterprise Content Management",
    description:
      "Enterprise-grade ECM with OCR, workflow automation, and cloud/on-premise deployment.",
    icon: DocIcon,
    link: "/product/document-management",
    features: ["99% OCR Accuracy", "Workflow Automation", "Cloud, On-Premise & SaaS"],
    number: "01",
  },
  {
    name: "CannyScan",
    title: "Document Scanning Services",
    description: "Professional document digitization services for scanning all sizes of paper documents.",
    icon: ScanIcon,
    link: "/product/scanning-solution",
    features: ["99.9% Accuracy", "All Document Types", "Secure Storage"],
    number: "02",
  },
  {
    name: "CannyRMS",
    title: "Records Management System",
    description:
      "Physical records management with barcode/RFID tracking, audit trails, and compliance support.",
    icon: InventoryIcon,
    link: "/product/rms",
    features: ["Barcode/RFID Tracking", "Audit Trails", "FDA Compliant"],
    number: "03",
  },
  {
    name: "Canny eBMR",
    title: "Electronic Batch Records",
    description:
      "FDA 21 CFR Part 11 compliant eBMR for pharmaceutical manufacturing.",
    icon: ScienceIcon,
    link: "/product/ebmr",
    features: ["FDA Compliant", "Audit Trails", "Review by Exception"],
    number: "04",
  },
];

export default function ProductsNew() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
            Our Products
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Enterprise Software Solutions &amp; Business Automation
          </h2>
          <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
            Comprehensive enterprise software trusted by 100+ companies worldwide
            for digital transformation and process automation.
          </p>
        </motion.div>

        {/* Products — 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto mb-14">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
              >
                <Link href={product.link} className="block h-full">
                  <div className="group relative bg-gray-50 rounded-2xl p-6 lg:p-7 h-full border border-gray-100 hover:border-gray-200 hover:bg-white hover:shadow-md transition-all duration-300">
                    {/* Left accent line */}
                    <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Top row: number + icon + name */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" sx={{ fontSize: 22 }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-gray-900">
                            {product.name}
                          </h3>
                          <span className="text-[11px] font-mono text-gray-300 tracking-wide">
                            {product.number}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">{product.title}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Features as inline list */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-5">
                      {product.features.map((f) => (
                        <span
                          key={f}
                          className="text-xs text-gray-500 flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium">
                      Learn more
                      <ArrowIcon
                        sx={{ fontSize: 15 }}
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors"
          >
            View All Products
            <ArrowIcon sx={{ fontSize: 18 }} />
          </Link>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary border-2 border-primary/20 rounded-lg font-semibold text-sm hover:bg-primary/5 transition-colors"
          >
            View Industry Solutions
            <ArrowIcon sx={{ fontSize: 18 }} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
