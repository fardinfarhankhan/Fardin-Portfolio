import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { PROJECTS } from "@/data/projects";

const FEATURED = PROJECTS.filter((p) => p.featured);

export function SelectedWork() {
  return (
    <section className="border-b border-[var(--color-line)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Selected work
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              Infrastructure projects at scale
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-mist)] transition-colors hover:text-[var(--color-accent)]"
          >
            Full archive ({PROJECTS.length})
            <svg aria-hidden viewBox="0 0 12 12" className="h-3 w-3">
              <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
          {FEATURED.map((project, i) => (
            <Reveal key={project.slug} delayMs={i * 70}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col justify-between bg-[var(--color-paper)] p-7 transition-colors hover:bg-[var(--color-surface)] sm:p-9"
              >
                <div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.sector.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[var(--color-line)] px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.06em] text-[var(--color-mist)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)] sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--color-ink-soft)]">
                    {project.summary}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4 font-mono text-xs text-[var(--color-mist)]">
                  {project.value && <span>{project.value}</span>}
                  {project.year && <span>{project.year}</span>}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
