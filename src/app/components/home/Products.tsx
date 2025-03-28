"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import StaggerContainer from '../animations/StaggerContainer';
import StaggerItem from '../animations/StaggerItem';
import FadeIn from '../animations/FadeIn';

const productsData = [
  {
    id: 1,
    name: 'Portails Battants',
    description: 'Élégants et traditionnels, nos portails battants s\'adaptent à tous les styles d\'entrée.',
    imageSrc: 'https://images.unsplash.com/photo-1573082011553-98b8235576d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '/nos-produits/portails-battants'
  },
  {
    id: 2,
    name: 'Portails Coulissants',
    description: 'Pratiques et modernes, parfaits pour les espaces limités ou les terrains en pente.',
    imageSrc: 'https://images.unsplash.com/photo-1593171840744-585f38c973a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '/nos-produits/portails-coulissants'
  },
  {
    id: 3,
    name: 'Motorisations',
    description: 'Sécurité et confort avec nos solutions de motorisation adaptées à tous types de portails.',
    imageSrc: 'https://images.unsplash.com/photo-1573489998265-b4535f551801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    link: '/nos-produits/motorisations'
  }
];

const Products = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nos Solutions de Portails
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Des portails sur mesure fabriqués avec les meilleurs matériaux pour s&apos;adapter parfaitement à votre propriété.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <StaggerItem 
                key={product.id} 
                direction="up"
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative h-64">
                  <div className="absolute inset-0">
                    <img
                      src={product.imageSrc}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href={product.link}
                      className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
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
          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/nos-produits" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
              >
                Voir tous nos produits
                <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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