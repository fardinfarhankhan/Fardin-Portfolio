"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { NetworkCanvas } from "@/components/visual/NetworkCanvas";
import { RouteLine } from "@/components/motion/RouteLine";
import { TextReveal } from "@/components/motion/TextReveal";
import { DURATION, EASE, STAGGER } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const NARRATIVE = [
  "Engineer.",
  "Researcher.",
  "Data Analyst.",
  "Transportation Professional.",
  "Problem Solver.",
];

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  // Under reduced motion, `initial` is set to the same values as
  // `animate` so there's nothing to interpolate — the element simply
  // renders at rest, regardless of the transition's delay/duration.
  const eyebrowInitial = reducedMotion ? { opacity: 1 } : { opacity: 0 };
  const ctaInitial = reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 };

  const narrativeContainer = {
    hidden: {},
    visible: {
      transition: reducedMotion ? {} : { staggerChildren: STAGGER.loose, delayChildren: 1.6 },
    },
  };
  const narrativeItem = {
    hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 10 },
    visible: { opacity: 1, y: 0, transition: { duration: DURATION.section, ease: EASE.standard } },
  };

  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-hero-bg)]">
      <NetworkCanvas
        className="absolute inset-0"
        density={13000}
        minNodes={30}
        maxNodes={80}
        linkDistance={160}
        colorVar="--color-hero-line"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-hero-bg)] via-transparent to-[var(--color-hero-bg)]/40" />

      <div className="relative mx-auto flex min-h-[86svh] max-w-[1400px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <motion.p
          key={reducedMotion ? "eyebrow-reduced" : "eyebrow-motion"}
          initial={eyebrowInitial}
          animate={{ opacity: 1 }}
          transition={{ duration: DURATION.micro, delay: 0.1 }}
          className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-[var(--color-hero-fg)]/60"
        >
          Portfolio &mdash; 01 / Overview
        </motion.p>

        <div className="mt-5 max-w-2xl">
          <RouteLine withNode duration={0.9} className="opacity-70" trigger="mount" />
        </div>

        <h1 className="mt-4 font-display text-[13vw] font-semibold leading-[0.92] tracking-tight text-[var(--color-hero-fg)] sm:text-[7.5vw] lg:text-[6vw]">
          <TextReveal as="span" text="Fardin Farhan" className="block" delayMs={500} trigger="mount" />
          <TextReveal as="span" text="Khan" className="block" delayMs={780} trigger="mount" />
        </h1>

        <div className="mt-6 max-w-xl font-mono text-sm uppercase tracking-[0.12em] text-[var(--color-hero-fg)]/70 sm:text-base">
          <TextReveal
            split="none"
            text="Transportation · Data · Research · Infrastructure"
            delayMs={1150}
            trigger="mount"
          />
        </div>

        <motion.p
          key={reducedMotion ? "narrative-reduced" : "narrative-motion"}
          variants={narrativeContainer}
          initial="hidden"
          animate="visible"
          className="mt-4 flex max-w-xl flex-wrap gap-x-1.5 text-base leading-relaxed text-[var(--color-hero-fg)]/60 sm:text-lg"
        >
          {NARRATIVE.map((word) => (
            <motion.span key={word} variants={narrativeItem}>
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          key={reducedMotion ? "cta-reduced" : "cta-motion"}
          initial={ctaInitial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.section, ease: EASE.standard, delay: reducedMotion ? 0 : 2.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projects"
            data-cursor="cta"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-accent-ink)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Explore the Work
            <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-hero-fg)]/25 px-6 py-3 text-sm font-medium text-[var(--color-hero-fg)] transition-colors hover:border-[var(--color-hero-fg)]/60"
          >
            About Fardin
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
