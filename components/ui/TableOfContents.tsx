"use client";

import React, { useState, useEffect } from "react";
import { m as motion } from "framer-motion";

interface TableOfContentsProps {
    items: { id: string; title: string }[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = items.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 150; // Offset for header

            let currentActive = "";
            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition) {
                    currentActive = section.id;
                }
            }
            if (currentActive !== activeId) {
                setActiveId(currentActive);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [items, activeId]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();

        // Use Lenis if available globally
        if ((window as any).lenis) {
            (window as any).lenis.scrollTo(`#${id}`, { offset: -100 });
        } else {
            // Fallback to native smooth scroll
            const element = document.getElementById(id);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 100,
                    behavior: "smooth",
                });
            }
        }

        // Optimistic update
        setActiveId(id);
    };

    return (
        <nav className="hidden lg:block sticky top-24 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                On This Page
            </h3>
            <ul className="space-y-1 relative border-l border-gray-200">
                {items.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                        <li key={item.id} className="relative">
                            {isActive && (
                                <motion.div
                                    layoutId="active-toc-indicator"
                                    className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-blue-600"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => handleClick(e, item.id)}
                                className={`block py-2 pl-4 text-sm transition-colors duration-200 ${isActive
                                    ? "text-blue-600 font-medium bg-blue-50/50 rounded-r-md"
                                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50/50 rounded-r-md"
                                    }`}
                            >
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
