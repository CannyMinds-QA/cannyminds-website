"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Article,
  Description,
  Business,
  ArrowForward,
  CalendarMonth,
} from "@mui/icons-material";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
} as const;

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const resources = [
  {
    type: "Industry Solution",
    icon: Business,
    title: "Banking & Finance Digital Transformation",
    description: "Discover how financial institutions streamline compliance, KYC documentation, and audit trails with our solutions.",
    date: "2025",
    link: "/industries/banking-finance",
    color: "bg-blue-500",
  },
  {
    type: "Product Guide",
    icon: Description,
    title: "CannyRMS: Physical Records Management System",
    description: "Complete guide to managing physical records with barcode tracking, audit trails, and FDA compliance.",
    date: "2025",
    link: "/solutions/product/rms",
    color: "bg-purple-500",
  },
  {
    type: "Use Cases",
    icon: Article,
    title: "Industry Use Cases & Success Stories",
    description: "Explore how organizations across healthcare, manufacturing, and government leverage our enterprise solutions.",
    date: "2025",
    link: "/use-cases",
    color: "bg-green-500",
  },
];

export default function ResourcesPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Resources & Insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Stay informed with our latest case studies, whitepapers, and industry insights
          </motion.p>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10"
        >
          {resources.map((resource) => {
            const IconComponent = resource.icon;
            return (
              <motion.div
                key={resource.title}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  transition: { duration: 0.2 },
                }}
              >
                <Link href={resource.link} className="block group h-full">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary hover:shadow-xl transition-all h-full flex flex-col">
                    {/* Type Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          className={`w-8 h-8 ${resource.color} rounded-lg flex items-center justify-center`}
                        >
                          <IconComponent className="text-white" sx={{ fontSize: 16 }} />
                        </motion.div>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {resource.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <CalendarMonth sx={{ fontSize: 14 }} />
                        {resource.date}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-2">
                      {resource.description}
                    </p>

                    {/* CTA */}
                    <motion.div
                      className="flex items-center gap-2 text-primary font-medium text-sm"
                      whileHover={{ x: 5 }}
                    >
                      Read More
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                      >
                        <ArrowForward sx={{ fontSize: 16 }} />
                      </motion.span>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Explore All Solutions
              <ArrowForward sx={{ fontSize: 18 }} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
