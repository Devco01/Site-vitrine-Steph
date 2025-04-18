"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../animations/FadeIn';

// Les données des réalisations avec les slides fournis et les nouvelles catégories
const realisationsData = [
  {
    id: 1,
    title: 'Portail Plein Moderne',
    description: 'Portail plein en aluminium avec design épuré et moderne.',
    imageSrc: '/Slide3.jpg',
    category: 'Portails Pleins'
  },
  {
    id: 2,
    title: 'Portail Coulissant Plein',
    description: 'Portail coulissant plein en aluminium gris anthracite.',
    imageSrc: '/Slide4.jpg',
    category: 'Portails Pleins'
  },
  {
    id: 3,
    title: 'Portail Plein Contemporain',
    description: 'Portail plein avec finition noire élégante.',
    imageSrc: '/Slide5.jpg',
    category: 'Portails Pleins'
  },
  {
    id: 4,
    title: 'Portail Battant Aluminium',
    description: 'Création sur mesure avec un style épuré et moderne.',
    imageSrc: '/Slide7.jpg',
    category: 'Portails Pleins'
  },
  {
    id: 5,
    title: 'Portail Gris Anthracite',
    description: 'Solution élégante pour maison individuelle avec finition gris anthracite.',
    imageSrc: '/Slide8.jpg',
    category: 'Portails Pleins'
  },
  {
    id: 6,
    title: 'Portail Blanc Premium',
    description: 'Portail blanc élégant avec design classique et finition premium.',
    imageSrc: '/Slide9.jpg',
    category: 'Portails Pleins'
  },
  {
    id: 7,
    title: 'Portail Moderne Plein',
    description: 'Design contemporain avec finition élégante.',
    imageSrc: '/Slide10.jpg',
    category: 'Portails Pleins'
  },
  {
    id: 8,
    title: 'Portail Barreaudé Ajouré',
    description: 'Portail battant en aluminium avec barreaudage vertical pour un style contemporain.',
    imageSrc: '/Slide12.jpg',
    category: 'Portails Barreaudés'
  },
  {
    id: 9,
    title: 'Portail Barreaudé Classique',
    description: 'Solution barreaudée élégante avec lignes épurées.',
    imageSrc: '/Slide13.jpg',
    category: 'Portails Barreaudés'
  },
  {
    id: 10,
    title: 'Portail Barreaudé Motorisé',
    description: 'Installation complète avec motorisation et design contemporain.',
    imageSrc: '/Slide14.jpg',
    category: 'Portails Barreaudés'
  },
  {
    id: 11,
    title: 'Portail Barreaudé Noir',
    description: 'Design épuré avec finition noire mate pour un style moderne.',
    imageSrc: '/Slide15.jpg',
    category: 'Portails Barreaudés'
  },
  {
    id: 12,
    title: 'Portail avec Motifs Laser',
    description: 'Création sur mesure avec découpes laser pour un design unique.',
    imageSrc: '/Slide17.jpg',
    category: 'Découpes Laser'
  },
  {
    id: 13,
    title: 'Portail Personnalisé Laser',
    description: 'Découpes laser personnalisées sur portail aluminium.',
    imageSrc: '/Slide18.jpg',
    category: 'Découpes Laser'
  },
  {
    id: 24,
    title: 'Rambarde Moderne avec Motif',
    description: 'Rambarde de balcon avec motif nature découpé au laser.',
    imageSrc: '/Slide34.jpg',
    category: 'Découpes Laser'
  },
  {
    id: 25,
    title: 'Portail Design Contemporain',
    description: 'Portail coulissant avec motifs géométriques découpés au laser.',
    imageSrc: '/Slide35.jpg',
    category: 'Découpes Laser'
  },
  {
    id: 14,
    title: 'Garde-corps Contemporain',
    description: 'Garde-corps aluminium avec design moderne pour balcon.',
    imageSrc: '/Slide20.jpg',
    category: 'Balcons & Garde-corps'
  },
  {
    id: 15,
    title: 'Balcon Aluminium Noir',
    description: 'Finition noire mate élégante pour garde-corps de balcon.',
    imageSrc: '/Slide21.jpg',
    category: 'Balcons & Garde-corps'
  },
  {
    id: 16,
    title: 'Clôture Aluminium sur Mesure',
    description: 'Clôture aluminium assortie au portail pour une harmonie parfaite.',
    imageSrc: '/Slide23.jpg',
    category: 'Clôtures'
  },
  {
    id: 17,
    title: 'Défense de Fenêtre Design',
    description: 'Protection élégante pour fenêtre avec design contemporain.',
    imageSrc: '/Slide25.jpg',
    category: 'Défenses & Appuis'
  },
  {
    id: 18,
    title: 'Jardinière Aluminium',
    description: 'Jardinière en aluminium sur mesure avec finition élégante.',
    imageSrc: '/Slide27.jpg',
    category: 'Jardinières'
  },
  {
    id: 19,
    title: 'Motif Laser Géométrique',
    description: 'Motif géométrique découpé au laser pour personnalisation.',
    imageSrc: '/Slide29.jpg',
    category: 'Motifs Laser'
  },
  {
    id: 20,
    title: 'Motif Laser Organique',
    description: 'Design organique pour découpe laser décorative.',
    imageSrc: '/Slide30.jpg',
    category: 'Motifs Laser'
  },
  {
    id: 21,
    title: 'Motif Laser Moderne',
    description: 'Motif moderne pour découpe laser sur portail ou garde-corps.',
    imageSrc: '/Slide31.jpg',
    category: 'Motifs Laser'
  },
  {
    id: 22,
    title: 'Motif Laser Artistique',
    description: 'Création artistique pour découpe laser personnalisée.',
    imageSrc: '/Slide32.jpg',
    category: 'Motifs Laser'
  },
  {
    id: 23,
    title: 'Nuancier Aluminium',
    description: 'Exemples de couleurs disponibles pour nos produits en aluminium.',
    imageSrc: '/Slide33.jpg',
    category: 'Nuanciers'
  }
];

// Extraire les catégories uniques
const categories = ['Tous', ...Array.from(new Set(realisationsData.map(item => item.category)))];

const RealisationsGallery = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleCategoryChange = (category: string) => {
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setActiveCategory(category);
      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);
  };

  const filteredRealisations = activeCategory === 'Tous' 
    ? realisationsData 
    : realisationsData.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50" id="gallery">
      <div className="container mx-auto px-4">
        <FadeIn 
          direction="up" 
          delay={0.2} 
          duration={0.8}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Explorez Nos Réalisations Par Catégorie
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
            Parcourez notre galerie par type de produit pour découvrir notre savoir-faire et la diversité de nos créations.
          </p>
        </FadeIn>

        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors duration-300 ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence>
            {filteredRealisations.map(item => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-60 w-full">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  <div className="mt-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default RealisationsGallery; 