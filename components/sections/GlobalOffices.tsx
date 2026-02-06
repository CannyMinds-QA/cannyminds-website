"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import RevealOnScroll from "../ui/RevealOnScroll";

const offices = [
  {
    country: "India",
    flag: "🇮🇳",
    address: "No 88 Ram Nagar 6th St, Velachery, Chennai-600042",
    phone: ["044-35100366", "+91-9361801926"],
    email: "info@cannymindstech.com",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    address: "8751 Collin McKinney Pkwy Suite 1102, McKinney, TX 75070",
    phone: ["+1 (214) 727-0422", "+1 (214) 272-0230"],
    email: "usa@cannymindstech.com",
  },
  {
    country: "Nigeria",
    flag: "🇳🇬",
    address: "No 16, Adeola Adeleye Street, Lagos",
    phone: ["+234 708 632 3687"],
    email: "nigeria@cannymindstech.com",
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    address: "Dubai, United Arab Emirates",
    phone: ["+971 XX XXX XXXX"],
    email: "uae@cannymindstech.com",
  },
];

export default function GlobalOffices() {
  const [activeOffice, setActiveOffice] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Map Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="map-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="1" fill="#3170b5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Global Presence
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-6">
              Our Worldwide Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving clients across the globe with local expertise and global excellence
            </p>
          </div>
        </RevealOnScroll>

        {/* Office Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {offices.map((office, index) => (
            <RevealOnScroll key={office.country} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setActiveOffice(index)}
                className={`cursor-pointer bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 ${
                  activeOffice === index
                    ? "border-primary shadow-xl shadow-primary/20"
                    : "border-gray-100"
                }`}
              >
                <div className="text-5xl mb-3">{office.flag}</div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {office.country}
                </h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">📍</span>
                    <span>{office.address}</span>
                  </p>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Active Office Details */}
        <RevealOnScroll>
          <motion.div
            key={activeOffice}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-6xl">{offices[activeOffice].flag}</span>
                  <h3 className="text-3xl font-bold">
                    {offices[activeOffice].country}
                  </h3>
                </div>
                <p className="text-blue-100 mb-6">
                  {offices[activeOffice].address}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-blue-200 text-sm mb-2 font-semibold">
                    Phone
                  </div>
                  {offices[activeOffice].phone.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone}`}
                      className="block text-lg font-medium mb-1 hover:underline"
                    >
                      {phone}
                    </a>
                  ))}
                </div>

                <div>
                  <div className="text-blue-200 text-sm mb-2 font-semibold">
                    Email
                  </div>
                  <a
                    href={`mailto:${offices[activeOffice].email}`}
                    className="text-lg font-medium hover:underline"
                  >
                    {offices[activeOffice].email}
                  </a>
                </div>

                <motion.a
                  href={`mailto:${offices[activeOffice].email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-4 px-6 py-3 bg-white text-primary font-semibold rounded-lg shadow-lg"
                >
                  Contact This Office
                </motion.a>
              </div>
            </div>
          </motion.div>
        </RevealOnScroll>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { number: "4", label: "Global Offices" },
            { number: "24/7", label: "Support" },
            { number: "50+", label: "Countries Served" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="text-center bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
