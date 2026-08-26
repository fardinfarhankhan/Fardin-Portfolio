export type ExperienceEntry = {
  organization: string;
  organizationBlurb?: string;
  title: string;
  period: string;
  focus?: string;
  duties: string[];
  category: "engineering-consulting" | "media-events";
  /** Company logo, shown as a thumbnail on the experience timeline. */
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
};

/**
 * Reverse-chronological by start date. Duty bullets are taken close to
 * verbatim from the CV/bio (lightly cleaned for punctuation only).
 */
export const EXPERIENCE: ExperienceEntry[] = [
  {
    organization: "SMEC International Pty Ltd.",
    logo: "/images/experience/smec.jpg",
    logoWidth: 1000,
    logoHeight: 284,
    organizationBlurb:
      "A consulting company in Bangladesh providing civil, mechanical, and electrical engineering along with environmental, socioeconomic, and financial analysis, across roads, bridges, railways, airports, ports, and water resources management.",
    title: "Assistant Manager, Business Development",
    period: "October 2023 – Present",
    focus: "Project Management, Business Development and Operations",
    category: "engineering-consulting",
    duties: [
      "Conducted strategic market analysis across Roads & Highways, Bridges, Rail, Metro, Water, and Power sectors",
      "Led the preparation and submission of 50+ EOIs and 30+ RFPs for major infrastructure projects",
      "Developed technical and financial proposals for projects ranging from $1M to $120M in value",
      "Prepared technically robust and financially competitive proposals for design, construction supervision, project management, and asset management",
      "Coordinated with national and international experts to enhance technical methodologies, staffing, and overall proposal quality",
      "Collaborated closely with internal technical teams and design engineers to craft solution-oriented methodologies and schedules tailored to project requirements and client expectations",
      "Built and maintained long-term client relationships with government agencies and major donors including ADB, World Bank, JICA, and private sector stakeholders",
      "Collaborated with partner firms to establish joint ventures for large-scale tenders",
      "Ensured 100% compliance with donor and client guidelines, maintaining strong quality assurance",
    ],
  },
  {
    organization: "ETCBL Global",
    logo: "/images/experience/etcbl-global.jpg",
    logoWidth: 402,
    logoHeight: 124,
    organizationBlurb:
      "An engineering consultancy specializing in transmission line and substation design, project management, and technical support for power infrastructure projects, serving local and international EPC clients.",
    title: "Executive, Business Development",
    period: "May 2022 – June 2023",
    focus: "Business Development, Project Management, Tender Preparation",
    category: "engineering-consulting",
    duties: [
      "Managed client engagement with major utilities including PGCB, BPDB, BREB, DPDC, and DESCO in the power transmission and distribution sector",
      "Identified and secured new business opportunities through targeted outreach, strategic planning, and market research",
      "Prepared detailed EOIs and tender submissions for international and domestic projects",
      "Delivered professional presentations and proposals at client meetings and industry events",
      "Developed client databases and streamlined tracking systems for opportunity management",
      "Contributed to operational improvements and market expansion initiatives",
      "Supported project teams and BD units, enhancing cross-functional efficiency and successful execution",
      "Launched and supervised drone-survey operations, overseeing aerial spatial-data acquisition, processing, and quality control against defined technical standards",
    ],
  },
  {
    organization: "Chalkboard Communications Ltd.",
    logo: "/images/experience/chalkboard-communications.webp",
    logoWidth: 2000,
    logoHeight: 600,
    organizationBlurb:
      "A communication and advertising company, and a study platform, focused on client-based marketing, content creation, business-acquisition campaign activation, and product management.",
    title: "Head of Operations",
    period: "October 2020 – Present",
    focus: "Advertising, Campaigns, Social Development",
    category: "media-events",
    duties: [
      "Developing digital content such as articles, infographics, motion graphics, comics, audio-visuals, 2D animation, and documentaries",
      "Developing training modules and arranging workshops frequently",
      "Working with the team to plan and execute a fully integrated marketing and content strategy for clients",
      "Processing proposal letters and project documents",
      "Managing social media (Facebook, Instagram, LinkedIn) and website",
      "Making pitches and representing the team to accelerator programs and seminars",
      "Helping the organization build stronger internal and external communications with key audiences",
      "Designing campaigns on various social issues and creating communication materials",
    ],
  },
  {
    organization: "Syndic Atelier Ltd.",
    logo: "/images/experience/syndic-atelier.png",
    logoWidth: 1424,
    logoHeight: 373,
    organizationBlurb:
      "Focused on event planning, event management, live broadcasting, and event marketing strategies for conferences, concerts, and corporate events.",
    title: "Chief Technical Officer",
    period: "October 2019 – August 2023",
    focus: "Event and Campaign Management, Concert Activation, Live Streaming",
    category: "media-events",
    duties: [
      "Brainstorming and implementing event plans and concepts",
      "Handling budgeting and invoicing",
      "Liaising and negotiating with vendors, and searching for new vendors",
      "Negotiating sponsorship deals",
      "Handling logistics, influencers, and artists before and during project implementation",
      "Campaign ideation and pitching towards brands, business acquisition",
      "Managing branding and communication",
      "Developing event feedback surveys",
      "Researching opportunities for new clients and events",
      "Post-event communication, reporting, and analysis",
    ],
  },
  {
    organization: "Rantages.INC",
    logo: "/images/experience/rantages.jpg",
    logoWidth: 448,
    logoHeight: 446,
    organizationBlurb:
      "Bangladesh's first crude-humor site, formed in 2009, with almost 10 lac (1 million) audiences in total.",
    title: "Content Editor",
    period: "June 2017 – December 2025",
    focus: "Content Management, Campaign Management",
    category: "media-events",
    duties: [
      "Ideation and implementation of meme campaigns",
      "Meme competition management and activation campaign management",
      "Content creation promoting TVCs, OVCs, and static content for brands",
      "Processing proposal letters and project documents",
      "B2C pitching for yearly content plans",
      "Budget and invoice handling for different projects",
      "Moderation and monetization of social media groups and pages",
    ],
  },
];
