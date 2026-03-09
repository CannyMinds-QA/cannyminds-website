"use client";

import { m as motion } from "framer-motion";
import { useState } from "react";

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

export interface ProductFAQItem {
    question: string;
    answer: string;
}

interface ProductFAQProps {
    items: ProductFAQItem[];
    title?: string;
    description?: string;
    className?: string;
    id?: string;
}

export default function ProductFAQ({
    items,
    title = "Product Features & Capabilities (FAQ)",
    description = "Detailed answers to common technical and operational questions regarding this solution.",
    className = "",
    id = "product-faq"
}: ProductFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Generate strict FAQPage schema isolated to THIS specific product component
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    };

    return (
        <>
            {/* Search Engine Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <section id={id} className={`py-12 sm:py-16 md:py-24 bg-white ${className}`}>
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
                            Technical Specifics
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mt-3 sm:mt-4 mb-4 sm:mb-6 px-4"
                        >
                            {title}
                        </motion.h2>
                        {description && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.25 }}
                                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
                            >
                                {description}
                            </motion.p>
                        )}
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="max-w-4xl mx-auto"
                    >
                        {items.map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.01,
                                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                                    transition: { duration: 0.2 }
                                }}
                                className="mb-3 sm:mb-4 bg-gray-50 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 hover:border-primary/30 overflow-hidden transition-colors"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left p-4 sm:p-6 flex items-center justify-between transition-colors hover:bg-gray-100"
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
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
