"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  LocalHospital,
  Factory,
  AccountBalance,
  ShoppingCart,
  Biotech,
  ArrowForward,
} from "@mui/icons-material";

const industries = [
  {
    name: "Healthcare",
    slug: "healthcare",
    icon: LocalHospital,
    stat: "60%",
    statLabel: "Faster Diagnosis",
    description:
      "AI-powered diagnostics, patient record analysis, and clinical decision support systems that transform care delivery.",
    capabilities: ["Medical imaging AI", "Patient risk scoring", "Clinical NLP"],
  },
  {
    name: "Pharmaceutical",
    slug: "pharmaceutical",
    icon: Biotech,
    stat: "40%",
    statLabel: "Faster Discovery",
    description:
      "Accelerate drug discovery, automate regulatory compliance, and streamline batch record management with intelligent automation.",
    capabilities: ["Document compliance", "Batch analytics", "Quality control AI"],
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    icon: Factory,
    stat: "50%",
    statLabel: "Less Downtime",
    description:
      "Predictive maintenance, quality inspection, and supply chain optimization powered by machine learning and computer vision.",
    capabilities: ["Predictive maintenance", "Defect detection", "Process optimization"],
  },
  {
    name: "NBFC & Finance",
    slug: "nbfc",
    icon: AccountBalance,
    stat: "80%",
    statLabel: "Faster Processing",
    description:
      "Intelligent document processing, fraud detection, and automated KYC/AML workflows for financial institutions.",
    capabilities: ["Document extraction", "Fraud analytics", "Automated KYC"],
  },
  {
    name: "E-Commerce",
    slug: "ecommerce",
    icon: ShoppingCart,
    stat: "35%",
    statLabel: "Higher AOV",
    description:
      "Personalized recommendations, inventory forecasting, and customer behavior analytics to drive revenue growth.",
    capabilities: ["Product recommendations", "Demand forecasting", "Customer analytics"],
  },
];

export default function AISolutionsPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industries[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
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
            AI Solutions
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Industry-Specific AI That Delivers Results
          </h2>
          <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
            Enterprise AI tailored to your industry — measurable ROI, not just
            promises.
          </p>
        </motion.div>

        {/* Main content: industry selector + detail panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid lg:grid-cols-[320px_1fr] gap-6 lg:gap-0 mb-14"
        >
          {/* Left: industry list */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:border-r lg:border-gray-200 lg:pr-6">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              const isActive = idx === activeIndex;
              return (
                <button
                  key={industry.slug}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200 flex-shrink-0 lg:flex-shrink min-w-[160px] lg:min-w-0 ${isActive
                    ? "bg-white text-gray-900 shadow-sm border border-gray-200"
                    : "text-gray-500 hover:text-gray-700 hover:bg-white/60"
                    }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${isActive ? "bg-primary text-white" : "bg-gray-100 text-gray-400"
                      }`}
                  >
                    <Icon sx={{ fontSize: 18 }} />
                  </div>
                  <span className="font-medium text-sm">{industry.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right: detail panel */}
          <div className="lg:pl-10">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 min-h-[320px]">
              {/* Stat row */}
              <div className="flex items-end gap-3 mb-6">
                <span className="text-5xl lg:text-6xl font-bold text-primary leading-none tracking-tight">
                  {active.stat}
                </span>
                <span className="text-gray-400 text-sm font-medium pb-1.5">
                  {active.statLabel}
                </span>
              </div>

              {/* Industry name + icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ActiveIcon className="text-primary" sx={{ fontSize: 20 }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{active.name}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-[15px] leading-relaxed mb-6 max-w-xl">
                {active.description}
              </p>

              {/* Capabilities */}
              <div className="flex flex-wrap gap-2 mb-8">
                {active.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="text-xs text-gray-600 bg-gray-100 px-3 py-1.5 rounded-md font-medium"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={`/ai-solutions/${active.slug}`}
                className="inline-flex items-center gap-2 text-primary text-sm font-medium group"
              >
                Explore {active.name} Solutions
                <ArrowForward
                  sx={{ fontSize: 15 }}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom: stats strip + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-gray-200"
        >
          {/* Quick stats */}
          <div className="flex gap-8">
            <div>
              <div className="text-2xl font-bold text-gray-900">10x</div>
              <div className="text-xs text-gray-400">Faster Processing</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">40%</div>
              <div className="text-xs text-gray-400">Cost Reduction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">100+</div>
              <div className="text-xs text-gray-400">Clients Served</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-3">
            <Link
              href="/ai-solutions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore All AI Solutions
              <ArrowForward sx={{ fontSize: 16 }} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-600 text-sm rounded-lg font-medium hover:border-gray-400 hover:text-gray-900 transition-colors"
            >
              Get a Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
