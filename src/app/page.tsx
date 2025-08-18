"use client"

import { useEffect } from "react"
import dynamic from "next/dynamic"
import { Hero } from "@/components/home/Hero"
import StructuredData from "@/components/seo/StructuredData"

// Lazy load non-critical components
const Services = dynamic(() => import("@/components/home/Services").then(mod => ({ default: mod.Services })), {
  loading: () => <div className="h-96 animate-pulse bg-zinc-800/50 rounded-lg" />
})

const TrustSignals = dynamic(() => import("@/components/home/TrustSignals").then(mod => ({ default: mod.TrustSignals })), {
  loading: () => <div className="h-64 animate-pulse bg-zinc-800/50 rounded-lg" />
})

const TechStack = dynamic(() => import("@/components/home/TechStack").then(mod => ({ default: mod.TechStack })), {
  loading: () => <div className="h-80 animate-pulse bg-zinc-800/50 rounded-lg" />
})

const FormCTA = dynamic(() => import("@/components/home/FormCTA").then(mod => ({ default: mod.FormCTA })), {
  loading: () => <div className="h-96 animate-pulse bg-zinc-800/50 rounded-lg" />
})

const Stats = dynamic(() => import("@/components/home/Stats").then(mod => ({ default: mod.Stats })), {
  loading: () => <div className="h-48 animate-pulse bg-zinc-800/50 rounded-lg" />
})

const CTA = dynamic(() => import("@/components/home/CTA").then(mod => ({ default: mod.CTA })), {
  loading: () => <div className="h-64 animate-pulse bg-zinc-800/50 rounded-lg" />
})

const FAQ = dynamic(() => import("@/components/seo/FAQ"), {
  loading: () => <div className="h-96 animate-pulse bg-zinc-800/50 rounded-lg" />
})

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const homepageSchema = {
    name: "Digitale Agentur Services Hamburg",
    description: "Komplette digitale Lösungen für Unternehmen in Hamburg und Deutschland",
    serviceType: "Digital Agency Services"
  }

  const faqItems = [
    {
      question: "Warum sollte ich Vera IT als digitale Agentur in Hamburg wählen?",
      answer: "Vera IT ist Ihre führende digitale Agentur in Hamburg mit über 25 erfolgreichen Projekten. Wir bieten KI-Entwicklung, Web-Entwicklung, Mobile Apps und Digitales Marketing aus einer Hand. Unser Expertenteam in Hamburg sorgt für persönliche Betreuung und maßgeschneiderte Lösungen für Ihr Unternehmen."
    },
    {
      question: "Welche digitalen Services bietet Vera IT in Hamburg an?",
      answer: "Wir bieten ein komplettes Portfolio digitaler Services: KI-Entwicklung, Web-Entwicklung, Mobile App Entwicklung, Interface Design, Digitales Marketing (SEO, Google Ads, Social Media), Markendesign, E-Commerce Lösungen, Cloud-Services und Beratung & Strategie. Alle Services werden von unserem Expertenteam in Hamburg durchgeführt."
    },
    {
      question: "Wie lange dauert die Entwicklung einer Website oder App in Hamburg?",
      answer: "Die Projektdauer hängt von der Komplexität ab. Eine einfache Website dauert 2-4 Wochen, komplexe Web-Anwendungen 2-6 Monate und Mobile Apps 3-8 Monate. Wir erstellen einen detaillierten Projektplan mit Meilensteinen und halten Sie über den Fortschritt auf dem Laufenden."
    },
    {
      question: "Bietet Vera IT auch SEO und Online Marketing für Hamburg an?",
      answer: "Ja, wir sind Ihre SEO und Online Marketing Agentur in Hamburg. Wir optimieren Ihre Website für lokale Suchanfragen, führen Google Ads Kampagnen durch, betreuen Ihre Social Media Kanäle und entwickeln Content Marketing Strategien speziell für den Hamburger und deutschen Markt."
    },
    {
      question: "Was kostet eine professionelle Website oder App-Entwicklung in Hamburg?",
      answer: "Die Kosten variieren je nach Projektumfang. Eine einfache Website startet ab 2.000€, komplexe Web-Anwendungen ab 10.000€ und Mobile Apps ab 15.000€. Wir bieten eine kostenlose Erstberatung in Hamburg an, um Ihnen ein maßgeschneidertes Angebot zu erstellen."
    },
    {
      question: "Unterstützt Vera IT auch bei der KI-Integration in bestehende Systeme?",
      answer: "Absolut! Wir sind Experten für KI-Entwicklung in Hamburg und helfen bei der Integration von Machine Learning, Chatbots, Automatisierung und datengetriebenen Lösungen in Ihre bestehenden Systeme. Von der Beratung bis zur Implementierung begleiten wir Sie bei Ihrer digitalen Transformation."
    },
    {
      question: "Bietet Vera IT Wartung und Support nach Projektabschluss?",
      answer: "Ja, wir bieten umfassende Wartung und Support für alle unsere Projekte. Das umfasst regelmäßige Updates, Sicherheitspatches, Performance-Optimierung und technischen Support. Unser Team in Hamburg steht Ihnen auch nach Projektabschluss zur Verfügung."
    },
    {
      question: "Arbeitet Vera IT nur mit Unternehmen aus Hamburg oder auch deutschlandweit?",
      answer: "Obwohl unser Hauptsitz in Hamburg ist, arbeiten wir mit Unternehmen aus ganz Deutschland und der EU zusammen. Wir bieten sowohl persönliche Beratung in Hamburg als auch Remote-Services für Kunden in anderen Städten und Ländern an."
    }
  ]

  return (
    <>
      <StructuredData type="service" data={homepageSchema} />
      <Hero />
      <TrustSignals />
      <TechStack />
      <Services />
      <FormCTA />
      <Stats />
      <FAQ items={faqItems} />
      <CTA />
    </>
  )
}
