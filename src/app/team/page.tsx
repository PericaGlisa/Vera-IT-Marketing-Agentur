"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Github, Mail } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Dr. Sarah Weber",
    position: "CEO & Gründerin",
    department: "Leadership",
    bio: "15+ Jahre Erfahrung in digitaler Transformation. Promovierte Informatikerin mit Fokus auf KI und Machine Learning.",
    image: "/professional-woman-ceo.png",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@verait.de",
    },
  },
  {
    name: "Marcus Schmidt",
    position: "CTO",
    department: "Technology",
    bio: "Experte für Cloud-Architekturen und skalierbare Systeme. Ehemaliger Senior Engineer bei Google.",
    image: "/professional-cto.png",
    social: {
      linkedin: "#",
      github: "#",
      email: "marcus@verait.de",
    },
  },
  {
    name: "Lisa Chen",
    position: "Head of KI-Entwicklung",
    department: "AI & Machine Learning",
    bio: "Spezialistin für Deep Learning und Computer Vision. PhD in Artificial Intelligence von der TU München.",
    image: "/professional-woman-ai-expert-developer.png",
    social: {
      linkedin: "#",
      github: "#",
      email: "lisa@verait.de",
    },
  },
  {
    name: "Tom Müller",
    position: "Creative Director",
    department: "Design & UX",
    bio: "Award-winning Designer mit 12+ Jahren Erfahrung. Spezialist für User Experience und Markendesign.",
    image: "/professional-creative-director.png",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "tom@verait.de",
    },
  },
  {
    name: "Anna Kowalski",
    position: "Head of Marketing",
    department: "Digitales Marketing",
    bio: "Expertin für datengetriebenes Marketing und Growth Hacking. Ehemals bei Facebook und Spotify.",
    image: "/professional-woman-marketing-director.png",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "anna@verait.de",
    },
  },
  {
    name: "David Johnson",
    position: "Senior Full-Stack Developer",
    department: "Development",
    bio: "Full-Stack Entwickler mit Expertise in React, Node.js und Cloud-Technologien. 10+ Jahre Erfahrung.",
    image: "/professional-software-developer.png",
    social: {
      linkedin: "#",
      github: "#",
      email: "david@verait.de",
    },
  },
]

const departments = [
  { name: "Führung", count: 2, color: "from-purple-600 to-indigo-600" },
  { name: "KI & Machine Learning", count: 1, color: "from-indigo-600 to-cyan-600" },
  { name: "Entwicklung", count: 2, color: "from-cyan-600 to-emerald-600" },
  { name: "Design & UX", count: 1, color: "from-emerald-600 to-orange-600" },
  { name: "Digitales Marketing", count: 1, color: "from-orange-600 to-rose-600" },
  { name: "Projektmanagement", count: 1, color: "from-rose-600 to-purple-600" },
]

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-16 sm:pt-20 pb-12 sm:pb-16 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            Unser <span className="gradient-text">Team</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Lernen Sie die kreativen Köpfe hinter Vera IT kennen. Unser interdisziplinäres Team aus 8 Experten bringt
            jahrelange Erfahrung und Leidenschaft für Innovation mit.
          </p>
        </motion.div>

        {/* Department Overview */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">Unsere Bereiche</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${dept.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-2xl font-bold text-white">{dept.count}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{dept.name}</h3>
                <p className="text-gray-400 text-sm">
                  {dept.count} {dept.count === 1 ? "Experte" : "Experten"}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Work Approach */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">Unser Arbeitsansatz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <motion.div
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Agile Entwicklung</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Schnelle Iterationen und kontinuierliche Verbesserung für optimale Ergebnisse.
              </p>
            </motion.div>

            <motion.div
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Enge Zusammenarbeit</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transparente Kommunikation und partnerschaftliche Zusammenarbeit mit unseren Kunden.
              </p>
            </motion.div>

            <motion.div
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Innovation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Neueste Technologien und kreative Lösungsansätze für zukunftsfähige Projekte.
              </p>
            </motion.div>

            <motion.div
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Qualitätsfokus</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Höchste Standards in Code-Qualität, Design und Benutzererfahrung.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Members */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">Lernen Sie unser Team kennen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 p-1">
                    <div className="w-full h-full rounded-full bg-zinc-800 flex items-center justify-center">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={88}
                        height={88}
                        className="rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-orange-400 text-sm font-medium mb-1">{member.position}</p>
                  <p className="text-gray-500 text-xs">{member.department}</p>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 text-center">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-zinc-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 group"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="w-8 h-8 bg-zinc-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 group"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="w-8 h-8 bg-zinc-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 group"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 bg-zinc-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 group"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Culture & Fun Facts */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">Fun Facts über unser Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-orange-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">6 Länder</h3>
              <p className="text-gray-400 text-sm">Unser Team kommt aus Deutschland, Polen, China, USA, Kanada und Großbritannien</p>
            </motion.div>

            <motion.div
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-orange-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐕</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">3 Bürohunde</h3>
              <p className="text-gray-400 text-sm">Max, Luna und Charlie sorgen für gute Stimmung und Stressabbau</p>
            </motion.div>

            <motion.div
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-orange-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Gaming Corner</h3>
              <p className="text-gray-400 text-sm">PlayStation 5 und Retro-Arcade für kreative Pausen und Team-Battles</p>
            </motion.div>

            <motion.div
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-orange-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍕</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Pizza Freitag</h3>
              <p className="text-gray-400 text-sm">Jeden Freitag bestellen wir gemeinsam Pizza und machen Code Review</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          className="text-center bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 sm:mb-6">
            Werde Teil unseres Teams
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Wir suchen talentierte und leidenschaftliche Menschen, die mit uns die Zukunft der digitalen Transformation
            gestalten möchten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/karriere"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              Offene Stellen ansehen
            </a>
            <a
              href="mailto:careers@verait.de"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Initiativbewerbung senden
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
