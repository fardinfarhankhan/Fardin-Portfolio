"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { Recommendation } from "@/data/recommendations";
import { DURATION, EASE } from "@/lib/motion";

export function RecommendationCard({ rec, delayMs }: { rec: Recommendation; delayMs: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const delay = delayMs / 1000;

  return (
    <div
      ref={ref}
      className="mb-8 break-inside-avoid rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 sm:p-8"
    >
      <motion.svg
        aria-hidden
        viewBox="0 0 32 24"
        className="h-6 w-8 text-[var(--color-accent)]"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: DURATION.micro, ease: EASE.standard, delay }}
      >
        <path
          fill="currentColor"
          d="M9.6 0C4.8 3 0 8.4 0 14.4 0 19.8 3.6 24 9 24c4.2 0 7.2-3.3 7.2-7.5 0-3.9-2.7-6.6-6.3-6.6-.6 0-1.2.15-1.5.3C9 6.6 11.4 3.3 15 .9zm17.4 0c-4.8 3-9.6 8.4-9.6 14.4 0 5.4 3.6 9.6 9 9.6 4.2 0 7.2-3.3 7.2-7.5 0-3.9-2.7-6.6-6.3-6.6-.6 0-1.2.15-1.5.3C26.4 6.6 28.8 3.3 32.4.9z"
        />
      </motion.svg>

      <motion.div
        className="mt-4 flex flex-col gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: DURATION.section, ease: EASE.standard, delay: delay + 0.08 }}
      >
        {rec.quote.split("\n").map((para, pi) => (
          <p key={pi} className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
            {para}
          </p>
        ))}
      </motion.div>

      <div className="relative mt-5 pt-4">
        <div className="absolute inset-x-0 top-0 h-px bg-[var(--color-line)]" />
        <motion.div
          className="absolute inset-x-0 top-0 h-px origin-left bg-[var(--color-accent)]"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : undefined}
          transition={{ duration: DURATION.section, ease: EASE.enter, delay: delay + 0.2 }}
        />
        <p className="font-display text-sm font-semibold text-[var(--color-ink)]">{rec.name}</p>
        <p className="mt-1 text-xs leading-relaxed text-[var(--color-mist)]">{rec.title}</p>
        <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.06em] text-[var(--color-accent)]">
          {rec.relationship} &middot; {rec.date}
        </p>
      </div>
    </div>
  );
}
