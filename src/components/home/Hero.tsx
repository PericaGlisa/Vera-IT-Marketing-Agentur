"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/Button"
import { TypedText } from "@/components/ui/TypedText"

// Lazy load heavy components
const ParticleBackground = dynamic(() => import("@/components/ui/ParticleBackground").then(mod => ({ default: mod.ParticleBackground })), {
  ssr: false,
  loading: () => null
})

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-4 sm:pb-8 lg:pb-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800" />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient Orbs - Responsive positioning */}
      <div className="absolute top-1/4 left-1/6 sm:left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 right-1/6 sm:right-1/4 w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center flex items-center justify-center min-h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center"
        >
          {/* Eyebrow Text */}
          <motion.div
            className="relative mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg px-4 py-2 inline-block">
              <p className="text-xs sm:text-sm text-purple-300 font-medium tracking-wide uppercase">
                Für innovative Unternehmen
              </p>
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            KI-Lösungen und <span className="gradient-text">Marketing-Automation</span> aus einer Hand
          </motion.h1>

          <motion.div
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-6 h-12 sm:h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypedText
              strings={[
                "KI-gestützte Lösungen für die Zukunft",
                "Innovative Web-Entwicklung mit modernster Technologie",
                "Datengetriebenes Marketing für maximalen ROI",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </motion.div>

          <motion.p
            className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Steigern Sie Ihren Umsatz um 40% und automatisieren Sie Prozesse durch maßgeschneiderte digitale Lösungen von Hamburgs führender Digitalen Agentur.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0 w-full max-w-sm sm:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex flex-col items-center w-full sm:w-auto">
              <Link href="/neue-kunden-form" className="w-full sm:w-auto">
                <Button size="lg" className="group w-full sm:w-auto min-w-[160px] sm:min-w-[200px]">
                  Projekt starten
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Unverbindlich • Kostenlose Erstberatung
              </p>
            </div>

            <div className="flex flex-col items-center w-full sm:w-auto">
              <Link href="/beratung" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="group bg-transparent w-full sm:w-auto min-w-[160px] sm:min-w-[180px]">
                  <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Beratungstermin buchen
                </Button>
              </Link>
              <p className="text-xs text-gray-500 mt-2 text-center">
                15 Min • Kostenlos
              </p>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-8 sm:mt-12 lg:mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-1.5 sm:mt-2 animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
