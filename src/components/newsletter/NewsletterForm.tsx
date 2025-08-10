"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message)
        setIsSuccess(true)
        setEmail("")
      } else {
        setMessage(data.error || "Ein Fehler ist aufgetreten")
        setIsSuccess(false)
      }
    } catch (error) {
      setMessage("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.")
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ihre E-Mail-Adresse"
          className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          required
          disabled={isSubmitting}
        />
        <Button 
          type="submit" 
          variant="secondary" 
          className="bg-white text-purple-600 hover:bg-white/90 disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wird gesendet..." : "Abonnieren"}
        </Button>
      </form>
      
      {message && (
        <div className={`mt-4 p-3 rounded-lg text-center ${
          isSuccess 
            ? "bg-green-500/20 border border-green-500/30 text-green-300" 
            : "bg-red-500/20 border border-red-500/30 text-red-300"
        }`}>
          {message}
        </div>
      )}
    </div>
  )
}