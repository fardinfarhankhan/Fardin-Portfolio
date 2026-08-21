import Link from "next/link";
import { NetworkCanvas } from "@/components/visual/NetworkCanvas";

export function Hero() {
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
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-[var(--color-hero-fg)]/60">
          Portfolio &mdash; 01 / Overview
        </p>

        <h1 className="mt-5 font-display text-[13vw] font-semibold leading-[0.92] tracking-tight text-[var(--color-hero-fg)] sm:text-[7.5vw] lg:text-[6vw]">
          Fardin Farhan
          <br />
          Khan
        </h1>

        <p className="mt-6 max-w-xl font-mono text-sm uppercase tracking-[0.12em] text-[var(--color-hero-fg)]/70 sm:text-base">
          Transportation &middot; Data &middot; Research &middot; Infrastructure
        </p>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-hero-fg)]/60 sm:text-lg">
          Engineer. Researcher. Data Analyst. Transportation Professional.
          Problem Solver.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/projects"
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
        </div>
      </div>
    </section>
  );
}
