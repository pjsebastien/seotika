import { ClusterConfig, Article } from '@/types';

const pillarPage: Article = {
  slug: 'index',
  title: 'SEO Vidéo : Optimiser vos Vidéos pour Google et YouTube',
  metaTitle: 'SEO Vidéo - Guide YouTube 2026',
  metaDescription: 'Maîtrisez le SEO vidéo : optimisation YouTube, vidéos dans Google Search, schema VideoObject. Augmentez la visibilité de vos vidéos.',
  keyword: 'seo video',
  secondaryKeywords: ['référencement youtube', 'optimisation vidéo', 'video seo'],
  intent: 'info',
  cluster: 'seo-video',
  excerpt: 'La vidéo est partout : YouTube, Google Search, réseaux sociaux. Le SEO vidéo vous permet de capturer ce trafic en pleine croissance.',
  tableOfContents: true,
  readingTime: 40,
  difficulty: 'intermediaire',
  lastUpdated: '2026-01-28',
  author: 'marie-lefevre',
  relatedSlugs: ['seo-youtube', 'video-google-search'],
  faq: [
    {
      question: 'Faut-il héberger ses vidéos sur YouTube ou sur son site ?',
      answer: 'YouTube pour la visibilité (2ème moteur de recherche mondial). Sur votre site si vous voulez garder le trafic. Idéalement : les deux avec une stratégie différenciée.',
    },
    {
      question: 'Les vidéos améliorent-elles le SEO du site ?',
      answer: 'Indirectement. Les vidéos augmentent le temps passé sur page et l\'engagement. Avec schema VideoObject, elles peuvent aussi apparaître dans les résultats enrichis.',
    },
  ],
  content: [
    {
      type: 'text',
      content: 'La vidéo représente plus de 82% du trafic internet en 2026. YouTube est le 2ème moteur de recherche mondial après Google. Les vidéos apparaissent dans les résultats Google, dans Google Discover, et captent une attention croissante des utilisateurs. Si vous ne faites pas de SEO vidéo, vous ignorez une source de trafic massive et en pleine croissance. Cette formation complète vous enseigne comment optimiser vos vidéos pour YouTube, les faire apparaître dans Google Search, et construire une stratégie vidéo qui génère du trafic qualifié.',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Ce que vous allez apprendre',
        content: '• Comprendre les algorithmes de YouTube et Google pour la vidéo\\n• Optimiser vos vidéos pour maximiser le watch time et l\'engagement\\n• Faire apparaître vos vidéos dans les résultats Google Search\\n• Implémenter les données structurées VideoObject\\n• Créer une stratégie vidéo cross-platform efficace\\n• Mesurer et améliorer la performance de vos vidéos',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Le paysage du SEO vidéo en 2026',
    },
    {
      type: 'text',
      content: 'Le SEO vidéo n\'est plus une niche - c\'est un pilier du référencement moderne. Les chiffres parlent d\'eux-mêmes.',
    },
    {
      type: 'table',
      content: {
        headers: ['Statistique', 'Chiffre', 'Implication'],
        rows: [
          ['Trafic internet vidéo', '82%', 'La vidéo domine le web'],
          ['Recherches YouTube/jour', '3+ milliards', '2ème moteur de recherche mondial'],
          ['Résultats Google avec vidéo', '62%', 'Visibilité massive disponible'],
          ['Temps moyen sur page avec vidéo', '+88%', 'Engagement significatif'],
          ['Taux conversion avec vidéo', '+80%', 'Impact business direct'],
        ],
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Les 4 canaux du SEO vidéo',
    },
    {
      type: 'text',
      content: 'Votre stratégie vidéo peut générer du trafic depuis plusieurs sources distinctes. Comprendre chaque canal permet d\'optimiser efficacement.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Canal 1 : YouTube Search',
    },
    {
      type: 'text',
      content: 'YouTube est un moteur de recherche à part entière. Les utilisateurs recherchent des tutoriels, des reviews, des how-to, des divertissements. L\'algorithme YouTube favorise :',
    },
    {
      type: 'list',
      content: [
        'Watch time total (temps de visionnage cumulé)',
        'Rétention d\'audience (% de la vidéo regardée)',
        'Engagement (likes, commentaires, partages)',
        'CTR sur les miniatures (clics sur impressions)',
        'Historique de la chaîne (crédibilité)',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Canal 2 : Google Search (résultats organiques)',
    },
    {
      type: 'text',
      content: 'Google affiche des vidéos dans ses résultats pour de nombreuses requêtes. Les vidéos apparaissent sous plusieurs formats :',
    },
    {
      type: 'list',
      content: [
        'Carrousel vidéo dans les résultats',
        'Featured snippets vidéo (position 0)',
        'Onglet "Vidéos" dédié',
        'Résultats universels (mélangés avec les liens bleus)',
        'Rich snippets avec miniature vidéo',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Canal 3 : Google Discover',
    },
    {
      type: 'text',
      content: 'Discover recommande du contenu aux utilisateurs sans qu\'ils cherchent activement. Les vidéos performent très bien sur ce canal, générant un trafic passif significatif.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Canal 4 : Suggestions YouTube',
    },
    {
      type: 'text',
      content: 'La majorité des vues YouTube proviennent des suggestions (sidebar et fin de vidéo). Ce canal dépend de la pertinence thématique et des patterns de visionnage des utilisateurs.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Les fondamentaux de l\'optimisation vidéo',
    },
    {
      type: 'text',
      content: 'Que ce soit pour YouTube ou votre site, certains principes d\'optimisation sont universels.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Le titre : votre premier point de contact',
    },
    {
      type: 'text',
      content: 'Le titre doit accomplir 3 missions : inclure le mot-clé, créer de la curiosité, rester clair sur le contenu.',
    },
    {
      type: 'table',
      content: {
        headers: ['Type de titre', 'Exemple', 'Efficacité'],
        rows: [
          ['Mot-clé + bénéfice', 'SEO YouTube : 10x plus de vues en 30 jours', 'Très efficace'],
          ['Question', 'Pourquoi vos vidéos n\'ont pas de vues ?', 'Efficace'],
          ['How-to', 'Comment ranker #1 sur YouTube (méthode 2026)', 'Très efficace'],
          ['Listicle', '7 erreurs YouTube qui tuent vos vues', 'Efficace'],
          ['Clickbait pur', 'INCROYABLE !!! Vous n\'allez pas le croire !!!', 'À éviter'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'La miniature : le CTR décide de tout',
    },
    {
      type: 'text',
      content: 'La miniature est aussi importante que le contenu de la vidéo. Un mauvais CTR = peu d\'impressions = peu de vues. Les éléments d\'une miniature efficace :',
    },
    {
      type: 'list',
      content: [
        'Visage avec expression forte (surprise, joie, curiosité)',
        'Texte court (3-4 mots max) en gros caractères',
        'Couleurs vives et contrastées avec le rouge YouTube',
        'Résolution minimum 1280x720px (16:9)',
        'Lisibilité sur mobile (test à 100x56px)',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'La description : SEO + engagement',
    },
    {
      type: 'text',
      content: 'La description a 2 rôles : aider au référencement et encourager l\'engagement. Structure recommandée :',
    },
    {
      type: 'list',
      content: [
        'Lignes 1-2 : Hook + mot-clé principal (visible avant "Afficher plus")',
        'Lignes 3-10 : Résumé du contenu avec mots-clés secondaires',
        'Chapitres avec timestamps (00:00 format)',
        'Liens vers ressources mentionnées',
        'Call-to-action (abonnement, commentaire)',
        'Liens vers vidéos/playlists associées',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Les chapitres (timestamps)',
    },
    {
      type: 'text',
      content: 'Les chapitres améliorent l\'expérience utilisateur et le SEO. Google peut afficher les chapitres dans les résultats de recherche. Format :',
    },
    {
      type: 'code',
      content: {
        language: 'text',
        code: `0:00 Introduction
0:45 Pourquoi le SEO vidéo est important
2:30 Optimisation du titre
5:15 Créer une miniature efficace
8:00 La description parfaite
11:30 Tags et métadonnées
14:00 Conclusion et CTA`,
        filename: 'youtube-chapters.txt',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Watch time et rétention : les métriques clés',
    },
    {
      type: 'text',
      content: 'Sur YouTube, le watch time est le facteur de ranking #1. Mais la rétention d\'audience est ce qui détermine votre potentiel de croissance.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Comprendre la courbe de rétention',
    },
    {
      type: 'text',
      content: 'YouTube Analytics montre une courbe de rétention pour chaque vidéo. Cette courbe révèle exactement où les spectateurs décrochent.',
    },
    {
      type: 'table',
      content: {
        headers: ['Pattern', 'Signification', 'Action'],
        rows: [
          ['Chute dans les 30s', 'Intro trop longue ou hors-sujet', 'Hook plus direct'],
          ['Chute régulière', 'Contenu qui traîne', 'Rythme plus soutenu'],
          ['Chute à un moment précis', 'Passage ennuyeux/hors-sujet', 'Couper ou améliorer'],
          ['Rétention plate haute', 'Excellent contenu', 'Reproduire la structure'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Techniques pour maximiser la rétention',
    },
    {
      type: 'list',
      content: [
        'Hook dans les 10 premières secondes : "Dans cette vidéo, vous allez apprendre..."',
        'Pattern interrupts : changements de plan, zooms, animations, musique',
        'Open loops : annoncer un contenu à venir ("On verra ça dans un instant")',
        'Suppression des temps morts : coupes, accélérations, énergie constante',
        'Conclusion avec CTA clair : pas de fade-out, action à faire',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Vidéos sur votre site : schema et indexation',
    },
    {
      type: 'text',
      content: 'Si vous hébergez des vidéos sur votre site (ou embedz YouTube), l\'optimisation technique est cruciale pour apparaître dans Google.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Schema VideoObject',
    },
    {
      type: 'text',
      content: 'Le schema VideoObject indique à Google les métadonnées de votre vidéo. Voici un exemple complet :',
    },
    {
      type: 'code',
      content: {
        language: 'json',
        code: `{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "SEO YouTube : Comment optimiser vos vidéos",
  "description": "Guide complet pour optimiser vos vidéos YouTube et maximiser vos vues organiques.",
  "thumbnailUrl": "https://example.com/thumbnail.jpg",
  "uploadDate": "2026-01-15T08:00:00+01:00",
  "duration": "PT15M30S",
  "contentUrl": "https://example.com/video.mp4",
  "embedUrl": "https://www.youtube.com/embed/VIDEOID",
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": {"@type": "WatchAction"},
    "userInteractionCount": 12500
  }
}`,
        filename: 'schema-video-object.json',
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Sitemap vidéo',
    },
    {
      type: 'text',
      content: 'Un sitemap vidéo aide Google à découvrir vos vidéos. Ajoutez-le en plus du sitemap standard :',
    },
    {
      type: 'code',
      content: {
        language: 'xml',
        code: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://example.com/videos/seo-youtube</loc>
    <video:video>
      <video:thumbnail_loc>https://example.com/thumb.jpg</video:thumbnail_loc>
      <video:title>SEO YouTube : Guide complet</video:title>
      <video:description>Apprenez à optimiser vos vidéos...</video:description>
      <video:duration>930</video:duration>
    </video:video>
  </url>
</urlset>`,
        filename: 'video-sitemap.xml',
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Contenu texte complémentaire',
    },
    {
      type: 'text',
      content: 'Google ne "regarde" pas vos vidéos. Il a besoin de texte pour comprendre le contenu. Accompagnez chaque vidéo de :',
    },
    {
      type: 'list',
      content: [
        'Transcription complète (automatique avec YouTube ou outils IA)',
        'Résumé structuré avec H2/H3',
        'Points clés sous forme de liste',
        'Ressources et liens mentionnés',
        'FAQ basée sur le contenu de la vidéo',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Stratégie cross-platform',
    },
    {
      type: 'text',
      content: 'La stratégie optimale combine YouTube et votre site pour maximiser la visibilité.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Le modèle "Hub and Spoke"',
    },
    {
      type: 'table',
      content: {
        headers: ['Plateforme', 'Rôle', 'Optimisation'],
        rows: [
          ['YouTube', 'Hub de visibilité et découverte', 'SEO YouTube + miniatures + engagement'],
          ['Votre site', 'Conversion et approfondissement', 'Schema + transcription + CTA'],
          ['Réseaux sociaux', 'Amplification et teasing', 'Clips courts, liens vers complet'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Double indexation',
    },
    {
      type: 'text',
      content: 'Une même vidéo peut apparaître dans Google via YouTube ET via votre site (si bien optimisée). Vous doublez vos chances de visibilité.',
    },
    // Études de cas
    {
      type: 'heading',
      level: 2,
      content: 'Étude de cas #1 : Chaîne YouTube B2B de 0 à 50K abonnés',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Contexte',
        content: 'ToolsForDevs, startup SaaS d\'outils pour développeurs. Budget marketing limité. Décision de miser sur YouTube pour l\'acquisition.',
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
        'Aucune présence vidéo existante',
        'Marché B2B technique (devs, CTOs)',
        'Concurrents avec chaînes établies',
        'Pas de budget pour équipe vidéo dédiée',
        'Objectif : acquisition de leads qualifiés',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Solution déployée',
    },
    {
      type: 'text',
      content: 'Stratégie content-first sur 18 mois :',
    },
    {
      type: 'text',
      content: 'Mois 1-3 : Recherche de mots-clés YouTube dans la niche (TubeBuddy). Identification de 50 requêtes à fort volume, faible concurrence. Création de 15 tutoriels "How to" répondant à des problèmes courants.',
    },
    {
      type: 'text',
      content: 'Mois 4-8 : Optimisation agressive des miniatures et titres. A/B testing des formats. Analyse des rétentions et amélioration continue. Création de playlists thématiques.',
    },
    {
      type: 'text',
      content: 'Mois 9-18 : Capitalisation sur les vidéos qui performent. Création de séries. Community engagement (réponses aux commentaires). Cross-promotion avec le blog.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Résultats obtenus',
    },
    {
      type: 'table',
      content: {
        headers: ['Métrique', 'Mois 3', 'Mois 18', 'Évolution'],
        rows: [
          ['Abonnés', '450', '52 000', '+11 455%'],
          ['Vues mensuelles', '3 200', '380 000', '+11 775%'],
          ['Vidéos publiées', '15', '78', '+63'],
          ['Watch time mensuel', '280h', '42 000h', '+15 000%'],
          ['Leads qualifiés/mois', '~5', '~180', '+3 500%'],
          ['CAC (coût acquisition)', '~150€', '~12€', '-92%'],
        ],
      },
    },
    // Étude de cas 2
    {
      type: 'heading',
      level: 2,
      content: 'Étude de cas #2 : E-commerce qui génère du trafic vidéo Google',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Contexte',
        content: 'MaisonBricolage, e-commerce de produits de bricolage. 5 000 références. Trafic SEO correct mais plafonné. Vidéos produits non optimisées.',
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
        '200 vidéos tutoriels sur YouTube, peu vues',
        'Vidéos non embeddées sur le site',
        'Aucun schema VideoObject',
        'Pas de sitemap vidéo',
        'Concurrents visibles dans les carrousels vidéo Google',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Solution déployée',
    },
    {
      type: 'text',
      content: 'Optimisation technique et contenu sur 4 mois :',
    },
    {
      type: 'text',
      content: 'Mois 1 : Audit des 200 vidéos existantes. Identification des 50 avec le plus de potentiel SEO. Création de pages dédiées sur le site pour chaque vidéo.',
    },
    {
      type: 'text',
      content: 'Mois 2 : Implémentation du schema VideoObject sur toutes les pages vidéo. Création du sitemap vidéo. Soumission à Google Search Console.',
    },
    {
      type: 'text',
      content: 'Mois 3-4 : Ajout de transcriptions et contenu texte complémentaire. Optimisation des titles et meta descriptions avec le mot-clé + "vidéo". Maillage interne vers les pages vidéo.',
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
          ['Vidéos indexées dans Google', '12', '47', '+292%'],
          ['Rich snippets vidéo', '0', '23', '+23'],
          ['Trafic pages vidéo/mois', '~800', '~8 500', '+962%'],
          ['Position moyenne requêtes vidéo', '42', '8', '+34 places'],
          ['Conversions depuis pages vidéo', '~15/mois', '~180/mois', '+1 100%'],
        ],
      },
    },
    // Étude de cas 3
    {
      type: 'heading',
      level: 2,
      content: 'Étude de cas #3 : Formateur qui automatise son acquisition',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Contexte',
        content: 'Expert SEO indépendant vendant des formations en ligne. Acquisition manuelle chronophage (webinaires, démos). Souhait d\'automatiser via YouTube.',
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
        'Ventes dépendantes des webinaires live (2/semaine)',
        'Pas de trafic passif sur les formations',
        'Vidéos existantes mal optimisées (titres génériques)',
        'Pas de stratégie de funnel vidéo',
        'Temps limité pour créer du nouveau contenu',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Solution déployée',
    },
    {
      type: 'text',
      content: 'Stratégie de funnel vidéo sur 6 mois :',
    },
    {
      type: 'text',
      content: 'Mois 1-2 : Réoptimisation des 30 vidéos existantes. Nouveaux titres SEO, descriptions longues, miniatures professionnelles. Création de playlists par thématique.',
    },
    {
      type: 'text',
      content: 'Mois 3-4 : Création de 10 vidéos "top of funnel" ciblant des mots-clés à fort volume. Chaque vidéo renvoie vers une vidéo plus avancée ou un lead magnet.',
    },
    {
      type: 'text',
      content: 'Mois 5-6 : Mise en place de cards et end screens pour guider le parcours. Optimisation des CTAs dans les descriptions. Création d\'une vidéo de vente evergreen.',
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
          ['Vues mensuelles', '8 000', '95 000', '+1 088%'],
          ['Abonnés', '2 400', '18 500', '+671%'],
          ['Leads email/mois (via YouTube)', '~20', '~450', '+2 150%'],
          ['Ventes formations/mois', '~8', '~45', '+462%'],
          ['Webinaires nécessaires', '8/mois', '2/mois', '-75%'],
          ['Temps acquisition/semaine', '20h', '5h', '-75%'],
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
      content: 'Exercice 1 : Audit de votre chaîne YouTube',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Objectif',
        content: 'Évaluer l\'état actuel de votre chaîne et identifier les optimisations prioritaires.',
      },
    },
    {
      type: 'list',
      content: [
        'Listez vos 10 dernières vidéos avec : titre, vues, durée moyenne visionnage, CTR',
        'Identifiez les 3 vidéos les plus performantes : qu\'ont-elles en commun ?',
        'Identifiez les 3 vidéos les moins performantes : que manquent-elles ?',
        'Analysez vos miniatures : sont-elles cohérentes ? Lisibles sur mobile ?',
        'Vérifiez vos descriptions : contiennent-elles des chapitres ?',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 2 : Recherche de mots-clés YouTube',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Objectif',
        content: 'Identifier 10 opportunités de vidéos à créer.',
      },
    },
    {
      type: 'list',
      content: [
        'Utilisez la barre de recherche YouTube pour voir l\'autocomplétion',
        'Notez 20 suggestions pertinentes pour votre niche',
        'Pour chaque suggestion, regardez les vidéos top 5 : nombre de vues, date, chaîne',
        'Identifiez 10 requêtes où les vidéos existantes sont anciennes ou de mauvaise qualité',
        'Priorisez par volume estimé et faisabilité',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 3 : Optimisation d\'une vidéo existante',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Objectif',
        content: 'Améliorer les performances d\'une vidéo sous-performante.',
      },
    },
    {
      type: 'list',
      content: [
        'Choisissez une vidéo avec bon contenu mais peu de vues',
        'Analysez la courbe de rétention : où les gens décrochent-ils ?',
        'Réécrivez le titre avec un mot-clé au début + curiosité',
        'Créez une nouvelle miniature (visage + texte + contraste)',
        'Réécrivez les 150 premiers caractères de la description',
        'Ajoutez des chapitres si absents',
        'Mesurez l\'impact après 2 semaines',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 4 : Implémentation schema VideoObject',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Objectif',
        content: 'Faire apparaître une vidéo dans les résultats enrichis Google.',
      },
    },
    {
      type: 'list',
      content: [
        'Choisissez une page de votre site avec une vidéo embeddée',
        'Créez le schema VideoObject avec tous les champs requis',
        'Intégrez le schema dans la page (JSON-LD dans le head)',
        'Testez avec l\'outil Google Rich Results Test',
        'Soumettez l\'URL à l\'indexation via Search Console',
        'Vérifiez l\'apparition dans le rapport "Vidéos" de Search Console',
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
        title: 'Quiz : Maîtrise du SEO Vidéo',
        questions: [
          {
            question: 'Quel est le facteur de ranking #1 sur YouTube ?',
            options: [
              'Le nombre de likes',
              'Le watch time (temps de visionnage)',
              'Le nombre de commentaires',
              'Le nombre d\'abonnés de la chaîne',
            ],
            correctIndex: 1,
            explanation: 'Le watch time (temps de visionnage cumulé) est le facteur #1 de l\'algorithme YouTube. Plus votre vidéo génère de temps de visionnage, plus elle sera recommandée.',
          },
          {
            question: 'Combien de caractères de la description YouTube sont visibles avant "Afficher plus" ?',
            options: [
              '100 caractères',
              '150 caractères',
              '200 caractères',
              '300 caractères',
            ],
            correctIndex: 1,
            explanation: 'Seuls les 150 premiers caractères sont visibles sans cliquer. Placez votre hook et votre mot-clé principal dans ces 150 caractères.',
          },
          {
            question: 'Quelle résolution minimum est recommandée pour les miniatures YouTube ?',
            options: [
              '640x360px',
              '1280x720px',
              '1920x1080px',
              '3840x2160px',
            ],
            correctIndex: 1,
            explanation: 'La résolution minimum recommandée est 1280x720px (ratio 16:9). YouTube accepte des résolutions plus élevées mais celle-ci est le standard.',
          },
          {
            question: 'Quel format utiliser pour indiquer la durée dans le schema VideoObject ?',
            options: [
              '"930" (secondes)',
              '"15:30" (mm:ss)',
              '"PT15M30S" (format ISO 8601)',
              '"15 minutes 30 seconds"',
            ],
            correctIndex: 2,
            explanation: 'Le format ISO 8601 est requis pour le schema : PT15M30S signifie "Period of Time: 15 Minutes 30 Seconds".',
          },
          {
            question: 'D\'où provient la majorité des vues sur YouTube ?',
            options: [
              'La recherche YouTube',
              'Les suggestions (sidebar et fin de vidéo)',
              'Les partages sur réseaux sociaux',
              'Les playlists',
            ],
            correctIndex: 1,
            explanation: 'La majorité des vues provient des suggestions algorithmiques (colonne de droite et fin de vidéo). La recherche représente généralement moins de 20% des vues.',
          },
          {
            question: 'Que révèle une chute de rétention dans les 30 premières secondes ?',
            options: [
              'La vidéo est trop longue',
              'L\'introduction est trop longue ou hors-sujet',
              'La qualité audio est mauvaise',
              'Le sujet n\'intéresse pas',
            ],
            correctIndex: 1,
            explanation: 'Une chute rapide indique que l\'intro ne capte pas l\'attention. Le "hook" des 10-30 premières secondes est crucial pour retenir l\'audience.',
          },
          {
            question: 'Quel est l\'avantage de la "double indexation" ?',
            options: [
              'La vidéo charge plus vite',
              'Google compte deux fois les vues',
              'La vidéo peut apparaître via YouTube ET votre site dans Google',
              'Vous gagnez plus d\'argent sur YouTube',
            ],
            correctIndex: 2,
            explanation: 'Une vidéo bien optimisée peut apparaître dans Google via sa page YouTube ET via la page de votre site où elle est embeddée, doublant vos chances de visibilité.',
          },
          {
            question: 'Que faut-il ajouter à une vidéo embeddée pour l\'indexation Google ?',
            options: [
              'Un titre H1',
              'Schema VideoObject + sitemap vidéo + contenu texte',
              'Uniquement une transcription',
              'Des backlinks vers la page',
            ],
            correctIndex: 1,
            explanation: 'L\'optimisation complète inclut : schema VideoObject (métadonnées), sitemap vidéo (découverte), et contenu texte complémentaire (compréhension du contenu).',
          },
          {
            question: 'Quel élément de miniature a le plus d\'impact sur le CTR ?',
            options: [
              'Un logo de marque',
              'Un visage avec une expression forte',
              'Un fond coloré uni',
              'Beaucoup de texte explicatif',
            ],
            correctIndex: 1,
            explanation: 'Les visages humains avec des expressions marquées (surprise, joie, curiosité) attirent naturellement l\'œil et génèrent les meilleurs CTR.',
          },
          {
            question: 'Que sont les "pattern interrupts" dans une vidéo ?',
            options: [
              'Des publicités mid-roll',
              'Des changements visuels/sonores pour maintenir l\'attention',
              'Des appels à l\'action',
              'Des transitions entre chapitres',
            ],
            correctIndex: 1,
            explanation: 'Les pattern interrupts sont des changements (zoom, plan différent, graphique, musique) qui brisent la monotonie et maintiennent l\'attention du spectateur.',
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
      content: 'Vous maîtrisez maintenant les fondamentaux du SEO vidéo. Pour approfondir, consultez nos guides spécialisés sur l\'optimisation YouTube et l\'apparition dans Google Search.',
    },
    {
      type: 'cta',
      content: {
        title: 'Maîtrisez l\'algorithme YouTube',
        description: 'Approfondissez vos connaissances avec notre guide complet sur l\'optimisation YouTube.',
        buttonText: 'Voir le guide YouTube',
        buttonLink: '/seo-video/seo-youtube',
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
        'SEO YouTube - Guide complet de l\'optimisation pour l\'algorithme',
        'Vidéos dans Google Search - Apparaître dans les résultats enrichis',
      ],
    },
  ],
};

const childPages: Article[] = [
  {
    slug: 'seo-youtube',
    title: 'SEO YouTube : Optimiser vos Vidéos pour l\'Algorithme',
    metaTitle: 'SEO YouTube - Guide Optimisation 2026',
    metaDescription: 'Optimisez vos vidéos YouTube : titres, descriptions, tags, miniatures. Maîtrisez l\'algorithme pour plus de vues.',
    keyword: 'seo youtube',
    secondaryKeywords: ['optimisation youtube', 'référencement youtube', 'algorithm youtube'],
    intent: 'info',
    cluster: 'seo-video',
    excerpt: 'YouTube a son propre algorithme. Comprendre et optimiser pour lui est essentiel pour générer des vues organiques.',
    tableOfContents: true,
    readingTime: 32,
    difficulty: 'debutant',
    lastUpdated: '2026-01-26',
    author: 'thomas-dupont',
    relatedSlugs: ['video-google-search'],
    faq: [
      {
        question: 'Les tags YouTube sont-ils encore importants ?',
        answer: 'Moins qu\'avant. YouTube comprend mieux le contenu vidéo. Les tags aident surtout pour les fautes d\'orthographe et termes associés.',
      },
      {
        question: 'Quelle fréquence de publication ?',
        answer: 'La régularité prime sur la fréquence. Mieux vaut 1 vidéo de qualité par semaine que 3 vidéos médiocres. Trouvez votre rythme soutenable.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'YouTube n\'est pas un simple hébergeur vidéo - c\'est le 2ème moteur de recherche mondial avec plus de 3 milliards de recherches par jour. Mais attention : son algorithme ne fonctionne pas comme Google. YouTube optimise pour le watch time et l\'engagement, pas uniquement pour les mots-clés. Comprendre cette différence fondamentale est la clé pour générer des vues organiques massives. Cette formation complète vous enseigne comment fonctionne l\'algorithme YouTube et comment l\'exploiter pour faire décoller votre chaîne.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Ce que vous allez apprendre',
          content: '• Comprendre en profondeur l\'algorithme de recommandation YouTube\\n• Optimiser titres, descriptions et tags pour la recherche\\n• Créer des miniatures qui maximisent le CTR\\n• Maîtriser les techniques de rétention d\'audience\\n• Analyser vos métriques avec YouTube Analytics\\n• Construire une stratégie de croissance organique',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'L\'algorithme YouTube : comment ça marche vraiment',
      },
      {
        type: 'text',
        content: 'L\'algorithme YouTube a un objectif simple : maximiser le temps que les utilisateurs passent sur la plateforme. Toutes ses décisions découlent de cet objectif.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les 2 systèmes algorithmiques',
      },
      {
        type: 'text',
        content: 'YouTube utilise deux systèmes distincts qui fonctionnent différemment :',
      },
      {
        type: 'table',
        content: {
          headers: ['Système', 'Fonction', 'Facteurs clés'],
          rows: [
            ['Recherche (Search)', 'Répond aux requêtes utilisateurs', 'Pertinence titre/description, engagement, historique chaîne'],
            ['Suggestions (Browse)', 'Recommande du contenu passivement', 'Performance vidéo, préférences utilisateur, patterns visionnage'],
          ],
        },
      },
      {
        type: 'text',
        content: 'Important : la majorité des vues (70-80%) provient des suggestions, pas de la recherche. Mais le SEO search reste crucial pour lancer une vidéo.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les signaux que YouTube analyse',
      },
      {
        type: 'table',
        content: {
          headers: ['Signal', 'Poids', 'Ce que YouTube mesure'],
          rows: [
            ['Watch time', 'Très élevé', 'Temps total de visionnage généré'],
            ['Rétention moyenne', 'Élevé', '% de la vidéo regardée en moyenne'],
            ['CTR (Click-Through Rate)', 'Élevé', '% de clics sur impressions'],
            ['Engagement', 'Modéré', 'Likes, commentaires, partages'],
            ['Velocity', 'Modéré', 'Performance dans les premières heures'],
            ['Session time', 'Modéré', 'Temps passé sur YouTube après votre vidéo'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Recherche de mots-clés YouTube',
      },
      {
        type: 'text',
        content: 'Le keyword research YouTube diffère du SEO classique. Les volumes sont différents, la concurrence aussi. Voici la méthodologie.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Méthode 1 : Autocomplétion YouTube',
      },
      {
        type: 'text',
        content: 'La barre de recherche YouTube suggère les requêtes les plus populaires. C\'est gratuit et directement pertinent.',
      },
      {
        type: 'list',
        content: [
          'Tapez votre mot-clé de base et notez les suggestions',
          'Ajoutez des lettres (a, b, c...) après votre mot-clé pour plus de suggestions',
          'Ajoutez des mots interrogatifs (comment, pourquoi, quel...)',
          'Notez les suggestions avec des métriques : volume estimé, concurrence',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Méthode 2 : Analyse des concurrents',
      },
      {
        type: 'list',
        content: [
          'Identifiez les chaînes concurrentes dans votre niche',
          'Triez leurs vidéos par "Plus populaires"',
          'Analysez les titres : quels mots-clés utilisent-ils ?',
          'Notez les vidéos anciennes avec beaucoup de vues = demande constante',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Méthode 3 : Outils spécialisés',
      },
      {
        type: 'table',
        content: {
          headers: ['Outil', 'Fonction', 'Prix'],
          rows: [
            ['TubeBuddy', 'Volumes, concurrence, tags concurrents', 'Freemium (9-49€/mois)'],
            ['VidIQ', 'Analytics avancés, suggestions de mots-clés', 'Freemium (7.50-39€/mois)'],
            ['Keywords Everywhere', 'Volumes YouTube dans la barre', '10€ pour 100K crédits'],
            ['Ahrefs/Semrush', 'Volumes YouTube (via fonction dédiée)', 'Abonnement existant'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Optimiser le titre pour le CTR et le SEO',
      },
      {
        type: 'text',
        content: 'Le titre a deux missions : ranker sur le mot-clé ET inciter au clic. Un équilibre délicat.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les règles du titre parfait',
      },
      {
        type: 'list',
        content: [
          'Mot-clé principal dans les 40 premiers caractères (visible partout)',
          'Longueur totale : 50-60 caractères (éviter troncature)',
          'Élément de curiosité ou promesse de bénéfice',
          'Éviter le clickbait pur (pénalisé par mauvaise rétention)',
          'Cohérence avec la miniature (double lecture rapide)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Formules de titres qui fonctionnent',
      },
      {
        type: 'table',
        content: {
          headers: ['Formule', 'Exemple', 'Pourquoi ça marche'],
          rows: [
            ['[Mot-clé] : [Bénéfice]', 'SEO YouTube : doublez vos vues en 30 jours', 'SEO + promesse'],
            ['Comment [action] [résultat]', 'Comment ranker #1 sur YouTube (méthode 2026)', 'Tutoriel + fraîcheur'],
            ['[Nombre] [chose] que [action]', '7 erreurs YouTube qui tuent vos vues', 'Listicle + évitement douleur'],
            ['[Question provocante]', 'Pourquoi vos vidéos n\'ont aucune vue ?', 'Curiosité + identification'],
            ['[Mot-clé] pour [débutant/niveau]', 'SEO YouTube pour débutants : guide complet', 'Segmentation + exhaustivité'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'La description : SEO + conversion',
      },
      {
        type: 'text',
        content: 'La description est sous-exploitée par la plupart des créateurs. Elle influence le SEO et peut générer des conversions.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Structure optimale de description',
      },
      {
        type: 'code',
        content: {
          language: 'text',
          code: `[LIGNES 1-2 : Hook + mot-clé - VISIBLE AVANT "AFFICHER PLUS"]
Dans cette vidéo, découvrez comment optimiser vos vidéos YouTube pour l'algorithme et générer plus de vues organiques.

[LIGNES 3-10 : Résumé détaillé avec mots-clés secondaires]
J'aborde les sujets suivants :
- Comment fonctionne l'algorithme YouTube en 2026
- Les secrets d'un titre qui génère des clics
- Créer une miniature parfaite
- Optimiser la rétention de vos vidéos

[CHAPITRES - TIMESTAMPS]
0:00 Introduction
1:30 L'algorithme YouTube expliqué
5:45 Optimiser votre titre
...

[LIENS & RESSOURCES]
📥 Template de description gratuit : [lien]
🎓 Ma formation YouTube complète : [lien]
📊 L'outil que j'utilise : [lien affilié]

[CTA & SOCIAL]
👍 Like si cette vidéo t'a aidé
💬 Dis-moi en commentaire ta plus grosse erreur YouTube
🔔 Abonne-toi pour plus de conseils : [lien chaîne]

[MOTS-CLÉS NATURELS - FIN DE DESCRIPTION]
SEO YouTube, optimisation YouTube, algorithme YouTube 2026...`,
          filename: 'youtube-description-template.txt',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'La miniature : le facteur CTR',
      },
      {
        type: 'text',
        content: 'Une miniature peut faire ou défaire une vidéo. Même le meilleur contenu ne sera pas vu si personne ne clique. YouTube vous donne des impressions basées sur le potentiel, mais c\'est le CTR qui détermine si vous en recevrez plus.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les 5 éléments d\'une miniature efficace',
      },
      {
        type: 'list',
        content: [
          'Visage humain : Expression marquée (surprise, curiosité, joie). Les visages attirent l\'œil instinctivement.',
          'Texte court : 3-4 mots maximum, police grasse, lisible à petite taille (test à 100x56px).',
          'Contraste : Éviter le rouge (confusion avec UI YouTube). Privilégier jaune, bleu, vert sur fond contrastant.',
          'Composition simple : Un point focal clair, pas de surcharge visuelle.',
          'Cohérence avec le titre : Miniature et titre se complètent, ne répètent pas.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Spécifications techniques',
      },
      {
        type: 'table',
        content: {
          headers: ['Spécification', 'Valeur recommandée'],
          rows: [
            ['Résolution', '1280x720px minimum (1920x1080px idéal)'],
            ['Ratio', '16:9 obligatoire'],
            ['Format', 'JPG, PNG, GIF'],
            ['Taille max', '2 Mo'],
            ['Zone de sécurité', 'Éviter les 10% des bords (icônes YouTube)'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Tags et métadonnées',
      },
      {
        type: 'text',
        content: 'Les tags ont perdu en importance mais restent utiles pour les erreurs d\'orthographe et les termes associés.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Stratégie de tags',
      },
      {
        type: 'list',
        content: [
          'Tag 1-2 : Mot-clé principal exact',
          'Tags 3-5 : Variations du mot-clé',
          'Tags 6-10 : Mots-clés secondaires et associés',
          'Tags 11-15 : Erreurs d\'orthographe courantes',
          'Ne pas dépasser 500 caractères total',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Maximiser la rétention',
      },
      {
        type: 'text',
        content: 'La rétention est LE facteur qui détermine si YouTube va pousser votre vidéo. Une vidéo avec 70% de rétention moyenne sera massivement plus recommandée qu\'une vidéo à 30%.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Le hook des 30 premières secondes',
      },
      {
        type: 'list',
        content: [
          'Pas d\'intro générique ("Salut tout le monde, bienvenue sur ma chaîne...")',
          'Commencer par le problème ou la promesse',
          'Teaser de ce qu\'ils vont apprendre',
          'Pattern interrupt visuel immédiat',
        ],
      },
      {
        type: 'text',
        content: 'Exemple de hook efficace : "Vos vidéos YouTube n\'ont pas de vues ? Dans les 10 prochaines minutes, je vais vous montrer exactement comment j\'ai fait passer ma chaîne de 0 à 50 000 abonnés sans payer un centime de publicité. Restez jusqu\'au bout parce que l\'astuce numéro 4 a tout changé pour moi."',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Techniques de rétention avancées',
      },
      {
        type: 'table',
        content: {
          headers: ['Technique', 'Description', 'Quand l\'utiliser'],
          rows: [
            ['Open loops', 'Annoncer un contenu à venir sans le donner', 'Toutes les 2-3 minutes'],
            ['Pattern interrupts', 'Changement visuel/sonore brusque', 'Quand l\'énergie baisse'],
            ['B-roll et illustrations', 'Visuels qui accompagnent le propos', 'Pour les concepts abstraits'],
            ['Questions directes', '"Vous vous êtes déjà demandé..."', 'Pour réengager'],
            ['Récapitulatifs', 'Résumer avant de passer au point suivant', 'Entre les sections'],
          ],
        },
      },
      // Études de cas
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas #1 : Vidéo de 0 à 100K vues avec le bon titre',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Chaîne de développement web, 5 000 abonnés. Vidéo tutoriel React avec titre générique "Tutoriel React.js".',
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
          'Titre générique "Tutoriel React.js" sans différenciation',
          'Miniature sobre sans visage ni émotion',
          '2 500 vues après 3 mois malgré bon contenu',
          'Rétention correcte (45%) mais CTR faible (2.1%)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution déployée',
      },
      {
        type: 'text',
        content: 'Réoptimisation complète titre + miniature :',
      },
      {
        type: 'text',
        content: 'Ancien titre : "Tutoriel React.js"',
      },
      {
        type: 'text',
        content: 'Nouveau titre : "React.js en 2026 : le seul tutoriel dont vous avez besoin"',
      },
      {
        type: 'text',
        content: 'Nouvelle miniature : Visage du créateur avec expression de surprise + texte "REACT EN 1H" + fond bleu vif.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats obtenus',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant', 'Après 2 mois', 'Évolution'],
          rows: [
            ['Vues totales', '2 500', '112 000', '+4 380%'],
            ['CTR', '2.1%', '8.4%', '+300%'],
            ['Impressions/jour', '~400', '~15 000', '+3 650%'],
            ['Nouveaux abonnés (vidéo)', '45', '3 200', '+7 011%'],
            ['Rétention', '45%', '48%', '+3 pts'],
          ],
        },
      },
      // Étude de cas 2
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas #2 : Amélioration systématique de la rétention',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Chaîne business/entrepreneuriat, 20 000 abonnés. Rétention moyenne de 28% sur les 6 derniers mois. Croissance stagnante.',
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
          'Intros de 45-60 secondes avec présentation de la chaîne',
          'Contenu dense mais monotone (même cadrage, même rythme)',
          'Pas de chapitres ni de structure claire',
          'Chute de rétention massive à 30 secondes (-40%)',
          'YouTube ne recommandait plus les vidéos',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution déployée',
      },
      {
        type: 'text',
        content: 'Refonte complète du format sur 3 mois :',
      },
      {
        type: 'text',
        content: 'Mois 1 : Suppression des intros génériques. Hook direct dans les 10 premières secondes. Promesse claire du contenu.',
      },
      {
        type: 'text',
        content: 'Mois 2 : Introduction de pattern interrupts toutes les 2-3 minutes (changement de plan, zoom, B-roll). Ajout de musique de fond dynamique.',
      },
      {
        type: 'text',
        content: 'Mois 3 : Mise en place d\'open loops systématiques. Structure en chapitres annoncés dès l\'intro. Récaps entre sections.',
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
            ['Rétention moyenne', '28%', '52%', '+86%'],
            ['Vues/vidéo (30j)', '~8 000', '~45 000', '+462%'],
            ['Watch time mensuel', '12 000h', '78 000h', '+550%'],
            ['Abonnés', '20 000', '48 000', '+140%'],
            ['Suggestions (% trafic)', '35%', '72%', '+37 pts'],
          ],
        },
      },
      // Étude de cas 3
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas #3 : Domination d\'une niche par le keyword research',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Nouvelle chaîne dans la niche "productivité pour étudiants". 0 abonné au départ. Marché concurrentiel avec chaînes établies.',
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
          'Niche dominée par 3-4 chaînes de 100K+ abonnés',
          'Aucune crédibilité ni audience existante',
          'Budget limité (smartphone + éclairage basique)',
          'Temps limité (créateur étudiant lui-même)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution déployée',
      },
      {
        type: 'text',
        content: 'Stratégie "long tail dominance" sur 12 mois :',
      },
      {
        type: 'text',
        content: 'Mois 1-3 : Research approfondi avec TubeBuddy. Identification de 50 mots-clés "long tail" avec volume décent et faible concurrence. Exemples : "comment organiser ses cours sur Notion", "routine matinale étudiant médecine".',
      },
      {
        type: 'text',
        content: 'Mois 4-8 : Production de 2 vidéos/semaine ciblant exclusivement ces mots-clés. Titres ultra-spécifiques. Pas de vidéos "génériques".',
      },
      {
        type: 'text',
        content: 'Mois 9-12 : Capitalisation sur l\'autorité acquise. Création de vidéos plus ambitieuses sur des mots-clés plus compétitifs. Cross-promotion entre vidéos.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats obtenus',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Mois 3', 'Mois 12', 'Évolution'],
          rows: [
            ['Abonnés', '1 200', '85 000', '+7 083%'],
            ['Vues mensuelles', '15 000', '1.2M', '+7 900%'],
            ['Vidéos #1 sur mot-clé cible', '3', '28', '+25'],
            ['Vidéos publiées', '20', '95', '+75'],
            ['Revenus AdSense/mois', '~50€', '~4 500€', '+8 900%'],
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
        content: 'Exercice 1 : Audit de rétention',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Identifier les problèmes de rétention de vos vidéos actuelles.',
        },
      },
      {
        type: 'list',
        content: [
          'Ouvrez YouTube Studio > Analytics > Contenu > sélectionnez une vidéo',
          'Cliquez sur "Fidélisation de l\'audience"',
          'Identifiez les moments de chute (drops de plus de 5%)',
          'Pour chaque drop, notez le timestamp et regardez ce moment dans la vidéo',
          'Catégorisez : intro trop longue / passage ennuyeux / hors-sujet / technique',
          'Définissez une action corrective pour vos prochaines vidéos',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Optimisation de titre A/B',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Tester l\'impact d\'un changement de titre sur le CTR.',
        },
      },
      {
        type: 'list',
        content: [
          'Choisissez une vidéo avec CTR < 4%',
          'Notez le CTR actuel et les impressions',
          'Réécrivez le titre avec une des formules de ce guide',
          'Changez le titre (sans toucher à la miniature)',
          'Attendez 7 jours avec un trafic suffisant (1000+ impressions)',
          'Comparez le nouveau CTR - si amélioration, conservez le nouveau titre',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Création de miniature optimisée',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Créer une miniature qui respecte toutes les bonnes pratiques.',
        },
      },
      {
        type: 'list',
        content: [
          'Choisissez une vidéo à optimiser',
          'Prenez une photo de vous avec une expression marquée',
          'Utilisez Canva (gratuit) : format 1280x720',
          'Ajoutez 3-4 mots de texte en gros (police sans-serif, bordure ou ombre)',
          'Vérifiez le contraste : éviter rouge, préférer bleu/jaune/vert',
          'Réduisez à 100x56px et vérifiez la lisibilité',
          'Testez pendant 7 jours et mesurez l\'impact CTR',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Keyword research complet',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Identifier 10 opportunités de vidéos basées sur les données.',
        },
      },
      {
        type: 'list',
        content: [
          'Définissez votre niche principale en 3 mots',
          'Utilisez l\'autocomplétion YouTube (+ lettres a-z) : notez 30 suggestions',
          'Pour chaque suggestion, recherchez et analysez les 3 premiers résultats',
          'Notez pour chacun : vues de la top vidéo, date de publication, qualité perçue',
          'Identifiez 10 requêtes où les vidéos existantes sont anciennes (>1 an) ou de qualité moyenne',
          'Classez ces 10 opportunités par priorité (volume × faisabilité)',
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
          title: 'Quiz : Maîtrise du SEO YouTube',
          questions: [
            {
              question: 'D\'où provient la majorité des vues sur YouTube ?',
              options: [
                'La recherche YouTube',
                'Les suggestions algorithmiques',
                'Les partages sur réseaux sociaux',
                'Les liens externes',
              ],
              correctIndex: 1,
              explanation: '70-80% des vues proviennent des suggestions (sidebar, fin de vidéo, page d\'accueil). La recherche représente généralement moins de 20% du trafic.',
            },
            {
              question: 'Quel est le signal le plus important pour l\'algorithme YouTube ?',
              options: [
                'Le nombre de likes',
                'Le nombre d\'abonnés',
                'Le watch time total',
                'Le nombre de commentaires',
              ],
              correctIndex: 2,
              explanation: 'Le watch time (temps de visionnage cumulé) est le signal #1. YouTube veut maximiser le temps que les utilisateurs passent sur la plateforme.',
            },
            {
              question: 'Combien de caractères d\'un titre YouTube sont toujours visibles ?',
              options: [
                '30 caractères',
                '40 caractères',
                '50 caractères',
                '60 caractères',
              ],
              correctIndex: 1,
              explanation: 'Environ 40-45 caractères sont visibles selon le device. Placez votre mot-clé principal et l\'essentiel du message dans ces 40 premiers caractères.',
            },
            {
              question: 'Que révèle un CTR de 2% sur une vidéo ?',
              options: [
                'Excellent performance',
                'Performance correcte',
                'Problème avec le titre ou la miniature',
                'YouTube ne montre pas assez la vidéo',
              ],
              correctIndex: 2,
              explanation: 'Un CTR de 2% est faible (moyenne YouTube ~4-5%). Cela indique généralement un problème avec le titre et/ou la miniature qui ne donnent pas envie de cliquer.',
            },
            {
              question: 'Quelle est la technique du "pattern interrupt" ?',
              options: [
                'Ajouter une publicité mid-roll',
                'Changer brusquement de sujet',
                'Introduire un changement visuel/sonore pour maintenir l\'attention',
                'Poser une question à l\'audience',
              ],
              correctIndex: 2,
              explanation: 'Le pattern interrupt est un changement (zoom, angle, musique, graphique) qui brise la monotonie et réengage l\'attention du spectateur.',
            },
            {
              question: 'Pourquoi éviter le rouge dans les miniatures ?',
              options: [
                'Le rouge ne se démarque pas assez',
                'Il se confond avec l\'interface YouTube (boutons, notifications)',
                'Le rouge est mal compressé',
                'YouTube pénalise le rouge',
              ],
              correctIndex: 1,
              explanation: 'L\'interface YouTube utilise beaucoup de rouge. Une miniature rouge se confond avec les éléments UI et perd en impact visuel.',
            },
            {
              question: 'Que sont les "open loops" dans une vidéo ?',
              options: [
                'Des animations circulaires',
                'Annoncer un contenu à venir sans le donner immédiatement',
                'Des boucles de musique',
                'Des segments répétés',
              ],
              correctIndex: 1,
              explanation: 'Un open loop crée une attente ("On verra ça dans un instant") qui incite le spectateur à rester pour obtenir la réponse.',
            },
            {
              question: 'Les tags YouTube sont-ils encore importants en 2026 ?',
              options: [
                'Oui, c\'est le facteur SEO principal',
                'Non, ils n\'ont plus aucun impact',
                'Modérément, surtout pour les fautes d\'orthographe et termes associés',
                'Uniquement pour les nouvelles chaînes',
              ],
              correctIndex: 2,
              explanation: 'Les tags ont perdu en importance car YouTube comprend mieux le contenu. Ils restent utiles pour les fautes d\'orthographe courantes et les termes associés.',
            },
            {
              question: 'Quel est le problème d\'une intro de 45+ secondes ?',
              options: [
                'YouTube la coupe automatiquement',
                'Elle provoque une chute de rétention massive',
                'Elle n\'est pas indexée',
                'Elle réduit le nombre de suggestions',
              ],
              correctIndex: 1,
              explanation: 'Les intros longues provoquent des chutes de rétention dans les premières secondes. Les spectateurs veulent le contenu promis immédiatement.',
            },
            {
              question: 'Qu\'est-ce que la "velocity" d\'une vidéo YouTube ?',
              options: [
                'La vitesse de lecture',
                'La performance dans les premières heures après publication',
                'Le taux de croissance des abonnés',
                'La fréquence de publication',
              ],
              correctIndex: 1,
              explanation: 'La velocity mesure comment une vidéo performe dans ses premières heures. Une forte velocity (vues, engagement rapides) signale à YouTube de pousser davantage la vidéo.',
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
        content: 'Vous maîtrisez maintenant l\'optimisation YouTube. Pour compléter votre stratégie vidéo, apprenez à faire apparaître vos vidéos dans Google Search.',
      },
      {
        type: 'cta',
        content: {
          title: 'Vidéos dans Google Search',
          description: 'Découvrez comment optimiser vos vidéos pour apparaître dans les résultats Google.',
          buttonText: 'Voir le guide Google Search',
          buttonLink: '/seo-video/video-google-search',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'video-google-search',
    title: 'Vidéos dans Google Search : Apparaître dans les Résultats',
    metaTitle: 'Vidéo Google Search - Guide SEO 2026',
    metaDescription: 'Faites apparaître vos vidéos dans les résultats Google : schema markup, sitemap vidéo, optimisation. Guide complet.',
    keyword: 'video google search',
    secondaryKeywords: ['vidéo résultats google', 'rich snippet video', 'indexation vidéo'],
    intent: 'info',
    cluster: 'seo-video',
    excerpt: 'Google affiche des vidéos directement dans ses résultats. Apprenez à optimiser pour ce canal de trafic sous-exploité.',
    tableOfContents: true,
    readingTime: 30,
    difficulty: 'intermediaire',
    lastUpdated: '2026-01-24',
    author: 'marie-lefevre',
    relatedSlugs: ['seo-youtube'],
    faq: [
      {
        question: 'Les vidéos YouTube apparaissent-elles automatiquement ?',
        answer: 'Oui, Google indexe automatiquement les vidéos YouTube. Pour vos propres vidéos hébergées, vous devez implémenter schema et sitemap.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Google affiche des vidéos dans ses résultats de recherche pour une part croissante des requêtes - notamment les tutoriels, how-to, reviews et démonstrations. Ces vidéos peuvent provenir de YouTube, mais aussi de votre propre site si vous implémentez correctement les données structurées. C\'est une opportunité de visibilité massive souvent négligée. Cette formation vous enseigne comment optimiser vos vidéos pour apparaître dans Google Search, depuis l\'implémentation technique jusqu\'aux stratégies de contenu.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Ce que vous allez apprendre',
          content: '• Comprendre où et comment Google affiche les vidéos\\n• Implémenter correctement le schema VideoObject\\n• Créer et soumettre un sitemap vidéo\\n• Optimiser le contenu texte complémentaire\\n• Exploiter la stratégie de double indexation\\n• Mesurer et améliorer votre visibilité vidéo Google',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Où Google affiche-t-il les vidéos ?',
      },
      {
        type: 'text',
        content: 'Google intègre les vidéos dans plusieurs types de résultats. Comprendre chaque format vous aide à optimiser pour le bon objectif.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les 6 formats d\'affichage vidéo',
      },
      {
        type: 'table',
        content: {
          headers: ['Format', 'Description', 'Déclencheur'],
          rows: [
            ['Carrousel vidéo', 'Scroll horizontal de vidéos dans les résultats', 'Requêtes tutoriels, how-to, entertainment'],
            ['Rich snippet vidéo', 'Miniature vidéo à côté du lien organique', 'Page avec schema VideoObject valide'],
            ['Featured snippet vidéo', 'Vidéo en position 0 avec extrait', 'Requêtes "comment" + vidéo très pertinente'],
            ['Onglet Vidéos', 'Recherche filtrée uniquement vidéos', 'Toutes requêtes'],
            ['Google Discover', 'Flux de recommandations personnalisées', 'Vidéos engageantes, sujets trending'],
            ['Résultats universels', 'Vidéos mélangées aux liens bleus', 'Requêtes où la vidéo est très pertinente'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Quelles requêtes déclenchent les vidéos ?',
      },
      {
        type: 'text',
        content: 'Google affiche des vidéos quand il estime que c\'est le format le plus utile pour l\'utilisateur. Patterns courants :',
      },
      {
        type: 'list',
        content: [
          'Requêtes "comment" (how-to) : "comment nouer une cravate"',
          'Tutoriels et guides : "tutoriel Photoshop débutant"',
          'Reviews et comparatifs : "iPhone 16 vs Samsung S26"',
          'Démonstrations produits : "unboxing PS6"',
          'Recettes : "recette tiramisu facile"',
          'Sport et fitness : "exercices abdos maison"',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Schema VideoObject : implémentation complète',
      },
      {
        type: 'text',
        content: 'Le schema VideoObject est indispensable pour que Google comprenne et affiche votre vidéo correctement. Voici le guide d\'implémentation complet.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Propriétés obligatoires',
      },
      {
        type: 'table',
        content: {
          headers: ['Propriété', 'Description', 'Format'],
          rows: [
            ['name', 'Titre de la vidéo', 'Texte (max 100 caractères)'],
            ['description', 'Description de la vidéo', 'Texte (max 2000 caractères)'],
            ['thumbnailUrl', 'URL de la miniature', 'URL absolue, 720p minimum'],
            ['uploadDate', 'Date de publication', 'ISO 8601 (2026-01-15T08:00:00+01:00)'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Propriétés recommandées',
      },
      {
        type: 'table',
        content: {
          headers: ['Propriété', 'Description', 'Impact SEO'],
          rows: [
            ['duration', 'Durée de la vidéo', 'Affiché dans les résultats - Élevé'],
            ['contentUrl', 'URL du fichier vidéo', 'Permet l\'indexation directe - Élevé'],
            ['embedUrl', 'URL d\'intégration', 'Pour vidéos embeddées - Modéré'],
            ['interactionStatistic', 'Nombre de vues', 'Signal de popularité - Modéré'],
            ['expires', 'Date d\'expiration', 'Pour contenu temporaire - Bas'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exemple complet JSON-LD',
      },
      {
        type: 'code',
        content: {
          language: 'json',
          code: `{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Comment optimiser vos vidéos pour Google Search",
  "description": "Guide complet pour faire apparaître vos vidéos dans les résultats Google : schema markup, sitemap vidéo, et techniques d'optimisation avancées.",
  "thumbnailUrl": [
    "https://example.com/photos/video-thumb-1x1.jpg",
    "https://example.com/photos/video-thumb-4x3.jpg",
    "https://example.com/photos/video-thumb-16x9.jpg"
  ],
  "uploadDate": "2026-01-15T08:00:00+01:00",
  "duration": "PT15M30S",
  "contentUrl": "https://example.com/videos/seo-video-google.mp4",
  "embedUrl": "https://www.youtube.com/embed/abc123xyz",
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": { "@type": "WatchAction" },
    "userInteractionCount": 25000
  },
  "regionsAllowed": "FR,BE,CH,CA",
  "publication": {
    "@type": "BroadcastEvent",
    "isLiveBroadcast": false,
    "startDate": "2026-01-15T08:00:00+01:00"
  }
}`,
          filename: 'schema-video-object-complete.json',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Intégration dans la page',
      },
      {
        type: 'text',
        content: 'Le schema JSON-LD se place dans le <head> de la page ou avant la fermeture du <body>.',
      },
      {
        type: 'code',
        content: {
          language: 'html',
          code: `<head>
  <title>Comment optimiser vos vidéos pour Google</title>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Comment optimiser vos vidéos pour Google Search",
    ...
  }
  </script>
</head>`,
          filename: 'integration-schema-video.html',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Sitemap vidéo : aide à la découverte',
      },
      {
        type: 'text',
        content: 'Le sitemap vidéo complète le schema en aidant Google à découvrir toutes vos vidéos. Particulièrement utile pour les sites avec beaucoup de contenu vidéo.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Structure du sitemap vidéo',
      },
      {
        type: 'code',
        content: {
          language: 'xml',
          code: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>https://example.com/videos/seo-video-google</loc>
    <video:video>
      <video:thumbnail_loc>https://example.com/thumbs/seo-video.jpg</video:thumbnail_loc>
      <video:title>Comment optimiser vos vidéos pour Google</video:title>
      <video:description>Guide complet pour le SEO vidéo...</video:description>
      <video:content_loc>https://example.com/videos/seo-video.mp4</video:content_loc>
      <video:player_loc>https://www.youtube.com/embed/abc123</video:player_loc>
      <video:duration>930</video:duration>
      <video:publication_date>2026-01-15T08:00:00+01:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>
  </url>
</urlset>`,
          filename: 'video-sitemap.xml',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Soumission à Google Search Console',
      },
      {
        type: 'list',
        content: [
          'Créez votre fichier video-sitemap.xml',
          'Placez-le à la racine de votre site',
          'Ouvrez Google Search Console',
          'Allez dans "Sitemaps" dans le menu gauche',
          'Entrez l\'URL de votre sitemap vidéo',
          'Cliquez sur "Envoyer"',
          'Vérifiez le statut après quelques jours',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Contenu texte complémentaire',
      },
      {
        type: 'text',
        content: 'Google ne peut pas "regarder" vos vidéos pour en comprendre le contenu. Il a besoin de texte. Le contenu textuel autour de votre vidéo est crucial pour le ranking.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les éléments textuels essentiels',
      },
      {
        type: 'table',
        content: {
          headers: ['Élément', 'Fonction SEO', 'Longueur recommandée'],
          rows: [
            ['Title de la page', 'Mot-clé principal + contexte', '50-60 caractères'],
            ['Meta description', 'Incitation au clic + mot-clé', '150-160 caractères'],
            ['H1', 'Titre principal avec mot-clé', '40-70 caractères'],
            ['Introduction', 'Contexte et mot-clés', '100-200 mots'],
            ['Transcription', 'Contenu intégral de la vidéo', 'Complète'],
            ['Résumé structuré', 'Points clés avec H2/H3', '300-500 mots'],
            ['FAQ', 'Questions liées au sujet', '3-5 questions'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'La transcription : atout majeur',
      },
      {
        type: 'text',
        content: 'Une transcription complète permet à Google de comprendre tout le contenu de votre vidéo. Options pour la créer :',
      },
      {
        type: 'list',
        content: [
          'Sous-titres YouTube : téléchargez-les et reformatez',
          'Outils IA : Whisper (OpenAI), Descript, Otter.ai',
          'Services professionnels : Rev.com, GoTranscript',
          'Manuel : pour les vidéos courtes et importantes',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Format de transcription SEO',
          content: 'Ne publiez pas la transcription brute. Structurez-la avec des titres (H2, H3) correspondant aux sections de la vidéo. Ajoutez les timestamps pour navigation.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Stratégie de double indexation',
      },
      {
        type: 'text',
        content: 'Une même vidéo peut apparaître dans Google via deux sources : YouTube et votre site. C\'est la stratégie de double indexation.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Comment ça fonctionne',
      },
      {
        type: 'list',
        content: [
          'Uploadez votre vidéo sur YouTube (optimisée SEO YouTube)',
          'Créez une page dédiée sur votre site',
          'Embeddez la vidéo YouTube sur cette page',
          'Ajoutez le schema VideoObject avec embedUrl vers YouTube',
          'Ajoutez du contenu texte complémentaire',
          'Soumettez la page au sitemap vidéo',
        ],
      },
      {
        type: 'text',
        content: 'Résultat : Google peut afficher votre vidéo via la page YouTube OU via votre site, doublant vos chances de visibilité.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Quand héberger soi-même ?',
      },
      {
        type: 'text',
        content: 'L\'hébergement propre (sans YouTube) peut être préférable dans certains cas :',
      },
      {
        type: 'table',
        content: {
          headers: ['Situation', 'Hébergement recommandé', 'Raison'],
          rows: [
            ['Contenu gratuit, acquisition', 'YouTube + embed', 'Maximise la visibilité'],
            ['Contenu premium payant', 'Hébergement propre', 'Contrôle d\'accès'],
            ['Vidéos produits e-commerce', 'Hébergement propre', 'Garde le trafic sur site'],
            ['Vidéos techniques/documentation', 'Les deux', 'YouTube pour découverte, site pour SEO'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Mesurer la visibilité vidéo Google',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Google Search Console : rapport Vidéos',
      },
      {
        type: 'text',
        content: 'Search Console propose un rapport dédié aux vidéos. Accédez-y via : Performance > Résultats de recherche > Type de recherche : Vidéo.',
      },
      {
        type: 'list',
        content: [
          'Impressions : combien de fois vos vidéos apparaissent',
          'Clics : combien de clics vers vos pages vidéo',
          'CTR : taux de clic (objectif : >3%)',
          'Position moyenne : votre classement moyen',
          'Requêtes : les recherches qui affichent vos vidéos',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Rapport d\'indexation vidéo',
      },
      {
        type: 'text',
        content: 'Dans Search Console, le rapport "Pages vidéo" (sous Indexation) montre :',
      },
      {
        type: 'list',
        content: [
          'Vidéos indexées correctement',
          'Erreurs de schema markup',
          'Problèmes de sitemap',
          'Vidéos non éligibles aux rich results',
        ],
      },
      // Études de cas
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas #1 : Site de recettes qui explose son trafic vidéo',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'CuisineSimple.fr, blog de recettes avec 500 articles. 50 vidéos de recettes sur YouTube. Aucune visibilité vidéo dans Google.',
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
          'Vidéos YouTube embeddées sans aucune optimisation',
          'Pas de schema VideoObject',
          'Pas de sitemap vidéo',
          'Pages vidéo = juste le embed sans texte',
          'Concurrents visibles en carrousel vidéo, pas eux',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution déployée',
      },
      {
        type: 'text',
        content: 'Optimisation technique et contenu sur 2 mois :',
      },
      {
        type: 'text',
        content: 'Mois 1 : Implémentation du schema VideoObject sur les 50 pages avec vidéos. Création du sitemap vidéo. Soumission à Search Console.',
      },
      {
        type: 'text',
        content: 'Mois 2 : Ajout de contenu texte complémentaire : résumé de la recette, liste d\'ingrédients, étapes clés, astuces du chef. Transcription des 20 vidéos les plus populaires.',
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
            ['Vidéos avec rich snippet', '0', '38', '+38'],
            ['Impressions vidéo/mois', '~500', '~45 000', '+8 900%'],
            ['Clics vidéo/mois', '~20', '~3 800', '+18 900%'],
            ['Featured snippets vidéo', '0', '7', '+7'],
            ['Trafic pages vidéo', '~800/mois', '~15 000/mois', '+1 775%'],
          ],
        },
      },
      // Étude de cas 2
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas #2 : SaaS qui génère des leads via tutoriels',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'ToolForDesign, logiciel SaaS de design. 30 tutoriels vidéo sur YouTube. Documentation texte sur le site. Pas de synergie vidéo/site.',
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
          'Vidéos YouTube uniquement sur la chaîne',
          'Documentation texte sur le site, pas de vidéos',
          'Pas de conversion depuis YouTube (viewers → site)',
          'Concurrents avec tutoriels dans les featured snippets',
          'Mots-clés "comment [action] avec [outil]" non captés',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution déployée',
      },
      {
        type: 'text',
        content: 'Stratégie de double indexation sur 4 mois :',
      },
      {
        type: 'text',
        content: 'Mois 1-2 : Création de pages dédiées pour chaque tutoriel vidéo. Embed YouTube + schema VideoObject complet. Transcription et reformatage en guide écrit.',
      },
      {
        type: 'text',
        content: 'Mois 3-4 : Optimisation des pages pour les mots-clés "comment faire X". Ajout de FAQ basées sur les commentaires YouTube. Maillage interne vers les pages produit.',
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
            ['Pages indexées avec vidéo', '0', '30', '+30'],
            ['Rich snippets vidéo', '0', '22', '+22'],
            ['Trafic tutoriels/mois', '~300', '~8 500', '+2 733%'],
            ['Position moyenne "comment"', 'Non visible', '4.2', 'Top 5'],
            ['Inscriptions essai (depuis tutos)', '~15/mois', '~120/mois', '+700%'],
            ['CAC (coût acquisition)', '~85€', '~18€', '-79%'],
          ],
        },
      },
      // Étude de cas 3
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas #3 : E-commerce avec vidéos produits',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'ElectroShop, e-commerce high-tech. 200 vidéos de test/unboxing produits. Hébergement mixte YouTube + propre. Potentiel vidéo non exploité.',
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
          'Vidéos sur fiches produits sans schema',
          'Pas de pages dédiées aux vidéos tests',
          'Carrousels vidéo Google captés par les concurrents',
          'Requêtes "test [produit]" non captées',
          'Duplicate content : même vidéo YouTube et site sans différenciation',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution déployée',
      },
      {
        type: 'text',
        content: 'Stratégie vidéo e-commerce sur 3 mois :',
      },
      {
        type: 'text',
        content: 'Mois 1 : Audit des 200 vidéos. Sélection des 50 produits à fort potentiel SEO. Création de pages "Test [Produit] : notre avis en vidéo".',
      },
      {
        type: 'text',
        content: 'Mois 2 : Implémentation schema VideoObject + Product sur chaque page. Rédaction de contenu unique (pas juste la transcription). Ajout de structured data Review.',
      },
      {
        type: 'text',
        content: 'Mois 3 : Optimisation des titles/meta pour "test", "avis", "review". Sitemap vidéo soumis. Cross-linking avec fiches produits et catégories.',
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
            ['Rich snippets vidéo produits', '2', '35', '+1 650%'],
            ['Trafic requêtes "test [produit]"', '~1 200/mois', '~12 000/mois', '+900%'],
            ['Présence carrousel vidéo', '5%', '42%', '+37 pts'],
            ['Conversions depuis pages test', '~45/mois', '~320/mois', '+611%'],
            ['Revenu attribuable vidéo', '~4 500€/mois', '~38 000€/mois', '+744%'],
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
        content: 'Exercice 1 : Audit de vos pages vidéo actuelles',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Identifier les opportunités d\'optimisation sur vos pages existantes.',
        },
      },
      {
        type: 'list',
        content: [
          'Listez toutes les pages de votre site contenant une vidéo',
          'Pour chaque page, vérifiez : présence de schema VideoObject (validateur Google)',
          'Notez le contenu texte accompagnant (nombre de mots, transcription)',
          'Vérifiez si la page apparaît dans Search Console rapport Vidéos',
          'Identifiez les 5 pages prioritaires à optimiser',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Implémentation schema VideoObject',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Implémenter correctement le schema sur une page vidéo.',
        },
      },
      {
        type: 'list',
        content: [
          'Choisissez une page avec une vidéo non optimisée',
          'Créez le JSON-LD VideoObject avec toutes les propriétés obligatoires',
          'Ajoutez les propriétés recommandées (duration, embedUrl, interactionStatistic)',
          'Intégrez le schema dans le <head> de la page',
          'Testez avec Google Rich Results Test',
          'Corrigez les erreurs éventuelles et retestez',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Création de sitemap vidéo',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Créer et soumettre un sitemap vidéo à Google.',
        },
      },
      {
        type: 'list',
        content: [
          'Listez vos 10 pages vidéo les plus importantes',
          'Créez un fichier video-sitemap.xml avec la structure correcte',
          'Remplissez les informations pour chaque vidéo',
          'Uploadez le fichier à la racine de votre site',
          'Soumettez dans Google Search Console > Sitemaps',
          'Vérifiez le statut après 48h',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Optimisation contenu texte',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Enrichir une page vidéo avec du contenu texte optimisé.',
        },
      },
      {
        type: 'list',
        content: [
          'Choisissez une page avec vidéo et peu de texte',
          'Générez la transcription de la vidéo (outil IA ou YouTube)',
          'Structurez la transcription avec H2/H3 par section',
          'Ajoutez une introduction de 100-150 mots avec le mot-clé',
          'Créez un résumé "Points clés" en 5-7 bullets',
          'Ajoutez 3 questions FAQ basées sur le contenu',
          'Mesurez le changement de ranking après 2 semaines',
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
          title: 'Quiz : Vidéos dans Google Search',
          questions: [
            {
              question: 'Quelle propriété schema VideoObject est obligatoire ?',
              options: [
                'duration',
                'uploadDate',
                'embedUrl',
                'interactionStatistic',
              ],
              correctIndex: 1,
              explanation: 'uploadDate est une propriété obligatoire avec name, description et thumbnailUrl. duration est recommandée mais pas obligatoire.',
            },
            {
              question: 'Quel format utiliser pour la durée dans le schema VideoObject ?',
              options: [
                '"930" (secondes)',
                '"15:30" (mm:ss)',
                '"PT15M30S" (ISO 8601)',
                '"15 minutes"',
              ],
              correctIndex: 2,
              explanation: 'Le format ISO 8601 est requis : PT15M30S signifie "Period of Time: 15 Minutes 30 Seconds".',
            },
            {
              question: 'Pourquoi la transcription est-elle importante pour le SEO vidéo ?',
              options: [
                'Elle améliore l\'accessibilité uniquement',
                'Google ne peut pas "regarder" les vidéos et a besoin de texte',
                'Elle augmente le temps de chargement',
                'Elle n\'est pas importante pour le SEO',
              ],
              correctIndex: 1,
              explanation: 'Google ne peut pas analyser le contenu audio/visuel des vidéos. La transcription lui permet de comprendre et indexer correctement le contenu.',
            },
            {
              question: 'Qu\'est-ce que la stratégie de double indexation ?',
              options: [
                'Indexer deux fois la même page',
                'Faire apparaître une vidéo via YouTube ET via son propre site',
                'Créer deux versions de la même vidéo',
                'Soumettre deux sitemaps',
              ],
              correctIndex: 1,
              explanation: 'La double indexation permet à une vidéo d\'apparaître dans Google via sa page YouTube ET via votre page avec embed, doublant les chances de visibilité.',
            },
            {
              question: 'Où se place le schema VideoObject JSON-LD dans une page ?',
              options: [
                'Uniquement dans le <body>',
                'Dans le <head> ou avant la fermeture du </body>',
                'Après la vidéo embeddée',
                'Dans un fichier externe .json',
              ],
              correctIndex: 1,
              explanation: 'Le schema JSON-LD peut être placé dans le <head> (recommandé) ou avant la fermeture du </body>. Google le trouvera dans les deux cas.',
            },
            {
              question: 'Que montre le rapport "Pages vidéo" dans Search Console ?',
              options: [
                'Le nombre de vues de vos vidéos',
                'Les erreurs de schema et le statut d\'indexation vidéo',
                'La durée moyenne de visionnage',
                'Les commentaires sur vos vidéos',
              ],
              correctIndex: 1,
              explanation: 'Le rapport Pages vidéo montre les erreurs de schema markup, les problèmes de sitemap, et si vos vidéos sont éligibles aux rich results.',
            },
            {
              question: 'Quelles requêtes déclenchent le plus souvent des résultats vidéo ?',
              options: [
                'Les requêtes de navigation (nom de marque)',
                'Les requêtes "comment" et tutoriels',
                'Les requêtes transactionnelles (acheter)',
                'Les requêtes informationnelles générales',
              ],
              correctIndex: 1,
              explanation: 'Les requêtes "comment", tutoriels, reviews et démonstrations déclenchent le plus souvent des résultats vidéo car la vidéo est le format le plus adapté.',
            },
            {
              question: 'Quelle est la résolution minimum recommandée pour thumbnailUrl ?',
              options: [
                '480p (640x360)',
                '720p (1280x720)',
                '1080p (1920x1080)',
                '4K (3840x2160)',
              ],
              correctIndex: 1,
              explanation: 'Google recommande une miniature d\'au moins 720p (1280x720 pixels) pour un affichage optimal dans les résultats de recherche.',
            },
            {
              question: 'À quoi sert le sitemap vidéo ?',
              options: [
                'À améliorer le temps de chargement',
                'À aider Google à découvrir toutes vos vidéos',
                'À remplacer le schema VideoObject',
                'À générer des miniatures automatiquement',
              ],
              correctIndex: 1,
              explanation: 'Le sitemap vidéo aide Google à découvrir l\'ensemble de vos vidéos, notamment celles qui pourraient être difficiles à trouver via le crawl classique.',
            },
            {
              question: 'Quel CTR vidéo est considéré comme bon dans Search Console ?',
              options: [
                '>1%',
                '>3%',
                '>5%',
                '>10%',
              ],
              correctIndex: 1,
              explanation: 'Un CTR supérieur à 3% est considéré comme bon pour les résultats vidéo. En dessous, il y a probablement un problème avec le titre ou la miniature.',
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
        content: 'Vous maîtrisez maintenant l\'optimisation vidéo pour Google Search. Pour une stratégie vidéo complète, combinez ces techniques avec l\'optimisation YouTube.',
      },
      {
        type: 'cta',
        content: {
          title: 'Maîtrisez le SEO YouTube',
          description: 'Complétez votre stratégie avec notre guide d\'optimisation pour l\'algorithme YouTube.',
          buttonText: 'Voir le guide YouTube',
          buttonLink: '/seo-video/seo-youtube',
          variant: 'primary',
        },
      },
    ],
  },
];

export const clusterData: ClusterConfig = {
  slug: 'seo-video',
  name: 'SEO Vidéo',
  description: 'Maîtrisez le SEO vidéo : optimisation YouTube, vidéos dans Google Search, données structurées. Captez le trafic vidéo en croissance.',
  metaTitle: 'SEO Vidéo | SEOtika 2026',
  metaDescription: 'Formation complète au SEO vidéo : YouTube, Google Search et données structurées pour vos vidéos.',
  pillarPage,
  childPages,
  icon: 'Video',
  color: 'rose',
};

export default clusterData;
