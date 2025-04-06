# Site Vitrine - Stéphane Bernard Portails

Site vitrine professionnel pour Stéphane Bernard, spécialiste en portails sur mesure, développé avec Next.js, TypeScript et Tailwind CSS.

## Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Bibliothèque d'animations fluides
- **React Hook Form** - Gestion des formulaires

## Fonctionnalités

- Design responsive adapté à tous les appareils
- Animations fluides avec Framer Motion
- Formulaire de contact avec validation et envoi d'emails via EmailJS
- Optimisation SEO avec les métadonnées Next.js
- Performance optimisée (Core Web Vitals)

## Structure du projet

```
src/
  ├── app/                   # Dossier principal de l'application
  │   ├── api/               # API Routes pour le backend
  │   │   └── contact/       # API pour le formulaire de contact
  │   ├── components/        # Composants réutilisables
  │   │   ├── animations/    # Composants d'animation
  │   │   ├── contact/       # Composants de la page contact
  │   │   ├── home/          # Composants de la page d'accueil
  │   │   └── layout/        # Composants de structure (Header, Footer, etc.)
  │   ├── contact/           # Page de contact
  │   ├── globals.css        # Styles globaux
  │   ├── layout.tsx         # Layout principal
  │   └── page.tsx           # Page d'accueil
  ├── public/                # Fichiers statiques (images, etc.)
```

## Installation

1. Cloner le dépôt
   ```bash
   git clone https://github.com/votre-username/portails-stephane-bernard.git
   cd portails-stephane-bernard
   ```

2. Installer les dépendances
   ```bash
   npm install
   # ou
   yarn install
   ```
   
3. Configurer les variables d'environnement
   ```bash
   cp .env.example .env.local
   # Puis modifiez les valeurs dans .env.local
   ```

4. Lancer le serveur de développement
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur


## Configuration EmailJS

Ce projet utilise EmailJS pour gérer l'envoi d'emails à partir du formulaire de contact.

### Configuration requise

1. Créez un compte sur [EmailJS](https://www.emailjs.com/).
2. Créez un service de messagerie (par exemple, avec Gmail).
3. Créez un modèle d'email avec les variables suivantes :
   - `{{from_name}}` - Nom de l'expéditeur
   - `{{reply_to}}` - Email pour la réponse
   - `{{telephone}}` - Numéro de téléphone
   - `{{sujet}}` - Sujet du message
   - `{{message}}` - Contenu du message

### Configuration du modèle d'email

Dans l'interface d'EmailJS, créez un modèle avec un contenu similaire à :

```html
<h1>Nouveau message de contact</h1>

<p>Un message a été envoyé par {{from_name}}.</p>

<h3>Détails du message :</h3>
<p><strong>Nom :</strong> {{from_name}}</p>
<p><strong>Email :</strong> {{reply_to}}</p>
<p><strong>Téléphone :</strong> {{telephone}}</p>
<p><strong>Sujet :</strong> {{sujet}}</p>

<h3>Message :</h3>
<div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
  {{message}}
</div>

<p>Ce message a été envoyé depuis le formulaire de contact du site web.</p>
```

### Variables d'environnement

Mettez à jour le fichier `.env.local` avec vos identifiants EmailJS :

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Ces valeurs se trouvent dans votre compte EmailJS :
- Service ID : dans l'onglet "Services"
- Template ID : dans l'onglet "Email Templates"
- Public Key : dans l'onglet "Account" > "API Keys"

## Content Security Policy (CSP)

Le projet inclut des règles CSP pour sécuriser le site en production. Ces règles sont définies dans `next.config.ts` et permettent notamment :

- La connexion à l'API EmailJS
- L'intégration de Google Maps
- Le chargement d'images depuis diverses sources

En environnement de développement, le formulaire de contact simule l'envoi d'emails pour éviter les problèmes liés aux restrictions CSP.

## Déploiement

Ce site est conçu pour être déployé sur Vercel ou tout autre hébergeur compatible avec Next.js.

### Déploiement sur Vercel

1. Connectez votre compte GitHub à Vercel
2. Sélectionnez le dépôt contenant le projet
3. Configurez les variables d'environnement (les mêmes que dans `.env.local`)
4. Déployez le projet

Après le déploiement, le formulaire de contact utilisera EmailJS pour envoyer des messages directement depuis le navigateur du client, sans passer par un serveur backend.

## Environnement de développement recommandé

- Node.js 18+
- Visual Studio Code avec les extensions suivantes :
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense

## Licence

Ce projet est sous licence privée. Tous droits réservés à Stéphane Bernard.
