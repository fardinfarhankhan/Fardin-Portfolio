"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { NetworkCanvas } from "@/components/visual/NetworkCanvas";
import { DURATION, EASE } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const CONVERGING_PATHS = [
  "M0,10 C 30,10 55,60 100,72",
  "M100,0 C 65,0 55,55 100,72",
  "M0,90 C 35,90 55,75 100,72",
  "M50,0 C 52,30 55,55 100,72",
];

/**
 * The inverse of the hero: instead of a dense, cursor-reactive network,
 * a few calm routes draw in and converge on a single point — many
 * experiences resolving into one point of contact.
 */
export function ContactHero({ title }: { title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inViewDetected = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reducedMotion = usePrefersReducedMotion();
  // Under reduced motion, show the converged state immediately rather
  // than animating the draw-in (pathLength isn't a CSS transform, so
  // MotionConfig's reducedMotion="user" doesn't demote it automatically).
  const inView = reducedMotion || inViewDetected;
  const revealTransition = reducedMotion ? { duration: 0 } : undefined;

  return (
    <div ref={ref} className="relative overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-hero-bg)] px-5 pb-14 pt-32 sm:px-8 sm:pb-20">
      <NetworkCanvas
        className="absolute inset-0"
        density={40000}
        minNodes={8}
        maxNodes={16}
        interactive={false}
        lineOpacity={0.25}
        nodeOpacity={0.4}
        colorVar="--color-hero-line"
      />

      <svg
        aria-hidden
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
      >
        {CONVERGING_PATHS.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={0.15}
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : undefined}
            transition={
              revealTransition ?? { duration: DURATION.signatureSlow, ease: EASE.enter, delay: i * 0.15 }
            }
          />
        ))}
        <motion.circle
          cx="100"
          cy="72"
          r="0.6"
          fill="var(--color-accent)"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : undefined}
          transition={revealTransition ?? { duration: DURATION.section, ease: EASE.standard, delay: 0.9 }}
          style={{ transformOrigin: "100px 72px" }}
        />
      </svg>

      <div className="relative mx-auto max-w-[1400px]">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-[var(--color-hero-fg)]/55">
          Contact
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[var(--color-hero-fg)] sm:text-6xl">
          {title}
        </h1>
      </div>
    </div>
  );
}
