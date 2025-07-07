"use client";

import { HeroDemo } from "./components/ui/hero";
import Marquee from "./components/ui/marquee";
import MainNavigation from "./components/ui/mainNavigation";
import PortfolioCard from "./components/ui/portfolioCard";
import SplashScreen from "./components/ui/splashScreen";
import { getPortfolioProjects } from "@/lib/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function Home() {
  // Portfolio projects data - now using shared data source
  const portfolioProjects = getPortfolioProjects();

  // Loading state for splash screen
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

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

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // Show button when user scrolls past 80% of the page
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setShowScrollToTop(scrollPercentage > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showContent]);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
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
            <section className="pt-32">
              <motion.div
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="font-mono uppercase tracking-wider text-sm font-medium text-center text-gray-500">
                  Achievements
                </p>
                <h3 className="text-4xl md:text-5xl font-sans italic font-normal text-gray-700 leading-tight text-center">
                  Awards and Certifications
                </h3>
                <p className="text-lg font-mono font-medium text-gray-500 max-w-3xl leading-normal text-center">
                  Recognition for excellence in design and continuous learning
                  through industry certifications. These achievements reflect my
                  commitment to staying at the forefront of design innovation
                  and best practices in user experience.
                </p>
                <div className="pt-10">
                                     <div className="flex items-center gap-3 md:gap-4 p-4 md:p-8 bg-gray-50 border-1 border-gray-200 rounded-t-2xl rounded-b-md mb-3">
                     <a
                       href="https://topweb.lk/winners/dynamicfitness/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex-shrink-0"
                     >
                       <img
                         src="/awards/topweb-june-2025.jpg"
                         alt="top-web-lk"
                         className="w-12 h-12 md:w-16 md:h-16 rounded-md hover:scale-105 transition-transform duration-200 cursor-pointer"
                       />
                     </a>
                    <p className="text-base font-mono font-medium text-gray-600 max-w-3xl leading-normal">
                      <span className="font-bold">
                        Top Web Sri Lanka Winner
                      </span>{" "}
                      I have won the top web Sri Lanka award in June 2025 by
                      designing and developing dynamicfitness.lk website.
                    </p>
                  </div>
                                     <div className="flex items-center gap-3 md:gap-4 p-4 md:p-8 bg-gray-50 border-1 border-gray-200 rounded-md mb-3">
                     <a
                       href="https://www.coursera.org/account/accomplishments/verify/DX2LMF924D2J"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex-shrink-0"
                     >
                       <img
                         src="/awards/google.png"
                         alt="top-web-lk"
                         className="w-10 h-10 md:w-14 md:h-14 rounded-md hover:scale-105 transition-transform duration-200 cursor-pointer"
                       />
                     </a>
                    <p className="text-base font-mono font-medium text-gray-600 max-w-3xl leading-normal">
                      <span className="font-bold">
                        Google UX Design Certification
                      </span>{" "}
                      Successfully completed the Foundations of User Experience
                      Design course.
                    </p>
                  </div>
                                     <div className="flex items-center gap-3 md:gap-4 p-4 md:p-8 bg-gray-50 border-1 border-gray-200 rounded-t-md rounded-b-2xl mb-3">
                     <a
                       href="https://www.coursera.org/account/accomplishments/verify/UIMHP08IWD93?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex-shrink-0"
                     >
                       <img
                         src="/awards/google.png"
                         alt="top-web-lk"
                         className="w-10 h-10 md:w-14 md:h-14 rounded-md hover:scale-105 transition-transform duration-200 cursor-pointer"
                       />
                     </a>
                    <p className="text-base font-mono font-medium text-gray-600 max-w-3xl leading-normal">
                      <span className="font-bold">
                        Google UX Design Certification
                      </span>{" "}
                      I have completed Start the UX Design Process: Empathize,
                      Define, and Ideate course.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.p
                className="text-sm font-mono text-gray-400 text-center mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Click on the images to view the certificates.
              </motion.p>
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
                  Experience
                </p>
                <h3 className="text-4xl md:text-5xl font-sans italic font-normal text-gray-700 leading-tight text-center">
                  Brands I Have Rendered My Expertise To
                </h3>
                <p className="text-lg font-mono font-medium text-gray-500 max-w-3xl leading-normal text-center">
                  With a passion for blending creative design and technical
                  execution, I&apos;ve partnered with both startups and enterprises
                  to elevate their digital presence.
                </p>

                {/* Company Logos Grid */}
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {[
                    { src: "/companies/company-1.svg", alt: "Company 1 Logo" },
                    { src: "/companies/company-2.svg", alt: "Company 2 Logo" },
                    { src: "/companies/company-4.svg", alt: "Company 4 Logo" },
                    { src: "/companies/company-5.svg", alt: "Company 5 Logo" },
                  ].map((logo, index) => (
                    <motion.div
                      key={index}
                      className="relative flex items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-300 ease-out"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="w-full h-12 object-contain transition-all duration-300"
                      />
                    </motion.div>
                  ))}
                </motion.div>
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

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollToTop && showContent && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
