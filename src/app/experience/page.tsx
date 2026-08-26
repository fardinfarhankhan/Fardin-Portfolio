import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Timeline, TimelineItem } from "@/components/sections/Timeline";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { EXPERIENCE } from "@/data/experience";

const STATS = [
  { value: 50, suffix: "+", label: "EOIs led" },
  { value: 30, suffix: "+", label: "RFPs led" },
  { value: 38, prefix: "~$", suffix: "M", label: "Secured in consultancy assignments" },
];

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

      <div className="mx-auto max-w-[1100px] px-5 pt-16 sm:px-8 sm:pt-24">
        <Reveal className="grid grid-cols-2 gap-8 border-b border-[var(--color-line)] pb-14 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <CountUp
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="font-display text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl"
              />
              <p className="mt-2 text-sm text-[var(--color-mist)]">{stat.label}</p>
            </div>
          ))}
          <div>
            <p className="font-display text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
              $1–120M
            </p>
            <p className="mt-2 text-sm text-[var(--color-mist)]">Project value range</p>
          </div>
        </Reveal>
      </div>

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
              image={role.logo}
              imageFit="contain"
              imageAlt={`${role.organization} logo`}
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
