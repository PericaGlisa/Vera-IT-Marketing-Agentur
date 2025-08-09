import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import { FloatingDock } from "@/components/ui/FloatingDock"
import CookieConsentBanner from "@/components/cookie-consent/CookieConsentBanner"
import Analytics from "@/components/analytics/Analytics"
import StructuredData from "@/components/seo/StructuredData"
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vera IT - Führende Digitale Agentur Hamburg | KI & Web-Entwicklung",
  description:
    "🚀 Vera IT Hamburg: Ihre #1 Digitale Agentur für KI-Entwicklung, Web-Entwicklung, Mobile Apps & Digitales Marketing. ✅ 25+ erfolgreiche Projekte ✅ Kostenlose Beratung ✅ Hamburg & Deutschland",
  keywords: "Digitale Agentur Hamburg, Web-Entwicklung Hamburg, KI-Entwicklung Deutschland, Mobile App Entwicklung Hamburg, Digitales Marketing Hamburg, SEO Agentur Hamburg, Interface Design Hamburg, Markendesign Hamburg, Software Entwicklung Hamburg, IT Beratung Hamburg, Webdesign Hamburg, Online Marketing Hamburg",
  authors: [{ name: "Vera IT Team" }],
  creator: "Vera IT - Digitale Agentur Hamburg",
  publisher: "Vera IT GmbH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://verait.de'),
  alternates: {
    canonical: 'https://verait.de',
    languages: {
      'de-DE': 'https://verait.de',
      'de': 'https://verait.de',
    },
  },
  openGraph: {
    title: "Vera IT - Führende Digitale Agentur Hamburg | KI & Web-Entwicklung",
    description: "🚀 Vera IT Hamburg: Ihre #1 Digitale Agentur für KI-Entwicklung, Web-Entwicklung & Digitales Marketing. ✅ 25+ Projekte ✅ Kostenlose Beratung",
    url: 'https://verait.de',
    siteName: 'Vera IT - Digitale Agentur Hamburg',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vera IT - Führende Digitale Agentur Hamburg | KI & Web-Entwicklung',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vera IT - Führende Digitale Agentur Hamburg",
    description: "🚀 KI-Entwicklung, Web-Entwicklung & Digitales Marketing in Hamburg. ✅ 25+ erfolgreiche Projekte",
    images: ['/og-image.png'],
    alt: 'VERA IT - Professional IT Services & Solutions',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  other: {
    "google": "notranslate",
    "theme-color": "#9333ea",
    "geo.region": "DE-HH",
    "geo.placename": "Hamburg",
    "geo.position": "53.5511;9.9937",
    "ICBM": "53.5511, 9.9937",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="dark">
      <head>
        <StructuredData type="organization" />
        <StructuredData type="localBusiness" />
        <LocalBusinessSchema />
      </head>
      <body className={`${inter.className} bg-zinc-950 text-white antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingDock />
        <CookieConsentBanner />
        <Analytics />
      </body>
    </html>
  )
}
