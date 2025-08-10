"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Dr. Sarah Weber",
    role: "Geschäftsführerin",
    company: "MedTech Solutions GmbH",
    image: "/professional-woman-ceo.png",
    rating: 5,
    text: "Vera IT hat unsere Patientenverwaltung revolutioniert. Seit der KI-Integration haben wir 40% weniger Verwaltungsaufwand und können uns mehr auf unsere Patienten konzentrieren.",
    result: "40% weniger Verwaltungsaufwand"
  },
  {
    name: "Marcus Hoffmann",
    role: "E-Commerce Manager",
    company: "Fashion Forward GmbH",
    image: "/professional-software-developer.png",
    rating: 5,
    text: "Der neue Online-Shop von Vera IT hat unsere Conversion-Rate um 65% gesteigert. Die Investition hat sich bereits nach 3 Monaten amortisiert.",
    result: "65% höhere Conversion-Rate"
  },
  {
    name: "Lisa Chen",
    role: "Marketing Direktorin",
    company: "StartUp Innovations",
    image: "/professional-woman-marketing-director.png",
    rating: 5,
    text: "Die Marketing-Automation von Vera IT generiert monatlich 150% mehr qualifizierte Leads. Unser Sales-Team ist begeistert von der Qualität.",
    result: "150% mehr qualifizierte Leads"
  }
]

const clientLogos = [
  { name: "MedTech Solutions", logo: "/placeholder-logo.svg" },
  { name: "Fashion Forward", logo: "/placeholder-logo.svg" },
  { name: "StartUp Innovations", logo: "/placeholder-logo.svg" },
  { name: "Hamburg Digital", logo: "/placeholder-logo.svg" },
  { name: "TechCorp", logo: "/placeholder-logo.svg" },
  { name: "InnovateLab", logo: "/placeholder-logo.svg" }
]

export function Testimonials() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-zinc-950">
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
            Was unsere <span className="gradient-text">Kunden sagen</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Über 25 erfolgreiche Projekte und 95% Kundenzufriedenheit sprechen für sich.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="relative bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-purple-500/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </p>

              {/* Result Badge */}
              <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-3 py-1 mb-4">
                <span className="text-green-400 text-xs font-medium">
                  ✓ {testimonial.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Bar - Client Logos */}
        <motion.div
          className="border-t border-gray-700 pt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-gray-400 mb-8 text-sm sm:text-base">
            Vertrauen von über 25 Unternehmen in Hamburg und Deutschland
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ opacity: 1 }}
              >
                <div className="w-20 h-12 bg-gray-600 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-400 font-medium">
                    {client.name.split(' ')[0]}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}