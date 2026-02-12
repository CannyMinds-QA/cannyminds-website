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

const securityFeatures = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "256-bit AES encryption for data at rest and in transit. Multi-layer security architecture.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description:
      "Role-based permissions, SSO integration, and multi-factor authentication.",
  },
  {
    icon: VerifiedUser,
    title: "FDA 21 CFR Part 11",
    description:
      "Compliant electronic records and signatures for pharmaceutical industries.",
  },
  {
    icon: Gavel,
    title: "GDPR Ready",
    description:
      "Data privacy controls, consent management, and right-to-erasure support.",
  },
  {
    icon: CloudDone,
    title: "ISO Certified",
    description:
      "ISO 9001:2015 and ISO 15489:2016 certified processes and infrastructure.",
  },
  {
    icon: Security,
    title: "Audit Trails",
    description:
      "Complete activity logging with tamper-proof audit trails for compliance.",
  },
];

export default function SecurityCompliance() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header — two-column: text left, highlight right */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">
              Security & Compliance
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-4">
              Built for Industries That Can&apos;t Afford to Compromise
            </h2>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed max-w-xl">
              Enterprise-grade security with industry-leading compliance
              certifications — from FDA to GDPR, we&apos;ve got you covered.
            </p>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="hidden lg:flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl px-6 py-4"
          >


          </motion.div>
        </div>

        {/* Features — 3×2 grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {securityFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                {/* Icon + Title row */}
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="text-primary" sx={{ fontSize: 22 }} />
                  <h3 className="text-base font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
