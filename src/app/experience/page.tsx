import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Timeline, TimelineItem } from "@/components/sections/Timeline";
import { EXPERIENCE } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Fardin Farhan Khan's professional career — business development and engineering consulting alongside media, campaign, and event work.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Professional timeline"
        description="Business development and engineering consulting, alongside a parallel track in media, campaigns, and event production."
      />

      <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 sm:py-24">
        <Timeline>
          {EXPERIENCE.map((role, i) => (
            <TimelineItem
              key={role.organization + role.title}
              index={i + 1}
              eyebrow={role.category === "engineering-consulting" ? "Engineering & Consulting" : "Media & Events"}
              title={role.title}
              subtitle={role.organization}
              meta={role.period}
            >
              <div className="max-w-3xl pb-2">
                {role.organizationBlurb && (
                  <p className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
                    {role.organizationBlurb}
                  </p>
                )}
                {role.focus && (
                  <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[var(--color-mist)]">
                    {role.focus}
                  </p>
                )}
                <ul className="mt-4 flex flex-col gap-2">
                  {role.duties.map((duty) => (
                    <li
                      key={duty}
                      className="flex gap-3 text-sm leading-relaxed text-[var(--color-ink-soft)]"
                    >
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </>
  );
}
