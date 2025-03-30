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
              "name": "Stéphane Bernard - Portails sur mesure",
              "image": "https://stephane-bernard-portails.fr/Logo.png",
              "url": "https://stephane-bernard-portails.fr",
              "telephone": "06.64.95.30.92",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "58 rue des sauniers",
                "addressLocality": "Arvert",
                "postalCode": "17530",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "45.7348",
                "longitude": "-1.1688"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "priceRange": "€€",
              "servesCuisine": "Portails sur mesure, Portails aluminium",
              "description": "Entreprise spécialisée dans les portails sur mesure à Arvert (17530). Installation, réparation et dépannage de portails aluminium en Charente-Maritime."
            })
          }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Stéphane Bernard</h3>
            <p className="mb-2">Spécialiste en portails sur mesure</p>
            <p className="mb-2">Installation et réparation de portails</p>
            <p className="mb-2">Région Charente-Maritime</p>
            <p>Entreprise Individuelle - SIRET : 49982603000037</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="mb-2">
              <span className="font-semibold">Téléphone :</span> 06.64.95.30.92
            </p>
            <p className="mb-2">
              <span className="font-semibold">Adresse :</span> 58 rue des sauniers, 17530 Arvert
            </p>
            <p className="mb-4">
              <span className="font-semibold">Email :</span> bernard.s.portails@gmail.com
            </p>
            <div className="flex space-x-4">
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
          <div className="flex flex-col md:flex-row md:justify-between">
            <p className="mb-4 md:mb-0">
              © {currentYear} Stéphane Bernard Portails. Tous droits réservés.
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
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