"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { DURATION, EASE, fadeUpBlur, VIEWPORT } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "li";
};

/**
 * Fades + lifts content into view once it enters the viewport.
 * Built on motion's whileInView, so MotionConfig(reducedMotion="user")
 * automatically collapses this to a plain opacity fade for anyone with
 * prefers-reduced-motion set — no extra branching needed here.
 */
export function Reveal({ children, className, delayMs = 0, as = "div" }: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      variants={fadeUpBlur}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ duration: DURATION.section, ease: EASE.standard, delay: delayMs / 1000 }}
    >
      {children}
    </Comp>
  );
}
