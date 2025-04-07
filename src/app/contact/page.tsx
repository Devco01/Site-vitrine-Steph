import { Metadata } from 'next';
import ContactBanner from '../components/contact/ContactBanner';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import PageWrapper from '../components/layout/PageWrapper';

export const metadata: Metadata = {
  title: 'Contact | Stéphane Bernard - Portails Aluminium Arvert (17530)',
  description: 'Contactez Stéphane Bernard, artisan spécialiste des portails aluminium à Arvert. Intervention dans toute la Charente-Maritime : Royan, La Tremblade, Marennes. Devis gratuit au 06.64.95.30.92.',
  keywords: 'contact portails Arvert, devis portail aluminium 17, téléphone Stéphane Bernard, artisan portails Charente-Maritime'
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <ContactBanner />
      
      <div className="container mx-auto py-12 px-4">
        <div className="bg-gradient-to-b from-white to-blue-50 rounded-lg shadow-md p-6 md:p-8 mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-4 pb-2 border-b border-blue-100">
            Contactez votre artisan en portails aluminium à Arvert
          </h1>
          <p className="text-gray-700 mb-6">
            Basé à <strong>Arvert (17530)</strong>, Stéphane Bernard intervient dans toute la <strong>Charente-Maritime</strong> pour vos projets de portails sur mesure. Contactez-nous directement ou utilisez le formulaire ci-dessous pour obtenir des informations ou un <strong>devis gratuit</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Téléphone</h3>
              <p className="text-blue-600 font-bold">06.64.95.30.92</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Adresse</h3>
              <p className="text-gray-700">58 rue des sauniers, 17530 Arvert</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-700">bernard.s.portails@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div id="contactForm" className="bg-gradient-to-b from-white to-blue-50 rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4 pb-2 border-b border-blue-100">Demande de devis ou d&apos;information</h2>
              <p className="text-gray-700 mb-6">
                Besoin d&apos;un <strong>devis pour votre portail aluminium</strong> à Arvert, Royan, La Tremblade ou dans les environs ? 
                Complétez simplement ce formulaire et nous vous répondrons sous 24h.
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
              Besoin d&apos;aide immédiate pour votre portail ?
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

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Zones d&apos;intervention en Charente-Maritime
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-700 mb-6">
              Stéphane Bernard intervient pour l&apos;installation et la réparation de portails aluminium dans un rayon de 50km autour d&apos;Arvert, couvrant les principales villes de Charente-Maritime :
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-blue-600">Arvert (17530)</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-blue-600">Royan (17200)</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-blue-600">La Tremblade (17390)</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-blue-600">Marennes (17320)</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-blue-600">Saint-Georges-de-Didonne</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-blue-600">Saujon (17600)</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-blue-600">La Rochelle (17000)</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-semibold text-blue-600">Saint-Palais-sur-Mer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
} 