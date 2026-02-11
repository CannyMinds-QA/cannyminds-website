"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Psychology,
  AutoAwesome,
  LocalHospital,
  Factory,
  AccountBalance,
  ShoppingCart,
  Biotech,
  ArrowForward,
  Speed,
  Security,
  TrendingUp,
} from "@mui/icons-material";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
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
};

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const industries = [
  {
    name: "Healthcare",
    slug: "healthcare",
    icon: LocalHospital,
    stat: "60%",
    statLabel: "Faster Diagnosis",
    color: "from-red-500 to-pink-500",
  },
  {
    name: "Pharmaceutical",
    slug: "pharmaceutical",
    icon: Biotech,
    stat: "40%",
    statLabel: "Faster Discovery",
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    icon: Factory,
    stat: "50%",
    statLabel: "Less Downtime",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "NBFC & Finance",
    slug: "nbfc",
    icon: AccountBalance,
    stat: "80%",
    statLabel: "Faster Processing",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "E-Commerce",
    slug: "ecommerce",
    icon: ShoppingCart,
    stat: "35%",
    statLabel: "Higher AOV",
    color: "from-violet-500 to-purple-500",
  },
];

const capabilities = [
  { icon: Speed, label: "10x Faster Processing" },
  { icon: Security, label: "Enterprise Security" },
  { icon: TrendingUp, label: "40% Cost Reduction" },
];

export default function AISolutionsPreview() {
  const [particles, setParticles] = useState<{ id: number; left: string; top: string; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-primary to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
        {/* Glowing orbs */}
        <motion.div
          className="absolute w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
          style={{ top: '10%', right: '10%' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"
          style={{ bottom: '10%', left: '5%' }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <AutoAwesome sx={{ fontSize: 18 }} />
            </motion.span>
            Generative AI Solutions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-4"
          >
            Industry-Specific{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              AI Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-blue-100 max-w-2xl mx-auto"
          >
            Transform your business with enterprise AI that delivers measurable ROI
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            {capabilities.map((cap, index) => {
              const IconComponent = cap.icon;
              return (
                <div key={cap.label} className="flex items-center gap-2 text-white/80">
                  <IconComponent sx={{ fontSize: 20 }} className="text-cyan-400" />
                  <span className="text-sm font-medium">{cap.label}</span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12"
        >
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <motion.div key={industry.slug} variants={cardVariants}>
                <Link href={`/ai-solutions/${industry.slug}`}>
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all cursor-pointer h-full"
                  >
                    {/* Icon */}
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: 5 }}
                    >
                      <IconComponent className="text-white" sx={{ fontSize: 28 }} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {industry.name}
                    </h3>

                    {/* Stat */}
                    <div className="mb-3">
                      <span className="text-2xl font-bold text-cyan-400">{industry.stat}</span>
                      <span className="text-xs text-blue-200 ml-1 block">{industry.statLabel}</span>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-1 text-cyan-300 text-sm font-medium group-hover:gap-2 transition-all">
                      Explore
                      <ArrowForward sx={{ fontSize: 16 }} />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/ai-solutions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Psychology sx={{ fontSize: 20 }} />
                Explore All AI Solutions
                <ArrowForward sx={{ fontSize: 18 }} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Schedule AI Consultation
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
