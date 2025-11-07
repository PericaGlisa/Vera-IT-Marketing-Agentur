"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Smartphone, Tablet, Watch, Zap, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { PriceLabel } from "@/components/ui/price-label"
import Link from "next/link"

const features = [
  {
    icon: Smartphone,
    title: "Native iOS & Android",
    description: "Plattform-spezifische Apps mit optimaler Performance und nativer User Experience.",
  },
  {
    icon: Tablet,
    title: "Cross-Platform Development",
    description: "React Native und Flutter Apps für effiziente Entwicklung auf beiden Plattformen.",
  },
  {
    icon: Watch,
    title: "Wearable Integration",
    description: "Apple Watch und Wear OS Apps für erweiterte Funktionalität am Handgelenk.",
  },
  {
    icon: Zap,
    title: "Performance Optimierung",
    description: "Schnelle, responsive Apps mit optimierter Batterielaufzeit und flüssigen Animationen.",
  },
  {
    icon: Shield,
    title: "App Store Optimierung",
    description: "ASO-optimierte Apps für bessere Sichtbarkeit und höhere Download-Raten.",
  },
  {
    icon: Users,
    title: "User-Centered Design",
    description: "Intuitive Benutzeroberflächen basierend auf Platform Design Guidelines.",
  },
]

const technologies = [
  "Swift",
  "Kotlin",
  "React Native",
  "Flutter",
  "Xamarin",
  "Firebase",
  "Core Data",
  "SQLite",
  "Push Notifications",
  "In-App Purchases",
  "ARKit/ARCore",
  "Machine Learning",
]

const appTypes = [
  {
    title: "Business & Productivity Apps",
    description: "Geschäfts-Apps für Produktivität, CRM, Projektmanagement und interne Kommunikation.",
    examples: ["CRM Mobile", "Task Management", "Team Communication"],
    price: "Preis auf Anfrage",
    icon: "💼",
  },
  {
    title: "E-Commerce & Marketplace",
    description: "Shopping-Apps mit Payment-Integration, Produktkatalogen und personalisierten Empfehlungen.",
    examples: ["Online Shop", "Marketplace", "Payment Integration"],
    price: "Preis auf Anfrage",
    icon: "🛒",
  },
  {
    title: "Social & Community Apps",
    description: "Social Media Plattformen, Community-Apps und Messaging-Lösungen.",
    examples: ["Social Network", "Chat Apps", "Community Platform"],
    price: "Preis auf Anfrage",
    icon: "👥",
  },
  {
    title: "Health & Fitness Apps",
    description: "Gesundheits-Apps mit Tracking, Wearable-Integration und Datenanalyse.",
    examples: ["Fitness Tracking", "Health Monitoring", "Workout Plans"],
    price: "Preis auf Anfrage",
    icon: "🏃‍♂️",
  },
]

export default function MobileAppsPage() {
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
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-emerald-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Mobile Anwendungen</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Native und Cross-Platform Mobile Apps für iOS und Android. Wir entwickeln benutzerfreundliche Apps, die Ihre
            Kunden lieben und Ihr Business voranbringen.
          </p>
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/neue-kunden-form">App-Projekt starten</Link>
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
            Mobile App Development Expertise
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
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-600 to-orange-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* App Types */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
            App-Kategorien die wir entwickeln
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {appTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-orange-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{type.icon}</span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{type.title}</h3>
                  </div>
                  <PriceLabel price={type.price} className="text-xs xs:text-sm sm:text-base md:text-lg" />
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">{type.description}</p>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Beispiel-Features:</h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                  asChild
                >
                  <Link href="/beratung">Beratung anfragen</Link>
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
                className="px-3 py-2 sm:px-4 sm:py-2 bg-zinc-700 border border-gray-600 rounded-lg text-gray-300 hover:text-orange-500 hover:border-orange-500/50 transition-all duration-300 text-sm sm:text-base"
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
          className="text-center bg-gradient-to-r from-emerald-600 to-orange-600 rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 sm:mb-6">
            Bereit für Ihre Mobile App?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam eine App entwickeln, die Ihre Nutzer begeistert und Ihr Business wachsen lässt.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-orange-600 hover:bg-white/90 w-full sm:w-auto" asChild>
            <Link href="/neue-kunden-form">App-Konzept besprechen</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
