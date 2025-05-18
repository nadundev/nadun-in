export type Experience = {
  company: string;
  designation: string;
  logo: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  stack: string[];
  imageClass?: string;
};

export const experience: Experience[] = [
  {
    company: "Midfunnel.com",
    designation: "UX Design Engineer (SE1)",
    logo: "/images/logos/midfunnel.png",
    description:
      "Led the UX design and UI development of the midfunnel AI platform that was designed to progress deals in midfunnel pipelines. Building reusable components using Radix UI and Tailwind CSS.",
    startDate: "September 2024",
    endDate: "Present",
    location: "San Francisco, CA",
    stack: ["Next.js", "TypeScript", "CSS3", "Tailwind CSS", "Figma"],
  },
  {
    company: "AristotleHQ",
    designation: "UX Design Engineer (SE1)",
    logo: "/images/logos/aristotle.png",
    description:
      "Worked on top of the funnel lead generation platform. Building reusable components using Radix UI and Tailwind CSS.",
    startDate: "April 2024",
    endDate: "September 2024",
    location: "San Francisco, CA",
    stack: ["Next.js", "TypeScript", "CSS3", "Tailwind CSS", "Figma"],
  },
  {
    company: "Calcey",
    designation: "UI Engineer",
    logo: "/images/logos/calcey.png",
    description:
      "My responsibility ranges from designing usable UI solutions to implementing designed UI into code. I am in charge of maintaining the project's UI code base and adding new UI features. Maintained UI design systems and component libraries.",
    startDate: "May 2022",
    endDate: "April 2024",
    location: "San Francisco, CA",
    stack: [
      "React",
      "JavaScript",
      "CSS3",
      "Tailwind CSS",
      "SASS",
      "Figma",
      "Styled Components",
    ],
  },
  {
    company: "Xinfinit GmbH",
    designation: "Associate UI/UX Engineer",
    logo: "/images/logos/xinfinit.png",
    description:
      "In Xinfinit I have worked in Crypto Currency platform UI called DXOne. For UI I have used HTML5, CSS3 and SASS pre processor. Used BEM as a naming convention for css identifiers. As for UX I have designed and prototyped a Fintech product called mycharts.live.",
    startDate: "March 2022",
    endDate: "May 2022",
    location: "Hybrid",
    stack: ["JavaScript", "HTML5", "CSS3", "React"],
  },
  {
    company: "GTN",
    designation: "Intern UI/UX Engineer",
    logo: "/images/logos/gtn.png",
    description:
      "I have worked in Team Web technologies affiliated with Global Market Technologies. Worked actively on the RUBIX product from the start and contributed to the team with my creative design and development skills. Worked with technologies such as HTML, CSS, SASS and Angular Framework. Worked with version control and got a good understanding about agile development.",
    startDate: "July 2020",
    endDate: "June 2021",
    location: "Hybrid",
    stack: ["HTML5", "JavaScript", "CSS3"],
  },
];
