import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import PageWrapper from './components/layout/PageWrapper';
import Products from './components/home/Products';
import ContactCTA from './components/home/ContactCTA';

export const metadata: Metadata = {
  title: 'Portails Aluminium sur mesure à Arvert (17530) | Stéphane Bernard Portails',
  description: 'Fabrication, installation et réparation de portails aluminium sur mesure par Stéphane Bernard à Arvert. Service de qualité en Charente-Maritime : Royan, La Tremblade, Marennes et alentours.'
};

export default function Home() {
  return (
    <PageWrapper>
      {/* Section Hero */}
      <div className="relative h-[650px] sm:h-[700px] md:h-[750px] flex justify-center items-center overflow-hidden bg-gray-50">
        {/* Image héro en arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Hero.jpg" 
            alt="Portail aluminium sur mesure à Arvert en Charente-Maritime" 
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
        </div>
        
        {/* Contenu superposé */}
        <div className="relative z-10 text-center px-4">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] mx-auto mb-6">
            <Image 
              src="/Logo.png" 
              alt="Stéphane Bernard - Artisan en portails aluminium à Arvert (17530)" 
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-shadow">
            Expert en Portails Aluminium sur mesure à Arvert
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto text-shadow mb-8">
            Fabrication, installation et réparation de portails aluminium de qualité en Charente-Maritime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg"
            >
              Demander un devis gratuit
            </Link>
            <Link 
              href="/realisations" 
              className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </div>

      {/* Section À propos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Portails aluminium <span className="text-blue-600">sur mesure</span> à Arvert et alentours
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 text-gray-700">
                <strong>Stéphane Bernard</strong>, artisan spécialisé dans les <strong>portails aluminium sur mesure</strong> à Arvert (17530), vous propose des solutions adaptées à vos besoins et à votre budget.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Installé en <strong>Charente-Maritime</strong>, nous intervenons dans tout le département : <strong>Royan, La Tremblade, Marennes, Saint-Pierre d&apos;Oléron, Rochefort</strong> et les communes environnantes.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Notre expertise nous permet de vous garantir un <strong>portail de qualité</strong>, alliant esthétisme, robustesse et fonctionnalité, parfaitement adapté à votre habitation.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Portails sur mesure</span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Aluminium</span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Arvert 17530</span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Fabrication locale</span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Charente-Maritime</span>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/Hero.jpg" 
                alt="Fabrication de portails sur mesure en Charente-Maritime" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Products />
      
      {/* Section Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nos services de <span className="text-blue-600">portails</span> en Charente-Maritime
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Fabrication sur mesure</h3>
              <p className="text-gray-700">
                Conception et fabrication de portails aluminium sur mesure adaptés à vos besoins spécifiques et aux dimensions de votre entrée.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Installation professionnelle</h3>
              <p className="text-gray-700">
                Installation soignée par nos équipes expérimentées dans toute la Charente-Maritime : Arvert, Royan, La Tremblade, Marennes et environs.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Motorisation & Réparation</h3>
              <p className="text-gray-700">
                Service de motorisation de portails existants et réparation rapide en cas de panne ou de dysfonctionnement.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactCTA />
      
      {/* Section Avantages */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Pourquoi choisir <span className="text-blue-600">Stéphane Bernard</span> pour votre portail ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Artisan local</h3>
              <p className="text-gray-700">
                Entreprise locale basée à Arvert, connaissant parfaitement les spécificités de la région.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Qualité garantie</h3>
              <p className="text-gray-700">
                Matériaux de haute qualité et finitions soignées pour une durabilité exceptionnelle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Intervention rapide</h3>
              <p className="text-gray-700">
                Service réactif pour l&apos;installation et le dépannage dans toute la Charente-Maritime.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Devis gratuit</h3>
              <p className="text-gray-700">
                Étude personnalisée et devis détaillé sans engagement pour votre projet de portail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
