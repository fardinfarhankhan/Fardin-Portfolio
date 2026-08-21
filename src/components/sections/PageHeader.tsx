type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-[var(--color-line)] bg-[var(--color-hero-bg)] px-5 pb-14 pt-32 sm:px-8 sm:pb-20">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-[var(--color-hero-fg)]/55">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[var(--color-hero-fg)] sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-hero-fg)]/65 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
