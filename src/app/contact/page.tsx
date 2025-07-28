"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact/ContactForm"

export default function ContactPage() {
  return (
    <div className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            Lassen Sie uns <span className="gradient-text">sprechen</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Bereit für Ihr nächstes digitales Projekt? Kontaktieren Sie uns für eine kostenlose Beratung und lassen Sie
            uns gemeinsam Ihre Vision verwirklichen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-heading font-semibold mb-4 sm:mb-6">Kontaktinformationen</h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">E-Mail</h3>
                    <p className="text-gray-400 text-sm sm:text-base">info@verait.de</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">Telefon</h3>
                    <p className="text-gray-400 text-sm sm:text-base">+49 15563 740470</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">Adresse</h3>
                    <p className="text-gray-400 text-sm sm:text-base">Vera IT Marketing-Agentur</p>
                     <p className="text-gray-400 text-sm sm:text-base">Rehrstieg 16d, 21147</p>
                     <p className="text-gray-400 text-sm sm:text-base">20095 Hamburg, Deutschland</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">Öffnungszeiten</h3>
                    <p className="text-gray-400 text-sm sm:text-base">Montag - Freitag: 9:00 - 18:00</p>
                    <p className="text-gray-400 text-sm sm:text-base">Samstag: 10:00 - 14:00</p>
                    <p className="text-gray-400 text-sm sm:text-base">Sonntag: Geschlossen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-4">Unser Standort</h3>
              <div className="w-full h-48 sm:h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.8!2d9.8!3d53.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDI0JzAwLjAiTiA5wrA0OCcwMC4wIkU!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde&q=Rehrstieg+16d,+21147+Hamburg,+Deutschland"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vera IT Marketing-Agentur Standort"
                ></iframe>
              </div>
              <div className="mt-4 text-sm text-gray-400">
                <p className="font-medium text-white mb-1">Vera IT Marketing-Agentur</p>
                <p>Rehrstieg 16d, 21147</p>
                <p>20095 Hamburg, Deutschland</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
