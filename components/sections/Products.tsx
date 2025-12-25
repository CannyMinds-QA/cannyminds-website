"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "../ui/RevealOnScroll";

const products = [
  {
    name: "CannyDocs",
    icon: "📄",
    description:
      "Smart document management software enabling professional organization and instant retrieval through web browsers.",
    features: ["Cloud Storage", "Quick Search", "Version Control", "Secure Access"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "CannyHR",
    icon: "👥",
    description:
      "Comprehensive HR and payroll management tool aligned with industry regulations and organizational policies.",
    features: ["Payroll Management", "Leave Tracking", "Performance Reviews", "Compliance"],
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "CannyScan",
    icon: "📸",
    description:
      "Professional document scanning and digitization services providing instant and secure access to information.",
    features: ["High-Speed Scanning", "OCR Technology", "Digital Archive", "Cloud Integration"],
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "CannyTrack",
    icon: "📊",
    description:
      "Advanced productivity monitoring and data loss prevention platform for modern workplaces.",
    features: ["Activity Monitoring", "Productivity Analytics", "Data Security", "Real-time Reports"],
    color: "from-orange-500 to-red-500",
  },
];

const services = [
  {
    title: "Digital Transformation",
    description: "End-to-end digitization services to modernize your business operations",
    icon: "🚀",
  },
  {
    title: "AI & Automation",
    description: "Intelligent automation solutions powered by artificial intelligence",
    icon: "🤖",
  },
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs",
    icon: "💻",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to boost your online presence",
    icon: "📱",
  },
  {
    title: "Business Process Services",
    description: "Streamline operations with our expert BPS solutions",
    icon: "⚙️",
  },
  {
    title: "Record Management",
    description: "Secure physical and digital record management services",
    icon: "🗄️",
  },
];

export default function Products() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Products Section */}
        <div className="mb-32">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Products
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-6">
                Powerful Solutions for Modern Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-leading software products designed to transform your operations
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <RevealOnScroll
                key={product.name}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden transition-all duration-300"
                >
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-6xl mb-4">{product.icon}</div>

                    {/* Product Name */}
                    <h3 className="text-2xl font-bold text-secondary mb-3">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-primary font-semibold inline-flex items-center gap-2 group/btn"
                    >
                      Learn More
                      <svg
                        className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <RevealOnScroll>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-4 mb-6">
                Comprehensive IT Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert services to drive your digital transformation journey
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <RevealOnScroll key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
