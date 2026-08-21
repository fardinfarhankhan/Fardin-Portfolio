import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { AchievementsList } from "@/components/sections/AchievementsList";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Awards, adjudicating experience, leadership, training, and professional milestones for Fardin Farhan Khan.",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="Milestones"
        description="Academic, professional, leadership, and training achievements, grouped by kind."
      />
      <AchievementsList />
    </>
  );
}
