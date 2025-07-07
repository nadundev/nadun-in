"use client";

import React from "react";
import { VercelV0Chat } from "@/components/ui/v0-ai-chat";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/24/outline";

const AiChat = () => {
  return (
    <main className="min-h-screen bg-white">
        {/* Gradient background */}
        <div
          className="absolute inset-x-0 top-0 h-screen pointer-events-none"
          style={{ background: "linear-gradient(180deg, #ffc8dd, #fff 30%)"}}
        />
      <div className="relative min-h-screen max-w-screen-xl mx-auto px-4 py-8 flex flex-col">
        
        {/* Back button */}
        <motion.div
          className="inline-block mb-8 self-start"
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
        
        {/* Centered AI Chat */}
        <div className="flex-1 flex items-center justify-center p-4">
          <VercelV0Chat />
        </div>
      </div>
    </main>
  );
};

export default AiChat;
