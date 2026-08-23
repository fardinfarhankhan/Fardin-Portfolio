export type Client = {
  name: string;
  /** Path under /public, or null when no source logo file is available. */
  logo: string | null;
};

/** Organizations and clients Fardin has worked with, as listed on the original site. */
export const CLIENTS: Client[] = [
  { name: "Bangladesh Railway", logo: "/logos/clients/bangladesh-railway.png" },
  { name: "Bangladesh Bridge Authority", logo: "/logos/clients/bangladesh-bridge-authority.jpg" },
  { name: "National Board of Revenue", logo: "/logos/clients/national-board-of-revenue.jpg" },
  { name: "Roads and Highways Department", logo: "/logos/clients/roads-and-highways-department.jpg" },
  {
    name: "Local Government Engineering Department",
    logo: "/logos/clients/local-government-engineering-department.png",
  },
  { name: "The Commonwealth", logo: "/logos/clients/commonwealth.png" },
  { name: "Reckitt Benckiser", logo: "/logos/clients/reckitt-benckiser.png" },
  {
    name: "Transparency International Bangladesh",
    logo: "/logos/clients/transparency-international-bangladesh.jpg",
  },
  { name: "ICT Division Bangladesh", logo: "/logos/clients/ict-division-bangladesh.jpg" },
  { name: "International Labour Organization", logo: "/logos/clients/international-labour-organization.jpg" },
  { name: "Centre for Research Initiatives", logo: "/logos/clients/centre-for-research-initiatives.jpg" },
  {
    name: "Centre for Disability in Development",
    logo: "/logos/clients/centre-for-disability-in-development.png",
  },
  {
    name: "United Nations Development Programme",
    logo: "/logos/clients/united-nations-development-programme.webp",
  },
  {
    name: "United Nations Office on Drugs and Crime",
    logo: "/logos/clients/united-nations-office-on-drugs-and-crime.png",
  },
  { name: "Young Bangla", logo: "/logos/clients/young-bangla.png" },
  { name: "Global Alliance for Improved Nutrition", logo: null },
  { name: "Marico", logo: "/logos/clients/marico.jpg" },
  { name: "Power Grid Company of Bangladesh", logo: "/logos/clients/power-grid-company-of-bangladesh.png" },
  { name: "Grameenphone", logo: "/logos/clients/grameenphone.png" },
  { name: "Decathlon", logo: "/logos/clients/decathlon.png" },
  { name: "Pathao", logo: "/logos/clients/pathao.png" },
  { name: "Islamic University of Technology", logo: "/logos/clients/islamic-university-of-technology.jpg" },
  { name: "Domino's Pizza", logo: "/logos/clients/dominos-pizza.png" },
  { name: "bKash", logo: "/logos/clients/bkash.png" },
  { name: "Meghna Group of Industries", logo: "/logos/clients/meghna-group-of-industries.png" },
  { name: "Skitto", logo: "/logos/clients/skitto.png" },
  { name: "Impulse FC", logo: "/logos/clients/impulse-fc.jpg" },
  { name: "IUT Alumni Association", logo: "/logos/clients/iut-alumni-association.jpg" },
  { name: "IUT Career and Business Society", logo: "/logos/clients/iut-career-and-business-society.png" },
  { name: "Adventor Communications", logo: "/logos/clients/adventor-communications.jpg" },
  { name: "Oblique", logo: "/logos/clients/oblique.png" },
  { name: "Standard Chartered Bank", logo: "/logos/clients/standard-chartered-bank.png" },
];
