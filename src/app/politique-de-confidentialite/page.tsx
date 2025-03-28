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
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 bg-blue-50 border-b border-blue-100">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Politique de Confidentialité</h1>
            <p className="text-blue-700">Comment nous protégeons vos données personnelles</p>
          </div>
          
          {/* Table des matières */}
          <div className="p-6 bg-gray-50 border-b border-gray-100">
            <h2 className="text-lg font-medium text-gray-700 mb-3">Sommaire</h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <a href="#responsable" className="text-blue-600 hover:text-blue-800 hover:underline">Responsable du traitement</a>
              <a href="#donnees" className="text-blue-600 hover:text-blue-800 hover:underline">Données collectées</a>
              <a href="#finalites" className="text-blue-600 hover:text-blue-800 hover:underline">Finalités du traitement</a>
              <a href="#conservation" className="text-blue-600 hover:text-blue-800 hover:underline">Durée de conservation</a>
              <a href="#destinataires" className="text-blue-600 hover:text-blue-800 hover:underline">Destinataires des données</a>
              <a href="#droits" className="text-blue-600 hover:text-blue-800 hover:underline">Vos droits</a>
              <a href="#securite" className="text-blue-600 hover:text-blue-800 hover:underline">Mesures de sécurité</a>
              <a href="#cookies" className="text-blue-600 hover:text-blue-800 hover:underline">Cookies</a>
            </nav>
          </div>

          <div className="p-6 md:p-8">
            <div className="prose prose-lg max-w-none">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-md">
                <p>
                  La présente Politique de Confidentialité définit la manière dont Stéphane Bernard, entrepreneur individuel, 
                  collecte, utilise et protège les informations que vous nous communiquez lorsque vous utilisez notre site internet.
                </p>
              </div>
              
              <section id="responsable" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Responsable du traitement</h2>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="mb-1">Les données à caractère personnel collectées sur le site sont traitées par :</p>
                  <p className="mb-1"><strong>Stéphane Bernard</strong></p>
                  <p className="mb-1">Entreprise Individuelle</p>
                  <p className="mb-1"><strong>SIRET :</strong> 49982603000037</p>
                  <p className="mb-1"><strong>Adresse :</strong> 58 rue des sauniers, 17530 Arvert</p>
                  <p className="mb-1"><strong>Téléphone :</strong> 06.64.95.30.92</p>
                  <p><strong>Email :</strong> bernard.s.portails@gmail.com</p>
                </div>
              </section>
              
              <section id="donnees" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Données personnelles collectées</h2>
                <p>
                  Nous collectons les données personnelles suivantes lorsque vous utilisez notre formulaire de contact 
                  ou lorsque vous demandez un devis :
                </p>
                <ul className="bg-white shadow-sm border border-gray-200 rounded-md divide-y divide-gray-200">
                  <li className="px-4 py-3">Nom et prénom</li>
                  <li className="px-4 py-3">Adresse email</li>
                  <li className="px-4 py-3">Numéro de téléphone</li>
                  <li className="px-4 py-3">Adresse postale (pour les devis)</li>
                  <li className="px-4 py-3">Informations concernant votre projet</li>
                </ul>
              </section>
              
              <section id="finalites" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Finalités et bases légales du traitement</h2>
                <p>
                  Nous traitons vos données personnelles pour les finalités suivantes :
                </p>
                <div className="overflow-hidden bg-white shadow sm:rounded-md">
                  <ul className="divide-y divide-gray-200">
                    <li className="px-4 py-3 flex items-start">
                      <span className="mr-3 flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">1</span>
                      <div>
                        <p className="font-medium">Répondre à vos demandes d&apos;information</p>
                        <p className="text-sm text-gray-500">Base légale : intérêt légitime</p>
                      </div>
                    </li>
                    <li className="px-4 py-3 flex items-start">
                      <span className="mr-3 flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">2</span>
                      <div>
                        <p className="font-medium">Établir des devis personnalisés</p>
                        <p className="text-sm text-gray-500">Base légale : mesures précontractuelles</p>
                      </div>
                    </li>
                    <li className="px-4 py-3 flex items-start">
                      <span className="mr-3 flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">3</span>
                      <div>
                        <p className="font-medium">Gérer la relation client</p>
                        <p className="text-sm text-gray-500">Base légale : exécution d&apos;un contrat</p>
                      </div>
                    </li>
                    <li className="px-4 py-3 flex items-start">
                      <span className="mr-3 flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">4</span>
                      <div>
                        <p className="font-medium">Vous informer sur nos produits et services</p>
                        <p className="text-sm text-gray-500">Base légale : consentement</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
              
              <section id="conservation" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Durée de conservation des données</h2>
                <p>
                  Vos données personnelles sont conservées pendant une durée limitée, qui varie selon la finalité du traitement :
                </p>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type de données</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durée de conservation</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Demandes d&apos;information</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">3 ans à compter de votre dernière demande</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Devis non suivis d&apos;une commande</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">3 ans</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Données clients</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">10 ans après la fin de la relation commerciale</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              
              <section id="destinataires" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Destinataires des données</h2>
                <p>
                  Vos données personnelles sont destinées exclusivement à Stéphane Bernard et son équipe. Elles 
                  ne sont transmises à aucun tiers, sauf :
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                  <li>Aux prestataires techniques assurant l&apos;hébergement du site et la gestion des formulaires</li>
                  <li>Si nécessaire, aux sous-traitants intervenant dans la réalisation de votre projet</li>
                  <li>En cas d&apos;obligation légale (demande judiciaire ou administrative)</li>
                </ul>
              </section>
              
              <section id="droits" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Vos droits</h2>
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, 
                  vous disposez des droits suivants concernant vos données personnelles :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                    <p className="font-medium text-blue-900">Droit d&apos;accès</p>
                    <p className="text-sm">Obtenir une copie des données vous concernant</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                    <p className="font-medium text-blue-900">Droit de rectification</p>
                    <p className="text-sm">Corriger des informations inexactes</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                    <p className="font-medium text-blue-900">Droit d&apos;effacement</p>
                    <p className="text-sm">Demander la suppression de vos données</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                    <p className="font-medium text-blue-900">Droit à la limitation</p>
                    <p className="text-sm">Restreindre le traitement de vos données</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                    <p className="font-medium text-blue-900">Droit d&apos;opposition</p>
                    <p className="text-sm">S&apos;opposer au traitement de vos données</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                    <p className="font-medium text-blue-900">Droit à la portabilité</p>
                    <p className="text-sm">Récupérer vos données dans un format réutilisable</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md mt-4 border-l-4 border-blue-400">
                  <p>
                    Pour exercer ces droits, vous pouvez nous contacter par email à <a href="mailto:bernard.s.portails@gmail.com" className="text-blue-600 hover:text-blue-800">bernard.s.portails@gmail.com</a> 
                    ou par courrier à l&apos;adresse : 58 rue des sauniers, 17530 Arvert.
                  </p>
                  <p className="mt-2">
                    En cas de réclamation, vous pouvez contacter la Commission Nationale de l&apos;Informatique et des Libertés (CNIL).
                  </p>
                </div>
              </section>
              
              <section id="securite" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Mesures de sécurité</h2>
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles 
                  contre la destruction accidentelle ou illicite, la perte accidentelle, l&apos;altération, la diffusion ou l&apos;accès 
                  non autorisés.
                </p>
              </section>
              
              <section id="cookies" className="mb-8 pb-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-blue-900">Cookies</h2>
                <p>
                  Notre site utilise des cookies techniques nécessaires à son bon fonctionnement. Nous n&apos;utilisons pas de cookies 
                  de suivi ou de profilage publicitaire. Pour plus d&apos;informations sur la gestion des cookies, vous pouvez consulter le site 
                  de la CNIL : <a href="https://www.cnil.fr/fr/cookies-et-traceurs-que-dit-la-loi" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    www.cnil.fr/fr/cookies-et-traceurs-que-dit-la-loi
                  </a>
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-blue-900">Modifications de la politique de confidentialité</h2>
                <p>
                  Nous pouvons être amenés à modifier cette politique de confidentialité. La version la plus récente sera toujours 
                  disponible sur notre site web avec sa date de dernière mise à jour.
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