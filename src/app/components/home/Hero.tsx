"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import StaggerContainer from '../animations/StaggerContainer';
import StaggerItem from '../animations/StaggerItem';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="bg-cover bg-center h-full w-full"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
            filter: 'brightness(40%)'
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 py-20 md:py-32 lg:py-40">
        <FadeIn 
          direction="up" 
          delay={0.2} 
          duration={0.8}
          className="text-center sm:text-left max-w-2xl mx-auto sm:mx-0"
        >
          <StaggerContainer staggerDelay={0.2}>
            <StaggerItem className="block text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white">
              <span className="block">Des portails de qualité</span>
            </StaggerItem>
            <StaggerItem className="block text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-blue-400 mt-1 sm:mt-2">
              <span className="block">pour sublimer votre entrée</span>
            </StaggerItem>
            <StaggerItem className="mt-3 sm:mt-4 md:mt-6 text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-lg">
              <p>
                Stéphane Bernard conçoit des portails sur mesure, alliant esthétique et robustesse pour sécuriser et embellir votre propriété.
              </p>
            </StaggerItem>
            <StaggerItem className="mt-4 sm:mt-6 md:mt-10">
              <div className="rounded-md shadow max-w-[200px] xs:max-w-xs mx-auto sm:mx-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm xs:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Nous contacter
                  </Link>
                </motion.div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero; 