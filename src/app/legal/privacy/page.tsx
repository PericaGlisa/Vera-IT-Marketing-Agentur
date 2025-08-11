import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutz | Vera IT",
  description: "Datenschutzerklärung der Vera IT Hamburg",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none text-gray-300 space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg sm:text-xl font-medium text-gray-200 mb-3">Allgemeine Hinweise</h3>
              <p className="text-sm sm:text-base">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">2. Verantwortliche Stelle</h2>
              <p className="text-sm sm:text-base">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-lg mt-4">
                 <p className="text-gray-300">Rehrstieg 16d</p>
                 <p className="text-gray-300">21147 Hamburg, Deutschland</p>
                <p className="mt-2 text-gray-300">
                  <strong className="text-white">E-Mail:</strong> info@verait.de<br/>
        <strong className="text-white">Telefon:</strong> +49 15563 740470
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">3. Datenerfassung auf dieser Website</h2>
              <h3 className="text-lg sm:text-xl font-medium text-gray-200 mb-3">Server-Log-Dateien</h3>
              <p className="text-sm sm:text-base">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 mt-3">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Kontaktformular</h2>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                von Anschlussfragen bei uns gespeichert.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">5. Ihre Rechte</h2>
              <p className="text-sm sm:text-base">
                Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, 
                Sperrung oder Löschung dieser Daten zu verlangen.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">6. SSL- bzw. TLS-Verschlüsselung</h2>
              <p className="text-sm sm:text-base">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine 
                SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
                des Browsers von "http://" auf "https://" wechselt.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-zinc-700">
              <p className="text-sm text-gray-400">
                Stand: Januar 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}