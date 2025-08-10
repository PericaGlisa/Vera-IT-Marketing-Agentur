'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CookiePolicyPage() {
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
              Cookie-Richtlinie
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
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Was sind Cookies?</h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Cookies sind kleine Textdateien, die von Websites auf Ihrem Computer oder mobilen Gerät gespeichert 
                werden, wenn Sie eine Website besuchen. Sie ermöglichen es der Website, Ihre Aktionen und Präferenzen 
                über einen bestimmten Zeitraum zu speichern, sodass Sie diese nicht bei jedem Besuch der Website oder 
                beim Navigieren von einer Seite zur anderen erneut eingeben müssen.
              </p>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Welche Cookies verwenden wir?</h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                Wir verwenden Cookies auf unserer Website, um:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-400 text-sm sm:text-base">
                <li>Die Funktionalität unserer Website zu gewährleisten</li>
                <li>Ihre Präferenzen und Einstellungen zu speichern</li>
                <li>Die Leistung unserer Website zu analysieren und zu verbessern</li>
                <li>Ihnen relevante Inhalte und Werbung anzuzeigen</li>
                <li>Die Sicherheit unserer Website zu gewährleisten</li>
              </ul>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Arten von Cookies</h2>
              
              <div className="space-y-6">
                <div className="bg-zinc-900/50 border border-zinc-600 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-200 mb-3">Notwendige Cookies</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Diese Cookies sind für das ordnungsgemäße Funktionieren unserer Website unerlässlich. 
                    Sie ermöglichen grundlegende Funktionen wie Seitennavigation und Zugriff auf sichere 
                    Bereiche der Website.
                  </p>
                  <p className="text-sm text-blue-400 mt-2"><strong>Speicherdauer:</strong> Session</p>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-600 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-200 mb-3">Funktionale Cookies</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung 
                    bereitzustellen. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste 
                    wir auf unseren Seiten verwenden.
                  </p>
                  <p className="text-sm text-green-400 mt-2"><strong>Speicherdauer:</strong> 30 Tage</p>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-600 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-200 mb-3">Analytische Cookies</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, 
                    indem sie Informationen anonym sammeln und melden. Dies hilft uns, die Leistung unserer 
                    Website zu verbessern.
                  </p>
                  <p className="text-sm text-yellow-400 mt-2"><strong>Speicherdauer:</strong> 2 Jahre</p>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-600 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-medium text-gray-200 mb-3">Marketing Cookies</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Diese Cookies werden verwendet, um Besuchern auf Webseiten zu folgen. Die Absicht ist, 
                    Anzeigen zu zeigen, die relevant und ansprechend für den einzelnen Benutzer sind.
                  </p>
                  <p className="text-sm text-purple-400 mt-2"><strong>Speicherdauer:</strong> 1 Jahr</p>
                </div>
              </div>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Cookie-Verwaltung</h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                Sie können Ihre Cookie-Einstellungen jederzeit ändern. Die meisten Webbrowser ermöglichen es Ihnen, 
                Cookies über die Browsereinstellungen zu kontrollieren. Sie können:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-400 text-sm sm:text-base">
                <li>Alle Cookies blockieren</li>
                <li>Nur Cookies von Drittanbietern blockieren</li>
                <li>Alle Cookies löschen, wenn Sie den Browser schließen</li>
                <li>Bestimmte Websites auf eine Whitelist setzen</li>
              </ul>
              
              <div className="bg-zinc-900/50 border border-zinc-600 p-4 rounded-lg mt-6">
                <p className="text-gray-300 text-sm sm:text-base">
                  <strong>Hinweis:</strong> Das Deaktivieren von Cookies kann die Funktionalität unserer Website 
                  beeinträchtigen und Ihr Benutzererlebnis verschlechtern.
                </p>
              </div>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Kontakt</h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte:
              </p>
              <div className="bg-zinc-900/50 border border-zinc-600 p-4 sm:p-6 rounded-lg">
                <p className="font-medium text-white text-sm sm:text-base">VERA IT</p>
                <p className="text-gray-300 text-sm sm:text-base">Inhaber: Jovica Mihajlovic</p>
                <p className="text-gray-300 text-sm sm:text-base">Rehrstieg 16d</p>
                <p className="text-gray-300 text-sm sm:text-base">21147 Hamburg, Deutschland</p>
                <p className="mt-2 text-gray-300 text-sm sm:text-base">
                  E-Mail: info@verait.de<br/>
                  Telefon: +49 15563 740470
                </p>
              </div>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Änderungen an dieser Richtlinie</h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um Änderungen in unseren 
                Praktiken oder aus anderen betrieblichen, rechtlichen oder regulatorischen Gründen zu 
                berücksichtigen. Wir empfehlen Ihnen, diese Seite regelmäßig zu besuchen, um über unsere 
                Cookie-Praktiken informiert zu bleiben.
              </p>
            </motion.section>

            <div className="mt-12 pt-8 border-t border-zinc-700">
              <p className="text-sm text-gray-400">
                Stand: Januar 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
