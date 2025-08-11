'use client';

import { useEffect } from 'react';
import { CheckCircle, ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function DankePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>

          {/* Main Content */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Vielen Dank für Ihre <span className="gradient-text">Anfrage!</span>
            </h1>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
                Wir haben Ihre Informationen erhalten und werden uns in Kürze bei Ihnen melden.
              </p>
              
              <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-xl p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-white mb-4">
                  Was passiert als Nächstes?
                </h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <p className="text-gray-300">
                      Unser Team wird Ihre Antworten sorgfältig durchgehen und eine erste Einschätzung vornehmen.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <p className="text-gray-300">
                      Wir melden uns innerhalb von 24-48 Stunden bei Ihnen, um einen ersten Gesprächstermin zu vereinbaren.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <p className="text-gray-300">
                      Im ersten Gespräch besprechen wir Ihre Anforderungen im Detail und erarbeiten gemeinsam eine Lösung.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <Button className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium transition-all duration-200">
                <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>Zurück zur Startseite</span>
              </Button>
            </Link>
            
            <Link href="/leistungen">
              <Button variant="outline" className="group flex items-center space-x-2 px-6 py-3 border-zinc-600 text-gray-300 hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-200">
                <span>Unsere Leistungen entdecken</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200 rotate-180" />
              </Button>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-zinc-700">
            <p className="text-gray-400 text-sm sm:text-base">
              Haben Sie dringende Fragen? Kontaktieren Sie uns direkt unter{' '}
              <a href="mailto:info@verait.de" className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                info@verait.de
              </a>
              {' '}oder{' '}
              <a href="tel:+4915563740470" className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                +49 15563 740470
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}