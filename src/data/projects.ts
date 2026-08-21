/**
 * Project archive data.
 *
 * TODO(content): populate from the verified project portfolio (the
 * original site's Projects section, plus any newer material). Do not
 * invent clients, dates, roles, or outcomes — leave a field undefined
 * rather than guess. Once this array is populated, wire it into
 * src/app/projects/page.tsx (grid + filters) and
 * src/app/projects/[slug]/page.tsx (detail template).
 */
export type ProjectCategory =
  | "Transportation"
  | "Engineering"
  | "Research"
  | "Development"
  | "Consulting"
  | "Events"
  | "Media"
  | "Digital"
  | "Campaigns"
  | "International Development";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  client?: string;
  role: string;
  sector: ProjectCategory[];
  summary: string;
  overview: string;
  contribution: string;
  scope?: string[];
  outcomes?: string[];
  gallery?: ProjectImage[];
  coverImage?: ProjectImage;
};

export const PROJECTS: Project[] = [];
