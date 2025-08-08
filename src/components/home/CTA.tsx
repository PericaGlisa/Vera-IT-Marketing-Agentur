"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function CTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-60 sm:h-60 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Bereit für die digitale Transformation?
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Lassen Sie uns gemeinsam Ihr nächstes digitales Projekt realisieren. Kontaktieren Sie uns für eine
              kostenlose Beratung.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0 w-full max-w-sm sm:max-w-none mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/neue-kunden-form" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-purple-600 hover:bg-white/90 hover:scale-105 w-full sm:w-auto min-w-[160px] sm:min-w-[180px]"
                >
                  Projekt starten
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent w-full sm:w-auto min-w-[160px] sm:min-w-[180px]"
              >
                <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Beratungstermin buchen
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
