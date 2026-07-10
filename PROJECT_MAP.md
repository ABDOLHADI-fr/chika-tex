# CHIKA TEX — Site Vitrine (Catalogue + Blog)

> **Date:** 2026-07-06 | **Dernière mise à jour:** 2026-07-06
> **Client:** CHIKA TEX — حي قرقينطة, وهران, الجزائر
> **Langue cible:** Français (site) + Arabe (blogs SEO)
> **Type:** Static Site Generation (SSG) — brochure/catalogue + WhatsApp leads
> **Statut:** ✅ BUILD COMPLETE — 0 erreurs

---

## [TECH_STACK]

| Couche | Technologie | Version | Statut |
|--------|------------|---------|--------|
| Runtime | Node.js | **24.18.0 LTS** | ✅ Installé |
| Framework | Next.js | **16.2.10** | ✅ Stable |
| UI | React | **19.x** | ✅ Bundled |
| Langage | TypeScript | **5.x** | ✅ Strict |
| Styles | Tailwind CSS | **4.3.2** | ✅ CSS-first |
| i18n | next-intl | **4.13.1** | ✅ FR/AR |
| SEO | next/sitemap (built-in) | — | ✅ Sitemap + Robots |
| Images | sharp | latest | ✅ Optimisé |
| Déploiement | Prêt pour Vercel / static host | — | ⏳ En attente |

---

## [SYSTEM_FLOW] — Parcours Utilisateur

```
[Visiteur]
    │
    ├──► /fr/                    Accueil (Hero + Produits + Avis + Blog + CTA WhatsApp)
    ├──► /fr/produits            Grille produits (15 articles + filtre catégories)
    ├──► /fr/produits/[slug]     Fiche produit détail (image, prix, description, WhatsApp)
    ├──► /fr/a-propos            Histoire + Google Maps + Contact + Horaires
    ├──► /fr/avis                Témoignages clients (6 avis vérifiés)
    ├──► /fr/blog                Liste articles (10 blogs FR/AR)
    ├──► /fr/blog/[slug]         Article blog complet + tags + partage WhatsApp
    ├──► /ar/                    Version arabe du site
    ├──► /ar/blog/               Blog en arabe (2 articles)
    └──► WhatsApp (wa.me/213671770903) ── bouton flottant + chaque page + footer
```

### Éléments marketing (FOMO) — ✅ Implémentés
- **Bannière sticky** "🟢 Livraison dans toute l'Algérie" — TopBar
- **WhatsApp flottant** avec animation pulse + tooltip
- **Badge "Populaire"** sur fiches produits vedettes
- **CTA urgence** "Offre limitée!" + "Ne ratez pas nos offres"
- **Preuve sociale** — section "Des centaines de clients satisfaits"
- **Avis clients** avec badge "Achat vérifié"

---

## [ARCHITECTURE]

```
chika-tex/
├── public/
│   └── images/
│       ├── products/           ← Photos à remplacer par images réelles
│       ├── blog/               ← Photos à remplacer par images réelles
│       ├── logo.svg               ← Logo principal (aiguille + fil + texte)
│       ├── logo-icon.svg          ← Icône favicon
│       ├── placeholder-product.svg
│       └── placeholder-blog.svg
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── page.tsx           ← Accueil complet
│   │   │   ├── produits/page.tsx  ← Grille + filtres
│   │   │   ├── produits/[slug]/page.tsx ← Détail produit
│   │   │   ├── a-propos/page.tsx  ← À propos + Maps
│   │   │   ├── avis/page.tsx      ← Témoignages
│   │   │   ├── blog/page.tsx      ← Blog listing
│   │   │   ├── blog/[slug]/page.tsx ← Article complet
│   │   │   ├── layout.tsx         ← Layout global
│   │   │   └── not-found.tsx      ← 404
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/    ← Header, Footer, TopBar, WhatsAppFloat
│   │   ├── sections/  ← HeroSection, CTASection
│   │   └── ui/        ← Card, ProductGrid, BlogCard, TestimonialCard, etc.
│   ├── data/
│   │   ├── products.ts      ← 15 produits
│   │   ├── testimonials.ts  ← 6 avis
│   │   └── blog.ts          ← 10 articles (8 FR + 2 AR)
│   ├── i18n/
│   │   ├── routing.ts
│   │   ├── request.ts
│   │   └── messages/{fr,ar}.json
│   └── lib/
│       ├── logger.ts
│       └── utils.ts
├── middleware.ts
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── .gitignore
```

### Principes architecturaux appliqués
1. ✅ **SSG pur** — `generateStaticParams()` pour produits et blog
2. ✅ **Données statiques typées** — catalogue JSON, pas de CMS/DB
3. ✅ **Components colocalisés** — pas de séparation artificielle
4. ✅ **Pas de micro-files** — max 200 lignes par fichier
5. ✅ **Pas de couche API** — inutile pour site statique

---

## [STATUT DES MILESTONES]

| Milestone | Statut | Pages/Tâches |
|-----------|--------|-------------|
| **M1** Fondations | ✅ COMPLETE | Next.js 16 + TS + Tailwind v4 + next-intl + build OK |
| **M2** Navigation & Layout | ✅ COMPLETE | Header, Footer, TopBar, WhatsAppFloat, Mobile menu |
| **M3** Catalogue Produits | ✅ COMPLETE | 15 produits, grille, filtres, fiches détail |
| **M4** Pages Support | ✅ COMPLETE | À propos, Maps, Avis, Réseaux sociaux |
| **M5** SEO & Blog | ✅ COMPLETE | 10 articles, sitemap, metadata, hreflang, JSON-LD |
| **M6** Performance & Finalisation | ✅ COMPLETE | Build 0 erreurs, 39 pages, 30s compile |

---

## [ORPHANS & PENDING]

| # | Élément | Statut | Action requise |
|---|--------|--------|---------------|
| 1 | **Photos produits réelles** (15 produits) | ❓ Placeholder SVG | Client doit fournir ou remplacer dans `public/images/products/` |
| 2 | **Photos blog réelles** (10 articles) | ❓ Placeholder SVG | Client doit fournir ou remplacer dans `public/images/blog/` |
| 3 | **Logo CHIKA TEX** | ✅ SVG placeholder (aiguille + fil) | Remplacer `public/images/logo.svg` par le fichier client pour personnaliser |
| 4 | **Nom de domaine** (ex: chikatex.dz) | ❓ Non défini | À acheter et configurer DNS |
| 5 | **Hébergement** | ❓ Non défini | Vercel recommandé (gratuit) |
| 6 | **Google Business** | ✅ Existe | Lié dans Google Maps embed |
| 7 | **Couleurs de marque** | ✅ Rose (#db2777) | Défini dans globals.css |
| 8 | **Contenu réel des produits** (prix, descriptions) | ✅ Exemple | Client doit valider/vérifier |
