"use client";

import { motion } from "framer-motion";
import {
  LocationOn as LocationIcon,
  WhatsApp as WhatsAppIcon,
  Email as EmailIcon,
} from "@mui/icons-material";

// Global offices with region information
interface Office {
  region: string;
  country: string;
  city: string;
  address: string;
  phone: string;
  phone2?: string;
  email: string;
  flag: string;
}

const allOffices: Office[] = [
  // Core Offices
  {
    region: "Asia Pacific",
    country: "India",
    city: "Chennai",
    address: "No 88 Ram Nagar 6th St, Velachery\nChennai-600042, Tamil Nadu",
    phone: "+91 93618 01926",
    email: "info@cannymindstech.com",
    flag: "🇮🇳",
  },
  {
    region: "North America",
    country: "United States",
    city: "McKinney",
    address: "8751 Collin McKinney Pkwy, Suite 1102 #525\nMcKinney, TX 75070",
    phone: "+1 (281) 810-1926",
    email: "info@cannymindstech.com",
    flag: "🇺🇸",
  },
  {
    region: "Africa",
    country: "Nigeria",
    city: "Lagos",
    address: "Victoria Island\nLagos, Nigeria",
    phone: "+234 (0) 813 618 0192",
    email: "info@cannymindstech.com",
    flag: "🇳🇬",
  },
  {
    region: "Africa",
    country: "Nigeria",
    city: "Illupeju",
    address: "No:16, Adeola Adeleye Street, Off Coker Road\nIllupeju, Lagos",
    phone: "+91 93618 01926",
    email: "info@cannymindstech.com",
    flag: "🇳🇬",
  },
  // Expanded Locations (formerly partners)
  {
    region: "Africa",
    country: "Kenya",
    city: "Nairobi",
    address: "Eco Bank, 4th Floor, Opp 680 Hotel\nCBD, Nairobi",
    phone: "+91 93618 01926",
    email: "info@cannymindstech.com",
    flag: "🇰🇪",
  },
  {
    region: "Africa",
    country: "Botswana",
    city: "Gaborone",
    address: "Plot 20614, Gaborone (P.O. Box 405694)\nBotswana",
    phone: "+91 93618 01926",
    email: "info@cannymindstech.com",
    flag: "🇧🇼",
  },
  {
    region: "Africa",
    country: "DRC Congo",
    city: "Kinshasa",
    address: "Av.No.1538, De l’avenue Mondjiba, No-1527\nC/Nagaliema, Boulevard, Kinshasa",
    phone: "+91 93618 01926",
    email: "info@cannymindstech.com",
    flag: "🇨🇩",
  },
  {
    region: "Africa",
    country: "Zambia",
    city: "Lusaka",
    address: "12553 Zambezi Road, Roma\nLusaka, Zambia",
    phone: "+91 93618 01926",
    email: "info@cannymindstech.com",
    flag: "🇿🇲",
  },
  {
    region: "Africa",
    country: "Uganda",
    city: "Kampala",
    address: "IPO Box No. 5454, 1st floor, Above Ruby Supermarket\nOld Port Bell Road, Luzira Kampala",
    phone: "+91 93618 01926",
    email: "info@cannymindstech.com",
    flag: "🇺🇬",
  },
  {
    region: "Africa",
    country: "Tanzania",
    city: "Dar es Salaam",
    address: "Sky City Mall, 5th Floor, University Road\nDar es Salaam",
    phone: "+91 93618 01926",
    email: "info@cannymindstech.com",
    flag: "🇹🇿",
  },
];

export default function GlobalOfficesNew() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Global Offices Section */}
        <div className="mb-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                Our Global Offices
              </h2>
              <p className="text-lg text-gray-600">
                Strategic offices positioned across regions to provide 24/7 support and local expertise
              </p>
            </motion.div>
          </div>

          {/* Offices Grid - All regions in one view */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {allOffices.map((office, officeIndex) => (
              <motion.div
                key={`${office.country}-${office.city}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: officeIndex * 0.1 }}
              >
                <div className="bg-white rounded-lg p-6 border border-gray-200 h-full hover:border-primary transition-colors flex flex-col hover:shadow-lg">
                  {/* Country & Region Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{office.flag}</span>
                        <h4 className="text-xl font-bold text-gray-900">
                          {office.country}
                        </h4>
                      </div>
                      <div className="text-primary font-medium text-sm pl-1">{office.city}</div>
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded whitespace-nowrap">
                      {office.region}
                    </span>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-4 mt-auto">
                    {/* Address */}
                    <div className="flex gap-3">
                      <LocationIcon className="text-primary flex-shrink-0 mt-0.5" sx={{ fontSize: 18 }} />
                      <div className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                        {office.address}
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <WhatsAppIcon className="text-green-600 flex-shrink-0" sx={{ fontSize: 18 }} />
                      <div className="flex flex-col">
                        <a
                          href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                          className="text-sm text-gray-700 hover:text-primary transition-colors font-medium"
                        >
                          {office.phone}
                        </a>
                        {office.phone2 && (
                          <a
                            href={`tel:${office.phone2.replace(/[^0-9+]/g, "")}`}
                            className="text-sm text-gray-700 hover:text-primary transition-colors font-medium"
                          >
                            {office.phone2}
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <EmailIcon className="text-primary flex-shrink-0" sx={{ fontSize: 18 }} />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-sm text-gray-700 hover:text-primary transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
