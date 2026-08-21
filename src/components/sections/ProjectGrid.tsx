"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Project, ProjectGroup } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { transition } from "@/lib/motion";

function GroupSection({ group, projects, startIndex }: { group: ProjectGroup; projects: Project[]; startIndex: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 border-b border-[var(--color-line)] pb-3">
        <h3 className="font-display text-lg font-semibold text-[var(--color-ink)] sm:text-xl">{group}</h3>
        <span className="font-mono text-xs text-[var(--color-mist)]">
          {projects.length} project{projects.length === 1 ? "" : "s"}
        </span>
      </div>
      <div className="grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={startIndex + i + 1} />
        ))}
      </div>
    </div>
  );
}

export function ProjectGrid({
  projects,
  groups,
}: {
  projects: Project[];
  groups: ProjectGroup[];
}) {
  const [active, setActive] = useState<ProjectGroup | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.group === active)),
    [projects, active]
  );

  const sections = useMemo(() => {
    const withItems = groups
      .map((group) => ({ group, items: filtered.filter((p) => p.group === group) }))
      .filter((section) => section.items.length > 0);
    return withItems.reduce<{ group: ProjectGroup; items: Project[]; startIndex: number }[]>(
      (acc, section) => {
        const startIndex = acc.length ? acc[acc.length - 1].startIndex + acc[acc.length - 1].items.length : 0;
        acc.push({ ...section, startIndex });
        return acc;
      },
      []
    );
  }, [filtered, groups]);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2 border-b border-[var(--color-line)] pb-8"
      >
        {(["All", ...groups] as const).map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={isActive}
              className={`relative rounded-full border px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.06em] transition-colors ${
                isActive
                  ? "border-[var(--color-accent)] text-[var(--color-accent-ink)]"
                  : "border-[var(--color-line)] text-[var(--color-mist)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="filter-indicator"
                  className="absolute inset-0 -z-10 rounded-full bg-[var(--color-accent)]"
                  transition={transition.spring}
                />
              )}
              {cat}
            </button>
          );
        })}
      </div>

      <p className="mt-6 font-mono text-xs text-[var(--color-mist)]">
        {filtered.length} project{filtered.length === 1 ? "" : "s"}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition.section}
          className="mt-2 flex flex-col gap-12"
        >
          {active === "All"
            ? sections.map(({ group, items, startIndex }) => (
                <GroupSection key={group} group={group} projects={items} startIndex={startIndex} />
              ))
            : (
                <div className="grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
                  {filtered.map((project, i) => (
                    <ProjectCard key={project.slug} project={project} index={i + 1} />
                  ))}
                </div>
              )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
