import { Metadata } from 'next';
import PageWrapper from '../components/layout/PageWrapper';

export const metadata: Metadata = {
  title: 'Mentions Légales | Stéphane Bernard Portails',
  description: 'Mentions légales de Stéphane Bernard Portails - Informations sur l\'entreprise, statut juridique et activités'
};

export default function MentionsLegalesPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 bg-gray-100 border-b border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-2">Mentions Légales</h1>
            <p className="text-gray-600">Informations légales de Stéphane Bernard Portails</p>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Informations de l&apos;entreprise</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Nom commercial :</strong> Stéphane Bernard Portails</li>
                  <li><strong>Statut :</strong> Entrepreneur individuel</li>
                  <li><strong>SIRET :</strong> 49982603000037</li>
                  <li><strong>Adresse :</strong> 58 rue des sauniers, 17530 Arvert, France</li>
                  <li><strong>Téléphone :</strong> 06.64.95.30.92</li>
                  <li><strong>Email :</strong> bernard.s.portails@gmail.com</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Activité</h2>
                <p>
                  Stéphane Bernard est spécialisé dans la conception, la fabrication et l&apos;installation de portails en aluminium sur mesure, 
                  garde-corps, clôtures et produits connexes pour particuliers et professionnels.
                </p>
                <p>
                  Notre zone d&apos;intervention couvre principalement la Charente-Maritime : Arvert, Royan, La Tremblade, Marennes, et les communes environnantes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Hébergement</h2>
                <p>
                  Ce site internet est hébergé par :
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li><strong>Société :</strong> Vercel Inc.</li>
                  <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
                  <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">https://vercel.com</a></li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Propriété intellectuelle</h2>
                <p>
                  L&apos;ensemble des éléments composant ce site (textes, images, logotypes, photographies, vidéos, sons, etc.) 
                  est la propriété exclusive de Stéphane Bernard Portails. Toute reproduction, représentation ou diffusion, 
                  en tout ou partie, du contenu de ce site sur quelque support que ce soit est interdite sans autorisation préalable.
                </p>
              </section>

              <div className="text-sm text-gray-600 mt-8 pt-6 border-t border-gray-200">
                <p>Dernière mise à jour : 1er juin 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
} 