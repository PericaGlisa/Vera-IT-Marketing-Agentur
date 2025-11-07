"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingCart, CreditCard, Package, BarChart3, Shield, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { PriceLabel } from "@/components/ui/price-label"

const features = [
  {
    icon: ShoppingCart,
    title: "Custom E-Commerce Plattformen",
    description: "Maßgeschneiderte Online-Shops mit individuellen Features und optimierter User Experience.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Sichere Payment-Gateways mit Stripe, PayPal, Klarna und weiteren Zahlungsanbietern.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Intelligente Lagerverwaltung mit automatischen Bestellungen und Lieferantenintegration.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Detaillierte Verkaufsanalysen und Performance-Dashboards für datengetriebene Entscheidungen.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "PCI-DSS konforme Sicherheit und DSGVO-konforme Datenverarbeitung.",
  },
  {
    icon: Smartphone,
    title: "Mobile Commerce",
    description: "Responsive Design und Progressive Web Apps für optimales Mobile Shopping.",
  },
]

const platforms = [
  {
    name: "Shopify Plus",
    description: "Enterprise E-Commerce Lösung für skalierbare Online-Shops",
    features: ["Multi-Channel Selling", "Advanced Analytics", "Custom Apps", "API Integration"],
    bestFor: "Mittelständische bis große Unternehmen",
    price: "Preis auf Anfrage",
  },
  {
    name: "WooCommerce",
    description: "Flexible WordPress-basierte E-Commerce Lösung",
    features: ["WordPress Integration", "Extensive Plugins", "SEO Optimized", "Cost Effective"],
    bestFor: "Kleine bis mittelständische Unternehmen",
    price: "Preis auf Anfrage",
  },
  {
    name: "Magento Commerce",
    description: "Leistungsstarke B2B und B2C E-Commerce Plattform",
    features: ["B2B Features", "Multi-Store", "Advanced SEO", "Customizable"],
    bestFor: "Große Unternehmen und B2B",
    price: "Preis auf Anfrage",
  },
  {
    name: "Custom Solution",
    description: "Vollständig maßgeschneiderte E-Commerce Entwicklung",
    features: ["Unique Features", "Full Control", "Scalable Architecture", "API-First"],
    bestFor: "Unternehmen mit speziellen Anforderungen",
    price: "Preis auf Anfrage",
  },
]

const ecommerceServices = [
  {
    title: "E-Commerce Setup & Launch",
    description: "Komplette Einrichtung Ihres Online-Shops von der Konzeption bis zum Go-Live.",
    deliverables: [
      "Shop-Design & Development",
      "Product Catalog Setup",
      "Payment Integration",
      "Shipping Configuration",
      "SEO Optimization",
      "Testing & Launch",
    ],
    price: "Preis auf Anfrage",
    duration: "6-10 Wochen",
  },
  {
    title: "E-Commerce Optimierung",
    description: "Verbesserung bestehender Online-Shops für höhere Conversion-Raten und bessere Performance.",
    deliverables: [
      "UX/UI Audit",
      "Conversion Optimization",
      "Performance Tuning",
      "Mobile Optimization",
      "A/B Testing Setup",
      "Analytics Implementation",
    ],
    price: "Preis auf Anfrage",
    duration: "4-6 Wochen",
  },
  {
    title: "Multi-Channel Integration",
    description: "Verbindung Ihres Online-Shops mit Marktplätzen und Social Commerce Plattformen.",
    deliverables: [
      "Amazon Integration",
      "eBay Connection",
      "Social Commerce Setup",
      "Inventory Synchronization",
      "Order Management",
      "Reporting Dashboard",
    ],
    price: "Preis auf Anfrage",
    duration: "4-8 Wochen",
  },
]

export default function ECommerceDevelopmentPage() {
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
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <ShoppingCart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            <span className="gradient-text">E-Commerce Entwicklung</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Leistungsstarke Online-Shops, die verkaufen. Wir entwickeln skalierbare E-Commerce-Lösungen mit optimaler
            User Experience und maximaler Conversion-Rate.
          </p>
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/neue-kunden-form">E-Commerce Projekt starten</Link>
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
            E-Commerce Entwicklung Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-4 sm:p-6 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platforms */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
            E-Commerce Plattformen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">{platform.name}</h3>
                  <PriceLabel price={platform.price} className="text-orange-400 font-semibold text-xs xs:text-sm sm:text-base md:text-lg" />
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">{platform.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-green-400 mb-3">Ideal für: {platform.bestFor}</p>
                  <h4 className="text-white font-semibold mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent"
                  asChild
                >
                  <Link href="/beratung">Beratung anfragen</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* E-Commerce Services */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
            Unsere E-Commerce Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {ecommerceServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{service.title}</h3>
                    <PriceLabel price={service.price} className="text-blue-400 font-semibold text-xs xs:text-sm sm:text-base md:text-lg" />
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
                  <div className="text-sm text-gray-500 mb-4">⏱️ {service.duration}</div>
                </div>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Leistungen:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-blue-500 mt-1">✓</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-zinc-700 hover:bg-zinc-600" asChild>
                  <Link href="/beratung">Service anfragen</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 sm:mb-6">
            Bereit für Ihren erfolgreichen Online-Shop?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam einen E-Commerce-Shop entwickeln, der Ihre Kunden begeistert und Ihren Umsatz
            steigert.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-white/90 w-full sm:w-auto" asChild>
            <Link href="/beratung">E-Commerce Beratung buchen</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
