"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Brain, Cpu, Eye, Network, BarChart3, Zap } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

const features = [
  {
    icon: Brain,
    title: "Machine Learning Modelle",
    description: "Entwicklung maßgeschneiderter ML-Algorithmen für Ihre spezifischen Geschäftsanforderungen.",
  },
  {
    icon: Cpu,
    title: "Natural Language Processing",
    description: "Intelligente Textverarbeitung und -analyse für Chatbots, Sentiment-Analyse und mehr.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Bildverarbeitung und Objekterkennung für Qualitätskontrolle und Automatisierung.",
  },
  {
    icon: Network,
    title: "Predictive Analytics",
    description: "Vorhersagemodelle für Business Intelligence und datengetriebene Entscheidungen.",
  },
  {
    icon: BarChart3,
    title: "Deep Learning",
    description: "Neuronale Netzwerke für komplexe Muster-erkennung und Automatisierung.",
  },
  {
    icon: Zap,
    title: "AI Integration",
    description: "Nahtlose Integration von KI-Lösungen in bestehende Systeme und Workflows.",
  },
]

const technologies = [
  "TensorFlow",
  "PyTorch",
  "OpenAI GPT",
  "Hugging Face",
  "Scikit-learn",
  "Keras",
  "NLTK",
  "OpenCV",
  "Pandas",
  "NumPy",
]

export default function AIDevPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-16 sm:pt-20 pb-12 sm:pb-16 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            <span className="gradient-text">KI-Entwicklung</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Intelligente Lösungen für die Zukunft Ihres Unternehmens. Wir entwickeln maßgeschneiderte KI-Anwendungen,
            die Ihre Geschäftsprozesse revolutionieren.
          </p>
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/neue-kunden-form">Kostenlose Beratung anfragen</Link>
          </Button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">Unsere KI-Expertise</h2>
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
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-6 sm:mb-8">Technologie-Stack</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-zinc-700 border border-gray-600 rounded-lg text-gray-300 hover:text-purple-500 hover:border-purple-500/50 transition-all duration-300 text-sm sm:text-base"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 sm:mb-6">
            Bereit für KI-gestützte Innovation?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam die Möglichkeiten der Künstlichen Intelligenz für Ihr Unternehmen erkunden.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-white/90 w-full sm:w-auto" asChild>
            <Link href="/neue-kunden-form">Projekt besprechen</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
