"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Users, Target, Award, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

const values = [
  {
    icon: Target,
    title: "Innovation",
    description:
      "Wir jagen immer dem nächsten großen Ding hinterher! Von KI, die sogar die Tech-Zauberer im Miniatur Wunderland beeindrucken würde, bis hin zu hochmodernen Lösungen, die Grenzen verschieben.",
  },
  {
    icon: Users,
    title: "Partnerschaft",
    description:
      "Wir arbeiten nicht nur mit euch – wir werden Teil eurer Crew! Wie echte Hamburger glauben wir an Loyalität, Vertrauen und gemeinsames Segeln durch digitale Stürme.",
  },
  {
    icon: Award,
    title: "Qualität",
    description: "Unsere Standards sind höher als die Elbphilharmonie! Wir sind Perfektionisten, die sich nicht mit 'gut genug' zufriedengeben, wenn wir etwas Außergewöhnliches liefern können.",
  },
  {
    icon: Globe,
    title: "Nachhaltigkeit",
    description: "Grüne Technik ist in unserer DNA! Wir schaffen digitale Lösungen, die länger halten als Hamburgs maritimes Erbe und einen positiven Fußabdruck auf unserem Planeten hinterlassen.",
  },
]

const milestones = [
  { year: "2021", title: "Die Gründung", description: "Vera IT in einem gemütlichen Büro nahe der Alster gegründet – nur ich, mein Laptop und viel zu viel Kaffee!" },
  { year: "2022", title: "Erstes Team", description: "10+ erfolgreiche Projekte abgeschlossen und auf 8 großartige Teammitglieder erweitert. Wir sind offiziell eine richtige Hamburger Tech-Truppe!" },
  { year: "2023", title: "KI-Pioniere", description: "Voll auf KI-Entwicklung gesetzt – 20+ Projekte später sind wir die KI-Nerds der Hanseatic League of Tech!" },
  { year: "2024", title: "Europäisches Abenteuer", description: "25+ Projekte quer durch Europa! Von Hamburgs Hafen bis zum Rest des Kontinents – wir verbreiten die digitale Liebe!" },
]

export default function AboutPage() {
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
            Über <span className="gradient-text">Vera IT</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Moin! Seit 2021 brauen wir digitale Magie hier in Hamburgs historischer Speicherstadt. 
            Unser Team aus 8+ Tech-Enthusiasten entwickelt maßgeschneiderte KI-Lösungen, schicke Websites und datengetriebene Marketing-Strategien, 
            die selbst den erfahrensten Hamburger stolz machen würden. Wir sind nicht nur eine weitere Agentur – wir sind eure digitalen Nachbarn!
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
            initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6">Unsere Mission</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Schaut mal, wir haben uns zur Mission gemacht, digitale Transformation so zugänglich zu machen wie ein Fischbrötchen am Hafen! 
              Ob ihr ein Startup im trendigen Schanzenviertel seid oder ein etabliertes Unternehmen in der Nähe vom Rathaus – wir nutzen modernste 
              KI, Cloud-Tech und Datenanalyse, um euch beim Erreichen eurer Ziele zu helfen. Kein Corporate-Blabla – nur echte Lösungen, die funktionieren.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Wir sind besessen davon, komplexe Technik in etwas zu verwandeln, das ihr tatsächlich verstehen und nutzen könnt. Denkt an uns als eure 
              digitalen Übersetzer – wir sprechen fließend Code, damit ihr das nicht müsst. Unser Ziel? Euer Business effizienter zu machen 
              als Hamburgs legendäre Hafenoperationen!
            </p>
          </motion.div>

          <motion.div
            className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6">Unsere Vision</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Wir träumen groß hier in der Hansestadt! Unsere Vision ist es, Europas erste Anlaufstelle für digitale Agenturen zu werden und 
              unseren Hamburger Geist über den ganzen Kontinent zu verbreiten. Genau wie die Elbe unsere Stadt mit der Welt verbindet, 
              verbinden wir Unternehmen mit ihrem digitalen Potenzial. Wir bauen nicht nur Websites; wir bauen die Zukunft!
            </p>
            <p className="text-gray-400 leading-relaxed">
              Bis 2030 wollen wir 100+ Unternehmen dabei geholfen haben, ihren digitalen Sweet Spot zu finden. Und wir machen es auf Hamburger Art – 
              nachhaltig, innovativ und mit einem positiven Impact, der unsere wunderschöne Hansestadt stolz machen würde. 
              Denkt an grüne Technologie trifft maritime Tradition!
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className="mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.4 : 0.6 }}
          viewport={{ once: true, margin: isMobile ? "-20px" : "-50px" }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">Wofür wir stehen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: isMobile ? index * 0.05 : index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{ scale: isMobile ? 1 : 1.02 }}
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
          className="mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.4 : 0.6 }}
          viewport={{ once: true, margin: isMobile ? "-20px" : "-50px" }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">Unsere Reise bisher</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-violet-500 transform sm:-translate-x-0.5"></div>

            <div className="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`relative flex items-start ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                  initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: isMobile ? 0.3 : 0.5, 
                    delay: isMobile ? index * 0.03 : index * 0.08,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: isMobile ? "-10px" : "-20px" }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-full transform sm:-translate-x-2 z-10 mt-2"></div>

                  {/* Content */}
                  <div className={`ml-12 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? "sm:pr-6 md:pr-8" : "sm:pl-6 md:pl-8"}`}>
                    <motion.div 
                      className="bg-zinc-800 border border-gray-700 rounded-2xl p-4 sm:p-6"
                      initial={{ 
                        opacity: 0, 
                        x: isMobile ? 0 : (index % 2 === 0 ? -20 : 20)
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: isMobile ? 0.2 : 0.4, 
                        delay: isMobile ? index * 0.02 + 0.05 : index * 0.08 + 0.15,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true, margin: isMobile ? "-5px" : "-10px" }}
                    >
                      <div className="text-xl sm:text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-sm sm:text-base text-gray-400">{milestone.description}</p>
                    </motion.div>
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
            Bereit für unser digitales Abenteuer?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Lasst uns einen Kaffee trinken (oder ein Astra, wenn das euer Ding ist) und über euer nächstes digitales Projekt quatschen! 
            Wir sind hier, um eure wildesten Tech-Träume Realität werden zu lassen – auf Hamburger Art!
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
