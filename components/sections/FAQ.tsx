"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What services does CannyMinds offer?",
    answer:
      "CannyMinds offers comprehensive IT solutions including digital transformation, AI automation, custom software development, cloud services, digital marketing, business process automation, and enterprise software products like CannyECM, CannyHR, CannyScan, and CannyTrack.",
  },
  {
    question: "Is CannyMinds ISO certified?",
    answer:
      "Yes, CannyMinds is ISO 27001 (Information Security Management) and ISO 9001:2015 (Quality Management) certified, ensuring world-class quality and security standards for all our services and products.",
  },
  {
    question: "Where is CannyMinds located?",
    answer:
      "CannyMinds has global offices in India (Chennai), USA (McKinney, Texas), Nigeria (Lagos), and UAE (Dubai), serving clients across 50+ countries with 24/7 support.",
  },
  {
    question: "What is CannyECM document management software?",
    answer:
      "CannyECM is a smart document management software that enables professional document organization, version control, quick search, and instant retrieval through secure web browsers with cloud storage capabilities. It's perfect for enterprises looking to digitize their document workflows.",
  },
  {
    question: "How can CannyMinds help with digital transformation?",
    answer:
      "CannyMinds provides end-to-end digital transformation services including business process automation, cloud migration, AI implementation, legacy system modernization, and digital strategy consulting. We've helped 500+ companies successfully transform their operations.",
  },
  {
    question: "Does CannyMinds provide 24/7 support?",
    answer:
      "Yes, we provide 24/7 customer support across all our global offices. You can reach us via phone, email, or our support portal anytime for technical assistance, sales inquiries, or general questions.",
  },
  {
    question: "What industries does CannyMinds serve?",
    answer:
      "We serve 15+ industries including healthcare, finance, education, retail, manufacturing, government, logistics, real estate, and more. Our solutions are customizable to meet specific industry requirements and compliance standards.",
  },
  {
    question: "How experienced is the CannyMinds team?",
    answer:
      "CannyMinds has 20+ years of industry experience with a team of 50+ certified professionals specializing in AI, cloud computing, software development, and digital transformation. Our experts hold certifications in leading technologies and methodologies.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 }
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
} as const;

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider inline-block"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mt-3 sm:mt-4 mb-4 sm:mb-6 px-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          >
            Find answers to common questions about our IT solutions and services
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                transition: { duration: 0.2 }
              }}
              className="mb-3 sm:mb-4 bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-100 hover:border-primary/30 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 sm:p-6 flex items-center justify-between transition-colors hover:bg-gray-50"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 pr-4 sm:pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
