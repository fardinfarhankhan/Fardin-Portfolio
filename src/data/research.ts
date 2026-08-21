export const RESEARCH_INTERESTS = [
  "Transportation Systems Analysis",
  "Travel Behaviour Modelling",
  "Machine Learning for Transportation",
  "Road Safety Analytics",
  "Public Transit Planning",
  "Explainable AI",
  "Sustainable Mobility",
  "Transport Policy",
] as const;

export type ResearchTopic = (typeof RESEARCH_INTERESTS)[number];

export type Publication = {
  citation: string;
  status: string;
  role: "First author" | "Co-author" | "Author";
  summary: string;
  topics: ResearchTopic[];
};

export const PUBLICATIONS: Publication[] = [
  {
    citation:
      "Khan, F. F., Rishan, M. F., Masnun, M. R., & Tusher, M. S. R. — Behavioural Determinants of Intercity Rail Mode Choice in Bangladesh: Evidence from a Stated Preference Survey and Explainable Machine Learning",
    status: "Under Review, ICACE 2026",
    role: "First author",
    summary:
      "Stated-preference survey of 3,991 passengers across nine corridors; integrates classical hypothesis testing with logistic regression and gradient-boosting models, SHAP/partial-dependence interpretation, and AHP–TOPSIS corridor prioritization.",
    topics: [
      "Travel Behaviour Modelling",
      "Machine Learning for Transportation",
      "Explainable AI",
      "Sustainable Mobility",
    ],
  },
  {
    citation:
      "Lasker, M. F., Khan, F., Masnun, M. R., & Tusher, M. S. — A Comparative Evaluation of Econometric and Machine-Learning Approaches for Modelling Working-Class Travel-Mode Choice in Narayanganj City Corporation, Bangladesh",
    status: "Under Review, ICACE 2026",
    role: "Co-author",
    summary:
      "Household travel survey of 4,528 households / 12,862 individuals; multinomial logit benchmarked against six supervised ML classifiers with SHAP explainability, fairness assessment, and policy-scenario simulation.",
    topics: ["Travel Behaviour Modelling", "Machine Learning for Transportation", "Explainable AI"],
  },
  {
    citation:
      "Khan, F. F. — A Data-Driven Approach for Prioritizing Black Spots and Safety Interventions on the Dhaka–Mymensingh National Highway (N3), Bangladesh",
    status: "Under Review, ICCE 2026",
    role: "First author",
    summary:
      "Three-stage framework combining time-series trend analysis, GIS-based Getis-Ord Gi* hotspot detection, and Fault Tree Analysis to prioritize crash black spots and safety interventions.",
    topics: ["Road Safety Analytics", "Transportation Systems Analysis"],
  },
];

export type Thesis = {
  level: "M.Sc. Thesis" | "B.Sc. Thesis";
  title: string;
  period: string;
  supervisor: string;
  topics: ResearchTopic[];
  points: string[];
};

export const THESES: Thesis[] = [
  {
    level: "M.Sc. Thesis",
    title:
      "From Road to Rail: Behavioural Determinants of Mode Shift and Corridor Prioritization for Sustainable Rail Development in Bangladesh",
    period: "2025 – 2026",
    supervisor: "Prof. Md. Asraful Alam, Jahangirnagar University",
    topics: [
      "Travel Behaviour Modelling",
      "Sustainable Mobility",
      "Public Transit Planning",
      "Transport Policy",
    ],
    points: [
      "Designed and analyzed a revealed-/stated-preference (RP–SP) survey of 3,991 intercity passengers across nine corridors and six divisions, collected face-to-face at bus terminals under the RCIPF project",
      "Built an end-to-end analytical pipeline — data cleaning, chi-square and Friedman tests, binary logistic regression, and a Gradient Boosting Machine that reached 88.5% accuracy and 0.907 AUC (vs. 0.812 for logistic regression) on a held-out test set",
      "Applied SHAP and partial-dependence analysis to identify safety perception as the dominant, threshold-type \"gateway\" determinant of rail choice, with fare, comfort, and time as secondary continuous levers",
      "Translated model outputs into an AHP–TOPSIS multi-criteria decision framework that ranked nine corridors for sustainable rail investment, producing short-, medium-, and long-term policy recommendations",
    ],
  },
  {
    level: "B.Sc. Thesis",
    title: "Trip Generation Behaviour During Medical Emergencies in Bangladesh",
    period: "2021 – 2022",
    supervisor: "Prof. Dr. Moinul Hossain, Islamic University of Technology",
    topics: ["Travel Behaviour Modelling", "Transportation Systems Analysis"],
    points: [
      "Designed and utilized a primary survey across Dhaka, Rajshahi, Barishal, and surrounding districts to model emergency dispatch trip generation as a function of socioeconomic and risk-perception factors",
      "Built a Bayesian Belief Network using the conditional-independence PC algorithm, learned parameters via expectation-maximization, and computed posterior probabilities with sensitivity analysis to rank the determinants of travel behaviour",
      "Identified mode selected, waiting time, injury type, and the income/education of patient and bystander as key drivers — informing decision-making for dispatch services, policymakers, and medical providers",
    ],
  },
];

