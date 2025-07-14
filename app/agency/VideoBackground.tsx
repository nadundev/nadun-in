'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

interface VideoBackgroundProps {
  containerRef: React.RefObject<HTMLDivElement | null>
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ containerRef }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current

    if (!video || !container) return

    // Wait for video metadata to load
    const handleLoadedMetadata = () => {
      const videoDuration = video.duration
      
      // Set container height based on video duration (e.g., 100vh per second)
      container.style.height = `${videoDuration * 100}vh`

      // Create ScrollTrigger animation
      gsap.to(video, {
        currentTime: videoDuration,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Smooth scrubbing
          onUpdate: (self) => {
            // Update video currentTime based on scroll progress
            video.currentTime = videoDuration * self.progress
          }
        }
      })
    }

    // Add event listener for metadata loaded
    video.addEventListener('loadedmetadata', handleLoadedMetadata)

    // If metadata is already loaded
    if (video.readyState >= 1) {
      handleLoadedMetadata()
    }

    // Cleanup
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [containerRef])

  return (
    <>
      <div className="fixed inset-0 w-full h-full overflow-hidden">
        <video 
          ref={videoRef}
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          preload="metadata"
        >
          <source src="/videos/space-optimized.mp4" type="video/mp4" />
          <source src="/videos/space.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Noisy Overlay */}
        <div 
          className="absolute inset-0 z-10 noise-overlay"
          style={{
            background: `
              radial-gradient(circle, transparent 20%, rgba(255,255,255,0.1) 20.5%, rgba(255,255,255,0.1) 21%, transparent 21.5%),
              radial-gradient(circle, transparent 20%, rgba(0,0,0,0.1) 20.5%, rgba(0,0,0,0.1) 21%, transparent 21.5%)
            `,
            backgroundSize: '15px 15px, 25px 25px',
            backgroundPosition: '0 0, 10px 10px',
            animation: 'noiseAnimation 0.5s infinite linear'
          }}
        />
        
        {/* Dark Overlay for better text readability */}
        <div 
          className="absolute inset-0 z-15" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
        />
      </div>
      
      <style jsx>{`
        @keyframes noiseAnimation {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-2px, 2px); }
          50% { transform: translate(2px, -2px); }
          75% { transform: translate(-1px, -1px); }
          100% { transform: translate(1px, 1px); }
        }
        
        .noise-overlay::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle, transparent 1px, rgba(255,255,255,0.05) 1px),
            radial-gradient(circle, transparent 1px, rgba(0,0,0,0.05) 1px);
          background-size: 3px 3px, 5px 5px;
          background-position: 0 0, 2px 2px;
          animation: noiseAnimation 0.1s infinite;
          pointer-events: none;
        }
        
        .noise-overlay::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 1px,
              rgba(255,255,255,0.02) 1px,
              rgba(255,255,255,0.02) 2px
            );
          animation: noiseAnimation 0.3s infinite reverse;
          pointer-events: none;
        }
      `}</style>
    </>
  )
}

export default VideoBackground 