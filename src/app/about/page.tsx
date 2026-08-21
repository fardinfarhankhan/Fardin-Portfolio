import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { PROFILE } from "@/data/profile";
import { RESEARCH_INTERESTS } from "@/data/research";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who Fardin Farhan Khan is, what he works on, and how transportation, data, and research connect across his career.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title={PROFILE.bioOpening} />

      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-20">
          <div className="flex flex-col gap-6">
            <Reveal>
              <p className="text-lg leading-relaxed text-[var(--color-ink-soft)] sm:text-xl">
                {PROFILE.professionalOverview}
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <p className="text-lg leading-relaxed text-[var(--color-ink-soft)] sm:text-xl">
                {PROFILE.professionalOverviewContinued}
              </p>
            </Reveal>
            <Reveal delayMs={140}>
              <p className="border-t border-[var(--color-line)] pt-6 text-base leading-relaxed text-[var(--color-mist)]">
                {PROFILE.personalObjective}
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-10">
            <Reveal>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
                Research interests
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {RESEARCH_INTERESTS.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs text-[var(--color-ink-soft)]"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delayMs={60}>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
                Core competencies
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {PROFILE.coreCompetencies.map((c) => (
                  <li key={c} className="flex gap-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delayMs={120}>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
                Languages
              </p>
              <ul className="mt-4 flex flex-col gap-1.5">
                {PROFILE.languages.map((l) => (
                  <li key={l.name} className="text-sm text-[var(--color-ink-soft)]">
                    <span className="font-medium text-[var(--color-ink)]">{l.name}</span> — {l.level}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delayMs={180}>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
                Standardised test scores
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {PROFILE.testScores.map((t) => (
                  <li key={t.test}>
                    <p className="text-sm font-medium text-[var(--color-ink)]">
                      {t.test} — {t.overall}
                    </p>
                    <p className="mt-0.5 font-mono text-xs text-[var(--color-mist)]">{t.breakdown}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-16 border-t border-[var(--color-line)] pt-10">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
            Leadership roles
          </p>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {PROFILE.leadershipRoles.map((role) => (
              <li key={role} className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
                {role}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </>
  );
}
