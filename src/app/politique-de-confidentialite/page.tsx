import { Metadata } from 'next';
import PageWrapper from '../components/layout/PageWrapper';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité de Stéphane Bernard Portails - Comment nous protégeons vos données personnelles'
};

export default function PolitiqueConfidentialitePage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 bg-blue-50 border-b border-blue-100">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Politique de Confidentialité</h1>
            <p className="text-blue-700">Comment nous protégeons vos données personnelles</p>
          </div>

          <div className="p-6 md:p-8">
            <div className="prose prose-lg max-w-none">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-md">
                <p>
                  La présente Politique de Confidentialité définit la manière dont Stéphane Bernard, entrepreneur individuel, 
                  collecte, utilise et protège les informations que vous nous communiquez lorsque vous utilisez notre site internet.
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Données collectées</h2>
                <p>
                  Nous collectons les données personnelles suivantes lorsque vous utilisez notre formulaire de contact 
                  ou lorsque vous demandez un devis :
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale (pour les devis)</li>
                  <li>Informations concernant votre projet</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Utilisation des données</h2>
                <p>
                  Vos données sont utilisées uniquement pour :
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Répondre à vos demandes d&apos;information</li>
                  <li>Établir des devis personnalisés</li>
                  <li>Gérer la relation client</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Protection des données</h2>
                <p>
                  Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles. 
                  Vos données ne sont jamais transmises à des tiers non autorisés.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Vos droits</h2>
                <p>
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Droit d&apos;accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit d&apos;effacement</li>
                  <li>Droit d&apos;opposition</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-md mt-4">
                  <p>
                    Pour exercer ces droits, contactez-nous par email à <a href="mailto:bernard.s.portails@gmail.com" className="text-blue-600 hover:text-blue-800">bernard.s.portails@gmail.com</a>
                  </p>
                </div>
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