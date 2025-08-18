"use client"

import { motion } from "framer-motion"
import { Star, Quote, TrendingUp, Users, Award } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Dr. Michael Weber",
    position: "Geschäftsführer",
    company: "TechMed Hamburg GmbH",
    content: "Vera IT hat unsere Patientenverwaltung komplett digitalisiert. Wir sparen jetzt 15 Stunden pro Woche und haben 40% mehr Termine.",
    result: "+127% Effizienzsteigerung",
    rating: 5,
    image: "/testimonials/michael-weber.jpg"
  },
  {
    name: "Sarah Müller",
    position: "Marketing Direktorin",
    company: "Hamburg Fashion Week",
    content: "Die Marketing-Automation von Vera IT hat unsere Lead-Generierung revolutioniert. 300% mehr qualifizierte Anfragen in nur 3 Monaten.",
    result: "+300% mehr Leads",
    rating: 5,
    image: "/testimonials/sarah-mueller.jpg"
  },
  {
    name: "Thomas Schneider",
    position: "CEO",
    company: "Schneider Logistics",
    content: "Dank der KI-Lösung von Vera IT optimieren wir unsere Routen automatisch und sparen 25% Kraftstoffkosten. ROI nach nur 2 Monaten!",
    result: "ROI in 2 Monaten",
    rating: 5,
    image: "/testimonials/thomas-schneider.jpg"
  }
]

const clientLogos = [
  { name: "Hamburg Port Authority", logo: "/clients/hpa-logo.svg" },
  { name: "Airbus Hamburg", logo: "/clients/airbus-logo.svg" },
  { name: "XING", logo: "/clients/xing-logo.svg" },
  { name: "Otto Group", logo: "/clients/otto-logo.svg" },
  { name: "Hapag-Lloyd", logo: "/clients/hapag-lloyd-logo.svg" },
  { name: "Beiersdorf", logo: "/clients/beiersdorf-logo.svg" }
]

const stats = [
  { number: "150+", label: "Erfolgreiche Projekte", icon: Award },
  { number: "98%", label: "Kundenzufriedenheit", icon: Star },
  { number: "2.5M€", label: "Generierter Umsatz", icon: TrendingUp },
  { number: "50+", label: "Zufriedene Kunden", icon: Users }
]

export function SocialProof() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-zinc-900 mb-4">
            Über 150 erfolgreiche Projekte
          </h2>
          <p className="text-lg sm:text-xl text-zinc-600 max-w-3xl mx-auto">
            Vertrauen Sie auf die Erfahrung, die bereits über 50 Unternehmen zu messbarem Erfolg verholfen hat.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 mb-4">
                  <IconComponent className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-zinc-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-zinc-500 mb-8 font-medium">
            Vertrauen von führenden Unternehmen in Hamburg
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4 bg-zinc-50 rounded-lg hover:bg-zinc-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-24 h-12 bg-zinc-300 rounded flex items-center justify-center text-xs text-zinc-600 font-medium">
                  {client.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-purple-600 mb-4" />
              
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-zinc-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Result Badge */}
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-6 inline-block">
                {testimonial.result}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center">
                  <span className="text-zinc-600 font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-zinc-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-zinc-600">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-purple-600 font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-6 py-3">
            <Award className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold">
              🏆 Top-bewertete Digitalagentur in Hamburg 2024
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}