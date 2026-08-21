import Link from "next/link";
import { NAV_ROUTES, SITE_NAME, SITE_TAGLINE } from "@/lib/routes";
import { NetworkCanvas } from "@/components/visual/NetworkCanvas";
import { PROFILE } from "@/data/profile";

const SOCIAL_LINKS = [
  { label: "Email", href: `mailto:${PROFILE.email}` },
  { label: "LinkedIn", href: PROFILE.social.linkedin },
  { label: "ResearchGate", href: PROFILE.social.researchgate },
  { label: "Facebook", href: PROFILE.social.facebook },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-surface)]">
      <NetworkCanvas
        className="pointer-events-none absolute inset-0 opacity-70"
        density={26000}
        minNodes={10}
        maxNodes={26}
        interactive={false}
        lineOpacity={0.35}
        nodeOpacity={0.6}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-[var(--color-ink)]">
              {SITE_NAME}
            </p>
            <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-[var(--color-mist)]">
              {SITE_TAGLINE}
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 sm:flex sm:flex-wrap sm:gap-x-6">
            {NAV_ROUTES.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-sm text-[var(--color-mist)] transition-colors hover:text-[var(--color-accent)]"
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-6 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-mist)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {SITE_NAME}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label === "Email" ? undefined : "_blank"}
                rel={social.label === "Email" ? undefined : "noreferrer noopener"}
                className="transition-colors hover:text-[var(--color-accent)]"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
