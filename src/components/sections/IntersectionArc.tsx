import { Reveal } from "@/components/motion/Reveal";

const STAGES = [
  "Civil Engineering",
  "Transportation",
  "Data & Statistics",
  "Research",
  "Professional Practice",
  "Multidisciplinary Problem Solving",
];

export function IntersectionArc() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-16">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-accent)]">
              A career built at the intersection
            </p>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-[var(--color-ink-soft)] sm:text-xl">
              The path runs from civil engineering fundamentals toward
              transportation systems, the data and statistical methods used
              to understand them, and the research and professional practice
              built around solving problems within them.
            </p>
          </Reveal>

          <Reveal delayMs={120}>
            <ol className="relative flex flex-col gap-0 lg:flex-row lg:items-stretch lg:gap-0">
              {STAGES.map((stage, i) => (
                <li
                  key={stage}
                  className="relative flex flex-1 flex-col gap-3 border-t border-[var(--color-line)] py-5 pl-6 lg:border-t-0 lg:border-l lg:py-0 lg:pl-5 lg:pr-5"
                >
                  <span className="font-mono text-xs text-[var(--color-mist)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-base font-medium leading-snug text-[var(--color-ink)] sm:text-lg">
                    {stage}
                  </span>
                  <span
                    aria-hidden
                    className="absolute -left-[3px] top-5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] lg:top-0"
                  />
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
