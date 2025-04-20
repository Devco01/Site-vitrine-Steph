"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import StaggerContainer from '../animations/StaggerContainer';
import StaggerItem from '../animations/StaggerItem';
import FadeIn from '../animations/FadeIn';

const productsData = [
  {
    id: 1,
    name: 'Portails',
    description: 'Nos portails en aluminium sur mesure : pleins, barreaudés ou avec découpes laser, adaptés à tous les styles.',
    imageSrc: '/Slide5.jpg',
    link: '/realisations#portails-pleins'
  },
  {
    id: 2,
    name: 'Autres Produits',
    description: 'Notre savoir-faire s\'étend à une gamme variée : balcons, garde-corps, clôtures, défenses de fenêtres et jardinières.',
    imageSrc: '/Slide21.jpg',
    link: '/realisations#balcons-garde-corps'
  },
  {
    id: 3,
    name: 'Motifs et Couleurs',
    description: 'Personnalisez vos installations avec notre large choix de motifs laser et notre palette de couleurs variée.',
    imageSrc: '/Slide30.jpg',
    link: '/realisations#motifs-laser'
  }
];

const Products = () => {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container mx-auto px-2 xs:px-4">
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Nos Solutions de Portails
            </h2>
            <p className="mt-2 md:mt-4 text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Des portails sur mesure fabriqués avec les meilleurs matériaux pour s&apos;adapter parfaitement à votre propriété.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {productsData.map((product) => (
              <StaggerItem 
                key={product.id} 
                direction="up"
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative h-40 xs:h-48 sm:h-56 md:h-64">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-3 xs:p-4 sm:p-6">
                  <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900 mb-1 xs:mb-2">{product.name}</h3>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-600 mb-3 xs:mb-4">{product.description}</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href={product.link}
                      className="inline-block bg-gray-600 text-white py-1 xs:py-2 px-3 xs:px-4 rounded-md hover:bg-gray-700 transition-colors duration-200 text-xs xs:text-sm sm:text-base"
                    >
                      Découvrir
                    </Link>
                  </motion.div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <FadeIn direction="up" delay={0.6}>
          <div className="text-center mt-6 md:mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link 
                href="/realisations" 
                className="flex items-center justify-center px-3 xs:px-5 sm:px-6 py-2 sm:py-3 border border-transparent text-xs xs:text-sm sm:text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 md:text-lg max-w-[200px] xs:max-w-xs mx-auto"
              >
                <span>Voir toutes nos réalisations</span>
                <svg className="ml-1 xs:ml-2 h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Products; 