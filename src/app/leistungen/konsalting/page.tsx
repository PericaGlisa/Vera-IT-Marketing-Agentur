"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, TrendingUp, Users, Target, Lightbulb, Settings } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { PriceLabel } from "@/components/ui/price-label"
import Link from "next/link"

const features = [
  {
    icon: Settings,
    title: "Digitale Transformation",
    description: "Strategien für erfolgreiche Digitalisierung von Geschäftsprozessen und Modernisierung der IT-Infrastruktur.",
  },
  {
    icon: Target,
    title: "IT-Strategie",
    description: "Entwicklung langfristiger IT-Strategien, die auf die Geschäftsziele Ihres Unternehmens abgestimmt sind.",
  },
  {
    icon: Users,
    title: "Change Management",
    description: "Veränderungsmanagement und Mitarbeiterschulungen für erfolgreiche Implementierung neuer Technologien.",
  },
  {
    icon: Lightbulb,
    title: "Innovations-Beratung",
    description: "Identifikation von Innovationsmöglichkeiten und Implementierung modernster technologischer Lösungen.",
  },
  {
    icon: TrendingUp,
    title: "Prozessoptimierung",
    description: "Analyse und Optimierung bestehender Geschäftsprozesse durch technologische Lösungen.",
  },
  {
    icon: Shield,
    title: "Risikomanagement",
    description: "IT-Risikomanagement und Entwicklung von Strategien für Geschäftskontinuität.",
  },
]

const consultingServices = [
  {
    title: "IT-Strategie & Roadmap",
    description: "Komplette Analyse des aktuellen Zustands und Entwicklung einer Strategie für die digitale Transformation.",
    deliverables: [
      "IT-Assessment",
      "Strategischer Plan",
      "Technology Roadmap",
      "ROI-Analyse",
      "Implementierungsplan",
    ],
    price: "Preis auf Anfrage",
    duration: "4-8 Wochen",
    risk: "Niedrig",
  },
  {
    title: "Digitale Transformation",
    description: "Vollständige Digitalisierung von Geschäftsprozessen mit Fokus auf Effizienz und Innovation.",
    deliverables: [
      "Process Mapping",
      "Technologieauswahl",
      "Implementierungsunterstützung",
      "Change Management",
      "Schulungsprogramm",
    ],
    price: "Preis auf Anfrage",
    duration: "3-6 Monate",
    risk: "Mittel",
  },
  {
    title: "IT-Governance & Compliance",
    description: "Aufbau von IT-Governance und Sicherstellung der Compliance mit Standards.",
    deliverables: ["IT-Governance Framework", "Policy-Entwicklung", "Compliance-Audit", "Risikobewertung", "Dokumentation"],
    price: "Preis auf Anfrage",
    duration: "6-12 Wochen",
    risk: "Niedrig",
  },
]

const benefits = [
  {
    name: "Effizienzsteigerung",
    description: "Prozessoptimierung durch Digitalisierung",
    impact: "Hoch",
    timeframe: "3-6 Monate",
    metric: "30-50% Produktivitätssteigerung",
  },
  {
    name: "Kostensenkung",
    description: "Automatisierung und Optimierung von IT-Ressourcen",
    impact: "Hoch",
    timeframe: "6-12 Monate",
    metric: "20-40% Reduzierung der Betriebskosten",
  },
  {
    name: "Wettbewerbsverbesserung",
    description: "Implementierung innovativer technologischer Lösungen",
    impact: "Sehr hoch",
    timeframe: "6-18 Monate",
    metric: "Signifikante Verbesserung der Marktposition",
  },
  {
    name: "Skalierbarkeit",
    description: "Vorbereitung auf zukünftiges Wachstum und Expansion",
    impact: "Mittel",
    timeframe: "Langfristig",
    metric: "Flexible IT-Architektur",
  },
]

export default function KonsaltingPage() {
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
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Beratung & Strategie</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Digitale Transformation und IT-Beratung zur Optimierung von Geschäftsprozessen. Wir helfen Ihnen dabei, 
            die volle Kraft der Technologie zur Erreichung Ihrer Geschäftsziele zu nutzen.
          </p>
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/neue-kunden-form">Beratung vereinbaren</Link>
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
            Unsere Beratungsleistungen
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

        {/* Benefits */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
            Vorteile der digitalen Transformation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.name}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">{benefit.name}</h3>
                  <div className="flex gap-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        benefit.impact === "Sehr hoch"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : benefit.impact === "Hoch"
                            ? "bg-cyan-500/20 text-cyan-400"
                            : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {benefit.impact}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">{benefit.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Zeitrahmen:</span>
                    <span className="text-emerald-400">{benefit.timeframe}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Erwartetes Ergebnis:</h4>
                  <p className="text-gray-400 text-sm">{benefit.metric}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Consulting Services */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
            Unsere Beratungspakete
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {consultingServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{service.title}</h3>
                    <PriceLabel price={service.price} />
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-gray-500">⏱️ {service.duration}</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        service.risk === "Niedrig" ? "bg-emerald-500/20 text-emerald-400" : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      Risiko: {service.risk}
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Lieferungen:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-emerald-500 mt-1">✓</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-zinc-700 hover:bg-zinc-600" asChild>
                  <Link href="/neue-kunden-form">Angebot anfordern</Link>
                </Button>
              </motion.div>
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
            Transformieren Sie Ihr Unternehmen noch heute!
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Digitale Transformation ist keine Option - sie ist eine Notwendigkeit. Beginnen wir gemeinsam die Reise in die digitale Zukunft.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-emerald-600 hover:bg-white/90 w-full sm:w-auto" asChild>
            <Link href="/neue-kunden-form">Kostenlose Beratung</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}