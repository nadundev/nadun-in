"use client";

import { motion } from "framer-motion";

// Tech data with labels and icons
const techStack = [
  {
    name: "Claude",
    icon: "/tech/claude.svg",
    description: "AI Assistant"
  },
  {
    name: "Cursor",
    icon: "/tech/cursor.svg", 
    description: "AI Code Editor"
  },
  {
    name: "ChatGPT",
    icon: "/tech/chatgpt.svg",
    description: "AI Assistant" 
  },
  {
    name: "Next.js",
    icon: "/tech/nextjs.svg",
    description: "React Framework"
  },
  {
    name: "Supabase", 
    icon: "/tech/supabase.svg",
    description: "Backend Platform"
  },
  {
    name: "Tailwind",
    icon: "/tech/tailwind.svg",
    description: "CSS Framework"
  }
];

export default function AnimatedTechGrid() {
  return (
    <motion.div
      className="mt-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto sm:grid-cols-3 sm:max-w-md">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 ease-out"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              ease: "easeOut", 
              delay: 0.1 + index * 0.1 
            }}
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="relative w-8 h-8 sm:w-10 sm:h-10"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={tech.icon}
                alt={`${tech.name} icon`}
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div className="text-center">
              <h4 className="text-sm font-mono font-semibold text-gray-800">
                {tech.name}
              </h4>
              <p className="text-xs font-mono text-gray-500 mt-1">
                {tech.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 