"use client";

import { useMemo, useState } from "react";
import { RESEARCH_INTERESTS, PUBLICATIONS, THESES, type ResearchTopic } from "@/data/research";

type RelatedWork = { label: string; kind: "Publication" | "Thesis" };

function relatedWorkFor(topic: ResearchTopic | null): RelatedWork[] {
  if (!topic) return [];
  const pubs = PUBLICATIONS.filter((p) => p.topics.includes(topic)).map((p) => ({
    label: p.citation.split("—")[1]?.trim() ?? p.citation,
    kind: "Publication" as const,
  }));
  const theses = THESES.filter((t) => t.topics.includes(topic)).map((t) => ({
    label: t.title,
    kind: "Thesis" as const,
  }));
  return [...theses, ...pubs];
}

/** Two topics are "connected" if they co-occur on the same publication or thesis. */
function connectedTopicsFor(topic: ResearchTopic): Set<ResearchTopic> {
  const set = new Set<ResearchTopic>();
  for (const item of [...PUBLICATIONS, ...THESES]) {
    if (item.topics.includes(topic)) {
      for (const t of item.topics) if (t !== topic) set.add(t);
    }
  }
  return set;
}

export function ResearchMap() {
  const [active, setActive] = useState<ResearchTopic | null>(null);
  const related = relatedWorkFor(active);
  const connected = useMemo(() => (active ? connectedTopicsFor(active) : new Set<ResearchTopic>()), [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5" onMouseLeave={() => setActive(null)}>
        {RESEARCH_INTERESTS.map((topic) => {
          const isActive = active === topic;
          const isConnected = connected.has(topic);
          const isDimmed = active !== null && !isActive && !isConnected;
          return (
            <button
              key={topic}
              type="button"
              onMouseEnter={() => setActive(topic)}
              onFocus={() => setActive(topic)}
              onBlur={() => setActive(null)}
              onClick={() => setActive(isActive ? null : topic)}
              aria-pressed={isActive}
              style={{ opacity: isDimmed ? 0.4 : 1 }}
              className={`rounded-full border px-4 py-2 text-left text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "scale-[1.04] border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-accent-ink)]"
                  : isConnected
                    ? "border-[var(--color-accent)] text-[var(--color-ink)]"
                    : "border-[var(--color-line)] text-[var(--color-ink-soft)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }`}
            >
              {topic}
            </button>
          );
        })}
      </div>

      <div
        className={`mt-6 grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
          active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-accent)]">
              Related work {active ? `— ${active}` : ""}
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {related.map((item) => (
                <li key={item.label} className="flex gap-3 text-sm text-[var(--color-ink-soft)]">
                  <span className="shrink-0 font-mono text-[0.65rem] uppercase tracking-[0.06em] text-[var(--color-mist)]">
                    {item.kind}
                  </span>
                  {item.label}
                </li>
              ))}
              {related.length === 0 && active && (
                <li className="text-sm text-[var(--color-mist)]">
                  No published work tagged to this interest yet.
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
