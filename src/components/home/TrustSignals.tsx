"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Award, CheckCircle, Phone, MessageCircle, Lock, ShieldCheck, Key, Headphones } from "lucide-react"
import { Button } from "@/components/ui/Button"

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
    color: "from-indigo-500 to-purple-500"
  }
]

const securityBadges = [
  { name: "DSGVO Konform", icon: Lock, color: "from-blue-500 to-cyan-500" },
  { name: "ISO 27001", icon: ShieldCheck, color: "from-purple-500 to-indigo-500" },
  { name: "SSL Verschlüsselt", icon: Key, color: "from-green-500 to-emerald-500" },
  { name: "24/7 Support", icon: Headphones, color: "from-indigo-500 to-purple-500" }
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 sm:mb-6">
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
              className="relative bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 hover:bg-zinc-800/70 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <element.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {element.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {element.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Badges */}
        <motion.div
          className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 sm:p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
              Zertifiziert & <span className="gradient-text">Sicher</span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Höchste Standards für Datenschutz und Qualität
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {securityBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                className="text-center p-4 bg-zinc-700/50 backdrop-blur-sm rounded-xl hover:bg-zinc-600/50 hover:border-purple-500/30 border border-transparent transition-all duration-300 hover:scale-105 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <badge.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-white font-medium text-xs sm:text-sm group-hover:text-purple-300 transition-colors duration-300">{badge.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-60 sm:h-60 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Sofortiger Support verfügbar
            </motion.h3>

            <motion.p
              className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Haben Sie Fragen? Kontaktieren Sie uns jetzt für sofortige Unterstützung.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0 w-full max-w-sm sm:max-w-none mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a href="tel:+4915563740470" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-purple-600 hover:bg-white/90 hover:scale-105 w-full sm:w-auto min-w-[160px] sm:min-w-[180px]"
                >
                  <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  +49 155 63740470
                </Button>
              </a>

              <a
                href="https://wa.me/4915563740470"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent w-full sm:w-auto min-w-[160px] sm:min-w-[180px]"
                >
                  <MessageCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  WhatsApp Chat
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}