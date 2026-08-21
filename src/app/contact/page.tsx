import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/ContactHero";
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

const iconWrapClass =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-mist)] transition-colors group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)]";

const EmailIcon = () => (
  <span aria-hidden className={iconWrapClass}>
    <svg viewBox="0 0 20 20" className="h-4 w-4">
      <path
        d="M3 5.5h14v9H3z"
        stroke="currentColor"
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m3.5 6 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const PhoneIcon = () => (
  <span aria-hidden className={iconWrapClass}>
    <svg viewBox="0 0 20 20" className="h-4 w-4">
      <path
        d="M5 3h2.5l1 3.5-1.6 1.4a9 9 0 0 0 5.2 5.2l1.4-1.6 3.5 1v2.5a1.5 1.5 0 0 1-1.6 1.5A13.5 13.5 0 0 1 3.5 4.6 1.5 1.5 0 0 1 5 3Z"
        stroke="currentColor"
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const LinkedInIcon = () => (
  <span aria-hidden className={iconWrapClass}>
    <svg viewBox="0 0 20 20" className="h-4 w-4">
      <rect x="3" y="3" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <path d="M6.7 8.5v5M6.7 6.6v.02M9.4 13.5v-3a1.7 1.7 0 0 1 3.4 0v3" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const ResearchGateIcon = () => (
  <span aria-hidden className={iconWrapClass}>
    <svg viewBox="0 0 20 20" className="h-4 w-4">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <path d="M7.2 12.5V7.8h2c1 0 1.7.5 1.7 1.4 0 .8-.5 1.3-1.2 1.4l1.4 2" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const FacebookIcon = () => (
  <span aria-hidden className={iconWrapClass}>
    <svg viewBox="0 0 20 20" className="h-4 w-4">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <path d="M11.5 7.5h-1a1 1 0 0 0-1 1V10H7.8v1.8H9.5V15h1.8v-3.2h1.5l.3-1.8h-1.8V8.7a.3.3 0 0 1 .3-.3h1.5z" fill="currentColor" />
    </svg>
  </span>
);

const LocationIcon = () => (
  <span aria-hidden className={iconWrapClass}>
    <svg viewBox="0 0 20 20" className="h-4 w-4">
      <path
        d="M10 17.5s5.5-4.7 5.5-9A5.5 5.5 0 0 0 4.5 8.5c0 4.3 5.5 9 5.5 9Z"
        stroke="currentColor"
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="8.5" r="1.8" stroke="currentColor" strokeWidth="1.3" fill="none" />
    </svg>
  </span>
);

function ContactRow({
  label,
  value,
  href,
  external,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon: React.ReactNode;
}) {
  const content = (
    <>
      <span className="flex items-center gap-4">
        {icon}
        <span>
          <span className="block font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-mist)]">
            {label}
          </span>
          <span className="mt-1 block font-display text-xl font-medium text-[var(--color-ink)] group-hover:text-[var(--color-accent)] sm:text-2xl">
            {value}
          </span>
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
      <ContactHero title="Let's work on something meaningful." />

      <div className="mx-auto max-w-[900px] px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <div className="flex flex-col divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            <ContactRow label="Email" value={PROFILE.email} href={`mailto:${PROFILE.email}`} icon={<EmailIcon />} />
            <ContactRow
              label="Phone"
              value={PROFILE.phone}
              href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
              icon={<PhoneIcon />}
            />
            <ContactRow
              label="LinkedIn"
              value="linkedin.com/in/fardinkhan03"
              href={PROFILE.social.linkedin}
              external
              icon={<LinkedInIcon />}
            />
            <ContactRow
              label="ResearchGate"
              value="researchgate.net/profile/Fardin-Khan"
              href={PROFILE.social.researchgate}
              external
              icon={<ResearchGateIcon />}
            />
            <ContactRow
              label="Facebook"
              value="facebook.com/TehBaittaGoat"
              href={PROFILE.social.facebook}
              external
              icon={<FacebookIcon />}
            />
            <ContactRow label="Location" value={PROFILE.location} icon={<LocationIcon />} />
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
