"use client";

import { useId, useState, type ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

export function Timeline({ children }: { children: ReactNode }) {
  return <ol className="flex flex-col">{children}</ol>;
}

type TimelineItemProps = {
  index: number;
  eyebrow: string;
  title: string;
  subtitle?: string;
  meta?: string;
  children: ReactNode;
};

export function TimelineItem({
  index,
  eyebrow,
  title,
  subtitle,
  meta,
  children,
}: TimelineItemProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <Reveal as="li" className="border-b border-[var(--color-line)] first:border-t">
      <div className="relative flex gap-6 py-8 sm:gap-10">
        <span className="mt-1 hidden shrink-0 font-mono text-xs text-[var(--color-mist)] sm:block sm:w-10">
          {String(index).padStart(2, "0")}
        </span>

        <div className="min-w-0 flex-1">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="group flex w-full flex-col items-start gap-1 text-left"
          >
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--color-accent)]">
              {eyebrow}
            </span>
            <span className="flex w-full flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <span className="font-display text-xl font-semibold text-[var(--color-ink)] sm:text-2xl">
                {title}
              </span>
              {meta && (
                <span className="font-mono text-xs text-[var(--color-mist)]">{meta}</span>
              )}
            </span>
            {subtitle && (
              <span className="text-sm text-[var(--color-ink-soft)]">{subtitle}</span>
            )}
            <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-[var(--color-mist)] transition-colors group-hover:text-[var(--color-accent)]">
              {open ? "Hide detail" : "Show detail"}
              <svg
                aria-hidden
                viewBox="0 0 12 12"
                className={`h-2.5 w-2.5 transition-transform ${open ? "rotate-180" : ""}`}
              >
                <path
                  d="M2.5 4.5 6 8l3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          <div
            id={panelId}
            className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
              open ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0 overflow-hidden">{children}</div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
