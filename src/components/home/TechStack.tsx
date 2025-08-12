"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ParticleBackground } from "@/components/ui/ParticleBackground"

const techStack = [
  {
    name: "React",
    icon: "⚛️",
    category: "Frontend"
  },
  {
    name: "Next.js",
    icon: "▲",
    category: "Framework"
  },
  {
    name: "TypeScript",
    icon: "📘",
    category: "Language"
  },
  {
    name: "Node.js",
    icon: "🟢",
    category: "Backend"
  },
  {
    name: "Python",
    icon: "🐍",
    category: "AI/ML"
  },
  {
    name: "AWS",
    icon: "☁️",
    category: "Cloud"
  },
  {
    name: "Docker",
    icon: "🐳",
    category: "DevOps"
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    category: "Database"
  },
  {
    name: "MongoDB",
    icon: "🍃",
    category: "Database"
  },
  {
    name: "TensorFlow",
    icon: "🧠",
    category: "AI/ML"
  },
  {
    name: "Kubernetes",
    icon: "⚙️",
    category: "DevOps"
  },
  {
    name: "GraphQL",
    icon: "📊",
    category: "API"
  },
  {
    name: "Vue.js",
    icon: "💚",
    category: "Frontend"
  },
  {
    name: "Flutter",
    icon: "📱",
    category: "Mobile"
  },
  {
    name: "Redis",
    icon: "🔴",
    category: "Cache"
  },
  {
    name: "Figma",
    icon: "🎨",
    category: "Design"
  }
]

export function TechStack() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(techStack.length / 4))
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  const visibleTechs = []
  for (let i = 0; i < 4; i++) {
    const index = (currentIndex * 4 + i) % techStack.length
    visibleTechs.push(techStack[index])
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 sm:left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
        <div 
          className="absolute bottom-1/4 right-1/6 sm:right-1/4 w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-green-500 to-teal-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            Unsere <span className="gradient-text">Tech-Stack</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Modernste Technologien für innovative und zukunftssichere Lösungen, die Ihr Unternehmen voranbringen.
          </p>
        </motion.div>

        {/* Tech Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {visibleTechs.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${currentIndex}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="group"
              >
                <div className="relative p-4 sm:p-6 bg-zinc-800 border border-gray-700 rounded-2xl hover:border-orange-500/50 transition-all duration-300 h-full text-center">
                  {/* Tech Icon */}
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  
                  {/* Tech Name */}
                  <h3 className="text-base sm:text-lg font-heading font-semibold text-white mb-2 sm:mb-3 group-hover:text-orange-500 transition-colors">
                    {tech.name}
                  </h3>
                  
                  {/* Category Badge */}
                  <span className="inline-block px-2 sm:px-3 py-1 text-xs font-medium bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 rounded-full border border-orange-500/30">
                    {tech.category}
                  </span>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 to-red-600/0 group-hover:from-orange-600/5 group-hover:to-red-600/5 rounded-2xl transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {Array.from({ length: Math.ceil(techStack.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange-500 scale-125"
                    : "bg-zinc-600 hover:bg-zinc-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6 sm:mt-8"
        >
          <p className="text-sm sm:text-base text-gray-400">
            Und viele weitere Technologien für maßgeschneiderte Lösungen
          </p>
        </motion.div>
      </div>
    </section>
  )
}