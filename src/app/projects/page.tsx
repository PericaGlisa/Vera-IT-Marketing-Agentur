"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Calendar, Users, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce KI-Plattform",
    category: "AI Development",
    client: "TechMart GmbH",
    year: "2024",
    description:
      "Entwicklung einer KI-gestützten E-Commerce-Plattform mit personalisierten Produktempfehlungen und automatisierter Preisoptimierung.",
    image: "/ecommerce-ai-platform.svg",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "AWS"],
    results: [
      "40% Steigerung der Conversion Rate",
      "25% Erhöhung des durchschnittlichen Warenkorbwerts",
      "60% Reduzierung der Retourenquote",
    ],
    links: {
      website: "#",
      case_study: "#",
    },
  },
  {
    title: "Fintech Mobile App",
    category: "Mobile Development",
    client: "FinanceFlow AG",
    year: "2024",
    description:
      "Native iOS und Android App für digitales Banking mit biometrischer Authentifizierung und KI-basierter Ausgabenanalyse.",
    image: "/fintech-mobile-app.svg",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Machine Learning"],
    results: ["500.000+ Downloads in 6 Monaten", "4.8 Sterne App Store Rating", "30% Reduzierung der Supportanfragen"],
    links: {
      website: "#",
      case_study: "#",
    },
  },
  {
    title: "Healthcare Management System",
    category: "Web Development",
    client: "MedCare Solutions",
    year: "2023",
    description:
      "Umfassendes Praxisverwaltungssystem mit Patientenverwaltung, Terminplanung und integrierter Telemedizin-Funktion.",
    image: "/healthcare-management-system.svg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "WebRTC"],
    results: [
      "50+ Arztpraxen implementiert",
      "80% Zeitersparnis bei Verwaltungsaufgaben",
      "95% Patientenzufriedenheit",
    ],
    links: {
      website: "#",
      case_study: "#",
    },
  },
  {
    title: "Smart City IoT Platform",
    category: "IoT & AI",
    client: "Stadt Hamburg",
    year: "2023",
    description:
      "IoT-Plattform für intelligente Stadtplanung mit Echtzeitdatenanalyse für Verkehr, Energie und Umweltmonitoring.",
    image: "/smart-city-iot-platform.svg",
    technologies: ["Python", "Apache Kafka", "InfluxDB", "Grafana", "Azure IoT"],
    results: ["20% Reduzierung der Verkehrsstaus", "15% Energieeinsparung", "Echtzeitmonitoring von 1000+ Sensoren"],
    links: {
      website: "#",
      case_study: "#",
    },
  },
  {
    title: "EdTech Learning Platform",
    category: "Web Development",
    client: "EduTech Innovation",
    year: "2023",
    description: "Interaktive Online-Lernplattform mit KI-gestützter Personalisierung und Virtual Reality Komponenten.",
    image: "/edtech-learning-platform.svg",
    technologies: ["React", "Python", "Django", "WebXR", "TensorFlow"],
    results: ["100.000+ aktive Nutzer", "40% bessere Lernergebnisse", "85% Kursabschlussrate"],
    links: {
      website: "#",
      case_study: "#",
    },
  },
  {
    title: "Logistics Optimization AI",
    category: "AI Development",
    client: "LogiMax International",
    year: "2022",
    description:
      "KI-System zur Optimierung von Lieferketten mit Predictive Analytics und automatisierter Routenplanung.",
    image: "/logistics-optimization-ai.svg",
    technologies: ["Python", "Scikit-learn", "Apache Spark", "Kubernetes", "GCP"],
    results: ["30% Reduzierung der Lieferzeiten", "25% Kosteneinsparung", "99.5% Lieferzuverlässigkeit"],
    links: {
      website: "#",
      case_study: "#",
    },
  },
]

const categories = ["Alle", "AI Development", "Web Development", "Mobile Development", "IoT & AI"]

export default function ProjectsPage() {
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
            Unsere <span className="gradient-text">Projekte</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie eine Auswahl unserer erfolgreichsten Projekte. Von KI-gestützten Lösungen bis hin zu
            innovativen Web-Anwendungen - hier sehen Sie, was wir für unsere Kunden erreicht haben.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">25+</div>
            <p className="text-gray-400 text-sm sm:text-base">Erfolgreiche Projekte</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">20+</div>
            <p className="text-gray-400 text-sm sm:text-base">Zufriedene Kunden</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-rose-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">3+</div>
            <p className="text-gray-400 text-sm sm:text-base">Jahre Erfahrung</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ExternalLink className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">12+</div>
            <p className="text-gray-400 text-sm sm:text-base">Branchen</p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="space-y-12 sm:space-y-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative group">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 sm:h-80 object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-purple-500/90 text-white rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-purple-400 font-medium">{project.client}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">{project.year}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">{project.title}</h3>

                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologien:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-zinc-800 border border-gray-700 rounded-lg text-gray-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Ergebnisse:</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-gray-400 flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="w-full sm:w-auto">
                    Case Study ansehen
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 rounded-2xl p-8 sm:p-12 mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 sm:mb-6">
            Lassen Sie uns Ihr nächstes Projekt realisieren
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Haben Sie eine Idee für ein digitales Projekt? Kontaktieren Sie uns für eine kostenlose Beratung.
          </p>
          <Link href="/neue-kunden-form">
            <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-white/90 w-full sm:w-auto">
              Projekt besprechen
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
