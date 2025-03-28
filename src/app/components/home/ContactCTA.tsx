"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import StaggerContainer from '../animations/StaggerContainer';
import StaggerItem from '../animations/StaggerItem';

const ContactCTA = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Parlons de votre projet
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Nous sommes à votre écoute pour vous accompagner dans la réalisation 
              de votre portail sur mesure. N&apos;hésitez pas à nous contacter.
            </p>
          </FadeIn>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <FadeIn 
            direction="left" 
            delay={0.2} 
            duration={0.6}
            className="bg-gradient-to-r from-blue-700 to-blue-600 p-6 rounded-lg shadow-lg text-white max-w-md w-full"
          >
            <h3 className="text-xl font-semibold mb-4">
              Contact direct
            </h3>
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center"
              >
                <svg className="w-6 h-6 mr-3 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <Link href="mailto:bernard.s.portails@gmail.com" className="hover:underline">
                  bernard.s.portails@gmail.com
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center"
              >
                <svg className="w-6 h-6 mr-3 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <Link href="tel:0664953092" className="hover:underline">
                  06.64.95.30.92
                </Link>
              </motion.div>
            </div>
          </FadeIn>
          
          <FadeIn 
            direction="right" 
            delay={0.4} 
            duration={0.6}
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full border border-blue-100"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-4 pb-2 border-b border-blue-100">
              Nos Horaires d&apos;Ouverture
            </h3>
            <StaggerContainer staggerDelay={0.1}>
              <ul className="space-y-3 text-gray-700">
                <StaggerItem className="flex justify-between items-center p-2 hover:bg-blue-50 rounded-md transition-colors duration-200">
                  <span className="font-medium">Lundi - Vendredi:</span>
                  <span className="ml-2 pl-2 border-l border-gray-200">8h - 12h / 14h - 18h</span>
                </StaggerItem>
                <StaggerItem className="flex justify-between items-center p-2 hover:bg-blue-50 rounded-md transition-colors duration-200">
                  <span className="font-medium">Samedi:</span>
                  <span className="ml-2 pl-2 border-l border-gray-200">Fermé</span>
                </StaggerItem>
                <StaggerItem className="flex justify-between items-center p-2 hover:bg-blue-50 rounded-md transition-colors duration-200">
                  <span className="font-medium">Dimanche:</span>
                  <span className="ml-2 pl-2 border-l border-gray-200">Fermé</span>
                </StaggerItem>
              </ul>
            </StaggerContainer>
            <FadeIn delay={0.7} duration={0.5} className="mt-6 p-3 bg-blue-50 rounded-md">
              <p className="text-gray-700">
                <span className="font-semibold text-blue-800">Adresse:</span> 58 rue des sauniers, 17530 Arvert
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold text-blue-800">Email:</span> bernard.s.portails@gmail.com
              </p>
            </FadeIn>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA; 