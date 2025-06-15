"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onLoadingComplete: () => void;
}

export default function SplashScreen({ onLoadingComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("Initializing...");

  const loadingTexts = [
    "Initializing...",
    "Loading assets...",
    "Preparing portfolio...",
    "Almost ready...",
  ];

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Random increment between 5-20
      });
    }, 200);

    // Change loading text
    const textInterval = setInterval(() => {
      setCurrentText((prev) => {
        const currentIndex = loadingTexts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingTexts.length;
        return loadingTexts[nextIndex];
      });
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Main Logo/Title */}
      <motion.div
        className="flex flex-col items-center gap-6 mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="text-6xl md:text-7xl font-sans italic font-normal text-gray-800"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Nadun
        </motion.h1>
        <motion.p
          className="font-mono uppercase tracking-wider text-sm font-medium text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          UX Design Engineer
        </motion.p>
      </motion.div>

      {/* Loading Animation */}
      <motion.div
        className="flex flex-col items-center gap-4 w-full max-w-md px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
          <motion.div
            className="h-full bg-gray-600 rounded-full origin-left"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        {/* Loading Text */}
        <motion.p
          className="font-mono text-sm text-gray-500 text-center"
          key={currentText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {currentText}
        </motion.p>

        {/* Percentage */}
        <motion.p
          className="font-mono text-xs text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {Math.round(Math.min(progress, 100))}%
        </motion.p>
      </motion.div>

      {/* Animated Dots */}
      <motion.div
        className="flex gap-2 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-gray-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Bottom Signature */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <p className="text-xs font-mono text-gray-400">
          Crafting digital experiences...
        </p>
      </motion.div>
    </motion.div>
  );
} 