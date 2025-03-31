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
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 bg-blue-50 border-b border-blue-100">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Mentions Légales</h1>
            <p className="text-blue-700">Informations légales de Stéphane Bernard Portails</p>
          </div>

          <div className="p-6 md:p-8">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Informations de l&apos;entreprise</h2>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="mb-2"><strong>Entreprise :</strong> Stéphane Bernard</p>
                  <p className="mb-2"><strong>Statut :</strong> Entreprise Individuelle</p>
                  <p className="mb-2"><strong>SIRET :</strong> 49982603000037</p>
                  <p className="mb-2"><strong>Adresse :</strong> 58 rue des sauniers, 17530 Arvert</p>
                  <p className="mb-2"><strong>Téléphone :</strong> 06.64.95.30.92</p>
                  <p><strong>Email :</strong> bernard.s.portails@gmail.com</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Activité</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fabrication et installation de portails sur mesure en aluminium</li>
                  <li>Dépannage et maintenance de portails</li>
                  <li>Conseil et étude personnalisée pour tous types de projets</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Hébergement</h2>
                <p>
                  Le site est hébergé par Vercel Inc., dont le siège social est situé à l&apos;adresse suivante :
                </p>
                <address className="not-italic bg-gray-50 p-4 rounded-md mt-2">
                  440 N Barranca Ave #4133<br />
                  Covina, CA 91723<br />
                  USA
                </address>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Propriété intellectuelle</h2>
                <p>
                  L&apos;ensemble des éléments constituant ce site est la propriété exclusive de Stéphane Bernard 
                  ou de ses fournisseurs de contenu. Toute reproduction sans autorisation est interdite.
                </p>
              </section>

              <div className="text-sm text-gray-600 mt-8 pt-6 border-t border-gray-200">
                <p>Date de dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
} 