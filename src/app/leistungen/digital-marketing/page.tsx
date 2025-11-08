"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { TrendingUp, Search, Target, BarChart3, Mail, Share2 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { PriceLabel } from "@/components/ui/price-label"
import Link from "next/link"
import StructuredData from "@/components/seo/StructuredData"

const features = [
  {
    icon: Search,
    title: "SEO & Content Marketing",
    description: "Suchmaschinenoptimierung und Content-Strategien für organische Reichweite und bessere Rankings.",
  },
  {
    icon: Target,
    title: "Paid Advertising",
    description: "Google Ads, Facebook Ads und LinkedIn Campaigns für zielgerichtete Kundenakquise.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategische Social Media Präsenz auf allen relevanten Plattformen für Ihre Zielgruppe.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automatisierte Email-Kampagnen und Newsletter für Kundenbindung und Lead-Nurturing.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Detaillierte Performance-Analysen und datengetriebene Optimierungsempfehlungen.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimierung",
    description: "A/B-Tests und CRO-Strategien für höhere Conversion-Raten und besseren ROI.",
  },
]

const marketingTools = [
  "Google Analytics",
  "Google Ads",
  "Facebook Ads Manager",
  "LinkedIn Campaign Manager",
  "HubSpot",
  "Mailchimp",
  "Hootsuite",
  "SEMrush",
  "Ahrefs",
  "Hotjar",
  "Optimizely",
  "Zapier",
]

const packages = [
  {
    title: "Starter Package",
    description: "Perfekt für kleine Unternehmen, die mit digitalem Marketing beginnen möchten.",
    services: ["SEO Audit", "Google My Business Setup", "Social Media Setup", "Basic Analytics"],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
    highlight: false,
  },
  {
    title: "Growth Package",
    description: "Umfassendes Marketing für wachsende Unternehmen mit ambitionierten Zielen.",
    services: [
      "SEO & Content Marketing",
      "Google & Facebook Ads",
      "Social Media Management",
      "Email Marketing",
      "Monthly Reporting",
    ],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
    highlight: true,
  },
  {
    title: "Enterprise Package",
    description: "Maßgeschneiderte Marketing-Lösungen für große Unternehmen und komplexe Anforderungen.",
    services: [
      "Full-Service Marketing",
      "Multi-Channel Campaigns",
      "Advanced Analytics",
      "Dedicated Account Manager",
      "Custom Integrations",
    ],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
    highlight: false,
  },
]

export default function DigitalMarketingPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const digitalMarketingSchema = {
    name: "Digitales Marketing Hamburg",
    description: "Professionelle digitale Marketing-Dienstleistungen in Hamburg: SEO, Google Ads, Social Media Marketing, Email Marketing und Analytics für maximalen ROI",
    serviceType: "Digital Marketing Services"
  }



  return (
    <div className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-zinc-950">
      <StructuredData type="service" data={digitalMarketingSchema} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-rose-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Digitales Marketing</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Datengetriebene Marketing-Strategien für maximalen ROI. Wir helfen Ihnen dabei, Ihre Zielgruppe zu
            erreichen, Leads zu generieren und nachhaltiges Wachstum zu erzielen.
          </p>
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/kontakt">Marketing-Strategie entwickeln</Link>
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
            Unsere Marketing Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-rose-600 to-purple-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Marketing Packages */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">Marketing Pakete</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                className={`bg-zinc-800 border rounded-2xl p-6 sm:p-8 transition-all duration-300 relative flex flex-col ${
                  pkg.highlight
                    ? "border-purple-500 scale-105 shadow-2xl shadow-purple-500/20"
                    : "border-gray-700 hover:border-purple-500/50"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: pkg.highlight ? 1.05 : 1.02 }}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-rose-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Beliebt
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <PriceLabel price={pkg.price} className="text-emerald-400 font-bold text-xs xs:text-sm sm:text-base md:text-lg" />
                  <h3 className="text-2xl font-semibold text-white mb-2">{pkg.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                  <p className="text-gray-500 text-sm">{pkg.duration}</p>
                </div>
                <div className="mb-6 flex-grow">
                  <ul className="space-y-3">
                    {pkg.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-gray-300 flex items-start gap-2">
                        <span className="text-purple-500 mt-1">✓</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  className={`w-full mt-auto ${
                    pkg.highlight
                      ? "bg-gradient-to-r from-rose-600 to-purple-600 hover:shadow-lg"
                      : "bg-zinc-700 hover:bg-zinc-600"
                  }`}
                  asChild
                >
                  <Link href="/kontakt">Beratung anfragen</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Marketing Tools */}
        <motion.div
          className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-6 sm:mb-8">Marketing Tools</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {marketingTools.map((tool, index) => (
              <motion.span
                key={tool}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-zinc-700 border border-gray-600 rounded-lg text-gray-300 hover:text-purple-500 hover:border-purple-500/50 transition-all duration-300 text-sm sm:text-base"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-rose-600 to-purple-600 rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 sm:mb-6">
            Bereit für Marketing-Erfolg?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam eine Marketing-Strategie entwickeln, die messbare Ergebnisse liefert.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-white/90 w-full sm:w-auto" asChild>
            <Link href="/neue-kunden-form">Kostenlose Marketing-Analyse</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
