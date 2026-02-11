"use client";

import { motion } from "framer-motion";
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Schedule as ScheduleIcon,
  Public as GlobeIcon,
  Business as BusinessIcon,
  Handshake as PartnerIcon,
} from "@mui/icons-material";

// Global offices with region information
const globalOffices = [
  {
    region: "Asia Pacific",
    country: "India",
    city: "Chennai",
    address: "No 88 Ram Nagar 6th St, Velachery\nChennai-600042, Tamil Nadu",
    phone: "+91 93618 01926",
    phone2: "044-35100366",
    email: "info@cannymindstech.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM IST",
    flag: "🇮🇳",
  },
  {
    region: "North America",
    country: "United States",
    city: "Houston, Texas",
    address: "17350 State Highway 249, Suite 220\nHouston, TX-77064",
    phone: "+1 (281) 810-1926",
    phone2: undefined,
    email: "usa@cannymindstech.com",
    hours: "Mon-Fri: 9:00 AM - 5:00 PM CST",
    flag: "🇺🇸",
  },
  {
    region: "Africa",
    country: "Nigeria",
    city: "Lagos",
    address: "Victoria Island\nLagos, Nigeria",
    phone: "+234 (0) 813 618 0192",
    phone2: undefined,
    email: "nigeria@cannymindstech.com",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM WAT",
    flag: "🇳🇬",
  },
];

