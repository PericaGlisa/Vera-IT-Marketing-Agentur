"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

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
    <section className="py-16 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Unsere <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Tech-Stack</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Modernste Technologien für innovative Lösungen
          </p>
        </motion.div>

        {/* Tech Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {visibleTechs.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${currentIndex}-${index}`}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 text-center transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                  {/* Tech Icon */}
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  
                  {/* Tech Name */}
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {tech.name}
                  </h3>
                  
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30">
                    {tech.category}
                  </span>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(techStack.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-500 scale-125"
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
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-sm">
            Und viele weitere Technologien für maßgeschneiderte Lösungen
          </p>
        </motion.div>
      </div>
    </section>
  )
}