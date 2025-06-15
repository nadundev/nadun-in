"use client";
import type React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: "slow" | "normal" | "fast";
}

export default function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  speed = "normal",
}: MarqueeProps) {
  const speedClass = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee-fast",
  }[speed];

  return (
    <div
      className={cn(
        "relative flex overflow-hidden rounded-md border border-gray-800 bg-white py-3 px-6",
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 gap-4 items-center justify-around whitespace-nowrap selection:bg-black selection:text-white",
          speedClass,
          reverse && "animate-reverse",
          pauseOnHover && "hover:animate-marquee-slow"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 gap-4 items-center justify-around whitespace-nowrap selection:bg-black selection:text-white",
          speedClass,
          reverse && "animate-reverse",
          pauseOnHover && "hover:animate-marquee-slow"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
      
      {/* Left gradient fade */}
      <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      
      {/* Right gradient fade */}
      <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </div>
  );
}

// Example usage component
export function MarqueeDemo() {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Marquee Component Demo</h2>
        <p className="text-gray-600">
          A smooth scrolling marquee component similar to your design
        </p>
      </div>

      {/* Main marquee matching the screenshot */}
      <Marquee className="max-w-full">
        <span className="text-sm font-mono tracking-wider text-gray-700">
          CASE STUDIES | DESIGN PROCESS
        </span>
      </Marquee>

      {/* Additional examples */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Variations</h3>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">Reverse direction:</p>
            <Marquee reverse className="max-w-full">
              <span className="text-sm font-mono tracking-wider text-gray-700">
                PORTFOLIO | CREATIVE WORK | PROJECTS
              </span>
            </Marquee>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Pause on hover:</p>
            <Marquee pauseOnHover className="max-w-full">
              <span className="text-sm font-mono tracking-wider text-gray-700">
                HOVER TO PAUSE | INTERACTIVE DESIGN
              </span>
            </Marquee>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Fast speed:</p>
            <Marquee speed="fast" className="max-w-full">
              <span className="text-sm font-mono tracking-wider text-gray-700">
                FAST SCROLLING | DYNAMIC CONTENT
              </span>
            </Marquee>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Multiple items:</p>
            <Marquee className="max-w-full">
              <span className="text-sm font-mono tracking-wider text-gray-700">
                BRANDING
              </span>
              <span className="text-sm font-mono tracking-wider text-gray-700">
                WEB DESIGN
              </span>
              <span className="text-sm font-mono tracking-wider text-gray-700">
                UI/UX
              </span>
              <span className="text-sm font-mono tracking-wider text-gray-700">
                DEVELOPMENT
              </span>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
