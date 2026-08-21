type PagePendingProps = {
  note: string;
  items?: string[];
};

/**
 * Honest placeholder for a page whose content depends on source
 * material (the original site, CV, or project archive) not yet
 * available to build against. No invented facts — see BuildingNotice.
 */
export function PagePending({ note, items }: PagePendingProps) {
  return (
    <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
      <div className="rounded-2xl border border-dashed border-[var(--color-line)] px-6 py-10 sm:px-12 sm:py-14">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-mist)]">
          In progress
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
          {note}
        </p>
        {items && items.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-[var(--color-line)] px-3 py-1 font-mono text-xs text-[var(--color-mist)]"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
