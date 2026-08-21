import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PagePending } from "@/components/sections/PagePending";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Fardin Farhan Khan.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's work on something meaningful." />
      <PagePending note="Contact links (email, LinkedIn, and any other verified professional profiles) will appear here once confirmed — no placeholder or guessed links." />
    </>
  );
}
