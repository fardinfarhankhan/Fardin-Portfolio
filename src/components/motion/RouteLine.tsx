"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { DURATION, EASE, VIEWPORT } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type RouteLineProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
  withNode?: boolean;
  delay?: number;
  duration?: number;
  /** "scroll" (default) draws when scrolled into view. "mount" plays
   *  immediately — for above-the-fold placements like the hero. */
  trigger?: "scroll" | "mount";
};

/**
 * The site's recurring "route" motif as a straight connecting line: a
 * thin stroke that draws in when scrolled into view, with an optional
 * small node travelling along it. Used as connective tissue between
 * sections/timeline stations — the signature career route (CareerRoute)
 * builds its own multi-stop version of the same underlying technique.
 */
export function RouteLine({
  orientation = "horizontal",
  className = "",
  withNode = false,
  delay = 0,
  duration = DURATION.signature,
  trigger = "scroll",
}: RouteLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inViewDetected = useInView(ref, VIEWPORT);
  const reducedMotion = usePrefersReducedMotion();
  const inView = reducedMotion || trigger === "mount" || inViewDetected;
  const isH = orientation === "horizontal";

  return (
    <div ref={ref} className={`relative ${isH ? "h-px w-full" : "h-full w-px"} ${className}`}>
      <motion.div
        // Keyed on reducedMotion so a late correction (the hook reads
        // `false` on the SSR-matching first client render, then flips)
        // forces a genuine remount instead of updating a transition that
        // motion has already locked in with the stale delay/duration.
        key={reducedMotion ? "reduced" : "motion"}
        className={`absolute inset-0 bg-[var(--color-line)] ${isH ? "origin-left" : "origin-top"}`}
        // Under reduced motion, initial matches the fully-drawn state —
        // there's nothing to interpolate, regardless of delay/duration.
        initial={reducedMotion ? { scaleX: 1, scaleY: 1 } : { scaleX: isH ? 0 : 1, scaleY: isH ? 1 : 0 }}
        animate={inView ? { scaleX: 1, scaleY: 1 } : undefined}
        transition={{ duration, ease: EASE.enter, delay }}
      />
      {withNode && !reducedMotion && (
        <motion.span
          aria-hidden
          className="absolute h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
          style={isH ? { top: "50%", y: "-50%" } : { left: "50%", x: "-50%" }}
          initial={{ [isH ? "left" : "top"]: "0%", opacity: 0 }}
          animate={
            inView
              ? { [isH ? "left" : "top"]: "100%", opacity: [0, 1, 1, 0] }
              : undefined
          }
          transition={{ duration, ease: EASE.standard, delay }}
        />
      )}
    </div>
  );
}
