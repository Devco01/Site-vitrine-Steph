import { Metadata } from 'next';
import ContactBanner from '../components/contact/ContactBanner';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import PageWrapper from '../components/layout/PageWrapper';

export const metadata: Metadata = {
  title: 'Contact | Stéphane Bernard Portails',
  description: 'Contactez Stéphane Bernard pour toute question concernant nos services de portails sur mesure.'
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <ContactBanner />
      
      <div className="container mx-auto py-12 px-4">
        <div className="bg-gradient-to-b from-white to-blue-50 rounded-lg shadow-md p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 pb-2 border-b border-blue-100">Nos informations</h2>
          <p className="text-gray-700 mb-6">
            Vous préférez nous contacter directement ? Voici nos coordonnées complètes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div id="contactForm" className="bg-gradient-to-b from-white to-blue-50 rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4 pb-2 border-b border-blue-100">Contactez-nous</h2>
              <p className="text-gray-700 mb-6">
                Besoin d&apos;informations sur nos services ou envie de discuter de votre projet ? 
                Complétez simplement ce formulaire et nous vous répondrons dans les meilleurs délais.
              </p>
              <ContactForm />
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </div>
      
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
              Besoin d&apos;aide immédiate ?
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:0664953092"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-sm"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler maintenant
              </a>
              
              <a 
                href="mailto:bernard.s.portails@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200 shadow-sm"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
} 