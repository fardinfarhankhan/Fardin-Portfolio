"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@/lib/motion";

/**
 * A thin accent line sweeps across the top of the viewport on every
 * client-side navigation — the "route line" motif carried into page
 * transitions, without a full cross-page shared-element rebuild.
 * MotionConfig (reducedMotion="user") collapses this to a plain
 * opacity flash automatically when the user prefers reduced motion.
 */
export function RouteTransition() {
  const pathname = usePathname();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[2px] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={pathname}
          className="h-full origin-left bg-[var(--color-accent)]"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{
            scaleX: 1,
            opacity: [1, 1, 0],
            transition: {
              scaleX: { duration: 0.55, ease: EASE.enter },
              opacity: { duration: 0.55, times: [0, 0.7, 1] },
            },
          }}
        />
      </AnimatePresence>
    </div>
  );
}
