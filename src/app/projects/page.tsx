import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Reveal } from "@/components/motion/Reveal";
import { PROJECTS, PROJECT_GROUPS } from "@/data/projects";

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
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-soft)]">
              Organizations and institutions I&rsquo;ve worked with across transportation, infrastructure,
              development, research and business.
            </p>
            <ClientLogos />
          </Reveal>
        </div>
      </div>
    </>
  );
}
