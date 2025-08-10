"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Cloud, Server, Shield, Zap, Database, Settings } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

const features = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Sichere und effiziente Migration Ihrer bestehenden Infrastruktur in die Cloud.",
  },
  {
    icon: Server,
    title: "Infrastructure as Code",
    description: "Automatisierte Infrastruktur-Bereitstellung mit Terraform, CloudFormation und Ansible.",
  },
  {
    icon: Shield,
    title: "Cloud Security",
    description: "Umfassende Sicherheitslösungen für Ihre Cloud-Infrastruktur und Anwendungen.",
  },
  {
    icon: Zap,
    title: "Auto-Scaling",
    description: "Automatische Skalierung Ihrer Anwendungen basierend auf Bedarf und Traffic.",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Verwaltung und Optimierung von Cloud-Datenbanken für optimale Performance.",
  },
  {
    icon: Settings,
    title: "DevOps & CI/CD",
    description: "Implementierung von DevOps-Praktiken und automatisierten Deployment-Pipelines.",
  },
]

const cloudProviders = [
  {
    name: "Amazon Web Services",
    logo: "☁️",
    description: "Marktführende Cloud-Plattform mit umfassendem Service-Portfolio",
    services: ["EC2", "S3", "RDS", "Lambda", "EKS", "CloudFront"],
    strengths: ["Größtes Service-Angebot", "Globale Verfügbarkeit", "Enterprise-Ready"],
    pricing: "Pay-as-you-use",
  },
  {
    name: "Microsoft Azure",
    logo: "🔷",
    description: "Enterprise-fokussierte Cloud-Plattform mit starker Microsoft-Integration",
    services: ["Virtual Machines", "Blob Storage", "SQL Database", "Functions", "AKS"],
    strengths: ["Microsoft Integration", "Hybrid Cloud", "Enterprise Features"],
    pricing: "Flexible Preismodelle",
  },
  {
    name: "Google Cloud Platform",
    logo: "🌐",
    description: "Innovative Cloud-Plattform mit Fokus auf KI und Machine Learning",
    services: ["Compute Engine", "Cloud Storage", "BigQuery", "Cloud Functions", "GKE"],
    strengths: ["AI/ML Services", "Data Analytics", "Kubernetes-Native"],
    pricing: "Sustained Use Discounts",
  },
  {
    name: "Multi-Cloud Strategy",
    logo: "🔄",
    description: "Optimale Kombination verschiedener Cloud-Anbieter für maximale Flexibilität",
    services: ["Vendor Independence", "Risk Distribution", "Best-of-Breed", "Cost Optimization"],
    strengths: ["Keine Vendor Lock-in", "Optimierte Kosten", "Höhere Ausfallsicherheit"],
    pricing: "Individuell optimiert",
  },
]

const cloudServices = [
  {
    title: "Cloud Strategy & Consulting",
    description: "Entwicklung einer maßgeschneiderten Cloud-Strategie für Ihr Unternehmen.",
    deliverables: [
      "Cloud Readiness Assessment",
      "Migration Roadmap",
      "Cost-Benefit Analysis",
      "Security Framework",
      "Governance Strategy",
    ],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
  },
  {
    title: "Cloud Migration Services",
    description: "Vollständige Migration Ihrer Infrastruktur und Anwendungen in die Cloud.",
    deliverables: [
      "Migration Planning",
      "Data Migration",
      "Application Modernization",
      "Testing & Validation",
      "Go-Live Support",
    ],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
  },
  {
    title: "Managed Cloud Services",
    description: "Kontinuierliche Verwaltung und Optimierung Ihrer Cloud-Infrastruktur.",
    deliverables: [
      "24/7 Monitoring",
      "Performance Optimization",
      "Security Management",
      "Backup & Recovery",
      "Cost Optimization",
    ],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
  },
]

export default function CloudSolutionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Cloud className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Cloud-Lösungen</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Skalierbare Cloud-Infrastrukturen für moderne Unternehmen. Wir helfen Ihnen dabei, die Vorteile der Cloud
            optimal zu nutzen - von der Migration bis zum laufenden Betrieb.
          </p>
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/kontakt">Cloud-Beratung starten</Link>
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
            Unsere Cloud Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-4 sm:p-6 hover:border-indigo-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cloud Providers */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
            Cloud-Anbieter & Strategien
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {cloudProviders.map((provider, index) => (
              <motion.div
                key={provider.name}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-indigo-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{provider.logo}</span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">{provider.name}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">{provider.description}</p>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {provider.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="px-2 py-1 bg-zinc-700 text-gray-300 rounded text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Stärken:</h4>
                  <ul className="space-y-1">
                    {provider.strengths.map((strength, strengthIndex) => (
                      <li key={strengthIndex} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm text-indigo-400 font-medium">Preismodell: {provider.pricing}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cloud Services */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
            Unsere Cloud Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-indigo-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{service.title}</h3>
                    <span className="text-indigo-400 font-bold text-lg">{service.price}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
                  <div className="text-sm text-gray-500 mb-4">⏱️ {service.duration}</div>
                </div>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Leistungen:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">✓</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-zinc-700 hover:bg-zinc-600" asChild>
                  <Link href="/kontakt">Beratung anfragen</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 sm:mb-6">
            Bereit für die Cloud-Transformation?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam Ihre Cloud-Strategie entwickeln und Ihr Unternehmen in die digitale Zukunft führen.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-indigo-600 hover:bg-white/90 w-full sm:w-auto" asChild>
            <Link href="/neue-kunden-form">Cloud-Assessment buchen</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
