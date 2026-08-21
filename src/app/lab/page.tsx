import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { SOFTWARE_SKILLS, PROFESSIONAL_SKILLS } from "@/data/skills";
import { RESEARCH_SKILLS } from "@/data/research";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Fardin Farhan Khan's analytical, transportation, engineering, and professional toolkit.",
};

const CLUSTERS = [
  { group: "Statistical & Econometric", items: RESEARCH_SKILLS[0].items },
  { group: "Machine Learning & Explainable AI", items: RESEARCH_SKILLS[1].items },
  {
    group: "Transportation",
    items: [...RESEARCH_SKILLS[2].items, ...SOFTWARE_SKILLS[1].items],
  },
  { group: "Engineering Software", items: SOFTWARE_SKILLS[0].items },
  { group: "Programming & Research Software", items: RESEARCH_SKILLS[3].items },
  { group: "Professional", items: PROFESSIONAL_SKILLS },
];

export default function LabPage() {
  return (
    <>
      <PageHeader
        eyebrow="Lab / Methods"
        title="Toolkit"
        description="Statistical, machine learning, transportation, engineering, and professional tools drawn directly from confirmed experience."
      />

      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {CLUSTERS.map((cluster, i) => (
            <Reveal key={cluster.group} delayMs={i * 60}>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--color-accent)]">
                {cluster.group}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cluster.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--color-line)] px-3 py-1.5 text-sm text-[var(--color-ink-soft)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
