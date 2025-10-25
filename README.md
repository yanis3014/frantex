# Frantex International Fashion – Vitrine Web

Ce dépôt contient une maquette haute‑fidélité et le code de production pour le site vitrine de **Frantex International Fashion**, manufacture de confection basée à M’Saken (Tunisie) spécialisée dans les maillots de bain et la lingerie. Le projet est construit avec **Next.js 14**, **TypeScript** et **Tailwind CSS** en suivant une approche *App Router* et *mobile‑first*.

## Démarrage rapide

1. **Installation des dépendances** :

   ```bash
   npm install
   ```

2. **Développement** :

   ```bash
   npm run dev
   ```

   L’application sera accessible sur `http://localhost:3000`. Par défaut la langue est le français (chemin `/fr`).

3. **Construction et exportation** :

   ```bash
   npm run build
   npm start
   ```

   Ces commandes construisent l’application puis démarrent un serveur de production.

## Structure du projet

```
frantex
├── app/                 # App Router
│   ├── layout.tsx       # Layout racine
│   ├── [lang]/          # Routes multilingues (fr, en)
│   │   ├── page.tsx     # Page d’accueil
│   │   ├── savoir-faire/
│   │   ├── produits/
│   │   ├── qualite/
│   │   ├── capacite/
│   │   ├── rse/
│   │   ├── references/
│   │   ├── carriere/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── legal/
│   │   └── styleguide/
│   └── globals.css      # Styles globaux et Tailwind
├── components/          # Composants réutilisables (Header, Footer, Hero, etc.)
├── lib/content.ts       # Contenu structuré FR/EN
├── public/images/       # Illustrations et assets statiques
├── tailwind.config.cjs  # Configuration Tailwind
├── next.config.js       # Configuration Next.js
├── tsconfig.json        # Configuration TypeScript
└── postcss.config.cjs   # Configuration PostCSS
```

## Contenus et traductions

Le fichier **`lib/content.ts`** centralise tout le contenu du site sous forme d’objets typés. Chaque champ est traduit en français (`fr`) et en anglais (`en`). Pour modifier un texte, recherchez la clé correspondante dans ce fichier et mettez à jour les deux versions.

Pour ajouter une nouvelle page ou un nouveau champ :

1. Ajoutez vos traductions dans `lib/content.ts` en respectant la structure.
2. Créez une page dans `app/[lang]/<nouvelle-page>/page.tsx` et utilisez les contenus importés.

## Accessibilité et SEO

Le design respecte les contrastes recommandés par la norme **WCAG 2.1 AA**. Les composants utilisent des balises sémantiques et des labels explicites pour les formulaires. Chaque page peut définir ses propres métadonnées SEO via l’export `metadata`. Les images sont servies dans des formats modernes (`AVIF/WebP`) lorsque c’est possible.

## Formulaires

Deux formulaires sont fournis :

- **Devis / brief projet** : page de contact (`/fr/contact`). Il collecte le nom, l’adresse mail, le téléphone, le type de produit, la quantité et un fichier technique. Aucune action d’envoi n’est implémentée côté serveur ; il faudra ajouter un *API route* ou connecter un CMS/outil d’emailing pour rendre la soumission effective.
- **Candidature spontanée** : page carrières (`/fr/carriere`). Un champ caché (*honeypot*) aide à bloquer les robots. Là encore, aucune logique backend n’est incluse.

## Styleguide

La page `/fr/styleguide` (et `/en/styleguide`) présente les principaux composants UI, la palette de couleurs et les styles typographiques. Utilisez‑la comme référence lors de l’évolution du design ou de la création de nouveaux éléments.

## Déploiement

Le projet est compatible avec un déploiement sur **Vercel** ou **Netlify**. Pour activer l’internationalisation, veillez à ce que les entêtes `Accept-Language` soient gérés ou utilisez des redirections automatiques vers `/fr` ou `/en` selon votre choix. Les métadonnées et fichiers de sitemap pourront être ajoutés dans `next.config.js` et via des outils comme `next-sitemap`.

## Contribution

1. Forkez ou clonez le dépôt.
2. Créez une branche pour votre fonctionnalité ou correctif.
3. Mettez à jour ou ajoutez des tests si nécessaire.
4. Soumettez votre *pull request* avec une description claire.

## Licence

Ce projet est fourni à des fins de démonstration et de travail interne. Merci de contacter Frantex International Fashion pour toute utilisation commerciale.