# Frantex International Fashion – Site vitrine

Ce dépôt contient le code source du site vitrine de **Frantex International Fashion** développé avec **Next.js 14**, **TypeScript** et **Tailwind CSS**. Le site est multilingue (français / anglais), SEO‑friendly, accessible (WCAG 2.1 AA) et conçu pour une performance optimale (images WebP, chargement différé, Core Web Vitals). Il propose des pages dédiées au savoir‑faire, aux produits, à la qualité, aux capacités industrielles, à la RSE, aux références, aux carrières, au blog et au contact, ainsi qu’un guide de style.

## Installation

1. Assurez‑vous d’avoir **Node.js >=18** et **npm** installés.
2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Lancez le serveur de développement :

   ```bash
   npm run dev
   ```

   L’application sera accessible sur `http://localhost:3000/fr` (version française) ou `http://localhost:3000/en` (version anglaise).

## Structure du projet

- `app/` – dossier utilisant l’**App Router** de Next.js. Chaque segment dynamique `[lang]` correspond à un code langue (`fr` ou `en`) et charge automatiquement les messages de traduction via **next‑intl**.
  - `layout.tsx` – gère les translations selon la langue et fournit le contexte.
  - `page.tsx` – page d’accueil avec ses sections (introduction, savoir‑faire, produits, qualité, capacités et RSE).
  - Les autres pages (`expertise`, `products`, `quality`, `capacity`, `sustainability`, `references`, `careers`, `blog`, `contact`, `legal`, `privacy`, `cookies`, `styleguide`) offrent un contenu détaillé pour chaque rubrique.
- `components/` – composants réutilisables :
  - `Navbar.tsx` et `Footer.tsx` pour la navigation et le pied de page.
  - `Hero.tsx` pour la bannière d’accueil.
- `messages/` – fichiers JSON contenant les traductions (`fr.json`, `en.json`). Les clés sont organisées par namespace (`nav`, `home`, `footer`).
- `public/assets/` – ressources statiques (images de bannières et galerie).
- `tailwind.config.js` – configuration de la palette de couleurs et des polices.
- `i18n.ts` – liste des langues supportées.

## Guide de style

Une page `/styleguide` recense la palette de couleurs, la typographie et quelques composants (boutons, cartes) pour faciliter la création de nouvelles pages et assurer la cohérence visuelle. Utilisez Tailwind CSS pour composer vos propres layouts en respectant la grille et les couleurs définies.

## Gestion du contenu et traduction

Le contenu statique est stocké dans les fichiers de traduction `messages/fr.json` et `messages/en.json` ou directement dans les pages. Pour modifier un texte, mettez à jour la clé correspondante dans ces fichiers ou ajustez les sections dans les pages. L’ajout d’une nouvelle langue requiert l’ajout du code langue dans `i18n.ts`, la création d’un fichier JSON dans `messages/` et la traduction des clés.

## Formulaires

Deux formulaires sont proposés :

1. **Devis / brief projet** – page Contact : collecte le nom, la société, l’email, le téléphone, le type de produit, la quantité estimée, des fichiers techniques et un message. Les champs disposent de validations de base. La logique d’envoi (email via SMTP ou intégration CMS) doit être implémentée dans une route API (`app/api/contact/route.ts`).
2. **Candidature** – page Carrières : formulaire de candidature spontanée permettant de déposer un CV au format PDF et un message. Une route API similaire peut être créée pour traiter ces soumissions.

Afin de protéger les données personnelles, implémentez un captcha ou un honeypot et limitez le nombre de requêtes.

## SEO & métadonnées

Chaque page utilise l’API `metadata` de Next.js pour définir les balises `title` et `description`. Les images sont stockées au format PNG/WebP et chargées en lazy‑loading avec `next/image`. Pour optimiser l’indexation, créez un `sitemap.xml` et un `robots.txt` à la racine du projet.

## Déploiement

Le projet est compatible avec un déploiement sur **Vercel** ou **Netlify**. Lors du build (`npm run build`), Next.js génère un site optimisé. Configurez les variables d’environnement nécessaires (par exemple pour l’envoi d’emails) dans votre plateforme d’hébergement.

## Licences et droits

Les images utilisées dans la maquette sont des illustrations générées et ne représentent pas des produits réels. Remplacez‑les par vos propres visuels avant la mise en production. Les contenus textuels sont fournis à titre indicatif et peuvent être adaptés selon votre charte éditoriale et vos références clients.