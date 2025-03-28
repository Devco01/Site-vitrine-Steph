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
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 bg-blue-50 border-b border-blue-100">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Conditions Générales de Vente</h1>
            <p className="text-blue-700">Applicables à tous les produits et services de Stéphane Bernard Portails</p>
          </div>
          
          {/* Table des matières */}
          <div className="p-6 bg-gray-50 border-b border-gray-100">
            <h2 className="text-lg font-medium text-gray-700 mb-3">Sommaire</h2>
            <nav className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
              <a href="#article1" className="text-blue-600 hover:text-blue-800 hover:underline">1. Identité du vendeur</a>
              <a href="#article2" className="text-blue-600 hover:text-blue-800 hover:underline">2. Champ d&apos;application</a>
              <a href="#article3" className="text-blue-600 hover:text-blue-800 hover:underline">3. Commandes</a>
              <a href="#article4" className="text-blue-600 hover:text-blue-800 hover:underline">4. Prix</a>
              <a href="#article5" className="text-blue-600 hover:text-blue-800 hover:underline">5. Conditions de paiement</a>
              <a href="#article6" className="text-blue-600 hover:text-blue-800 hover:underline">6. Livraison et installation</a>
              <a href="#article7" className="text-blue-600 hover:text-blue-800 hover:underline">7. Réception des travaux</a>
              <a href="#article8" className="text-blue-600 hover:text-blue-800 hover:underline">8. Garanties</a>
              <a href="#article9" className="text-blue-600 hover:text-blue-800 hover:underline">9. Droit de rétractation</a>
              <a href="#article10" className="text-blue-600 hover:text-blue-800 hover:underline">10. Responsabilité</a>
              <a href="#article11" className="text-blue-600 hover:text-blue-800 hover:underline">11. Force majeure</a>
              <a href="#article12" className="text-blue-600 hover:text-blue-800 hover:underline">12. Propriété intellectuelle</a>
              <a href="#article13" className="text-blue-600 hover:text-blue-800 hover:underline">13. Droit applicable et litiges</a>
            </nav>
          </div>

          <div className="p-6 md:p-8">
            <div className="prose prose-lg max-w-none">
              <section id="article1" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Article 1 - Identité du vendeur</h2>
                <p>
                  Les présentes conditions générales de vente sont applicables à toutes les ventes conclues 
                  entre Stéphane Bernard, entrepreneur individuel, et ses clients.
                </p>
                <div className="bg-gray-50 p-4 rounded-md mt-3">
                  <p className="mb-1"><strong>Coordonnées du vendeur :</strong></p>
                  <p className="mb-1">Stéphane Bernard</p>
                  <p className="mb-1"><strong>SIRET :</strong> 49982603000037</p>
                  <p className="mb-1"><strong>Adresse :</strong> 58 rue des sauniers, 17530 Arvert</p>
                  <p className="mb-1"><strong>Téléphone :</strong> 06.64.95.30.92</p>
                  <p><strong>Email :</strong> bernard.s.portails@gmail.com</p>
                </div>
              </section>
              
              <section id="article2" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Article 2 - Champ d&apos;application</h2>
                <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
                  <p>
                    Les présentes conditions générales de vente régissent la vente et l&apos;installation de portails 
                    et produits associés par Stéphane Bernard. Elles constituent le socle unique de la relation commerciale 
                    entre les parties et prévalent sur tout autre document.
                  </p>
                </div>
              </section>
              
              <section id="article3" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Article 3 - Commandes</h2>
                <p>
                  Toute commande doit faire l&apos;objet d&apos;un devis préalable signé par le client et 
                  accompagné d&apos;un acompte de 30% du montant total TTC. La signature du devis par le client 
                  vaut acceptation sans réserve des présentes conditions générales de vente.
                </p>
                <p className="mt-3">
                  Une fois le devis signé, toute modification de commande devra faire l&apos;objet d&apos;une 
                  demande écrite soumise à l&apos;accord de Stéphane Bernard et pourra entraîner une révision du prix et du délai.
                </p>
              </section>
              
              <section id="article4" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Article 4 - Prix</h2>
                <p>
                  Les prix indiqués sont en euros TTC (toutes taxes comprises). Ils comprennent 
                  la fourniture et l&apos;installation du portail selon les spécifications du devis. 
                  Les frais de déplacement sont inclus dans un rayon de 50 km autour d&apos;Arvert. Au-delà, 
                  des frais supplémentaires pourront être facturés, tels que mentionnés sur le devis.
                </p>
              </section>
              
              <section id="article5" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Article 5 - Conditions de paiement</h2>
                <p>
                  Le règlement des commandes s&apos;effectue selon les modalités suivantes :
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
                      <span className="mr-3 flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">60%</span>
                      <div>
                        <p className="font-medium">Au début des travaux d&apos;installation</p>
                        <p className="text-sm text-gray-600">Second versement</p>
                      </div>
                    </li>
                    <li className="px-4 py-3 flex items-start">
                      <span className="mr-3 flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">10%</span>
                      <div>
                        <p className="font-medium">À la fin des travaux et réception du chantier</p>
                        <p className="text-sm text-gray-600">Solde final</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <p className="mt-4">
                  Les paiements peuvent être effectués par chèque, virement bancaire ou espèces.
                  Aucun escompte n&apos;est accordé pour paiement anticipé.
                </p>
              </section>
              
              <section id="article6" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Article 6 - Livraison et installation</h2>
                <p>
                  Les délais de livraison et d&apos;installation indiqués sur le devis sont donnés à titre indicatif. 
                  Stéphane Bernard s&apos;engage à informer le client de tout retard prévisible. Le client s&apos;engage 
                  à permettre l&apos;accès à son domicile aux dates et heures convenues pour l&apos;installation.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-3 rounded-md">
                  <p>
                    Le client doit s&apos;assurer que le lieu d&apos;installation est accessible et que les travaux préparatoires 
                    éventuellement à sa charge sont réalisés avant l&apos;installation.
                  </p>
                </div>
              </section>
              
              <section id="article7" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Article 7 - Réception des travaux</h2>
                <p>
                  À l&apos;issue de l&apos;installation, un procès-verbal de réception sera établi contradictoirement. 
                  Le client s&apos;engage à être présent ou représenté lors de la réception des travaux. La réception sans 
                  réserve couvre les défauts apparents et transfère la garde de l&apos;ouvrage au client.
                </p>
              </section>
              
              <section id="article8" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Article 8 - Garanties</h2>
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
                    En outre, Stéphane Bernard accorde une garantie commerciale de 2 ans couvrant les défauts de fabrication 
                    et d&apos;installation, dans des conditions normales d&apos;utilisation et d&apos;entretien. Cette garantie 
                    ne couvre pas l&apos;usure normale, les dommages résultant d&apos;une utilisation non conforme, d&apos;un défaut 
                    d&apos;entretien ou d&apos;un cas de force majeure.
                  </p>
                </div>
              </section>
              
              <section id="article9" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Article 9 - Droit de rétractation</h2>
                <p>
                  Conformément à l&apos;article L.221-18 du Code de la consommation, le client dispose d&apos;un délai de 
                  14 jours à compter de la conclusion du contrat pour exercer son droit de rétractation, sans avoir à motiver 
                  sa décision ni à supporter de pénalités.
                </p>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-3 rounded-md">
                  <p>
                    <strong>Exception :</strong> Ce droit de rétractation ne s&apos;applique pas aux biens confectionnés selon les 
                    spécifications du client ou nettement personnalisés (article L.221-28 du Code de la consommation).
                  </p>
                </div>
              </section>
              
              <section id="article10" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Article 10 - Responsabilité</h2>
                <p>
                  Stéphane Bernard est responsable de la bonne exécution des obligations résultant du contrat. Toutefois, 
                  sa responsabilité ne saurait être engagée en cas d&apos;inexécution ou de mauvaise exécution due à une faute du client, 
                  au fait d&apos;un tiers ou à un cas de force majeure.
                </p>
              </section>
              
              <section id="article11" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Article 11 - Force majeure</h2>
                <p>
                  Les parties ne pourront être tenues pour responsables si l&apos;inexécution ou le retard dans l&apos;exécution 
                  de l&apos;une de leurs obligations découle d&apos;un cas de force majeure au sens de l&apos;article 1218 du Code civil.
                </p>
              </section>
              
              <section id="article12" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Article 12 - Propriété intellectuelle</h2>
                <p>
                  Tous les documents techniques, plans, dessins, modèles remis au client demeurent la propriété exclusive de 
                  Stéphane Bernard et ne peuvent être communiqués à des tiers sous peine de dommages et intérêts.
                </p>
              </section>
              
              <section id="article13" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Article 13 - Droit applicable et litiges</h2>
                <p>
                  Les présentes conditions générales de vente sont soumises au droit français. En cas de litige, une solution 
                  amiable sera recherchée avant toute action judiciaire. À défaut d&apos;accord amiable, le litige sera porté devant 
                  les tribunaux compétents.
                </p>
                <div className="bg-gray-50 p-4 rounded-md mt-3">
                  <p>
                    Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, le client 
                    peut recourir au service de médiation MEDICYS, accessible à l&apos;adresse : www.medicys.fr.
                  </p>
                </div>
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