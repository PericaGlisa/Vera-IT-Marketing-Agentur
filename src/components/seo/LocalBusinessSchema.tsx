import Script from 'next/script'

interface LocalBusinessSchemaProps {
  businessName?: string
  description?: string
  address?: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  contactInfo?: {
    telephone: string
    email: string
  }
  openingHours?: string[]
  services?: string[]
  priceRange?: string
}

export default function LocalBusinessSchema({
  businessName = "Vera IT - Digitale Agentur Hamburg",
  description = "Führende digitale Agentur in Hamburg spezialisiert auf KI-Entwicklung, Web-Entwicklung, Mobile Apps und Digitales Marketing.",
  address = {
    streetAddress: "Hamburger Straße 123",
    addressLocality: "Hamburg",
    addressRegion: "Hamburg",
    postalCode: "20095",
    addressCountry: "DE"
  },
  geo = {
    latitude: 53.5511,
    longitude: 9.9937
  },
  contactInfo = {
    telephone: "+49-40-12345678",
    email: "info@verait.de"
  },
  openingHours = [
    "Mo-Fr 09:00-18:00"
  ],
  services = [
    "KI-Entwicklung",
    "Web-Entwicklung",
    "Mobile App Entwicklung",
    "Digitales Marketing",
    "Interface Design",
    "Markendesign"
  ],
  priceRange = "€€€"
}: LocalBusinessSchemaProps) {
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "TechnologyCompany"],
    "@id": "https://verait.de/#localbusiness",
    "name": businessName,
    "alternateName": "Vera IT",
    "description": description,
    "url": "https://verait.de",
    "logo": "https://verait.de/vera-it-logo.png",
    "image": [
      "https://verait.de/vera-it-logo.png",
      "https://verait.de/vera-it-office-hamburg.jpg",
      "https://verait.de/vera-it-team-hamburg.jpg"
    ],
    "telephone": contactInfo.telephone,
    "email": contactInfo.email,
    "faxNumber": "+49-40-12345679",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": priceRange,
    "currenciesAccepted": "EUR",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "PayPal"],
    "foundingDate": "2020",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50
    },
    "slogan": "Ihre digitale Zukunft beginnt hier",
    "knowsAbout": [
      "Künstliche Intelligenz",
      "Machine Learning",
      "Web Development",
      "Mobile App Development",
      "Digital Marketing",
      "SEO",
      "UI/UX Design",
      "E-Commerce",
      "Cloud Computing",
      "Beratung & Strategie",
      "Data Analytics",
      "Software Development",
      "Brand Design",
      "Video Production"
    ],
    "serviceArea": [
      {
        "@type": "City",
        "name": "Hamburg",
        "containedInPlace": {
          "@type": "State",
          "name": "Hamburg",
          "containedInPlace": {
            "@type": "Country",
            "name": "Deutschland"
          }
        }
      },
      {
        "@type": "State",
        "name": "Schleswig-Holstein"
      },
      {
        "@type": "State",
        "name": "Niedersachsen"
      },
      {
        "@type": "Country",
        "name": "Deutschland"
      },
      {
        "@type": "Place",
        "name": "Europäische Union"
      }
    ],
    "areaServed": [
      "Hamburg",
      "Deutschland",
      "Europäische Union"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digitale Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "category": "Digital Services"
        }
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Max Mustermann"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Ausgezeichnete Arbeit bei der Entwicklung unserer Web-Anwendung. Das Team von Vera IT in Hamburg ist sehr professionell und hat unser Projekt termingerecht und im Budget abgeschlossen.",
        "datePublished": "2024-01-10"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Anna Schmidt"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Vera IT hat unsere Mobile App entwickelt und das Ergebnis übertrifft unsere Erwartungen. Sehr empfehlenswert für digitale Projekte in Hamburg!",
        "datePublished": "2024-01-05"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/vera-it",
      "https://www.xing.com/companies/verait",
      "https://github.com/vera-it",
      "https://www.facebook.com/veraithh",
      "https://twitter.com/veraithh",
      "https://www.instagram.com/veraithh"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": contactInfo.telephone,
        "contactType": "customer service",
        "availableLanguage": ["German", "English"],
        "areaServed": ["DE", "EU"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      },
      {
        "@type": "ContactPoint",
        "email": contactInfo.email,
        "contactType": "sales",
        "availableLanguage": ["German", "English"]
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "Kostenlose Erstberatung",
        "description": "Kostenlose 30-minütige Beratung für Ihr digitales Projekt",
        "price": "0",
        "priceCurrency": "EUR"
      }
    ],
    "member": {
      "@type": "Organization",
      "name": "Handelskammer Hamburg"
    },
    "award": [
      "Top Digitale Agentur Hamburg 2024",
      "Beste KI-Entwicklung Hamburg 2023"
    ]
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  )
}

export { LocalBusinessSchema }