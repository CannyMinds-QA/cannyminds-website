"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "../ui/RevealOnScroll";
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleIcon from '@mui/icons-material/People';
import ScannerIcon from '@mui/icons-material/Scanner';
import BarChartIcon from '@mui/icons-material/BarChart';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CodeIcon from '@mui/icons-material/Code';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SettingsIcon from '@mui/icons-material/Settings';
import FolderIcon from '@mui/icons-material/Folder';

const products = [
  {
    name: "CannyECM",
    icon: DescriptionIcon,
    description:
      "Enterprise content management software enabling professional organization and instant retrieval through secure web browsers.",
    features: ["Cloud Storage", "Quick Search", "Version Control", "Secure Access"],
    color: "from-blue-500 to-cyan-500",
    link: "/product/enterprise-content-management",
  },
  {
    name: "CannyHR",
    icon: PeopleIcon,
    description:
      "Complete HR and payroll management solution aligned with industry regulations and organizational policies.",
    features: ["Payroll Management", "Leave Tracking", "Performance Reviews", "Compliance"],
    color: "from-purple-500 to-pink-500",
    link: "/product/hr-management",
  },
  {
    name: "CannyScan",
    icon: ScannerIcon,
    description:
      "Professional document scanning and digitization services providing instant and secure access to information.",
    features: ["High-Speed Scanning", "OCR Technology", "Digital Archive", "Cloud Integration"],
    color: "from-green-500 to-emerald-500",
    link: "/product/scanning-solution",
  },
  {
    name: "CannyTrack",
    icon: BarChartIcon,
    description:
      "Workforce productivity monitoring and analytics platform for modern workplaces.",
    features: ["Activity Monitoring", "Productivity Analytics", "Data Security", "Real-time Reports"],
    color: "from-orange-500 to-red-500",
    link: "/product/tracking-system",
  },
];

const services = [
  {
    title: "Digital Transformation",
    description: "End-to-end business digitization and process automation solutions",
    icon: RocketLaunchIcon,
  },
  {
    title: "AI & Automation",
    description: "Intelligent automation powered by artificial intelligence and machine learning",
    icon: SmartToyIcon,
  },
  {
    title: "Software Development",
    description: "Custom enterprise software tailored to your business requirements",
    icon: CodeIcon,
  },
  {
    title: "Digital Marketing",
    description: "Data-driven strategies to enhance your online presence and reach",
    icon: PhoneAndroidIcon,
  },
  {
    title: "Business Process Services",
    description: "Streamline workflows with our expert BPS consulting",
    icon: SettingsIcon,
  },
  {
    title: "Record Management",
    description: "Secure physical and digital record management solutions",
    icon: FolderIcon,
  },
];

export default function ProductsUpdated() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Products Section */}
        <div className="mb-16 sm:mb-24 md:mb-32">
          <RevealOnScroll>
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Our Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
                Enterprise Software Solutions
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Powerful, scalable software solutions designed to transform your business operations
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <RevealOnScroll
                  key={product.name}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 h-full flex flex-col"
                  >
                    {/* Background Gradient on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                    <div className="relative z-10 flex-1 flex flex-col">
                      {/* Icon */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent sx={{ fontSize: { xs: 28, sm: 30, md: 32 }, color: '#3170b5' }} />
                      </div>

                      {/* Product Name */}
                      <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-2 sm:mb-3">
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-1">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                        {product.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.a
                        href={product.link}
                        whileHover={{ x: 5 }}
                        className="text-primary font-semibold inline-flex items-center gap-2 group/btn text-sm sm:text-base"
                      >
                        Learn More About {product.name}
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform flex-shrink-0"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </motion.a>
                    </div>
                  </motion.div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <RevealOnScroll>
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
                Comprehensive IT Consulting Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Expert services to accelerate your digital transformation journey
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <RevealOnScroll key={service.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-md border border-gray-100 transition-all duration-300"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                      <IconComponent sx={{ fontSize: { xs: 24, sm: 28 }, color: '#3170b5' }} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-secondary mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
