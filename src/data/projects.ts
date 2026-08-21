/**
 * Project archive — verified from Fardin's CV/portfolio material.
 * Sector tags are an editorial classification of each project's real
 * description, not invented detail. Where a source link's URL wasn't
 * actually given (only a link label, e.g. "Event Highlights"), no href
 * is included — no fabricated links.
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

export type Project = {
  slug: string;
  title: string;
  year?: string;
  org?: string;
  value?: string;
  summary: string;
  sector: ProjectCategory[];
  link?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "dhaka-chittagong-freight-corridor-feasibility",
    title: "Feasibility Study of Dhaka–Chittagong Freight Corridor Project",
    value: "US$2.5M",
    summary:
      "Developed technical approach, methodology, and project workplan, supported by site inspections, contributing to securing this project.",
    sector: ["Transportation", "Consulting", "International Development"],
    featured: true,
  },
  {
    slug: "first-dhaka-elevated-expressway-independent-engineer",
    title: "Independent Engineer for First Dhaka Elevated Expressway Project",
    value: "US$2M",
    summary:
      "Developed technical approach, methodology, and project workplan, supported by site inspection, contributing to securing this project.",
    sector: ["Transportation", "Engineering", "Consulting"],
    featured: true,
  },
  {
    slug: "joydebpur-ishurdi-dual-gauge-detailed-design",
    title: "Detailed Design of Joydebpur–Ishurdi Dual Gauge Construction Project",
    value: "US$6M",
    summary:
      "Developed technical approach, methodology, and project workplan, supported by site inspection, contributing to securing this project.",
    sector: ["Transportation", "Engineering", "Consulting"],
    featured: true,
  },
  {
    slug: "sasec-trade-facilitation-nbr",
    title: "SASEC Integrated Trade Facilitation Sector Development Project — NBR Part",
    value: "US$3M",
    summary:
      "Developed technical approach, methodology, and project workplan, supported by site inspections, contributing to securing this project.",
    sector: ["Consulting", "International Development"],
  },
  {
    slug: "river-resilient-infrastructure-adaptation",
    title: "Resilient Infrastructure for Adaptation and Vulnerability Reduction (RIVER)",
    value: "US$20M",
    summary:
      "Developed technical approach, methodology, and project workplan, supported by site inspection, contributing to securing this project.",
    sector: ["Engineering", "Consulting", "International Development"],
    featured: true,
  },
  {
    slug: "sylhet-chhatak-bazar-rail-rehabilitation-2022",
    title: "2022 Flood-Affected Sylhet–Chhatak Bazar Rail Rehabilitation Project",
    year: "2022",
    value: "US$1M",
    summary:
      "Developed technical approach, methodology, and project workplan, supported by site inspection, contributing to securing this project.",
    sector: ["Transportation", "Engineering", "Consulting"],
  },
  {
    slug: "dont-buy-mortein-campaign",
    title: "'Don't Buy Mortein' Campaign",
    org: "Rantages / Tanvir Sultan MBA",
    summary: "Meme marketing and content creation.",
    sector: ["Campaigns", "Media"],
  },
  {
    slug: "world-press-freedom-day-2024",
    title: "World Press Freedom Day 2024",
    year: "2024",
    summary: "Simultaneous interpretation service for WPFD 2024.",
    sector: ["Events", "International Development"],
  },
  {
    slug: "bicsaa-2023-award-ceremony",
    title: "Award Giving Ceremony of BICSAA 2023",
    year: "2023",
    summary: "Production support, logistical assistance, and cinematography for the award-giving ceremony.",
    sector: ["Events", "Media"],
  },
  {
    slug: "ilo-interpreting-services",
    title: "Simultaneous Interpreting Services for International Trade Union Corporation",
    org: "ILO in Bangladesh",
    summary: "Simultaneous interpreting services for ILO in Bangladesh.",
    sector: ["Events", "International Development"],
  },
  {
    slug: "commonwealth-delegation-transport-support",
    title: "Transport and Logistical Support for Commonwealth Delegation Team",
    org: "The Commonwealth Secretariat",
    summary: "Served as local coordinator for the Commonwealth Secretariat.",
    sector: ["Events", "International Development", "Transportation"],
  },
  {
    slug: "lets-talk-with-sheikh-hasina-cri",
    title: "'Let's Talk with Sheikh Hasina', organized by CRI",
    summary: "Production support for the CRI-organized session.",
    sector: ["Events", "Media"],
  },
  {
    slug: "cdd-documentary-photo-booklet",
    title: "Video Documentary and Photo Booklet Development — Centre for Disability in Development",
    org: "Centre for Disability in Development (CDD)",
    summary: "Providing CDD with videography and photo booklet services.",
    sector: ["Media", "International Development"],
  },
  {
    slug: "commonwealth-anti-corruption-cartoon-photo-doc",
    title: "Photography and Video Documentation — 'Anti-Corruption Cartoon Competition 2023' & 'Investigative Journalism 2023'",
    year: "2023",
    org: "The Commonwealth Secretariat",
    summary: "Served as local coordinator for the Commonwealth Secretariat.",
    sector: ["Media", "International Development"],
  },
  {
    slug: "lcoy-bangladesh-2023",
    title: "LCOY Bangladesh 2023",
    year: "2023",
    org: "Global Alliance for Improved Nutrition (GAIN)",
    summary: "Event management and documentary production for LCOY 2023.",
    sector: ["Events", "Media", "International Development"],
  },
  {
    slug: "unodc-glo-act-2023",
    title: "UNODC Glo.ACT 2023",
    year: "2023",
    org: "United Nations Office on Drugs and Crime",
    summary: "Submitting bidding proposals, negotiation, financials, and project management for SIS and interpretation services.",
    sector: ["Consulting", "International Development"],
  },
  {
    slug: "bicsaa-website-2023",
    title: "Website Development, Design & Management — Bangabandhu International Cyber Security Awareness Award 2023",
    year: "2023",
    summary: "Development, design, and management of the BICSAA website.",
    sector: ["Digital"],
  },
  {
    slug: "lets-talk-young-bangla-cri",
    title: "'Let's Talk', by Young Bangla and CRI",
    summary: "Documentation and production of Let's Talk sessions at DU and SAU.",
    sector: ["Media", "Events"],
  },
  {
    slug: "digital-khichuri-challenge-2023-rajshahi",
    title: "Digital Khichuri Challenge 2023 — Rajshahi Cohort",
    year: "2023",
    org: "United Nations Development Programme",
    summary: "Training material development, social media campaign, and orientation sessions (5–20 September 2023).",
    sector: ["Campaigns", "Digital", "International Development"],
  },
  {
    slug: "riding-for-change-womens-safety",
    title: "Riding for Change: Women's Safety in Public Places (Dhaka–Jessore–Dhaka)",
    summary: "Documentation and production of the road show.",
    sector: ["Media", "Campaigns"],
  },
  {
    slug: "bicsaa-launching-documentary",
    title: "Documentary and Production Support — BICSAA Launching Ceremony",
    summary: "Documentary of the BICSAA launching ceremony.",
    sector: ["Media", "Events"],
  },
  {
    slug: "undp-civic-responsibilities-video-series",
    title: "Short Video Series on Educating Citizens on Civic Responsibilities",
    org: "United Nations Development Programme",
    summary: "Developed TikTok content, Reels, and YouTube Shorts collaborating with influencers across Bangladesh.",
    sector: ["Digital", "Media", "International Development"],
  },
  {
    slug: "red-king-cooling-oil-campaign",
    title: "Red King Men's Cooling Oil Promotional Social Media Campaign",
    summary: "Documentation and production of the road show.",
    sector: ["Campaigns", "Media"],
  },
  {
    slug: "pgcb-transmission-tower-training",
    title: "Training on Design of Transmission Line Tower and its Foundation",
    org: "Power Grid Company of Bangladesh (PGCB)",
    summary: "Material development, overall coordination, and facilitation of a 10-day training for PGCB engineers.",
    sector: ["Engineering", "Consulting"],
  },
  {
    slug: "studio-x-impress-tanjin-tisha",
    title: "Studio X presents Impress Tanjin Tisha with American Style",
    org: "Marico",
    summary: "Promotion, ideation, branding, and marketing of the reality show.",
    sector: ["Campaigns", "Media"],
  },
  {
    slug: "digital-khichuri-challenge-2022-national-gala",
    title: "Event Planning and Execution of National Gala Round — Digital Khichuri Challenge 2022",
    year: "2022",
    summary: "Event planning and execution of the national gala round.",
    sector: ["Events"],
  },
  {
    slug: "iutaa-acoustic-night-2023",
    title: "IUTAA Acoustic Night 2023",
    year: "2023",
    org: "Syndic Atelier Ltd.",
    summary: "Planning and execution of the IUTAA Acoustic Night 2023.",
    sector: ["Events"],
  },
  {
    slug: "dp-bangladesh-decathlon",
    title: "DP Bangladesh — Decathlon",
    org: "Decathlon",
    summary: "Overall planning, negotiation, and execution of Decathlon's annual retreat at Palace Luxury Hotel, Sylhet.",
    sector: ["Events"],
  },
  {
    slug: "hocche-ta-ki-pathao-car",
    title: "'Hocche ta Ki' Campaign — Pathao Car",
    org: "Pathao",
    summary: "Planning and execution of the meme marketing campaign.",
    sector: ["Campaigns"],
  },
  {
    slug: "rock-and-rhythm-2022",
    title: "Rock and Rhythm 2022",
    year: "2022",
    org: "IMPULSE FC, Islamic University of Technology",
    summary:
      "Organized and strategized an online quiz competition for IMPULSE FC; led stage visualization, implementation, logistics, vendor management, and volunteer support.",
    sector: ["Events"],
  },
  {
    slug: "unodc-glo-act-2022",
    title: "UNODC Glo.ACT 2022",
    year: "2022",
    org: "United Nations Office on Drugs and Crime",
    summary: "Execution, venue visualization, and interpretation services for the 3-day international seminar.",
    sector: ["Events", "International Development"],
  },
  {
    slug: "undp-peace-talk-cafe-2022",
    title: "UNDP Peace Talk Cafe 2022",
    year: "2022",
    org: "United Nations Development Programme",
    summary: "Planning and execution of UNDP Peace Talk Cafe 2022 at North End Cafe.",
    sector: ["Events", "International Development"],
  },
  {
    slug: "digital-khichuri-challenge-auw-cohort",
    title: "Digital Khichuri Challenge — AUW Cohort",
    year: "2022",
    summary: "Campus activation for DKC 2022, AUW Cohort.",
    sector: ["Campaigns", "International Development"],
  },
  {
    slug: "dominos-pizza-meme-competition",
    title: "Meme Competition for Domino's Pizza",
    org: "Domino's Pizza",
    summary: "Meme competition on Rantages Page and Rantages Goatposting for Friendship Day.",
    sector: ["Campaigns", "Media"],
  },
  {
    slug: "bkash-eid-salami-campaign-2022",
    title: "Eid-ul-Fitr Salami Campaign by bKash",
    year: "2022",
    org: "bKash",
    summary: "Eid Salami campaign through content creation, seeding, and meme marketing.",
    sector: ["Campaigns"],
  },
  {
    slug: "sip-for-change-undp",
    title: "'Sip for Change' Campaign",
    org: "United Nations Development Programme",
    summary: "Planning and execution of 16 Days of Activism against Gender-Based Violence.",
    sector: ["Campaigns", "International Development"],
  },
  {
    slug: "rantages-show-season-1",
    title: "The Rantages Show — Season 1",
    year: "2020",
    summary: "Planned and produced all episodes of The Rantages Show.",
    sector: ["Media"],
  },
  {
    slug: "rantages-show-season-2",
    title: "The Rantages Show — Season 2",
    year: "2021",
    summary: "Planned and produced all episodes of The Rantages Show.",
    sector: ["Media"],
  },
  {
    slug: "skitto-class-party",
    title: "Skitto presents 'Class Party'",
    year: "2020",
    org: "Skitto",
    summary: "Produced all 8 episodes of Skitto Presents 'Class Party'.",
    sector: ["Media"],
  },
  {
    slug: "harpic-19against19",
    title: "Harpic presents '19against19'",
    org: "Reckitt Benckiser",
    summary: "Produced the webinar and helped shape the ideation of the 'World Toilet Day' campaign.",
    sector: ["Media", "Campaigns"],
  },
  {
    slug: "bkash-eid-salami-campaign-2021",
    title: "Eid-ul-Fitr Salami Campaign by bKash",
    year: "2021",
    org: "bKash",
    summary: "Eid Salami campaign through content creation and template seeding.",
    sector: ["Campaigns"],
  },
  {
    slug: "pathao-promotional-campaign",
    title: "Pathao Promotional Campaign",
    year: "2018–2019",
    org: "Pathao",
    summary: "Year-long promotional campaign contributing content creation, template seeding, and meme marketing.",
    sector: ["Campaigns"],
  },
  {
    slug: "just-another-gig-act-01",
    title: "Just Another Gig — Act 01",
    org: "Syndic Atelier Ltd.",
    summary: "Organized, planned, and executed an indoor plugged concert.",
    sector: ["Events"],
  },
  {
    slug: "iut-cbs-career-expo-2021",
    title: "IUT CBS presents 'Career Expo 2021'",
    year: "2021",
    summary: "Scripting, scheduling, and technical direction for the day-long career expo.",
    sector: ["Events"],
  },
  {
    slug: "iut-cbs-intern-2021",
    title: "IUT CBS presents 'INTERN 2021'",
    year: "2021",
    summary: "Assisted IUT CBS in launching the campaign and executing the inter-university business competition.",
    sector: ["Events"],
  },
  {
    slug: "oblique-music-launch",
    title: "Music Launch of Oblique",
    org: "Oblique",
    summary: "In charge of content and promotion for the release of the track 'Asshashon' by the band Oblique.",
    sector: ["Media"],
  },
];

/** Organizations and clients Fardin has worked with, as listed on the original site. */
export const BRAND_AFFILIATIONS: string[] = [
  "Bangladesh Railway",
  "Bangladesh Bridge Authority",
  "National Board of Revenue",
  "Roads and Highways Department",
  "Local Government Engineering Department",
  "The Commonwealth",
  "Reckitt Benckiser",
  "Transparency International Bangladesh",
  "ICT Division Bangladesh",
  "International Labour Organization",
  "Centre for Research Initiatives",
  "Centre for Disability in Development",
  "United Nations Development Programme",
  "United Nations Office on Drugs and Crime",
  "Young Bangla",
  "Global Alliance for Improved Nutrition",
  "Marico",
  "Power Grid Company of Bangladesh",
  "Grameenphone",
  "Decathlon",
  "Pathao",
  "Islamic University of Technology",
  "Domino's Pizza",
  "bKash",
  "Meghna Group of Industries",
  "Skitto",
  "Impulse FC",
  "IUT Alumni Association",
  "IUT Career and Business Society",
  "Adventor Communications",
  "Oblique",
  "Standard Chartered Bank",
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Transportation",
  "Engineering",
  "Research",
  "Development",
  "Consulting",
  "Events",
  "Media",
  "Digital",
  "Campaigns",
  "International Development",
];
