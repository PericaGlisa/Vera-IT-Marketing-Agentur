"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Heart, Coffee, Users, Lightbulb, ArrowRight, Calendar, MapPin, Camera } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"

const founderStories = [
  {
    name: "Dr. Sarah Weber",
    role: "CEO & Gründerin",
    image: "/professional-woman-ceo.png",
    story: {
      title: "Von der Wissenschaft zum Unternehmertum",
      content: [
        "Meine Reise begann 2006 an der TU München, wo ich in Informatik promovierte. Nach 15 Jahren in der Tech-Branche - bei Google, Microsoft und verschiedenen Startups - wuchs in mir der Wunsch, etwas Eigenes zu schaffen.",
        "Der Wendepunkt kam 2020 während der Pandemie. Ich sah, wie viele kleine und mittelständische Unternehmen bei der Digitalisierung kämpften. Große Agenturen waren zu teuer, Freelancer oft überfordert. Es fehlte an echten Partnern.",
        "So entstand die Idee für Vera IT - eine Agentur, die nicht nur Code schreibt, sondern echte Partnerschaften eingeht. Der Name 'Vera' bedeutet 'Wahrheit' auf Lateinisch - das spiegelt unsere ehrliche, transparente Arbeitsweise wider."
      ],
      quote: "Ich wollte eine Agentur schaffen, die ich selbst als Kundin gerne gehabt hätte."
    }
  },
  {
    name: "Marcus Schmidt",
    role: "CTO & Co-Gründer",
    image: "/professional-cto.png",
    story: {
      title: "Vom Konzern zum Startup",
      content: [
        "Nach 12 Jahren bei Google in München leitete ich Teams von über 50 Entwicklern. Trotz des Erfolgs fehlte mir etwas: die direkte Verbindung zu den Menschen, für die wir entwickelten.",
        "Als Sarah mich 2021 ansprach, war ich sofort begeistert. Die Vision einer menschlichen, technisch exzellenten Agentur sprach mich an. Hier konnten wir Enterprise-Level Qualität mit Startup-Agilität verbinden.",
        "Heute arbeite ich wieder direkt mit Kunden zusammen, sehe die Auswirkungen unserer Arbeit in Echtzeit und kann jungen Entwicklern zeigen, wie man sauberen, skalierbaren Code schreibt."
      ],
      quote: "Bei Vera IT verbinden wir die Qualität großer Konzerne mit der Flexibilität eines Startups."
    }
  }
]

const behindTheScenes = [
  {
    title: "Unser Büro in Hamburg-Altona",
    description: "Ein 200m² Loft mit Blick auf die Elbe, wo Kreativität und Kaffee fließen.",
    details: [
      "Offene Arbeitsplätze mit höhenverstellbaren Schreibtischen",
      "Separate Ruhezonen für konzentriertes Arbeiten",
      "Gaming-Ecke mit PlayStation 5 und Retro-Arcade",
      "Vollausgestattete Küche für gemeinsame Mittagspausen",
      "Dachterrasse für Meetings bei schönem Wetter"
    ],
    icon: MapPin
  },
  {
    title: "Unser Arbeitsalltag",
    description: "Hybrid Work, flexible Zeiten und eine Kultur des Vertrauens.",
    details: [
      "Daily Standups um 9:30 Uhr (remote oder vor Ort)",
      "Flexible Arbeitszeiten zwischen 7:00 und 19:00 Uhr",
      "Jeden Freitag: Pizza & Code Review Meeting",
      "Monatliche Team-Events (Escape Room, Hafenrundfahrt, etc.)",
      "Quarterly Planning Sessions in besonderen Locations"
    ],
    icon: Calendar
  },
  {
    title: "Unsere Werte im Alltag",
    description: "Wie wir unsere Prinzipien täglich leben und arbeiten.",
    details: [
      "Transparenz: Alle Projekte und Finanzen sind für das Team einsehbar",
      "Lernen: 2 Tage pro Monat für Weiterbildung und Experimente",
      "Nachhaltigkeit: 100% Ökostrom, papierloses Büro, CO2-neutrale Server",
      "Work-Life-Balance: Keine Überstunden, echte Pausen, Hunde willkommen",
      "Qualität: Code Reviews, automatisierte Tests, kontinuierliche Verbesserung"
    ],
    icon: Heart
  }
]

