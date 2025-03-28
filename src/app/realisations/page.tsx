'use client';

import PageWrapper from '../components/layout/PageWrapper';
import Image from 'next/image';
import { useState } from 'react';

// Données des catégories
const categories = [
  { 
    id: 'portails', 
    name: 'Portails', 
    color: 'bg-blue-600',
    subcategories: [
      { id: 'portails-pleins', name: 'Portails Pleins', slides: [3, 4, 5, 7, 8, 9, 10] },
      { id: 'portails-barreaudes', name: 'Portails Barreaudés', slides: [12, 13, 14, 15] },
      { id: 'decoupes-laser', name: 'Découpes Laser', slides: [17, 18] }
    ]
  },
  { 
    id: 'autres', 
    name: 'Autres Produits',
    color: 'bg-teal-600',
    subcategories: [
      { id: 'balcons-garde-corps', name: 'Balcons & Garde-corps', slides: [20, 21] },
      { id: 'clotures', name: 'Clôtures', slides: [23] },
      { id: 'defenses-fenetres', name: 'Défenses & Appuis', slides: [25] },
      { id: 'jardinieres', name: 'Jardinières', slides: [27] }
    ]
  },
  { 
    id: 'decoration', 
    name: 'Motifs et Couleurs',
    color: 'bg-purple-600',
    subcategories: [
      { id: 'motifs-laser', name: 'Motifs Laser', slides: [29, 30, 31, 32] },
      { id: 'nuanciers', name: 'Nuanciers', slides: [33] }
    ]
  }
];

// Composant Modale pour afficher l'image en grand
const ImageModal = ({ 
  isOpen, 
  onClose, 
  src, 
  alt 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  src: string; 
  alt: string 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="w-full h-full relative" onClick={(e) => e.stopPropagation()}>
          <div className="relative w-full h-[80vh]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority
            />
          </div>
          <div className="bg-black/60 text-white p-4 absolute bottom-0 w-full">
            <h3 className="text-xl font-semibold">{alt}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant pour la bannière
const RealisationsBanner = () => {
  return (
    <div 
      className="relative h-[30vh] max-h-[300px] w-full flex items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(30, 58, 138, 1), rgba(37, 99, 235, 1))',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div 
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Réalisations</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Découvrez l&apos;excellence et le savoir-faire artisanal de Stéphane Bernard 
          à travers nos projets de portails sur mesure réalisés pour nos clients.
        </p>
      </div>
    </div>
  );
};

// Composant pour l'image d'une réalisation
const RealisationImage = ({ slide, category }: { slide: number, category: string }) => {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <>
      <div 
        className="relative rounded-lg overflow-hidden shadow-lg group h-72 md:h-80 border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        <Image
          src={`/Slide${slide}.jpg`}
          alt={`${category} - Réalisation ${slide}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 p-5">
            <h3 className="text-white font-semibold text-lg">{category}</h3>
            <p className="text-blue-300 text-sm mt-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Voir plus de détails
            </p>
          </div>
        </div>
      </div>
      
      <ImageModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        src={`/Slide${slide}.jpg`} 
        alt={`${category} - Réalisation ${slide}`} 
      />
    </>
  );
};

// Composant barre de navigation fixe
const FixedNav = () => {
  return (
    <div className="hidden lg:block fixed left-6 top-1/2 transform -translate-y-1/2 z-30">
      <div className="bg-white rounded-lg shadow-xl p-4 border-l-4 border-blue-600">
        <h4 className="font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">Catégories</h4>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.id} className="mb-2">
              <a 
                href={`#${category.id}`}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:${category.color.replace('bg-', 'text-')} hover:bg-gray-50 transition-colors duration-200`}
              >
                <span className={`w-3 h-3 rounded-full ${category.color} mr-2`}></span>
                {category.name}
              </a>
              <ul className="pl-5 mt-1 space-y-1">
                {category.subcategories.map((sub) => (
                  <li key={sub.id}>
                    <a 
                      href={`#${sub.id}`}
                      className="text-xs text-gray-600 hover:text-gray-900 block py-1 px-2 rounded hover:bg-gray-50 transition-colors duration-200"
                    >
                      {sub.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Realisations() {
  return (
    <PageWrapper>
      <RealisationsBanner />
      
      <section className="pt-12 pb-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos créations par catégorie</h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Découvrez un aperçu de nos plus belles réalisations en aluminium. Notre savoir-faire 
                s&apos;étend à une large gamme de produits pour embellir et sécuriser votre propriété.
              </p>
            </div>
            
            {/* Navigation des catégories principales - version mobile et tablette */}
            <div className="lg:hidden sticky top-[72px] z-20 py-3 bg-white shadow-md mb-6">
              <div className="flex justify-between items-center">
                <div className="overflow-x-auto pb-2 scrollbar-hide">
                  <div className="flex space-x-3">
                    {categories.map((category) => (
                      <a 
                        key={category.id}
                        href={`#${category.id}`}
                        className={`px-4 py-2 rounded-full text-sm md:text-base text-white ${category.color} hover:bg-opacity-90 transition-colors duration-300 shadow-sm whitespace-nowrap`}
                      >
                        {category.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Navigation fixe pour desktop */}
      <FixedNav />
      
      {/* Sections par catégorie */}
      {categories.map((category) => (
        <section 
          key={category.id} 
          id={category.id}
          className="py-12 bg-gray-50 border-t border-gray-200"
        >
          <div className="container mx-auto px-4 lg:pl-[220px]">
            <div className="max-w-7xl mx-auto">
              <div className={`${category.color} text-white py-4 px-6 rounded-lg shadow-md mb-10`}>
                <h2 className="text-3xl font-bold text-center">
                  {category.name}
                </h2>
              </div>
              
              {/* Sous-catégories */}
              {category.subcategories.map((subcategory) => (
                <div key={subcategory.id} id={subcategory.id} className="mb-16 scroll-mt-24">
                  <h3 className={`text-2xl font-semibold mb-8 ${category.color} text-white py-3 px-4 rounded-lg shadow-md`}>
                    <span className="inline-block w-4 h-4 bg-white rounded-full mr-2"></span>
                    {subcategory.name}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subcategory.slides.map((slide) => (
                      <RealisationImage 
                        key={slide} 
                        slide={slide} 
                        category={subcategory.name}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </PageWrapper>
  );
} 