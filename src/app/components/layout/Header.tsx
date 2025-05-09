"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Réalisations', path: '/realisations' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-gray-700 to-gray-600 shadow-md py-2' : 'bg-gradient-to-r from-gray-800 to-gray-600 py-3'}`}>
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center group">
              <div className="relative w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mr-1 xs:mr-2 sm:mr-3 transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                <Image 
                  src="/Logo.png" 
                  alt="Logo Bernard Stéphane Portails" 
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-opacity duration-300"
                  sizes="(max-width: 400px) 32px, (max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
                  priority
                />
              </div>
              <div className="leading-tight">
                <span className="text-xs xs:text-sm sm:text-base md:text-xl font-bold text-white truncate max-w-[140px] xs:max-w-[180px] sm:max-w-none">Stéphane Bernard</span>
                <span className="block text-xxs xs:text-xs sm:text-sm text-gray-100 truncate max-w-[140px] xs:max-w-[180px] sm:max-w-none">Portails sur mesure</span>
              </div>
            </Link>
          </motion.div>

          {/* Navigation pour PC */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative"
              >
                <Link 
                  href={item.path} 
                  className={`relative px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    pathname === item.path 
                      ? 'text-white' 
                      : 'text-gray-100 hover:text-white'
                  }`}
                >
                  {item.name}
                  {pathname === item.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Bouton de menu mobile */}
          <motion.button
            className="md:hidden text-white focus:outline-none p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
            onClick={toggleMobileMenu}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link 
                    href={item.path} 
                    className={`block px-4 py-2 rounded-md transition-colors duration-200 ${
                      pathname === item.path
                        ? 'bg-gray-700 text-white font-medium'
                        : 'text-gray-100 hover:bg-gray-700 hover:text-white'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header; 