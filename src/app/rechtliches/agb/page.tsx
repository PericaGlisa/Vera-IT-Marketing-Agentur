'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AGBPage() {
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
              Allgemeine Geschäftsbedingungen
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
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">1. Geltungsbereich</h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der Vera IT 
                und ihren Kunden über die Erbringung von Dienstleistungen im Bereich digitales Marketing, Webentwicklung, 
                AI-Entwicklung und verwandten Services.
              </p>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">2. Vertragspartner</h2>
              <div className="bg-zinc-900/50 border border-zinc-600 p-4 sm:p-6 rounded-lg">
                <p className="font-medium text-white text-sm sm:text-base">VERA IT</p>
                <p className="text-gray-300 text-sm sm:text-base">Inhaber: Jovica Mihajlovic</p>
                <p className="text-gray-300 text-sm sm:text-base">Rehrstieg 16d</p>
                <p className="text-gray-300 text-sm sm:text-base">21147 Hamburg, Deutschland</p>
                <p className="mt-2 text-gray-300 text-sm sm:text-base">
                  <strong className="text-white">E-Mail:</strong> info@verait.de<br/>
                  <strong className="text-white">Telefon:</strong> +49 15563 740470
                </p>
              </div>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">3. Vertragsschluss</h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Der Vertrag kommt durch die Annahme des Angebots durch den Kunden und die Bestätigung durch 
                Vera IT zustande. Alle Angebote sind freibleibend und unverbindlich.
              </p>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">4. Leistungsumfang</h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                Der Umfang der zu erbringenden Leistungen ergibt sich aus der jeweiligen Projektbeschreibung 
                und den individuellen Vereinbarungen. Änderungen bedürfen der Schriftform.
              </p>
              <h3 className="text-lg sm:text-xl font-medium text-gray-200 mb-3 mt-6">Unsere Leistungen umfassen:</h3>
              <ul className="list-disc pl-6 mt-3 text-gray-400 text-sm sm:text-base space-y-2">
                <li>AI Development und Machine Learning Lösungen</li>
                <li>Web Development und SaaS-Entwicklung</li>
                <li>Mobile App Entwicklung</li>
                <li>Interface Design</li>
                <li>Digitales Marketing und SEO</li>
                <li>Markendesign und Video Production</li>
                <li>E-Commerce Development</li>
                <li>Cloud Solutions und Cybersecurity</li>
              </ul>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">5. Preise und Zahlungsbedingungen</h2>
              <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
                Die Preise ergeben sich aus dem jeweiligen Angebot. Alle Preise verstehen sich zzgl. der 
                gesetzlichen Mehrwertsteuer.
              </p>
              <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
                Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz 
                der Europäischen Zentralbank berechnet.
              </p>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">6. Urheberrecht und Nutzungsrechte</h2>
              <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
                Alle im Rahmen der Leistungserbringung erstellten Werke (insbesondere Websites, Software, 
                Designs, Texte) unterliegen dem Urheberrecht des Anbieters.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Der Kunde erhält nach vollständiger Bezahlung ein einfaches, nicht übertragbares Nutzungsrecht 
                für den vereinbarten Zweck.
              </p>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">7. Haftung</h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Die Haftung von Vera IT ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. 
                Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den 
                vorhersehbaren, vertragstypischen Schaden begrenzt.
              </p>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">8. Kündigung</h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Beide Parteien können den Vertrag mit einer Frist von 30 Tagen zum Monatsende kündigen, 
                sofern nicht anders vereinbart. Das Recht zur außerordentlichen Kündigung bleibt unberührt.
              </p>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">9. Datenschutz</h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Der Schutz personenbezogener Daten ist uns wichtig. Details zur Datenverarbeitung finden Sie 
                in unserer Datenschutzerklärung.
              </p>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">10. Schlussbestimmungen</h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist Hamburg. 
                Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
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
