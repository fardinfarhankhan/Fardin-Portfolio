import Script from "next/script";

const THEME_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export function ThemeScript() {
  // Runs before hydration so there is no flash of the wrong theme.
  // beforeInteractive is explicitly supported from the App Router root
  // layout; the no-before-interactive-script-outside-document rule
  // predates that and doesn't know about app/layout.tsx.
  return (
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script id="theme-init" strategy="beforeInteractive">
      {THEME_SCRIPT}
    </Script>
  );
}
