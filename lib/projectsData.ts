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

export interface WebProject {
  title: string;
  description: string;
  category: string;
  previewImage: string;
  previewType: "image" | "video";
  websiteUrl: string;
  technologies: string[];
  completedDate: string;
}

export const projects: Project[] = [
  {
    slug: "skilled",
    title: "Skilled Landing Page",
    description:
      "Landing page design for a education content platform called skilled.",
    category: "Landing Page",
    image: "/skilled/skilled.webp",
    previewImage: "/skilled/skilled-preview.webp",
    primaryColor: "#FFDEE9", // Blue
    gradient: "linear-gradient(180deg, #FFDEE9, #fff 30%)",
    role: "UX Designer",
    startDate: "June 2025",
    completedDate: "ongoing",
    tools: ["Figma", "Miro", "Notion"],
  },
  {
    slug: "tutory",
    title: "Tutory Tutor Booking Platform",
    description:
      "Helping students to find the right tutor and help tutors to find new students.",
    category: "Mobile App",
    image: "/tutory/tutory.webp",
    previewImage: "/tutory/tutory-preview.webp",
    primaryColor: "#35A0FE", // Blue
    gradient: "linear-gradient(180deg, #35A0FE, #fff 30%)",
    role: "UX Designer",
    startDate: "June 2025",
    completedDate: "June 2025",
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
    slug: "havlet",
    title: "Havlet Yard Website",
    description:
      "This a landing page design I have done for a fictional company called Havlet Yard.",
    category: "Website Design",
    image: "/havlet/havlet-yard-main.webp",
    previewImage: "/havlet/havlet-yard.webp",
    primaryColor: "#D791FF", // Blue
    gradient: "linear-gradient(180deg, #D791FF, #fff 30%)",
    role: "UX Designer",
    startDate: "November 2023",
    completedDate: "November 2023",
    tools: ["Figma"],
  },
  {
    slug: "afterpay",
    title: "Afterpay Dashboard Design",
    description:
      "Free for all design that I did to practice my design skills and this is the result.",
    category: "Concept Design",
    image: "/afterpay/afterpay.webp",
    previewImage: "/afterpay/afterpay-preview.webp",
    primaryColor: "#6AFED0", // Blue
    gradient: "linear-gradient(180deg, #6AFED0, #fff 30%)",
    role: "UX Designer",
    startDate: "November 2023",
    completedDate: "November 2023",
    tools: ["Figma"],
  },
];

export const webProjects: WebProject[] = [
  {
    title: "Dev Portfolio - 2023",
    description: "Project that created for a local pub with GSAP animations.",
    category: "GSAP Animation",
    previewImage: "/web-projects/irishPreview.webp",
    previewType: "image",
    websiteUrl: "https://irishpub.netlify.app/",
    technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
    completedDate: "June 2025",
  },
  {
    title: "Dynamic Fitness",
    description:
      "Best web Sri Lanka winner 2025 - Website for a fitness center in Sri Lanka.",
    category: "B2C Website",
    previewImage: "/web-projects/dynamic-fitness.webm",
    previewType: "video",
    websiteUrl: "https://dynamicfitness.lk",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    completedDate: "December 2024",
  },
  {
    title: "Dev Portfolio - 2023",
    description:
      "Nadun Nissanka's Developer Portfolio from 2023 that created using React, three.js and Tailwind CSS",
    category: "Portfolio Website",
    previewImage: "/web-projects/nadunPreview.webp",
    previewType: "image",
    websiteUrl: "https://nadunnissankauiux.netlify.app/",
    technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
    completedDate: "December 2023",
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

// Helper function to get web projects data for the home page
export const getWebProjects = () => {
  return webProjects.map((project) => ({
    title: project.title,
    description: project.description,
    category: project.category,
    previewImage: project.previewImage,
    previewType: project.previewType,
    link: project.websiteUrl,
    isExternal: true,
    technologies: project.technologies,
    completedDate: project.completedDate,
  }));
};
