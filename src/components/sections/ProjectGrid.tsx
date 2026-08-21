"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Project, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { transition } from "@/lib/motion";

export function ProjectGrid({
  projects,
  categories,
}: {
  projects: Project[];
  categories: ProjectCategory[];
}) {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.sector.includes(active))),
    [projects, active]
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2 border-b border-[var(--color-line)] pb-8"
      >
        {(["All", ...categories] as const).map((cat) => {
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

      <motion.div layout className="mt-2 grid sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ...transition.section, delay: (i % 6) * 0.03 }}
            >
              <ProjectCard project={project} index={i + 1} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
