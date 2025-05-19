"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import Link from "next/link";
import { Project, projects as defaultProjects } from "@/constants/projects";
import { SectionHeading } from "./section-heading";
import { getLogoForTechnology } from "@/utils/logo-mapper";
import { cn } from "@/lib/utils";
import { StackItem } from "./stack-item";

export const Projects = ({
  projects = defaultProjects,
}: {
  projects?: Project[];
}) => {
  const [selectedUXProject, setSelectedUXProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project, e: React.MouseEvent) => {
    if (project.type === 'ux') {
      e.preventDefault();
      setSelectedUXProject(project);
    }
    // else, let the default link behavior happen
  };

  return (
    <div className="shadow-section-inset dark:shadow-section-inset-dark my-4 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800">
      <SectionHeading delay={0.2}>I love building things</SectionHeading>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            whileHover={{
              boxShadow: "var(--shadow-aceternity)",
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            key={project.title}
            className="group group relative mb-4 rounded-2xl"
          >
            <Link
              href={project.href || "#"}
              onClick={(e) => handleProjectClick(project, e)}
            >
              <Image
                src={project.src}
                alt={project.title}
                height={300}
                width={300}
                className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
              <div className="flex flex-1 flex-col justify-between py-4 transition-all duration-300 group-hover:px-4">
                <div>
                  <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-200">
                    {project.title}
                  </h2>
                  <p className="mt-2 max-w-[14rem] text-sm text-neutral-500 dark:text-neutral-400">
                    {project.description}
                  </p>
                </div>
                <div className="mt-2 flex max-w-[14rem] flex-wrap gap-1">
                  <LayoutGroup>
                    {project.stack.map((stack) => (
                      <StackItem
                        key={stack + idx}
                        technology={stack}
                        className="-mr-3 hover:z-10"
                      />
                    ))}
                  </LayoutGroup>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      {/* Modal for UX Project */}
      <AnimatePresence>
        {selectedUXProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedUXProject(null)}
          >
            <motion.div
              className="relative max-w-lg w-full bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 text-2xl text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
                onClick={() => setSelectedUXProject(null)}
                aria-label="Close modal"
              >
                &times;
              </button>
              <Image
                src={selectedUXProject.src}
                alt={selectedUXProject.title}
                width={400}
                height={250}
                className="rounded-xl object-cover w-full mb-4"
              />
              <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                {selectedUXProject.title}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                {selectedUXProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedUXProject.stack.map((stack) => (
                  <span
                    key={stack}
                    className="bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 px-3 py-1 rounded-full text-xs"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
