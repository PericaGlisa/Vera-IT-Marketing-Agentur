'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ImpressumPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 pt-20 sm:pt-24 lg:pt-28">
      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-8">
              Impressum
            </h1>
          </motion.div>

          <div className="space-y-8">
            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="bg-zinc-900/50 border border-zinc-600 p-4 sm:p-6 rounded-lg">
                <p className="font-medium text-white text-sm sm:text-base">VERA IT</p>
                <p className="text-gray-300 text-sm sm:text-base">Inhaber: Jovica Mihajlovic</p>
                <p className="text-gray-300 text-sm sm:text-base">Rehrstieg 16d</p>
                <p className="text-gray-300 text-sm sm:text-base">21147 Hamburg, Deutschland</p>
              </div>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Kontakt</h2>
              <div className="bg-zinc-900/50 border border-zinc-600 p-4 sm:p-6 rounded-lg">
                <p className="text-gray-300 text-sm sm:text-base">Telefon: +49 15563 740470</p>
                <p className="text-gray-300 text-sm sm:text-base">E-Mail: info@verait.de</p>
              </div>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Umsatzsteuer-ID</h2>
              <p className="text-gray-400 text-sm sm:text-base mb-3 leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              </p>
              <div className="bg-zinc-900/50 border border-zinc-600 p-4 rounded-lg">
                <p className="font-mono text-white text-sm sm:text-base">DE456074487</p>
              </div>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p className="text-gray-400 text-sm sm:text-base mb-3 leading-relaxed">
                Berufsbezeichnung: IT-Dienstleistungen und digitales Marketing
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Zuständige Kammer: IHK Hamburg
              </p>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Redaktionell verantwortlich</h2>
              <div className="bg-zinc-900/50 border border-zinc-600 p-4 sm:p-6 rounded-lg">
                <p className="text-white font-medium text-sm sm:text-base">Jovica Mihajlovic</p>
                <p className="text-gray-300 text-sm sm:text-base">Rehrstieg 16d</p>
                <p className="text-gray-300 text-sm sm:text-base">21147 Hamburg, Deutschland</p>
              </div>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">EU-Streitschlichtung</h2>
              <p className="text-gray-400 text-sm sm:text-base mb-3 leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>
              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline text-sm sm:text-base"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 leading-tight">
                <span className="block sm:inline">Verbraucherstreitbeilegung/</span>
                <span className="block sm:inline">Universalschlichtungsstelle</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherstreitschlichtungsstelle teilzunehmen.
              </p>
            </motion.section>

            <motion.div
              className="text-left mt-12 pt-8 border-t border-zinc-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-500 text-sm">
                Stand: Januar 2025
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
