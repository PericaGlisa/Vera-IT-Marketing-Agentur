'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
              Datenschutzerklärung
            </h1>
          </motion.div>

          <div className="space-y-8">
            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg sm:text-xl font-medium text-gray-200 mb-3">Allgemeine Hinweise</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können.
              </p>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">2. Verantwortliche Stelle</h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-zinc-900/50 border border-zinc-600 p-4 rounded-lg">
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
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">3. Datenerfassung auf dieser Website</h2>
              <h3 className="text-lg sm:text-xl font-medium text-gray-200 mb-3">Server-Log-Dateien</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-300 text-sm sm:text-base">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">4. Kontaktformular</h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                von Anschlussfragen bei uns gespeichert.
              </p>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">5. Ihre Rechte</h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, 
                Sperrung oder Löschung dieser Daten zu verlangen.
              </p>
            </motion.section>

            <motion.section
              className="bg-zinc-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">6. SSL- bzw. TLS-Verschlüsselung</h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine 
                SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
                des Browsers von "http://" auf "https://" wechselt.
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
