"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowForward as ArrowIcon, Email as EmailIcon, Phone as PhoneIcon } from "@mui/icons-material";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function FinalCTA() {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 relative">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

                <RevealOnScroll>
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to Accelerate Your Digital Transformation?
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Don't let manual processes hold you back. Join 50+ successful organizations that trust CannyMinds for enterprise AI and automation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-4 bg-white text-primary font-bold rounded-xl shadow-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                                >
                                    Contact Us Now
                                    <ArrowIcon />
                                </motion.button>
                            </Link>

                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-medium text-blue-50">
                                <a href="mailto:info@cannymindstech.com" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <EmailIcon sx={{ fontSize: 18 }} />
                                    info@cannymindstech.com
                                </a>
                                <a href="tel:044-35100366" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <PhoneIcon sx={{ fontSize: 18 }} />
                                    044-35100366
                                </a>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
