import { Metadata } from 'next';
import Image from 'next/image';

import PageWrapper from './components/layout/PageWrapper';
import Products from './components/home/Products';
import ContactCTA from './components/home/ContactCTA';

export const metadata: Metadata = {
  title: 'Entreprise de Portails sur mesure à Arvert (17530) - Stéphane Bernard',
  description: 'Stéphane Bernard, entreprise de fabrication et installation de portails sur mesure en aluminium à Arvert. Installation et dépannage de portails dans toute la Charente-Maritime.'
};

export default function Home() {
  return (
    <PageWrapper>
      <div className="relative h-[650px] sm:h-[700px] md:h-[750px] flex justify-center items-center overflow-hidden bg-gray-50">
        {/* Image héro en arrière-plan */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Hero.jpg" 
            alt="Portail aluminium sur mesure" 
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
              alt="Stéphane Bernard Portails - Entreprise de portails à Arvert" 
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-shadow">
            Stéphane Bernard - Portails sur mesure à Arvert
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto text-shadow">
            Fabrication et installation de portails aluminium de qualité dans toute la Charente-Maritime depuis Arvert (17530)
          </p>
        </div>
      </div>
      <Products />
      <ContactCTA />
    </PageWrapper>
  );
}
