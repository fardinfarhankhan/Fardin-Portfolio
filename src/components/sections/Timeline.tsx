"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { RouteLine } from "@/components/motion/RouteLine";
import { transition } from "@/lib/motion";

export function Timeline({ children }: { children: ReactNode }) {
  return <ol className="relative flex flex-col">{children}</ol>;
}

type TimelineItemProps = {
  index: number;
  eyebrow: string;
  title: string;
  subtitle?: string;
  meta?: string;
  /** Optional photo/logo shown as a thumbnail next to the entry. */
  image?: string;
  /** "cover" crops to fill (photos); "contain" fits whole + adds a white backing (logos). Defaults to "cover". */
  imageFit?: "cover" | "contain";
  /** Overrides the thumbnail's alt text. Defaults to `${title} campus`. */
  imageAlt?: string;
  /** Optional external link — e.g. an institution's official website. Makes `subtitle` clickable. */
  link?: string;
  children: ReactNode;
};

export function TimelineItem({
  index,
  eyebrow,
  title,
  subtitle,
  meta,
  image,
  imageFit = "cover",
  imageAlt,
  link,
  children,
}: TimelineItemProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const itemRef = useRef<HTMLDivElement>(null);
  const inView = useInView(itemRef, { once: true, margin: "0px 0px -20% 0px" });

  return (
    <Reveal as="li" className="border-b border-[var(--color-line)] first:border-t">
      <div ref={itemRef} className="relative flex gap-6 py-8 sm:gap-10">
        {/* Route: a short connecting segment above this station, plus the
            station dot itself — chains into one continuous drawn line as
            the visitor scrolls down consecutive items. */}
        <div className="absolute left-5 top-0 bottom-0 hidden w-px sm:block">
          {index > 1 && (
            <div className="absolute -top-8 h-8 w-px">
              <RouteLine orientation="vertical" duration={0.5} />
            </div>
          )}
        </div>
        <span className="relative mt-1 hidden shrink-0 text-center font-mono text-xs text-[var(--color-mist)] sm:block sm:w-10">
          <motion.span
            aria-hidden
            className="absolute inset-x-0 -top-1 mx-auto h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : undefined}
            transition={transition.spring}
          />
          <span className={inView ? "text-[var(--color-accent)]" : undefined}>
            {String(index).padStart(2, "0")}
          </span>
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-start gap-4 sm:gap-5">
            {image &&
              (imageFit === "contain" ? (
                <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-lg border border-[var(--color-line)] bg-white p-2 sm:h-20 sm:w-28">
                  <div className="relative h-full w-full">
                    <Image
                      src={image}
                      alt={imageAlt ?? `${title} campus`}
                      fill
                      sizes="(min-width: 640px) 112px, 80px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-surface-2)] sm:h-20 sm:w-28">
                  <Image
                    src={image}
                    alt={imageAlt ?? `${title} campus`}
                    fill
                    sizes="(min-width: 640px) 112px, 80px"
                    className="object-cover"
                  />
                </div>
              ))}
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
              </button>
              {subtitle &&
                (link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-sm text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {subtitle}
                    <svg aria-hidden viewBox="0 0 12 12" className="h-2.5 w-2.5">
                      <path
                        d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ) : (
                  <span className="text-sm text-[var(--color-ink-soft)]">{subtitle}</span>
                ))}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={panelId}
                className="group mt-2 inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-[var(--color-mist)] transition-colors hover:text-[var(--color-accent)]"
              >
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
              </button>
            </div>
          </div>

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
