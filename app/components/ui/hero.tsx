"use client";

import { MapPinIcon, BuildingOfficeIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import Link from "next/link";

interface HeroProps {
  name?: string;
  title?: string;
  description?: string;
  location?: string;
  company?: string;
  className?: string;
}

export default function Hero({
  name = "Nadun",
  title = "UX Design Engineer",
  description = "crafting elegant user experiences and doing product design for early stage startups",
  location = "Sri Lanka",
  company = "Midfunnel.com",
  className,
}: HeroProps) {
  // State to track if letters should be animated
  const [scope, animate] = useAnimate();

  // Full text to be animated
  const fullText = `${name} is a ${title}, ${description}.`;

  // Split text into words, then each word into characters for animation
  const words = fullText.split(" ");
  let characterIndex = 0;

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      // Animate letters with stagger effect
      animate(
        ".letter",
        { opacity: 1, y: 0 },
        { 
          delay: stagger(0.015),
          duration: 0.15,
          ease: "easeOut"
        }
      );
      // Animate info section after letters
      const totalCharacters = fullText.length;
      animate(
        ".info-section",
        { opacity: 1, y: 0 },
        { 
          delay: totalCharacters * 0.015 + 0.1,
          duration: 0.3,
          ease: "easeOut"
        }
      );
    }, 150);

    return () => clearTimeout(timer);
  }, [animate, fullText.length]);

  return (
    <motion.div
      className={cn(
        "relative w-full rounded-3xl border-1 border-orange-600/60 overflow-hidden p-12 md:p-16 lg:p-20",
        className
      )}
      ref={scope}
      animate={{
        background: [
          "linear-gradient(to right, rgb(248 113 113), rgb(251 146 60), rgb(244 114 182))",
          "linear-gradient(to right, rgb(251 146 60), rgb(244 114 182), rgb(248 113 113))",
          "linear-gradient(to right, rgb(244 114 182), rgb(248 113 113), rgb(251 146 60))",
          "linear-gradient(to right, rgb(248 113 113), rgb(251 146 60), rgb(244 114 182))"
        ]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }}
    >
      {/* Animated blob effects */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-r from-red-300 to-orange-300 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute top-0 -right-4 w-72 h-72 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div 
          className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-300 to-red-300 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 md:space-y-12">
        {/* Hero text with letter animation */}
        <div className="max-w-4xl min-h-[80px] md:min-h-[100px]">
          <p className="text-white font-sans text-lg md:text-xl lg:text-2xl xl:text-3xl font-light italic leading-tight">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-[0.25em]">
                {word.split("").map((char, charIndex) => {
                  const currentCharIndex = characterIndex++;
                  const isPartOfName = currentCharIndex < name.length;
                  return (
                    <motion.span
                      key={`${wordIndex}-${charIndex}`}
                      className={cn(
                        "letter inline-block italic",
                        isPartOfName ? "font-medium" : "font-medium"
                      )}
                      initial={{ opacity: 0, y: -16 }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </p>
        </div>

        {/* Location and company info */}
        <motion.div
          className="info-section flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-white/90"
          initial={{ opacity: 0, y: 8 }}
        >
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <MapPinIcon className="w-4 h-4" />
            <span className="text-sm md:text-base font-medium font-mono">{location}</span>
          </motion.div>
          <Link 
            href="https://midfunnel.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            passHref
          >
            <motion.div 
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <BuildingOfficeIcon className="w-4 h-4" />
              <span className="text-sm md:text-base font-medium font-mono">{company}</span>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Demo component to showcase the hero
export function HeroDemo() {
  return (
    <>
      <Hero />
    </>
  );
}
