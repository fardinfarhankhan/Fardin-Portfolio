import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { RECOMMENDATIONS } from "@/data/recommendations";
import { PROFILE } from "@/data/profile";

export const metadata: Metadata = {
  title: "Recommendations",
  description: "Professional endorsements from clients, colleagues, supervisors, and collaborators.",
};

export default function RecommendationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recommendations"
        title="What they say"
        description={`${RECOMMENDATIONS.length} professional endorsements from clients, supervisors, colleagues, and collaborators.`}
      />

      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="columns-1 gap-8 lg:columns-2">
          {RECOMMENDATIONS.map((rec, i) => (
            <Reveal
              key={rec.name + rec.date}
              delayMs={(i % 6) * 40}
              className="mb-8 break-inside-avoid rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 sm:p-8"
            >
              <svg aria-hidden viewBox="0 0 32 24" className="h-6 w-8 text-[var(--color-accent)]">
                <path
                  fill="currentColor"
                  d="M9.6 0C4.8 3 0 8.4 0 14.4 0 19.8 3.6 24 9 24c4.2 0 7.2-3.3 7.2-7.5 0-3.9-2.7-6.6-6.3-6.6-.6 0-1.2.15-1.5.3C9 6.6 11.4 3.3 15 .9zm17.4 0c-4.8 3-9.6 8.4-9.6 14.4 0 5.4 3.6 9.6 9 9.6 4.2 0 7.2-3.3 7.2-7.5 0-3.9-2.7-6.6-6.3-6.6-.6 0-1.2.15-1.5.3C26.4 6.6 28.8 3.3 32.4.9z"
                />
              </svg>

              <div className="mt-4 flex flex-col gap-2">
                {rec.quote.split("\n").map((para, pi) => (
                  <p key={pi} className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-5 border-t border-[var(--color-line)] pt-4">
                <p className="font-display text-sm font-semibold text-[var(--color-ink)]">{rec.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--color-mist)]">{rec.title}</p>
                <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.06em] text-[var(--color-accent)]">
                  {rec.relationship} &middot; {rec.date}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4 flex flex-wrap items-center gap-2 border-t border-[var(--color-line)] pt-8 text-sm text-[var(--color-mist)]">
          Sourced from
          <a
            href={PROFILE.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1 font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
          >
            LinkedIn
          </a>
          .
        </Reveal>
      </div>
    </>
  );
}
