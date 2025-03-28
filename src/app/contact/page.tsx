import { Metadata } from 'next';
import ContactBanner from '../components/contact/ContactBanner';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import PageWrapper from '../components/layout/PageWrapper';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez Stéphane Bernard pour un devis de portail sur mesure ou toute autre demande concernant nos services.'
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <ContactBanner />
      
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600 mb-6">
                  Besoin d&apos;un devis, d&apos;informations supplémentaires ou d&apos;une assistance technique ? 
                  Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
                </p>
                
                <ContactForm />
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Nos informations
                </h2>
                <p className="text-gray-600 mb-6">
                  Vous préférez nous contacter directement ? Voici nos coordonnées complètes.
                  Nous sommes à votre service du lundi au samedi.
                </p>
                
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-blue-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Besoin d&apos;aide immédiate ?
            </h2>
            
            <div>
              <a 
                href="tel:0123456789"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
} 