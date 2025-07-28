import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AGB | Vera IT Marketing-Agentur",
  description: "Allgemeine Geschäftsbedingungen der Vera IT Marketing-Agentur Hamburg",
}

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-8">Allgemeine Geschäftsbedingungen</h1>
          
          <div className="prose prose-lg max-w-none text-gray-300 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der Vera IT Marketing-Agentur 
                und ihren Kunden über die Erbringung von Dienstleistungen im Bereich digitales Marketing, Webentwicklung, 
                AI-Entwicklung und verwandten Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Vertragspartner</h2>
              <div className="bg-zinc-800/50 border border-zinc-700 p-4 rounded-lg">
                <p className="font-medium">Vera IT Marketing-Agentur</p>
                <p>Rehrstieg 16d, 21147</p>
                 <p>20095 Hamburg, Deutschland</p>
                <p className="mt-2">
                  <strong>E-Mail:</strong> info@verait.de<br/>
        <strong>Telefon:</strong> +49 15563 740470
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Vertragsschluss</h2>
              <p>
                Der Vertrag kommt durch die Annahme des Angebots durch den Kunden und die Bestätigung durch 
                Vera IT Marketing-Agentur zustande. Alle Angebote sind freibleibend und unverbindlich.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Leistungsumfang</h2>
              <p>
                Der Umfang der zu erbringenden Leistungen ergibt sich aus der jeweiligen Projektbeschreibung 
                und den individuellen Vereinbarungen. Änderungen bedürfen der Schriftform.
              </p>
              <h3 className="text-xl font-medium text-gray-200 mb-3 mt-6">Unsere Leistungen umfassen:</h3>
              <ul className="list-disc pl-6 mt-3">
                <li>AI Development und Machine Learning Lösungen</li>
                <li>Web Development und SaaS-Entwicklung</li>
                <li>Mobile App Entwicklung</li>
                <li>UI/UX Design</li>
                <li>Digital Marketing und SEO</li>
                <li>Brand Design und Video Production</li>
                <li>E-Commerce Development</li>
                <li>Cloud Solutions und Cybersecurity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Preise und Zahlungsbedingungen</h2>
              <p>
                Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Rechnungen sind innerhalb 
                von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Urheberrecht und Nutzungsrechte</h2>
              <p>
                Alle im Rahmen der Leistungserbringung erstellten Werke unterliegen dem Urheberrecht. 
                Der Kunde erhält die vereinbarten Nutzungsrechte nach vollständiger Bezahlung der Vergütung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Haftung</h2>
              <p>
                Die Haftung von Vera IT Marketing-Agentur ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. 
                Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den 
                vorhersehbaren, vertragstypischen Schaden begrenzt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Kündigung</h2>
              <p>
                Beide Parteien können den Vertrag mit einer Frist von 30 Tagen zum Monatsende kündigen, 
                sofern nicht anders vereinbart. Das Recht zur außerordentlichen Kündigung bleibt unberührt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Datenschutz</h2>
              <p>
                Der Schutz personenbezogener Daten ist uns wichtig. Details zur Datenverarbeitung finden Sie 
                in unserer Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Schlussbestimmungen</h2>
              <p>
                Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist Hamburg. 
                Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-zinc-700">
              <p className="text-sm text-gray-400">
                Stand: Januar 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}