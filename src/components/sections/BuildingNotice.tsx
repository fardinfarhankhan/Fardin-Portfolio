import { Reveal } from "@/components/motion/Reveal";

/**
 * Placeholder for content-dependent sections (Selected Work, Research,
 * Experience, Data + Methods) that require verified source material —
 * the CV, project archive, and confirmed research interests — before
 * they can be built without inventing facts. Remove once real content
 * lands.
 */
export function BuildingNotice() {
  return (
    <section className="bg-[var(--color-surface)] py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <div className="rounded-2xl border border-dashed border-[var(--color-line)] px-6 py-10 sm:px-12 sm:py-14">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
              In progress
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
              Selected work, the research map, the professional timeline, and
              the data &amp; methods toolkit are being assembled from verified
              source material and will appear here next.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
