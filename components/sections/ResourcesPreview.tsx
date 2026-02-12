"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Science,
  PrecisionManufacturing,
  LocalPharmacy,
  ArrowForward,
} from "@mui/icons-material";

const resources = [
  {
    type: "AI Solutions",
    icon: Science,
    title: "Gen AI for Pharmaceutical Manufacturing & Quality",
    description:
      "Accelerate compliance, quality, and time-to-market with FDA-compliant Generative AI. Automate eBMR, CAPA, and predictive maintenance.",
    link: "/ai-solutions/pharmaceutical",
  },
  {
    type: "Manufacturing",
    icon: PrecisionManufacturing,
    title: "Shop Floor Automation",
    description:
      "Transform manual paper-based hourly production recording into automated digital workflows with complete audit traceability.",
    link: "/solutions/manufacturing/shop-floor-automation",
  },
  {
    type: "Pharmaceutical",
    icon: LocalPharmacy,
    title: "Pharmaceutical Manufacturing Solutions",
    description:
      "AI-powered batch record automation, quality inspection, and CAPA management solutions. FDA 21 CFR Part 11 compliant.",
    link: "/solutions/pharmaceutical",
  },
];

export default function ResourcesPreview() {
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
            Resources & Insights
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Explore Our Industry Solutions
          </h2>
          <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
            Deep-dive into how we help pharmaceutical, manufacturing, and
            enterprise teams digitize operations and stay compliant.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {resources.map((resource, idx) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Link href={resource.link} className="block group h-full">
                  <div className="bg-gray-50 rounded-2xl p-6 lg:p-7 border border-gray-100 hover:border-gray-200 hover:bg-white hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    {/* Type + Icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <Icon
                        className="text-primary"
                        sx={{ fontSize: 20 }}
                      />
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {resource.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                      {resource.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-1.5 text-primary font-medium text-sm">
                      Read More
                      <ArrowForward
                        sx={{ fontSize: 14 }}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
