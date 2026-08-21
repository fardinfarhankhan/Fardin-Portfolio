import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PagePending } from "@/components/sections/PagePending";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Awards, leadership, and professional milestones.",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="Milestones"
        description="Academic, professional, leadership, and training achievements."
      />
      <PagePending
        note="Achievements are listed only once verified — year, title, and issuing institution or organization."
        items={["Academic", "Professional", "Leadership", "Awards", "Training"]}
      />
    </>
  );
}
