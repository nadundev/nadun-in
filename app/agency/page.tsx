'use client'

import React, { useRef } from 'react'
import VideoBackground from './VideoBackground'
import HeroSection from './HeroSection'
import VisionSection from './VisionSection'
import InnovationSection from './InnovationSection'
import FutureSection from './FutureSection'

const Agency = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="relative">
      {/* Fixed Video Background with Noise */}
      <VideoBackground containerRef={containerRef} />
      
      {/* Content that scrolls */}
      <div className="relative z-20">
        <HeroSection />
        <VisionSection />
        <InnovationSection />
        <FutureSection />
      </div>
    </div>
  )
}

export default Agency;