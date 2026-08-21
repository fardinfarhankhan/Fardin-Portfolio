import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { PROFILE } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Fardin Farhan Khan.",
};

const ArrowIcon = () => (
  <svg
    aria-hidden
    viewBox="0 0 16 16"
    className="h-4 w-4 shrink-0 text-[var(--color-mist)] transition-colors group-hover:text-[var(--color-accent)]"
  >
    <path d="M3 13 13 3M6 3h7v7" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function ContactRow({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <span>
        <span className="block font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-mist)]">
          {label}
        </span>
        <span className="mt-1 block font-display text-xl font-medium text-[var(--color-ink)] group-hover:text-[var(--color-accent)] sm:text-2xl">
          {value}
        </span>
      </span>
      {href && <ArrowIcon />}
    </>
  );

  if (!href) {
    return <div className="flex items-center justify-between py-6">{content}</div>;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className="group flex items-center justify-between py-6 transition-colors hover:text-[var(--color-accent)]"
    >
      {content}
    </a>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's work on something meaningful." />

      <div className="mx-auto max-w-[900px] px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <div className="flex flex-col divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            <ContactRow label="Email" value={PROFILE.email} href={`mailto:${PROFILE.email}`} />
            <ContactRow
              label="Phone"
              value={PROFILE.phone}
              href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
            />
            <ContactRow
              label="LinkedIn"
              value="linkedin.com/in/fardinkhan03"
              href={PROFILE.social.linkedin}
              external
            />
            <ContactRow
              label="ResearchGate"
              value="researchgate.net/profile/Fardin-Khan"
              href={PROFILE.social.researchgate}
              external
            />
            <ContactRow
              label="Facebook"
              value="facebook.com/TehBaittaGoat"
              href={PROFILE.social.facebook}
              external
            />
            <ContactRow label="Location" value={PROFILE.location} />
          </div>
        </Reveal>

        <Reveal delayMs={100} className="mt-10">
          <a
            href={PROFILE.cvUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Download full CV
            <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5">
              <path
                d="M8 2v9M4.5 8 8 11.5 11.5 8M3 14h10"
                stroke="currentColor"
                strokeWidth="1.4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </Reveal>
      </div>
    </>
  );
}
