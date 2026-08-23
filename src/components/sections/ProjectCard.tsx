import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const chips = project.tags ?? project.sector ?? [];
  const cover = project.images?.[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] transition-colors duration-300 hover:border-[var(--color-accent)]/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface-2)]">
        {cover ? (
          <>
            <Image
              src={cover}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono text-xs text-[var(--color-mist)]">
            {String(index).padStart(2, "0")}
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-[var(--color-paper)]/90 px-2 py-0.5 font-mono text-[0.62rem] text-[var(--color-mist)] backdrop-blur-sm">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
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

        <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-accent)] sm:text-xl">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-ink-soft)]">{project.summary}</p>

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
      </div>
    </Link>
  );
}
