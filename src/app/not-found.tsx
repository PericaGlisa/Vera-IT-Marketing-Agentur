"use client"

import { motion } from "framer-motion"
import { Home, AlertTriangle, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* 404 Number */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-8xl sm:text-9xl lg:text-[200px] font-heading font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl text-gray-400">
              <AlertTriangle className="w-8 h-8 text-orange-500" />
              <span>Seite nicht gefunden</span>
              <AlertTriangle className="w-8 h-8 text-orange-500" />
            </div>
            <p className="text-lg text-gray-500 mt-2">Fehler 404</p>
          </motion.div>

          {/* Error Message */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg sm:text-xl text-gray-300 mb-4 leading-relaxed">
              Die von Ihnen gesuchte Seite konnte leider nicht gefunden werden.
            </p>
            <p className="text-gray-400 max-w-lg mx-auto">
              Möglicherweise wurde die Seite verschoben, gelöscht oder die eingegebene Adresse ist falsch.
            </p>
          </motion.div>

          {/* Search Suggestion */}
          <motion.div
            className="mb-8 p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 text-gray-300 mb-2">
              <Search className="w-5 h-5 text-cyan-400" />
              <span className="font-medium">Haben Sie sich vertippt?</span>
            </div>
            <p className="text-sm text-gray-400">
              Überprüfen Sie die Schreibweise der URL oder nutzen Sie die Navigation unten.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/" className="w-full sm:w-auto">
              <Button size="lg" className="group w-full sm:w-auto">
                <Home className="mr-2 w-5 h-5" />
                Zur Startseite
              </Button>
            </Link>
          </motion.div>

          {/* Additional Help */}
          <motion.div
            className="mt-8 mb-4 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p>
              Benötigen Sie Hilfe?{' '}
              <Link href="/kontakt" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Kontaktieren Sie uns
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 left-0 w-full h-full pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-10 w-2 h-2 bg-indigo-400 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-3 h-3 bg-purple-400 rounded-full"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-cyan-400 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </div>
  )
}