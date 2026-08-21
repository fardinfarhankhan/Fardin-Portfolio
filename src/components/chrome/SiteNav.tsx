"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_ROUTES, SITE_NAME } from "@/lib/routes";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-paper)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-[0.95rem] font-semibold tracking-tight text-[var(--color-ink)]"
        >
          {SITE_NAME}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_ROUTES.map((route) => {
            const active =
              pathname === route.href || pathname.startsWith(`${route.href}/`);
            return (
              <Link
                key={route.href}
                href={route.href}
                aria-current={active ? "page" : undefined}
                className={`relative px-3 py-2 font-mono text-[0.7rem] uppercase tracking-[0.08em] transition-colors ${
                  active
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-mist)] hover:text-[var(--color-ink)]"
                }`}
              >
                {route.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-[var(--color-accent)]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] lg:hidden"
          >
            <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              {open ? (
                <path
                  d="M5 5l14 14M19 5 5 19"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`grid overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-paper)] transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <nav aria-label="Mobile" className="min-h-0 overflow-hidden">
          <ul className="flex flex-col px-5 py-2">
            {NAV_ROUTES.map((route) => {
              const active =
                pathname === route.href || pathname.startsWith(`${route.href}/`);
              return (
                <li key={route.href} className="border-b border-[var(--color-line)]/60">
                  <Link
                    href={route.href}
                    aria-current={active ? "page" : undefined}
                    className={`block py-3.5 font-display text-lg ${
                      active ? "text-[var(--color-accent)]" : "text-[var(--color-ink)]"
                    }`}
                  >
                    {route.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
