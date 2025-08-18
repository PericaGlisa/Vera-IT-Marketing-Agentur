"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Home,
  Briefcase,
  User,
  Mail,
  Plus,
  ArrowUp,
  Calendar,
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
    name: "Kontakt",
    href: "/kontakt",
    icon: Mail,
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Beratungstermin buchen",
    href: "/beratung",
    icon: Calendar,
    color: "from-green-500 to-emerald-500",
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
          className="fixed bottom-16 xs:bottom-14 sm:bottom-6 left-0 right-0 z-[70] pointer-events-none flex justify-center px-1 xs:px-2 sm:px-4"
        >
          {/* Glass Container */}
          <div className="relative pointer-events-auto mx-auto">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-60"></div>
            
            {/* Main glass container */}
            <div className="relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-2.5 sm:p-3.5 shadow-2xl">
              {/* Inner glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-lg xs:rounded-xl sm:rounded-2xl opacity-60"></div>
              
              {/* Dock Items */}
              <div className="relative flex items-center space-x-2 xs:space-x-2.5 sm:space-x-2">
                {dockItems.map((item, index) => {
                  const Icon = item.icon
                  const isSpecial = item.special
                  
                  return (
                    <motion.div
                      key={item.name}
                      className="relative"
                      whileHover={{ scale: isMobile ? 1.05 : 1.1, y: isMobile ? -2 : -4 }}
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
                              className={`relative w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${item.color} rounded-md xs:rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                            >
                              {/* Inner glass effect */}
                              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-lg sm:rounded-xl opacity-60"></div>
                              
                              {/* Icon */}
                              <Icon className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-7 sm:h-7 text-white drop-shadow-lg relative z-10" />
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
                                className={`relative w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 ${isSpecial ? 'w-11 h-11 xs:w-13 xs:h-13 sm:w-16 sm:h-16' : ''} bg-gradient-to-r ${item.color} rounded-md xs:rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
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
                                <Icon className={`${isSpecial ? 'w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8' : 'w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-7 sm:h-7'} text-white drop-shadow-lg relative z-10`} />
                                
                                {/* Special indicator for CTA */}
                                {isSpecial && (
                                  <motion.div
                                    className="absolute -top-1 -right-1 xs:-top-1 xs:-right-1 sm:-top-1.5 sm:-right-1.5 w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
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
                                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full"></div>
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