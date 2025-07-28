import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { BackToTop } from "@/components/ui/BackToTop"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vera IT - Digitale Agentur Hamburg",
  description:
    "Führende digitale Agentur in Hamburg. KI-gestützte Lösungen, innovative Web-Entwicklung und datengetriebenes Marketing für Ihren Erfolg.",
  keywords: "Digital Marketing, Web Development, AI Development, Hamburg, Digitale Agentur",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-white antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
