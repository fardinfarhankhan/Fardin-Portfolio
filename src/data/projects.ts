/**
 * Project archive — verified from Fardin's CV/portfolio material.
 * `group` organizes the archive into labeled sections matching the
 * structure Fardin provided. `tags` are a richer, per-project set of
 * descriptors (also sourced from Fardin's material); `sector` is the
 * older, coarser classification kept for the projects that haven't
 * been given richer copy yet. Where a source link's URL wasn't
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

export type ProjectGroup =
  | "Transportation & Infrastructure"
  | "International Development & Multilateral Engagements"
  | "Digital & Strategic Communications"
  | "Brand & Marketing Experience"
  | "Event & Production Management"
  | "Media & Content Production"
  | "Technical Training & Professional Events"
  | "Other Work";

export type Project = {
  slug: string;
  /** Project photos/artwork, in display order. First entry is used as the card/hero cover. */
  images?: string[];
  title: string;
  year?: string;
  org?: string;
  value?: string;
  /** Short 1–2 sentence version, used on cards and in link previews. */
  summary: string;
  /** Full-length write-up, shown on the project detail page. Falls back to `summary` when absent. */
  description?: string;
  /** Richer per-project descriptors, shown as chips. Falls back to `sector` when absent. */
  tags?: string[];
  /** Specific contribution areas, shown on the detail page. */
  contribution?: string[];
  group: ProjectGroup;
  sector?: ProjectCategory[];
  link?: string;
  featured?: boolean;
};

export const PROJECT_GROUPS: ProjectGroup[] = [
  "Transportation & Infrastructure",
  "International Development & Multilateral Engagements",
  "Digital & Strategic Communications",
  "Brand & Marketing Experience",
  "Event & Production Management",
  "Media & Content Production",
  "Technical Training & Professional Events",
  "Other Work",
];

