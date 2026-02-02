import { ClusterConfig, Article } from '@/types';

const pillarPage: Article = {
  slug: 'index',
  title: 'SEO Technique : Guide Complet pour Optimiser les Fondations de votre Site',
  metaTitle: 'SEO Technique - Guide Complet 2026',
  metaDescription: 'Maîtrisez le SEO technique : vitesse, indexation, crawlabilité, Core Web Vitals. Optimisez les fondations techniques de votre site.',
  keyword: 'seo technique',
  secondaryKeywords: ['référencement technique', 'optimisation technique seo', 'audit technique'],
  intent: 'info',
  cluster: 'seo-technique',
  excerpt: 'Le SEO technique assure que Google peut explorer et indexer votre site efficacement. Sans bases techniques solides, vos efforts SEO seront limités.',
  tableOfContents: true,
  readingTime: 45,
  difficulty: 'intermediaire',
  lastUpdated: '2026-01-22',
  author: 'thomas-dupont',
  relatedSlugs: ['vitesse-site', 'indexation-google', 'core-web-vitals'],
  faq: [
    {
      question: 'Le SEO technique est-il difficile à maîtriser ?',
      answer: 'Les bases sont accessibles à tous. Les aspects avancés (JavaScript SEO, serveur) demandent plus de compétences techniques. Commencez par les fondamentaux.',
    },
    {
      question: 'À quelle fréquence faire un audit technique ?',
      answer: 'Un audit complet tous les 6 mois est recommandé. Surveillez les erreurs critiques (Search Console) en continu.',
    },
    {
      question: 'Puis-je faire du SEO technique sans être développeur ?',
      answer: 'Oui, les fondamentaux sont accessibles. De nombreux outils ont des interfaces simples. Pour les aspects avancés, vous pouvez collaborer avec un développeur.',
    },
    {
      question: 'Le SEO technique est-il plus important que le contenu ?',
      answer: 'Les deux sont complémentaires. Un excellent contenu sur un site techniquement défaillant ne sera pas visible. Un site parfait techniquement sans bon contenu ne rankera pas.',
    },
  ],
  content: [
    {
      type: 'text',
      content: 'Vous pouvez avoir le meilleur contenu du monde, si Google ne peut pas l\'explorer et l\'indexer correctement, personne ne le trouvera. Le SEO technique pose les fondations sur lesquelles repose tout votre référencement.',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Ce que vous allez apprendre',
        content: 'Ce guide premium couvre l\'ensemble du SEO technique : crawlabilité, indexation, vitesse, Core Web Vitals, sécurité et mobile-first. Vous découvrirez 3 études de cas réels et pratiquerez avec des exercices concrets.',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Qu\'est-ce que le SEO technique ?',
    },
    {
      type: 'text',
      content: 'Le SEO technique regroupe toutes les optimisations liées à l\'infrastructure et au fonctionnement de votre site web. Contrairement au SEO on-page (contenu) et off-page (backlinks), il se concentre sur les aspects techniques qui permettent aux moteurs de recherche d\'explorer, comprendre et indexer votre site.',
    },
    {
      type: 'text',
      content: 'Imaginez votre site comme une maison. Le contenu, c\'est la décoration intérieure. Les backlinks, c\'est la réputation du quartier. Le SEO technique, ce sont les fondations, la plomberie et l\'électricité. Sans ces éléments fonctionnels, la plus belle maison reste inhabitable.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pourquoi le SEO technique est fondamental',
    },
    {
      type: 'list',
      content: [
        'Accessibilité : Si Google ne peut pas explorer vos pages, elles n\'existent pas pour lui',
        'Indexation : Une page non indexée ne peut jamais apparaître dans les résultats',
        'Performance : La vitesse est un facteur de ranking et influence l\'expérience utilisateur',
        'Expérience mobile : Google utilise l\'indexation mobile-first depuis 2021',
        'Confiance : HTTPS et sécurité sont devenus des standards obligatoires',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Les 6 piliers du SEO technique',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pilier 1 : Crawlabilité',
    },
    {
      type: 'text',
      content: 'La crawlabilité désigne la capacité de Google à explorer toutes les pages de votre site. Googlebot doit pouvoir accéder à vos pages, suivre vos liens, et découvrir votre contenu.',
    },
    {
      type: 'text',
      content: 'Les éléments clés de la crawlabilité sont le fichier robots.txt qui indique ce que Google peut explorer, le sitemap XML qui liste vos pages importantes, et la structure de liens internes qui guide les robots. Pour approfondir, consultez notre guide sur le robots.txt.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pilier 2 : Indexabilité',
    },
    {
      type: 'text',
      content: 'Une fois qu\'une page est explorée, elle doit pouvoir être indexée. Plusieurs facteurs peuvent empêcher l\'indexation : balise noindex, contenu dupliqué, qualité insuffisante, ou problèmes techniques.',
    },
    {
      type: 'text',
      content: 'L\'indexation est le processus par lequel Google ajoute vos pages à sa base de données. Notre article sur l\'indexation Google détaille toutes les techniques pour faire indexer vos pages rapidement.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pilier 3 : Vitesse de chargement',
    },
    {
      type: 'text',
      content: 'La vitesse est un facteur de ranking confirmé par Google. Elle impacte aussi directement l\'expérience utilisateur et les taux de conversion. Un site lent perd des visiteurs et du chiffre d\'affaires.',
    },
    {
      type: 'table',
      content: {
        headers: ['Temps de chargement', 'Impact'],
        rows: [
          ['< 2 secondes', 'Excellent - Taux de rebond minimal'],
          ['2-3 secondes', 'Acceptable - Performances normales'],
          ['3-5 secondes', 'Lent - Perte de 30% des visiteurs'],
          ['> 5 secondes', 'Critique - Perte de 50%+ des visiteurs'],
        ],
      },
    },
    {
      type: 'text',
      content: 'Découvrez toutes les techniques d\'optimisation dans notre guide sur la vitesse de site.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pilier 4 : Core Web Vitals',
    },
    {
      type: 'text',
      content: 'Les Core Web Vitals sont trois métriques de performance définies par Google : LCP (temps de chargement du plus grand élément), INP (réactivité aux interactions), et CLS (stabilité visuelle).',
    },
    {
      type: 'table',
      content: {
        headers: ['Métrique', 'Mesure', 'Objectif'],
        rows: [
          ['LCP (Largest Contentful Paint)', 'Chargement du contenu principal', '< 2,5 secondes'],
          ['INP (Interaction to Next Paint)', 'Réactivité aux clics', '< 200 ms'],
          ['CLS (Cumulative Layout Shift)', 'Stabilité de la mise en page', '< 0,1'],
        ],
      },
    },
    {
      type: 'text',
      content: 'Notre guide complet sur les Core Web Vitals vous explique comment mesurer et optimiser chaque métrique.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pilier 5 : Mobile-first',
    },
    {
      type: 'text',
      content: 'Depuis 2021, Google utilise l\'indexation mobile-first : c\'est la version mobile de votre site qui est indexée en priorité. Un site non optimisé pour mobile est pénalisé dans les résultats.',
    },
    {
      type: 'list',
      content: [
        'Design responsive qui s\'adapte à toutes les tailles d\'écran',
        'Contenu identique sur mobile et desktop',
        'Boutons et liens suffisamment grands pour être cliqués au doigt',
        'Pas de pop-ups intrusifs sur mobile',
        'Texte lisible sans zoom',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pilier 6 : Sécurité (HTTPS)',
    },
    {
      type: 'text',
      content: 'Le HTTPS n\'est plus optionnel. Les navigateurs affichent un avertissement "Non sécurisé" pour les sites HTTP. C\'est un facteur de ranking et un signal de confiance pour les utilisateurs.',
    },
    {
      type: 'list',
      content: [
        'Certificat SSL/TLS installé et valide',
        'Toutes les pages en HTTPS (pas de contenu mixte)',
        'Redirections 301 de HTTP vers HTTPS',
        'HSTS activé pour forcer HTTPS',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Étude de cas n°1 : E-commerce - Site non indexé',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Contexte',
        content: 'Une boutique en ligne de 3000 produits avec seulement 200 pages indexées. Le site était invisible dans Google malgré un bon catalogue.',
      },
    },
    {
      type: 'text',
      content: 'ElectroShop.fr avait investi dans du contenu produit de qualité mais ne recevait que 50 visites organiques par mois. L\'audit technique a révélé des problèmes critiques.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Les problèmes identifiés',
    },
    {
      type: 'list',
      content: [
        'Robots.txt bloquait /products/ (toutes les fiches produits)',
        'Sitemap XML absent',
        'Navigation par filtres créant des millions d\'URLs dupliquées',
        'Balise canonical mal configurée sur les variantes produits',
        'Pages de pagination sans rel="next/prev"',
        'Temps de chargement de 8 secondes (JavaScript lourd)',
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
        headers: ['Problème', 'Solution', 'Priorité'],
        rows: [
          ['Robots.txt bloquant', 'Modification pour autoriser /products/', 'Critique'],
          ['Pas de sitemap', 'Génération automatique + soumission GSC', 'Haute'],
          ['URLs filtres dupliquées', 'Noindex sur filtres + canonical vers page principale', 'Haute'],
          ['Variantes produits', 'Canonical vers le produit parent', 'Moyenne'],
          ['Vitesse lente', 'Lazy loading, compression, CDN', 'Moyenne'],
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
        'Pages indexées : de 200 à 2 800 (+1300%)',
        'Trafic organique : de 50 à 4 500 visites/mois',
        'Positions : 450 mots-clés en page 1',
        'Chiffre d\'affaires organique : +680%',
        'Temps de chargement : de 8s à 2.3s',
      ],
    },
    {
      type: 'infobox',
      content: {
        type: 'success',
        title: 'Leçon clé',
        content: 'Un simple fichier robots.txt mal configuré peut rendre invisible un site entier. L\'audit technique doit être la première étape de tout projet SEO.',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Étude de cas n°2 : Site média - Core Web Vitals en rouge',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Contexte',
        content: 'Un site d\'actualités avec 100 000 visites/mois en perte de vitesse. Core Web Vitals en rouge, trafic en baisse de 30% sur 6 mois.',
      },
    },
    {
      type: 'text',
      content: 'InfoActu.fr avait vu son trafic chuter depuis la mise à jour Google Page Experience. Les Core Web Vitals étaient catastrophiques sur mobile.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'L\'audit Core Web Vitals',
    },
    {
      type: 'table',
      content: {
        headers: ['Métrique', 'Valeur initiale', 'Objectif', 'Statut'],
        rows: [
          ['LCP', '6.8 secondes', '< 2.5s', '🔴 Mauvais'],
          ['INP', '450 ms', '< 200ms', '🔴 Mauvais'],
          ['CLS', '0.35', '< 0.1', '🔴 Mauvais'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Les causes identifiées',
    },
    {
      type: 'list',
      content: [
        'LCP : Images hero de 2-3 Mo, pas de lazy loading',
        'INP : JavaScript publicitaire bloquant le thread principal',
        'CLS : Publicités chargeant sans dimensions réservées',
        'Général : 15 fichiers CSS, 25 fichiers JS non optimisés',
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
        headers: ['Action', 'Impact sur', 'Résultat'],
        rows: [
          ['Compression images WebP + srcset', 'LCP', '-70% poids images'],
          ['Preload image LCP', 'LCP', '-1.5s sur LCP'],
          ['Async/defer sur scripts pub', 'INP', '-200ms interaction'],
          ['Réservation espace pubs (aspect-ratio)', 'CLS', 'CLS de 0.35 à 0.05'],
          ['Bundling CSS/JS', 'Tous', '-40% requêtes HTTP'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Résultats après 3 mois',
    },
    {
      type: 'table',
      content: {
        headers: ['Métrique', 'Avant', 'Après', 'Statut'],
        rows: [
          ['LCP', '6.8s', '1.9s', '🟢 Bon'],
          ['INP', '450ms', '180ms', '🟢 Bon'],
          ['CLS', '0.35', '0.05', '🟢 Bon'],
        ],
      },
    },
    {
      type: 'list',
      content: [
        'Trafic organique : +45% (récupération + croissance)',
        'Taux de rebond mobile : de 65% à 42%',
        'Revenus publicitaires : +15% (meilleure visibilité des pubs)',
        'Pages vues/session : +28%',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Étude de cas n°3 : SaaS B2B - Migration HTTPS ratée',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Contexte',
        content: 'Un SaaS B2B ayant perdu 80% de son trafic organique après une migration HTTP vers HTTPS mal gérée. Urgence SEO.',
      },
    },
    {
      type: 'text',
      content: 'CloudSoft.io avait migré vers HTTPS sans plan de redirections. 3 semaines après, le trafic s\'était effondré et les leads organiques avaient disparu.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Les erreurs commises',
    },
    {
      type: 'list',
      content: [
        'Pas de redirections 301 de HTTP vers HTTPS',
        'Liens internes restés en HTTP (contenu mixte)',
        'Sitemap XML toujours avec URLs HTTP',
        'Canonical toujours en HTTP',
        'Google Search Console : seulement la propriété HTTP vérifiée',
        'Backlinks pointant vers HTTP (pas de redirections)',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Le plan de récupération',
    },
    {
      type: 'list',
      content: [
        '1. Redirections 301 globales HTTP → HTTPS (urgent)',
        '2. Mise à jour de tous les liens internes',
        '3. Nouveau sitemap avec URLs HTTPS',
        '4. Mise à jour des balises canonical',
        '5. Vérification propriété HTTPS dans Search Console',
        '6. Demande de réindexation des pages clés',
        '7. Contact des sites avec backlinks pour mise à jour',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Chronologie de récupération',
    },
    {
      type: 'table',
      content: {
        headers: ['Semaine', 'Trafic (% du niveau initial)', 'Action'],
        rows: [
          ['S0 (avant)', '100%', 'État initial'],
          ['S1-S3', '20%', 'Migration ratée'],
          ['S4', '25%', 'Redirections 301 en place'],
          ['S6', '45%', 'Liens internes corrigés'],
          ['S8', '70%', 'Réindexation en cours'],
          ['S12', '95%', 'Récupération quasi-complète'],
          ['S16', '120%', 'Croissance reprend + bonus HTTPS'],
        ],
      },
    },
    {
      type: 'infobox',
      content: {
        type: 'warning',
        title: 'Leçon importante',
        content: 'Une migration HTTPS (ou toute migration technique) doit être planifiée minutieusement. Un checklist complet et des tests avant lancement sont essentiels.',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Checklist SEO technique complète',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Crawlabilité',
    },
    {
      type: 'list',
      content: [
        'Fichier robots.txt accessible et correctement configuré',
        'Pas de pages importantes bloquées par erreur',
        'Sitemap XML créé et soumis à Search Console',
        'Structure de liens internes logique',
        'Pas de pages orphelines (sans liens entrants)',
        'Budget crawl optimisé (pas de pages inutiles)',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Indexation',
    },
    {
      type: 'list',
      content: [
        'Toutes les pages importantes sont indexables',
        'Balises noindex uniquement sur pages non souhaitées',
        'Canonicals correctement configurés',
        'Pas de contenu dupliqué sans canonical',
        'Pas d\'erreurs d\'indexation dans Search Console',
        'Hreflang en place pour sites multilingues',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Performance',
    },
    {
      type: 'list',
      content: [
        'Core Web Vitals au vert (LCP, INP, CLS)',
        'Temps de chargement < 3 secondes',
        'Images optimisées (WebP, lazy loading)',
        'CSS/JS minifiés et compressés',
        'Mise en cache navigateur configurée',
        'CDN en place pour sites internationaux',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Mobile et sécurité',
    },
    {
      type: 'list',
      content: [
        'Site 100% responsive',
        'Test Mobile-Friendly passé',
        'HTTPS actif sur toutes les pages',
        'Certificat SSL valide et à jour',
        'Pas de contenu mixte (HTTP dans HTTPS)',
        'Redirections HTTP vers HTTPS en place',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Outils essentiels pour le SEO technique',
    },
    {
      type: 'table',
      content: {
        headers: ['Outil', 'Usage principal', 'Prix'],
        rows: [
          ['Google Search Console', 'Indexation, erreurs, Core Web Vitals', 'Gratuit'],
          ['PageSpeed Insights', 'Analyse performance, Core Web Vitals', 'Gratuit'],
          ['Screaming Frog', 'Crawl complet, audit technique', 'Gratuit (500 URLs) / 209€/an'],
          ['GTmetrix', 'Analyse vitesse détaillée', 'Gratuit / Premium'],
          ['Lighthouse', 'Audit performance, accessibilité, SEO', 'Gratuit (Chrome DevTools)'],
          ['Ahrefs Site Audit', 'Audit technique complet', 'À partir de 99$/mois'],
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
      content: 'Exercice 1 : Audit rapide avec Search Console',
    },
    {
      type: 'text',
      content: 'Connectez-vous à Google Search Console et analysez :',
    },
    {
      type: 'list',
      content: [
        '1. Couverture > Pages : Combien de pages valides vs erreurs ?',
        '2. Core Web Vitals : Statut mobile et desktop',
        '3. Amélioration > Utilisabilité mobile : Erreurs ?',
        '4. Sitemaps : Est-il soumis et sans erreurs ?',
        '5. Paramètres > Exploration : Problèmes signalés ?',
      ],
    },
    {
      type: 'table',
      content: {
        headers: ['Élément', 'Statut', 'Action nécessaire'],
        rows: [
          ['Pages indexées', '... / ... soumises', '...'],
          ['Erreurs de couverture', '...', '...'],
          ['Core Web Vitals mobile', '🟢/🟡/🔴', '...'],
          ['Erreurs mobile', '...', '...'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 2 : Test de vitesse complet',
    },
    {
      type: 'text',
      content: 'Testez votre page d\'accueil avec 3 outils différents :',
    },
    {
      type: 'list',
      content: [
        '1. PageSpeed Insights : Notez le score mobile et desktop',
        '2. GTmetrix : Notez le Grade et le temps de chargement',
        '3. Lighthouse (Chrome DevTools) : Notez les 4 scores',
      ],
    },
    {
      type: 'table',
      content: {
        headers: ['Outil', 'Score/Métrique', 'Valeur', 'Objectif'],
        rows: [
          ['PageSpeed', 'Score Mobile', '...', '> 90'],
          ['PageSpeed', 'LCP', '...', '< 2.5s'],
          ['GTmetrix', 'Grade', '...', 'A ou B'],
          ['Lighthouse', 'Performance', '...', '> 90'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 3 : Vérification robots.txt et sitemap',
    },
    {
      type: 'text',
      content: 'Vérifiez la configuration de votre site :',
    },
    {
      type: 'list',
      content: [
        '1. Accédez à votresite.fr/robots.txt - Existe-t-il ?',
        '2. Vérifiez qu\'aucune page importante n\'est bloquée',
        '3. Accédez à votresite.fr/sitemap.xml - Existe-t-il ?',
        '4. Comptez le nombre d\'URLs dans le sitemap',
        '5. Comparez avec le nombre de pages dans Search Console',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 4 : Crawl avec Screaming Frog',
    },
    {
      type: 'text',
      content: 'Installez Screaming Frog (version gratuite) et crawlez votre site :',
    },
    {
      type: 'list',
      content: [
        '1. Lancez un crawl de votre domaine',
        '2. Notez le nombre de pages trouvées',
        '3. Identifiez les erreurs 4xx et 5xx',
        '4. Vérifiez les pages sans title ou avec title dupliqué',
        '5. Repérez les pages sans meta description',
        '6. Identifiez les pages avec temps de réponse > 1s',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Quiz : SEO Technique',
    },
    {
      type: 'quiz',
      content: {
        title: 'Quiz : SEO Technique',
        questions: [
          {
            question: 'Quel fichier indique à Google les pages qu\'il peut explorer ?',
            options: ['sitemap.xml', 'robots.txt', '.htaccess', 'index.html'],
            correctIndex: 1,
            explanation: 'Le fichier robots.txt indique aux robots quelles pages ils peuvent ou ne peuvent pas explorer. Le sitemap liste les pages à indexer.',
          },
          {
            question: 'Quel Core Web Vital mesure la stabilité visuelle ?',
            options: ['LCP', 'INP', 'CLS', 'TTFB'],
            correctIndex: 2,
            explanation: 'Le CLS (Cumulative Layout Shift) mesure les décalages de mise en page inattendus pendant le chargement.',
          },
          {
            question: 'Quelle valeur de LCP est considérée comme "bonne" ?',
            options: ['< 1 seconde', '< 2,5 secondes', '< 4 secondes', '< 5 secondes'],
            correctIndex: 1,
            explanation: 'Un LCP inférieur à 2,5 secondes est considéré comme bon par Google. Entre 2,5s et 4s, c\'est "à améliorer".',
          },
          {
            question: 'Qu\'est-ce que l\'indexation mobile-first ?',
            options: ['Google n\'indexe que les mobiles', 'Google indexe d\'abord la version mobile', 'Les mobiles sont prioritaires', 'Le mobile est obligatoire'],
            correctIndex: 1,
            explanation: 'L\'indexation mobile-first signifie que Google utilise principalement la version mobile de votre site pour l\'indexation et le classement.',
          },
          {
            question: 'Quelle redirection transfère le "link juice" ?',
            options: ['302', '307', '301', '404'],
            correctIndex: 2,
            explanation: 'La redirection 301 (permanente) transfère environ 95% du link juice à la nouvelle URL. Les redirections 302/307 sont temporaires.',
          },
          {
            question: 'Qu\'est-ce que le contenu mixte (mixed content) ?',
            options: ['Texte et images mélangés', 'HTTP et HTTPS sur même page', 'Plusieurs langues', 'Contenu dupliqué'],
            correctIndex: 1,
            explanation: 'Le contenu mixte se produit quand une page HTTPS charge des ressources (images, scripts) en HTTP non sécurisé.',
          },
          {
            question: 'Quel outil Google permet de voir les erreurs d\'indexation ?',
            options: ['Google Analytics', 'Google Search Console', 'Google Ads', 'Google Trends'],
            correctIndex: 1,
            explanation: 'Google Search Console est l\'outil officiel pour voir les erreurs de crawl, d\'indexation et les Core Web Vitals.',
          },
          {
            question: 'Combien d\'URLs maximum peut contenir un sitemap ?',
            options: ['10 000', '50 000', '100 000', 'Illimité'],
            correctIndex: 1,
            explanation: 'Un sitemap peut contenir maximum 50 000 URLs ou 50 Mo. Au-delà, il faut créer un index de sitemaps.',
          },
          {
            question: 'Que signifie INP en Core Web Vitals ?',
            options: ['Initial Network Performance', 'Interaction to Next Paint', 'Index Node Processing', 'Internal Navigation Path'],
            correctIndex: 1,
            explanation: 'INP (Interaction to Next Paint) mesure la réactivité de la page aux interactions utilisateur (clics, touches).',
          },
          {
            question: 'Quel est le temps de chargement idéal pour le SEO ?',
            options: ['< 1 seconde', '< 3 secondes', '< 5 secondes', '< 10 secondes'],
            correctIndex: 1,
            explanation: 'Un temps de chargement inférieur à 3 secondes est recommandé. Au-delà, le taux de rebond augmente significativement.',
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
      content: 'Ce guide vous a donné les bases solides du SEO technique. Pour approfondir chaque aspect, consultez nos articles détaillés :',
    },
    {
      type: 'list',
      content: [
        'Vitesse de Site : Optimiser le temps de chargement - Toutes les techniques de performance',
        'Core Web Vitals : Comprendre et optimiser les métriques Google - Guide LCP, INP, CLS',
        'Indexation Google : Faire indexer vos pages rapidement - Résoudre les problèmes',
        'Robots.txt : Contrôler l\'accès des robots - Configuration avancée',
        'Sitemap XML : Créer et optimiser votre plan de site - Bonnes pratiques',
      ],
    },
    {
      type: 'cta',
      content: {
        title: 'Approfondissez le SEO technique',
        description: 'Explorez chaque aspect du SEO technique dans les articles détaillés de ce module.',
        buttonText: 'Voir tous les articles',
        buttonLink: '/seo-technique',
        variant: 'primary',
      },
    },
  ],
};

const childPages: Article[] = [
  {
    slug: 'vitesse-site',
    title: 'Vitesse de Site : Optimiser le Temps de Chargement',
    metaTitle: 'Vitesse Site Web - Optimisation 2026',
    metaDescription: 'Améliorez la vitesse de votre site web pour le SEO. Techniques d\'optimisation, outils de mesure et bonnes pratiques.',
    keyword: 'vitesse site web',
    secondaryKeywords: ['temps chargement', 'optimisation vitesse', 'page speed'],
    intent: 'info',
    cluster: 'seo-technique',
    excerpt: 'La vitesse de chargement impacte le SEO et l\'expérience utilisateur. Découvrez comment optimiser les performances de votre site.',
    tableOfContents: true,
    readingTime: 32,
    difficulty: 'intermediaire',
    lastUpdated: '2026-01-20',
    author: 'thomas-dupont',
    relatedSlugs: ['core-web-vitals', 'indexation-google'],
    faq: [
      {
        question: 'Quel est le temps de chargement idéal ?',
        answer: 'Moins de 3 secondes pour le chargement complet. Idéalement, le contenu principal doit être visible en moins de 2 secondes (LCP).',
      },
      {
        question: 'La vitesse est-elle vraiment un facteur de ranking ?',
        answer: 'Oui, Google a confirmé que la vitesse est un facteur de ranking, surtout sur mobile. Les Core Web Vitals font partie des critères.',
      },
      {
        question: 'Quel est l\'impact de la vitesse sur les conversions ?',
        answer: 'Chaque seconde de chargement en plus réduit les conversions de 7% en moyenne. Amazon a calculé qu\'une seconde de délai leur coûterait 1,6 milliard $/an.',
      },
      {
        question: 'Faut-il optimiser pour mobile ou desktop en priorité ?',
        answer: 'Mobile d\'abord. Plus de 60% du trafic web est mobile, et Google utilise l\'indexation mobile-first. Les mobiles ont aussi des connexions souvent plus lentes.',
      },
    ],
    content: [
      {
        type: 'text',
        content: '53% des visiteurs mobiles quittent une page si elle met plus de 3 secondes à charger. La vitesse n\'est pas qu\'un facteur SEO, c\'est un impératif business qui impacte directement vos revenus.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Ce que vous allez apprendre',
          content: 'Ce guide premium couvre toutes les techniques d\'optimisation de vitesse : images, code, serveur, cache, CDN. Vous découvrirez 3 études de cas réels et pratiquerez avec des exercices concrets.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Pourquoi la vitesse est cruciale',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Impact sur le SEO',
      },
      {
        type: 'text',
        content: 'Google a officiellement confirmé que la vitesse est un facteur de ranking depuis 2010 pour desktop et 2018 pour mobile. Avec les Core Web Vitals, c\'est devenu encore plus important.',
      },
      {
        type: 'list',
        content: [
          'Facteur de ranking direct (confirmé par Google)',
          'Core Web Vitals inclus dans l\'algorithme de classement',
          'Impact sur le crawl budget (pages lentes = moins de crawl)',
          'Expérience utilisateur = signal de qualité indirect',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Impact sur le business',
      },
      {
        type: 'table',
        content: {
          headers: ['Délai supplémentaire', 'Impact mesuré'],
          rows: [
            ['+1 seconde', '-7% conversions, -11% pages vues'],
            ['+2 secondes', '-15% conversions, +50% taux de rebond'],
            ['+3 secondes', '-32% temps passé sur site'],
            ['+5 secondes', '+90% taux de rebond mobile'],
          ],
        },
      },
      {
        type: 'text',
        content: 'Ces chiffres sont issus d\'études de Google, Amazon et Walmart. La vitesse a un impact direct et mesurable sur vos revenus.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Comment mesurer la vitesse',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les métriques clés',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Description', 'Objectif'],
          rows: [
            ['TTFB', 'Time To First Byte - temps de réponse serveur', '< 200ms'],
            ['FCP', 'First Contentful Paint - premier contenu visible', '< 1.8s'],
            ['LCP', 'Largest Contentful Paint - élément principal visible', '< 2.5s'],
            ['Speed Index', 'Vitesse de remplissage visuel', '< 3.4s'],
            ['TTI', 'Time to Interactive - page interactive', '< 3.8s'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Outils de mesure',
      },
      {
        type: 'table',
        content: {
          headers: ['Outil', 'Données', 'Utilisation idéale'],
          rows: [
            ['PageSpeed Insights', 'Lab + Field (données réelles)', 'Score global, Core Web Vitals'],
            ['GTmetrix', 'Lab détaillé + waterfall', 'Analyse détaillée des requêtes'],
            ['WebPageTest', 'Lab avancé, multi-locations', 'Tests approfondis, comparaisons'],
            ['Lighthouse', 'Lab (Chrome DevTools)', 'Développement, debug'],
            ['Search Console', 'Field (données réelles)', 'Monitoring continu'],
          ],
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Lab vs Field data',
          content: 'Les données "Lab" sont des tests simulés (utiles pour debug). Les données "Field" sont les vraies métriques des utilisateurs (ce que Google utilise). Priorisez les données Field.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Techniques d\'optimisation',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Technique 1 : Optimiser les images',
      },
      {
        type: 'text',
        content: 'Les images représentent en moyenne 50-70% du poids d\'une page. C\'est le premier levier d\'optimisation.',
      },
      {
        type: 'list',
        content: [
          'Format : Utilisez WebP (30% plus léger que JPEG/PNG)',
          'Compression : 80-85% de qualité suffit pour le web',
          'Dimensions : Ne servez pas une image 2000px pour un affichage 400px',
          'Lazy loading : Chargez les images hors écran à la demande',
          'Srcset : Servez différentes tailles selon l\'écran',
        ],
      },
      {
        type: 'code',
        content: {
          language: 'html',
          code: '<!-- Image optimisée avec lazy loading et srcset -->\n<img \n  src="hero-800.webp"\n  srcset="hero-400.webp 400w,\n          hero-800.webp 800w,\n          hero-1200.webp 1200w"\n  sizes="(max-width: 600px) 400px,\n         (max-width: 1200px) 800px,\n         1200px"\n  alt="Description de l\'image"\n  width="800"\n  height="600"\n  loading="lazy"\n/>',
          filename: 'image-optimisee.html',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Technique 2 : Minifier et compresser',
      },
      {
        type: 'text',
        content: 'La minification supprime les caractères inutiles (espaces, commentaires). La compression (Gzip/Brotli) réduit encore la taille des fichiers transmis.',
      },
      {
        type: 'table',
        content: {
          headers: ['Action', 'Gain typique', 'Outils'],
          rows: [
            ['Minification JS', '20-30%', 'Terser, UglifyJS'],
            ['Minification CSS', '15-25%', 'cssnano, clean-css'],
            ['Compression Gzip', '60-70%', 'Configuration serveur'],
            ['Compression Brotli', '70-80%', 'Configuration serveur (meilleur)'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Technique 3 : Mise en cache',
      },
      {
        type: 'text',
        content: 'Le cache permet aux navigateurs de stocker les ressources localement. Les visites suivantes sont quasi-instantanées.',
      },
      {
        type: 'code',
        content: {
          language: 'apache',
          code: '# .htaccess - Configuration cache navigateur\n<IfModule mod_expires.c>\n  ExpiresActive On\n  \n  # Images : cache 1 an\n  ExpiresByType image/jpeg "access plus 1 year"\n  ExpiresByType image/webp "access plus 1 year"\n  \n  # CSS/JS : cache 1 mois\n  ExpiresByType text/css "access plus 1 month"\n  ExpiresByType application/javascript "access plus 1 month"\n  \n  # HTML : pas de cache (ou court)\n  ExpiresByType text/html "access plus 0 seconds"\n</IfModule>',
          filename: '.htaccess',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Technique 4 : Utiliser un CDN',
      },
      {
        type: 'text',
        content: 'Un CDN (Content Delivery Network) distribue vos contenus depuis des serveurs géographiquement proches de vos visiteurs, réduisant la latence.',
      },
      {
        type: 'table',
        content: {
          headers: ['CDN', 'Points forts', 'Prix'],
          rows: [
            ['Cloudflare', 'Gratuit pour commencer, sécurité incluse', 'Gratuit / Pro 20$/mois'],
            ['BunnyCDN', 'Excellent rapport qualité/prix', '1$/mois et +'],
            ['Fastly', 'Performance premium', 'À partir de 50$/mois'],
            ['Vercel/Netlify', 'Intégré pour sites statiques', 'Gratuit / Pro'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Technique 5 : Optimiser le JavaScript',
      },
      {
        type: 'text',
        content: 'Le JavaScript bloquant est souvent la cause principale des mauvaises performances. Plusieurs techniques permettent de l\'optimiser.',
      },
      {
        type: 'list',
        content: [
          'Defer/Async : Chargez les scripts de manière non bloquante',
          'Code splitting : Divisez en bundles chargés à la demande',
          'Tree shaking : Éliminez le code non utilisé',
          'Critical path : Identifiez et priorisez le CSS/JS critique',
        ],
      },
      {
        type: 'code',
        content: {
          language: 'html',
          code: '<!-- Chargement optimal des scripts -->\n\n<!-- Script critique : inline dans <head> -->\n<script>/* Code critique minimal */</script>\n\n<!-- Script async : télécharge en parallèle, exécute dès que prêt -->\n<script async src="analytics.js"></script>\n\n<!-- Script defer : télécharge en parallèle, exécute après le DOM -->\n<script defer src="main.js"></script>',
          filename: 'scripts.html',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°1 : Blog WordPress - De 8s à 2s',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un blog WordPress avec 200 articles. Temps de chargement de 8 secondes, score PageSpeed mobile de 18/100. Trafic en chute de 40%.',
        },
      },
      {
        type: 'text',
        content: 'BlogTech.fr utilisait un thème premium lourd et de nombreux plugins. La page d\'accueil chargeait 12 Mo de données.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'L\'audit de performance',
      },
      {
        type: 'table',
        content: {
          headers: ['Problème identifié', 'Impact'],
          rows: [
            ['32 plugins actifs', 'Requêtes multiples, conflits'],
            ['Images non optimisées', '8 Mo sur 12 Mo totaux'],
            ['Pas de cache', 'Tout recalculé à chaque visite'],
            ['Thème lourd', '2 Mo de CSS/JS'],
            ['Hébergement mutualisé bas de gamme', 'TTFB de 2 secondes'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les optimisations appliquées',
      },
      {
        type: 'list',
        content: [
          '1. Plugins : de 32 à 12 (suppression des inutiles, consolidation)',
          '2. Images : compression + conversion WebP (ShortPixel)',
          '3. Cache : WP Rocket installé et configuré',
          '4. Thème : nettoyage CSS/JS inutilisé',
          '5. Hébergement : migration vers hébergeur WordPress optimisé',
          '6. CDN : activation Cloudflare gratuit',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après', 'Gain'],
          rows: [
            ['Temps de chargement', '8.2s', '1.9s', '-77%'],
            ['Score PageSpeed mobile', '18', '89', '+71 points'],
            ['Poids page', '12 Mo', '1.8 Mo', '-85%'],
            ['TTFB', '2.1s', '0.3s', '-86%'],
            ['Requêtes HTTP', '145', '42', '-71%'],
          ],
        },
      },
      {
        type: 'list',
        content: [
          'Trafic organique : +65% en 3 mois',
          'Taux de rebond : de 72% à 45%',
          'Pages vues/session : de 1.3 à 2.8',
          'Temps moyen sur site : +85%',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°2 : E-commerce Magento - Optimisation serveur',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Une boutique Magento avec 5000 produits. TTFB de 3 secondes, pages produits à 6s de chargement. Panier abandonné : 78%.',
        },
      },
      {
        type: 'text',
        content: 'ModaStore.fr avait optimisé les images et activé le cache, mais le TTFB restait catastrophique. Le problème était côté serveur.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Diagnostic serveur',
      },
      {
        type: 'list',
        content: [
          'Serveur mutualisé surchargé',
          'PHP 7.4 (version obsolète)',
          'Base de données non optimisée (requêtes de 2-3 secondes)',
          'Pas de cache opcode (OPcache)',
          'Pas de cache Varnish',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Plan d\'optimisation serveur',
      },
      {
        type: 'table',
        content: {
          headers: ['Action', 'Impact TTFB'],
          rows: [
            ['Migration VPS dédié', '-40%'],
            ['Upgrade PHP 8.2', '-25%'],
            ['Optimisation MySQL (index)', '-30%'],
            ['Activation OPcache', '-15%'],
            ['Installation Varnish cache', '-50%'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après'],
          rows: [
            ['TTFB', '3.1s', '0.25s'],
            ['Temps chargement page produit', '6.2s', '1.8s'],
            ['Score PageSpeed', '32', '78'],
          ],
        },
      },
      {
        type: 'list',
        content: [
          'Taux de conversion : de 1.2% à 2.1% (+75%)',
          'Panier abandonné : de 78% à 62%',
          'CA mensuel : +45%',
          'Coût serveur : +150€/mois (ROI en 5 jours)',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°3 : Application React SPA',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Une application React (Single Page App) avec un bundle JavaScript de 2.5 Mo. TTI de 12 secondes sur mobile, INP catastrophique.',
        },
      },
      {
        type: 'text',
        content: 'TechDash.io était une application métier avec un énorme bundle JavaScript. Sur mobile, l\'application était inutilisable.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'L\'analyse du bundle',
      },
      {
        type: 'list',
        content: [
          'Bundle principal : 2.5 Mo (minifié)',
          'Librairies inutilisées incluses (moment.js, lodash complet)',
          'Pas de code splitting',
          'Pas de lazy loading des routes',
          'Toutes les dépendances en synchrone',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Optimisations JavaScript',
      },
      {
        type: 'list',
        content: [
          '1. Code splitting par route (React.lazy)',
          '2. Remplacement moment.js par date-fns',
          '3. Import spécifique de lodash (lodash-es)',
          '4. Tree shaking avec Webpack 5',
          '5. Preload des routes critiques',
          '6. Service Worker pour cache avancé',
        ],
      },
      {
        type: 'code',
        content: {
          language: 'javascript',
          code: '// Avant : Import global (tout le bundle)\nimport _ from \'lodash\';\nimport moment from \'moment\';\n\n// Après : Import spécifique\nimport { debounce } from \'lodash-es\';\nimport { format } from \'date-fns\';',
          filename: 'imports-optimises.js',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après'],
          rows: [
            ['Bundle initial', '2.5 Mo', '280 Ko'],
            ['TTI mobile', '12s', '3.2s'],
            ['INP', '850ms', '120ms'],
            ['Score Lighthouse', '28', '92'],
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
        content: 'Exercice 1 : Audit de votre site',
      },
      {
        type: 'text',
        content: 'Testez votre page d\'accueil avec PageSpeed Insights et complétez ce tableau :',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Valeur actuelle', 'Objectif', 'Statut'],
          rows: [
            ['Score Mobile', '...', '> 90', '...'],
            ['Score Desktop', '...', '> 90', '...'],
            ['LCP', '...', '< 2.5s', '...'],
            ['INP', '...', '< 200ms', '...'],
            ['CLS', '...', '< 0.1', '...'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Analyse des images',
      },
      {
        type: 'text',
        content: 'Utilisez l\'onglet Network de Chrome DevTools pour analyser vos images :',
      },
      {
        type: 'list',
        content: [
          '1. Ouvrez DevTools > Network > Img',
          '2. Rechargez la page',
          '3. Triez par taille (Size)',
          '4. Identifiez les 5 images les plus lourdes',
          '5. Pour chaque image, notez : taille, format, dimensions affichées vs réelles',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Test de compression',
      },
      {
        type: 'text',
        content: 'Vérifiez que la compression est activée sur votre serveur :',
      },
      {
        type: 'list',
        content: [
          '1. DevTools > Network > Sélectionnez un fichier HTML',
          '2. Regardez les Response Headers',
          '3. Cherchez "Content-Encoding: gzip" ou "br" (Brotli)',
          '4. Si absent, la compression n\'est pas activée',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Waterfall analysis',
      },
      {
        type: 'text',
        content: 'Utilisez GTmetrix pour analyser le waterfall de chargement :',
      },
      {
        type: 'list',
        content: [
          '1. Testez votre page sur gtmetrix.com',
          '2. Cliquez sur l\'onglet Waterfall',
          '3. Identifiez les ressources qui bloquent le rendu',
          '4. Notez les ressources avec un temps de chargement > 500ms',
          '5. Identifiez les chaînes de dépendances',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quiz : Vitesse de Site',
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Vitesse de Site',
          questions: [
            {
              question: 'Quel est le temps de chargement idéal pour une page web ?',
              options: ['< 1 seconde', '< 3 secondes', '< 5 secondes', '< 10 secondes'],
              correctIndex: 1,
              explanation: 'Un temps de chargement inférieur à 3 secondes est recommandé. Au-delà, le taux de rebond augmente significativement.',
            },
            {
              question: 'Quel format d\'image offre le meilleur ratio qualité/poids ?',
              options: ['JPEG', 'PNG', 'WebP', 'GIF'],
              correctIndex: 2,
              explanation: 'WebP offre une compression 25-34% meilleure que JPEG tout en supportant la transparence.',
            },
            {
              question: 'Quel attribut permet de charger les scripts sans bloquer le rendu ?',
              options: ['sync', 'defer', 'preload', 'block'],
              correctIndex: 1,
              explanation: 'L\'attribut defer permet de télécharger le script en parallèle et de l\'exécuter après le parsing du DOM.',
            },
            {
              question: 'Que mesure le TTFB ?',
              options: ['Temps de téléchargement total', 'Temps de réponse serveur', 'Temps d\'exécution JavaScript', 'Temps de rendu'],
              correctIndex: 1,
              explanation: 'TTFB (Time To First Byte) mesure le temps entre la requête et la réception du premier octet de la réponse serveur.',
            },
            {
              question: 'Quelle compression est plus efficace que Gzip ?',
              options: ['Deflate', 'Brotli', 'LZMA', 'Zstandard'],
              correctIndex: 1,
              explanation: 'Brotli offre une compression 15-25% meilleure que Gzip pour les fichiers texte (HTML, CSS, JS).',
            },
            {
              question: 'Quel est le rôle d\'un CDN ?',
              options: ['Compresser les images', 'Servir le contenu depuis des serveurs proches', 'Minifier le code', 'Bloquer les attaques'],
              correctIndex: 1,
              explanation: 'Un CDN distribue le contenu depuis des serveurs géographiquement proches des visiteurs, réduisant la latence.',
            },
            {
              question: 'Quel pourcentage du poids d\'une page représentent généralement les images ?',
              options: ['10-20%', '30-40%', '50-70%', '80-90%'],
              correctIndex: 2,
              explanation: 'Les images représentent en moyenne 50-70% du poids total d\'une page web.',
            },
            {
              question: 'Que fait le lazy loading ?',
              options: ['Charge tout plus vite', 'Diffère le chargement des éléments hors écran', 'Compresse les images', 'Met en cache'],
              correctIndex: 1,
              explanation: 'Le lazy loading charge les images/éléments uniquement quand ils arrivent dans le viewport, économisant la bande passante.',
            },
            {
              question: 'Quelle est la durée de cache recommandée pour les images ?',
              options: ['1 heure', '1 jour', '1 semaine', '1 an'],
              correctIndex: 3,
              explanation: 'Les ressources statiques comme les images peuvent être cachées 1 an car leur URL change quand le contenu change.',
            },
            {
              question: 'Quel outil donne les données de performance réelles des utilisateurs ?',
              options: ['Lighthouse', 'WebPageTest', 'Google Search Console', 'GTmetrix'],
              correctIndex: 2,
              explanation: 'Search Console affiche les données Field (réelles) des Core Web Vitals basées sur les vrais utilisateurs.',
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
        content: 'Pour approfondir l\'optimisation de performance, consultez ces articles :',
      },
      {
        type: 'list',
        content: [
          'Core Web Vitals : Comprendre et optimiser les métriques Google - Les indicateurs qui comptent',
          'Guide complet SEO Technique - Vue d\'ensemble du SEO technique',
          'Optimisation des images pour le SEO - Techniques avancées d\'optimisation images',
        ],
      },
      {
        type: 'cta',
        content: {
          title: 'Continuez votre apprentissage',
          description: 'Découvrez maintenant les Core Web Vitals pour comprendre les métriques exactes utilisées par Google.',
          buttonText: 'Core Web Vitals',
          buttonLink: '/seo-technique/core-web-vitals',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'core-web-vitals',
    title: 'Core Web Vitals : Comprendre et Optimiser les Métriques Google',
    metaTitle: 'Core Web Vitals - Guide SEO 2026',
    metaDescription: 'Maîtrisez les Core Web Vitals (LCP, INP, CLS) pour améliorer votre SEO. Guide complet avec techniques d\'optimisation.',
    keyword: 'core web vitals',
    secondaryKeywords: ['lcp seo', 'cls seo', 'inp google'],
    intent: 'info',
    cluster: 'seo-technique',
    excerpt: 'Les Core Web Vitals sont les métriques de performance utilisées par Google. Comprendre et optimiser ces indicateurs est essentiel pour votre SEO.',
    tableOfContents: true,
    readingTime: 30,
    difficulty: 'intermediaire',
    lastUpdated: '2026-01-18',
    author: 'thomas-dupont',
    relatedSlugs: ['vitesse-site', 'indexation-google'],
    faq: [
      {
        question: 'Les Core Web Vitals sont-ils vraiment importants ?',
        answer: 'Oui, ils font partie des signaux de ranking Google. De plus, ils reflètent l\'expérience utilisateur réelle, ce qui impacte les conversions.',
      },
      {
        question: 'Comment voir mes Core Web Vitals ?',
        answer: 'Google Search Console affiche vos données réelles (field data). PageSpeed Insights montre les données de lab et de terrain.',
      },
      {
        question: 'Quelle est la différence entre INP et FID ?',
        answer: 'INP a remplacé FID en 2024. INP mesure toutes les interactions pendant la session, FID ne mesurait que la première. INP est plus représentatif de l\'expérience réelle.',
      },
      {
        question: 'Combien de temps pour améliorer ses Core Web Vitals ?',
        answer: 'Les optimisations sont visibles en quelques jours dans les données lab. Les données field (réelles) mettent 28 jours à se mettre à jour dans Search Console.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Les Core Web Vitals sont trois métriques qui évaluent l\'expérience de chargement, l\'interactivité et la stabilité visuelle de vos pages. Depuis leur intégration dans l\'algorithme de Google, ils sont devenus incontournables pour le SEO.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Ce que vous allez apprendre',
          content: 'Ce guide premium détaille chaque Core Web Vital : ce qu\'il mesure, pourquoi il compte, et comment l\'optimiser. Avec 3 études de cas réels et des exercices de diagnostic.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Comprendre les Core Web Vitals',
      },
      {
        type: 'text',
        content: 'Les Core Web Vitals ont été introduits par Google en 2020 et intégrés comme facteur de ranking en 2021. Ils mesurent trois aspects essentiels de l\'expérience utilisateur.',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Mesure', 'Question utilisateur'],
          rows: [
            ['LCP', 'Vitesse de chargement', '"Est-ce que ça charge ?"'],
            ['INP', 'Réactivité aux interactions', '"Est-ce que ça répond ?"'],
            ['CLS', 'Stabilité visuelle', '"Est-ce que ça bouge ?"'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Seuils de performance',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Bon 🟢', 'À améliorer 🟡', 'Mauvais 🔴'],
          rows: [
            ['LCP', '< 2,5 secondes', '2,5s - 4s', '> 4 secondes'],
            ['INP', '< 200 ms', '200ms - 500ms', '> 500 ms'],
            ['CLS', '< 0,1', '0,1 - 0,25', '> 0,25'],
          ],
        },
      },
      {
        type: 'text',
        content: 'Google considère que 75% de vos pages doivent atteindre le seuil "Bon" pour être considérées comme performantes.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'LCP : Largest Contentful Paint',
      },
      {
        type: 'text',
        content: 'Le LCP mesure le temps nécessaire pour afficher le plus grand élément visible dans le viewport. C\'est généralement l\'image hero, un titre principal, ou un bloc de texte important.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Quels éléments sont mesurés par le LCP',
      },
      {
        type: 'list',
        content: [
          'Images <img>',
          'Images dans <image> (SVG)',
          'Affiches de <video>',
          'Images de fond chargées via CSS',
          'Blocs de texte (titres, paragraphes)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Causes d\'un mauvais LCP',
      },
      {
        type: 'table',
        content: {
          headers: ['Cause', 'Impact', 'Solution'],
          rows: [
            ['Temps de réponse serveur lent', 'Retarde tout', 'CDN, cache, meilleur hébergement'],
            ['JavaScript/CSS bloquant', 'Retarde le rendu', 'Defer/async, critical CSS'],
            ['Image LCP non optimisée', 'Chargement lent', 'Compression, format WebP, preload'],
            ['Chargement client-side', 'Attente JS', 'SSR/SSG, prerender'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Techniques d\'optimisation LCP',
      },
      {
        type: 'code',
        content: {
          language: 'html',
          code: '<!-- Preload de l\'image LCP pour chargement prioritaire -->\n<head>\n  <link rel="preload" as="image" href="hero-image.webp" fetchpriority="high">\n</head>\n\n<!-- Image LCP avec priorité haute -->\n<img \n  src="hero-image.webp" \n  alt="Image principale"\n  fetchpriority="high"\n  loading="eager"\n  decoding="async"\n/>',
          filename: 'optimisation-lcp.html',
        },
      },
      {
        type: 'list',
        content: [
          'Preload l\'élément LCP (image, font critique)',
          'Utilisez fetchpriority="high" sur l\'image LCP',
          'Optimisez le TTFB (< 200ms)',
          'Éliminez les ressources bloquantes',
          'Utilisez le server-side rendering si applicable',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'INP : Interaction to Next Paint',
      },
      {
        type: 'text',
        content: 'L\'INP mesure la réactivité de la page aux interactions utilisateur (clics, touches, appuis de touches). Il a remplacé le FID (First Input Delay) en mars 2024.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Différence entre INP et FID',
      },
      {
        type: 'table',
        content: {
          headers: ['Aspect', 'FID (ancien)', 'INP (actuel)'],
          rows: [
            ['Interactions mesurées', 'Première seulement', 'Toutes les interactions'],
            ['Représentativité', 'Partielle', 'Complète'],
            ['Seuil "bon"', '< 100ms', '< 200ms'],
            ['Complexité', 'Simple à optimiser', 'Plus exigeant'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Causes d\'un mauvais INP',
      },
      {
        type: 'list',
        content: [
          'Long tasks JavaScript (> 50ms)',
          'Thread principal bloqué pendant les interactions',
          'Event handlers lourds',
          'Trop de JavaScript synchrone',
          'Third-party scripts lents (analytics, ads, chat)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Techniques d\'optimisation INP',
      },
      {
        type: 'code',
        content: {
          language: 'javascript',
          code: '// ❌ Mauvais : Tâche longue bloquante\nbutton.addEventListener(\'click\', () => {\n  // Traitement lourd de 500ms\n  heavyProcessing();\n  updateUI();\n});\n\n// ✅ Bon : Tâches divisées avec yield\nbutton.addEventListener(\'click\', async () => {\n  // Mise à jour UI immédiate\n  showLoadingState();\n  \n  // Yield pour permettre au navigateur de respirer\n  await scheduler.yield();\n  \n  // Traitement en arrière-plan\n  const result = await processInChunks(data);\n  updateUI(result);\n});',
          filename: 'optimisation-inp.js',
        },
      },
      {
        type: 'list',
        content: [
          'Divisez les long tasks en chunks < 50ms',
          'Utilisez requestIdleCallback pour les tâches non urgentes',
          'Déléguez le travail lourd aux Web Workers',
          'Chargez les third-party scripts en async',
          'Utilisez le debouncing pour les événements fréquents',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'CLS : Cumulative Layout Shift',
      },
      {
        type: 'text',
        content: 'Le CLS mesure la stabilité visuelle de la page. Un score élevé signifie que des éléments bougent de manière inattendue, créant une expérience frustrante.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Comment le CLS est calculé',
      },
      {
        type: 'text',
        content: 'CLS = Impact Fraction × Distance Fraction. L\'impact fraction est la zone affectée par le décalage, la distance fraction est la distance du déplacement, le tout relatif au viewport.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Causes courantes de CLS',
      },
      {
        type: 'table',
        content: {
          headers: ['Cause', 'Exemple', 'Impact typique'],
          rows: [
            ['Images sans dimensions', 'L\'image charge et pousse le contenu', 'CLS 0.1 - 0.5'],
            ['Publicités dynamiques', 'Bannière injectée en haut de page', 'CLS 0.2 - 0.8'],
            ['Polices web (FOUT/FOIT)', 'Texte change de taille au chargement', 'CLS 0.05 - 0.2'],
            ['Contenu injecté dynamiquement', 'Message d\'alerte, bannière cookie', 'CLS 0.1 - 0.3'],
            ['Iframes/embeds sans dimensions', 'Vidéo YouTube qui charge', 'CLS 0.1 - 0.4'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Techniques d\'optimisation CLS',
      },
      {
        type: 'code',
        content: {
          language: 'html',
          code: '<!-- ✅ Image avec dimensions réservées -->\n<img src="photo.jpg" width="800" height="600" alt="Photo">\n\n<!-- ✅ Conteneur avec aspect-ratio pour responsive -->\n<style>\n  .video-container {\n    aspect-ratio: 16 / 9;\n    width: 100%;\n  }\n</style>\n<div class="video-container">\n  <iframe src="https://youtube.com/..."></iframe>\n</div>\n\n<!-- ✅ Espace réservé pour les publicités -->\n<style>\n  .ad-slot {\n    min-height: 250px;\n    background: #f0f0f0;\n  }\n</style>\n<div class="ad-slot" id="ad-banner"></div>',
          filename: 'optimisation-cls.html',
        },
      },
      {
        type: 'list',
        content: [
          'Toujours spécifier width et height sur les images',
          'Utiliser aspect-ratio CSS pour les conteneurs',
          'Réserver l\'espace pour les publicités',
          'Précharger les polices avec font-display: swap',
          'Insérer le contenu dynamique en bas de page, pas en haut',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°1 : Site d\'actualités - LCP catastrophique',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un site d\'actualités avec 200k visites/mois. LCP de 5.8 secondes sur mobile, 85% des pages en rouge. Perte de positions Google News.',
        },
      },
      {
        type: 'text',
        content: 'InfoMatin.fr avait un problème critique de LCP. L\'image principale des articles mettait plus de 5 secondes à s\'afficher sur mobile.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Diagnostic LCP',
      },
      {
        type: 'list',
        content: [
          'Image hero de 2.5 Mo en JPEG',
          'Pas de preload sur l\'image principale',
          'Image chargée via JavaScript (client-side)',
          'CDN non configuré',
          'CSS/JS bloquant le rendu',
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
          headers: ['Action', 'Gain LCP estimé'],
          rows: [
            ['Compression image + WebP', '-1.2s'],
            ['Preload image LCP', '-0.8s'],
            ['Rendu serveur (SSR) de l\'image', '-1.0s'],
            ['CDN avec cache image', '-0.5s'],
            ['Critical CSS inline', '-0.4s'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après'],
          rows: [
            ['LCP mobile', '5.8s', '1.9s'],
            ['Pages LCP "bon"', '15%', '92%'],
            ['Score PageSpeed mobile', '28', '85'],
          ],
        },
      },
      {
        type: 'list',
        content: [
          'Retour dans Google News (visibilité restaurée)',
          'Trafic organique : +45% en 2 mois',
          'Temps moyen sur page : +32%',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°2 : Application SaaS - INP problématique',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Une application de gestion de projet. INP de 650ms, utilisateurs se plaignant de la lenteur. Taux de conversion en chute.',
        },
      },
      {
        type: 'text',
        content: 'ProjectFlow.io avait un INP catastrophique. Chaque clic sur un bouton semblait ne rien faire pendant presque une seconde.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Diagnostic INP',
      },
      {
        type: 'list',
        content: [
          'Chaque clic déclenchait un re-render complet de l\'app',
          'Calculs lourds sur le thread principal',
          'Pas d\'optimistic UI (attente de la réponse serveur)',
          'Third-party analytics bloquant',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Optimisations implémentées',
      },
      {
        type: 'list',
        content: [
          '1. React.memo et useMemo pour éviter les re-renders inutiles',
          '2. Calculs déplacés dans Web Workers',
          '3. Optimistic UI : mise à jour immédiate avant réponse serveur',
          '4. Scripts analytics en async',
          '5. Code splitting par fonctionnalité',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après'],
          rows: [
            ['INP', '650ms', '145ms'],
            ['Perception utilisateur', 'Lent', 'Réactif'],
            ['Plaintes support', '15/semaine', '2/semaine'],
          ],
        },
      },
      {
        type: 'list',
        content: [
          'Taux de conversion trial : +28%',
          'Net Promoter Score : +15 points',
          'Taux de churn : -12%',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°3 : E-commerce - CLS des publicités',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Une marketplace avec publicités. CLS de 0.42, utilisateurs cliquant accidentellement sur des pubs. Taux de rebond élevé.',
        },
      },
      {
        type: 'text',
        content: 'MarketPlace.fr avait un problème de CLS causé par les publicités qui s\'injectaient dynamiquement, poussant le contenu vers le bas.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Sources de CLS identifiées',
      },
      {
        type: 'table',
        content: {
          headers: ['Source', 'Contribution au CLS'],
          rows: [
            ['Bannière pub header', '0.18'],
            ['Publicité mid-article', '0.12'],
            ['Images produits sans dimensions', '0.08'],
            ['Police web FOUT', '0.04'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solutions appliquées',
      },
      {
        type: 'list',
        content: [
          '1. Espace réservé fixe pour les emplacements publicitaires',
          '2. Dimensions obligatoires sur toutes les images',
          '3. Préchargement des polices avec font-display: optional',
          '4. Publicités chargées avec placeholder skeleton',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après'],
          rows: [
            ['CLS', '0.42', '0.06'],
            ['Clics accidentels pubs', '8%', '1.2%'],
            ['Taux de rebond', '58%', '42%'],
          ],
        },
      },
      {
        type: 'list',
        content: [
          'Revenus publicitaires : -15% (moins de clics accidentels)',
          'Mais taux de conversion produits : +22%',
          'Revenus globaux : +18%',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Leçon importante',
          content: 'Les clics accidentels sur les pubs gonflent artificiellement les revenus pub mais nuisent à l\'expérience. Un CLS optimisé peut réduire les revenus pub mais augmenter les conversions réelles.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Outils de mesure des Core Web Vitals',
      },
      {
        type: 'table',
        content: {
          headers: ['Outil', 'Type de données', 'Usage'],
          rows: [
            ['PageSpeed Insights', 'Lab + Field', 'Diagnostic complet'],
            ['Search Console', 'Field uniquement', 'Monitoring continu'],
            ['Chrome DevTools', 'Lab', 'Debug en développement'],
            ['Web Vitals Extension', 'Real-time', 'Test rapide'],
            ['CrUX Dashboard', 'Field historique', 'Analyse tendances'],
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
        content: 'Exercice 1 : Diagnostic Core Web Vitals',
      },
      {
        type: 'text',
        content: 'Testez 3 pages de votre site avec PageSpeed Insights et complétez :',
      },
      {
        type: 'table',
        content: {
          headers: ['Page', 'LCP', 'INP', 'CLS', 'Priorité'],
          rows: [
            ['Accueil', '...', '...', '...', '...'],
            ['Produit/Article', '...', '...', '...', '...'],
            ['Catégorie', '...', '...', '...', '...'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Identifier l\'élément LCP',
      },
      {
        type: 'text',
        content: 'Pour votre page d\'accueil, identifiez l\'élément LCP :',
      },
      {
        type: 'list',
        content: [
          '1. Ouvrez PageSpeed Insights > Diagnostics',
          '2. Cherchez "Largest Contentful Paint element"',
          '3. Notez quel élément est identifié',
          '4. Vérifiez s\'il a un preload',
          '5. Vérifiez son poids et format',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Détecter les sources de CLS',
      },
      {
        type: 'text',
        content: 'Utilisez l\'extension Web Vitals pour Chrome :',
      },
      {
        type: 'list',
        content: [
          '1. Installez l\'extension "Web Vitals"',
          '2. Activez le "Console logging"',
          '3. Chargez votre page et scrollez',
          '4. Ouvrez la Console DevTools',
          '5. Identifiez les éléments qui causent le CLS',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Simuler l\'INP',
      },
      {
        type: 'text',
        content: 'Testez la réactivité de vos interactions :',
      },
      {
        type: 'list',
        content: [
          '1. DevTools > Performance > CPU throttling 4x',
          '2. Cliquez sur différents boutons/liens',
          '3. Observez le temps avant feedback visuel',
          '4. Identifiez les interactions les plus lentes',
          '5. Analysez les long tasks dans Performance',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quiz : Core Web Vitals',
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Core Web Vitals',
          questions: [
            {
              question: 'Que mesure le LCP ?',
              options: ['Le temps de la première interaction', 'Le chargement du plus grand élément visible', 'La stabilité visuelle', 'Le temps total de chargement'],
              correctIndex: 1,
              explanation: 'LCP (Largest Contentful Paint) mesure le temps de chargement du plus grand élément visible dans le viewport.',
            },
            {
              question: 'Quel est le seuil "bon" pour le LCP ?',
              options: ['< 1 seconde', '< 2,5 secondes', '< 4 secondes', '< 5 secondes'],
              correctIndex: 1,
              explanation: 'Un LCP inférieur à 2,5 secondes est considéré comme bon. Entre 2,5s et 4s, c\'est "à améliorer".',
            },
            {
              question: 'L\'INP a remplacé quelle métrique ?',
              options: ['LCP', 'FID', 'TTFB', 'CLS'],
              correctIndex: 1,
              explanation: 'INP (Interaction to Next Paint) a remplacé FID (First Input Delay) en mars 2024 comme Core Web Vital.',
            },
            {
              question: 'Quel est le seuil "bon" pour l\'INP ?',
              options: ['< 100ms', '< 200ms', '< 500ms', '< 1 seconde'],
              correctIndex: 1,
              explanation: 'Un INP inférieur à 200ms est considéré comme bon.',
            },
            {
              question: 'Que mesure le CLS ?',
              options: ['La vitesse de chargement', 'La réactivité', 'La stabilité visuelle', 'La sécurité'],
              correctIndex: 2,
              explanation: 'CLS (Cumulative Layout Shift) mesure les décalages de mise en page inattendus pendant le chargement.',
            },
            {
              question: 'Quel est le seuil "bon" pour le CLS ?',
              options: ['< 0.01', '< 0.1', '< 0.25', '< 1'],
              correctIndex: 1,
              explanation: 'Un CLS inférieur à 0.1 est considéré comme bon.',
            },
            {
              question: 'Quelle technique améliore principalement le LCP ?',
              options: ['Lazy loading', 'Preload de l\'image hero', 'Web Workers', 'Font-display'],
              correctIndex: 1,
              explanation: 'Précharger l\'image principale avec preload et fetchpriority="high" améliore significativement le LCP.',
            },
            {
              question: 'Qu\'est-ce qui cause généralement un mauvais CLS ?',
              options: ['JavaScript lent', 'Images sans dimensions', 'CSS minifié', 'CDN'],
              correctIndex: 1,
              explanation: 'Les images sans width/height causent un décalage quand elles se chargent car le navigateur ne peut pas réserver l\'espace.',
            },
            {
              question: 'Quel type de données utilise Google pour le ranking ?',
              options: ['Données Lab', 'Données Field (réelles)', 'Les deux également', 'Aucune'],
              correctIndex: 1,
              explanation: 'Google utilise les données Field (Chrome User Experience Report) basées sur les vrais utilisateurs pour le ranking.',
            },
            {
              question: 'Quel pourcentage de pages doit être "bon" selon Google ?',
              options: ['50%', '75%', '90%', '100%'],
              correctIndex: 1,
              explanation: 'Google considère qu\'une URL est performante si 75% des chargements atteignent le seuil "bon".',
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
        content: 'Pour approfondir les Core Web Vitals, consultez ces articles :',
      },
      {
        type: 'list',
        content: [
          'Vitesse de Site : Optimiser le temps de chargement - Techniques complètes de performance',
          'Guide complet SEO Technique - Vue d\'ensemble du SEO technique',
          'Optimisation des images pour le SEO - Impact sur le LCP',
        ],
      },
      {
        type: 'cta',
        content: {
          title: 'Continuez votre apprentissage',
          description: 'Découvrez maintenant comment fonctionne l\'indexation Google pour que vos pages optimisées soient visibles.',
          buttonText: 'Indexation Google',
          buttonLink: '/seo-technique/indexation-google',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'indexation-google',
    title: 'Indexation Google : Faire Indexer vos Pages Rapidement',
    metaTitle: 'Indexation Google - Guide SEO 2026',
    metaDescription: 'Comprenez le fonctionnement de l\'indexation Google. Techniques pour faire indexer vos pages plus rapidement et résoudre les problèmes.',
    keyword: 'indexation google',
    secondaryKeywords: ['index google', 'faire indexer page', 'problème indexation'],
    intent: 'info',
    cluster: 'seo-technique',
    excerpt: 'L\'indexation est le processus par lequel Google ajoute vos pages à son index. Sans indexation, pas de visibilité dans les résultats de recherche.',
    tableOfContents: true,
    readingTime: 28,
    difficulty: 'debutant',
    lastUpdated: '2026-01-16',
    author: 'marie-lefevre',
    relatedSlugs: ['robots-txt', 'sitemap-xml'],
    faq: [
      {
        question: 'Combien de temps pour être indexé ?',
        answer: 'De quelques heures à plusieurs semaines. Les sites établis avec du contenu de qualité sont indexés plus rapidement. La demande via Search Console peut accélérer le processus.',
      },
      {
        question: 'Pourquoi ma page n\'est pas indexée ?',
        answer: 'Vérifiez : robots.txt, balise noindex, canonical, contenu dupliqué, qualité insuffisante, ou simplement le délai normal d\'indexation.',
      },
      {
        question: 'Peut-on forcer Google à indexer une page ?',
        answer: 'Non, vous ne pouvez pas forcer l\'indexation. Vous pouvez la demander via Search Console, mais Google décide si la page mérite d\'être indexée.',
      },
      {
        question: 'Google indexe-t-il toutes les pages d\'un site ?',
        answer: 'Non, Google a un "crawl budget" limité et choisit les pages qu\'il juge utiles. Les pages de faible qualité ou dupliquées peuvent être ignorées.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Avant de pouvoir apparaître dans les résultats de recherche, vos pages doivent être indexées par Google. Ce processus n\'est pas automatique et peut parfois poser problème. Ce guide vous explique tout sur l\'indexation.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Ce que vous allez apprendre',
          content: 'Ce guide premium couvre le fonctionnement complet de l\'indexation Google : le processus, les techniques d\'accélération, la résolution des problèmes. Avec 3 études de cas réels et des exercices de diagnostic.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Comment fonctionne l\'indexation Google',
      },
      {
        type: 'text',
        content: 'L\'indexation est le processus par lequel Google ajoute une page à sa base de données (l\'index). C\'est une étape indispensable : une page non indexée ne peut JAMAIS apparaître dans les résultats de recherche.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les 4 étapes du processus',
      },
      {
        type: 'table',
        content: {
          headers: ['Étape', 'Description', 'Ce qui peut bloquer'],
          rows: [
            ['1. Découverte', 'Google trouve l\'URL (lien, sitemap)', 'Page orpheline, pas dans sitemap'],
            ['2. Crawl', 'Googlebot télécharge la page', 'Robots.txt, serveur en erreur'],
            ['3. Rendu', 'Google exécute le JavaScript', 'JS bloquant, erreurs'],
            ['4. Indexation', 'Page ajoutée à l\'index', 'Noindex, duplicate, faible qualité'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Le concept de crawl budget',
      },
      {
        type: 'text',
        content: 'Google a un "budget de crawl" limité pour chaque site. C\'est le nombre de pages que Googlebot va explorer dans un temps donné. Ce budget dépend de la taille du site, de sa popularité et de la santé technique.',
      },
      {
        type: 'text',
        content: 'Pour les petits sites (< 1000 pages), le crawl budget est rarement un problème. Pour les grands sites, optimiser ce budget est crucial.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Vérifier l\'indexation d\'une page',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Méthode 1 : Opérateur site:',
      },
      {
        type: 'text',
        content: 'Recherchez site:votresite.fr/url-de-la-page dans Google. Si la page apparaît, elle est indexée.',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '# Vérifier une page spécifique\nsite:example.com/ma-page\n\n# Voir toutes les pages indexées\nsite:example.com\n\n# Vérifier un sous-domaine\nsite:blog.example.com',
          filename: 'operateur-site.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Méthode 2 : Google Search Console',
      },
      {
        type: 'text',
        content: 'L\'outil "Inspection d\'URL" de Search Console donne des informations détaillées sur le statut d\'indexation et les éventuels problèmes.',
      },
      {
        type: 'list',
        content: [
          '1. Connectez-vous à Search Console',
          '2. Entrez l\'URL dans la barre de recherche en haut',
          '3. Consultez le statut "Disponible sur Google" ou les erreurs',
          '4. Cliquez sur "Afficher la page explorée" pour voir ce que Google voit',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Techniques pour accélérer l\'indexation',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Technique 1 : Demander l\'indexation',
      },
      {
        type: 'text',
        content: 'Dans Search Console, après inspection d\'une URL, cliquez sur "Demander l\'indexation". Cette demande est traitée en priorité.',
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Limitations',
          content: 'Vous êtes limité à environ 10-20 demandes par jour. N\'abusez pas de cette fonction, Google peut la désactiver si elle est surexploitée.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Technique 2 : Sitemap XML',
      },
      {
        type: 'text',
        content: 'Le sitemap XML liste toutes vos pages importantes. Soumettez-le à Search Console pour que Google connaisse vos pages. Consultez notre guide complet sur le sitemap XML.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Technique 3 : Liens internes',
      },
      {
        type: 'text',
        content: 'Liez vos nouvelles pages depuis des pages déjà indexées et bien positionnées. Googlebot suit ces liens et découvre le nouveau contenu.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Technique 4 : API d\'indexation Google',
      },
      {
        type: 'text',
        content: 'Pour certains types de contenu (offres d\'emploi, événements), Google propose une API d\'indexation qui promet une indexation quasi instantanée.',
      },
      {
        type: 'code',
        content: {
          language: 'javascript',
          code: '// Exemple d\'utilisation de l\'API d\'indexation\nconst { google } = require(\'googleapis\');\n\nasync function requestIndexing(url) {\n  const indexing = google.indexing(\'v3\');\n  await indexing.urlNotifications.publish({\n    requestBody: {\n      url: url,\n      type: \'URL_UPDATED\'\n    }\n  });\n}',
          filename: 'indexing-api.js',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Problèmes d\'indexation courants',
      },
      {
        type: 'table',
        content: {
          headers: ['Statut Search Console', 'Cause', 'Solution'],
          rows: [
            ['Bloquée par robots.txt', 'Le fichier robots.txt interdit le crawl', 'Modifier robots.txt'],
            ['Exclue par la balise noindex', 'Meta robots noindex présente', 'Retirer la balise'],
            ['Page avec redirection', 'Page redirigée vers une autre', 'Mettre à jour les liens'],
            ['URL canonique alternative', 'Canonical vers autre page', 'Vérifier le canonical'],
            ['Explorée, non indexée', 'Qualité jugée insuffisante', 'Améliorer le contenu'],
            ['Découverte, non explorée', 'Crawl budget ou problème technique', 'Optimiser structure'],
            ['Erreur de serveur (5xx)', 'Serveur indisponible', 'Corriger serveur'],
            ['Soft 404', 'Page vide ou contenu minimal', 'Ajouter du contenu'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Focus : "Explorée, actuellement non indexée"',
      },
      {
        type: 'text',
        content: 'Ce statut signifie que Google a vu votre page mais a choisi de ne pas l\'indexer. C\'est souvent un signal de qualité insuffisante ou de contenu dupliqué.',
      },
      {
        type: 'list',
        content: [
          'Contenu trop court ou superficiel',
          'Contenu similaire à d\'autres pages (internes ou externes)',
          'Page perçue comme peu utile',
          'Nouveau site sans autorité établie',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°1 : Nouveau site e-commerce',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un nouveau site e-commerce avec 500 produits. Après 2 mois, seulement 50 pages indexées. Le client était frustré par la lenteur de l\'indexation.',
        },
      },
      {
        type: 'text',
        content: 'BoutiqueZen.fr venait de lancer avec 500 fiches produits. Malgré un sitemap soumis, 90% des pages restaient non indexées après 2 mois.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Diagnostic',
      },
      {
        type: 'list',
        content: [
          'Site nouveau = pas d\'autorité = Google prudent',
          'Fiches produits avec descriptions fournisseur (dupliquées)',
          'Pas de liens internes vers les fiches depuis la home',
          'Pas de liens externes (backlinks)',
          'Structure de catégories plate (tout au même niveau)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Plan d\'action',
      },
      {
        type: 'list',
        content: [
          '1. Réécriture des 100 fiches produits phares (contenu unique)',
          '2. Création de pages catégories avec contenu éditorial',
          '3. Maillage interne : liens depuis catégories vers produits',
          '4. Blog avec 10 articles liés aux produits',
          '5. Campagne RP pour obtenir quelques backlinks',
          '6. Demande d\'indexation pour les pages prioritaires',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Chronologie des résultats',
      },
      {
        type: 'table',
        content: {
          headers: ['Semaine', 'Pages indexées', 'Actions'],
          rows: [
            ['S0', '50/500', 'État initial'],
            ['S2', '85', 'Contenu unique sur 100 fiches'],
            ['S4', '150', 'Catégories avec contenu'],
            ['S6', '280', 'Blog lancé + maillage'],
            ['S8', '420', 'Premiers backlinks'],
            ['S12', '490', 'Quasi-complet'],
          ],
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'success',
          title: 'Leçon clé',
          content: 'Pour un nouveau site, le contenu unique et les signaux de confiance (backlinks) sont essentiels pour débloquer l\'indexation à grande échelle.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°2 : Blog avec désindexation soudaine',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un blog établi de 300 articles. Du jour au lendemain, 200 articles ont disparu de l\'index Google. Panique côté trafic.',
        },
      },
      {
        type: 'text',
        content: 'VoyageBlog.fr avait 300 articles indexés depuis des années. Suite à une mise à jour du thème WordPress, 200 articles ont été désindexés.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Investigation',
      },
      {
        type: 'list',
        content: [
          'Search Console : statut "Exclue par la balise noindex"',
          'Le nouveau thème ajoutait noindex sur les archives',
          'Mais aussi sur les articles de plus de 2 ans !',
          'Une option "masquer l\'ancien contenu" était cochée par défaut',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résolution',
      },
      {
        type: 'list',
        content: [
          '1. Désactivation de l\'option "masquer l\'ancien contenu"',
          '2. Vérification qu\'aucun noindex ne restait',
          '3. Demande d\'indexation sur les 50 pages les plus importantes',
          '4. Attente de la réindexation naturelle pour le reste',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Récupération',
      },
      {
        type: 'table',
        content: {
          headers: ['Jour', 'Pages indexées', 'Trafic (% normal)'],
          rows: [
            ['J0', '100', '35%'],
            ['J3', '150', '45%'],
            ['J7', '220', '70%'],
            ['J14', '280', '90%'],
            ['J21', '298', '98%'],
          ],
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Leçon importante',
          content: 'Toujours vérifier les paramètres SEO après une mise à jour de thème ou plugin. Surveillez Search Console quotidiennement pendant une semaine.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°3 : Site technique avec problème JavaScript',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Une application React SPA. Google indexait uniquement la page d\'accueil, aucune page interne. Zéro trafic organique malgré du bon contenu.',
        },
      },
      {
        type: 'text',
        content: 'TechApp.io était une Single Page Application (SPA) React. Le contenu était chargé dynamiquement via JavaScript, et Google ne voyait qu\'une coquille vide.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Le diagnostic',
      },
      {
        type: 'list',
        content: [
          'Inspection URL : "Page vide ou avec très peu de contenu"',
          'Google rendait le JS mais avec des erreurs',
          'Les routes internes n\'étaient pas découvrables',
          'Pas de sitemap généré pour les routes',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solutions implémentées',
      },
      {
        type: 'list',
        content: [
          '1. Passage à Next.js pour le Server-Side Rendering (SSR)',
          '2. Génération statique (SSG) pour les pages de contenu',
          '3. Création d\'un sitemap dynamique',
          '4. Correction des erreurs JavaScript',
          '5. Prerendering pour les bots (Rendertron)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après (3 mois)'],
          rows: [
            ['Pages indexées', '1', '250'],
            ['Trafic organique', '~0', '3 500/mois'],
            ['Mots-clés positionnés', '0', '180'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Bonnes pratiques d\'indexation',
      },
      {
        type: 'list',
        content: [
          'Créez du contenu unique et de qualité pour chaque page',
          'Utilisez un sitemap XML et soumettez-le à Search Console',
          'Créez des liens internes depuis vos pages établies',
          'Évitez le contenu dupliqué (utilisez les canonicals)',
          'Surveillez Search Console régulièrement',
          'Ne bloquez pas les ressources CSS/JS dans robots.txt',
          'Assurez-vous que votre serveur est rapide et disponible',
          'Pour les SPA, utilisez le SSR ou le prerendering',
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
        content: 'Exercice 1 : Audit d\'indexation',
      },
      {
        type: 'text',
        content: 'Vérifiez le statut d\'indexation de votre site :',
      },
      {
        type: 'list',
        content: [
          '1. Allez dans Search Console > Couverture',
          '2. Notez le nombre de pages "Valides"',
          '3. Notez le nombre de pages "Exclues"',
          '4. Cliquez sur chaque type d\'exclusion',
          '5. Identifiez les pages importantes exclues',
        ],
      },
      {
        type: 'table',
        content: {
          headers: ['Statut', 'Nombre', 'Action requise'],
          rows: [
            ['Valides', '...', 'RAS'],
            ['Exclues - noindex', '...', 'Vérifier si volontaire'],
            ['Exclues - explorée non indexée', '...', 'Améliorer contenu'],
            ['Exclues - robots.txt', '...', 'Vérifier blocages'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Vérifier le rendu JavaScript',
      },
      {
        type: 'text',
        content: 'Vérifiez que Google voit le même contenu que les utilisateurs :',
      },
      {
        type: 'list',
        content: [
          '1. Search Console > Inspection d\'URL',
          '2. Entrez une URL avec contenu JavaScript',
          '3. Cliquez sur "Afficher la page explorée"',
          '4. Comparez avec la page réelle',
          '5. Vérifiez les erreurs JavaScript signalées',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Comparer index vs sitemap',
      },
      {
        type: 'text',
        content: 'Vérifiez si toutes vos pages importantes sont indexées :',
      },
      {
        type: 'list',
        content: [
          '1. Comptez les URLs dans votre sitemap',
          '2. Search Console > Sitemaps > Voir les détails',
          '3. Comparez "Découvertes" vs "Indexées"',
          '4. Si écart important, investiguer les exclusions',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Demander l\'indexation',
      },
      {
        type: 'text',
        content: 'Pratiquez la demande d\'indexation pour une nouvelle page :',
      },
      {
        type: 'list',
        content: [
          '1. Créez ou identifiez une page récente non indexée',
          '2. Allez dans Search Console > Inspection d\'URL',
          '3. Vérifiez le statut actuel',
          '4. Cliquez sur "Demander l\'indexation"',
          '5. Attendez 24-48h et vérifiez à nouveau',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quiz : Indexation Google',
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Indexation Google',
          questions: [
            {
              question: 'Quelle est la première étape avant l\'indexation ?',
              options: ['Le classement', 'Le crawl', 'L\'affichage', 'Le ranking'],
              correctIndex: 1,
              explanation: 'Le crawl est la première étape : Google doit d\'abord découvrir et télécharger la page avant de pouvoir l\'indexer.',
            },
            {
              question: 'Comment vérifier si une page est indexée ?',
              options: ['Google Analytics', 'Opérateur site: dans Google', 'Google Ads', 'Google Trends'],
              correctIndex: 1,
              explanation: 'L\'opérateur site:votresite.fr/page permet de vérifier si une URL spécifique est indexée.',
            },
            {
              question: 'Qu\'est-ce que le crawl budget ?',
              options: ['Le budget publicitaire', 'Le nombre de pages que Google explore sur un site', 'Le coût du référencement', 'Le temps de chargement'],
              correctIndex: 1,
              explanation: 'Le crawl budget est le nombre de pages que Googlebot va explorer sur votre site dans un temps donné.',
            },
            {
              question: 'Que signifie "Explorée, non indexée" ?',
              options: ['Page bloquée', 'Page vue mais jugée de qualité insuffisante', 'Erreur serveur', 'Page redirigée'],
              correctIndex: 1,
              explanation: 'Ce statut signifie que Google a vu la page mais a choisi de ne pas l\'indexer, souvent pour des raisons de qualité.',
            },
            {
              question: 'Quelle balise empêche l\'indexation ?',
              options: ['<meta name="robots" content="index">', '<meta name="robots" content="noindex">', '<meta name="googlebot" content="follow">', '<link rel="canonical">'],
              correctIndex: 1,
              explanation: 'La balise meta robots avec la valeur "noindex" indique à Google de ne pas indexer la page.',
            },
            {
              question: 'Combien de demandes d\'indexation peut-on faire par jour ?',
              options: ['Illimité', '10-20 environ', '1 seule', '100'],
              correctIndex: 1,
              explanation: 'Google limite les demandes d\'indexation à environ 10-20 par jour pour éviter les abus.',
            },
            {
              question: 'Quel fichier aide Google à découvrir vos pages ?',
              options: ['robots.txt', 'sitemap.xml', '.htaccess', 'index.html'],
              correctIndex: 1,
              explanation: 'Le sitemap.xml liste toutes les pages importantes de votre site pour faciliter leur découverte par Google.',
            },
            {
              question: 'Pourquoi les SPA (Single Page Apps) ont souvent des problèmes d\'indexation ?',
              options: ['Elles sont trop lentes', 'Le contenu est généré par JavaScript', 'Elles n\'ont pas de sitemap', 'Elles sont bloquées'],
              correctIndex: 1,
              explanation: 'Les SPA génèrent le contenu via JavaScript, et si Google ne peut pas l\'exécuter correctement, il ne voit pas le contenu.',
            },
            {
              question: 'Qu\'est-ce qu\'une page orpheline ?',
              options: ['Une page supprimée', 'Une page sans liens internes pointant vers elle', 'Une page dupliquée', 'Une page redirigée'],
              correctIndex: 1,
              explanation: 'Une page orpheline n\'a aucun lien interne pointant vers elle, ce qui la rend difficile à découvrir pour Google.',
            },
            {
              question: 'Combien de temps faut-il généralement pour qu\'une page soit indexée ?',
              options: ['Toujours instantané', 'De quelques heures à plusieurs semaines', 'Exactement 7 jours', 'Jamais automatique'],
              correctIndex: 1,
              explanation: 'Le temps d\'indexation varie de quelques heures à plusieurs semaines selon l\'autorité du site et la qualité du contenu.',
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
        content: 'Pour approfondir l\'indexation Google, consultez ces articles :',
      },
      {
        type: 'list',
        content: [
          'Robots.txt : Contrôler l\'accès des robots - Éviter les blocages accidentels',
          'Sitemap XML : Créer et optimiser votre plan de site - Faciliter la découverte',
          'Guide complet SEO Technique - Vue d\'ensemble du SEO technique',
        ],
      },
      {
        type: 'cta',
        content: {
          title: 'Continuez votre apprentissage',
          description: 'Découvrez maintenant comment configurer correctement votre fichier robots.txt pour contrôler l\'accès des robots.',
          buttonText: 'Robots.txt',
          buttonLink: '/seo-technique/robots-txt',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'robots-txt',
    title: 'Robots.txt : Contrôler l\'Accès des Robots à votre Site',
    metaTitle: 'Robots.txt SEO - Guide Configuration 2026',
    metaDescription: 'Apprenez à configurer correctement votre fichier robots.txt pour le SEO. Syntaxe, directives et erreurs à éviter.',
    keyword: 'robots txt',
    secondaryKeywords: ['fichier robots', 'configurer robots.txt', 'bloquer robots'],
    intent: 'info',
    cluster: 'seo-technique',
    excerpt: 'Le fichier robots.txt indique aux robots quelles pages explorer ou ignorer. Une mauvaise configuration peut bloquer l\'indexation de votre site.',
    tableOfContents: true,
    readingTime: 28,
    difficulty: 'intermediaire',
    lastUpdated: '2026-01-14',
    author: 'thomas-dupont',
    relatedSlugs: ['indexation-google', 'sitemap-xml'],
    faq: [
      {
        question: 'Le robots.txt peut-il empêcher l\'indexation ?',
        answer: 'Il empêche le crawl, pas l\'indexation. Une page peut être indexée sans être crawlée (via des liens). Pour empêcher l\'indexation, utilisez noindex.',
      },
      {
        question: 'Où placer le fichier robots.txt ?',
        answer: 'À la racine du site : votresite.fr/robots.txt. Il doit être accessible publiquement.',
      },
      {
        question: 'Que se passe-t-il si je n\'ai pas de robots.txt ?',
        answer: 'Google considère que tout est autorisé. Ce n\'est pas grave pour un petit site, mais recommandé pour contrôler le crawl et indiquer le sitemap.',
      },
      {
        question: 'Les robots respectent-ils toujours le robots.txt ?',
        answer: 'Les robots légitimes (Googlebot, Bingbot) respectent le robots.txt. Les robots malveillants peuvent l\'ignorer. Ce n\'est pas une mesure de sécurité.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Le fichier robots.txt est la première chose que consultent les robots de Google. Il leur indique quelles parties de votre site explorer ou éviter. Une mauvaise configuration peut avoir des conséquences désastreuses sur votre SEO.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Ce que vous allez apprendre',
          content: 'Ce guide premium couvre la configuration complète du robots.txt : syntaxe, directives avancées, cas d\'usage courants, et erreurs à éviter. Avec 3 études de cas et des exercices pratiques.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Qu\'est-ce que le robots.txt ?',
      },
      {
        type: 'text',
        content: 'Le robots.txt est un fichier texte placé à la racine de votre site qui donne des instructions aux robots (crawlers) des moteurs de recherche. Il fait partie du "Robots Exclusion Protocol" (REP).',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '# Emplacement obligatoire\nhttps://example.com/robots.txt\n\n# Le fichier doit être accessible publiquement\n# Il est sensible à la casse (robots.txt ≠ Robots.TXT)',
          filename: 'emplacement.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Ce que peut faire le robots.txt',
      },
      {
        type: 'list',
        content: [
          '✓ Indiquer quels répertoires/pages ne pas explorer',
          '✓ Spécifier des règles pour des robots spécifiques',
          '✓ Indiquer l\'emplacement du sitemap',
          '✓ Contrôler le crawl budget',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Ce que NE peut PAS faire le robots.txt',
      },
      {
        type: 'list',
        content: [
          '✗ Empêcher l\'indexation (utilisez noindex)',
          '✗ Protéger du contenu sensible (utilisez l\'authentification)',
          '✗ Bloquer les robots malveillants (ils l\'ignorent)',
          '✗ Cacher des URLs (elles restent visibles dans le fichier)',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Confusion fréquente',
          content: 'Bloquer une page dans robots.txt N\'empêche PAS son indexation. Si d\'autres sites lient vers cette page, Google peut l\'indexer sans la crawler. Pour bloquer l\'indexation, utilisez la balise meta noindex.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Syntaxe du robots.txt',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les directives principales',
      },
      {
        type: 'table',
        content: {
          headers: ['Directive', 'Description', 'Exemple'],
          rows: [
            ['User-agent', 'Spécifie le robot ciblé (* = tous)', 'User-agent: Googlebot'],
            ['Disallow', 'Interdit l\'accès à un chemin', 'Disallow: /admin/'],
            ['Allow', 'Autorise l\'accès (priorité sur Disallow)', 'Allow: /admin/public/'],
            ['Sitemap', 'Indique l\'URL du sitemap', 'Sitemap: https://site.fr/sitemap.xml'],
            ['Crawl-delay', 'Délai entre requêtes (non supporté par Google)', 'Crawl-delay: 10'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Règles de syntaxe',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '# Ceci est un commentaire (ignoré par les robots)\n\n# Chaque bloc commence par User-agent\nUser-agent: *\n\n# Les chemins sont sensibles à la casse\nDisallow: /Admin/   # Bloque /Admin/ mais pas /admin/\n\n# Le / à la fin est important\nDisallow: /private   # Bloque /private, /private-page, /private/...\nDisallow: /private/  # Bloque uniquement le dossier /private/\n\n# Wildcards (*)\nDisallow: /*.pdf$    # Bloque tous les PDF\nDisallow: /page?*    # Bloque les URLs avec paramètres',
          filename: 'syntaxe.txt',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Exemples de configuration',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Configuration minimale recommandée',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '# Robots.txt minimal pour tout site\nUser-agent: *\nAllow: /\n\nSitemap: https://example.com/sitemap.xml',
          filename: 'robots-minimal.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Configuration pour blog/site vitrine',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '# Robots.txt pour blog/site vitrine\nUser-agent: *\nAllow: /\n\n# Bloquer les pages d\'administration\nDisallow: /wp-admin/\nDisallow: /admin/\n\n# Bloquer les pages de connexion\nDisallow: /login\nDisallow: /register\n\n# Bloquer les pages de recherche\nDisallow: /search\nDisallow: /?s=\n\n# Bloquer les pages de tags (souvent peu utiles)\nDisallow: /tag/\n\nSitemap: https://example.com/sitemap.xml',
          filename: 'robots-blog.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Configuration pour e-commerce',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '# Robots.txt pour e-commerce\nUser-agent: *\nAllow: /\n\n# Administration et checkout\nDisallow: /admin/\nDisallow: /checkout/\nDisallow: /cart/\nDisallow: /account/\n\n# Filtres et tris (éviter duplicate content)\nDisallow: /*?sort=\nDisallow: /*?filter=\nDisallow: /*&page=\n\n# Résultats de recherche\nDisallow: /search/\n\n# Pages de comparaison\nDisallow: /compare/\n\n# Listes de souhaits\nDisallow: /wishlist/\n\nSitemap: https://shop.example.com/sitemap_index.xml',
          filename: 'robots-ecommerce.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Bloquer des robots spécifiques',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '# Règles par défaut\nUser-agent: *\nAllow: /\n\n# Bloquer les crawlers d\'IA (si souhaité)\nUser-agent: GPTBot\nDisallow: /\n\nUser-agent: ChatGPT-User\nDisallow: /\n\nUser-agent: CCBot\nDisallow: /\n\n# Bloquer les robots agressifs\nUser-agent: AhrefsBot\nCrawl-delay: 10\n\nUser-agent: SemrushBot\nCrawl-delay: 10\n\nSitemap: https://example.com/sitemap.xml',
          filename: 'robots-specifiques.txt',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°1 : Site e-commerce invisible',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un site e-commerce de 3000 produits avec seulement 50 pages indexées. Le client pensait avoir un problème de contenu.',
        },
      },
      {
        type: 'text',
        content: 'TechShop.fr avait lancé son site depuis 6 mois mais n\'apparaissait presque jamais dans Google. L\'audit a révélé un problème de robots.txt.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Le robots.txt problématique',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '# Ce que contenait le fichier (ERREUR)\nUser-agent: *\nDisallow: /products/\nDisallow: /categories/\nDisallow: /brands/\n\n# Le développeur avait copié un fichier de staging\n# qui bloquait tout le contenu produit !',
          filename: 'robots-erreur.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Correction appliquée',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '# Robots.txt corrigé\nUser-agent: *\nAllow: /products/\nAllow: /categories/\nAllow: /brands/\nDisallow: /checkout/\nDisallow: /cart/\nDisallow: /account/\nDisallow: /*?sort=\nDisallow: /*?filter=\n\nSitemap: https://techshop.fr/sitemap.xml',
          filename: 'robots-corrige.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après 2 mois'],
          rows: [
            ['Pages indexées', '50', '2 850'],
            ['Trafic organique', '~100/mois', '8 500/mois'],
            ['CA organique', '500€', '45 000€'],
          ],
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'success',
          title: 'Leçon clé',
          content: 'Toujours vérifier le robots.txt après un lancement ou une migration. Un fichier de staging oublié peut bloquer tout votre site.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°2 : Crawl budget gaspillé',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un site média avec 50 000 pages. Les nouveaux articles mettaient des semaines à être indexés. Crawl budget gaspillé sur des pages inutiles.',
        },
      },
      {
        type: 'text',
        content: 'InfoNews.fr publiait 30 articles/jour mais Google crawlait principalement les archives et pages de tags inutiles.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Analyse du problème',
      },
      {
        type: 'list',
        content: [
          '50 000 pages de tags (1 article par tag)',
          '30 000 pages d\'archives par date',
          '10 000 pages d\'auteur (profils vides)',
          'Seulement 10 000 vrais articles de valeur',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Optimisation du robots.txt',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '# Robots.txt optimisé pour le crawl budget\nUser-agent: *\nAllow: /\n\n# Bloquer les pages à faible valeur\nDisallow: /tag/\nDisallow: /author/\nDisallow: /archives/\nDisallow: /page/\n\n# Bloquer les paramètres de tri/filtre\nDisallow: /*?orderby=\nDisallow: /*?filter=\n\n# Autoriser les catégories principales\nAllow: /category/actualites/\nAllow: /category/tech/\nAllow: /category/business/\n\nSitemap: https://infonews.fr/sitemap-articles.xml',
          filename: 'robots-optimise.txt',
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
          'Nouveaux articles indexés en 24-48h (vs 2-3 semaines)',
          'Crawl des articles de valeur : +180%',
          'Crawl des pages inutiles : -90%',
          'Trafic Google News : +35%',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°3 : Fuite de données sensibles',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un site B2B avait des pages internes indexées dans Google, incluant des documents confidentiels. Le robots.txt révélait les chemins sensibles.',
        },
      },
      {
        type: 'text',
        content: 'ConsultingPro.fr avait utilisé le robots.txt pour "cacher" des dossiers confidentiels. Erreur : le fichier est public et les URLs étaient listées en clair.',
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
          code: '# Ce que contenait le robots.txt (MAUVAISE PRATIQUE)\nUser-agent: *\nDisallow: /internal-docs/\nDisallow: /client-reports/\nDisallow: /financial-data/\nDisallow: /admin-panel/\n\n# N\'importe qui pouvait voir ces chemins sensibles !\n# Et les pages étaient accessibles si on connaissait l\'URL',
          filename: 'robots-fuite.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution correcte',
      },
      {
        type: 'list',
        content: [
          '1. Authentification obligatoire sur les dossiers sensibles',
          '2. Balise noindex sur les pages qui doivent rester accessibles',
          '3. Robots.txt simplifié sans révéler les chemins',
          '4. Suppression des pages indexées via Search Console',
        ],
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '# Robots.txt sécurisé\nUser-agent: *\nAllow: /\n\n# Ne pas lister les chemins sensibles !\n# Protéger via authentification serveur\n\nSitemap: https://consultingpro.fr/sitemap.xml',
          filename: 'robots-securise.txt',
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Règle de sécurité',
          content: 'Le robots.txt n\'est PAS une mesure de sécurité. Tout ce qui y est listé devient public. Pour protéger du contenu sensible, utilisez l\'authentification.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Tester votre robots.txt',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Outil de test Search Console',
      },
      {
        type: 'text',
        content: 'Google Search Console propose un testeur de robots.txt :',
      },
      {
        type: 'list',
        content: [
          '1. Allez dans Search Console > Paramètres > robots.txt',
          '2. Ou utilisez l\'ancien outil : search.google.com/search-console/robots-testing-tool',
          '3. Testez des URLs spécifiques pour voir si elles sont autorisées',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Vérifications importantes',
      },
      {
        type: 'list',
        content: [
          'Le fichier est accessible (pas d\'erreur 404 ou 500)',
          'Les pages importantes ne sont pas bloquées',
          'Le sitemap est bien référencé',
          'Pas de typos dans les chemins',
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
        content: 'Exercice 1 : Analyser votre robots.txt',
      },
      {
        type: 'text',
        content: 'Ouvrez votre fichier robots.txt et répondez :',
      },
      {
        type: 'table',
        content: {
          headers: ['Question', 'Réponse'],
          rows: [
            ['URL du fichier', '...'],
            ['Le sitemap est-il présent ?', 'Oui/Non'],
            ['Y a-t-il des Disallow ?', '...'],
            ['Des pages importantes sont-elles bloquées ?', 'Oui/Non'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Créer un robots.txt',
      },
      {
        type: 'text',
        content: 'Créez un robots.txt pour un blog avec ces besoins :',
      },
      {
        type: 'list',
        content: [
          'Bloquer /wp-admin/ sauf /wp-admin/admin-ajax.php',
          'Bloquer les pages de tags',
          'Bloquer les résultats de recherche',
          'Autoriser tout le reste',
          'Indiquer le sitemap',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Diagnostiquer un problème',
      },
      {
        type: 'text',
        content: 'Utilisez Search Console pour tester ces URLs contre votre robots.txt :',
      },
      {
        type: 'list',
        content: [
          'Votre page d\'accueil',
          'Une page produit/article',
          'Une page de catégorie',
          'Votre sitemap',
          'Une page admin',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Optimiser pour le crawl budget',
      },
      {
        type: 'text',
        content: 'Identifiez sur votre site les pages qui gaspillent le crawl budget :',
      },
      {
        type: 'list',
        content: [
          '1. Search Console > Paramètres > Statistiques d\'exploration',
          '2. Identifiez les pages souvent crawlées mais peu utiles',
          '3. Listez les patterns d\'URLs à bloquer',
          '4. Testez les nouvelles règles avant de les appliquer',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quiz : Robots.txt',
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Robots.txt',
          questions: [
            {
              question: 'Où doit être placé le fichier robots.txt ?',
              options: ['Dans /content/', 'À la racine du site', 'Dans /admin/', 'N\'importe où'],
              correctIndex: 1,
              explanation: 'Le fichier robots.txt doit être à la racine du site : example.com/robots.txt',
            },
            {
              question: 'Le robots.txt peut-il empêcher l\'indexation ?',
              options: ['Oui, complètement', 'Non, il bloque le crawl mais pas l\'indexation', 'Seulement pour Googlebot', 'Oui, avec Disallow'],
              correctIndex: 1,
              explanation: 'Le robots.txt empêche le crawl mais pas l\'indexation. Une page peut être indexée via des liens même si elle est bloquée.',
            },
            {
              question: 'Quelle directive bloque l\'accès à un chemin ?',
              options: ['Block:', 'Disallow:', 'Deny:', 'Forbid:'],
              correctIndex: 1,
              explanation: 'La directive Disallow: bloque l\'accès des robots à un chemin spécifique.',
            },
            {
              question: 'Que signifie User-agent: * ?',
              options: ['Aucun robot', 'Uniquement Google', 'Tous les robots', 'Robots inconnus'],
              correctIndex: 2,
              explanation: 'L\'astérisque (*) signifie "tous les robots". Les règles s\'appliqueront à tous les crawlers.',
            },
            {
              question: 'Comment indiquer l\'emplacement du sitemap ?',
              options: ['Disallow: sitemap', 'Allow: sitemap.xml', 'Sitemap: https://...', 'Include: sitemap'],
              correctIndex: 2,
              explanation: 'La directive Sitemap: suivie de l\'URL complète indique l\'emplacement du sitemap.',
            },
            {
              question: 'Les robots malveillants respectent-ils le robots.txt ?',
              options: ['Toujours', 'Jamais', 'Souvent non', 'Uniquement sur HTTPS'],
              correctIndex: 2,
              explanation: 'Les robots malveillants ignorent souvent le robots.txt. Ce n\'est pas une mesure de sécurité.',
            },
            {
              question: 'Que fait "Disallow: /" ?',
              options: ['Autorise tout', 'Bloque la page d\'accueil', 'Bloque tout le site', 'Erreur de syntaxe'],
              correctIndex: 2,
              explanation: 'Disallow: / bloque l\'accès à tout le site pour le robot spécifié.',
            },
            {
              question: 'Faut-il bloquer les fichiers CSS/JS ?',
              options: ['Oui, pour la sécurité', 'Non, Google en a besoin pour le rendu', 'Seulement le JS', 'Ça n\'a pas d\'importance'],
              correctIndex: 1,
              explanation: 'Google a besoin d\'accéder aux CSS et JS pour rendre les pages correctement. Les bloquer peut nuire au SEO.',
            },
            {
              question: 'Le robots.txt est-il sensible à la casse ?',
              options: ['Non', 'Oui', 'Seulement pour les chemins', 'Seulement pour les directives'],
              correctIndex: 2,
              explanation: 'Les chemins dans le robots.txt sont sensibles à la casse. /Admin/ et /admin/ sont différents.',
            },
            {
              question: 'Pourquoi ne pas lister les dossiers sensibles dans robots.txt ?',
              options: ['Ça ralentit le site', 'Le fichier devient public et révèle ces chemins', 'Google les indexe quand même', 'Ça ne sert à rien'],
              correctIndex: 1,
              explanation: 'Le robots.txt est public. Lister des chemins sensibles les révèle à tout le monde.',
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
        content: 'Pour approfondir le contrôle de l\'accès des robots, consultez ces articles :',
      },
      {
        type: 'list',
        content: [
          'Indexation Google : Faire indexer vos pages rapidement - Comprendre le processus complet',
          'Sitemap XML : Créer et optimiser votre plan de site - Complémentaire au robots.txt',
          'Guide complet SEO Technique - Vue d\'ensemble du SEO technique',
        ],
      },
      {
        type: 'cta',
        content: {
          title: 'Continuez votre apprentissage',
          description: 'Découvrez maintenant comment créer et optimiser votre sitemap XML pour une meilleure indexation.',
          buttonText: 'Sitemap XML',
          buttonLink: '/seo-technique/sitemap-xml',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'sitemap-xml',
    title: 'Sitemap XML : Créer et Optimiser votre Plan de Site',
    metaTitle: 'Sitemap XML SEO - Guide Complet 2026',
    metaDescription: 'Créez un sitemap XML efficace pour améliorer l\'indexation de votre site. Structure, bonnes pratiques et soumission à Google.',
    keyword: 'sitemap xml',
    secondaryKeywords: ['plan de site', 'sitemap seo', 'créer sitemap'],
    intent: 'info',
    cluster: 'seo-technique',
    excerpt: 'Le sitemap XML aide Google à découvrir toutes vos pages importantes. Un sitemap bien configuré améliore la couverture d\'indexation.',
    tableOfContents: true,
    readingTime: 28,
    difficulty: 'debutant',
    lastUpdated: '2026-01-12',
    author: 'marie-lefevre',
    relatedSlugs: ['indexation-google', 'robots-txt'],
    faq: [
      {
        question: 'Le sitemap est-il obligatoire ?',
        answer: 'Non, mais fortement recommandé. Il est particulièrement utile pour les grands sites, les sites nouveaux, ou ceux avec une structure complexe.',
      },
      {
        question: 'Quelle taille maximale pour un sitemap ?',
        answer: 'Maximum 50 000 URLs ou 50 Mo non compressé. Au-delà, créez plusieurs sitemaps avec un index de sitemaps.',
      },
      {
        question: 'À quelle fréquence mettre à jour le sitemap ?',
        answer: 'Le sitemap doit être mis à jour automatiquement à chaque ajout/modification de page. Les CMS modernes le gèrent automatiquement.',
      },
      {
        question: 'Les sitemaps accélèrent-ils l\'indexation ?',
        answer: 'Ils aident Google à découvrir vos pages, mais n\'accélèrent pas directement l\'indexation. C\'est un signal de ce qui est important sur votre site.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Le sitemap XML est une carte de votre site que vous fournissez à Google. Il liste toutes les URLs importantes avec des métadonnées optionnelles, facilitant la découverte et l\'indexation de votre contenu.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Ce que vous allez apprendre',
          content: 'Ce guide premium couvre la création et l\'optimisation des sitemaps XML : structure, types de sitemaps, génération automatique, et soumission. Avec 3 études de cas et des exercices pratiques.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Qu\'est-ce qu\'un sitemap XML ?',
      },
      {
        type: 'text',
        content: 'Un sitemap XML est un fichier au format XML qui liste les URLs de votre site que vous souhaitez voir indexées. Il permet aux moteurs de recherche de découvrir des pages qu\'ils pourraient manquer via le crawl normal.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Pourquoi avoir un sitemap',
      },
      {
        type: 'list',
        content: [
          'Facilite la découverte de nouvelles pages',
          'Indique les pages importantes de votre site',
          'Fournit des métadonnées (date de modification)',
          'Essentiel pour les grands sites (>500 pages)',
          'Utile pour les nouveaux sites sans backlinks',
          'Aide pour les sites avec du contenu JavaScript',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Structure d\'un sitemap basique',
      },
      {
        type: 'code',
        content: {
          language: 'xml',
          code: '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>https://example.com/</loc>\n    <lastmod>2026-01-15</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n  <url>\n    <loc>https://example.com/about</loc>\n    <lastmod>2026-01-10</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n</urlset>',
          filename: 'sitemap.xml',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les balises du sitemap',
      },
      {
        type: 'table',
        content: {
          headers: ['Balise', 'Obligatoire', 'Description'],
          rows: [
            ['<loc>', 'Oui', 'URL de la page (absolue, avec https://)'],
            ['<lastmod>', 'Non', 'Date de dernière modification (YYYY-MM-DD)'],
            ['<changefreq>', 'Non', 'Fréquence de mise à jour (Google l\'ignore)'],
            ['<priority>', 'Non', 'Priorité relative 0.0-1.0 (Google l\'ignore)'],
          ],
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'À savoir',
          content: 'Google a confirmé qu\'il ignore les balises changefreq et priority. Seules loc et lastmod sont vraiment utilisées.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Types de sitemaps',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Sitemap standard (URLs)',
      },
      {
        type: 'text',
        content: 'Le sitemap de base liste les pages HTML de votre site. C\'est le plus courant et souvent le seul nécessaire.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Sitemap images',
      },
      {
        type: 'text',
        content: 'Pour aider Google Images à indexer vos images, vous pouvez créer un sitemap dédié ou ajouter des balises images dans votre sitemap principal.',
      },
      {
        type: 'code',
        content: {
          language: 'xml',
          code: '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n  <url>\n    <loc>https://example.com/article</loc>\n    <image:image>\n      <image:loc>https://example.com/images/photo.jpg</image:loc>\n      <image:title>Photo descriptive</image:title>\n    </image:image>\n  </url>\n</urlset>',
          filename: 'sitemap-images.xml',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Sitemap vidéos',
      },
      {
        type: 'text',
        content: 'Si vous avez des vidéos, un sitemap vidéo aide Google à les indexer avec plus de métadonnées.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Sitemap actualités',
      },
      {
        type: 'text',
        content: 'Pour les sites d\'actualités inscrits à Google News, un sitemap news avec des balises spécifiques est recommandé.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Index de sitemaps',
      },
      {
        type: 'text',
        content: 'Pour les grands sites, vous pouvez créer un index qui référence plusieurs sitemaps :',
      },
      {
        type: 'code',
        content: {
          language: 'xml',
          code: '<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>https://example.com/sitemap-posts.xml</loc>\n    <lastmod>2026-01-15</lastmod>\n  </sitemap>\n  <sitemap>\n    <loc>https://example.com/sitemap-products.xml</loc>\n    <lastmod>2026-01-15</lastmod>\n  </sitemap>\n  <sitemap>\n    <loc>https://example.com/sitemap-pages.xml</loc>\n    <lastmod>2026-01-10</lastmod>\n  </sitemap>\n</sitemapindex>',
          filename: 'sitemap_index.xml',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quelles pages inclure/exclure',
      },
      {
        type: 'heading',
        level: 3,
        content: 'À inclure',
      },
      {
        type: 'list',
        content: [
          'Toutes les pages indexables et canoniques',
          'Pages de contenu (articles, produits, services)',
          'Pages statiques importantes (accueil, contact, à propos)',
          'Pages de catégories/collections',
          'Pages de destination (landing pages)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'À exclure',
      },
      {
        type: 'list',
        content: [
          'Pages avec noindex',
          'Pages redirigées (301, 302)',
          'Pages non-canoniques (qui pointent vers une autre URL)',
          'Pages d\'erreur (404, 500)',
          'Pages d\'administration',
          'Résultats de recherche internes',
          'Pages avec paramètres de filtre/tri',
          'Pages de pagination (parfois)',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Règle d\'or',
          content: 'Le sitemap ne doit contenir que des URLs que vous VOULEZ voir indexées. Inclure des pages noindex ou redirigées crée de la confusion.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Soumettre le sitemap à Google',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Méthode 1 : Google Search Console',
      },
      {
        type: 'list',
        content: [
          '1. Connectez-vous à Search Console',
          '2. Sélectionnez votre propriété',
          '3. Menu Sitemaps dans le panneau gauche',
          '4. Entrez l\'URL du sitemap',
          '5. Cliquez sur "Envoyer"',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Méthode 2 : Robots.txt',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '# À la fin de votre robots.txt\nSitemap: https://example.com/sitemap.xml\nSitemap: https://example.com/sitemap-images.xml',
          filename: 'robots.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Méthode 3 : Ping direct',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '# Envoyer un ping à Google\nhttps://www.google.com/ping?sitemap=https://example.com/sitemap.xml\n\n# Envoyer un ping à Bing\nhttps://www.bing.com/ping?sitemap=https://example.com/sitemap.xml',
          filename: 'ping-urls.txt',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°1 : Site e-commerce - Sitemap mal structuré',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un site e-commerce avec 10 000 produits. Search Console affichait 3 000 erreurs de sitemap. Seulement 40% des produits indexés.',
        },
      },
      {
        type: 'text',
        content: 'ModeShop.fr avait un sitemap automatique qui incluait tout, y compris les variantes, les URLs avec paramètres et les pages supprimées.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les problèmes identifiés',
      },
      {
        type: 'list',
        content: [
          '25 000 URLs dans le sitemap (vs 10 000 produits)',
          'Variantes couleur/taille comme pages séparées',
          'URLs avec paramètres ?sort=price',
          '2 000 URLs de produits supprimés (404)',
          'Pas de lastmod ou dates incorrectes',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution implémentée',
      },
      {
        type: 'list',
        content: [
          '1. Nettoyage : suppression des URLs non-canoniques',
          '2. Variantes : regroupées sous le produit parent',
          '3. Paramètres : exclus du sitemap',
          '4. 404 : URLs supprimées automatiquement',
          '5. Lastmod : dates réelles de modification',
          '6. Structure : sitemap index avec sitemaps par catégorie',
        ],
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: '# Nouvelle structure\nsitemap_index.xml\n├── sitemap-categories.xml (50 URLs)\n├── sitemap-products-1.xml (10 000 URLs)\n├── sitemap-blog.xml (200 URLs)\n└── sitemap-pages.xml (20 URLs)',
          filename: 'structure-sitemap.txt',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats après 2 mois',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après'],
          rows: [
            ['Erreurs sitemap', '3 000', '12'],
            ['URLs dans sitemap', '25 000', '10 270'],
            ['Taux d\'indexation', '40%', '92%'],
            ['Trafic organique', '5 000/mois', '18 000/mois'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°2 : Blog sans sitemap',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un blog de 500 articles sans sitemap. Articles orphelins mal indexés, structure de liens internes insuffisante.',
        },
      },
      {
        type: 'text',
        content: 'TechBlog.io avait négligé le sitemap car "les liens internes suffisent". Pourtant, 30% des articles n\'étaient pas indexés.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Analyse de la situation',
      },
      {
        type: 'list',
        content: [
          '500 articles publiés',
          '350 articles indexés (70%)',
          '150 articles orphelins ou mal liés',
          'Nouveaux articles : 2-3 semaines pour indexation',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Implémentation du sitemap',
      },
      {
        type: 'list',
        content: [
          '1. Installation du plugin Yoast SEO pour génération auto',
          '2. Configuration : uniquement les articles et pages',
          '3. Exclusion des tags et archives auteur',
          '4. Soumission à Search Console',
          '5. Ajout dans robots.txt',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après 6 semaines'],
          rows: [
            ['Articles indexés', '350 (70%)', '485 (97%)'],
            ['Délai indexation nouveaux', '2-3 semaines', '2-4 jours'],
            ['Trafic articles anciens', '+35%', 'Articles redécouverts'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas n°3 : Site multilingue',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Un site SaaS en 5 langues. Un seul sitemap avec toutes les URLs mélangées. Google indexait mal les versions locales.',
        },
      },
      {
        type: 'text',
        content: 'CloudApp.io avait un sitemap unique de 5 000 URLs mélangeant les 5 langues. Google confondait les versions et affichait la mauvaise langue.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'La solution : sitemaps par langue avec hreflang',
      },
      {
        type: 'code',
        content: {
          language: 'xml',
          code: '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n  <url>\n    <loc>https://cloudapp.io/fr/pricing</loc>\n    <xhtml:link rel="alternate" hreflang="fr" href="https://cloudapp.io/fr/pricing"/>\n    <xhtml:link rel="alternate" hreflang="en" href="https://cloudapp.io/en/pricing"/>\n    <xhtml:link rel="alternate" hreflang="de" href="https://cloudapp.io/de/pricing"/>\n    <xhtml:link rel="alternate" hreflang="es" href="https://cloudapp.io/es/pricing"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="https://cloudapp.io/en/pricing"/>\n  </url>\n</urlset>',
          filename: 'sitemap-hreflang.xml',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Structure finale',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: 'sitemap_index.xml\n├── sitemap-en.xml (1 000 URLs + hreflang)\n├── sitemap-fr.xml (1 000 URLs + hreflang)\n├── sitemap-de.xml (1 000 URLs + hreflang)\n├── sitemap-es.xml (1 000 URLs + hreflang)\n└── sitemap-pt.xml (1 000 URLs + hreflang)',
          filename: 'structure-multilingue.txt',
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
          'Erreurs hreflang Search Console : de 800 à 5',
          'Bonne version affichée : 95% (vs 60%)',
          'Trafic France : +45%',
          'Trafic Allemagne : +80%',
          'Trafic Espagne : +65%',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Outils de génération de sitemap',
      },
      {
        type: 'table',
        content: {
          headers: ['Plateforme', 'Solution', 'Automatique'],
          rows: [
            ['WordPress', 'Yoast SEO, RankMath, XML Sitemaps', 'Oui'],
            ['Shopify', 'Intégré nativement', 'Oui'],
            ['Next.js', 'next-sitemap package', 'À configurer'],
            ['Custom', 'Screaming Frog, XML-Sitemaps.com', 'Manuel ou script'],
            ['Statique', 'Générateurs statiques (Hugo, Gatsby)', 'Build time'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Bonnes pratiques',
      },
      {
        type: 'list',
        content: [
          'Mettez à jour automatiquement le sitemap',
          'Utilisez des URLs absolues (avec https://)',
          'Gardez le sitemap à jour avec lastmod',
          'N\'incluez que des pages 200 (pas de 404, redirections)',
          'Créez des sitemaps séparés par type de contenu',
          'Compressez les gros sitemaps (.xml.gz)',
          'Surveillez les erreurs dans Search Console',
          'Validez le XML (pas d\'erreurs de syntaxe)',
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
        content: 'Exercice 1 : Analyser votre sitemap actuel',
      },
      {
        type: 'text',
        content: 'Vérifiez votre sitemap et répondez aux questions :',
      },
      {
        type: 'table',
        content: {
          headers: ['Question', 'Réponse'],
          rows: [
            ['URL du sitemap', '...'],
            ['Nombre d\'URLs', '...'],
            ['Contient des 404/redirections ?', 'Oui/Non'],
            ['lastmod présent et correct ?', 'Oui/Non'],
            ['Soumis dans Search Console ?', 'Oui/Non'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Comparer sitemap vs indexation',
      },
      {
        type: 'text',
        content: 'Comparez votre sitemap avec l\'indexation réelle :',
      },
      {
        type: 'list',
        content: [
          '1. Comptez les URLs dans votre sitemap',
          '2. Dans Search Console, notez les pages indexées',
          '3. Calculez le taux d\'indexation',
          '4. Si < 80%, investiguer les exclusions',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Nettoyer un sitemap',
      },
      {
        type: 'text',
        content: 'Identifiez les URLs à supprimer de votre sitemap :',
      },
      {
        type: 'list',
        content: [
          '1. Exportez les URLs du sitemap',
          '2. Crawlez ces URLs (Screaming Frog)',
          '3. Identifiez les 404, redirections, noindex',
          '4. Listez les URLs à exclure',
          '5. Configurez les exclusions dans votre outil',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Créer un sitemap manuellement',
      },
      {
        type: 'text',
        content: 'Pour un petit site, créez un sitemap à la main :',
      },
      {
        type: 'list',
        content: [
          '1. Listez vos 10 pages les plus importantes',
          '2. Créez le fichier XML avec la structure correcte',
          '3. Ajoutez <loc> pour chaque URL',
          '4. Ajoutez <lastmod> avec les vraies dates',
          '5. Validez avec un validateur XML',
          '6. Uploadez et soumettez',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quiz : Sitemap XML',
      },
      {
        type: 'quiz',
        content: {
          title: 'Quiz : Sitemap XML',
          questions: [
            {
              question: 'Quelle est la taille maximale d\'un sitemap ?',
              options: ['10 000 URLs', '50 000 URLs', '100 000 URLs', 'Illimité'],
              correctIndex: 1,
              explanation: 'Un sitemap peut contenir maximum 50 000 URLs ou 50 Mo. Au-delà, utilisez un index de sitemaps.',
            },
            {
              question: 'Quelle balise est obligatoire dans un sitemap ?',
              options: ['lastmod', 'priority', 'loc', 'changefreq'],
              correctIndex: 2,
              explanation: 'Seule la balise <loc> contenant l\'URL est obligatoire. Les autres sont optionnelles.',
            },
            {
              question: 'Google utilise-t-il la balise priority ?',
              options: ['Oui, c\'est important', 'Non, il l\'ignore', 'Parfois', 'Uniquement pour la home'],
              correctIndex: 1,
              explanation: 'Google a confirmé qu\'il ignore les balises priority et changefreq. Seules loc et lastmod sont utilisées.',
            },
            {
              question: 'Où soumettre son sitemap ?',
              options: ['Google Analytics', 'Google Search Console', 'Google Ads', 'Google My Business'],
              correctIndex: 1,
              explanation: 'Le sitemap se soumet via Google Search Console dans la section Sitemaps.',
            },
            {
              question: 'Faut-il inclure les pages noindex dans le sitemap ?',
              options: ['Oui, toujours', 'Non, jamais', 'Seulement si importantes', 'Ça dépend du CMS'],
              correctIndex: 1,
              explanation: 'Non, le sitemap ne doit contenir que les pages que vous voulez voir indexées.',
            },
            {
              question: 'Qu\'est-ce qu\'un index de sitemaps ?',
              options: ['La page d\'accueil', 'Un fichier qui liste plusieurs sitemaps', 'Un sitemap compressé', 'Un sitemap pour images'],
              correctIndex: 1,
              explanation: 'Un index de sitemaps (sitemap index) est un fichier XML qui référence plusieurs sitemaps.',
            },
            {
              question: 'Comment indiquer le sitemap dans robots.txt ?',
              options: ['Include: sitemap.xml', 'Sitemap: https://...', 'Allow: sitemap', 'Map: sitemap.xml'],
              correctIndex: 1,
              explanation: 'La directive Sitemap: suivie de l\'URL complète indique l\'emplacement du sitemap.',
            },
            {
              question: 'Quel format de date utiliser pour lastmod ?',
              options: ['DD/MM/YYYY', 'MM-DD-YYYY', 'YYYY-MM-DD', 'Timestamp Unix'],
              correctIndex: 2,
              explanation: 'Le format W3C YYYY-MM-DD (ex: 2026-01-15) est le standard pour lastmod.',
            },
            {
              question: 'Les URLs du sitemap doivent être :',
              options: ['Relatives', 'Absolues avec https://', 'Sans protocole', 'En majuscules'],
              correctIndex: 1,
              explanation: 'Les URLs dans le sitemap doivent être absolues, incluant le protocole (https://).',
            },
            {
              question: 'Un site multilingue doit :',
              options: ['Avoir un seul sitemap', 'Avoir des sitemaps par langue avec hreflang', 'Ne pas utiliser de sitemap', 'Utiliser seulement priority'],
              correctIndex: 1,
              explanation: 'Les sites multilingues doivent avoir des sitemaps par langue incluant les balises hreflang pour lier les versions.',
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
        content: 'Vous avez maintenant toutes les clés pour créer un sitemap XML parfait. Pour compléter votre maîtrise du SEO technique, consultez :',
      },
      {
        type: 'list',
        content: [
          'Indexation Google : Faire indexer vos pages rapidement - Le processus complet',
          'Robots.txt : Contrôler l\'accès des robots - Le compagnon du sitemap',
          'Guide complet SEO Technique - Vue d\'ensemble du module',
        ],
      },
      {
        type: 'cta',
        content: {
          title: 'Félicitations !',
          description: 'Vous avez terminé le module SEO Technique. Continuez votre apprentissage avec les autres modules.',
          buttonText: 'Retour au guide SEO Technique',
          buttonLink: '/seo-technique',
          variant: 'primary',
        },
      },
    ],
  },
];

export const clusterData: ClusterConfig = {
  slug: 'seo-technique',
  name: 'SEO Technique',
  description: 'Maîtrisez les fondations techniques du SEO : vitesse, indexation, Core Web Vitals, robots.txt et sitemap pour un site parfaitement optimisé.',
  metaTitle: 'SEO Technique | SEOtika 2026',
  metaDescription: 'Formation complète au SEO technique : optimisez la vitesse, l\'indexation et les Core Web Vitals de votre site.',
  pillarPage,
  childPages,
  icon: 'Code',
  color: 'orange',
};

export default clusterData;
