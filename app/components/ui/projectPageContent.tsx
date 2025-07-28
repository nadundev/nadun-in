"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeftIcon,
  UserIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

import { Project } from "@/lib/projectsData";
import SisyphusContent from "@/app/components/projects/sisyphusContent";
import KryptoContent from "../projects/kryptoContent";
import ElectroContent from "../projects/electroContent";
import TutoryContent from "../projects/tutoryContent";
import AfterpayContent from "../projects/afterpayContent";
import HavletContent from "../projects/havletContent";

interface ProjectPageContentProps {
  project: Project;
}

// Function to render project-specific content
const renderProjectContent = (slug: string) => {
  switch (slug) {
    case "havlet":
      return <HavletContent />;
    case "tutory":
      return <TutoryContent />;
    case "electro":
      return <ElectroContent />;
    case "sisyphus":
      return <SisyphusContent />;
    case "afterpay":
      return <AfterpayContent />;
    case "krypto":
      return <KryptoContent />;
    default:
      return (
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center py-16">
            <p className="text-gray-500 font-mono text-sm">
              Project details coming soon...
            </p>
          </div>
        </motion.div>
      );
  }
};

export default function ProjectPageContent({
  project,
}: ProjectPageContentProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Gradient background */}
      <div
        className="absolute inset-x-0 top-0 h-screen pointer-events-none"
        style={{ background: project.gradient }}
      />

      <div className="relative max-w-screen-xl mx-auto px-4 py-8">
        {/* Back button */}
        <motion.div
          className="inline-block mb-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Link
            href="/"
            className="group inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg text-sm font-medium text-gray-800 hover:bg-white hover:border-gray-200 transition-all duration-300"
          >
            <div className="flex items-center gap-0 group-hover:gap-2 transition-all duration-300">
              <div className="w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                <ArrowLeftIcon className="h-3 w-3 flex-shrink-0" />
              </div>
              <span className="flex gap-1 items-center font-mono text-xs font-medium text-gray-600">
                <HomeIcon className="h-3 w-3 flex-shrink-0" />
                Home
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Project header with animations */}
        <div className="pt-16 pb-8">
          <div className="flex flex-col items-center gap-2 pb-16">
            <motion.h1
              className="text-5xl md:text-7xl font-sans italic font-normal text-gray-700 leading-tight text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              className="text-lg font-mono font-medium text-gray-500 max-w-3xl leading-normal text-center"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {project.description}
            </motion.p>

            {/* Project metadata */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <UserIcon
                  className="w-4 h-4"
                  style={{ color: project.primaryColor }}
                />
                <span className="font-mono font-medium text-gray-600">
                  {project.role}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarDaysIcon
                  className="w-4 h-4"
                  style={{ color: project.primaryColor }}
                />
                <span className="font-mono font-medium text-gray-600">
                  {project.startDate}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircleIcon
                  className="w-4 h-4"
                  style={{ color: project.primaryColor }}
                />
                <span className="font-mono font-medium text-gray-600">
                  {project.completedDate}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <WrenchScrewdriverIcon
                  className="w-4 h-4"
                  style={{ color: project.primaryColor }}
                />
                <span className="font-mono font-medium text-gray-600">
                  {project.tools.join(", ")}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Hero image placeholder */}
          <motion.div
            className="w-full aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Project content area - custom content based on project */}
        {renderProjectContent(project.slug)}
      </div>
    </main>
  );
}
