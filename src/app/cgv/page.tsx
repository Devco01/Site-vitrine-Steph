import { Metadata } from 'next';
import PageWrapper from '../components/layout/PageWrapper';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description: 'Conditions générales de vente de Stéphane Bernard Portails - Fabricant de portails sur mesure en aluminium'
};

export default function CGVPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 bg-blue-50 border-b border-blue-100">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Conditions Générales de Vente</h1>
            <p className="text-blue-700">Applicables à tous les produits et services de Stéphane Bernard Portails</p>
          </div>

          <div className="p-6 md:p-8">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Identité du vendeur</h2>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="mb-1">Stéphane Bernard</p>
                  <p className="mb-1"><strong>SIRET :</strong> 49982603000037</p>
                  <p className="mb-1"><strong>Adresse :</strong> 58 rue des sauniers, 17530 Arvert</p>
                  <p className="mb-1"><strong>Téléphone :</strong> 06.64.95.30.92</p>
                  <p><strong>Email :</strong> bernard.s.portails@gmail.com</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Commandes et paiements</h2>
                <p>
                  Toute commande doit faire l&apos;objet d&apos;un devis préalable signé par le client et 
                  accompagné d&apos;un acompte de 30% du montant total TTC.
                </p>
                <div className="bg-white overflow-hidden shadow-sm rounded-lg mt-3">
                  <ul className="divide-y divide-gray-200">
                    <li className="px-4 py-3 flex items-start">
                      <span className="mr-3 flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">30%</span>
                      <div>
                        <p className="font-medium">À la signature du devis</p>
                        <p className="text-sm text-gray-600">Acompte initial</p>
                      </div>
                    </li>
                    <li className="px-4 py-3 flex items-start">
                      <span className="mr-3 flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">70%</span>
                      <div>
                        <p className="font-medium">À la fin des travaux et réception du chantier</p>
                        <p className="text-sm text-gray-600">Solde final</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Garanties</h2>
                <p>
                  Les produits fournis bénéficient des garanties légales suivantes :
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                  <li>Garantie de conformité (articles L.217-4 à L.217-14 du Code de la consommation)</li>
                  <li>Garantie des vices cachés (articles 1641 à 1649 du Code civil)</li>
                </ul>
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="font-medium text-green-800">Garantie commerciale</p>
                  <p className="mt-1">
                    Garantie commerciale de 2 ans couvrant les défauts de fabrication et d&apos;installation, 
                    dans des conditions normales d&apos;utilisation et d&apos;entretien.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">Droit applicable</h2>
                <p>
                  Les présentes conditions générales de vente sont soumises au droit français. En cas de litige, 
                  une solution amiable sera recherchée avant toute action judiciaire.
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