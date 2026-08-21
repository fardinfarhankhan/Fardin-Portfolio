export type EducationEntry = {
  degree: string;
  major?: string;
  institution: string;
  department?: string;
  period?: string;
  result?: string;
  thesis?: {
    title: string;
    supervisor: string;
  };
  detail?: string;
};

/**
 * In reverse-chronological order (most recent progression first),
 * matching the CV. Dates are given where the formatted CV specifies
 * them; the narrative bio's education list didn't repeat every date,
 * so some entries carry only "Result" instead of a period.
 */
export const EDUCATION: EducationEntry[] = [
  {
    degree: "Master of Engineering (M.Engg.)",
    major: "Transportation Safety",
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    department: "Accident Research Institute (ARI)",
    period: "May 2026 – Present",
  },
  {
    degree: "Master of Science (M.Sc.)",
    major: "Applied Statistics and Data Science",
    institution: "Jahangirnagar University",
    department: "Department of Statistics and Data Science",
    period: "Jan 2025 – Jun 2026",
    result: "CGPA 3.71 / 4.00",
    thesis: {
      title:
        "From Road to Rail: Behavioural Determinants of Mode Shift and Corridor Prioritization for Sustainable Rail Development",
      supervisor: "Professor Md. Asraful Alam, Department of Statistics and Data Science",
    },
  },
  {
    degree: "Bachelor of Science (B.Sc.)",
    major: "Civil Engineering",
    institution: "Islamic University of Technology (IUT)",
    department: "Department of Civil & Environmental Engineering",
    period: "Jan 2017 – May 2022",
    result: "CGPA 3.34 / 4.00",
    thesis: {
      title: "Investigating Trip Generation Behaviour During Medical Emergencies in Bangladesh",
      supervisor: "Dr. Moinul Hossain, Professor, Islamic University of Technology",
    },
  },
  {
    degree: "Higher Secondary Certificate Examination",
    institution: "Notre Dame College",
    result: "GPA 5.00 / 5.00",
  },
  {
    degree: "Secondary School Certificate Examination",
    institution: "St. Joseph Higher Secondary School",
    result: "GPA 5.00 / 5.00",
  },
];

/**
 * B.Sc. Civil Engineering coursework at IUT, by term, as listed on the
 * original site / CV. Kept separate from EDUCATION so the education
 * page can show it as expandable detail rather than cluttering the
 * timeline itself.
 */
