"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FormatQuote, Star, ChevronLeft, ChevronRight } from "@mui/icons-material";

const testimonials = [
    {
        quote: "CannyMinds successfully implemented a comprehensive Enterprise Document and Workflow Management solution that significantly enhanced our operational efficiency and document traceability. Their expertise, customization capabilities, and professional support ensured seamless adoption across our organization. We highly recommend CannyMinds for enterprises seeking robust and scalable document management solutions.",
        author: "Rajesh",
        company: "Eastman Exports Global Clothing Pvt Ltd",
        rating: 5
    },
    {
        quote: "CannyMinds successfully digitized over 4.5 million records with exceptional professionalism, accuracy, and adherence to timelines. Their structured approach to scanning, indexing, and secure digital archiving significantly improved our document accessibility and operational efficiency. We strongly recommend CannyMinds for reliable and large-scale digitization and digital transformation initiatives.",
        author: "Ganeshan",
        company: "Softgel Healthcare Private Limited",
        rating: 5
    },
    {
        quote: "CannyMinds successfully digitized approximately 1 crore documents and implemented an integrated Enterprise Document Management and Physical Record Management solution for our organization. Their expertise, structured execution, and advanced software capabilities significantly improved our document control, compliance, and operational efficiency. We highly recommend CannyMinds for reliable and scalable document digitization and management solutions.",
        author: "Dr. Saravana Kumar",
        company: "Steril-Gene Life Sciences (P) Ltd.",
        rating: 5
    },
    {
        quote: "CannyMinds successfully implemented CannyScan, CannyDocs, and CannyRMS for our organization, delivering a seamless end-to-end digital transformation. Their professionalism, technical expertise, and timely execution significantly enhanced our document management efficiency, compliance, and accessibility. We confidently recommend CannyMinds for robust, scalable, and enterprise-grade document and records management solutions.",
        author: "Oscar Kazadi",
        company: "Proco & Cie SARL – DRC Congo",
        rating: 5
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 2) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
    };

    const totalSlides = Math.ceil(testimonials.length / 2);
    const activeSlide = Math.floor(currentIndex / 2);

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    const variants: Variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                x: { type: "spring" as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
            },
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 500 : -500,
            opacity: 0,
            scale: 0.9,
            transition: {
                x: { type: "spring" as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
            },
        }),
    };

    return (
        <section className="py-20 bg-white overflow-hidden relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-3 block">Testimonials</span>
                    <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 tracking-tight">What Our Clients Say</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary-700 to-secondary-700 mx-auto mb-6 rounded-full" />
                    <p className="text-gray-500 max-w-xl mx-auto text-base lg:text-lg font-medium leading-relaxed">
                        Trusted by industry leaders worldwide for high-compliance digital transformation and secure information management.
                    </p>
                </motion.div>

                <div className="max-w-[1200px] mx-auto relative group">
                    {/* Navigation Controls - Side-positioned */}
                    <div className="hidden lg:block">
                        <motion.button
                            whileHover={{ scale: 1.1, x: -5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevSlide}
                            className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-gray-900 hover:text-primary-800 hover:border-primary-800 transition-all z-30"
                        >
                            <ChevronLeft sx={{ fontSize: 28 }} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextSlide}
                            className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-gray-900 hover:text-primary-800 hover:border-primary-800 transition-all z-30"
                        >
                            <ChevronRight sx={{ fontSize: 28 }} />
                        </motion.button>
                    </div>

                    {/* Main Carousel Wrapper */}
                    <div className="relative min-h-[420px] md:min-h-[380px] flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="w-full flex flex-col md:flex-row gap-6 items-stretch justify-center px-2">
                                    {[0, 1].map((offset) => {
                                        const testimonial = testimonials[(currentIndex + offset) % testimonials.length];
                                        return (
                                            <div
                                                key={`${currentIndex}-${offset}`}
                                                className="flex-1 bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] relative overflow-hidden flex flex-col items-center min-h-[380px]"
                                            >
                                                {/* Floating Quote Icon */}
                                                <FormatQuote className="absolute -top-3 -left-3 text-gray-400/5 text-[9rem] -rotate-12 pointer-events-none" />

                                                {/* Star Rating */}
                                                <div className="flex gap-1 mb-6 relative z-10">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="text-amber-400" sx={{ fontSize: 22 }} />
                                                    ))}
                                                </div>

                                                <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center font-medium italic mb-8 relative z-10 flex-grow">
                                                    “{testimonial.quote}”
                                                </p>

                                                <div className="text-center relative z-10 border-t border-gray-200 pt-6 w-full">
                                                    <h4 className="text-xl font-black text-gray-900 mb-0.5">{testimonial.author}</h4>
                                                    <p className="text-primary-900 font-bold text-xs tracking-widest uppercase truncate px-2">
                                                        {testimonial.company}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Mobile Navigation Controls & Pagination */}
                    <div className="flex flex-col items-center gap-8 mt-16 relative z-20">
                        {/* Pagination Dots */}
                        <div className="flex gap-3">
                            {[...Array(totalSlides)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setDirection(i > activeSlide ? 1 : -1);
                                        setCurrentIndex(i * 2);
                                    }}
                                    className={`transition-all duration-500 rounded-full h-2.5 ${i === activeSlide ? "w-16 bg-primary-900 shadow-md shadow-primary/30" : "w-2.5 bg-gray-200 hover:bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Mobile Arrows */}
                        <div className="flex gap-5 lg:hidden">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-900"
                            >
                                <ChevronLeft sx={{ fontSize: 20 }} />
                            </motion.button>
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-900"
                            >
                                <ChevronRight sx={{ fontSize: 20 }} />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
