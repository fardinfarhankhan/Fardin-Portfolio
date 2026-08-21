import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const chips = project.tags ?? project.sector ?? [];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col border-t border-[var(--color-line)] py-7 transition-colors first:border-t-0 sm:border-t-0 sm:border-b sm:py-8"
    >
      <span
        aria-hidden
        className="absolute -left-5 top-8 hidden h-0 w-0.5 bg-[var(--color-accent)] transition-[height] duration-300 group-hover:h-[calc(100%-2rem)] sm:block"
      />

      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <span className="font-mono text-xs text-[var(--color-mist)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
          {String(index).padStart(2, "0")}
        </span>
        <div className="flex flex-wrap gap-1.5">
          {chips.slice(0, 3).map((s) => (
            <span
              key={s}
              className="rounded-full border border-[var(--color-line)] px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.06em] text-[var(--color-mist)]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <h3 className="mt-4 max-w-2xl font-display text-xl font-semibold leading-snug text-[var(--color-ink)] transition-[color,transform] duration-300 group-hover:translate-x-1.5 group-hover:text-[var(--color-accent)] sm:text-2xl">
        {project.title}
      </h3>

      <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--color-ink-soft)]">
        {project.summary}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-[var(--color-mist)]">
        {project.year && <span>{project.year}</span>}
        {project.org && <span>{project.org}</span>}
        {project.value && <span>{project.value}</span>}
        <span className="ml-auto inline-flex items-center gap-1 text-[var(--color-mist)] opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-[var(--color-accent)]">
          View project
          <svg aria-hidden viewBox="0 0 12 12" className="h-3 w-3">
            <path
              d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8"
              stroke="currentColor"
              strokeWidth="1.3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
