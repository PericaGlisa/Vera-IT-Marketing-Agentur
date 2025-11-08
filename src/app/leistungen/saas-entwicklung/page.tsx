"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Cloud, Database, Shield, Zap, Users, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { PriceLabel } from "@/components/ui/price-label"
import Link from "next/link"

const features = [
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description:
      "Skalierbare SaaS-Lösungen auf AWS, Azure oder Google Cloud mit automatischer Skalierung und hoher Verfügbarkeit.",
  },
  {
    icon: Database,
    title: "Multi-Tenant Architecture",
    description: "Effiziente Datenarchitektur für mehrere Mandanten mit Isolation und optimaler Performance.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Höchste Sicherheitsstandards mit Verschlüsselung, SSO-Integration und Compliance-Konformität.",
  },
  {
    icon: Zap,
    title: "API-First Development",
    description: "RESTful und GraphQL APIs für nahtlose Integration mit Drittsystemen und mobilen Apps.",
  },
  {
    icon: Users,
    title: "User Management",
    description: "Umfassendes Benutzer- und Rollenverwaltungssystem mit granularen Berechtigungen.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Integrierte Analytics-Dashboards und Reporting-Tools für datengetriebene Entscheidungen.",
  },
]

const technologies = [
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS/Azure/GCP",
  "Stripe",
  "Auth0",
  "Elasticsearch",
  "GraphQL",
]

const saasTypes = [
  {
    title: "CRM & Sales Platforms",
    description: "Kundenbeziehungsmanagement-Systeme mit Pipeline-Tracking und Automatisierung.",
    examples: ["Lead Management", "Sales Automation", "Customer Analytics"],
    price: "Preis auf Anfrage",
  },
  {
    title: "Project Management Tools",
    description: "Kollaborative Projektmanagement-Plattformen mit Zeiterfassung und Reporting.",
    examples: ["Task Management", "Team Collaboration", "Resource Planning"],
    price: "Preis auf Anfrage",
  },
  {
    title: "E-Learning Platforms",
    description: "Umfassende Lernmanagementsysteme mit Video-Streaming und Fortschrittsverfolgung.",
    examples: ["Course Management", "Video Streaming", "Assessment Tools"],
    price: "Preis auf Anfrage",
  },
  {
    title: "HR & Recruiting Software",
    description: "Personalmanagement-Lösungen mit Bewerberverfolgung und Mitarbeiterportalen.",
    examples: ["Applicant Tracking", "Employee Onboarding", "Performance Management"],
    price: "Preis auf Anfrage",
  },
]

export default function SaaSDevelopmentPage() {
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
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Cloud className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            <span className="gradient-text">SaaS-Entwicklung</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Skalierbare Software-as-a-Service Lösungen für Ihr Business. Von der Konzeption bis zum Launch entwickeln
            wir cloud-native SaaS-Plattformen, die wachsen und sich anpassen.
          </p>
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/neue-kunden-form">SaaS-Projekt besprechen</Link>
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
            SaaS-Entwicklung Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-4 sm:p-6 hover:border-emerald-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SaaS Types */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
            SaaS-Lösungen die wir entwickeln
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {saasTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/50 transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <PriceLabel price={type.price} className="text-cyan-400 font-bold text-xs xs:text-sm sm:text-base md:text-lg" />
                <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{type.title}</h3>
                  </div>
                <p className="text-gray-400 leading-relaxed mb-4">{type.description}</p>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Beispiel-Features:</h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-emerald-500 mt-1">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white bg-transparent mt-auto"
                  asChild
                >
                  <Link href="/kontakt">Beratung anfragen</Link>
                </Button>
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
                className="px-3 py-2 sm:px-4 sm:py-2 bg-zinc-700 border border-gray-600 rounded-lg text-gray-300 hover:text-emerald-500 hover:border-emerald-500/50 transition-all duration-300 text-sm sm:text-base"
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
          className="text-center bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 sm:mb-6">
            Bereit für Ihre SaaS-Plattform?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam eine skalierbare SaaS-Lösung entwickeln, die Ihr Business transformiert.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-emerald-600 hover:bg-white/90 w-full sm:w-auto"
            asChild
          >
            <Link href="/neue-kunden-form">Kostenlose Beratung</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
