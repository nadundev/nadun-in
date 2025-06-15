import { notFound } from "next/navigation";
import ProjectPageContent from "@/app/components/ui/projectPageContent";
import { projects } from "@/lib/projectsData";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectPageContent project={project} />;
} 