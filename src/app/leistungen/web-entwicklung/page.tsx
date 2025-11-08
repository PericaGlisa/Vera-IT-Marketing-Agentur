"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Smartphone, Zap, Shield, Search, Palette } from "lucide-react"
import { Button } from '@/components/ui/Button'
import { PriceLabel } from '@/components/ui/price-label'
import Link from "next/link"

const features = [
  {
    icon: Code,
    title: "Modern Web Technologies",
    description:
      "Entwicklung mit React, Next.js, TypeScript und anderen cutting-edge Technologien für beste Performance.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first Ansatz für optimale Darstellung auf allen Geräten - von Smartphone bis Desktop.",
  },
  {
    icon: Zap,
    title: "Performance Optimierung",
    description: "Schnelle Ladezeiten und optimierte User Experience durch moderne Entwicklungspraktiken.",
  },
  {
    icon: Shield,
    title: "Sicherheit & Datenschutz",
    description: "DSGVO-konforme Entwicklung mit höchsten Sicherheitsstandards und Datenschutz.",
  },
  {
    icon: Search,
    title: "SEO Optimierung",
    description: "Suchmaschinenoptimierte Websites für bessere Sichtbarkeit und höhere Rankings.",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description: "Individuelle Designs, die Ihre Marke perfekt repräsentieren und sich von der Konkurrenz abheben.",
  },
]

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Vue.js",
  "Angular",
  "Svelte",
  "Tailwind CSS",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "Docker",
]

const services = [
  {
    title: "Corporate Websites",
    description: "Professionelle Unternehmenswebsites mit CMS-Integration und modernem Design.",
    price: "Preis auf Anfrage",
  },
  {
    title: "E-Commerce Lösungen",
    description: "Vollständige Online-Shops mit Payment-Integration und Inventory-Management.",
    price: "Preis auf Anfrage",
  },
  {
    title: "Web Applications",
    description: "Komplexe Web-Anwendungen und SaaS-Plattformen für Ihr Business.",
    price: "Preis auf Anfrage",
  },
  {
    title: "Progressive Web Apps",
    description: "App-ähnliche Erfahrungen im Browser mit Offline-Funktionalität.",
    price: "Preis auf Anfrage",
  },
]

export default function WebDevelopmentPage() {
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
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Code className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Web-Entwicklung</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Moderne, performante Websites und Web-Anwendungen, die Ihre Nutzer begeistern. Von Corporate Websites bis zu
            komplexen SaaS-Plattformen - wir entwickeln digitale Lösungen, die funktionieren.
          </p>
          <Link href="/kontakt">
            <Button size="lg" className="w-full sm:w-auto">
              Kostenloses Beratungsgespräch
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
            Unsere Web-Entwicklung Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services & Pricing */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
            Unsere Web-Entwicklung Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <PriceLabel price={service.price} className="text-teal-400 font-bold text-xs xs:text-sm sm:text-base md:text-lg" />
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{service.title}</h3>
                  </div>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                <Link href="/neue-kunden-form" className="mt-auto">
                  <Button
                    variant="outline"
                    className="w-full border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white bg-transparent"
                  >
                    Beratung anfragen
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-6 sm:mb-8">Technologie-Stack</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-zinc-700 border border-gray-600 rounded-lg text-gray-300 hover:text-cyan-500 hover:border-cyan-500/50 transition-all duration-300 text-sm sm:text-base"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 sm:mb-6">
            Bereit für Ihr Web-Projekt?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam eine Website entwickeln, die Ihre Ziele erreicht und Ihre Nutzer begeistert.
          </p>
          <Link href="/neue-kunden-form">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-cyan-600 hover:bg-white/90 w-full sm:w-auto"
            >
              Projekt starten
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
