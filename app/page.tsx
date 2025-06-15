"use client";

import { HeroDemo } from "./components/ui/hero";
import Marquee from "./components/ui/marquee";
import MainNavigation from "./components/ui/mainNavigation";
import PortfolioCard from "./components/ui/portfolioCard";
import SplashScreen from "./components/ui/splashScreen";
import { getPortfolioProjects } from "@/lib/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  // Portfolio projects data - now using shared data source
  const portfolioProjects = getPortfolioProjects();

  // Loading state for splash screen
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  // Prevent scrolling when splash screen is visible
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <SplashScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {showContent && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-screen-xl mx-auto px-4">
            <MainNavigation />
            <HeroDemo />
            <section className="pt-6">
              <Marquee className="max-w-full">
                <span className="font-mono text-sm text-medium tracking-wider text-gray-700">
                  UX DESIGN | CASE STUDIES
                </span>
                <span className="font-mono text-sm font-medium tracking-wider text-gray-700">
                  WEB DESIGN | DEVELOPMENT
                </span>
                <span className="font-mono text-sm font-medium tracking-wider text-gray-700">
                  INTERACTION DESIGN | BRANDING
                </span>
                <span className="font-mono text-sm font-medium tracking-wider text-gray-700">
                  DESIGN ENGINEERING | PRODUCT DESIGN
                </span>
              </Marquee>
            </section>

            {/* Portfolio Section */}
            <section className="py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioProjects.map((project, index) => (
                  <PortfolioCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    category={project.category}
                    previewImage={project.previewImage}
                    link={project.link}
                  />
                ))}
              </div>
            </section>
            <section className="pt-32">
              <motion.div
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="font-mono uppercase tracking-wider text-sm font-medium text-center text-gray-500">
                  About Me
                </p>
                <h3 className="text-4xl md:text-5xl font-sans italic font-normal text-gray-700 leading-tight text-center">
                  Where UX Meets Visual Storytelling
                </h3>
                <p className="text-lg font-mono font-medium text-gray-500 max-w-3xl leading-normal text-center">
                  I&apos;m a multidisciplinary designer with 4+ years of experience in
                  UI/UX design, product design, and front-end engineering. I
                  specialize in crafting intuitive, user-centered digital
                  experiences that align business goals with real user needs.
                  <br />
                  <br />
                  Throughout my career, I&apos;ve worked with startups, agencies, and
                  international teams—designing everything from web apps to mobile
                  interfaces. My approach blends design thinking, strong visual
                  craft, and frontend know-how to bring ideas to life. I&apos;m
                  passionate about building elegant, accessible, and
                  conversion-friendly interfaces that create real impact.
                </p>
                <img
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnlhMjFsZHlpMTJ1cHFoemVjZ3l4MTlnYnhxZGM1MzM5ZGliYTUwZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BEw9U40r3BN4JA7JgP/giphy.gif"
                  alt="Celebration GIF"
                  className="w-full max-w-md h-auto rounded-lg mt-6"
                  loading="lazy"
                />
              </motion.div>
            </section>
            <section className="py-16">
              <div className="max-w-4xl mx-auto px-4 py-16">
                <hr className="pb-16" />
                <p className="text-center text-sm font-mono text-gray-500">
                  © 2025 All rights reserved.
                </p>
              </div>
            </section>
          </div>
        </motion.main>
      )}
    </>
  );
}
