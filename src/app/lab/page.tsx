import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PagePending } from "@/components/sections/PagePending";

export const metadata: Metadata = {
  title: "Lab",
  description: "A visual overview of analytical and technical capabilities.",
};

export default function LabPage() {
  return (
    <>
      <PageHeader
        eyebrow="Lab / Methods"
        title="Toolkit"
        description="Statistical, machine learning, transportation, engineering, and professional tools — shown only where supported by confirmed experience."
      />
      <PagePending
        note="Tools and methods are listed only where supported by the current CV or portfolio material — nothing here is assumed from a role title."
        items={["Statistical", "Machine Learning", "Transportation", "Engineering", "Professional"]}
      />
    </>
  );
}
