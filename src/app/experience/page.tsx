import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PagePending } from "@/components/sections/PagePending";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional career and roles, presented as an interactive timeline.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Professional timeline"
        description="Roles, organizations, and major projects — in chronological order."
      />
      <PagePending
        note="The interactive career timeline is built from confirmed employment history, with exact roles, organizations, and dates."
        items={["Roles", "Organizations", "Dates", "Major projects"]}
      />
    </>
  );
}
