"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Palette, Users, Eye, Smartphone, Monitor, Zap } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

const features = [
  {
    icon: Users,
    title: "User Research & Testing",
    description: "Umfassende Nutzerforschung und Usability-Tests für datengetriebene Design-Entscheidungen.",
  },
  {
    icon: Eye,
    title: "Visual Design",
    description: "Ansprechende visuelle Designs, die Ihre Marke stärken und Nutzer emotional ansprechen.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive Designs, die auf allen Geräten eine optimale User Experience bieten.",
  },
  {
    icon: Monitor,
    title: "Prototyping & Wireframing",
    description: "Interaktive Prototypen und detaillierte Wireframes für bessere Kommunikation und Tests.",
  },
  {
    icon: Zap,
    title: "Design Systems",
    description: "Skalierbare Design Systems für konsistente User Interfaces und effiziente Entwicklung.",
  },
  {
    icon: Palette,
    title: "Brand Integration",
    description: "Nahtlose Integration Ihrer Markenidentität in alle digitalen Touchpoints.",
  },
]

const designTools = [
  "Figma",
  "Adobe XD",
  "Sketch",
  "Adobe Creative Suite",
  "Principle",
  "InVision",
  "Miro",
  "Framer",
  "Zeplin",
  "Abstract",
  "Maze",
  "Hotjar",
]

const designServices = [
  {
    title: "UX/UI Design für Web",
    description: "Komplette User Experience und Interface Design für Websites und Web-Anwendungen.",
    deliverables: ["User Journey Maps", "Wireframes", "High-Fidelity Designs", "Interactive Prototypes"],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
  },
  {
    title: "Mobile App Design",
    description: "Native iOS und Android App Designs mit plattform-spezifischen Design Guidelines.",
    deliverables: ["App Flow Diagrams", "Screen Designs", "Icon Design", "Animation Concepts"],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
  },
  {
    title: "Design System Entwicklung",
    description: "Umfassende Design Systems für skalierbare und konsistente User Interfaces.",
    deliverables: ["Component Library", "Style Guide", "Design Tokens", "Documentation"],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
  },
  {
    title: "UX Audit & Optimierung",
    description: "Analyse bestehender Interfaces und Optimierungsempfehlungen für bessere Usability.",
    deliverables: ["UX Audit Report", "Heatmap Analysis", "Improvement Roadmap", "A/B Test Concepts"],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
  },
]

export default function UIUXDesignPage() {
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
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-orange-600 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Palette className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Interface Design</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Benutzerorientiertes Design, das konvertiert. Wir schaffen intuitive und ansprechende User Experiences, die
            Ihre Nutzer begeistern und Ihre Geschäftsziele erreichen.
          </p>
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/neue-kunden-form">Design-Projekt starten</Link>
          </Button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">Unser Design-Ansatz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-4 sm:p-6 hover:border-rose-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-600 to-rose-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Services */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
            Unsere Design Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {designServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-rose-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">{service.title}</h3>
                  <span className="text-rose-400 font-bold text-lg">{service.price}</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
                <div className="mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>⏱️ {service.duration}</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Deliverables:</h4>
                  <ul className="space-y-1">
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-rose-500 mt-1">•</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white bg-transparent"
                  asChild
                >
                  <Link href="/kontakt">Beratung anfragen</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Tools */}
        <motion.div
          className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-6 sm:mb-8">Design Tools</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {designTools.map((tool, index) => (
              <motion.span
                key={tool}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-zinc-700 border border-gray-600 rounded-lg text-gray-300 hover:text-rose-500 hover:border-rose-500/50 transition-all duration-300 text-sm sm:text-base"
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
          className="text-center bg-gradient-to-r from-orange-600 to-rose-600 rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 sm:mb-6">
            Bereit für außergewöhnliches Design?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam ein Design schaffen, das Ihre Nutzer begeistert und Ihr Business voranbringt.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-rose-600 hover:bg-white/90 w-full sm:w-auto" asChild>
            <Link href="/neue-kunden-form">Design-Beratung buchen</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
