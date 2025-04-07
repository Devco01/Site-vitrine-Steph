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
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Demander un devis gratuit
            </Link>
            <Link 
              href="/realisations" 
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
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
      
      <ContactCTA />
    </PageWrapper>
  );
}
