export type Project = {
  title: string;
  src: string;
  href?: string;
  description: string;
  stack: string[];
  type: "dev" | "ux";
};

export const projects: Project[] = [
  {
    title: "Gatherly",
    src: "/projects/gatherly.png",
    href: "https://gatherlyinvites.netlify.app/",
    description:
      "[Workin Progress] - An web app that helps people to create invites and share them.",
    stack: ["React", "Tailwind CSS", "Supabase"],
    type: "dev",
  },
  {
    title: "Kapruka Login Redesign",
    src: "/projects/kapruka.png",
    description:
      "A UX case study on redesigning a Kapruka login page for better usability and accessibility.",
    href: "https://www.figma.com/community/file/1506223555561296488",
    stack: ["Figma", "User Research", "Prototyping"],
    type: "ux",
  },
  {
    title: "Dynamic Fitness",
    src: "/projects/dynamic-fitness.png",
    description:
      "Built a marketing site for Dynamic Fitness Sri Lanka, generating 800+ leads/month.",
    href: "https://dynamicfitness.lk/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    type: "dev",
  },
  {
    title: "Poke TCG V1",
    src: "/projects/poke-tcg.png",
    description:
      "You can find any pokemon card belongs to any generation through Poke TCG V1.",
    href: "https://pokemon-tcg-v1.netlify.app/",
    stack: ["React", "HTML5", "CSS3", "Pokemon"],
    type: "dev",
  },
  {
    title: "Sperm morphology classifier",
    src: "/projects/sperm.png",
    description:
      "Image classification of sperm morphology defects using machine learning.",
    href: "https://github.com/Nadunnissanka/Classifer-for-sperm",
    stack: ["Python", "Flask", "TensorFlow"],
    type: "dev",
  },
];