const milestones = [
  {
    date: "Januar 2021",
    title: "Die Gründung",
    description: "Sarah und Marcus gründen Vera IT in Sarahs Homeoffice in Hamburg.",
    details: "Mit einem MacBook, viel Kaffee und der Vision einer besseren digitalen Agentur.",
    image: "🏠"
  },
  {
    date: "März 2021",
    title: "Erster Kunde",
    description: "Ein lokales Restaurant braucht eine Website für Online-Bestellungen.",
    details: "Unser erstes Projekt während der Pandemie - eine Website, die einem kleinen Betrieb das Überleben ermöglichte.",
    image: "🍕"
  },
  {
    date: "Juli 2021",
    title: "Erstes Büro",
    description: "Umzug in ein 50m² Büro in Hamburg-Altona.",
    details: "Zwei Schreibtische, eine Kaffeemaschine und unendlich viele Träume.",
    image: "🏢"
  },
  {
    date: "Dezember 2021",
    title: "Team wächst",
    description: "Lisa Chen stößt als Head of AI Development zum Team.",
    details: "Unsere erste Vollzeit-Anstellung und der Beginn unserer KI-Spezialisierung.",
    image: "👥"
  },
  {
    date: "Juni 2022",
    title: "Großes Büro",
    description: "Umzug in unser aktuelles 200m² Loft mit Elbblick.",
    details: "Platz für 12 Arbeitsplätze, Gaming-Ecke und die berühmte Dachterrasse.",
    image: "🌊"
  },
  {
    date: "September 2023",
    title: "KI-Durchbruch",
    description: "Entwicklung unserer ersten eigenen KI-Plattform für E-Commerce.",
    details: "Ein Jahr Entwicklung, 50.000 Zeilen Code und ein Produkt, das den Markt verändert.",
    image: "🤖"
  },
  {
    date: "Januar 2024",
    title: "Internationale Expansion",
    description: "Erste Projekte in Österreich, Schweiz und den Niederlanden.",
    details: "Unser Team von 8 Experten betreut jetzt Kunden in ganz Europa.",
    image: "🌍"
  }
]

export default function OurStoryPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
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
            Unsere <span className="gradient-text">Geschichte</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Von der Idee in einem Hamburger Homeoffice bis zur führenden digitalen Agentur - 
            erfahren Sie, wie Vera IT entstanden ist und was uns täglich antreibt.
          </p>
        </motion.div>

        {/* Founder Stories */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">Die Gründer erzählen</h2>
          
          <div className="space-y-12 lg:space-y-16">
            {founderStories.map((founder, index) => (
              <motion.div
                key={founder.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <div className="w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 p-1">
                      <div className="w-full h-full rounded-2xl bg-zinc-800 flex items-center justify-center">
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          width={400}
                          height={400}
                          className="rounded-2xl object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">{founder.story.title}</h3>
                      <div className="flex items-center gap-2 text-orange-400">
                        <span className="font-medium">{founder.name}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-sm">{founder.role}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      {founder.story.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-300 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    
                    <blockquote className="border-l-4 border-orange-500 pl-4 py-2 bg-zinc-900/50 rounded-r-lg">
                      <p className="text-white italic font-medium">"{founder.story.quote}"</p>
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Behind the Scenes */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">Hinter den Kulissen</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {behindTheScenes.map((section, index) => (
              <motion.div
                key={section.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-orange-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{section.description}</p>
                
                <ul className="space-y-2">
                  {section.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
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
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">Unsere Reise</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-red-500 to-amber-500 transform sm:-translate-x-0.5"></div>

            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.date}
                  className={`relative flex items-start ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transform sm:-translate-x-4 z-10 flex items-center justify-center text-lg">
                    {milestone.image}
                  </div>

                  {/* Content */}
                  <div className={`ml-16 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                    <motion.div 
                      className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-orange-400 font-medium text-sm mb-2">{milestone.date}</div>
                      <h3 className="text-lg font-semibold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-300 mb-3">{milestone.description}</p>
                      <p className="text-gray-400 text-sm italic">{milestone.details}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 sm:mb-6">
            Werden Sie Teil unserer Geschichte
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam das nächste Kapitel schreiben. Erzählen Sie uns von Ihrem Projekt 
            und wie wir Ihnen helfen können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button variant="secondary" size="lg" className="bg-white text-orange-600 hover:bg-white/90 w-full sm:w-auto">
                Projekt besprechen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/team">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600 w-full sm:w-auto">
                Unser Team kennenlernen
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}