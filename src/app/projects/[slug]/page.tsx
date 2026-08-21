import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Project",
};

// No project data exists yet — every slug 404s until the project
// archive (src/data/projects.ts) is populated from verified source
// material. See PROJECTS_ARCHIVE_TODO in src/data/projects.ts.
export function generateStaticParams() {
  return [];
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await params;
  notFound();
}
