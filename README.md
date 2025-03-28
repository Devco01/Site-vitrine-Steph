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
- Formulaire de contact avec validation
- Optimisation SEO avec les métadonnées Next.js
- Performance optimisée (Core Web Vitals)

## Structure du projet

```
src/
  ├── app/                   # Dossier principal de l'application
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

3. Lancer le serveur de développement
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Déploiement

Le site peut être déployé facilement sur Vercel :

```bash
npm run build
# ou
yarn build
```

Pour un déploiement en production, suivez les [instructions de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

## Environnement de développement recommandé

- Node.js 18+
- Visual Studio Code avec les extensions suivantes :
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense

## Licence

Ce projet est sous licence privée. Tous droits réservés à Stéphane Bernard.
