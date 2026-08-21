import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { Reveal } from "@/components/motion/Reveal";
import { PROJECTS, PROJECT_GROUPS, BRAND_AFFILIATIONS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A filterable archive of Fardin Farhan Khan's transportation, engineering, research, and multidisciplinary project work.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Project archive"
        description={`${PROJECTS.length} projects spanning transportation infrastructure, engineering consulting, and media, campaign, and event work.`}
      />

      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20">
        <ProjectGrid projects={PROJECTS} groups={PROJECT_GROUPS} />
      </div>

      <div className="border-t border-[var(--color-line)] bg-[var(--color-surface)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
              Organizations & clients
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {BRAND_AFFILIATIONS.map((org) => (
                <li key={org} className="text-sm text-[var(--color-ink-soft)]">
                  {org}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </>
  );
}
