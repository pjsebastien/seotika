import { ClusterConfig, Article } from '@/types';

const pillarPage: Article = {
  slug: 'index',
  title: 'Apprendre le SEO : Le Guide pour Débuter en 2026',
  metaTitle: 'Apprendre le SEO en 2026 - Guide Débutant Complet',
  metaDescription: 'Apprenez les bases du SEO : fonctionnement de Google, mots-clés, optimisation on-page, netlinking. Guide gratuit pour débuter en référencement.',
  keyword: 'apprendre le seo',
  secondaryKeywords: ['débuter référencement', 'bases seo', 'formation seo gratuite'],
  intent: 'info',
  cluster: 'seo-fondamentaux',
  excerpt: 'Le SEO (Search Engine Optimization) est l\'art d\'optimiser un site web pour les moteurs de recherche. Ce guide couvre tout ce qu\'un débutant doit savoir pour comprendre et commencer à appliquer le référencement naturel.',
  tableOfContents: true,
  readingTime: 20,
  difficulty: 'debutant',
  lastUpdated: '2026-01-20',
  author: 'thomas-dupont',
  relatedSlugs: ['qu-est-ce-que-le-seo', 'comment-fonctionne-google', 'les-3-piliers-du-seo'],
  faq: [
    {
      question: 'Combien de temps faut-il pour apprendre le SEO ?',
      answer: 'Les bases peuvent être acquises en quelques semaines. Maîtriser le SEO de manière approfondie demande plusieurs mois de pratique et d\'apprentissage continu, car les algorithmes évoluent régulièrement.',
    },
    {
      question: 'Le SEO est-il encore utile en 2026 ?',
      answer: 'Absolument. Malgré l\'émergence des moteurs IA, Google reste la source principale de trafic pour la majorité des sites. Le SEO évolue mais reste essentiel pour la visibilité en ligne.',
    },
    {
      question: 'Peut-on faire du SEO sans budget ?',
      answer: 'Oui. De nombreuses techniques SEO sont gratuites : optimisation on-page, création de contenu, amélioration technique. Les outils gratuits comme Google Search Console suffisent pour débuter.',
    },
    {
      question: 'Faut-il coder pour faire du SEO ?',
      answer: 'Non, mais des bases en HTML sont utiles. La plupart des CMS (WordPress, etc.) permettent de faire du SEO sans coder. Des connaissances techniques sont un plus pour le SEO technique avancé.',
    },
  ],
  content: [
    {
      type: 'text',
      content: 'Le SEO, ou Search Engine Optimization, est l\'ensemble des techniques permettant d\'améliorer la visibilité d\'un site web dans les résultats des moteurs de recherche. Que vous soyez entrepreneur, marketeur, rédacteur ou simplement curieux, comprendre le SEO est devenu indispensable pour exister en ligne.',
    },
    {
      type: 'text',
      content: 'Ce guide vous accompagne dans l\'apprentissage des fondamentaux du référencement naturel. Pas de jargon inutile, pas de théorie creuse : des explications claires et des conseils pratiques pour commencer à optimiser votre site dès aujourd\'hui.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Qu\'est-ce que le SEO ?',
    },
    {
      type: 'text',
      content: 'Le SEO (Search Engine Optimization), ou référencement naturel en français, désigne l\'ensemble des techniques visant à améliorer le positionnement d\'un site web dans les résultats organiques (non payants) des moteurs de recherche.',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'SEO vs SEA',
        content: 'Le SEO concerne les résultats "naturels" (gratuits), tandis que le SEA (Search Engine Advertising) désigne la publicité payante sur les moteurs (Google Ads). Les deux sont complémentaires mais fonctionnent différemment.',
      },
    },
    {
      type: 'text',
      content: 'L\'objectif du SEO est simple : faire en sorte que votre site apparaisse le plus haut possible quand quelqu\'un recherche des informations liées à votre activité. Plus vous êtes visible, plus vous attirez de visiteurs qualifiés.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Pourquoi le SEO est important',
    },
    {
      type: 'text',
      content: 'En 2026, Google traite plus de 8,5 milliards de recherches par jour. C\'est souvent le premier réflexe des internautes pour trouver une information, un produit ou un service. Si vous n\'êtes pas visible sur Google, vous passez à côté d\'une audience considérable.',
    },
    {
      type: 'list',
      content: [
        'Trafic gratuit et durable : contrairement à la publicité, le SEO génère du trafic sans coût par clic',
        'Trafic qualifié : les visiteurs cherchent activement ce que vous proposez',
        'Crédibilité : être bien positionné renforce la confiance des utilisateurs',
        'ROI excellent : le SEO offre l\'un des meilleurs retours sur investissement du marketing digital',
        'Avantage concurrentiel : vos concurrents investissent probablement déjà en SEO',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Comment fonctionne un moteur de recherche',
    },
    {
      type: 'text',
      content: 'Pour faire du SEO efficacement, il faut comprendre comment Google fonctionne. Le processus se déroule en trois étapes principales :',
    },
    {
      type: 'heading',
      level: 3,
      content: '1. Le crawl',
    },
    {
      type: 'text',
      content: 'Les robots de Google (Googlebot) parcourent le web en suivant les liens de page en page. Ils "crawlent" (explorent) votre site pour découvrir et analyser son contenu. C\'est pourquoi avoir une structure de liens claire est essentiel.',
    },
    {
      type: 'heading',
      level: 3,
      content: '2. L\'indexation',
    },
    {
      type: 'text',
      content: 'Une fois crawlées, les pages sont analysées et stockées dans l\'index de Google, une gigantesque base de données. L\'indexation détermine pour quels mots-clés votre page peut être pertinente.',
    },
    {
      type: 'heading',
      level: 3,
      content: '3. Le classement (ranking)',
    },
    {
      type: 'text',
      content: 'Quand un utilisateur fait une recherche, l\'algorithme de Google classe les pages indexées par ordre de pertinence. Des centaines de facteurs entrent en jeu pour déterminer ce classement.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Les 3 piliers du SEO',
    },
    {
      type: 'text',
      content: 'Le SEO repose sur trois piliers fondamentaux qui doivent tous être optimisés pour obtenir de bons résultats :',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pilier 1 : Le SEO technique',
    },
    {
      type: 'text',
      content: 'Le SEO technique concerne les aspects "infrastructure" de votre site : vitesse de chargement, compatibilité mobile, accessibilité au crawl, structure du code, sécurité HTTPS, etc. Un site techniquement défaillant aura du mal à se positionner.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pilier 2 : Le contenu',
    },
    {
      type: 'text',
      content: 'Le contenu est roi en SEO. Il s\'agit de créer des pages qui répondent aux questions et besoins de vos utilisateurs. Un bon contenu est pertinent, complet, bien structuré, et optimisé pour les mots-clés ciblés.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pilier 3 : La popularité (netlinking)',
    },
    {
      type: 'text',
      content: 'Les liens provenant d\'autres sites (backlinks) sont des "votes de confiance" aux yeux de Google. Plus vous avez de liens de qualité pointant vers votre site, plus Google considère que votre contenu est digne de confiance.',
    },
    {
      type: 'table',
      content: {
        headers: ['Pilier', 'Ce que c\'est', 'Exemples d\'actions'],
        rows: [
          ['Technique', 'Infrastructure du site', 'Optimiser la vitesse, passer en HTTPS, corriger les erreurs 404'],
          ['Contenu', 'Pages et textes du site', 'Cibler des mots-clés, structurer avec H1/H2, écrire pour l\'utilisateur'],
          ['Netlinking', 'Liens entrants', 'Obtenir des mentions, guest blogging, créer du contenu partageable'],
        ],
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Les mots-clés : la base du SEO',
    },
    {
      type: 'text',
      content: 'Les mots-clés sont les termes que les internautes tapent dans Google. Identifier les bons mots-clés à cibler est la première étape de toute stratégie SEO. Un bon mot-clé est :',
    },
    {
      type: 'list',
      content: [
        'Pertinent pour votre activité',
        'Recherché par votre audience cible',
        'Atteignable compte tenu de votre autorité',
        'Aligné avec l\'intention de recherche de l\'utilisateur',
      ],
    },
    {
      type: 'infobox',
      content: {
        type: 'tip',
        title: 'Conseil pour débuter',
        content: 'Commencez par des mots-clés "longue traîne" (phrases de 3-5 mots) moins concurrentiels. Par exemple, "comment apprendre le seo gratuitement" plutôt que simplement "SEO".',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'L\'optimisation on-page',
    },
    {
      type: 'text',
      content: 'L\'optimisation on-page consiste à optimiser chaque page individuellement pour un mot-clé cible. Les éléments principaux à optimiser sont :',
    },
    {
      type: 'list',
      content: [
        'Balise title : le titre affiché dans Google (60 caractères max)',
        'Meta description : le résumé sous le titre (155 caractères max)',
        'Balise H1 : le titre principal de la page',
        'Balises H2/H3 : les sous-titres qui structurent le contenu',
        'URL : une adresse courte et descriptive',
        'Contenu : texte complet répondant à l\'intention de recherche',
        'Images : optimisées avec des balises alt descriptives',
        'Liens internes : vers d\'autres pages pertinentes de votre site',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Le SEO en 2026 : ce qui change',
    },
    {
      type: 'text',
      content: 'Le SEO évolue constamment. En 2026, plusieurs tendances sont à prendre en compte :',
    },
    {
      type: 'list',
      content: [
        'L\'E-E-A-T (Experience, Expertise, Autorité, Confiance) est devenu central',
        'Les Core Web Vitals (performance) impactent le ranking',
        'L\'IA générative transforme la recherche (AI Overviews, ChatGPT)',
        'Le GEO (optimisation pour les IA) devient une compétence complémentaire',
        'Le mobile-first indexing est la norme depuis des années',
        'La recherche vocale et visuelle gagnent en importance',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Par où commencer ?',
    },
    {
      type: 'text',
      content: 'Voici un plan d\'action pour débuter en SEO :',
    },
    {
      type: 'list',
      content: [
        'Installez Google Search Console sur votre site (gratuit, indispensable)',
        'Identifiez 5-10 mots-clés pertinents pour votre activité',
        'Auditez les bases techniques de votre site (vitesse, mobile, HTTPS)',
        'Optimisez vos pages existantes pour vos mots-clés',
        'Créez du contenu nouveau répondant aux questions de votre audience',
        'Travaillez votre maillage interne (liens entre vos pages)',
        'Développez progressivement vos backlinks',
      ],
    },
    {
      type: 'infobox',
      content: {
        type: 'success',
        title: 'Patience et régularité',
        content: 'Le SEO est un marathon, pas un sprint. Les résultats prennent généralement 3 à 6 mois à apparaître. La clé est la régularité : publiez du contenu de qualité, optimisez progressivement, et mesurez vos progrès.',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: '📚 SECTION PREMIUM : Cas pratiques détaillés',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Apprendre par la pratique',
        content: 'Ces cas pratiques vous montrent comment appliquer concrètement les fondamentaux du SEO. Suivez les étapes et adaptez-les à votre propre site.',
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Cas pratique 1 : Optimiser votre première page en 30 minutes',
    },
    {
      type: 'text',
      content: 'Prenons une page existante de votre site et optimisons-la étape par étape.',
    },
    {
      type: 'heading',
      level: 4,
      content: 'Étape 1 : Choisir le mot-clé principal (5 min)',
    },
    {
      type: 'list',
      content: [
        'Allez sur Google Keyword Planner (gratuit avec un compte Google Ads)',
        'Tapez le sujet principal de votre page',
        'Notez le mot-clé avec le meilleur ratio volume/concurrence',
        'Exemple : pour une page sur les "gâteaux au chocolat", choisissez "recette gâteau chocolat facile" (2 400 recherches/mois) plutôt que "gâteau chocolat" (49 500 mais très concurrentiel)',
      ],
    },
    {
      type: 'heading',
      level: 4,
      content: 'Étape 2 : Optimiser la balise title (5 min)',
    },
    {
      type: 'text',
      content: 'Votre title doit contenir le mot-clé principal et être attractif :',
    },
    {
      type: 'list',
      content: [
        '❌ Avant : "Mon super gâteau - Le blog de Marie"',
        '✅ Après : "Recette Gâteau Chocolat Facile : Prêt en 15 Minutes"',
        'Règles : mot-clé au début, 50-60 caractères, promesse claire',
      ],
    },
    {
      type: 'heading',
      level: 4,
      content: 'Étape 3 : Réécrire la meta description (5 min)',
    },
    {
      type: 'list',
      content: [
        '❌ Avant : "Découvrez ma recette de gâteau au chocolat."',
        '✅ Après : "Recette de gâteau chocolat facile et rapide. Seulement 5 ingrédients, 15 min de préparation. Moelleux garanti ! Idéal débutants."',
        'Règles : 150-155 caractères, inclure le mot-clé, donner envie de cliquer',
      ],
    },
    {
      type: 'heading',
      level: 4,
      content: 'Étape 4 : Structurer avec les balises Hn (10 min)',
    },
    {
      type: 'list',
      content: [
        'H1 : Un seul, contient le mot-clé → "Recette de Gâteau au Chocolat Facile"',
        'H2 : Sections principales → "Ingrédients", "Préparation", "Conseils", "Variantes"',
        'H3 : Sous-sections → "Étape 1 : Préparer le moule", "Étape 2 : Mélanger"',
        'Astuce : regardez les "autres questions posées" sur Google pour trouver des H2',
      ],
    },
    {
      type: 'heading',
      level: 4,
      content: 'Étape 5 : Vérifier les images (5 min)',
    },
    {
      type: 'list',
      content: [
        'Compresser les images (TinyPNG gratuit) : objectif <100Ko',
        'Renommer les fichiers : "IMG_12345.jpg" → "gateau-chocolat-facile.jpg"',
        'Ajouter des balises alt descriptives : "Gâteau au chocolat moelleux fait maison"',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Cas pratique 2 : Faire son premier audit SEO simplifié',
    },
    {
      type: 'text',
      content: 'Voici comment auditer rapidement un site pour identifier les problèmes majeurs.',
    },
    {
      type: 'heading',
      level: 4,
      content: 'Check 1 : Le site est-il indexé ?',
    },
    {
      type: 'list',
      content: [
        'Tapez "site:votresite.com" dans Google',
        '✅ Des pages apparaissent → le site est indexé',
        '❌ Aucun résultat → problème grave (robots.txt, noindex, site trop récent)',
        'Vérifiez le nombre de pages indexées vs pages réelles',
      ],
    },
    {
      type: 'heading',
      level: 4,
      content: 'Check 2 : Vitesse du site',
    },
    {
      type: 'list',
      content: [
        'Allez sur PageSpeed Insights (gratuit)',
        'Entrez votre URL',
        '✅ Score mobile >50 : acceptable',
        '✅ Score mobile >70 : bon',
        '❌ Score mobile <50 : optimisation urgente',
      ],
    },
    {
      type: 'heading',
      level: 4,
      content: 'Check 3 : Compatibilité mobile',
    },
    {
      type: 'list',
      content: [
        'Test de compatibilité mobile Google (gratuit)',
        'Vérifiez que le texte est lisible sans zoom',
        'Vérifiez que les boutons sont cliquables facilement',
        'Testez sur votre propre téléphone',
      ],
    },
    {
      type: 'heading',
      level: 4,
      content: 'Check 4 : HTTPS',
    },
    {
      type: 'list',
      content: [
        'Votre URL commence par https:// ? Cadenas visible ?',
        '✅ Oui : parfait',
        '❌ Non : installez un certificat SSL (souvent gratuit avec l\'hébergeur)',
      ],
    },
    {
      type: 'heading',
      level: 4,
      content: 'Check 5 : Balises title et meta',
    },
    {
      type: 'list',
      content: [
        'Installez l\'extension "SEO Meta in 1 Click" (Chrome/Firefox)',
        'Vérifiez chaque page importante : title unique ? Meta description présente ?',
        'Notez les pages à corriger',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Cas pratique 3 : Trouver vos premiers mots-clés',
    },
    {
      type: 'text',
      content: 'Méthode simple pour identifier 10 mots-clés pertinents sans outil payant.',
    },
    {
      type: 'heading',
      level: 4,
      content: 'Étape 1 : Brainstorming (10 min)',
    },
    {
      type: 'list',
      content: [
        'Listez 5 thèmes principaux de votre activité',
        'Pour chaque thème, notez 3-5 questions que vos clients posent',
        'Exemple photographe : "tarif photographe mariage", "comment choisir photographe", "photographe [ville]"',
      ],
    },
    {
      type: 'heading',
      level: 4,
      content: 'Étape 2 : Google Suggest (10 min)',
    },
    {
      type: 'list',
      content: [
        'Tapez vos thèmes dans Google (sans appuyer sur Entrée)',
        'Notez les suggestions automatiques',
        'Faites la même chose en ajoutant "comment", "pourquoi", "quel", "meilleur"',
        'Scrollez en bas de page pour "Recherches associées"',
      ],
    },
    {
      type: 'heading',
      level: 4,
      content: 'Étape 3 : Valider avec un outil gratuit (10 min)',
    },
    {
      type: 'list',
      content: [
        'Utilisez Ubersuggest (3 recherches/jour gratuites)',
        'Ou Google Keyword Planner (gratuit)',
        'Vérifiez : volume de recherche, difficulté estimée',
        'Gardez les mots-clés avec >100 recherches/mois et difficulté faible/moyenne',
      ],
    },
    {
      type: 'heading',
      level: 4,
      content: 'Étape 4 : Prioriser',
    },
    {
      type: 'table',
      content: {
        headers: ['Mot-clé', 'Volume', 'Difficulté', 'Priorité'],
        rows: [
          ['[votre métier] + [ville]', '200', 'Faible', '1 - Urgent'],
          ['comment + [problème client]', '500', 'Faible', '2 - Important'],
          ['meilleur + [produit/service]', '1000', 'Moyenne', '3 - Moyen terme'],
          ['[terme générique métier]', '5000', 'Élevée', '4 - Long terme'],
        ],
      },
    },
    {
      type: 'heading',
      level: 2,
      content: '📝 EXERCICES PRATIQUES',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 1 : Analyser la SERP',
    },
    {
      type: 'text',
      content: 'Choisissez un mot-clé de votre domaine et analysez la première page Google :',
    },
    {
      type: 'list',
      content: [
        'Mot-clé choisi : ________________',
        'Nombre de résultats organiques : ____',
        'Y a-t-il des annonces Google Ads ? ____',
        'Y a-t-il un Featured Snippet ? ____',
        'Y a-t-il une section "Autres questions" ? ____',
        'Type de sites en top 3 : ________________ (blogs, e-commerce, médias...)',
        'Longueur moyenne du contenu top 3 (estimez) : ____ mots',
        'Votre conclusion : est-ce un mot-clé atteignable pour vous ? ____',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 2 : Optimiser une balise title',
    },
    {
      type: 'text',
      content: 'Réécrivez ces titles pour les optimiser :',
    },
    {
      type: 'list',
      content: [
        '❌ "Accueil - Mon entreprise" → Votre version : ________________',
        '❌ "Blog" → Votre version : ________________',
        '❌ "Services que nous proposons à nos clients" → Votre version : ________________',
        '❌ "Page produit iPhone 15 Apple smartphone dernier modèle" → Votre version : ________________',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 3 : Structurer un article',
    },
    {
      type: 'text',
      content: 'Pour un article sur "Comment créer un site web", proposez une structure Hn :',
    },
    {
      type: 'list',
      content: [
        'H1 : ________________',
        'H2 #1 : ________________',
        '  H3 : ________________',
        '  H3 : ________________',
        'H2 #2 : ________________',
        '  H3 : ________________',
        'H2 #3 : ________________',
        'H2 #4 (FAQ) : ________________',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 4 : Mini-audit de votre site',
    },
    {
      type: 'text',
      content: 'Complétez cette checklist pour votre site :',
    },
    {
      type: 'table',
      content: {
        headers: ['Critère', 'OK ?', 'Action si non'],
        rows: [
          ['Site indexé (site:monsite.com)', '☐', '________________'],
          ['HTTPS actif', '☐', '________________'],
          ['Score PageSpeed mobile >50', '☐', '________________'],
          ['Site mobile-friendly', '☐', '________________'],
          ['Chaque page a une title unique', '☐', '________________'],
          ['Chaque page a une meta description', '☐', '________________'],
          ['Google Search Console installé', '☐', '________________'],
          ['Sitemap.xml présent', '☐', '________________'],
        ],
      },
    },
    {
      type: 'quiz',
      content: {
        title: 'Quiz : Fondamentaux SEO',
        questions: [
          {
            question: 'Que signifie SEO ?',
            options: ['Social Engine Optimization', 'Search Engine Optimization', 'Site Enhancement Online', 'Search Email Optimization'],
            correctIndex: 1,
            explanation: 'SEO = Search Engine Optimization, soit "optimisation pour les moteurs de recherche" en français.',
          },
          {
            question: 'Quels sont les 3 piliers du SEO ?',
            options: ['Design, Contenu, Pub', 'Technique, Contenu, Popularité', 'Mobile, Desktop, Tablette', 'Google, Bing, Yahoo'],
            correctIndex: 1,
            explanation: 'Le SEO repose sur 3 piliers : le SEO Technique (vitesse, crawl), le Contenu (qualité, mots-clés) et la Popularité (backlinks).',
          },
          {
            question: 'Qu\'est-ce que le crawl ?',
            options: ['Un type de nage', 'L\'exploration du site par les robots', 'Une erreur 404', 'Un outil SEO'],
            correctIndex: 1,
            explanation: 'Le crawl est l\'exploration de votre site par les robots de Google (Googlebot) qui suivent les liens pour découvrir vos pages.',
          },
          {
            question: 'Quelle est la longueur idéale d\'une balise title ?',
            options: ['10-20 caractères', '50-60 caractères', '100-150 caractères', 'Pas de limite'],
            correctIndex: 1,
            explanation: 'Google affiche environ 50-60 caractères dans les résultats. Au-delà, votre title sera tronqué avec "...".',
          },
          {
            question: 'Qu\'est-ce qu\'un backlink ?',
            options: ['Un lien vers votre propre site', 'Un lien depuis un autre site vers le vôtre', 'Un lien cassé', 'Un bouton retour'],
            correctIndex: 1,
            explanation: 'Un backlink est un lien entrant provenant d\'un autre site. C\'est un "vote de confiance" aux yeux de Google.',
          },
          {
            question: 'Combien de H1 doit avoir une page ?',
            options: ['Aucun', 'Un seul', 'Autant que nécessaire', 'Minimum 3'],
            correctIndex: 1,
            explanation: 'Chaque page doit avoir un seul H1 (titre principal). Les H2/H3 structurent le reste du contenu.',
          },
          {
            question: 'Que vérifie "site:monsite.com" dans Google ?',
            options: ['La vitesse du site', 'Les pages indexées', 'Les backlinks', 'Le trafic'],
            correctIndex: 1,
            explanation: 'L\'opérateur "site:" permet de voir toutes les pages de votre site qui sont présentes dans l\'index de Google.',
          },
          {
            question: 'Qu\'est-ce que la "longue traîne" en SEO ?',
            options: ['Des articles très longs', 'Des mots-clés de 3+ mots moins concurrentiels', 'Le temps de chargement', 'La durée avant résultats'],
            correctIndex: 1,
            explanation: 'La longue traîne désigne des requêtes plus spécifiques (3+ mots), moins recherchées mais plus faciles à cibler.',
          },
          {
            question: 'Pourquoi le HTTPS est-il important ?',
            options: ['Plus rapide', 'Plus joli', 'Sécurité + facteur de ranking', 'Obligatoire légalement'],
            correctIndex: 2,
            explanation: 'HTTPS sécurise les échanges de données et est un facteur de ranking (léger) confirmé par Google depuis 2014.',
          },
          {
            question: 'Combien de temps pour voir des résultats SEO ?',
            options: ['24 heures', '1 semaine', '3-6 mois', '2 ans minimum'],
            correctIndex: 2,
            explanation: 'Le SEO est un travail de fond. Les premiers résultats significatifs apparaissent généralement entre 3 et 6 mois.',
          },
        ],
      },
    },
    {
      type: 'cta',
      content: {
        title: 'Continuez votre apprentissage',
        description: 'Explorez les autres articles de ce module pour approfondir chaque aspect du SEO.',
        buttonText: 'Voir tous les articles',
        buttonLink: '/seo-fondamentaux',
        variant: 'primary',
      },
    },
  ],
};

const childPages: Article[] = [
  {
    slug: 'qu-est-ce-que-le-seo',
    title: 'C\'est quoi le SEO ? Définition et explication simple',
    metaTitle: 'C\'est quoi le SEO ? Définition Simple 2026',
    metaDescription: 'Le SEO expliqué simplement : définition du référencement naturel, différence avec le SEA, et pourquoi c\'est important pour votre site web.',
    keyword: 'c\'est quoi le seo',
    secondaryKeywords: ['définition référencement naturel', 'seo définition', 'search engine optimization'],
    intent: 'info',
    cluster: 'seo-fondamentaux',
    excerpt: 'Le SEO, ou Search Engine Optimization, est l\'art d\'optimiser un site pour qu\'il soit mieux classé dans les résultats Google. Voici une explication simple de ce qu\'est le référencement naturel.',
    tableOfContents: true,
    readingTime: 25,
    difficulty: 'debutant',
    lastUpdated: '2026-01-18',
    author: 'marie-lefevre',
    relatedSlugs: ['comment-fonctionne-google', 'seo-vs-sea', 'les-3-piliers-du-seo'],
    faq: [
      {
        question: 'SEO signifie quoi en français ?',
        answer: 'SEO est l\'acronyme de Search Engine Optimization. En français, on parle de "référencement naturel" ou "optimisation pour les moteurs de recherche".',
      },
      {
        question: 'Le SEO est-il gratuit ?',
        answer: 'Le trafic SEO est gratuit (pas de coût par clic), mais le travail d\'optimisation demande du temps et/ou des ressources. Contrairement à la publicité, vous ne payez pas pour apparaître dans les résultats organiques.',
      },
      {
        question: 'Peut-on faire du SEO soi-même ?',
        answer: 'Oui, les bases du SEO sont accessibles à tous. Avec de la formation et de la pratique, vous pouvez optimiser votre site vous-même. Pour des stratégies avancées ou des marchés très concurrentiels, l\'aide d\'un expert peut être utile.',
      },
      {
        question: 'Combien de temps pour voir des résultats en SEO ?',
        answer: 'Le SEO est un travail de fond. Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les positions acquises sont ensuite durables si le travail d\'optimisation continue.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Si vous vous demandez "c\'est quoi le SEO ?", vous êtes au bon endroit. Le SEO est l\'une des compétences les plus demandées en marketing digital, et pourtant, beaucoup de gens ne savent pas exactement ce que cela signifie.',
      },
      {
        type: 'text',
        content: 'À la fin de cet article, vous comprendrez non seulement ce qu\'est le SEO, mais aussi pourquoi il est crucial pour toute présence en ligne, et comment il s\'articule avec les autres leviers du marketing digital.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Définition du SEO',
      },
      {
        type: 'text',
        content: 'Le SEO (Search Engine Optimization), appelé référencement naturel en français, est l\'ensemble des techniques qui permettent d\'améliorer la position d\'un site web dans les résultats des moteurs de recherche, principalement Google.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'En une phrase',
          content: 'Le SEO, c\'est faire en sorte que Google montre votre site quand quelqu\'un cherche ce que vous proposez.',
        },
      },
      {
        type: 'text',
        content: 'Le terme "SEO" englobe un vaste ensemble de pratiques : de l\'optimisation technique de votre site à la création de contenu, en passant par l\'acquisition de liens depuis d\'autres sites. Pour approfondir ces différentes composantes, consultez notre guide sur les 3 piliers du SEO.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Pourquoi "naturel" ?',
      },
      {
        type: 'text',
        content: 'On parle de référencement "naturel" ou "organique" pour distinguer ces résultats de la publicité payante. Dans une page de résultats Google (SERP), vous voyez :',
      },
      {
        type: 'list',
        content: [
          'Les annonces (Ads) : payantes, marquées "Sponsorisé"',
          'Les résultats organiques : gratuits, classés par pertinence selon Google',
        ],
      },
      {
        type: 'text',
        content: 'Le SEO vise à améliorer votre position dans les résultats organiques, sans payer pour chaque clic. Pour comprendre la différence en détail, consultez notre comparatif SEO vs SEA.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Exemple concret de SEO',
      },
      {
        type: 'text',
        content: 'Imaginons que vous êtes plombier à Lyon. Quand quelqu\'un tape "plombier Lyon urgence" dans Google, vous voulez que votre site apparaisse dans les premiers résultats. Le SEO, c\'est tout ce que vous faites pour y arriver :',
      },
      {
        type: 'list',
        content: [
          'Créer une page optimisée pour "plombier Lyon urgence"',
          'Avoir un site rapide et mobile-friendly',
          'Obtenir des avis positifs sur Google',
          'Avoir des liens depuis d\'autres sites locaux',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'L\'importance du SEO en chiffres',
      },
      {
        type: 'text',
        content: 'Pour comprendre pourquoi le SEO est si important, regardons quelques statistiques révélatrices :',
      },
      {
        type: 'table',
        content: {
          headers: ['Statistique', 'Chiffre', 'Source'],
          rows: [
            ['Part de marché Google', '91,5%', 'StatCounter 2026'],
            ['Recherches Google/jour', '8,5 milliards', 'Internet Live Stats'],
            ['Clics sur les 3 premiers résultats', '68%', 'Étude Sistrix'],
            ['Trafic organique vs payant', '53% vs 15%', 'BrightEdge 2026'],
            ['Utilisateurs ne dépassant pas la page 1', '90%', 'Études diverses'],
          ],
        },
      },
      {
        type: 'text',
        content: 'Ces chiffres montrent que si votre site n\'est pas en première page de Google, vous êtes invisible pour 90% des chercheurs.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'SEO vs SEA : quelle différence ?',
      },
      {
        type: 'table',
        content: {
          headers: ['Critère', 'SEO', 'SEA'],
          rows: [
            ['Coût', 'Temps et expertise', 'Budget publicitaire'],
            ['Résultats', '3-6 mois', 'Immédiat'],
            ['Durabilité', 'Long terme', 'Cesse avec le budget'],
            ['Confiance', 'Plus élevée (perçu comme mérite)', 'Plus basse (publicité)'],
            ['Position', 'Résultats organiques', 'Annonces en haut'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Les composantes du SEO',
      },
      {
        type: 'text',
        content: 'Le SEO se divise généralement en trois grandes catégories :',
      },
      {
        type: 'list',
        content: [
          'SEO On-Page : optimisation du contenu et du code de vos pages',
          'SEO Off-Page : acquisition de liens et de mentions externes',
          'SEO Technique : performance, accessibilité, structure du site',
        ],
      },
      {
        type: 'text',
        content: 'Ces trois piliers sont complémentaires. Négliger l\'un d\'entre eux limite vos résultats. Pour une compréhension approfondie, consultez notre article dédié aux 3 piliers du SEO.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Le SEO est-il toujours pertinent ?',
      },
      {
        type: 'text',
        content: 'En 2026, avec l\'émergence de ChatGPT et des AI Overviews de Google, certains se demandent si le SEO est encore utile. La réponse est oui, mais le SEO évolue :',
      },
      {
        type: 'list',
        content: [
          'Google reste la première source de trafic pour la majorité des sites',
          'Les fondamentaux SEO (contenu de qualité, technique propre) restent essentiels',
          'Le GEO (optimisation pour les IA) devient un complément au SEO classique',
          'Les sites bien optimisés sont aussi mieux cités par les IA',
        ],
      },
      {
        type: 'text',
        content: 'Comprendre comment fonctionne Google est essentiel pour maîtriser le SEO. Découvrez le processus complet dans notre article sur le fonctionnement de Google.',
      },
      {
        type: 'heading',
        level: 2,
        content: '📚 SECTION PREMIUM : Cas pratiques et études de cas',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Apprendre par l\'exemple',
          content: 'Ces études de cas réelles vous montrent concrètement l\'impact du SEO sur différents types d\'activités.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étude de cas 1 : Blog culinaire de 0 à 50 000 visiteurs/mois',
      },
      {
        type: 'text',
        content: 'Marie, passionnée de cuisine, a lancé son blog en janvier 2025. Voici son parcours SEO sur 12 mois :',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Situation de départ',
      },
      {
        type: 'list',
        content: [
          'Blog WordPress tout neuf, 0 trafic',
          'Aucune connaissance en SEO',
          'Budget : 0€ (uniquement hébergement)',
          'Temps disponible : 10h/semaine',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Actions SEO entreprises',
      },
      {
        type: 'table',
        content: {
          headers: ['Mois', 'Actions', 'Résultat'],
          rows: [
            ['1-2', 'Installation Yoast SEO, recherche de 20 mots-clés longue traîne', '10 articles publiés, 100 visiteurs'],
            ['3-4', 'Optimisation balises title/meta, amélioration vitesse', '500 visiteurs, premiers mots-clés indexés'],
            ['5-6', 'Création de contenu "cornerstone", maillage interne', '2 000 visiteurs, 1 article en top 10'],
            ['7-8', 'Guest blogging (3 articles), profil Pinterest créé', '8 000 visiteurs, 5 backlinks acquis'],
            ['9-10', 'Ajout schema markup recettes, featured snippets ciblés', '22 000 visiteurs, 3 featured snippets'],
            ['11-12', 'Expansion sémantique, mise à jour anciens articles', '50 000 visiteurs/mois'],
          ],
        },
      },
      {
        type: 'heading',
        level: 4,
        content: 'Résultats après 12 mois',
      },
      {
        type: 'list',
        content: [
          'Trafic : 0 → 50 000 visiteurs/mois',
          'Articles positionnés en page 1 : 35 sur 80 publiés',
          'Revenus publicitaires : 800€/mois (Adsense)',
          'Backlinks naturels acquis : 47',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'success',
          title: 'Leçon clé',
          content: 'Le SEO récompense la régularité. Publier 2 articles optimisés par semaine pendant 12 mois vaut mieux que 50 articles en un mois puis rien.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étude de cas 2 : Site e-commerce - Multiplication du trafic par 5',
      },
      {
        type: 'text',
        content: 'BioJardin, une boutique en ligne de produits de jardinage bio, a investi dans le SEO après des résultats décevants en publicité.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Problème initial',
      },
      {
        type: 'list',
        content: [
          'Site existant depuis 3 ans, 2 000 visiteurs/mois',
          'Dépendance totale à Google Ads (3 000€/mois)',
          'Fiches produits dupliquées des fournisseurs',
          'Site lent (score PageSpeed : 23)',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Stratégie SEO déployée',
      },
      {
        type: 'list',
        content: [
          'Audit technique : correction de 847 erreurs identifiées',
          'Optimisation vitesse : score PageSpeed 23 → 78',
          'Réécriture de 200 fiches produits uniques',
          'Création de 30 guides d\'achat et tutoriels',
          'Développement d\'un blog avec 50 articles',
          'Campagne de netlinking ciblée (blogs jardinage)',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Résultats à 18 mois',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après', 'Évolution'],
          rows: [
            ['Trafic organique', '2 000/mois', '12 500/mois', '+525%'],
            ['Chiffre d\'affaires SEO', '4 200€/mois', '28 000€/mois', '+567%'],
            ['Budget Google Ads', '3 000€/mois', '800€/mois', '-73%'],
            ['Mots-clés en top 10', '12', '156', '+1 200%'],
            ['Taux de conversion', '1,2%', '2,8%', '+133%'],
          ],
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Ce qui a fait la différence',
          content: 'Les guides d\'achat détaillés ("Comment choisir son composteur ?", "Guide des engrais bio") ont généré 60% du nouveau trafic et établi l\'autorité du site sur sa thématique.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étude de cas 3 : Profession libérale - Dominer le SEO local',
      },
      {
        type: 'text',
        content: 'Dr. Laurent, kinésithérapeute à Bordeaux, a transformé sa visibilité en ligne pour remplir son agenda sans publicité.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Situation initiale',
      },
      {
        type: 'list',
        content: [
          'Site vitrine basique, 50 visiteurs/mois',
          'Fiche Google My Business négligée',
          'Aucun contenu informatif',
          'Agenda rempli à 60% grâce au bouche-à-oreille',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Actions SEO Local',
      },
      {
        type: 'list',
        content: [
          'Optimisation complète de la fiche Google My Business',
          'Collecte systématique d\'avis (de 8 à 67 avis, note 4.9)',
          'Création de 15 pages de contenu : "Kiné sportif Bordeaux", "Kiné mal de dos Bordeaux"...',
          'Citations dans annuaires locaux (Pages Jaunes, Doctolib...)',
          'Ajout schema markup LocalBusiness et MedicalClinic',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Résultats à 8 mois',
      },
      {
        type: 'list',
        content: [
          'Position 1 sur "kiné Bordeaux" et 12 variantes locales',
          'Apparition dans le pack local (les 3 résultats Google Maps)',
          'Trafic site : 50 → 800 visiteurs/mois',
          'Nouveaux patients via Google : 15-20/mois',
          'Agenda rempli à 95%',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: '📝 EXERCICES PRATIQUES',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 1 : Identifier les opportunités SEO de votre secteur',
      },
      {
        type: 'text',
        content: 'Analysez votre marché en répondant à ces questions :',
      },
      {
        type: 'list',
        content: [
          '1. Quel est votre produit/service principal ? ________________',
          '2. Listez 5 termes que vos clients taperaient dans Google :',
          '   - ________________',
          '   - ________________',
          '   - ________________',
          '   - ________________',
          '   - ________________',
          '3. Tapez ces termes dans Google. Qui sont vos 3 concurrents principaux ?',
          '   - ________________',
          '   - ________________',
          '   - ________________',
          '4. Quels types de contenu dominent la page 1 ? (articles, vidéos, e-commerce)',
          '   ________________',
          '5. Identifiez une opportunité : un terme recherché avec peu de bons résultats',
          '   ________________',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Audit rapide de votre présence actuelle',
      },
      {
        type: 'text',
        content: 'Si vous avez déjà un site, évaluez sa situation SEO :',
      },
      {
        type: 'table',
        content: {
          headers: ['Vérification', 'Comment vérifier', 'Résultat'],
          rows: [
            ['Site indexé ?', 'Tapez site:votredomaine.com', 'Oui / Non'],
            ['Combien de pages indexées ?', 'Compter les résultats de site:', '____ pages'],
            ['Position sur votre nom de marque ?', 'Tapez votre nom d\'entreprise', 'Position ____'],
            ['Position sur votre mot-clé principal ?', 'Tapez votre mot-clé principal', 'Position ____'],
            ['Site mobile-friendly ?', 'Test Google Mobile-Friendly', 'Oui / Non'],
            ['Vitesse acceptable ?', 'PageSpeed Insights (score >50)', 'Score: ____'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Calculer le potentiel SEO de votre marché',
      },
      {
        type: 'text',
        content: 'Utilisez Google Keyword Planner (gratuit) pour estimer le potentiel :',
      },
      {
        type: 'list',
        content: [
          '1. Allez sur ads.google.com/keyword-planner',
          '2. Entrez vos 5 mots-clés de l\'exercice 1',
          '3. Notez le volume de recherche mensuel pour chacun',
          '4. Calculez le total : ____ recherches/mois',
          '5. Estimez que 30% des clics vont au résultat #1',
          '6. Potentiel de trafic si vous êtes #1 : ____ visiteurs/mois',
          '7. Si votre taux de conversion est 2%, cela représente ____ clients/mois',
          '8. Avec un panier moyen de ____€, potentiel CA SEO : ____€/mois',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Analyse de la concurrence',
      },
      {
        type: 'text',
        content: 'Choisissez le concurrent qui se classe #1 sur votre mot-clé principal et analysez-le :',
      },
      {
        type: 'list',
        content: [
          'Concurrent analysé : ________________',
          'Sa balise title : ________________',
          'Longueur estimée de son contenu : ____ mots',
          'Nombre de H2 visibles : ____',
          'A-t-il des images optimisées (alt visible) ? Oui / Non',
          'Son score PageSpeed : ____',
          'Son site est-il plus complet que le vôtre ? Oui / Non',
          'Que pouvez-vous faire de mieux ?',
          '   - ________________',
          '   - ________________',
          '   - ________________',
        ],
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Comprendre le SEO',
          questions: [
            {
              question: 'Que signifie l\'acronyme SEO ?',
              options: ['Social Engine Optimization', 'Search Engine Optimization', 'Site Enhancement Online', 'Secure Electronic Operations'],
              correctIndex: 1,
              explanation: 'SEO = Search Engine Optimization, soit "optimisation pour les moteurs de recherche" en français. On parle aussi de "référencement naturel".',
            },
            {
              question: 'Quelle est la différence principale entre SEO et SEA ?',
              options: ['Le SEO est plus rapide', 'Le SEA génère du trafic gratuit', 'Le SEO vise les résultats organiques, le SEA les publicités', 'Il n\'y a pas de différence'],
              correctIndex: 2,
              explanation: 'Le SEO optimise pour les résultats organiques (gratuits), tandis que le SEA concerne la publicité payante (Google Ads).',
            },
            {
              question: 'Pourquoi dit-on que le SEO est "gratuit" ?',
              options: ['Parce que Google ne facture rien pour le SEO', 'Parce que vous ne payez pas par clic pour le trafic organique', 'Parce que les outils SEO sont gratuits', 'Parce que le contenu se crée tout seul'],
              correctIndex: 1,
              explanation: 'Contrairement au SEA où vous payez chaque clic, le trafic SEO est gratuit une fois acquis. Cependant, le SEO demande un investissement en temps et expertise.',
            },
            {
              question: 'Quel pourcentage du trafic web vient de la recherche organique ?',
              options: ['Environ 15%', 'Environ 35%', 'Environ 53%', 'Environ 80%'],
              correctIndex: 2,
              explanation: 'Selon les études (BrightEdge), environ 53% du trafic web vient de la recherche organique, contre 15% pour le payant.',
            },
            {
              question: 'Quelle est la part de marché de Google en France ?',
              options: ['Environ 50%', 'Environ 70%', 'Environ 91%', 'Environ 99%'],
              correctIndex: 2,
              explanation: 'Google domine avec environ 91% du marché de la recherche en France. Optimiser pour Google, c\'est optimiser pour la quasi-totalité des recherches.',
            },
            {
              question: 'Quels sont les 3 piliers du SEO ?',
              options: ['Google, Bing, Yahoo', 'Desktop, Mobile, Tablette', 'Technique, Contenu, Netlinking', 'HTML, CSS, JavaScript'],
              correctIndex: 2,
              explanation: 'Le SEO repose sur 3 piliers : le SEO Technique (performance du site), le Contenu (qualité et pertinence), et le Netlinking (liens entrants).',
            },
            {
              question: 'Combien de temps faut-il généralement pour voir des résultats SEO ?',
              options: ['24-48 heures', '1-2 semaines', '3-6 mois', '2-3 ans minimum'],
              correctIndex: 2,
              explanation: 'Le SEO est un travail de fond. Les premiers résultats significatifs apparaissent généralement entre 3 et 6 mois, avec une amélioration continue ensuite.',
            },
            {
              question: 'Que sont les résultats "organiques" ?',
              options: ['Les résultats issus de sites bio/écologiques', 'Les résultats naturels, non payants', 'Les résultats provenant des réseaux sociaux', 'Les résultats Google Shopping'],
              correctIndex: 1,
              explanation: 'Les résultats organiques sont les résultats naturels de Google, classés par pertinence algorithmique, par opposition aux annonces payantes.',
            },
            {
              question: 'Qu\'est-ce que le GEO mentionné dans l\'article ?',
              options: ['Geographic Engine Optimization', 'Google Engine Optimization', 'Generative Engine Optimization', 'General Engine Optimization'],
              correctIndex: 2,
              explanation: 'Le GEO (Generative Engine Optimization) est l\'optimisation pour les moteurs IA génératifs comme ChatGPT ou les AI Overviews de Google. C\'est un complément au SEO classique.',
            },
            {
              question: 'Quel est l\'avantage principal du SEO par rapport au SEA ?',
              options: ['Résultats plus rapides', 'Ciblage plus précis', 'Durabilité des résultats', 'Coût par clic plus bas'],
              correctIndex: 2,
              explanation: 'Le principal avantage du SEO est la durabilité : une fois vos positions acquises, elles génèrent du trafic durablement, alors que le SEA s\'arrête dès que vous coupez le budget.',
            },
          ],
        },
      },
      {
        type: 'cta',
        content: {
          title: 'Prêt à aller plus loin ?',
          description: 'Maintenant que vous savez ce qu\'est le SEO, découvrez comment Google fonctionne pour mieux comprendre comment l\'optimiser.',
          buttonText: 'Comment fonctionne Google →',
          buttonLink: '/seo-fondamentaux/comment-fonctionne-google',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'comment-fonctionne-google',
    title: 'Comment fonctionne Google ? Crawl, Index et Algorithme',
    metaTitle: 'Comment Google Fonctionne - Crawl, Index, Ranking',
    metaDescription: 'Comprenez le fonctionnement de Google : crawl par Googlebot, indexation des pages, et algorithme de ranking. Les bases pour faire du SEO.',
    keyword: 'comment fonctionne google',
    secondaryKeywords: ['algorithme google', 'googlebot', 'indexation google'],
    intent: 'info',
    cluster: 'seo-fondamentaux',
    excerpt: 'Pour faire du SEO efficacement, il faut comprendre comment Google fonctionne. Découvrez les 3 étapes clés : le crawl, l\'indexation et le classement.',
    tableOfContents: true,
    readingTime: 30,
    difficulty: 'debutant',
    lastUpdated: '2026-01-16',
    author: 'thomas-dupont',
    relatedSlugs: ['qu-est-ce-que-le-seo', 'crawl-indexation-ranking', 'les-3-piliers-du-seo'],
    faq: [
      {
        question: 'Combien de temps Google met pour indexer une page ?',
        answer: 'Cela varie de quelques heures à plusieurs semaines. Les sites établis avec du contenu régulier sont crawlés plus fréquemment. Vous pouvez demander l\'indexation via Google Search Console.',
      },
      {
        question: 'Ma page est indexée mais pas dans les résultats, pourquoi ?',
        answer: 'Être indexé ne garantit pas d\'être bien classé. Votre page peut être indexée mais jugée peu pertinente ou de faible qualité pour apparaître en bonne position.',
      },
      {
        question: 'Pourquoi ma page n\'est-elle pas indexée ?',
        answer: 'Plusieurs raisons possibles : balise noindex, blocage robots.txt, contenu dupliqué, qualité insuffisante, ou simplement un site trop récent. Vérifiez Google Search Console pour le diagnostic.',
      },
      {
        question: 'Combien de facteurs de ranking Google utilise-t-il ?',
        answer: 'Google utilise des centaines de facteurs (plus de 200 selon certaines estimations). Les plus importants sont la qualité du contenu, les backlinks, l\'expérience utilisateur et la pertinence par rapport à la requête.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Google traite des milliards de requêtes chaque jour, retournant des résultats en une fraction de seconde. Comment est-ce possible ? Le fonctionnement de Google repose sur trois étapes principales : le crawl, l\'indexation, et le ranking.',
      },
      {
        type: 'text',
        content: 'Comprendre ce fonctionnement est essentiel pour faire du SEO efficacement. Si vous ne savez pas ce qu\'est le SEO, commencez par notre article "C\'est quoi le SEO ?" avant de continuer.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Vue d\'ensemble : le parcours d\'une page web',
      },
      {
        type: 'text',
        content: 'Avant de rentrer dans les détails, voici le parcours simplifié d\'une page web jusqu\'aux résultats Google :',
      },
      {
        type: 'table',
        content: {
          headers: ['Étape', 'Ce qui se passe', 'Délai typique'],
          rows: [
            ['1. Découverte', 'Googlebot trouve un lien vers votre page', 'Variable'],
            ['2. Crawl', 'Googlebot télécharge et lit votre page', 'Quelques secondes'],
            ['3. Traitement', 'Google analyse le contenu, images, liens', 'Quelques minutes'],
            ['4. Indexation', 'La page est ajoutée à l\'index (ou non)', 'Heures à semaines'],
            ['5. Ranking', 'La page est classée pour les requêtes pertinentes', 'Continu'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étape 1 : Le Crawl (exploration)',
      },
      {
        type: 'text',
        content: 'Le crawl est l\'étape où Google découvre et parcourt les pages web. Des robots appelés "Googlebot" naviguent de lien en lien pour explorer le contenu du web.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Comment Googlebot découvre vos pages',
      },
      {
        type: 'list',
        content: [
          'Liens depuis d\'autres pages : Googlebot suit tous les liens qu\'il rencontre',
          'Sitemap.xml : votre fichier listant toutes vos URLs',
          'Google Search Console : demande d\'indexation manuelle',
          'Flux RSS : si votre site en a un',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les différents Googlebots',
      },
      {
        type: 'text',
        content: 'Google n\'utilise pas un seul robot, mais plusieurs spécialisés :',
      },
      {
        type: 'table',
        content: {
          headers: ['Robot', 'Fonction', 'User-Agent'],
          rows: [
            ['Googlebot Desktop', 'Crawl version desktop', 'Mozilla/5.0 (compatible; Googlebot/2.1)'],
            ['Googlebot Mobile', 'Crawl version mobile (prioritaire)', 'Mozilla/5.0 (Linux; Android 6.0.1...)'],
            ['Googlebot Images', 'Crawl des images', 'Googlebot-Image/1.0'],
            ['Googlebot Video', 'Crawl des vidéos', 'Googlebot-Video/1.0'],
            ['Googlebot News', 'Crawl pour Google Actualités', 'Googlebot-News'],
          ],
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Mobile-First Indexing',
          content: 'Depuis 2021, Google utilise principalement Googlebot Mobile. Votre site doit être parfaitement fonctionnel sur mobile, c\'est cette version que Google voit en premier.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Le budget de crawl',
      },
      {
        type: 'text',
        content: 'Google n\'a pas des ressources illimitées. Chaque site a un "budget de crawl" : le nombre de pages que Googlebot va explorer dans un temps donné. Ce budget dépend de :',
      },
      {
        type: 'list',
        content: [
          'La taille de votre site : plus de pages = besoin de plus de crawl',
          'La vitesse du serveur : si le serveur répond vite, Googlebot peut crawler plus',
          'La qualité du site : les sites de qualité reçoivent plus d\'attention',
          'La fréquence de mise à jour : un site actif est crawlé plus souvent',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Optimiser le crawl',
          content: 'Pour les petits sites (<10 000 pages), le budget de crawl n\'est généralement pas un problème. Concentrez-vous sur la qualité du contenu et les liens internes.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étape 2 : L\'Indexation',
      },
      {
        type: 'text',
        content: 'Une fois une page crawlée, Google l\'analyse et décide de la stocker (ou non) dans son index. L\'index est une gigantesque base de données de toutes les pages web connues par Google.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Ce que Google analyse pendant l\'indexation',
      },
      {
        type: 'list',
        content: [
          'Le contenu textuel : tous les mots de la page',
          'Les balises HTML : title, meta description, headings (H1, H2...)',
          'Les images : balises alt, nom de fichier, contenu visuel',
          'Les liens : internes et externes, textes d\'ancrage',
          'Les données structurées : schema.org markup',
          'La langue : détection automatique',
          'Le type de contenu : article, produit, recette, FAQ...',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Pourquoi une page peut ne pas être indexée',
      },
      {
        type: 'table',
        content: {
          headers: ['Raison', 'Explication', 'Solution'],
          rows: [
            ['Balise noindex', 'Vous avez demandé de ne pas indexer', 'Retirer la balise noindex'],
            ['Robots.txt bloque', 'Le crawl est interdit', 'Modifier robots.txt'],
            ['Page dupliquée', 'Contenu identique ailleurs', 'Utiliser canonical ou supprimer'],
            ['Qualité insuffisante', 'Contenu trop mince ou inutile', 'Enrichir le contenu'],
            ['Erreur serveur', '500, timeout...', 'Corriger le serveur'],
            ['Nouvelle page', 'Pas encore découverte', 'Soumettre dans Search Console'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Vérifier l\'indexation dans Google Search Console',
      },
      {
        type: 'text',
        content: 'Google Search Console est l\'outil indispensable pour monitorer l\'indexation :',
      },
      {
        type: 'list',
        content: [
          'Rapport "Pages" : vue d\'ensemble des pages indexées et erreurs',
          'Inspection d\'URL : statut détaillé d\'une page spécifique',
          'Demander l\'indexation : soumettre une page manuellement',
          'Suppression temporaire : retirer une page de l\'index',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étape 3 : Le Ranking (classement)',
      },
      {
        type: 'text',
        content: 'Quand vous faites une recherche, Google ne cherche pas sur le web en temps réel. Il interroge son index et classe les pages par pertinence pour votre requête. C\'est ici que l\'algorithme entre en jeu.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'L\'évolution de l\'algorithme Google',
      },
      {
        type: 'text',
        content: 'L\'algorithme de Google a beaucoup évolué depuis les débuts :',
      },
      {
        type: 'table',
        content: {
          headers: ['Période', 'Approche', 'Focus principal'],
          rows: [
            ['1998-2011', 'PageRank classique', 'Quantité de backlinks'],
            ['2011-2015', 'Panda, Penguin, Hummingbird', 'Qualité contenu, pénalités spam'],
            ['2015-2019', 'RankBrain, Mobile-First', 'IA, expérience mobile'],
            ['2019-2024', 'BERT, MUM, Helpful Content', 'Compréhension sémantique, utilité'],
            ['2024+', 'AI Overviews, GEO', 'Réponses IA, expérience enrichie'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les grandes familles de facteurs de ranking',
      },
      {
        type: 'text',
        content: 'Google ne révèle pas tous ses facteurs de ranking, mais on peut les regrouper en catégories. Pour approfondir ces aspects, consultez notre article sur les 3 piliers du SEO.',
      },
      {
        type: 'heading',
        level: 4,
        content: '1. Facteurs de pertinence',
      },
      {
        type: 'list',
        content: [
          'Présence du mot-clé dans title, H1, contenu',
          'Champ sémantique complet (termes associés)',
          'Correspondance avec l\'intention de recherche',
          'Fraîcheur du contenu (pour certaines requêtes)',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: '2. Facteurs de qualité',
      },
      {
        type: 'list',
        content: [
          'E-E-A-T : Expérience, Expertise, Autorité, Confiance',
          'Profondeur et exhaustivité du contenu',
          'Originalité (pas de contenu dupliqué)',
          'Mise à jour régulière',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: '3. Facteurs d\'expérience utilisateur',
      },
      {
        type: 'list',
        content: [
          'Core Web Vitals (LCP, INP, CLS)',
          'Compatibilité mobile',
          'Sécurité HTTPS',
          'Absence de publicité intrusive',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: '4. Facteurs d\'autorité',
      },
      {
        type: 'list',
        content: [
          'Backlinks de qualité',
          'Ancienneté et historique du domaine',
          'Mentions de marque',
          'Signaux sociaux (indirect)',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Les Core Updates de Google',
      },
      {
        type: 'text',
        content: 'Plusieurs fois par an, Google déploie des "Core Updates" : des mises à jour majeures qui réévaluent les sites. Ces updates peuvent significativement affecter le ranking.',
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Que faire après une Core Update ?',
          content: 'Si votre trafic baisse après une update, ne paniquez pas. Google recommande de se concentrer sur la qualité du contenu à long terme plutôt que de chercher des "fixes" techniques rapides.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: '📚 SECTION PREMIUM : Cas pratiques détaillés',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Maîtriser le fonctionnement de Google',
          content: 'Ces études de cas vous montrent comment appliquer concrètement la compréhension du fonctionnement de Google pour améliorer votre SEO.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas pratique 1 : Diagnostiquer un problème d\'indexation',
      },
      {
        type: 'text',
        content: 'Situation : Un site e-commerce de 500 produits constate que seulement 200 pages sont indexées. Voici le processus de diagnostic et résolution :',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Étape 1 : Constater l\'écart',
      },
      {
        type: 'list',
        content: [
          'Recherche "site:monsite.com" : 200 résultats',
          'Pages réelles du site : 500 produits + 20 catégories + 10 pages fixes = 530',
          'Écart : 330 pages manquantes (62% non indexées)',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Étape 2 : Analyser Google Search Console',
      },
      {
        type: 'text',
        content: 'Dans le rapport "Pages", on trouve :',
      },
      {
        type: 'list',
        content: [
          '200 pages indexées ✓',
          '150 pages "Détectées - Non indexées actuellement"',
          '100 pages "Explorées - Non indexées"',
          '50 pages "Dupliquées - L\'URL envoyée n\'a pas été sélectionnée"',
          '30 pages "Exclues par robots.txt"',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Étape 3 : Identifier les causes',
      },
      {
        type: 'table',
        content: {
          headers: ['Problème', 'Quantité', 'Cause identifiée'],
          rows: [
            ['Détectées non indexées', '150', 'Pages de faible qualité (descriptions courtes)'],
            ['Explorées non indexées', '100', 'Contenu dupliqué des fournisseurs'],
            ['Dupliquées', '50', 'Paramètres URL (?color=, ?size=)'],
            ['Bloquées robots.txt', '30', 'Erreur : /products/ bloqué'],
          ],
        },
      },
      {
        type: 'heading',
        level: 4,
        content: 'Étape 4 : Résoudre',
      },
      {
        type: 'list',
        content: [
          'Robots.txt : retirer le blocage /products/ → +30 pages récupérées',
          'Paramètres URL : ajouter balises canonical → +50 pages consolidées',
          'Contenu dupliqué : réécrire 100 descriptions uniques → +80 pages indexées',
          'Faible qualité : enrichir 150 fiches produits → +100 pages indexées',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Résultat après 3 mois',
      },
      {
        type: 'text',
        content: 'Pages indexées : 200 → 460 (+130%). Trafic organique : +85%.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas pratique 2 : Comprendre une chute de ranking après Core Update',
      },
      {
        type: 'text',
        content: 'Situation : Un blog voyage perd 40% de son trafic après une Core Update Google. Analyse du problème :',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Analyse des pages impactées',
      },
      {
        type: 'list',
        content: [
          'Pages qui ont chuté : principalement des articles "Top 10..." et des comparatifs',
          'Pages stables : articles approfondis avec photos originales',
          'Point commun des pages impactées : contenu générique, pas d\'expérience personnelle',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Diagnostic : problème E-E-A-T',
      },
      {
        type: 'text',
        content: 'L\'update a renforcé l\'importance du premier "E" de E-E-A-T : l\'Experience. Les articles sans vécu personnel ont été déclassés au profit de contenus montrant une vraie expertise terrain.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Plan de correction',
      },
      {
        type: 'list',
        content: [
          'Retravailler les articles avec des photos personnelles',
          'Ajouter des sections "Mon avis" et "Conseils pratiques"',
          'Inclure des détails que seul quelqu\'un qui a visité peut connaître',
          'Créer une page auteur détaillée avec preuves d\'expertise voyage',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Résultat à 6 mois',
      },
      {
        type: 'text',
        content: 'Récupération de 90% du trafic perdu, avec une meilleure résistance aux updates suivantes.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas pratique 3 : Accélérer le crawl d\'un nouveau site',
      },
      {
        type: 'text',
        content: 'Situation : Un nouveau site lancé depuis 2 mois peine à être crawlé. Sur 50 articles publiés, seuls 8 sont indexés.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Problèmes identifiés',
      },
      {
        type: 'list',
        content: [
          'Sitemap.xml absent',
          'Pas de liens entrants (aucun backlink)',
          'Structure plate (pas de catégories)',
          'Pas de maillage interne entre articles',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Actions mises en place',
      },
      {
        type: 'list',
        content: [
          'Création et soumission du sitemap.xml dans Search Console',
          'Demande d\'indexation manuelle pour les 50 URLs',
          'Création de 5 pages catégories liant les articles',
          'Ajout de 3-5 liens internes par article',
          'Partage sur 3 forums thématiques (premiers backlinks)',
          'Inscription dans 5 annuaires de qualité',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Résultat à 4 semaines',
      },
      {
        type: 'list',
        content: [
          'Pages indexées : 8 → 47 sur 50',
          'Fréquence de crawl : de 10/jour à 80/jour',
          'Premières positions en page 1 sur mots-clés longue traîne',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: '📝 EXERCICES PRATIQUES',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 1 : Vérifier l\'indexation de votre site',
      },
      {
        type: 'text',
        content: 'Complétez cette analyse pour votre site :',
      },
      {
        type: 'list',
        content: [
          '1. Tapez "site:votredomaine.com" dans Google',
          '   Nombre de résultats : ____',
          '2. Comptez vos pages réelles (ou estimez)',
          '   Nombre de pages existantes : ____',
          '3. Calculez le taux d\'indexation',
          '   (résultats Google / pages réelles) × 100 = ____%',
          '4. Interprétation :',
          '   >90% : Excellent',
          '   70-90% : Correct',
          '   <70% : Problème à investiguer',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Analyser le rapport de couverture',
      },
      {
        type: 'text',
        content: 'Si vous avez Google Search Console, notez ces métriques :',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Votre valeur', 'Objectif'],
          rows: [
            ['Pages indexées', '____', 'Maximiser'],
            ['Erreurs', '____', '0'],
            ['Avec avertissements', '____', '0'],
            ['Exclues volontairement', '____', 'Comprendre pourquoi'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Tester le crawl avec l\'inspection d\'URL',
      },
      {
        type: 'text',
        content: 'Choisissez 3 pages importantes de votre site et inspectez-les dans Google Search Console :',
      },
      {
        type: 'list',
        content: [
          'Page 1 : ________________',
          '   - Est-elle indexée ? Oui / Non',
          '   - Dernière exploration : ____',
          '   - Mobile-friendly ? Oui / Non',
          '',
          'Page 2 : ________________',
          '   - Est-elle indexée ? Oui / Non',
          '   - Dernière exploration : ____',
          '   - Mobile-friendly ? Oui / Non',
          '',
          'Page 3 : ________________',
          '   - Est-elle indexée ? Oui / Non',
          '   - Dernière exploration : ____',
          '   - Mobile-friendly ? Oui / Non',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Identifier les facteurs de ranking sur votre marché',
      },
      {
        type: 'text',
        content: 'Choisissez votre mot-clé principal et analysez le top 3 :',
      },
      {
        type: 'list',
        content: [
          'Mot-clé : ________________',
          '',
          'Site #1 : ________________',
          '   - Type de site (blog, e-commerce, média) : ____',
          '   - Longueur contenu estimée : ____ mots',
          '   - Nombre de backlinks (utilisez Ubersuggest gratuit) : ____',
          '',
          'Site #2 : ________________',
          '   - Type de site : ____',
          '   - Longueur contenu : ____ mots',
          '   - Nombre de backlinks : ____',
          '',
          'Site #3 : ________________',
          '   - Type de site : ____',
          '   - Longueur contenu : ____ mots',
          '   - Nombre de backlinks : ____',
          '',
          'Points communs des 3 premiers : ________________',
          'Ce que vous pourriez faire de mieux : ________________',
        ],
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Fonctionnement de Google',
          questions: [
            {
              question: 'Quelles sont les 3 étapes principales du fonctionnement de Google ?',
              options: ['Recherche, Analyse, Affichage', 'Crawl, Indexation, Ranking', 'Lecture, Stockage, Tri', 'Découverte, Évaluation, Publication'],
              correctIndex: 1,
              explanation: 'Google fonctionne en 3 étapes : le Crawl (exploration des pages), l\'Indexation (stockage dans la base de données), et le Ranking (classement des résultats).',
            },
            {
              question: 'Comment s\'appelle le robot d\'exploration de Google ?',
              options: ['Googlespider', 'Googlebot', 'Crawler', 'Searchbot'],
              correctIndex: 1,
              explanation: 'Googlebot est le nom des robots de Google qui crawlent (explorent) les pages web. Il existe plusieurs versions : mobile, desktop, images, vidéo...',
            },
            {
              question: 'Qu\'est-ce que le Mobile-First Indexing ?',
              options: ['Google indexe uniquement sur mobile', 'Google utilise d\'abord la version mobile pour indexer', 'Les sites mobiles sont prioritaires dans le ranking', 'Seuls les sites mobiles sont indexés'],
              correctIndex: 1,
              explanation: 'Depuis 2021, Google utilise principalement la version mobile de votre site pour le crawl et l\'indexation. La version desktop est secondaire.',
            },
            {
              question: 'Toutes les pages crawlées sont-elles indexées ?',
              options: ['Oui, automatiquement', 'Non, Google peut décider de ne pas indexer', 'Oui, si elles ont un sitemap', 'Non, uniquement les pages payantes'],
              correctIndex: 1,
              explanation: 'Non. Google peut crawler une page mais décider de ne pas l\'indexer si elle est de faible qualité, dupliquée, ou si vous avez mis une balise noindex.',
            },
            {
              question: 'À quoi sert le fichier sitemap.xml ?',
              options: ['Bloquer Googlebot', 'Lister les pages du site pour faciliter la découverte', 'Améliorer le ranking', 'Sécuriser le site'],
              correctIndex: 1,
              explanation: 'Le sitemap.xml liste toutes les URLs de votre site, aidant Googlebot à découvrir vos pages. C\'est particulièrement utile pour les nouveaux sites ou les grosses pages.',
            },
            {
              question: 'Qu\'est-ce que le budget de crawl ?',
              options: ['Le coût payé à Google', 'Le nombre de pages que Googlebot peut explorer', 'Le temps maximum de chargement', 'Le nombre de mots-clés indexables'],
              correctIndex: 1,
              explanation: 'Le budget de crawl est le nombre de pages que Googlebot va explorer sur votre site dans un temps donné. Il dépend de la taille du site, de sa vitesse, et de sa qualité.',
            },
            {
              question: 'Quel outil gratuit permet de vérifier l\'indexation de son site ?',
              options: ['Google Analytics', 'Google Search Console', 'Google Ads', 'Google PageSpeed'],
              correctIndex: 1,
              explanation: 'Google Search Console est l\'outil officiel et gratuit de Google pour monitorer l\'indexation, les erreurs de crawl, et les performances SEO.',
            },
            {
              question: 'Que signifie E-E-A-T ?',
              options: ['Easy, Effective, Accurate, Trustworthy', 'Experience, Expertise, Authoritativeness, Trustworthiness', 'Engagement, Excellence, Authority, Traffic', 'Evaluation, Expertise, Analysis, Testing'],
              correctIndex: 1,
              explanation: 'E-E-A-T = Experience, Expertise, Authoritativeness, Trustworthiness. Ce sont des critères de qualité que Google utilise pour évaluer les pages.',
            },
            {
              question: 'Qu\'est-ce qu\'une Core Update ?',
              options: ['Une mise à jour de Chrome', 'Une mise à jour majeure de l\'algorithme Google', 'Un changement des Core Web Vitals', 'Une correction de bug'],
              correctIndex: 1,
              explanation: 'Les Core Updates sont des mises à jour majeures de l\'algorithme de ranking de Google, déployées plusieurs fois par an. Elles peuvent significativement affecter les positions.',
            },
            {
              question: 'Quel est le principal facteur de ranking selon les études récentes ?',
              options: ['Le nombre de pages', 'L\'âge du domaine', 'La qualité et pertinence du contenu', 'Le nombre de liens internes'],
              correctIndex: 2,
              explanation: 'La qualité du contenu et sa pertinence par rapport à l\'intention de recherche restent les facteurs les plus importants, devant même les backlinks.',
            },
          ],
        },
      },
      {
        type: 'cta',
        content: {
          title: 'Continuez votre apprentissage',
          description: 'Maintenant que vous comprenez comment Google fonctionne, découvrez les 3 piliers à optimiser pour améliorer votre référencement.',
          buttonText: 'Les 3 piliers du SEO →',
          buttonLink: '/seo-fondamentaux/les-3-piliers-du-seo',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'les-3-piliers-du-seo',
    title: 'Les 3 Piliers du SEO : Technique, Contenu et Netlinking',
    metaTitle: 'Les 3 Piliers du SEO - Guide Complet 2026',
    metaDescription: 'Maîtrisez les 3 piliers du référencement : SEO technique, optimisation du contenu, et stratégie de netlinking. Les bases pour réussir en SEO.',
    keyword: 'piliers du seo',
    secondaryKeywords: ['technique contenu netlinking', 'bases seo', 'fondamentaux référencement'],
    intent: 'info',
    cluster: 'seo-fondamentaux',
    excerpt: 'Le SEO repose sur trois piliers fondamentaux : la technique, le contenu et le netlinking. Négliger l\'un d\'entre eux limite vos résultats. Voici comment les maîtriser.',
    tableOfContents: true,
    readingTime: 35,
    difficulty: 'debutant',
    lastUpdated: '2026-01-14',
    author: 'thomas-dupont',
    relatedSlugs: ['qu-est-ce-que-le-seo', 'comment-fonctionne-google', 'seo-vs-sea'],
    faq: [
      {
        question: 'Quel pilier est le plus important ?',
        answer: 'Les trois sont importants et interdépendants. Un excellent contenu sur un site techniquement défaillant ne performera pas. De même, de nombreux backlinks ne compensent pas un contenu médiocre.',
      },
      {
        question: 'Par quel pilier commencer ?',
        answer: 'Commencez par le technique pour poser des fondations solides, puis créez du contenu de qualité. Le netlinking vient généralement après, une fois que vous avez du contenu à promouvoir.',
      },
      {
        question: 'Combien de temps consacrer à chaque pilier ?',
        answer: 'En phase de lancement, privilégiez 60% contenu, 30% technique, 10% netlinking. Une fois le site établi, équilibrez vers 40% contenu, 20% technique, 40% netlinking.',
      },
      {
        question: 'Peut-on négliger un pilier si on excelle dans les autres ?',
        answer: 'Non. Un site techniquement parfait sans contenu ne rankera pas. Du contenu excellent sur un site inaccessible ne sera pas vu. Des centaines de backlinks vers du mauvais contenu n\'aideront pas.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Imaginez le SEO comme un tabouret à trois pieds. Si l\'un des pieds est plus court que les autres, le tabouret est instable. Il en va de même pour le référencement : technique, contenu et netlinking doivent être équilibrés pour des résultats optimaux.',
      },
      {
        type: 'text',
        content: 'Avant de plonger dans les 3 piliers, assurez-vous de bien comprendre ce qu\'est le SEO. Si ce n\'est pas le cas, commencez par notre article "C\'est quoi le SEO ?".',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Vue d\'ensemble des 3 piliers',
      },
      {
        type: 'table',
        content: {
          headers: ['Pilier', 'Ce que c\'est', 'Pourquoi c\'est important', 'Difficulté'],
          rows: [
            ['Technique', 'Infrastructure du site', 'Permet le crawl et l\'indexation', 'Moyenne'],
            ['Contenu', 'Textes, images, vidéos', 'Répond aux recherches utilisateurs', 'Faible à moyenne'],
            ['Netlinking', 'Liens entrants', 'Transmet l\'autorité et la confiance', 'Élevée'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Pilier 1 : Le SEO Technique',
      },
      {
        type: 'text',
        content: 'Le SEO technique concerne tout ce qui permet à Google de crawler, indexer et comprendre votre site. C\'est la fondation sur laquelle reposent les deux autres piliers. Pour comprendre en détail comment Google interagit avec votre site, consultez notre article sur le fonctionnement de Google.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les éléments techniques essentiels',
      },
      {
        type: 'heading',
        level: 4,
        content: '1. Vitesse de chargement',
      },
      {
        type: 'text',
        content: 'Un site lent fait fuir les utilisateurs et est pénalisé par Google. Les Core Web Vitals mesurent cette performance :',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Ce qu\'elle mesure', 'Objectif'],
          rows: [
            ['LCP (Largest Contentful Paint)', 'Temps d\'affichage du contenu principal', '< 2,5 secondes'],
            ['INP (Interaction to Next Paint)', 'Réactivité aux interactions', '< 200 ms'],
            ['CLS (Cumulative Layout Shift)', 'Stabilité visuelle', '< 0,1'],
          ],
        },
      },
      {
        type: 'heading',
        level: 4,
        content: '2. Compatibilité mobile',
      },
      {
        type: 'text',
        content: 'Avec le Mobile-First Indexing, Google voit d\'abord votre version mobile. Votre site doit être :',
      },
      {
        type: 'list',
        content: [
          'Responsive (s\'adapte à toutes les tailles d\'écran)',
          'Lisible sans zoom',
          'Navigation facile au doigt (boutons assez grands)',
          'Sans contenu masqué sur mobile',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: '3. Architecture et crawlabilité',
      },
      {
        type: 'text',
        content: 'Google doit pouvoir accéder et comprendre la structure de votre site :',
      },
      {
        type: 'list',
        content: [
          'Sitemap.xml : liste de toutes vos pages importantes',
          'Robots.txt : indique ce que Google peut/ne peut pas crawler',
          'Structure logique : catégories > sous-catégories > pages',
          'Liens internes : chaque page importante accessible en 3 clics max',
          'URLs propres : courtes, descriptives, sans paramètres inutiles',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: '4. Sécurité HTTPS',
      },
      {
        type: 'text',
        content: 'Le HTTPS est indispensable en 2026. Sans certificat SSL, les navigateurs affichent un avertissement "Non sécurisé" et Google vous pénalise légèrement.',
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Outils pour le SEO technique',
          content: 'Google PageSpeed Insights (vitesse), Google Search Console (crawl/index), Screaming Frog (audit complet), GTmetrix (performance). Tous ont des versions gratuites suffisantes pour débuter.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Checklist technique rapide',
      },
      {
        type: 'table',
        content: {
          headers: ['Vérification', 'Outil', 'Critère de réussite'],
          rows: [
            ['Score PageSpeed Mobile', 'PageSpeed Insights', '> 50 (idéal > 70)'],
            ['HTTPS actif', 'Navigateur', 'Cadenas visible'],
            ['Site indexé', 'Google Search Console', 'Pages dans l\'index'],
            ['Mobile-friendly', 'Test Google', '"Page adaptée aux mobiles"'],
            ['Erreurs de crawl', 'Search Console', '0 erreurs critiques'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Pilier 2 : Le Contenu',
      },
      {
        type: 'text',
        content: '"Content is King" reste vrai en 2026. Le contenu est ce que les utilisateurs viennent chercher, et ce que Google évalue pour déterminer la pertinence de votre page.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les caractéristiques d\'un bon contenu SEO',
      },
      {
        type: 'heading',
        level: 4,
        content: '1. Répond à une intention de recherche',
      },
      {
        type: 'text',
        content: 'Chaque contenu doit cibler un mot-clé et satisfaire l\'intention derrière ce mot-clé :',
      },
      {
        type: 'table',
        content: {
          headers: ['Type d\'intention', 'Exemple de requête', 'Type de contenu adapté'],
          rows: [
            ['Informationnelle', '"comment faire du SEO"', 'Guide, tutoriel, article'],
            ['Navigationnelle', '"Facebook login"', 'Page de connexion'],
            ['Commerciale', '"meilleur outil SEO"', 'Comparatif, test, avis'],
            ['Transactionnelle', '"acheter outil SEO"', 'Page produit, pricing'],
          ],
        },
      },
      {
        type: 'heading',
        level: 4,
        content: '2. Est original et apporte de la valeur',
      },
      {
        type: 'list',
        content: [
          'Pas de contenu copié ou paraphrasé d\'ailleurs',
          'Apporte un angle nouveau ou des informations exclusives',
          'Contient des exemples concrets et pratiques',
          'Va plus loin que ce qui existe déjà',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: '3. Est bien structuré',
      },
      {
        type: 'list',
        content: [
          'H1 unique contenant le mot-clé principal',
          'H2/H3 pour structurer les sections',
          'Paragraphes courts (3-4 phrases)',
          'Listes à puces pour les énumérations',
          'Tableaux pour les comparaisons',
          'Images pour illustrer les concepts',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: '4. Démontre E-E-A-T',
      },
      {
        type: 'text',
        content: 'Google évalue votre contenu selon 4 critères :',
      },
      {
        type: 'list',
        content: [
          'Experience : avez-vous une expérience directe du sujet ?',
          'Expertise : êtes-vous qualifié pour en parler ?',
          'Authoritativeness : êtes-vous reconnu dans votre domaine ?',
          'Trustworthiness : peut-on vous faire confiance ?',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'La stratégie de contenu SEO',
      },
      {
        type: 'text',
        content: 'Un contenu isolé ne suffit pas. Il faut une stratégie cohérente :',
      },
      {
        type: 'list',
        content: [
          'Page pilier : contenu long et complet sur un sujet principal',
          'Pages satellites : articles détaillés sur des sous-sujets',
          'Maillage interne : liens entre les pages du même thème',
          'Mise à jour régulière : enrichir et actualiser le contenu',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Pilier 3 : Le Netlinking',
      },
      {
        type: 'text',
        content: 'Le netlinking (ou link building) désigne l\'acquisition de liens depuis d\'autres sites vers le vôtre. Ces "backlinks" sont vus par Google comme des recommandations.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Pourquoi les backlinks comptent',
      },
      {
        type: 'text',
        content: 'Un backlink est comme un vote de confiance. Plus vous avez de liens de sites fiables et pertinents, plus Google considère votre site comme autoritaire sur votre sujet.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Tous les backlinks ne se valent pas',
      },
      {
        type: 'table',
        content: {
          headers: ['Type de lien', 'Valeur', 'Exemple'],
          rows: [
            ['Site haute autorité, même thématique', 'Très élevée', 'Blog SEO reconnu → votre article SEO'],
            ['Site haute autorité, autre thématique', 'Élevée', 'Le Monde → votre entreprise'],
            ['Site moyenne autorité, même thématique', 'Bonne', 'Petit blog SEO → votre article'],
            ['Site faible autorité', 'Faible', 'Annuaire généraliste → votre site'],
            ['Site spam/toxique', 'Négative', 'Ferme de liens → votre site'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les méthodes d\'acquisition de backlinks',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Méthodes blanches (recommandées)',
      },
      {
        type: 'list',
        content: [
          'Créer du contenu exceptionnel qui attire naturellement des liens',
          'Guest blogging : écrire des articles invités',
          'Relations presse : être mentionné dans les médias',
          'Partenariats : échanges avec des sites complémentaires',
          'Infographies et études originales : contenu facilement partageable',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Méthodes grises (avec prudence)',
      },
      {
        type: 'list',
        content: [
          'Achat de liens : risqué mais pratiqué',
          'Échange de liens : acceptable si modéré',
          'PBN (Private Blog Network) : de plus en plus risqué',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Attention aux pénalités',
          content: 'Google peut pénaliser les sites avec des profils de liens artificiels. Privilégiez toujours la qualité à la quantité et évitez les techniques agressives.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'L\'équilibre entre les piliers',
      },
      {
        type: 'table',
        content: {
          headers: ['Situation', 'Problème', 'Solution'],
          rows: [
            ['Bon contenu, site lent', 'Mauvais ranking malgré la qualité', 'Optimiser le technique'],
            ['Site rapide, contenu faible', 'Pas de raison de ranker', 'Créer du contenu de valeur'],
            ['Bon site, pas de liens', 'Manque d\'autorité', 'Stratégie de netlinking'],
            ['Beaucoup de liens, contenu moyen', 'Classement instable', 'Améliorer la qualité du contenu'],
          ],
        },
      },
      {
        type: 'text',
        content: 'L\'idéal est de progresser sur les trois fronts simultanément, en priorisant selon les lacunes identifiées lors d\'un audit. Pour approfondir le SEO vs publicité payante, consultez notre comparatif SEO vs SEA.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Comment prioriser selon votre situation',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Site nouveau (< 6 mois)',
      },
      {
        type: 'list',
        content: [
          '1. Technique : mettre en place les fondations (70%)',
          '2. Contenu : créer 10-20 articles de qualité (25%)',
          '3. Netlinking : premiers liens pour la découverte (5%)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Site établi avec peu de trafic (6 mois - 2 ans)',
      },
      {
        type: 'list',
        content: [
          '1. Contenu : développer la couverture sémantique (50%)',
          '2. Netlinking : commencer l\'acquisition active (30%)',
          '3. Technique : optimiser les performances (20%)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Site mature avec trafic (> 2 ans)',
      },
      {
        type: 'list',
        content: [
          '1. Contenu : mise à jour et expansion (40%)',
          '2. Netlinking : développer l\'autorité (40%)',
          '3. Technique : maintien et innovations (20%)',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: '📚 SECTION PREMIUM : Cas pratiques détaillés',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Appliquer les 3 piliers concrètement',
          content: 'Ces études de cas montrent comment équilibrer les 3 piliers selon différentes situations réelles.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas pratique 1 : Blog personnel - De 0 à 10 000 visiteurs',
      },
      {
        type: 'text',
        content: 'Sophie lance un blog sur la photographie. Voici sa progression sur 12 mois en appliquant les 3 piliers :',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Mois 1-2 : Focus technique (80%)',
      },
      {
        type: 'list',
        content: [
          'Installation WordPress + thème rapide (GeneratePress)',
          'Configuration hébergement performant (o2switch)',
          'Installation plugins essentiels : Yoast SEO, WP Rocket, Imagify',
          'Création sitemap.xml et robots.txt',
          'Score PageSpeed : de 45 à 82',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Mois 3-6 : Focus contenu (70%)',
      },
      {
        type: 'list',
        content: [
          'Recherche de 50 mots-clés longue traîne photo',
          'Publication de 2 articles/semaine (30 articles)',
          'Création de 5 guides complets (pages piliers)',
          'Maillage interne systématique',
          'Résultat : 800 visiteurs/mois',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Mois 7-12 : Équilibre contenu + netlinking',
      },
      {
        type: 'list',
        content: [
          'Poursuite publication : 1 article/semaine',
          'Guest posts sur 5 blogs photo (5 backlinks)',
          'Partenariat avec 2 marques photo (3 backlinks)',
          'Commentaires experts sur forums (10 backlinks)',
          'Résultat final : 10 500 visiteurs/mois',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Bilan des 3 piliers après 12 mois',
      },
      {
        type: 'table',
        content: {
          headers: ['Pilier', 'État initial', 'État final', 'Actions clés'],
          rows: [
            ['Technique', 'Score 45', 'Score 85', 'Thème léger, cache, images optimisées'],
            ['Contenu', '0 articles', '70 articles', '2 articles/sem pendant 6 mois puis 1/sem'],
            ['Netlinking', '0 backlinks', '18 backlinks', 'Guest posts, partenariats, forums'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas pratique 2 : E-commerce - Rattraper un déficit technique',
      },
      {
        type: 'text',
        content: 'Une boutique en ligne de cosmétiques bio stagne à 5 000 visiteurs/mois malgré 200 produits. Diagnostic : problème technique majeur.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Audit initial',
      },
      {
        type: 'table',
        content: {
          headers: ['Pilier', 'Score', 'Problèmes identifiés'],
          rows: [
            ['Technique', '2/10', 'Score PageSpeed 18, temps de chargement 8s, CLS 0.45'],
            ['Contenu', '7/10', 'Bonnes fiches produits, manque de guides'],
            ['Netlinking', '5/10', '45 backlinks de qualité moyenne'],
          ],
        },
      },
      {
        type: 'heading',
        level: 4,
        content: 'Plan d\'action : 100% technique pendant 2 mois',
      },
      {
        type: 'list',
        content: [
          'Migration vers hébergeur cloud (Cloudways)',
          'Compression images : 12 Mo → 800 Ko de données',
          'Lazy loading sur toutes les images',
          'Cache navigateur et serveur optimisés',
          'Suppression de 8 plugins inutiles',
          'Minification CSS/JS',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Résultats après optimisation technique',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après'],
          rows: [
            ['Score PageSpeed Mobile', '18', '72'],
            ['Temps de chargement', '8,2s', '2,1s'],
            ['CLS', '0,45', '0,08'],
            ['Taux de rebond', '72%', '48%'],
            ['Trafic (à +3 mois)', '5 000', '11 200'],
          ],
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'success',
          title: 'Leçon clé',
          content: 'Sans rien changer au contenu ni aux backlinks, corriger le technique a plus que doublé le trafic. Le site avait du potentiel bridé par sa lenteur.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas pratique 3 : Site B2B - Stratégie netlinking agressive',
      },
      {
        type: 'text',
        content: 'Une agence de recrutement IT veut dominer le mot-clé "cabinet recrutement développeurs" face à des concurrents établis.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Analyse concurrentielle',
      },
      {
        type: 'table',
        content: {
          headers: ['Site', 'DA', 'Backlinks', 'Position'],
          rows: [
            ['Concurrent 1', '52', '340', '1'],
            ['Concurrent 2', '48', '210', '2'],
            ['Concurrent 3', '45', '180', '3'],
            ['Notre site', '28', '45', '12'],
          ],
        },
      },
      {
        type: 'heading',
        level: 4,
        content: 'Stratégie sur 12 mois',
      },
      {
        type: 'list',
        content: [
          'Création de 3 études originales sur le marché IT (contenu linkable)',
          'Campagne RP : publication dans 8 médias tech (8 backlinks DA 50+)',
          'Guest posting : 12 articles sur blogs RH/Tech (12 backlinks)',
          'Témoignages clients : mentions sur 15 sites entreprises (15 backlinks)',
          'Annuaires professionnels qualifiés : 10 inscriptions (10 backlinks)',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Résultats à 12 mois',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après', 'Évolution'],
          rows: [
            ['Domain Authority', '28', '41', '+46%'],
            ['Backlinks', '45', '98', '+118%'],
            ['Position mot-clé principal', '12', '3', '+9 places'],
            ['Trafic organique', '1 200/mois', '4 800/mois', '+300%'],
            ['Leads générés', '15/mois', '52/mois', '+247%'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: '📝 EXERCICES PRATIQUES',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 1 : Évaluer l\'équilibre de vos 3 piliers',
      },
      {
        type: 'text',
        content: 'Notez chaque pilier de 1 à 10 pour votre site :',
      },
      {
        type: 'table',
        content: {
          headers: ['Pilier', 'Critères d\'évaluation', 'Note /10'],
          rows: [
            ['Technique', 'PageSpeed >50, mobile OK, HTTPS, pas d\'erreurs crawl', '____'],
            ['Contenu', 'Articles de qualité, mots-clés ciblés, structure claire', '____'],
            ['Netlinking', 'Backlinks de qualité, profil naturel, autorité', '____'],
          ],
        },
      },
      {
        type: 'text',
        content: 'Le pilier avec le score le plus bas doit être votre priorité.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Audit technique express',
      },
      {
        type: 'text',
        content: 'Utilisez PageSpeed Insights sur votre page d\'accueil et notez :',
      },
      {
        type: 'list',
        content: [
          'Score Performance Mobile : ____',
          'LCP (Largest Contentful Paint) : ____s (objectif < 2,5s)',
          'INP (Interaction to Next Paint) : ____ms (objectif < 200ms)',
          'CLS (Cumulative Layout Shift) : ____ (objectif < 0,1)',
          '',
          'Top 3 des problèmes à corriger :',
          '1. ________________',
          '2. ________________',
          '3. ________________',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Analyser votre contenu existant',
      },
      {
        type: 'text',
        content: 'Listez vos 5 pages les plus importantes et évaluez-les :',
      },
      {
        type: 'table',
        content: {
          headers: ['Page', 'Mot-clé ciblé ?', 'Longueur', 'Structure Hn', 'À améliorer'],
          rows: [
            ['Page 1 : ____', 'Oui/Non', '____ mots', 'Oui/Non', '____'],
            ['Page 2 : ____', 'Oui/Non', '____ mots', 'Oui/Non', '____'],
            ['Page 3 : ____', 'Oui/Non', '____ mots', 'Oui/Non', '____'],
            ['Page 4 : ____', 'Oui/Non', '____ mots', 'Oui/Non', '____'],
            ['Page 5 : ____', 'Oui/Non', '____ mots', 'Oui/Non', '____'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Évaluer votre profil de backlinks',
      },
      {
        type: 'text',
        content: 'Utilisez un outil gratuit (Ubersuggest, Ahrefs Webmaster Tools) :',
      },
      {
        type: 'list',
        content: [
          'Nombre total de backlinks : ____',
          'Nombre de domaines référents : ____',
          'Domain Authority estimé : ____',
          '',
          'Vos 3 meilleurs backlinks (sites les plus autoritaires) :',
          '1. ________________',
          '2. ________________',
          '3. ________________',
          '',
          'Y a-t-il des liens toxiques ou spam ? Oui / Non',
          'Si oui, lesquels : ________________',
        ],
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Les 3 piliers du SEO',
          questions: [
            {
              question: 'Quels sont les 3 piliers du SEO ?',
              options: ['Contenu, Design, Marketing', 'Technique, Contenu, Netlinking', 'Mots-clés, Liens, Images', 'Google, Bing, Yahoo'],
              correctIndex: 1,
              explanation: 'Les 3 piliers sont : Technique (infrastructure), Contenu (textes/médias), et Netlinking (liens entrants).',
            },
            {
              question: 'Que mesure le LCP (Largest Contentful Paint) ?',
              options: ['La taille de la page', 'Le temps d\'affichage du contenu principal', 'Le nombre de clics', 'La luminosité de l\'écran'],
              correctIndex: 1,
              explanation: 'Le LCP mesure le temps nécessaire pour afficher le plus grand élément visible de la page. L\'objectif est < 2,5 secondes.',
            },
            {
              question: 'Qu\'est-ce qu\'un backlink ?',
              options: ['Un lien vers votre page d\'accueil', 'Un lien depuis un autre site vers le vôtre', 'Un lien cassé', 'Un bouton de retour'],
              correctIndex: 1,
              explanation: 'Un backlink est un lien hypertexte depuis un site externe pointant vers votre site. C\'est un "vote de confiance" pour Google.',
            },
            {
              question: 'Quel type de contenu répond à l\'intention "commerciale" ?',
              options: ['Un tutoriel', 'Un comparatif ou test produit', 'Une page de contact', 'Une page d\'accueil'],
              correctIndex: 1,
              explanation: 'L\'intention commerciale (recherche avant achat) est satisfaite par des comparatifs, tests, avis, et classements.',
            },
            {
              question: 'Que signifie Mobile-First Indexing ?',
              options: ['Google n\'indexe que les mobiles', 'Google utilise d\'abord la version mobile pour indexer', 'Les mobiles sont plus rapides', 'Il faut créer une app mobile'],
              correctIndex: 1,
              explanation: 'Depuis 2021, Google utilise principalement la version mobile de votre site pour l\'indexation et le ranking.',
            },
            {
              question: 'Quelle est la meilleure stratégie de netlinking ?',
              options: ['Acheter le maximum de liens possibles', 'Créer du contenu de qualité qui attire naturellement des liens', 'Échanger des liens avec tout le monde', 'Ne jamais chercher de liens'],
              correctIndex: 1,
              explanation: 'La meilleure stratégie est de créer du contenu exceptionnel qui attire naturellement des liens, complété par des actions ciblées (guest posting, RP).',
            },
            {
              question: 'Que signifie E-E-A-T ?',
              options: ['Easy, Efficient, Accurate, Tested', 'Experience, Expertise, Authoritativeness, Trustworthiness', 'Edit, Enhance, Analyze, Track', 'Everything Everywhere All at once Today'],
              correctIndex: 1,
              explanation: 'E-E-A-T = Experience, Expertise, Authoritativeness, Trustworthiness. Ce sont les critères de qualité que Google utilise pour évaluer les pages.',
            },
            {
              question: 'Par quel pilier commencer pour un site nouveau ?',
              options: ['Netlinking intensif', 'Contenu massif', 'Technique d\'abord', 'Peu importe l\'ordre'],
              correctIndex: 2,
              explanation: 'Pour un nouveau site, commencez par poser les fondations techniques, puis développez le contenu, et enfin travaillez le netlinking.',
            },
            {
              question: 'Qu\'est-ce qu\'un site "mobile-friendly" ?',
              options: ['Un site avec une app mobile', 'Un site qui s\'adapte aux écrans mobiles', 'Un site léger', 'Un site avec peu d\'images'],
              correctIndex: 1,
              explanation: 'Un site mobile-friendly est responsive : il s\'adapte à toutes les tailles d\'écran, reste lisible sans zoom, et offre une navigation facile au doigt.',
            },
            {
              question: 'Quel outil gratuit permet de vérifier les backlinks ?',
              options: ['Google Analytics', 'Ubersuggest / Ahrefs Webmaster Tools', 'PageSpeed Insights', 'Google Trends'],
              correctIndex: 1,
              explanation: 'Ubersuggest (3 recherches/jour gratuites) et Ahrefs Webmaster Tools (gratuit pour votre site) permettent d\'analyser votre profil de backlinks.',
            },
          ],
        },
      },
      {
        type: 'cta',
        content: {
          title: 'Maîtrisez le vocabulaire SEO',
          description: 'Pour bien comprendre le SEO, il faut connaître son vocabulaire. Découvrez notre glossaire complet des termes SEO.',
          buttonText: 'Glossaire SEO →',
          buttonLink: '/seo-fondamentaux/vocabulaire-seo',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'seo-vs-sea',
    title: 'SEO vs SEA : Quelles différences et que choisir ?',
    metaTitle: 'SEO vs SEA : Différences et Complémentarité 2026',
    metaDescription: 'SEO ou SEA ? Comprenez les différences entre référencement naturel et payant, leurs avantages, et comment les combiner efficacement.',
    keyword: 'différence seo sea',
    secondaryKeywords: ['référencement payant vs naturel', 'seo ou sea', 'google ads seo'],
    intent: 'info',
    cluster: 'seo-fondamentaux',
    excerpt: 'SEO (référencement naturel) et SEA (publicité payante) sont deux approches complémentaires pour être visible sur Google. Découvrez leurs différences et comment les utiliser ensemble.',
    tableOfContents: true,
    readingTime: 30,
    difficulty: 'debutant',
    lastUpdated: '2026-01-12',
    author: 'marie-lefevre',
    relatedSlugs: ['qu-est-ce-que-le-seo', 'les-3-piliers-du-seo', 'vocabulaire-seo'],
    faq: [
      {
        question: 'Faut-il faire SEO et SEA en même temps ?',
        answer: 'C\'est souvent recommandé. Le SEA peut générer du trafic immédiatement pendant que le SEO se met en place. Les données SEA (mots-clés performants) peuvent aussi informer la stratégie SEO.',
      },
      {
        question: 'Le SEA aide-t-il le SEO ?',
        answer: 'Non directement. Faire de la publicité Google Ads n\'améliore pas votre ranking organique. Cependant, le trafic et la notoriété générés peuvent avoir des effets indirects positifs.',
      },
      {
        question: 'Quel budget prévoir pour le SEA ?',
        answer: 'Cela dépend de votre secteur. Les CPC varient de 0,10€ à plus de 50€ selon la concurrence. Prévoyez un minimum de 300-500€/mois pour obtenir des données significatives.',
      },
      {
        question: 'Peut-on réussir uniquement avec le SEO ?',
        answer: 'Oui, de nombreuses entreprises génèrent tout leur trafic via le SEO. Cela demande cependant du temps (6-12 mois) et une stratégie de contenu solide.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'SEO ou SEA ? C\'est une question fréquente chez les débutants. En réalité, ce n\'est pas un choix exclusif : les deux approches ont leurs forces et peuvent être complémentaires.',
      },
      {
        type: 'text',
        content: 'Si vous débutez et ne savez pas ce qu\'est le SEO, commencez par notre article "C\'est quoi le SEO ?" avant de continuer.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Définitions',
      },
      {
        type: 'text',
        content: 'SEO (Search Engine Optimization) : optimisation pour apparaître dans les résultats organiques (gratuits) de Google. C\'est un travail de fond qui demande du temps mais génère des résultats durables.',
      },
      {
        type: 'text',
        content: 'SEA (Search Engine Advertising) : publicité payante sur les moteurs de recherche, principalement via Google Ads. Vous payez pour chaque clic sur vos annonces.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Comment les reconnaître sur Google ?',
      },
      {
        type: 'text',
        content: 'Quand vous faites une recherche Google, vous voyez deux types de résultats :',
      },
      {
        type: 'table',
        content: {
          headers: ['Élément', 'SEA (Publicité)', 'SEO (Organique)'],
          rows: [
            ['Position', 'En haut (et parfois en bas)', 'Après les annonces'],
            ['Indication', 'Badge "Sponsorisé" ou "Annonce"', 'Aucune indication'],
            ['Apparence', 'Souvent similaire aux résultats organiques', 'Résultats classiques'],
            ['Coût par clic', 'Vous payez', 'Gratuit'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Comparatif complet SEO vs SEA',
      },
      {
        type: 'table',
        content: {
          headers: ['Critère', 'SEO', 'SEA'],
          rows: [
            ['Coût', 'Temps et expertise', 'Budget par clic (CPC)'],
            ['Délai', '3-6 mois minimum', 'Immédiat'],
            ['Durabilité', 'Résultats long terme', 'Cesse avec le budget'],
            ['Crédibilité', 'Perçu comme mérite', 'Identifié comme pub'],
            ['Contrôle', 'Limité (algorithme)', 'Total (enchères, ciblage)'],
            ['Ciblage', 'Par mots-clés/contenu', 'Mots-clés, géo, démo, remarketing'],
            ['ROI', 'Excellent à long terme', 'Variable, mesurable immédiatement'],
            ['Risque', 'Updates algorithme', 'Dépendance au budget'],
            ['Scalabilité', 'Lente', 'Rapide'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Avantages du SEO',
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Trafic gratuit et croissant',
      },
      {
        type: 'text',
        content: 'Une fois vos positions acquises, chaque visiteur ne vous coûte rien. Et le trafic continue de croître à mesure que vous publiez du contenu. Comprenez les 3 piliers du SEO pour maximiser ce potentiel.',
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Crédibilité supérieure',
      },
      {
        type: 'text',
        content: 'Les études montrent que 70-80% des utilisateurs ignorent les annonces et préfèrent les résultats organiques. Être en première page "naturellement" renforce la confiance.',
      },
      {
        type: 'heading',
        level: 3,
        content: '3. ROI excellent sur le long terme',
      },
      {
        type: 'text',
        content: 'Un article bien positionné peut générer du trafic pendant des années. Le coût d\'acquisition client (CAC) diminue avec le temps.',
      },
      {
        type: 'heading',
        level: 3,
        content: '4. Avantage concurrentiel durable',
      },
      {
        type: 'text',
        content: 'Les bonnes positions SEO sont difficiles à déloger. Une fois établi, vous avez un avantage que vos concurrents mettront du temps à rattraper.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Avantages du SEA',
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Résultats immédiats',
      },
      {
        type: 'text',
        content: 'Lancez une campagne le matin, recevez du trafic l\'après-midi. Idéal pour les lancements, promotions, ou besoins urgents.',
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Contrôle total',
      },
      {
        type: 'text',
        content: 'Vous décidez exactement quand, où, et pour qui vos annonces apparaissent. Budget, enchères, ciblage : tout est ajustable en temps réel.',
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Test rapide',
      },
      {
        type: 'text',
        content: 'Testez différents mots-clés, messages, et offres en quelques jours. Utilisez ces données pour optimiser votre stratégie SEO.',
      },
      {
        type: 'heading',
        level: 3,
        content: '4. Visibilité garantie',
      },
      {
        type: 'text',
        content: 'Avec le bon budget, vous êtes sûr d\'apparaître. Pas d\'incertitude algorithmique.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Inconvénients de chaque approche',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Inconvénients du SEO',
      },
      {
        type: 'list',
        content: [
          'Délai long avant résultats (3-6 mois minimum)',
          'Incertitude : l\'algorithme peut changer',
          'Compétences techniques nécessaires',
          'Résultats non garantis',
          'Demande un effort continu',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Inconvénients du SEA',
      },
      {
        type: 'list',
        content: [
          'Coût continu : chaque clic est payant',
          'Dépendance : arrêtez de payer, arrêtez d\'exister',
          'Concurrence sur les enchères (CPC croissant)',
          'Ad blindness : utilisateurs ignorant les pubs',
          'Complexité croissante de Google Ads',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quand privilégier le SEO ?',
      },
      {
        type: 'list',
        content: [
          '✓ Budget marketing limité mais temps disponible',
          '✓ Stratégie long terme (12+ mois)',
          '✓ Marché où les CPC sont très élevés (>5€)',
          '✓ Secteur où la crédibilité est cruciale (santé, finance)',
          '✓ Vous vendez du contenu ou de l\'information',
          '✓ Vous pouvez produire du contenu de qualité régulièrement',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quand privilégier le SEA ?',
      },
      {
        type: 'list',
        content: [
          '✓ Lancement de produit / besoin de résultats rapides',
          '✓ Promotions limitées dans le temps (soldes, Black Friday)',
          '✓ Test de marché ou de nouvelle offre',
          '✓ Mots-clés très concurrentiels en SEO',
          '✓ E-commerce avec marges suffisantes',
          '✓ Événements ponctuels',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'La stratégie optimale : SEO + SEA combinés',
      },
      {
        type: 'text',
        content: 'La plupart des entreprises performantes ne choisissent pas : elles combinent SEO et SEA intelligemment.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Stratégie de lancement',
      },
      {
        type: 'list',
        content: [
          'Mois 1-3 : SEA intense (80%) + début SEO (20%)',
          'Mois 4-6 : Équilibre SEA (50%) + montée SEO (50%)',
          'Mois 7-12 : Réduction SEA (30%) + SEO dominant (70%)',
          'Après : SEA ciblé (20%) + SEO base (80%)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Synergies SEO/SEA',
      },
      {
        type: 'table',
        content: {
          headers: ['Donnée SEA', 'Utilisation pour le SEO'],
          rows: [
            ['Mots-clés qui convertissent', 'Cibler ces mots-clés en SEO'],
            ['Textes d\'annonce performants', 'Inspirer les meta descriptions'],
            ['Pages d\'atterrissage efficaces', 'Améliorer les pages SEO'],
            ['Heures/jours performants', 'Planifier les publications'],
            ['Géographies fortes', 'Focus SEO local'],
          ],
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Conseil pratique',
          content: 'Démarrez en SEA pour valider vos mots-clés et générer du trafic, tout en investissant dans le SEO. Progressivement, le SEO prendra le relais et vous pourrez réduire vos dépenses publicitaires.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Calculer la rentabilité : SEO vs SEA',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exemple de calcul SEA',
      },
      {
        type: 'list',
        content: [
          'Budget mensuel : 2 000€',
          'CPC moyen : 2€',
          'Clics obtenus : 1 000',
          'Taux de conversion : 3%',
          'Ventes générées : 30',
          'Panier moyen : 150€',
          'CA généré : 4 500€',
          'ROI : (4 500 - 2 000) / 2 000 = 125%',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exemple de calcul SEO (après 12 mois)',
      },
      {
        type: 'list',
        content: [
          'Investissement total (12 mois) : 12 000€',
          'Trafic mensuel organique : 5 000 visiteurs',
          'Taux de conversion : 2,5%',
          'Ventes mensuelles : 125',
          'Panier moyen : 150€',
          'CA mensuel : 18 750€',
          'ROI cumulé année 1 : (18 750 × 12 - 12 000) / 12 000 = 1 775%',
          'Année 2+ (sans nouvel investissement) : trafic continue, ROI infini',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: '📚 SECTION PREMIUM : Études de cas réelles',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Apprendre par l\'exemple',
          content: 'Ces études de cas montrent comment des entreprises réelles ont arbitré entre SEO et SEA selon leur situation.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étude de cas 1 : Start-up SaaS - Du SEA au SEO',
      },
      {
        type: 'text',
        content: 'TechFlow, une start-up proposant un outil de gestion de projet, a évolué de 100% SEA à une stratégie mixte sur 24 mois.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Situation initiale (Mois 0)',
      },
      {
        type: 'list',
        content: [
          'Budget marketing : 8 000€/mois',
          'Répartition : 100% Google Ads',
          'CPC moyen : 4,50€',
          'Coût d\'acquisition client (CAC) : 180€',
          'Clients/mois via Ads : 45',
          'Trafic organique : 200 visiteurs/mois (négligeable)',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Stratégie déployée',
      },
      {
        type: 'table',
        content: {
          headers: ['Période', 'Budget SEA', 'Budget SEO', 'Actions SEO'],
          rows: [
            ['Mois 1-6', '6 000€', '2 000€', 'Blog lancé, 30 articles, technique optimisée'],
            ['Mois 7-12', '4 000€', '4 000€', '30 articles supplémentaires, link building'],
            ['Mois 13-18', '2 500€', '5 500€', 'Focus contenu premium, études de cas'],
            ['Mois 19-24', '1 500€', '6 500€', 'Expansion internationale, SEO technique'],
          ],
        },
      },
      {
        type: 'heading',
        level: 4,
        content: 'Résultats à 24 mois',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Mois 0', 'Mois 24', 'Évolution'],
          rows: [
            ['Trafic organique', '200/mois', '35 000/mois', '+17 400%'],
            ['Clients via SEO', '0', '85/mois', 'Nouveau canal'],
            ['Clients via SEA', '45/mois', '30/mois', '-33%'],
            ['CAC SEA', '180€', '50€', '-72%'],
            ['CAC SEO', 'N/A', '76€', 'Inférieur au SEA initial'],
            ['Clients totaux', '45/mois', '115/mois', '+156%'],
          ],
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'success',
          title: 'Leçon clé',
          content: 'En 24 mois, le CAC a chuté de 180€ à une moyenne de 65€ (mixte SEO/SEA). Le SEO génère maintenant 74% des nouveaux clients.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étude de cas 2 : E-commerce saisonnier - SEA stratégique',
      },
      {
        type: 'text',
        content: 'NoëlMagique, boutique en ligne de décorations de Noël, doit gérer une saisonnalité extrême (80% du CA en octobre-décembre).',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Stratégie adoptée',
      },
      {
        type: 'table',
        content: {
          headers: ['Période', 'Focus', 'Budget SEA', 'Actions'],
          rows: [
            ['Janvier-Août', 'SEO intensif', '500€/mois', 'Création de 50 articles (guides, DIY)'],
            ['Septembre', 'Transition', '3 000€', 'Test campagnes, ajustement mots-clés'],
            ['Octobre', 'SEA modéré', '8 000€', 'Montée en puissance, remarketing'],
            ['Novembre', 'SEA intense', '20 000€', 'Black Friday, maximum de visibilité'],
            ['Décembre 1-15', 'SEA très intense', '25 000€', 'Dernière ligne droite'],
            ['Décembre 16-31', 'SEA réduit', '5 000€', 'Trop tard pour livraison'],
          ],
        },
      },
      {
        type: 'heading',
        level: 4,
        content: 'Résultats',
      },
      {
        type: 'list',
        content: [
          'Investissement SEA haute saison : 61 500€',
          'CA généré via SEA : 380 000€ (ROAS 6,2)',
          'Investissement SEO (année) : 15 000€',
          'CA généré via SEO : 120 000€ (ROI 700%)',
          'Le SEO génère du trafic gratuit pendant la haute saison',
          'Position 1 sur "déco Noël DIY" = 45 000 visiteurs organiques en novembre',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étude de cas 3 : Profession libérale - 100% SEO',
      },
      {
        type: 'text',
        content: 'Maître Dubois, avocat en droit du travail à Paris, ne fait aucune publicité (déontologie + coût). Stratégie 100% SEO.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Contraintes spécifiques',
      },
      {
        type: 'list',
        content: [
          'CPC "avocat droit du travail Paris" : 35-50€',
          'Réglementation limitant la publicité',
          'Besoin de crédibilité maximale',
          'Concurrence féroce de cabinets avec budgets importants',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Stratégie SEO déployée',
      },
      {
        type: 'list',
        content: [
          '50 articles sur le droit du travail (licenciement, harcèlement, prud\'hommes...)',
          'Optimisation SEO local (fiche Google, citations)',
          'Témoignages clients (E-E-A-T)',
          'Présence sur annuaires juridiques (backlinks)',
          'Partenariat avec un blog RH (guest posts)',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Résultats après 18 mois',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après'],
          rows: [
            ['Trafic organique', '100/mois', '4 500/mois'],
            ['Demandes de contact', '5/mois', '45/mois'],
            ['Nouveaux clients/mois', '2', '18'],
            ['CA moyen/client', '3 000€', '3 000€'],
            ['CA additionnel/mois', '-', '48 000€'],
          ],
        },
      },
      {
        type: 'text',
        content: 'Coût équivalent en SEA : 45 demandes × 50€ CPC × 50 clics/conversion = 112 500€/mois. Le SEO génère ces résultats pour environ 2 000€/mois de maintenance.',
      },
      {
        type: 'heading',
        level: 2,
        content: '📝 EXERCICES PRATIQUES',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 1 : Analyser votre marché',
      },
      {
        type: 'text',
        content: 'Identifiez 5 mots-clés importants pour votre activité et estimez les CPC :',
      },
      {
        type: 'table',
        content: {
          headers: ['Mot-clé', 'Volume mensuel', 'CPC estimé', 'Concurrence SEO'],
          rows: [
            ['________________', '____', '____€', 'Faible/Moyenne/Forte'],
            ['________________', '____', '____€', 'Faible/Moyenne/Forte'],
            ['________________', '____', '____€', 'Faible/Moyenne/Forte'],
            ['________________', '____', '____€', 'Faible/Moyenne/Forte'],
            ['________________', '____', '____€', 'Faible/Moyenne/Forte'],
          ],
        },
      },
      {
        type: 'text',
        content: 'Utilisez Google Keyword Planner ou Ubersuggest pour obtenir ces données.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Calculer votre break-even SEA',
      },
      {
        type: 'text',
        content: 'Déterminez si le SEA est rentable pour vous :',
      },
      {
        type: 'list',
        content: [
          'Votre panier moyen : ____€',
          'Votre marge brute : ____% (soit ____€)',
          'CPC moyen de votre marché : ____€',
          'Taux de conversion estimé : ____%',
          '',
          'Calcul : Coût pour une vente = CPC / taux de conversion',
          'Exemple : 3€ CPC / 2% = 150€ par vente',
          '',
          'Votre coût par vente : ____€',
          'Votre marge par vente : ____€',
          '',
          'SEA rentable si marge > coût par vente',
          'Votre verdict : Rentable / Non rentable',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Planifier votre mix SEO/SEA',
      },
      {
        type: 'text',
        content: 'Selon votre situation, définissez votre répartition idéale :',
      },
      {
        type: 'list',
        content: [
          'Budget marketing mensuel total : ____€',
          '',
          'Si vous lancez un nouveau projet :',
          '  - SEA : ____% soit ____€',
          '  - SEO : ____% soit ____€',
          '',
          'Si vous avez un site établi :',
          '  - SEA : ____% soit ____€',
          '  - SEO : ____% soit ____€',
          '',
          'Objectif dans 12 mois :',
          '  - SEA : ____% soit ____€',
          '  - SEO : ____% soit ____€',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Audit de vos concurrents',
      },
      {
        type: 'text',
        content: 'Analysez 3 concurrents pour comprendre leur stratégie :',
      },
      {
        type: 'table',
        content: {
          headers: ['Concurrent', 'Font-ils du SEA ?', 'Position SEO', 'Contenu blog ?'],
          rows: [
            ['________________', 'Oui/Non', 'Top 3 / Page 1 / Autre', 'Oui/Non'],
            ['________________', 'Oui/Non', 'Top 3 / Page 1 / Autre', 'Oui/Non'],
            ['________________', 'Oui/Non', 'Top 3 / Page 1 / Autre', 'Oui/Non'],
          ],
        },
      },
      {
        type: 'text',
        content: 'Conclusion : Vos concurrents misent plutôt sur SEO / SEA / Les deux',
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : SEO vs SEA',
          questions: [
            {
              question: 'Quelle est la principale différence entre SEO et SEA ?',
              options: ['Le SEA est plus rapide', 'Le SEO est payant, le SEA est gratuit', 'Le SEA est de la publicité payante, le SEO vise les résultats organiques', 'Le SEO ne fonctionne que sur Google'],
              correctIndex: 2,
              explanation: 'Le SEA (Search Engine Advertising) est de la publicité payante (Google Ads), tandis que le SEO (Search Engine Optimization) vise les résultats organiques (gratuits).',
            },
            {
              question: 'Quel est l\'avantage principal du SEA ?',
              options: ['Moins cher que le SEO', 'Résultats immédiats', 'Meilleure crédibilité', 'Durabilité des résultats'],
              correctIndex: 1,
              explanation: 'Le principal avantage du SEA est l\'immédiateté : vous pouvez générer du trafic dès le lancement de votre campagne.',
            },
            {
              question: 'Quel est l\'avantage principal du SEO ?',
              options: ['Résultats immédiats', 'Contrôle total du ciblage', 'Trafic gratuit et durable', 'Visibilité garantie'],
              correctIndex: 2,
              explanation: 'Le SEO génère du trafic gratuit (pas de coût par clic) et durable (les positions acquises restent sans coût continu).',
            },
            {
              question: 'Que signifie CPC ?',
              options: ['Cost Per Campaign', 'Click Per Customer', 'Cost Per Click', 'Customer Purchase Cost'],
              correctIndex: 2,
              explanation: 'CPC = Cost Per Click. C\'est le montant que vous payez chaque fois qu\'un internaute clique sur votre annonce Google Ads.',
            },
            {
              question: 'Combien de temps faut-il généralement pour voir des résultats SEO ?',
              options: ['24-48 heures', '1-2 semaines', '3-6 mois', '2-3 ans'],
              correctIndex: 2,
              explanation: 'Le SEO demande patience. Les premiers résultats significatifs apparaissent généralement entre 3 et 6 mois, selon la concurrence et l\'effort investi.',
            },
            {
              question: 'Le SEA améliore-t-il le ranking SEO ?',
              options: ['Oui, directement', 'Non, ce sont deux systèmes séparés', 'Oui, si le budget est élevé', 'Seulement sur Bing'],
              correctIndex: 1,
              explanation: 'Non, faire de la publicité Google Ads n\'améliore pas votre position dans les résultats organiques. Google maintient une séparation stricte entre les deux.',
            },
            {
              question: 'Quelle stratégie est recommandée au lancement d\'un nouveau site ?',
              options: ['100% SEO', '100% SEA', 'SEA majoritaire au début, puis transition vers le SEO', 'Ne rien faire et attendre'],
              correctIndex: 2,
              explanation: 'Au lancement, le SEA génère du trafic immédiat pendant que le SEO se met en place. Progressivement, on réduit le SEA à mesure que le SEO prend le relais.',
            },
            {
              question: 'Quel outil permet d\'estimer les CPC de votre marché ?',
              options: ['Google Analytics', 'Google Search Console', 'Google Keyword Planner', 'Google PageSpeed'],
              correctIndex: 2,
              explanation: 'Google Keyword Planner (Planificateur de mots-clés) permet d\'estimer les volumes de recherche et les CPC pour planifier des campagnes Google Ads.',
            },
            {
              question: 'Pourquoi les utilisateurs préfèrent-ils les résultats organiques ?',
              options: ['Ils sont plus colorés', 'Ils sont perçus comme plus crédibles', 'Ils chargent plus vite', 'Ils sont toujours en première position'],
              correctIndex: 1,
              explanation: 'Les études montrent que les utilisateurs font davantage confiance aux résultats organiques, perçus comme "mérités", qu\'aux publicités identifiées comme telles.',
            },
            {
              question: 'Quel est le risque principal du SEA ?',
              options: ['Trop de trafic', 'Dépendance au budget publicitaire', 'Résultats trop lents', 'Pénalité Google'],
              correctIndex: 1,
              explanation: 'Le risque du SEA est la dépendance : dès que vous arrêtez de payer, vous disparaissez. C\'est pourquoi combiner avec le SEO est recommandé.',
            },
          ],
        },
      },
      {
        type: 'cta',
        content: {
          title: 'Maîtrisez le vocabulaire SEO',
          description: 'Pour bien comprendre les discussions SEO vs SEA, maîtrisez le vocabulaire technique. Découvrez notre glossaire complet.',
          buttonText: 'Glossaire SEO →',
          buttonLink: '/seo-fondamentaux/vocabulaire-seo',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'vocabulaire-seo',
    title: 'Vocabulaire SEO : Glossaire des termes essentiels',
    metaTitle: 'Glossaire SEO : Tous les Termes à Connaître 2026',
    metaDescription: 'Lexique complet du référencement naturel : SERP, backlink, crawl, E-E-A-T, Core Web Vitals... Tous les termes SEO expliqués simplement.',
    keyword: 'glossaire seo',
    secondaryKeywords: ['lexique référencement', 'vocabulaire seo', 'termes seo'],
    intent: 'info',
    cluster: 'seo-fondamentaux',
    excerpt: 'Le SEO a son propre vocabulaire. Ce glossaire vous permet de comprendre tous les termes techniques du référencement naturel, de A à Z.',
    tableOfContents: true,
    readingTime: 35,
    difficulty: 'debutant',
    lastUpdated: '2026-01-10',
    author: 'marie-lefevre',
    relatedSlugs: ['qu-est-ce-que-le-seo', 'comment-fonctionne-google', 'les-3-piliers-du-seo'],
    faq: [
      {
        question: 'Pourquoi y a-t-il autant de termes anglais en SEO ?',
        answer: 'Le SEO est une discipline née aux États-Unis avec Google. Beaucoup de concepts n\'ont pas d\'équivalent français précis, et la communauté internationale utilise l\'anglais comme langue commune.',
      },
      {
        question: 'Faut-il connaître tous ces termes ?',
        answer: 'Les termes de base (SERP, backlink, crawl, meta tags...) sont essentiels. Les autres s\'apprennent progressivement avec la pratique.',
      },
      {
        question: 'Quels sont les termes SEO les plus importants à connaître ?',
        answer: 'Les termes fondamentaux sont : SEO, SERP, mot-clé, backlink, crawl, index, ranking, on-page, off-page, E-E-A-T, et Core Web Vitals. Maîtrisez ceux-ci en priorité.',
      },
      {
        question: 'Comment rester à jour sur le vocabulaire SEO ?',
        answer: 'Le vocabulaire SEO évolue. Suivez des blogs SEO réputés, participez à des communautés, et consultez régulièrement les annonces officielles de Google.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Le monde du SEO regorge d\'acronymes et de termes techniques. Ce glossaire vous aide à démystifier le jargon du référencement naturel. Gardez cette page en favori : c\'est votre référence quand vous rencontrez un terme inconnu.',
      },
      {
        type: 'text',
        content: 'Si vous débutez complètement, commencez par notre article "C\'est quoi le SEO ?" pour comprendre les bases avant de plonger dans le vocabulaire.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Comment utiliser ce glossaire',
          content: 'Les termes sont classés par ordre alphabétique. Utilisez Ctrl+F (ou Cmd+F sur Mac) pour rechercher un terme spécifique.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Les 10 termes essentiels',
      },
      {
        type: 'text',
        content: 'Avant de parcourir l\'alphabet, voici les 10 termes que tout débutant doit absolument connaître :',
      },
      {
        type: 'table',
        content: {
          headers: ['Terme', 'Définition courte', 'Exemple'],
          rows: [
            ['SEO', 'Optimisation pour les moteurs de recherche', 'Améliorer son site pour Google'],
            ['SERP', 'Page de résultats Google', 'Ce que vous voyez après une recherche'],
            ['Mot-clé', 'Terme ciblé pour le référencement', '"acheter chaussures running"'],
            ['Backlink', 'Lien d\'un autre site vers le vôtre', 'Un blog cite votre article'],
            ['Crawl', 'Exploration par Googlebot', 'Google découvre vos pages'],
            ['Index', 'Base de données de Google', 'Vos pages stockées chez Google'],
            ['Ranking', 'Position dans les résultats', '#3 sur "chaussures running"'],
            ['On-Page', 'Optimisation sur votre site', 'Balises, contenu, structure'],
            ['Off-Page', 'Optimisation externe', 'Backlinks, mentions'],
            ['E-E-A-T', 'Critères de qualité Google', 'Expertise, Autorité, Confiance'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'A - B',
      },
      {
        type: 'heading',
        level: 3,
        content: 'A',
      },
      {
        type: 'text',
        content: '**Above the Fold** : partie de la page visible sans scroller. Le contenu important doit y figurer.',
      },
      {
        type: 'text',
        content: '**AI Overview (SGE)** : réponses générées par l\'IA de Google en haut des résultats. Nouveau format impactant le SEO.',
      },
      {
        type: 'text',
        content: '**Algorithm** : ensemble de règles utilisées par Google pour classer les pages. Google met à jour son algorithme régulièrement (Core Updates).',
      },
      {
        type: 'text',
        content: '**Alt Text (balise alt)** : texte alternatif décrivant une image. Important pour le SEO images et l\'accessibilité. Exemple : alt="chaussures running Nike rouges".',
      },
      {
        type: 'text',
        content: '**Anchor Text (ancre de lien)** : texte cliquable d\'un lien hypertexte. Doit être descriptif. Exemple : <a href="...">guide des chaussures running</a>.',
      },
      {
        type: 'text',
        content: '**API** : Application Programming Interface. Permet d\'accéder aux données d\'outils SEO programmatiquement.',
      },
      {
        type: 'text',
        content: '**Audit SEO** : analyse complète d\'un site pour identifier les problèmes et opportunités d\'optimisation.',
      },
      {
        type: 'text',
        content: '**Authority (Autorité)** : mesure de la "force" SEO d\'un domaine ou d\'une page, basée principalement sur les backlinks.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'B',
      },
      {
        type: 'text',
        content: '**Backlink** : lien entrant provenant d\'un autre site vers le vôtre. Un des facteurs de ranking les plus importants. Voir notre article sur les 3 piliers du SEO.',
      },
      {
        type: 'text',
        content: '**Black Hat SEO** : techniques SEO contraires aux guidelines de Google (spam, achat massif de liens, cloaking...). Risquées car pénalisables.',
      },
      {
        type: 'text',
        content: '**Bounce Rate (Taux de rebond)** : pourcentage de visiteurs qui quittent après avoir vu une seule page.',
      },
      {
        type: 'text',
        content: '**Breadcrumb (fil d\'Ariane)** : navigation hiérarchique montrant le chemin de la page. Ex : Accueil > Blog > SEO > Cet article.',
      },
      {
        type: 'text',
        content: '**Broken Link** : lien cassé menant vers une page 404. Mauvais pour l\'UX et le SEO.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'C - D',
      },
      {
        type: 'heading',
        level: 3,
        content: 'C',
      },
      {
        type: 'text',
        content: '**Cache** : copie stockée d\'une page. Google conserve une version en cache de vos pages.',
      },
      {
        type: 'text',
        content: '**Canonical (balise)** : balise indiquant à Google la version principale d\'une page quand plusieurs versions existent. Évite le contenu dupliqué.',
      },
      {
        type: 'text',
        content: '**Citation Flow** : métrique Majestic mesurant la quantité de liens pointant vers une page.',
      },
      {
        type: 'text',
        content: '**Cloaking** : technique Black Hat montrant un contenu différent à Google et aux utilisateurs. Fortement pénalisé.',
      },
      {
        type: 'text',
        content: '**CLS (Cumulative Layout Shift)** : métrique Core Web Vitals mesurant la stabilité visuelle. Objectif : < 0,1.',
      },
      {
        type: 'text',
        content: '**Content Cluster** : stratégie de contenu avec une page pilier et des pages satellites interconnectées.',
      },
      {
        type: 'text',
        content: '**Core Update** : mise à jour majeure de l\'algorithme Google, déployée plusieurs fois par an.',
      },
      {
        type: 'text',
        content: '**Core Web Vitals** : métriques de performance UX (LCP, INP, CLS) utilisées comme facteur de ranking. Consultez notre article sur le fonctionnement de Google pour plus de détails.',
      },
      {
        type: 'text',
        content: '**CPC (Cost Per Click)** : coût par clic en publicité SEA. Utilisé aussi pour estimer la valeur d\'un mot-clé.',
      },
      {
        type: 'text',
        content: '**Crawl** : exploration des pages web par les robots de Google (Googlebot).',
      },
      {
        type: 'text',
        content: '**Crawl Budget** : nombre de pages que Googlebot peut explorer sur votre site dans un temps donné.',
      },
      {
        type: 'text',
        content: '**CTR (Click-Through Rate)** : taux de clics. Impressions qui génèrent un clic. CTR = clics / impressions.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'D',
      },
      {
        type: 'text',
        content: '**DA/DR (Domain Authority/Rating)** : métriques de Moz (DA) et Ahrefs (DR) estimant l\'autorité d\'un domaine de 0 à 100.',
      },
      {
        type: 'text',
        content: '**Deep Link** : lien pointant vers une page interne plutôt que la page d\'accueil.',
      },
      {
        type: 'text',
        content: '**Disavow** : outil Google permettant de désavouer des backlinks toxiques.',
      },
      {
        type: 'text',
        content: '**Dofollow** : type de lien qui transmet du "jus SEO" (autorité). Opposé de nofollow.',
      },
      {
        type: 'text',
        content: '**Domain Authority** : voir DA/DR.',
      },
      {
        type: 'text',
        content: '**Duplicate Content** : contenu identique ou très similaire présent sur plusieurs URLs. À éviter car dilue le SEO.',
      },
      {
        type: 'text',
        content: '**Dwell Time** : temps passé sur une page avant de revenir aux résultats Google. Indicateur d\'engagement.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'E - F - G',
      },
      {
        type: 'heading',
        level: 3,
        content: 'E',
      },
      {
        type: 'text',
        content: '**E-E-A-T** : Experience, Expertise, Authoritativeness, Trustworthiness. Critères de qualité évalués par Google, particulièrement pour les sujets YMYL.',
      },
      {
        type: 'text',
        content: '**Entity SEO** : optimisation basée sur les entités (personnes, lieux, concepts) plutôt que simplement les mots-clés.',
      },
      {
        type: 'text',
        content: '**Evergreen Content** : contenu intemporel qui reste pertinent longtemps. Opposé au contenu d\'actualité.',
      },
      {
        type: 'text',
        content: '**External Link** : lien sortant vers un autre site. Bien utilisé, renforce la crédibilité.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'F',
      },
      {
        type: 'text',
        content: '**Featured Snippet** : résultat enrichi en "position 0", affichant une réponse directe extraite d\'une page.',
      },
      {
        type: 'text',
        content: '**FCP (First Contentful Paint)** : métrique mesurant le temps d\'affichage du premier élément.',
      },
      {
        type: 'text',
        content: '**Follow/Nofollow** : attributs de liens. Follow transmet l\'autorité, nofollow non.',
      },
      {
        type: 'text',
        content: '**Footer Link** : lien placé dans le pied de page. Moins de valeur que les liens dans le contenu.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'G',
      },
      {
        type: 'text',
        content: '**GEO** : Generative Engine Optimization. Optimisation pour les moteurs de recherche IA comme ChatGPT ou Perplexity.',
      },
      {
        type: 'text',
        content: '**Google Discover** : flux d\'actualités personnalisé sur mobile. Source de trafic potentiellement importante.',
      },
      {
        type: 'text',
        content: '**Google My Business (GMB)** : maintenant Google Business Profile. Fiche d\'entreprise pour le SEO local.',
      },
      {
        type: 'text',
        content: '**Google Search Console (GSC)** : outil gratuit de Google pour monitorer votre présence dans les résultats. Indispensable.',
      },
      {
        type: 'text',
        content: '**Googlebot** : robot d\'exploration de Google. Existe en versions desktop et mobile.',
      },
      {
        type: 'text',
        content: '**Grey Hat SEO** : techniques à mi-chemin entre White Hat et Black Hat. Risquées mais pratiquées.',
      },
      {
        type: 'text',
        content: '**Guest Posting** : écrire des articles invités sur d\'autres sites pour obtenir des backlinks.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'H - I - J - K',
      },
      {
        type: 'heading',
        level: 3,
        content: 'H',
      },
      {
        type: 'text',
        content: '**H1, H2, H3...** : balises de titre hiérarchiques pour structurer le contenu. Un seul H1 par page.',
      },
      {
        type: 'text',
        content: '**Helpful Content Update** : mise à jour Google pénalisant le contenu créé pour les moteurs plutôt que pour les utilisateurs.',
      },
      {
        type: 'text',
        content: '**Hreflang** : balise indiquant la langue et la région ciblée d\'une page. Essentiel pour le SEO international.',
      },
      {
        type: 'text',
        content: '**HTTPS** : protocole sécurisé. Facteur de ranking (léger) et obligatoire pour la confiance utilisateur.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'I',
      },
      {
        type: 'text',
        content: '**Impression** : affichage de votre page dans les résultats Google, même sans clic.',
      },
      {
        type: 'text',
        content: '**Index** : base de données de Google contenant toutes les pages crawlées et éligibles au ranking.',
      },
      {
        type: 'text',
        content: '**Indexation** : processus d\'ajout d\'une page à l\'index de Google après le crawl.',
      },
      {
        type: 'text',
        content: '**INP (Interaction to Next Paint)** : métrique Core Web Vitals remplaçant FID. Mesure la réactivité.',
      },
      {
        type: 'text',
        content: '**Intent (intention de recherche)** : ce que l\'utilisateur cherche réellement. 4 types : informationnelle, navigationnelle, commerciale, transactionnelle.',
      },
      {
        type: 'text',
        content: '**Internal Link** : lien interne entre les pages de votre propre site. Essentiel pour le SEO.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'J - K',
      },
      {
        type: 'text',
        content: '**JavaScript SEO** : optimisation des sites utilisant beaucoup de JavaScript. Plus complexe car Google doit "render" le JS.',
      },
      {
        type: 'text',
        content: '**JSON-LD** : format de données structurées recommandé par Google. Utilisé pour le schema markup.',
      },
      {
        type: 'text',
        content: '**Keyword (mot-clé)** : terme ou expression ciblé pour le référencement. Base de toute stratégie SEO.',
      },
      {
        type: 'text',
        content: '**Keyword Cannibalization** : quand plusieurs pages de votre site ciblent le même mot-clé et se font concurrence.',
      },
      {
        type: 'text',
        content: '**Keyword Density** : pourcentage d\'apparition d\'un mot-clé dans un texte. Concept dépassé, focus sur le naturel.',
      },
      {
        type: 'text',
        content: '**Keyword Difficulty (KD)** : métrique des outils SEO indiquant la difficulté de ranker sur un mot-clé (0-100).',
      },
      {
        type: 'text',
        content: '**Keyword Research** : processus de recherche et sélection des mots-clés à cibler.',
      },
      {
        type: 'text',
        content: '**Keyword Stuffing** : sur-optimisation en répétant excessivement un mot-clé. Pénalisé par Google.',
      },
      {
        type: 'text',
        content: '**Knowledge Graph** : base de connaissances de Google reliant les entités entre elles.',
      },
      {
        type: 'text',
        content: '**Knowledge Panel** : encadré d\'information sur une entité, affiché à droite des résultats Google.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'L - M - N',
      },
      {
        type: 'heading',
        level: 3,
        content: 'L',
      },
      {
        type: 'text',
        content: '**LCP (Largest Contentful Paint)** : métrique Core Web Vitals. Temps d\'affichage du plus grand élément visible. Objectif : < 2,5s.',
      },
      {
        type: 'text',
        content: '**Link Building** : stratégies d\'acquisition de backlinks. Synonyme de netlinking.',
      },
      {
        type: 'text',
        content: '**Link Juice** : "jus de lien". Autorité transmise via les liens. Concept clé du netlinking.',
      },
      {
        type: 'text',
        content: '**Link Profile** : ensemble des backlinks pointant vers un site. Doit être naturel et diversifié.',
      },
      {
        type: 'text',
        content: '**Local Pack** : les 3 résultats locaux affichés avec la carte Google Maps.',
      },
      {
        type: 'text',
        content: '**Local SEO** : optimisation pour les recherches locales ("plombier Paris").',
      },
      {
        type: 'text',
        content: '**Long Tail (longue traîne)** : mots-clés de 3+ mots, moins recherchés mais moins concurrentiels et plus ciblés.',
      },
      {
        type: 'text',
        content: '**LSI (Latent Semantic Indexing)** : termes sémantiquement liés au mot-clé principal. Concept parfois surestimé.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'M',
      },
      {
        type: 'text',
        content: '**Manual Action** : pénalité manuelle appliquée par un employé Google. Visible dans Search Console.',
      },
      {
        type: 'text',
        content: '**Meta Description** : description de la page affichée dans les SERPs. 155-160 caractères recommandés.',
      },
      {
        type: 'text',
        content: '**Meta Title (Title Tag)** : titre de la page affiché dans les SERPs et l\'onglet navigateur. 50-60 caractères.',
      },
      {
        type: 'text',
        content: '**Mobile-First Indexing** : Google utilise d\'abord la version mobile pour indexer. Standard depuis 2021.',
      },
      {
        type: 'text',
        content: '**MUM (Multitask Unified Model)** : modèle IA de Google pour comprendre le langage naturel complexe.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'N',
      },
      {
        type: 'text',
        content: '**NAP** : Name, Address, Phone. Cohérence requise pour le SEO local.',
      },
      {
        type: 'text',
        content: '**Negative SEO** : techniques malveillantes pour nuire au SEO d\'un concurrent. Rare mais existe.',
      },
      {
        type: 'text',
        content: '**Netlinking** : stratégie d\'acquisition de backlinks. Pilier majeur du SEO.',
      },
      {
        type: 'text',
        content: '**Nofollow** : attribut de lien indiquant à Google de ne pas transmettre d\'autorité. Utilisé pour les liens sponsorisés.',
      },
      {
        type: 'text',
        content: '**Noindex** : balise meta indiquant à Google de ne pas indexer une page.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'O - P - Q - R',
      },
      {
        type: 'heading',
        level: 3,
        content: 'O',
      },
      {
        type: 'text',
        content: '**Off-Page SEO** : optimisation externe au site : backlinks, mentions, signaux sociaux.',
      },
      {
        type: 'text',
        content: '**On-Page SEO** : optimisation des éléments de la page : contenu, balises, structure, images.',
      },
      {
        type: 'text',
        content: '**Organic Traffic** : trafic provenant des résultats naturels (non payants) des moteurs.',
      },
      {
        type: 'text',
        content: '**Orphan Page** : page sans lien interne pointant vers elle. Problème de crawlabilité.',
      },
      {
        type: 'text',
        content: '**Outbound Link** : lien sortant vers un site externe.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'P',
      },
      {
        type: 'text',
        content: '**Page Authority** : métrique Moz estimant l\'autorité d\'une page spécifique (0-100).',
      },
      {
        type: 'text',
        content: '**PageRank** : algorithme historique de Google basé sur les liens. Toujours utilisé mais non public.',
      },
      {
        type: 'text',
        content: '**PageSpeed** : vitesse de chargement d\'une page. Outil : PageSpeed Insights.',
      },
      {
        type: 'text',
        content: '**Panda** : mise à jour historique (2011) ciblant le contenu de faible qualité.',
      },
      {
        type: 'text',
        content: '**PBN (Private Blog Network)** : réseau de sites créés pour générer des backlinks. Technique risquée.',
      },
      {
        type: 'text',
        content: '**Penguin** : mise à jour historique (2012) ciblant le spam de liens.',
      },
      {
        type: 'text',
        content: '**Pillar Page** : page pilier. Contenu long et complet sur un sujet principal, liée aux pages satellites.',
      },
      {
        type: 'text',
        content: '**Position** : classement d\'une page pour un mot-clé. Position 1 = premier résultat.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Q - R',
      },
      {
        type: 'text',
        content: '**Query** : requête tapée par l\'utilisateur dans Google.',
      },
      {
        type: 'text',
        content: '**Ranking** : position d\'une page dans les résultats. Objectif principal du SEO.',
      },
      {
        type: 'text',
        content: '**Ranking Factor** : critère pris en compte par Google pour classer les pages.',
      },
      {
        type: 'text',
        content: '**Redirect 301** : redirection permanente. Transmet la majorité du "jus SEO".',
      },
      {
        type: 'text',
        content: '**Redirect 302** : redirection temporaire. Ne transmet pas d\'autorité.',
      },
      {
        type: 'text',
        content: '**Referring Domain** : domaine unique envoyant au moins un backlink vers votre site.',
      },
      {
        type: 'text',
        content: '**Render** : processus par lequel Google exécute le JavaScript pour voir la page finale.',
      },
      {
        type: 'text',
        content: '**Rich Snippet** : résultat enrichi avec étoiles, prix, FAQ, recettes... via schema markup.',
      },
      {
        type: 'text',
        content: '**Robots.txt** : fichier à la racine du site indiquant aux crawlers ce qu\'ils peuvent explorer.',
      },
      {
        type: 'text',
        content: '**ROAS (Return on Ad Spend)** : retour sur investissement publicitaire. Plus pertinent pour le SEA.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'S - T - U',
      },
      {
        type: 'heading',
        level: 3,
        content: 'S',
      },
      {
        type: 'text',
        content: '**Schema Markup** : données structurées (JSON-LD) aidant Google à comprendre le contenu. Génère les rich snippets.',
      },
      {
        type: 'text',
        content: '**Search Intent** : voir Intent.',
      },
      {
        type: 'text',
        content: '**SEM (Search Engine Marketing)** : marketing sur les moteurs. Englobe SEO + SEA.',
      },
      {
        type: 'text',
        content: '**SEO (Search Engine Optimization)** : optimisation pour les moteurs de recherche. Le sujet de ce site. Voir notre article complet sur ce qu\'est le SEO.',
      },
      {
        type: 'text',
        content: '**SERP** : Search Engine Results Page. Page de résultats d\'un moteur de recherche.',
      },
      {
        type: 'text',
        content: '**SERP Features** : éléments enrichis dans les résultats : featured snippets, PAA, local pack, images, vidéos...',
      },
      {
        type: 'text',
        content: '**Sitemap.xml** : fichier listant toutes les pages de votre site pour faciliter le crawl.',
      },
      {
        type: 'text',
        content: '**Sitelinks** : liens supplémentaires affichés sous votre résultat principal pour les recherches de marque.',
      },
      {
        type: 'text',
        content: '**SSL Certificate** : certificat de sécurité activant HTTPS. Indispensable en 2026.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'T',
      },
      {
        type: 'text',
        content: '**Technical SEO** : aspects techniques du référencement : vitesse, crawl, indexation, architecture.',
      },
      {
        type: 'text',
        content: '**TF (Trust Flow)** : métrique Majestic mesurant la qualité/confiance des liens.',
      },
      {
        type: 'text',
        content: '**Thin Content** : contenu "mince", peu substantiel. Pénalisé par Google.',
      },
      {
        type: 'text',
        content: '**Title Tag** : voir Meta Title.',
      },
      {
        type: 'text',
        content: '**Topical Authority** : autorité thématique. Être reconnu comme expert d\'un sujet.',
      },
      {
        type: 'text',
        content: '**Traffic** : nombre de visiteurs sur un site. Peut être organique, payant, direct, social...',
      },
      {
        type: 'heading',
        level: 3,
        content: 'U',
      },
      {
        type: 'text',
        content: '**URL** : adresse web d\'une page. Doit être courte, descriptive, SEO-friendly.',
      },
      {
        type: 'text',
        content: '**User Experience (UX)** : expérience utilisateur. Facteur indirect de ranking via le comportement.',
      },
      {
        type: 'text',
        content: '**User Intent** : voir Intent.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'V - W - X - Y - Z',
      },
      {
        type: 'heading',
        level: 3,
        content: 'V - W',
      },
      {
        type: 'text',
        content: '**Voice Search** : recherche vocale. Nécessite une optimisation spécifique (questions, featured snippets).',
      },
      {
        type: 'text',
        content: '**Volume de recherche** : nombre mensuel moyen de recherches pour un mot-clé.',
      },
      {
        type: 'text',
        content: '**Web Vitals** : voir Core Web Vitals.',
      },
      {
        type: 'text',
        content: '**White Hat SEO** : techniques SEO conformes aux guidelines de Google. Approche recommandée et durable.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'X - Y - Z',
      },
      {
        type: 'text',
        content: '**XML Sitemap** : voir Sitemap.xml.',
      },
      {
        type: 'text',
        content: '**YMYL (Your Money Your Life)** : contenus impactant santé, finances, sécurité. Standards E-E-A-T plus stricts.',
      },
      {
        type: 'text',
        content: '**Zero-Click Search** : recherche où l\'utilisateur obtient sa réponse sans cliquer (featured snippet, knowledge panel).',
      },
      {
        type: 'heading',
        level: 2,
        content: '📚 SECTION PREMIUM : Fiches mémo thématiques',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Fiches de révision',
          content: 'Ces fiches regroupent les termes par thématique pour faciliter l\'apprentissage et la mémorisation.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Fiche 1 : Les métriques essentielles',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Ce que ça mesure', 'Outil pour la voir'],
          rows: [
            ['Impressions', 'Nb d\'affichages dans les résultats', 'Google Search Console'],
            ['Clics', 'Nb de clics depuis les résultats', 'Google Search Console'],
            ['CTR', 'Taux de clics (clics/impressions)', 'Google Search Console'],
            ['Position moyenne', 'Classement moyen', 'Google Search Console'],
            ['Trafic organique', 'Visiteurs via recherche naturelle', 'Google Analytics'],
            ['DA/DR', 'Autorité du domaine', 'Moz/Ahrefs'],
            ['Backlinks', 'Nombre de liens entrants', 'Ahrefs/SEMrush'],
            ['LCP', 'Temps d\'affichage principal', 'PageSpeed Insights'],
            ['CLS', 'Stabilité visuelle', 'PageSpeed Insights'],
            ['INP', 'Réactivité aux interactions', 'PageSpeed Insights'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Fiche 2 : Les balises HTML pour le SEO',
      },
      {
        type: 'table',
        content: {
          headers: ['Balise', 'Rôle', 'Bonnes pratiques'],
          rows: [
            ['<title>', 'Titre affiché dans Google', '50-60 caractères, mot-clé inclus'],
            ['<meta description>', 'Description dans les résultats', '150-160 caractères, incitation au clic'],
            ['<h1>', 'Titre principal de la page', 'Un seul par page, mot-clé inclus'],
            ['<h2>, <h3>...', 'Sous-titres de structure', 'Hiérarchie logique, mots-clés secondaires'],
            ['<img alt="">', 'Texte alternatif image', 'Descriptif, accessible, mot-clé si pertinent'],
            ['<a href="">', 'Lien hypertexte', 'Ancre descriptive, pas "cliquez ici"'],
            ['<canonical>', 'URL principale de la page', 'Évite le contenu dupliqué'],
            ['<hreflang>', 'Langue/région de la page', 'Essentiel pour le multilingue'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Fiche 3 : Les outils SEO incontournables',
      },
      {
        type: 'table',
        content: {
          headers: ['Outil', 'Usage principal', 'Prix'],
          rows: [
            ['Google Search Console', 'Indexation, performances, erreurs', 'Gratuit'],
            ['Google Analytics', 'Trafic, comportement utilisateurs', 'Gratuit'],
            ['Google PageSpeed Insights', 'Vitesse et Core Web Vitals', 'Gratuit'],
            ['Screaming Frog', 'Audit technique complet', 'Gratuit < 500 URLs'],
            ['Ahrefs', 'Backlinks, mots-clés, concurrence', 'Payant'],
            ['SEMrush', 'All-in-one SEO/SEA', 'Payant'],
            ['Ubersuggest', 'Mots-clés, audit basique', 'Freemium'],
            ['Yoast SEO', 'Plugin WordPress', 'Freemium'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Fiche 4 : Acronymes SEO à connaître',
      },
      {
        type: 'table',
        content: {
          headers: ['Acronyme', 'Signification', 'Traduction/Explication'],
          rows: [
            ['SEO', 'Search Engine Optimization', 'Référencement naturel'],
            ['SEA', 'Search Engine Advertising', 'Publicité sur les moteurs'],
            ['SEM', 'Search Engine Marketing', 'SEO + SEA'],
            ['SERP', 'Search Engine Results Page', 'Page de résultats'],
            ['CTR', 'Click-Through Rate', 'Taux de clics'],
            ['CPC', 'Cost Per Click', 'Coût par clic'],
            ['E-E-A-T', 'Experience, Expertise, Authoritativeness, Trustworthiness', 'Critères de qualité'],
            ['LCP', 'Largest Contentful Paint', 'Métrique de vitesse'],
            ['CLS', 'Cumulative Layout Shift', 'Métrique de stabilité'],
            ['INP', 'Interaction to Next Paint', 'Métrique de réactivité'],
            ['YMYL', 'Your Money Your Life', 'Contenus santé/finance'],
            ['DA', 'Domain Authority', 'Autorité de domaine (Moz)'],
            ['DR', 'Domain Rating', 'Autorité de domaine (Ahrefs)'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: '📝 EXERCICES PRATIQUES',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 1 : Identifier les termes dans un texte SEO',
      },
      {
        type: 'text',
        content: 'Lisez ce paragraphe et identifiez les 8 termes SEO utilisés :',
      },
      {
        type: 'quote',
        content: '"Notre audit a révélé un problème de crawl : Googlebot ne pouvait pas accéder à certaines pages à cause du robots.txt. De plus, le LCP était de 4,2 secondes, bien au-dessus du seuil recommandé. Nous avons également identifié du duplicate content et plusieurs orphan pages sans backlinks."',
      },
      {
        type: 'list',
        content: [
          '1. ________________',
          '2. ________________',
          '3. ________________',
          '4. ________________',
          '5. ________________',
          '6. ________________',
          '7. ________________',
          '8. ________________',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Associer termes et définitions',
      },
      {
        type: 'text',
        content: 'Reliez chaque terme à sa définition :',
      },
      {
        type: 'table',
        content: {
          headers: ['Terme', 'Votre réponse', 'Définitions possibles'],
          rows: [
            ['Backlink', '____', 'A. Texte cliquable d\'un lien'],
            ['Anchor Text', '____', 'B. Résultat enrichi en position 0'],
            ['Featured Snippet', '____', 'C. Lien d\'un site externe vers le vôtre'],
            ['Canonical', '____', 'D. Robot d\'exploration de Google'],
            ['Googlebot', '____', 'E. Balise indiquant l\'URL principale'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Décoder un rapport SEO',
      },
      {
        type: 'text',
        content: 'Voici un extrait de rapport. Expliquez chaque métrique en langage simple :',
      },
      {
        type: 'list',
        content: [
          'Impressions : 45 000 → ________________',
          'CTR : 2,3% → ________________',
          'Position moyenne : 8,2 → ________________',
          'DR : 28 → ________________',
          'Referring Domains : 45 → ________________',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Créer votre propre glossaire',
      },
      {
        type: 'text',
        content: 'Notez 5 termes SEO que vous avez rencontrés mais pas encore bien compris. Cherchez leurs définitions et expliquez-les avec vos mots :',
      },
      {
        type: 'table',
        content: {
          headers: ['Terme rencontré', 'Ma définition', 'Exemple concret'],
          rows: [
            ['________________', '________________', '________________'],
            ['________________', '________________', '________________'],
            ['________________', '________________', '________________'],
            ['________________', '________________', '________________'],
            ['________________', '________________', '________________'],
          ],
        },
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Vocabulaire SEO',
          questions: [
            {
              question: 'Que signifie SERP ?',
              options: ['Search Engine Ranking Position', 'Search Engine Results Page', 'SEO Ranking Platform', 'Site Evaluation Report Page'],
              correctIndex: 1,
              explanation: 'SERP = Search Engine Results Page. C\'est la page de résultats que vous voyez après avoir fait une recherche Google.',
            },
            {
              question: 'Qu\'est-ce qu\'un backlink ?',
              options: ['Un lien vers votre page d\'accueil', 'Un lien cassé', 'Un lien depuis un autre site vers le vôtre', 'Un bouton "retour"'],
              correctIndex: 2,
              explanation: 'Un backlink est un lien hypertexte depuis un site externe pointant vers votre site. C\'est un facteur de ranking majeur.',
            },
            {
              question: 'Que mesure le CTR ?',
              options: ['La vitesse du site', 'Le taux de clics', 'Le coût par clic', 'Le nombre de conversions'],
              correctIndex: 1,
              explanation: 'CTR = Click-Through Rate = Taux de clics. C\'est le pourcentage d\'impressions qui génèrent un clic.',
            },
            {
              question: 'Que signifie E-E-A-T ?',
              options: ['Easy, Efficient, Accurate, Tested', 'Experience, Expertise, Authoritativeness, Trustworthiness', 'Engage, Evaluate, Analyze, Track', 'Edit, Enhance, Adjust, Test'],
              correctIndex: 1,
              explanation: 'E-E-A-T = Experience, Expertise, Authoritativeness, Trustworthiness. Ce sont les critères de qualité que Google utilise pour évaluer les pages.',
            },
            {
              question: 'Qu\'est-ce que le crawl ?',
              options: ['Une technique de nage', 'L\'exploration du site par Googlebot', 'Un type de lien', 'Une erreur 404'],
              correctIndex: 1,
              explanation: 'Le crawl est l\'exploration de votre site par les robots de Google (Googlebot) qui suivent les liens pour découvrir et analyser vos pages.',
            },
            {
              question: 'Que permet la balise canonical ?',
              options: ['Bloquer le crawl', 'Indiquer l\'URL principale d\'une page', 'Améliorer la vitesse', 'Ajouter des images'],
              correctIndex: 1,
              explanation: 'La balise canonical indique à Google quelle est la version "officielle" d\'une page quand plusieurs versions existent, évitant ainsi le contenu dupliqué.',
            },
            {
              question: 'Qu\'est-ce qu\'un featured snippet ?',
              options: ['Un extrait de code', 'Un résultat enrichi en position 0', 'Un type de backlink', 'Une erreur d\'indexation'],
              correctIndex: 1,
              explanation: 'Le featured snippet est un résultat enrichi affiché en "position 0", au-dessus des résultats classiques, avec une réponse directe à la question.',
            },
            {
              question: 'Que signifie YMYL ?',
              options: ['Your Money Your Life', 'Year Month Year Last', 'You Make Your Links', 'Yearly Marketing Yearly Leads'],
              correctIndex: 0,
              explanation: 'YMYL = Your Money Your Life. Ce sont les contenus touchant à la santé, la sécurité ou les finances, soumis à des standards E-E-A-T plus stricts.',
            },
            {
              question: 'Quel est l\'objectif du LCP ?',
              options: ['< 10 secondes', '< 5 secondes', '< 2,5 secondes', '< 1 seconde'],
              correctIndex: 2,
              explanation: 'Le LCP (Largest Contentful Paint) doit être inférieur à 2,5 secondes pour être considéré comme "bon" selon les Core Web Vitals.',
            },
            {
              question: 'Qu\'est-ce que le "white hat SEO" ?',
              options: ['SEO pour sites blancs', 'Techniques conformes aux guidelines Google', 'SEO pour débutants', 'SEO très avancé'],
              correctIndex: 1,
              explanation: 'Le White Hat SEO désigne les techniques d\'optimisation conformes aux guidelines de Google, par opposition au Black Hat (techniques risquées/interdites).',
            },
          ],
        },
      },
      {
        type: 'cta',
        content: {
          title: 'Continuez votre formation',
          description: 'Maintenant que vous maîtrisez le vocabulaire, passez à la pratique avec notre guide complet pour apprendre le SEO.',
          buttonText: 'Guide complet SEO →',
          buttonLink: '/seo-fondamentaux',
          variant: 'primary',
        },
      },
    ],
  },
];

export const clusterData: ClusterConfig = {
  slug: 'seo-fondamentaux',
  name: 'Fondamentaux SEO',
  description: 'Apprenez les bases du référencement naturel : fonctionnement de Google, mots-clés, optimisation on-page, et les 3 piliers du SEO.',
  metaTitle: 'Apprendre le SEO - Fondamentaux du Référencement | SEOtika',
  metaDescription: 'Formation gratuite aux fondamentaux du SEO. Apprenez le référencement naturel de zéro : Google, mots-clés, optimisation, netlinking.',
  pillarPage,
  childPages,
  icon: 'BookOpen',
  color: 'blue',
};

export default clusterData;
