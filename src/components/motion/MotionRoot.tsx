"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Every animated component already reads `usePrefersReducedMotion()`
 * itself and sets `initial` to match its resting state when it's on, so
 * reduced motion is handled per-component rather than through motion's
 * own `reducedMotion="user"` auto-stripping — that global switch was
 * found to leave `initial`/`animate` mount animations stuck at their
 * `initial` value instead of jumping to rest, which is worse than not
 * touching the animation at all.
 */
export function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig>{children}</MotionConfig>;
}
