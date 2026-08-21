/**
 * Central motion design tokens. Every animated component should pull
 * from here rather than inventing its own durations/easings — this is
 * what keeps 40+ components feeling like one motion language instead
 * of forty small decisions.
 *
 * Three intensity levels, per the site's motion brief:
 *  - micro:     buttons, links, nav, icons        (150-350ms)
 *  - section:   cards, images, headings, timeline  (500-900ms)
 *  - signature: hero, career route, page transitions (1000-2000ms+)
 * Signature-level animation should stay rare.
 */

export const EASE = {
  /** Standard UI easing — decelerate in, no overshoot. */
  standard: [0.16, 1, 0.3, 1] as const,
  /** For things entering the screen. */
  enter: [0.22, 1, 0.36, 1] as const,
  /** For things leaving. */
  exit: [0.4, 0, 1, 1] as const,
  /** Linear — only for continuous/looping motion (route draws, drift). */
  linear: [0, 0, 1, 1] as const,
};

export const DURATION = {
  micro: 0.2,
  microSlow: 0.32,
  section: 0.6,
  sectionSlow: 0.85,
  signature: 1.1,
  signatureSlow: 1.8,
};

export const STAGGER = {
  tight: 0.04,
  normal: 0.08,
  loose: 0.14,
};

/** Distance (px) a "reveal" translates from — kept small and consistent. */
export const REVEAL_DISTANCE = 18;

export const transition = {
  micro: { duration: DURATION.micro, ease: EASE.standard },
  section: { duration: DURATION.section, ease: EASE.standard },
  signature: { duration: DURATION.signature, ease: EASE.standard },
  spring: { type: "spring" as const, stiffness: 320, damping: 28, mass: 0.6 },
  springSoft: { type: "spring" as const, stiffness: 220, damping: 26, mass: 0.7 },
};

/** Shared fade+lift variants for section-level reveals. */
export const fadeUp = {
  hidden: { opacity: 0, y: REVEAL_DISTANCE },
  visible: { opacity: 1, y: 0 },
};

export const fadeUpBlur = {
  hidden: { opacity: 0, y: REVEAL_DISTANCE, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

/** Viewport options used consistently for scroll-triggered reveals. */
export const VIEWPORT = { once: true, margin: "0px 0px -10% 0px" } as const;
