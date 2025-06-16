import { notFound } from "next/navigation";
import { Metadata } from "next";
import ProjectPageContent from "@/app/components/ui/projectPageContent";
import { projects } from "@/lib/projectsData";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} - Nadun Nissanka`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} - ${project.category}`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - Nadun Nissanka`,
      description: project.description,
      images: [project.image],
    },
  };
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