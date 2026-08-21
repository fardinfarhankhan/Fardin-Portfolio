import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PagePending } from "@/components/sections/PagePending";

export const metadata: Metadata = {
  title: "Field Notes",
  description: "Research ideas, observations, and writing.",
};

export default function FieldNotesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Field Notes"
        title="Insights"
        description="Research ideas, observations, and writing — added as they exist."
      />
      <PagePending note="No entries yet. This section will hold future research notes and articles as they're written." />
    </>
  );
}