export type ResearchProject = {
  title: string;
  context: string;
  period?: string;
  points: string[];
  link?: string;
};

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    title: "Socioeconomic and Mode-Choice Analysis of Household Travel Data, Narayanganj City Corporation",
    context: "Technical project experience — 'Transport Master Plan for Narayanganj City Corporation'",
    link: "https://drive.google.com/file/d/1Ie4WX4mrqBFEmLdYBCPf7a1KHWuNccGm/view",
    points: [
      "Built feature-engineering pipelines converting raw household micro-surveys into analytical datasets capturing family spatial structure, income streams, and daily travel vectors",
      "Performed origin–destination desire-corridor mapping and network-volume modelling, and fitted multivariable regression models of localized trip generation",
      "Trained and compared Multinomial Logistic Regression and Random Forest mode-choice classifiers with elasticity analysis to quantify mode-shift parameters for suburban transit policy",
    ],
  },
  {
    title: "Computer-Vision Image Classification over Large-Scale Repositories",
    context: "M.Sc. Big Data project, supervised by Farhana Akter Bina, Jahangirnagar University",
    link: "https://drive.google.com/file/d/1olJ-DngKEYCLsCr5ax1slquEU8hovYwR/view",
    points: [
      "End-to-end Convolutional Neural Network pipeline (custom pooling layers) for image classification and metadata analysis over high-volume image repositories",
      "Used PySpark and distributed computing to process large datasets more efficiently",
    ],
  },
  {
    title: "Final-Year Design Project — 12-Storey Residential High-Rise",
    context: "B.Sc. capstone, IUT — Purbachal New Town; BNBC & ACI code-compliant",
    period: "2021 – 2022",
    link: "https://drive.google.com/file/d/1ModYUhTNh-8R97UTqxsAdCDKEUr9LjhO/view",
    points: [
      "Modelled the intersection serving the development in SUMO, forecasting future traffic demand, and proposed geometric and pavement-design modifications",
      "Conducted an Initial Environmental Examination covering groundwater, noise, and traffic impacts",
      "Ran structural stress simulations under dead, live, wind, and seismic loads in ETABS, and engineered pile and mat foundations in PLAXIS from borehole SPT data",
    ],
  },
];

export const RESEARCH_SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Statistical & Econometric Modelling",
    items: [
      "Binary & multinomial logistic regression",
      "Discrete-choice / random-utility models",
      "Hypothesis testing (chi-square, Mann–Whitney U, Friedman)",
      "Multivariate analysis",
      "Categorical data analysis",
      "Time-series forecasting",
      "Sampling",
    ],
  },
  {
    group: "Machine Learning & Explainable AI",
    items: [
      "Gradient Boosting",
      "Random Forest",
      "Cross-validation",
      "SHAP",
      "Partial-dependence plots",
      "Permutation importance",
      "Fairness / robustness assessment",
    ],
  },
  {
    group: "Transportation Modelling",
    items: [
      "Travel-demand & mode-choice modelling",
      "Traffic microsimulation (SUMO)",
      "Corridor prioritization (AHP–TOPSIS / MCDM)",
      "GIS crash-hotspot analysis (Getis-Ord Gi*)",
    ],
  },
  {
    group: "Programming & Research Software",
    items: ["Python", "R", "SQL", "Stata", "SPSS", "Biogeme", "LaTeX"],
  },
];
