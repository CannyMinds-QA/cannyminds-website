'use client';

import { useState } from 'react';
import { Add, Remove } from '@mui/icons-material';

interface FAQItem {
    question: string;
    answer: string;
}

interface BlogFAQProps {
    faqs: FAQItem[];
    title?: string;
}

export default function BlogFAQ({ faqs, title = "Frequently Asked Questions" }: BlogFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    if (!faqs || faqs.length === 0) return null;

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-xl font-bold text-lg">
                    ?
                </span>
                {title}
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className={`border ${isOpen ? 'border-primary/50 bg-primary/5' : 'border-gray-200 bg-white'} rounded-xl transition-all duration-300 overflow-hidden`}
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none"
                                aria-expanded={isOpen}
                            >
                                <span className={`font-semibold text-base md:text-lg ${isOpen ? 'text-primary' : 'text-gray-800'}`}>
                                    {faq.question}
                                </span>
                                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                                    {isOpen ? <Remove sx={{ fontSize: 18 }} /> : <Add sx={{ fontSize: 18 }} />}
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-5 pb-5 pt-0 text-gray-600 leading-relaxed border-t border-primary/10 mt-2 pt-4">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
