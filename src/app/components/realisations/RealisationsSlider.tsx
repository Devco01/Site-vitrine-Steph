"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import FadeIn from '../animations/FadeIn';

// Les données des réalisations avec les slides fournis
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
    title: 'Portail Barreaudé Élégant',
    description: 'Portail barreaudé en aluminium pour une entrée à la fois sécurisée et esthétique.',
    imageSrc: '/Slide12.jpg',
    category: 'Portails Barreaudés'
  },
  {
    id: 3,
    title: 'Découpe Laser Décorative',
    description: 'Motifs découpés au laser pour personnaliser votre portail avec élégance.',
    imageSrc: '/Slide17.jpg',
    category: 'Découpes Laser'
  },
  {
    id: 4,
    title: 'Garde-Corps Contemporain',
    description: 'Solutions d\'aménagement extérieur sur mesure pour balcon et terrasse.',
    imageSrc: '/Slide21.jpg',
    category: 'Balcons & Garde-corps'
  },
  {
    id: 5,
    title: 'Clôture Aluminium Coordonnée',
    description: 'Clôtures assorties à votre portail pour une harmonie parfaite de votre propriété.',
    imageSrc: '/Slide23.jpg',
    category: 'Clôtures'
  },
  {
    id: 6,
    title: 'Protection de Fenêtre Design',
    description: 'Défenses et appuis de fenêtre alliant sécurité et esthétisme.',
    imageSrc: '/Slide25.jpg',
    category: 'Défenses & Appuis'
  },
  {
    id: 7,
    title: 'Jardinière Aluminium',
    description: 'Embellissez votre extérieur avec nos jardinières en aluminium sur mesure.',
    imageSrc: '/Slide27.jpg',
    category: 'Jardinières'
  },
  {
    id: 8,
    title: 'Motifs Laser Exclusifs',
    description: 'Large choix de motifs laser pour personnaliser tous nos produits.',
    imageSrc: '/Slide30.jpg',
    category: 'Motifs Laser'
  },
  {
    id: 9,
    title: 'Palette de Couleurs Variée',
    description: 'Nuancier complet pour personnaliser vos installations selon vos goûts.',
    imageSrc: '/Slide33.jpg',
    category: 'Nuanciers'
  }
];

const RealisationsSlider = () => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const [autoplay, setAutoplay] = useState(true);

  // Fonction pour passer à la slide suivante
  const nextSlide = () => {
    setActiveIndex(prev => {
      const newIndex = (prev[0] + 1) % realisationsData.length;
      return [newIndex, 1];
    });
  };

  // Fonction pour passer à la slide précédente
  const prevSlide = () => {
    setActiveIndex(prev => {
      const newIndex = prev[0] === 0 ? realisationsData.length - 1 : prev[0] - 1;
      return [newIndex, -1];
    });
  };

  // Gestion de l'autoplay
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <FadeIn delay={0.4}>
      <div className="relative w-full overflow-hidden">
        {/* Slider principal */}
        <div 
          className="relative h-[60vh] md:h-[70vh] max-h-[600px]"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0"
            >
              <div className="relative h-full w-full">
                <Image
                  src={realisationsData[activeIndex].imageSrc}
                  alt={realisationsData[activeIndex].title}
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-8 text-white z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{realisationsData[activeIndex].title}</h3>
                  <p className="text-lg md:text-xl max-w-2xl">{realisationsData[activeIndex].description}</p>
                  <span className="inline-block bg-blue-600 px-3 py-1 rounded-full text-sm mt-4">
                    {realisationsData[activeIndex].category}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors duration-200"
            onClick={prevSlide}
            aria-label="Précédent"
          >
            <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors duration-200"
            onClick={nextSlide}
            aria-label="Suivant"
          >
            <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-4">
          {realisationsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex([index, index > activeIndex ? 1 : -1])}
              className={`w-3 h-3 mx-1 rounded-full transition-colors duration-200 ${
                index === activeIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Aller à la slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default RealisationsSlider; 