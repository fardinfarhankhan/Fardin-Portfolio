import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Timeline, TimelineItem } from "@/components/sections/Timeline";
import { EDUCATION, COURSEWORK_TERMS } from "@/data/education";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Fardin Farhan Khan's academic progression from civil engineering through applied statistics and data science to transportation safety.",
};

export default function EducationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Academic timeline"
        description="From civil engineering through applied statistics and data science, toward transportation safety."
      />

      <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 sm:py-24">
        <Timeline>
          {EDUCATION.map((entry, i) => (
            <TimelineItem
              key={entry.degree + entry.institution}
              index={i + 1}
              eyebrow={entry.major ?? "Secondary Education"}
              title={entry.degree}
              subtitle={[entry.institution, entry.department].filter(Boolean).join(" — ")}
              meta={entry.period ?? entry.result}
            >
              <div className="max-w-3xl space-y-3 pb-2">
                {entry.period && entry.result && (
                  <p className="font-mono text-xs text-[var(--color-mist)]">{entry.result}</p>
                )}
                {entry.thesis && (
                  <div className="rounded-lg border border-[var(--color-line)] p-4">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[var(--color-accent)]">
                      Thesis
                    </p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--color-ink)]">
                      {entry.thesis.title}
                    </p>
                    <p className="mt-2 text-xs text-[var(--color-mist)]">
                      Supervisor: {entry.thesis.supervisor}
                    </p>
                  </div>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>

        <Reveal className="mt-20">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
            Coursework
          </p>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {COURSEWORK_TERMS.map((term) => (
              <div key={term.term}>
                <p className="font-display text-sm font-semibold text-[var(--color-ink)]">
                  {term.term}
                </p>
                <ul className="mt-2 flex flex-col gap-1">
                  {term.courses.map((course) => (
                    <li key={course} className="text-xs leading-relaxed text-[var(--color-mist)]">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </>
  );
}
