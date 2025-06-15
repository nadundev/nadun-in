"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRightIcon } from "@heroicons/react/24/solid"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface PortfolioCardProps {
  title: string
  description: string
  category: string
  previewImage: string
  link?: string
  className?: string
}

export default function PortfolioCard({ title, description, category, previewImage, link, className }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border-2 border-rose-400/30 bg-gradient-to-br from-orange-50 to-rose-50",
        link ? "cursor-pointer" : "",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        {/* Image container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <motion.img
            src={previewImage}
            alt={title}
            className="h-full w-full object-cover object-center"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-mono leading-snug font-medium uppercase tracking-wider text-rose-500">{category}</span>
              {link && (
                <motion.div whileHover={{ rotate: 45 }} transition={{ type: "spring", stiffness: 300 }}>
                  <ArrowUpRightIcon className="h-4 w-4 text-rose-500" />
                </motion.div>
              )}
            </div>
            <h3 className="font-sans mb-2 text-xl font-bold italic text-gray-700">{title}</h3>
            <p className="text-mono text-sm text-gray-500">{description}</p>
          </motion.div>

          {/* View project link */}
          {link && (
            <motion.div
              className="mt-4 overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: isHovered ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-mono inline-flex items-center gap-1 text-base font-medium text-rose-500">
                View project
              </span>
            </motion.div>
          )}
        </div>

        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
          style={{
            background: "linear-gradient(45deg, #fb923c, #f43f5e, #fb7185)",
            backgroundSize: "200% 200%",
          }}
          animate={{
            opacity: isHovered ? 0.15 : 0,
            backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%",
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
      </motion.div>
    )

    if (link) {
      return (
        <Link href={link} className="block">
          {cardContent}
        </Link>
      )
    }

    return cardContent
}