export const PROJECTS: Project[] = [
  // ── Transportation & Infrastructure ──────────────────────────────
  {
    slug: "dhaka-chittagong-freight-corridor-feasibility",
    images: ["/images/projects/dhaka-chittagong-freight-corridor-feasibility/01.jpg"],
    title: "Dhaka–Chattogram Freight Corridor Feasibility Study",
    value: "US$2.5M",
    tags: ["Transportation Infrastructure", "Freight & Logistics", "Feasibility Study"],
    summary:
      "Contributed to the preparation of the feasibility study for the Dhaka–Chattogram Freight Corridor, a strategic transport initiative aimed at strengthening freight connectivity and logistics efficiency along Bangladesh's principal economic corridor.",
    description:
      "Contributed to the preparation of the feasibility study for the Dhaka–Chattogram Freight Corridor, a strategic transport initiative aimed at strengthening freight connectivity and logistics efficiency along Bangladesh's principal economic corridor. Led the development of the technical approach, methodology, work plan, and proposal strategy, supported by site inspections and coordination of multidisciplinary inputs. The work required translating the project's technical requirements into a practical delivery framework while aligning the proposed approach with client priorities and implementation considerations.",
    contribution: [
      "Technical methodology",
      "Work planning",
      "Site assessment",
      "Proposal development",
      "Multidisciplinary coordination",
    ],
    group: "Transportation & Infrastructure",
    featured: true,
  },
  {
    slug: "first-dhaka-elevated-expressway-independent-engineer",
    images: ["/images/projects/first-dhaka-elevated-expressway-independent-engineer/01.jpg"],
    title: "First Dhaka Elevated Expressway – Independent Engineer",
    value: "US$2M",
    tags: ["Urban Transport", "Expressway Infrastructure", "Independent Engineering"],
    summary:
      "Supported the proposal development for the Independent Engineer assignment for the First Dhaka Elevated Expressway Project, one of Bangladesh's major urban transport infrastructure investments.",
    description:
      "Supported the proposal development for the Independent Engineer assignment for the First Dhaka Elevated Expressway Project, one of Bangladesh's major urban transport infrastructure investments. Developed the technical approach, methodology, implementation framework, and project work plan, incorporating observations from site inspections and project requirements. Worked across technical and commercial inputs to develop a coherent delivery strategy aligned with the requirements of an independent engineering assignment.",
    contribution: [
      "Technical approach",
      "Methodology development",
      "Site inspection",
      "Work planning",
      "Proposal coordination",
    ],
    group: "Transportation & Infrastructure",
    featured: true,
  },
  {
    slug: "joydebpur-ishurdi-dual-gauge-detailed-design",
    images: ["/images/projects/joydebpur-ishurdi-dual-gauge-detailed-design/01.jpg"],
    title: "Joydebpur–Ishurdi Dual Gauge Railway Project",
    value: "US$6M",
    tags: ["Railway Infrastructure", "Detailed Design", "Multimodal Connectivity"],
    summary:
      "Contributed to the proposal and technical planning for the detailed design of the Joydebpur–Ishurdi Dual Gauge Railway Project, a major railway infrastructure investment supporting improved rail connectivity between central and western Bangladesh.",
    description:
      "Contributed to the proposal and technical planning for the detailed design of the Joydebpur–Ishurdi Dual Gauge Railway Project, a major railway infrastructure investment supporting improved rail connectivity between central and western Bangladesh. Developed the technical methodology, project work plan, and delivery approach, supported by site inspection and coordination of relevant technical inputs. The assignment strengthened experience in translating complex railway design requirements into structured consultancy methodologies and implementation plans.",
    contribution: [
      "Technical methodology",
      "Project planning",
      "Site inspection",
      "Railway infrastructure",
      "Proposal development",
    ],
    group: "Transportation & Infrastructure",
    featured: true,
  },
  {
    slug: "sasec-trade-facilitation-nbr",
    images: ["/images/projects/sasec-trade-facilitation-nbr/01.jpg"],
    title: "SASEC Integrated Trade Facilitation Sector Development Project – NBR Component",
    value: "US$3M",
    tags: ["Trade Facilitation", "Transport Systems", "Institutional Development"],
    summary:
      "Supported the development of the technical proposal for the National Board of Revenue component of the SASEC Integrated Trade Facilitation Sector Development Project.",
    description:
      "Supported the development of the technical proposal for the National Board of Revenue component of the SASEC Integrated Trade Facilitation Sector Development Project. Developed the technical approach, methodology, work plan, and implementation framework, incorporating site-based observations and project-specific requirements. The work involved understanding the interface between infrastructure, trade facilitation, institutional processes, and stakeholder requirements and translating these into a structured consulting approach.",
    contribution: [
      "Technical proposal",
      "Methodology",
      "Work planning",
      "Site assessment",
      "Stakeholder coordination",
    ],
    group: "Transportation & Infrastructure",
  },
  {
    slug: "river-resilient-infrastructure-adaptation",
    images: ["/images/projects/river-resilient-infrastructure-adaptation/01.jpg"],
    title: "Resilient Infrastructure for Adaptation and Vulnerability Reduction (RIVER)",
    value: "US$20M",
    tags: ["Climate Resilience", "Infrastructure", "Development Finance"],
    summary:
      "Contributed to the development of the technical approach and implementation methodology for the RIVER project, focused on strengthening infrastructure resilience and reducing vulnerability to climate-related risks.",
    description:
      "Contributed to the development of the technical approach and implementation methodology for the RIVER project, focused on strengthening infrastructure resilience and reducing vulnerability to climate-related risks. Supported technical methodology development, work planning, site-based assessment, and proposal coordination, bringing together project requirements and multidisciplinary technical inputs into a coherent delivery strategy. The experience provided exposure to the integration of infrastructure planning with climate adaptation and resilience objectives.",
    contribution: [
      "Technical methodology",
      "Resilience planning",
      "Site assessment",
      "Work planning",
      "Proposal development",
    ],
    group: "Transportation & Infrastructure",
    featured: true,
  },
  {
    slug: "sylhet-chhatak-bazar-rail-rehabilitation-2022",
    images: ["/images/projects/sylhet-chhatak-bazar-rail-rehabilitation-2022/01.jpg"],
    title: "2022 Flood-Affected Sylhet–Chhatak Bazar Rail Rehabilitation",
    year: "2022",
    value: "US$1M",
    tags: ["Railway Rehabilitation", "Climate Resilience", "Infrastructure Recovery"],
    summary:
      "Supported the preparation of the technical approach for rehabilitation of the Sylhet–Chhatak Bazar railway infrastructure affected by the 2022 floods.",
    description:
      "Supported the preparation of the technical approach for rehabilitation of the Sylhet–Chhatak Bazar railway infrastructure affected by the 2022 floods. Developed the methodology, work plan, and project delivery approach, incorporating site inspection findings and the specific challenges associated with restoring flood-affected railway assets. The assignment provided practical exposure to infrastructure rehabilitation, disaster recovery, and resilience-oriented project planning.",
    contribution: [
      "Rehabilitation planning",
      "Technical methodology",
      "Site inspection",
      "Work planning",
      "Proposal development",
    ],
    group: "Transportation & Infrastructure",
  },
  {
    slug: "chittagong-dohazari-rail-project",
    images: ["/images/projects/chittagong-dohazari-rail-project/01.jpg"],
    title: "Chittagong–Dohazari Rail Project",
    value: "US$20M",
    tags: ["Railway Infrastructure", "Technical Proposal", "Project Planning"],
    summary:
      "Led the development of the technical approach, methodology, and project workplan for the Chittagong–Dohazari Rail Project, informed by site inspections, contributing to the successful securing of a US$20 million project.",
    description:
      "Led the development of the technical approach, methodology, and project workplan for the Chittagong–Dohazari Rail Project, informed by site inspections, contributing to the successful securing of a US$20 million project.",
    contribution: [
      "Technical approach",
      "Methodology development",
      "Site inspection",
      "Work planning",
      "Proposal development",
    ],
    group: "Transportation & Infrastructure",
    featured: true,
  },
  {
    slug: "kamalapur-airport-station-multimodal-hub",
    images: ["/images/projects/kamalapur-airport-station-multimodal-hub/01.png"],
    title: "Kamalapur–Airport Station Multimodal Hub",
    value: "US$5M",
    tags: ["Multimodal Transit", "Technical Proposal", "Stakeholder Engagement"],
    summary:
      "Led the development of the technical approach, methodology, and project workplan for the Kamalapur–Airport Station Multimodal Hub, supported by site assessments and stakeholder inputs, contributing to the successful securing of a US$5 million project.",
    description:
      "Led the development of the technical approach, methodology, and project workplan for the Kamalapur–Airport Station Multimodal Hub, supported by site assessments and stakeholder inputs, contributing to the successful securing of a US$5 million project.",
    contribution: [
      "Technical approach",
      "Methodology development",
      "Site assessment",
      "Stakeholder coordination",
      "Work planning",
    ],
    group: "Transportation & Infrastructure",
  },

  // ── International Development & Multilateral Engagements ────────
  {
    slug: "unodc-glo-act-2023",
    images: ["/images/projects/unodc-glo-act-2023/01.jpg"],
    title: "UNODC GLO.ACT 2023",
    year: "2023",
    org: "United Nations Office on Drugs and Crime",
    tags: ["International Development", "Interpretation Services", "Project Management"],
    summary:
      "Managed key aspects of the proposal and project development process for the UNODC GLO.ACT 2023 assignment, including bid preparation, commercial negotiations, and project management for interpretation services.",
    description:
      "Managed key aspects of the proposal and project development process for the UNODC GLO.ACT 2023 assignment. Responsibilities included bid preparation, commercial negotiations, financial coordination, service planning, and project management for simultaneous interpretation and related language services. Coordinated multiple requirements across the proposal and delivery stages, strengthening experience in managing international development-sector assignments with demanding quality and coordination requirements.",
    contribution: [
      "Bid management",
      "Commercial negotiation",
      "Financial coordination",
      "Project management",
      "Client coordination",
    ],
    group: "International Development & Multilateral Engagements",
  },
  {
    slug: "unodc-glo-act-2022",
    images: ["/images/projects/unodc-glo-act-2022/01.png"],
    title: "UNODC GLO.ACT 2022",
    year: "2022",
    org: "United Nations Office on Drugs and Crime",
    tags: ["International Conference", "Event Operations", "Interpretation Services"],
    summary:
      "Supported the delivery of a three-day international seminar under the UNODC GLO.ACT programme, including venue visualization, logistics coordination, and interpretation-service planning.",
    description:
      "Supported the delivery of a three-day international seminar under the UNODC GLO.ACT programme. Responsibilities included venue visualization, event execution, logistics coordination, interpretation-service planning, and on-site operational support. Worked across technical, logistical, and service-delivery requirements to ensure coordinated execution of an international programme involving multiple stakeholders.",
    contribution: [
      "Event operations",
      "Venue planning",
      "Logistics",
      "Interpretation services",
      "Stakeholder coordination",
    ],
    group: "International Development & Multilateral Engagements",
  },
  {
    slug: "world-press-freedom-day-2024",
    images: ["/images/projects/world-press-freedom-day-2024/01.jpg"],
    title: "World Press Freedom Day 2024",
    year: "2024",
    tags: ["International Event", "Multilingual Communications", "Service Coordination"],
    summary:
      "Supported the delivery of simultaneous interpretation services for World Press Freedom Day 2024, coordinating service requirements for multilingual communication.",
    description:
      "Supported the delivery of simultaneous interpretation services for World Press Freedom Day 2024. Coordinated service requirements and operational arrangements to support multilingual communication during an international programme involving diverse participants and stakeholders.",
    contribution: [
      "Service coordination",
      "Event operations",
      "Multilingual communications",
      "Stakeholder support",
    ],
    group: "International Development & Multilateral Engagements",
  },
  {
    slug: "commonwealth-delegation-transport-support",
    images: ["/images/projects/commonwealth-delegation-transport-support/01.jpg"],
    title: "Commonwealth Secretariat – Delegation Support",
    org: "The Commonwealth Secretariat",
    tags: ["International Relations", "Logistics", "Stakeholder Coordination"],
    summary:
      "Served as the local coordination focal point for Commonwealth Secretariat delegation activities in Bangladesh, supporting transportation, logistics, and stakeholder coordination.",
    description:
      "Served as the local coordination focal point for Commonwealth Secretariat delegation activities in Bangladesh. Supported transportation, logistics, scheduling, stakeholder coordination, and on-ground programme execution, ensuring smooth movement and coordination of delegation activities across multiple engagements.",
    contribution: [
      "Delegation management",
      "Logistics",
      "Transportation coordination",
      "Stakeholder engagement",
    ],
    group: "International Development & Multilateral Engagements",
  },
  {
    slug: "cdd-documentary-photo-booklet",
    images: ["/images/projects/cdd-documentary-photo-booklet/01.png"],
    title: "Centre for Disability in Development",
    org: "Centre for Disability in Development (CDD)",
    tags: ["Development Communications", "Documentary Production", "Visual Storytelling"],
    summary:
      "Supported the development of documentary and photographic communication materials for the Centre for Disability in Development, including videography, photography, and photo-booklet development.",
    description:
      "Supported the development of documentary and photographic communication materials for the Centre for Disability in Development. Delivered videography, photography, visual documentation, and photo-booklet development, translating programme activities and institutional work into accessible communication outputs for broader stakeholder engagement.",
    contribution: ["Documentary production", "Photography", "Visual communication", "Content development"],
    group: "International Development & Multilateral Engagements",
  },

  // ── Digital & Strategic Communications ───────────────────────────
  {
    slug: "bicsaa-website-2023",
    images: ["/images/projects/bicsaa-website-2023/01.png"],
    title: "Bangabandhu International Cyber Security Awareness Award (BICSAA)",
    year: "2023",
    tags: ["Digital Platform", "Public Awareness", "Technology Communications"],
    summary:
      "Contributed to the development, design, content management, and operational delivery of the BICSAA digital platform, supporting a national cyber-security awareness initiative.",
    description:
      "Contributed to the development, design, content management, and operational delivery of the BICSAA digital platform. Supported the broader communications and engagement strategy surrounding a national cyber-security awareness initiative, combining digital platform development, content coordination, event production, and stakeholder communication.",
    contribution: ["Website development", "Digital communications", "Content management", "Stakeholder coordination"],
    group: "Digital & Strategic Communications",
  },
  {
    slug: "bicsaa-launch-award-ceremonies",
    images: [
      "/images/projects/bicsaa-launch-award-ceremonies/01.jpg",
      "/images/projects/bicsaa-launch-award-ceremonies/02.png",
    ],
    title: "BICSAA Launch & Award Ceremonies",
    year: "2023",
    tags: ["Strategic Communications", "Event Production", "Digital Awareness"],
    summary:
      "Supported documentary production and event documentation for the launch and award ceremonies of the Bangabandhu International Cyber Security Awareness Award.",
    description:
      "Supported documentary production and event documentation for the launch and award ceremonies of the Bangabandhu International Cyber Security Awareness Award. Worked across visual production, event documentation, coordination, and communications support to create high-quality materials for public engagement and institutional communication.",
    group: "Digital & Strategic Communications",
  },
  {
    slug: "undp-civic-responsibilities-video-series",
    images: ["/images/projects/undp-civic-responsibilities-video-series/01.png"],
    title: "UNDP – Civic Responsibility Digital Campaign",
    org: "United Nations Development Programme",
    tags: ["Digital Communications", "Public Engagement", "Social Media"],
    summary:
      "Supported a nationwide digital awareness initiative focused on educating citizens about civic responsibilities, developing short-form video content for TikTok, Reels, and YouTube Shorts.",
    description:
      "Supported a nationwide digital awareness initiative focused on educating citizens about civic responsibilities. Developed and coordinated short-form video content for TikTok, Instagram Reels, and YouTube Shorts, working with influencers and content partners to translate public-interest messages into accessible digital formats.",
    contribution: ["Content strategy", "Short-form video", "Influencer coordination", "Digital engagement"],
    group: "Digital & Strategic Communications",
  },
  {
    slug: "riding-for-change-womens-safety",
    images: ["/images/projects/riding-for-change-womens-safety/01.jpg"],
    title: "Riding for Change – Women's Safety in Public Places",
    tags: ["Social Impact", "Public Awareness", "Campaign Production"],
    summary:
      "Supported the documentation and production of a public awareness roadshow focused on women's safety in public spaces across the Dhaka–Jessore–Dhaka route.",
    description:
      "Supported the documentation and production of a public awareness roadshow focused on women's safety in public spaces across the Dhaka–Jessore–Dhaka route. Contributed to production planning, field documentation, and campaign storytelling, helping translate a public-interest initiative into engaging visual communication.",
    group: "Digital & Strategic Communications",
  },

  // ── Brand & Marketing Experience ─────────────────────────────────
  {
    slug: "hocche-ta-ki-pathao-car",
    images: ["/images/projects/hocche-ta-ki-pathao-car/01.png"],
    title: "Pathao – \"Hocche Ta Ki\" Campaign",
    org: "Pathao",
    tags: ["Digital Marketing", "Meme Strategy", "Brand Engagement"],
    summary:
      "Supported the planning and execution of Pathao Car's \"Hocche Ta Ki\" digital campaign, developing meme-based content and social media activation.",
    description:
      "Supported the planning and execution of Pathao Car's \"Hocche Ta Ki\" digital campaign. Developed and coordinated meme-based content, community engagement, and social media activation designed to connect the brand with Bangladesh's highly engaged digital audience.",
    contribution: ["Campaign planning", "Content strategy", "Meme marketing", "Digital engagement"],
    group: "Brand & Marketing Experience",
  },
  {
    slug: "pathao-promotional-campaign",
    images: ["/images/projects/pathao-promotional-campaign/01.png"],
    title: "Pathao – Promotional Campaign",
    year: "2018–2019",
    org: "Pathao",
    tags: ["Digital Marketing", "Community Engagement", "Content Strategy"],
    summary:
      "Contributed to a year-long promotional campaign for Pathao, supporting content creation, community seeding, template development, and meme marketing.",
    description:
      "Contributed to a year-long promotional campaign for Pathao, supporting content creation, community seeding, template development, and meme marketing. The experience involved adapting brand communication to fast-moving online communities and developing content designed for organic digital engagement.",
    group: "Brand & Marketing Experience",
  },
  {
    slug: "bkash-eid-salami-campaign",
    images: [
      "/images/projects/bkash-eid-salami-campaign/01.jpg",
      "/images/projects/bkash-eid-salami-campaign/02.jpg",
    ],
    title: "bKash – Eid-ul-Fitr Salami Campaign",
    year: "2021–2022",
    org: "bKash",
    tags: ["Digital Campaign", "Content Marketing", "Social Engagement"],
    summary:
      "Supported bKash's Eid-ul-Fitr Salami campaign through content development, community seeding, template creation, and meme-based engagement.",
    description:
      "Supported bKash's Eid-ul-Fitr Salami campaign through content development, community seeding, template creation, and meme-based engagement. Contributed to the development of culturally relevant digital content designed to increase campaign visibility and audience participation.",
    group: "Brand & Marketing Experience",
  },
  {
    slug: "studio-x-impress-tanjin-tisha",
    images: ["/images/projects/studio-x-impress-tanjin-tisha/01.png"],
    title: "Marico – \"Impress Tanjin Tisha with American Style\"",
    org: "Marico",
    tags: ["Brand Activation", "Entertainment Marketing", "Campaign Development"],
    summary:
      "Supported the promotion and marketing of a branded reality-show activation for Marico, contributing to campaign ideation, branding, and promotional strategy.",
    description:
      "Supported the promotion and marketing of a branded reality-show activation for Marico. Contributed to campaign ideation, branding, promotional strategy, and execution, coordinating creative requirements with the broader brand activation programme.",
    group: "Brand & Marketing Experience",
  },

  // ── Event & Production Management ────────────────────────────────
  {
    slug: "digital-khichuri-challenge-2023-rajshahi",
    images: ["/images/projects/digital-khichuri-challenge-2023-rajshahi/01.jpg"],
    title: "Digital Khichuri Challenge 2023 – Rajshahi Cohort",
    year: "2023",
    org: "United Nations Development Programme",
    tags: ["Youth Engagement", "Training", "Campaign Management"],
    summary:
      "Supported the Rajshahi cohort of the Digital Khichuri Challenge through training-material development, orientation sessions, and participant engagement.",
    description:
      "Supported the Rajshahi cohort of the Digital Khichuri Challenge through training-material development, orientation sessions, participant engagement, and campaign communications. Coordinated programme activities over the implementation period to support participant onboarding and effective delivery of the initiative.",
    group: "Event & Production Management",
  },
  {
    slug: "digital-khichuri-challenge-2022-national-gala",
    images: ["/images/projects/digital-khichuri-challenge-2022-national-gala/01.jpg"],
    title: "Digital Khichuri Challenge – National Gala 2022",
    year: "2022",
    tags: ["Event Management", "Production", "Stakeholder Coordination"],
    summary:
      "Supported the planning and execution of the national gala round of the Digital Khichuri Challenge, including event planning, production coordination, and stakeholder management.",
    description:
      "Supported the planning and execution of the national gala round of the Digital Khichuri Challenge. Responsibilities included event planning, production coordination, logistics, scheduling, and stakeholder management, contributing to the successful delivery of a large-scale public engagement event.",
    group: "Event & Production Management",
  },
  {
    slug: "dp-bangladesh-decathlon",
    images: ["/images/projects/dp-bangladesh-decathlon/01.jpg"],
    title: "Decathlon Bangladesh – Annual Retreat",
    org: "Decathlon",
    tags: ["Corporate Event Management", "Vendor Coordination", "Negotiation"],
    summary:
      "Managed the planning and execution of Decathlon Bangladesh's annual corporate retreat in Sylhet, coordinating vendor negotiations, logistics, and event execution.",
    description:
      "Managed the planning and execution of Decathlon Bangladesh's annual corporate retreat in Sylhet. Coordinated programme planning, vendor negotiations, logistics, venue requirements, and event execution, ensuring alignment between client expectations, operational requirements, and delivery timelines.",
    group: "Event & Production Management",
  },
  {
    slug: "iutaa-acoustic-night-2023",
    images: ["/images/projects/iutaa-acoustic-night-2023/01.jpg"],
    title: "IUTAA Acoustic Night 2023",
    year: "2023",
    org: "Syndic Atelier Ltd.",
    tags: ["Event Production", "Operations", "Logistics"],
    summary:
      "Supported the planning and execution of the IUTAA Acoustic Night 2023, coordinating production requirements, logistics, and on-ground operations.",
    description:
      "Supported the planning and execution of the IUTAA Acoustic Night 2023, coordinating production requirements, logistics, scheduling, vendors, and on-ground operations. Managed multiple operational components to deliver the event within the planned programme framework.",
    group: "Event & Production Management",
  },
  {
    slug: "mun-alert-bangladesh-launch-event",
    images: ["/images/projects/mun-alert-bangladesh-launch-event/01.jpg"],
    title: "MUN Alert Bangladesh — Launch Event & Stakeholder Coordination",
    org: "MUN Alert Bangladesh",
    tags: ["Event Management", "Stakeholder Coordination", "Public Safety Initiative"],
    summary:
      "Led event execution, management, budgeting, and stakeholder coordination for the launch of MUN Alert in Bangladesh, a national initiative focused on child safety, missing children, and digital responsibility.",
    description:
      "Led event execution, management, budgeting, and stakeholder coordination for the launch of MUN Alert in Bangladesh, supporting a national initiative focused on child safety, missing children, and digital responsibility. Coordinated event logistics and engagement with key stakeholders including Government, Law Enforcement, and Meta, contributing to the successful delivery of the launch.",
    contribution: ["Event execution", "Event management", "Budgeting", "Stakeholder coordination", "Logistics"],
    group: "Event & Production Management",
    featured: true,
  },

  // ── Media & Content Production ───────────────────────────────────
  {
    slug: "rantages-show-seasons-1-2",
    images: [
      "/images/projects/rantages-show-seasons-1-2/01.jpg",
      "/images/projects/rantages-show-seasons-1-2/02.png",
    ],
    title: "The Rantages Show – Seasons 1 & 2",
    year: "2020–2021",
    tags: ["Digital Media", "Programme Production", "Content Strategy"],
    summary:
      "Planned and produced the full episodes of The Rantages Show across its first two seasons, covering programme planning, episode development, and production coordination.",
    description:
      "Planned and produced the full episodes of The Rantages Show across its first two seasons. Responsibilities covered programme planning, episode development, production coordination, content execution, and delivery, providing end-to-end experience in digital media production.",
    group: "Media & Content Production",
  },
  {
    slug: "skitto-class-party",
    images: ["/images/projects/skitto-class-party/01.png"],
    title: "Skitto Presents \"Class Party\"",
    year: "2020",
    org: "Skitto",
    tags: ["Digital Entertainment", "Programme Production"],
    summary:
      "Produced all eight episodes of Skitto Presents Class Party, supporting programme development, production planning, and execution across the complete series.",
    description:
      "Produced all eight episodes of Skitto Presents Class Party, supporting programme development, production planning, coordination, and execution across the complete series.",
    group: "Media & Content Production",
  },
  {
    slug: "harpic-19against19",
    images: ["/images/projects/harpic-19against19/01.png"],
    title: "Harpic Presents \"19against19\"",
    org: "Reckitt Benckiser",
    tags: ["Brand Content", "Campaign Ideation", "Digital Production"],
    summary:
      "Contributed to the ideation and production of the World Toilet Day campaign and associated webinar for Reckitt Benckiser's Harpic brand.",
    description:
      "Contributed to the ideation and production of the World Toilet Day campaign and associated webinar for Reckitt Benckiser's Harpic brand. Worked across creative development, programme production, and digital communication to support the brand's public engagement initiative.",
    group: "Media & Content Production",
  },
  {
    slug: "oblique-music-launch",
    images: ["/images/projects/oblique-music-launch/01.jpg"],
    title: "Oblique – \"Asshashon\"",
    org: "Oblique",
    tags: ["Music Marketing", "Digital Content", "Promotion"],
    summary:
      "Led content development and promotional activities supporting the release of \"Asshashon\" by the band Oblique.",
    description:
      "Led content development and promotional activities supporting the release of \"Asshashon\" by the band Oblique. Developed communication and promotional materials designed to increase awareness and digital engagement around the music release.",
    group: "Media & Content Production",
  },

  // ── Technical Training & Professional Events ─────────────────────
  {
    slug: "pgcb-transmission-tower-training",
    images: ["/images/projects/pgcb-transmission-tower-training/01.jpg"],
    title: "PGCB – Transmission Line Tower & Foundation Design Training",
    org: "Power Grid Company of Bangladesh (PGCB)",
    tags: ["Technical Training", "Capacity Development", "Engineering"],
    summary:
      "Supported the development and delivery of a 10-day technical training programme for PGCB engineers focused on transmission-line tower and foundation design.",
    description:
      "Supported the development and delivery of a 10-day technical training programme for PGCB engineers focused on transmission-line tower and foundation design. Responsibilities included training-material development, programme coordination, facilitation, and participant engagement, providing experience at the intersection of engineering knowledge transfer and professional capacity development.",
    group: "Technical Training & Professional Events",
  },
  {
    slug: "iut-cbs-career-expo-2021",
    images: ["/images/projects/iut-cbs-career-expo-2021/01.jpg"],
    title: "IUT CBS – Career Expo 2021",
    year: "2021",
    tags: ["Event Management", "Technical Coordination", "Programme Planning"],
    summary:
      "Supported the planning and execution of the IUT CBS Career Expo 2021, contributing to programme scripting, scheduling, and technical coordination.",
    description:
      "Supported the planning and execution of the IUT CBS Career Expo 2021, contributing to programme scripting, scheduling, technical coordination, and event operations for the day-long professional networking event.",
    group: "Technical Training & Professional Events",
  },
  {
    slug: "iut-cbs-intern-2021",
    images: ["/images/projects/iut-cbs-intern-2021/01.png"],
    title: "IUT CBS – INTERN 2021",
    year: "2021",
    tags: ["Business Competition", "Campaign Execution", "Youth Engagement"],
    summary:
      "Supported the launch and execution of an inter-university business competition, contributing to campaign coordination, programme planning, and event execution.",
    description:
      "Supported the launch and execution of an inter-university business competition, contributing to campaign coordination, programme planning, participant engagement, and event execution.",
    group: "Technical Training & Professional Events",
  },

  // ── Other work ────────────────────────────────────────────────────
  {
    slug: "dont-buy-mortein-campaign",
    images: ["/images/projects/dont-buy-mortein-campaign/01.jpg"],
    title: "'Don't Buy Mortein' Campaign",
    org: "Rantages / Tanvir Sultan MBA",
    summary: "Meme marketing and content creation.",
    sector: ["Campaigns", "Media"],
    group: "Other Work",
  },
  {
    slug: "ilo-interpreting-services",
    images: ["/images/projects/ilo-interpreting-services/01.jpg"],
    title: "Simultaneous Interpreting Services for International Trade Union Corporation",
    org: "ILO in Bangladesh",
    summary: "Simultaneous interpreting services for ILO in Bangladesh.",
    sector: ["Events", "International Development"],
    group: "Other Work",
  },
  {
    slug: "lets-talk-with-sheikh-hasina-cri",
    images: ["/images/projects/lets-talk-with-sheikh-hasina-cri/01.jpg"],
    title: "'Let's Talk with Sheikh Hasina', organized by CRI",
    summary: "Production support for the CRI-organized session.",
    sector: ["Events", "Media"],
    group: "Other Work",
  },
  {
    slug: "commonwealth-anti-corruption-cartoon-photo-doc",
    images: ["/images/projects/commonwealth-anti-corruption-cartoon-photo-doc/01.jpg"],
    title: "Photography and Video Documentation — 'Anti-Corruption Cartoon Competition 2023' & 'Investigative Journalism 2023'",
    year: "2023",
    org: "The Commonwealth Secretariat",
    summary: "Served as local coordinator for the Commonwealth Secretariat.",
    sector: ["Media", "International Development"],
    group: "Other Work",
  },
  {
    slug: "lcoy-bangladesh-2023",
    images: ["/images/projects/lcoy-bangladesh-2023/01.jpg"],
    title: "LCOY Bangladesh 2023",
    year: "2023",
    org: "Global Alliance for Improved Nutrition (GAIN)",
    summary: "Event management and documentary production for LCOY 2023.",
    sector: ["Events", "Media", "International Development"],
    group: "Other Work",
  },
  {
    slug: "lets-talk-young-bangla-cri",
    images: ["/images/projects/lets-talk-young-bangla-cri/01.png"],
    title: "'Let's Talk', by Young Bangla and CRI",
    summary: "Documentation and production of Let's Talk sessions at DU and SAU.",
    sector: ["Media", "Events"],
    group: "Other Work",
  },
  {
    slug: "red-king-cooling-oil-campaign",
    images: ["/images/projects/red-king-cooling-oil-campaign/01.jpg"],
    title: "Red King Men's Cooling Oil Promotional Social Media Campaign",
    summary: "Documentation and production of the road show.",
    sector: ["Campaigns", "Media"],
    group: "Other Work",
  },
  {
    slug: "rock-and-rhythm-2022",
    images: ["/images/projects/rock-and-rhythm-2022/01.png"],
    title: "Rock and Rhythm 2022",
    year: "2022",
    org: "IMPULSE FC, Islamic University of Technology",
    summary:
      "Organized and strategized an online quiz competition for IMPULSE FC; led stage visualization, implementation, logistics, vendor management, and volunteer support.",
    sector: ["Events"],
    group: "Other Work",
  },
  {
    slug: "undp-peace-talk-cafe-2022",
    images: ["/images/projects/undp-peace-talk-cafe-2022/01.jpg"],
    title: "UNDP Peace Talk Cafe 2022",
    year: "2022",
    org: "United Nations Development Programme",
    summary: "Planning and execution of UNDP Peace Talk Cafe 2022 at North End Cafe.",
    sector: ["Events", "International Development"],
    group: "Other Work",
  },
  {
    slug: "digital-khichuri-challenge-auw-cohort",
    images: ["/images/projects/digital-khichuri-challenge-auw-cohort/01.jpg"],
    title: "Digital Khichuri Challenge — AUW Cohort",
    year: "2022",
    summary: "Campus activation for DKC 2022, AUW Cohort.",
    sector: ["Campaigns", "International Development"],
    group: "Other Work",
  },
  {
    slug: "dominos-pizza-meme-competition",
    images: ["/images/projects/dominos-pizza-meme-competition/01.jpg"],
    title: "Meme Competition for Domino's Pizza",
    org: "Domino's Pizza",
    summary: "Meme competition on Rantages Page and Rantages Goatposting for Friendship Day.",
    sector: ["Campaigns", "Media"],
    group: "Other Work",
  },
  {
    slug: "sip-for-change-undp",
    images: ["/images/projects/sip-for-change-undp/01.jpg"],
    title: "'Sip for Change' Campaign",
    org: "United Nations Development Programme",
    summary: "Planning and execution of 16 Days of Activism against Gender-Based Violence.",
    sector: ["Campaigns", "International Development"],
    group: "Other Work",
  },
  {
    slug: "just-another-gig-act-01",
    images: ["/images/projects/just-another-gig-act-01/01.jpg"],
    title: "Just Another Gig — Act 01",
    org: "Syndic Atelier Ltd.",
    summary: "Organized, planned, and executed an indoor plugged concert.",
    sector: ["Events"],
    group: "Other Work",
  },
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
