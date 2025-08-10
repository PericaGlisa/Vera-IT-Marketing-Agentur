import Script from 'next/script'

interface GoogleBusinessProfileProps {
  businessName?: string
  category?: string
  address?: string
  phone?: string
  website?: string
  description?: string
}

export default function GoogleBusinessProfile({
  businessName = "Vera IT - Digitale Agentur Hamburg",
  category = "Software-Entwicklungsunternehmen",
  address = "Hamburger Straße 123, 20095 Hamburg, Deutschland",
  phone = "+49-40-12345678",
  website = "https://verait.de",
  description = "Führende digitale Agentur in Hamburg für KI-Entwicklung, Web-Entwicklung, Mobile Apps und Digitales Marketing. Über 25 erfolgreiche Projekte."
}: GoogleBusinessProfileProps) {

  // Google Business Profile structured data
  const googleBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "description": description,
    "url": website,
    "telephone": phone,
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
    "image": [
      "https://verait.de/vera-it-office-hamburg.jpg",
      "https://verait.de/vera-it-team-hamburg.jpg",
      "https://verait.de/vera-it-projects-showcase.jpg"
    ],
    "priceRange": "€€€",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "hasMap": "https://maps.google.com/?q=Vera+IT+Hamburg+Hamburger+Straße+123",
    "isAccessibleForFree": false,
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "EUR",
    "knowsLanguage": ["German", "English"],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 53.5511,
        "longitude": 9.9937
      },
      "geoRadius": "50000"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Hamburg"
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
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digitale Services Hamburg",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "KI-Entwicklung Hamburg",
            "description": "Professionelle KI und Machine Learning Lösungen"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web-Entwicklung Hamburg",
            "description": "Moderne Website und Web-App Entwicklung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Entwicklung Hamburg",
            "description": "Native und Cross-Platform Mobile Apps"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digitales Marketing Hamburg",
            "description": "SEO, Google Ads und Social Media Marketing"
          }
        }
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": phone,
      "contactType": "customer service",
      "availableLanguage": ["German", "English"],
      "areaServed": "DE"
    },
    "sameAs": [
      "https://www.google.com/maps/place/Vera+IT+Hamburg",
      "https://www.linkedin.com/company/vera-it",
      "https://www.xing.com/companies/verait"
    ]
  }

  return (
    <>
      <Script
        id="google-business-profile-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(googleBusinessSchema),
        }}
      />
      
      {/* Google My Business optimization meta tags */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      <meta name="geo.region" content="DE-HH" />
      <meta name="geo.placename" content="Hamburg" />
      <meta name="geo.position" content="53.5511;9.9937" />
      <meta name="ICBM" content="53.5511, 9.9937" />
      <meta name="DC.title" content={businessName} />
      <meta name="DC.subject" content="Digitale Agentur, KI-Entwicklung, Web-Entwicklung, Hamburg" />
      <meta name="DC.description" content={description} />
      <meta name="DC.creator" content="Vera IT Team" />
      <meta name="DC.publisher" content="Vera IT GmbH" />
      <meta name="DC.contributor" content="Vera IT Hamburg" />
      <meta name="DC.date" content="2024-01-15" />
      <meta name="DC.type" content="Service" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.identifier" content={website} />
      <meta name="DC.source" content={website} />
      <meta name="DC.language" content="de-DE" />
      <meta name="DC.coverage" content="Hamburg, Deutschland, EU" />
      <meta name="DC.rights" content="© 2024 Vera IT GmbH" />
    </>
  )
}

export { GoogleBusinessProfile }