"use client";

import { motion } from 'framer-motion';

const ContactInfo = () => {
  const contactInfo = [
    {
      id: 1,
      icon: (
        <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Téléphone',
      details: '06.64.95.30.92',
      action: 'tel:0664953092',
      actionLabel: 'Appeler',
    },
    {
      id: 2,
      icon: (
        <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      details: 'bernard.s.portails@gmail.com',
      action: 'mailto:bernard.s.portails@gmail.com',
      actionLabel: 'Envoyer un email',
    },
    {
      id: 3,
      icon: (
        <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Adresse',
      details: '58 rue des sauniers, 17530 Arvert',
      action: 'https://maps.google.com/?q=58+rue+des+sauniers+17530+Arvert',
      actionLabel: 'Voir sur la carte',
    },
    {
      id: 4,
      icon: (
        <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Horaires d\'ouverture',
      details: [
        { day: 'Lundi - Vendredi', hours: '8h - 12h / 14h - 18h' },
        { day: 'Samedi', hours: 'Fermé' },
        { day: 'Dimanche', hours: 'Fermé' }
      ],
    },
    {
      id: 5,
      icon: (
        <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Informations légales',
      details: 'SIRET : 49982603000037',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-semibold text-blue-800 mb-6 pb-2 border-b border-blue-100">Nos Coordonnées</h3>
      
      <motion.div 
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {contactInfo.map((item) => (
          <motion.div 
            key={item.id} 
            className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            variants={itemVariants}
          >
            <div className="flex-shrink-0 p-2 bg-blue-50 rounded-full">{item.icon}</div>
            <div className="ml-4">
              <h4 className="text-base font-medium text-blue-800">{item.title}</h4>
              <div className="mt-2 text-sm text-gray-700">
                {typeof item.details === 'string' ? (
                  <p>{item.details}</p>
                ) : Array.isArray(item.details) ? (
                  <div className="space-y-1">
                    {item.details.map((detail, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{detail.day}:</span>
                        <span className="ml-2 pl-2 border-l border-gray-200">{detail.hours}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  item.details
                )}
              </div>
              {item.action && (
                <a
                  href={item.action}
                  target={item.action.startsWith('http') ? '_blank' : '_self'}
                  rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex mt-2 text-sm font-medium text-blue-600 hover:text-blue-800 items-center transition-colors duration-200"
                >
                  {item.actionLabel}{' '}
                  <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4 pb-2 border-b border-blue-100">Nous Trouver</h3>
        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Carte de localisation"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.0599944502296!2d-1.1689444844987696!3d45.43051447910044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48014b8c41a9825d%3A0xe7a1d90fd4c19863!2s58%20Rue%20des%20Sauniers%2C%2017530%20Arvert!5e0!3m2!1sfr!2sfr!4v1616539253588!5m2!1sfr!2sfr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 