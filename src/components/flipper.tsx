"use client";
import React, { useState, useEffect } from "react";
import { Subheading } from "@/components/subheading";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

export const Flipper = () => {
  const words = [
    "Software Engineer",
    "Design Engineer",
    "Full Stack Engineer",
    "Front-end Engineer",
    "Vibe Coding Engineer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-secondary relative order-first mx-4 mb-2 flex w-fit justify-center overflow-hidden rounded-md px-2 py-0.5 pt-0 text-sm shadow-[var(--shadow-aceternity)] sm:order-last sm:mx-0 sm:mb-0"
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          layoutId={`word-${words[currentIndex]}`}
          key={currentIndex}
          initial={{ y: -20, filter: "blur(10px)" }}
          animate={{
            y: 0,
            filter: "blur(0px)",
            x: [0, -2, 2, 0],
          }}
          exit={{ y: 20, filter: "blur(10px)" }}
          transition={{
            duration: 0.5,
            x: {
              duration: 0.4,
              delay: 0.5,
            },
          }}
          className="inline-block whitespace-nowrap"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>{" "}
    </motion.div>
  );
};
