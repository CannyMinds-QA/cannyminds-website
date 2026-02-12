"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowForward as ArrowIcon,
  CheckCircle as CheckIcon,
  TrendingUp as TrendingIcon,
  Security as SecurityIcon,
  Public as GlobalIcon,
} from "@mui/icons-material";

export default function HeroNew() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary font-semibold text-sm">20+ Years of Innovation</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            >
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              Enterprise software solutions for document management, HR automation,
              digital transformation, and workforce monitoring. Trusted by 500+ companies worldwide.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2">
                <CheckIcon className="text-green-600" sx={{ fontSize: 20 }} />
                <span className="text-gray-700 font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <GlobalIcon className="text-primary" sx={{ fontSize: 20 }} />
                <span className="text-gray-700 font-medium">4 Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingIcon className="text-blue-600" sx={{ fontSize: 20 }} />
                <span className="text-gray-700 font-medium">100+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <SecurityIcon className="text-purple-600" sx={{ fontSize: 20 }} />
                <span className="text-gray-700 font-medium">FDA Compliant</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-6 py-3 bg-primary text-white rounded-lg font-semibold text-base shadow-xl shadow-primary/30 hover:bg-primary-600 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 flex items-center gap-2"
                >
                  Get Started Free
                  <ArrowIcon className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link href="/#solutions">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg font-semibold text-base hover:bg-primary-50 transition-all duration-300"
                >
                  View Solutions
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200"
            >
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-primary">20+</div>
                <div className="text-xs lg:text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-primary">500+</div>
                <div className="text-xs lg:text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-primary">99.9%</div>
                <div className="text-xs lg:text-sm text-gray-600">Uptime SLA</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Placeholder */}
            <div className="relative z-10">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-blue-600/20 backdrop-blur-sm border border-white/20"
              >
                <div className="aspect-[4/3] flex items-center justify-center p-12">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-white/80 text-sm font-medium">Dashboard Screenshot</div>
                    <div className="text-white/60 text-xs">Enterprise Software Interface</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-1/4 -left-8 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckIcon className="text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">ISO 9001:2015</div>
                  <div className="text-xs text-gray-500">Certified Quality</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-1/4 -right-8 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingIcon className="text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">24/7 Support</div>
                  <div className="text-xs text-gray-500">Global Coverage</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
