import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { Reveal } from "@/components/motion/Reveal";
import { BeamsBackground } from "@/components/ui/beams-background";

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
      <div className="relative overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-hero-bg)] px-5 pb-14 pt-32 sm:px-8 sm:pb-20">
        <BeamsBackground intensity="medium" />
        <div className="relative mx-auto max-w-[1000px]">
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
            {(project.tags ?? project.sector ?? []).map((s) => (
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
            <div className="flex gap-2">
              <dt className="text-[var(--color-hero-fg)]/40">Category</dt>
              <dd>{project.group}</dd>
            </div>
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
        {project.images && project.images.length > 0 && (
          <Reveal className="mb-12 sm:mb-16">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface-2)] sm:aspect-[21/9]">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                priority
                sizes="(min-width: 1024px) 1000px, 100vw"
                className="object-cover"
              />
            </div>
            {project.images.length > 1 && (
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {project.images.slice(1).map((src) => (
                  <div
                    key={src}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-2)]"
                  >
                    <Image
                      src={src}
                      alt={project.title}
                      fill
                      sizes="(min-width: 640px) 33vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        )}

        <Reveal>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
            Overview
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
            {project.description ?? project.summary}
          </p>
        </Reveal>

        {project.contribution && project.contribution.length > 0 && (
          <Reveal delayMs={80} className="mt-12">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
              Contribution
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.contribution.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-[var(--color-line)] px-3 py-1 text-sm text-[var(--color-ink-soft)]"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        )}

        {project.link && (
          <Reveal delayMs={160} className="mt-12">
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
      </div>
    </>
  );
}
