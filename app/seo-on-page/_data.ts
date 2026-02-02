import { ClusterConfig, Article } from '@/types';

const pillarPage: Article = {
  slug: 'index',
  title: 'SEO On-Page : Guide Complet pour Optimiser vos Pages',
  metaTitle: 'SEO On-Page - Guide Optimisation 2026',
  metaDescription: 'Maîtrisez le SEO on-page : balises title, meta description, structure Hn, optimisation images. Toutes les techniques pour optimiser vos pages.',
  keyword: 'seo on page',
  secondaryKeywords: ['optimisation on-page', 'référencement on-site', 'optimisation page seo'],
  intent: 'info',
  cluster: 'seo-on-page',
  excerpt: 'Le SEO on-page regroupe toutes les optimisations que vous pouvez faire directement sur vos pages. C\'est la base du référencement naturel.',
  tableOfContents: true,
  readingTime: 45,
  difficulty: 'debutant',
  lastUpdated: '2026-01-20',
  author: 'thomas-dupont',
  relatedSlugs: ['balise-title', 'meta-description', 'structure-hn'],
  faq: [
    {
      question: 'Quelle est la différence entre SEO on-page et off-page ?',
      answer: 'Le SEO on-page concerne les optimisations sur votre site (contenu, balises, structure). Le SEO off-page concerne les actions externes, principalement les backlinks.',
    },
    {
      question: 'Par où commencer l\'optimisation on-page ?',
      answer: 'Commencez par les bases : title unique et optimisé, meta description engageante, structure H1-H6 logique, puis optimisez le contenu et les images.',
    },
    {
      question: 'Combien de temps faut-il pour voir les résultats du SEO on-page ?',
      answer: 'Les résultats peuvent apparaître en 2-4 semaines pour les petites modifications. Pour une refonte complète, comptez 2-3 mois pour voir l\'impact complet.',
    },
    {
      question: 'Le SEO on-page suffit-il pour bien se positionner ?',
      answer: 'Non, le SEO on-page est nécessaire mais pas suffisant. Vous devez également travailler le SEO technique et le netlinking pour obtenir les meilleurs résultats.',
    },
  ],
  content: [
    {
      type: 'text',
      content: 'Le SEO on-page est le pilier sur lequel repose votre référencement. Sans pages correctement optimisées, même les meilleurs backlinks ne suffiront pas. Ce guide complet vous enseigne comment optimiser chaque élément de vos pages pour maximiser votre visibilité dans les moteurs de recherche.',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Ce que vous allez apprendre',
        content: 'Ce guide premium couvre tous les aspects du SEO on-page : les balises essentielles, l\'optimisation du contenu, les images, les URLs, et bien plus. Vous apprendrez à travers des cas pratiques réels et des exercices concrets.',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Qu\'est-ce que le SEO on-page ?',
    },
    {
      type: 'text',
      content: 'Le SEO on-page (ou SEO on-site) désigne l\'ensemble des optimisations réalisées directement sur les pages de votre site web. Contrairement au SEO off-page (backlinks), vous avez un contrôle total sur ces éléments. C\'est la fondation de tout bon référencement.',
    },
    {
      type: 'text',
      content: 'Concrètement, le SEO on-page englobe tout ce que vous pouvez modifier sur vos pages : le contenu textuel, les balises HTML (title, meta, Hn), les images, les URLs, le maillage interne, et la structure de vos pages. Chaque élément envoie des signaux aux moteurs de recherche sur le sujet et la pertinence de votre page.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pourquoi le SEO on-page est fondamental',
    },
    {
      type: 'text',
      content: 'Imaginez le SEO comme une maison. Le SEO on-page, c\'est la fondation et la structure. Vous pouvez avoir la plus belle décoration (backlinks de qualité), si les murs sont fragiles (contenu pauvre) ou le plan mal conçu (structure chaotique), la maison ne tiendra pas.',
    },
    {
      type: 'list',
      content: [
        'Contrôle total : vous maîtrisez 100% des optimisations on-page',
        'Impact direct : les modifications sont prises en compte rapidement par Google',
        'Effet cumulatif : chaque page optimisée renforce l\'ensemble du site',
        'Prérequis au netlinking : un contenu mal optimisé ne mérite pas de backlinks',
        'Amélioration UX : une page bien structurée plaît aux utilisateurs ET à Google',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Les piliers du SEO on-page',
    },
    {
      type: 'text',
      content: 'Le SEO on-page repose sur cinq piliers fondamentaux. Maîtriser chacun d\'eux est essentiel pour créer des pages performantes.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pilier 1 : Les balises essentielles',
    },
    {
      type: 'text',
      content: 'Les balises HTML communiquent avec les moteurs de recherche. Les plus importantes sont la balise title et la meta description, qui apparaissent dans les résultats de recherche. Pour approfondir ce sujet essentiel, consultez notre guide complet sur la balise title SEO.',
    },
    {
      type: 'table',
      content: {
        headers: ['Balise', 'Rôle', 'Impact SEO'],
        rows: [
          ['<title>', 'Titre dans les SERPs et onglets', 'Très élevé - facteur n°1'],
          ['<meta description>', 'Description dans les SERPs', 'Indirect (influence le CTR)'],
          ['<h1>', 'Titre principal visible', 'Élevé'],
          ['<h2> à <h6>', 'Structure du contenu', 'Moyen à élevé'],
          ['<img alt>', 'Description des images', 'Moyen + Google Images'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pilier 2 : Le contenu optimisé',
    },
    {
      type: 'text',
      content: 'Le contenu est roi, mais un roi mal habillé n\'impressionne personne. Votre contenu doit être à la fois pertinent pour les utilisateurs et optimisé pour les moteurs de recherche. Cela signifie utiliser vos mots-clés naturellement, répondre complètement à l\'intention de recherche, et structurer l\'information de manière logique.',
    },
    {
      type: 'text',
      content: 'Un contenu optimisé n\'est pas un contenu bourré de mots-clés. C\'est un contenu qui couvre exhaustivement un sujet, qui utilise le vocabulaire sémantique associé, et qui apporte une vraie valeur au lecteur.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pilier 3 : La structure Hn',
    },
    {
      type: 'text',
      content: 'Les balises de titre (H1 à H6) structurent votre contenu comme un sommaire. Une hiérarchie claire aide Google à comprendre votre page et améliore l\'expérience de lecture. Notre article sur la structure Hn détaille les bonnes pratiques.',
    },
    {
      type: 'list',
      content: [
        'H1 : Un seul par page, contient le mot-clé principal',
        'H2 : Les grandes sections de votre contenu',
        'H3 : Les sous-sections des H2',
        'H4-H6 : Rarement nécessaires, pour les contenus très longs',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pilier 4 : Les images optimisées',
    },
    {
      type: 'text',
      content: 'Les images peuvent représenter jusqu\'à 70% du poids d\'une page. Mal optimisées, elles ralentissent votre site et nuisent au SEO. Bien optimisées, elles génèrent du trafic via Google Images et enrichissent l\'expérience utilisateur. Découvrez toutes les techniques dans notre guide sur l\'optimisation des images.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pilier 5 : Les URLs SEO-friendly',
    },
    {
      type: 'text',
      content: 'Une URL propre et descriptive est un signal de qualité pour Google et rassure les utilisateurs. Elle doit être courte, contenir le mot-clé principal, et utiliser des tirets comme séparateurs. Pour tout savoir, consultez notre article sur les URLs SEO.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Étude de cas n°1 : Blog de voyage - De 0 à 50 000 visites',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Contexte',
        content: 'Un blog de voyage personnel lancé en 2024, initialement non optimisé. L\'autrice publiait régulièrement mais ne recevait que 200 visites/mois malgré 80 articles.',
      },
    },
    {
      type: 'text',
      content: 'Sophie, passionnée de voyage, avait créé son blog "Voyages de Sophie" en 2024. Après 18 mois et 80 articles publiés, elle ne recevait que 200 visites mensuelles. Frustrée, elle a décidé d\'appliquer les principes du SEO on-page.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'L\'audit initial',
    },
    {
      type: 'text',
      content: 'L\'analyse du site a révélé de nombreux problèmes on-page typiques :',
    },
    {
      type: 'list',
      content: [
        'Titles génériques : "Mon voyage au Japon" au lieu de "Voyage au Japon : Itinéraire 2 Semaines et Budget"',
        'Meta descriptions absentes sur 90% des pages',
        'Structure Hn chaotique : H3 avant H2, plusieurs H1 par page',
        'Images non compressées (temps de chargement : 8 secondes)',
        'URLs avec dates : /2024/03/15/japon-jour-1/',
        'Aucun maillage interne entre les articles',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Les optimisations appliquées',
    },
    {
      type: 'text',
      content: 'Sophie a travaillé méthodiquement sur chaque pilier du SEO on-page :',
    },
    {
      type: 'table',
      content: {
        headers: ['Élément', 'Avant', 'Après'],
        rows: [
          ['Title', 'Mon voyage au Japon', 'Voyage au Japon 2 Semaines : Itinéraire, Budget et Conseils 2026'],
          ['Meta description', '(absente)', 'Planifiez votre voyage au Japon avec cet itinéraire de 2 semaines testé. Budget détaillé, incontournables et conseils pratiques.'],
          ['H1', 'Japon 2024', 'Voyage au Japon : Mon Itinéraire de 2 Semaines'],
          ['Structure', 'Chaotique', 'H1 > H2 (par ville) > H3 (par activité)'],
          ['Images', '2-5 Mo chacune', '100-200 Ko en WebP avec alt descriptifs'],
          ['URL', '/2024/03/15/japon-jour-1/', '/voyage-japon-2-semaines/'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Les résultats',
    },
    {
      type: 'text',
      content: 'Après 4 mois d\'optimisations progressives :',
    },
    {
      type: 'list',
      content: [
        'Mois 1 : Passage de 200 à 800 visites (+300%)',
        'Mois 2 : 2 500 visites - Premiers articles en page 1',
        'Mois 3 : 12 000 visites - Article "Japon 2 semaines" en position 3',
        'Mois 4 : 50 000 visites - 15 articles dans le top 10',
        'Temps de chargement : de 8s à 1.8s',
        'Taux de rebond : de 78% à 52%',
      ],
    },
    {
      type: 'infobox',
      content: {
        type: 'success',
        title: 'Leçon clé',
        content: 'Sophie n\'a pas créé de nouveau contenu pendant ces 4 mois. Elle a uniquement optimisé l\'existant. Le SEO on-page peut transformer un contenu invisible en machine à trafic.',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Étude de cas n°2 : E-commerce - Optimisation des fiches produits',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Contexte',
        content: 'Une boutique en ligne de matériel de jardinage avec 500 produits. Chiffre d\'affaires stagnant malgré des produits de qualité et des prix compétitifs.',
      },
    },
    {
      type: 'text',
      content: 'JardinPro.fr, spécialiste du matériel de jardinage, réalisait 15 000€/mois avec un trafic organique quasi nul. Tout le trafic provenait de la publicité payante, ce qui grignotait les marges.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Le problème identifié',
    },
    {
      type: 'text',
      content: 'L\'audit a révélé que les 500 fiches produits étaient identiques en termes de structure SEO :',
    },
    {
      type: 'list',
      content: [
        'Titles identiques : "[Nom produit] - JardinPro" sans mot-clé descriptif',
        'Meta descriptions auto-générées (les 160 premiers caractères de la description)',
        'Descriptions fournisseur copiées-collées (contenu dupliqué avec des dizaines d\'autres sites)',
        'Images nommées "IMG_0001.jpg" sans alt text',
        'Aucune structure Hn (tout en paragraphes)',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'La stratégie d\'optimisation',
    },
    {
      type: 'text',
      content: 'Plutôt que d\'optimiser les 500 fiches (trop long), l\'équipe s\'est concentrée sur les 50 produits phares représentant 60% du CA :',
    },
    {
      type: 'table',
      content: {
        headers: ['Action', 'Détail'],
        rows: [
          ['Recherche de mots-clés', 'Identification du mot-clé principal + variations pour chaque produit'],
          ['Réécriture des titles', '[Mot-clé principal] - [Caractéristique unique] | JardinPro'],
          ['Meta descriptions uniques', 'Bénéfice client + caractéristique + call-to-action'],
          ['Contenu unique', 'Descriptions réécrites avec expérience d\'utilisation, conseils, comparatifs'],
          ['Structure Hn', 'H1 (nom produit), H2 (caractéristiques, utilisation, avis)'],
          ['Images', 'Renommage descriptif + alt text optimisé'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exemple concret : Fiche "Tondeuse thermique"',
    },
    {
      type: 'table',
      content: {
        headers: ['Élément', 'Avant', 'Après'],
        rows: [
          ['Title', 'Tondeuse TH500 - JardinPro', 'Tondeuse Thermique 500m² - TH500 Autotractée | JardinPro'],
          ['Meta', '(auto)', 'Tondeuse thermique autotractée pour jardins jusqu\'à 500m². Démarrage facile, bac 60L. Livraison gratuite et garantie 3 ans.'],
          ['H1', '(aucun)', 'Tondeuse Thermique TH500 - Pour Jardins jusqu\'à 500m²'],
          ['Description', '150 mots copiés', '600 mots uniques avec conseils d\'entretien'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Les résultats après 6 mois',
    },
    {
      type: 'list',
      content: [
        'Trafic organique sur les 50 fiches : de 50 à 3 200 visites/mois',
        'Positionnement : 35 fiches en page 1 sur leur mot-clé principal',
        'Taux de conversion : de 1.2% à 2.8% (meilleure confiance)',
        'Réduction des coûts publicitaires : -40%',
        'CA mensuel : de 15 000€ à 28 000€',
      ],
    },
    {
      type: 'infobox',
      content: {
        type: 'tip',
        title: 'Stratégie recommandée',
        content: 'Concentrez-vous d\'abord sur vos pages à fort potentiel (meilleures ventes, marges élevées). Les résultats rapides motiveront à continuer sur les autres pages.',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Étude de cas n°3 : Site B2B - Génération de leads',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Contexte',
        content: 'Une agence de conseil en transformation digitale ciblant les PME. Site vitrine de 15 pages avec zéro lead organique.',
      },
    },
    {
      type: 'text',
      content: 'DigitalConseil, agence de 8 personnes, avait un beau site mais aucune visibilité Google. 100% de leurs leads venaient du bouche-à-oreille et de LinkedIn, limitant leur croissance.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'L\'audit on-page',
    },
    {
      type: 'list',
      content: [
        'Page d\'accueil : Title "Bienvenue | DigitalConseil"',
        'Pages services : Contenus de 150 mots, très vagues',
        'Aucune page ciblant de vrais mots-clés business',
        'URLs non descriptives : /service-1/, /service-2/',
        'Meta descriptions manquantes partout',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'La refonte stratégique',
    },
    {
      type: 'text',
      content: 'Plutôt que de simplement optimiser l\'existant, l\'équipe a restructuré le site autour de véritables mots-clés business :',
    },
    {
      type: 'table',
      content: {
        headers: ['Page', 'Ancien titre', 'Nouveau titre optimisé', 'Mot-clé cible'],
        rows: [
          ['Accueil', 'Bienvenue', 'Conseil Transformation Digitale PME - DigitalConseil', 'transformation digitale PME'],
          ['Service 1', 'Accompagnement', 'Audit Digital PME : Diagnostic Complet en 5 Jours', 'audit digital PME'],
          ['Service 2', 'Formation', 'Formation Digitalisation PME - Programme Sur-Mesure', 'formation digitalisation'],
          ['Service 3', 'Conseil', 'Consultant Transformation Digitale - Accompagnement PME', 'consultant transformation digitale'],
        ],
      },
    },
    {
      type: 'text',
      content: 'Chaque page service est passée de 150 à 1 500 mots avec :',
    },
    {
      type: 'list',
      content: [
        'Une structure H2/H3 répondant aux questions des prospects',
        'Des études de cas clients intégrées',
        'Un formulaire de contact optimisé',
        'Des éléments de réassurance (certifications, références)',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Résultats à 8 mois',
    },
    {
      type: 'list',
      content: [
        'Trafic organique : de 30 à 1 200 visites/mois',
        'Leads organiques : de 0 à 15/mois',
        'Position moyenne : page 2 → page 1 sur les mots-clés cibles',
        'Page "audit digital PME" : position 4 (3 leads/semaine)',
        'Coût par lead : divisé par 5 vs LinkedIn Ads',
      ],
    },
    {
      type: 'infobox',
      content: {
        type: 'success',
        title: 'Point clé',
        content: 'En B2B, quelques dizaines de visites qualifiées valent mieux que des milliers de visiteurs non ciblés. L\'optimisation on-page permet de capter exactement les prospects qui cherchent vos services.',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Checklist SEO on-page complète',
    },
    {
      type: 'text',
      content: 'Utilisez cette checklist pour chaque nouvelle page ou lors de l\'optimisation de pages existantes. Cochez chaque élément pour vous assurer de n\'oublier aucun point important.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Balises essentielles',
    },
    {
      type: 'list',
      content: [
        'Title unique avec mot-clé au début (50-60 caractères)',
        'Meta description engageante avec CTA (150-160 caractères)',
        'Un seul H1 par page contenant le mot-clé',
        'Structure H2-H3-H4 logique et hiérarchique',
        'Balise canonical définie si nécessaire',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Contenu',
    },
    {
      type: 'list',
      content: [
        'Mot-clé principal dans les 100 premiers mots',
        'Densité du mot-clé entre 1% et 2%',
        'Utilisation de mots-clés secondaires et synonymes',
        'Longueur adaptée à l\'intention (minimum 300 mots)',
        'Contenu unique (pas de duplicate content)',
        'Mise à jour régulière des informations datées',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Images',
    },
    {
      type: 'list',
      content: [
        'Nom de fichier descriptif avec tirets',
        'Attribut alt pertinent sur chaque image',
        'Compression optimale (WebP recommandé)',
        'Dimensions width/height spécifiées',
        'Lazy loading pour les images sous la ligne de flottaison',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'URLs et liens',
    },
    {
      type: 'list',
      content: [
        'URL courte et descriptive (3-5 mots)',
        'Maillage interne vers les pages liées',
        'Liens externes vers sources fiables (si pertinent)',
        'Anchor texts descriptifs (pas de "cliquez ici")',
        'Pas de liens cassés (erreurs 404)',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Les erreurs on-page à éviter absolument',
    },
    {
      type: 'text',
      content: 'Certaines erreurs peuvent sérieusement pénaliser votre référencement. Voici les plus courantes et comment les éviter :',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Le keyword stuffing',
    },
    {
      type: 'text',
      content: 'Répéter son mot-clé à outrance était efficace en 2005, c\'est pénalisé aujourd\'hui. Google comprend le contexte et les synonymes. Une densité de 1-2% suffit amplement.',
    },
    {
      type: 'table',
      content: {
        headers: ['Mauvais exemple', 'Bon exemple'],
        rows: [
          ['Le SEO on-page est important. Pour faire du SEO on-page, le SEO on-page demande... Le SEO on-page SEO on-page...', 'L\'optimisation on-page est essentielle au référencement. Cette technique regroupe les améliorations directes sur vos pages...'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Les titles dupliqués',
    },
    {
      type: 'text',
      content: 'Chaque page doit avoir un title unique. Des titles identiques diluent vos signaux SEO et créent de la confusion pour Google. Vérifiez avec Google Search Console ou Screaming Frog.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Le contenu fin (thin content)',
    },
    {
      type: 'text',
      content: 'Des pages avec peu de contenu unique apportent peu de valeur. Avant de publier, demandez-vous : "Cette page répond-elle mieux à la question que les résultats actuels ?" Si non, enrichissez-la.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Les images non optimisées',
    },
    {
      type: 'text',
      content: 'Des images trop lourdes ralentissent votre site. Des images sans alt sont invisibles pour Google. Les deux erreurs sont courantes et facilement évitables.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Outils pour l\'optimisation on-page',
    },
    {
      type: 'text',
      content: 'Plusieurs outils peuvent vous aider à analyser et améliorer votre SEO on-page :',
    },
    {
      type: 'table',
      content: {
        headers: ['Outil', 'Usage', 'Prix'],
        rows: [
          ['Google Search Console', 'Suivi performances, erreurs d\'indexation', 'Gratuit'],
          ['Screaming Frog', 'Audit technique complet, détection duplications', 'Gratuit (500 URLs) / 209€/an'],
          ['Yoast SEO / RankMath', 'Optimisation on-page WordPress', 'Gratuit / Premium'],
          ['Surfer SEO', 'Analyse sémantique et recommandations', 'À partir de 59$/mois'],
          ['PageSpeed Insights', 'Performance et Core Web Vitals', 'Gratuit'],
        ],
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Exercices pratiques',
    },
    {
      type: 'infobox',
      content: {
        type: 'tip',
        title: 'À vous de jouer !',
        content: 'Ces exercices vous permettront de mettre en pratique les concepts appris. Réalisez-les sur votre propre site ou sur un site de test.',
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 1 : Audit des balises title',
    },
    {
      type: 'text',
      content: 'Analysez les 10 pages principales de votre site et remplissez ce tableau :',
    },
    {
      type: 'table',
      content: {
        headers: ['Page', 'Title actuel', 'Longueur', 'Mot-clé présent ?', 'Title optimisé'],
        rows: [
          ['Accueil', '...', '... car.', 'Oui/Non', '...'],
          ['Page 2', '...', '...', '...', '...'],
          ['Page 3', '...', '...', '...', '...'],
        ],
      },
    },
    {
      type: 'text',
      content: 'Critères d\'évaluation : Le title fait-il entre 50-60 caractères ? Le mot-clé principal est-il au début ? Est-il unique et descriptif ?',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 2 : Optimisation d\'une page existante',
    },
    {
      type: 'text',
      content: 'Choisissez une page de votre site qui ne génère pas de trafic et appliquez la checklist complète :',
    },
    {
      type: 'list',
      content: [
        '1. Identifiez le mot-clé principal à cibler (recherche dans Google Keyword Planner)',
        '2. Réécrivez le title avec le mot-clé au début',
        '3. Créez une meta description engageante avec CTA',
        '4. Vérifiez que le H1 contient le mot-clé',
        '5. Restructurez les H2/H3 de manière logique',
        '6. Ajoutez le mot-clé dans les 100 premiers mots',
        '7. Optimisez les images (alt, compression)',
        '8. Ajoutez 2-3 liens internes pertinents',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 3 : Analyse concurrentielle on-page',
    },
    {
      type: 'text',
      content: 'Recherchez votre mot-clé principal sur Google et analysez les 3 premiers résultats :',
    },
    {
      type: 'table',
      content: {
        headers: ['Critère', 'Concurrent 1', 'Concurrent 2', 'Concurrent 3', 'Votre page'],
        rows: [
          ['Longueur title', '...', '...', '...', '...'],
          ['Longueur contenu', '... mots', '... mots', '... mots', '... mots'],
          ['Nombre de H2', '...', '...', '...', '...'],
          ['Nombre d\'images', '...', '...', '...', '...'],
          ['Liens internes', '...', '...', '...', '...'],
        ],
      },
    },
    {
      type: 'text',
      content: 'Objectif : Identifier ce que font mieux les concurrents et combler les écarts.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 4 : Création d\'une page from scratch',
    },
    {
      type: 'text',
      content: 'Créez une nouvelle page optimisée en suivant ce processus :',
    },
    {
      type: 'list',
      content: [
        '1. Choisissez un mot-clé avec un volume de recherche',
        '2. Analysez l\'intention de recherche (info, commercial, transactionnel)',
        '3. Rédigez le title et la meta description AVANT le contenu',
        '4. Créez un plan avec H1, H2, H3 incluant les mots-clés secondaires',
        '5. Rédigez le contenu en suivant le plan',
        '6. Optimisez l\'URL (courte, avec mot-clé)',
        '7. Ajoutez des images optimisées',
        '8. Créez des liens internes depuis d\'autres pages',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Quiz : SEO On-Page',
    },
    {
      type: 'quiz',
      content: {
        title: 'Quiz : SEO On-Page',
        questions: [
          {
            question: 'Quelle est la longueur idéale d\'une balise title ?',
            options: ['30-40 caractères', '50-60 caractères', '70-80 caractères', '100+ caractères'],
            correctIndex: 1,
            explanation: 'La longueur idéale est de 50-60 caractères. Au-delà, Google tronque le titre dans les résultats de recherche.',
          },
          {
            question: 'Combien de balises H1 doit contenir une page ?',
            options: ['Aucune', 'Une seule', 'Deux ou trois', 'Autant que nécessaire'],
            correctIndex: 1,
            explanation: 'Une page doit contenir un seul H1 qui représente le titre principal. Les H2-H6 servent à structurer les sous-sections.',
          },
          {
            question: 'La meta description est-elle un facteur de ranking direct ?',
            options: ['Oui, c\'est un facteur majeur', 'Non, mais elle influence le CTR', 'Oui, depuis 2024', 'Non, Google l\'ignore complètement'],
            correctIndex: 1,
            explanation: 'Google a confirmé que la meta description n\'est pas un facteur de ranking direct, mais elle influence le taux de clic (CTR) qui peut impacter indirectement le ranking.',
          },
          {
            question: 'Où placer idéalement le mot-clé principal dans un texte ?',
            options: ['Uniquement dans le titre', 'Dans les 100 premiers mots', 'En bas de page', 'Partout, le plus possible'],
            correctIndex: 1,
            explanation: 'Le mot-clé principal doit apparaître dans les 100 premiers mots pour indiquer clairement le sujet de la page à Google.',
          },
          {
            question: 'Quel format d\'image offre le meilleur ratio qualité/poids pour le SEO ?',
            options: ['JPEG', 'PNG', 'WebP', 'GIF'],
            correctIndex: 2,
            explanation: 'WebP est le format moderne recommandé car il offre une excellente compression tout en maintenant une bonne qualité d\'image.',
          },
          {
            question: 'Quel séparateur utiliser dans les URLs ?',
            options: ['Underscores (_)', 'Tirets (-)', 'Points (.)', 'Espaces'],
            correctIndex: 1,
            explanation: 'Utilisez toujours des tirets (-). Google traite les tirets comme des séparateurs de mots, mais pas les underscores.',
          },
          {
            question: 'Qu\'est-ce que le keyword stuffing ?',
            options: ['Une technique SEO recommandée', 'La sur-utilisation de mots-clés', 'L\'absence de mots-clés', 'Un outil d\'analyse SEO'],
            correctIndex: 1,
            explanation: 'Le keyword stuffing est la sur-utilisation abusive d\'un mot-clé. Cette pratique est pénalisée par Google.',
          },
          {
            question: 'Quelle densité de mot-clé est recommandée ?',
            options: ['0% (pas de mot-clé)', '1-2%', '5-10%', '15% ou plus'],
            correctIndex: 1,
            explanation: 'Une densité de 1-2% est suffisante. Google comprend le contexte et les synonymes, inutile de répéter excessivement.',
          },
          {
            question: 'Pourquoi l\'attribut alt des images est-il important ?',
            options: ['Pour la décoration', 'Pour le copyright', 'Pour l\'accessibilité et le SEO', 'Pour ralentir le chargement'],
            correctIndex: 2,
            explanation: 'L\'attribut alt est essentiel pour l\'accessibilité (lecteurs d\'écran) et aide Google à comprendre le contenu des images pour Google Images.',
          },
          {
            question: 'Que faut-il faire avant de modifier une URL existante ?',
            options: ['Rien de spécial', 'Mettre en place une redirection 301', 'Supprimer l\'ancienne page', 'Attendre 6 mois'],
            correctIndex: 1,
            explanation: 'Toujours mettre en place une redirection 301 de l\'ancienne vers la nouvelle URL pour conserver le référencement acquis et éviter les erreurs 404.',
          },
        ],
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Pour aller plus loin',
    },
    {
      type: 'text',
      content: 'Ce guide vous a donné les bases solides du SEO on-page. Pour approfondir chaque aspect, consultez nos articles détaillés :',
    },
    {
      type: 'list',
      content: [
        'La balise title SEO : Tout savoir pour rédiger des titres qui rankent',
        'Meta description : L\'art de rédiger des descriptions qui font cliquer',
        'Structure Hn : Organiser vos titres pour le SEO',
        'Optimisation des images : Guide complet pour un SEO visuel',
        'URLs SEO-friendly : Structure et bonnes pratiques',
      ],
    },
    {
      type: 'text',
      content: 'Le SEO on-page est un travail continu. Chaque nouvelle page publiée doit être optimisée, et les pages existantes doivent être régulièrement mises à jour. Avec les techniques apprises ici, vous avez toutes les clés pour créer des pages qui plaisent à Google et à vos visiteurs.',
    },
    {
      type: 'cta',
      content: {
        title: 'Maîtrisez chaque aspect du SEO on-page',
        description: 'Explorez les articles détaillés de ce module pour devenir un expert de l\'optimisation on-page.',
        buttonText: 'Voir tous les articles',
        buttonLink: '/seo-on-page',
        variant: 'primary',
      },
    },
  ],
};

const childPages: Article[] = [
  {
    slug: 'balise-title',
    title: 'Balise Title SEO : Comment Rédiger des Titres qui Rankent',
    metaTitle: 'Balise Title SEO - Guide Optimisation 2026',
    metaDescription: 'Apprenez à rédiger des balises title optimisées pour le SEO. Longueur, structure, mots-clés : toutes les bonnes pratiques.',
    keyword: 'balise title seo',
    secondaryKeywords: ['titre seo', 'optimisation title', 'balise titre'],
    intent: 'info',
    cluster: 'seo-on-page',
    excerpt: 'La balise title est le facteur on-page le plus important. Apprenez à rédiger des titres qui plaisent à Google et qui incitent au clic.',
    tableOfContents: true,
    readingTime: 30,
    difficulty: 'debutant',
    lastUpdated: '2026-01-18',
    author: 'thomas-dupont',
    relatedSlugs: ['meta-description', 'structure-hn'],
    faq: [
      {
        question: 'Quelle est la longueur idéale d\'une balise title ?',
        answer: 'Entre 50 et 60 caractères. Au-delà, Google tronque le titre dans les résultats de recherche. Visez 55 caractères pour être sûr qu\'il s\'affiche entièrement.',
      },
      {
        question: 'Faut-il mettre le nom du site dans le title ?',
        answer: 'C\'est optionnel. Pour les pages importantes, le mot-clé suffit. Pour les articles de blog, ajouter " | Nom du site" à la fin peut renforcer la marque.',
      },
      {
        question: 'Pourquoi Google modifie-t-il parfois mes titles ?',
        answer: 'Google peut réécrire un title s\'il le juge non pertinent, trop long, ou ne correspondant pas à l\'intention de recherche. Assurez-vous que votre title décrit précisément le contenu de la page.',
      },
      {
        question: 'Peut-on utiliser des emojis dans la balise title ?',
        answer: 'Techniquement oui, mais Google les affiche rarement. Les emojis peuvent augmenter le CTR sur certains sujets, mais testez sur vos pages car les résultats varient.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'La balise title est votre première chance de convaincre Google et les internautes. Un bon titre peut faire la différence entre la première page et l\'oubli. Dans ce guide complet, vous apprendrez à maîtriser cet élément crucial du SEO on-page.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Ce que vous allez apprendre',
          content: 'Ce guide premium vous enseigne l\'art de rédiger des balises title parfaites : les règles fondamentales, les formules qui fonctionnent, et comment adapter votre titre selon le type de page. Vous découvrirez 3 études de cas réels et pratiquerez avec des exercices concrets.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Qu\'est-ce que la balise title ?',
      },
      {
        type: 'text',
        content: 'La balise title est un élément HTML qui définit le titre de votre page. C\'est l\'un des éléments les plus importants pour le référencement naturel. Elle apparaît à trois endroits stratégiques :',
      },
      {
        type: 'list',
        content: [
          'Dans les résultats de recherche Google (SERP) - en bleu, cliquable',
          'Dans l\'onglet du navigateur - pour identifier la page',
          'Dans les partages sur les réseaux sociaux - comme titre du lien',
        ],
      },
      {
        type: 'text',
        content: 'En HTML, la balise title se place dans la section <head> de votre page :',
      },
      {
        type: 'code',
        content: {
          language: 'html',
          code: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Balise Title SEO : Guide Complet 2026 | MonSite</title>\n  <meta name="description" content="..." />\n</head>\n<body>\n  <!-- Contenu de la page -->\n</body>\n</html>',
          filename: 'exemple.html',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Pourquoi la balise title est cruciale pour le SEO',
      },
      {
        type: 'text',
        content: 'La balise title est considérée comme le facteur on-page numéro 1 par la plupart des experts SEO. Voici pourquoi :',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Impact direct sur le ranking',
      },
      {
        type: 'text',
        content: 'Google utilise le title comme signal fort pour comprendre le sujet de votre page. Un title contenant le mot-clé ciblé indique clairement à Google que votre page est pertinente pour cette requête.',
      },
      {
        type: 'text',
        content: 'De nombreuses études de corrélation montrent que les pages en première position ont généralement le mot-clé exact dans leur title, et souvent au début.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Influence sur le taux de clic (CTR)',
      },
      {
        type: 'text',
        content: 'Même si vous êtes en position 1, un mauvais title peut vous faire perdre des clics au profit du résultat n°2 ou n°3. À l\'inverse, un title accrocheur en position 3 peut attirer plus de clics qu\'un title fade en position 1.',
      },
      {
        type: 'text',
        content: 'Le CTR est d\'ailleurs un signal indirect de qualité pour Google. Si les utilisateurs cliquent massivement sur votre résultat, c\'est un indicateur positif.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Première impression décisive',
      },
      {
        type: 'text',
        content: 'Votre title est souvent le premier (et parfois le seul) contact avec un visiteur potentiel. En quelques mots, vous devez convaincre que votre page mérite un clic parmi les 10 résultats affichés.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Les règles fondamentales d\'un bon title',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Règle n°1 : Placer le mot-clé au début',
      },
      {
        type: 'text',
        content: 'Les premiers mots de votre title ont plus de poids pour Google. Placez votre mot-clé principal le plus tôt possible, idéalement en première position.',
      },
      {
        type: 'table',
        content: {
          headers: ['Position du mot-clé', 'Exemple', 'Efficacité'],
          rows: [
            ['Au début', 'Formation SEO Complète pour Débutants 2026', '★★★★★'],
            ['Au milieu', 'Apprenez le SEO : Formation Complète 2026', '★★★★☆'],
            ['À la fin', 'Formation Complète 2026 - Tout sur le SEO', '★★★☆☆'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Règle n°2 : Respecter la longueur optimale',
      },
      {
        type: 'text',
        content: 'Google affiche environ 600 pixels de largeur pour les titles, ce qui correspond à 50-60 caractères selon les lettres utilisées (un "i" prend moins de place qu\'un "m").',
      },
      {
        type: 'list',
        content: [
          'Minimum : 30 caractères (sinon trop vague)',
          'Idéal : 50-55 caractères',
          'Maximum : 60 caractères (au-delà, troncature)',
        ],
      },
      {
        type: 'text',
        content: 'Astuce : Visez 55 caractères pour avoir une marge de sécurité. Si votre title est tronqué, Google ajoute "..." ce qui réduit l\'attractivité.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Règle n°3 : Être unique sur chaque page',
      },
      {
        type: 'text',
        content: 'Chaque page de votre site doit avoir un title unique. Les titles dupliqués diluent vos signaux SEO et créent de la confusion pour Google. Si vous avez 50 pages avec le même title, Google ne sait pas laquelle afficher.',
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Erreur courante',
          content: 'De nombreux CMS génèrent automatiquement des titles identiques pour les pages de catégories, les archives, ou les pages de pagination. Vérifiez et personnalisez chaque title.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Règle n°4 : Être descriptif et attractif',
      },
      {
        type: 'text',
        content: 'Un bon title doit à la fois décrire le contenu ET donner envie de cliquer. Évitez les titles génériques comme "Accueil", "Blog", ou "Page produit".',
      },
      {
        type: 'table',
        content: {
          headers: ['Type', 'Title générique ❌', 'Title optimisé ✓'],
          rows: [
            ['Accueil', 'Accueil - MonSite', 'Agence SEO Paris - Référencement Naturel | MonSite'],
            ['Catégorie', 'Chaussures', 'Chaussures Running Homme - Livraison Gratuite | MonSite'],
            ['Article', 'SEO débutant', 'Apprendre le SEO en 2026 : Guide Complet Débutant'],
            ['Produit', 'Nike Air Max', 'Nike Air Max 90 Blanc - Taille 36-46 | -30% Soldes'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Formules de titles qui fonctionnent',
      },
      {
        type: 'text',
        content: 'Certaines structures de titles ont fait leurs preuves pour améliorer le CTR. Voici les formules les plus efficaces :',
      },
      {
        type: 'heading',
        level: 3,
        content: 'La formule "Guide Complet"',
      },
      {
        type: 'text',
        content: '[Mot-clé] : Guide Complet [Année] | [Marque]',
      },
      {
        type: 'text',
        content: 'Exemple : "SEO On-Page : Guide Complet 2026 | SEOtika"',
      },
      {
        type: 'text',
        content: 'Cette formule fonctionne pour les contenus informatifs longs. Elle promet un contenu exhaustif et actuel.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'La formule "Comment"',
      },
      {
        type: 'text',
        content: 'Comment [Faire X] : [Nombre] [Méthodes/Étapes/Conseils]',
      },
      {
        type: 'text',
        content: 'Exemple : "Comment Optimiser son Site : 15 Techniques SEO Efficaces"',
      },
      {
        type: 'text',
        content: 'Idéal pour les tutoriels et guides pratiques. Le chiffre attire l\'œil et promet un contenu structuré.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'La formule "Comparatif"',
      },
      {
        type: 'text',
        content: '[Produit A] vs [Produit B] : Comparatif [Année] | [Lequel Choisir ?]',
      },
      {
        type: 'text',
        content: 'Exemple : "Yoast vs RankMath : Comparatif 2026 | Lequel Choisir ?"',
      },
      {
        type: 'text',
        content: 'Parfait pour les contenus comparatifs et les intentions commerciales.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'La formule "Meilleur"',
      },
      {
        type: 'text',
        content: '[Nombre] Meilleurs [Produits/Outils] [Catégorie] [Année]',
      },
      {
        type: 'text',
        content: 'Exemple : "10 Meilleurs Outils SEO Gratuits 2026 | Notre Sélection"',
      },
      {
        type: 'text',
        content: 'Efficace pour les listes et sélections. Indique une curation et un travail de recherche.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°1 : Blog tech - +156% de CTR',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un blog tech avec 200 articles. Position moyenne : 8.5. CTR moyen : 1.8%. L\'objectif était d\'améliorer le CTR sans changer les positions.',
        },
      },
      {
        type: 'text',
        content: 'TechnoGeek, un blog français sur la technologie, avait un bon positionnement moyen mais un CTR catastrophique. L\'équipe a décidé de retravailler tous les titles.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'L\'analyse du problème',
      },
      {
        type: 'text',
        content: 'L\'audit des titles a révélé plusieurs problèmes récurrents :',
      },
      {
        type: 'list',
        content: [
          'Titles trop courts : "iPhone 15 Test" (14 caractères)',
          'Absence du mot-clé principal au début',
          'Pas de proposition de valeur (pourquoi cliquer ?)',
          'Dates absentes (contenus perçus comme obsolètes)',
          'Pas de différenciation avec les concurrents',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'La stratégie de réécriture',
      },
      {
        type: 'text',
        content: 'Chaque title a été réécrit selon un framework précis :',
      },
      {
        type: 'table',
        content: {
          headers: ['Article', 'Ancien title', 'Nouveau title'],
          rows: [
            ['Test iPhone', 'iPhone 15 Test', 'Test iPhone 15 Pro : Avis Complet Après 3 Mois d\'Utilisation'],
            ['Comparatif PC', 'Comparatif PC portable', 'PC Portable 2026 : Comparatif des 10 Meilleurs Modèles'],
            ['Tuto Windows', 'Accélérer Windows', 'Comment Accélérer Windows 11 : 12 Astuces Testées'],
            ['Review casque', 'Sony WH-1000XM5', 'Sony WH-1000XM5 : Test du Meilleur Casque ANC 2026'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les résultats après 3 mois',
      },
      {
        type: 'list',
        content: [
          'CTR moyen : de 1.8% à 4.6% (+156%)',
          'Trafic organique : +89% (sans changement de positions)',
          'Top article : CTR passé de 2.1% à 8.7%',
          'Temps de réécriture total : 3 jours pour 200 titles',
          'ROI : 0€ investi, +89% de trafic',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'success',
          title: 'Leçon clé',
          content: 'Améliorer vos titles peut augmenter significativement votre trafic SANS améliorer vos positions. C\'est l\'une des optimisations SEO avec le meilleur ROI.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°2 : E-commerce mode - Titles produits',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Une boutique de mode en ligne avec 3 000 produits. Les fiches produits généraient très peu de trafic organique malgré un bon catalogue.',
        },
      },
      {
        type: 'text',
        content: 'FashionStore avait un problème classique : des titles produits générés automatiquement par le CMS, tous sur le même modèle "[Nom produit] - FashionStore".',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Le diagnostic',
      },
      {
        type: 'text',
        content: 'L\'analyse des titles produits a montré :',
      },
      {
        type: 'list',
        content: [
          '95% des titles commençaient par le nom du produit seul (ex: "Robe Fleurie")',
          'Aucune information sur la marque, la taille, la couleur',
          'Pas de mots-clés commerciaux (promo, soldes, livraison gratuite)',
          'Titles trop courts (20-30 caractères en moyenne)',
          'Impossible de différencier les variantes (couleurs, tailles)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'La nouvelle structure de title',
      },
      {
        type: 'text',
        content: 'Un template dynamique a été créé pour générer des titles optimisés automatiquement :',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: 'Template: [Type Produit] [Marque] [Caractéristique] - [Avantage] | FashionStore\n\nExemple avant: "Robe Fleurie - FashionStore"\nExemple après: "Robe Fleurie Zara Été 2026 - Livraison 48h | FashionStore"',
          filename: 'template-title.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Optimisations spécifiques par catégorie',
      },
      {
        type: 'table',
        content: {
          headers: ['Catégorie', 'Template optimisé'],
          rows: [
            ['Robes', '[Type] [Marque] [Saison] - [Promo si applicable] | FashionStore'],
            ['Chaussures', '[Type] [Marque] [Genre] Taille [Range] - [Avantage]'],
            ['Accessoires', '[Produit] [Marque] [Matière] - Prix [X]€ | FashionStore'],
            ['Soldes', '[Produit] [Marque] -[X]% | Soldes FashionStore'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats après 4 mois',
      },
      {
        type: 'list',
        content: [
          'Trafic organique sur les fiches produits : +234%',
          'Nombre de fiches en page 1 : de 45 à 312',
          'CTR moyen : de 0.9% à 3.2%',
          'Chiffre d\'affaires organique : +180%',
          'Temps de mise en place : 2 jours (automatisation)',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Astuce e-commerce',
          content: 'Créez des templates de titles dynamiques par catégorie de produits. Incluez systématiquement : type de produit, marque, caractéristique différenciante, et un avantage commercial.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°3 : Site local - Géolocalisation du title',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un cabinet de kinésithérapie à Lyon avec un site vitrine de 8 pages. Invisible sur les recherches locales malgré une bonne réputation offline.',
        },
      },
      {
        type: 'text',
        content: 'KinéLyon avait des titles génériques ne mentionnant pas la localisation. Résultat : invisible sur "kiné Lyon", "kinésithérapeute Lyon", etc.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les titles initiaux',
      },
      {
        type: 'table',
        content: {
          headers: ['Page', 'Title avant'],
          rows: [
            ['Accueil', 'Cabinet de Kinésithérapie - Bienvenue'],
            ['Services', 'Nos Services de Kinésithérapie'],
            ['Équipe', 'Notre Équipe de Kinésithérapeutes'],
            ['Contact', 'Nous Contacter'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'La stratégie locale',
      },
      {
        type: 'text',
        content: 'Chaque title a été réécrit pour inclure la ville et/ou l\'arrondissement :',
      },
      {
        type: 'table',
        content: {
          headers: ['Page', 'Title après'],
          rows: [
            ['Accueil', 'Kinésithérapeute Lyon 6 - Cabinet Kiné Tête d\'Or | KinéLyon'],
            ['Services', 'Kiné du Sport Lyon - Rééducation et Massage | KinéLyon'],
            ['Équipe', 'Kinésithérapeutes Diplômés Lyon 6 - Notre Équipe'],
            ['Contact', 'RDV Kiné Lyon 6 - Tél et Prise de RDV en Ligne'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats après 2 mois',
      },
      {
        type: 'list',
        content: [
          'Requête "kiné Lyon 6" : non classé → position 3',
          'Requête "kinésithérapeute Lyon" : position 45 → position 8',
          'Appels téléphoniques depuis Google : +340%',
          'Prises de RDV en ligne : +180%',
          'Nombre de nouveaux patients/mois : de 4 à 18',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'success',
          title: 'Leçon SEO local',
          content: 'Pour un business local, incluez TOUJOURS la ville dans vos titles. Si possible, ajoutez l\'arrondissement ou le quartier pour les grandes villes.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Google et la réécriture des titles',
      },
      {
        type: 'text',
        content: 'Depuis 2021, Google réécrit fréquemment les titles affichés dans les SERPs. Comprendre pourquoi et comment éviter cela est essentiel.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Pourquoi Google réécrit les titles',
      },
      {
        type: 'list',
        content: [
          'Title trop long (tronqué de manière disgracieuse)',
          'Title ne correspondant pas à l\'intention de recherche',
          'Title bourré de mots-clés (keyword stuffing)',
          'Title identique à celui d\'autres pages du site',
          'Title ne décrivant pas le contenu réel de la page',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Comment éviter la réécriture',
      },
      {
        type: 'list',
        content: [
          'Respectez la longueur (50-60 caractères)',
          'Alignez le title avec le contenu de la page',
          'Utilisez le mot-clé naturellement, sans répétition',
          'Assurez-vous que le title répond à l\'intention de recherche',
          'Faites correspondre le H1 et le title (sans être identiques)',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Vérification importante',
          content: 'Recherchez vos pages sur Google et comparez le title affiché avec celui que vous avez défini. Si Google réécrit systématiquement vos titles, c\'est un signal que quelque chose ne va pas.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Exercices pratiques',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 1 : Diagnostic de vos titles actuels',
      },
      {
        type: 'text',
        content: 'Listez les 10 pages principales de votre site et analysez leurs titles :',
      },
      {
        type: 'table',
        content: {
          headers: ['Page', 'Title actuel', 'Longueur', 'Mot-clé au début ?', 'Problème identifié'],
          rows: [
            ['...', '...', '... car.', 'Oui/Non', '...'],
            ['...', '...', '...', '...', '...'],
            ['...', '...', '...', '...', '...'],
          ],
        },
      },
      {
        type: 'text',
        content: 'Identifiez les titles qui posent problème et notez ce qui doit être amélioré.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Réécriture avec formules',
      },
      {
        type: 'text',
        content: 'Prenez 5 pages de votre site et réécrivez leur title en utilisant les formules apprises :',
      },
      {
        type: 'list',
        content: [
          'Page 1 : Utilisez la formule "Guide Complet"',
          'Page 2 : Utilisez la formule "Comment"',
          'Page 3 : Utilisez la formule "Comparatif" (si applicable)',
          'Page 4 : Utilisez la formule "Meilleur" (si applicable)',
          'Page 5 : Créez votre propre formule adaptée',
        ],
      },
      {
        type: 'text',
        content: 'Vérifiez que chaque nouveau title fait entre 50 et 60 caractères et place le mot-clé au début.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Test A/B de titles',
      },
      {
        type: 'text',
        content: 'Choisissez une page avec du trafic et testez deux versions de title :',
      },
      {
        type: 'list',
        content: [
          '1. Notez le CTR actuel dans Google Search Console',
          '2. Changez le title (version A)',
          '3. Attendez 2-4 semaines et mesurez le nouveau CTR',
          '4. Changez pour la version B',
          '5. Attendez 2-4 semaines et comparez',
          '6. Gardez la version gagnante',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Création de templates',
      },
      {
        type: 'text',
        content: 'Si vous avez un site e-commerce ou un blog, créez des templates de titles pour vos différents types de contenus :',
      },
      {
        type: 'table',
        content: {
          headers: ['Type de page', 'Template de title'],
          rows: [
            ['Article de blog', '[Mot-clé] : [Promesse] | [Site]'],
            ['Fiche produit', '[Produit] [Marque] - [Avantage] | [Site]'],
            ['Catégorie', '[Mot-clé Catégorie] - [Nombre] Produits | [Site]'],
            ['Page service', '[Service] [Lieu] - [Différenciateur] | [Site]'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quiz : Balise Title SEO',
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Balise Title SEO',
          questions: [
            {
              question: 'Quelle est la longueur idéale d\'une balise title ?',
              options: ['30-40 caractères', '50-60 caractères', '80-100 caractères', 'Pas de limite'],
              correctIndex: 1,
              explanation: 'La longueur idéale est de 50-60 caractères. Au-delà, Google tronque le titre avec "..." ce qui réduit l\'attractivité.',
            },
            {
              question: 'Où doit être placé le mot-clé principal dans le title ?',
              options: ['À la fin', 'Au milieu', 'Au début', 'Peu importe'],
              correctIndex: 2,
              explanation: 'Le mot-clé principal doit être placé au début du title car les premiers mots ont plus de poids pour Google.',
            },
            {
              question: 'Peut-on avoir le même title sur plusieurs pages ?',
              options: ['Oui, c\'est recommandé', 'Non, chaque page doit avoir un title unique', 'Oui, si le contenu est similaire', 'Uniquement pour les pages de catégories'],
              correctIndex: 1,
              explanation: 'Chaque page doit avoir un title unique. Les titles dupliqués diluent les signaux SEO et créent de la confusion pour Google.',
            },
            {
              question: 'Quel est le facteur on-page avec le plus d\'impact sur le ranking ?',
              options: ['La meta description', 'La balise title', 'Les images', 'Le nombre de mots'],
              correctIndex: 1,
              explanation: 'La balise title est considérée comme le facteur on-page n°1 par la plupart des experts SEO.',
            },
            {
              question: 'Pourquoi Google peut-il réécrire votre title ?',
              options: ['Pour améliorer votre SEO', 'Si le title ne correspond pas à l\'intention de recherche', 'Pour tous les titles', 'Jamais, Google affiche toujours votre title'],
              correctIndex: 1,
              explanation: 'Google réécrit les titles qu\'il juge non pertinents, trop longs, ou ne correspondant pas à l\'intention de recherche.',
            },
            {
              question: 'Quelle formule de title est adaptée aux tutoriels ?',
              options: ['[Produit] vs [Produit]', 'Comment [Faire X] : [Nombre] [Conseils]', '[Nombre] Meilleurs [Produits]', '[Marque] - Accueil'],
              correctIndex: 1,
              explanation: 'La formule "Comment [Faire X]" est idéale pour les tutoriels et guides pratiques car elle répond directement à une question.',
            },
            {
              question: 'Pour un business local, que doit contenir le title ?',
              options: ['Uniquement le nom de l\'entreprise', 'La ville ou le quartier', 'Le numéro de téléphone', 'L\'adresse complète'],
              correctIndex: 1,
              explanation: 'Pour le SEO local, il est crucial d\'inclure la ville et si possible le quartier/arrondissement dans le title.',
            },
            {
              question: 'Qu\'est-ce qui influence le CTR d\'un résultat de recherche ?',
              options: ['Uniquement la position', 'La balise title et la meta description', 'Le nom de domaine', 'La vitesse du site'],
              correctIndex: 1,
              explanation: 'Le CTR est principalement influencé par la qualité du title et de la meta description qui apparaissent dans les SERPs.',
            },
            {
              question: 'Comment vérifier si Google réécrit vos titles ?',
              options: ['C\'est impossible à vérifier', 'En recherchant vos pages sur Google', 'Dans Google Analytics', 'En vérifiant le code source'],
              correctIndex: 1,
              explanation: 'La méthode la plus simple est de rechercher vos pages sur Google et de comparer le title affiché avec celui défini dans votre code.',
            },
            {
              question: 'Quel élément NE doit PAS figurer dans un title ?',
              options: ['Le mot-clé principal', 'L\'année (pour du contenu actuel)', 'Le même mot répété 5 fois', 'Le nom du site'],
              correctIndex: 2,
              explanation: 'Répéter le même mot plusieurs fois (keyword stuffing) est une pratique pénalisée par Google et nuit à la lisibilité.',
            },
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Ressources complémentaires',
      },
      {
        type: 'text',
        content: 'Pour approfondir vos connaissances sur le SEO on-page, consultez ces articles connexes :',
      },
      {
        type: 'list',
        content: [
          'Meta description : L\'art de rédiger des descriptions qui font cliquer - Le complément parfait du title',
          'Structure Hn : Organiser vos titres pour le SEO - La hiérarchie des contenus',
          'Retour au guide complet SEO On-Page - Vue d\'ensemble de l\'optimisation on-page',
        ],
      },
      {
        type: 'cta',
        content: {
          title: 'Passez à la pratique',
          description: 'Maintenant que vous maîtrisez la balise title, appliquez ces techniques sur votre site et mesurez les résultats.',
          buttonText: 'Continuer avec la meta description',
          buttonLink: '/seo-on-page/meta-description',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'meta-description',
    title: 'Meta Description : Rédiger des Descriptions qui Font Cliquer',
    metaTitle: 'Meta Description SEO - Guide 2026',
    metaDescription: 'Apprenez à rédiger des meta descriptions convaincantes qui augmentent votre taux de clic. Longueur, structure et exemples.',
    keyword: 'meta description',
    secondaryKeywords: ['balise meta description', 'description seo', 'optimiser meta description'],
    intent: 'info',
    cluster: 'seo-on-page',
    excerpt: 'La meta description n\'affecte pas directement le ranking, mais elle influence le CTR. Une bonne description peut doubler vos clics.',
    tableOfContents: true,
    readingTime: 28,
    difficulty: 'debutant',
    lastUpdated: '2026-01-16',
    author: 'marie-lefevre',
    relatedSlugs: ['balise-title', 'structure-hn'],
    faq: [
      {
        question: 'La meta description est-elle un facteur de ranking ?',
        answer: 'Non, Google a confirmé que la meta description n\'est pas un facteur de ranking direct. Cependant, elle influence le CTR, qui lui peut impacter indirectement le ranking.',
      },
      {
        question: 'Que faire si Google n\'affiche pas ma meta description ?',
        answer: 'Google génère parfois sa propre description à partir du contenu de la page. Assurez-vous que votre description correspond à l\'intention de recherche et contient les mots-clés recherchés.',
      },
      {
        question: 'Faut-il mettre des mots-clés dans la meta description ?',
        answer: 'Oui, les mots-clés recherchés apparaissent en gras dans la description, ce qui attire l\'œil. Incluez le mot-clé principal de façon naturelle.',
      },
      {
        question: 'Peut-on utiliser la même meta description sur plusieurs pages ?',
        answer: 'Non, chaque page doit avoir une description unique. Les descriptions dupliquées sont un signal de faible qualité pour Google.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'La meta description est votre argumentaire de vente dans les résultats de recherche. En 155 caractères, vous devez convaincre l\'internaute de cliquer sur votre résultat plutôt que sur celui d\'un concurrent.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Ce que vous allez apprendre',
          content: 'Ce guide premium vous enseigne l\'art de rédiger des meta descriptions qui convertissent : les règles fondamentales, les techniques de copywriting adaptées au SEO, et comment personnaliser vos descriptions selon le type de page.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Qu\'est-ce que la meta description ?',
      },
      {
        type: 'text',
        content: 'La meta description est une balise HTML qui fournit un résumé du contenu de la page. Elle apparaît sous le titre (balise title) dans les résultats de recherche Google, formant avec lui le "snippet" de votre page.',
      },
      {
        type: 'code',
        content: {
          language: 'html',
          code: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Votre Titre SEO</title>\n  <meta name="description" content="Votre meta description de 150-160 caractères qui incite au clic et contient votre mot-clé principal.">\n</head>\n<body>\n  <!-- Contenu -->\n</body>\n</html>',
          filename: 'exemple-meta.html',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Où apparaît la meta description',
      },
      {
        type: 'list',
        content: [
          'Dans les résultats de recherche Google (SERP) - sous le titre bleu',
          'Dans les partages sur les réseaux sociaux (si pas d\'og:description)',
          'Dans certains annuaires et agrégateurs de contenu',
          'Dans les aperçus de liens de certaines messageries',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Pourquoi la meta description est importante',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Impact sur le CTR (taux de clic)',
      },
      {
        type: 'text',
        content: 'Même si la meta description n\'est pas un facteur de ranking direct, elle a un impact majeur sur le taux de clic. Une description convaincante peut augmenter votre CTR de 30% ou plus, ce qui se traduit par plus de trafic sans améliorer vos positions.',
      },
      {
        type: 'text',
        content: 'Pensez-y : si vous êtes en position 3 avec un CTR de 8%, et que votre concurrent en position 2 a un CTR de 6%, vous recevez plus de clics malgré une position inférieure.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Signal de pertinence indirect',
      },
      {
        type: 'text',
        content: 'Le CTR est un signal comportemental que Google observe. Si votre résultat est systématiquement ignoré, c\'est un indicateur négatif. À l\'inverse, un fort CTR suggère que votre page est pertinente pour cette requête.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Mise en gras des mots-clés',
      },
      {
        type: 'text',
        content: 'Google met en gras dans la description les mots qui correspondent à la recherche de l\'utilisateur. Une description contenant le mot-clé recherché sera donc visuellement plus attractive.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Les règles d\'une meta description efficace',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Règle n°1 : Respecter la longueur optimale',
      },
      {
        type: 'text',
        content: 'Google affiche environ 155-160 caractères sur desktop et 120 caractères sur mobile. Voici les recommandations :',
      },
      {
        type: 'list',
        content: [
          'Minimum : 70 caractères (sinon trop vague)',
          'Idéal : 150-155 caractères',
          'Maximum : 160 caractères (au-delà, troncature)',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Astuce pratique',
          content: 'Mettez l\'information essentielle dans les 120 premiers caractères pour qu\'elle soit visible sur mobile aussi.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Règle n°2 : Inclure le mot-clé principal',
      },
      {
        type: 'text',
        content: 'Le mot-clé recherché sera mis en gras par Google, attirant l\'attention de l\'utilisateur. Incluez-le naturellement, idéalement dans la première moitié de la description.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Règle n°3 : Utiliser un call-to-action',
      },
      {
        type: 'text',
        content: 'Une description sans incitation à l\'action est une opportunité manquée. Utilisez des verbes d\'action qui créent l\'engagement :',
      },
      {
        type: 'table',
        content: {
          headers: ['Type de CTA', 'Exemples'],
          rows: [
            ['Découverte', 'Découvrez, Explorez, Plongez dans'],
            ['Apprentissage', 'Apprenez, Maîtrisez, Comprenez'],
            ['Action', 'Téléchargez, Inscrivez-vous, Commencez'],
            ['Comparaison', 'Comparez, Trouvez le meilleur'],
            ['Urgence', 'Profitez maintenant, Offre limitée'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Règle n°4 : Être unique pour chaque page',
      },
      {
        type: 'text',
        content: 'Chaque page mérite sa propre description. Les descriptions dupliquées signalent un contenu de faible qualité et gaspillent une opportunité de différenciation.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Règle n°5 : Promettre et tenir',
      },
      {
        type: 'text',
        content: 'Votre description doit refléter fidèlement le contenu de la page. Un décalage entre la promesse et la réalité augmente le taux de rebond et nuit à votre SEO à long terme.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Techniques de copywriting pour meta descriptions',
      },
      {
        type: 'heading',
        level: 3,
        content: 'La technique AIDA adaptée',
      },
      {
        type: 'text',
        content: 'Le modèle AIDA (Attention, Intérêt, Désir, Action) peut être condensé pour une meta description :',
      },
      {
        type: 'list',
        content: [
          'Attention : Commencez par un élément accrocheur ou le bénéfice principal',
          'Intérêt : Mentionnez ce que contient la page',
          'Désir : Ajoutez un élément de réassurance ou de différenciation',
          'Action : Terminez par un CTA',
        ],
      },
      {
        type: 'text',
        content: 'Exemple : "Boostez votre SEO en 30 jours [Attention]. Guide complet avec checklist et outils gratuits [Intérêt]. Par des experts certifiés [Désir]. Commencez maintenant [Action]."',
      },
      {
        type: 'heading',
        level: 3,
        content: 'L\'approche problème-solution',
      },
      {
        type: 'text',
        content: 'Identifiez le problème de votre audience et présentez votre page comme la solution :',
      },
      {
        type: 'text',
        content: 'Exemple : "Votre site ne génère pas de trafic ? Découvrez les 15 techniques SEO qui ont fait leurs preuves. Guide pas à pas pour débutants."',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les power words qui convertissent',
      },
      {
        type: 'text',
        content: 'Certains mots déclenchent une réponse émotionnelle et augmentent le CTR :',
      },
      {
        type: 'table',
        content: {
          headers: ['Catégorie', 'Power words'],
          rows: [
            ['Urgence', 'Maintenant, Aujourd\'hui, Limité, Dernière chance'],
            ['Exclusivité', 'Secret, Exclusif, VIP, Réservé'],
            ['Facilité', 'Simple, Rapide, Facile, Sans effort'],
            ['Résultats', 'Prouvé, Garanti, Testé, Efficace'],
            ['Gratuité', 'Gratuit, Offert, Bonus, Cadeau'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Meta descriptions par type de page',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Pages d\'articles de blog',
      },
      {
        type: 'text',
        content: 'Pour les articles, mettez en avant la valeur informative et l\'actualité du contenu :',
      },
      {
        type: 'table',
        content: {
          headers: ['Élément', 'Exemple'],
          rows: [
            ['Structure', '[Promesse] + [Contenu] + [Preuve de fraîcheur] + [CTA]'],
            ['Exemple', 'Apprenez à optimiser vos balises title comme un pro. 12 techniques + exemples concrets. Mis à jour janvier 2026. Guide complet.'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Pages produits e-commerce',
      },
      {
        type: 'text',
        content: 'Pour les fiches produits, incluez les caractéristiques clés et les avantages commerciaux :',
      },
      {
        type: 'table',
        content: {
          headers: ['Élément', 'Exemple'],
          rows: [
            ['Structure', '[Produit] + [Caractéristique clé] + [Avantage commercial] + [CTA]'],
            ['Exemple', 'Nike Air Max 90 Blanc - Confort optimal et design iconique. Livraison gratuite 24h. Retour facile 30 jours. Commandez maintenant.'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Pages de services',
      },
      {
        type: 'text',
        content: 'Pour les services, mettez en avant le bénéfice client et les éléments de réassurance :',
      },
      {
        type: 'table',
        content: {
          headers: ['Élément', 'Exemple'],
          rows: [
            ['Structure', '[Service] + [Bénéfice] + [Réassurance] + [CTA]'],
            ['Exemple', 'Audit SEO complet de votre site - Identifiez vos problèmes de référencement. Rapport détaillé sous 48h par des experts. Devis gratuit.'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Pages locales',
      },
      {
        type: 'text',
        content: 'Pour le SEO local, incluez la localisation et les services spécifiques :',
      },
      {
        type: 'table',
        content: {
          headers: ['Élément', 'Exemple'],
          rows: [
            ['Structure', '[Service] + [Lieu] + [Spécificité] + [CTA]'],
            ['Exemple', 'Plombier Paris 15 - Intervention d\'urgence 7j/7. Devis gratuit, déplacement offert. Appelez maintenant au 01 XX XX XX XX.'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°1 : Site de recettes - +67% de CTR',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un site de recettes de cuisine avec 500 recettes. CTR moyen de 2.3% malgré de bonnes positions. L\'objectif était d\'augmenter le trafic sans créer de nouveau contenu.',
        },
      },
      {
        type: 'text',
        content: 'RecettesFaciles.fr avait un problème classique : des meta descriptions générées automatiquement reprenant simplement les premiers mots de la recette.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'L\'analyse du problème',
      },
      {
        type: 'text',
        content: 'Les descriptions existantes ressemblaient à :',
      },
      {
        type: 'text',
        content: '"Pour cette recette de gâteau au chocolat, vous aurez besoin de 200g de chocolat, 150g de beurre, 4 œufs..."',
      },
      {
        type: 'text',
        content: 'Problèmes identifiés :',
      },
      {
        type: 'list',
        content: [
          'Aucune proposition de valeur (pourquoi choisir cette recette ?)',
          'Pas d\'information pratique (temps de préparation, difficulté)',
          'Pas de différenciation avec les milliers de recettes similaires',
          'Pas de call-to-action',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'La nouvelle stratégie',
      },
      {
        type: 'text',
        content: 'Un template de description a été créé pour chaque type de recette :',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: 'Template: [Accroche émotionnelle] [Nom recette]. [Temps] de préparation, [Difficulté]. [Particularité]. [CTA]\n\nExemple avant:\n"Pour cette recette de gâteau au chocolat, vous aurez besoin de 200g de chocolat, 150g de beurre..."\n\nExemple après:\n"Fondant irrésistible ! Recette gâteau chocolat moelleux. 15 min de préparation, ultra-facile. Testée et approuvée par 2000+ cuisiniers. Lancez-vous !"',
          filename: 'template-recette.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats après 2 mois',
      },
      {
        type: 'list',
        content: [
          'CTR moyen : de 2.3% à 3.8% (+67%)',
          'Trafic organique : +52% sur les mêmes positions',
          'Top recette : CTR passé de 4% à 9.2%',
          'Temps passé sur site : +23% (visiteurs mieux qualifiés)',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'success',
          title: 'Leçon clé',
          content: 'Les descriptions générées automatiquement sont presque toujours sous-optimales. Un template personnalisé par type de contenu peut transformer vos résultats.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°2 : E-commerce High-Tech - Descriptions produits',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Une boutique en ligne de produits high-tech avec 2 000 références. Les descriptions fournisseur étaient utilisées partout, créant du contenu dupliqué.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Le diagnostic',
      },
      {
        type: 'text',
        content: 'L\'audit a révélé que 95% des descriptions étaient identiques à celles de dizaines d\'autres revendeurs. Google n\'avait aucune raison de privilégier ce site.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'La stratégie de différenciation',
      },
      {
        type: 'text',
        content: 'Pour les 200 produits phares, des descriptions uniques ont été créées avec les éléments différenciants du site :',
      },
      {
        type: 'table',
        content: {
          headers: ['Produit', 'Description standard', 'Description optimisée'],
          rows: [
            ['iPhone 15 Pro', 'iPhone 15 Pro avec puce A17 Pro, écran Super Retina XDR...', 'iPhone 15 Pro en stock - Livraison Express 24h. Reprise ancien iPhone jusqu\'à 600€. Garantie 2 ans incluse. Financez en 4x sans frais.'],
            ['MacBook Air M3', 'MacBook Air avec puce M3 pour des performances exceptionnelles...', 'MacBook Air M3 au meilleur prix garanti. Livraison gratuite + housse offerte. Paiement 3x sans frais. Satisfait ou remboursé 30j.'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats',
      },
      {
        type: 'list',
        content: [
          'Visibilité des 200 fiches optimisées : +180%',
          'CTR moyen sur ces fiches : de 1.4% à 3.1%',
          'Taux de conversion : +12% (meilleure qualification)',
          'ROI : Coût de rédaction rentabilisé en 3 semaines',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°3 : Cabinet d\'avocats - Géolocalisation',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un cabinet d\'avocats spécialisé en droit du travail à Bordeaux. Site vitrine de 12 pages avec des descriptions vagues ne mentionnant pas la localisation.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'L\'audit initial',
      },
      {
        type: 'table',
        content: {
          headers: ['Page', 'Description avant'],
          rows: [
            ['Accueil', 'Cabinet d\'avocats spécialisé en droit du travail. Nous défendons vos droits.'],
            ['Licenciement', 'Informations sur le licenciement et vos recours possibles.'],
            ['Harcèlement', 'Nous vous accompagnons dans les affaires de harcèlement au travail.'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les nouvelles descriptions localisées',
      },
      {
        type: 'table',
        content: {
          headers: ['Page', 'Description après'],
          rows: [
            ['Accueil', 'Avocat droit du travail Bordeaux - Cabinet Dupont. 20 ans d\'expérience, 95% de cas gagnés. RDV sous 48h. Première consultation gratuite.'],
            ['Licenciement', 'Avocat licenciement Bordeaux - Contestez votre licenciement abusif. Expertise reconnue, indemnités maximales négociées. Consultation offerte.'],
            ['Harcèlement', 'Avocat harcèlement travail Bordeaux - Faites valoir vos droits. Accompagnement complet et discret. Premiers échanges confidentiels gratuits.'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats après 3 mois',
      },
      {
        type: 'list',
        content: [
          '"Avocat licenciement Bordeaux" : non classé → position 5',
          '"Avocat droit du travail Bordeaux" : position 18 → position 4',
          'Demandes de RDV via le site : de 2/mois à 15/mois',
          'CTR global : de 1.8% à 4.5%',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'SEO local',
          content: 'Pour les services locaux, incluez TOUJOURS la ville dans vos meta descriptions. C\'est un signal fort de pertinence locale et cela rassure les internautes.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Pourquoi Google ignore parfois vos descriptions',
      },
      {
        type: 'text',
        content: 'Il arrive que Google affiche une description différente de celle que vous avez définie. Comprendre pourquoi permet d\'éviter ce problème.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les raisons principales',
      },
      {
        type: 'list',
        content: [
          'La description ne correspond pas à l\'intention de recherche',
          'Le mot-clé recherché n\'est pas dans votre description',
          'La description est trop longue ou mal formatée',
          'Google trouve un passage du contenu plus pertinent',
          'La description est dupliquée sur d\'autres pages',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Comment maximiser les chances d\'affichage',
      },
      {
        type: 'list',
        content: [
          'Incluez les mots-clés principaux de la page',
          'Alignez la description avec l\'intention de recherche',
          'Respectez la longueur recommandée (150-160 caractères)',
          'Rendez la description unique et pertinente',
          'Assurez la cohérence avec le contenu de la page',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Exercices pratiques',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 1 : Audit de vos descriptions actuelles',
      },
      {
        type: 'text',
        content: 'Analysez les 10 pages principales de votre site :',
      },
      {
        type: 'table',
        content: {
          headers: ['Page', 'Description actuelle', 'Longueur', 'Mot-clé présent ?', 'CTA ?', 'Note /5'],
          rows: [
            ['Accueil', '...', '... car.', 'Oui/Non', 'Oui/Non', '.../5'],
            ['Page 2', '...', '...', '...', '...', '...'],
            ['Page 3', '...', '...', '...', '...', '...'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Réécriture avec la méthode AIDA',
      },
      {
        type: 'text',
        content: 'Prenez 3 pages de votre site et réécrivez leur description en utilisant la méthode AIDA :',
      },
      {
        type: 'list',
        content: [
          'Page 1 : Identifiez A-I-D-A et rédigez (max 155 caractères)',
          'Page 2 : Même exercice avec un CTA différent',
          'Page 3 : Même exercice en incluant un élément de réassurance',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Création de templates',
      },
      {
        type: 'text',
        content: 'Créez un template de description pour chaque type de page de votre site :',
      },
      {
        type: 'table',
        content: {
          headers: ['Type de page', 'Template'],
          rows: [
            ['Article de blog', '[Promesse] + [Contenu] + [Fraîcheur] + [CTA]'],
            ['Fiche produit', '[Produit] + [Bénéfice] + [Avantage commercial] + [CTA]'],
            ['Page service', '[Service] + [Bénéfice] + [Réassurance] + [CTA]'],
            ['Page catégorie', '[Catégorie] + [Nombre produits] + [Avantage] + [CTA]'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Test A/B de descriptions',
      },
      {
        type: 'text',
        content: 'Choisissez une page avec du trafic et testez deux versions :',
      },
      {
        type: 'list',
        content: [
          '1. Notez le CTR actuel (Google Search Console)',
          '2. Changez la description (version A avec CTA fort)',
          '3. Mesurez après 3 semaines',
          '4. Testez version B (avec élément de réassurance)',
          '5. Comparez et conservez la meilleure',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quiz : Meta Description',
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Meta Description',
          questions: [
            {
              question: 'La meta description est-elle un facteur de ranking direct ?',
              options: ['Oui, c\'est un facteur majeur', 'Non, mais elle influence le CTR', 'Oui, depuis 2024', 'Non, Google l\'ignore totalement'],
              correctIndex: 1,
              explanation: 'Google a confirmé que la meta description n\'est pas un facteur de ranking direct. Cependant, elle influence le CTR qui peut impacter indirectement le ranking.',
            },
            {
              question: 'Quelle est la longueur idéale d\'une meta description ?',
              options: ['50-60 caractères', '100-120 caractères', '150-160 caractères', '200+ caractères'],
              correctIndex: 2,
              explanation: 'La longueur idéale est de 150-160 caractères. Au-delà, Google tronque la description.',
            },
            {
              question: 'Pourquoi inclure le mot-clé dans la meta description ?',
              options: ['Pour le ranking direct', 'Il sera mis en gras par Google', 'C\'est obligatoire', 'Pour éviter les pénalités'],
              correctIndex: 1,
              explanation: 'Les mots-clés recherchés apparaissent en gras dans la description, ce qui attire l\'attention de l\'utilisateur.',
            },
            {
              question: 'Qu\'est-ce qu\'un call-to-action efficace dans une description ?',
              options: ['Une longue explication', 'Un verbe d\'action incitant au clic', 'Le numéro de téléphone', 'Une liste de mots-clés'],
              correctIndex: 1,
              explanation: 'Un call-to-action efficace utilise des verbes d\'action comme "Découvrez", "Apprenez", "Téléchargez" pour inciter au clic.',
            },
            {
              question: 'Peut-on utiliser la même description sur plusieurs pages ?',
              options: ['Oui, c\'est recommandé', 'Non, chaque page doit être unique', 'Oui, si les pages sont similaires', 'Seulement pour les pages produits'],
              correctIndex: 1,
              explanation: 'Chaque page doit avoir une description unique. Les descriptions dupliquées signalent un contenu de faible qualité.',
            },
            {
              question: 'Que faire si Google n\'affiche pas votre description ?',
              options: ['Rien, c\'est normal', 'Vérifier que le mot-clé est présent et que la description correspond à l\'intention', 'Dupliquer la description', 'Supprimer la description'],
              correctIndex: 1,
              explanation: 'Google peut ignorer votre description si elle ne contient pas le mot-clé recherché ou ne correspond pas à l\'intention de recherche.',
            },
            {
              question: 'Quel type de "power words" peut augmenter le CTR ?',
              options: ['Mots techniques', 'Mots émotionnels (gratuit, exclusif, urgent)', 'Mots très longs', 'Mots en anglais'],
              correctIndex: 1,
              explanation: 'Les power words émotionnels comme "gratuit", "exclusif", "urgent" déclenchent une réponse émotionnelle et augmentent le CTR.',
            },
            {
              question: 'Pour une page locale, que doit inclure la description ?',
              options: ['Uniquement le service', 'La ville et le service', 'L\'historique de l\'entreprise', 'Le CV des employés'],
              correctIndex: 1,
              explanation: 'Pour le SEO local, la description doit inclure la ville et le service pour être pertinente sur les recherches géolocalisées.',
            },
            {
              question: 'Quelle méthode de copywriting est adaptée aux meta descriptions ?',
              options: ['AIDA (Attention, Intérêt, Désir, Action)', 'Lorem Ipsum', 'Copier les concurrents', 'Écrire le plus possible'],
              correctIndex: 0,
              explanation: 'La méthode AIDA peut être adaptée aux meta descriptions : Attention (accroche), Intérêt (contenu), Désir (réassurance), Action (CTA).',
            },
            {
              question: 'Combien de caractères sont affichés sur mobile ?',
              options: ['Identique au desktop', 'Environ 120 caractères', 'Environ 200 caractères', 'Aucun, la description n\'apparaît pas'],
              correctIndex: 1,
              explanation: 'Sur mobile, Google affiche environ 120 caractères contre 155-160 sur desktop. Mettez l\'essentiel au début.',
            },
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Ressources complémentaires',
      },
      {
        type: 'text',
        content: 'Pour approfondir vos connaissances sur le SEO on-page, consultez ces articles connexes :',
      },
      {
        type: 'list',
        content: [
          'Balise Title SEO : Comment rédiger des titres qui rankent - Le compagnon essentiel de la meta description',
          'Structure Hn : Organiser vos titres pour le SEO - La hiérarchie des contenus',
          'Guide complet SEO On-Page - Vue d\'ensemble de l\'optimisation on-page',
        ],
      },
      {
        type: 'cta',
        content: {
          title: 'Continuez votre apprentissage',
          description: 'Maintenant que vous maîtrisez la meta description, découvrez comment structurer vos contenus avec les balises Hn.',
          buttonText: 'Découvrir la structure Hn',
          buttonLink: '/seo-on-page/structure-hn',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'structure-hn',
    title: 'Structure Hn : Organiser vos Titres pour le SEO',
    metaTitle: 'Structure H1 H2 H3 SEO - Guide Titres 2026',
    metaDescription: 'Maîtrisez la structure des balises Hn (H1, H2, H3...) pour améliorer votre SEO et l\'expérience utilisateur. Guide complet avec exemples.',
    keyword: 'structure hn seo',
    secondaryKeywords: ['balise h1', 'hiérarchie titres', 'h1 h2 h3 seo'],
    intent: 'info',
    cluster: 'seo-on-page',
    excerpt: 'Les balises H1 à H6 structurent votre contenu et aident Google à comprendre votre page. Une hiérarchie bien pensée améliore le SEO et la lisibilité.',
    tableOfContents: true,
    readingTime: 28,
    difficulty: 'debutant',
    lastUpdated: '2026-01-14',
    author: 'thomas-dupont',
    relatedSlugs: ['balise-title', 'meta-description'],
    faq: [
      {
        question: 'Peut-on avoir plusieurs H1 sur une page ?',
        answer: 'Techniquement oui depuis HTML5, mais il est recommandé de n\'avoir qu\'un seul H1 par page pour une structure claire et un SEO optimal.',
      },
      {
        question: 'Faut-il inclure des mots-clés dans tous les Hn ?',
        answer: 'Incluez le mot-clé principal dans le H1 et utilisez des variations ou mots-clés secondaires dans les H2-H3. Restez naturel, pas de keyword stuffing.',
      },
      {
        question: 'Quelle est la différence entre le H1 et le title ?',
        answer: 'Le title apparaît dans les SERPs et les onglets du navigateur. Le H1 est le titre visible sur la page. Ils peuvent être similaires mais pas forcément identiques.',
      },
      {
        question: 'Les balises Hn affectent-elles vraiment le SEO ?',
        answer: 'Oui, Google utilise les Hn pour comprendre la structure et les sujets abordés. Une hiérarchie claire améliore la compréhension sémantique de votre page.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Les balises de titre (H1 à H6) sont comme le sommaire de votre page. Elles permettent aux lecteurs et à Google de comprendre rapidement la structure et les sujets abordés dans votre contenu.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Ce que vous allez apprendre',
          content: 'Ce guide premium vous enseigne comment structurer parfaitement vos contenus avec les balises Hn : les règles de hiérarchie, l\'optimisation SEO, et les erreurs à éviter. Vous découvrirez des études de cas réels et pratiquerez avec des exercices concrets.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Comprendre les balises Hn',
      },
      {
        type: 'text',
        content: 'Les balises Hn (H1 à H6) sont des éléments HTML qui définissent les titres et sous-titres de votre page. Le "n" représente le niveau hiérarchique, H1 étant le plus important et H6 le moins important.',
      },
      {
        type: 'code',
        content: {
          language: 'html',
          code: '<h1>Titre principal de la page</h1>\n<p>Introduction...</p>\n\n<h2>Première grande section</h2>\n<p>Contenu de la section...</p>\n\n<h3>Sous-section 1.1</h3>\n<p>Détails...</p>\n\n<h3>Sous-section 1.2</h3>\n<p>Détails...</p>\n\n<h2>Deuxième grande section</h2>\n<p>Contenu...</p>',
          filename: 'structure-hn.html',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'La hiérarchie des Hn',
      },
      {
        type: 'text',
        content: 'Les balises Hn forment une hiérarchie stricte, comme les chapitres d\'un livre :',
      },
      {
        type: 'table',
        content: {
          headers: ['Balise', 'Rôle', 'Fréquence recommandée', 'Équivalent livre'],
          rows: [
            ['H1', 'Titre principal de la page', '1 seul par page', 'Titre du livre'],
            ['H2', 'Grandes sections/chapitres', '2-10 par page', 'Chapitres'],
            ['H3', 'Sous-sections', 'Selon besoin', 'Sous-chapitres'],
            ['H4', 'Sous-sous-sections', 'Rare', 'Paragraphes titrés'],
            ['H5-H6', 'Divisions fines', 'Très rare', 'Sous-paragraphes'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Pourquoi la structure Hn est cruciale pour le SEO',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Compréhension sémantique par Google',
      },
      {
        type: 'text',
        content: 'Google utilise les balises Hn pour comprendre de quoi parle votre page et comment l\'information est organisée. Une structure claire aide l\'algorithme à identifier les sujets principaux et secondaires.',
      },
      {
        type: 'text',
        content: 'Les Hn contribuent aussi aux featured snippets (position 0). Google peut extraire une section bien structurée pour l\'afficher directement dans les résultats de recherche.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Amélioration de l\'expérience utilisateur',
      },
      {
        type: 'text',
        content: 'Les titres permettent aux lecteurs de scanner rapidement votre contenu et de trouver l\'information recherchée. Une bonne structure réduit le taux de rebond et augmente le temps passé sur la page.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Accessibilité',
      },
      {
        type: 'text',
        content: 'Les lecteurs d\'écran utilisent les Hn pour permettre aux utilisateurs malvoyants de naviguer dans le contenu. Une structure logique est essentielle pour l\'accessibilité.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Le H1 : titre principal',
      },
      {
        type: 'text',
        content: 'Le H1 est le titre le plus important de votre page. Il indique à Google et aux visiteurs le sujet principal du contenu.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les règles du H1',
      },
      {
        type: 'list',
        content: [
          'Un seul H1 par page (règle d\'or)',
          'Contient le mot-clé principal',
          'Décrit précisément le contenu de la page',
          'Visible en haut de la page (au-dessus de la ligne de flottaison)',
          'Différent de la balise title (peut être plus long ou plus descriptif)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'H1 vs Title : quelle différence ?',
      },
      {
        type: 'table',
        content: {
          headers: ['Caractéristique', 'Balise Title', 'H1'],
          rows: [
            ['Où il apparaît', 'SERPs, onglet navigateur', 'Sur la page elle-même'],
            ['Longueur idéale', '50-60 caractères', 'Pas de limite stricte'],
            ['Objectif', 'Inciter au clic', 'Décrire le contenu'],
            ['Contenu', 'Optimisé pour le CTR', 'Optimisé pour la lecture'],
          ],
        },
      },
      {
        type: 'text',
        content: 'Le title et le H1 peuvent être identiques, similaires, ou différents. L\'important est que les deux contiennent le mot-clé principal.',
      },
      {
        type: 'code',
        content: {
          language: 'html',
          code: '<!-- Exemple : Title et H1 similaires mais pas identiques -->\n<title>SEO On-Page : Guide Complet 2026 | MonSite</title>\n\n<h1>Guide Complet du SEO On-Page : Tout ce que vous devez savoir</h1>',
          filename: 'title-h1.html',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Les H2 : grandes sections',
      },
      {
        type: 'text',
        content: 'Les H2 divisent votre contenu en grandes parties thématiques. Ce sont les "chapitres" de votre article.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Bonnes pratiques pour les H2',
      },
      {
        type: 'list',
        content: [
          'Utilisez 3 à 10 H2 selon la longueur du contenu',
          'Chaque H2 doit introduire un nouveau sujet/aspect',
          'Incluez des mots-clés secondaires naturellement',
          'Formulez-les de manière descriptive (pas juste "Introduction")',
          'Gardez une cohérence de style (questions, actions, thèmes...)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exemples de styles de H2',
      },
      {
        type: 'table',
        content: {
          headers: ['Style', 'Exemple', 'Idéal pour'],
          rows: [
            ['Question', 'Comment optimiser son H1 ?', 'Articles tutoriels'],
            ['Action', 'Optimisez vos balises Hn', 'Guides pratiques'],
            ['Thématique', 'L\'importance du H1 en SEO', 'Articles informatifs'],
            ['Liste', 'Les 5 erreurs de structure Hn', 'Articles listes'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Les H3-H6 : sous-sections',
      },
      {
        type: 'text',
        content: 'Les H3 subdivisent les H2, les H4 subdivisent les H3, etc. La règle d\'or : ne jamais sauter de niveau.',
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Erreur fréquente',
          content: 'Ne passez jamais de H2 à H4 directement. Si vous avez besoin d\'un H4, vous devez avoir un H3 parent. Sinon, utilisez simplement un H3.',
        },
      },
      {
        type: 'text',
        content: 'En pratique, H1, H2 et H3 suffisent pour 95% des contenus. Les H4-H6 sont rarement nécessaires, sauf pour des contenus très longs et techniques.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°1 : Blog lifestyle - Restructuration complète',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un blog lifestyle avec 150 articles. Structure Hn chaotique : multiples H1, H3 avant H2, titres stylisés avec <strong> au lieu de balises Hn. Trafic stagnant.',
        },
      },
      {
        type: 'text',
        content: 'VieMagazine.fr avait un problème technique majeur : le template WordPress utilisait des balises H1 pour les titres de widgets dans la sidebar, créant jusqu\'à 5 H1 par page.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'L\'audit structure Hn',
      },
      {
        type: 'text',
        content: 'Un crawl avec Screaming Frog a révélé :',
      },
      {
        type: 'list',
        content: [
          '78% des pages avec plusieurs H1',
          '45% des pages avec des sauts de hiérarchie (H2 → H4)',
          '30% des pages sans H1 du tout (titre en CSS, pas en HTML)',
          '60% des H2 étaient des titres génériques ("À lire aussi", "Articles similaires")',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les corrections appliquées',
      },
      {
        type: 'table',
        content: {
          headers: ['Problème', 'Solution'],
          rows: [
            ['Multiples H1 dans sidebar', 'Changé en <span> ou <p> avec CSS'],
            ['Titre article en CSS', 'Converti en vrai H1 HTML'],
            ['H3 avant H2', 'Restructuré la hiérarchie logiquement'],
            ['H2 génériques', 'Remplacés par des titres descriptifs'],
            ['Sauts de niveau', 'Ajout des niveaux manquants'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exemple de restructuration d\'article',
      },
      {
        type: 'text',
        content: 'Article : "10 idées de décoration salon"',
      },
      {
        type: 'table',
        content: {
          headers: ['Avant', 'Après'],
          rows: [
            ['H1: Logo du site (sidebar)', 'H1: 10 Idées de Décoration Salon Tendance 2026'],
            ['H1: Widget "Articles populaires"', 'H2: Les styles de déco salon en vogue'],
            ['H3: 10 idées de décoration', 'H3: Style scandinave'],
            ['H4: Idée 1', 'H3: Style industriel'],
            ['(pas de H2)', 'H2: Comment choisir sa déco'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats après 3 mois',
      },
      {
        type: 'list',
        content: [
          'Trafic organique : +45%',
          'Position moyenne : de 18 à 12',
          'Pages en page 1 : de 12 à 34',
          'Featured snippets obtenus : 8 (avant : 0)',
          'Temps moyen sur page : +35%',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'success',
          title: 'Leçon clé',
          content: 'Une restructuration Hn seule, sans créer de nouveau contenu, peut générer des gains significatifs. C\'est souvent la première chose à vérifier lors d\'un audit SEO.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°2 : Site e-commerce - Pages catégories',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Une boutique de vêtements avec 50 catégories. Les pages catégories n\'avaient aucun contenu textuel, juste une grille de produits. Position moyenne : 25+.',
        },
      },
      {
        type: 'text',
        content: 'ModePlus.fr avait des pages catégories quasi vides du point de vue SEO : un H1 (le nom de la catégorie) et une liste de produits. Aucune chance de ranker.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'La stratégie de contenu structuré',
      },
      {
        type: 'text',
        content: 'Pour chaque catégorie principale, un bloc de contenu structuré a été ajouté en haut et/ou en bas de page :',
      },
      {
        type: 'code',
        content: {
          language: 'html',
          code: '<!-- Structure type pour page catégorie -->\n<h1>Robes Femme - Collection 2026</h1>\n<p>Introduction et description de la catégorie...</p>\n\n<!-- Grille produits -->\n\n<h2>Comment choisir sa robe</h2>\n<h3>Selon sa morphologie</h3>\n<p>Conseils...</p>\n<h3>Selon l\'occasion</h3>\n<p>Conseils...</p>\n\n<h2>Les tendances robes 2026</h2>\n<p>Description des tendances...</p>\n\n<h2>Guide des tailles</h2>\n<p>Tableau et conseils...</p>',
          filename: 'page-categorie.html',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Application sur la catégorie "Robes"',
      },
      {
        type: 'table',
        content: {
          headers: ['Avant', 'Après'],
          rows: [
            ['H1: Robes', 'H1: Robes Femme - Collection Printemps-Été 2026'],
            ['(rien d\'autre)', 'H2: Nos robes par style (courtes, longues, cocktail)'],
            ['', 'H2: Comment choisir sa robe'],
            ['', 'H3: Selon votre morphologie'],
            ['', 'H3: Selon l\'occasion'],
            ['', 'H2: Guide des tailles robes'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats sur 6 mois',
      },
      {
        type: 'list',
        content: [
          'Page "Robes" : de position 32 à position 6',
          'Trafic catégorie "Robes" : +420%',
          'Ensemble des catégories optimisées : +180% de trafic',
          'Chiffre d\'affaires organique : +65%',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Astuce e-commerce',
          content: 'Les pages catégories sont souvent sous-optimisées. Ajoutez du contenu structuré (guides d\'achat, tendances, conseils) pour les transformer en véritables pages ressources.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°3 : Documentation technique - Hiérarchie complexe',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'La documentation d\'un logiciel SaaS avec 200+ pages. Structure très profonde avec des H5 et H6, confuse pour les utilisateurs et pour Google.',
        },
      },
      {
        type: 'text',
        content: 'TechDoc.io avait poussé la logique Hn à l\'extrême avec des structures allant jusqu\'à H6, créant des pages de 3000 mots illisibles.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Le problème identifié',
      },
      {
        type: 'list',
        content: [
          'Hiérarchie trop profonde : H1 > H2 > H3 > H4 > H5 > H6',
          'Utilisateurs perdus dans la navigation',
          'Google peinait à identifier les sujets clés',
          'Taux de rebond de 78%',
          'Aucune page en featured snippet',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'La refonte de l\'architecture',
      },
      {
        type: 'text',
        content: 'Plutôt que d\'avoir des pages très longues avec des H6, le contenu a été divisé en pages plus courtes avec une structure simplifiée :',
      },
      {
        type: 'table',
        content: {
          headers: ['Avant', 'Après'],
          rows: [
            ['1 page de 5000 mots avec H1-H6', '5 pages de 1000 mots avec H1-H3 max'],
            ['Structure : 6 niveaux de profondeur', 'Structure : 3 niveaux max'],
            ['Navigation confuse', 'Table des matières claire'],
            ['Liens internes rares', 'Maillage entre pages liées'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats',
      },
      {
        type: 'list',
        content: [
          'Taux de rebond : de 78% à 45%',
          'Pages vues par session : de 1.3 à 3.8',
          'Featured snippets obtenus : 23 (avant : 0)',
          'Requêtes positionnées : +340%',
          'Tickets support : -25% (documentation plus claire)',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'success',
          title: 'Leçon clé',
          content: 'Plus de niveaux Hn ne signifie pas meilleur SEO. Une structure simple (H1-H2-H3) avec plusieurs pages interconnectées est souvent plus efficace qu\'une seule page hyper-détaillée.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Erreurs courantes de structure Hn',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Erreur 1 : Plusieurs H1',
      },
      {
        type: 'text',
        content: 'Même si HTML5 permet techniquement plusieurs H1, c\'est une mauvaise pratique SEO. Cela dilue le signal sur le sujet principal de la page.',
      },
      {
        type: 'text',
        content: 'Sources fréquentes de H1 multiples : sidebar, header, widgets, footer. Vérifiez avec l\'inspecteur de votre navigateur.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Erreur 2 : Sauter des niveaux',
      },
      {
        type: 'text',
        content: 'Passer de H2 à H4 directement crée une structure incohérente. Si vous n\'avez pas besoin de H3, n\'utilisez pas H4.',
      },
      {
        type: 'code',
        content: {
          language: 'html',
          code: '<!-- ❌ MAUVAIS -->\n<h2>Section principale</h2>\n<h4>Sous-section</h4>  <!-- Erreur : H3 manquant -->\n\n<!-- ✓ BON -->\n<h2>Section principale</h2>\n<h3>Sous-section</h3>  <!-- Correct -->',
          filename: 'erreur-saut.html',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Erreur 3 : Utiliser les Hn pour le style',
      },
      {
        type: 'text',
        content: 'Les Hn ne sont pas des outils de mise en forme. Si vous voulez un texte plus gros, utilisez CSS, pas un H2.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Erreur 4 : H1 absent ou caché',
      },
      {
        type: 'text',
        content: 'Chaque page doit avoir un H1 visible. Un H1 masqué en CSS ou absent nuit au SEO et à l\'accessibilité.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Erreur 5 : Hn trop génériques',
      },
      {
        type: 'text',
        content: 'Des titres comme "Introduction", "Conclusion", "Plus d\'infos" n\'apportent aucune valeur SEO. Soyez descriptif.',
      },
      {
        type: 'table',
        content: {
          headers: ['Hn générique ❌', 'Hn descriptif ✓'],
          rows: [
            ['Introduction', 'Pourquoi la structure Hn est essentielle'],
            ['Conseils', '5 conseils pour optimiser vos balises Hn'],
            ['Conclusion', 'Récapitulatif : les règles Hn à retenir'],
            ['Plus d\'infos', 'Ressources pour approfondir le SEO on-page'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Outils pour analyser la structure Hn',
      },
      {
        type: 'table',
        content: {
          headers: ['Outil', 'Usage', 'Prix'],
          rows: [
            ['HeadingsMap (extension)', 'Visualiser la structure d\'une page', 'Gratuit'],
            ['Screaming Frog', 'Auditer toutes les pages d\'un site', 'Gratuit (500 URLs)'],
            ['Web Developer (extension)', 'Afficher le plan du document', 'Gratuit'],
            ['WAVE', 'Vérifier l\'accessibilité des Hn', 'Gratuit'],
            ['Ahrefs/Semrush', 'Audit SEO complet incluant les Hn', 'Payant'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Exercices pratiques',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 1 : Audit de vos pages',
      },
      {
        type: 'text',
        content: 'Installez l\'extension HeadingsMap et analysez 5 pages de votre site :',
      },
      {
        type: 'table',
        content: {
          headers: ['Page', 'Nb H1', 'Sauts de niveau ?', 'H1 contient mot-clé ?', 'Actions nécessaires'],
          rows: [
            ['...', '...', 'Oui/Non', 'Oui/Non', '...'],
            ['...', '...', '...', '...', '...'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Créer un plan d\'article',
      },
      {
        type: 'text',
        content: 'Avant de rédiger votre prochain article, créez d\'abord la structure Hn :',
      },
      {
        type: 'list',
        content: [
          '1. Définissez le mot-clé principal → H1',
          '2. Listez 5-8 sous-thèmes → H2',
          '3. Pour chaque H2, identifiez si des H3 sont nécessaires',
          '4. Vérifiez qu\'il n\'y a pas de sauts de niveau',
          '5. Assurez-vous que les Hn sont descriptifs',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Restructurer un contenu existant',
      },
      {
        type: 'text',
        content: 'Prenez un article existant et restructurez-le :',
      },
      {
        type: 'list',
        content: [
          '1. Copiez le contenu dans un document vierge',
          '2. Identifiez les sections naturelles',
          '3. Attribuez les niveaux Hn appropriés',
          '4. Réécrivez les titres génériques',
          '5. Vérifiez la hiérarchie finale',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Optimisation pour featured snippet',
      },
      {
        type: 'text',
        content: 'Pour obtenir un featured snippet, structurez une section de réponse :',
      },
      {
        type: 'code',
        content: {
          language: 'html',
          code: '<!-- Structure optimisée pour featured snippet -->\n<h2>Qu\'est-ce que [mot-clé] ?</h2>\n<p>[Définition claire en 40-60 mots répondant directement à la question]</p>\n\n<!-- OU pour une liste -->\n<h2>Les [nombre] étapes pour [action]</h2>\n<ol>\n  <li>[Étape 1]</li>\n  <li>[Étape 2]</li>\n  <!-- ... -->\n</ol>',
          filename: 'featured-snippet.html',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quiz : Structure Hn SEO',
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Structure Hn SEO',
          questions: [
            {
              question: 'Combien de H1 doit contenir une page ?',
              options: ['Aucun', 'Un seul', 'Deux ou trois', 'Autant que nécessaire'],
              correctIndex: 1,
              explanation: 'Une page doit contenir un seul H1 qui représente le titre principal et le sujet de la page.',
            },
            {
              question: 'Peut-on passer directement de H2 à H4 ?',
              options: ['Oui, c\'est recommandé', 'Non, il faut respecter la hiérarchie', 'Oui, si le H3 n\'est pas nécessaire', 'Seulement sur mobile'],
              correctIndex: 1,
              explanation: 'Non, il ne faut jamais sauter de niveau. Si vous avez besoin d\'un H4, vous devez avoir un H3 parent.',
            },
            {
              question: 'Quelle est la différence entre le title et le H1 ?',
              options: ['Aucune, c\'est identique', 'Le title est dans les SERPs, le H1 sur la page', 'Le H1 est plus important', 'Le title n\'existe plus'],
              correctIndex: 1,
              explanation: 'Le title apparaît dans les résultats de recherche et les onglets. Le H1 est le titre visible sur la page elle-même.',
            },
            {
              question: 'Pourquoi les Hn sont-ils importants pour l\'accessibilité ?',
              options: ['Ils ne le sont pas', 'Les lecteurs d\'écran les utilisent pour naviguer', 'Ils changent la couleur', 'Ils ajoutent des images'],
              correctIndex: 1,
              explanation: 'Les lecteurs d\'écran utilisent les Hn pour permettre aux utilisateurs malvoyants de naviguer dans le contenu.',
            },
            {
              question: 'Quel outil permet de visualiser la structure Hn d\'une page ?',
              options: ['Google Analytics', 'HeadingsMap', 'Google Ads', 'Photoshop'],
              correctIndex: 1,
              explanation: 'HeadingsMap est une extension gratuite qui affiche la structure des titres de n\'importe quelle page web.',
            },
            {
              question: 'Quelle est l\'erreur dans : H1 > H2 > H4 > H5 ?',
              options: ['Trop de niveaux', 'H3 manquant', 'H1 en premier', 'Aucune erreur'],
              correctIndex: 1,
              explanation: 'Le H3 est manquant. On ne peut pas passer de H2 à H4 directement, il faut respecter la hiérarchie.',
            },
            {
              question: 'Les balises Hn doivent-elles être utilisées pour le style ?',
              options: ['Oui, c\'est leur rôle', 'Non, utilisez CSS pour le style', 'Seulement les H1', 'Seulement sur la page d\'accueil'],
              correctIndex: 1,
              explanation: 'Les Hn sont des balises sémantiques, pas de style. Utilisez CSS pour modifier l\'apparence du texte.',
            },
            {
              question: 'Combien de H2 maximum par page ?',
              options: ['1', '3', 'Pas de limite stricte (généralement 3-10)', '100'],
              correctIndex: 2,
              explanation: 'Il n\'y a pas de limite stricte, mais généralement 3-10 H2 selon la longueur du contenu. L\'important est la pertinence.',
            },
            {
              question: 'Un H1 caché en CSS est-il acceptable ?',
              options: ['Oui, c\'est une bonne pratique', 'Non, le H1 doit être visible', 'Oui, pour le design', 'Seulement sur mobile'],
              correctIndex: 1,
              explanation: 'Non, un H1 doit être visible pour les utilisateurs. Le cacher peut être perçu comme une technique trompeuse.',
            },
            {
              question: 'Quel titre H2 est le mieux optimisé ?',
              options: ['Introduction', 'Conseils', 'Comment optimiser vos balises Hn pour le SEO', 'Plus d\'infos'],
              correctIndex: 2,
              explanation: 'Un titre descriptif comme "Comment optimiser vos balises Hn pour le SEO" apporte plus de valeur SEO que des titres génériques.',
            },
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Ressources complémentaires',
      },
      {
        type: 'text',
        content: 'Pour continuer votre apprentissage du SEO on-page, consultez ces articles :',
      },
      {
        type: 'list',
        content: [
          'Balise Title SEO : Comment rédiger des titres qui rankent - L\'autre balise essentielle',
          'Meta Description : Rédiger des descriptions qui font cliquer - Complétez votre snippet',
          'Guide complet SEO On-Page - Vue d\'ensemble de l\'optimisation',
        ],
      },
      {
        type: 'cta',
        content: {
          title: 'Passez à l\'optimisation des images',
          description: 'Maintenant que vous maîtrisez la structure Hn, découvrez comment optimiser vos images pour le SEO.',
          buttonText: 'Optimisation des images',
          buttonLink: '/seo-on-page/optimisation-images',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'optimisation-images',
    title: 'Optimisation des Images pour le SEO : Guide Complet',
    metaTitle: 'Optimisation Images SEO - Guide 2026',
    metaDescription: 'Optimisez vos images pour le SEO : attribut alt, compression, format, nom de fichier. Tout pour améliorer votre référencement et vitesse.',
    keyword: 'optimisation images seo',
    secondaryKeywords: ['alt image seo', 'compression images', 'images référencement'],
    intent: 'info',
    cluster: 'seo-on-page',
    excerpt: 'Les images peuvent générer du trafic via Google Images et améliorer l\'expérience utilisateur. Encore faut-il les optimiser correctement.',
    tableOfContents: true,
    readingTime: 30,
    difficulty: 'debutant',
    lastUpdated: '2026-01-12',
    author: 'marie-lefevre',
    relatedSlugs: ['structure-hn', 'url-seo-friendly'],
    faq: [
      {
        question: 'Quelle est la longueur idéale d\'un attribut alt ?',
        answer: 'Entre 5 et 15 mots. L\'alt doit décrire l\'image de manière concise et inclure le mot-clé si c\'est naturel. Évitez les alt trop longs ou le keyword stuffing.',
      },
      {
        question: 'Quel format d\'image choisir pour le SEO ?',
        answer: 'WebP offre le meilleur rapport qualité/poids. JPEG pour les photos, PNG pour les images avec transparence. Évitez les BMP et GIF pour les images principales.',
      },
      {
        question: 'Les images affectent-elles la vitesse du site ?',
        answer: 'Oui, les images représentent souvent 50-80% du poids d\'une page. Des images non optimisées peuvent multiplier le temps de chargement par 3 ou 4.',
      },
      {
        question: 'Le lazy loading est-il bon pour le SEO ?',
        answer: 'Oui, le lazy loading améliore les performances. Google le recommande pour les images sous la ligne de flottaison. Attention à ne pas l\'appliquer sur les images importantes du haut de page.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Les images représentent souvent plus de 50% du poids d\'une page web. Bien les optimiser améliore à la fois votre SEO, votre vitesse de chargement et l\'expérience de vos visiteurs. Ce guide vous apprend à maîtriser tous les aspects de l\'optimisation d\'images.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Ce que vous allez apprendre',
          content: 'Ce guide premium couvre l\'ensemble de l\'optimisation d\'images : attribut alt, nom de fichier, compression, formats modernes, lazy loading, et référencement dans Google Images. Avec 3 études de cas et des exercices pratiques.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Pourquoi optimiser les images est crucial',
      },
      {
        type: 'text',
        content: 'L\'optimisation des images impacte de nombreux aspects de votre site :',
      },
      {
        type: 'list',
        content: [
          'Vitesse de chargement : Les images non optimisées ralentissent considérablement votre site',
          'Core Web Vitals : Le LCP (Largest Contentful Paint) dépend souvent de l\'image principale',
          'Google Images : 20-30% du trafic de nombreux sites provient de la recherche d\'images',
          'Accessibilité : Les attributs alt sont essentiels pour les utilisateurs malvoyants',
          'Taux de rebond : Une page lente fait fuir les visiteurs',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'L\'attribut alt : indispensable',
      },
      {
        type: 'text',
        content: 'L\'attribut alt (alternative text) décrit le contenu de l\'image en texte. C\'est l\'élément SEO le plus important pour les images.',
      },
      {
        type: 'code',
        content: {
          language: 'html',
          code: '<!-- Structure complète d\'une balise image optimisée -->\n<img \n  src="analyse-seo-dashboard.webp" \n  alt="Tableau de bord d\'analyse SEO montrant l\'évolution du trafic organique"\n  width="800"\n  height="450"\n  loading="lazy"\n/>',
          filename: 'image-optimisee.html',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Pourquoi l\'alt est essentiel',
      },
      {
        type: 'list',
        content: [
          'Google Images : Le texte alt est le principal facteur de ranking dans Google Images',
          'Accessibilité : Les lecteurs d\'écran lisent l\'alt aux utilisateurs malvoyants',
          'Image non chargée : L\'alt s\'affiche si l\'image ne charge pas',
          'Compréhension contextuelle : Aide Google à comprendre le contexte de la page',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Comment rédiger un bon attribut alt',
      },
      {
        type: 'list',
        content: [
          'Décrivez ce que montre l\'image de manière factuelle',
          'Incluez le mot-clé de la page si c\'est naturel et pertinent',
          'Soyez concis : 5-15 mots suffisent',
          'Évitez "image de", "photo de" (c\'est évident que c\'est une image)',
          'Ne faites pas de keyword stuffing',
          'Pour les images décoratives, utilisez alt="" (vide)',
        ],
      },
      {
        type: 'table',
        content: {
          headers: ['Type d\'image', 'Mauvais alt', 'Bon alt'],
          rows: [
            ['Photo produit', 'chaussure', 'Nike Air Max 90 blanche vue de profil'],
            ['Graphique', 'graphique', 'Graphique montrant la croissance du trafic SEO sur 12 mois'],
            ['Portrait', 'photo personne', 'Marie Dupont, consultante SEO, lors d\'une conférence'],
            ['Screenshot', 'screenshot', 'Interface Google Search Console montrant les erreurs de couverture'],
            ['Infographie', 'infographie seo', 'Infographie des 10 étapes de l\'audit SEO on-page'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas particuliers pour l\'alt',
      },
      {
        type: 'table',
        content: {
          headers: ['Situation', 'Recommandation'],
          rows: [
            ['Image décorative', 'alt="" (vide, pas absent)'],
            ['Logo', 'alt="Logo [Nom entreprise]"'],
            ['Bouton avec icône', 'alt="[Action du bouton]" ex: "Rechercher"'],
            ['Image avec texte', 'Inclure le texte dans l\'alt'],
            ['Graphique complexe', 'Description courte + légende détaillée sous l\'image'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Le nom de fichier optimisé',
      },
      {
        type: 'text',
        content: 'Google utilise le nom de fichier comme signal pour comprendre le contenu de l\'image. Un bon nommage améliore vos chances de ranker dans Google Images.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Règles de nommage',
      },
      {
        type: 'list',
        content: [
          'Utilisez des mots descriptifs en minuscules',
          'Séparez les mots par des tirets (-), pas des underscores (_)',
          'Incluez des mots-clés pertinents',
          'Évitez les caractères spéciaux et accents',
          'Gardez une longueur raisonnable (3-6 mots)',
        ],
      },
      {
        type: 'table',
        content: {
          headers: ['Mauvais nom', 'Bon nom'],
          rows: [
            ['IMG_20240115_142356.jpg', 'analyse-seo-dashboard.jpg'],
            ['photo (1).png', 'consultant-seo-reunion.png'],
            ['image_finale_v2_FINAL.jpg', 'guide-seo-debutant-infographie.jpg'],
            ['DSC0001.JPG', 'nike-air-max-90-blanc.jpg'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Formats d\'images : lequel choisir ?',
      },
      {
        type: 'text',
        content: 'Le choix du format impacte directement le poids et la qualité de vos images. En 2026, de nouveaux formats plus performants sont disponibles.',
      },
      {
        type: 'table',
        content: {
          headers: ['Format', 'Usage idéal', 'Avantages', 'Inconvénients'],
          rows: [
            ['WebP', 'Tout usage (recommandé)', 'Excellent ratio qualité/poids, transparence', 'Non supporté sur vieux navigateurs'],
            ['AVIF', 'Photos haute qualité', 'Meilleur ratio que WebP', 'Support navigateur limité'],
            ['JPEG', 'Photos', 'Universel, bonne compression', 'Pas de transparence, perte de qualité'],
            ['PNG', 'Logos, captures d\'écran', 'Transparence, sans perte', 'Fichiers plus lourds'],
            ['SVG', 'Logos, icônes, illustrations', 'Vectoriel, infiniment zoomable', 'Pas pour les photos'],
            ['GIF', 'Animations simples', 'Animations', 'Lourd, palette limitée'],
          ],
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Recommandation 2026',
          content: 'Utilisez WebP comme format principal avec des fallbacks JPEG/PNG pour la compatibilité. Next.js et la plupart des CMS modernes gèrent cela automatiquement.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Compression des images',
      },
      {
        type: 'text',
        content: 'La compression réduit le poids des fichiers sans perte de qualité visible. C\'est l\'optimisation avec le meilleur ROI.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Types de compression',
      },
      {
        type: 'list',
        content: [
          'Lossy (avec perte) : Réduit significativement le poids, légère perte de qualité invisible à l\'œil',
          'Lossless (sans perte) : Compression plus faible, qualité identique',
        ],
      },
      {
        type: 'text',
        content: 'Pour le web, la compression lossy à 80-85% de qualité est généralement le meilleur compromis.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Outils de compression recommandés',
      },
      {
        type: 'table',
        content: {
          headers: ['Outil', 'Type', 'Usage', 'Prix'],
          rows: [
            ['Squoosh', 'En ligne', 'Compression manuelle, comparaison visuelle', 'Gratuit'],
            ['TinyPNG/TinyJPG', 'En ligne/API', 'Compression automatique par lots', 'Gratuit (500/mois)'],
            ['ShortPixel', 'Plugin/API', 'Intégration WordPress, automatique', 'Freemium'],
            ['ImageOptim', 'Desktop (Mac)', 'Compression locale', 'Gratuit'],
            ['Next.js Image', 'Framework', 'Optimisation automatique', 'Inclus'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Objectifs de poids',
      },
      {
        type: 'table',
        content: {
          headers: ['Type d\'image', 'Poids cible', 'Dimensions typiques'],
          rows: [
            ['Hero image', '< 200 Ko', '1920x1080'],
            ['Image article', '< 100 Ko', '800x600'],
            ['Miniature', '< 30 Ko', '300x200'],
            ['Logo', '< 20 Ko', 'Variable (SVG idéal)'],
            ['Icône', '< 5 Ko', '64x64 ou SVG'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Dimensions et responsive',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Spécifier width et height',
      },
      {
        type: 'text',
        content: 'Définir les dimensions évite le "layout shift" (décalage de mise en page) pendant le chargement, ce qui améliore le CLS (Cumulative Layout Shift) des Core Web Vitals.',
      },
      {
        type: 'code',
        content: {
          language: 'html',
          code: '<!-- Toujours spécifier width et height -->\n<img \n  src="photo.webp" \n  alt="Description"\n  width="800" \n  height="600"\n/>\n\n<!-- Le navigateur réserve l\'espace avant le chargement -->',
          filename: 'dimensions.html',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Images responsives avec srcset',
      },
      {
        type: 'text',
        content: 'Pour servir des images adaptées à chaque écran, utilisez srcset :',
      },
      {
        type: 'code',
        content: {
          language: 'html',
          code: '<img \n  src="image-800.webp"\n  srcset="image-400.webp 400w,\n          image-800.webp 800w,\n          image-1200.webp 1200w"\n  sizes="(max-width: 600px) 400px,\n         (max-width: 1200px) 800px,\n         1200px"\n  alt="Description de l\'image"\n/>',
          filename: 'srcset.html',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Lazy loading',
      },
      {
        type: 'text',
        content: 'Le lazy loading diffère le chargement des images hors écran, accélérant le chargement initial de la page.',
      },
      {
        type: 'code',
        content: {
          language: 'html',
          code: '<!-- Lazy loading natif (recommandé) -->\n<img src="image.webp" alt="Description" loading="lazy" />\n\n<!-- Image au-dessus de la ligne de flottaison : pas de lazy loading -->\n<img src="hero.webp" alt="Image principale" loading="eager" />',
          filename: 'lazy-loading.html',
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Attention',
          content: 'N\'appliquez pas le lazy loading aux images visibles immédiatement (hero image, logo). Cela ralentirait le LCP. Utilisez loading="eager" ou omettez l\'attribut.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°1 : Blog de voyage - Google Images',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un blog de voyage avec 200 articles et 2000+ photos. Zéro trafic Google Images malgré de belles photos. Temps de chargement : 6 secondes.',
        },
      },
      {
        type: 'text',
        content: 'VoyagePassion.fr avait un problème classique : de superbes photos de voyage mais aucune optimisation SEO. Les images étaient uploadées directement depuis l\'appareil photo.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'L\'audit images',
      },
      {
        type: 'list',
        content: [
          '95% des images sans attribut alt',
          'Noms de fichiers type "IMG_3456.JPG"',
          'Poids moyen : 3-5 Mo par image',
          'Aucune compression',
          'Pas de lazy loading',
          'Format JPEG non optimisé',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les optimisations appliquées',
      },
      {
        type: 'table',
        content: {
          headers: ['Action', 'Détail'],
          rows: [
            ['Renommage', 'Script pour renommer : [destination]-[sujet]-[numero].webp'],
            ['Alt texts', 'Rédaction manuelle de 2000 alt descriptifs'],
            ['Compression', 'Compression à 80% qualité avec ShortPixel'],
            ['Format', 'Conversion en WebP avec fallback JPEG'],
            ['Lazy loading', 'Activation sur toutes les images hors hero'],
            ['Dimensions', 'Ajout width/height sur toutes les images'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exemples de transformation',
      },
      {
        type: 'table',
        content: {
          headers: ['Avant', 'Après'],
          rows: [
            ['Nom: IMG_4521.JPG', 'Nom: santorini-coucher-soleil-oia.webp'],
            ['Alt: (vide)', 'Alt: Coucher de soleil sur le village d\'Oia à Santorin avec vue sur la caldeira'],
            ['Poids: 4.2 Mo', 'Poids: 180 Ko'],
            ['Format: JPEG', 'Format: WebP'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats après 4 mois',
      },
      {
        type: 'list',
        content: [
          'Trafic Google Images : de 0 à 15 000 visites/mois',
          'Temps de chargement : de 6s à 1.8s',
          'Core Web Vitals : tous en vert',
          'Position moyenne des images : top 20 → top 5',
          '12 images en featured snippet (Image Pack)',
          'Taux de rebond : -22%',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'success',
          title: 'Leçon clé',
          content: 'Pour un site visuel (voyage, recettes, mode), Google Images peut représenter 20-30% du trafic total. Ne négligez pas cette source.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°2 : E-commerce - Performance produits',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Boutique de décoration avec 500 produits. Pages produits lentes (8s), Core Web Vitals en rouge, taux de conversion faible.',
        },
      },
      {
        type: 'text',
        content: 'DecoMaison.fr subissait un problème de performance majeur. Le LCP (Largest Contentful Paint) était de 6.2 secondes, pénalisant le SEO et les ventes.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Diagnostic technique',
      },
      {
        type: 'list',
        content: [
          'Images produits de 2000x2000 pixels affichées en 400x400',
          'Aucun srcset pour le responsive',
          'Carrousel produit chargeant 10 images simultanément',
          'Pas de lazy loading',
          'Format PNG pour toutes les photos (inutile)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Plan d\'optimisation',
      },
      {
        type: 'table',
        content: {
          headers: ['Problème', 'Solution'],
          rows: [
            ['Images surdimensionnées', 'Création de 3 tailles : 400, 800, 1200px'],
            ['Pas de srcset', 'Implémentation srcset + sizes'],
            ['Carrousel lourd', 'Lazy load des images 2-10'],
            ['Format PNG', 'Conversion WebP avec fallback JPEG'],
            ['Pas de compression', 'Compression à 82% qualité'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Implémentation technique',
      },
      {
        type: 'code',
        content: {
          language: 'html',
          code: '<!-- Avant : image unique non optimisée -->\n<img src="produit.png" alt="Lampe">\n\n<!-- Après : image responsive optimisée -->\n<picture>\n  <source \n    type="image/webp"\n    srcset="lampe-400.webp 400w,\n            lampe-800.webp 800w,\n            lampe-1200.webp 1200w"\n    sizes="(max-width: 768px) 400px, 800px"\n  />\n  <img \n    src="lampe-800.jpg"\n    alt="Lampe de bureau design scandinave en bois naturel"\n    width="800"\n    height="800"\n    loading="lazy"\n  />\n</picture>',
          filename: 'image-ecommerce.html',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats',
      },
      {
        type: 'list',
        content: [
          'LCP : de 6.2s à 1.4s',
          'Score PageSpeed : de 35 à 89',
          'Core Web Vitals : tous passés en vert',
          'Taux de conversion : +18%',
          'Trafic mobile : +35%',
          'Revenus : +23% sur 3 mois',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°3 : Site média - Optimisation automatisée',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un site d\'actualités avec 50 nouveaux articles/jour et 500 images/semaine. Impossible d\'optimiser manuellement. Besoin d\'automatisation.',
        },
      },
      {
        type: 'text',
        content: 'InfoActu.fr publiait massivement mais les rédacteurs n\'optimisaient jamais les images. Le site ralentissait progressivement.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'La solution automatisée',
      },
      {
        type: 'list',
        content: [
          'Plugin WordPress ShortPixel pour compression automatique à l\'upload',
          'Règles de nommage dans le guide éditorial (formation rédacteurs)',
          'Template d\'alt obligatoire dans le CMS',
          'CDN avec conversion WebP automatique',
          'Script de vérification des alt manquants (alerte Slack)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Workflow optimisé',
      },
      {
        type: 'table',
        content: {
          headers: ['Étape', 'Responsable', 'Action'],
          rows: [
            ['1. Upload', 'Rédacteur', 'Nomme le fichier correctement avant upload'],
            ['2. Compression', 'ShortPixel', 'Compression auto à 82%'],
            ['3. Format', 'CDN', 'Conversion WebP à la volée'],
            ['4. Alt', 'Rédacteur', 'Champ obligatoire dans le CMS'],
            ['5. Vérification', 'Bot', 'Alerte si alt manquant'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats sur 6 mois',
      },
      {
        type: 'list',
        content: [
          '100% des nouvelles images compressées automatiquement',
          '98% des images avec alt (vs 45% avant)',
          'Poids moyen des images : de 800 Ko à 95 Ko',
          'Score PageSpeed articles : de 55 à 82',
          'Trafic Google Images : +340%',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Pour les gros volumes',
          content: 'L\'automatisation est indispensable pour les sites à fort volume de publication. Investissez dans des outils qui optimisent à l\'upload.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Exercices pratiques',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 1 : Audit de vos images',
      },
      {
        type: 'text',
        content: 'Analysez 10 images de votre site avec PageSpeed Insights :',
      },
      {
        type: 'table',
        content: {
          headers: ['Image', 'Poids actuel', 'Format', 'Alt présent ?', 'Poids cible', 'Actions'],
          rows: [
            ['...', '... Ko', '...', 'Oui/Non', '... Ko', '...'],
            ['...', '...', '...', '...', '...', '...'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Rédiger des alt optimisés',
      },
      {
        type: 'text',
        content: 'Pour chaque type d\'image, rédigez un alt optimisé :',
      },
      {
        type: 'list',
        content: [
          'Photo de votre équipe : ___',
          'Capture d\'écran de votre produit : ___',
          'Graphique de résultats : ___',
          'Photo d\'un événement : ___',
          'Image décorative d\'arrière-plan : ___',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Compression pratique',
      },
      {
        type: 'text',
        content: 'Utilisez Squoosh.app pour comparer :',
      },
      {
        type: 'list',
        content: [
          '1. Uploadez une image de votre site',
          '2. Testez différents niveaux de qualité (70%, 80%, 90%)',
          '3. Comparez visuellement',
          '4. Notez le poids de chaque version',
          '5. Identifiez le meilleur compromis qualité/poids',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Optimisation complète d\'une image',
      },
      {
        type: 'text',
        content: 'Prenez une image non optimisée et appliquez toutes les techniques :',
      },
      {
        type: 'list',
        content: [
          '1. Renommez le fichier de manière descriptive',
          '2. Redimensionnez aux bonnes dimensions',
          '3. Compressez avec Squoosh ou TinyPNG',
          '4. Convertissez en WebP',
          '5. Rédigez un alt optimisé',
          '6. Ajoutez width, height et loading="lazy"',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quiz : Optimisation Images SEO',
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Optimisation Images SEO',
          questions: [
            {
              question: 'Quel est le format d\'image recommandé en 2026 ?',
              options: ['JPEG', 'PNG', 'WebP', 'BMP'],
              correctIndex: 2,
              explanation: 'WebP offre le meilleur rapport qualité/poids et est maintenant supporté par tous les navigateurs modernes.',
            },
            {
              question: 'Quelle est la longueur idéale d\'un attribut alt ?',
              options: ['1-2 mots', '5-15 mots', '50-100 mots', 'Pas de limite'],
              correctIndex: 1,
              explanation: 'L\'alt doit faire entre 5 et 15 mots pour décrire l\'image de manière concise et informative.',
            },
            {
              question: 'Quand NE PAS utiliser le lazy loading ?',
              options: ['Sur les images du footer', 'Sur l\'image hero principale', 'Sur les images d\'articles', 'Sur les miniatures'],
              correctIndex: 1,
              explanation: 'L\'image hero principale (au-dessus de la ligne de flottaison) doit se charger immédiatement pour un bon LCP.',
            },
            {
              question: 'Pourquoi spécifier width et height sur les images ?',
              options: ['Pour le design', 'Pour éviter le layout shift (CLS)', 'C\'est obligatoire', 'Pour la compression'],
              correctIndex: 1,
              explanation: 'Les dimensions permettent au navigateur de réserver l\'espace, évitant les décalages de mise en page (meilleur CLS).',
            },
            {
              question: 'Quel séparateur utiliser dans les noms de fichiers ?',
              options: ['Underscores (_)', 'Tirets (-)', 'Espaces', 'Points'],
              correctIndex: 1,
              explanation: 'Google recommande les tirets (-) comme séparateurs de mots dans les noms de fichiers.',
            },
            {
              question: 'Quel outil permet de compresser et comparer visuellement ?',
              options: ['Photoshop', 'Squoosh.app', 'Paint', 'Word'],
              correctIndex: 1,
              explanation: 'Squoosh.app est un outil gratuit de Google qui permet de compresser et comparer visuellement les résultats.',
            },
            {
              question: 'Que mettre comme alt pour une image décorative ?',
              options: ['image decorative', 'decoration', 'alt="" (vide)', 'Rien (pas d\'attribut)'],
              correctIndex: 2,
              explanation: 'Pour les images décoratives, utilisez alt="" (vide) pour que les lecteurs d\'écran les ignorent.',
            },
            {
              question: 'Quel pourcentage du poids d\'une page représentent souvent les images ?',
              options: ['10%', '30%', '50-80%', '5%'],
              correctIndex: 2,
              explanation: 'Les images représentent généralement 50 à 80% du poids total d\'une page web.',
            },
            {
              question: 'Quel Core Web Vital est le plus impacté par les images ?',
              options: ['FID', 'CLS', 'LCP', 'TTFB'],
              correctIndex: 2,
              explanation: 'Le LCP (Largest Contentful Paint) mesure le temps de chargement du plus grand élément visible, souvent une image.',
            },
            {
              question: 'Quelle qualité de compression est recommandée pour le web ?',
              options: ['100%', '80-85%', '50%', '20%'],
              correctIndex: 1,
              explanation: 'Une compression à 80-85% offre un excellent compromis entre qualité visuelle et poids de fichier.',
            },
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Ressources complémentaires',
      },
      {
        type: 'text',
        content: 'Pour continuer votre apprentissage du SEO on-page, consultez ces articles :',
      },
      {
        type: 'list',
        content: [
          'Structure Hn : Organiser vos titres pour le SEO - Complémentez l\'optimisation visuelle',
          'URLs SEO-Friendly : Structure et bonnes pratiques - Le dernier pilier du SEO on-page',
          'Guide complet SEO On-Page - Vue d\'ensemble de toutes les optimisations',
        ],
      },
      {
        type: 'cta',
        content: {
          title: 'Complétez votre formation SEO on-page',
          description: 'Découvrez maintenant comment structurer vos URLs pour un SEO optimal.',
          buttonText: 'URLs SEO-Friendly',
          buttonLink: '/seo-on-page/url-seo-friendly',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'url-seo-friendly',
    title: 'URLs SEO-Friendly : Structure et Bonnes Pratiques',
    metaTitle: 'URL SEO - Structure et Optimisation 2026',
    metaDescription: 'Créez des URLs optimisées pour le SEO : structure, longueur, mots-clés. Guide complet pour des URLs qui plaisent à Google et aux utilisateurs.',
    keyword: 'url seo',
    secondaryKeywords: ['url friendly', 'structure url', 'optimisation url'],
    intent: 'info',
    cluster: 'seo-on-page',
    excerpt: 'Une URL bien structurée améliore la compréhension de votre page par Google et le taux de clic. Découvrez comment créer des URLs optimisées.',
    tableOfContents: true,
    readingTime: 28,
    difficulty: 'debutant',
    lastUpdated: '2026-01-10',
    author: 'thomas-dupont',
    relatedSlugs: ['balise-title', 'structure-hn'],
    faq: [
      {
        question: 'Faut-il modifier les URLs existantes ?',
        answer: 'Non, sauf si elles sont vraiment problématiques. Modifier une URL existante nécessite une redirection 301 et peut temporairement affecter le ranking.',
      },
      {
        question: 'Les tirets ou les underscores ?',
        answer: 'Toujours des tirets (-). Google traite les tirets comme des séparateurs de mots, mais pas les underscores (_).',
      },
      {
        question: 'Faut-il inclure les dates dans les URLs ?',
        answer: 'Pour le contenu evergreen, évitez les dates. Pour les actualités ou contenus liés à une période, les dates peuvent être pertinentes.',
      },
      {
        question: 'Quelle est la longueur maximale d\'une URL ?',
        answer: 'Techniquement 2048 caractères, mais visez 50-60 caractères pour une URL optimale. Au-delà de 75 caractères, les bénéfices SEO diminuent.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'L\'URL est un signal SEO souvent négligé. Une URL claire et descriptive aide Google à comprendre votre page, rassure les utilisateurs et améliore le taux de clic. Ce guide vous apprend à créer des URLs parfaitement optimisées.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Ce que vous allez apprendre',
          content: 'Ce guide premium couvre tous les aspects des URLs SEO-friendly : structure optimale, conventions de nommage, gestion des redirections, et pièges à éviter. Avec 3 études de cas et des exercices pratiques.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Qu\'est-ce qu\'une URL SEO-friendly ?',
      },
      {
        type: 'text',
        content: 'Une URL SEO-friendly (ou "URL propre") est une adresse web optimisée pour les moteurs de recherche et les utilisateurs. Elle est courte, descriptive, et contient des mots-clés pertinents.',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: 'Anatomie d\'une URL :\nhttps://www.exemple.fr/categorie/sous-categorie/page-cible\n└─────┘   └───────────┘└─────────────────────────────────────┘\nProtocole    Domaine              Chemin (Path)',
          filename: 'anatomie-url.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Comparaison URL classique vs SEO-friendly',
      },
      {
        type: 'table',
        content: {
          headers: ['Type', 'Exemple', 'Problème/Avantage'],
          rows: [
            ['Dynamique ❌', 'site.fr/product.php?id=123&cat=5', 'Non descriptive, paramètres illisibles'],
            ['Trop longue ❌', 'site.fr/2024/01/15/voici-le-guide-complet-pour-tout-savoir-sur', 'Tronquée dans les SERPs, diluée'],
            ['Avec underscores ❌', 'site.fr/guide_seo_complet', 'Google ne sépare pas les mots'],
            ['SEO-friendly ✓', 'site.fr/guide-seo-complet', 'Courte, descriptive, mot-clé présent'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Pourquoi les URLs comptent pour le SEO',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Signal de pertinence pour Google',
      },
      {
        type: 'text',
        content: 'Google utilise les mots dans l\'URL comme signal de pertinence. Une URL contenant le mot-clé ciblé renforce le signal thématique de la page.',
      },
      {
        type: 'text',
        content: 'Ce n\'est pas le facteur le plus important (title et contenu comptent plus), mais c\'est un signal supplémentaire qui peut faire la différence dans un marché concurrentiel.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Confiance utilisateur et CTR',
      },
      {
        type: 'text',
        content: 'Les utilisateurs voient l\'URL dans les résultats de recherche. Une URL propre et descriptive inspire confiance et peut améliorer le taux de clic.',
      },
      {
        type: 'table',
        content: {
          headers: ['URL affichée', 'Perception utilisateur'],
          rows: [
            ['site.fr/p?id=4521&ref=...', 'Méfiance, semble spam'],
            ['site.fr/formation-seo-debutant', 'Confiance, sait ce qu\'il va trouver'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Partage et backlinks',
      },
      {
        type: 'text',
        content: 'Une URL propre est plus facile à partager et à mémoriser. Elle a aussi plus de chances d\'être utilisée comme texte d\'ancrage naturel dans les backlinks.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Les règles d\'une URL optimisée',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Règle n°1 : Courte et concise',
      },
      {
        type: 'text',
        content: 'Les URLs courtes performent mieux. Une étude de Backlinko montre que les URLs en position 1 ont en moyenne 50 caractères.',
      },
      {
        type: 'list',
        content: [
          'Visez 3 à 5 mots dans le chemin',
          'Maximum 50-60 caractères idéalement',
          'Supprimez les mots inutiles (le, la, de, et, un, une...)',
        ],
      },
      {
        type: 'table',
        content: {
          headers: ['Trop long ❌', 'Optimisé ✓'],
          rows: [
            ['site.fr/voici-le-guide-complet-pour-apprendre-le-seo-en-2026', 'site.fr/guide-seo-2026'],
            ['site.fr/tout-ce-que-vous-devez-savoir-sur-la-balise-title', 'site.fr/balise-title-seo'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Règle n°2 : Contenir le mot-clé principal',
      },
      {
        type: 'text',
        content: 'Incluez votre mot-clé principal dans l\'URL, de préférence au début du chemin.',
      },
      {
        type: 'table',
        content: {
          headers: ['Mot-clé cible', 'URL optimisée'],
          rows: [
            ['formation seo', 'site.fr/formation-seo'],
            ['audit seo gratuit', 'site.fr/audit-seo-gratuit'],
            ['balise title', 'site.fr/balise-title'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Règle n°3 : Utiliser des tirets',
      },
      {
        type: 'text',
        content: 'Google traite les tirets (-) comme des séparateurs de mots, mais pas les underscores (_).',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '❌ site.fr/guide_seo_complet   → Google lit "guideseocomplet"\n✓  site.fr/guide-seo-complet   → Google lit "guide seo complet"',
          filename: 'tirets-vs-underscores.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Règle n°4 : Tout en minuscules',
      },
      {
        type: 'text',
        content: 'Les URLs sont sensibles à la casse sur certains serveurs. Pour éviter les problèmes de duplicate content, utilisez toujours des minuscules.',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '❌ site.fr/Guide-SEO-Complet   → Peut créer des duplications\n✓  site.fr/guide-seo-complet   → Standard recommandé',
          filename: 'minuscules.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Règle n°5 : Pas de caractères spéciaux',
      },
      {
        type: 'text',
        content: 'Évitez les accents, cédilles, et caractères spéciaux qui peuvent poser des problèmes d\'encodage.',
      },
      {
        type: 'table',
        content: {
          headers: ['À éviter ❌', 'Préférer ✓'],
          rows: [
            ['référencement', 'referencement'],
            ['stratégie-seo', 'strategie-seo'],
            ['100%-gratuit', '100-gratuit ou gratuit'],
            ['e-mail&newsletter', 'email-newsletter'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Structure hiérarchique des URLs',
      },
      {
        type: 'text',
        content: 'Votre structure d\'URLs doit refléter l\'architecture de votre site. Utilisez des dossiers pour organiser logiquement vos contenus.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Structure en silos',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: 'site.fr/\n├── seo-on-page/                   (Cluster principal)\n│   ├── balise-title/              (Article du cluster)\n│   ├── meta-description/\n│   └── structure-hn/\n├── seo-technique/                 (Autre cluster)\n│   ├── vitesse-chargement/\n│   └── core-web-vitals/\n└── blog/                          (Section blog)\n    └── actualites-seo/            (Articles blog)',
          filename: 'structure-silos.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Profondeur des URLs',
      },
      {
        type: 'text',
        content: 'Limitez la profondeur de vos URLs. Plus une page est "loin" de la racine, moins elle est considérée comme importante.',
      },
      {
        type: 'table',
        content: {
          headers: ['Profondeur', 'Exemple', 'Recommandation'],
          rows: [
            ['1 niveau', 'site.fr/formation-seo', '✓ Idéal pour pages importantes'],
            ['2 niveaux', 'site.fr/seo-on-page/balise-title', '✓ Standard pour articles'],
            ['3 niveaux', 'site.fr/blog/seo/debutant/article', '⚠️ Acceptable'],
            ['4+ niveaux', 'site.fr/cat/sub/sub/sub/page', '❌ Trop profond'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Cas particuliers d\'URLs',
      },
      {
        type: 'heading',
        level: 3,
        content: 'URLs de pagination',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '✓ site.fr/blog/page/2\n✓ site.fr/categorie?page=2\n\n❌ site.fr/blog-page-2          (Contenu identique, risque duplicate)',
          filename: 'pagination.txt',
        },
      },
      {
        type: 'text',
        content: 'Pour la pagination, utilisez rel="next" et rel="prev" ou indiquez la page canonical.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'URLs multilingues',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '✓ Sous-répertoires :\n  site.fr/fr/guide-seo\n  site.fr/en/seo-guide\n  site.fr/de/seo-leitfaden\n\n✓ Sous-domaines :\n  fr.site.com/guide-seo\n  en.site.com/seo-guide\n\n⚠️ Domaines séparés (plus complexe) :\n  site.fr/guide-seo\n  site.com/seo-guide',
          filename: 'multilingue.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'URLs e-commerce',
      },
      {
        type: 'table',
        content: {
          headers: ['Type de page', 'Structure recommandée'],
          rows: [
            ['Catégorie', 'site.fr/chaussures-homme'],
            ['Sous-catégorie', 'site.fr/chaussures-homme/baskets'],
            ['Produit', 'site.fr/chaussures-homme/baskets/nike-air-max-90'],
            ['Filtre (à éviter en indexation)', 'site.fr/chaussures-homme?couleur=noir&taille=42'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Gestion des redirections',
      },
      {
        type: 'text',
        content: 'Si vous devez modifier une URL existante, les redirections sont essentielles pour préserver le SEO.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Types de redirections',
      },
      {
        type: 'table',
        content: {
          headers: ['Code', 'Type', 'Usage', 'Impact SEO'],
          rows: [
            ['301', 'Permanente', 'URL définitivement changée', 'Transfère ~95% du "link juice"'],
            ['302', 'Temporaire', 'Changement temporaire', 'Ne transfère pas le link juice'],
            ['307', 'Temporaire (HTTP 1.1)', 'Équivalent moderne du 302', 'Ne transfère pas le link juice'],
            ['308', 'Permanente (HTTP 1.1)', 'Équivalent moderne du 301', 'Transfère le link juice'],
          ],
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Règle d\'or',
          content: 'Ne JAMAIS changer une URL sans mettre en place une redirection 301. Sinon, vous perdez tout le référencement acquis et créez des erreurs 404.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Comment implémenter une redirection 301',
      },
      {
        type: 'code',
        content: {
          language: 'apache',
          code: '# .htaccess (Apache)\nRedirect 301 /ancienne-url /nouvelle-url\n\n# Ou avec RewriteRule\nRewriteEngine On\nRewriteRule ^ancienne-url$ /nouvelle-url [R=301,L]',
          filename: '.htaccess',
        },
      },
      {
        type: 'code',
        content: {
          language: 'javascript',
          code: '// next.config.js (Next.js)\nmodule.exports = {\n  async redirects() {\n    return [\n      {\n        source: \'/ancienne-url\',\n        destination: \'/nouvelle-url\',\n        permanent: true, // 301\n      },\n    ]\n  },\n}',
          filename: 'next.config.js',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°1 : Blog tech - Restructuration URLs',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un blog tech avec 300 articles. URLs incluant les dates (/2023/05/12/titre-article/), créant des URLs très longues et donnant une impression de contenu ancien.',
        },
      },
      {
        type: 'text',
        content: 'DevBlog.fr avait une structure d\'URLs héritée de WordPress avec dates. Les articles evergreen paraissaient datés et les URLs étaient trop longues.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Le problème identifié',
      },
      {
        type: 'table',
        content: {
          headers: ['Problème', 'Impact'],
          rows: [
            ['Dates dans URLs', 'Articles perçus comme anciens'],
            ['URLs de 80+ caractères', 'Tronquées dans les SERPs'],
            ['Structure /année/mois/jour/', '4 niveaux de profondeur inutiles'],
            ['Titres complets dans URL', 'Mots inutiles (le, de, pour...)'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'La nouvelle structure',
      },
      {
        type: 'table',
        content: {
          headers: ['Avant', 'Après'],
          rows: [
            ['/2023/05/12/comment-apprendre-le-javascript-en-2023/', '/tutoriel/javascript-debutant'],
            ['/2024/01/08/le-guide-complet-pour-debuter-avec-react/', '/tutoriel/react-guide-debutant'],
            ['/2023/11/22/toutes-les-nouveautes-de-python-3-12/', '/actualites/python-3-12'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Plan de migration',
      },
      {
        type: 'list',
        content: [
          '1. Export de toutes les anciennes URLs',
          '2. Création des nouvelles URLs optimisées',
          '3. Mise en place des redirections 301 (fichier .htaccess)',
          '4. Mise à jour du sitemap',
          '5. Soumission du nouveau sitemap à Google Search Console',
          '6. Mise à jour des liens internes',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats après 4 mois',
      },
      {
        type: 'list',
        content: [
          'Perte initiale de trafic : -15% (semaines 1-2, normal)',
          'Récupération complète : semaine 6',
          'Gain à 4 mois : +28% de trafic organique',
          'CTR moyen : +12% (URLs plus attractives)',
          'Position moyenne : +3 places',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'success',
          title: 'Leçon clé',
          content: 'Une restructuration d\'URLs bien planifiée avec redirections 301 peut améliorer le SEO à long terme, malgré une baisse temporaire.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°2 : E-commerce - URLs produits',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Une boutique de mode avec 2000 produits. URLs dynamiques générées par le CMS (/product?id=4521&color=red&size=M), aucune indexation dans Google.',
        },
      },
      {
        type: 'text',
        content: 'FashionShop.fr avait des URLs dynamiques illisibles. Google indexait mal les pages produits et les utilisateurs ne faisaient pas confiance aux liens.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Avant vs Après',
      },
      {
        type: 'table',
        content: {
          headers: ['Page', 'URL avant', 'URL après'],
          rows: [
            ['Catégorie', '/category.php?id=5', '/robes-femme'],
            ['Sous-catégorie', '/category.php?id=5&sub=12', '/robes-femme/robes-longues'],
            ['Produit', '/product.php?id=4521', '/robes-femme/robe-longue-fleurie-zara'],
            ['Filtre', '/category.php?id=5&color=red', '/robes-femme?couleur=rouge (noindex)'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Template d\'URL produit',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: 'Structure : /[catégorie]/[sous-catégorie-optionnelle]/[type-produit]-[marque]-[attribut-principal]\n\nExemples :\n/chaussures-homme/baskets-nike-air-max-90-blanc\n/robes-femme/robe-cocktail-zara-noir\n/accessoires/sac-main-michael-kors-cuir',
          filename: 'template-url-produit.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats',
      },
      {
        type: 'list',
        content: [
          'Pages produits indexées : de 200 à 1800 (+800%)',
          'Trafic organique produits : +450%',
          'CTR des fiches produits : de 0.8% à 2.4%',
          'Chiffre d\'affaires organique : +180%',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°3 : Site multilingue - Structure internationale',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un site SaaS avec 4 langues. Contenu traduit mais URLs identiques avec paramètre ?lang=, créant du duplicate content et des problèmes d\'indexation.',
        },
      },
      {
        type: 'text',
        content: 'CloudTool.io proposait son service en français, anglais, allemand et espagnol. Mais toutes les versions utilisaient les mêmes URLs avec un paramètre de langue.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Le problème',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '❌ Structure problématique :\ncloudtool.io/pricing?lang=fr\ncloudtool.io/pricing?lang=en\ncloudtool.io/pricing?lang=de\n\n→ Google voyait 4 pages identiques\n→ Duplicate content massif\n→ Mauvaise indexation des versions non-anglaises',
          filename: 'probleme-multilingue.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'La solution : sous-répertoires par langue',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '✓ Nouvelle structure :\ncloudtool.io/fr/tarifs\ncloudtool.io/en/pricing\ncloudtool.io/de/preise\ncloudtool.io/es/precios\n\n+ Hreflang tags pour lier les versions',
          filename: 'solution-multilingue.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Implémentation hreflang',
      },
      {
        type: 'code',
        content: {
          language: 'html',
          code: '<link rel="alternate" hreflang="fr" href="https://cloudtool.io/fr/tarifs" />\n<link rel="alternate" hreflang="en" href="https://cloudtool.io/en/pricing" />\n<link rel="alternate" hreflang="de" href="https://cloudtool.io/de/preise" />\n<link rel="alternate" hreflang="es" href="https://cloudtool.io/es/precios" />\n<link rel="alternate" hreflang="x-default" href="https://cloudtool.io/en/pricing" />',
          filename: 'hreflang.html',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats après 6 mois',
      },
      {
        type: 'list',
        content: [
          'Pages indexées par langue : toutes correctement indexées',
          'Trafic France : +85%',
          'Trafic Allemagne : +120%',
          'Trafic Espagne : +95%',
          'Conversions internationales : +65%',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Ce qu\'il faut éviter',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les erreurs courantes',
      },
      {
        type: 'list',
        content: [
          'Paramètres dynamiques exposés (?id=, &cat=, &ref=)',
          'Dates dans les URLs de contenu evergreen',
          'Stop words inutiles (le, la, de, pour, avec...)',
          'URLs trop longues (>75 caractères)',
          'Caractères spéciaux et accents',
          'Underscores au lieu de tirets',
          'Majuscules',
          'Extensions de fichiers (.html, .php) - sauf si imposé',
          'IDs numériques seuls (/article/12345)',
          'Trailing slashes incohérents (/page vs /page/)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Gestion des trailing slashes',
      },
      {
        type: 'text',
        content: 'Choisissez une convention (avec ou sans /) et appliquez-la partout. Redirigez l\'autre version en 301.',
      },
      {
        type: 'code',
        content: {
          language: 'apache',
          code: '# Forcer sans trailing slash\nRewriteCond %{REQUEST_FILENAME} !-d\nRewriteRule ^(.*)/$ /$1 [R=301,L]\n\n# OU Forcer avec trailing slash\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteRule ^(.*)([^/])$ /$1$2/ [R=301,L]',
          filename: '.htaccess',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Exercices pratiques',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 1 : Audit de vos URLs',
      },
      {
        type: 'text',
        content: 'Analysez 10 URLs de votre site :',
      },
      {
        type: 'table',
        content: {
          headers: ['URL actuelle', 'Longueur', 'Mot-clé présent ?', 'Problèmes', 'URL optimisée'],
          rows: [
            ['...', '... car.', 'Oui/Non', '...', '...'],
            ['...', '...', '...', '...', '...'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Créer une structure de site',
      },
      {
        type: 'text',
        content: 'Pour un site sur le jardinage, créez la structure d\'URLs idéale :',
      },
      {
        type: 'list',
        content: [
          'Page d\'accueil : ___',
          'Catégorie "Légumes" : ___',
          'Sous-catégorie "Tomates" : ___',
          'Article "Comment planter des tomates" : ___',
          'Guide "Calendrier du potager" : ___',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Optimiser des URLs problématiques',
      },
      {
        type: 'text',
        content: 'Transformez ces URLs en versions SEO-friendly :',
      },
      {
        type: 'table',
        content: {
          headers: ['URL problématique', 'Votre version optimisée'],
          rows: [
            ['site.fr/article.php?id=4521&cat=seo', '...'],
            ['site.fr/2024/03/15/voici-tout-ce-que-vous-devez-savoir-sur-le-referencement-naturel/', '...'],
            ['site.fr/Page_Produit_Nike_Air_Max', '...'],
            ['site.fr/catégorie/été-2024/', '...'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Plan de redirections',
      },
      {
        type: 'text',
        content: 'Créez un plan de redirections pour une migration :',
      },
      {
        type: 'list',
        content: [
          '1. Listez 5 anciennes URLs de votre site à optimiser',
          '2. Créez les nouvelles URLs optimisées',
          '3. Rédigez les règles de redirection 301',
          '4. Identifiez les liens internes à mettre à jour',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quiz : URLs SEO',
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : URLs SEO',
          questions: [
            {
              question: 'Quel séparateur utiliser dans les URLs ?',
              options: ['Underscores (_)', 'Tirets (-)', 'Points (.)', 'Espaces'],
              correctIndex: 1,
              explanation: 'Google traite les tirets (-) comme des séparateurs de mots. Les underscores sont ignorés.',
            },
            {
              question: 'Quelle est la longueur idéale d\'une URL ?',
              options: ['10-20 caractères', '50-60 caractères', '100-150 caractères', 'Pas de limite'],
              correctIndex: 1,
              explanation: 'Les URLs de 50-60 caractères performent mieux selon les études. Au-delà de 75, les bénéfices SEO diminuent.',
            },
            {
              question: 'Que faire avant de modifier une URL existante ?',
              options: ['Rien de spécial', 'Mettre en place une redirection 301', 'Supprimer la page', 'Attendre 6 mois'],
              correctIndex: 1,
              explanation: 'Une redirection 301 est indispensable pour préserver le référencement acquis et éviter les erreurs 404.',
            },
            {
              question: 'Faut-il inclure des dates dans les URLs d\'articles evergreen ?',
              options: ['Oui, toujours', 'Non, cela les fait paraître datés', 'Seulement l\'année', 'Seulement pour les actualités'],
              correctIndex: 1,
              explanation: 'Pour le contenu evergreen, évitez les dates qui donnent l\'impression d\'un contenu ancien.',
            },
            {
              question: 'Quel type de redirection transfère le "link juice" ?',
              options: ['302', '307', '301', '404'],
              correctIndex: 2,
              explanation: 'La redirection 301 (permanente) transfère environ 95% du link juice à la nouvelle URL.',
            },
            {
              question: 'Les URLs doivent-elles être en minuscules ?',
              options: ['Non, peu importe', 'Oui, pour éviter le duplicate content', 'Seulement la première lettre', 'Majuscules recommandées'],
              correctIndex: 1,
              explanation: 'Oui, les URLs sont sensibles à la casse sur certains serveurs. Les minuscules évitent les problèmes de duplication.',
            },
            {
              question: 'Quelle profondeur maximum est recommandée pour les URLs ?',
              options: ['1 niveau', '2-3 niveaux', '5-6 niveaux', 'Pas de limite'],
              correctIndex: 1,
              explanation: '2-3 niveaux de profondeur sont idéaux. Au-delà, les pages sont perçues comme moins importantes.',
            },
            {
              question: 'Comment gérer les paramètres de filtre en e-commerce ?',
              options: ['Les indexer tous', 'Les mettre en noindex', 'Les rediriger en 301', 'Les supprimer'],
              correctIndex: 1,
              explanation: 'Les URLs avec paramètres de filtre (?couleur=rouge&taille=M) doivent être en noindex pour éviter le duplicate content.',
            },
            {
              question: 'Quelle est la meilleure structure pour un site multilingue ?',
              options: ['Paramètre ?lang=', 'Sous-répertoires /fr/', 'Aucune différence', 'Toujours des sous-domaines'],
              correctIndex: 1,
              explanation: 'Les sous-répertoires (/fr/, /en/) sont recommandés car ils sont simples à gérer et bénéficient de l\'autorité du domaine principal.',
            },
            {
              question: 'Que signifie "trailing slash" ?',
              options: ['Le slash au début', 'Le slash à la fin de l\'URL', 'Les doubles slashes', 'Le protocole https'],
              correctIndex: 1,
              explanation: 'Le trailing slash est le "/" à la fin d\'une URL (exemple.fr/page/ vs exemple.fr/page). Il faut être cohérent.',
            },
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Ressources complémentaires',
      },
      {
        type: 'text',
        content: 'Vous avez maintenant toutes les clés pour créer des URLs parfaitement optimisées. Pour compléter votre maîtrise du SEO on-page, consultez :',
      },
      {
        type: 'list',
        content: [
          'Balise Title SEO : Comment rédiger des titres qui rankent',
          'Meta Description : Rédiger des descriptions qui font cliquer',
          'Structure Hn : Organiser vos titres pour le SEO',
          'Optimisation des Images : Guide complet pour un SEO visuel',
          'Guide complet SEO On-Page - Retour à la vue d\'ensemble',
        ],
      },
      {
        type: 'cta',
        content: {
          title: 'Félicitations !',
          description: 'Vous avez terminé le module SEO On-Page. Continuez votre apprentissage avec le module suivant.',
          buttonText: 'Retour au guide SEO On-Page',
          buttonLink: '/seo-on-page',
          variant: 'primary',
        },
      },
    ],
  },
];

export const clusterData: ClusterConfig = {
  slug: 'seo-on-page',
  name: 'SEO On-Page',
  description: 'Maîtrisez l\'optimisation on-page : balises title, meta description, structure Hn, images et URLs pour des pages parfaitement optimisées.',
  metaTitle: 'SEO On-Page | SEOtika 2026',
  metaDescription: 'Formation complète au SEO on-page : optimisez vos balises, votre contenu et vos images pour un meilleur référencement.',
  pillarPage,
  childPages,
  icon: 'FileText',
  color: 'green',
};

export default clusterData;
