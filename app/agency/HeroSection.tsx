import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Animate h1 slide from top with bounce
    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'bounce.out',
      }
    )

    // Animate subtitle slide in from bottom
    tl.fromTo(
      subtitleRef.current,
      {
        opacity: 0,
        y: 30,
        filter: 'blur(10px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.3'
    )

    // Animate down arrow
    tl.fromTo(
      '.arrow-bounce',
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      },
      '-=0.2'
    )
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 
          ref={titleRef}
          className="font-sans text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent"
        >
          Create awesome websites with Nadun
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl font-mono md:text-2xl opacity-90 drop-shadow-lg"
        >
          4+ Years of experience in web development to build awsome websites
        </p>
        <div className="mt-8">
          <div className="arrow-bounce animate-bounce">
            <svg className="w-6 h-6 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection 