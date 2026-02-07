"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionProps, Variants } from "framer-motion";
import { ElementType, Fragment } from "react";

type AnimationType = "fadeIn" | "slideLeft" | "slideRight" | "blurIn" | "scaleUp" | "slideUp";

interface TextAnimateProps extends MotionProps {
    /**
     * The text to animate
     */
    children: string;
    /**
     * The class name to apply to the container
     */
    className?: string;
    /**
     * The class name to apply to each segment (word or character)
     */
    segmentClassName?: string;
    /**
     * The animation type to use
     * @default "fadeIn"
     */
    animation?: AnimationType;
    /**
     * Whether to animate by word or character
     * @default "word"
     */
    by?: "word" | "character";
    /**
     * The delay before the animation starts
     * @default 0
     */
    startDelay?: number;
    /**
     * The delay between each segment
     * @default 0.05
     */
    delay?: number;
    /**
     * The duration of the animation for each segment
     * @default 0.3
     */
    duration?: number;
    /**
     * The HTML element to render as
     * @default "div"
     */
    as?: ElementType;
}

const animations: Record<AnimationType, Variants> = {
    fadeIn: {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
        },
    },
    slideLeft: {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 },
        },
    },
    slideRight: {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 },
        },
    },
    slideUp: {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
        },
    },
    blurIn: {
        hidden: { opacity: 0, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 0.3 },
        },
    },
    scaleUp: {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3 },
        },
    },
};

export function TextAnimate({
    children,
    className,
    segmentClassName,
    animation = "fadeIn",
    by = "word",
    startDelay = 0,
    delay = 0.05,
    duration = 0.3,
    as: Component = "div",
    ...props
}: TextAnimateProps) {
    const segments = by === "word" ? children.split(" ") : children.split("");

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: delay,
                delayChildren: startDelay,
            },
        },
    };

    const itemVariants = animations[animation];

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className={cn("inline-block", className)}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                {...props}
            >
                {segments.map((segment, i) => (
                    <Fragment key={i}>
                        <motion.span
                            variants={itemVariants}
                            className={cn("inline-block", segmentClassName)}
                        >
                            {segment === " " ? "\u00A0" : segment}
                        </motion.span>
                        {by === "word" && i < segments.length - 1 && " "}
                    </Fragment>
                ))}
            </motion.div>
        </AnimatePresence>
    );
}
