import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PagePending } from "@/components/sections/PagePending";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A searchable, filterable archive of Fardin Farhan Khan's transportation, engineering, research, and multidisciplinary project work.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Project archive"
        description="A filterable archive spanning transportation, engineering, research, consulting, and multidisciplinary project work."
      />
      <PagePending
        note="Each project — role, sector, scope, outcomes, and imagery — is being rebuilt from the original project portfolio, with filtering by category once every project is classified against real content."
        items={[
          "Transportation",
          "Engineering",
          "Research",
          "Development",
          "Consulting",
          "Events",
          "Media",
          "Digital",
          "International Development",
        ]}
      />
    </>
  );
}
