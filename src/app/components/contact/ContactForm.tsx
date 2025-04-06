"use client";

import { useState, FormEvent, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motionVariants';
import emailjs from '@emailjs/browser';

// Type pour les données du formulaire
interface FormData {
  from_name: string;
  reply_to: string;
  telephone: string;
  sujet: string;
  message: string;
}

// Type pour les erreurs du formulaire
interface FormErrors {
  from_name?: string;
  reply_to?: string;
  message?: string;
}

export default function ContactForm() {
  // Référence au formulaire pour EmailJS
  const formRef = useRef<HTMLFormElement>(null);
  
  // États pour le formulaire
  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    reply_to: '',
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
    
    if (!formData.from_name.trim()) {
      newErrors.from_name = 'Veuillez entrer votre nom';
    }
    
    if (!formData.reply_to.trim()) {
      newErrors.reply_to = 'Veuillez entrer votre email';
    } else if (!/\S+@\S+\.\S+/.test(formData.reply_to)) {
      newErrors.reply_to = 'Veuillez entrer un email valide';
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
      console.log('Envoi du formulaire via EmailJS');

      // Configuration de EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
      
      // Logs pour débugger les variables d'environnement
      console.log('Vérification des variables:', { 
        serviceId: serviceId ? 'défini' : 'non défini', 
        templateId: templateId ? 'défini' : 'non défini',
        publicKey: publicKey ? 'défini' : 'non défini'
      });

      // Si le formulaire n'est pas disponible, utiliser les données d'état
      if (!formRef.current) {
        console.log('Utilisation des données d\'état pour l\'envoi');
        
        // Préparation des paramètres du template
        const templateParams = {
          from_name: formData.from_name,
          reply_to: formData.reply_to,
          telephone: formData.telephone || 'Non fourni',
          sujet: formData.sujet || 'Sans sujet',
          message: formData.message,
        };
        
        // Envoyer l'email via EmailJS directement
        const result = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        );
        
        console.log('Résultat de l\'envoi:', result);
      } else {
        // Utiliser la référence du formulaire directement
        console.log('Utilisation de la référence du formulaire pour l\'envoi');
        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );
        
        console.log('Résultat de l\'envoi:', result);
      }
      
      // Réinitialiser le formulaire après succès
      setFormData({
        from_name: '',
        reply_to: '',
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
      
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Une erreur est survenue lors de l\'envoi du message';
      
      setSubmitStatus({
        success: false,
        message: `Erreur lors de l'envoi de l'email: ${errorMessage}`,
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
        
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="from_name" className="block text-gray-700 font-medium mb-2">
                Nom complet *
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.from_name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Votre nom"
              />
              {errors.from_name && <p className="mt-1 text-red-500 text-sm">{errors.from_name}</p>}
            </div>
            
            <div>
              <label htmlFor="reply_to" className="block text-gray-700 font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="reply_to"
                name="reply_to"
                value={formData.reply_to}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.reply_to ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Votre email"
              />
              {errors.reply_to && <p className="mt-1 text-red-500 text-sm">{errors.reply_to}</p>}
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