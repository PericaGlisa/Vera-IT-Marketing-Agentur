"use client"

import { motion } from "framer-motion"
import { FileText, ArrowRight, Clock, Users, Target } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function FormCTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
             Bereit für Ihr <span className="gradient-text">digitales Projekt?</span>
           </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Nehmen Sie sich 5-10 Minuten Zeit für unser Kundenformular. Basierend auf Ihren Antworten 
              bereiten wir uns optimal auf unser erstes Gespräch vor.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Benefits */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-white mb-3 sm:mb-4">
                       Nur 5-10 Minuten
                     </h3>
                     <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      Schnell und unkompliziert - unser Formular ist in wenigen Minuten ausgefüllt.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-white mb-3 sm:mb-4">
                       Maßgeschneiderte Beratung
                     </h3>
                     <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      Wir bereiten uns gezielt auf Ihre Bedürfnisse vor und können Ihnen passende Lösungen anbieten.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-white mb-3 sm:mb-4">
                       Persönlicher Kontakt
                     </h3>
                     <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      Nach dem Formular melden wir uns schnellstmöglich für ein persönliches Gespräch.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - CTA Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-zinc-800 rounded-2xl sm:rounded-3xl p-8 sm:p-10 shadow-2xl border border-zinc-700 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3 sm:mb-4">
                       Kundenformular
                     </h3>
                     <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                      Teilen Sie uns Ihre Ziele und Herausforderungen mit. 
                      Wir entwickeln gemeinsam die perfekte digitale Lösung für Ihr Unternehmen.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-zinc-700 rounded-xl p-4">
                      <div className="flex items-center justify-between text-sm sm:text-base">
                         <span className="text-gray-400">Geschätzte Dauer:</span>
                         <span className="font-semibold text-white">5-10 Minuten</span>
                      </div>
                    </div>
                    
                    <div className="bg-zinc-700 rounded-xl p-4">
                      <div className="flex items-center justify-between text-sm sm:text-base">
                         <span className="text-gray-400">Schritte:</span>
                         <span className="font-semibold text-white">6 einfache Abschnitte</span>
                      </div>
                    </div>

                    <Link href="/neue-kunden-form" className="block">
                      <Button
                         size="lg"
                         className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                       >
                         Formular starten
                         <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                       </Button>
                    </Link>

                    <p className="text-xs sm:text-sm text-gray-400 text-center">
                      Ihre Daten werden vertraulich behandelt und nur für die Beratung verwendet.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}