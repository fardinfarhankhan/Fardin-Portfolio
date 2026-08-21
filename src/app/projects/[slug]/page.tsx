import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { Reveal } from "@/components/motion/Reveal";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <div className="border-b border-[var(--color-line)] bg-[var(--color-hero-bg)] px-5 pb-14 pt-32 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-[1000px]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-[var(--color-hero-fg)]/55 transition-colors hover:text-[var(--color-accent)]"
          >
            <svg aria-hidden viewBox="0 0 12 12" className="h-3 w-3 rotate-180">
              <path
                d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8"
                stroke="currentColor"
                strokeWidth="1.3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            All projects
          </Link>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.sector.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[var(--color-hero-fg)]/25 px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.06em] text-[var(--color-hero-fg)]/70"
              >
                {s}
              </span>
            ))}
          </div>

          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--color-hero-fg)] sm:text-5xl">
            {project.title}
          </h1>

          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-[var(--color-hero-fg)]/60">
            {project.year && (
              <div className="flex gap-2">
                <dt className="text-[var(--color-hero-fg)]/40">Year</dt>
                <dd>{project.year}</dd>
              </div>
            )}
            {project.org && (
              <div className="flex gap-2">
                <dt className="text-[var(--color-hero-fg)]/40">Client / Organization</dt>
                <dd>{project.org}</dd>
              </div>
            )}
            {project.value && (
              <div className="flex gap-2">
                <dt className="text-[var(--color-hero-fg)]/40">Value</dt>
                <dd>{project.value}</dd>
              </div>
            )}
          </dl>
        </div>
      </div>

      <div className="mx-auto max-w-[1000px] px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
            Overview
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
            {project.summary}
          </p>
        </Reveal>

        {project.link && (
          <Reveal delayMs={80} className="mt-10">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              View source material
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
            </a>
          </Reveal>
        )}

        <Reveal delayMs={120} className="mt-16 rounded-2xl border border-dashed border-[var(--color-line)] px-6 py-8 sm:px-10">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-mist)]">
            Gallery
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--color-mist)]">
            No verified imagery is available for this project yet. Original photography or
            documentation will be added here once sourced.
          </p>
        </Reveal>
      </div>
    </>
  );
}
