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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
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
              <motion.div
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="font-mono uppercase tracking-wider text-sm font-medium text-center text-gray-500 mt-10">
                  Projects
                </p>
                <h3 className="text-4xl md:text-5xl font-sans italic font-normal text-gray-700 leading-tight text-center mb-10">
                  Experiences I have Designed
                </h3>
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
              </motion.div>
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
                  I&apos;m a multidisciplinary designer with 4+ years of
                  experience in UI/UX design, product design, and front-end
                  engineering. I specialize in crafting intuitive, user-centered
                  digital experiences that align business goals with real user
                  needs.
                  <br />
                  <br />
                  Throughout my career, I&apos;ve worked with startups,
                  agencies, and international teams—designing everything from
                  web apps to mobile interfaces. My approach blends design
                  thinking, strong visual craft, and frontend know-how to bring
                  ideas to life. I&apos;m passionate about building elegant,
                  accessible, and conversion-friendly interfaces that create
                  real impact.
                </p>

                {/* AI Generated Images Grid */}
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {[
                    { src: "/ai/ai-imag-1.png", alt: "AI Generated Image 1" },
                    { src: "/ai/ai-image-2.png", alt: "AI Generated Image 2" },
                    { src: "/ai/ai-image-3.png", alt: "AI Generated Image 3" },
                    { src: "/ai/ai-image-4.png", alt: "AI Generated Image 4" },
                  ].map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-100 hover:scale-105 transition-transform duration-300 ease-out shadow-sm hover:shadow-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.p
                  className="text-sm font-mono text-gray-400 text-center mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  These images are generated with prompts that Nadun wrote
                </motion.p>
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
