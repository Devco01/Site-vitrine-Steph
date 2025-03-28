"use client";

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Stéphane Bernard</h3>
            <p className="mb-2">Spécialiste en portails sur mesure</p>
            <p className="mb-2">123 rue des Artisans</p>
            <p className="mb-2">75000 Paris</p>
            <p>SIRET : 123 456 789 00012</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="mb-2">
              <span className="font-semibold">Téléphone :</span> 01 23 45 67 89
            </p>
            <p className="mb-4">
              <span className="font-semibold">Email :</span> contact@stephane-bernard-portails.fr
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
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
          <p className="mt-4 text-sm text-gray-400">
            Conformément au Règlement Général sur la Protection des Données (RGPD), 
            vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles. 
            Pour exercer ces droits, veuillez nous contacter par email.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 