// Partners organized by region
const partnersByRegion = [
  {
    region: "North America",
    partners: [
      {
        name: "CannyMinds USA",
        country: "United States",
        address: "8751 Collin McKinney Pkwy, Suite 1102 #525, McKinney, TX 75070, United States",
        email: "info@cannymindstech.com",
        whatsapp: "+91 9361801926 / +91 9361801928",
      },
    ],
  },
  {
    region: "Africa",
    partners: [
      {
        name: "CannyMinds Nigeria",
        country: "Nigeria",
        address: "No:16, Adeola Adeleye Street, Off Coker Road, illupeju, Lagos, Nigeria",
        email: "info@cannymindstech.com",
        whatsapp: "+91 9361801926 / +91 9361801928",
      },
      {
        name: "Eco Bank (Kenya)",
        country: "Kenya",
        address: "Eco Bank, 4th Floor, Opp 680 Hotel, CBD, Nairobi, Kenya",
        email: "info@cannymindstech.com",
        whatsapp: "+91 9361801926 / +91 9361801928",
      },
      {
        name: "CannyMinds Botswana",
        country: "Botswana",
        address: "Plot 20614, Gaborone (P.O. Box 405694), Botswana",
        email: "info@cannymindstech.com",
        whatsapp: "+91 9361801926 / +91 9361801928",
      },
      {
        name: "CannyMinds DRC",
        country: "DRC Congo",
        address: "Av.No.1538, De l’avenue Mondjiba, No-1527, C/Nagaliema, Boulevard, Kinshasa – DRC",
      },
      {
        name: "CannyMinds Zambia",
        country: "Zambia",
        address: "12553 Zambezi Road, Roma, Lusaka, Zambia",
        email: "info@cannymindstech.com",
        whatsapp: "+91 9361801926 / +91 9361801928",
      },
      {
        name: "CannyMinds Uganda",
        country: "Uganda",
        address: "IPO Box No. 5454, 1st floor, Above Ruby Supermarket, Old Port Bell Road, Luzira Kampala-Uganda",
      },
      {
        name: "Sky City Mall (Tanzania)",
        country: "Tanzania",
        address: "Sky City Mall, 5th Floor, University Road, Dar es Salaam, Tanzania",
      },
    ],
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
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {globalOffices.map((office, officeIndex) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: officeIndex * 0.1 }}
              >
                <div className="bg-white rounded-lg p-6 border border-gray-200 h-full hover:border-primary transition-colors">
                  {/* Country & Region Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {office.country}
                      </h4>
                      <div className="text-primary font-medium text-sm">{office.city}</div>
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded whitespace-nowrap">
                      {office.region}
                    </span>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-3">
                    {/* Address */}
                    <div className="flex gap-2">
                      <LocationIcon className="text-primary flex-shrink-0 mt-0.5" sx={{ fontSize: 18 }} />
                      <div className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                        {office.address}
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <PhoneIcon className="text-primary flex-shrink-0" sx={{ fontSize: 18 }} />
                        <a
                          href={`tel:${office.phone.replace(/\s/g, "")}`}
                          className="text-sm text-gray-700 hover:text-primary transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                      {office.phone2 && (
                        <div className="flex items-center gap-2 ml-6">
                          <a
                            href={`tel:${office.phone2.replace(/\s/g, "")}`}
                            className="text-sm text-gray-700 hover:text-primary transition-colors"
                          >
                            {office.phone2}
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2">
                      <EmailIcon className="text-primary flex-shrink-0" sx={{ fontSize: 18 }} />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-sm text-gray-700 hover:text-primary transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>

                    {/* Hours */}
                    <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                      <ScheduleIcon className="text-primary flex-shrink-0" sx={{ fontSize: 18 }} />
                      <div className="text-sm text-gray-600">{office.hours}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          {/* Partners Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <PartnerIcon className="text-primary" sx={{ fontSize: 32 }} />
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Our Global Partners
                </h2>
              </div>
              <p className="text-lg text-gray-600">
                Collaborating with industry leaders to deliver comprehensive solutions worldwide
              </p>
            </motion.div>
          </div>

          {/* Partners by Region */}
          {partnersByRegion.map((region, regionIndex) => (
            <div key={region.region} className="mb-12 last:mb-0">
              {/* Region Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 mb-6 max-w-6xl mx-auto"
              >
                <PartnerIcon className="text-green-600" sx={{ fontSize: 28 }} />
                <h3 className="text-2xl font-bold text-gray-900">{region.region}</h3>
              </motion.div>

              {/* Partners Grid for this region */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {region.partners.map((partner, partnerIndex) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: partnerIndex * 0.1 }}
                  >
                    <div className="bg-white rounded-lg p-6 border border-gray-200 h-full hover:shadow-md hover:border-green-300 transition-all">
                      <div className="flex items-start gap-3 mb-3">
                        <BusinessIcon className="text-green-600 flex-shrink-0" sx={{ fontSize: 24 }} />
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-1">{partner.name}</h4>
                        </div>
                      </div>

                      <div className="space-y-3 mt-4 pt-4 border-t border-gray-100">
                        {/* Country */}
                        <div className="flex items-center gap-2 text-sm mb-1">
                          <GlobeIcon className="text-gray-400" sx={{ fontSize: 16 }} />
                          <span className="text-gray-600 font-medium">
                            {partner.country}
                          </span>
                        </div>

                        {/* Address */}
                        <div className="flex gap-2">
                          <LocationIcon className="text-green-600 flex-shrink-0 mt-0.5" sx={{ fontSize: 16 }} />
                          <div className="text-xs text-gray-600 leading-relaxed">
                            {partner.address}
                          </div>
                        </div>

                        {/* Email */}
                        {partner.email && (
                          <div className="flex items-center gap-2">
                            <EmailIcon className="text-green-600 flex-shrink-0" sx={{ fontSize: 16 }} />
                            <a
                              href={`mailto:${partner.email}`}
                              className="text-xs text-gray-600 hover:text-green-700 transition-colors"
                            >
                              {partner.email}
                            </a>
                          </div>
                        )}

                        {/* WhatsApp */}
                        {partner.whatsapp && (
                          <div className="flex items-center gap-2">
                            <PhoneIcon className="text-green-600 flex-shrink-0" sx={{ fontSize: 16 }} />
                            <span className="text-xs text-gray-600">{partner.whatsapp}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
