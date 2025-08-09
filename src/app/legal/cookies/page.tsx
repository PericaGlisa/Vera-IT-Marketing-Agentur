import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie-Richtlinie | Vera IT",
  description: "Cookie-Richtlinie und Informationen zur Verwendung von Cookies auf verait.de",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Cookie-Richtlinie</h1>
          
          <div className="prose prose-lg max-w-none text-gray-300 space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Was sind Cookies?</h2>
              <p>
                Cookies sind kleine Textdateien, die von Websites auf Ihrem Computer oder mobilen Gerät gespeichert 
                werden, wenn Sie eine Website besuchen. Sie ermöglichen es der Website, Ihre Aktionen und Präferenzen 
                über einen bestimmten Zeitraum zu speichern, sodass Sie diese nicht bei jedem Besuch der Website oder 
                beim Navigieren von einer Seite zur anderen erneut eingeben müssen.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Wie verwenden wir Cookies?</h2>
              <p>
                Wir verwenden Cookies auf unserer Website, um:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Die Funktionalität unserer Website zu gewährleisten</li>
                <li>Ihre Präferenzen und Einstellungen zu speichern</li>
                <li>Die Leistung unserer Website zu analysieren und zu verbessern</li>
                <li>Ihnen relevante Inhalte und Werbung anzuzeigen</li>
                <li>Die Sicherheit unserer Website zu gewährleisten</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Arten von Cookies</h2>
              
              <div className="space-y-6">
                  <div className="bg-zinc-800/50 border border-zinc-700 p-4 sm:p-6 rounded-lg">
                   <h3 className="text-lg sm:text-xl font-medium text-gray-200 mb-3">Notwendige Cookies</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                    Diese Cookies sind für das ordnungsgemäße Funktionieren unserer Website unerlässlich. 
                    Sie ermöglichen grundlegende Funktionen wie Seitennavigation und Zugriff auf sichere 
                    Bereiche der Website.
                  </p>
                  <p className="text-sm text-blue-400 mt-2"><strong>Speicherdauer:</strong> Session</p>
                </div>

                <div className="bg-zinc-800/50 border border-zinc-700 p-4 sm:p-6 rounded-lg">
                   <h3 className="text-lg sm:text-xl font-medium text-gray-200 mb-3">Funktionale Cookies</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                    Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung 
                    bereitzustellen. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste 
                    wir auf unseren Seiten verwenden.
                  </p>
                  <p className="text-sm text-green-400 mt-2"><strong>Speicherdauer:</strong> 30 Tage</p>
                </div>

                <div className="bg-zinc-800/50 border border-zinc-700 p-4 sm:p-6 rounded-lg">
                   <h3 className="text-lg sm:text-xl font-medium text-gray-200 mb-3">Analytische Cookies</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, 
                    indem sie Informationen anonym sammeln und melden. Dies hilft uns, die Leistung unserer 
                    Website zu verbessern.
                  </p>
                  <p className="text-sm text-yellow-400 mt-2"><strong>Speicherdauer:</strong> 2 Jahre</p>
                </div>

                <div className="bg-zinc-800/50 border border-zinc-700 p-4 sm:p-6 rounded-lg">
                   <h3 className="text-lg sm:text-xl font-medium text-gray-200 mb-3">Marketing Cookies</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                    Diese Cookies werden verwendet, um Besuchern auf Webseiten zu folgen. Die Absicht ist, 
                    Anzeigen zu zeigen, die relevant und ansprechend für den einzelnen Benutzer sind.
                  </p>
                  <p className="text-sm text-purple-400 mt-2"><strong>Speicherdauer:</strong> 1 Jahr</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Drittanbieter-Cookies</h2>
              <p className="text-sm sm:text-base">
                Unsere Website kann auch Cookies von Drittanbietern verwenden, wie z.B.:
              </p>
              <div className="mt-4 space-y-4">
                <div className="border-l-4 border-zinc-600 pl-4">
                  <h4 className="font-medium text-gray-200">Google Analytics</h4>
                  <p className="text-sm text-gray-400">
                    Zur Analyse des Website-Traffics und zur Verbesserung der Benutzererfahrung.
                  </p>
                </div>
                <div className="border-l-4 border-zinc-600 pl-4">
                  <h4 className="font-medium text-gray-200">Google Fonts</h4>
                  <p className="text-sm text-gray-400">
                    Zur Bereitstellung von Webschriftarten für eine bessere Darstellung.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Cookie-Einstellungen verwalten</h2>
              <p className="text-sm sm:text-base">
                Sie können Ihre Cookie-Einstellungen jederzeit ändern. Die meisten Webbrowser ermöglichen es Ihnen, 
                Cookies über die Browsereinstellungen zu kontrollieren. Sie können:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Alle Cookies blockieren</li>
                <li>Nur Cookies von Drittanbietern blockieren</li>
                <li>Alle Cookies löschen, wenn Sie den Browser schließen</li>
                <li>Bestimmte Websites auf eine Whitelist setzen</li>
              </ul>
              
              <div className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-lg mt-6">
                <p className="text-gray-300">
                  <strong>Hinweis:</strong> Das Deaktivieren von Cookies kann die Funktionalität unserer Website 
                  beeinträchtigen und Ihr Benutzererlebnis verschlechtern.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Browser-spezifische Anleitungen</h2>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="border border-zinc-700 bg-zinc-800/30 rounded-lg p-4">
                  <h4 className="font-medium mb-2 text-gray-200">Google Chrome</h4>
                    <p className="text-sm text-gray-400">
                    Einstellungen → Erweitert → Datenschutz und Sicherheit → Cookies
                  </p>
                </div>
               <div className="border border-zinc-700 bg-zinc-800/30 rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-gray-200">Mozilla Firefox</h4>
                    <p className="text-sm text-gray-400">
                    Einstellungen → Datenschutz & Sicherheit → Cookies und Website-Daten
                  </p>
                </div>
                <div className="border border-zinc-700 bg-zinc-800/30 rounded-lg p-4">
                  <h4 className="font-medium mb-2 text-gray-200">Safari</h4>
                  <p className="text-sm text-gray-400">
                    Einstellungen → Datenschutz → Cookies und Website-Daten verwalten
                  </p>
                </div>
                <div className="border border-zinc-700 bg-zinc-800/30 rounded-lg p-4">
                  <h4 className="font-medium mb-2 text-gray-200">Microsoft Edge</h4>
                  <p className="text-sm text-gray-400">
                    Einstellungen → Cookies und Websiteberechtigungen → Cookies
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Kontakt</h2>
              <p className="text-sm sm:text-base">
                Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte:
              </p>
              <div className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-lg mt-4">
                <p><strong>E-Mail:</strong> info@verait.de</p>
<p><strong>Telefon:</strong> +49 15563 740470</p>
<p><strong>Adresse:</strong> Rehrstieg 16d, 21147 Hamburg, Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Änderungen an dieser Richtlinie</h2>
              <p className="text-sm sm:text-base">
                Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um Änderungen in unseren 
                Praktiken oder aus anderen betrieblichen, rechtlichen oder regulatorischen Gründen zu berücksichtigen. 
                Wir empfehlen Ihnen, diese Seite regelmäßig zu besuchen, um über unsere Verwendung von Cookies 
                informiert zu bleiben.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-zinc-700">
              <p className="text-sm text-gray-400">
                Letzte Aktualisierung: Januar 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}