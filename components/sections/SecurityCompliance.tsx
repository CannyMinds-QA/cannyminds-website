"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  VerifiedUser,
  Security,
  CloudDone,
  Gavel,
} from "@mui/icons-material";

// Animation variants for staggered children
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
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
} as const;

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
      delay: 0.2,
    },
  },
} as const;

const securityFeatures = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "256-bit AES encryption for data at rest and in transit. Multi-layer security architecture.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Role-based permissions, SSO integration, and multi-factor authentication.",
  },
  {
    icon: VerifiedUser,
    title: "FDA 21 CFR Part 11",
    description: "Compliant electronic records and signatures for pharmaceutical industries.",
  },
  {
    icon: Gavel,
    title: "GDPR Ready",
    description: "Data privacy controls, consent management, and right-to-erasure support.",
  },
  {
    icon: CloudDone,
    title: "ISO Certified",
    description: "ISO 9001:2015 and ISO 15489:2016 certified processes and infrastructure.",
  },
  {
    icon: Security,
    title: "Audit Trails",
    description: "Complete activity logging with tamper-proof audit trails for compliance.",
  },
];

export default function SecurityCompliance() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-900 to-primary">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Security & Compliance You Can Trust
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-blue-100 max-w-2xl mx-auto"
          >
            Enterprise-grade security with industry-leading compliance certifications
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {securityFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:border-white/40 transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    variants={iconVariants}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ rotate: 10, scale: 1.15 }}
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <IconComponent className="text-white" sx={{ fontSize: 24 }} />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-blue-100 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
