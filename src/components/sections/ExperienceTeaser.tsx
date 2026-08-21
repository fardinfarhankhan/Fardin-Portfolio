import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { EXPERIENCE } from "@/data/experience";

export function ExperienceTeaser() {
  const current = EXPERIENCE[0];

  return (
    <section className="border-b border-[var(--color-line)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-16">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Currently
            </p>
            <h2 className="mt-3 max-w-md font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              {current.title}
            </h2>
            <p className="mt-2 text-[var(--color-ink-soft)]">{current.organization}</p>
            <Link
              href="/experience"
              className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-mist)] transition-colors hover:text-[var(--color-accent)]"
            >
              Full timeline
              <svg aria-hidden viewBox="0 0 12 12" className="h-3 w-3">
                <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>

          <Reveal delayMs={100}>
            <p className="font-mono text-xs text-[var(--color-mist)]">{current.period}</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {current.duties.slice(0, 5).map((duty) => (
                <li key={duty} className="flex gap-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {duty}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
