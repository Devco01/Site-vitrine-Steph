"use client";

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Schema.org LocalBusiness markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Stéphane Bernard - Portails Aluminium sur mesure",
              "image": "https://stephane-bernard.com/Logo.png",
              "url": "https://stephane-bernard.com",
              "telephone": "06.64.95.30.92",
              "email": "bernard.s.portails@gmail.com",
              "currenciesAccepted": "EUR",
              "paymentAccepted": "Carte bancaire, Espèces, Chèque, Virement",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "58 rue des sauniers",
                "addressLocality": "Arvert",
                "postalCode": "17530",
                "addressRegion": "Nouvelle-Aquitaine",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "45.7348",
                "longitude": "-1.1688"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "12:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "14:00",
                  "closes": "18:00"
                }
              ],
              "priceRange": "€€",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "45.7348",
                  "longitude": "-1.1688"
                },
                "geoRadius": "50000"
              },
              "knowsAbout": ["Portails aluminium", "Automatisation de portail", "Motorisation de portail", "Réparation de portail", "Installation de portail"],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "45.7348",
                  "longitude": "-1.1688"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services de portails aluminium",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Installation de portails sur mesure"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Réparation de portails"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Motorisation de portails"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.facebook.com/p/Entreprise-Bernard-St%C3%A9phane-100062329458219/"
              ],
              "description": "Artisan spécialisé dans la fabrication, l'installation et la réparation de portails aluminium sur mesure à Arvert et dans toute la Charente-Maritime (17). Devis gratuit et intervention rapide."
            })
          }}
        />
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          <div className="text-center max-w-sm">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">Stéphane Bernard</h3>
            <p className="mb-2">Spécialiste en portails sur mesure</p>
            <p className="mb-2">Installation et réparation de portails</p>
            <p className="mb-2">Région Charente-Maritime</p>
            <p>Entreprise Individuelle - SIRET : 49982603000037</p>
          </div>

          <div className="text-center max-w-sm">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">Contact</h3>
            <p className="mb-2">
              <span className="font-semibold">Téléphone :</span> 06.64.95.30.92
            </p>
            <p className="mb-2">
              <span className="font-semibold">Adresse :</span> 58 rue des sauniers, 17530 Arvert
            </p>
            <p className="mb-4">
              <span className="font-semibold">Email :</span> bernard.s.portails@gmail.com
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.facebook.com/p/Entreprise-Bernard-St%C3%A9phane-100062329458219/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Page Facebook de Stéphane Bernard Portails"
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col items-center gap-4">
            <p className="text-center">
              © {currentYear} Stéphane Bernard Portails. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/mentions-legales" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Mentions légales
              </Link>
              <Link 
                href="/politique-de-confidentialite" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Politique de confidentialité
              </Link>
              <Link 
                href="/cgv" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 