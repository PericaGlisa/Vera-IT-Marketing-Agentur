"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, AlertTriangle, Users, Database } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { PriceLabel } from "@/components/ui/price-label"
import Link from "next/link"

const features = [
  {
    icon: Shield,
    title: "Security Assessment",
    description: "Umfassende Sicherheitsanalyse Ihrer IT-Infrastruktur und Identifikation von Schwachstellen.",
  },
  {
    icon: Lock,
    title: "Penetration Testing",
    description: "Ethisches Hacking zur Aufdeckung von Sicherheitslücken in Ihren Systemen und Anwendungen.",
  },
  {
    icon: Eye,
    title: "Security Monitoring",
    description: "24/7 Überwachung Ihrer IT-Systeme mit sofortiger Reaktion auf Sicherheitsvorfälle.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Schnelle und professionelle Reaktion auf Sicherheitsvorfälle zur Schadensbegrenzung.",
  },
  {
    icon: Users,
    title: "Security Training",
    description: "Schulungen für Ihre Mitarbeiter zur Sensibilisierung für Cybersecurity-Risiken.",
  },
  {
    icon: Database,
    title: "Data Protection",
    description: "DSGVO-konforme Datenschutzlösungen und Verschlüsselung sensibler Informationen.",
  },
]

const securityServices = [
  {
    title: "Security Audit & Assessment",
    description: "Vollständige Bewertung Ihrer aktuellen Sicherheitslage mit detailliertem Bericht.",
    deliverables: [
      "Vulnerability Assessment",
      "Risk Analysis Report",
      "Compliance Check",
      "Security Roadmap",
      "Executive Summary",
    ],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
    risk: "Hoch",
  },
  {
    title: "Managed Security Services",
    description: "Kontinuierliche Überwachung und Verwaltung Ihrer IT-Sicherheit durch Experten.",
    deliverables: [
      "24/7 SOC Monitoring",
      "Threat Detection",
      "Incident Response",
      "Monthly Reports",
      "Security Updates",
    ],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
    risk: "Mittel",
  },
  {
    title: "Compliance & Governance",
    description: "Unterstützung bei der Einhaltung von Sicherheitsstandards und Compliance-Anforderungen.",
    deliverables: ["DSGVO Compliance", "ISO 27001 Support", "Policy Development", "Audit Preparation", "Documentation"],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
    risk: "Hoch",
  },
]

const threats = [
  {
    name: "Ransomware",
    description: "Verschlüsselung von Daten mit Lösegeldforderung",
    impact: "Sehr Hoch",
    frequency: "Steigend",
    prevention: "Backup-Strategien, Endpoint Protection, User Training",
  },
  {
    name: "Phishing",
    description: "Betrügerische E-Mails zur Datendiebstahl",
    impact: "Hoch",
    frequency: "Sehr Hoch",
    prevention: "Email Security, User Awareness, Multi-Factor Authentication",
  },
  {
    name: "Data Breaches",
    description: "Unbefugter Zugriff auf sensible Daten",
    impact: "Sehr Hoch",
    frequency: "Hoch",
    prevention: "Access Controls, Encryption, Network Segmentation",
  },
  {
    name: "Insider Threats",
    description: "Sicherheitsrisiken durch eigene Mitarbeiter",
    impact: "Hoch",
    frequency: "Mittel",
    prevention: "User Monitoring, Privilege Management, Background Checks",
  },
]

export default function CybersecurityPage() {
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
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Cybersicherheit</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Umfassender Schutz vor Cyberbedrohungen. Wir sichern Ihre IT-Infrastruktur, Daten und Geschäftsprozesse
            gegen moderne Cyberrisiken und gewährleisten Compliance.
          </p>
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/beratung">Security-Assessment starten</Link>
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
            Unsere Cybersicherheit Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-4 sm:p-6 hover:border-orange-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Threat Landscape */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
            Aktuelle Bedrohungslandschaft
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {threats.map((threat, index) => (
              <motion.div
                key={threat.name}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-orange-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">{threat.name}</h3>
                  <div className="flex gap-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        threat.impact === "Sehr Hoch"
                          ? "bg-red-500/20 text-red-400"
                          : threat.impact === "Hoch"
                            ? "bg-orange-500/20 text-orange-400"
                            : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {threat.impact}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">{threat.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Häufigkeit:</span>
                    <span className="text-orange-400">{threat.frequency}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Präventionsmaßnahmen:</h4>
                  <p className="text-gray-400 text-sm">{threat.prevention}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Services */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
            Unsere Security Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-orange-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{service.title}</h3>
                    <PriceLabel price={service.price} className="text-red-400 font-semibold text-xs xs:text-sm sm:text-base md:text-lg mb-4" />
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-gray-500">⏱️ {service.duration}</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        service.risk === "Hoch" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      Risiko: {service.risk}
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Leistungen:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-orange-500 mt-1">✓</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-zinc-700 hover:bg-zinc-600" asChild>
                  <Link href="/beratung">Beratung anfragen</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 sm:mb-6">
            Schützen Sie Ihr Unternehmen jetzt!
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Cyberbedrohungen warten nicht. Lassen Sie uns gemeinsam Ihre IT-Sicherheit auf das nächste Level bringen.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-orange-600 hover:bg-white/90 w-full sm:w-auto" asChild>
            <Link href="/beratung">Kostenlose Security-Analyse</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
