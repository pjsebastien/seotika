import { ClusterConfig, Article } from '@/types';

const pillarPage: Article = {
  slug: 'index',
  title: 'Recherche de Mots-Clés : Guide Complet pour Trouver les Bons Keywords',
  metaTitle: 'Recherche de Mots-Clés SEO - Guide 2026',
  metaDescription: 'Apprenez à trouver les meilleurs mots-clés pour votre SEO. Méthodes, outils et stratégies pour identifier les keywords qui génèrent du trafic.',
  keyword: 'recherche de mots clés',
  secondaryKeywords: ['keyword research français', 'trouver mots clés', 'analyse mots clés'],
  intent: 'info',
  cluster: 'recherche-mots-cles',
  excerpt: 'La recherche de mots-clés est la fondation de toute stratégie SEO. Apprenez à identifier les termes que recherche votre audience et à construire une stratégie sémantique efficace.',
  tableOfContents: true,
  readingTime: 45,
  difficulty: 'debutant',
  lastUpdated: '2026-01-18',
  author: 'marie-lefevre',
  relatedSlugs: ['intention-de-recherche', 'mots-cles-longue-traine', 'cluster-thematique'],
  faq: [
    {
      question: 'Combien de mots-clés cibler par page ?',
      answer: 'Une page doit cibler un mot-clé principal et 2-5 mots-clés secondaires sémantiquement liés. Évitez de cibler des mots-clés trop différents sur une même page.',
    },
    {
      question: 'Les outils payants sont-ils indispensables ?',
      answer: 'Non. Google Search Console, Google Trends et le Keyword Planner gratuit suffisent pour débuter. Les outils payants apportent plus de données mais ne sont pas essentiels au départ.',
    },
    {
      question: 'À quelle fréquence revoir sa stratégie de mots-clés ?',
      answer: 'Révisez votre stratégie tous les 3-6 mois. Les tendances de recherche évoluent, et de nouvelles opportunités apparaissent régulièrement.',
    },
    {
      question: 'Comment savoir si un mot-clé est rentable ?',
      answer: 'Évaluez le potentiel de conversion : l\'intention est-elle commerciale ? Le CPC (coût par clic en Ads) est-il élevé ? Un CPC élevé indique que le mot-clé génère des conversions.',
    },
  ],
  content: [
    {
      type: 'text',
      content: 'Avant de créer du contenu ou d\'optimiser vos pages, vous devez savoir ce que recherchent vos clients potentiels. C\'est là qu\'intervient la recherche de mots-clés, étape fondamentale de toute stratégie SEO réussie.',
    },
    {
      type: 'text',
      content: 'Si vous débutez en SEO, assurez-vous d\'abord de bien comprendre les fondamentaux. Consultez notre guide "Apprendre le SEO" avant de vous lancer dans la recherche de mots-clés.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Qu\'est-ce que la recherche de mots-clés ?',
    },
    {
      type: 'text',
      content: 'La recherche de mots-clés (keyword research) consiste à identifier les termes et expressions que votre audience cible tape dans les moteurs de recherche. L\'objectif est de comprendre la demande pour créer du contenu qui y répond.',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Définition',
        content: 'Un mot-clé SEO est un terme ou une expression que les internautes utilisent dans les moteurs de recherche pour trouver de l\'information, un produit ou un service.',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Pourquoi la recherche de mots-clés est cruciale',
    },
    {
      type: 'text',
      content: 'La recherche de mots-clés n\'est pas une option, c\'est la première étape obligatoire. Sans elle, vous créez du contenu à l\'aveugle, sans savoir s\'il y a une demande.',
    },
    {
      type: 'list',
      content: [
        'Comprendre ce que cherche votre audience',
        'Créer du contenu pertinent qui répond à une demande réelle',
        'Prioriser vos efforts SEO sur les opportunités les plus rentables',
        'Structurer votre site de manière logique (voir notre guide sur les clusters thématiques)',
        'Éviter la cannibalisation (plusieurs pages ciblant le même mot-clé)',
        'Identifier des opportunités que vos concurrents ont négligées',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Les métriques clés d\'un mot-clé',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Volume de recherche',
    },
    {
      type: 'text',
      content: 'Le volume de recherche indique combien de fois un mot-clé est recherché par mois. Un volume élevé signifie plus de trafic potentiel, mais aussi généralement plus de concurrence. Pour plus de détails, consultez notre article dédié au volume et difficulté des mots-clés.',
    },
    {
      type: 'table',
      content: {
        headers: ['Volume mensuel', 'Classification', 'Opportunité'],
        rows: [
          ['0-100', 'Très faible', 'Niche ultra-spécifique, facile à ranker'],
          ['100-500', 'Faible', 'Longue traîne, bonne opportunité débutants'],
          ['500-2000', 'Moyen', 'Bon équilibre volume/compétition'],
          ['2000-10000', 'Élevé', 'Compétitif mais rentable si possible'],
          ['10000+', 'Très élevé', 'Généralement trop compétitif pour débuter'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Difficulté du mot-clé (KD)',
    },
    {
      type: 'text',
      content: 'La difficulté (Keyword Difficulty) estime la compétitivité d\'un mot-clé. Plus le score est élevé, plus il sera difficile de se positionner. Les débutants devraient cibler des KD faibles à moyens.',
    },
    {
      type: 'table',
      content: {
        headers: ['Score KD', 'Difficulté', 'Recommandation'],
        rows: [
          ['0-15', 'Très facile', 'Nouveau site, parfait pour débuter'],
          ['15-30', 'Facile', 'Site avec quelques mois d\'existence'],
          ['30-50', 'Modéré', 'Site établi avec autorité moyenne'],
          ['50-70', 'Difficile', 'Requiert autorité et bons backlinks'],
          ['70+', 'Très difficile', 'Réservé aux sites très autoritaires'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Intention de recherche',
    },
    {
      type: 'text',
      content: 'L\'intention de recherche (search intent) définit ce que l\'utilisateur veut vraiment : s\'informer, comparer, acheter... Comprendre l\'intention est aussi important que le volume. Approfondissez ce concept dans notre article dédié à l\'intention de recherche.',
    },
    {
      type: 'table',
      content: {
        headers: ['Intention', 'Exemple', 'Type de contenu'],
        rows: [
          ['Informationnelle', 'comment faire du seo', 'Guide, tutoriel, article'],
          ['Navigationnelle', 'semrush login', 'Page de connexion, homepage'],
          ['Commerciale', 'meilleur outil seo', 'Comparatif, avis, liste'],
          ['Transactionnelle', 'acheter semrush', 'Page produit, pricing'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Valeur commerciale (CPC)',
    },
    {
      type: 'text',
      content: 'Le CPC (Cost Per Click) indique combien les annonceurs paient pour un clic sur ce mot-clé. Un CPC élevé suggère que le mot-clé génère des conversions et a donc une valeur commerciale importante.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Le processus de recherche de mots-clés',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Étape 1 : Brainstorming initial',
    },
    {
      type: 'text',
      content: 'Commencez par lister tous les termes liés à votre activité. Pensez comme vos clients : quels problèmes cherchent-ils à résoudre ? Quelles questions se posent-ils ?',
    },
    {
      type: 'list',
      content: [
        'Listez vos produits/services principaux',
        'Notez les problèmes que vous résolvez',
        'Identifiez les questions fréquentes de vos clients',
        'Pensez aux termes de votre industrie',
        'Incluez les variations géographiques si pertinent',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Étape 2 : Expansion avec les outils',
    },
    {
      type: 'text',
      content: 'Utilisez des outils pour découvrir des variations et des questions associées à vos termes de départ.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Étape 3 : Analyse de la concurrence',
    },
    {
      type: 'text',
      content: 'Regardez sur quels mots-clés se positionnent vos concurrents. Des outils comme Semrush ou Ahrefs permettent d\'identifier leurs mots-clés organiques.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Étape 4 : Filtrage et priorisation',
    },
    {
      type: 'text',
      content: 'Filtrez vos mots-clés selon la pertinence, le volume, la difficulté et l\'intention. Priorisez ceux qui offrent le meilleur rapport opportunité/effort.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Étape 5 : Mapping et organisation',
    },
    {
      type: 'text',
      content: 'Assignez chaque mot-clé à une page existante ou planifiée. Créez une structure en clusters thématiques pour organiser votre contenu.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Les outils pour la recherche de mots-clés',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Outils gratuits',
    },
    {
      type: 'table',
      content: {
        headers: ['Outil', 'Points forts', 'Limites'],
        rows: [
          ['Google Keyword Planner', 'Données Google directes, gratuit', 'Nécessite compte Ads, volumes approximatifs'],
          ['Google Search Console', 'Mots-clés réels de votre site', 'Uniquement vos données existantes'],
          ['Google Trends', 'Tendances, comparaisons, saisonnalité', 'Pas de volumes exacts'],
          ['Ubersuggest (gratuit)', 'Interface simple, suggestions', '3 recherches/jour maximum'],
          ['AnswerThePublic', 'Questions des internautes', 'Limité sans abonnement'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Outils payants',
    },
    {
      type: 'table',
      content: {
        headers: ['Outil', 'Points forts', 'Prix mensuel'],
        rows: [
          ['Semrush', 'Très complet, analyse concurrence', 'À partir de 120$/mois'],
          ['Ahrefs', 'Base de données riche, backlinks', 'À partir de 99$/mois'],
          ['Moz Pro', 'Interface simple, bon pour débutants', 'À partir de 99$/mois'],
          ['SE Ranking', 'Abordable, fonctionnalités complètes', 'À partir de 39$/mois'],
          ['Mangools (KWFinder)', 'Spécialisé mots-clés, simple', 'À partir de 29$/mois'],
        ],
      },
    },
    {
      type: 'infobox',
      content: {
        type: 'tip',
        title: 'Conseil',
        content: 'Commencez avec les outils gratuits. Passez aux outils payants quand vous aurez validé votre stratégie et que vous aurez besoin de données plus précises.',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Les mots-clés longue traîne',
    },
    {
      type: 'text',
      content: 'Les mots-clés longue traîne sont des expressions de 3+ mots, moins recherchées mais plus spécifiques et moins concurrentielles. Ils sont essentiels pour les sites qui débutent.',
    },
    {
      type: 'table',
      content: {
        headers: ['Mot-clé court', 'Longue traîne', 'Avantage'],
        rows: [
          ['SEO', 'comment faire du SEO pour débutant', 'KD faible, intention claire'],
          ['chaussures', 'chaussures running femme pronateur', 'Très qualifié, prêt à acheter'],
          ['formation', 'formation SEO en ligne gratuite', 'Public ciblé, moins de concurrence'],
        ],
      },
    },
    {
      type: 'text',
      content: 'Découvrez toutes les stratégies dans notre article complet sur les mots-clés longue traîne.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Les erreurs à éviter',
    },
    {
      type: 'list',
      content: [
        'Cibler uniquement des mots-clés à fort volume (trop concurrentiels)',
        'Ignorer l\'intention de recherche',
        'Créer plusieurs pages pour le même mot-clé (cannibalisation)',
        'Ne pas mettre à jour sa recherche régulièrement',
        'Oublier les mots-clés de longue traîne',
        'Se fier à un seul outil pour les volumes',
        'Négliger l\'analyse de la SERP avant de se lancer',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: '📚 SECTION PREMIUM : Études de cas détaillées',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Apprendre par l\'exemple',
        content: 'Ces études de cas vous montrent comment appliquer concrètement la recherche de mots-clés dans différents contextes.',
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Cas pratique 1 : Lancer un blog voyage de zéro',
    },
    {
      type: 'text',
      content: 'Situation : Sophie veut lancer un blog voyage. Elle a 0€ de budget pour les outils et doit trouver ses premiers mots-clés.',
    },
    {
      type: 'heading',
      level: 4,
      content: 'Étape 1 : Définir la niche',
    },
    {
      type: 'text',
      content: 'Plutôt que "voyage" (trop large), Sophie choisit "voyage en van aménagé en France" comme niche.',
    },
    {
      type: 'heading',
      level: 4,
      content: 'Étape 2 : Brainstorming initial',
    },
    {
      type: 'list',
      content: [
        'Termes de départ : van aménagé, voyage en van, road trip France, camping car',
        'Questions fréquentes : comment aménager un van, quel van choisir, budget van aménagé',
        'Destinations : route des vins, côte atlantique, Provence en van',
      ],
    },
    {
      type: 'heading',
      level: 4,
      content: 'Étape 3 : Expansion avec outils gratuits',
    },
    {
      type: 'text',
      content: 'En utilisant Google Suggest, AnswerThePublic et les "Autres questions" de Google, Sophie découvre 150 mots-clés potentiels.',
    },
    {
      type: 'heading',
      level: 4,
      content: 'Étape 4 : Filtrage avec Ubersuggest (gratuit)',
    },
    {
      type: 'table',
      content: {
        headers: ['Mot-clé découvert', 'Volume', 'KD', 'Décision'],
        rows: [
          ['van aménagé', '14 800', '58', 'Trop difficile pour l\'instant'],
          ['comment aménager un van', '4 400', '42', 'Moyen terme'],
          ['budget aménagement van', '720', '28', '✅ Premier article'],
          ['isolation van aménagé', '880', '22', '✅ Premier article'],
          ['itinéraire road trip provence van', '320', '15', '✅ Premier article'],
          ['quel van choisir pour aménager', '480', '18', '✅ Premier article'],
        ],
      },
    },
    {
      type: 'heading',
      level: 4,
      content: 'Résultat : Plan de contenu',
    },
    {
      type: 'list',
      content: [
        '10 articles longue traîne (KD < 25) pour les 3 premiers mois',
        '5 articles moyen terme (KD 25-40) pour les mois 4-6',
        '1 page pilier "Guide van aménagé" pour lier tous les articles',
        'Objectif : 5 000 visiteurs/mois à 12 mois',
      ],
    },
    {
      type: 'infobox',
      content: {
        type: 'success',
        title: 'Résultat à 12 mois',
        content: 'Sophie a atteint 7 200 visiteurs/mois en publiant 40 articles ciblés. Le mot-clé "van aménagé" (KD 58) a naturellement commencé à ranker grâce à l\'autorité accumulée.',
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Cas pratique 2 : E-commerce - Trouver des mots-clés qui convertissent',
    },
    {
      type: 'text',
      content: 'Situation : Une boutique en ligne de matériel de yoga veut identifier les mots-clés les plus rentables.',
    },
    {
      type: 'heading',
      level: 4,
      content: 'Analyse des intentions par catégorie de produits',
    },
    {
      type: 'table',
      content: {
        headers: ['Produit', 'Mots-clés info (blog)', 'Mots-clés transactionnels (pages produit)'],
        rows: [
          ['Tapis yoga', 'comment choisir tapis yoga, entretenir tapis yoga', 'acheter tapis yoga, tapis yoga antidérapant'],
          ['Blocs yoga', 'à quoi sert bloc yoga, exercices bloc yoga', 'bloc yoga liège, set blocs yoga'],
          ['Vêtements', 'tenue yoga débutant, vêtements yoga hiver', 'legging yoga femme, brassière yoga'],
        ],
      },
    },
    {
      type: 'heading',
      level: 4,
      content: 'Stratégie mise en place',
    },
    {
      type: 'list',
      content: [
        'Chaque catégorie produit optimisée pour 1 mot-clé transactionnel principal',
        'Chaque fiche produit optimisée pour le nom produit + caractéristiques',
        'Blog créé avec 3 articles par catégorie (intention info)',
        'Maillage interne : article info → page catégorie → fiche produit',
      ],
    },
    {
      type: 'heading',
      level: 4,
      content: 'Analyse des CPC pour prioriser',
    },
    {
      type: 'table',
      content: {
        headers: ['Mot-clé', 'Volume', 'CPC', 'Priorité'],
        rows: [
          ['tapis yoga', '6 600', '0,45€', 'Moyenne (volume OK mais CPC faible)'],
          ['tapis yoga antidérapant', '1 300', '0,82€', 'Haute (CPC indique intention achat)'],
          ['legging yoga femme', '1 600', '1,20€', 'Très haute (meilleur CPC)'],
          ['bloc yoga', '2 400', '0,35€', 'Moyenne'],
        ],
      },
    },
    {
      type: 'heading',
      level: 4,
      content: 'Résultats à 8 mois',
    },
    {
      type: 'list',
      content: [
        'Trafic organique : +180%',
        'CA via SEO : 42 000€/mois (vs 15 000€ avant)',
        'Meilleure conversion sur mots-clés à CPC élevé',
        'Réduction budget Google Ads de 40%',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Cas pratique 3 : Site B2B - Mots-clés à forte valeur',
    },
    {
      type: 'text',
      content: 'Situation : Une agence de développement web veut générer des leads qualifiés via le SEO.',
    },
    {
      type: 'heading',
      level: 4,
      content: 'Identification des mots-clés à forte valeur commerciale',
    },
    {
      type: 'table',
      content: {
        headers: ['Mot-clé', 'Volume', 'CPC', 'Valeur client potentiel'],
        rows: [
          ['agence développement web', '2 400', '8,50€', '5 000-50 000€'],
          ['création site e-commerce', '1 900', '12,30€', '8 000-30 000€'],
          ['développeur React freelance', '480', '4,20€', '300-800€/jour'],
          ['refonte site web prix', '720', '6,80€', '3 000-20 000€'],
        ],
      },
    },
    {
      type: 'heading',
      level: 4,
      content: 'Stratégie de contenu B2B',
    },
    {
      type: 'list',
      content: [
        'Pages services : optimisées pour mots-clés transactionnels',
        'Études de cas : "refonte site e-commerce +300% conversions"',
        'Guides techniques : attirer développeurs et CTOs (prescripteurs)',
        'Comparatifs : "WordPress vs Shopify pour e-commerce"',
      ],
    },
    {
      type: 'heading',
      level: 4,
      content: 'Résultats à 12 mois',
    },
    {
      type: 'list',
      content: [
        'Leads qualifiés : 25/mois (vs 5 avant)',
        'Panier moyen des leads SEO : 18 000€ (vs 12 000€ pour Ads)',
        'ROI SEO année 1 : 450%',
        'Position 3 sur "agence développement web Paris"',
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
      content: 'Exercice 1 : Brainstorming structuré',
    },
    {
      type: 'text',
      content: 'Complétez ce tableau pour votre activité :',
    },
    {
      type: 'table',
      content: {
        headers: ['Catégorie', 'Vos termes'],
        rows: [
          ['Votre produit/service principal', '________________'],
          ['3 problèmes que vous résolvez', '1. _______ 2. _______ 3. _______'],
          ['5 questions que posent vos clients', '________________'],
          ['3 termes techniques de votre industrie', '________________'],
          ['Votre zone géographique (si pertinent)', '________________'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 2 : Expansion avec Google',
    },
    {
      type: 'text',
      content: 'Prenez votre terme principal et complétez :',
    },
    {
      type: 'list',
      content: [
        'Terme principal : ________________',
        '',
        'Google Suggest (5 suggestions automatiques) :',
        '1. ________________',
        '2. ________________',
        '3. ________________',
        '4. ________________',
        '5. ________________',
        '',
        'Autres questions posées (PAA) :',
        '1. ________________',
        '2. ________________',
        '3. ________________',
        '',
        'Recherches associées (bas de page) :',
        '1. ________________',
        '2. ________________',
        '3. ________________',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 3 : Analyse de mots-clés',
    },
    {
      type: 'text',
      content: 'Utilisez Ubersuggest (gratuit, 3 recherches/jour) pour analyser 5 mots-clés :',
    },
    {
      type: 'table',
      content: {
        headers: ['Mot-clé', 'Volume', 'KD', 'CPC', 'Atteignable ?'],
        rows: [
          ['________________', '____', '____', '____€', 'Oui/Non'],
          ['________________', '____', '____', '____€', 'Oui/Non'],
          ['________________', '____', '____', '____€', 'Oui/Non'],
          ['________________', '____', '____', '____€', 'Oui/Non'],
          ['________________', '____', '____', '____€', 'Oui/Non'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 4 : Créer votre premier cluster',
    },
    {
      type: 'text',
      content: 'Organisez vos mots-clés en cluster thématique :',
    },
    {
      type: 'list',
      content: [
        'THÈME CENTRAL : ________________',
        '',
        'Page pilier (mot-clé principal, volume élevé) :',
        '  → Mot-clé : ________________ (volume : ____, KD : ____)',
        '',
        'Articles satellites (5 sous-sujets) :',
        '  1. ________________ (volume : ____, KD : ____)',
        '  2. ________________ (volume : ____, KD : ____)',
        '  3. ________________ (volume : ____, KD : ____)',
        '  4. ________________ (volume : ____, KD : ____)',
        '  5. ________________ (volume : ____, KD : ____)',
        '',
        'Maillage prévu :',
        '  - Chaque satellite → lien vers la page pilier',
        '  - Page pilier → lien vers chaque satellite',
      ],
    },
    {
      type: 'quiz',
      content: {
        title: 'Quiz : Recherche de mots-clés',
        questions: [
          {
            question: 'Qu\'est-ce que la recherche de mots-clés ?',
            options: ['Chercher des mots dans le dictionnaire', 'Identifier les termes que votre audience recherche', 'Optimiser les titres de page', 'Créer des backlinks'],
            correctIndex: 1,
            explanation: 'La recherche de mots-clés consiste à identifier les termes et expressions que votre audience cible tape dans les moteurs de recherche.',
          },
          {
            question: 'Que signifie KD en SEO ?',
            options: ['Keyword Data', 'Keyword Difficulty', 'Key Domain', 'Knowledge Database'],
            correctIndex: 1,
            explanation: 'KD = Keyword Difficulty. C\'est un score de 0 à 100 estimant la difficulté à se positionner sur un mot-clé.',
          },
          {
            question: 'Un mot-clé avec un volume de 50 000 recherches/mois est-il toujours le meilleur choix ?',
            options: ['Oui, plus de volume = mieux', 'Non, il faut aussi considérer la difficulté et l\'intention', 'Oui, si le CPC est bas', 'Non, il vaut mieux éviter les gros volumes'],
            correctIndex: 1,
            explanation: 'Un fort volume ne suffit pas. Il faut aussi évaluer la difficulté (KD), l\'intention de recherche et la pertinence pour votre activité.',
          },
          {
            question: 'Qu\'est-ce qu\'un mot-clé longue traîne ?',
            options: ['Un mot-clé très populaire', 'Une expression de 3+ mots, plus spécifique', 'Un mot-clé avec beaucoup de backlinks', 'Un mot-clé ancien'],
            correctIndex: 1,
            explanation: 'Un mot-clé longue traîne est une expression de 3 mots ou plus, généralement moins recherchée mais plus spécifique et moins concurrentielle.',
          },
          {
            question: 'Quel outil gratuit fournit les mots-clés réels de votre site ?',
            options: ['Google Keyword Planner', 'Google Search Console', 'Ubersuggest', 'AnswerThePublic'],
            correctIndex: 1,
            explanation: 'Google Search Console montre les requêtes réelles pour lesquelles votre site apparaît dans les résultats, avec les clics et impressions.',
          },
          {
            question: 'Qu\'est-ce que la cannibalisation de mots-clés ?',
            options: ['Quand Google pénalise vos mots-clés', 'Quand plusieurs de vos pages ciblent le même mot-clé', 'Quand un concurrent copie vos mots-clés', 'Quand vous utilisez trop de mots-clés'],
            correctIndex: 1,
            explanation: 'La cannibalisation se produit quand plusieurs pages de votre site ciblent le même mot-clé, se faisant concurrence et diluant vos chances de ranking.',
          },
          {
            question: 'Que mesure le CPC (Cost Per Click) ?',
            options: ['La difficulté du mot-clé', 'Le coût publicitaire par clic', 'Le nombre de clics organiques', 'La qualité du contenu'],
            correctIndex: 1,
            explanation: 'Le CPC est le coût que les annonceurs paient par clic en Google Ads. Un CPC élevé indique une forte valeur commerciale du mot-clé.',
          },
          {
            question: 'Quelle est la meilleure approche pour un site qui débute ?',
            options: ['Cibler les mots-clés à fort volume', 'Cibler les mots-clés longue traîne à faible KD', 'Attendre d\'avoir de l\'autorité', 'Copier les mots-clés des concurrents'],
            correctIndex: 1,
            explanation: 'Un site nouveau doit cibler des mots-clés longue traîne avec une faible difficulté (KD) pour construire son autorité progressivement.',
          },
          {
            question: 'À quelle fréquence revoir sa stratégie de mots-clés ?',
            options: ['Une fois par an', 'Tous les 3-6 mois', 'Chaque semaine', 'Jamais, une fois suffit'],
            correctIndex: 1,
            explanation: 'Révisez votre stratégie tous les 3-6 mois. Les tendances de recherche évoluent et de nouvelles opportunités apparaissent régulièrement.',
          },
          {
            question: 'Qu\'est-ce qu\'un cluster thématique ?',
            options: ['Un groupe de backlinks', 'Un groupe de contenus interconnectés autour d\'un sujet', 'Un type de balise HTML', 'Un outil SEO'],
            correctIndex: 1,
            explanation: 'Un cluster thématique est un groupe de contenus (page pilier + articles satellites) interconnectés autour d\'un sujet central.',
          },
        ],
      },
    },
    {
      type: 'cta',
      content: {
        title: 'Approfondissez votre maîtrise',
        description: 'Découvrez les articles détaillés de ce module pour devenir expert en recherche de mots-clés.',
        buttonText: 'Voir l\'intention de recherche →',
        buttonLink: '/recherche-mots-cles/intention-de-recherche',
        variant: 'primary',
      },
    },
  ],
};

const childPages: Article[] = [
  {
    slug: 'intention-de-recherche',
    title: 'Intention de Recherche SEO : Comprendre ce que veulent vos visiteurs',
    metaTitle: 'Intention de Recherche SEO - Guide Complet 2026',
    metaDescription: 'Maîtrisez l\'intention de recherche (search intent) pour créer du contenu qui répond aux attentes de Google et de vos visiteurs.',
    keyword: 'intention de recherche seo',
    secondaryKeywords: ['search intent', 'intention utilisateur', 'type intention recherche'],
    intent: 'info',
    cluster: 'recherche-mots-cles',
    excerpt: 'L\'intention de recherche définit ce que l\'utilisateur veut réellement quand il tape une requête. Comprendre l\'intent est essentiel pour créer du contenu qui se positionne.',
    tableOfContents: true,
    readingTime: 30,
    difficulty: 'debutant',
    lastUpdated: '2026-01-15',
    author: 'marie-lefevre',
    relatedSlugs: ['mots-cles-longue-traine', 'cluster-thematique'],
    faq: [
      {
        question: 'Comment identifier l\'intention d\'un mot-clé ?',
        answer: 'Analysez les résultats Google pour ce mot-clé. Le type de contenu qui domine (articles, fiches produit, comparatifs) indique l\'intention que Google attribue à cette requête.',
      },
      {
        question: 'Peut-on cibler plusieurs intentions sur une page ?',
        answer: 'Non, une page doit répondre à une intention principale. Mélanger les intentions dilue votre pertinence et réduit vos chances de bien ranker.',
      },
      {
        question: 'L\'intention peut-elle changer avec le temps ?',
        answer: 'Oui. Google réévalue constamment l\'intention des requêtes. Un mot-clé autrefois informationnel peut devenir commercial si le comportement des utilisateurs change.',
      },
      {
        question: 'Que faire si la SERP est mixte (plusieurs intentions) ?',
        answer: 'Identifiez l\'intention dominante (60%+ des résultats) et alignez-vous dessus. Si vraiment mixte, vous avez plus de latitude mais restez cohérent.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Vous avez trouvé un mot-clé avec un bon volume. Mais savez-vous vraiment ce que les internautes attendent quand ils le tapent ? L\'intention de recherche est la clé pour créer du contenu qui se positionne.',
      },
      {
        type: 'text',
        content: 'Avant de continuer, assurez-vous de maîtriser les bases de la recherche de mots-clés en consultant notre guide complet.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Qu\'est-ce que l\'intention de recherche ?',
      },
      {
        type: 'text',
        content: 'L\'intention de recherche (search intent) désigne l\'objectif derrière une requête. Quand quelqu\'un tape quelque chose dans Google, il a un besoin précis : s\'informer, trouver un site, comparer des options, ou acheter.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Pourquoi c\'est crucial',
          content: 'Google juge votre contenu sur sa capacité à satisfaire l\'intention de l\'utilisateur. Un contenu parfaitement optimisé mais mal aligné sur l\'intention ne rankera jamais.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Les 4 types d\'intention',
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Intention informationnelle',
      },
      {
        type: 'text',
        content: 'L\'utilisateur cherche à apprendre ou comprendre quelque chose. C\'est le type d\'intention le plus courant (environ 80% des recherches).',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Caractéristiques',
      },
      {
        type: 'list',
        content: [
          'Commence souvent par "comment", "pourquoi", "qu\'est-ce que"',
          'L\'utilisateur ne cherche pas à acheter (pour l\'instant)',
          'Idéal pour attirer du trafic en haut de funnel',
          'Opportunité de démontrer votre expertise (E-E-A-T)',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Exemples',
      },
      {
        type: 'table',
        content: {
          headers: ['Mot-clé', 'Ce que l\'utilisateur veut', 'Format adapté'],
          rows: [
            ['comment faire du seo', 'Apprendre les bases', 'Guide complet, tutoriel'],
            ['qu\'est-ce qu\'un backlink', 'Comprendre un concept', 'Article définition'],
            ['pourquoi mon site est lent', 'Diagnostiquer un problème', 'Guide de dépannage'],
            ['différence seo sea', 'Comparer deux concepts', 'Article comparatif éducatif'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Intention navigationnelle',
      },
      {
        type: 'text',
        content: 'L\'utilisateur cherche un site ou une page spécifique. Il sait déjà où il veut aller.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Caractéristiques',
      },
      {
        type: 'list',
        content: [
          'Contient souvent un nom de marque',
          'L\'utilisateur pourrait taper l\'URL directement',
          'Difficile à cibler si ce n\'est pas votre marque',
          'Très forte intention vers un site précis',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Exemples',
      },
      {
        type: 'table',
        content: {
          headers: ['Mot-clé', 'Ce que l\'utilisateur veut', 'Opportunité SEO'],
          rows: [
            ['semrush login', 'Se connecter à Semrush', 'Aucune (sauf si vous êtes Semrush)'],
            ['google search console', 'Accéder à l\'outil', 'Faible'],
            ['facebook', 'Aller sur Facebook', 'Aucune'],
            ['[votre marque]', 'Trouver votre site', 'Défensive (votre site doit être #1)'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Intention commerciale',
      },
      {
        type: 'text',
        content: 'L\'utilisateur compare des options avant un achat potentiel. Il est en phase de considération.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Caractéristiques',
      },
      {
        type: 'list',
        content: [
          'Mots indicateurs : "meilleur", "comparatif", "vs", "avis"',
          'L\'utilisateur envisage un achat mais n\'est pas encore décidé',
          'Fort potentiel de conversion (influence la décision)',
          'Contenu doit être objectif et complet',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Exemples',
      },
      {
        type: 'table',
        content: {
          headers: ['Mot-clé', 'Ce que l\'utilisateur veut', 'Format adapté'],
          rows: [
            ['meilleur outil seo 2026', 'Comparer les options', 'Liste comparative'],
            ['ahrefs vs semrush', 'Choisir entre deux', 'Comparatif détaillé'],
            ['avis surfer seo', 'Valider un choix', 'Test/avis approfondi'],
            ['quel CMS choisir', 'Orienter sa décision', 'Guide de choix'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: '4. Intention transactionnelle',
      },
      {
        type: 'text',
        content: 'L\'utilisateur est prêt à acheter ou à effectuer une action. C\'est le bas du funnel.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Caractéristiques',
      },
      {
        type: 'list',
        content: [
          'Mots indicateurs : "acheter", "prix", "commander", "devis"',
          'L\'utilisateur a pris sa décision',
          'Taux de conversion très élevé',
          'Page produit, pricing, formulaire optimisés',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Exemples',
      },
      {
        type: 'table',
        content: {
          headers: ['Mot-clé', 'Ce que l\'utilisateur veut', 'Format adapté'],
          rows: [
            ['acheter semrush', 'Souscrire à l\'outil', 'Page pricing'],
            ['prix formation seo', 'Connaître le tarif', 'Page tarifs'],
            ['devis création site web', 'Obtenir un devis', 'Formulaire de contact'],
            ['abonnement ahrefs mensuel', 'S\'abonner', 'Page checkout'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Comment identifier l\'intention : la méthode SERP',
      },
      {
        type: 'text',
        content: 'La meilleure méthode : analysez la SERP. Google a déjà fait le travail pour vous en affichant les contenus qui correspondent le mieux à l\'intention.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étape par étape',
      },
      {
        type: 'list',
        content: [
          '1. Ouvrez une fenêtre de navigation privée',
          '2. Tapez votre mot-clé cible',
          '3. Analysez les 10 premiers résultats organiques',
          '4. Identifiez le type de contenu dominant',
          '5. Notez les formats utilisés (guides, listes, vidéos...)',
          '6. Vérifiez les "Autres questions posées" (PAA)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Grille de lecture rapide',
      },
      {
        type: 'table',
        content: {
          headers: ['Si vous voyez...', 'L\'intention est probablement...'],
          rows: [
            ['Articles de blog, guides "comment"', 'Informationnelle'],
            ['Pages produit, prix, boutons "acheter"', 'Transactionnelle'],
            ['Comparatifs, listes "top 10", avis', 'Commerciale'],
            ['Pages d\'accueil de marques, login', 'Navigationnelle'],
            ['Vidéos YouTube en masse', 'Informationnelle (format vidéo préféré)'],
            ['Featured snippet avec définition', 'Informationnelle (recherche de définition)'],
          ],
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Astuce pratique',
          content: 'Analysez aussi les SERP features (encadrés, vidéos, FAQ). Leur présence vous indique le format que Google préfère pour ce mot-clé.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Aligner contenu et intention',
      },
      {
        type: 'text',
        content: 'Une fois l\'intention identifiée, créez un contenu qui y répond parfaitement :',
      },
      {
        type: 'table',
        content: {
          headers: ['Intention', 'Format recommandé', 'Éléments clés'],
          rows: [
            ['Informationnelle', 'Guide, tutoriel, article', 'Complet, bien structuré, images, exemples'],
            ['Navigationnelle', 'Page d\'accueil/landing', 'Marque visible, navigation claire'],
            ['Commerciale', 'Comparatif, avis, liste', 'Objectif, critères, recommandations'],
            ['Transactionnelle', 'Page produit, pricing', 'Prix, CTA, garanties, facilité d\'achat'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: '📚 SECTION PREMIUM : Études de cas',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'L\'intention en pratique',
          content: 'Ces études de cas montrent comment l\'analyse de l\'intention a transformé les résultats SEO de sites réels.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas 1 : Mauvaise intention = échec total',
      },
      {
        type: 'text',
        content: 'Situation : Un site e-commerce de montres a créé un article "Rolex Submariner" de 2 000 mots pour ranker sur ce mot-clé à fort volume.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Le problème',
      },
      {
        type: 'list',
        content: [
          'L\'article parlait de l\'histoire de la montre, des caractéristiques techniques',
          'Après 6 mois : position 45, quasi aucun trafic',
          'Les pages en top 10 : pages produit Rolex, Chrono24, revendeurs agréés',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'L\'analyse',
      },
      {
        type: 'text',
        content: 'L\'intention de "Rolex Submariner" est transactionnelle (l\'utilisateur veut acheter ou voir le prix), pas informationnelle. Un article ne peut pas ranker sur une requête transactionnelle.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'La solution',
      },
      {
        type: 'list',
        content: [
          'Transformer l\'article en page produit si le site vend des Rolex',
          'OU cibler des mots-clés informationnels : "histoire Rolex Submariner", "comment reconnaître vraie Rolex"',
          'OU cibler du commercial : "meilleure montre plongée luxe"',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas 2 : Réalignement d\'intention = +340% de trafic',
      },
      {
        type: 'text',
        content: 'Situation : Un blog finance avait créé une page "meilleure banque en ligne" sous forme d\'article explicatif.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Avant : format inadapté',
      },
      {
        type: 'list',
        content: [
          'Article de 1 500 mots expliquant ce qu\'est une banque en ligne',
          'Pas de comparatif, pas de recommandations',
          'Position : 28 sur le mot-clé',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Analyse de la SERP',
      },
      {
        type: 'text',
        content: 'Les 10 premiers résultats étaient tous des comparatifs avec tableaux, notes, avantages/inconvénients. L\'intention était commerciale, pas informationnelle.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Après : réalignement',
      },
      {
        type: 'list',
        content: [
          'Réécriture complète en format comparatif',
          'Tableau comparatif des 10 meilleures banques',
          'Notes sur 10, avantages/inconvénients pour chaque',
          'Recommandation claire par profil (étudiant, cadre, etc.)',
        ],
      },
      {
        type: 'heading',
        level: 4,
        content: 'Résultat',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après (3 mois)'],
          rows: [
            ['Position', '28', '4'],
            ['Trafic mensuel', '120', '530'],
            ['Clics affiliés', '8/mois', '89/mois'],
            ['Revenus', '40€/mois', '890€/mois'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas 3 : Intent mixte - stratégie multi-page',
      },
      {
        type: 'text',
        content: 'Situation : Le mot-clé "formation SEO" montrait une SERP mixte (40% pages de vente, 30% comparatifs, 30% guides).',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Stratégie adoptée',
      },
      {
        type: 'text',
        content: 'Au lieu de choisir une seule approche, création de 3 pages distinctes :',
      },
      {
        type: 'table',
        content: {
          headers: ['Page créée', 'Mot-clé ciblé', 'Intention', 'Position atteinte'],
          rows: [
            ['Guide "Apprendre le SEO"', 'apprendre le seo gratuitement', 'Info', '2'],
            ['Comparatif formations', 'meilleure formation seo', 'Commercial', '5'],
            ['Page produit formation', 'formation seo certifiante', 'Transactionnel', '8'],
          ],
        },
      },
      {
        type: 'heading',
        level: 4,
        content: 'Résultat global',
      },
      {
        type: 'list',
        content: [
          'Couverture complète du funnel',
          'Le guide génère du trafic et des inscriptions email',
          'Le comparatif génère des ventes (CTA vers la propre formation)',
          'La page produit convertit les visiteurs prêts à acheter',
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
        content: 'Exercice 1 : Identifier les intentions',
      },
      {
        type: 'text',
        content: 'Pour chaque mot-clé, identifiez l\'intention probable (Info, Nav, Comm, Trans) :',
      },
      {
        type: 'table',
        content: {
          headers: ['Mot-clé', 'Votre réponse', 'Vérification SERP'],
          rows: [
            ['comment créer un blog', '____', 'Vérifier sur Google'],
            ['wordpress login', '____', 'Vérifier sur Google'],
            ['meilleur hébergeur web 2026', '____', 'Vérifier sur Google'],
            ['acheter nom de domaine', '____', 'Vérifier sur Google'],
            ['ovh vs ionos', '____', 'Vérifier sur Google'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Analyser une SERP',
      },
      {
        type: 'text',
        content: 'Choisissez un mot-clé de votre domaine et analysez la SERP :',
      },
      {
        type: 'list',
        content: [
          'Mot-clé analysé : ________________',
          '',
          'Résultat #1 : Type de contenu ________________',
          'Résultat #2 : Type de contenu ________________',
          'Résultat #3 : Type de contenu ________________',
          'Résultat #4 : Type de contenu ________________',
          'Résultat #5 : Type de contenu ________________',
          '',
          'Intention dominante : ________________',
          'Format à créer : ________________',
          'Éléments à inclure : ________________',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Mapper intentions et pages',
      },
      {
        type: 'text',
        content: 'Listez 4 mots-clés de votre activité, un par type d\'intention :',
      },
      {
        type: 'table',
        content: {
          headers: ['Intention', 'Votre mot-clé', 'Page existante ou à créer'],
          rows: [
            ['Informationnelle', '________________', '________________'],
            ['Navigationnelle', '________________ (votre marque)', '________________'],
            ['Commerciale', '________________', '________________'],
            ['Transactionnelle', '________________', '________________'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Audit d\'alignement',
      },
      {
        type: 'text',
        content: 'Prenez une page de votre site qui ne performe pas et analysez :',
      },
      {
        type: 'list',
        content: [
          'URL de la page : ________________',
          'Mot-clé ciblé : ________________',
          'Position actuelle : ________________',
          '',
          'Analyse de l\'intention :',
          '  - Intention que je ciblais : ________________',
          '  - Intention réelle (analyse SERP) : ________________',
          '  - Sont-elles alignées ? Oui / Non',
          '',
          'Si non alignées, actions correctives :',
          '  1. ________________',
          '  2. ________________',
          '  3. ________________',
        ],
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Intention de recherche',
          questions: [
            {
              question: 'Qu\'est-ce que l\'intention de recherche ?',
              options: ['Le nombre de recherches d\'un mot-clé', 'L\'objectif derrière une requête utilisateur', 'La difficulté d\'un mot-clé', 'Le coût par clic'],
              correctIndex: 1,
              explanation: 'L\'intention de recherche (search intent) désigne l\'objectif que l\'utilisateur cherche à atteindre quand il tape une requête dans Google.',
            },
            {
              question: 'Combien de types d\'intention de recherche existe-t-il principalement ?',
              options: ['2', '3', '4', '5'],
              correctIndex: 2,
              explanation: 'Il existe 4 types principaux : informationnelle, navigationnelle, commerciale et transactionnelle.',
            },
            {
              question: 'Quel type d\'intention représente "comment faire du SEO" ?',
              options: ['Transactionnelle', 'Commerciale', 'Informationnelle', 'Navigationnelle'],
              correctIndex: 2,
              explanation: 'Les requêtes commençant par "comment" sont généralement informationnelles : l\'utilisateur veut apprendre quelque chose.',
            },
            {
              question: 'Quel type d\'intention représente "meilleur outil SEO 2026" ?',
              options: ['Informationnelle', 'Commerciale', 'Transactionnelle', 'Navigationnelle'],
              correctIndex: 1,
              explanation: 'Les requêtes avec "meilleur", "comparatif", "vs" sont commerciales : l\'utilisateur compare avant d\'acheter.',
            },
            {
              question: 'Comment identifier l\'intention d\'un mot-clé ?',
              options: ['En regardant le volume de recherche', 'En analysant les résultats de la SERP', 'En comptant les mots', 'En vérifiant le CPC'],
              correctIndex: 1,
              explanation: 'La meilleure méthode est d\'analyser la SERP : le type de contenu dominant indique l\'intention que Google a identifiée.',
            },
            {
              question: 'Peut-on cibler plusieurs intentions sur une même page ?',
              options: ['Oui, c\'est recommandé', 'Non, une page = une intention', 'Oui, si le volume est élevé', 'Seulement pour les pages piliers'],
              correctIndex: 1,
              explanation: 'Non. Une page doit répondre à une intention principale. Mélanger les intentions dilue la pertinence et réduit les chances de ranking.',
            },
            {
              question: 'Quel format est adapté à l\'intention commerciale ?',
              options: ['Article de blog', 'Page produit', 'Comparatif ou avis', 'Page de contact'],
              correctIndex: 2,
              explanation: 'L\'intention commerciale (comparaison avant achat) nécessite des comparatifs, avis, listes "top X" qui aident à choisir.',
            },
            {
              question: 'Que faire si votre page ne ranke pas malgré une bonne optimisation ?',
              options: ['Ajouter plus de mots-clés', 'Vérifier l\'alignement avec l\'intention de recherche', 'Acheter des backlinks', 'Supprimer la page'],
              correctIndex: 1,
              explanation: 'Un mauvais alignement avec l\'intention est souvent la cause d\'échec. Vérifiez que votre contenu correspond à ce que Google attend.',
            },
            {
              question: 'L\'intention "acheter chaussures running" est de quel type ?',
              options: ['Informationnelle', 'Commerciale', 'Transactionnelle', 'Navigationnelle'],
              correctIndex: 2,
              explanation: 'Les requêtes avec "acheter", "prix", "commander" sont transactionnelles : l\'utilisateur est prêt à passer à l\'action.',
            },
            {
              question: 'Pourquoi l\'intention navigationnelle est-elle difficile à cibler ?',
              options: ['Le volume est trop faible', 'L\'utilisateur cherche un site précis', 'Google la bloque', 'Elle n\'existe pas vraiment'],
              correctIndex: 1,
              explanation: 'L\'intention navigationnelle cible un site spécifique (ex: "Facebook login"). Si ce n\'est pas votre marque, vous ne pouvez pas ranker.',
            },
          ],
        },
      },
      {
        type: 'cta',
        content: {
          title: 'Continuez votre apprentissage',
          description: 'Maintenant que vous comprenez l\'intention de recherche, découvrez comment exploiter les mots-clés longue traîne.',
          buttonText: 'Mots-clés longue traîne →',
          buttonLink: '/recherche-mots-cles/mots-cles-longue-traine',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'mots-cles-longue-traine',
    title: 'Mots-Clés Longue Traîne : La Stratégie pour Ranker Plus Vite',
    metaTitle: 'Mots-Clés Longue Traîne - Stratégie SEO 2026',
    metaDescription: 'Les mots-clés longue traîne sont moins concurrentiels et très qualifiés. Apprenez à les identifier et les exploiter pour générer du trafic ciblé.',
    keyword: 'mots clés longue traîne',
    secondaryKeywords: ['long tail seo', 'longue traine référencement', 'keywords longue traine'],
    intent: 'info',
    cluster: 'recherche-mots-cles',
    excerpt: 'Les mots-clés longue traîne sont des expressions de 3 mots ou plus, moins recherchées mais moins concurrentielles. Ils représentent une opportunité majeure pour les sites qui débutent.',
    tableOfContents: true,
    readingTime: 28,
    difficulty: 'debutant',
    lastUpdated: '2026-01-12',
    author: 'marie-lefevre',
    relatedSlugs: ['intention-de-recherche', 'volume-et-difficulte'],
    faq: [
      {
        question: 'Les mots-clés longue traîne génèrent-ils vraiment du trafic ?',
        answer: 'Oui. Individuellement, ils génèrent moins de trafic, mais combinés, ils peuvent représenter 70% de votre trafic organique. De plus, ce trafic est souvent plus qualifié et convertit mieux.',
      },
      {
        question: 'Quelle est la longueur idéale d\'un mot-clé longue traîne ?',
        answer: 'Généralement 3 à 5 mots. Au-delà, le volume devient souvent trop faible. La longueur idéale dépend du sujet et du volume de recherche.',
      },
      {
        question: 'Faut-il créer une page par mot-clé longue traîne ?',
        answer: 'Non. Regroupez les mots-clés sémantiquement proches sur une même page. Une page bien optimisée peut ranker sur des dizaines de variations.',
      },
      {
        question: 'Les mots-clés longue traîne sont-ils adaptés à tous les secteurs ?',
        answer: 'Oui, mais leur importance varie. En e-commerce, ils sont cruciaux (recherches produit précises). En B2B, ils peuvent générer des leads très qualifiés.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Vous débutez en SEO et les gros mots-clés semblent inaccessibles ? Les mots-clés longue traîne sont votre meilleur allié pour commencer à générer du trafic rapidement.',
      },
      {
        type: 'text',
        content: 'Avant de plonger dans la longue traîne, assurez-vous de maîtriser les bases de la recherche de mots-clés et de comprendre l\'intention de recherche.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Qu\'est-ce qu\'un mot-clé longue traîne ?',
      },
      {
        type: 'text',
        content: 'Un mot-clé longue traîne (long tail keyword) est une expression de recherche spécifique, généralement composée de 3 mots ou plus. Elle a un volume de recherche plus faible mais une intention plus précise.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Le concept de la "traîne"',
          content: 'Le nom vient de la courbe de distribution : les mots-clés génériques sont la "tête" (peu nombreux, fort volume), tandis que les mots-clés spécifiques forment une longue "traîne" (très nombreux, faible volume unitaire mais cumulé important).',
        },
      },
      {
        type: 'table',
        content: {
          headers: ['Mot-clé court (tête)', 'Volume', 'Mot-clé longue traîne', 'Volume'],
          rows: [
            ['seo', '90 500', 'comment apprendre le seo gratuitement', '720'],
            ['chaussures', '165 000', 'chaussures running femme pied large', '880'],
            ['recette', '450 000', 'recette gâteau chocolat sans beurre', '2 900'],
            ['formation', '110 000', 'formation seo en ligne certifiante', '590'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Le pouvoir caché de la longue traîne',
      },
      {
        type: 'text',
        content: 'Voici pourquoi la longue traîne est si puissante :',
      },
      {
        type: 'heading',
        level: 3,
        content: '1. 70% du trafic total',
      },
      {
        type: 'text',
        content: 'Selon les études, 70% du trafic de recherche vient de mots-clés longue traîne. Les "gros" mots-clés ne représentent que 30% du total.',
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Moins de concurrence',
      },
      {
        type: 'text',
        content: 'Là où "SEO" a des milliers de sites en concurrence, "formation SEO gratuite pour débutant" n\'en a que quelques dizaines.',
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Meilleure conversion',
      },
      {
        type: 'text',
        content: 'Un visiteur qui tape "acheter chaussures running Asics Gel Nimbus 26 42" sait exactement ce qu\'il veut. Son taux de conversion sera 5 à 10 fois supérieur à celui qui tape "chaussures".',
      },
      {
        type: 'heading',
        level: 3,
        content: '4. Construction de l\'autorité',
      },
      {
        type: 'text',
        content: 'En rankant sur de nombreux mots-clés longue traîne d\'un même thème, vous construisez l\'autorité topique qui vous permettra ensuite de ranker sur les mots-clés plus compétitifs.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Les types de mots-clés longue traîne',
      },
      {
        type: 'table',
        content: {
          headers: ['Type', 'Exemple', 'Caractéristique'],
          rows: [
            ['Questions', 'comment faire du SEO sur WordPress', 'Forte intention informationnelle'],
            ['Spécifications', 'chaussures running femme semelle épaisse', 'Très qualifié, proche de l\'achat'],
            ['Localisés', 'plombier urgence Paris 15', 'Intention locale forte'],
            ['Comparatifs', 'iPhone 15 vs Samsung S24 photo', 'Intention commerciale'],
            ['Problèmes', 'pourquoi mon site ne ranke pas', 'Recherche de solution'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Comment trouver des mots-clés longue traîne',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Méthode 1 : Google Autocomplete',
      },
      {
        type: 'text',
        content: 'Tapez votre mot-clé principal dans Google et observez les suggestions. Ajoutez des lettres pour découvrir plus de variations.',
      },
      {
        type: 'list',
        content: [
          'Tapez votre mot-clé de base',
          'Notez les 5-10 suggestions automatiques',
          'Ajoutez une lettre à la fin et regardez les nouvelles suggestions',
          'Répétez avec "comment", "pourquoi", "quel", etc. + votre mot-clé',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Méthode 2 : People Also Ask (PAA)',
      },
      {
        type: 'text',
        content: 'Les questions "Autres questions posées" dans Google sont d\'excellents mots-clés longue traîne à cibler.',
      },
      {
        type: 'list',
        content: [
          'Faites une recherche sur votre mot-clé',
          'Trouvez la section "Autres questions posées"',
          'Cliquez sur une question pour en voir plus',
          'Notez les questions les plus pertinentes',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Méthode 3 : Recherches associées',
      },
      {
        type: 'text',
        content: 'En bas de la page de résultats Google, les "Recherches associées" offrent des variations pertinentes et souvent longue traîne.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Méthode 4 : Outils spécialisés',
      },
      {
        type: 'table',
        content: {
          headers: ['Outil', 'Ce qu\'il fait', 'Gratuit/Payant'],
          rows: [
            ['AnswerThePublic', 'Visualise les questions autour d\'un sujet', 'Freemium'],
            ['AlsoAsked', 'Basé sur les PAA de Google', 'Freemium'],
            ['Keyword Surfer', 'Extension Chrome avec volumes', 'Gratuit'],
            ['Ubersuggest', 'Génère des variations', 'Freemium'],
            ['KeywordTool.io', 'Suggestions de multiples sources', 'Freemium'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Méthode 5 : Google Search Console',
      },
      {
        type: 'text',
        content: 'Si vous avez déjà du trafic, GSC vous montre les vrais mots-clés longue traîne pour lesquels vous apparaissez :',
      },
      {
        type: 'list',
        content: [
          'Allez dans Performance > Requêtes',
          'Filtrez par position > 10 (page 2+)',
          'Cherchez les requêtes longue traîne',
          'Créez du contenu dédié pour celles avec du potentiel',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Stratégie d\'utilisation de la longue traîne',
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Stratégie recommandée',
          content: 'Créez d\'abord du contenu sur des mots-clés longue traîne, puis construisez des pages pilier sur les termes plus génériques. La longue traîne renforce l\'autorité de vos pages principales.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Approche cluster',
      },
      {
        type: 'list',
        content: [
          'Identifiez un thème principal (mot-clé tête)',
          'Trouvez 10-20 variations longue traîne',
          'Créez des articles pour chaque variation importante',
          'Reliez tous les articles à une page pilier',
          'Laissez la longue traîne construire l\'autorité',
          'Le mot-clé tête commencera à ranker naturellement',
        ],
      },
      {
        type: 'text',
        content: 'Pour approfondir cette stratégie, consultez notre guide sur les clusters thématiques.',
      },
      {
        type: 'heading',
        level: 2,
        content: '📚 SECTION PREMIUM : Études de cas',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas 1 : Blog voyage - 50 000 visiteurs avec la longue traîne',
      },
      {
        type: 'text',
        content: 'Un blog voyage lancé de zéro a atteint 50 000 visiteurs/mois en 18 mois en ciblant exclusivement la longue traîne.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Stratégie adoptée',
      },
      {
        type: 'table',
        content: {
          headers: ['Mot-clé évité', 'KD', 'Mot-clé ciblé', 'KD'],
          rows: [
            ['voyage Japon', '72', 'itinéraire Japon 2 semaines avril', '18'],
            ['hôtel Tokyo', '65', 'hôtel pas cher Shinjuku près gare', '12'],
            ['budget Japon', '58', 'combien coûte 3 semaines au Japon', '22'],
            ['quand partir Japon', '48', 'partir au Japon en novembre avis', '8'],
          ],
        },
      },
      {
        type: 'heading',
        level: 4,
        content: 'Résultats progressifs',
      },
      {
        type: 'table',
        content: {
          headers: ['Mois', 'Articles publiés', 'Trafic mensuel', 'Mots-clés rankés'],
          rows: [
            ['3', '15', '800', '45'],
            ['6', '35', '4 500', '180'],
            ['12', '70', '22 000', '520'],
            ['18', '100', '50 000', '1 200'],
          ],
        },
      },
      {
        type: 'heading',
        level: 4,
        content: 'Effet cascade sur les mots-clés génériques',
      },
      {
        type: 'text',
        content: 'Au bout de 18 mois, sans les cibler directement, le blog a commencé à ranker sur des mots-clés plus génériques :',
      },
      {
        type: 'list',
        content: [
          '"voyage Japon" : position 12 → 6',
          '"itinéraire Japon" : position 8 → 3',
          '"budget Japon" : position 15 → 7',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas 2 : E-commerce - Mots-clés produit précis',
      },
      {
        type: 'text',
        content: 'Une boutique en ligne de matériel de sport a boosté ses ventes en optimisant pour des mots-clés produit très spécifiques.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Avant : mots-clés génériques',
      },
      {
        type: 'table',
        content: {
          headers: ['Catégorie', 'Mot-clé ciblé', 'Position', 'Trafic'],
          rows: [
            ['Chaussures running', 'chaussures running', '45', '50/mois'],
            ['Vélos', 'vélo route', '38', '30/mois'],
          ],
        },
      },
      {
        type: 'heading',
        level: 4,
        content: 'Après : stratégie longue traîne',
      },
      {
        type: 'table',
        content: {
          headers: ['Page créée', 'Mot-clé longue traîne', 'Position', 'Trafic', 'Conversion'],
          rows: [
            ['Fiche Asics Gel Nimbus', 'asics gel nimbus 26 homme', '2', '280/mois', '4,2%'],
            ['Guide pronateur', 'chaussures running pronateur lourd', '1', '180/mois', '5,8%'],
            ['Comparatif vélos route', 'vélo route carbone moins de 2000€', '3', '450/mois', '3,1%'],
          ],
        },
      },
      {
        type: 'heading',
        level: 4,
        content: 'Impact sur les ventes',
      },
      {
        type: 'list',
        content: [
          'Trafic organique : +320%',
          'CA via SEO : de 8 000€/mois à 35 000€/mois',
          'Taux de conversion global : de 1,2% à 3,4%',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas 3 : Site B2B - Leads qualifiés via longue traîne',
      },
      {
        type: 'text',
        content: 'Une agence de marketing digital a généré des leads ultra-qualifiés en ciblant des requêtes très spécifiques.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Mots-clés ciblés',
      },
      {
        type: 'table',
        content: {
          headers: ['Mot-clé', 'Volume', 'Intention', 'Leads/mois'],
          rows: [
            ['agence seo e-commerce shopify', '120', 'Commercial', '3'],
            ['consultant seo saas b2b', '90', 'Commercial', '2'],
            ['audit seo site wordpress prix', '210', 'Transactionnel', '5'],
            ['comment choisir agence seo', '320', 'Commercial', '4'],
          ],
        },
      },
      {
        type: 'heading',
        level: 4,
        content: 'Qualité des leads',
      },
      {
        type: 'list',
        content: [
          'Leads "agence seo" générique : panier moyen 2 500€, conversion 5%',
          'Leads longue traîne spécifique : panier moyen 8 000€, conversion 15%',
          'ROI 3x supérieur sur la longue traîne',
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
        content: 'Exercice 1 : Trouver 20 mots-clés longue traîne',
      },
      {
        type: 'text',
        content: 'À partir d\'un mot-clé principal de votre activité, trouvez 20 variations longue traîne :',
      },
      {
        type: 'list',
        content: [
          'Mot-clé principal : ________________',
          '',
          'Google Suggest (5 suggestions) :',
          '1. ________________',
          '2. ________________',
          '3. ________________',
          '4. ________________',
          '5. ________________',
          '',
          'People Also Ask (5 questions) :',
          '6. ________________',
          '7. ________________',
          '8. ________________',
          '9. ________________',
          '10. ________________',
          '',
          'Recherches associées (5 termes) :',
          '11. ________________',
          '12. ________________',
          '13. ________________',
          '14. ________________',
          '15. ________________',
          '',
          'Vos propres variations (5 idées) :',
          '16. ________________',
          '17. ________________',
          '18. ________________',
          '19. ________________',
          '20. ________________',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Analyser le potentiel',
      },
      {
        type: 'text',
        content: 'Prenez vos 5 meilleures trouvailles et analysez-les :',
      },
      {
        type: 'table',
        content: {
          headers: ['Mot-clé', 'Volume', 'KD', 'Intention', 'Priorité'],
          rows: [
            ['________________', '____', '____', '____', '____'],
            ['________________', '____', '____', '____', '____'],
            ['________________', '____', '____', '____', '____'],
            ['________________', '____', '____', '____', '____'],
            ['________________', '____', '____', '____', '____'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Planifier un cluster longue traîne',
      },
      {
        type: 'text',
        content: 'Créez un plan de contenu basé sur la longue traîne :',
      },
      {
        type: 'list',
        content: [
          'THÈME : ________________',
          '',
          'Page pilier (mot-clé principal) :',
          '  → ________________',
          '',
          'Article satellite #1 (longue traîne) :',
          '  → Mot-clé : ________________',
          '  → Titre prévu : ________________',
          '',
          'Article satellite #2 :',
          '  → Mot-clé : ________________',
          '  → Titre prévu : ________________',
          '',
          'Article satellite #3 :',
          '  → Mot-clé : ________________',
          '  → Titre prévu : ________________',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Audit de vos pages existantes',
      },
      {
        type: 'text',
        content: 'Si vous avez un site, identifiez les opportunités longue traîne inexploitées :',
      },
      {
        type: 'list',
        content: [
          '1. Allez dans Google Search Console > Performance',
          '2. Filtrez : Position > 10 ET Impressions > 50',
          '3. Listez 5 requêtes longue traîne prometteuses :',
          '',
          'Requête 1 : ________________',
          '  Position actuelle : ____ Impressions : ____',
          '  Action : ________________',
          '',
          'Requête 2 : ________________',
          '  Position actuelle : ____ Impressions : ____',
          '  Action : ________________',
          '',
          'Requête 3 : ________________',
          '  Position actuelle : ____ Impressions : ____',
          '  Action : ________________',
        ],
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Mots-clés longue traîne',
          questions: [
            {
              question: 'Qu\'est-ce qu\'un mot-clé longue traîne ?',
              options: ['Un mot-clé très long à taper', 'Une expression de 3+ mots plus spécifique', 'Un mot-clé avec beaucoup de volume', 'Un mot-clé ancien'],
              correctIndex: 1,
              explanation: 'Un mot-clé longue traîne est une expression de 3 mots ou plus, plus spécifique et moins concurrentielle que les mots-clés génériques.',
            },
            {
              question: 'Quel pourcentage du trafic de recherche vient de la longue traîne ?',
              options: ['Environ 20%', 'Environ 40%', 'Environ 70%', 'Environ 90%'],
              correctIndex: 2,
              explanation: 'Environ 70% du trafic de recherche provient de mots-clés longue traîne. Les mots-clés génériques ne représentent que 30% du total.',
            },
            {
              question: 'Quel est l\'avantage principal des mots-clés longue traîne ?',
              options: ['Volume plus élevé', 'Moins de concurrence', 'Meilleur design', 'Plus de backlinks'],
              correctIndex: 1,
              explanation: 'Le principal avantage est la faible concurrence, ce qui permet aux sites débutants de ranker plus facilement.',
            },
            {
              question: 'Les mots-clés longue traîne ont-ils un meilleur taux de conversion ?',
              options: ['Non, ils convertissent moins', 'Oui, car l\'intention est plus précise', 'C\'est équivalent', 'Ça dépend uniquement du prix'],
              correctIndex: 1,
              explanation: 'Oui, car l\'utilisateur qui tape une requête précise sait exactement ce qu\'il cherche. Son intention est claire, ce qui augmente le taux de conversion.',
            },
            {
              question: 'Où trouver des idées de mots-clés longue traîne gratuitement ?',
              options: ['Uniquement avec des outils payants', 'Google Suggest, PAA, Recherches associées', 'En copiant les concurrents', 'Sur les réseaux sociaux'],
              correctIndex: 1,
              explanation: 'Google offre gratuitement des idées via l\'Autocomplete, les "Autres questions posées" (PAA) et les "Recherches associées" en bas de page.',
            },
            {
              question: 'Quelle est la longueur idéale d\'un mot-clé longue traîne ?',
              options: ['1-2 mots', '3-5 mots', '8-10 mots', 'Plus de 15 mots'],
              correctIndex: 1,
              explanation: 'Généralement 3 à 5 mots. Au-delà, le volume devient souvent trop faible pour être intéressant.',
            },
            {
              question: 'Comment les mots-clés longue traîne aident-ils à ranker sur des termes plus compétitifs ?',
              options: ['Ils n\'aident pas', 'En construisant l\'autorité topique du site', 'En générant des backlinks', 'Par magie algorithmique'],
              correctIndex: 1,
              explanation: 'En rankant sur de nombreux mots-clés longue traîne d\'un même thème, vous construisez l\'autorité topique qui aide ensuite à ranker sur les termes plus compétitifs.',
            },
            {
              question: 'Faut-il créer une page par mot-clé longue traîne ?',
              options: ['Oui, toujours', 'Non, regrouper les mots-clés sémantiquement proches', 'Uniquement pour les commerciaux', 'Jamais'],
              correctIndex: 1,
              explanation: 'Non. Regroupez les mots-clés sémantiquement proches sur une même page. Une page bien optimisée peut ranker sur des dizaines de variations.',
            },
            {
              question: 'Quel outil gratuit montre les vraies requêtes longue traîne de votre site ?',
              options: ['Google Analytics', 'Google Search Console', 'Google Trends', 'PageSpeed Insights'],
              correctIndex: 1,
              explanation: 'Google Search Console vous montre les requêtes réelles pour lesquelles votre site apparaît, y compris les longue traîne que vous n\'aviez pas ciblées.',
            },
            {
              question: 'Quel type de longue traîne convertit généralement le mieux en e-commerce ?',
              options: ['Les questions générales', 'Les spécifications produit précises', 'Les comparaisons de marques', 'Les requêtes locales'],
              correctIndex: 1,
              explanation: 'Les requêtes avec spécifications précises (marque, modèle, taille, couleur) convertissent le mieux car l\'utilisateur sait exactement ce qu\'il veut acheter.',
            },
          ],
        },
      },
      {
        type: 'cta',
        content: {
          title: 'Approfondir les métriques',
          description: 'Maintenant que vous maîtrisez la longue traîne, apprenez à analyser le volume et la difficulté des mots-clés.',
          buttonText: 'Volume et difficulté →',
          buttonLink: '/recherche-mots-cles/volume-et-difficulte',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'volume-et-difficulte',
    title: 'Volume et Difficulté des Mots-Clés : Comment les Interpréter',
    metaTitle: 'Volume et Difficulté Mot-Clé - Guide SEO 2026',
    metaDescription: 'Comprenez les métriques volume de recherche et keyword difficulty pour choisir les bons mots-clés et prioriser vos efforts SEO.',
    keyword: 'difficulté mot clé',
    secondaryKeywords: ['keyword difficulty', 'volume recherche', 'kd seo'],
    intent: 'info',
    cluster: 'recherche-mots-cles',
    excerpt: 'Volume de recherche et difficulté sont deux métriques essentielles pour choisir vos mots-clés. Apprenez à les analyser pour faire les bons choix stratégiques.',
    tableOfContents: true,
    readingTime: 28,
    difficulty: 'intermediaire',
    lastUpdated: '2026-01-10',
    author: 'thomas-dupont',
    relatedSlugs: ['mots-cles-longue-traine', 'intention-de-recherche'],
    faq: [
      {
        question: 'Quel score de difficulté viser quand on débute ?',
        answer: 'Pour un nouveau site, ciblez des mots-clés avec un KD inférieur à 30. Une fois votre autorité établie, vous pourrez viser des KD plus élevés.',
      },
      {
        question: 'Le volume de recherche est-il toujours fiable ?',
        answer: 'Non, les volumes sont des estimations qui peuvent varier selon les outils. Utilisez-les comme indicateur relatif plutôt que comme valeur absolue.',
      },
      {
        question: 'Pourquoi les volumes diffèrent entre Ahrefs et Semrush ?',
        answer: 'Chaque outil utilise ses propres sources de données et méthodes de calcul. Les écarts peuvent atteindre 50%. Comparez les tendances plutôt que les valeurs absolues.',
      },
      {
        question: 'Un KD élevé signifie-t-il qu\'il est impossible de ranker ?',
        answer: 'Non. Le KD est une estimation basée sur les backlinks des pages en top 10. Avec un contenu exceptionnel et de la patience, des sites avec peu d\'autorité peuvent ranker sur des KD élevés.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Deux mots-clés peuvent avoir le même volume mais des difficultés très différentes. Comprendre ces métriques est essentiel pour prioriser vos efforts.',
      },
      {
        type: 'text',
        content: 'Ce guide complète notre formation à la recherche de mots-clés. Si vous débutez, commencez par les bases.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Le volume de recherche',
      },
      {
        type: 'text',
        content: 'Le volume de recherche indique le nombre moyen de recherches mensuelles pour un mot-clé. C\'est une estimation basée sur les données historiques.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Comment les outils calculent le volume',
      },
      {
        type: 'list',
        content: [
          'Google Keyword Planner : données directes de Google (les plus fiables mais par fourchettes)',
          'Ahrefs : données clickstream + modèles statistiques',
          'Semrush : données clickstream + analyse SERP',
          'Tous utilisent des moyennes sur 12 mois (lissage saisonnier)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Grille d\'interprétation du volume',
      },
      {
        type: 'table',
        content: {
          headers: ['Volume mensuel', 'Classification', 'Type de trafic', 'Stratégie recommandée'],
          rows: [
            ['0-50', 'Ultra-niche', 'Très faible mais ultra-qualifié', 'Cibler si l\'intention est transactionnelle'],
            ['50-200', 'Niche', 'Longue traîne typique', 'Excellent pour les sites débutants'],
            ['200-1000', 'Modéré', 'Bon équilibre', 'Sweet spot pour construire l\'autorité'],
            ['1000-5000', 'Bon', 'Trafic significatif', 'Cibler avec de l\'autorité moyenne'],
            ['5000-20000', 'Élevé', 'Fort potentiel', 'Nécessite une stratégie solide'],
            ['20000+', 'Très élevé', 'Trafic massif', 'Réservé aux sites autoritaires'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Attention aux pièges du volume',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Piège 1 : La saisonnalité',
      },
      {
        type: 'text',
        content: 'Un mot-clé peut avoir 10 000 recherches/mois en moyenne mais 50 000 en décembre et 500 en juin. Vérifiez Google Trends.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Piège 2 : Les mots-clés ambigus',
      },
      {
        type: 'text',
        content: '"Python" a un énorme volume, mais il mélange le serpent, le langage de programmation, et les Monty Python. Le volume réel pour votre intention est bien moindre.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Piège 3 : Volume ≠ Clics disponibles',
      },
      {
        type: 'text',
        content: 'Avec les featured snippets et les "zero-click searches", un mot-clé à 10 000 recherches peut ne générer que 3 000 clics réels vers les sites.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'La difficulté du mot-clé (KD)',
      },
      {
        type: 'text',
        content: 'Le Keyword Difficulty (KD) est un score de 0 à 100 estimant la difficulté à se positionner sur un mot-clé. Chaque outil utilise sa propre méthode de calcul.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Comment le KD est calculé',
      },
      {
        type: 'table',
        content: {
          headers: ['Outil', 'Méthode principale', 'Fiabilité'],
          rows: [
            ['Ahrefs', 'Backlinks des pages top 10', 'Bonne'],
            ['Semrush', 'Analyse multi-facteurs', 'Bonne'],
            ['Moz', 'Page Authority des résultats', 'Correcte'],
            ['Ubersuggest', 'Estimation simplifiée', 'Approximative'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Grille d\'interprétation du KD',
      },
      {
        type: 'table',
        content: {
          headers: ['Score KD', 'Difficulté', 'DR site requis (estimation)', 'Backlinks page requis'],
          rows: [
            ['0-10', 'Très facile', 'DR 0-15', '0-5'],
            ['10-20', 'Facile', 'DR 15-25', '5-15'],
            ['20-35', 'Modéré', 'DR 25-40', '15-50'],
            ['35-50', 'Difficile', 'DR 40-55', '50-100'],
            ['50-70', 'Très difficile', 'DR 55-70', '100-300'],
            ['70+', 'Extrêmement difficile', 'DR 70+', '300+'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Facteurs influençant la difficulté',
      },
      {
        type: 'list',
        content: [
          'Autorité des sites positionnés (DA/DR)',
          'Qualité et profondeur du contenu des concurrents',
          'Nombre et qualité des backlinks des pages top 10',
          'Présence de marques établies (Wikipedia, Amazon...)',
          'Ancienneté des pages positionnées',
          'Signals E-E-A-T des auteurs',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Le KD n\'est qu\'un indicateur',
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Attention',
          content: 'Le KD est calculé principalement sur les backlinks. Un mot-clé peut avoir un KD faible mais être impossible à ranker si les résultats sont dominés par des marques établies ou des sites gouvernementaux.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Trouver le bon équilibre',
      },
      {
        type: 'text',
        content: 'Le meilleur mot-clé n\'est pas celui avec le plus gros volume, mais celui offrant le meilleur ratio opportunité/effort pour votre site.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'La règle DR vs KD',
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Formule pratique',
          content: 'Cherchez des mots-clés avec un KD inférieur ou égal au DR de votre site. Si votre DR est de 25, ciblez des KD ≤ 25. Au-delà, la bataille sera longue.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Matrice de priorisation',
      },
      {
        type: 'table',
        content: {
          headers: ['', 'KD Faible (<30)', 'KD Moyen (30-50)', 'KD Élevé (>50)'],
          rows: [
            ['Volume élevé', '⭐⭐⭐ PRIORITÉ 1', '⭐⭐ MOYEN TERME', '⭐ LONG TERME'],
            ['Volume moyen', '⭐⭐⭐ QUICK WIN', '⭐⭐ BON ÉQUILIBRE', '⭐ SI TRÈS PERTINENT'],
            ['Volume faible', '⭐⭐ SI QUALIFIÉ', '⭐ SELON INTENTION', '❌ ÉVITER'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Le CPC comme indicateur de valeur',
      },
      {
        type: 'text',
        content: 'N\'oubliez pas le CPC (Cost Per Click). Un mot-clé avec un faible volume mais un CPC élevé peut avoir plus de valeur qu\'un mot-clé à fort volume et CPC faible.',
      },
      {
        type: 'table',
        content: {
          headers: ['Mot-clé', 'Volume', 'KD', 'CPC', 'Verdict'],
          rows: [
            ['formation seo', '2 400', '45', '4,20€', 'Bon potentiel commercial'],
            ['c\'est quoi le seo', '6 600', '28', '0,40€', 'Fort volume mais faible valeur'],
            ['audit seo site prix', '320', '22', '8,50€', 'Faible volume mais haute valeur !'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: '📚 SECTION PREMIUM : Études de cas',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas 1 : Mauvais choix de volume → 0 trafic',
      },
      {
        type: 'text',
        content: 'Un site de coaching a créé 20 articles ciblant des mots-clés à fort volume (5 000-20 000/mois). Après 6 mois, résultat : 150 visiteurs/mois.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Analyse du problème',
      },
      {
        type: 'table',
        content: {
          headers: ['Mot-clé ciblé', 'Volume', 'KD', 'DR site', 'Position obtenue'],
          rows: [
            ['développement personnel', '18 100', '72', '12', '> 100'],
            ['confiance en soi', '14 800', '68', '12', '> 100'],
            ['gestion du stress', '9 900', '55', '12', '78'],
          ],
        },
      },
      {
        type: 'text',
        content: 'Avec un DR de 12, le site ne pouvait pas rivaliser sur ces mots-clés à KD élevé.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Solution : recalibrage vers la longue traîne',
      },
      {
        type: 'table',
        content: {
          headers: ['Nouveau mot-clé', 'Volume', 'KD', 'Position obtenue', 'Trafic'],
          rows: [
            ['exercices confiance en soi débutant', '480', '18', '4', '85/mois'],
            ['méditation stress travail 10 minutes', '320', '12', '2', '95/mois'],
            ['journal développement personnel exemple', '590', '15', '3', '120/mois'],
          ],
        },
      },
      {
        type: 'heading',
        level: 4,
        content: 'Résultat',
      },
      {
        type: 'list',
        content: [
          'Trafic après recalibrage : de 150 à 2 800 visiteurs/mois',
          'Mots-clés génériques commencent à ranker naturellement',
          'DR passé de 12 à 28 grâce à l\'autorité gagnée',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas 2 : KD trompeur → échec inattendu',
      },
      {
        type: 'text',
        content: 'Un blog tech a ciblé "meilleur antivirus gratuit" (KD 32, volume 8 100). Malgré un contenu excellent, impossible de dépasser la position 15.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Analyse de la SERP',
      },
      {
        type: 'list',
        content: [
          'Position 1-3 : Sites des éditeurs d\'antivirus eux-mêmes',
          'Position 4-7 : 01net, Clubic, Les Numériques (DA 70+)',
          'Position 8-10 : PCMag, Tom\'s Guide (DA 80+)',
        ],
      },
      {
        type: 'text',
        content: 'Le KD était calculé sur les backlinks, mais la SERP était dominée par des sites à très haute autorité ET des marques du secteur.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Leçon',
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Toujours analyser la SERP',
          content: 'Un KD "accessible" ne garantit rien si la SERP est dominée par des sites majeurs ou des marques. Regardez QUI ranke, pas seulement les métriques.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas 3 : Volume faible, CPC élevé = jackpot',
      },
      {
        type: 'text',
        content: 'Une agence immobilière a découvert que les mots-clés à faible volume mais CPC élevé généraient 80% de leurs leads.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Comparaison des stratégies',
      },
      {
        type: 'table',
        content: {
          headers: ['Mot-clé', 'Volume', 'CPC', 'Position', 'Trafic', 'Leads'],
          rows: [
            ['immobilier Paris', '40 500', '2,10€', '18', '120/mois', '0'],
            ['appartement à vendre Paris 11', '720', '8,50€', '3', '180/mois', '8'],
            ['estimation appartement Paris gratuite', '480', '12,30€', '2', '140/mois', '15'],
          ],
        },
      },
      {
        type: 'heading',
        level: 4,
        content: 'ROI comparé',
      },
      {
        type: 'list',
        content: [
          'Mot-clé générique : 120 visites → 0 lead → 0€',
          'Mot-clé longue traîne transactionnel : 320 visites → 23 leads → valeur estimée 46 000€',
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
        content: 'Exercice 1 : Analyser un mot-clé complet',
      },
      {
        type: 'text',
        content: 'Choisissez un mot-clé de votre secteur et complétez l\'analyse :',
      },
      {
        type: 'list',
        content: [
          'Mot-clé analysé : ________________',
          '',
          'Métriques (utilisez Ubersuggest gratuit) :',
          '  Volume mensuel : ____',
          '  KD : ____',
          '  CPC : ____€',
          '',
          'Analyse SERP (qui ranke ?) :',
          '  #1 : ________________ (type de site)',
          '  #2 : ________________',
          '  #3 : ________________',
          '',
          'Votre DR : ____',
          'Le KD est-il inférieur à votre DR ? Oui / Non',
          'Des marques dominent-elles la SERP ? Oui / Non',
          '',
          'Verdict : Cibler / Éviter / Attendre',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Prioriser 10 mots-clés',
      },
      {
        type: 'text',
        content: 'Listez 10 mots-clés et classez-les par priorité :',
      },
      {
        type: 'table',
        content: {
          headers: ['Mot-clé', 'Volume', 'KD', 'CPC', 'Priorité (1-10)'],
          rows: [
            ['________________', '____', '____', '____€', '____'],
            ['________________', '____', '____', '____€', '____'],
            ['________________', '____', '____', '____€', '____'],
            ['________________', '____', '____', '____€', '____'],
            ['________________', '____', '____', '____€', '____'],
            ['________________', '____', '____', '____€', '____'],
            ['________________', '____', '____', '____€', '____'],
            ['________________', '____', '____', '____€', '____'],
            ['________________', '____', '____', '____€', '____'],
            ['________________', '____', '____', '____€', '____'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Comparer les outils',
      },
      {
        type: 'text',
        content: 'Prenez un même mot-clé et comparez les données de différents outils :',
      },
      {
        type: 'list',
        content: [
          'Mot-clé : ________________',
          '',
          'Google Keyword Planner :',
          '  Volume : ____',
          '',
          'Ubersuggest :',
          '  Volume : ____',
          '  KD : ____',
          '',
          'Autre outil (si disponible) :',
          '  Volume : ____',
          '  KD : ____',
          '',
          'Écart maximum observé : ____%',
          'Conclusion sur la fiabilité : ________________',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Analyser la saisonnalité',
      },
      {
        type: 'text',
        content: 'Utilisez Google Trends pour analyser 3 mots-clés :',
      },
      {
        type: 'table',
        content: {
          headers: ['Mot-clé', 'Mois pic', 'Mois creux', 'Variation'],
          rows: [
            ['________________', '____', '____', '× ____'],
            ['________________', '____', '____', '× ____'],
            ['________________', '____', '____', '× ____'],
          ],
        },
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Volume et difficulté',
          questions: [
            {
              question: 'Que mesure le volume de recherche ?',
              options: ['Le nombre de sites concurrents', 'Le nombre moyen de recherches mensuelles', 'Le coût par clic', 'La difficulté du mot-clé'],
              correctIndex: 1,
              explanation: 'Le volume de recherche indique le nombre moyen de fois qu\'un mot-clé est recherché chaque mois.',
            },
            {
              question: 'Un volume de 500 recherches/mois est-il intéressant ?',
              options: ['Non, c\'est trop faible', 'Oui, c\'est la longue traîne', 'Seulement pour les gros sites', 'Impossible de ranker'],
              correctIndex: 1,
              explanation: 'Un volume de 500/mois est typique de la longue traîne : moins de concurrence et souvent meilleure conversion.',
            },
            {
              question: 'Que signifie un KD de 60 ?',
              options: ['Facile à ranker', 'Très difficile à ranker', 'Volume de 60 000', 'Erreur de l\'outil'],
              correctIndex: 1,
              explanation: 'Un KD de 60 est considéré comme très difficile. Il faut généralement un site avec un DR élevé et beaucoup de backlinks.',
            },
            {
              question: 'Quel KD cibler pour un site avec DR 20 ?',
              options: ['KD > 50', 'KD < 20', 'KD = 100', 'Le KD n\'a pas d\'importance'],
              correctIndex: 1,
              explanation: 'Règle pratique : ciblez des mots-clés avec un KD inférieur ou égal à votre DR. Avec DR 20, visez KD < 20.',
            },
            {
              question: 'Pourquoi les volumes peuvent différer entre les outils ?',
              options: ['Les outils mentent', 'Chaque outil utilise ses propres sources et méthodes', 'Google cache les vrais volumes', 'C\'est normal, ça veut dire la même chose'],
              correctIndex: 1,
              explanation: 'Chaque outil utilise ses propres sources de données (clickstream, modèles) et méthodes de calcul, d\'où les écarts.',
            },
            {
              question: 'Un mot-clé avec KD faible est-il toujours facile à ranker ?',
              options: ['Oui, par définition', 'Non, il faut aussi analyser la SERP', 'Seulement avec des backlinks', 'Le KD ne compte pas'],
              correctIndex: 1,
              explanation: 'Non. Le KD est basé sur les backlinks mais ignore d\'autres facteurs comme la présence de marques ou de sites à très haute autorité.',
            },
            {
              question: 'Que peut indiquer un CPC élevé ?',
              options: ['Le mot-clé est inutile', 'Le mot-clé a une forte valeur commerciale', 'Il faut l\'éviter', 'Le volume est faux'],
              correctIndex: 1,
              explanation: 'Un CPC élevé indique que les annonceurs paient cher pour ce mot-clé, donc qu\'il génère probablement des conversions.',
            },
            {
              question: 'Comment vérifier la saisonnalité d\'un mot-clé ?',
              options: ['Google Keyword Planner', 'Google Trends', 'Google Search Console', 'PageSpeed Insights'],
              correctIndex: 1,
              explanation: 'Google Trends montre l\'évolution de l\'intérêt pour un mot-clé au fil du temps, révélant les pics saisonniers.',
            },
            {
              question: 'Quel mot-clé choisir entre : Volume 5000/KD 60 vs Volume 500/KD 15 ?',
              options: ['Toujours le plus gros volume', 'Volume 500/KD 15 pour un site débutant', 'Aucun des deux', 'Tirer à pile ou face'],
              correctIndex: 1,
              explanation: 'Pour un site débutant, le mot-clé à faible KD est plus accessible. Mieux vaut ranker #1 sur 500/mois que #50 sur 5000/mois.',
            },
            {
              question: 'Qu\'est-ce qu\'une "zero-click search" ?',
              options: ['Une recherche sans résultat', 'Une recherche où l\'utilisateur n\'a pas besoin de cliquer (réponse directe)', 'Une recherche avec 0 volume', 'Un bug de Google'],
              correctIndex: 1,
              explanation: 'Une zero-click search se produit quand Google répond directement (featured snippet, knowledge panel) et l\'utilisateur n\'a pas besoin de visiter un site.',
            },
          ],
        },
      },
      {
        type: 'cta',
        content: {
          title: 'Organisez votre contenu',
          description: 'Maintenant que vous maîtrisez le volume et la difficulté, apprenez à structurer vos mots-clés en clusters thématiques.',
          buttonText: 'Clusters thématiques →',
          buttonLink: '/recherche-mots-cles/cluster-thematique',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'cluster-thematique',
    title: 'Cluster Thématique SEO : Structurer son Contenu pour Dominer',
    metaTitle: 'Cluster Thématique SEO - Guide Structure 2026',
    metaDescription: 'Organisez votre contenu en clusters thématiques (cocon sémantique) pour renforcer votre autorité topique et améliorer votre SEO.',
    keyword: 'cluster thématique seo',
    secondaryKeywords: ['cocon sémantique', 'topic cluster', 'siloing seo'],
    intent: 'info',
    cluster: 'recherche-mots-cles',
    excerpt: 'Les clusters thématiques (ou cocons sémantiques) organisent votre contenu autour de thèmes centraux. Cette structure renforce votre autorité aux yeux de Google.',
    tableOfContents: true,
    readingTime: 32,
    difficulty: 'intermediaire',
    lastUpdated: '2026-01-08',
    author: 'thomas-dupont',
    relatedSlugs: ['intention-de-recherche', 'mots-cles-longue-traine'],
    faq: [
      {
        question: 'Cluster thématique et cocon sémantique, c\'est pareil ?',
        answer: 'Presque. Le cluster thématique est le concept anglo-saxon, le cocon sémantique la version française popularisée par Laurent Bourrelly. Les principes sont similaires.',
      },
      {
        question: 'Combien d\'articles dans un cluster ?',
        answer: 'Un cluster efficace compte généralement 5 à 15 articles satellites autour d\'une page pilier. La quantité dépend de la profondeur du sujet.',
      },
      {
        question: 'Faut-il créer tous les articles d\'un cluster en même temps ?',
        answer: 'Non. Vous pouvez commencer par la page pilier et 3-5 satellites, puis ajouter progressivement. L\'important est de maintenir le maillage cohérent.',
      },
      {
        question: 'Peut-on avoir des clusters qui se chevauchent ?',
        answer: 'Oui, des liens entre clusters sont possibles et même recommandés quand c\'est pertinent. Évitez cependant de créer de la confusion sur quel contenu répond à quelle requête.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Créer du contenu sans structure, c\'est comme construire une maison sans plan. Les clusters thématiques donnent une architecture à votre site qui plaît à Google et à vos visiteurs.',
      },
      {
        type: 'text',
        content: 'Ce guide fait partie de notre module sur la recherche de mots-clés. Si vous n\'avez pas encore lu les bases, commencez par notre guide principal.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Qu\'est-ce qu\'un cluster thématique ?',
      },
      {
        type: 'text',
        content: 'Un cluster thématique est un groupe de contenus interconnectés autour d\'un sujet central. Il se compose d\'une page pilier (pillar page) et de pages satellites qui approfondissent des sous-sujets.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'L\'idée clé',
          content: 'Un cluster démontre à Google que vous couvrez un sujet en profondeur. Cette "autorité topique" vous permet de ranker sur des mots-clés plus compétitifs que ne le permettrait votre DR seul.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Les composants d\'un cluster',
      },
      {
        type: 'heading',
        level: 3,
        content: 'La page pilier (Pillar Page)',
      },
      {
        type: 'text',
        content: 'C\'est la page principale qui couvre le sujet de manière large. Elle cible un mot-clé générique et compétitif. Elle lie vers toutes les pages satellites.',
      },
      {
        type: 'list',
        content: [
          'Contenu long et complet (2 000-5 000 mots)',
          'Couvre le sujet de manière générale',
          'Cible le mot-clé "tête" le plus compétitif',
          'Sert de hub vers les pages satellites',
          'Format : guide ultime, guide complet, tout savoir sur...',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les pages satellites (Cluster Content)',
      },
      {
        type: 'text',
        content: 'Ce sont des articles qui approfondissent des aspects spécifiques du sujet principal. Ils ciblent des mots-clés longue traîne et renvoient vers la page pilier.',
      },
      {
        type: 'list',
        content: [
          'Contenu focalisé (1 000-2 500 mots)',
          'Chacune traite un sous-sujet en profondeur',
          'Cible un mot-clé longue traîne spécifique',
          'Lien systématique vers la page pilier',
          'Format : tutoriel, guide spécifique, FAQ, comparatif',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Le maillage interne',
      },
      {
        type: 'text',
        content: 'Le maillage interne est le système nerveux du cluster. Il distribue l\'autorité et aide Google à comprendre les relations entre les pages.',
      },
      {
        type: 'table',
        content: {
          headers: ['De', 'Vers', 'Fréquence', 'Type de lien'],
          rows: [
            ['Page pilier', 'Chaque satellite', 'Obligatoire', 'Contextuel dans le texte'],
            ['Satellite', 'Page pilier', 'Obligatoire', 'Contextuel + CTA en fin'],
            ['Satellite', 'Autre satellite', 'Si pertinent', 'Contextuel naturel'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Exemple concret : ce site !',
      },
      {
        type: 'text',
        content: 'Vous lisez actuellement un article du cluster "Recherche de mots-clés". Voici sa structure :',
      },
      {
        type: 'table',
        content: {
          headers: ['Type', 'Titre', 'Mot-clé cible'],
          rows: [
            ['PAGE PILIER', 'Recherche de mots-clés : Guide complet', 'recherche de mots clés'],
            ['Satellite', 'Intention de recherche SEO', 'intention de recherche seo'],
            ['Satellite', 'Mots-clés longue traîne', 'mots clés longue traîne'],
            ['Satellite', 'Volume et difficulté', 'difficulté mot clé'],
            ['Satellite', 'Cluster thématique (cette page)', 'cluster thématique seo'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Pourquoi les clusters fonctionnent',
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Autorité topique',
      },
      {
        type: 'text',
        content: 'Google comprend que vous êtes expert du sujet car vous le couvrez sous tous les angles. Cette autorité vous permet de ranker sur des mots-clés plus difficiles.',
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Distribution du PageRank',
      },
      {
        type: 'text',
        content: 'Le maillage interne fait circuler l\'autorité (PageRank) entre vos pages. Les backlinks vers une page bénéficient à tout le cluster.',
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Meilleure indexation',
      },
      {
        type: 'text',
        content: 'Les liens internes aident Googlebot à découvrir et crawler toutes vos pages. Aucune page orpheline = meilleure indexation.',
      },
      {
        type: 'heading',
        level: 3,
        content: '4. Expérience utilisateur',
      },
      {
        type: 'text',
        content: 'Les visiteurs trouvent facilement l\'information connexe. Ils restent plus longtemps sur le site et visitent plus de pages.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Comment créer un cluster étape par étape',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étape 1 : Choisir le thème central',
      },
      {
        type: 'list',
        content: [
          'Doit être pertinent pour votre activité',
          'Assez large pour avoir plusieurs sous-sujets',
          'Assez spécifique pour montrer votre expertise',
          'Correspond à une demande de recherche',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étape 2 : Identifier tous les sous-sujets',
      },
      {
        type: 'text',
        content: 'Utilisez les techniques de recherche de mots-clés longue traîne pour identifier tous les aspects du sujet.',
      },
      {
        type: 'list',
        content: [
          'Google Suggest et PAA',
          'AnswerThePublic',
          'Analyse des concurrents',
          'Questions de vos clients',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étape 3 : Mapper les mots-clés',
      },
      {
        type: 'text',
        content: 'Assignez un mot-clé unique à chaque page :',
      },
      {
        type: 'list',
        content: [
          '1 mot-clé principal par page',
          'Éviter la cannibalisation (2 pages sur le même mot-clé)',
          'Regrouper les mots-clés similaires',
          'Vérifier les intentions pour chaque mot-clé',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étape 4 : Créer le contenu',
      },
      {
        type: 'list',
        content: [
          'Commencez par la page pilier (vision globale)',
          'Créez les satellites par ordre de priorité',
          'Maintenez une cohérence de ton et de qualité',
          'Mettez à jour la page pilier à chaque nouveau satellite',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Étape 5 : Mettre en place le maillage',
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Règle d\'or du maillage',
          content: 'Chaque page satellite doit avoir un lien vers la page pilier. La page pilier doit lier vers chaque satellite. Les satellites peuvent se lier entre eux si c\'est pertinent.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Cluster vs Cocon sémantique vs Siloing',
      },
      {
        type: 'table',
        content: {
          headers: ['Concept', 'Origine', 'Principe clé', 'Différence'],
          rows: [
            ['Topic Cluster', 'HubSpot (US)', 'Page pilier + satellites', 'Maillage bidirectionnel'],
            ['Cocon sémantique', 'Laurent Bourrelly (FR)', 'Hiérarchie de pages', 'Structure plus stricte'],
            ['Siloing', 'Bruce Clay (US)', 'Cloisonnement thématique', 'Pas de liens entre silos'],
          ],
        },
      },
      {
        type: 'text',
        content: 'En pratique, le terme "cluster thématique" est le plus utilisé et le concept le plus flexible. Adoptez-le sauf si vous avez une raison spécifique d\'utiliser une autre approche.',
      },
      {
        type: 'heading',
        level: 2,
        content: '📚 SECTION PREMIUM : Études de cas',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas 1 : Blog fitness - Domination d\'une thématique',
      },
      {
        type: 'text',
        content: 'Un blog fitness a créé un cluster autour de "musculation prise de masse" et dominé les résultats en 8 mois.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Structure du cluster',
      },
      {
        type: 'table',
        content: {
          headers: ['Type', 'Titre', 'Mot-clé', 'Volume', 'Position atteinte'],
          rows: [
            ['Pilier', 'Guide Musculation Prise de Masse', 'musculation prise de masse', '6 600', '3'],
            ['Satellite', 'Programme prise de masse 3 jours', 'programme prise de masse', '2 900', '2'],
            ['Satellite', 'Alimentation prise de masse', 'alimentation prise de masse', '3 600', '4'],
            ['Satellite', 'Prise de masse sans gras', 'prise de masse sèche', '1 900', '1'],
            ['Satellite', 'Compléments prise de masse', 'complément prise de masse', '720', '2'],
            ['Satellite', 'Erreurs prise de masse débutant', 'erreur prise de masse', '390', '1'],
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
          'Trafic cluster : 0 → 15 000 visiteurs/mois',
          'Backlinks naturels attirés : 45 (vers différentes pages)',
          'Position moyenne sur le thème : 2,8',
          'Temps sur site cluster : 4min30 (vs 2min site global)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas 2 : Site e-commerce - Clusters produits',
      },
      {
        type: 'text',
        content: 'Une boutique de running a créé des clusters autour de chaque catégorie de produits.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Exemple : Cluster "Chaussures Trail"',
      },
      {
        type: 'table',
        content: {
          headers: ['Type', 'Page', 'Objectif'],
          rows: [
            ['Pilier', 'Guide Chaussures Trail', 'Attirer trafic info + lier vers produits'],
            ['Satellite', 'Chaussures trail débutant', 'Cibler segment spécifique'],
            ['Satellite', 'Trail vs Running : différences', 'Répondre aux questions'],
            ['Satellite', 'Entretenir chaussures trail', 'Fidéliser, expertise'],
            ['Catégorie', 'Toutes nos chaussures trail', 'Convertir'],
            ['Produits', 'Fiches produits individuelles', 'Convertir'],
          ],
        },
      },
      {
        type: 'heading',
        level: 4,
        content: 'Impact sur les ventes',
      },
      {
        type: 'list',
        content: [
          'Trafic organique catégorie : +180%',
          'Ventes catégorie : +95%',
          'Position "chaussures trail" : 45 → 8',
          'Les guides génèrent 40% du trafic, 15% des ventes directes',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Cas 3 : Site B2B - Clusters par persona',
      },
      {
        type: 'text',
        content: 'Une agence SaaS a organisé ses clusters par persona cible plutôt que par thématique.',
      },
      {
        type: 'heading',
        level: 4,
        content: 'Structure adoptée',
      },
      {
        type: 'table',
        content: {
          headers: ['Cluster/Persona', 'Page pilier', 'Satellites'],
          rows: [
            ['Startups', 'CRM pour startups', 'Choisir CRM startup, CRM gratuit, Migration CRM...'],
            ['PME', 'CRM pour PME', 'CRM PME industrie, Prix CRM PME, CRM équipe vente...'],
            ['Grands comptes', 'CRM Entreprise', 'CRM multi-sites, Intégration ERP, Conformité RGPD...'],
          ],
        },
      },
      {
        type: 'heading',
        level: 4,
        content: 'Résultats par cluster',
      },
      {
        type: 'table',
        content: {
          headers: ['Cluster', 'Trafic/mois', 'Leads/mois', 'Panier moyen lead'],
          rows: [
            ['Startups', '8 500', '45', '2 500€'],
            ['PME', '4 200', '28', '8 000€'],
            ['Grands comptes', '1 800', '8', '45 000€'],
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
        content: 'Exercice 1 : Identifier vos thèmes de cluster',
      },
      {
        type: 'text',
        content: 'Listez 3 thèmes centraux pour votre activité :',
      },
      {
        type: 'list',
        content: [
          'Thème 1 : ________________',
          '  Est-ce assez large pour 5+ sous-sujets ? Oui / Non',
          '  Est-ce pertinent pour votre business ? Oui / Non',
          '  Y a-t-il une demande de recherche ? Oui / Non',
          '',
          'Thème 2 : ________________',
          '  Est-ce assez large pour 5+ sous-sujets ? Oui / Non',
          '  Est-ce pertinent pour votre business ? Oui / Non',
          '  Y a-t-il une demande de recherche ? Oui / Non',
          '',
          'Thème 3 : ________________',
          '  Est-ce assez large pour 5+ sous-sujets ? Oui / Non',
          '  Est-ce pertinent pour votre business ? Oui / Non',
          '  Y a-t-il une demande de recherche ? Oui / Non',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Concevoir un cluster complet',
      },
      {
        type: 'text',
        content: 'Pour votre thème prioritaire, concevez le cluster :',
      },
      {
        type: 'list',
        content: [
          'THÈME : ________________',
          '',
          'PAGE PILIER :',
          '  Titre : ________________',
          '  Mot-clé : ________________',
          '  Volume : ____ KD : ____',
          '',
          'SATELLITES (minimum 5) :',
          '',
          'Satellite 1 :',
          '  Titre : ________________',
          '  Mot-clé : ________________',
          '  Volume : ____ KD : ____',
          '',
          'Satellite 2 :',
          '  Titre : ________________',
          '  Mot-clé : ________________',
          '  Volume : ____ KD : ____',
          '',
          'Satellite 3 :',
          '  Titre : ________________',
          '  Mot-clé : ________________',
          '  Volume : ____ KD : ____',
          '',
          'Satellite 4 :',
          '  Titre : ________________',
          '  Mot-clé : ________________',
          '  Volume : ____ KD : ____',
          '',
          'Satellite 5 :',
          '  Titre : ________________',
          '  Mot-clé : ________________',
          '  Volume : ____ KD : ____',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Planifier le maillage',
      },
      {
        type: 'text',
        content: 'Pour le cluster de l\'exercice 2, planifiez les liens :',
      },
      {
        type: 'table',
        content: {
          headers: ['Page source', 'Page cible', 'Ancre prévue'],
          rows: [
            ['Pilier → Satellite 1', '________________', '________________'],
            ['Pilier → Satellite 2', '________________', '________________'],
            ['Pilier → Satellite 3', '________________', '________________'],
            ['Satellite 1 → Pilier', '________________', '________________'],
            ['Satellite 2 → Pilier', '________________', '________________'],
            ['Satellite 1 → Satellite 2', '________________', '________________'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Auditer un cluster existant',
      },
      {
        type: 'text',
        content: 'Si vous avez déjà du contenu sur un thème, auditez-le :',
      },
      {
        type: 'list',
        content: [
          'Thème audité : ________________',
          '',
          'Pages existantes sur ce thème :',
          '  1. ________________ (URL)',
          '  2. ________________',
          '  3. ________________',
          '  4. ________________',
          '',
          'Y a-t-il une page pilier ? Oui / Non',
          'Si non, quelle page pourrait devenir le pilier ? ________________',
          '',
          'Liens pilier → satellites existants : ____ sur ____',
          'Liens satellites → pilier existants : ____ sur ____',
          '',
          'Actions correctives :',
          '1. ________________',
          '2. ________________',
          '3. ________________',
        ],
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Clusters thématiques',
          questions: [
            {
              question: 'Qu\'est-ce qu\'un cluster thématique ?',
              options: ['Un groupe de mots-clés', 'Un groupe de contenus interconnectés autour d\'un sujet', 'Un type de backlink', 'Une technique de spam'],
              correctIndex: 1,
              explanation: 'Un cluster thématique est un groupe de contenus (page pilier + satellites) interconnectés autour d\'un sujet central.',
            },
            {
              question: 'Qu\'est-ce qu\'une page pilier ?',
              options: ['La page d\'accueil', 'Une page longue couvrant un sujet de manière générale', 'Une page de contact', 'Un article de blog court'],
              correctIndex: 1,
              explanation: 'La page pilier est le contenu central qui couvre un sujet de manière large et lie vers toutes les pages satellites.',
            },
            {
              question: 'Combien de pages satellites minimum recommande-t-on ?',
              options: ['1-2', '5-15', '50+', 'Peu importe'],
              correctIndex: 1,
              explanation: 'Un cluster efficace compte généralement 5 à 15 articles satellites. Trop peu ne démontre pas l\'expertise, trop dilue l\'effort.',
            },
            {
              question: 'Quelle est la règle de maillage fondamentale ?',
              options: ['Aucun lien entre pages', 'Satellites → Pilier seulement', 'Liens bidirectionnels pilier ↔ satellites', 'Liens aléatoires'],
              correctIndex: 2,
              explanation: 'La règle d\'or : chaque satellite lie vers le pilier, et le pilier lie vers chaque satellite. Le maillage est bidirectionnel.',
            },
            {
              question: 'Qu\'est-ce que l\'autorité topique ?',
              options: ['Le nombre de pages d\'un site', 'La reconnaissance par Google de votre expertise sur un sujet', 'Le DR du domaine', 'Le nombre de backlinks'],
              correctIndex: 1,
              explanation: 'L\'autorité topique est la reconnaissance par Google que vous êtes expert d\'un sujet car vous le couvrez en profondeur avec du contenu de qualité.',
            },
            {
              question: 'Peut-on avoir des liens entre différents clusters ?',
              options: ['Jamais', 'Oui, si c\'est pertinent', 'Seulement via la page d\'accueil', 'Uniquement avec nofollow'],
              correctIndex: 1,
              explanation: 'Oui, des liens entre clusters sont possibles et recommandés quand c\'est pertinent pour l\'utilisateur.',
            },
            {
              question: 'Quelle est la différence entre cluster et cocon sémantique ?',
              options: ['Aucune différence', 'Le cluster est anglo-saxon, le cocon est français avec une structure plus stricte', 'Le cocon est meilleur', 'Le cluster est dépassé'],
              correctIndex: 1,
              explanation: 'Le topic cluster (HubSpot) et le cocon sémantique (Laurent Bourrelly) sont similaires. Le cocon a historiquement une structure hiérarchique plus stricte.',
            },
            {
              question: 'Par quoi commencer la création d\'un cluster ?',
              options: ['Les pages satellites', 'La page pilier', 'Le maillage', 'L\'achat de backlinks'],
              correctIndex: 1,
              explanation: 'Commencez par la page pilier qui donne la vision globale, puis créez les satellites qui approfondissent chaque aspect.',
            },
            {
              question: 'Pourquoi les clusters améliorent-ils l\'indexation ?',
              options: ['Google préfère les gros sites', 'Le maillage aide Googlebot à découvrir toutes les pages', 'Plus de pages = meilleur ranking', 'L\'indexation n\'est pas liée'],
              correctIndex: 1,
              explanation: 'Le maillage interne aide Googlebot à découvrir et crawler toutes vos pages. Aucune page orpheline = meilleure indexation.',
            },
            {
              question: 'Un backlink vers une page satellite bénéficie-t-il au cluster entier ?',
              options: ['Non, uniquement à cette page', 'Oui, grâce au maillage interne', 'Seulement si c\'est un backlink dofollow', 'Les backlinks n\'ont aucun effet'],
              correctIndex: 1,
              explanation: 'Oui ! Grâce au maillage interne, l\'autorité (PageRank) du backlink circule vers la page pilier et les autres satellites.',
            },
          ],
        },
      },
      {
        type: 'cta',
        content: {
          title: 'Maîtrisez la recherche de mots-clés',
          description: 'Vous avez terminé ce module ! Revenez au guide principal pour consolider vos connaissances.',
          buttonText: 'Retour au guide principal →',
          buttonLink: '/recherche-mots-cles',
          variant: 'primary',
        },
      },
    ],
  },
];

export const clusterData: ClusterConfig = {
  slug: 'recherche-mots-cles',
  name: 'Recherche de mots-clés',
  description: 'Apprenez à identifier les bons mots-clés pour votre SEO : volume, difficulté, intention de recherche et stratégie de clusters thématiques.',
  metaTitle: 'Recherche de Mots-Clés SEO | SEOtika 2026',
  metaDescription: 'Formation complète à la recherche de mots-clés : trouver les keywords rentables, analyser la concurrence, construire des clusters.',
  pillarPage,
  childPages,
  icon: 'Search',
  color: 'purple',
};

export default clusterData;
