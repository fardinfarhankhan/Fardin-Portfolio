export type AchievementCategory =
  | "academic"
  | "professional"
  | "leadership"
  | "award"
  | "training"
  | "adjudicating";

export type Achievement = {
  title: string;
  org?: string;
  year?: string;
  detail?: string;
  category: AchievementCategory;
};

export const ACHIEVEMENTS: Achievement[] = [
  // Awards
  {
    title: "Future Leader",
    org: "Commonwealth Engineers Council",
    detail: "Selected to represent the next generation of engineering leadership.",
    category: "award",
  },
  {
    title: "Aspire Leaders Program, Cohort 3",
    org: "Aspire Institute",
    detail:
      "Nine-week fully virtual global leadership programme founded with Harvard Business School faculty (Harvard University).",
    category: "award",
  },
  {
    title: "Joy Bangla Youth Award",
    org: "Center for Research and Information (CRI)",
    year: "2022",
    detail: "Recognized for a safe-cyberspace campaign.",
    category: "award",
  },
  {
    title: "Winner, Best Campaign Ideation — Digital Khichuri Challenge",
    org: "United Nations Development Programme",
    year: "2021",
    category: "award",
  },
  {
    title: "Plan International Equality Awards",
    year: "2021",
    category: "award",
  },
  {
    title: "70% Scholarship, PTAK Prize",
    org: "Islamic University of Technology",
    year: "2020",
    category: "award",
  },
  {
    title: "Students' Welfare Scholarship (Talentpool, 9th grade)",
    org: "St. Joseph Higher Secondary School",
    year: "2013",
    category: "academic",
  },
  {
    title: "Senior Young Learner",
    org: "British Council",
    detail: "Completed course with High Distinction and promoted to Senior Young Learner.",
    category: "academic",
  },
  {
    title: "UNSW Global Educational Assessment",
    detail: "High Distinction in Mathematics.",
    year: "2010",
    category: "academic",
  },

  // Leadership / professional standing
  {
    title: "Resident Coordinator, National Election Monitoring",
    org: "Commonwealth Secretariat",
    year: "2024 & 2026",
    category: "leadership",
  },

  // Adjudicating experience
  {
    title: "Judge — InnoVerse: Tech Business Pitch Competition",
    org: "IUB Programming Week",
    category: "adjudicating",
  },
  {
    title: "Adjudicator — Parody News Reading",
    org: "7th National English Carnival, NDEC",
    category: "adjudicating",
  },
  {
    title: "Adjudicator — Meme-con",
    org: "DRMC National Art Festival",
    year: "2020",
    category: "adjudicating",
  },
  {
    title: "Meme Expert",
    org: "Notre Dame Art Club presents SPECTRUM 2.0",
    category: "adjudicating",
  },
  {
    title: "Adjudicator — Extempore Speech Segment",
    org: "15th JLRC Language Festival",
    category: "adjudicating",
  },

  // Training
  {
    title: "Integrity and Regulation in Citywide Inclusive Sanitation",
    org: "WIN, ITN-BUET & ESAWAS",
    year: "May 2026",
    detail: "20-hour course focused on integrity, regulation, and city-wide inclusive sanitation through TAPA principles.",
    category: "training",
  },
  {
    title: "Industrial Training Program",
    org: "IUT",
    year: "Sep–Oct 2021",
    detail:
      "Covering structural and RCC building design, road construction, quality control, project planning, river training, and development project implementation. Grade A-.",
    category: "training",
  },
  {
    title: "Waste-to-Energy Technologies for Sustainable Municipal SWM",
    year: "Jun–Jul 2022",
    detail:
      "Specialized training covering waste management strategies and treatment methods including incineration, anaerobic digestion, gasification, pyrolysis, RDF, and landfill-based energy generation.",
    category: "training",
  },
  {
    title: "Industrial Visit — Seven Rings Cement Industry, Kaliganj, Gazipur",
    year: "Nov 2019",
    category: "training",
  },
  {
    title: "Quality Management under FIDIC Contracts",
    org: "FIDIC Academy",
    year: "2026",
    category: "training",
  },
  {
    title: "Fundamentals of Infrastructure Quality Management",
    org: "FIDIC Academy",
    year: "2026",
    category: "training",
  },
  {
    title: "Certified Supply Chain Analyst (CSCA)",
    org: "ISCEA",
    category: "professional",
  },

  // Other personal milestones
  {
    title: "Local Guide, Level 7",
    org: "Google Maps",
    detail: "Reached Level 7 as a Local Guide as part of community building and helping people.",
    category: "professional",
  },
];

/**
 * Shorter course certifications (Udemy and similar micro-credentials),
 * shown as a compact list rather than individual achievement cards.
 */
export const COURSE_CERTIFICATIONS: string[] = [
  "Deep Learning for Beginners",
  "Geospatial Foundations & Vector Analysis",
  "R for Researchers: Statistics, Visualization and Data Analysis",
  "Geospatial AI: Deep Learning for Satellite Imagery",
  "Coding the Brain: AI & Machine Learning for BCIs",
  "Product Management for AI & Data Science",
  "Advanced WordPress Course for Professionals",
  "The Executive Blueprint for AI Leadership",
  "Facial Recognition Using TensorFlow and Teachable Machine",
  "Real World Machine Learning Project in Python",
  "Machine Learning & Python Data Science for Business and AI",
  "Complete Guide to Python Data Analysis with Real Datasets",
  "Working with Project Managers & Project Sponsors",
  "Developing Business Partnerships: The Complete Guide",
  "Strategic Partnership and Collaborations",
  "Business Operations Transformation with Generative AI",
  "BMS Global Introductory Guide",
  "IT Security Refresher Training",
  "Writing Articles",
  "Event Planning Foundations",
  "Time Management",
  "Stress Management",
  "Graphics Design Fundamentals",
  "Relationship Development",
  "Business Analysis Foundations",
  "Entrepreneurship Foundations",
  "Teamwork Foundations",
  "Conflict Management",
  "Project Management",
  "Content Marketing: Videos",
  "Critical Thinking",
  "Social Media Marketing",
  "COVID-19: Operational Planning Guidelines",
  "Digital Security Essentials",
  "Google Analytics",
  "Digital Marketing: Campaign Planning",
  "Microsoft Excel Basics",
];
