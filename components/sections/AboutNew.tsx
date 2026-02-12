"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Public as GlobalIcon,
  TrendingUp as GrowthIcon,
  Groups as TeamIcon,
  SupportAgent as SupportIcon,
  ArrowForward as ArrowIcon,
} from "@mui/icons-material";

// Animation variants
const statsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const statCardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
} as const;

const certContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
} as const;

const certCardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateY: -30,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
} as const;

const stats = [
  { value: "20+", label: "Years of Excellence", icon: GrowthIcon, color: "text-blue-600" },
  { value: "50+", label: "Happy Clients", icon: TeamIcon, color: "text-green-600" },
  { value: "4", label: "Global Offices", icon: GlobalIcon, color: "text-purple-600" },
  { value: "24/7", label: "Expert Support", icon: SupportIcon, color: "text-orange-600" },
];

const awards = [
  {
    name: "10 Most Promising DMS Solution Providers 2021 Award",
    image: "/images/awards/Promising-DMS-award.png"
  },
  {
    name: "Indian Achievers Award 2020 for Emerging Company Award",
    image: "/images/awards/Emerging-company-award-2020.png"
  }
];

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    image: "/certifications/iso-9001-2015.png"
  },
  {
    name: "ISO 15489:2016",
    description: "Records Management",
    image: "/certifications/iso-15489-2016.png"
  },
  {
    name: "FDA 21 CFR Part 11",
    description: "Compliance Ready",
    image: "/certifications/fda-21-cfr-part-11.jpg"
  },
  {
    name: "ISO 27001",
    description: "Information Security",
    image: "/certifications/iso-22716-2007.png"
  },
  {
    name: "NASSCOM",
    description: "Member",
    image: "/certifications/nasscom-logo.png"
  },
];

export default function AboutNew() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
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
              className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900"
            >
              About CannyMinds
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
            >
              CannyMinds Technology Solutions is a leading provider of enterprise software solutions,
              specializing in digital transformation, AI automation, and business process optimization.
              With offices in India, USA, and Nigeria, we serve clients across healthcare,
              manufacturing, banking, government, and education sectors with ISO-certified,
              FDA-compliant solutions.
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={statsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={statCardVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg text-center cursor-pointer transition-colors"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent className="text-primary mx-auto mb-3" sx={{ fontSize: 32 }} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="text-2xl font-bold text-gray-900 mb-1"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Awards & Recognition */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Awards & Recognition</h3>
            </motion.div>
            <motion.div
              variants={certContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto"
            >
              {awards.map((award, index) => (
                <div key={award.name} className="flex flex-col md:flex-row items-center gap-8">
                  <motion.div
                    variants={certCardVariants}
                    className="bg-white rounded-lg p-6 text-center flex flex-col items-center justify-center max-w-sm"
                  >
                    <div className="relative w-full h-80 mb-4 flex items-center justify-center">
                      <Image
                        src={award.image}
                        alt={award.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-sm font-bold text-gray-900">{award.name}</div>
                  </motion.div>

                  {index < awards.length - 1 && (
                    <div className="hidden md:block text-orange-500">
                      <ArrowIcon sx={{ fontSize: 48 }} />
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certifications & Compliance</h3>
            </motion.div>
            <motion.div
              variants={certContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              className="grid grid-cols-2 md:grid-cols-5 gap-6"
            >
              {certifications.map((cert) => {
                return (
                  <motion.div
                    key={cert.name}
                    variants={certCardVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                      transition: { duration: 0.2 },
                    }}
                    className="bg-white border border-gray-200 hover:border-primary rounded-lg p-4 text-center cursor-pointer transition-colors"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative w-full h-32 mb-3 flex items-center justify-center"
                    >
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </motion.div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">{cert.name}</div>
                    <div className="text-xs text-gray-500">{cert.description}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/about">
                <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors inline-flex items-center gap-2">
                  Learn More About Us
                  <ArrowIcon fontSize="small" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
