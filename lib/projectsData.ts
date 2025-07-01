export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  previewImage: string;
  primaryColor: string;
  gradient: string;
  role: string;
  startDate: string;
  completedDate: string;
  tools: string[];
}

export const projects: Project[] = [
  {
    slug: "electro",
    title: "Electro Ecommerce Website",
    description: "Simple ecommerce website for a local electronics store.",
    category: "Ecommerce",
    image: "/electro/electro.webp",
    previewImage: "/electro/electro-preview.webp",
    primaryColor: "#FF975B", // Blue
    gradient: "linear-gradient(180deg, #FF975B, #fff 30%)",
    role: "UX Designer",
    startDate: "March 2025",
    completedDate: "May 2025",
    tools: ["Figma", "Notion"],
  },
  {
    slug: "sisyphus",
    title: "Sisyphus Vendor Management",
    description:
      "Streamlines vendor management and inventory tracking for small businesses.",
    category: "Dashboard Design",
    image: "/sisyphus/sisyphus.webp",
    previewImage: "/sisyphus/sisyphus-preview.webp",
    primaryColor: "#14AE5C", // Blue
    gradient: "linear-gradient(180deg, #CFF7D3, #fff 30%)",
    role: "UX Designer",
    startDate: "March 2025",
    completedDate: "May 2025",
    tools: ["Figma", "TlDraw"],
  },
  {
    slug: "krypto",
    title: "Krypto Landing Page",
    description: "Elgent website landing page for Crypto and NFT platform.",
    category: "Web Design",
    image: "/krypto/krypto.webp",
    previewImage: "/krypto/krypto-preview.webp",
    primaryColor: "#AAD9D9", // cyan
    gradient: "linear-gradient(180deg, #AAD9D9, #fff 30%)",
    role: "Brand Designer",
    startDate: "February 2025",
    completedDate: "March 2025",
    tools: ["Illustrator", "Figma", "InDesign"],
  },
];

// Helper function to get portfolio data for the home page
export const getPortfolioProjects = () => {
  return projects.map((project) => ({
    title: project.title,
    description: project.description,
    category: project.category,
    previewImage: project.previewImage,
    link: `/projects/${project.slug}`,
    slug: project.slug,
  }));
};
