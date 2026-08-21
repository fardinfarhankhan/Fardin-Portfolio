import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PagePending } from "@/components/sections/PagePending";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research interests, methodology, and academic work at the intersection of transportation, data science, and infrastructure.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="A researcher's working map"
        description="Thematic research clusters, methodology, and academic work — organized once confirmed against verified source material."
      />
      <PagePending
        note="Research clusters and a connected research map are being built from confirmed research interests, coursework, and academic projects — not assumed from job titles."
        items={["Research clusters", "Methodology", "Research journey"]}
      />
    </>
  );
}
