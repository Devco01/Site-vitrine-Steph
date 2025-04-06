"use client";

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motionVariants';
import emailjs from '@emailjs/browser';

// Type pour les données du formulaire
interface FormData {
  nom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
}

// Type pour les erreurs du formulaire
interface FormErrors {
  nom?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  // États pour le formulaire
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
    telephone: '',
    sujet: 'Demande de devis',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  // Gestion des changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Effacer l'erreur pour ce champ s'il est rempli
    if (value.trim() && errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  // Validation du formulaire
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.nom.trim()) {
      newErrors.nom = 'Veuillez entrer votre nom';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Veuillez entrer votre email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Veuillez entrer un email valide';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Veuillez entrer votre message';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumission du formulaire
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Valider le formulaire
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({});
    
    try {
      // Configuration d'EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_default';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_default';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
      
      // Préparation des paramètres du template
      const templateParams = {
        from_name: formData.nom,
        reply_to: formData.email,
        telephone: formData.telephone || 'Non fourni',
        sujet: formData.sujet,
        message: formData.message,
      };
      
      // Vérifier si nous sommes en environnement de développement
      const isDevelopment = typeof window !== 'undefined' && 
        (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
      
      if (isDevelopment) {
        // En développement, simuler l'envoi d'email pour éviter les problèmes de CSP
        console.log('Mode développement : simulation d\'envoi d\'email avec ces paramètres :', templateParams);
        // Attendre un délai artificiel pour simuler l'envoi
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
        // En production, envoyer réellement l'email
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      }
      
      // Réinitialiser le formulaire après succès
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        sujet: 'Demande de devis',
        message: '',
      });
      
      setSubmitStatus({
        success: true,
        message: 'Votre message a été envoyé avec succès ! Nous vous contacterons bientôt.',
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      setSubmitStatus({
        success: false,
        message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ultérieurement.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      animate="show"
      className="w-full max-w-2xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <div className="px-6 py-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Envoyez-nous un message</h3>
        
        {submitStatus.message && (
          <div
            className={`p-4 mb-6 rounded-md ${
              submitStatus.success
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {submitStatus.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="nom" className="block text-gray-700 font-medium mb-2">
                Nom complet *
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.nom ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Votre nom"
              />
              {errors.nom && <p className="mt-1 text-red-500 text-sm">{errors.nom}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Votre email"
              />
              {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="telephone" className="block text-gray-700 font-medium mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Votre numéro de téléphone"
              />
            </div>
            
            <div>
              <label htmlFor="sujet" className="block text-gray-700 font-medium mb-2">
                Sujet
              </label>
              <select
                id="sujet"
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Demande de devis">Demande de devis</option>
                <option value="Question sur les produits">Question sur les produits</option>
                <option value="Prise de rendez-vous">Prise de rendez-vous</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Votre message"
            />
            {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2.5 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
} 