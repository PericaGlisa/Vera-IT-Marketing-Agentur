"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, Users, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { useEffect, useState } from "react"

export function UrgencyCTA() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set target date to end of current month
    const now = new Date()
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = endOfMonth.getTime() - now
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative bg-gradient-to-r from-red-600 via-purple-600 to-indigo-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-60 sm:h-60 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative z-10">
            {/* Urgency Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-400/30 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Clock className="w-4 h-4 text-red-300" />
              <span className="text-red-300 font-medium text-sm sm:text-base">
                🔥 Limitiertes Angebot - Nur noch {timeLeft.days} Tage!
              </span>
            </motion.div>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Kostenlose Erstberatung + Projektanalyse im Wert von 500€
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Sichern Sie sich jetzt Ihre kostenlose Beratung inklusive detaillierter Projektanalyse. 
              <strong>Nur noch 3 Plätze verfügbar diese Woche!</strong>
            </motion.p>

            {/* Countdown Timer */}
            <motion.div
              className="flex justify-center space-x-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
                    <div className="text-2xl sm:text-3xl font-bold text-white">
                      {value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide">
                      {unit === 'days' ? 'Tage' : unit === 'hours' ? 'Std' : unit === 'minutes' ? 'Min' : 'Sek'}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Scarcity Indicator */}
            <motion.div
              className="flex items-center justify-center space-x-2 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Users className="w-5 h-5 text-yellow-300" />
              <span className="text-yellow-300 font-medium">
                ⚡ 12 Personen schauen sich gerade dieses Angebot an
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0 w-full max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Link href="/neue-kunden-form" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-white/90 hover:scale-105 w-full sm:w-auto min-w-[200px] text-lg font-semibold shadow-2xl"
                >
                  Jetzt kostenlos sichern!
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <a
                  href="tel:+4940123456789"
                  className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-medium min-w-[160px]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Sofort anrufen</span>
                </a>
                
                <a
                  href="https://wa.me/4940123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors font-medium min-w-[160px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Trust Elements */}
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-6 text-white/80 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2">
                <span>✓</span>
                <span>Keine Vertragsbindung</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✓</span>
                <span>100% kostenlos</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✓</span>
                <span>Sofortige Antwort</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}