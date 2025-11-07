"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Video, Camera, Film, Mic, Edit, Play } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { PriceLabel } from "@/components/ui/price-label"
import Link from "next/link"

const features = [
  {
    icon: Camera,
    title: "Professionelle Videoproduktion",
    description: "4K-Videoproduktion mit professioneller Ausrüstung und erfahrenem Kamerateam.",
  },
  {
    icon: Edit,
    title: "Post-Production & Editing",
    description: "Professioneller Schnitt, Farbkorrektur, Motion Graphics und Sound Design.",
  },
  {
    icon: Mic,
    title: "Audio & Sound Design",
    description: "Kristallklare Audioaufnahmen und maßgeschneidertes Sound Design für Ihre Videos.",
  },
  {
    icon: Film,
    title: "Animation & Motion Graphics",
    description: "2D/3D-Animationen und Motion Graphics für erklärende und werbliche Inhalte.",
  },
  {
    icon: Play,
    title: "Live-Streaming & Events",
    description: "Professionelle Live-Streaming-Lösungen für Events, Webinare und Präsentationen.",
  },
  {
    icon: Video,
    title: "Multi-Platform Optimierung",
    description: "Optimierte Videos für alle Plattformen - von YouTube bis LinkedIn und TikTok.",
  },
]

const videoTypes = [
  {
    title: "Unternehmensvideos",
    description: "Imagefilme, Produktvideos und Unternehmensporträts für professionelle Kommunikation.",
    examples: ["Imagefilme", "Produktpräsentationen", "Mitarbeiterporträts", "Firmenevents"],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
    icon: "🏢",
  },
  {
    title: "Marketing & Werbung",
    description: "Werbespots, Social Media Content und Kampagnenvideos für maximale Reichweite.",
    examples: ["TV-Spots", "Social Media Videos", "Influencer Content", "Produktwerbung"],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
    icon: "📺",
  },
  {
    title: "Schulung & E-Learning",
    description: "Lehrvideos, Tutorials und E-Learning-Content für effektive Wissensvermittlung.",
    examples: ["Tutorial Videos", "Online-Kurse", "Schulungsvideos", "Webinar-Aufzeichnungen"],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
    icon: "🎓",
  },
  {
    title: "Event & Dokumentation",
    description: "Eventdokumentation, Konferenzen und Live-Streaming für besondere Anlässe.",
    examples: ["Event-Dokumentation", "Konferenz-Aufzeichnung", "Live-Streaming", "Interviews"],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
    icon: "🎬",
  },
]

const videoTools = [
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "DaVinci Resolve",
  "Cinema 4D",
  "Blender",
  "Pro Tools",
  "RED Cameras",
  "Sony FX Series",
  "Blackmagic",
  "Steadicam",
  "Drone Technology",
  "Professional Lighting",
]

export default function VideoProductionPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Video className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Video-Produktion</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Professionelle Video-Produktion für Marketing, Schulungen und Unternehmenskommunikation. Von der Konzeption
            bis zur finalen Auslieferung - wir bringen Ihre Botschaft zum Leben.
          </p>
          <Link href="/neue-kunden-form">
            <Button size="lg" className="w-full sm:w-auto">
              Video-Projekt starten
            </Button>
          </Link>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
            Unsere Video-Produktion Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-4 sm:p-6 hover:border-red-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Types */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
            Video-Kategorien die wir produzieren
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {videoTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-red-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{type.icon}</span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{type.title}</h3>
                  </div>
                  <PriceLabel price={type.price} className="text-red-400 font-semibold text-xs xs:text-sm sm:text-base md:text-lg" />
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">{type.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>⏱️ {type.duration}</span>
                </div>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Beispiele:</h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/kontakt">
                  <Button
                    variant="outline"
                    className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
                  >
                    Beratung anfragen
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Tools */}
        <motion.div
          className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-6 sm:mb-8">Equipment & Tools</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {videoTools.map((tool, index) => (
              <motion.span
                key={tool}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-zinc-700 border border-gray-600 rounded-lg text-gray-300 hover:text-red-500 hover:border-red-500/50 transition-all duration-300 text-sm sm:text-base"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-pink-600 to-red-600 rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 sm:mb-6">
            Bereit für professionelle Videos?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam Videos produzieren, die Ihre Botschaft kraftvoll und einprägsam vermitteln.
          </p>
          <Link href="/beratung">
            <Button variant="secondary" size="lg" className="bg-white text-red-600 hover:bg-white/90 w-full sm:w-auto">
              Video-Beratung buchen
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
