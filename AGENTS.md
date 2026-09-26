# Wissem UI — consignes de projet

Wissem UI est le système de design partagé et le Nuxt Layer des produits compatibles de Wissem’s Industries. Le paquet est publié sur GitHub Packages, pas sur GHCR.

## Architecture et contrats

- Le paquet étend Nuxt avec le thème et les valeurs par défaut de Nuxt UI, Tailwind et les icônes. Les applications consommatrices déclarent `@wissem-industries/ui` dans `extends`.
- Ne pas créer de wrappers de composants sans besoin démontré; les consommateurs gardent leurs propres pages, comportements et règles métier.
- Les applications compatibles utilisent `UApp` à la racine. Le favicon fourni est remplaçable par `public/favicon.ico` dans un produit.
- Geist et Geist Mono sont locaux au paquet; ne pas réintroduire une dépendance aux Google Fonts pour le rendu normal.
- Ce paquet n’est pas l’identité métier de produits nécessitant un système sectoriel tel que DSFR; leurs besoins restent dans leurs dépôts.

## Stack et publication

- Nuxt 4, Vue 3, TypeScript, Nuxt UI 4, Tailwind CSS 4, Bun 1.4.x et Biome 2.
- Installer avec `bun install --frozen-lockfile`. `bun run check` exécute lint, typecheck, build du playground et vérification du paquet.
- Vérifier la compatibilité et le lockfile de chaque consommateur avant de modifier une API du Layer ou de monter la version publiée.
- Woodpecker publie le paquet npm `@wissem-industries/ui` dans GitHub Packages sur les tags versionnés. Garder son secret d’écriture uniquement dans la CI et le token de lecture dans la configuration utilisateur des consommateurs.
- Respecter les conventions communes de [`../Wissem's Industries/AGENTS.md`](../Wissem's%20Industries/AGENTS.md), notamment les images Alpine/Bun et l’encodage UTF-8 BOM pour les scripts PowerShell.
- Mettre à jour ce fichier automatiquement quand Wissem formule une règle durable de design system; reporter les règles transverses au dépôt central.
