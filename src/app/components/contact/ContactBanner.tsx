"use client";

import { motion } from 'framer-motion';

const ContactBanner = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-500 py-16 md:py-24 overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-48 h-48 md:w-96 md:h-96 bg-blue-300 rounded-full opacity-20"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 md:w-96 md:h-96 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-blue-100 rounded-full opacity-15"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contactez-Nous
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-blue-50 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Nous sommes à votre écoute pour répondre à toutes vos questions concernant nos portails sur mesure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#contactForm"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-md shadow-md hover:bg-blue-50 transition-colors duration-300"
            >
              Nous contacter
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactBanner; 