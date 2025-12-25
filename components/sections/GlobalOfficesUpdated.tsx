"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import RevealOnScroll from "../ui/RevealOnScroll";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicIcon from '@mui/icons-material/Public';
import BusinessIcon from '@mui/icons-material/Business';

const offices = [
  {
    country: "India",
    countryCode: "IN",
    address: "No 88 Ram Nagar 6th St, Velachery, Chennai-600042",
    phone: ["044-35100366", "+91-9361801926"],
    email: "info@cannymindstech.com",
    isHeadquarters: true,
    color: "from-orange-500 to-green-500",
  },
  {
    country: "United States",
    countryCode: "US",
    address: "8751 Collin McKinney Pkwy Suite 1102, McKinney, TX 75070",
    phone: ["+1 (214) 727-0422", "+1 (214) 272-0230"],
    email: "usa@cannymindstech.com",
    color: "from-blue-600 to-red-600",
  },
  {
    country: "Nigeria",
    countryCode: "NG",
    address: "No 16, Adeola Adeleye Street, Lagos",
    phone: ["+234 708 632 3687"],
    email: "nigeria@cannymindstech.com",
    color: "from-green-700 to-green-500",
  },
  {
    country: "UAE",
    countryCode: "AE",
    address: "Dubai, United Arab Emirates",
    phone: ["+971 XX XXX XXXX"],
    email: "uae@cannymindstech.com",
    color: "from-red-600 to-green-600",
  },
];

export default function GlobalOfficesUpdated() {
  const [activeOffice, setActiveOffice] = useState(0);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Global Presence
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
              Our Worldwide Offices
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Serving clients across the globe with local expertise and global excellence
            </p>
          </div>
        </RevealOnScroll>

        {/* Office Cards Grid - Standardized Size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {offices.map((office, index) => (
            <RevealOnScroll key={office.country} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setActiveOffice(index)}
                className={`cursor-pointer bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-lg border-2 transition-all duration-300 h-full flex flex-col ${
                  activeOffice === index
                    ? "border-primary shadow-xl shadow-primary/20"
                    : "border-gray-100"
                }`}
              >
                {office.isHeadquarters && (
                  <div className="inline-block px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-2 sm:mb-3 self-start">
                    HEADQUARTERS
                  </div>
                )}

                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br ${office.color} flex items-center justify-center mb-3 sm:mb-4 opacity-90`}>
                  <PublicIcon sx={{ fontSize: { xs: 28, sm: 32 }, color: 'white' }} />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-secondary mb-2 sm:mb-3">
                  {office.country}
                </h3>

                <div className="text-xs sm:text-sm text-gray-600 flex-1">
                  <p className="flex items-start gap-2">
                    <LocationOnIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: '#3170b5', marginTop: '2px' }} />
                    <span>{office.address}</span>
                  </p>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Active Office Details - Standardized */}
        <RevealOnScroll>
          <motion.div
            key={activeOffice}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-primary to-secondary text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0`}>
                    <BusinessIcon sx={{ fontSize: { xs: 24, sm: 28, md: 32 }, color: 'white' }} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    {offices[activeOffice].country}
                  </h3>
                </div>
                <p className="text-blue-100 mb-4 sm:mb-6 text-sm sm:text-base">
                  {offices[activeOffice].address}
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="text-blue-200 text-xs sm:text-sm mb-1 sm:mb-2 font-semibold">
                    Phone
                  </div>
                  {offices[activeOffice].phone.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone}`}
                      className="block text-sm sm:text-base md:text-lg font-medium mb-1 hover:underline"
                    >
                      {phone}
                    </a>
                  ))}
                </div>

                <div>
                  <div className="text-blue-200 text-xs sm:text-sm mb-1 sm:mb-2 font-semibold">
                    Email
                  </div>
                  <a
                    href={`mailto:${offices[activeOffice].email}`}
                    className="text-sm sm:text-base md:text-lg font-medium hover:underline break-all"
                  >
                    {offices[activeOffice].email}
                  </a>
                </div>

                <motion.a
                  href={`mailto:${offices[activeOffice].email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-3 sm:mt-4 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-primary font-semibold rounded-lg shadow-lg text-sm sm:text-base"
                >
                  Contact This Office
                </motion.a>
              </div>
            </div>
          </motion.div>
        </RevealOnScroll>

        {/* Quick Stats - Standardized Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto">
          {[
            { number: "4", label: "Global Offices" },
            { number: "24/7", label: "Support" },
            { number: "50+", label: "Countries Served" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="text-center bg-white rounded-lg p-4 sm:p-6 shadow-md flex flex-col items-center justify-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
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
