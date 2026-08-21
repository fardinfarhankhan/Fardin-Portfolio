/**
 * Core profile facts, verified directly from Fardin's CV and
 * biographical material. Nothing here is inferred or invented.
 */

export const PROFILE = {
  name: "Fardin Farhan Khan",
  location: "Dhaka, Bangladesh",
  email: "fardinfarhan.grad@gmail.com",
  phone: "+880 1786434126",
  cvUrl:
    "https://onedrive.live.com/?id=%2Fpersonal%2F99ec525d83d72e25%2FDocuments%2F0%2E%20Personal%20Docs%2FResume%20and%20CV%2FResume%20and%20CV%5F2026%2FFardin%20Farhan%20Khan%5FCV%5F2026%2Epdf&listurl=%2Fpersonal%2F99ec525d83d72e25%2FDocuments&ithint=file%2Cpdf&e=UBsAjA&migratedtospo=true&parent=%2Fpersonal%2F99ec525d83d72e25%2FDocuments%2F0%2E%20Personal%20Docs%2FResume%20and%20CV%2FResume%20and%20CV%5F2026&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy85OWVjNTI1ZDgzZDcyZTI1L0lRQS1VbEhndWQ1RlRySG5RRHVJSXlkeUFYZ2YySHpvVFhCMFVIcnJJM0JPQzRjP2U9VUJzQWpB&ga=1",

  positioning: "Transportation · Data · Research · Infrastructure",
  narrative:
    "Engineer. Researcher. Data Analyst. Transportation Professional. Problem Solver.",

  bioOpening:
    "I work at the intersection of transportation, data, infrastructure and human behaviour.",

  professionalOverview:
    "I am a Civil Engineer with a Master's degree in Applied Statistics and Data Science from Jahangirnagar University, currently pursuing a Master of Engineering in Transportation Safety at Bangladesh University of Engineering and Technology, specializing in transportation systems, travel behaviour, and data-driven infrastructure planning. My work focuses on applying statistical and computational methods to analyze mobility patterns and support efficient and sustainable transport solutions, particularly in developing country contexts.",

  professionalOverviewContinued:
    "Professionally, I work as an Assistant Manager – Business Development at SMEC, where I contribute to large-scale infrastructure projects across the transport, water, and power sectors, funded by organizations such as ADB, the World Bank, and JICA. My role includes strategic market analysis, proposal development, project coordination, and stakeholder engagement. I have contributed to 50+ EOIs and 30+ RFPs for projects valued between USD 1M–120M, supporting the successful acquisition of approximately USD 38M in consultancy assignments. I have also engaged in media, branding, and communication initiatives across 40+ projects with organizations including United Nations Development Programme, bKash, Pathao, Ericsson, and Grameenphone.",

  personalObjective:
    "A Civil Engineer with strong analytical, organizational, and problem-solving skills. A proactive and adaptable individual with a positive “can-do” attitude, capable of working effectively both independently and within a team environment. Able to perform efficiently under pressure while maintaining professionalism, responsiveness, and commitment to quality work.",

  languages: [
    { name: "English", level: "Fluent in speaking and writing" },
    { name: "Bangla", level: "Native language" },
  ],

  coreCompetencies: [
    "Strong project coordination and engineering support experience",
    "Skilled in BOQ, technical methodologies, and planning",
    "Expertise in proposal writing, tender preparation, and market analysis",
    "Effective stakeholder engagement and client communication",
    "Strong analytical, problem-solving, and interpersonal skills",
    "Adaptable, detail-oriented, and efficient under tight deadlines",
  ],

  testScores: [
    {
      test: "Graduate Record Examination (GRE)",
      overall: "328",
      breakdown: "Quantitative 166 · Verbal 162 · Analytical Writing 3.5",
    },
    {
      test: "IELTS Academic",
      overall: "7.0",
      breakdown:
        "Listening 7.5 · Reading 7.5 · Writing 7.0 · Speaking 6.5",
    },
  ],

  memberships: [
    { org: "The Institution of Engineers, Bangladesh (IEB)", role: "Associate Member", id: "A-29714" },
    { org: "American Society of Civil Engineers (ASCE)", role: "Member", id: "12593046" },
    { org: "Internet Society", role: "Member", id: "2366769" },
    { org: "Institution of Civil Engineers (ICE)", role: "Student Member", id: "093987105" },
    { org: "Institute of Transportation Engineers (ITE)", role: "Student Member", id: "S-1092703" },
    { org: "American Concrete Institute (ACI)", role: "Student Member", id: "02020088" },
    { org: "International Association of Engineers (IAENG)", role: "Member", id: "565647" },
  ],

  leadershipRoles: [
    "Founding Member — Humans of IUT",
    "Organizing Committee Member, Cennovation 2018–2019",
    "Campaign Lead at 'Cyber Savers', a movement against cybercrime",
    "Treasurer, IUT CEE Cricket Team (2021)",
    "Organizing Secretary, Scintilla Science Club (2014)",
    "Corresponding Secretary, Josephite Cultural Forum (2015)",
  ],
} as const;
