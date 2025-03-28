"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';

// Définition du schéma de validation
const formSchema = z.object({
  nom: z.string().min(2, { message: 'Le nom doit comporter au moins 2 caractères' }),
  email: z.string().email({ message: 'Veuillez saisir une adresse e-mail valide' }),
  telephone: z
    .string()
    .regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, {
      message: 'Veuillez saisir un numéro de téléphone français valide',
    }),
  sujet: z.string().min(3, { message: 'Veuillez sélectionner un sujet' }),
  message: z.string().min(10, { message: 'Le message doit comporter au moins 10 caractères' }),
  consentement: z.boolean().refine((val) => val === true, {
    message: 'Vous devez accepter la politique de confidentialité',
  }),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: '',
      email: '',
      telephone: '',
      sujet: '',
      message: '',
      consentement: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Simuler un délai d'envoi
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Ici, vous implémenteriez l'envoi réel du formulaire à votre backend ou service d'email
      console.log('Données du formulaire :', data);
      
      setSubmitSuccess(true);
      reset();
      
      // Réinitialiser l'état de succès après 5 secondes
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError('Une erreur est survenue lors de l&apos;envoi du formulaire. Veuillez réessayer.');
      console.error('Erreur d&apos;envoi du formulaire :', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: { scale: 1.01, borderColor: '#3B82F6' },
    error: { x: [0, -5, 5, -5, 5, 0], transition: { duration: 0.4 } },
  };

  // Ajouter une classe CSS personnalisée pour les placeholders
  const inputClasses = `mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white placeholder-gray-500 text-gray-800`;
  const inputErrorClasses = `mt-1 block w-full px-3 py-2 border border-red-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white placeholder-gray-500 text-gray-800`;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {submitSuccess ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
          <p className="text-gray-600 mb-6">
            Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            Nouveau message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-800">
              Nom complet <span className="text-red-500">*</span>
            </label>
            <motion.div
              whileFocus="focus"
              animate={errors.nom ? "error" : ""}
              variants={inputVariants}
            >
              <input
                id="nom"
                type="text"
                className={errors.nom ? inputErrorClasses : inputClasses}
                {...register('nom')}
              />
            </motion.div>
            {errors.nom && (
              <p className="mt-1 text-sm text-red-600">{errors.nom.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                Email <span className="text-red-500">*</span>
              </label>
              <motion.div
                whileFocus="focus"
                animate={errors.email ? "error" : ""}
                variants={inputVariants}
              >
                <input
                  id="email"
                  type="email"
                  className={errors.email ? inputErrorClasses : inputClasses}
                  {...register('email')}
                />
              </motion.div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-800">
                Téléphone <span className="text-red-500">*</span>
              </label>
              <motion.div
                whileFocus="focus"
                animate={errors.telephone ? "error" : ""}
                variants={inputVariants}
              >
                <input
                  id="telephone"
                  type="tel"
                  className={errors.telephone ? inputErrorClasses : inputClasses}
                  placeholder="Ex: 06 12 34 56 78"
                  {...register('telephone')}
                />
              </motion.div>
              {errors.telephone && (
                <p className="mt-1 text-sm text-red-600">{errors.telephone.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="sujet" className="block text-sm font-medium text-gray-800">
              Sujet <span className="text-red-500">*</span>
            </label>
            <motion.div
              whileFocus="focus"
              animate={errors.sujet ? "error" : ""}
              variants={inputVariants}
            >
              <select
                id="sujet"
                className={errors.sujet ? inputErrorClasses : inputClasses}
                {...register('sujet')}
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="devis">Demande de devis</option>
                <option value="information">Demande d&apos;information</option>
                <option value="apres-vente">Service après-vente</option>
                <option value="autre">Autre</option>
              </select>
            </motion.div>
            {errors.sujet && (
              <p className="mt-1 text-sm text-red-600">{errors.sujet.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-800">
              Message <span className="text-red-500">*</span>
            </label>
            <motion.div
              whileFocus="focus"
              animate={errors.message ? "error" : ""}
              variants={inputVariants}
            >
              <textarea
                id="message"
                rows={5}
                className={errors.message ? inputErrorClasses : inputClasses}
                {...register('message')}
              ></textarea>
            </motion.div>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="consentement"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                {...register('consentement')}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="consentement" className="font-medium text-gray-800">
                J&apos;accepte que mes données soient traitées conformément à la{' '}
                <a href="/politique-de-confidentialite" className="text-blue-600 hover:underline">
                  politique de confidentialité
                </a>{' '}
                <span className="text-red-500">*</span>
              </label>
              {errors.consentement && (
                <p className="mt-1 text-sm text-red-600">{errors.consentement.message}</p>
              )}
            </div>
          </div>

          {submitError && (
            <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p>{submitError}</p>
            </div>
          )}

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Envoi en cours...
                </div>
              ) : (
                'Envoyer'
              )}
            </button>
          </motion.div>

          <p className="text-xs text-gray-500 mt-2">
            Les champs marqués d&apos;un <span className="text-red-500">*</span> sont obligatoires
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm; 