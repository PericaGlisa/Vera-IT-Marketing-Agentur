import { DefaultSeoProps } from 'next-seo'

const SEO: DefaultSeoProps = {
  titleTemplate: '%s | Vera IT - Digitale Agentur Hamburg',
  defaultTitle: 'Vera IT - Führende Digitale Agentur Hamburg | KI & Web-Entwicklung',
  description: '🚀 Vera IT Hamburg: Ihre #1 Digitale Agentur für KI-Entwicklung, Web-Entwicklung, Mobile Apps & Digitales Marketing. ✅ 25+ erfolgreiche Projekte ✅ Kostenlose Beratung ✅ Hamburg & Deutschland',
  canonical: 'https://verait.de',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://verait.de',
    siteName: 'Vera IT - Digitale Agentur Hamburg',
    title: 'Vera IT - Führende Digitale Agentur Hamburg | KI & Web-Entwicklung',
    description: '🚀 Vera IT Hamburg: Ihre #1 Digitale Agentur für KI-Entwicklung, Web-Entwicklung & Digitales Marketing. ✅ 25+ Projekte ✅ Kostenlose Beratung',
    images: [
      {
        url: 'https://verait.de/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vera IT - Führende Digitale Agentur Hamburg | KI & Web-Entwicklung',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    handle: '@verait_de',
    site: '@verait_de',
    cardType: 'summary_large_image'
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'theme-color',
      content: '#9333ea'
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent'
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'Vera IT'
    },
    {
      name: 'application-name',
      content: 'Vera IT'
    },
    {
      name: 'msapplication-TileColor',
      content: '#9333ea'
    },
    {
      name: 'msapplication-config',
      content: '/browserconfig.xml'
    },
    {
      name: 'geo.region',
      content: 'DE-HH'
    },
    {
      name: 'geo.placename',
      content: 'Hamburg'
    },
    {
      name: 'geo.position',
      content: '53.5511;9.9937'
    },
    {
      name: 'ICBM',
      content: '53.5511, 9.9937'
    },
    {
      name: 'google',
      content: 'notranslate'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/icon.png'
    },
    {
      rel: 'apple-touch-icon',
      href: '/icon.png',
      sizes: '180x180'
    },
    {
      rel: 'manifest',
      href: '/manifest.json'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous'
    },
    {
      rel: 'dns-prefetch',
      href: 'https://www.google-analytics.com'
    },
    {
      rel: 'dns-prefetch',
      href: 'https://embed.cal.com'
    },
    {
      rel: 'alternate',
      hrefLang: 'de',
      href: 'https://verait.de'
    },
    {
      rel: 'alternate',
      hrefLang: 'de-DE',
      href: 'https://verait.de'
    }
  ],
  robotsProps: {
    nosnippet: false,
    notranslate: false,
    noimageindex: false,
    noarchive: false,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1
  }
}

export default SEO

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'Vera IT - Führende Digitale Agentur Hamburg | KI & Web-Entwicklung',
    description: '🚀 Vera IT Hamburg: Ihre #1 Digitale Agentur für KI-Entwicklung, Web-Entwicklung, Mobile Apps & Digitales Marketing. ✅ 25+ erfolgreiche Projekte ✅ Kostenlose Beratung ✅ Hamburg & Deutschland',
    canonical: 'https://verait.de'
  },
  services: {
    title: 'Digitale Services - Web-Entwicklung, KI & Mobile Apps',
    description: 'Professionelle digitale Services: Web-Entwicklung, KI-Entwicklung, Mobile Apps, Digital Marketing & Interface Design. Kostenlose Beratung in Hamburg.',
    canonical: 'https://verait.de/leistungen'
  },
  projects: {
    title: 'Erfolgreiche Projekte - Referenzen & Case Studies',
    description: 'Entdecken Sie unsere erfolgreichen Projekte: Web-Apps, Mobile Apps, KI-Lösungen & Digital Marketing Kampagnen. 25+ zufriedene Kunden.',
    canonical: 'https://verait.de/projekte'
  },
  contact: {
    title: 'Kontakt - Kostenlose Beratung für Ihr digitales Projekt',
    description: 'Kontaktieren Sie Vera IT Hamburg für eine kostenlose Beratung. Digitale Agentur für Web-Entwicklung, KI & Mobile Apps. Jetzt Termin buchen!',
    canonical: 'https://verait.de/kontakt'
  },
  consultation: {
    title: 'Beratungstermin buchen - Kostenlose Erstberatung',
    description: 'Buchen Sie Ihren kostenlosen Beratungstermin bei Vera IT Hamburg. Digitale Strategien, Web-Entwicklung & KI-Lösungen. Online-Terminbuchung.',
    canonical: 'https://verait.de/beratung'
  },
  team: {
    title: 'Unser Team - Experten für digitale Transformation',
    description: 'Lernen Sie das Vera IT Team kennen: Erfahrene Entwickler, Designer & Digital Marketing Experten aus Hamburg. Ihr Partner für digitale Projekte.',
    canonical: 'https://verait.de/team'
  }
}