import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PagePending } from "@/components/sections/PagePending";

export const metadata: Metadata = {
  title: "Education",
  description: "Degrees, institutions, thesis work, and academic development.",
};

export default function EducationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Academic timeline"
        description="Degrees, institutions, thesis work, and technical training, in progression."
      />
      <PagePending
        note="The academic timeline is built from confirmed degrees, institutions, and thesis work."
        items={["Degrees", "Institutions", "Thesis work", "Training"]}
      />
    </>
  );
}
