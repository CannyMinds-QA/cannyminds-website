"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "../ui/RevealOnScroll";

const eatPillars = [
  {
    title: "Experience",
    icon: "🎯",
    description:
      "Over 20 years of hands-on experience delivering enterprise solutions across diverse industries and global markets.",
    metrics: ["500+ Projects", "15+ Industries", "4 Continents"],
  },
  {
    title: "Expertise",
    icon: "🏆",
    description:
      "Our team of certified professionals brings deep technical knowledge in AI, automation, and digital transformation.",
    metrics: ["50+ Certified Experts", "Advanced Technologies", "Best Practices"],
  },
  {
    title: "Authoritativeness",
    icon: "⭐",
    description:
      "Recognized industry leader with ISO certifications and trusted partnerships with Fortune 500 companies.",
    metrics: ["ISO 27001 Certified", "ISO 2015 Certified", "Industry Awards"],
  },
  {
    title: "Trustworthiness",
    icon: "🔒",
    description:
      "Committed to data security, transparency, and ethical business practices with a proven track record.",
    metrics: ["99.9% Uptime", "GDPR Compliant", "24/7 Support"],
  },
];

const values = [
  {
    title: "Innovation",
    description: "Constantly pushing boundaries with cutting-edge technology",
    icon: "💡",
  },
  {
    title: "Quality",
    description: "Delivering excellence in every project we undertake",
    icon: "✨",
  },
  {
    title: "Integrity",
    description: "Building relationships based on trust and transparency",
    icon: "🤝",
  },
  {
    title: "Customer Success",
    description: "Your success is our ultimate measure of achievement",
    icon: "🎯",
  },
];

export default function About() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Main About Section */}
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About CannyMinds
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-6">
              Your Trusted Technology Partner
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              CannyMinds Technology Solutions is a global leader in digital transformation,
              helping organizations innovate, digitalize, and transform their operations with
              cutting-edge IT solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With offices across <strong>India, USA, Nigeria, and UAE</strong>, we deliver
              world-class services to clients worldwide, combining local expertise with
              global best practices.
            </p>
          </div>
        </RevealOnScroll>

        {/* E-E-A-T Pillars */}
        <div className="mb-24">
          <RevealOnScroll>
            <h3 className="text-3xl font-bold text-center text-secondary mb-12">
              Why Choose CannyMinds?
            </h3>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {eatPillars.map((pillar, index) => (
              <RevealOnScroll
                key={pillar.title}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">{pillar.icon}</div>
                    <div>
                      <h4 className="text-2xl font-bold text-secondary mb-2">
                        {pillar.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {pillar.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {pillar.metrics.map((metric, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div>
          <RevealOnScroll>
            <h3 className="text-3xl font-bold text-center text-secondary mb-12">
              Our Core Values
            </h3>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <RevealOnScroll key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold text-secondary mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <RevealOnScroll>
          <div className="mt-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
              ISO Certified Excellence
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our commitment to quality and security is validated by internationally
              recognized ISO certifications
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white px-8 py-4 rounded-lg shadow-md"
              >
                <div className="text-primary font-bold text-lg">ISO 27001</div>
                <div className="text-sm text-gray-600">Information Security</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white px-8 py-4 rounded-lg shadow-md"
              >
                <div className="text-primary font-bold text-lg">ISO 2015</div>
                <div className="text-sm text-gray-600">Quality Management</div>
              </motion.div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
