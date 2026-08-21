"use client";

import { motion } from "motion/react";
import { DURATION, EASE, STAGGER, VIEWPORT } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type TextRevealProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "span";
  className?: string;
  delayMs?: number;
  /** Split into words (headings) or keep as one masked block (short labels). */
  split?: "word" | "none";
  /** "scroll" (default) reveals when scrolled into view — for page/section
   *  headings. "mount" plays immediately on mount — for above-the-fold
   *  content (the hero) that's guaranteed visible at load. */
  trigger?: "scroll" | "mount";
};

const wordVariants = {
  hidden: { y: "110%" },
  visible: { y: "0%" },
};

/**
 * Clip-masked heading reveal: each word slides up from behind an
 * overflow-hidden mask rather than simply fading — used sparingly, on
 * major headings only (hero, page titles, section titles).
 */
export function TextReveal({
  text,
  as = "span",
  className,
  delayMs = 0,
  split = "word",
  trigger = "scroll",
}: TextRevealProps) {
  const Comp = motion[as];
  const reducedMotion = usePrefersReducedMotion();

  const viewportProps =
    trigger === "scroll" ? { whileInView: "visible" as const, viewport: VIEWPORT } : { animate: "visible" as const };

  if (split === "none") {
    const revealProps =
      trigger === "scroll"
        ? { whileInView: { y: "0%" }, viewport: VIEWPORT }
        : { animate: { y: "0%" } };
    return (
      <span className={`inline-block overflow-hidden ${className ?? ""}`}>
        <Comp
          // Keyed on reducedMotion: usePrefersReducedMotion() reads `false`
          // on the first (SSR-matching) client render and corrects itself a
          // moment later, but motion only re-applies `initial`/re-evaluates
          // a locked-in transition on a genuine remount — an unkeyed
          // element just keeps animating with the stale (non-reduced)
          // values it already committed to.
          key={reducedMotion ? "reduced" : "motion"}
          // Under reduced motion, initial matches the resting value — there's
          // nothing to interpolate, regardless of the transition's delay.
          initial={reducedMotion ? { y: "0%" } : { y: "110%" }}
          {...revealProps}
          transition={{ duration: DURATION.section, ease: EASE.enter, delay: delayMs / 1000 }}
          className="inline-block"
        >
          {text}
        </Comp>
      </span>
    );
  }

  const words = text.split(" ");

  return (
    <Comp className={className} aria-label={text}>
      {words.map((word, i) => (
        // Fragment, not a wrapping element: the space below must be a
        // sibling *outside every* inline-block box, not just the
        // overflow-hidden mask — a trailing text node inside an
        // inline-block's own line box gets its width trimmed to zero by
        // the browser regardless of overflow, so nesting it one level too
        // deep silently collapses the gap between words.
        <span key={i} style={{ display: "contents" }} aria-hidden>
          <span
            key={reducedMotion ? "reduced" : "motion"}
            style={{ display: "inline-block" }}
          >
            <span className="inline-block overflow-hidden pb-[0.1em]">
              <motion.span
                className="inline-block"
                variants={wordVariants}
                initial={reducedMotion ? "visible" : "hidden"}
                {...viewportProps}
                transition={{
                  duration: DURATION.sectionSlow,
                  ease: EASE.enter,
                  delay: delayMs / 1000 + i * STAGGER.loose,
                }}
              >
                {word}
              </motion.span>
            </span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Comp>
  );
}