export const COURSEWORK_TERMS: { term: string; courses: string[] }[] = [
  {
    term: "Term I",
    courses: [
      "CEE 4101 – Introduction to Civil Engineering",
      "CEE 4102 – Civil Engineering Drawing I",
      "CEE 4103 – Surveying",
      "CHEM 4153 – Chemistry I",
      "CHEM 4154 – Chemistry Lab",
      "HUM 4152 – Arabic I",
      "HUM 4157 – Islamiat",
      "MCE 4194 – Workshop Practice",
      "MATH 4153 – Differential and Integral Calculus, Matrix",
      "PHYS 4153 – Physics I",
      "PHYS 4154 – Physics I Lab",
    ],
  },
  {
    term: "Term II",
    courses: [
      "CEE 4201 – Analytic Mechanics",
      "CEE 4202 – Civil Engineering Drawing II",
      "CEE 4204 – Practical Surveying",
      "CHEM 4253 – Chemistry II",
      "CHEM 4254 – Chemistry II Lab",
      "HUM 4252 – Arabic II",
      "GS 4253 – Ecology and Environment",
      "HUM 4257 – Islamic History, Science and Culture",
      "MATH 4253 – Vector Algebra, Vector Calculus, ODE",
      "PHYS 4253 – Physics II",
      "PHYS 4254 – Physics II Lab",
    ],
  },
  {
    term: "Term III",
    courses: [
      "CEE 4311 – Mechanics of Solids I",
      "CEE 4312 – Mechanics of Solids Lab",
      "CEE 4361 – Fluid Mechanics",
      "CEE 4362 – Fluid Mechanics Lab",
      "EEE 4385 – Electrical and Electronic Technology",
      "EEE 4386 – Electrical and Electronic Technology Lab",
      "GS 4351 – Engineering Geology and Geomorphology",
      "GS 4353 – Numerical Methods and Computer Programming",
      "GS 4354 – Computer Programming and Application Lab",
      "MATH 4353 – Laplace Transformation, Series, PDE",
    ],
  },
  {
    term: "Term IV",
    courses: [
      "CEE 4411 – Engineering Materials and Concrete Technology",
      "CEE 4412 – Engineering Materials and Concrete Technology Lab",
      "CEE 4413 – Mechanics of Solid",
      "CEE 4431 – Water Supply Engineering",
      "CEE 4432 – Environmental Engineering Sessional I",
      "CEE 4441 – Soil Mechanics",
      "CEE 4442 – Soil Mechanics Lab",
      "HUM 4459 – Science, Technology and Islam",
      "MATH 4453 – Probability and Statistics",
    ],
  },
  {
    term: "Term V",
    courses: [
      "CEE 4511 – Design of Concrete Structure I",
      "CEE 4513 – Structure Analysis and Design I",
      "CEE 4543 – Foundation Engineering",
      "CEE 4551 – Transportation and Traffic Engineering",
      "CEE 4563 – Hydrology",
      "CEE 4565 – Open Channel Flow",
      "CEE 4566 – Open Channel Flow Lab",
      "HUM 4552 – Technical Report Writing and Presentation",
    ],
  },
  {
    term: "Term VI",
    courses: [
      "CEE 4611 – Design of Concrete Structures II",
      "CEE 4612 – Design of Concrete Structures Sessional I",
      "CEE 4614 – Structural Analysis and Design Sessional",
      "CEE 4633 – Wastewater Engineering and Environmental Sanitation",
      "CEE 4634 – Environmental Engineering Sessional II",
      "CEE 4652 – Transportation Engineering Sessional I",
      "CEE 4653 – Pavement Design and Railway Engineering",
      "CEE 4655 – Civil Engineering Data Analysis",
      "HUM 4651 – Project Planning and Management",
      "HUM 4659 – Technology, Environment and Society",
    ],
  },
  {
    term: "Term VII",
    courses: [
      "CEE 4700 – Project and Thesis I",
      "CEE 4708 – Quantity Surveying",
      "CEE 4711 – Structural Analysis and Design II",
      "CEE 4712 – Structural Analysis and Design Sessional",
      "CEE 4713 – Design of Steel Structures",
      "CEE 4735 – Environmental Pollution and Its Control",
      "CEE 4769 – River Engineering and Flood Mitigation",
      "CEE 4790 – Industrial Training",
      "HUM 4753 – Engineering Economics and Accounting",
    ],
  },
  {
    term: "Term VIII",
    courses: [
      "CEE 4800 – Project & Thesis II",
      "CEE 4806 – Final Year Design Project",
      "CEE 4807 – Socioeconomic Aspects of Development Projects",
      "CEE 4816 – Details of Construction II",
      "CEE 4831 – Environmental and Social Impact Assessment",
      "CEE 4835 – Environmental Modeling",
      "CEE 4853 – Public Transportation System",
      "CEE 4854 – Transportation Engineering Sessional II",
      "HUM 4851 – Practice, Communication, and Professional Ethics",
    ],
  },
  {
    term: "M.Sc. Applied Statistics & Data Science (JU)",
    courses: [
      "Statistical Methods",
      "Probability and Probability Distributions",
      "Sampling Methodology",
      "Introduction to Data Science with Python",
      "Statistical Inference",
      "Research Methodology",
      "Multivariate Analysis",
      "Data Mining",
      "Time Series Analysis and Forecasting",
      "Machine Learning for Data Science",
      "Categorical Data Analysis",
      "Big Data",
    ],
  },
  {
    term: "M.Engg. Transportation Safety (BUET, ARI)",
    courses: ["Safety Data Analysis and Modeling I", "Fundamentals of Road Safety"],
  },
];
