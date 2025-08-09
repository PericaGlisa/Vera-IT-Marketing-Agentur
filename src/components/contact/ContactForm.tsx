"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"

const services = [
  "KI-Entwicklung",
  "Web-Entwicklung",
  "SaaS-Entwicklung",
  "Mobile Anwendungen",
    "Interface Design",
    "Digitales Marketing",
    "Markendesign",
  "Video-Produktion",
  "E-Commerce Entwicklung",
  "Cloud-Lösungen",
  "Cybersicherheit",
  "Datenanalyse",
  "Sonstiges",
]

const budgetRanges = ["€5.000 - €15.000", "€15.000 - €50.000", "€50.000 - €100.000", "€100.000+"]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    privacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Frontend validation before submission
    if (!formData.name.trim()) {
      alert('Bitte geben Sie Ihren Namen ein.')
      return
    }
    if (!formData.email.trim()) {
      alert('Bitte geben Sie Ihre E-Mail-Adresse ein.')
      return
    }
    if (!formData.service) {
      alert('Bitte wählen Sie einen gewünschten Service aus.')
      return
    }
    if (!formData.message.trim()) {
      alert('Bitte beschreiben Sie Ihr Projekt.')
      return
    }
    if (!formData.privacy) {
      alert('Bitte akzeptieren Sie die Datenschutzerklärung.')
      return
    }
    
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Show success message
        alert('Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.')
        
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
          privacy: false,
        })
      } else {
        const errorData = await response.json()
        const errorMessage = errorData.error || 'Failed to send message'
        
        // Show specific error messages
        if (errorMessage.includes('Missing required fields')) {
          alert('Bitte füllen Sie alle Pflichtfelder aus (Name, E-Mail, Service, Projektbeschreibung).')
        } else if (errorMessage.includes('Invalid email format')) {
          alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.')
        } else if (errorMessage.includes('Name must be at least 2 characters')) {
          alert('Der Name muss mindestens 2 Zeichen lang sein.')
        } else if (errorMessage.includes('message at least 10 characters')) {
          alert('Die Projektbeschreibung muss mindestens 10 Zeichen lang sein.')
        } else if (errorMessage.includes('Too many requests')) {
          alert('Zu viele Anfragen. Bitte versuchen Sie es in 15 Minuten erneut.')
        } else {
          alert(`Fehler: ${errorMessage}`)
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter info@verait.de')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <div className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-heading font-semibold mb-4 sm:mb-6">Projekt anfragen</h2>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Input
            label="Name *"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ihr vollständiger Name"
            required
          />

          <Input
            label="E-Mail *"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ihre.email@beispiel.de"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Input
            label="Unternehmen"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Ihr Unternehmen"
          />

          <Input
            label="Telefon"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+49 123 456 789"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">Gewünschter Service *</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-zinc-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
              required
            >
              <option value="">Service auswählen</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">Budget</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-zinc-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
            >
              <option value="">Budget auswählen</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Textarea
          label="Projektbeschreibung *"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Beschreiben Sie Ihr Projekt und Ihre Anforderungen..."
          rows={4}
          required
        />

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-purple-500 bg-zinc-900 border-gray-700 rounded focus:ring-purple-500 focus:ring-2 flex-shrink-0"
            required
          />
          <label htmlFor="privacy" className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            Ich akzeptiere die{" "}
            <a href="/rechtliches/datenschutz" className="text-purple-500 hover:underline">
              Datenschutzerklärung
            </a>{" "}
            und stimme der Verarbeitung meiner Daten zu. *
          </label>
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full">
            <Send className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
          </Button>
        </motion.div>
      </form>
    </div>
  )
}
