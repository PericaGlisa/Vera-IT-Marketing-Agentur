"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Users, Target, Award, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

const values = [
  {
    icon: Target,
    title: "Innovation",
    description:
      "Wir setzen auf modernste Technologien und innovative Ansätze, um Ihren digitalen Erfolg zu gewährleisten.",
  },
  {
    icon: Users,
    title: "Partnerschaft",
    description:
      "Wir arbeiten eng mit unseren Kunden zusammen und verstehen uns als langfristige Partner für Ihren Erfolg.",
  },
  {
    icon: Award,
    title: "Qualität",
    description: "Höchste Qualitätsstandards und kontinuierliche Verbesserung stehen im Mittelpunkt unserer Arbeit.",
  },
  {
    icon: Globe,
    title: "Nachhaltigkeit",
    description: "Wir entwickeln nachhaltige digitale Lösungen, die langfristig Wert schaffen und die Umwelt schonen.",
  },
]

const milestones = [
  { year: "2021", title: "Gründung", description: "Vera IT wird in Hamburg gegründet" },
  { year: "2022", title: "Erste Erfolge", description: "10+ erfolgreiche Projekte abgeschlossen" },
  { year: "2022", title: "Team-Expansion", description: "Wachstum auf 8 Experten" },
  { year: "2023", title: "KI-Spezialisierung", description: "Fokus auf AI Development" },
  { year: "2023", title: "Marktführer", description: "20+ Projekte, 8+ Teammitglieder" },
  { year: "2024", title: "Internationale Expansion", description: "25+ Projekte in ganz Europa" },
]

export default function AboutPage() {
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            Über <span className="gradient-text">Vera IT</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Seit 2021 transformieren wir Unternehmen durch innovative digitale Lösungen. Unser Team aus 8+ Experten
            entwickelt maßgeschneiderte KI-Anwendungen, moderne Websites und datengetriebene Marketing-Strategien.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          <motion.div
            className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6">Unsere Mission</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Wir machen digitale Transformation für Unternehmen jeder Größe zugänglich. Durch den Einsatz modernster
              Technologien wie Künstlicher Intelligenz, Cloud Computing und datengetriebener Analysen helfen wir unseren
              Kunden, ihre Geschäftsziele zu erreichen.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Unser Fokus liegt darauf, komplexe technische Lösungen verständlich und nutzbar zu machen, damit
              Unternehmen ihre Effizienz steigern und neue Märkte erschließen können.
            </p>
          </motion.div>

          <motion.div
            className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6">Unsere Vision</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Wir streben danach, die führende digitale Agentur in Europa zu werden, die Unternehmen dabei
              hilft, das volle Potenzial der digitalen Transformation auszuschöpfen.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Bis 2030 wollen wir 100+ Unternehmen dabei unterstützt haben, ihre digitalen Ziele zu erreichen und dabei
              nachhaltige, innovative Lösungen zu schaffen, die einen positiven Einfluss auf Gesellschaft und Umwelt
              haben.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">Unsere Werte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">Unsere Geschichte</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-violet-500 transform sm:-translate-x-0.5"></div>

            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`relative flex items-center ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-full transform sm:-translate-x-2 z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                    <div className="bg-zinc-800 border border-gray-700 rounded-2xl p-6">
                      <div className="text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 sm:mb-6">
            Werden Sie Teil unserer Erfolgsgeschichte
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam Ihr nächstes digitales Projekt realisieren und Ihr Unternehmen in die Zukunft
            führen.
          </p>
          <Link href="/kontakt">
            <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-white/90 w-full sm:w-auto">
              Jetzt Kontakt aufnehmen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
