import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { PROFILE } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Fardin Farhan Khan.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's work on something meaningful." />

      <div className="mx-auto max-w-[900px] px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <div className="flex flex-col divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            <a
              href={`mailto:${PROFILE.email}`}
              className="group flex items-center justify-between py-6 transition-colors hover:text-[var(--color-accent)]"
            >
              <span>
                <span className="block font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-mist)]">
                  Email
                </span>
                <span className="mt-1 block font-display text-xl font-medium text-[var(--color-ink)] group-hover:text-[var(--color-accent)] sm:text-2xl">
                  {PROFILE.email}
                </span>
              </span>
              <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-[var(--color-mist)] transition-colors group-hover:text-[var(--color-accent)]">
                <path d="M3 13 13 3M6 3h7v7" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
              className="group flex items-center justify-between py-6 transition-colors hover:text-[var(--color-accent)]"
            >
              <span>
                <span className="block font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-mist)]">
                  Phone
                </span>
                <span className="mt-1 block font-display text-xl font-medium text-[var(--color-ink)] group-hover:text-[var(--color-accent)] sm:text-2xl">
                  {PROFILE.phone}
                </span>
              </span>
              <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-[var(--color-mist)] transition-colors group-hover:text-[var(--color-accent)]">
                <path d="M3 13 13 3M6 3h7v7" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <div className="flex items-center justify-between py-6">
              <span>
                <span className="block font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-mist)]">
                  Location
                </span>
                <span className="mt-1 block font-display text-xl font-medium text-[var(--color-ink)] sm:text-2xl">
                  {PROFILE.location}
                </span>
              </span>
            </div>
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
          <p className="mt-4 text-xs text-[var(--color-mist)]">
            LinkedIn and additional professional profile links will be added once their exact
            URLs are confirmed.
          </p>
        </Reveal>
      </div>
    </>
  );
}
