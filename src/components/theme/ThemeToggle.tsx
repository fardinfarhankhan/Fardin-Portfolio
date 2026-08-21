"use client";

import { useRef } from "react";
import { useTheme } from "./ThemeProvider";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> };
};

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    const el = buttonRef.current;
    const doc = document as ViewTransitionDocument;

    if (!el || !doc.startViewTransition) {
      toggleTheme();
      return;
    }

    const rect = el.getBoundingClientRect();
    document.documentElement.style.setProperty("--theme-toggle-x", `${rect.left + rect.width / 2}px`);
    document.documentElement.style.setProperty("--theme-toggle-y", `${rect.top + rect.height / 2}px`);

    doc.startViewTransition(() => {
      toggleTheme();
    });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleClick}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]"
    >
      <span className="sr-only">Toggle color theme</span>
      {theme === "dark" ? (
        <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
          <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.4 5.6l-1.55 1.55M7.15 16.85 5.6 18.4M18.4 18.4l-1.55-1.55M7.15 7.15 5.6 5.6" />
          </g>
        </svg>
      ) : (
        <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path
            d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
