'use client';

import PageWrapper from '../components/layout/PageWrapper';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Données des catégories
const categories = [
  { 
    id: 'portails', 
    name: 'Portails', 
    color: 'bg-gray-600',
    textColor: 'text-gray-600',
    hoverColor: 'hover:bg-gray-50',
    subcategories: [
      { id: 'portails-pleins', name: 'Portails Pleins', slides: [3, 4, 5, 7, 8, 9, 10] },
      { id: 'portails-barreaudes', name: 'Portails Barreaudés', slides: [12, 13, 14, 15] },
      { id: 'decoupes-laser', name: 'Découpes Laser', slides: [17, 18, 'Hero', 34, 35] }
    ]
  },
  { 
    id: 'autres', 
    name: 'Autres Produits',
    color: 'bg-gray-500',
    textColor: 'text-gray-500',
    hoverColor: 'hover:bg-gray-50',
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
    color: 'bg-gray-400',
    textColor: 'text-gray-400',
    hoverColor: 'hover:bg-gray-50',
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
        backgroundImage: 'linear-gradient(to right, rgba(75, 85, 99, 1), rgba(107, 114, 128, 1))',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div 
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Nos Réalisations</h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          Découvrez l&apos;excellence et le savoir-faire artisanal de Stéphane Bernard 
          à travers nos projets de portails sur mesure réalisés pour nos clients.
        </p>
      </div>
    </div>
  );
};

// Composant pour l'image d'une réalisation
const RealisationImage = ({ slide, category }: { slide: number | string, category: string }) => {
  const [modalOpen, setModalOpen] = useState(false);
  
  // Pour gérer le cas spécial de l'image Hero
  const imageSrc = typeof slide === 'string' ? `/${slide}.jpg` : `/Slide${slide}.jpg`;
  const imageAlt = typeof slide === 'string' 
    ? `${category} - Portail avec découpe laser` 
    : `${category} - Réalisation ${slide}`;
  
  return (
    <>
      <div 
        className="relative rounded-lg overflow-hidden shadow-lg group h-64 md:h-72 lg:h-80 border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 p-5">
            <h3 className="text-white font-semibold text-base sm:text-lg">{category}</h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-1 flex items-center">
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
        src={imageSrc} 
        alt={imageAlt} 
      />
    </>
  );
};

// Composant barre de navigation améliorée
const SideNav = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);
  const [expanded, setExpanded] = useState<boolean>(true);
  
  // Observer pour le scroll et activation automatique des sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Extraction de l'ID de la section actuellement visible
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: "-10% 0px -80% 0px" }
    );

    // Observer toutes les sections de catégories
    categories.forEach((category) => {
      const element = document.getElementById(category.id);
      if (element) observer.observe(element);
    });

    return () => {
      categories.forEach((category) => {
        const element = document.getElementById(category.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="hidden lg:block fixed left-6 top-1/3 transform -translate-y-1/2 z-30">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 border-2 border-gray-400 ${expanded ? 'w-64' : 'w-16'}`}
      >
        <div className="flex items-center justify-between bg-gray-600 text-white p-3">
          <h4 className={`font-medium ${expanded ? 'block' : 'hidden'}`}>Navigation</h4>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="p-1 rounded-full hover:bg-gray-500 transition-colors duration-200"
          >
            {expanded ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>
        </div>
        
        <ul className={`${expanded ? 'p-3' : 'p-1'} max-h-[calc(100vh-300px)] overflow-y-auto`}>
          {categories.map((category, index) => (
            <motion.li 
              key={category.id} 
              className="mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: 0.1 + index * 0.05,
                ease: "easeOut"
              }}
            >
              <a 
                href={`#${category.id}`}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${activeCategory === category.id ? 'bg-gradient-to-r from-gray-50 to-gray-100 ' + category.textColor : 'text-gray-700'}
                  ${category.hoverColor} hover:${category.textColor}`}
              >
                <span className={`w-3 h-3 rounded-full ${category.color} mr-2 flex-shrink-0`}></span>
                {expanded && <span>{category.name}</span>}
              </a>
              
              {expanded && activeCategory === category.id && (
                <motion.ul 
                  className="pl-5 mt-1 space-y-1 border-l-2 border-gray-100 ml-1.5"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {category.subcategories.map((sub, subIndex) => (
                    <motion.li 
                      key={sub.id}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.2, 
                        delay: 0.1 + subIndex * 0.05,
                        ease: "easeOut"
                      }}
                    >
                      <a 
                        href={`#${sub.id}`}
                        className={`text-xs block py-1.5 px-2 rounded transition-colors duration-200 ${category.hoverColor} hover:${category.textColor}`}
                      >
                        {sub.name}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default function Realisations() {
  return (
    <PageWrapper>
      <RealisationsBanner />
      
      <section className="pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Nos créations par catégorie</h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
                Découvrez un aperçu de nos plus belles réalisations en aluminium. Notre savoir-faire 
                s&apos;étend à une large gamme de produits pour embellir et sécuriser votre propriété.
              </p>
            </div>
            
            {/* Navigation des catégories principales - version mobile et tablette */}
            <div className="lg:hidden sticky top-[72px] z-20 py-2 sm:py-3 bg-white shadow-md mb-4 sm:mb-6">
              <div className="flex justify-between items-center">
                <div className="overflow-x-auto pb-2 scrollbar-hide">
                  <div className="flex space-x-2 sm:space-x-3">
                    {categories.map((category) => (
                      <a 
                        key={category.id}
                        href={`#${category.id}`}
                        className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm md:text-base text-white ${category.color} hover:bg-opacity-90 transition-colors duration-300 shadow-sm whitespace-nowrap`}
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
      
      {/* Navigation latérale améliorée */}
      <SideNav />
      
      {/* Sections par catégorie */}
      {categories.map((category) => (
        <section 
          key={category.id} 
          id={category.id}
          className="py-8 sm:py-10 md:py-12 bg-gray-50 border-t border-gray-200"
        >
          <div className="container mx-auto px-4 lg:pl-20">
            <div className="max-w-7xl mx-auto">
              <div className={`${category.color} text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg shadow-md mb-6 sm:mb-8 md:mb-10`}>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                  {category.name}
                </h2>
              </div>
              
              {/* Sous-catégories */}
              {category.subcategories.map((subcategory) => (
                <div key={subcategory.id} id={subcategory.id} className="mb-10 md:mb-16 scroll-mt-24">
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-8 ${category.color} text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg shadow-md`}>
                    <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full mr-2"></span>
                    {subcategory.name}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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