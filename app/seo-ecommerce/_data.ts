import { ClusterConfig, Article } from '@/types';

const pillarPage: Article = {
  slug: 'index',
  title: 'SEO E-commerce : Guide Complet pour les Boutiques en Ligne',
  metaTitle: 'SEO E-commerce - Guide 2026',
  metaDescription: 'Maîtrisez le SEO e-commerce : optimisation produits, catégories, pages de conversion. Augmentez le trafic et les ventes de votre boutique.',
  keyword: 'seo ecommerce',
  secondaryKeywords: ['référencement boutique en ligne', 'seo shopify', 'optimisation e-commerce'],
  intent: 'info',
  cluster: 'seo-ecommerce',
  excerpt: 'Le SEO e-commerce a ses propres règles. Fiches produits, catégories, duplicate content : découvrez comment optimiser votre boutique en ligne.',
  tableOfContents: true,
  readingTime: 42,
  difficulty: 'intermediaire',
  lastUpdated: '2026-01-31',
  author: 'thomas-dupont',
  relatedSlugs: ['fiches-produits', 'pages-categories'],
  faq: [
    {
      question: 'Le SEO fonctionne-t-il pour toutes les plateformes e-commerce ?',
      answer: 'Oui, mais certaines sont plus SEO-friendly. Shopify et WooCommerce offrent de bonnes bases. Magento et PrestaShop demandent plus de configuration.',
    },
    {
      question: 'Combien de temps pour voir des résultats SEO en e-commerce ?',
      answer: 'Généralement 3-6 mois pour les premiers résultats, 6-12 mois pour un impact significatif. Les sites établis progressent plus vite.',
    },
  ],
  content: [
    {
      type: 'text',
      content: 'Le e-commerce représente plus de 20% des recherches Google avec une intention d\'achat directe. Si vos produits ne sont pas visibles sur les moteurs de recherche, vous laissez de l\'argent sur la table - beaucoup d\'argent. Le SEO e-commerce a ses propres règles : gestion de milliers de pages, duplicate content, données structurées produit, optimisation pour la conversion. Cette formation complète vous enseigne comment transformer votre boutique en ligne en machine à générer du trafic organique qualifié.',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Ce que vous allez apprendre',
        content: '• Comprendre les spécificités du SEO e-commerce vs SEO classique\\n• Architecturer votre site pour le crawl et l\'indexation\\n• Optimiser vos fiches produits pour ranker ET convertir\\n• Exploiter le potentiel SEO des pages catégories\\n• Implémenter les données structurées e-commerce\\n• Gérer les problèmes courants (duplicate, stock, pagination)',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Spécificités du SEO e-commerce',
    },
    {
      type: 'text',
      content: 'Le SEO e-commerce diffère fondamentalement du SEO de sites vitrines ou éditoriaux. Comprendre ces différences est essentiel pour prioriser vos efforts.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Les 6 défis uniques du SEO e-commerce',
    },
    {
      type: 'table',
      content: {
        headers: ['Défi', 'Impact', 'Solution préventive'],
        rows: [
          ['Volume de pages', 'Crawl budget limité, dilution', 'Architecture claire, priorités'],
          ['Duplicate content', 'Pénalités, cannibalisation', 'Canonicals, contenu unique'],
          ['Variantes produits', 'Duplication massive', 'Stratégie de canonicalisation'],
          ['Produits épuisés', 'Erreurs 404, perte de SEO', 'Process de gestion des URLs'],
          ['Contenu mince', 'Pages faibles, pas de ranking', 'Descriptions enrichies'],
          ['Concurrence féroce', 'Difficile de se démarquer', 'Différenciation contenu'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'L\'intent transactionnel : votre avantage',
    },
    {
      type: 'text',
      content: 'L\'avantage du e-commerce : les visiteurs ont une intention d\'achat. Un visiteur qui cherche "acheter iPhone 16 Pro" est bien plus proche de la conversion qu\'un visiteur sur un article de blog. Cela signifie que chaque position gagnée a un ROI direct et mesurable.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Architecture SEO d\'un site e-commerce',
    },
    {
      type: 'text',
      content: 'L\'architecture est le fondement de votre SEO e-commerce. Une mauvaise structure peut ruiner tous vos efforts d\'optimisation.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'La règle des 3 clics',
    },
    {
      type: 'text',
      content: 'Chaque produit doit être accessible en 3 clics maximum depuis la page d\'accueil. Cela garantit que le crawl budget est bien utilisé et que l\'autorité se transmet efficacement.',
    },
    {
      type: 'code',
      content: {
        language: 'text',
        code: `Accueil (clic 1)
└── Catégorie principale (clic 2)
    └── Sous-catégorie (clic 3)
        └── Produit (accessible)

Exemple concret :
Accueil → Vêtements Homme → T-shirts → T-shirt Nike Dri-FIT`,
        filename: 'structure-3-clics.txt',
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Structure d\'URLs optimale',
    },
    {
      type: 'text',
      content: 'Les URLs doivent être lisibles, descriptives et refléter la hiérarchie du site.',
    },
    {
      type: 'table',
      content: {
        headers: ['Type', 'Bonne URL', 'Mauvaise URL'],
        rows: [
          ['Catégorie', '/vetements-homme/', '/cat.php?id=15'],
          ['Sous-catégorie', '/vetements-homme/t-shirts/', '/cat.php?id=15&sub=23'],
          ['Produit', '/vetements-homme/t-shirts/nike-dri-fit-noir', '/product?id=4521'],
          ['Avec variante', '/nike-dri-fit-noir?taille=M (paramètre)', '/nike-dri-fit-noir-taille-m (page séparée)'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Faceted navigation et filtres',
    },
    {
      type: 'text',
      content: 'Les filtres (taille, couleur, prix, marque) créent des milliers de combinaisons d\'URLs. Sans gestion, cela explose votre crawl budget et crée du duplicate content.',
    },
    {
      type: 'list',
      content: [
        'Option 1 : Filtres en JavaScript (pas de nouvelles URLs)',
        'Option 2 : Noindex sur toutes les pages filtrées',
        'Option 3 : Canonical vers la catégorie parent',
        'Option 4 : Robots.txt pour bloquer les patterns de filtres',
        'Déclaration des paramètres dans Google Search Console',
      ],
    },
    {
      type: 'infobox',
      content: {
        type: 'warning',
        title: 'Attention aux filtres indexés',
        content: 'Un site avec 100 produits et 10 filtres à 5 valeurs chacun peut générer des millions de combinaisons d\'URLs. Googlebot peut passer des mois à crawler ces pages inutiles au lieu de vos vraies pages.',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Optimisation des fiches produits',
    },
    {
      type: 'text',
      content: 'Les fiches produits sont le cœur de votre e-commerce. Elles doivent accomplir deux missions : ranker sur Google ET convertir les visiteurs.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Title et meta description produit',
    },
    {
      type: 'text',
      content: 'Le title doit être unique pour chaque produit et inclure les éléments clés de recherche.',
    },
    {
      type: 'text',
      content: 'Formule recommandée : [Marque] [Nom produit] [Attribut clé] | [Nom boutique]',
    },
    {
      type: 'list',
      content: [
        'Exemple : "Nike Air Max 90 Blanc - Sneakers Homme | ShoeStore"',
          'Longueur : 50-60 caractères',
          'Mot-clé principal au début',
          'Attribut différenciant (couleur, taille, usage)',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Description produit unique',
    },
    {
      type: 'text',
      content: 'C\'est LE point faible de 90% des e-commerces. La plupart utilisent les descriptions fournisseur, créant du duplicate content massif.',
    },
    {
      type: 'table',
      content: {
        headers: ['Élément', 'Contenu', 'Longueur'],
        rows: [
          ['Accroche', 'Bénéfice principal en 1 phrase', '20-30 mots'],
          ['Caractéristiques', 'Liste des specs importantes', '5-10 bullets'],
          ['Description détaillée', 'Usage, matériaux, entretien', '100-150 mots'],
          ['Pourquoi ce produit', 'Arguments différenciants', '50-100 mots'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Images optimisées',
    },
    {
      type: 'list',
      content: [
        'Plusieurs angles (face, dos, profil, détails)',
        'Images en contexte (produit porté/utilisé)',
        'Zoom haute résolution disponible',
        'Alt text descriptif avec mot-clé : "nike-air-max-90-blanc-homme-profil"',
        'Compression WebP pour la performance',
        'Lazy loading pour le temps de chargement',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Schema Product',
    },
    {
      type: 'text',
      content: 'Le schema Product est indispensable pour les rich snippets e-commerce (prix, disponibilité, avis dans les résultats).',
    },
    {
      type: 'code',
      content: {
        language: 'json',
        code: `{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Nike Air Max 90 Blanc",
  "image": "https://example.com/images/nike-air-max-90-blanc.jpg",
  "description": "Sneakers Nike Air Max 90 pour homme, coloris blanc.",
  "brand": {
    "@type": "Brand",
    "name": "Nike"
  },
  "offers": {
    "@type": "Offer",
    "price": "149.99",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2026-12-31"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "124"
  }
}`,
        filename: 'schema-product.json',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Optimisation des pages catégories',
    },
    {
      type: 'text',
      content: 'Les pages catégories sont souvent négligées alors qu\'elles peuvent ranker sur des mots-clés génériques à fort volume ("chaussures homme", "télévisions 4K").',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Contenu textuel de catégorie',
    },
    {
      type: 'text',
      content: 'Ajoutez du contenu textuel unique sur chaque catégorie. Deux options de placement :',
    },
    {
      type: 'list',
      content: [
        'En haut (150-200 mots) : visible immédiatement, bon pour le SEO',
        'En bas (300-500 mots) : n\'interfère pas avec les produits, plus de contenu',
        'Combinaison : intro courte en haut + développement en bas',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Maillage interne catégories',
    },
    {
      type: 'text',
      content: 'Chaque catégorie doit lier vers ses sous-catégories et vers quelques produits phares. Les breadcrumbs renforcent cette structure.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Gestion des problèmes e-commerce courants',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Duplicate content et variantes',
    },
    {
      type: 'text',
      content: 'Un même produit en 5 couleurs et 6 tailles = 30 URLs potentiellement dupliquées. Solutions :',
    },
    {
      type: 'table',
      content: {
        headers: ['Approche', 'Quand l\'utiliser', 'Implémentation'],
        rows: [
          ['Canonical vers parent', 'Variantes mineures (taille, couleur)', 'rel="canonical" vers le produit principal'],
          ['Pages séparées', 'Variantes très différentes (modèles)', 'Chaque variante = page unique optimisée'],
          ['Paramètres URL', 'Sélection dynamique', '?taille=M&couleur=noir + canonical'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Produits épuisés ou supprimés',
    },
    {
      type: 'text',
      content: 'Ne supprimez jamais une page produit sans réfléchir. Elle peut avoir des backlinks et du ranking. Options :',
    },
    {
      type: 'list',
      content: [
        'Rupture temporaire : garder la page, indiquer "Rupture", proposer alternatives',
        'Produit remplacé : redirection 301 vers le nouveau modèle',
        'Gamme supprimée : redirection 301 vers la catégorie parent',
        'Jamais de retour : 410 Gone après quelques mois (pas 404 immédiat)',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pagination des catégories',
    },
    {
      type: 'text',
      content: 'Les catégories avec beaucoup de produits nécessitent une pagination correcte :',
    },
    {
      type: 'list',
      content: [
        'Ne pas mettre noindex sur les pages paginées',
        'Liens prev/next si supportés par votre CMS',
        'Chaque page paginée doit être crawlable',
        'Option "Voir tout" si le nombre de produits est raisonnable (<100)',
      ],
    },
    // Études de cas
    {
      type: 'heading',
      level: 2,
      content: 'Étude de cas #1 : E-commerce mode qui triple son trafic organique',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Contexte',
        content: 'FashionStore, e-commerce de vêtements femme. 3 000 références sur PrestaShop. Trafic SEO stagnant à 15 000 visites/mois depuis 2 ans.',
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Problématique identifiée',
    },
    {
      type: 'list',
      content: [
        '95% des descriptions produits = copié-collé fournisseur',
        'Pas de schema Product (aucun rich snippet)',
        'Filtres tous indexés (500 000 URLs générées)',
        'Pages catégories sans contenu textuel',
        'Pas de stratégie sur les produits épuisés (404 systématiques)',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Solution déployée',
    },
    {
      type: 'text',
      content: 'Plan d\'optimisation sur 6 mois :',
    },
    {
      type: 'text',
      content: 'Mois 1-2 : Réécriture des descriptions des 200 produits best-sellers. Implémentation du schema Product sur l\'ensemble du catalogue. Ajout des prix, disponibilité, avis.',
    },
    {
      type: 'text',
      content: 'Mois 3-4 : Nettoyage des filtres : noindex sur toutes les pages filtrées. Déclaration des paramètres dans GSC. Réduction de 500K à 5K URLs indexées.',
    },
    {
      type: 'text',
      content: 'Mois 5-6 : Rédaction de contenu pour les 50 catégories principales (200-400 mots chacune). Mise en place du process pour les produits épuisés.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Résultats obtenus',
    },
    {
      type: 'table',
      content: {
        headers: ['Métrique', 'Avant', 'Après 6 mois', 'Évolution'],
        rows: [
          ['Trafic SEO mensuel', '15 000', '48 000', '+220%'],
          ['Pages avec rich snippets', '0', '2 800', '+2 800'],
          ['URLs indexées', '500 000', '5 200', '-99%'],
          ['Position moyenne', '32', '14', '+18 places'],
          ['CA attribuable SEO', '~45K€/mois', '~142K€/mois', '+215%'],
        ],
      },
    },
    // Étude de cas 2
    {
      type: 'heading',
      level: 2,
      content: 'Étude de cas #2 : Site high-tech qui domine les requêtes produits',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Contexte',
        content: 'TechShop, e-commerce high-tech avec 1 500 références. Concurrence féroce (Amazon, Fnac, Boulanger). Objectif : se positionner sur les requêtes produits spécifiques.',
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Problématique identifiée',
    },
    {
      type: 'list',
      content: [
        'Impossible de concurrencer sur "téléphone" ou "ordinateur"',
        'Fiches produits identiques aux concurrents',
        'Pas de contenu différenciant',
        'Pas de stratégie long tail',
        'Aucune exploitation des recherches de modèles spécifiques',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Solution déployée',
    },
    {
      type: 'text',
      content: 'Stratégie de contenu différenciant sur 8 mois :',
    },
    {
      type: 'text',
      content: 'Mois 1-3 : Identification des 300 produits avec le plus de recherches de modèle exact ("iPhone 16 Pro 256Go", "Samsung Galaxy S26 Ultra"). Création de fiches ultra-détaillées avec tests maison, comparatifs, FAQ.',
    },
    {
      type: 'text',
      content: 'Mois 4-6 : Ajout de contenu UGC enrichi : questions-réponses, guides d\'achat par usage, comparateurs intégrés aux fiches.',
    },
    {
      type: 'text',
      content: 'Mois 7-8 : Création de pages "guide" transverses ("Meilleur smartphone photo 2026", "Comparatif PC gaming 1500€"). Maillage vers les fiches produits.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Résultats obtenus',
    },
    {
      type: 'table',
      content: {
        headers: ['Métrique', 'Avant', 'Après 8 mois', 'Évolution'],
        rows: [
          ['Trafic requêtes modèle exact', '~2 000/mois', '~35 000/mois', '+1 650%'],
          ['Position moy. requêtes produit', '28', '6', '+22 places'],
          ['Fiches en page 1', '45', '280', '+522%'],
          ['Taux de conversion SEO', '1.8%', '3.2%', '+78%'],
          ['CA SEO mensuel', '~80K€', '~380K€', '+375%'],
        ],
      },
    },
    // Étude de cas 3
    {
      type: 'heading',
      level: 2,
      content: 'Étude de cas #3 : Marketplace qui résout ses problèmes de duplicate',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Contexte',
        content: 'ArtisanMarket, marketplace de produits artisanaux. 8 000 vendeurs, 120 000 produits. Problèmes majeurs de duplicate content et d\'indexation.',
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Problématique identifiée',
    },
    {
      type: 'list',
      content: [
        'Même produit vendu par plusieurs vendeurs = pages dupliquées',
        '2.5 millions d\'URLs indexées (vs 120K produits réels)',
        'Descriptions identiques entre vendeurs',
        'Pénalité algorithmique Panda suspectée',
        'Trafic SEO en chute de 40% sur 12 mois',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Solution déployée',
    },
    {
      type: 'text',
      content: 'Restructuration complète sur 6 mois :',
    },
    {
      type: 'text',
      content: 'Mois 1-2 : Création de "pages produit maîtres" uniques. Regroupement des offres vendeurs sur une seule page (comme Amazon). Canonicals des pages vendeurs vers la page maître.',
    },
    {
      type: 'text',
      content: 'Mois 3-4 : Purge des URLs dupliquées via 301 massives. Nouvelle sitemap avec uniquement les pages maîtres. Suppression de l\'ancien index dans GSC.',
    },
    {
      type: 'text',
      content: 'Mois 5-6 : Enrichissement des pages maîtres avec contenu agrégé (meilleure description, photos multiples, comparateur de prix vendeurs).',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Résultats obtenus',
    },
    {
      type: 'table',
      content: {
        headers: ['Métrique', 'Avant', 'Après 6 mois', 'Évolution'],
        rows: [
          ['URLs indexées', '2 500 000', '135 000', '-95%'],
          ['Crawl budget utilisé', '~15% sur pages utiles', '~92%', '+77 pts'],
          ['Trafic SEO mensuel', '120 000', '340 000', '+183%'],
          ['Pages en erreur GSC', '450 000', '~2 000', '-99.5%'],
          ['Position moyenne globale', '45', '18', '+27 places'],
        ],
      },
    },
    // Exercices
    {
      type: 'heading',
      level: 2,
      content: 'Exercices pratiques',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 1 : Audit SEO de votre e-commerce',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Objectif',
        content: 'Identifier les problèmes SEO prioritaires de votre boutique.',
      },
    },
    {
      type: 'list',
      content: [
        'Dans Google Search Console, vérifiez le nombre de pages indexées vs le nombre de produits réels',
        'Si le ratio est >2x, vous avez un problème de duplicate/filtres',
        'Vérifiez le rapport "Couverture" pour les erreurs et exclusions',
        'Testez 10 fiches produits au hasard avec Rich Results Test',
        'Notez les 5 problèmes les plus urgents à corriger',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 2 : Optimisation d\'une fiche produit',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Objectif',
        content: 'Réécrire une fiche produit pour le SEO et la conversion.',
      },
    },
    {
      type: 'list',
      content: [
        'Choisissez un de vos produits best-sellers',
        'Identifiez le mot-clé principal (ex: "nike air max 90 homme")',
        'Réécrivez le title avec la formule : Marque + Produit + Attribut | Boutique',
        'Réécrivez la description avec 200+ mots uniques (pas celle du fournisseur)',
        'Ajoutez le schema Product avec prix, dispo, avis',
        'Optimisez les alt des images',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 3 : Nettoyage des filtres',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Objectif',
        content: 'Résoudre les problèmes d\'indexation liés aux filtres.',
      },
    },
    {
      type: 'list',
      content: [
        'Listez tous les filtres disponibles sur votre site',
        'Dans GSC, recherchez les URLs avec ces paramètres de filtre',
        'Comptez le nombre de pages générées par les filtres',
        'Décidez de l\'approche : noindex, robots.txt, ou JS',
        'Implémentez la solution sur une catégorie test',
        'Vérifiez après 2 semaines que les pages ne sont plus indexées',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 4 : Création de contenu catégorie',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Objectif',
        content: 'Ajouter du contenu textuel à vos pages catégories.',
      },
    },
    {
      type: 'list',
      content: [
        'Identifiez vos 10 catégories avec le plus de trafic potentiel',
        'Pour chaque catégorie, identifiez le mot-clé cible',
        'Rédigez 200-300 mots d\'introduction : définition, types de produits, conseils d\'achat',
        'Intégrez le contenu en haut ou en bas de la page',
        'Ajoutez des liens vers les sous-catégories et guides d\'achat',
        'Mesurez l\'impact sur le ranking après 1 mois',
      ],
    },
    // Quiz
    {
      type: 'heading',
      level: 2,
      content: 'Quiz de validation',
    },
    {
      type: 'quiz',
      content: {
        title: 'Quiz : Maîtrise du SEO E-commerce',
        questions: [
          {
            question: 'Quelle est la règle fondamentale pour l\'architecture e-commerce ?',
            options: [
              'Chaque produit sur une URL unique',
              'Maximum 3 clics pour atteindre un produit',
              'Minimum 1000 mots par page',
              'Un sitemap par catégorie',
            ],
            correctIndex: 1,
            explanation: 'La règle des 3 clics garantit que le crawl budget est bien utilisé et que l\'autorité se transmet efficacement de la page d\'accueil vers les produits.',
          },
          {
            question: 'Pourquoi les filtres sont-ils un problème majeur en SEO e-commerce ?',
            options: [
              'Ils ralentissent le site',
              'Ils créent des milliers de combinaisons d\'URLs dupliquées',
              'Ils ne sont pas crawlables',
              'Google les pénalise automatiquement',
            ],
            correctIndex: 1,
            explanation: 'Les filtres peuvent générer des millions de combinaisons d\'URLs, diluant le crawl budget et créant du duplicate content massif.',
          },
          {
            question: 'Que faire avec un produit définitivement épuisé ?',
            options: [
              'Supprimer immédiatement la page (404)',
              'Laisser la page en ligne indéfiniment',
              'Redirection 301 vers le produit de remplacement ou la catégorie parent',
              'Mettre en noindex',
            ],
            correctIndex: 2,
            explanation: 'La redirection 301 préserve la valeur SEO de la page (backlinks, autorité) tout en offrant une bonne expérience utilisateur.',
          },
          {
            question: 'Quelle est l\'erreur la plus courante sur les fiches produits ?',
            options: [
              'Pas assez d\'images',
              'Prix non affiché',
              'Descriptions copiées du fournisseur (duplicate content)',
              'Pas de bouton d\'achat',
            ],
            correctIndex: 2,
            explanation: '90% des e-commerces utilisent les descriptions fournisseur, créant du duplicate content massif. Réécrire avec du contenu unique est prioritaire.',
          },
          {
            question: 'Quel schema est indispensable pour les fiches produits ?',
            options: [
              'Article',
              'Product',
              'WebPage',
              'Organization',
            ],
            correctIndex: 1,
            explanation: 'Le schema Product permet d\'afficher les rich snippets (prix, disponibilité, avis) dans les résultats Google, augmentant significativement le CTR.',
          },
          {
            question: 'Comment gérer les variantes de produits (taille, couleur) ?',
            options: [
              'Une page par variante, toutes indexées',
              'Canonical vers le produit principal, variantes en paramètres URL',
              'Supprimer les variantes du catalogue',
              'Rediriger toutes les variantes vers un seul produit',
            ],
            correctIndex: 1,
            explanation: 'La meilleure approche est de garder une page principale avec canonical, et de gérer les variantes via paramètres URL ou JavaScript.',
          },
          {
            question: 'Pourquoi ajouter du contenu texte sur les pages catégories ?',
            options: [
              'Pour augmenter le temps de chargement',
              'Pour ranker sur des mots-clés génériques à fort volume',
              'Pour respecter les guidelines Google',
              'Pour réduire le nombre de produits affichés',
            ],
            correctIndex: 1,
            explanation: 'Les pages catégories peuvent ranker sur des termes génériques ("chaussures homme", "télévisions 4K") si elles ont du contenu textuel unique.',
          },
          {
            question: 'Quelle longueur minimum pour une description produit unique ?',
            options: [
              '50 mots',
              '100 mots',
              '150-200 mots',
              '500 mots',
            ],
            correctIndex: 2,
            explanation: 'Une description de 150-200 mots minimum permet de couvrir les caractéristiques, bénéfices et usage, tout en se différenciant des concurrents.',
          },
          {
            question: 'Comment gérer la pagination des catégories ?',
            options: [
              'Mettre noindex sur toutes les pages après la première',
              'Laisser toutes les pages indexables avec liens prev/next',
              'Créer une page "voir tout" unique',
              'Limiter à 10 produits par catégorie',
            ],
            correctIndex: 1,
            explanation: 'Les pages paginées doivent rester indexables. Google a abandonné le support rel=prev/next mais les pages restent crawlables et indexables.',
          },
          {
            question: 'Quel est le principal avantage du SEO e-commerce vs SEO classique ?',
            options: [
              'Moins de concurrence',
              'Plus facile à optimiser',
              'Intent transactionnel = conversion directe = ROI mesurable',
              'Pas besoin de backlinks',
            ],
            correctIndex: 2,
            explanation: 'Les visiteurs e-commerce ont une intention d\'achat. Chaque position gagnée a un impact direct et mesurable sur le chiffre d\'affaires.',
          },
        ],
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Prochaines étapes',
    },
    {
      type: 'text',
      content: 'Vous maîtrisez maintenant les fondamentaux du SEO e-commerce. Pour approfondir, consultez nos guides détaillés sur l\'optimisation des fiches produits et des pages catégories.',
    },
    {
      type: 'cta',
      content: {
        title: 'Optimisez vos fiches produits',
        description: 'Découvrez les techniques avancées pour créer des fiches produits qui rankent ET convertissent.',
        buttonText: 'Voir le guide fiches produits',
        buttonLink: '/seo-ecommerce/fiches-produits',
        variant: 'primary',
      },
    },
    {
      type: 'text',
      content: 'Articles complémentaires recommandés :',
    },
    {
      type: 'list',
      content: [
        'Fiches produits SEO - Guide complet d\'optimisation',
        'Pages catégories e-commerce - SEO et UX',
      ],
    },
  ],
};

const childPages: Article[] = [
  {
    slug: 'fiches-produits',
    title: 'Fiches Produits SEO : Optimiser pour Convertir et Ranker',
    metaTitle: 'Fiche Produit SEO - Optimisation 2026',
    metaDescription: 'Créez des fiches produits optimisées pour le SEO et la conversion. Title, description, images, avis : le guide complet.',
    keyword: 'fiche produit seo',
    secondaryKeywords: ['optimiser page produit', 'description produit', 'product page seo'],
    intent: 'info',
    cluster: 'seo-ecommerce',
    excerpt: 'La fiche produit est au cœur du e-commerce. Une optimisation réussie booste le SEO et les conversions.',
    tableOfContents: true,
    readingTime: 32,
    difficulty: 'intermediaire',
    lastUpdated: '2026-01-29',
    author: 'marie-lefevre',
    relatedSlugs: ['pages-categories'],
    faq: [
      {
        question: 'Quelle longueur pour une description produit ?',
        answer: 'Au minimum 150-200 mots uniques. Plus si le produit est complexe. La description doit répondre aux questions du client et inclure naturellement les mots-clés.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'La fiche produit est le cœur de votre e-commerce. C\'est elle qui doit accomplir la mission impossible : ranker sur Google TOUT EN convertissant les visiteurs en acheteurs. Une fiche mal optimisée est invisible sur les moteurs de recherche. Une fiche trop SEO dégrade l\'expérience et tue les conversions. Cette formation vous enseigne comment créer des fiches produits qui excellent sur les deux tableaux.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Ce que vous allez apprendre',
          content: '• Structurer une fiche produit pour le SEO et la conversion\\n• Rédiger des titles et descriptions qui génèrent des clics\\n• Créer du contenu produit unique (pas celui du fournisseur)\\n• Optimiser les images pour Google Images et la performance\\n• Implémenter les données structurées Product\\n• Exploiter le contenu généré par les utilisateurs',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Anatomie d\'une fiche produit parfaite',
      },
      {
        type: 'text',
        content: 'Une fiche produit optimisée contient des éléments essentiels qui servent à la fois le SEO et la conversion.',
      },
      {
        type: 'table',
        content: {
          headers: ['Élément', 'Rôle SEO', 'Rôle Conversion', 'Priorité'],
          rows: [
            ['Title (H1)', 'Mot-clé principal, ranking', 'Clarté, confiance', 'Critique'],
            ['Images', 'Google Images, engagement', 'Visualisation produit', 'Critique'],
            ['Description', 'Mots-clés, contenu unique', 'Convaincre, rassurer', 'Très haute'],
            ['Prix + dispo', 'Rich snippets', 'Décision d\'achat', 'Très haute'],
            ['Avis clients', 'UGC, mots-clés naturels', 'Preuve sociale', 'Haute'],
            ['Caractéristiques', 'Mots-clés techniques', 'Specs détaillées', 'Haute'],
            ['Schema markup', 'Rich snippets, CTR', 'Indirect', 'Haute'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Title et Meta Description',
      },
      {
        type: 'heading',
        level: 3,
        content: 'La formule du title parfait',
      },
      {
        type: 'text',
        content: 'Le title doit inclure les éléments de recherche tout en restant cliquable.',
      },
      {
        type: 'text',
        content: 'Formule : [Marque] [Nom produit] [Attribut différenciant] | [Boutique]',
      },
      {
        type: 'table',
        content: {
          headers: ['Produit', 'Title optimisé', 'Caractères'],
          rows: [
            ['Sneakers Nike', 'Nike Air Max 90 Blanc - Sneakers Homme | ShoeStore', '52'],
            ['iPhone', 'iPhone 16 Pro 256Go Titane - Livraison 24h | TechShop', '54'],
            ['Crème visage', 'Crème Hydratante Bio Nuxe 50ml - Peau Sèche | Beauté+', '55'],
            ['TV Samsung', 'TV Samsung QLED 65" 4K - Smart TV 2026 | ElectroMax', '51'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Meta description qui convertit',
      },
      {
        type: 'text',
        content: 'La meta description n\'impacte pas le ranking mais influence le CTR. Elle doit :',
      },
      {
        type: 'list',
        content: [
          'Inclure le mot-clé (sera mis en gras dans les résultats)',
          'Mentionner un bénéfice ou une offre',
          'Créer de l\'urgence ou de la confiance',
          'Avoir un call-to-action implicite',
          'Rester sous 155 caractères',
        ],
      },
      {
        type: 'text',
        content: 'Exemple : "Nike Air Max 90 Blanc pour homme. Livraison gratuite dès 50€, retour 30 jours. Stock limité - Commandez maintenant !"',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Rédiger une description produit unique',
      },
      {
        type: 'text',
        content: 'La description est LE point faible de 90% des e-commerces. La plupart copient les descriptions fournisseurs, créant du duplicate content massif sur tout le web.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Pourquoi le contenu fournisseur est toxique',
      },
      {
        type: 'list',
        content: [
          'Même texte sur des centaines de sites = duplicate content',
          'Google ne sait pas quelle version privilégier',
          'Aucune différenciation avec les concurrents',
          'Contenu souvent technique et peu engageant',
          'Pas adapté à votre cible spécifique',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Template de description produit',
      },
      {
        type: 'table',
        content: {
          headers: ['Section', 'Contenu', 'Longueur'],
          rows: [
            ['Accroche', 'Bénéfice principal en 1 phrase percutante', '20-30 mots'],
            ['Caractéristiques clés', 'Les 5-7 specs les plus importantes (liste)', '30-50 mots'],
            ['Description détaillée', 'Matériaux, usage, conseils, entretien', '80-120 mots'],
            ['Pourquoi ce produit', 'Arguments uniques, différenciation', '30-50 mots'],
          ],
        },
      },
      {
        type: 'text',
        content: 'Total recommandé : 200-300 mots minimum pour les produits standards, plus pour les produits complexes.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exemple de description réécrite',
      },
      {
        type: 'text',
        content: 'Produit : Aspirateur robot',
      },
      {
        type: 'text',
        content: 'Description fournisseur (à éviter) : "Aspirateur robot avec navigation laser. Puissance 2500Pa. Autonomie 180 minutes. Compatible avec application mobile."',
      },
      {
        type: 'text',
        content: 'Description optimisée (à faire) : "Fini les corvées de ménage quotidiennes. Cet aspirateur robot à navigation laser cartographie votre intérieur et nettoie efficacement chaque recoin, même sous les meubles. Sa puissance de 2500Pa capture poils d\'animaux, poussières et particules fines. Lancez le nettoyage depuis votre smartphone où que vous soyez - l\'app vous envoie une notification quand c\'est terminé. Avec 180 minutes d\'autonomie, il couvre jusqu\'à 200m² sur une seule charge. Idéal pour les propriétaires d\'animaux et les grandes surfaces."',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Optimisation des images produit',
      },
      {
        type: 'text',
        content: 'Les images sont cruciales pour le SEO (Google Images génère 20-30% du trafic e-commerce) et la conversion (les visiteurs veulent voir le produit).',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Types d\'images nécessaires',
      },
      {
        type: 'list',
        content: [
          'Vue principale : face produit, fond neutre',
          'Angles multiples : dos, côté, dessus, dessous',
          'Détails : zoom sur les finitions, matériaux, logos',
          'Contexte : produit utilisé/porté/en situation',
          'Échelle : produit avec référence de taille',
          'Packaging : pour les cadeaux et le luxe',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Optimisation technique des images',
      },
      {
        type: 'table',
        content: {
          headers: ['Élément', 'Optimisation', 'Exemple'],
          rows: [
            ['Nom de fichier', 'Mot-clé descriptif', 'nike-air-max-90-blanc-homme.jpg'],
            ['Alt text', 'Description avec mot-clé', 'Sneakers Nike Air Max 90 blanc homme - vue de profil'],
            ['Format', 'WebP pour le web, JPEG fallback', 'image.webp avec srcset'],
            ['Compression', '80% qualité, <100Ko si possible', 'TinyPNG, Squoosh'],
            ['Dimensions', '1200px large pour zoom', 'Adapter selon le design'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Schema Product : les rich snippets',
      },
      {
        type: 'text',
        content: 'Le schema Product affiche prix, disponibilité et avis directement dans les résultats Google. C\'est indispensable pour le e-commerce.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Éléments obligatoires',
      },
      {
        type: 'list',
        content: [
          'name : nom du produit',
          'image : URL de l\'image principale',
          'offers.price : prix',
          'offers.priceCurrency : devise (EUR, USD)',
          'offers.availability : disponibilité (InStock, OutOfStock)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Éléments recommandés',
      },
      {
        type: 'list',
        content: [
          'brand : marque du produit',
          'description : description courte',
          'aggregateRating : note moyenne + nombre d\'avis',
          'review : avis détaillés',
          'sku : référence produit',
          'gtin : code-barres (EAN, UPC)',
        ],
      },
      {
        type: 'code',
        content: {
          language: 'json',
          code: `{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Nike Air Max 90 Blanc Homme",
  "image": "https://shop.com/images/nike-air-max-90.jpg",
  "description": "Sneakers Nike Air Max 90 pour homme, coloris blanc.",
  "brand": {"@type": "Brand", "name": "Nike"},
  "sku": "NIKE-AM90-WHT",
  "gtin13": "0194501234567",
  "offers": {
    "@type": "Offer",
    "price": "149.99",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2026-12-31",
    "url": "https://shop.com/nike-air-max-90-blanc"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "124"
  }
}`,
          filename: 'schema-product-complete.json',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'User Generated Content (UGC)',
      },
      {
        type: 'text',
        content: 'Les avis clients sont une mine d\'or pour le SEO : contenu unique, mots-clés naturels, mise à jour régulière. Plus il y a d\'avis, plus la page se différencie.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Pourquoi les avis boostent le SEO',
      },
      {
        type: 'list',
        content: [
          'Contenu unique généré par les utilisateurs',
          'Mots-clés naturels (langage client, pas marketing)',
          'Mise à jour régulière sans effort',
          'Signal de confiance pour Google',
          'Réponses aux questions que se posent les acheteurs',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Questions-Réponses (Q&A)',
      },
      {
        type: 'text',
        content: 'Comme Amazon, permettez aux utilisateurs de poser des questions sur les produits. Cela génère du contenu et cible les requêtes long tail.',
      },
      // Études de cas
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas #1 : E-commerce bijoux qui réécrit ses descriptions',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'BijouxChic, e-commerce de bijoux fantaisie. 800 références. 100% des descriptions copiées des fournisseurs.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Problématique identifiée',
      },
      {
        type: 'list',
        content: [
          'Descriptions identiques sur 50+ sites concurrents',
          'Aucune fiche produit en page 1',
          'Trafic SEO quasi nul sur les pages produits',
          'Pas de rich snippets (schema absent)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution déployée',
      },
      {
        type: 'text',
        content: 'Réécriture complète sur 3 mois :',
      },
      {
        type: 'text',
        content: 'Mois 1 : Formation équipe + création template de description. Réécriture des 100 produits best-sellers avec 250+ mots uniques chacun.',
      },
      {
        type: 'text',
        content: 'Mois 2 : Implémentation schema Product sur tout le catalogue. Ajout des images supplémentaires (porté, détail, packaging).',
      },
      {
        type: 'text',
        content: 'Mois 3 : Réécriture des 200 produits suivants. Mise en place d\'un process pour les nouveaux produits.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats obtenus',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après 4 mois', 'Évolution'],
          rows: [
            ['Trafic pages produits', '~500/mois', '~8 500/mois', '+1 600%'],
            ['Produits en page 1', '0', '85', '+85'],
            ['Rich snippets actifs', '0', '750', '+750'],
            ['Position moyenne produits', '42', '15', '+27 places'],
            ['CA attribuable SEO produits', '~2K€/mois', '~28K€/mois', '+1 300%'],
          ],
        },
      },
      // Étude de cas 2
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas #2 : Site high-tech qui optimise ses images',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'GadgetZone, e-commerce high-tech. 2 000 références. Images fournisseur non optimisées.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Problématique identifiée',
      },
      {
        type: 'list',
        content: [
          'Images nommées "IMG_1234.jpg"',
          'Pas d\'alt text sur 95% des images',
          'Images trop lourdes (2-5Mo), site lent',
          'Aucune présence dans Google Images',
          'Taux de rebond élevé sur mobile',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution déployée',
      },
      {
        type: 'text',
        content: 'Optimisation images en 2 mois :',
      },
      {
        type: 'text',
        content: 'Mois 1 : Script de renommage massif des fichiers (marque-produit-attribut.jpg). Compression automatique (WebP + JPEG fallback). Lazy loading implémenté.',
      },
      {
        type: 'text',
        content: 'Mois 2 : Génération automatique des alt text via template. Ajout d\'images contextuelles pour les 200 top produits.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats obtenus',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après 3 mois', 'Évolution'],
          rows: [
            ['Trafic Google Images', '~300/mois', '~12 000/mois', '+3 900%'],
            ['Temps chargement mobile', '8.2s', '2.1s', '-74%'],
            ['Core Web Vitals (LCP)', 'Échec', 'Réussi', '✓'],
            ['Taux de rebond mobile', '68%', '42%', '-26 pts'],
            ['Conversions depuis Images', '~8/mois', '~180/mois', '+2 150%'],
          ],
        },
      },
      // Étude de cas 3
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas #3 : Mode qui exploite les avis clients',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'StylePlus, e-commerce mode femme. 1 500 références. Système d\'avis en place mais sous-exploité.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Problématique identifiée',
      },
      {
        type: 'list',
        content: [
          '8 000 avis collectés mais non exploités SEO',
          'Avis en JavaScript (non crawlables)',
          'Pas de schema Review',
          'Questions clients non traitées',
          'Descriptions courtes (50-80 mots)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution déployée',
      },
      {
        type: 'text',
        content: 'Exploitation UGC sur 4 mois :',
      },
      {
        type: 'text',
        content: 'Mois 1-2 : Migration des avis en HTML crawlable. Implémentation schema Review pour chaque avis. Ajout de l\'aggregateRating au schema Product.',
      },
      {
        type: 'text',
        content: 'Mois 3-4 : Lancement du module Q&A. Enrichissement des descriptions avec les mots-clés extraits des avis. Campagne de collecte d\'avis intensive.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats obtenus',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après 4 mois', 'Évolution'],
          rows: [
            ['Rich snippets avec étoiles', '0', '1 200', '+1 200'],
            ['CTR résultats Google', '2.1%', '4.8%', '+129%'],
            ['Contenu crawlable/produit', '~80 mots', '~400 mots (avec avis)', '+400%'],
            ['Questions répondues', '0', '2 500', '+2 500'],
            ['Trafic SEO produits', '~15K/mois', '~45K/mois', '+200%'],
          ],
        },
      },
      // Exercices
      {
        type: 'heading',
        level: 2,
        content: 'Exercices pratiques',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 1 : Audit de vos fiches produits',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Évaluer la qualité SEO de vos fiches produits actuelles.',
        },
      },
      {
        type: 'list',
        content: [
          'Sélectionnez 10 fiches produits au hasard',
          'Pour chaque fiche, notez sur 10 : title (unique, mot-clé), description (longueur, unicité), images (nombre, alt), schema (présence)',
          'Calculez le score moyen',
          'Identifiez les 3 faiblesses récurrentes',
          'Définissez un plan d\'action prioritaire',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Réécriture de description',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Transformer une description fournisseur en contenu unique.',
        },
      },
      {
        type: 'list',
        content: [
          'Choisissez un produit avec description fournisseur',
          'Identifiez le mot-clé principal + 3 secondaires',
          'Rédigez une nouvelle description avec le template : accroche + caractéristiques + détails + pourquoi',
          'Visez 250+ mots uniques',
          'Vérifiez avec un outil de plagiat que le contenu est bien unique',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Optimisation images',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Optimiser les images d\'une fiche produit.',
        },
      },
      {
        type: 'list',
        content: [
          'Choisissez un produit avec images non optimisées',
          'Renommez les fichiers : marque-produit-attribut.jpg',
          'Compressez en WebP (cible <100Ko)',
          'Rédigez des alt text descriptifs avec mots-clés',
          'Ajoutez une image en contexte si absente',
          'Testez la page avec Lighthouse (performance images)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Implémentation schema Product',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Ajouter le schema Product complet à une fiche.',
        },
      },
      {
        type: 'list',
        content: [
          'Choisissez un produit sans schema markup',
          'Créez le JSON-LD avec : name, image, description, brand, offers (price, currency, availability)',
          'Ajoutez aggregateRating si le produit a des avis',
          'Intégrez dans le <head> de la page',
          'Testez avec Google Rich Results Test',
          'Vérifiez après quelques jours dans Search Console',
        ],
      },
      // Quiz
      {
        type: 'heading',
        level: 2,
        content: 'Quiz de validation',
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Fiches Produits SEO',
          questions: [
            {
              question: 'Quelle est la formule recommandée pour un title produit ?',
              options: [
                '[Boutique] - [Produit]',
                '[Marque] [Produit] [Attribut] | [Boutique]',
                '[Produit] à acheter',
                '[Catégorie] : [Produit]',
              ],
              correctIndex: 1,
              explanation: 'La formule [Marque] [Produit] [Attribut] | [Boutique] inclut les éléments de recherche prioritaires et permet de se différencier.',
            },
            {
              question: 'Pourquoi éviter les descriptions fournisseurs ?',
              options: [
                'Elles sont trop longues',
                'Elles créent du duplicate content massif sur le web',
                'Elles ne sont pas en français',
                'Google les interdit',
              ],
              correctIndex: 1,
              explanation: 'Les mêmes descriptions sont utilisées par des dizaines de sites, créant du duplicate content. Google ne sait pas quelle version privilégier.',
            },
            {
              question: 'Quelle longueur minimum pour une description produit unique ?',
              options: [
                '50-100 mots',
                '100-150 mots',
                '200-300 mots',
                '500+ mots',
              ],
              correctIndex: 2,
              explanation: '200-300 mots minimum permettent de couvrir accroche, caractéristiques, détails et différenciation. Plus pour les produits complexes.',
            },
            {
              question: 'Quel format de nom de fichier image est optimal ?',
              options: [
                'IMG_1234.jpg',
                'product-123.jpg',
                'nike-air-max-90-blanc-homme.jpg',
                'image_produit_final_v2.jpg',
              ],
              correctIndex: 2,
              explanation: 'Le nom doit être descriptif avec les mots-clés : marque-produit-attributs, séparés par des tirets.',
            },
            {
              question: 'Quel élément du schema Product influence le plus le CTR ?',
              options: [
                'name',
                'description',
                'aggregateRating (étoiles)',
                'brand',
              ],
              correctIndex: 2,
              explanation: 'Les étoiles (aggregateRating) attirent l\'œil et augmentent significativement le CTR. Les résultats avec étoiles ont un CTR 20-30% supérieur.',
            },
            {
              question: 'Pourquoi les avis clients boostent-ils le SEO ?',
              options: [
                'Google aime les avis',
                'Ils génèrent du contenu unique avec des mots-clés naturels',
                'Ils accélèrent le site',
                'Ils créent des backlinks',
              ],
              correctIndex: 1,
              explanation: 'Les avis créent du contenu unique généré par les utilisateurs, avec un langage naturel et des mots-clés que les marketeurs n\'auraient pas pensé à utiliser.',
            },
            {
              question: 'Quel format d\'image privilégier pour le web ?',
              options: [
                'PNG',
                'JPEG',
                'WebP avec fallback JPEG',
                'GIF',
              ],
              correctIndex: 2,
              explanation: 'WebP offre une compression supérieure à JPEG/PNG. Le fallback JPEG assure la compatibilité avec les anciens navigateurs.',
            },
            {
              question: 'Que doit contenir l\'alt text d\'une image produit ?',
              options: [
                'Juste "image produit"',
                'Le nom du fichier',
                'Une description avec le mot-clé et les attributs visibles',
                'Rien, c\'est optionnel',
              ],
              correctIndex: 2,
              explanation: 'L\'alt text doit décrire ce qui est visible avec le mot-clé intégré naturellement. Ex: "Sneakers Nike Air Max 90 blanc homme - vue de profil".',
            },
            {
              question: 'Quel élément schema Product est obligatoire pour les rich snippets prix ?',
              options: [
                'brand',
                'offers.price + offers.priceCurrency',
                'aggregateRating',
                'description',
              ],
              correctIndex: 1,
              explanation: 'Pour afficher le prix dans les résultats, offers.price et offers.priceCurrency sont obligatoires, ainsi que offers.availability.',
            },
            {
              question: 'Quel type de contenu UGC a le plus d\'impact SEO ?',
              options: [
                'Les partages sociaux',
                'Les questions-réponses et avis détaillés',
                'Les likes',
                'Les photos utilisateurs uniquement',
              ],
              correctIndex: 1,
              explanation: 'Les Q&A et avis détaillés génèrent du contenu textuel unique, indexable, et ciblent les requêtes long tail que les acheteurs posent.',
            },
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Prochaines étapes',
      },
      {
        type: 'text',
        content: 'Vos fiches produits optimisées, découvrez comment exploiter le potentiel SEO de vos pages catégories.',
      },
      {
        type: 'cta',
        content: {
          title: 'Optimisez vos pages catégories',
          description: 'Apprenez à transformer vos pages catégories en machines à trafic.',
          buttonText: 'Voir le guide catégories',
          buttonLink: '/seo-ecommerce/pages-categories',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'pages-categories',
    title: 'Pages Catégories E-commerce : SEO et UX',
    metaTitle: 'Page Catégorie SEO E-commerce 2026',
    metaDescription: 'Optimisez vos pages catégories pour le SEO : contenu, maillage, filtres. Améliorez le ranking et l\'expérience utilisateur.',
    keyword: 'page catégorie seo',
    secondaryKeywords: ['catégorie e-commerce', 'seo catégorie produits', 'optimiser catégorie'],
    intent: 'info',
    cluster: 'seo-ecommerce',
    excerpt: 'Les pages catégories sont souvent négligées alors qu\'elles peuvent ranker sur des mots-clés à fort volume.',
    tableOfContents: true,
    readingTime: 30,
    difficulty: 'intermediaire',
    lastUpdated: '2026-01-27',
    author: 'thomas-dupont',
    relatedSlugs: ['fiches-produits'],
    faq: [
      {
        question: 'Faut-il du contenu texte sur les pages catégories ?',
        answer: 'Oui, un texte d\'introduction de 150-300 mots aide au ranking. Placez-le en haut ou en bas de page selon votre design.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Les pages catégories sont les grandes oubliées du SEO e-commerce. La plupart des boutiques les laissent vides, avec juste une grille de produits. Pourtant, ces pages peuvent ranker sur des mots-clés génériques à fort volume comme "chaussures homme" ou "télévisions 4K" - des requêtes qui génèrent des milliers de recherches quotidiennes. Cette formation vous enseigne comment transformer vos pages catégories en machines à trafic organique.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Ce que vous allez apprendre',
          content: '• Structurer une page catégorie pour le SEO et l\'UX\\n• Rédiger du contenu optimisé pour les pages catégories\\n• Gérer les filtres sans exploser votre crawl budget\\n• Implémenter une pagination correcte\\n• Exploiter les sous-catégories stratégiquement\\n• Éviter les pièges courants (duplicate, cannibalisation)',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Pourquoi les pages catégories sont sous-exploitées',
      },
      {
        type: 'text',
        content: 'La plupart des e-commerçants concentrent leurs efforts SEO sur les fiches produits. C\'est une erreur. Les pages catégories ont un potentiel énorme.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'L\'avantage des pages catégories',
      },
      {
        type: 'table',
        content: {
          headers: ['Aspect', 'Fiche produit', 'Page catégorie'],
          rows: [
            ['Volume de recherche', 'Spécifique (500-5K/mois)', 'Générique (10K-100K/mois)'],
            ['Concurrence', 'Modérée', 'Élevée mais gagnable'],
            ['Intent', 'Transactionnel fort', 'Recherche/comparaison'],
            ['Durée de vie', 'Limitée (produit supprimé)', 'Pérenne'],
            ['Maillage', 'Vers catégorie/similaires', 'Vers tous les produits'],
          ],
        },
      },
      {
        type: 'text',
        content: 'Une page catégorie bien optimisée peut générer plus de trafic que des centaines de fiches produits combinées.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Structure optimale d\'une page catégorie',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les éléments essentiels',
      },
      {
        type: 'list',
        content: [
          'H1 unique avec le nom de la catégorie + modificateur si pertinent',
          'Texte d\'introduction (150-300 mots en haut ou bas de page)',
          'Breadcrumb pour la navigation et le SEO',
          'Grille de produits avec informations clés (nom, prix, note)',
          'Filtres pour affiner la sélection',
          'Liens vers sous-catégories',
          'Pagination ou scroll infini',
          'Texte complémentaire en bas de page (optionnel, 200-500 mots)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Position du contenu texte',
      },
      {
        type: 'text',
        content: 'Le contenu textuel peut être placé à différents endroits. Chaque position a ses avantages.',
      },
      {
        type: 'table',
        content: {
          headers: ['Position', 'Avantages', 'Inconvénients', 'Recommandation'],
          rows: [
            ['Haut de page', 'Visible immédiatement, bon signal SEO', 'Peut pousser les produits vers le bas', 'Intro courte (100-150 mots)'],
            ['Bas de page', 'N\'interfère pas avec les produits', 'Moins visible, peut sembler "bourrage"', 'Contenu développé (300-500 mots)'],
            ['Combiné', 'Meilleur des deux mondes', 'Plus de contenu à produire', 'Idéal si possible'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Rédiger du contenu catégorie efficace',
      },
      {
        type: 'text',
        content: 'Le contenu de catégorie doit servir l\'utilisateur tout en ciblant les mots-clés. Ce n\'est pas du "bourrage de mots-clés".',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Structure du contenu d\'introduction',
      },
      {
        type: 'list',
        content: [
          'Phrase d\'accroche mentionnant la catégorie',
          'Présentation des types de produits disponibles',
          'Conseils pour bien choisir',
          'Mention des marques ou caractéristiques clés',
          'Appel à parcourir la sélection',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exemple de contenu catégorie',
      },
      {
        type: 'text',
        content: 'Catégorie : Chaussures de running homme',
      },
      {
        type: 'quote',
        content: 'Trouvez la chaussure de running homme idéale pour vos entraînements. Notre sélection couvre tous les profils de coureurs : du débutant qui cherche un bon amorti au marathonien qui privilégie la légèreté. Filtrez par type de foulée (pronatrice, neutre, supinatrice), surface (route, trail, piste) ou marque (Nike, Asics, Hoka). Nos experts ont testé chaque modèle pour vous guider vers le meilleur choix.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Gestion des filtres et faceted navigation',
      },
      {
        type: 'text',
        content: 'Les filtres sont essentiels pour l\'UX mais dangereux pour le SEO. Un site avec 100 produits et 10 filtres peut générer des millions d\'URLs.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Le problème des filtres non contrôlés',
      },
      {
        type: 'list',
        content: [
          'Explosion du nombre d\'URLs indexées',
          'Dilution du crawl budget sur des pages sans valeur',
          'Duplicate content (même produits, ordre différent)',
          'Cannibalisation entre pages filtrées',
          'Index gonflé, positions dégradées',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solutions de gestion des filtres',
      },
      {
        type: 'table',
        content: {
          headers: ['Solution', 'Implémentation', 'Cas d\'usage'],
          rows: [
            ['JavaScript/AJAX', 'Filtres sans changement d\'URL', 'Meilleur pour SEO, complexité technique'],
            ['Noindex', 'Meta robots noindex sur pages filtrées', 'Simple, risque de leak d\'index'],
            ['Robots.txt', 'Bloquer les patterns de filtres', 'Radical, bloque aussi le crawl'],
            ['Canonical', 'Canonical vers catégorie parent', 'Préserve le crawl, signal de duplicate'],
            ['Paramètres GSC', 'Déclarer les paramètres de filtres', 'Aide Google, pas de garantie'],
          ],
        },
      },
      {
        type: 'text',
        content: 'La meilleure approche : combiner JavaScript pour les filtres simples + pages statiques pour les combinaisons à valeur SEO (ex: "chaussures running homme Nike").',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Filtres à valeur SEO',
      },
      {
        type: 'text',
        content: 'Certaines combinaisons de filtres méritent une page indexable si elles correspondent à des recherches réelles.',
      },
      {
        type: 'list',
        content: [
          'Catégorie + Marque : "TV Samsung" = recherche fréquente',
          'Catégorie + Attribut majeur : "TV 55 pouces" = recherche fréquente',
          'Catégorie + Prix : "TV pas cher" = moins de valeur',
          'Multi-filtres : "TV Samsung 55 pouces 4K" = trop spécifique',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Pagination correcte',
      },
      {
        type: 'text',
        content: 'Les catégories avec beaucoup de produits nécessitent une pagination. Google a abandonné rel=prev/next mais les bonnes pratiques restent.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Règles de pagination SEO',
      },
      {
        type: 'list',
        content: [
          'NE PAS mettre noindex sur les pages 2, 3, etc.',
          'Chaque page paginée doit être crawlable (liens dans le HTML)',
          'URL propres : /categorie/page/2/ plutôt que ?page=2',
          'Pas de canonical de page 2 vers page 1 (ce sont des pages différentes)',
          'Nombre raisonnable de produits par page (24-48)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Alternatives à la pagination classique',
      },
      {
        type: 'table',
        content: {
          headers: ['Alternative', 'SEO', 'UX', 'Recommandation'],
          rows: [
            ['Scroll infini pur', 'Mauvais (pas crawlable)', 'Bon', 'À éviter pour SEO'],
            ['Scroll infini + fallback HTML', 'Bon', 'Excellent', 'Meilleure option'],
            ['Bouton "Charger plus"', 'Variable (selon implémentation)', 'Bon', 'OK si bien fait'],
            ['Pagination classique', 'Bon', 'Moyen', 'Solution sûre'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Architecture catégories / sous-catégories',
      },
      {
        type: 'text',
        content: 'Une bonne hiérarchie de catégories aide le crawl, la transmission d\'autorité et l\'expérience utilisateur.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Quand créer des sous-catégories',
      },
      {
        type: 'list',
        content: [
          'Plus de 50-100 produits dans une catégorie',
          'Mot-clé de sous-catégorie avec volume de recherche significatif',
          'Segmentation logique pour l\'utilisateur',
          'Pas trop de niveaux (max 3 : catégorie > sous-catégorie > produit)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exemple d\'arborescence optimale',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: `Chaussures (catégorie principale)
├── Chaussures Homme (sous-catégorie)
│   ├── Sneakers Homme
│   ├── Chaussures Running Homme
│   ├── Chaussures de Ville Homme
│   └── Sandales Homme
├── Chaussures Femme
│   ├── Sneakers Femme
│   ├── Escarpins
│   ├── Ballerines
│   └── Bottes Femme
└── Chaussures Enfant
    ├── Chaussures Garçon
    └── Chaussures Fille`,
          filename: 'arborescence-categories.txt',
        },
      },
      // Études de cas
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas #1 : Site mode qui optimise ses catégories',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'TrendyShop, e-commerce mode avec 5 000 références. 80 catégories sans aucun contenu texte.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Problématique identifiée',
      },
      {
        type: 'list',
        content: [
          'Pages catégories = juste une grille de produits',
          'H1 souvent manquants ou génériques',
          'Aucune position sur les requêtes génériques',
          '90% du trafic SEO sur les fiches produits',
          'Filtres tous indexés (250K URLs)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution déployée',
      },
      {
        type: 'text',
        content: 'Optimisation complète sur 4 mois :',
      },
      {
        type: 'text',
        content: 'Mois 1-2 : Rédaction de contenu pour les 30 catégories principales (300 mots chacune). Optimisation des H1 et meta. Ajout de liens vers sous-catégories.',
      },
      {
        type: 'text',
        content: 'Mois 3 : Nettoyage des filtres : noindex sur toutes les combinaisons sauf Catégorie+Marque. Réduction de 250K à 2K URLs indexées.',
      },
      {
        type: 'text',
        content: 'Mois 4 : Création de pages de sous-catégories stratégiques basées sur les recherches ("robes été", "jeans slim homme"). 20 nouvelles pages.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats obtenus',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après 5 mois', 'Évolution'],
          rows: [
            ['Trafic pages catégories', '~3 000/mois', '~42 000/mois', '+1 300%'],
            ['Catégories en page 1', '2', '24', '+1 100%'],
            ['Position moyenne catégories', '45', '12', '+33 places'],
            ['URLs indexées', '250 000', '8 000', '-97%'],
            ['Trafic total SEO', '~80K/mois', '~145K/mois', '+81%'],
          ],
        },
      },
      // Étude de cas 2
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas #2 : E-commerce électronique qui restructure',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'ElectroMax, e-commerce high-tech. 3 000 références. Arborescence plate sans vraie hiérarchie.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Problématique identifiée',
      },
      {
        type: 'list',
        content: [
          'Une seule catégorie "TV" avec 450 produits',
          'Pas de sous-catégories (par taille, marque, technologie)',
          'Impossible de ranker sur "TV 55 pouces" ou "TV Samsung"',
          'Pagination de 15 pages (produits inaccessibles)',
          'Cannibalisation entre produits similaires',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution déployée',
      },
      {
        type: 'text',
        content: 'Restructuration complète sur 3 mois :',
      },
      {
        type: 'text',
        content: 'Mois 1 : Audit des recherches et création d\'une nouvelle arborescence. TV > TV par taille (32", 43", 55", 65"+) + TV par marque + TV par technologie (OLED, QLED, LED).',
      },
      {
        type: 'text',
        content: 'Mois 2 : Migration avec redirections 301 préservant l\'historique. Rédaction de contenu pour chaque nouvelle sous-catégorie.',
      },
      {
        type: 'text',
        content: 'Mois 3 : Création de pages combinées à valeur SEO ("TV Samsung 55 pouces", "TV OLED 65 pouces"). Maillage interne renforcé.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats obtenus',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après 4 mois', 'Évolution'],
          rows: [
            ['Pages catégories TV', '1', '35', '+34'],
            ['Mots-clés TV en page 1', '3', '28', '+833%'],
            ['Trafic catégorie TV', '~2 500/mois', '~18 000/mois', '+620%'],
            ['Profondeur produits', 'Jusqu\'à 15 clics', 'Max 3 clics', '-80%'],
            ['CA catégorie TV', '~120K€/mois', '~210K€/mois', '+75%'],
          ],
        },
      },
      // Étude de cas 3
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas #3 : Marketplace qui corrige ses filtres',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'MaisonDeco, marketplace décoration. 50 000 produits, 200 vendeurs. Problème massif de filtres indexés.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Problématique identifiée',
      },
      {
        type: 'list',
        content: [
          '3 millions d\'URLs indexées (vs 50K produits)',
          'Crawl budget épuisé sur pages de filtres',
          'Googlebot passait 95% du temps sur des pages inutiles',
          'Nouvelles pages produits non indexées pendant des semaines',
          'Performances SEO en chute libre',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution déployée',
      },
      {
        type: 'text',
        content: 'Assainissement radical sur 4 mois :',
      },
      {
        type: 'text',
        content: 'Mois 1 : Audit complet des URLs indexées. Identification des patterns de filtres. Décision : migration vers filtres JavaScript.',
      },
      {
        type: 'text',
        content: 'Mois 2 : Implémentation des filtres en AJAX (pas de changement d\'URL). Noindex massif sur les anciennes URLs de filtres. Robots.txt bloquant les patterns résiduels.',
      },
      {
        type: 'text',
        content: 'Mois 3-4 : Purge de l\'index via outil de suppression GSC + attente du recrawl naturel. Nouveau sitemap avec uniquement les pages à valeur.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats obtenus',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après 6 mois', 'Évolution'],
          rows: [
            ['URLs indexées', '3 000 000', '65 000', '-98%'],
            ['Crawl sur pages utiles', '~5%', '~88%', '+83 pts'],
            ['Délai indexation nouveaux produits', '3-4 semaines', '2-3 jours', '-90%'],
            ['Trafic SEO', 'En chute (-30%/an)', '+45% sur 6 mois', 'Inversé'],
            ['Erreurs crawl GSC', '~150 000', '~800', '-99%'],
          ],
        },
      },
      // Exercices
      {
        type: 'heading',
        level: 2,
        content: 'Exercices pratiques',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 1 : Audit de vos pages catégories',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Évaluer l\'état SEO de vos pages catégories actuelles.',
        },
      },
      {
        type: 'list',
        content: [
          'Listez vos 10 catégories principales',
          'Pour chacune, notez : présence de H1, contenu texte (nombre de mots), liens vers sous-catégories',
          'Vérifiez dans GSC le trafic actuel de ces pages',
          'Identifiez les mots-clés génériques correspondants (ex: "chaussures homme")',
          'Comparez votre position actuelle sur ces mots-clés',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Rédaction contenu catégorie',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Créer du contenu optimisé pour une page catégorie.',
        },
      },
      {
        type: 'list',
        content: [
          'Choisissez une catégorie sans contenu texte',
          'Identifiez le mot-clé principal + 3 secondaires',
          'Rédigez une introduction de 150-200 mots (haut de page)',
          'Rédigez un contenu complémentaire de 300 mots (bas de page)',
          'Intégrez naturellement les mots-clés',
          'Ajoutez des liens vers les sous-catégories',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Audit des filtres',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Identifier et corriger les problèmes de filtres.',
        },
      },
      {
        type: 'list',
        content: [
          'Dans Google Search Console, allez dans Couverture > Indexées',
          'Recherchez les URLs contenant vos paramètres de filtres',
          'Comptez le nombre de pages filtrées indexées',
          'Comparez avec votre nombre réel de produits/catégories',
          'Si ratio > 2x, vous avez un problème',
          'Définissez la stratégie de correction (noindex, JS, robots.txt)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Plan de sous-catégories',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Planifier une restructuration en sous-catégories.',
        },
      },
      {
        type: 'list',
        content: [
          'Identifiez une catégorie avec 100+ produits',
          'Listez les attributs de segmentation possibles (marque, taille, usage)',
          'Recherchez le volume de recherche de chaque combinaison',
          'Sélectionnez les 5 sous-catégories avec le plus de potentiel',
          'Dessinez la nouvelle arborescence',
          'Planifiez la migration avec redirections',
        ],
      },
      // Quiz
      {
        type: 'heading',
        level: 2,
        content: 'Quiz de validation',
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Pages Catégories E-commerce',
          questions: [
            {
              question: 'Pourquoi les pages catégories sont-elles sous-exploitées en SEO ?',
              options: [
                'Google ne les indexe pas',
                'Elles n\'ont pas de potentiel de trafic',
                'La plupart des e-commerçants les laissent vides de contenu',
                'Les filtres empêchent leur indexation',
              ],
              correctIndex: 2,
              explanation: 'La majorité des e-commerçants se concentrent sur les fiches produits et négligent le contenu des pages catégories, qui peuvent pourtant ranker sur des requêtes à fort volume.',
            },
            {
              question: 'Quelle est la longueur recommandée pour le texte d\'introduction d\'une catégorie ?',
              options: [
                '50-100 mots',
                '150-300 mots',
                '500-800 mots',
                '1000+ mots',
              ],
              correctIndex: 1,
              explanation: 'Une introduction de 150-300 mots est suffisante pour le SEO sans trop pousser les produits vers le bas. Un contenu plus long peut aller en bas de page.',
            },
            {
              question: 'Quel est le principal problème des filtres en SEO e-commerce ?',
              options: [
                'Ils ralentissent le site',
                'Ils créent des millions de combinaisons d\'URLs inutiles',
                'Google les bloque automatiquement',
                'Ils empêchent la conversion',
              ],
              correctIndex: 1,
              explanation: 'Les filtres peuvent générer des millions de combinaisons d\'URLs, diluant le crawl budget et créant du duplicate content massif.',
            },
            {
              question: 'Faut-il mettre noindex sur les pages paginées (page 2, 3, etc.) ?',
              options: [
                'Oui, toujours',
                'Non, jamais',
                'Seulement au-delà de la page 5',
                'Seulement si le contenu est dupliqué',
              ],
              correctIndex: 1,
              explanation: 'Les pages paginées doivent rester indexables. Elles contiennent des produits différents de la page 1 et méritent d\'être crawlées.',
            },
            {
              question: 'Quand créer des sous-catégories ?',
              options: [
                'Toujours, même avec 10 produits',
                'Quand une catégorie dépasse 50-100 produits et que les mots-clés ont du volume',
                'Uniquement pour les marques',
                'Jamais, cela complique la navigation',
              ],
              correctIndex: 1,
              explanation: 'Créez des sous-catégories quand la catégorie parent devient trop grande ET que les sous-catégories correspondent à des recherches réelles.',
            },
            {
              question: 'Quelle approche est recommandée pour les filtres à valeur SEO (ex: catégorie+marque) ?',
              options: [
                'Toujours bloquer en robots.txt',
                'Créer des pages statiques optimisées pour ces combinaisons',
                'Les ignorer',
                'Les rediriger vers la catégorie parent',
              ],
              correctIndex: 1,
              explanation: 'Les combinaisons recherchées (ex: "TV Samsung") méritent des pages statiques optimisées, contrairement aux filtres multi-critères sans volume.',
            },
            {
              question: 'Quel canonical pour une page filtrée (ex: /chaussures?couleur=rouge) ?',
              options: [
                'Elle-même',
                'La catégorie parent (/chaussures)',
                'La page d\'accueil',
                'Aucun canonical',
              ],
              correctIndex: 1,
              explanation: 'Une page filtrée sans valeur SEO propre doit avoir un canonical vers la catégorie parent pour consolider la valeur.',
            },
            {
              question: 'Combien de niveaux maximum dans une arborescence e-commerce ?',
              options: [
                '2 (catégorie > produit)',
                '3 (catégorie > sous-catégorie > produit)',
                '5',
                'Pas de limite',
              ],
              correctIndex: 1,
              explanation: 'Maximum 3 niveaux respecte la règle des 3 clics et garantit une bonne transmission d\'autorité et un crawl efficace.',
            },
            {
              question: 'Quelle solution de filtres est la meilleure pour le SEO ?',
              options: [
                'Filtres générant des URLs avec paramètres',
                'Filtres en JavaScript/AJAX sans changement d\'URL',
                'Filtres désactivés',
                'Filtres avec nofollow sur les liens',
              ],
              correctIndex: 1,
              explanation: 'Les filtres en JavaScript/AJAX ne créent pas de nouvelles URLs, évitant les problèmes de duplicate content et de crawl budget.',
            },
            {
              question: 'Où placer du contenu long sur une page catégorie sans nuire à l\'UX ?',
              options: [
                'En haut de page, avant les produits',
                'En bas de page, après les produits',
                'Dans une popup',
                'Sur une page séparée',
              ],
              correctIndex: 1,
              explanation: 'Le contenu long (300-500 mots) se place idéalement en bas de page pour ne pas pousser les produits vers le bas tout en bénéficiant du SEO.',
            },
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Prochaines étapes',
      },
      {
        type: 'text',
        content: 'Vos pages catégories optimisées, complétez votre stratégie e-commerce avec notre guide sur les fiches produits.',
      },
      {
        type: 'cta',
        content: {
          title: 'Optimisez vos fiches produits',
          description: 'Créez des fiches produits qui rankent ET convertissent.',
          buttonText: 'Voir le guide fiches produits',
          buttonLink: '/seo-ecommerce/fiches-produits',
          variant: 'primary',
        },
      },
    ],
  },
];

export const clusterData: ClusterConfig = {
  slug: 'seo-ecommerce',
  name: 'SEO E-commerce',
  description: 'Maîtrisez le SEO e-commerce : fiches produits, pages catégories, données structurées. Boostez le trafic et les ventes.',
  metaTitle: 'SEO E-commerce | SEOtika 2026',
  metaDescription: 'Formation complète au SEO e-commerce : optimisez votre boutique en ligne pour Google.',
  pillarPage,
  childPages,
  icon: 'ShoppingCart',
  color: 'lime',
};

export default clusterData;
