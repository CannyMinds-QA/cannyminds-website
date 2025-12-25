"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import RevealOnScroll from "../ui/RevealOnScroll";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import StarIcon from '@mui/icons-material/Star';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const eatPillars = [
  {
    title: "Experience",
    icon: WorkspacePremiumIcon,
    description:
      "Over 20 years of hands-on experience delivering enterprise solutions across diverse industries and global markets.",
    metrics: ["500+ Projects", "15+ Industries", "4 Continents"],
  },
  {
    title: "Expertise",
    icon: EmojiEventsIcon,
    description:
      "Our team of certified professionals brings deep technical knowledge in AI, automation, and digital transformation.",
    metrics: ["50+ Certified Experts", "Advanced Technologies", "Best Practices"],
  },
  {
    title: "Authoritativeness",
    icon: VerifiedIcon,
    description:
      "Recognized industry leader with ISO certifications and trusted partnerships with Fortune 500 companies.",
    metrics: ["ISO 27001 Certified", "ISO 2015 Certified", "Industry Awards"],
  },
  {
    title: "Trustworthiness",
    icon: SecurityIcon,
    description:
      "Committed to data security, transparency, and ethical business practices with a proven track record.",
    metrics: ["99.9% Uptime", "GDPR Compliant", "24/7 Support"],
  },
];

const values = [
  {
    title: "Innovation",
    description: "Constantly pushing boundaries with cutting-edge technology",
    icon: LightbulbIcon,
  },
  {
    title: "Quality",
    description: "Delivering excellence in every project we undertake",
    icon: StarIcon,
  },
  {
    title: "Integrity",
    description: "Building relationships based on trust and transparency",
    icon: HandshakeIcon,
  },
  {
    title: "Customer Success",
    description: "Your success is our ultimate measure of achievement",
    icon: TrendingUpIcon,
  },
];

export default function AboutUpdated() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Main About Section */}
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
            <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
              About CannyMinds
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
              Your Trusted Technology Partner
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 px-4">
              CannyMinds Technology Solutions is a global leader in digital transformation,
              helping organizations innovate, digitalize, and transform their operations with
              cutting-edge IT solutions.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-4">
              With offices across <strong>India, USA, Nigeria, and UAE</strong>, we deliver
              world-class services to clients worldwide, combining local expertise with
              global best practices.
            </p>
          </div>
        </RevealOnScroll>

        {/* E-E-A-T Pillars - Standardized Cards */}
        <div className="mb-12 sm:mb-16 md:mb-24">
          <RevealOnScroll>
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-secondary mb-8 sm:mb-12 px-4">
              Why Choose CannyMinds?
            </h3>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {eatPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <RevealOnScroll
                  key={pillar.title}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 h-full flex flex-col"
                  >
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4 flex-1">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent sx={{ fontSize: { xs: 24, sm: 28 }, color: '#3170b5' }} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl sm:text-2xl font-bold text-secondary mb-2">
                          {pillar.title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                          {pillar.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
              );
            })}
          </div>
        </div>

        {/* Core Values - Standardized Cards */}
        <div>
          <RevealOnScroll>
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-secondary mb-8 sm:mb-12 px-4">
              Our Core Values
            </h3>
          </RevealOnScroll>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <RevealOnScroll key={value.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="text-center bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md border border-gray-100 h-full flex flex-col items-center justify-center"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                      <IconComponent sx={{ fontSize: { xs: 26, sm: 28, md: 32 }, color: '#3170b5' }} />
                    </div>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-secondary mb-1 sm:mb-2">
                      {value.title}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">{value.description}</p>
                  </motion.div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <RevealOnScroll>
          <div className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-3 sm:mb-4 px-4">
              ISO Certified Excellence
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Our commitment to quality and security is validated by internationally
              recognized ISO and FDA certifications
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {[
                { name: "ISO 9001:2015", desc: "Quality Management", image: "/certifications/iso-9001-2015.png" },
                { name: "ISO 15489:2016", desc: "Records Management", image: "/certifications/iso-15489-2016.png" },
                { name: "ISO 22716:2007", desc: "Cosmetics GMP", image: "/certifications/iso-22716-2007.jpg" },
                { name: "FDA 21 CFR Part 11", desc: "Electronic Records", image: "/certifications/fda-21-cfr-part-11.png" },
              ].map((cert, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-primary font-bold text-xs sm:text-sm mb-1">{cert.name}</div>
                  <div className="text-xs text-gray-600">{cert.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
