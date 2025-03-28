import { Metadata } from 'next';
import PageWrapper from '../components/layout/PageWrapper';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales de Stéphane Bernard Portails - Fabricant de portails sur mesure en aluminium'
};

export default function MentionsLegalesPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 bg-blue-50 border-b border-blue-100">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Mentions Légales</h1>
            <p className="text-blue-700">Informations juridiques concernant Stéphane Bernard Portails</p>
          </div>
          
          {/* Table des matières */}
          <div className="p-6 bg-gray-50 border-b border-gray-100">
            <h2 className="text-lg font-medium text-gray-700 mb-3">Sommaire</h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <a href="#edition" className="text-blue-600 hover:text-blue-800 hover:underline">Édition du site</a>
              <a href="#hebergement" className="text-blue-600 hover:text-blue-800 hover:underline">Hébergement</a>
              <a href="#publication" className="text-blue-600 hover:text-blue-800 hover:underline">Directeur de publication</a>
              <a href="#coordonnees" className="text-blue-600 hover:text-blue-800 hover:underline">Coordonnées</a>
              <a href="#activite" className="text-blue-600 hover:text-blue-800 hover:underline">Activité de l&apos;entreprise</a>
              <a href="#donnees" className="text-blue-600 hover:text-blue-800 hover:underline">Protection des données</a>
              <a href="#propriete" className="text-blue-600 hover:text-blue-800 hover:underline">Propriété intellectuelle</a>
              <a href="#credits" className="text-blue-600 hover:text-blue-800 hover:underline">Crédits</a>
            </nav>
          </div>

          <div className="p-6 md:p-8">
            <div className="prose prose-lg max-w-none">
              <section id="edition" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Édition du site</h2>
                <p>
                  Le site portails-stephane-bernard.fr est édité par l&apos;entreprise individuelle Stéphane Bernard,
                  spécialisée dans la fabrication et l&apos;installation de portails sur mesure.
                </p>
              </section>
              
              <section id="hebergement" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Hébergement</h2>
                <p>
                  Le site est hébergé par Vercel Inc., dont le siège social est situé à l&apos;adresse suivante :
                </p>
                <address className="not-italic bg-gray-50 p-4 rounded-md">
                  440 N Barranca Ave #4133<br />
                  Covina, CA 91723<br />
                  USA
                </address>
              </section>
              
              <section id="publication" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Directeur de la publication</h2>
                <p>
                  Le directeur de la publication du site est Monsieur Stéphane Bernard.
                </p>
              </section>
              
              <section id="coordonnees" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Coordonnées</h2>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="mb-1"><strong>Entreprise :</strong> Stéphane Bernard</p>
                  <p className="mb-1"><strong>Statut :</strong> Entreprise Individuelle</p>
                  <p className="mb-1"><strong>SIRET :</strong> 49982603000037</p>
                  <p className="mb-1"><strong>Adresse :</strong> 58 rue des sauniers, 17530 Arvert</p>
                  <p className="mb-1"><strong>Téléphone :</strong> 06.64.95.30.92</p>
                  <p><strong>Email :</strong> bernard.s.portails@gmail.com</p>
                </div>
              </section>
              
              <section id="activite" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Activité de l&apos;entreprise</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Fabrication et installation de portails sur mesure en aluminium</li>
                  <li>Dépannage et maintenance de portails</li>
                  <li>Conseil et étude personnalisée pour tous types de projets</li>
                </ul>
              </section>
              
              <section id="donnees" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Protection des données personnelles</h2>
                <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
                  <p className="mb-3">
                    Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, et au Règlement Européen 2016/679 
                    relatif à la protection des personnes physiques à l&apos;égard du traitement des données à caractère personnel
                    et à la libre circulation de ces données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification,
                    d&apos;effacement, de limitation, d&apos;opposition et de portabilité des données vous concernant.
                  </p>
                  <p>
                    Vous pouvez exercer ces droits en nous contactant à l&apos;adresse email : <a href="mailto:bernard.s.portails@gmail.com" className="text-blue-600 hover:text-blue-800">bernard.s.portails@gmail.com</a>.
                  </p>
                </div>
                <p className="mt-4">
                  Pour plus d&apos;informations sur la façon dont nous traitons vos données, 
                  veuillez consulter notre <a href="/politique-de-confidentialite" className="text-blue-600 hover:text-blue-800 font-medium">Politique de Confidentialité</a>.
                </p>
              </section>
              
              <section id="propriete" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Propriété intellectuelle</h2>
                <p>
                  L&apos;ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans,
                  logos, marques, etc.) est la propriété exclusive de Stéphane Bernard ou de ses fournisseurs de contenu. Ces éléments sont
                  protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
                </p>
                <p className="mt-3">
                  Toute reproduction totale ou partielle de ce site ou de l&apos;un de ses éléments sans autorisation expresse et préalable
                  de Stéphane Bernard est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du
                  Code de la propriété intellectuelle.
                </p>
              </section>
              
              <section id="credits" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Crédits</h2>
                <p>
                  <strong>Conception et développement :</strong> Développeur web indépendant<br />
                  <strong>Photographies :</strong> Stéphane Bernard (sauf mention contraire)
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900">Loi applicable et juridiction</h2>
                <p>
                  Les présentes mentions légales sont régies par la loi française. En cas de litige, les tribunaux français seront seuls compétents.
                </p>
              </section>
              
              <div className="text-sm text-gray-600 mt-12 pt-6 border-t border-gray-200">
                <p>Date de dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="mt-2">
                  <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    Retour en haut de page
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
} 