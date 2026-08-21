import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ResearchMap } from "@/components/sections/ResearchMap";

export function ResearchTeaser() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Research
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              Travel behaviour, safety, and explainable machine learning
            </h2>
          </div>
          <Link
            href="/research"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-mist)] transition-colors hover:text-[var(--color-accent)]"
          >
            Full research map
            <svg aria-hidden viewBox="0 0 12 12" className="h-3 w-3">
              <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>

        <Reveal delayMs={100} className="mt-10">
          <ResearchMap />
        </Reveal>
      </div>
    </section>
  );
}
