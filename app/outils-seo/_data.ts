import { ClusterConfig, Article } from '@/types';

const pillarPage: Article = {
  slug: 'index',
  title: 'Outils SEO : Guide Complet des Meilleurs Logiciels de Référencement',
  metaTitle: 'Outils SEO - Comparatif 2026',
  metaDescription: 'Découvrez les meilleurs outils SEO : Semrush, Ahrefs, Moz, Search Console et plus. Comparatif complet pour choisir les bons outils.',
  keyword: 'outils seo',
  secondaryKeywords: ['logiciels référencement', 'meilleurs outils seo', 'tools seo'],
  intent: 'commercial',
  cluster: 'outils-seo',
  excerpt: 'Les bons outils SEO peuvent multiplier votre efficacité. Découvrez les solutions gratuites et payantes pour chaque besoin.',
  tableOfContents: true,
  readingTime: 42,
  difficulty: 'debutant',
  lastUpdated: '2026-01-30',
  author: 'marie-lefevre',
  relatedSlugs: ['google-search-console', 'semrush-guide', 'outils-gratuits', 'ahrefs'],
  faq: [
    {
      question: 'Faut-il investir dans des outils SEO payants ?',
      answer: 'Pas au début. Les outils gratuits (Search Console, GA4, Keyword Planner) suffisent pour démarrer. Investissez dans des outils payants quand vous avez validé votre stratégie et que vous atteignez les limites des versions gratuites.',
    },
    {
      question: 'Quel est le meilleur outil SEO all-in-one ?',
      answer: 'Semrush et Ahrefs sont les leaders. Semrush est plus complet (SEO, SEA, contenu, social), Ahrefs excelle dans l\'analyse de backlinks. Le "meilleur" dépend de vos besoins spécifiques et de votre budget.',
    },
    {
      question: 'Combien coûte une stack SEO complète ?',
      answer: 'Vous pouvez commencer gratuitement avec Google Search Console, GA4 et les versions freemium. Une stack professionnelle coûte entre 150€ et 500€/mois selon les outils choisis.',
    },
    {
      question: 'Comment choisir entre Semrush, Ahrefs et Moz ?',
      answer: 'Semrush pour une approche all-in-one complète, Ahrefs pour le netlinking et l\'analyse concurrentielle, Moz pour une interface plus accessible aux débutants. Testez les essais gratuits avant de vous décider.',
    },
  ],
  content: [
    {
      type: 'text',
      content: 'Les outils SEO sont devenus indispensables pour tout professionnel du référencement. Ils permettent d\'automatiser l\'analyse, d\'identifier les opportunités et de suivre les performances avec une précision impossible à atteindre manuellement. Mais face à la multiplication des solutions disponibles, comment construire la stack parfaite adaptée à vos besoins et votre budget ?',
    },
    {
      type: 'text',
      content: 'Ce guide complet vous présente l\'écosystème des outils SEO en 2026, des solutions gratuites indispensables aux suites professionnelles les plus avancées. Vous apprendrez à choisir les bons outils pour chaque besoin, à les configurer efficacement et à les intégrer dans un workflow productif.',
    },
    {
      type: 'infobox',
      content: {
        type: 'tip',
        title: 'Ce que vous allez apprendre',
        content: '• Les différentes catégories d\'outils SEO et leurs spécificités\n• Comment construire votre stack selon votre budget (gratuit à premium)\n• Les workflows d\'utilisation optimaux pour chaque type d\'outil\n• Les critères de choix entre les solutions concurrentes\n• Les erreurs courantes d\'utilisation et comment les éviter\n• L\'automatisation et l\'intégration entre outils',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Comprendre l\'écosystème des outils SEO',
    },
    {
      type: 'text',
      content: 'L\'écosystème des outils SEO peut sembler complexe au premier abord. On distingue plusieurs catégories principales, chacune répondant à des besoins spécifiques. Comprendre cette classification est essentiel pour construire une stack cohérente et éviter les redondances.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Outils all-in-one : les couteaux suisses du SEO',
    },
    {
      type: 'text',
      content: 'Les suites all-in-one comme Semrush, Ahrefs et Moz Pro regroupent de nombreuses fonctionnalités dans une seule plateforme : recherche de mots-clés, analyse de backlinks, audit technique, suivi de positions, et bien plus. Leur avantage principal est la centralisation des données et la cohérence des métriques. Leur inconvénient : le coût élevé et parfois des fonctionnalités moins poussées que les outils spécialisés.',
    },
    {
      type: 'table',
      content: {
        headers: ['Outil All-in-One', 'Point Fort', 'Point Faible', 'Prix Entrée'],
        rows: [
          ['Semrush', 'Complétude (SEO, SEA, contenu)', 'Interface dense', '130€/mois'],
          ['Ahrefs', 'Backlinks + données fraîches', 'Pas de SEA/social', '99€/mois'],
          ['Moz Pro', 'Accessibilité débutants', 'Données moins complètes', '99€/mois'],
          ['SE Ranking', 'Rapport qualité/prix', 'Moins connu', '55€/mois'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Outils de recherche de mots-clés',
    },
    {
      type: 'text',
      content: 'La recherche de mots-clés est la fondation de toute stratégie SEO. Les outils dédiés offrent des données de volume de recherche, de difficulté, de tendances et de variations sémantiques. Google Keyword Planner reste la référence pour les données de volume (bien qu\'il arrondisse les chiffres), tandis que des outils comme Ubersuggest ou AnswerThePublic excellent dans la découverte d\'idées de contenu.',
    },
    {
      type: 'list',
      content: [
        'Google Keyword Planner : données officielles, volumes arrondis, gratuit avec compte Ads',
        'Keyword Magic Tool (Semrush) : base massive, groupes sémantiques, questions',
        'Keywords Explorer (Ahrefs) : difficulté précise, potentiel de trafic, parent topic',
        'Ubersuggest : version gratuite généreuse, idéal pour débuter',
        'AnswerThePublic : visualisation des questions, excellent pour le contenu',
        'AlsoAsked : questions "People Also Ask" structurées en clusters',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Outils d\'audit technique',
    },
    {
      type: 'text',
      content: 'L\'audit technique identifie les problèmes qui empêchent Google de crawler et indexer correctement votre site. Les crawlers SEO simulent le comportement de Googlebot pour détecter les erreurs, redirections, problèmes de contenu dupliqué et autres obstacles techniques.',
    },
    {
      type: 'table',
      content: {
        headers: ['Outil Audit', 'Type', 'URLs Gratuites', 'Spécialité'],
        rows: [
          ['Screaming Frog', 'Desktop', '500', 'Audit complet, flexible'],
          ['Sitebulb', 'Desktop', 'Essai 14j', 'Visualisations, insights'],
          ['DeepCrawl (Lumar)', 'Cloud', 'Essai', 'Enterprise, monitoring'],
          ['Semrush Site Audit', 'Cloud', 'Inclus abonnement', 'Intégré, automatisé'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Outils de suivi de positions',
    },
    {
      type: 'text',
      content: 'Le rank tracking permet de suivre l\'évolution de vos positions sur vos mots-clés cibles. Google Search Console fournit des données réelles (mais agrégées et limitées), tandis que les outils tiers offrent un suivi quotidien plus granulaire avec comparaison concurrentielle.',
    },
    {
      type: 'list',
      content: [
        'Google Search Console : données réelles, 16 mois d\'historique, gratuit',
        'Semrush Position Tracking : quotidien, local, features SERP',
        'Ahrefs Rank Tracker : données fraîches, volumes mis à jour',
        'AccuRanker : spécialisé rank tracking, très précis',
        'SERPRobot : économique, essai gratuit généreux',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Outils d\'analyse de backlinks',
    },
    {
      type: 'text',
      content: 'L\'analyse de backlinks est cruciale pour comprendre votre profil de liens et celui de vos concurrents. Ahrefs possède la plus grande base de données, suivi de Majestic. Ces outils permettent d\'identifier les opportunités de link building et de détecter les liens toxiques.',
    },
    {
      type: 'table',
      content: {
        headers: ['Outil Backlinks', 'Taille Index', 'Métrique Propriétaire', 'Version Gratuite'],
        rows: [
          ['Ahrefs', '30 trillion liens', 'DR (Domain Rating)', 'Webmaster Tools limité'],
          ['Majestic', '9 trillion liens', 'TF/CF (Trust/Citation Flow)', 'Limité'],
          ['Moz Link Explorer', '40 trillion liens', 'DA (Domain Authority)', '10 requêtes/mois'],
          ['Semrush', '43 trillion liens', 'Authority Score', 'Inclus abonnement'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Outils d\'optimisation de contenu',
    },
    {
      type: 'text',
      content: 'Ces outils analysent le contenu des pages les mieux positionnées pour vous guider dans l\'optimisation de vos propres contenus. Ils suggèrent des termes à inclure, la longueur optimale et la structure recommandée.',
    },
    {
      type: 'list',
      content: [
        'Surfer SEO : analyse NLP, score de contenu en temps réel, éditeur intégré',
        'Clearscope : analyse sémantique premium, intégration Google Docs',
        'MarketMuse : IA avancée, planification de contenu, gap analysis',
        'Frase : recherche + rédaction, résumés automatiques, FAQ',
        'NeuronWriter : alternative européenne, bon rapport qualité/prix',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Construire votre stack SEO selon votre budget',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Stack gratuite (0€) : l\'essentiel pour démarrer',
    },
    {
      type: 'text',
      content: 'Contrairement aux idées reçues, vous pouvez faire du SEO efficace sans dépenser un centime. Google fournit gratuitement des outils puissants, et de nombreuses solutions freemium offrent des fonctionnalités suffisantes pour débuter.',
    },
    {
      type: 'infobox',
      content: {
        type: 'tip',
        title: 'Stack gratuite recommandée',
        content: '• Google Search Console : performances, indexation, Core Web Vitals\n• Google Analytics 4 : comportement utilisateur, conversions\n• Google Keyword Planner : volumes de recherche (avec compte Ads)\n• Screaming Frog gratuit : audit technique (500 URLs max)\n• Extensions Chrome : MozBar, Keyword Surfer, SEO Meta in 1 Click\n• PageSpeed Insights + Lighthouse : performance web',
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Stack intermédiaire (50-150€/mois) : montée en puissance',
    },
    {
      type: 'text',
      content: 'Quand vous atteignez les limites des outils gratuits, un investissement modéré débloque des fonctionnalités essentielles. À ce niveau, privilégiez un outil principal complété par des solutions gratuites.',
    },
    {
      type: 'table',
      content: {
        headers: ['Option', 'Outils', 'Budget', 'Idéal pour'],
        rows: [
          ['A', 'SE Ranking + Screaming Frog gratuit', '55€/mois', 'Suivi positions + audit'],
          ['B', 'Ahrefs Lite', '99€/mois', 'Backlinks + mots-clés'],
          ['C', 'Ubersuggest payant + Surfer', '~100€/mois', 'Contenu + mots-clés'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Stack professionnelle (200-400€/mois) : couverture complète',
    },
    {
      type: 'text',
      content: 'Pour les agences et les sites à fort enjeu, une stack complète combine un outil all-in-one avec des solutions spécialisées. L\'investissement se justifie par le gain de temps et la qualité des données.',
    },
    {
      type: 'list',
      content: [
        'Semrush Guru (250€) : couverture all-in-one complète',
        'OU Ahrefs Standard (199€) + Screaming Frog payant (209€/an)',
        'Surfer SEO (89€) pour l\'optimisation de contenu avancée',
        'Google Search Console + GA4 restent indispensables (gratuits)',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Workflows d\'utilisation optimaux',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Workflow recherche de mots-clés',
    },
    {
      type: 'code',
      content: {
        language: 'text',
        filename: 'workflow-keywords.txt',
        code: `WORKFLOW RECHERCHE MOTS-CLÉS

1. BRAINSTORMING INITIAL
   → AnswerThePublic : questions et préoccupations
   → AlsoAsked : structure des "People Also Ask"
   → Forums/Reddit : langage réel des utilisateurs

2. EXPLORATION VOLUMES
   → Keyword Planner : volumes de base
   → Semrush/Ahrefs : variations et questions
   → Filtrer par volume (>100) et difficulté (<50)

3. ANALYSE INTENTION
   → Vérifier manuellement les SERPs
   → Catégoriser : info, navigation, transaction
   → Identifier le format dominant (article, liste, vidéo)

4. PRIORISATION
   → Créer matrice opportunité (volume × difficulté inverse)
   → Grouper par cluster thématique
   → Planifier calendrier éditorial`,
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Workflow audit mensuel',
    },
    {
      type: 'text',
      content: 'Un audit régulier permet d\'identifier et corriger les problèmes avant qu\'ils n\'impactent vos performances. Voici un workflow mensuel efficace combinant plusieurs outils.',
    },
    {
      type: 'list',
      content: [
        'Semaine 1 : Crawl Screaming Frog + analyse erreurs techniques',
        'Semaine 2 : Export Search Console + analyse tendances et anomalies',
        'Semaine 3 : Vérification backlinks (nouveaux, perdus, toxiques)',
        'Semaine 4 : Analyse positions + identification pages à optimiser',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Workflow analyse concurrentielle',
    },
    {
      type: 'text',
      content: 'L\'analyse de la concurrence est plus efficace avec une approche systématique. Utilisez les outils pour identifier les gaps et opportunités.',
    },
    {
      type: 'code',
      content: {
        language: 'text',
        filename: 'workflow-concurrence.txt',
        code: `WORKFLOW ANALYSE CONCURRENTIELLE

1. IDENTIFICATION CONCURRENTS
   → 3-5 concurrents directs (même offre)
   → 3-5 concurrents SEO (mêmes mots-clés)

2. ANALYSE TRAFIC (Semrush/Ahrefs)
   → Trafic organique estimé
   → Répartition par pays/device
   → Évolution sur 12 mois

3. ANALYSE MOTS-CLÉS
   → Top keywords (volume + position)
   → Keywords exclusifs vs partagés
   → Gap analysis : ils rankent, pas vous

4. ANALYSE BACKLINKS
   → DR/DA et profil de liens
   → Sources de liens communes
   → Opportunités : ils ont des liens, pas vous

5. ANALYSE CONTENU
   → Types de pages performantes
   → Structure et longueur
   → Features SERP obtenues`,
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Automatisation et intégrations',
    },
    {
      type: 'text',
      content: 'L\'efficacité d\'une stack SEO dépend aussi de l\'automatisation des tâches répétitives et des intégrations entre outils. Voici les possibilités les plus utiles.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Automatisation des rapports',
    },
    {
      type: 'list',
      content: [
        'Google Looker Studio : dashboards automatisés GSC + GA4',
        'Semrush My Reports : rapports PDF automatiques hebdo/mensuels',
        'Data Studio + API : connexion Ahrefs, Semrush via connecteurs',
        'Notion + Zapier : centralisation des alertes et données',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Alertes automatiques',
    },
    {
      type: 'text',
      content: 'Configurez des alertes pour être notifié des changements importants sans devoir vérifier manuellement chaque jour.',
    },
    {
      type: 'list',
      content: [
        'Search Console : alertes indexation et erreurs critiques',
        'Ahrefs Alerts : nouveaux backlinks, mentions de marque, positions',
        'Semrush Sensor : volatilité SERP et mises à jour algorithme',
        'UptimeRobot : monitoring disponibilité site (gratuit)',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Erreurs courantes à éviter',
    },
    {
      type: 'infobox',
      content: {
        type: 'warning',
        title: 'Les pièges des outils SEO',
        content: '• Se fier aveuglément aux métriques tierces (DA, DR) sans comprendre leur calcul\n• Multiplier les outils sans les maîtriser vraiment\n• Négliger Search Console au profit d\'outils payants\n• Confondre données estimées et données réelles\n• Optimiser pour les métriques des outils plutôt que pour les utilisateurs\n• Ne pas vérifier manuellement les SERPs',
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'La donnée estimée vs réelle',
    },
    {
      type: 'text',
      content: 'Un point crucial à comprendre : les outils tiers (Semrush, Ahrefs, etc.) fournissent des estimations basées sur leurs propres modèles. Seul Google Search Console donne des données réelles. Les volumes de recherche, le trafic estimé et les positions peuvent différer significativement de la réalité.',
    },
    {
      type: 'table',
      content: {
        headers: ['Type de donnée', 'Source fiable', 'À prendre avec recul'],
        rows: [
          ['Positions réelles', 'Search Console (moyennes)', 'Semrush, Ahrefs (snapshots)'],
          ['Clics/Impressions', 'Search Console', 'Trafic estimé Ahrefs/Semrush'],
          ['Volumes recherche', 'Keyword Planner', 'Tous les autres outils'],
          ['Backlinks', 'Ahrefs, Majestic', 'Données incomplètes partout'],
        ],
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Études de cas : stacks SEO en action',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Étude de cas 1 : Blog personnel à succès',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Contexte',
        content: 'Julie, blogueuse voyage, gère seule son site de 200 articles. Budget limité mais temps disponible. Objectif : passer de 5 000 à 25 000 visiteurs mensuels.',
      },
    },
    {
      type: 'text',
      content: 'Julie utilisait uniquement Google Search Console et Google Analytics. Elle n\'avait aucune visibilité sur ses concurrents ni sur les opportunités de mots-clés. Son audit technique était inexistant.',
    },
    {
      type: 'text',
      content: 'Stack mise en place (budget : 55€/mois) : SE Ranking pour le suivi de positions et l\'analyse concurrentielle + Screaming Frog gratuit pour l\'audit technique mensuel + Ubersuggest gratuit pour les idées de mots-clés.',
    },
    {
      type: 'text',
      content: 'Actions menées : identification de 50 articles à fort potentiel non optimisés, correction de 120 erreurs techniques (redirections en chaîne, titres manquants), analyse des 3 blogs concurrents pour identifier les gaps de contenu.',
    },
    {
      type: 'table',
      content: {
        headers: ['Métrique', 'Avant', 'Après 6 mois', 'Évolution'],
        rows: [
          ['Trafic organique', '5 200/mois', '28 400/mois', '+446%'],
          ['Mots-clés top 10', '45', '189', '+320%'],
          ['Erreurs techniques', '120', '8', '-93%'],
          ['Position moyenne', '24.5', '12.8', '-48%'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Étude de cas 2 : E-commerce en croissance',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Contexte',
        content: 'Boutique en ligne de produits bio, 2 000 références. Équipe marketing de 3 personnes. Budget SEO conséquent disponible. Objectif : doubler le trafic organique et réduire la dépendance aux Ads.',
      },
    },
    {
      type: 'text',
      content: 'La boutique utilisait déjà Semrush mais de façon basique (uniquement suivi de positions). Le site souffrait de problèmes de contenu dupliqué (fiches produits similaires) et de pages de catégories non optimisées.',
    },
    {
      type: 'text',
      content: 'Stack mise en place (budget : 450€/mois) : Semrush Guru pour l\'analyse complète + Screaming Frog payant pour l\'audit technique avancé + Surfer SEO pour l\'optimisation des pages catégories.',
    },
    {
      type: 'text',
      content: 'Actions menées : audit technique révélant 2 400 pages en duplicate content, réécriture des 50 pages catégories principales avec Surfer SEO, mise en place d\'un monitoring automatisé des erreurs.',
    },
    {
      type: 'table',
      content: {
        headers: ['Métrique', 'Avant', 'Après 8 mois', 'Évolution'],
        rows: [
          ['Trafic organique', '45 000/mois', '112 000/mois', '+149%'],
          ['CA organique', '32 000€/mois', '89 000€/mois', '+178%'],
          ['Pages indexées', '8 500', '2 100 (nettoyage)', '-75%'],
          ['Taux de conversion SEO', '1.8%', '2.4%', '+33%'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Étude de cas 3 : Agence SEO multi-clients',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Contexte',
        content: 'Agence SEO gérant 25 clients. Besoin de standardiser les processus, automatiser les rapports et former l\'équipe de 5 consultants. Budget outils : 2 000€/mois.',
      },
    },
    {
      type: 'text',
      content: 'L\'agence utilisait une multitude d\'outils sans cohérence : chaque consultant avait ses préférences. Les rapports clients prenaient des heures à produire manuellement et les données étaient parfois contradictoires.',
    },
    {
      type: 'text',
      content: 'Stack standardisée : Semrush Business (multi-utilisateurs, rapports white-label) + Screaming Frog licence agence + Looker Studio pour les dashboards clients automatisés + Notion pour la gestion de projets.',
    },
    {
      type: 'text',
      content: 'Résultats : temps de production des rapports réduit de 4h à 30min par client, formation unifiée de l\'équipe, cohérence des données et recommandations, scalabilité pour prendre plus de clients.',
    },
    {
      type: 'table',
      content: {
        headers: ['Métrique Agence', 'Avant', 'Après', 'Impact'],
        rows: [
          ['Temps rapport/client', '4 heures', '30 minutes', '-87%'],
          ['Clients gérés/consultant', '5', '8', '+60%'],
          ['Satisfaction client (NPS)', '32', '61', '+91%'],
          ['Rentabilité par client', '1 200€/mois', '1 850€/mois', '+54%'],
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
      content: 'Exercice 1 : Construisez votre stack idéale',
    },
    {
      type: 'infobox',
      content: {
        type: 'tip',
        title: 'À vous de jouer',
        content: 'Définissez votre profil (budget, temps disponible, type de site) et construisez votre stack SEO optimale. Listez les outils choisis avec justification.',
      },
    },
    {
      type: 'text',
      content: 'Étapes : 1) Identifiez vos 3 besoins prioritaires (mots-clés ? backlinks ? technique ?) - 2) Définissez votre budget mensuel réaliste - 3) Sélectionnez 1 outil par besoin sans redondance - 4) Planifiez votre montée en compétence (2 semaines par outil).',
    },
    {
      type: 'text',
      content: 'Critères d\'évaluation : pertinence des outils par rapport aux besoins, absence de redondances, respect du budget, plan d\'apprentissage réaliste.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 2 : Audit comparatif',
    },
    {
      type: 'text',
      content: 'Comparez les données de votre site sur 3 outils différents pour comprendre leurs différences.',
    },
    {
      type: 'list',
      content: [
        'Étape 1 : Relevez votre trafic organique estimé sur Semrush (essai) + Ahrefs (essai) + Ubersuggest',
        'Étape 2 : Comparez avec vos données réelles Google Analytics',
        'Étape 3 : Faites la même chose pour 5 mots-clés cibles (position, volume)',
        'Étape 4 : Analysez les écarts et tirez des conclusions sur la fiabilité de chaque source',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 3 : Créez votre dashboard de monitoring',
    },
    {
      type: 'text',
      content: 'Mettez en place un dashboard Google Looker Studio centralisant vos KPIs SEO essentiels.',
    },
    {
      type: 'list',
      content: [
        'Connectez Google Search Console et Google Analytics 4',
        'Créez une page "Vue d\'ensemble" avec : clics, impressions, CTR, position moyenne',
        'Ajoutez une page "Top pages" avec évolution mois/mois',
        'Ajoutez une page "Mots-clés" avec top requêtes et opportunités',
        'Configurez un envoi automatique par email chaque lundi',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 4 : Workflow d\'audit technique',
    },
    {
      type: 'text',
      content: 'Réalisez un audit technique complet de votre site avec Screaming Frog (version gratuite si moins de 500 pages).',
    },
    {
      type: 'code',
      content: {
        language: 'text',
        filename: 'exercice-audit.txt',
        code: `CHECKLIST AUDIT TECHNIQUE

□ 1. Crawler le site complet avec Screaming Frog
□ 2. Exporter les erreurs 4xx et 5xx → créer liste corrections
□ 3. Identifier les redirections en chaîne → simplifier
□ 4. Vérifier les titres manquants/dupliqués → lister pages
□ 5. Analyser meta descriptions manquantes → prioriser
□ 6. Vérifier les images sans alt → exporter liste
□ 7. Identifier contenu thin (<300 mots) → décider action
□ 8. Vérifier canonical tags → corriger incohérences
□ 9. Créer rapport avec recommandations priorisées
□ 10. Planifier les corrections (urgent/important/nice-to-have)`,
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Quiz : Testez vos connaissances',
    },
    {
      type: 'quiz',
      content: {
        title: 'Maîtrisez-vous les outils SEO ?',
        questions: [
          {
            question: 'Quel outil fournit les données de trafic les plus fiables pour votre site ?',
            options: [
              'Semrush Traffic Analytics',
              'Ahrefs Site Explorer',
              'Google Analytics 4',
              'SimilarWeb',
            ],
            correctIndex: 2,
            explanation: 'Google Analytics 4 mesure le trafic réel de votre site. Les autres outils fournissent des estimations basées sur des modèles statistiques qui peuvent être très éloignées de la réalité.',
          },
          {
            question: 'Quelle est la principale différence entre Semrush et Ahrefs ?',
            options: [
              'Semrush est gratuit, Ahrefs est payant',
              'Semrush couvre SEO+SEA+contenu, Ahrefs se concentre sur SEO',
              'Ahrefs a plus de fonctionnalités que Semrush',
              'Semrush est plus récent qu\'Ahrefs',
            ],
            correctIndex: 1,
            explanation: 'Semrush est une suite marketing complète (SEO, SEA, contenu, social media) tandis qu\'Ahrefs se concentre principalement sur le SEO avec une excellence reconnue dans l\'analyse de backlinks.',
          },
          {
            question: 'Combien de temps Google Search Console conserve-t-il les données historiques ?',
            options: [
              '6 mois',
              '12 mois',
              '16 mois',
              'Illimité',
            ],
            correctIndex: 2,
            explanation: 'Google Search Console conserve 16 mois d\'historique. Il est recommandé d\'exporter régulièrement vos données si vous souhaitez conserver un historique plus long.',
          },
          {
            question: 'Pour un site de 300 pages, quelle version de Screaming Frog suffit ?',
            options: [
              'La version gratuite (limite 500 URLs)',
              'La version payante est obligatoire',
              'Screaming Frog ne peut pas crawler 300 pages',
              'Il faut la version Enterprise',
            ],
            correctIndex: 0,
            explanation: 'La version gratuite de Screaming Frog permet de crawler jusqu\'à 500 URLs, ce qui est suffisant pour un site de 300 pages. La version payante n\'est nécessaire que pour les sites plus importants ou les fonctionnalités avancées.',
          },
          {
            question: 'Quelle métrique Ahrefs est équivalente au Domain Authority de Moz ?',
            options: [
              'URL Rating (UR)',
              'Domain Rating (DR)',
              'Keyword Difficulty (KD)',
              'Traffic Value',
            ],
            correctIndex: 1,
            explanation: 'Le Domain Rating (DR) d\'Ahrefs mesure la force du profil de backlinks d\'un domaine, similaire au Domain Authority (DA) de Moz. Ces métriques propriétaires ne sont pas directement comparables mais servent le même objectif.',
          },
          {
            question: 'Quel outil est le plus adapté pour trouver les questions que pose votre audience ?',
            options: [
              'Google Keyword Planner',
              'AnswerThePublic',
              'Screaming Frog',
              'Google Analytics',
            ],
            correctIndex: 1,
            explanation: 'AnswerThePublic visualise les questions, prépositions et comparaisons recherchées autour d\'un sujet. C\'est l\'outil idéal pour comprendre les préoccupations et questions de votre audience.',
          },
          {
            question: 'Quel est l\'avantage principal des outils d\'optimisation de contenu comme Surfer SEO ?',
            options: [
              'Ils écrivent le contenu à votre place',
              'Ils analysent les top résultats pour guider votre optimisation',
              'Ils soumettent votre contenu à Google',
              'Ils génèrent des backlinks automatiquement',
            ],
            correctIndex: 1,
            explanation: 'Les outils comme Surfer SEO analysent les pages les mieux positionnées (termes utilisés, longueur, structure) pour vous fournir des recommandations d\'optimisation basées sur ce qui fonctionne actuellement dans les SERPs.',
          },
          {
            question: 'Pour une stack SEO gratuite efficace, quels outils sont indispensables ?',
            options: [
              'Semrush + Ahrefs (essais gratuits)',
              'Google Search Console + Google Analytics 4',
              'Moz + Majestic',
              'Ubersuggest + SEMrush',
            ],
            correctIndex: 1,
            explanation: 'Google Search Console et Google Analytics 4 sont les deux outils gratuits indispensables. Ils fournissent des données réelles et complètes sur votre site, contrairement aux essais limités des outils payants.',
          },
          {
            question: 'Quelle est la limite principale des données de volumes de recherche des outils SEO ?',
            options: [
              'Elles sont mises à jour en temps réel',
              'Elles ne concernent que Google',
              'Elles sont estimées et souvent arrondies',
              'Elles ne fonctionnent qu\'en anglais',
            ],
            correctIndex: 2,
            explanation: 'Les volumes de recherche sont des estimations basées sur des échantillons et des modèles statistiques. Même Google Keyword Planner arrondit les données. Il faut les utiliser comme indicateurs relatifs, pas comme valeurs absolues.',
          },
          {
            question: 'Quel workflow est recommandé pour l\'analyse concurrentielle ?',
            options: [
              'Copier directement le contenu des concurrents',
              'Identifier concurrents → analyser trafic → analyser mots-clés → analyser backlinks',
              'Acheter les mêmes outils que les concurrents',
              'Se concentrer uniquement sur les backlinks',
            ],
            correctIndex: 1,
            explanation: 'Une analyse concurrentielle efficace suit un processus structuré : identification des vrais concurrents, analyse de leur trafic et sources, étude de leurs mots-clés et gaps, puis analyse de leur profil de backlinks pour identifier les opportunités.',
          },
        ],
      },
    },
    {
      type: 'cta',
      content: {
        title: 'Maîtrisez vos outils SEO',
        description: 'Découvrez les guides détaillés de chaque outil pour une utilisation optimale.',
        buttonText: 'Explorer les guides outils',
        buttonLink: '/outils-seo/google-search-console',
        variant: 'primary',
      },
    },
  ],
};

const childPages: Article[] = [
  {
    slug: 'google-search-console',
    title: 'Google Search Console : Guide Complet de l\'Outil Indispensable',
    metaTitle: 'Google Search Console - Guide 2026',
    metaDescription: 'Maîtrisez Google Search Console : configuration, fonctionnalités, analyse des données. L\'outil gratuit essentiel pour tout SEO.',
    keyword: 'google search console',
    secondaryKeywords: ['gsc seo', 'search console guide', 'configurer search console'],
    intent: 'info',
    cluster: 'outils-seo',
    excerpt: 'Google Search Console est le seul outil qui vous donne des données directes de Google. Apprenez à l\'exploiter au maximum.',
    tableOfContents: true,
    readingTime: 32,
    difficulty: 'debutant',
    lastUpdated: '2026-01-28',
    author: 'thomas-dupont',
    relatedSlugs: ['semrush-guide', 'outils-gratuits', 'ahrefs'],
    faq: [
      {
        question: 'Search Console est-il vraiment gratuit ?',
        answer: 'Oui, totalement gratuit. C\'est un outil officiel Google pour aider les webmasters. Aucune version payante n\'existe et ne devrait jamais exister.',
      },
      {
        question: 'Combien de temps pour avoir des données ?',
        answer: 'Les données commencent à apparaître sous quelques jours. Comptez 2-4 semaines pour avoir des données significatives sur un nouveau site.',
      },
      {
        question: 'Quelle est la différence entre Search Console et Analytics ?',
        answer: 'Search Console montre comment Google voit votre site (impressions, clics depuis les SERPs, indexation). Analytics montre le comportement des utilisateurs sur votre site (pages vues, temps passé, conversions).',
      },
      {
        question: 'Puis-je utiliser Search Console pour plusieurs sites ?',
        answer: 'Oui, vous pouvez ajouter autant de propriétés que vous le souhaitez. Chaque site nécessite une vérification de propriété séparée.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Google Search Console (GSC) est l\'outil SEO le plus important que vous utiliserez. Contrairement aux outils tiers qui fournissent des estimations, GSC vous donne les données réelles directement de Google : les requêtes exactes qui génèrent des impressions, vos positions réelles, les problèmes d\'indexation et bien plus.',
      },
      {
        type: 'text',
        content: 'Ce guide complet vous apprendra à configurer correctement Search Console, à comprendre chaque rapport en profondeur, et surtout à transformer ces données en actions concrètes pour améliorer votre référencement.',
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Ce que vous allez apprendre',
          content: '• La configuration complète de Search Console (domaine vs préfixe URL)\n• L\'analyse approfondie du rapport Performances\n• La détection et correction des problèmes d\'indexation\n• L\'utilisation des Core Web Vitals pour améliorer l\'UX\n• Les techniques d\'export et d\'analyse avancée des données\n• L\'intégration avec d\'autres outils (GA4, Looker Studio)',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Configuration de Google Search Console',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Propriété Domaine vs Préfixe URL',
      },
      {
        type: 'text',
        content: 'Google Search Console propose deux types de propriétés. Le choix entre les deux a des implications importantes pour vos données.',
      },
      {
        type: 'table',
        content: {
          headers: ['Type', 'Avantages', 'Inconvénients', 'Vérification'],
          rows: [
            ['Propriété Domaine', 'Inclut tous les sous-domaines et protocoles', 'Nécessite accès DNS', 'Enregistrement DNS TXT'],
            ['Préfixe URL', 'Configuration simple', 'Limité à un préfixe spécifique', 'HTML, balise meta, GA, GTM'],
          ],
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Recommandation',
          content: 'Privilégiez la propriété Domaine si vous avez accès au DNS. Elle centralise les données de toutes les versions de votre site (www, non-www, http, https, sous-domaines).',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Méthodes de vérification',
      },
      {
        type: 'text',
        content: 'Pour une propriété Préfixe URL, plusieurs méthodes de vérification sont disponibles. Choisissez celle qui correspond à votre niveau d\'accès.',
      },
      {
        type: 'list',
        content: [
          'Fichier HTML : télécharger et uploader un fichier à la racine (recommandé)',
          'Balise meta : ajouter une balise dans le <head> de votre page d\'accueil',
          'Google Analytics : si GA est déjà installé avec les mêmes droits',
          'Google Tag Manager : si GTM est configuré sur votre site',
          'Enregistrement DNS : ajouter un enregistrement TXT (obligatoire pour propriété Domaine)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Configuration post-vérification',
      },
      {
        type: 'text',
        content: 'Une fois votre propriété vérifiée, effectuez ces actions essentielles pour une configuration optimale.',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          filename: 'checklist-config-gsc.txt',
          code: `CHECKLIST CONFIGURATION SEARCH CONSOLE

□ 1. Soumettre le sitemap XML
   → Sitemaps > Ajouter un sitemap > /sitemap.xml

□ 2. Vérifier l'URL canonique préférée
   → Paramètres > URL préférée (si disponible)

□ 3. Configurer les associations
   → Paramètres > Associations > Lier Google Analytics

□ 4. Ajouter des utilisateurs si nécessaire
   → Paramètres > Utilisateurs et autorisations

□ 5. Configurer les alertes email
   → Préférences > Activer les notifications

□ 6. Vérifier l'état d'indexation initial
   → Pages > Observer les premiers rapports`,
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Le rapport Performances en détail',
      },
      {
        type: 'text',
        content: 'Le rapport Performances est le cœur de Search Console. Il révèle exactement comment votre site apparaît dans les résultats de recherche Google.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les 4 métriques fondamentales',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Définition', 'Utilité'],
          rows: [
            ['Clics', 'Nombre de fois où un utilisateur a cliqué vers votre site', 'Mesure le trafic réel depuis Google'],
            ['Impressions', 'Nombre de fois où votre site est apparu dans les résultats', 'Mesure la visibilité'],
            ['CTR', 'Taux de clics (Clics ÷ Impressions)', 'Mesure l\'attractivité de vos snippets'],
            ['Position', 'Position moyenne dans les résultats', 'Mesure votre classement'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Filtres et dimensions d\'analyse',
      },
      {
        type: 'text',
        content: 'La puissance du rapport Performances réside dans ses filtres. Combinez-les pour des analyses granulaires.',
      },
      {
        type: 'list',
        content: [
          'Requêtes : les mots-clés exacts tapés par les utilisateurs',
          'Pages : les URLs qui apparaissent dans les résultats',
          'Pays : segmentation géographique des performances',
          'Appareils : desktop, mobile, tablette',
          'Apparence dans les résultats : featured snippets, images, vidéos',
          'Dates : comparaison de périodes, détection de tendances',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Analyses avancées du rapport Performances',
      },
      {
        type: 'text',
        content: 'Au-delà des données brutes, certaines analyses combinées révèlent des opportunités cachées.',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          filename: 'analyses-performances.txt',
          code: `ANALYSES À FORTE VALEUR AJOUTÉE

1. OPPORTUNITÉS "QUICK WINS"
   Filtre : Position entre 8-20 + Impressions > 100
   → Pages proches du top 10 à optimiser en priorité

2. PROBLÈMES DE CTR
   Filtre : Position < 5 + CTR < 3%
   → Bonne position mais snippets non attractifs
   → Optimiser titles et meta descriptions

3. CANNIBALISATION DE MOTS-CLÉS
   Exporter toutes les requêtes + pages
   → Chercher même requête sur plusieurs pages
   → Consolider ou différencier le contenu

4. PAGES EN DÉCLIN
   Comparer période actuelle vs période précédente
   Filtre : Évolution négative > -20%
   → Identifier et corriger les pages qui perdent

5. DÉCOUVERTE DE NICHES
   Trier par impressions (décroissant)
   Filtre : Position > 20
   → Requêtes à fort volume où vous n'êtes pas visible`,
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Le rapport Pages (ex-Couverture)',
      },
      {
        type: 'text',
        content: 'Le rapport Pages vous montre l\'état d\'indexation de votre site. Comprendre chaque statut est essentiel pour diagnostiquer les problèmes.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les statuts d\'indexation',
      },
      {
        type: 'table',
        content: {
          headers: ['Statut', 'Signification', 'Action requise'],
          rows: [
            ['Indexée', 'Page dans l\'index Google', 'Aucune, c\'est bon !'],
            ['Non indexée - Exclue par noindex', 'Vous avez demandé l\'exclusion', 'Vérifier si c\'est intentionnel'],
            ['Non indexée - Bloquée par robots.txt', 'Le crawl est bloqué', 'Modifier robots.txt si non voulu'],
            ['Découverte, actuellement non indexée', 'Google connaît mais n\'a pas crawlé', 'Attendre ou améliorer le maillage'],
            ['Crawlée, actuellement non indexée', 'Google a crawlé mais pas indexé', 'Améliorer la qualité du contenu'],
            ['Autre page avec canonical', 'Google préfère une autre URL', 'Vérifier vos canonical tags'],
          ],
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Attention au statut "Crawlée, actuellement non indexée"',
          content: 'Ce statut indique que Google a vu votre page mais a choisi de ne pas l\'indexer. Causes possibles : contenu de faible qualité, duplicate content, ou manque de signaux de valeur. C\'est souvent le problème le plus difficile à résoudre.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Diagnostiquer les problèmes d\'indexation',
      },
      {
        type: 'text',
        content: 'Utilisez l\'outil d\'inspection d\'URL pour analyser une page spécifique. Il vous montre exactement comment Google voit cette page.',
      },
      {
        type: 'list',
        content: [
          'Cliquez sur "Inspection d\'URL" dans le menu',
          'Entrez l\'URL complète de la page à analyser',
          'Vérifiez le statut d\'indexation actuel',
          'Consultez "Afficher la page explorée" pour voir le rendu',
          'Vérifiez les ressources bloquées qui pourraient affecter le rendu',
          'Utilisez "Demander une indexation" pour soumettre une mise à jour',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Core Web Vitals dans Search Console',
      },
      {
        type: 'text',
        content: 'Le rapport Core Web Vitals présente les données d\'expérience utilisateur réelles (données de terrain) collectées par Chrome. Ces métriques sont un facteur de classement depuis 2021.',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Mesure', 'Bon', 'À améliorer', 'Mauvais'],
          rows: [
            ['LCP (Largest Contentful Paint)', 'Temps de chargement du plus grand élément', '< 2.5s', '2.5s - 4s', '> 4s'],
            ['INP (Interaction to Next Paint)', 'Réactivité aux interactions', '< 200ms', '200ms - 500ms', '> 500ms'],
            ['CLS (Cumulative Layout Shift)', 'Stabilité visuelle', '< 0.1', '0.1 - 0.25', '> 0.25'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Interpréter le rapport',
      },
      {
        type: 'text',
        content: 'Search Console groupe vos pages par type de problème. Cela permet de corriger des catégories entières plutôt que page par page.',
      },
      {
        type: 'list',
        content: [
          'Bonnes URLs : aucune action requise, excellente performance',
          'URLs à améliorer : pas critique mais optimisation recommandée',
          'URLs médiocres : problèmes impactant l\'expérience et potentiellement le SEO',
          'Données insuffisantes : pas assez de trafic pour des données fiables',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Le rapport Liens',
      },
      {
        type: 'text',
        content: 'Search Console fournit des données sur vos backlinks et votre maillage interne. Bien que moins complet qu\'Ahrefs ou Majestic, ce rapport a l\'avantage d\'être 100% fiable.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Liens externes',
      },
      {
        type: 'list',
        content: [
          'Pages les plus liées : vos contenus qui attirent naturellement des liens',
          'Sites les plus linkants : vos sources de backlinks principales',
          'Texte d\'ancrage principal : les mots utilisés pour vous lier',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Liens internes',
      },
      {
        type: 'text',
        content: 'Le rapport de liens internes révèle la structure de votre site vue par Google. Les pages avec peu de liens internes ont moins de chances d\'être bien indexées et classées.',
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Analyse du maillage interne',
          content: 'Exportez le rapport de liens internes. Triez par nombre de liens (croissant). Les pages importantes avec peu de liens internes doivent être mieux intégrées dans votre maillage.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Études de cas',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étude de cas 1 : Diagnostic d\'une chute de trafic',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un blog tech constate une chute de 45% de son trafic organique en 2 semaines. Aucun changement apparent sur le site. L\'équipe panique et se demande si c\'est une pénalité Google.',
        },
      },
      {
        type: 'text',
        content: 'Analyse Search Console effectuée : Rapport Performances avec comparaison 28 jours vs période précédente. Filtre par pages pour identifier les plus impactées. 80% de la baisse venait de 5 articles.',
      },
      {
        type: 'text',
        content: 'Diagnostic : Ces 5 articles traitaient de produits logiciels qui venaient de sortir des nouvelles versions majeures. Le contenu était devenu obsolète et Google favorisait des articles plus récents.',
      },
      {
        type: 'text',
        content: 'Actions : Mise à jour complète des 5 articles avec les nouvelles versions, ajout de la date de mise à jour visible, amélioration des informations avec nouvelles captures d\'écran.',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant chute', 'Pendant chute', 'Après correction'],
          rows: [
            ['Trafic organique', '12 500/semaine', '6 900/semaine', '14 200/semaine'],
            ['Position moyenne (5 pages)', '4.2', '12.8', '3.1'],
            ['CTR moyen', '8.2%', '4.1%', '9.8%'],
            ['Impressions', '152 000', '168 000', '145 000'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étude de cas 2 : Résolution de problèmes d\'indexation',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un site e-commerce de 5 000 produits constate que seulement 1 200 pages sont indexées. 3 800 fiches produits sont "Crawlées, actuellement non indexées".',
        },
      },
      {
        type: 'text',
        content: 'Analyse approfondie : Inspection de plusieurs URLs non indexées. Constat : descriptions produits de moins de 100 mots, copiées du fournisseur (duplicate content externe), aucun avis client, images sans optimisation.',
      },
      {
        type: 'text',
        content: 'Solution déployée : Réécriture progressive des 500 meilleures fiches (critère : marge et potentiel de recherche). Ajout de contenu unique (descriptions longues, FAQ, guides d\'utilisation). Intégration des avis clients. Schema Product enrichi.',
      },
      {
        type: 'text',
        content: 'Stratégie d\'indexation : Priorisation des fiches optimisées dans le sitemap. Maillage interne renforcé depuis les pages catégories. Demandes d\'indexation manuelles pour les 50 plus stratégiques.',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après 4 mois', 'Évolution'],
          rows: [
            ['Pages indexées', '1 200', '2 850', '+138%'],
            ['Trafic produits', '3 200/mois', '11 400/mois', '+256%'],
            ['Mots-clés top 100', '890', '3 420', '+284%'],
            ['CA organique', '18 000€/mois', '52 000€/mois', '+189%'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étude de cas 3 : Optimisation CTR via Search Console',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un site B2B informatique a de bonnes positions (moyenne 5.8) mais un CTR très faible (1.9%). L\'objectif : augmenter le trafic sans améliorer les positions.',
        },
      },
      {
        type: 'text',
        content: 'Méthodologie d\'analyse : Export du rapport Performances (16 mois). Calcul du CTR attendu par position (benchmark). Identification des pages avec CTR inférieur de 50%+ au benchmark.',
      },
      {
        type: 'text',
        content: 'Résultat : 45 pages identifiées avec potentiel d\'amélioration CTR. Causes principales : titles trop génériques, meta descriptions manquantes ou tronquées, absence de dates dans les articles.',
      },
      {
        type: 'text',
        content: 'Optimisations appliquées : Réécriture de tous les titles avec des power words et l\'année en cours. Création de meta descriptions de 150-155 caractères avec call-to-action. Ajout de dates de mise à jour pour les articles evergreen.',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après 6 semaines', 'Évolution'],
          rows: [
            ['CTR moyen', '1.9%', '4.2%', '+121%'],
            ['Clics mensuels', '8 400', '18 600', '+121%'],
            ['Position moyenne', '5.8', '5.6', '-3% (stable)'],
            ['Impressions', '442 000', '443 000', 'stable'],
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
        content: 'Exercice 1 : Audit de votre configuration GSC',
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'À vous de jouer',
          content: 'Vérifiez que votre Search Console est correctement configuré en complétant cette checklist.',
        },
      },
      {
        type: 'list',
        content: [
          'Vérifiez le type de propriété (Domaine recommandé si possible)',
          'Confirmez que le sitemap est soumis et sans erreurs',
          'Vérifiez l\'association avec Google Analytics 4',
          'Contrôlez les utilisateurs et leurs niveaux d\'accès',
          'Activez les notifications email pour les alertes critiques',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Trouvez vos Quick Wins',
      },
      {
        type: 'text',
        content: 'Identifiez les opportunités d\'amélioration rapide avec le rapport Performances.',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          filename: 'exercice-quick-wins.txt',
          code: `EXERCICE : IDENTIFIER LES QUICK WINS

Étape 1 : Aller dans Performances > Résultats de recherche
Étape 2 : Sélectionner les 3 derniers mois
Étape 3 : Activer toutes les métriques (Clics, Impressions, CTR, Position)

FILTRE A - Pages proches du top 10 :
→ Filtrer : Position moyenne entre 8 et 20
→ Filtrer : Impressions > 100
→ Exporter cette liste
→ Ces pages sont vos priorités d'optimisation

FILTRE B - CTR à améliorer :
→ Filtrer : Position < 5
→ Trier par CTR (croissant)
→ Les pages en haut de liste ont besoin de meilleurs snippets

Créez un tableau avec :
| URL | Position | Impressions | CTR actuel | CTR cible | Actions |`,
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Audit d\'indexation',
      },
      {
        type: 'text',
        content: 'Analysez l\'état d\'indexation de votre site et identifiez les problèmes à corriger.',
      },
      {
        type: 'list',
        content: [
          'Allez dans Pages > voir les données complètes',
          'Notez le nombre de pages indexées vs non indexées',
          'Pour chaque statut "Non indexée", cliquez pour voir les URLs',
          'Utilisez l\'inspection d\'URL sur 3 pages problématiques',
          'Documentez les causes et actions correctives pour chaque type',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Créez un rapport mensuel GSC',
      },
      {
        type: 'text',
        content: 'Construisez un template de rapport mensuel exploitant les données Search Console.',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          filename: 'template-rapport-gsc.txt',
          code: `TEMPLATE RAPPORT MENSUEL SEARCH CONSOLE

1. VUE D'ENSEMBLE (comparer mois en cours vs précédent)
   □ Clics totaux : _____ (évolution : __%)
   □ Impressions totales : _____ (évolution : __%)
   □ CTR moyen : _____ (évolution : __%)
   □ Position moyenne : _____ (évolution : __%)

2. TOP 10 PAGES (par clics)
   Exporter et lister avec évolution

3. TOP 10 REQUÊTES (par impressions)
   Exporter et lister avec évolution

4. PAGES EN CROISSANCE
   Comparer périodes, filtrer évolution positive > 20%

5. PAGES EN DÉCLIN
   Comparer périodes, filtrer évolution négative > 20%

6. ÉTAT D'INDEXATION
   □ Pages indexées : _____
   □ Pages non indexées : _____
   □ Nouveaux problèmes détectés : _____

7. ACTIONS DU MOIS
   Lister les optimisations effectuées et résultats`,
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quiz : Testez vos connaissances',
      },
      {
        type: 'quiz',
        content: {
          title: 'Maîtrisez-vous Google Search Console ?',
          questions: [
            {
              question: 'Quelle est la durée de conservation des données dans Google Search Console ?',
              options: [
                '6 mois',
                '12 mois',
                '16 mois',
                'Illimité',
              ],
              correctIndex: 2,
              explanation: 'Google Search Console conserve 16 mois d\'historique. Il est recommandé d\'exporter régulièrement vos données pour conserver un historique plus long.',
            },
            {
              question: 'Quelle est la différence principale entre propriété Domaine et Préfixe URL ?',
              options: [
                'La propriété Domaine est payante',
                'La propriété Domaine inclut tous les sous-domaines et protocoles',
                'Le Préfixe URL est plus précis',
                'Il n\'y a pas de différence',
              ],
              correctIndex: 1,
              explanation: 'La propriété Domaine agrège les données de toutes les versions de votre site (www, non-www, http, https, sous-domaines) tandis que le Préfixe URL est limité à un préfixe spécifique.',
            },
            {
              question: 'Que signifie le statut "Crawlée, actuellement non indexée" ?',
              options: [
                'Google n\'a pas encore vu la page',
                'La page est bloquée par robots.txt',
                'Google a vu la page mais choisi de ne pas l\'indexer',
                'La page a une erreur technique',
              ],
              correctIndex: 2,
              explanation: 'Ce statut indique que Googlebot a crawlé la page mais a décidé de ne pas l\'ajouter à son index, souvent en raison d\'une qualité de contenu insuffisante ou de duplicate content.',
            },
            {
              question: 'Quel est le seuil "Bon" pour le LCP (Largest Contentful Paint) ?',
              options: [
                'Moins de 1 seconde',
                'Moins de 2.5 secondes',
                'Moins de 4 secondes',
                'Moins de 5 secondes',
              ],
              correctIndex: 1,
              explanation: 'Google considère un LCP inférieur à 2.5 secondes comme "Bon". Entre 2.5s et 4s, c\'est "À améliorer", et au-delà de 4s, c\'est "Mauvais".',
            },
            {
              question: 'Comment identifier les opportunités "Quick Wins" dans le rapport Performances ?',
              options: [
                'Filtrer les pages avec position > 50',
                'Filtrer les pages avec CTR > 10%',
                'Filtrer les pages avec position 8-20 et impressions élevées',
                'Filtrer les pages avec 0 clics',
              ],
              correctIndex: 2,
              explanation: 'Les Quick Wins sont des pages proches du top 10 (position 8-20) avec un volume d\'impressions significatif. Une petite amélioration peut les faire entrer en première page.',
            },
            {
              question: 'Quelle métrique Search Console indique l\'attractivité de vos snippets ?',
              options: [
                'Les impressions',
                'La position moyenne',
                'Le CTR (taux de clics)',
                'Le nombre de clics',
              ],
              correctIndex: 2,
              explanation: 'Le CTR (Click-Through Rate) mesure le ratio clics/impressions. Un CTR faible pour une bonne position indique que vos titles et meta descriptions ne sont pas assez attractifs.',
            },
            {
              question: 'Où trouver les informations sur les backlinks dans Search Console ?',
              options: [
                'Rapport Performances',
                'Rapport Pages',
                'Rapport Liens',
                'Rapport Core Web Vitals',
              ],
              correctIndex: 2,
              explanation: 'Le rapport Liens dans Search Console présente vos backlinks externes (sites qui vous lient), votre maillage interne et les textes d\'ancrage utilisés.',
            },
            {
              question: 'Quelle action NE peut PAS être effectuée dans Search Console ?',
              options: [
                'Soumettre un sitemap',
                'Demander l\'indexation d\'une page',
                'Désavouer des backlinks',
                'Modifier directement le contenu des pages',
              ],
              correctIndex: 3,
              explanation: 'Search Console est un outil de diagnostic et de communication avec Google, pas un éditeur de site. Vous ne pouvez pas modifier le contenu de vos pages depuis GSC.',
            },
            {
              question: 'Combien de demandes d\'indexation par jour sont autorisées ?',
              options: [
                '5 par jour',
                '10-12 par jour (limite non officielle)',
                '100 par jour',
                'Illimité',
              ],
              correctIndex: 1,
              explanation: 'Google limite les demandes d\'indexation à environ 10-12 par jour par propriété. Au-delà, vous recevez un message demandant d\'attendre.',
            },
            {
              question: 'Quelle est la meilleure façon d\'archiver vos données Search Console ?',
              options: [
                'Les données sont automatiquement sauvegardées par Google',
                'Exporter régulièrement via le bouton d\'export ou l\'API',
                'Faire des captures d\'écran mensuelles',
                'Les données ne peuvent pas être exportées',
              ],
              correctIndex: 1,
              explanation: 'Les données ne sont conservées que 16 mois dans GSC. Pour un historique long terme, exportez régulièrement vos données via le bouton d\'export ou connectez l\'API à un outil comme Looker Studio.',
            },
          ],
        },
      },
      {
        type: 'cta',
        content: {
          title: 'Découvrez les autres outils SEO',
          description: 'Complétez votre stack avec les guides Semrush, Ahrefs et outils gratuits.',
          buttonText: 'Voir tous les outils',
          buttonLink: '/outils-seo',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'semrush-guide',
    title: 'Semrush : Guide Complet de l\'Outil SEO All-in-One',
    metaTitle: 'Semrush Guide - Tutorial 2026',
    metaDescription: 'Maîtrisez Semrush : recherche de mots-clés, audit, backlinks, suivi de positions. Guide complet de l\'outil SEO leader.',
    keyword: 'semrush guide',
    secondaryKeywords: ['semrush tutorial', 'comment utiliser semrush', 'semrush seo'],
    intent: 'info',
    cluster: 'outils-seo',
    excerpt: 'Semrush est l\'une des suites SEO les plus complètes du marché. Découvrez comment exploiter toutes ses fonctionnalités.',
    tableOfContents: true,
    readingTime: 34,
    difficulty: 'intermediaire',
    lastUpdated: '2026-01-26',
    author: 'marie-lefevre',
    relatedSlugs: ['google-search-console', 'outils-gratuits', 'ahrefs'],
    faq: [
      {
        question: 'Semrush vaut-il son prix ?',
        answer: 'Pour les professionnels et agences, oui. Le gain de temps et la qualité des données justifient l\'investissement. Pour les débutants, les outils gratuits suffisent souvent au démarrage.',
      },
      {
        question: 'Semrush ou Ahrefs ?',
        answer: 'Semrush est plus complet (SEO, SEA, social, contenu). Ahrefs excelle dans l\'analyse de backlinks avec une base de données plus large. Testez les deux en essai gratuit pour décider.',
      },
      {
        question: 'Combien de projets peut-on créer sur Semrush ?',
        answer: 'Le plan Pro permet 5 projets, Guru 15 projets, et Business 40 projets. Chaque projet correspond généralement à un site web à suivre.',
      },
      {
        question: 'Les données Semrush sont-elles fiables ?',
        answer: 'Semrush fournit des estimations basées sur son propre index. Pour le trafic de votre site, préférez Google Analytics. Pour les volumes de mots-clés et l\'analyse concurrentielle, Semrush est très fiable.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Semrush est la suite SEO la plus complète du marché avec plus de 55 outils couvrant le SEO, le SEA, le content marketing et les réseaux sociaux. Pour les professionnels du référencement, c\'est souvent l\'outil de référence qui centralise toutes les données nécessaires à une stratégie efficace.',
      },
      {
        type: 'text',
        content: 'Ce guide complet vous accompagne de la configuration initiale à l\'utilisation avancée de chaque module. Vous apprendrez à exploiter la puissance de Semrush pour la recherche de mots-clés, l\'audit technique, l\'analyse concurrentielle et le suivi de vos performances.',
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Ce que vous allez apprendre',
          content: '• La configuration optimale de votre projet Semrush\n• L\'utilisation de la Keyword Magic Tool pour la recherche de mots-clés\n• L\'analyse concurrentielle approfondie (trafic, mots-clés, backlinks)\n• Le Site Audit pour identifier tous les problèmes techniques\n• Le Position Tracking pour suivre vos rankings\n• Les rapports automatisés et leur personnalisation',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Présentation de l\'interface Semrush',
      },
      {
        type: 'text',
        content: 'L\'interface Semrush peut sembler complexe au premier abord avec ses nombreux menus et sous-outils. Comprendre l\'organisation vous permettra de naviguer efficacement.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les grandes sections',
      },
      {
        type: 'table',
        content: {
          headers: ['Section', 'Contenu', 'Utilisation principale'],
          rows: [
            ['SEO', 'Recherche mots-clés, analyse concurrence, backlinks', 'Stratégie SEO quotidienne'],
            ['Local', 'SEO local, gestion listings, avis', 'Entreprises physiques'],
            ['Advertising', 'PPC, display, analyse pub concurrents', 'Campagnes payantes'],
            ['Social', 'Gestion réseaux, analytics social', 'Community management'],
            ['Content Marketing', 'Topic research, SEO writing assistant', 'Création de contenu'],
            ['Trends', 'Analyse de marché, tendances', 'Veille stratégique'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Le concept de Projet',
      },
      {
        type: 'text',
        content: 'Un "Projet" Semrush regroupe toutes les fonctionnalités de monitoring pour un site donné : audit automatique, suivi de positions, monitoring backlinks, etc. C\'est la première chose à configurer pour tirer pleinement parti de l\'outil.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Configurer votre projet Semrush',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Création et paramétrage initial',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          filename: 'configuration-projet-semrush.txt',
          code: `CHECKLIST CONFIGURATION PROJET SEMRUSH

1. CRÉATION DU PROJET
   □ Projets > Créer un projet
   □ Entrer le domaine (avec ou sans www selon votre version)
   □ Nommer le projet de façon reconnaissable

2. CONFIGURATION SITE AUDIT
   □ Définir le nombre de pages à crawler (selon votre plan)
   □ Configurer la fréquence (hebdomadaire recommandé)
   □ Ajouter le sitemap pour guider le crawl
   □ Exclure les sections non pertinentes si nécessaire

3. CONFIGURATION POSITION TRACKING
   □ Sélectionner le moteur (Google par défaut)
   □ Choisir le device (desktop et/ou mobile)
   □ Définir la localisation (pays, ville si SEO local)
   □ Importer votre liste de mots-clés cibles
   □ Ajouter vos concurrents pour comparaison

4. CONFIGURATION BACKLINK AUDIT
   □ Connecter Google Search Console (recommandé)
   □ Lancer l'analyse initiale des backlinks
   □ Configurer les alertes de nouveaux liens

5. PARAMÈTRES DE NOTIFICATION
   □ Activer les alertes par email pertinentes
   □ Configurer la fréquence des rapports`,
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'La Keyword Magic Tool',
      },
      {
        type: 'text',
        content: 'La Keyword Magic Tool est probablement la fonctionnalité la plus utilisée de Semrush. Elle permet de trouver des milliers d\'idées de mots-clés à partir d\'un terme de base, avec toutes les métriques nécessaires pour les évaluer.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Fonctionnement de base',
      },
      {
        type: 'list',
        content: [
          'Entrez un mot-clé "seed" (terme de départ)',
          'Semrush génère des milliers de variations et questions associées',
          'Les résultats sont groupés par thèmes pour faciliter l\'exploration',
          'Chaque mot-clé affiche volume, difficulté (KD), CPC, et tendance',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Comprendre les métriques',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Description', 'Comment l\'utiliser'],
          rows: [
            ['Volume', 'Recherches mensuelles moyennes', 'Prioriser les opportunités'],
            ['Keyword Difficulty (KD)', 'Difficulté estimée (0-100)', 'KD < 30 pour débuter'],
            ['CPC', 'Coût par clic moyen en Ads', 'Indicateur de valeur commerciale'],
            ['Trend', 'Évolution sur 12 mois', 'Identifier mots-clés en croissance'],
            ['SERP Features', 'Éléments enrichis présents', 'Opportunités featured snippets'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Techniques avancées de recherche',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          filename: 'techniques-keyword-magic.txt',
          code: `TECHNIQUES AVANCÉES KEYWORD MAGIC TOOL

1. UTILISER LES FILTRES COMBINÉS
   → Volume : 100-1000 (sweet spot pour débuter)
   → KD : 0-40 (difficulté accessible)
   → Include : mots obligatoires dans les résultats
   → Exclude : mots à exclure

2. EXPLORER LES GROUPES
   → Les groupes à gauche regroupent par thème
   → Cliquer sur un groupe filtre les résultats
   → Identifier les clusters de contenu potentiels

3. ONGLET "QUESTIONS"
   → Affiche uniquement les requêtes sous forme de questions
   → Idéal pour les FAQ et le contenu informatif
   → Questions "comment" souvent plus accessibles

4. ONGLET "RELATED"
   → Mots-clés sémantiquement liés
   → Élargit les possibilités au-delà des variations exactes

5. EXPORTER VERS KEYWORD MANAGER
   → Sélectionner les mots-clés pertinents
   → Envoyer vers Keyword Manager pour organisation
   → Créer des listes par projet ou thématique`,
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Analyse concurrentielle avec Semrush',
      },
      {
        type: 'text',
        content: 'L\'analyse concurrentielle est l\'un des points forts de Semrush. Vous pouvez découvrir précisément ce qui fonctionne pour vos concurrents et identifier les opportunités qu\'ils exploitent.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Domain Overview',
      },
      {
        type: 'text',
        content: 'Entrez n\'importe quel domaine pour obtenir une vue d\'ensemble complète : trafic organique estimé, nombre de mots-clés positionnés, valeur du trafic, principaux concurrents organiques.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Organic Research',
      },
      {
        type: 'list',
        content: [
          'Positions : tous les mots-clés sur lesquels le concurrent ranke',
          'Position Changes : mots-clés gagnés/perdus récemment',
          'Competitors : autres sites qui ciblent les mêmes mots-clés',
          'Pages : les pages les plus performantes du concurrent',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Keyword Gap Analysis',
      },
      {
        type: 'text',
        content: 'L\'outil Keyword Gap compare votre domaine à plusieurs concurrents pour identifier les mots-clés qu\'ils ciblent et pas vous. C\'est une mine d\'or pour trouver des opportunités.',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          filename: 'workflow-keyword-gap.txt',
          code: `WORKFLOW KEYWORD GAP

1. Accéder à Keyword Gap (menu SEO > Recherche concurrentielle)

2. Configurer la comparaison :
   □ Votre domaine en premier
   □ Ajouter 3-4 concurrents directs
   □ Sélectionner pays et device

3. Analyser les onglets :
   □ Missing : concurrents rankent, vous non → PRIORITAIRE
   □ Weak : vous rankez moins bien → AMÉLIORER
   □ Strong : vous dominez → MAINTENIR
   □ Unique : vous seul rankez → DÉFENDRE

4. Filtrer les opportunités :
   □ Missing avec Volume > 100 et KD < 40
   □ Exporter cette liste
   □ Planifier le contenu à créer`,
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Site Audit : identifier tous les problèmes',
      },
      {
        type: 'text',
        content: 'Le Site Audit de Semrush crawle votre site et identifie plus de 140 types de problèmes techniques, on-page et de performance. C\'est l\'équivalent d\'un Screaming Frog intégré avec des recommandations automatiques.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Catégories d\'erreurs',
      },
      {
        type: 'table',
        content: {
          headers: ['Catégorie', 'Exemples', 'Impact'],
          rows: [
            ['Erreurs', 'Liens cassés, erreurs serveur, HTTPS mixte', 'Critique - à corriger immédiatement'],
            ['Avertissements', 'Balises H1 manquantes, images lourdes', 'Important - prioriser'],
            ['Avis', 'Liens nofollow internes, orphan pages', 'Recommandé - optimisation'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Score de santé du site',
      },
      {
        type: 'text',
        content: 'Semrush calcule un score de santé global de 0 à 100%. Ce score est utile pour suivre l\'évolution dans le temps et pour des rapports clients, mais ne vous focalisez pas uniquement sur le chiffre.',
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Priorisation des corrections',
          content: 'Ne cherchez pas à atteindre 100%. Concentrez-vous sur les erreurs critiques et les avertissements qui impactent vos pages les plus importantes (trafic, conversions). Un score de 85-90% est excellent pour la plupart des sites.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Position Tracking',
      },
      {
        type: 'text',
        content: 'Le Position Tracking suit quotidiennement vos positions sur une liste de mots-clés définie. Contrairement à Search Console qui donne des moyennes, vous obtenez des positions exactes jour par jour.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Configuration optimale',
      },
      {
        type: 'list',
        content: [
          'Importer vos mots-clés cibles (fichier ou manuelle)',
          'Ajouter des tags pour organiser par thème/priorité',
          'Configurer 2-3 concurrents pour comparaison directe',
          'Choisir la fréquence de mise à jour (quotidienne ou hebdomadaire)',
          'Activer les alertes pour changements significatifs',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Métriques clés à suivre',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Description', 'Objectif'],
          rows: [
            ['Visibility', 'Score de visibilité global', 'Croissance régulière'],
            ['Estimated Traffic', 'Trafic estimé des mots-clés suivis', 'Corrélation avec GA'],
            ['Average Position', 'Position moyenne', 'Tendance à la baisse'],
            ['Top 3 / Top 10 / Top 100', 'Distribution des positions', 'Augmenter Top 10'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Backlink Analytics & Building',
      },
      {
        type: 'text',
        content: 'Semrush propose des outils complets pour l\'analyse et l\'acquisition de backlinks, même si Ahrefs reste souvent préféré pour cette partie spécifique.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Backlink Analytics',
      },
      {
        type: 'text',
        content: 'Analysez votre profil de liens ou celui de n\'importe quel concurrent. Semrush montre les domaines référents, les ancres utilisées, les attributs (follow/nofollow), et l\'évolution dans le temps.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Link Building Tool',
      },
      {
        type: 'text',
        content: 'Cet outil vous aide à trouver des opportunités de liens en analysant où vos concurrents obtiennent leurs backlinks et quels sites mentionnent vos mots-clés sans vous lier.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Études de cas',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étude de cas 1 : Lancement d\'un nouveau blog',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Marc lance un blog sur la photographie. Budget limité, il a souscrit à Semrush Pro (130€/mois) pour 3 mois. Objectif : identifier une stratégie de contenu viable et publier 20 articles optimisés.',
        },
      },
      {
        type: 'text',
        content: 'Utilisation de Semrush : Keyword Magic Tool pour trouver des mots-clés accessibles (KD < 25). Analyse des concurrents établis pour comprendre leur stratégie de contenu. Site Audit pour s\'assurer que le blog démarre sans erreurs techniques.',
      },
      {
        type: 'text',
        content: 'Méthodologie : 1) Recherche de 500 mots-clés potentiels → filtrés à 80 mots-clés exploitables. 2) Analyse des top 3 blogs photo → identification de 15 types de contenus qui fonctionnent. 3) Création d\'un calendrier éditorial de 20 articles basé sur les opportunités identifiées.',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Démarrage', 'Après 3 mois', 'Après 6 mois'],
          rows: [
            ['Articles publiés', '0', '20', '35'],
            ['Mots-clés positionnés', '0', '156', '412'],
            ['Trafic organique', '0', '2 800/mois', '8 400/mois'],
            ['Mots-clés top 10', '0', '12', '48'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étude de cas 2 : Redressement SEO d\'un e-commerce',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Une boutique de mobilier design voit son trafic organique chuter de 40% après une refonte de site. L\'équipe n\'avait pas de suivi SEO en place avant la refonte.',
        },
      },
      {
        type: 'text',
        content: 'Diagnostic avec Semrush : Site Audit révèle un score de santé de 52% (vs 78% attendu). Position Tracking montre une perte de 65% des positions top 10 sur les mots-clés principaux. Backlink Audit identifie 340 backlinks perdus suite aux changements d\'URLs.',
      },
      {
        type: 'text',
        content: 'Actions correctives basées sur Semrush : 1) Correction de 89 erreurs de redirections identifiées par Site Audit. 2) Contact des sites pour mise à jour des liens (récupération de 180 backlinks). 3) Optimisation des 50 pages de catégories principales identifiées comme perdantes.',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Post-refonte', 'Après 2 mois', 'Après 4 mois'],
          rows: [
            ['Score Site Audit', '52%', '81%', '89%'],
            ['Trafic organique', '-40% vs avant', '-15% vs avant', '+5% vs avant'],
            ['Mots-clés top 10', '45', '78', '124'],
            ['Backlinks actifs', '890', '1 040', '1 180'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étude de cas 3 : Agence SEO et reporting client',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Une agence SEO gère 12 clients avec des besoins de reporting mensuels. Le temps passé sur les rapports manuels consomme 2 jours/mois. Objectif : automatiser et professionnaliser les rapports.',
        },
      },
      {
        type: 'text',
        content: 'Mise en place avec Semrush Guru (250€/mois) : Création d\'un projet par client avec configuration standardisée. Templates de rapports personnalisés avec logo de l\'agence. Envoi automatique mensuel aux clients avec dashboard interactif.',
      },
      {
        type: 'text',
        content: 'Workflow optimisé : Rapports automatiques + 30 minutes de personnalisation par client = 6 heures totales vs 16 heures avant. Les clients ont accès à un dashboard Semrush en lecture seule pour consultation en temps réel.',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique Agence', 'Avant', 'Après', 'Gain'],
          rows: [
            ['Temps reporting/mois', '16 heures', '6 heures', '-62%'],
            ['Satisfaction client (NPS)', '34', '58', '+71%'],
            ['Clients supplémentaires gérables', '12', '18', '+50%'],
            ['Coût outil/client', '0 (manuel)', '21€/client', 'Rentabilisé'],
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
        content: 'Exercice 1 : Recherche de mots-clés avec Keyword Magic Tool',
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'À vous de jouer',
          content: 'Utilisez l\'essai gratuit Semrush pour réaliser une recherche de mots-clés complète sur votre thématique.',
        },
      },
      {
        type: 'list',
        content: [
          'Choisissez un mot-clé "seed" représentatif de votre activité',
          'Lancez la recherche dans Keyword Magic Tool',
          'Appliquez les filtres : Volume 100-1000, KD 0-40',
          'Explorez l\'onglet "Questions" pour les opportunités FAQ',
          'Exportez les 50 meilleurs mots-clés dans un fichier',
          'Organisez-les en 5 clusters thématiques',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Analyse concurrentielle complète',
      },
      {
        type: 'text',
        content: 'Réalisez une analyse concurrentielle approfondie de 3 concurrents directs.',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          filename: 'exercice-analyse-concurrence.txt',
          code: `EXERCICE ANALYSE CONCURRENTIELLE

Pour chaque concurrent :

1. DOMAIN OVERVIEW
   □ Trafic organique estimé : _____
   □ Nombre de mots-clés : _____
   □ Authority Score : _____

2. TOP 5 PAGES (par trafic)
   □ Page 1 : _____ (trafic : _____)
   □ Page 2 : _____ (trafic : _____)
   □ Page 3 : _____ (trafic : _____)
   □ Page 4 : _____ (trafic : _____)
   □ Page 5 : _____ (trafic : _____)

3. TOP 5 MOTS-CLÉS
   □ Liste avec volume et position

4. KEYWORD GAP
   □ Mots-clés "Missing" pertinents : _____
   □ Opportunités identifiées : _____

SYNTHÈSE
→ Forces du concurrent : _____
→ Faiblesses exploitables : _____
→ Actions à prendre : _____`,
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Audit de site et plan d\'action',
      },
      {
        type: 'text',
        content: 'Lancez un Site Audit sur votre site et créez un plan de correction priorisé.',
      },
      {
        type: 'list',
        content: [
          'Configurez le projet avec votre sitemap',
          'Lancez l\'audit complet (selon limite de votre plan)',
          'Notez le score de santé initial',
          'Listez toutes les erreurs critiques',
          'Priorisez par impact : pages à fort trafic d\'abord',
          'Créez un planning de correction sur 4 semaines',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Configuration Position Tracking',
      },
      {
        type: 'text',
        content: 'Mettez en place un suivi de positions professionnel.',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          filename: 'exercice-position-tracking.txt',
          code: `EXERCICE POSITION TRACKING

1. PRÉPARATION LISTE MOTS-CLÉS
   □ Exporter vos mots-clés de Search Console
   □ Ajouter vos mots-clés cibles de Keyword Magic
   □ Dédupliquer et nettoyer (50-100 mots-clés)

2. CONFIGURATION DU TRACKING
   □ Créer la campagne de suivi
   □ Importer la liste de mots-clés
   □ Ajouter des tags (marque, produit, informatif, etc.)
   □ Configurer 3 concurrents

3. DÉFINIR VOS OBJECTIFS
   □ Nombre actuel top 3 : _____
   □ Objectif top 3 à 3 mois : _____
   □ Nombre actuel top 10 : _____
   □ Objectif top 10 à 3 mois : _____

4. RAPPORT HEBDOMADAIRE
   □ Configurer l'envoi automatique par email
   □ Partager avec l'équipe/client si applicable`,
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quiz : Testez vos connaissances',
      },
      {
        type: 'quiz',
        content: {
          title: 'Maîtrisez-vous Semrush ?',
          questions: [
            {
              question: 'Quel outil Semrush permet de trouver des milliers d\'idées de mots-clés ?',
              options: [
                'Domain Overview',
                'Keyword Magic Tool',
                'Position Tracking',
                'Site Audit',
              ],
              correctIndex: 1,
              explanation: 'La Keyword Magic Tool est l\'outil de recherche de mots-clés de Semrush. Elle génère des milliers de variations et questions à partir d\'un terme de base, avec toutes les métriques associées.',
            },
            {
              question: 'Que signifie un Keyword Difficulty (KD) de 25 ?',
              options: [
                'Volume de recherche mensuel de 25',
                'Position moyenne de 25',
                'Difficulté relativement faible, accessible pour un site nouveau',
                'Coût par clic de 25€',
              ],
              correctIndex: 2,
              explanation: 'Le Keyword Difficulty va de 0 à 100. Un KD de 25 est considéré comme faible, indiquant qu\'un site sans grande autorité peut raisonnablement viser ce mot-clé.',
            },
            {
              question: 'Quel onglet de Keyword Gap montre les mots-clés où les concurrents rankent mais pas vous ?',
              options: [
                'Shared',
                'Missing',
                'Weak',
                'Unique',
              ],
              correctIndex: 1,
              explanation: 'L\'onglet "Missing" affiche les mots-clés sur lesquels au moins un concurrent est positionné mais vous ne l\'êtes pas du tout. C\'est souvent la source d\'opportunités la plus riche.',
            },
            {
              question: 'Combien de types de problèmes le Site Audit Semrush peut-il détecter ?',
              options: [
                'Environ 50',
                'Environ 100',
                'Plus de 140',
                'Plus de 200',
              ],
              correctIndex: 2,
              explanation: 'Le Site Audit de Semrush détecte plus de 140 types de problèmes différents, classés en Erreurs (critiques), Avertissements (importants) et Avis (recommandations).',
            },
            {
              question: 'Quel est l\'avantage principal du Position Tracking par rapport à Search Console ?',
              options: [
                'Il est gratuit',
                'Il donne des positions exactes quotidiennes vs des moyennes',
                'Il détecte plus de mots-clés',
                'Il est plus fiable',
              ],
              correctIndex: 1,
              explanation: 'Le Position Tracking fournit des positions précises jour par jour pour vos mots-clés cibles, tandis que Search Console donne des positions moyennes sur une période. Les deux sont complémentaires.',
            },
            {
              question: 'Qu\'est-ce qu\'un "Projet" dans Semrush ?',
              options: [
                'Un rapport PDF exporté',
                'Un ensemble d\'outils de monitoring configurés pour un site',
                'Une liste de mots-clés',
                'Un audit technique unique',
              ],
              correctIndex: 1,
              explanation: 'Un Projet regroupe toutes les fonctionnalités de monitoring pour un site : audit automatique, suivi de positions, monitoring backlinks, etc. C\'est la première chose à configurer.',
            },
            {
              question: 'Quel score de santé Site Audit est considéré comme excellent ?',
              options: [
                '100%',
                '85-90%',
                '70-80%',
                '60-70%',
              ],
              correctIndex: 1,
              explanation: 'Un score de 85-90% est excellent pour la plupart des sites. Chercher 100% est souvent contre-productif car certains "avis" mineurs sont difficiles ou non pertinents à corriger.',
            },
            {
              question: 'Quelle fonctionnalité Semrush aide à trouver des opportunités de backlinks ?',
              options: [
                'Keyword Magic Tool',
                'Link Building Tool',
                'Position Tracking',
                'Traffic Analytics',
              ],
              correctIndex: 1,
              explanation: 'Le Link Building Tool analyse où vos concurrents obtiennent leurs backlinks et identifie les sites qui mentionnent vos mots-clés sans vous lier, créant des opportunités d\'outreach.',
            },
            {
              question: 'Combien de projets peut-on créer avec le plan Semrush Pro ?',
              options: [
                '1 projet',
                '5 projets',
                '10 projets',
                '15 projets',
              ],
              correctIndex: 1,
              explanation: 'Le plan Pro permet 5 projets. Le plan Guru (250€) permet 15 projets, et Business (500€) permet 40 projets.',
            },
            {
              question: 'Pour une analyse concurrentielle efficace, combien de concurrents recommande-t-on d\'analyser ?',
              options: [
                '1-2 concurrents',
                '3-5 concurrents',
                '8-10 concurrents',
                'Tous les concurrents possibles',
              ],
              correctIndex: 1,
              explanation: 'Analyser 3-5 concurrents offre un bon équilibre entre exhaustivité et actionabilité. Trop de concurrents dilue l\'analyse, trop peu peut manquer des opportunités.',
            },
          ],
        },
      },
      {
        type: 'cta',
        content: {
          title: 'Complétez votre stack SEO',
          description: 'Découvrez les autres outils essentiels : Search Console, Ahrefs et alternatives gratuites.',
          buttonText: 'Voir tous les guides',
          buttonLink: '/outils-seo',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'outils-gratuits',
    title: 'Outils SEO Gratuits : Les Indispensables pour Démarrer',
    metaTitle: 'Outils SEO Gratuits - Guide 2026',
    metaDescription: 'Découvrez les meilleurs outils SEO gratuits : Search Console, Keyword Planner, extensions Chrome et plus. Commencez le SEO sans budget.',
    keyword: 'outils seo gratuits',
    secondaryKeywords: ['seo gratuit', 'logiciel seo gratuit', 'outils référencement gratuits'],
    intent: 'info',
    cluster: 'outils-seo',
    excerpt: 'Pas besoin de budget pour commencer le SEO. Ces outils gratuits couvrent l\'essentiel de vos besoins.',
    tableOfContents: true,
    readingTime: 30,
    difficulty: 'debutant',
    lastUpdated: '2026-01-24',
    author: 'thomas-dupont',
    relatedSlugs: ['google-search-console', 'semrush-guide', 'ahrefs'],
    faq: [
      {
        question: 'Peut-on faire du SEO uniquement avec des outils gratuits ?',
        answer: 'Oui, surtout pour un petit site ou pour débuter. Les outils Google (GSC, GA4, Keyword Planner) + des outils freemium couvrent 80% des besoins essentiels.',
      },
      {
        question: 'Quand passer aux outils payants ?',
        answer: 'Quand vous atteignez les limites des versions gratuites, ou quand le temps gagné justifie l\'investissement. Généralement après 6-12 mois de SEO actif ou pour des besoins d\'analyse concurrentielle avancée.',
      },
      {
        question: 'Quel est le meilleur outil SEO gratuit ?',
        answer: 'Google Search Console, sans hésitation. C\'est le seul outil qui fournit des données réelles directement de Google sur vos performances de recherche.',
      },
      {
        question: 'Les versions gratuites sont-elles vraiment utilisables ?',
        answer: 'Absolument. De nombreux SEO professionnels utilisent quotidiennement les outils gratuits. Les versions payantes apportent plus de données et d\'automatisation, mais les gratuites sont pleinement fonctionnelles.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Contrairement à une idée répandue, vous n\'avez pas besoin d\'investir des centaines d\'euros par mois pour faire du SEO efficace. Les meilleurs outils sont souvent gratuits, et Google lui-même fournit des solutions puissantes pour vous aider à optimiser votre référencement.',
      },
      {
        type: 'text',
        content: 'Ce guide complet vous présente tous les outils SEO gratuits vraiment utiles, comment les configurer correctement, et comment les combiner dans un workflow professionnel. Vous découvrirez qu\'une stack gratuite bien maîtrisée peut rivaliser avec des solutions payantes pour la plupart des besoins.',
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Ce que vous allez apprendre',
          content: '• La configuration optimale des outils Google gratuits\n• Les meilleures alternatives freemium et leurs limites\n• Les extensions Chrome indispensables pour le SEO\n• Comment construire un workflow complet sans budget\n• Les astuces pour maximiser les versions gratuites\n• Quand et pourquoi investir dans des outils payants',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Les outils Google : la base indispensable',
      },
      {
        type: 'text',
        content: 'Google fournit gratuitement plusieurs outils essentiels pour le SEO. Ce sont les seuls qui donnent des données réelles (non estimées) sur votre visibilité dans les résultats de recherche.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Google Search Console',
      },
      {
        type: 'text',
        content: 'L\'outil le plus important pour tout SEO. Search Console révèle comment Google voit votre site : requêtes de recherche, impressions, clics, positions moyennes, problèmes d\'indexation, et bien plus.',
      },
      {
        type: 'table',
        content: {
          headers: ['Fonctionnalité', 'Ce qu\'elle permet', 'Fréquence d\'utilisation'],
          rows: [
            ['Performances', 'Voir vos mots-clés et clics réels', 'Hebdomadaire'],
            ['Couverture/Pages', 'Diagnostiquer l\'indexation', 'Mensuelle'],
            ['Core Web Vitals', 'Suivre les métriques de performance', 'Après modifications'],
            ['Liens', 'Analyser backlinks et maillage interne', 'Mensuelle'],
            ['Inspection URL', 'Diagnostiquer des pages spécifiques', 'Selon besoin'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Google Analytics 4',
      },
      {
        type: 'text',
        content: 'GA4 complète Search Console en montrant ce qui se passe après le clic : comportement sur site, conversions, parcours utilisateur. Indispensable pour mesurer l\'impact business du SEO.',
      },
      {
        type: 'list',
        content: [
          'Trafic par source : distinguer le SEO des autres canaux',
          'Pages d\'entrée organiques : quels contenus attirent le trafic',
          'Taux d\'engagement : qualité du trafic SEO vs autres canaux',
          'Conversions organiques : ROI de vos efforts SEO',
          'Parcours utilisateur : comportement après l\'arrivée depuis Google',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Google Keyword Planner',
      },
      {
        type: 'text',
        content: 'Intégré à Google Ads, le Keyword Planner est la source la plus fiable pour les volumes de recherche. Gratuit si vous avez un compte Google Ads (pas besoin de dépenser).',
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Limitations du Keyword Planner',
          content: 'Sans compte Ads actif avec dépenses, les volumes sont affichés par fourchettes (100-1K, 1K-10K). Pour des volumes précis, vous devez avoir un compte avec historique de dépenses OU utiliser des outils tiers comme Ubersuggest.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Autres outils Google gratuits',
      },
      {
        type: 'table',
        content: {
          headers: ['Outil', 'Utilité', 'URL'],
          rows: [
            ['PageSpeed Insights', 'Performance et Core Web Vitals', 'pagespeed.web.dev'],
            ['Rich Results Test', 'Validation des données structurées', 'search.google.com/test/rich-results'],
            ['Mobile-Friendly Test', 'Test de compatibilité mobile', 'search.google.com/test/mobile-friendly'],
            ['Google Trends', 'Tendances de recherche', 'trends.google.com'],
            ['Looker Studio', 'Dashboards automatisés GSC/GA4', 'lookerstudio.google.com'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Outils freemium : maximiser les versions gratuites',
      },
      {
        type: 'text',
        content: 'De nombreux outils SEO proposent des versions gratuites avec des limitations. Bien utilisées, ces versions suffisent pour des besoins courants.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Ubersuggest (Neil Patel)',
      },
      {
        type: 'text',
        content: 'Ubersuggest offre une version gratuite généreuse pour la recherche de mots-clés et l\'analyse basique de concurrents.',
      },
      {
        type: 'table',
        content: {
          headers: ['Version Gratuite', 'Limitations', 'Valeur ajoutée'],
          rows: [
            ['3 recherches/jour', 'Insuffisant pour usage intensif', 'Idéal pour validation ponctuelle'],
            ['Données mots-clés', 'Volume, difficulté, CPC', 'Comparable aux outils payants'],
            ['Audit de site', 'Limité en pages', 'Bon pour petits sites'],
            ['Suggestions mots-clés', 'Limité en nombre', 'Qualité équivalente'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'AnswerThePublic',
      },
      {
        type: 'text',
        content: 'Outil visuel pour découvrir les questions que pose votre audience. La version gratuite permet 3 recherches par jour avec visualisations complètes.',
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Astuce AnswerThePublic',
          content: 'Exportez les résultats en CSV (gratuit). Vous conservez les données pour analyse ultérieure sans consommer vos recherches quotidiennes.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Screaming Frog SEO Spider',
      },
      {
        type: 'text',
        content: 'Le crawler SEO de référence. La version gratuite permet de crawler jusqu\'à 500 URLs, ce qui suffit pour de nombreux sites.',
      },
      {
        type: 'list',
        content: [
          'Détection de tous les éléments on-page (titles, H1, meta descriptions)',
          'Identification des erreurs 4xx et 5xx',
          'Analyse des redirections',
          'Extraction des données structurées',
          'Identification des images sans alt',
          'Limitation : 500 URLs max, pas de programmation',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'AlsoAsked',
      },
      {
        type: 'text',
        content: 'Visualise les questions "People Also Ask" de Google sous forme d\'arborescence. La version gratuite permet 3 recherches par mois.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Ahrefs Webmaster Tools',
      },
      {
        type: 'text',
        content: 'Ahrefs propose une version gratuite pour les propriétaires de sites vérifiés. Vous accédez aux données de backlinks et à l\'audit de VOTRE site uniquement.',
      },
      {
        type: 'table',
        content: {
          headers: ['Fonctionnalité gratuite', 'Ce que vous obtenez'],
          rows: [
            ['Site Explorer (limité)', 'Vos backlinks, domaines référents, ancres'],
            ['Site Audit', 'Audit technique complet de votre site'],
            ['Alertes', 'Notifications nouveaux/perdus backlinks'],
            ['Limitation principale', 'Pas d\'analyse de concurrents'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Extensions Chrome indispensables',
      },
      {
        type: 'text',
        content: 'Les extensions Chrome permettent d\'obtenir des informations SEO instantanément pendant votre navigation. Voici les meilleures extensions gratuites.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Extensions pour l\'analyse on-page',
      },
      {
        type: 'table',
        content: {
          headers: ['Extension', 'Fonctionnalité principale', 'Gratuit'],
          rows: [
            ['SEO Meta in 1 Click', 'Voir tous les éléments SEO d\'une page', '100%'],
            ['Detailed SEO Extension', 'Analyse technique approfondie', '100%'],
            ['Web Developer', 'Outils de développement web', '100%'],
            ['Lighthouse', 'Audit performance intégré à Chrome', '100%'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Extensions pour la recherche de mots-clés',
      },
      {
        type: 'table',
        content: {
          headers: ['Extension', 'Ce qu\'elle affiche', 'Limites'],
          rows: [
            ['Keyword Surfer', 'Volumes directement dans Google', 'Données estimées'],
            ['Keywords Everywhere', 'Volumes, CPC, concurrence', 'Payant pour données complètes'],
            ['WhatsMySERP', 'Position checker gratuit', '10 requêtes/jour'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Extensions pour l\'analyse concurrentielle',
      },
      {
        type: 'list',
        content: [
          'MozBar : DA, PA, métriques de liens sur les SERPs',
          'SEOquake : métriques complètes sur n\'importe quelle page',
          'SimilarWeb : trafic estimé des concurrents',
          'Wappalyzer : technologies utilisées par un site',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Outils en ligne gratuits',
      },
      {
        type: 'text',
        content: 'Au-delà des suites et extensions, de nombreux outils web gratuits complètent votre arsenal.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Validation technique',
      },
      {
        type: 'table',
        content: {
          headers: ['Outil', 'Utilité', 'URL'],
          rows: [
            ['W3C Validator', 'Validation HTML', 'validator.w3.org'],
            ['SSL Checker', 'Vérification certificat HTTPS', 'sslshopper.com/ssl-checker'],
            ['Robots.txt Tester', 'Validation robots.txt', 'Dans Search Console'],
            ['XML Sitemap Validator', 'Vérification sitemap', 'xml-sitemaps.com/validate'],
            ['Redirect Checker', 'Chaînes de redirections', 'redirect-checker.org'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Analyse de contenu',
      },
      {
        type: 'list',
        content: [
          'Hemingway Editor : lisibilité du texte (gratuit)',
          'Grammarly : correction grammaticale (freemium)',
          'Copyscape : détection de plagiat (1 recherche gratuite)',
          'WordCounter : comptage de mots et densité de mots-clés',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Construire un workflow gratuit complet',
      },
      {
        type: 'text',
        content: 'Voici comment combiner tous ces outils gratuits dans un workflow professionnel.',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          filename: 'workflow-gratuit-complet.txt',
          code: `WORKFLOW SEO 100% GRATUIT

=== RECHERCHE DE MOTS-CLÉS ===
1. Google Keyword Planner → volumes de base
2. AnswerThePublic → questions (3/jour)
3. Ubersuggest → variations (3/jour)
4. AlsoAsked → structure PAA (3/mois)
5. Google Trends → validation tendances

=== AUDIT TECHNIQUE ===
1. Google Search Console → indexation, erreurs
2. PageSpeed Insights → performance
3. Screaming Frog gratuit → crawl (<500 URLs)
4. Rich Results Test → données structurées
5. Mobile-Friendly Test → responsive

=== ANALYSE CONCURRENTIELLE ===
1. MozBar (extension) → métriques de base
2. SEOquake (extension) → données on-page
3. SimilarWeb → trafic estimé
4. Analyse manuelle des SERPs → comprendre ce qui ranke

=== SUIVI DES PERFORMANCES ===
1. Google Search Console → positions, clics
2. Google Analytics 4 → trafic, conversions
3. Looker Studio → dashboards automatisés

=== OPTIMISATION CONTENU ===
1. Hemingway Editor → lisibilité
2. SEO Meta in 1 Click → vérification on-page
3. Manual SERP analysis → benchmark concurrents`,
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Études de cas',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étude de cas 1 : Lancement d\'un blog avec 0€',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Sophie lance un blog sur le jardinage urbain. Budget marketing : 0€. Elle dispose uniquement de temps et d\'énergie. Objectif : atteindre 5 000 visiteurs mensuels en 6 mois.',
        },
      },
      {
        type: 'text',
        content: 'Stack mise en place : Google Search Console + GA4 (obligatoires), Ubersuggest gratuit (3 recherches/jour pour les mots-clés), Screaming Frog gratuit (audit mensuel), extensions Chrome MozBar et Keyword Surfer.',
      },
      {
        type: 'text',
        content: 'Méthodologie : Chaque matin, 1 recherche Ubersuggest pour identifier des mots-clés de faible difficulté. Publication de 3 articles par semaine optimisés pour ces mots-clés. Vérification hebdomadaire Search Console pour suivre les progrès.',
      },
      {
        type: 'text',
        content: 'Résultats : En utilisant uniquement les outils gratuits de façon disciplinée, Sophie a atteint son objectif au mois 5 avec un pic à 7 200 visiteurs au mois 6.',
      },
      {
        type: 'table',
        content: {
          headers: ['Mois', 'Articles publiés', 'Trafic organique', 'Mots-clés positionnés'],
          rows: [
            ['Mois 1', '12', '180', '45'],
            ['Mois 2', '12', '620', '128'],
            ['Mois 3', '12', '1 850', '312'],
            ['Mois 4', '10', '3 400', '489'],
            ['Mois 5', '8', '5 200', '612'],
            ['Mois 6', '6', '7 200', '745'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étude de cas 2 : Audit technique d\'un site vitrine',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un artisan menuisier a un site de 35 pages qui ne génère presque pas de trafic. Il ne peut pas investir dans un audit professionnel mais veut comprendre les problèmes.',
        },
      },
      {
        type: 'text',
        content: 'Outils utilisés : Screaming Frog gratuit (35 pages = bien sous la limite de 500), PageSpeed Insights pour chaque template de page, Search Console pour l\'état d\'indexation, Rich Results Test pour valider le schema LocalBusiness.',
      },
      {
        type: 'text',
        content: 'Problèmes identifiés : 12 pages avec H1 manquant, 8 images de plus de 2Mo, aucune meta description renseignée, temps de chargement de 8 secondes sur mobile, 0 page indexée (robots.txt bloquait tout le site).',
      },
      {
        type: 'text',
        content: 'Corrections appliquées (gratuites) : robots.txt corrigé, images compressées avec TinyPNG, H1 et meta descriptions ajoutés manuellement, lazy loading activé via plugin gratuit.',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant audit', 'Après corrections', 'Amélioration'],
          rows: [
            ['Pages indexées', '0', '35', '+100%'],
            ['Temps de chargement mobile', '8.2s', '2.4s', '-71%'],
            ['Score PageSpeed mobile', '18', '72', '+300%'],
            ['Trafic organique (après 2 mois)', '5/mois', '180/mois', '+3500%'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étude de cas 3 : Recherche de mots-clés sans budget',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Une association étudiante veut créer du contenu SEO pour son site sur l\'orientation professionnelle. Aucun budget, besoin de trouver 50 sujets d\'articles optimisés.',
        },
      },
      {
        type: 'text',
        content: 'Méthodologie sur 2 semaines : Jour 1-5 : 3 recherches Ubersuggest/jour = 15 recherches sur les thèmes principaux. Jour 6-10 : 1 recherche AnswerThePublic/jour = 5 exports de questions. Jour 11-14 : analyse des SERPs manuellement avec Keyword Surfer.',
      },
      {
        type: 'text',
        content: 'Résultat : 127 idées de mots-clés collectées, filtrées à 50 opportunités réalistes (volume > 100, concurrence visiblement faible dans les SERPs). Calendrier éditorial créé pour 10 mois de publication.',
      },
      {
        type: 'table',
        content: {
          headers: ['Source gratuite', 'Idées générées', 'Idées retenues'],
          rows: [
            ['Ubersuggest (15 recherches)', '450', '28'],
            ['AnswerThePublic (5 exports)', '320', '15'],
            ['Keyword Surfer (analyse SERP)', '50', '7'],
            ['Google Autocomplete manuel', '80', '0 (déjà couvert)'],
            ['Total', '900', '50'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quand investir dans des outils payants',
      },
      {
        type: 'text',
        content: 'Les outils gratuits ont leurs limites. Voici les signes qui indiquent qu\'il est temps d\'investir.',
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Signaux pour passer au payant',
          content: '• Vous atteignez systématiquement les limites quotidiennes\n• Vous passez plus de temps à contourner les limites qu\'à analyser\n• Vous gérez plusieurs sites ou clients\n• Vous avez besoin d\'automatisation (rapports, alertes)\n• L\'analyse concurrentielle approfondie devient nécessaire\n• Votre site dépasse 500 pages (limite Screaming Frog)',
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
        content: 'Exercice 1 : Configurez votre stack gratuite',
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'À vous de jouer',
          content: 'Mettez en place tous les outils gratuits essentiels pour votre site.',
        },
      },
      {
        type: 'code',
        content: {
          language: 'text',
          filename: 'exercice-stack-gratuite.txt',
          code: `CHECKLIST CONFIGURATION STACK GRATUITE

□ GOOGLE SEARCH CONSOLE
  □ Créer une propriété (type Domaine si possible)
  □ Vérifier la propriété
  □ Soumettre le sitemap
  □ Vérifier l'état d'indexation initial

□ GOOGLE ANALYTICS 4
  □ Créer une propriété GA4
  □ Installer le code de suivi
  □ Configurer les conversions principales
  □ Lier à Search Console

□ SCREAMING FROG
  □ Télécharger et installer
  □ Lancer un premier crawl de votre site
  □ Exporter le rapport des erreurs

□ EXTENSIONS CHROME
  □ Installer SEO Meta in 1 Click
  □ Installer Keyword Surfer
  □ Installer MozBar
  □ Tester sur votre site et un concurrent

□ COMPTES FREEMIUM
  □ Créer compte Ubersuggest
  □ Créer compte Ahrefs Webmaster Tools
  □ Marquer 3 sites pour analyse future`,
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Audit gratuit de votre site',
      },
      {
        type: 'text',
        content: 'Réalisez un audit technique complet en utilisant uniquement les outils gratuits.',
      },
      {
        type: 'list',
        content: [
          'Crawlez votre site avec Screaming Frog (export des erreurs)',
          'Testez 3 pages clés sur PageSpeed Insights (noter les scores)',
          'Vérifiez l\'indexation dans Search Console',
          'Testez vos données structurées avec Rich Results Test',
          'Documentez tous les problèmes trouvés dans un tableau',
          'Priorisez les corrections (critique/important/mineur)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Recherche de mots-clés sur une semaine',
      },
      {
        type: 'text',
        content: 'Collectez des idées de mots-clés en utilisant vos 3 recherches quotidiennes sur les outils freemium.',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          filename: 'exercice-recherche-mots-cles.txt',
          code: `PLAN DE RECHERCHE SUR 5 JOURS

JOUR 1 : Mots-clés principaux
□ Ubersuggest : recherche sur votre terme principal
□ Ubersuggest : recherche sur variation 1
□ Ubersuggest : recherche sur variation 2
→ Exporter les 3 résultats

JOUR 2 : Questions de l'audience
□ AnswerThePublic : terme principal
→ Exporter en CSV
□ Ubersuggest (3 recherches) : termes secondaires

JOUR 3 : Analyse des concurrents
□ Regarder manuellement les top 10 résultats Google
□ Noter les angles et formats utilisés
□ Ubersuggest : vérifier volumes des mots-clés trouvés

JOUR 4 : Long tail keywords
□ Google Autocomplete : noter toutes les suggestions
□ "Recherches associées" : noter en bas de page Google
□ Ubersuggest : vérifier les volumes

JOUR 5 : Consolidation
□ Regrouper toutes les données dans un tableur
□ Filtrer : Volume > 50 ET Difficulté apparente faible
□ Créer 3 clusters thématiques
→ Résultat : 20-30 mots-clés exploitables`,
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Dashboard Looker Studio gratuit',
      },
      {
        type: 'text',
        content: 'Créez un tableau de bord automatisé pour suivre vos performances SEO sans effort.',
      },
      {
        type: 'list',
        content: [
          'Accédez à Looker Studio (lookerstudio.google.com)',
          'Créez un nouveau rapport',
          'Connectez Google Search Console comme source de données',
          'Ajoutez un graphique d\'évolution des clics (28 derniers jours)',
          'Ajoutez un tableau des top 10 requêtes',
          'Ajoutez un tableau des top 10 pages',
          'Connectez GA4 et ajoutez le trafic organique',
          'Configurez l\'envoi automatique par email (hebdomadaire)',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quiz : Testez vos connaissances',
      },
      {
        type: 'quiz',
        content: {
          title: 'Maîtrisez-vous les outils SEO gratuits ?',
          questions: [
            {
              question: 'Quel outil Google fournit les données les plus fiables sur vos mots-clés ?',
              options: [
                'Google Trends',
                'Google Search Console',
                'Google Keyword Planner',
                'Google Analytics',
              ],
              correctIndex: 1,
              explanation: 'Google Search Console montre les requêtes réelles qui génèrent des impressions et des clics vers votre site. Ce sont des données réelles, pas des estimations.',
            },
            {
              question: 'Quelle est la limite de pages pour la version gratuite de Screaming Frog ?',
              options: [
                '100 URLs',
                '250 URLs',
                '500 URLs',
                '1000 URLs',
              ],
              correctIndex: 2,
              explanation: 'La version gratuite de Screaming Frog permet de crawler jusqu\'à 500 URLs. Au-delà, vous devez passer à la version payante (209€/an).',
            },
            {
              question: 'Combien de recherches gratuites par jour offre Ubersuggest ?',
              options: [
                '1 recherche',
                '3 recherches',
                '5 recherches',
                '10 recherches',
              ],
              correctIndex: 1,
              explanation: 'Ubersuggest limite les utilisateurs gratuits à 3 recherches par jour. Il faut donc les utiliser stratégiquement.',
            },
            {
              question: 'Quelle extension Chrome affiche les volumes de recherche directement dans Google ?',
              options: [
                'MozBar',
                'SEO Meta in 1 Click',
                'Keyword Surfer',
                'Wappalyzer',
              ],
              correctIndex: 2,
              explanation: 'Keyword Surfer affiche les volumes de recherche estimés directement dans les résultats Google, ce qui est très pratique pour l\'analyse rapide.',
            },
            {
              question: 'Quel outil gratuit de Google permet de créer des dashboards automatisés ?',
              options: [
                'Google Data Studio (Looker Studio)',
                'Google Search Console',
                'Google Analytics',
                'Google Trends',
              ],
              correctIndex: 0,
              explanation: 'Looker Studio (anciennement Google Data Studio) permet de créer des tableaux de bord gratuits en connectant Search Console et Analytics pour un reporting automatisé.',
            },
            {
              question: 'Que permet Ahrefs Webmaster Tools en version gratuite ?',
              options: [
                'Analyser n\'importe quel concurrent',
                'Analyser uniquement les backlinks de votre propre site vérifié',
                'Accès complet à toutes les fonctionnalités',
                'Rien, Ahrefs est entièrement payant',
              ],
              correctIndex: 1,
              explanation: 'Ahrefs Webmaster Tools est gratuit pour votre propre site vérifié uniquement. Vous pouvez voir vos backlinks et lancer des audits, mais pas analyser les concurrents.',
            },
            {
              question: 'Quel est le principal inconvénient du Keyword Planner sans compte Ads actif ?',
              options: [
                'Il ne fonctionne pas du tout',
                'Les volumes sont affichés par fourchettes (ex: 100-1K)',
                'Il n\'y a pas de données de difficulté',
                'Il est limité à 5 recherches par jour',
              ],
              correctIndex: 1,
              explanation: 'Sans historique de dépenses sur Google Ads, le Keyword Planner affiche les volumes par fourchettes (100-1K, 1K-10K) au lieu de chiffres précis.',
            },
            {
              question: 'Quel outil gratuit est idéal pour voir les questions "People Also Ask" structurées ?',
              options: [
                'Ubersuggest',
                'AnswerThePublic',
                'AlsoAsked',
                'Keyword Surfer',
              ],
              correctIndex: 2,
              explanation: 'AlsoAsked est spécialisé dans la visualisation des questions "People Also Ask" sous forme d\'arborescence, montrant les liens entre les questions.',
            },
            {
              question: 'Quelle est la durée de conservation des données dans Google Search Console ?',
              options: [
                '6 mois',
                '12 mois',
                '16 mois',
                'Illimité',
              ],
              correctIndex: 2,
              explanation: 'Search Console conserve 16 mois de données historiques. Pour un historique plus long, vous devez exporter régulièrement vos données.',
            },
            {
              question: 'Quel signal indique qu\'il est temps de passer aux outils payants ?',
              options: [
                'Vous avez plus de 10 pages indexées',
                'Vous atteignez systématiquement les limites quotidiennes',
                'Vous avez commencé le SEO depuis 1 mois',
                'Vous avez déjà du trafic organique',
              ],
              correctIndex: 1,
              explanation: 'Quand vous passez plus de temps à contourner les limitations qu\'à analyser les données, c\'est le signe que l\'investissement dans un outil payant est justifié.',
            },
          ],
        },
      },
      {
        type: 'cta',
        content: {
          title: 'Découvrez les outils premium',
          description: 'Quand vous serez prêt à investir, consultez nos guides Semrush et Ahrefs.',
          buttonText: 'Voir les guides outils',
          buttonLink: '/outils-seo',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'ahrefs',
    title: 'Ahrefs : Guide Complet de l\'Outil SEO Expert en Backlinks',
    metaTitle: 'Ahrefs Guide - Tutorial 2026',
    metaDescription: 'Maîtrisez Ahrefs : analyse de backlinks, recherche de mots-clés, audit de site. Guide complet de l\'outil SEO référence pour le netlinking.',
    keyword: 'ahrefs guide',
    secondaryKeywords: ['ahrefs tutorial', 'comment utiliser ahrefs', 'ahrefs backlinks'],
    intent: 'info',
    cluster: 'outils-seo',
    excerpt: 'Ahrefs est la référence pour l\'analyse de backlinks. Découvrez comment exploiter cet outil puissant pour votre stratégie SEO.',
    tableOfContents: true,
    readingTime: 32,
    difficulty: 'intermediaire',
    lastUpdated: '2026-01-22',
    author: 'thomas-dupont',
    relatedSlugs: ['semrush-guide', 'google-search-console', 'outils-gratuits'],
    faq: [
      {
        question: 'Ahrefs ou Semrush, lequel choisir ?',
        answer: 'Ahrefs excelle dans l\'analyse de backlinks avec la plus grande base de données. Semrush est plus complet (SEA, social, contenu). Pour le netlinking pur, Ahrefs est supérieur.',
      },
      {
        question: 'Ahrefs propose-t-il un essai gratuit ?',
        answer: 'Ahrefs propose Webmaster Tools gratuitement pour analyser votre propre site. Pour l\'accès complet (analyse concurrents), les plans commencent à 99€/mois sans essai gratuit.',
      },
      {
        question: 'Le Domain Rating (DR) est-il fiable ?',
        answer: 'Le DR est une métrique propriétaire basée uniquement sur les backlinks, pas sur le contenu ou le trafic. C\'est un bon indicateur relatif mais ne doit pas être le seul critère.',
      },
      {
        question: 'Comment Ahrefs détecte-t-il autant de backlinks ?',
        answer: 'Ahrefs possède l\'un des plus grands crawlers web (après Google et Bing). Il crawle constamment le web et met à jour sa base de données quotidiennement.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Ahrefs est considéré par de nombreux professionnels comme l\'outil de référence pour l\'analyse de backlinks et la recherche de mots-clés. Sa base de données massive (plus de 30 trillion de liens) et son crawler ultra-rapide en font un incontournable pour toute stratégie de netlinking sérieuse.',
      },
      {
        type: 'text',
        content: 'Ce guide complet vous apprendra à maîtriser tous les modules d\'Ahrefs : Site Explorer pour l\'analyse concurrentielle, Keywords Explorer pour la recherche de mots-clés, Content Explorer pour l\'inspiration, et Site Audit pour les diagnostics techniques.',
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Ce que vous allez apprendre',
          content: '• L\'analyse complète d\'un profil de backlinks avec Site Explorer\n• La recherche de mots-clés optimale avec Keywords Explorer\n• Comment trouver du contenu performant avec Content Explorer\n• L\'utilisation du Site Audit pour les diagnostics techniques\n• Les stratégies de link building basées sur Ahrefs\n• Les métriques propriétaires (DR, UR, KD) et leur interprétation',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Pourquoi Ahrefs se distingue',
      },
      {
        type: 'text',
        content: 'Dans l\'écosystème des outils SEO, Ahrefs se distingue par la taille et la fraîcheur de son index de backlinks. Là où d\'autres outils peuvent manquer des liens, Ahrefs en capture généralement davantage.',
      },
      {
        type: 'table',
        content: {
          headers: ['Caractéristique', 'Ahrefs', 'Semrush', 'Moz'],
          rows: [
            ['Index de liens', '30+ trillion', '43 trillion', '40 trillion'],
            ['Fréquence crawl', 'Continue', 'Quotidienne', 'Hebdomadaire'],
            ['Fraîcheur données', 'Index live', '24-48h', '1 semaine'],
            ['Métriques liens', 'DR, UR', 'Authority Score', 'DA, PA'],
            ['Force principale', 'Backlinks', 'All-in-one', 'Communauté'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Site Explorer : le cœur d\'Ahrefs',
      },
      {
        type: 'text',
        content: 'Site Explorer est l\'outil phare d\'Ahrefs. Il permet d\'analyser n\'importe quel domaine : le vôtre ou celui d\'un concurrent. C\'est ici que vous passerez la majorité de votre temps.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Vue d\'ensemble (Overview)',
      },
      {
        type: 'text',
        content: 'La vue d\'ensemble présente un résumé complet du domaine : Domain Rating, trafic organique estimé, nombre de mots-clés positionnés, nombre de domaines référents.',
      },
      {
        type: 'list',
        content: [
          'Ahrefs Rank : classement global du domaine parmi tous les sites web',
          'Domain Rating (DR) : force du profil de backlinks (0-100)',
          'Backlinks : nombre total de liens entrants',
          'Referring domains : nombre de domaines uniques qui vous lient',
          'Organic keywords : mots-clés sur lesquels le site est positionné',
          'Organic traffic : estimation du trafic mensuel depuis Google',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Backlinks',
      },
      {
        type: 'text',
        content: 'L\'onglet Backlinks est la fonctionnalité la plus puissante d\'Ahrefs. Vous voyez chaque lien pointant vers le domaine avec des détails précis.',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          filename: 'analyse-backlinks-ahrefs.txt',
          code: `ANALYSE BACKLINKS AVEC AHREFS

INFORMATIONS PAR LIEN :
• URL source (page qui fait le lien)
• URL cible (votre page liée)
• Ancre utilisée
• DR de la page source
• Type de lien (dofollow, nofollow, UGC, sponsored)
• Date de découverte
• Date de dernière vérification

FILTRES UTILES :
• One link per domain : voir domaines uniques
• Dofollow only : liens qui passent du "jus"
• New : backlinks acquis récemment
• Lost : backlinks perdus récemment
• Broken : liens vers pages 404

MÉTRIQUES CLÉS :
• Referring domains vs total backlinks
• Ratio dofollow/nofollow
• Distribution des ancres
• Évolution dans le temps`,
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Organic keywords',
      },
      {
        type: 'text',
        content: 'Cet onglet révèle tous les mots-clés sur lesquels un domaine est positionné dans Google. Pour un concurrent, c\'est une mine d\'or d\'informations.',
      },
      {
        type: 'table',
        content: {
          headers: ['Donnée', 'Ce qu\'elle révèle', 'Action à prendre'],
          rows: [
            ['Keywords (croissant)', 'Mots-clés en perte de position', 'Opportunités si concurrent faiblit'],
            ['Volume (décroissant)', 'Mots-clés à fort trafic', 'Cibles prioritaires'],
            ['KD (croissant)', 'Mots-clés faciles', 'Quick wins potentiels'],
            ['Traffic %', 'Pages qui génèrent le plus de trafic', 'Contenus à étudier'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Content Gap',
      },
      {
        type: 'text',
        content: 'L\'outil Content Gap compare votre domaine à plusieurs concurrents pour trouver les mots-clés qu\'ils ciblent et pas vous. C\'est l\'équivalent du Keyword Gap de Semrush.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Keywords Explorer : recherche de mots-clés',
      },
      {
        type: 'text',
        content: 'Keywords Explorer est l\'outil de recherche de mots-clés d\'Ahrefs. Bien que Semrush ait une base légèrement plus large, Ahrefs offre des métriques uniques très utiles.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Métriques exclusives Ahrefs',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Description', 'Pourquoi c\'est utile'],
          rows: [
            ['Keyword Difficulty (KD)', 'Basé sur les backlinks des top 10', 'Plus réaliste que d\'autres outils'],
            ['Traffic Potential', 'Trafic total de la page top 1 (tous mots-clés)', 'Vision au-delà du mot-clé unique'],
            ['Parent Topic', 'Sujet principal qui génère le plus de trafic', 'Évite la fragmentation de contenu'],
            ['CPC', 'Coût par clic estimé', 'Indicateur d\'intention commerciale'],
            ['Clicks', 'Clics estimés (différent du volume)', 'Comptabilise les "no-click" searches'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'SERP Overview',
      },
      {
        type: 'text',
        content: 'Pour chaque mot-clé, Ahrefs affiche une analyse détaillée des 10 premiers résultats : DR de chaque page, nombre de backlinks, trafic estimé, et évolution des positions.',
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Astuce d\'analyse SERP',
          content: 'Si les pages du top 10 ont peu de backlinks (< 20) et un DR modéré (< 50), le mot-clé est accessible même sans forte autorité. Concentrez-vous sur la qualité du contenu.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Content Explorer : trouver du contenu performant',
      },
      {
        type: 'text',
        content: 'Content Explorer permet de rechercher du contenu sur n\'importe quel sujet et de l\'analyser selon différentes métriques : trafic organique, partages sociaux, domaines référents.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas d\'utilisation',
      },
      {
        type: 'list',
        content: [
          'Trouver des opportunités de link building (contenu avec beaucoup de backlinks)',
          'Identifier les formats qui fonctionnent (listes, guides, études)',
          'Repérer les sujets tendance dans votre niche',
          'Analyser la stratégie de contenu des concurrents',
          'Trouver des sites pour le guest posting',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Filtres puissants',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          filename: 'filtres-content-explorer.txt',
          code: `FILTRES CONTENT EXPLORER

POUR LINK BUILDING :
• Referring domains > 50
• Organic traffic > 1000
• Published : derniers 12 mois
→ Contenu qui attire naturellement des liens

POUR INSPIRATION CONTENU :
• Organic traffic > 5000
• Word count > 2000
• Language : français
→ Guides complets qui performent

POUR GUEST POSTING :
• Site : [domaine cible]
• "guest post" OR "contribuer" OR "article invité"
→ Sites qui acceptent des contributions

POUR BROKEN LINK BUILDING :
• Broken outgoing links > 5
• DR > 30
→ Pages avec liens cassés à signaler`,
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Site Audit : diagnostic technique',
      },
      {
        type: 'text',
        content: 'L\'audit de site d\'Ahrefs crawle votre site et identifie les problèmes techniques. Bien que moins détaillé que Screaming Frog pour certains aspects, il offre l\'avantage d\'être intégré et automatisable.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Catégories de problèmes',
      },
      {
        type: 'table',
        content: {
          headers: ['Catégorie', 'Exemples', 'Impact'],
          rows: [
            ['Performance', 'Pages lentes, ressources lourdes', 'UX et Core Web Vitals'],
            ['HTML tags', 'Titles manquants, H1 dupliqués', 'SEO on-page'],
            ['Social tags', 'OG tags manquants', 'Partages réseaux sociaux'],
            ['Content quality', 'Contenu dupliqué, thin content', 'Qualité perçue par Google'],
            ['Localization', 'Hreflang mal configurés', 'SEO international'],
            ['Links', 'Liens cassés, redirections', 'Crawlabilité'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Comprendre les métriques Ahrefs',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Domain Rating (DR)',
      },
      {
        type: 'text',
        content: 'Le DR mesure la force relative du profil de backlinks d\'un domaine sur une échelle de 0 à 100. C\'est une métrique logarithmique : passer de 0 à 20 est beaucoup plus facile que de 70 à 90.',
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Attention au DR',
          content: 'Le DR ne mesure que les backlinks, pas la qualité du contenu ni le trafic réel. Un site avec un DR de 80 peut avoir moins de trafic qu\'un site avec un DR de 30 si son contenu n\'est pas pertinent.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'URL Rating (UR)',
      },
      {
        type: 'text',
        content: 'L\'UR mesure la force d\'une page spécifique (pas du domaine entier). Il prend en compte les backlinks directs vers cette page et le maillage interne depuis d\'autres pages du site.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Keyword Difficulty (KD)',
      },
      {
        type: 'text',
        content: 'Le KD d\'Ahrefs est basé sur le nombre de backlinks des pages actuellement dans le top 10. Un KD de 30 signifie qu\'il faut environ 30 domaines référents pour atteindre le top 10 (estimation).',
      },
      {
        type: 'table',
        content: {
          headers: ['KD', 'Difficulté', 'Profil requis'],
          rows: [
            ['0-10', 'Facile', 'Nouveau site avec bon contenu'],
            ['11-30', 'Modérée', 'Site établi, quelques backlinks'],
            ['31-50', 'Difficile', 'Site avec autorité, campagne de liens'],
            ['51-70', 'Très difficile', 'Site autoritaire, stratégie long terme'],
            ['71-100', 'Extrêmement difficile', 'Marques établies uniquement'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Études de cas',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étude de cas 1 : Stratégie de link building basée sur Ahrefs',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Une startup SaaS dans l\'analytique veut améliorer son autorité de domaine pour ranker sur des mots-clés concurrentiels. DR de départ : 18. Objectif : atteindre DR 40 en 12 mois.',
        },
      },
      {
        type: 'text',
        content: 'Méthodologie avec Ahrefs : 1) Analyse des backlinks des 5 concurrents directs avec Site Explorer. 2) Identification des sources de liens communes (qui lient plusieurs concurrents mais pas nous). 3) Création de contenu "linkable" (études, outils gratuits) basé sur Content Explorer.',
      },
      {
        type: 'text',
        content: 'Actions menées : Publication de 2 études de données originales par trimestre. Outreach ciblé vers les 50 sites identifiés comme sources communes. Création d\'un outil gratuit lié au produit (calculateur ROI).',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Départ', '6 mois', '12 mois'],
          rows: [
            ['Domain Rating', '18', '31', '44'],
            ['Referring Domains', '89', '245', '512'],
            ['Organic Keywords', '1 200', '3 800', '8 400'],
            ['Organic Traffic', '2 100/mois', '8 600/mois', '24 000/mois'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étude de cas 2 : Analyse concurrentielle e-commerce',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Une boutique de compléments alimentaires veut comprendre pourquoi ses concurrents rankent mieux. Objectif : identifier les faiblesses et opportunités.',
        },
      },
      {
        type: 'text',
        content: 'Analyse avec Ahrefs Site Explorer : Comparaison de 5 concurrents sur leur profil de backlinks, leurs mots-clés organiques, et leurs pages les plus performantes.',
      },
      {
        type: 'text',
        content: 'Découvertes clés : Les concurrents avaient beaucoup de liens depuis des blogs fitness et nutrition (partenariats). Leurs pages catégories étaient optimisées avec du contenu éducatif. Ils avaient tous un blog actif générant des backlinks naturels.',
      },
      {
        type: 'text',
        content: 'Actions correctives : Lancement d\'un programme d\'affiliation avec des blogueurs fitness. Enrichissement des pages catégories avec guides d\'achat. Création d\'un blog avec articles scientifiques vulgarisés.',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant analyse', 'Après 8 mois', 'Évolution'],
          rows: [
            ['Referring domains', '34', '156', '+359%'],
            ['Pages catégories top 10', '2/15', '9/15', '+350%'],
            ['Trafic organique', '3 200/mois', '14 800/mois', '+363%'],
            ['CA organique', '8 500€/mois', '38 000€/mois', '+347%'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étude de cas 3 : Récupération de backlinks perdus',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un média en ligne constate une baisse de trafic et de DR. L\'analyse Ahrefs révèle une perte significative de backlinks sur 6 mois. Mission : comprendre et récupérer.',
        },
      },
      {
        type: 'text',
        content: 'Diagnostic avec Ahrefs : Export des backlinks perdus sur les 6 derniers mois via Site Explorer > Backlinks > Lost. 340 domaines référents perdus identifiés.',
      },
      {
        type: 'text',
        content: 'Causes identifiées : 45% des liens perdus → pages sources supprimées. 30% → liens retirés volontairement (nettoyage éditorial). 15% → changements d\'URL sans redirections. 10% → sites sources hors ligne.',
      },
      {
        type: 'text',
        content: 'Actions de récupération : Contact des sites pour les liens retirés (offre de contenu mis à jour). Mise en place des redirections manquantes. Identification de pages alternatives pour les sources supprimées.',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après récupération', 'Résultat'],
          rows: [
            ['Backlinks perdus ciblés', '340', 'N/A', 'N/A'],
            ['Backlinks récupérés', '0', '89', '26% de récupération'],
            ['Nouveaux liens (prospection)', '0', '52', 'Compensation'],
            ['DR', '54', '58', '+4 points'],
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
        content: 'Exercice 1 : Analyse complète d\'un concurrent',
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'À vous de jouer',
          content: 'Réalisez une analyse approfondie d\'un concurrent direct en utilisant Site Explorer.',
        },
      },
      {
        type: 'code',
        content: {
          language: 'text',
          filename: 'exercice-analyse-concurrent.txt',
          code: `ANALYSE CONCURRENT AVEC AHREFS

1. VUE D'ENSEMBLE
   □ Entrer le domaine concurrent dans Site Explorer
   □ Noter : DR = ___, Referring domains = ___
   □ Noter : Organic traffic = ___, Organic keywords = ___

2. PROFIL DE BACKLINKS
   □ Aller dans Backlinks > vue "One link per domain"
   □ Lister les 10 domaines les plus autoritaires
   □ Analyser les types de liens (guest post, mention, etc.)

3. MOTS-CLÉS ORGANIQUES
   □ Aller dans Organic keywords
   □ Filtrer : Volume > 500
   □ Exporter les 50 premiers mots-clés
   □ Identifier ceux où vous n'êtes pas positionné

4. PAGES TOP
   □ Aller dans Top Pages
   □ Identifier les 5 pages avec le plus de trafic
   □ Analyser leur structure et contenu

5. CONTENT GAP
   □ Comparer avec votre domaine
   □ Filtrer : Volume > 100, Position 1-10
   □ Lister les opportunités

SYNTHÈSE : Actions prioritaires identifiées`,
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Recherche de mots-clés avec Keywords Explorer',
      },
      {
        type: 'text',
        content: 'Utilisez Keywords Explorer pour construire une liste de mots-clés cibles pour votre prochain contenu.',
      },
      {
        type: 'list',
        content: [
          'Choisissez un sujet principal de votre niche',
          'Entrez le mot-clé dans Keywords Explorer',
          'Notez le volume, KD, et Traffic Potential',
          'Explorez les "Parent Topic" suggérés',
          'Allez dans "Questions" pour les angles FAQ',
          'Analysez la SERP Overview des 5 meilleurs mots-clés',
          'Sélectionnez 10 mots-clés avec KD < 40 et volume > 200',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Trouver des opportunités de link building',
      },
      {
        type: 'text',
        content: 'Utilisez Content Explorer pour identifier des opportunités de création de liens.',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          filename: 'exercice-link-building.txt',
          code: `TROUVER OPPORTUNITÉS LINK BUILDING

MÉTHODE 1 : CONTENU "LINKABLE"
□ Content Explorer > votre thématique
□ Filtrer : Referring domains > 100
□ Analyser pourquoi ces contenus attirent des liens
□ Planifier un contenu similaire mais meilleur

MÉTHODE 2 : BROKEN LINK BUILDING
□ Site Explorer > concurrent
□ Best by Links > filtrer pages 404
□ Trouver des pages qui avaient beaucoup de liens
□ Créer du contenu de remplacement
□ Contacter les sites qui liaient la page 404

MÉTHODE 3 : MENTIONS SANS LIENS
□ Content Explorer > "votre marque"
□ Filtrer : pages qui vous mentionnent
□ Identifier celles sans lien vers vous
□ Contacter pour demander l'ajout du lien

PLAN D'ACTION :
→ 5 opportunités "linkable content" : _____
→ 5 opportunités broken link : _____
→ 5 mentions sans liens : _____`,
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Audit de votre profil de liens',
      },
      {
        type: 'text',
        content: 'Analysez votre propre profil de backlinks pour identifier forces et faiblesses.',
      },
      {
        type: 'list',
        content: [
          'Entrez votre domaine dans Site Explorer',
          'Notez votre DR et nombre de referring domains',
          'Analysez la distribution des ancres (trop optimisé ?)',
          'Vérifiez le ratio dofollow/nofollow',
          'Identifiez vos 5 meilleurs liens (plus haute autorité)',
          'Identifiez les liens potentiellement toxiques',
          'Comparez avec 2 concurrents directs',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quiz : Testez vos connaissances',
      },
      {
        type: 'quiz',
        content: {
          title: 'Maîtrisez-vous Ahrefs ?',
          questions: [
            {
              question: 'Quelle est la taille approximative de l\'index de backlinks d\'Ahrefs ?',
              options: [
                '1 trillion de liens',
                '10 trillion de liens',
                '30+ trillion de liens',
                '100 trillion de liens',
              ],
              correctIndex: 2,
              explanation: 'Ahrefs possède l\'une des plus grandes bases de données de backlinks avec plus de 30 trillion de liens indexés, crawlés en permanence.',
            },
            {
              question: 'Que mesure le Domain Rating (DR) d\'Ahrefs ?',
              options: [
                'La qualité du contenu du site',
                'Le trafic organique du site',
                'La force relative du profil de backlinks',
                'Le classement Google du site',
              ],
              correctIndex: 2,
              explanation: 'Le DR mesure uniquement la force relative du profil de backlinks d\'un domaine sur une échelle de 0 à 100. Il ne prend pas en compte le contenu ni le trafic.',
            },
            {
              question: 'Que signifie un Keyword Difficulty (KD) de 35 dans Ahrefs ?',
              options: [
                'Le mot-clé a 35 recherches par mois',
                'Il faut environ 35 domaines référents pour atteindre le top 10',
                'Le mot-clé coûte 35€ en CPC',
                'Il y a 35 concurrents sur ce mot-clé',
              ],
              correctIndex: 1,
              explanation: 'Le KD d\'Ahrefs est basé sur le nombre de backlinks des pages dans le top 10. Un KD de 35 estime qu\'il faut environ 35 domaines référents pour espérer atteindre le top 10.',
            },
            {
              question: 'Quel outil Ahrefs est spécialement conçu pour trouver du contenu performant ?',
              options: [
                'Site Explorer',
                'Keywords Explorer',
                'Content Explorer',
                'Site Audit',
              ],
              correctIndex: 2,
              explanation: 'Content Explorer permet de rechercher du contenu sur n\'importe quel sujet et de l\'analyser selon le trafic, les partages sociaux et les backlinks acquis.',
            },
            {
              question: 'Quelle est la différence entre DR et UR ?',
              options: [
                'DR est pour les domaines, UR pour les utilisateurs',
                'DR mesure le domaine entier, UR mesure une page spécifique',
                'DR est plus précis que UR',
                'Il n\'y a pas de différence',
              ],
              correctIndex: 1,
              explanation: 'Domain Rating (DR) mesure la force du profil de backlinks de tout un domaine, tandis que URL Rating (UR) mesure la force d\'une page spécifique.',
            },
            {
              question: 'Que permet de faire l\'outil Content Gap d\'Ahrefs ?',
              options: [
                'Trouver les erreurs de contenu sur votre site',
                'Identifier les mots-clés où les concurrents rankent mais pas vous',
                'Mesurer la qualité de votre contenu',
                'Générer du contenu automatiquement',
              ],
              correctIndex: 1,
              explanation: 'Content Gap compare votre domaine à plusieurs concurrents pour identifier les mots-clés sur lesquels ils sont positionnés mais pas vous.',
            },
            {
              question: 'Quelle métrique Ahrefs unique montre le trafic total de la page #1 (tous mots-clés confondus) ?',
              options: [
                'Volume',
                'Clicks',
                'Traffic Potential',
                'Parent Topic',
              ],
              correctIndex: 2,
              explanation: 'Traffic Potential montre le trafic total que la page en position 1 reçoit de TOUS ses mots-clés, pas seulement celui recherché. Cela donne une vision plus réaliste du potentiel.',
            },
            {
              question: 'Que propose Ahrefs Webmaster Tools gratuitement ?',
              options: [
                'Analyse de n\'importe quel concurrent',
                'Analyse des backlinks et audit de votre propre site vérifié',
                'Accès complet à tous les outils',
                'Rien, Ahrefs est 100% payant',
              ],
              correctIndex: 1,
              explanation: 'Ahrefs Webmaster Tools est gratuit pour les propriétaires de sites vérifiés. Vous pouvez analyser vos backlinks et faire des audits de votre propre site uniquement.',
            },
            {
              question: 'Pour une stratégie de link building, quelle fonctionnalité de Site Explorer est la plus utile ?',
              options: [
                'Organic keywords',
                'Referring domains',
                'Top pages',
                'Toutes ces fonctionnalités',
              ],
              correctIndex: 3,
              explanation: 'Toutes ces fonctionnalités sont utiles pour le link building : Referring domains pour les sources de liens, Organic keywords pour les contenus performants, Top pages pour les pages qui attirent des liens.',
            },
            {
              question: 'Quel filtre de Site Explorer permet de voir les backlinks récemment perdus ?',
              options: [
                'Backlinks > New',
                'Backlinks > Lost',
                'Backlinks > Broken',
                'Backlinks > Dofollow',
              ],
              correctIndex: 1,
              explanation: 'Le filtre "Lost" dans la section Backlinks montre les liens qui pointaient vers votre site mais ne sont plus actifs, permettant des actions de récupération.',
            },
          ],
        },
      },
      {
        type: 'cta',
        content: {
          title: 'Complétez votre stack d\'outils',
          description: 'Découvrez les guides Semrush, Search Console et outils gratuits pour une stratégie complète.',
          buttonText: 'Voir tous les outils',
          buttonLink: '/outils-seo',
          variant: 'primary',
        },
      },
    ],
  },
];

export const clusterData: ClusterConfig = {
  slug: 'outils-seo',
  name: 'Outils SEO',
  description: 'Découvrez et maîtrisez les meilleurs outils SEO : Search Console, Semrush, Ahrefs et alternatives gratuites pour optimiser votre référencement.',
  metaTitle: 'Outils SEO | SEOtika 2026',
  metaDescription: 'Formation complète aux outils SEO : guides détaillés pour Search Console, Semrush et les meilleures alternatives gratuites.',
  pillarPage,
  childPages,
  icon: 'Wrench',
  color: 'cyan',
};

export default clusterData;
