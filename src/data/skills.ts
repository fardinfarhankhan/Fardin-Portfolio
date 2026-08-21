export type SkillCluster = {
  group: string;
  items: string[];
};

/**
 * Software / methods proficiency, as listed on the CV. Kept separate
 * from research.ts's RESEARCH_SKILLS (which covers methods, not
 * software) — this file is the /lab page's software toolkit.
 */
export const SOFTWARE_SKILLS: SkillCluster[] = [
  {
    group: "Engineering Software",
    items: ["AutoCAD 2D/3D", "ETABS", "SAP", "Abaqus", "Plaxis", "SPSS"],
  },
  {
    group: "Transportation Simulation",
    items: ["CUBE", "SUMO", "Biogeme", "Genie", "STATA"],
  },
  {
    group: "Programming",
    items: ["Python", "R", "SQL"],
  },
  {
    group: "Office",
    items: ["MS Word", "MS Excel", "MS PowerPoint", "MS Project"],
  },
  {
    group: "Creative",
    items: ["Adobe Illustrator", "Adobe Photoshop", "Adobe Premiere Pro", "Snapseed"],
  },
];

export const PROFESSIONAL_SKILLS: string[] = [
  "Proposal writing & tender preparation",
  "Market analysis",
  "Project coordination",
  "Stakeholder engagement",
  "Business development",
  "Quality assurance & donor compliance",
];
