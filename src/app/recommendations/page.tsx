import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { RecommendationCard } from "@/components/sections/RecommendationCard";
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
            <RecommendationCard key={rec.name + rec.date} rec={rec} delayMs={(i % 6) * 40} />
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
