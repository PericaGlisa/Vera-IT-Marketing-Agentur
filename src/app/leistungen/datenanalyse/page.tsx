"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { BarChart3, Database, TrendingUp, Eye, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { PriceLabel } from "@/components/ui/price-label"
import Link from "next/link"

const features = [
  {
    icon: Database,
    title: "Data Integration",
    description: "Zusammenführung von Daten aus verschiedenen Quellen in einheitliche Data Warehouses.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Interaktive Dashboards und Reports für datengetriebene Geschäftsentscheidungen.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Vorhersagemodelle und Machine Learning für Trend-Analysen und Prognosen.",
  },
  {
    icon: Eye,
    title: "Data Visualization",
    description: "Ansprechende Visualisierungen komplexer Daten für bessere Verständlichkeit.",
  },
  {
    icon: Zap,
    title: "Real-time Analytics",
    description: "Echtzeitanalysen für sofortige Einblicke und schnelle Reaktionsfähigkeit.",
  },
  {
    icon: Target,
    title: "Performance Monitoring",
    description: "KPI-Tracking und Performance-Überwachung für kontinuierliche Optimierung.",
  },
]

const analyticsTools = [
  "Tableau",
  "Power BI",
  "Google Analytics",
  "Apache Spark",
  "Elasticsearch",
  "Kibana",
  "Python/R",
  "SQL Server",
  "PostgreSQL",
  "MongoDB",
  "Snowflake",
  "AWS Redshift",
]

const analyticsServices = [
  {
    title: "Data Strategy & Consulting",
    description: "Entwicklung einer umfassenden Datenstrategie für Ihr Unternehmen.",
    deliverables: [
      "Data Maturity Assessment",
      "Data Strategy Roadmap",
      "Technology Recommendations",
      "Governance Framework",
      "ROI Analysis",
    ],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
    complexity: "Mittel",
  },
  {
    title: "Business Intelligence Setup",
    description: "Implementierung von BI-Lösungen mit Dashboards und Reporting-Systemen.",
    deliverables: [
      "Data Warehouse Design",
      "ETL Pipeline Development",
      "Dashboard Creation",
      "Report Automation",
      "User Training",
    ],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
    complexity: "Hoch",
  },
  {
    title: "Advanced Analytics & ML",
    description: "Machine Learning Modelle und erweiterte Analysen für Predictive Insights.",
    deliverables: [
      "Data Science Consulting",
      "ML Model Development",
      "Predictive Analytics",
      "Statistical Analysis",
      "Model Deployment",
    ],
    price: "Preis auf Anfrage",
    duration: "Nach Vereinbarung",
    complexity: "Sehr Hoch",
  },
]

const useCases = [
  {
    industry: "E-Commerce",
    title: "Customer Analytics",
    description: "Kundenverhalten analysieren und Personalisierung optimieren",
    metrics: ["Conversion Rate +35%", "Customer Lifetime Value +28%", "Churn Rate -22%"],
    icon: "🛒",
  },
  {
    industry: "Manufacturing",
    title: "Predictive Maintenance",
    description: "Maschinenwartung vorhersagen und Ausfallzeiten reduzieren",
    metrics: ["Downtime -40%", "Maintenance Costs -25%", "Equipment Efficiency +30%"],
    icon: "🏭",
  },
  {
    industry: "Finance",
    title: "Risk Analytics",
    description: "Risikobewertung und Fraud Detection in Echtzeit",
    metrics: ["Fraud Detection +45%", "Risk Assessment +60%", "Processing Time -50%"],
    icon: "💰",
  },
  {
    industry: "Healthcare",
    title: "Patient Analytics",
    description: "Patientendaten analysieren für bessere Behandlungsergebnisse",
    metrics: ["Treatment Success +25%", "Cost Reduction -20%", "Patient Satisfaction +35%"],
    icon: "🏥",
  },
]

export default function DataAnalyticsPage() {
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
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Datenanalyse</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Verwandeln Sie Ihre Daten in wertvolle Erkenntnisse. Wir helfen Ihnen dabei, das volle Potenzial Ihrer Daten
            zu erschließen und datengetriebene Entscheidungen zu treffen.
          </p>
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/kontakt">Datenanalyse Beratung</Link>
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
            Unsere Analytics Expertise
          </h2>
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
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
            Branchenspezifische Anwendungsfälle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{useCase.icon}</span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{useCase.title}</h3>
                    <p className="text-purple-400 text-sm">{useCase.industry}</p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">{useCase.description}</p>
                <div>
                  <h4 className="text-white font-semibold mb-3">Erzielte Ergebnisse:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-300 text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Analytics Services */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-8 sm:mb-12">
            Unsere Analytics Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {analyticsServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-purple-500/50 transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <PriceLabel price={service.price} className="text-purple-400 font-bold text-xs xs:text-sm sm:text-base md:text-lg" />
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
                <div className="mb-6 flex-grow">
                  <h4 className="text-white font-semibold mb-3">Leistungen:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-purple-500 mt-1">✓</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-zinc-700 hover:bg-zinc-600 mt-auto" asChild>
                  <Link href="/kontakt">Beratung anfragen</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Analytics Tools */}
        <motion.div
          className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8 mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-6 sm:mb-8">Analytics Tools</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {analyticsTools.map((tool, index) => (
              <motion.span
                key={tool}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-zinc-700 border border-gray-600 rounded-lg text-gray-300 hover:text-purple-500 hover:border-purple-500/50 transition-all duration-300 text-sm sm:text-base"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 sm:mb-6">
            Bereit für datengetriebene Entscheidungen?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Lassen Sie uns gemeinsam das Potenzial Ihrer Daten erschließen und Ihr Business auf das nächste Level
            bringen.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-purple-600 hover:bg-white/90 w-full sm:w-auto" asChild>
            <Link href="/neue-kunden-form">Kostenlose Datenanalyse</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
