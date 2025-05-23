import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nadun Nissanka - UI Engineer",
  description:
    "A perfect portfolio website template that showcases your skills, minimal and smooth microinteractions, perfect for developers and designers.",
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Projects</Heading>
        <Subheading>
          I'm a passionate UI/UX Engineer dedicated to crafting elegant
          solutions for complex problems. With expertise in full-stack
          development, I enjoy building user-centric applications that make a
          difference.
        </Subheading>
        <Projects />
      </Container>
    </div>
  );
}
