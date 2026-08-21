import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PagePending } from "@/components/sections/PagePending";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who Fardin Farhan Khan is, what he works on, and how transportation, data, and research connect across his career.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="I work at the intersection of transportation, data, infrastructure and human behaviour."
      />
      <PagePending
        note="A fuller narrative — the progression across civil engineering, transportation, data and statistics, research, and professional practice — is being written from verified biographical material."
        items={["Biography", "Research interests", "Academic background", "Professional focus"]}
      />
    </>
  );
}
