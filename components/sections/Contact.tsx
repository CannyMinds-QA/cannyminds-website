"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Digital Transformation",
    "Software Development",
    "AI & Automation",
    "Digital Marketing",
    "Business Process Services",
    "Record Management",
    "Product Inquiry",
    "Other",
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Thank you! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
              Let's Start Your Digital Journey
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Ready to transform your business? Contact us today for a free
              consultation
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <RevealOnScroll direction="left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100"
            >
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="+1 234 567 8900"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-primary text-white font-semibold rounded-lg shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4 sm:h-5 sm:w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </motion.div>
          </RevealOnScroll>

          {/* Contact Information */}
          <RevealOnScroll direction="right">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4 sm:mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="text-2xl sm:text-3xl">📧</div>
                    <div>
                      <div className="font-semibold text-secondary mb-1 text-sm sm:text-base">
                        Email
                      </div>
                      <a
                        href="mailto:info@cannymindstech.com"
                        className="text-primary hover:underline text-sm sm:text-base break-all"
                      >
                        info@cannymindstech.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="text-2xl sm:text-3xl">📞</div>
                    <div>
                      <div className="font-semibold text-secondary mb-1 text-sm sm:text-base">
                        Phone (India)
                      </div>
                      <a
                        href="tel:044-35100366"
                        className="text-primary hover:underline block text-sm sm:text-base"
                      >
                        044-35100366
                      </a>
                      <a
                        href="tel:+91-9361801926"
                        className="text-primary hover:underline block text-sm sm:text-base"
                      >
                        +91-9361801926
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="text-2xl sm:text-3xl">📍</div>
                    <div>
                      <div className="font-semibold text-secondary mb-1 text-sm sm:text-base">
                        Headquarters
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                        No 88 Ram Nagar 6th St, Velachery
                        <br />
                        Chennai-600042, India
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-xl sm:rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Why Choose Us?</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "20+ Years of Industry Experience",
                    "ISO Certified Quality Standards",
                    "24/7 Customer Support",
                    "Global Presence in 4 Countries",
                    "500+ Satisfied Clients",
                    "Cutting-Edge Technology Solutions",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-sm sm:text-base"
                    >
                      <span className="text-yellow-300 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
