import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { PROFILE } from "@/data/profile";
import { RESEARCH_INTERESTS } from "@/data/research";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who Fardin Farhan Khan is, what he works on, and how transportation, data, and research connect across his career.",
};

const ScoreArrowIcon = () => (
  <svg
    aria-hidden
    viewBox="0 0 12 12"
    className="h-3 w-3 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
  >
    <path
      d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8"
      stroke="currentColor"
      strokeWidth="1.3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function TestScoreCard({
  score,
  delayMs,
}: {
  score: (typeof PROFILE.testScores)[number];
  delayMs: number;
}) {
  const isGRE = score.short === "GRE";

  return (
    <Reveal delayMs={delayMs}>
      <a
        href={score.reportUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="group flex h-full flex-col gap-5 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition-colors duration-300 hover:border-[var(--color-accent)]/60 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-11 items-center rounded-lg bg-white px-3 py-2 shadow-sm sm:h-12">
            <Image
              src={score.logo}
              alt={`${score.test} logo`}
              width={score.logoWidth}
              height={score.logoHeight}
              className="h-full w-auto object-contain"
            />
          </div>
          <p className="max-w-[9rem] text-right font-mono text-[0.65rem] uppercase leading-snug tracking-[0.06em] text-[var(--color-mist)]">
            {score.test}
          </p>
        </div>

        {isGRE ? (
          <CountUp
            value={328}
            className="font-display text-6xl font-bold tracking-tight text-[var(--color-accent)] sm:text-7xl"
          />
        ) : (
          <p className="font-display text-6xl font-bold tracking-tight text-[var(--color-accent)] sm:text-7xl">
            {score.overall}
          </p>
        )}

        <p className="font-mono text-xs leading-relaxed text-[var(--color-mist)]">{score.breakdown}</p>

        <span className="mt-1 inline-flex w-fit items-center gap-1.5 font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
          View official score report
          <ScoreArrowIcon />
        </span>
      </a>
    </Reveal>
  );
}

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
          </div>
        </div>

        <Reveal className="mt-16 border-t border-2 border-[var(--color-accent)]/40 pt-10">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Standardised test scores
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {PROFILE.testScores.map((t, i) => (
              <TestScoreCard key={t.test} score={t} delayMs={i * 80} />
            ))}
          </div>
        </Reveal>

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
