"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { MapPin, Clock, Users, Briefcase, Heart, Coffee, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/Button"

const benefits = [
  {
    icon: Heart,
    title: "Work-Life-Balance",
    description: "Flexible Arbeitszeiten und Remote-Work Möglichkeiten für optimale Work-Life-Balance.",
  },
  {
    icon: Zap,
    title: "Modernste Technologien",
    description: "Arbeiten Sie mit den neuesten Tools und Technologien in einem innovativen Umfeld.",
  },
  {
    icon: Users,
    title: "Starkes Team",
    description: "Werden Sie Teil eines motivierten Teams von Experten und lernen Sie voneinander.",
  },
  {
    icon: Globe,
    title: "Internationale Projekte",
    description: "Arbeiten Sie an spannenden Projekten für Kunden aus ganz Europa.",
  },
  {
    icon: Coffee,
    title: "Tolle Arbeitsatmosphäre",
    description: "Modernes Büro in Hamburg mit kostenlosem Kaffee, Snacks und regelmäßigen Team-Events.",
  },
  {
    icon: Briefcase,
    title: "Weiterbildung",
    description: "Kontinuierliche Weiterbildungsmöglichkeiten und Unterstützung bei Konferenzen.",
  },
]

const openPositions = [
  {
    title: "Senior AI Engineer",
    department: "AI & Machine Learning",
    type: "Vollzeit",
    location: "Hamburg / Remote",
    description:
      "Entwicklung und Implementierung von KI-Lösungen für unsere Kunden. Expertise in Python, TensorFlow und PyTorch erforderlich.",
    requirements: [
      "5+ Jahre Erfahrung in Machine Learning",
      "Expertise in Python, TensorFlow, PyTorch",
      "Erfahrung mit Cloud-Plattformen (AWS, GCP)",
      "Sehr gute Deutsch- und Englischkenntnisse",
    ],
  },
  {
    title: "Full-Stack Developer",
    department: "Development",
    type: "Vollzeit",
    location: "Hamburg / Remote",
    description: "Entwicklung moderner Web-Anwendungen mit React, Node.js und Cloud-Technologien.",
    requirements: [
      "3+ Jahre Erfahrung in Full-Stack Development",
      "Expertise in React, Node.js, TypeScript",
      "Erfahrung mit modernen Entwicklungstools",
      "Teamfähigkeit und agile Arbeitsweise",
    ],
  },
  {
    title: "UX/UI Designer",
    department: "Design & UX",
    type: "Vollzeit",
    location: "Hamburg",
    description:
      "Gestaltung benutzerfreundlicher Interfaces und Optimierung der User Experience für digitale Produkte.",
    requirements: [
      "3+ Jahre Erfahrung im UX/UI Design",
      "Expertise in Figma, Adobe Creative Suite",
      "Verständnis für User-Centered Design",
      "Portfolio mit relevanten Projekten",
    ],
  },
  {
    title: "Digitales Marketing Manager",
    department: "Digitales Marketing",
    type: "Vollzeit",
    location: "Hamburg / Remote",
    description: "Entwicklung und Umsetzung datengetriebener Marketing-Strategien für unsere Kunden.",
    requirements: [
      "3+ Jahre Erfahrung im Marketing",
      "Expertise in Google Ads, Facebook Ads, SEO",
      "Analytisches Denken und Datenaffinität",
      "Kreativität und strategisches Denken",
    ],
  },
  {
    title: "Project Manager",
    department: "Project Management",
    type: "Vollzeit",
    location: "Hamburg",
    description: "Leitung komplexer digitaler Projekte und Koordination zwischen Kunden und internen Teams.",
    requirements: [
      "3+ Jahre Erfahrung im Projektmanagement",
      "Zertifizierung in agilen Methoden (Scrum, Kanban)",
      "Ausgezeichnete Kommunikationsfähigkeiten",
      "Erfahrung in der IT-Branche",
    ],
  },
  {
    title: "DevOps Engineer",
    department: "Technology",
    type: "Vollzeit",
    location: "Hamburg / Remote",
    description: "Aufbau und Wartung von CI/CD-Pipelines und Cloud-Infrastrukturen.",
    requirements: [
      "4+ Jahre Erfahrung in DevOps",
      "Expertise in Docker, Kubernetes, AWS/GCP",
      "Erfahrung mit Infrastructure as Code",
      "Problemlösungsfähigkeiten und Teamwork",
    ],
  },
]

export default function CareersPage() {
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
            <span className="gradient-text">Karriere</span> bei Vera IT
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Gestalten Sie mit uns die Zukunft der digitalen Transformation. Werden Sie Teil eines innovativen Teams und
            arbeiten Sie an spannenden Projekten mit modernsten Technologien.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">Warum Vera IT?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">Offene Stellen</h2>
          <div className="space-y-6 sm:space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">{position.title}</h3>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                        {position.department}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4 leading-relaxed">{position.description}</p>

                    <div>
                      <h4 className="text-white font-semibold mb-2">Anforderungen:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-purple-500 mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:ml-8">
                    <Button size="lg" className="w-full lg:w-auto">
                      Jetzt bewerben
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Process */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">Bewerbungsprozess</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Bewerbung einreichen</h3>
              <p className="text-gray-400">Senden Sie uns Ihre vollständigen Bewerbungsunterlagen per E-Mail.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Erstes Gespräch</h3>
              <p className="text-gray-400">Lernen Sie uns in einem entspannten Video-Call kennen.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Willkommen im Team</h3>
              <p className="text-gray-400">Nach erfolgreicher Bewerbung heißen wir Sie herzlich willkommen.</p>
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
            Keine passende Stelle gefunden?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Wir sind immer auf der Suche nach talentierten Menschen. Senden Sie uns eine Initiativbewerbung!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@verait.de"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              Initiativbewerbung senden
            </a>
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
