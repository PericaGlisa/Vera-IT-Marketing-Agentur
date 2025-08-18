"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Award, Users, Calendar, ExternalLink, Clock, User, Quote } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce KI-Plattform",
    category: "KI-Entwicklung",
    client: "TechMart GmbH",
    year: "2024",
    description:
      "Entwicklung einer KI-gestützten E-Commerce-Plattform mit personalisierten Produktempfehlungen und automatisierter Preisoptimierung.",
    challenge: "TechMart benötigte eine Lösung zur Steigerung der Conversion Rate und Reduzierung der Retourenquote in ihrem Online-Shop.",
    solution: "Wir entwickelten eine KI-Plattform mit Machine Learning-Algorithmen für personalisierte Empfehlungen und dynamische Preisgestaltung.",
    image: "/ecommerce-ai-platform.svg",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "AWS"],
    results: [
      { metric: "Conversion Rate", value: "+40%", description: "Steigerung durch personalisierte Empfehlungen" },
      { metric: "Warenkorbwert", value: "+25%", description: "Erhöhung des durchschnittlichen Warenkorbwerts" },
      { metric: "Retourenquote", value: "-60%", description: "Reduzierung durch bessere Produktempfehlungen" },
    ],
    testimonial: {
      text: "Die KI-Plattform von Vera IT hat unseren Online-Shop revolutioniert. Die Ergebnisse übertreffen alle Erwartungen.",
      author: "Michael Schmidt",
      position: "CEO, TechMart GmbH"
    },
    timeline: "6 Monate",
    teamSize: "5 Entwickler",
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
    challenge: "FinanceFlow wollte eine sichere, benutzerfreundliche Banking-App mit innovativen KI-Features entwickeln.",
    solution: "Wir erstellten eine native App mit modernster Sicherheitstechnologie und intelligenter Ausgabenanalyse.",
    image: "/fintech-mobile-app.svg",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Machine Learning"],
    results: [
      { metric: "Downloads", value: "500K+", description: "Downloads in den ersten 6 Monaten" },
      { metric: "App Store Rating", value: "4.8★", description: "Durchschnittliche Bewertung" },
      { metric: "Support-Anfragen", value: "-30%", description: "Reduzierung durch intuitive UX" },
    ],
    testimonial: {
      text: "Vera IT hat eine App entwickelt, die unsere Kunden lieben. Die Benutzerfreundlichkeit ist außergewöhnlich.",
      author: "Sarah Weber",
      position: "Product Manager, FinanceFlow AG"
    },
    timeline: "8 Monate",
    teamSize: "6 Entwickler",
    links: {
      website: "#",
      case_study: "#",
    },
  },
  {
    title: "Healthcare Management System",
    category: "Web-Entwicklung",
    client: "MedCare Solutions",
    year: "2023",
    description:
      "Umfassendes Praxisverwaltungssystem mit Patientenverwaltung, Terminplanung und integrierter Telemedizin-Funktion.",
    challenge: "Arztpraxen benötigten eine digitale Lösung zur Effizienzsteigerung und besseren Patientenbetreuung.",
    solution: "Wir entwickelten ein All-in-One System mit Patientenverwaltung, Terminplanung und Telemedizin-Integration.",
    image: "/healthcare-management-system.svg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "WebRTC"],
    results: [
      { metric: "Implementierungen", value: "50+", description: "Arztpraxen nutzen das System" },
      { metric: "Zeitersparnis", value: "80%", description: "Bei Verwaltungsaufgaben" },
      { metric: "Patientenzufriedenheit", value: "95%", description: "Positive Bewertungen" },
    ],
    testimonial: {
      text: "Das System hat unsere Praxis digitalisiert und die Patientenbetreuung erheblich verbessert.",
      author: "Dr. Thomas Müller",
      position: "Hausarzt, MedCare Solutions"
    },
    timeline: "10 Monate",
    teamSize: "4 Entwickler",
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
    challenge: "Hamburg benötigte eine Lösung zur intelligenten Stadtplanung und Ressourcenoptimierung.",
    solution: "Wir entwickelten eine IoT-Plattform mit Echtzeitdatenanalyse und KI-gestützten Vorhersagen.",
    image: "/smart-city-iot-platform.svg",
    technologies: ["Python", "Apache Kafka", "InfluxDB", "Grafana", "Azure IoT"],
    results: [
      { metric: "Verkehrsstaus", value: "-20%", description: "Reduzierung durch intelligente Ampelschaltung" },
      { metric: "Energieeinsparung", value: "15%", description: "Optimierung der Straßenbeleuchtung" },
      { metric: "Sensoren", value: "1000+", description: "Echtzeitmonitoring im Stadtgebiet" },
    ],
    testimonial: {
      text: "Die IoT-Plattform hilft uns dabei, Hamburg zu einer intelligenteren und nachhaltigeren Stadt zu machen.",
      author: "Dr. Anna Hoffmann",
      position: "Digitalisierungsbeauftragte, Stadt Hamburg"
    },
    timeline: "12 Monate",
    teamSize: "8 Entwickler",
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
    challenge: "EduTech wollte eine innovative Lernplattform mit personalisierten Lernerfahrungen und VR-Integration.",
    solution: "Wir erstellten eine adaptive Lernplattform mit KI-Personalisierung und immersiven VR-Lernmodulen.",
    image: "/edtech-learning-platform-new.svg",
    technologies: ["React", "Python", "Django", "WebXR", "TensorFlow"],
    results: [
      { metric: "Aktive Nutzer", value: "100K+", description: "Registrierte Lernende auf der Plattform" },
      { metric: "Lernergebnisse", value: "+40%", description: "Verbesserung durch KI-Personalisierung" },
      { metric: "Kursabschlussrate", value: "85%", description: "Hohe Engagement-Rate" },
    ],
    testimonial: {
      text: "Die Plattform hat das Online-Lernen revolutioniert. Unsere Studenten sind begeistert von den VR-Modulen.",
      author: "Prof. Dr. Lisa Chen",
      position: "Geschäftsführerin, EduTech Innovation"
    },
    timeline: "9 Monate",
    teamSize: "7 Entwickler",
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
    challenge: "LogiMax benötigte eine Lösung zur Optimierung ihrer komplexen Lieferketten und Reduzierung der Kosten.",
    solution: "Wir entwickelten ein KI-System mit Predictive Analytics für optimale Routenplanung und Ressourcenallokation.",
    image: "/logistics-optimization-dashboard.svg",
    technologies: ["Python", "Scikit-learn", "Apache Spark", "Kubernetes", "GCP"],
    results: [
      { metric: "Lieferzeiten", value: "-30%", description: "Reduzierung durch optimierte Routen" },
      { metric: "Kosteneinsparung", value: "25%", description: "Jährliche Einsparungen" },
      { metric: "Lieferzuverlässigkeit", value: "99.5%", description: "Pünktliche Lieferungen" },
    ],
    testimonial: {
      text: "Das KI-System hat unsere Logistik transformiert. Die Effizienzsteigerung ist beeindruckend.",
      author: "Marcus Klein",
      position: "COO, LogiMax International"
    },
    timeline: "7 Monate",
    teamSize: "5 Entwickler",
    links: {
      website: "#",
      case_study: "#",
    },
  },
]

const categories = ["Alle", "KI-Entwicklung", "Web-Entwicklung", "Mobile Development", "IoT & AI"]

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
        <motion.section
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
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
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
        </motion.section>

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
                  <span className="text-gray-500">•</span>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{project.timeline}</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <div className="flex items-center gap-1 text-gray-400">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{project.teamSize}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">{project.title}</h3>

                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                {/* Challenge & Solution */}
                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      Herausforderung:
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Lösung:
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>

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
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-zinc-800/50 border border-gray-700 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold gradient-text mb-1">{result.value}</div>
                        <div className="text-white text-sm font-medium mb-1">{result.metric}</div>
                        <div className="text-gray-400 text-xs">{result.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mb-6 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 italic mb-3 leading-relaxed">"{project.testimonial.text}"</p>
                      <div className="text-sm">
                        <div className="text-white font-medium">{project.testimonial.author}</div>
                        <div className="text-gray-400">{project.testimonial.position}</div>
                      </div>
                    </div>
                  </div>
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
