import { Metadata } from 'next';
import PageWrapper from '../components/layout/PageWrapper';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Stéphane Bernard Portails',
  description: 'Notre politique de confidentialité explique comment nous protégeons vos données personnelles, les informations que nous collectons et comment nous les utilisons.'
};

export default function PolitiqueConfidentialite() {
  return (
    <PageWrapper>
      <div className="container mx-auto py-16 px-4">
        <div className="p-6 md:p-8 bg-gray-100 border-b border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-2">Politique de Confidentialité</h1>
          <p className="text-gray-600">Comment nous protégeons vos données personnelles</p>
        </div>
        
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <p>
              Chez Stéphane Bernard Portails, nous accordons une grande importance à la protection de vos données personnelles.
              Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations
              lorsque vous utilisez notre site web ou nos services.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Données collectées</h2>
            <p>Nous pouvons collecter les informations suivantes :</p>
            <ul>
              <li>Informations de contact : nom, adresse email, numéro de téléphone</li>
              <li>Adresse postale pour les devis et interventions</li>
              <li>Détails de votre projet et préférences</li>
              <li>Informations sur votre navigation sur notre site (via des cookies)</li>
              <li>Historique de vos interactions avec notre entreprise</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Utilisation des données</h2>
            <p>Nous utilisons vos données personnelles pour :</p>
            <ul>
              <li>Vous fournir nos services et produits</li>
              <li>Répondre à vos demandes et questions</li>
              <li>Vous envoyer des devis personnalisés</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Protection des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès,
              utilisation, modification ou divulgation non autorisés. Vos données ne sont jamais vendues à des tiers.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Vos droits</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
            <ul>
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l&apos;effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit à la portabilité des données</li>
            </ul>
            
            <p>
              Pour exercer ces droits, contactez-nous par email à <a href="mailto:bernard.s.portails@gmail.com" className="text-gray-600 hover:text-gray-800">bernard.s.portails@gmail.com</a>
            </p>
            
            <p>
              Cette politique de confidentialité a été mise à jour le 1er juin 2023 et peut être modifiée à tout moment.
              Nous vous invitons à la consulter régulièrement.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
} 