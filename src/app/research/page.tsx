import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ResearchMap } from "@/components/sections/ResearchMap";
import { PUBLICATIONS, THESES, RESEARCH_PROJECTS, RESEARCH_SKILLS } from "@/data/research";
import { PROFILE } from "@/data/profile";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Fardin Farhan Khan's research interests, publications, theses, and methodology at the intersection of transportation, data science, and infrastructure.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="A researcher's working map"
        description="Travel behaviour, road safety, and sustainable mobility — studied through statistical modelling and explainable machine learning."
      />

      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
            Research interests
          </p>
          <p className="mt-3 max-w-2xl text-sm text-[var(--color-ink-soft)]">
            Hover or focus an interest to see related publications and theses.
          </p>
          <div className="mt-6">
            <ResearchMap />
          </div>
        </Reveal>
      </div>

      <div className="border-t border-[var(--color-line)] bg-[var(--color-surface)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal className="flex flex-wrap items-baseline justify-between gap-4">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
              Publications &amp; working papers
            </p>
            <a
              href={PROFILE.social.researchgate}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-mist)] transition-colors hover:text-[var(--color-accent)]"
            >
              Full profile on ResearchGate
              <svg aria-hidden viewBox="0 0 12 12" className="h-3 w-3">
                <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Reveal>
          <div className="mt-8 flex flex-col gap-8">
            {PUBLICATIONS.map((pub, i) => (
              <Reveal key={pub.citation} delayMs={i * 60} className="border-t border-[var(--color-line)] pt-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[var(--color-accent)] px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.06em] text-[var(--color-accent)]">
                    {pub.role}
                  </span>
                  <span className="font-mono text-xs text-[var(--color-mist)]">{pub.status}</span>
                </div>
                <p className="mt-3 max-w-3xl font-display text-lg font-medium leading-snug text-[var(--color-ink)]">
                  {pub.citation}
                </p>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--color-ink-soft)]">
                  {pub.summary}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
              Theses
            </p>
          </Reveal>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            {THESES.map((thesis, i) => (
              <Reveal key={thesis.title} delayMs={i * 80} className="rounded-2xl border border-[var(--color-line)] p-6 sm:p-8">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--color-accent)]">
                  {thesis.level} &middot; {thesis.period}
                </p>
                <p className="mt-3 font-display text-lg font-semibold leading-snug text-[var(--color-ink)]">
                  {thesis.title}
                </p>
                <p className="mt-2 text-xs text-[var(--color-mist)]">Supervisor: {thesis.supervisor}</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {thesis.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-line)] bg-[var(--color-surface)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
              Research &amp; academic projects
            </p>
          </Reveal>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {RESEARCH_PROJECTS.map((proj, i) => (
              <Reveal key={proj.title} delayMs={i * 80}>
                <p className="font-display text-base font-semibold leading-snug text-[var(--color-ink)]">
                  {proj.title}
                </p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.06em] text-[var(--color-mist)]">
                  {proj.context}
                  {proj.period ? ` · ${proj.period}` : ""}
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {proj.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
                      {point}
                    </li>
                  ))}
                </ul>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-accent)] hover:underline"
                  >
                    View source material
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
              Methods
            </p>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {RESEARCH_SKILLS.map((group, i) => (
              <Reveal key={group.group} delayMs={i * 60}>
                <p className="font-display text-sm font-semibold text-[var(--color-ink)]">
                  {group.group}
                </p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-[var(--color-ink-soft)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
