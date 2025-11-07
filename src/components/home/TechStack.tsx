"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const techCategories = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "React", icon: "⚛️", description: "UI Library" },
      { name: "Next.js", icon: "▲", description: "React Framework" },
      { name: "TypeScript", icon: "📘", description: "Type Safety" },
      { name: "Tailwind CSS", icon: "🎨", description: "Styling" }
    ]
  },
  {
    title: "Backend",
    color: "from-green-500 to-emerald-500",
    technologies: [
      { name: "Node.js", icon: "🟢", description: "Runtime" },
      { name: "Python", icon: "🐍", description: "AI/ML" },
      { name: "Express", icon: "🚀", description: "Web Framework" },
      { name: "FastAPI", icon: "⚡", description: "Python API" }
    ]
  },
  {
    title: "Database",
    color: "from-purple-500 to-violet-500",
    technologies: [
      { name: "PostgreSQL", icon: "🐘", description: "Relational DB" },
      { name: "MongoDB", icon: "🍃", description: "NoSQL DB" },
      { name: "Redis", icon: "🔴", description: "Cache" },
      { name: "Prisma", icon: "💎", description: "ORM" }
    ]
  },
  {
    title: "Cloud & DevOps",
    color: "from-orange-500 to-red-500",
    technologies: [
      { name: "AWS", icon: "☁️", description: "Cloud Platform" },
      { name: "Docker", icon: "🐳", description: "Containerization" },
      { name: "Kubernetes", icon: "⚙️", description: "Orchestration" },
      { name: "GitHub Actions", icon: "🔄", description: "CI/CD" }
    ]
  }
]

export function TechStack() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Unsere{" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Tech-Stack
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Modernste Technologien für innovative Lösungen
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative"
            >
              {/* Category Card */}
              <div className="relative bg-zinc-800/50 backdrop-blur-xl border border-zinc-700/50 rounded-2xl p-6 h-full transition-all duration-500 group-hover:bg-zinc-800/70 group-hover:border-zinc-600/50 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                
                {/* Category Header */}
                <div className="relative z-10 mb-6">
                  <h3 className={`text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:${category.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                    {category.title}
                  </h3>
                  <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full transition-all duration-300 group-hover:w-20`} />
                </div>

                {/* Technologies */}
                <div className="relative z-10 space-y-3">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                      className="flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 hover:bg-zinc-700/30"
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">{tech.name}</div>
                        <div className="text-gray-400 text-xs">{tech.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-purple-500/50 group-hover:to-violet-500/50 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">16+</div>
              <div className="text-gray-400 text-sm">Technologien</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">4</div>
              <div className="text-gray-400 text-sm">Kategorien</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm">Modern</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}