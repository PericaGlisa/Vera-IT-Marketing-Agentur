"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Home,
  Briefcase,
  User,
  FolderOpen,
  BookOpen,
  Mail,
  Plus,
  ArrowUp,
} from "lucide-react"

const dockItems = [
  {
    name: "Startseite",
    href: "/",
    icon: Home,
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "Leistungen",
    href: "/leistungen",
    icon: Briefcase,
    color: "from-violet-500 to-purple-500",
  },
  {
    name: "Über Uns",
    href: "/ueber-uns",
    icon: User,
    color: "from-indigo-500 to-blue-500",
  },
  {
    name: "Projekte",
    href: "/projekte",
    icon: FolderOpen,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Blog",
    href: "/blog",
    icon: BookOpen,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Kontakt",
    href: "/kontakt",
    icon: Mail,
    color: "from-rose-500 to-orange-500",
  },
  {
    name: "Nach oben",
    href: "#",
    icon: ArrowUp,
    color: "from-blue-500 to-cyan-500",
    action: "scrollToTop",
  },
  {
    name: "Projekt starten",
    href: "/neue-kunden-form",
    icon: Plus,
    color: "from-purple-600 to-indigo-600",
    special: true,
  },
]

export function FloatingDock() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show dock after scrolling down 100px
      const shouldShowFromTop = scrollY > 100
      
      // Hide dock when near bottom (within 300px of footer to avoid overlap with BackToTop)
      const distanceFromBottom = documentHeight - (scrollY + windowHeight)
      const shouldHideNearBottom = distanceFromBottom < 300
      
      setIsVisible(shouldShowFromTop && !shouldHideNearBottom)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }

    // Initial check
    handleResize()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-20 sm:bottom-6 left-0 right-0 z-[70] pointer-events-none flex justify-center px-2 sm:px-4"
        >
          {/* Glass Container */}
          <div className="relative pointer-events-auto mx-auto">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-60"></div>
            
            {/* Main glass container */}
            <div className="relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl">
              {/* Inner glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-xl sm:rounded-2xl opacity-60"></div>
              
              {/* Dock Items */}
              <div className="relative flex items-center space-x-1 sm:space-x-2">
                {dockItems.map((item, index) => {
                  const Icon = item.icon
                  const isHovered = hoveredIndex === index
                  const isSpecial = item.special
                  
                  return (
                    <motion.div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      whileHover={{ scale: isMobile ? 1.1 : 1.2, y: isMobile ? -4 : -8 }}
                      whileTap={{ scale: 0.95 }}
                      animate={isSpecial ? {
                        scale: [1, 1.05, 1],
                        y: [0, -2, 0]
                      } : undefined}
                      transition={isSpecial ? {
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                      } : { duration: 0.2, ease: "easeOut" }}
                    >
                      {/* Tooltip */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: -50, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none hidden sm:block"
                          >
                            <div className="bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg border border-white/20 whitespace-nowrap">
                              {item.name}
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Icon Container */}
                      <div 
                        onClick={item.action === "scrollToTop" ? scrollToTop : undefined}
                        className={item.action === "scrollToTop" ? "cursor-pointer" : ""}
                      >
                        {item.action === "scrollToTop" ? (
                          <div className="relative group">
                            {/* Glow effect */}
                            <motion.div 
                              className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                            ></motion.div>
                            
                            {/* Icon background */}
                            <motion.div 
                              className={`relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${item.color} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                            >
                              {/* Inner glass effect */}
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-lg sm:rounded-xl opacity-60"></div>
                              
                              {/* Icon */}
                              <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white drop-shadow-lg relative z-10" />
                            </motion.div>
                          </div>
                        ) : (
                          <Link href={item.href}>
                            <div className="relative group">
                              {/* Glow effect */}
                              <motion.div 
                                className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl blur-md ${isSpecial ? 'opacity-30' : 'opacity-0 group-hover:opacity-60'} transition-opacity duration-300`}
                                animate={isSpecial ? {
                                  opacity: [0.3, 0.6, 0.3]
                                } : undefined}
                                transition={isSpecial ? {
                                  opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                } : undefined}
                              ></motion.div>
                              
                              {/* Icon background */}
                              <motion.div 
                                className={`relative w-10 h-10 sm:w-12 sm:h-12 ${isSpecial ? 'w-11 h-11 sm:w-14 sm:h-14' : ''} bg-gradient-to-r ${item.color} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                                animate={isSpecial ? { 
                                  scale: [1, 1.08, 1],
                                  x: [0, -2, 2, -2, 0],
                                  boxShadow: [
                                    "0 0 0 0 rgba(147, 51, 234, 0.4)",
                                    "0 0 0 8px rgba(147, 51, 234, 0)",
                                    "0 0 0 0 rgba(147, 51, 234, 0)"
                                  ]
                                } : {}}
                                transition={isSpecial ? { 
                                  scale: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
                                  x: { duration: 0.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
                                  boxShadow: { duration: 2, repeat: Infinity }
                                } : {}}
                              >
                                {/* Inner glass effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-lg sm:rounded-xl opacity-60"></div>
                                
                                {/* Icon */}
                                <Icon className={`${isSpecial ? 'w-5 h-5 sm:w-7 sm:h-7' : 'w-4 h-4 sm:w-6 sm:h-6'} text-white drop-shadow-lg relative z-10`} />
                                
                                {/* Special indicator for CTA */}
                                {isSpecial && (
                                  <motion.div
                                    className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
                                    animate={{ 
                                      scale: [1, 1.4, 1],
                                      boxShadow: [
                                        "0 0 0 0 rgba(255, 177, 66, 0.7)",
                                        "0 0 0 10px rgba(255, 177, 66, 0)",
                                        "0 0 0 0 rgba(255, 177, 66, 0)"
                                      ]
                                    }}
                                    transition={{ 
                                      duration: 2, 
                                      repeat: Infinity,
                                      ease: "easeInOut" 
                                    }}
                                  >
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                                  </motion.div>
                                )}
                              </motion.div>
                            </div>
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}