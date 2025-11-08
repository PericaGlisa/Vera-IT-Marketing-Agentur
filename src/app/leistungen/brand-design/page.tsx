"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Palette, Eye, Target, Layers, Zap, Heart } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { PriceLabel } from "@/components/ui/price-label"
import Link from "next/link"

const features = [
  {
    icon: Target,
    title: "Brand Strategy",
    description: "Entwicklung einer klaren Markenstrategie, die Ihre Werte und Vision authentisch kommuniziert.",
  },
  {
    icon: Eye,
    title: "Visual Identity",
    description: "Einprägsame Logos, Farbpaletten und Typografie, die Ihre Marke unverwechselbar machen.",
  },
  {
    icon: Layers,
    title: "Brand Guidelines",
    description: "Umfassende Style Guides für konsistente Markenführung über alle Touchpoints hinweg.",
  },
  {
    icon: Palette,
    title: "Print & Digital Design",
    description: "Kohärente Designs für alle Medien - von Visitenkarten bis zu digitalen Kampagnen.",
  },
  {
    icon: Zap,
    title: "Brand Activation",
    description: "Strategische Markteinführung und Aktivierung Ihrer neuen Markenidentität.",
  },
  {
    icon: Heart,
    title: "Emotional Branding",
    description: "Aufbau emotionaler Verbindungen zwischen Ihrer Marke und Ihrer Zielgruppe.",
  },
]

const designTools = [
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe InDesign",
  "Figma",
  "Sketch",
  "After Effects",
  "Cinema 4D",
  "Procreate",
  "Pantone",
  "FontExplorer",
  "Brand.ai",
  "Frontify",
]

const brandServices = [
  {
    title: "Brand Identity Paket",
    description: "Komplette Markenidentität von der Strategie bis zur visuellen Umsetzung.",
    deliverables: [
      "Brand Strategy Workshop",
      "Logo Design (3 Konzepte)",
      "Farbpalette & Typografie",
      "Brand Guidelines (30+ Seiten)",
      "Visitenkarten & Briefpapier",
    ],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
    popular: false,
  },
  {
    title: "Brand Refresh",
    description: "Modernisierung und Weiterentwicklung Ihrer bestehenden Markenidentität.",
    deliverables: [
      "Brand Audit",
      "Logo Redesign",
      "Aktualisierte Guidelines",
      "Digital Asset Library",
      "Rollout-Strategie",
    ],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
    popular: true,
  },
  {
    title: "Corporate Design System",
    description: "Umfassendes Design System für große Unternehmen und komplexe Markenarchitekturen.",
    deliverables: [
      "Master Brand Strategy",
      "Sub-Brand Architecture",
      "Comprehensive Guidelines",
      "Digital Brand Portal",
      "Team Training",
    ],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
    popular: false,
  },
]

export default function BrandDesignPage() {
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
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Markendesign</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Starke Marken, die im Gedächtnis bleiben. Wir entwickeln einzigartige Markenidentitäten, die Ihre Werte
            authentisch kommunizieren und emotionale Verbindungen schaffen.
          </p>
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/neue-kunden-form">Brand-Projekt starten</Link>
          </Button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
            Unser Markendesign Ansatz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-4 sm:p-6 hover:border-pink-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Brand Services */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
            Unsere Markendesign Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {brandServices.map((service, index) => (
              <motion.div
                key={service.title}
                className={`bg-zinc-800 border rounded-2xl p-6 sm:p-8 transition-all duration-300 relative flex flex-col ${
                  service.popular
                    ? "border-pink-500 scale-105 shadow-2xl shadow-pink-500/20"
                    : "border-gray-700 hover:border-pink-500/50"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: service.popular ? 1.05 : 1.02 }}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Beliebt
                    </span>
                  </div>
                )}
                <PriceLabel price={service.price} className="text-pink-400 font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl" />
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
                <div className="text-sm text-gray-500 mb-4">⏱️ {service.duration}</div>
                <div className="mb-6 flex-grow">
                  <h4 className="text-white font-semibold mb-3">Leistungen:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-pink-500 mt-1">✓</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  className={`w-full mt-auto ${
                    service.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg"
                      : "bg-zinc-700 hover:bg-zinc-600"
                  }`}
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
                className="px-3 py-2 sm:px-4 sm:py-2 bg-zinc-700 border border-gray-600 rounded-lg text-gray-300 hover:text-pink-500 hover:border-pink-500/50 transition-all duration-300 text-sm sm:text-base"
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
          className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 sm:mb-6">
            Bereit für eine starke Marke?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam eine Markenidentität entwickeln, die Ihre Zielgruppe begeistert und im Gedächtnis
            bleibt.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-pink-600 hover:bg-white/90 w-full sm:w-auto" asChild>
            <Link href="/beratung">Brand-Beratung buchen</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
