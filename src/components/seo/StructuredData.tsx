import Script from 'next/script'

interface StructuredDataProps {
  type?: 'organization' | 'localBusiness' | 'service' | 'article'
  data?: any
}

export default function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vera IT - Digitale Agentur Hamburg",
    "alternateName": "Vera IT",
    "url": "https://verait.de",
    "logo": "https://verait.de/vera-it-logo.png",
    "description": "Führende digitale Agentur in Hamburg spezialisiert auf KI-Entwicklung, Web-Entwicklung, Mobile Apps und Digitales Marketing.",
    "foundingDate": "2020",
    "founders": [
      {
        "@type": "Person",
        "name": "Vera IT Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hamburger Straße 123",
      "addressLocality": "Hamburg",
      "addressRegion": "Hamburg",
      "postalCode": "20095",
      "addressCountry": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-40-12345678",
      "contactType": "customer service",
      "availableLanguage": ["German", "English"],
      "areaServed": ["DE", "EU"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/vera-it",
      "https://www.xing.com/companies/verait",
      "https://github.com/vera-it"
    ],
    "knowsAbout": [
      "Web Development",
      "Mobile App Development",
      "AI Development",
      "Digital Marketing",
      "SEO",
      "UI/UX Design",
      "Brand Design",
      "E-Commerce",
      "Cloud Solutions",
      "Cybersecurity"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 53.5511,
        "longitude": 9.9937
      },
      "geoRadius": "100000"
    }
  })

  const getLocalBusinessSchema = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://verait.de/#organization",
    "name": "Vera IT - Digitale Agentur Hamburg",
    "image": "https://verait.de/vera-it-logo.png",
    "telephone": "+49-40-12345678",
    "email": "info@verait.de",
    "url": "https://verait.de",
    "description": "Professionelle digitale Agentur in Hamburg für KI-Entwicklung, Web-Entwicklung, Mobile Apps, Digitales Marketing und Interface Design.",
    "priceRange": "€€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hamburger Straße 123",
      "addressLocality": "Hamburg",
      "addressRegion": "Hamburg",
      "postalCode": "20095",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.5511,
      "longitude": 9.9937
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
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
        "reviewBody": "Ausgezeichnete Arbeit bei der Entwicklung unserer Web-Anwendung. Sehr professionell und termingerecht."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digitale Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web-Entwicklung",
            "description": "Professionelle Website- und Web-App-Entwicklung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Entwicklung",
            "description": "Native und Cross-Platform Mobile Apps"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "KI-Entwicklung",
            "description": "Künstliche Intelligenz und Machine Learning Lösungen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digitales Marketing",
            "description": "SEO, SEM, Social Media Marketing und Content Marketing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interface Design",
            "description": "UI/UX Design für Web und Mobile Anwendungen"
          }
        }
      ]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Hamburg",
        "containedInPlace": {
          "@type": "Country",
          "name": "Deutschland"
        }
      },
      {
        "@type": "Country",
        "name": "Deutschland"
      },
      {
        "@type": "Place",
        "name": "Europäische Union"
      }
    ]
  })

  const getServiceSchema = (serviceData: any) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceData?.name || "Digitale Services",
    "description": serviceData?.description || "Professionelle digitale Dienstleistungen",
    "provider": {
      "@type": "Organization",
      "name": "Vera IT - Digitale Agentur Hamburg",
      "url": "https://verait.de"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Deutschland"
      },
      {
        "@type": "Place",
        "name": "Europäische Union"
      }
    ],
    "serviceType": serviceData?.serviceType || "Digital Services",
    "category": "Technology"
  })

  const getSchema = () => {
    switch (type) {
      case 'localBusiness':
        return getLocalBusinessSchema()
      case 'service':
        return getServiceSchema(data)
      case 'organization':
      default:
        return getOrganizationSchema()
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema()),
      }}
    />
  )
}

export { StructuredData }