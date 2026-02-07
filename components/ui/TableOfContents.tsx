"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TableOfContentsProps {
    items: { id: string; title: string }[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0px -60% 0px" }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Offset for sticky header
                behavior: "smooth",
            });
            setActiveId(id);
        }
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
