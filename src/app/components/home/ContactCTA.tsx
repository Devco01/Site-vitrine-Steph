"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import StaggerContainer from '../animations/StaggerContainer';
import StaggerItem from '../animations/StaggerItem';

const ContactCTA = () => {
  return (
    <section className="bg-blue-700 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <FadeIn 
            direction="left" 
            delay={0.2} 
            duration={0.6}
            className="max-w-2xl mb-8 md:mb-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à Transformer Votre Entrée ?
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Contactez-nous dès aujourd&apos;hui pour obtenir un devis gratuit et personnalisé pour votre projet de portail sur mesure.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:text-lg"
                >
                  Demander un devis
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="tel:0123456789"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800 md:text-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  01 23 45 67 89
                </Link>
              </motion.div>
            </div>
          </FadeIn>
          
          <FadeIn 
            direction="right" 
            delay={0.4} 
            duration={0.6}
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Nos Horaires d&apos;Ouverture
            </h3>
            <StaggerContainer staggerDelay={0.1}>
              <ul className="space-y-2 text-gray-600">
                <StaggerItem className="flex justify-between">
                  <span>Lundi - Vendredi:</span>
                  <span className="font-semibold">8h30 - 18h00</span>
                </StaggerItem>
                <StaggerItem className="flex justify-between">
                  <span>Samedi:</span>
                  <span className="font-semibold">9h00 - 16h00</span>
                </StaggerItem>
                <StaggerItem className="flex justify-between">
                  <span>Dimanche:</span>
                  <span className="font-semibold">Fermé</span>
                </StaggerItem>
              </ul>
            </StaggerContainer>
            <FadeIn delay={0.7} duration={0.5} className="mt-6">
              <p className="text-gray-700">
                <span className="font-semibold">Adresse:</span> 123 rue des Artisans, 75000 Paris
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Email:</span> contact@stephane-bernard-portails.fr
              </p>
            </FadeIn>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA; 