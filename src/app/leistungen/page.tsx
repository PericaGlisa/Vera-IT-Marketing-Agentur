"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import {
  Brain,
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Video,
  Cloud,
  ShoppingCart,
  Shield,
  BarChart3,
  Target,
  Zap,
} from "lucide-react"
import Link from "next/link"
import StructuredData from "@/components/seo/StructuredData"

const services = [
  {
    icon: Brain,
    title: "KI-Entwicklung",
    description: "Intelligente Lösungen mit Machine Learning, NLP und Computer Vision für die Zukunft Ihres Unternehmens.",
    gradient: "from-purple-600 to-indigo-600",
    href: "/leistungen/ki-entwicklung",
  },
  {
    icon: Code,
    title: "Web-Entwicklung",
    description: "Moderne, performante Websites und Web-Anwendungen mit neuesten Technologien und Best Practices.",
    gradient: "from-indigo-600 to-cyan-600",
    href: "/leistungen/web-entwicklung",
  },
  {
    icon: Cloud,
    title: "SaaS-Entwicklung",
    description: "Skalierbare Software-as-a-Service Lösungen mit cloud-nativer Architektur und Multi-Tenant-Support.",
    gradient: "from-cyan-600 to-emerald-600",
    href: "/leistungen/saas-entwicklung",
  },
  {
    icon: Smartphone,
    title: "Mobile Anwendungen",
    description: "Native und Cross-Platform Mobile Apps für iOS und Android mit erstklassiger User Experience.",
    gradient: "from-indigo-600 to-purple-600",
    href: "/leistungen/mobile-apps",
  },
  {
    icon: Palette,
    title: "Interface Design",
    description: "Benutzerorientiertes Design, das konvertiert. Von Wireframes bis zu interaktiven Prototypen.",
    gradient: "from-purple-600 to-violet-600",
    href: "/leistungen/ui-ux-design",
  },
  {
    icon: TrendingUp,
    title: "Digitales Marketing",
    description: "Datengetriebene Marketing-Strategien für maximalen ROI und nachhaltiges Wachstum.",
    gradient: "from-rose-600 to-purple-600",
    href: "/leistungen/digital-marketing",
  },
  {
    icon: Zap,
    title: "Markendesign",
    description: "Starke Markenidentitäten, die im Gedächtnis bleiben und emotionale Verbindungen schaffen.",
    gradient: "from-purple-600 to-pink-600",
    href: "/leistungen/brand-design",
  },
  {
    icon: Video,
    title: "Video-Produktion",
    description: "Professionelle Video-Produktion für Marketing, Schulungen und Unternehmenskommunikation.",
    gradient: "from-violet-600 to-indigo-600",
    href: "/leistungen/video-produktion",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Entwicklung",
    description: "Leistungsstarke Online-Shops mit optimaler Conversion-Rate und nahtloser User Experience.",
    gradient: "from-green-600 to-blue-600",
    href: "/leistungen/e-commerce-entwicklung",
  },
  {
    icon: Cloud,
    title: "Cloud-Lösungen",
    description: "Skalierbare Cloud-Infrastrukturen und Migration für moderne, zukunftssichere IT-Landschaften.",
    gradient: "from-blue-600 to-indigo-600",
    href: "/leistungen/cloud-loesungen",
  },
  {
        icon: Target,
        title: "Beratung & Strategie",
        description: "Digitale Transformation und IT-Beratung zur Optimierung von Geschäftsprozessen und technologischen Lösungen.",
        gradient: "from-purple-500 to-pink-500",
        href: "/leistungen/konsalting"
      },
  {
    icon: BarChart3,
    title: "Datenanalyse",
    description: "Verwandeln Sie Ihre Daten in wertvolle Erkenntnisse für datengetriebene Geschäftsentscheidungen.",
    gradient: "from-indigo-600 to-purple-600",
    href: "/leistungen/datenanalyse",
  },
]

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const servicesSchema = {
    name: "Digitale Services Portfolio Hamburg",
    description: "Komplettes Portfolio digitaler Dienstleistungen: KI-Entwicklung, Web-Entwicklung, Mobile Apps, Digitales Marketing und mehr für Unternehmen in Hamburg und Deutschland",
    serviceType: "Digital Services Portfolio"
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <StructuredData type="service" data={servicesSchema} />
      {/* Hero Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 sm:mb-8">
              Unsere <span className="gradient-text">Leistungen</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Von KI-gestützten Lösungen bis hin zu innovativem Design - wir bieten das komplette Spektrum digitaler
              Services für Ihren Erfolg.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="group"
              >
                <Link href={service.href}>
                  <div className="relative p-6 sm:p-8 bg-zinc-800 border border-gray-700 rounded-2xl hover:border-purple-500/50 transition-all duration-300 h-full">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-white mb-3 sm:mb-4 group-hover:text-purple-500 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="text-purple-500 font-medium group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center text-sm sm:text-base">
                      Mehr erfahren →
                    </div>

                    {/* Hover Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
