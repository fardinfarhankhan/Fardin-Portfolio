import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ACHIEVEMENTS, COURSE_CERTIFICATIONS, type AchievementCategory } from "@/data/achievements";
import { PROFILE } from "@/data/profile";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Awards, adjudicating experience, leadership, training, and professional milestones for Fardin Farhan Khan.",
};

const CATEGORY_LABELS: Record<AchievementCategory, string> = {
  award: "Awards",
  academic: "Academic",
  leadership: "Leadership",
  adjudicating: "Adjudicating Experience",
  training: "Training",
  professional: "Professional",
};

const CATEGORY_ORDER: AchievementCategory[] = [
  "award",
  "academic",
  "leadership",
  "adjudicating",
  "training",
  "professional",
];

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="Milestones"
        description="Academic, professional, leadership, and training achievements, grouped by kind."
      />

      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-16">
          {CATEGORY_ORDER.map((category) => {
            const items = ACHIEVEMENTS.filter((a) => a.category === category);
            if (items.length === 0) return null;
            return (
              <section key={category}>
                <Reveal>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
                    {CATEGORY_LABELS[category]}
                  </p>
                </Reveal>
                <div className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item, i) => (
                    <Reveal key={item.title} delayMs={i * 50} className="border-t border-[var(--color-line)] pt-5">
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="font-display text-base font-semibold leading-snug text-[var(--color-ink)]">
                          {item.title}
                        </p>
                        {item.year && (
                          <span className="shrink-0 font-mono text-xs text-[var(--color-mist)]">
                            {item.year}
                          </span>
                        )}
                      </div>
                      {item.org && (
                        <p className="mt-1 text-sm text-[var(--color-ink-soft)]">{item.org}</p>
                      )}
                      {item.detail && (
                        <p className="mt-2 text-sm leading-relaxed text-[var(--color-mist)]">
                          {item.detail}
                        </p>
                      )}
                    </Reveal>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <Reveal className="mt-16 border-t border-[var(--color-line)] pt-10">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
            Professional memberships
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROFILE.memberships.map((m) => (
              <div key={m.org}>
                <p className="text-sm font-medium text-[var(--color-ink)]">{m.org}</p>
                <p className="mt-0.5 font-mono text-xs text-[var(--color-mist)]">
                  {m.role} &middot; No. {m.id}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16 border-t border-[var(--color-line)] pt-10">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
            Additional course certifications
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {COURSE_CERTIFICATIONS.map((c) => (
              <li
                key={c}
                className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs text-[var(--color-ink-soft)]"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </>
  );
}
