"use client";

import { useRef } from "react";
import { motion, useMotionValue, useScroll, useTransform, type MotionValue } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const STAGES = [
  "Civil Engineering",
  "Transportation",
  "Data & Statistics",
  "Research",
  "Professional Practice",
  "Multidisciplinary Problem Solving",
];

function Station({
  index,
  stage,
  progress,
}: {
  index: number;
  stage: string;
  progress: MotionValue<number>;
}) {
  const threshold = index / (STAGES.length - 1);
  const from = Math.max(0, threshold - 0.12);
  const opacity = useTransform(progress, [from, threshold], [0.4, 1]);
  const lit = useTransform(progress, [from, threshold], [0, 1]);

  return (
    <li className="relative flex min-w-0 flex-1 flex-col gap-3 border-t border-[var(--color-line)] py-5 pl-6 lg:border-t-0 lg:border-l lg:py-0 lg:pl-5 lg:pr-5">
      <span className="relative font-mono text-xs text-[var(--color-mist)]">
        {String(index + 1).padStart(2, "0")}
        <motion.span
          aria-hidden
          className="absolute inset-0 text-[var(--color-accent)]"
          style={{ opacity: lit }}
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>
      </span>
      <motion.span
        style={{ opacity }}
        className="font-display text-base font-medium leading-snug text-[var(--color-ink)] sm:text-lg"
      >
        {stage}
      </motion.span>
      <span
        aria-hidden
        className="absolute -left-[3px] top-5 h-1.5 w-1.5 rounded-full bg-[var(--color-line)] lg:top-0"
      />
      <motion.span
        aria-hidden
        className="absolute -left-[3px] top-5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] lg:top-0"
        style={{ opacity: lit }}
      />
    </li>
  );
}

export function IntersectionArc() {
  const trackRef = useRef<HTMLOListElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.88", "end 0.5"],
  });
  // Reduced motion: skip the scroll-tied draw/travel entirely and show
  // the finished state immediately, rather than tying a moving node to
  // scroll position.
  const settled = useMotionValue(1);
  const progress = reducedMotion ? settled : scrollYProgress;

  const nodeLeft = useTransform(progress, [0, 1], ["0%", "100%"]);
  const nodeTop = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-16">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-accent)]">
              A career built at the intersection
            </p>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-[var(--color-ink-soft)] sm:text-xl">
              The path runs from civil engineering fundamentals toward
              transportation systems, the data and statistical methods used
              to understand them, and the research and professional practice
              built around solving problems within them.
            </p>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="relative">
              {/* Track (desktop: horizontal, mobile: vertical) */}
              <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-px bg-[var(--color-line)] lg:block" />
              <motion.div
                className="pointer-events-none absolute inset-x-0 top-0 hidden h-px origin-left bg-[var(--color-accent)] lg:block"
                style={{ scaleX: progress }}
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-[var(--color-line)] lg:hidden" />
              <motion.div
                className="pointer-events-none absolute inset-y-0 left-0 w-px origin-top bg-[var(--color-accent)] lg:hidden"
                style={{ scaleY: progress }}
              />

              {/* Traveling node */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute top-0 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-paper)] lg:block"
                style={{ left: nodeLeft }}
              />
              <motion.span
                aria-hidden
                className="pointer-events-none absolute left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-paper)] lg:hidden"
                style={{ top: nodeTop }}
              />

              <ol
                ref={trackRef}
                className="relative flex flex-col gap-0 lg:flex-row lg:items-stretch lg:gap-0"
              >
                {STAGES.map((stage, i) => (
                  <Station key={stage} index={i} stage={stage} progress={progress} />
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
