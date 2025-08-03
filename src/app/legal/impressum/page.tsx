"use client"

import { useEffect } from "react"

export default function ImpressumPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Impressum</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="bg-zinc-800/50 border border-zinc-700 p-4 sm:p-6 rounded-lg">
                <p className="text-gray-300 text-sm sm:text-base">Rehrstieg 16d</p>
                 <p className="text-gray-300 text-sm sm:text-base">21147 Hamburg, Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Kontakt</h2>
              <div className="bg-zinc-800/50 border border-zinc-700 p-4 sm:p-6 rounded-lg">
                <p className="text-gray-300 text-sm sm:text-base"><strong className="text-white">Telefon:</strong> +49 15563 740470</p>
        <p className="text-gray-300 text-sm sm:text-base"><strong className="text-white">E-Mail:</strong> info@verait.de</p>
                <p className="text-gray-300 text-sm sm:text-base"><strong className="text-white">Website:</strong> verait.de</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Vertreten durch</h2>
              <div className="bg-zinc-800/50 border border-zinc-700 p-4 sm:p-6 rounded-lg">
                <p className="text-gray-300 text-sm sm:text-base"><strong className="text-white">Geschäftsführer:</strong> Jovica Mihajlovic</p>
                <p className="text-gray-300 text-sm sm:text-base"><strong className="text-white">Handelsregister:</strong> HRB 123456</p>
                <p className="text-gray-300 text-sm sm:text-base"><strong className="text-white">Registergericht:</strong> Amtsgericht Hamburg</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Umsatzsteuer-ID</h2>
              <p className="text-gray-300 text-sm sm:text-base mb-3">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              </p>
              <div className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-lg">
                <p className="font-mono text-white text-sm sm:text-base">DE123456789</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p className="text-gray-300 text-sm sm:text-base mb-3">
                Berufsbezeichnung: IT-Dienstleistungen und digitales Marketing
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Zuständige Kammer: IHK Hamburg
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Redaktionell verantwortlich</h2>
              <div className="bg-zinc-800/50 border border-zinc-700 p-4 sm:p-6 rounded-lg">
                <p className="text-white font-medium text-sm sm:text-base">Jovica Mihajlovic</p>
                <p className="text-gray-300 text-sm sm:text-base">Rehrstieg 16d</p>
                 <p className="text-gray-300 text-sm sm:text-base">21147 Hamburg, Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">EU-Streitschlichtung</h2>
              <p className="text-gray-300 text-sm sm:text-base mb-3">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>
              <div className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-lg">
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors underline text-sm sm:text-base break-all"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </div>
              <p className="text-gray-300 text-sm sm:text-base mt-4">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                <span className="hidden sm:inline">Verbraucherstreitbeilegung/Universalschlichtungsstelle</span>
                <span className="sm:hidden">Verbraucherstreitbeilegung</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Haftung für Inhalte</h2>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                der Kenntnis einer konkreten Rechtsverletzung möglich.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Haftung für Links</h2>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Urheberrecht</h2>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. 
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
                Dritter beachtet.
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