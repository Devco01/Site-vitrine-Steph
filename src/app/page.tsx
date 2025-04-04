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
      <div className="flex justify-center items-center py-8 bg-gray-50">
        <div className="text-center">
          <div className="relative w-[500px] h-[500px] mx-auto mb-6">
            <Image 
              src="/Logo.png" 
              alt="Stéphane Bernard Portails - Entreprise de portails à Arvert" 
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Stéphane Bernard - Portails sur mesure à Arvert
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fabrication et installation de portails aluminium de qualité dans toute la Charente-Maritime depuis Arvert (17530)
          </p>
        </div>
      </div>
      <Products />
      <ContactCTA />
    </PageWrapper>
  );
}
