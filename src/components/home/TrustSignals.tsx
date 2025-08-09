"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Award, CheckCircle, Phone, MessageCircle, Lock, ShieldCheck, Key, Headphones } from "lucide-react"

const trustElements = [
  {
    icon: Shield,
    title: "100% Geld-zurück-Garantie",
    description: "Nicht zufrieden? Wir erstatten Ihnen den vollen Betrag innerhalb der ersten 30 Tage.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Clock,
    title: "Pünktliche Lieferung garantiert",
    description: "Ihr Projekt wird termingerecht geliefert oder Sie erhalten 20% Rabatt.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Award,
    title: "Zertifizierte Experten",
    description: "Unser Team verfügt über offizielle Zertifizierungen von Google, Microsoft und AWS.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: CheckCircle,
    title: "Kostenlose Nachbesserungen",
    description: "Bis zu 3 Monate kostenlose Anpassungen nach Projektabschluss inklusive.",
    color: "from-orange-500 to-red-500"
  }
]

const securityBadges = [
  { name: "DSGVO Konform", icon: Lock, color: "from-blue-500 to-cyan-500" },
  { name: "ISO 27001", icon: ShieldCheck, color: "from-purple-500 to-indigo-500" },
  { name: "SSL Verschlüsselt", icon: Key, color: "from-green-500 to-emerald-500" },
  { name: "24/7 Support", icon: Headphones, color: "from-orange-500 to-red-500" }
]

export function TrustSignals() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            Ihre <span className="gradient-text">Sicherheit</span> ist garantiert
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Arbeiten Sie risikofrei mit uns. Wir stehen zu 100% hinter unserer Arbeit.
          </p>
        </motion.div>

        {/* Trust Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {trustElements.map((element, index) => (
            <motion.div
              key={element.title}
              className="relative bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${element.color} flex items-center justify-center`}>
                  <element.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-heading font-semibold text-white mb-3">
                    {element.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {element.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Badges */}
        <motion.div
          className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white mb-2">
              Zertifiziert & Sicher
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Höchste Standards für Datenschutz und Qualität
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {securityBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                className="text-center p-4 bg-zinc-700 rounded-xl hover:bg-zinc-600 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-r ${badge.color} flex items-center justify-center`}>
                  <badge.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-white font-medium text-xs sm:text-sm">{badge.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 border border-purple-500/20 rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white mb-2">
              Sofortiger Support verfügbar
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Haben Sie Fragen? Kontaktieren Sie uns jetzt!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+4915563740470"
              className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-purple-500/25"
            >
              <Phone className="w-5 h-5" />
              <span>+49 155 63740470</span>
            </a>
            <a
              href="https://wa.me/4915563740470"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-indigo-500/25"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
          <p className="text-center text-gray-400 text-xs mt-4">
            Antwortzeit: Unter 2 Stunden (Mon-Fri 9-17 Uhr)
          </p>
        </motion.div>
      </div>
    </section>
  )
}