"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  SupportAgent,
  AccessTime,
  Person,
  Speed,
  School,
  Headphones,
} from "@mui/icons-material";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
} as const;

const cardVariants = {
  hidden: {
    opacity: 0,
    x: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 14,
    },
  },
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const supportFeatures = [
  {
    icon: AccessTime,
    title: "24/7 Support",
    description: "Round-the-clock technical assistance via phone, email, and chat.",
    highlight: "Always Available",
  },
  {
    icon: Person,
    title: "Dedicated Account Manager",
    description: "Personal point of contact for your organization's needs.",
    highlight: "Single POC",
  },
  {
    icon: Speed,
    title: "4-Hour SLA",
    description: "Critical issues addressed within 4 hours, guaranteed.",
    highlight: "Fast Response",
  },
  {
    icon: School,
    title: "Training & Onboarding",
    description: "Comprehensive training programs for your team.",
    highlight: "Free Training",
  },
];

export default function SupportHighlights() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                custom={0}
                variants={textRevealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Headphones sx={{ fontSize: 18 }} />
                </motion.span>
                World-Class Support
              </motion.div>
              <motion.h2
                custom={1}
                variants={textRevealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              >
                Support That Never Sleeps
              </motion.h2>
              <motion.p
                custom={2}
                variants={textRevealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-lg text-gray-600 mb-6"
              >
                Our dedicated support team ensures your business operations run smoothly
                with industry-leading response times and personalized assistance.
              </motion.p>
              <motion.div
                custom={3}
                variants={textRevealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2 hover:scale-105 active:scale-95 transform"
                >
                  <SupportAgent sx={{ fontSize: 20 }} />
                  Contact Support
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Support Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {supportFeatures.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.03,
                      y: -5,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                      transition: { duration: 0.2 },
                    }}
                    className="bg-white rounded-xl p-5 border border-gray-200 hover:border-primary transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
                      >
                        <IconComponent className="text-primary" sx={{ fontSize: 20 }} />
                      </motion.div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                        {feature.highlight}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
