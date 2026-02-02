import { ClusterConfig, Article } from '@/types';

const pillarPage: Article = {
  slug: 'index',
  title: 'SEO Local : Guide Complet pour Dominer les Recherches de Proximité',
  metaTitle: 'SEO Local - Guide Référencement 2026',
  metaDescription: 'Maîtrisez le SEO local : Google Business Profile, citations, avis clients. Attirez des clients dans votre zone géographique.',
  keyword: 'seo local',
  secondaryKeywords: ['référencement local', 'google my business', 'recherche locale'],
  intent: 'info',
  cluster: 'seo-local',
  excerpt: 'Le SEO local est essentiel pour les commerces et services de proximité. Apprenez à apparaître dans le pack local Google et à attirer des clients près de chez vous.',
  tableOfContents: true,
  readingTime: 42,
  difficulty: 'debutant',
  lastUpdated: '2026-01-29',
  author: 'marie-lefevre',
  relatedSlugs: ['google-business-profile', 'avis-clients'],
  faq: [
    {
      question: 'Le SEO local fonctionne-t-il pour tous les secteurs ?',
      answer: 'Principalement pour les business avec une zone de chalandise : restaurants, artisans, médecins, commerces, services à domicile. Moins pertinent pour le e-commerce pur.',
    },
    {
      question: 'Faut-il un site web pour le SEO local ?',
      answer: 'Un Google Business Profile suffit pour commencer, mais un site web renforce considérablement votre visibilité et crédibilité.',
    },
  ],
  content: [
    {
      type: 'text',
      content: '46% des recherches Google ont une intention locale. "Restaurant près de moi", "plombier Lyon 3", "coiffeur ouvert dimanche" : chaque jour, des millions de personnes cherchent des commerces et services à proximité. Pour les entreprises locales - artisans, commerçants, professions libérales, restaurateurs - le SEO local n\'est plus une option, c\'est une nécessité vitale. Cette formation complète vous enseigne tout ce qu\'il faut savoir pour dominer les recherches de proximité et transformer les internautes en clients.',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Ce que vous allez apprendre',
        content: '• Comprendre les mécanismes du référencement local et ses différences avec le SEO classique\\n• Maîtriser Google Business Profile, la pierre angulaire du SEO local\\n• Mettre en place une stratégie d\'avis clients efficace\\n• Construire des citations cohérentes sur les annuaires locaux\\n• Optimiser votre site web pour les recherches géolocalisées\\n• Apparaître dans le Pack Local (les 3 résultats avec carte)',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Qu\'est-ce que le SEO local ?',
    },
    {
      type: 'text',
      content: 'Le SEO local est l\'ensemble des techniques visant à optimiser la visibilité d\'une entreprise pour les recherches géolocalisées. Contrairement au SEO classique qui cible une audience nationale ou internationale, le SEO local se concentre sur une zone géographique spécifique : ville, quartier, région.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Comment Google identifie les recherches locales',
    },
    {
      type: 'text',
      content: 'Google détecte l\'intention locale de plusieurs façons :',
    },
    {
      type: 'list',
      content: [
        'Requêtes explicites : "plombier Paris", "restaurant Lyon 6", "coiffeur Bordeaux centre"',
        'Modificateurs de proximité : "près de moi", "à proximité", "proche", "dans le quartier"',
        'Contexte de la requête : "boulangerie ouverte" implique souvent une recherche locale',
        'Géolocalisation de l\'utilisateur : même sans terme géographique, Google peut afficher des résultats locaux',
      ],
    },
    {
      type: 'text',
      content: 'Quand Google identifie une intention locale, il modifie la structure des résultats en affichant le "Pack Local" - ces 3 établissements avec une carte qui apparaissent en haut de page.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'SEO local vs SEO classique : les différences clés',
    },
    {
      type: 'table',
      content: {
        headers: ['Aspect', 'SEO Classique', 'SEO Local'],
        rows: [
          ['Objectif', 'Visibilité nationale/internationale', 'Visibilité dans une zone géographique'],
          ['Facteurs principaux', 'Contenu, backlinks, technique', 'Google Business, avis, citations NAP'],
          ['Type de résultats', 'Liens bleus organiques', 'Pack Local + liens organiques'],
          ['Cible', 'Audience large', 'Clients de proximité'],
          ['Mesure succès', 'Rankings nationaux, trafic', 'Rankings locaux, appels, itinéraires'],
        ],
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Les 4 piliers du SEO local',
    },
    {
      type: 'text',
      content: 'Le SEO local repose sur 4 piliers fondamentaux. Négliger l\'un d\'entre eux compromet l\'ensemble de votre stratégie.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pilier 1 : Google Business Profile (GBP)',
    },
    {
      type: 'text',
      content: 'Google Business Profile (anciennement Google My Business) est la pierre angulaire du SEO local. C\'est votre fiche d\'établissement qui apparaît dans le Pack Local et Google Maps. Une fiche GBP bien optimisée est responsable de 30-40% de votre visibilité locale.',
    },
    {
      type: 'text',
      content: 'Éléments clés à optimiser :',
    },
    {
      type: 'list',
      content: [
        'Nom exact de l\'entreprise (sans mots-clés ajoutés - violation des guidelines)',
        'Catégorie principale et secondaires pertinentes',
        'Adresse complète et précise',
        'Numéro de téléphone local (pas numéro surtaxé)',
        'Horaires d\'ouverture à jour (y compris jours fériés)',
        'Description complète (750 caractères) avec mots-clés naturels',
        'Photos de qualité (logo, extérieur, intérieur, équipe, produits)',
        'Posts réguliers (actualités, offres, événements)',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pilier 2 : Avis clients',
    },
    {
      type: 'text',
      content: 'Les avis Google sont un facteur de ranking majeur pour le Pack Local. Mais au-delà du SEO, ils influencent directement la décision des clients potentiels. 88% des consommateurs font autant confiance aux avis en ligne qu\'aux recommandations personnelles.',
    },
    {
      type: 'text',
      content: 'Les 3 dimensions des avis qui comptent :',
    },
    {
      type: 'list',
      content: [
        'Quantité : Plus vous avez d\'avis, plus Google vous fait confiance',
        'Qualité : Une note moyenne élevée (4.0+) est cruciale',
        'Fraîcheur : Des avis récents montrent que vous êtes actif',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pilier 3 : Citations NAP',
    },
    {
      type: 'text',
      content: 'Les citations sont les mentions de votre NAP (Nom, Adresse, Téléphone) sur d\'autres sites web : annuaires, Pages Jaunes, sites d\'avis, chambres de commerce. Google utilise ces citations pour vérifier la légitimité et la cohérence de vos informations.',
    },
    {
      type: 'infobox',
      content: {
        type: 'warning',
        title: 'Cohérence NAP absolue',
        content: 'La cohérence est critique. "12 rue de Paris" et "12, rue de Paris" sont des incohérences que Google détecte. Standardisez votre NAP et utilisez-le partout de manière identique.',
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Pilier 4 : Signaux on-site',
    },
    {
      type: 'text',
      content: 'Votre site web doit envoyer des signaux locaux forts à Google :',
    },
    {
      type: 'list',
      content: [
        'Nom de la ville dans le title et H1 des pages clés',
        'Adresse complète visible (footer, page contact)',
        'Page "À propos" mentionnant votre ancrage local',
        'Données structurées LocalBusiness',
        'Google Maps intégré sur la page contact',
        'Contenu local (actualités de la ville, événements)',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Le Pack Local : comprendre et y apparaître',
    },
    {
      type: 'text',
      content: 'Le Pack Local est le graal du SEO local. Ces 3 résultats avec carte apparaissent au-dessus des résultats organiques classiques pour les recherches à intention locale. Leur visibilité est considérable.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Structure du Pack Local',
    },
    {
      type: 'text',
      content: 'Le Pack Local affiche pour chaque établissement :',
    },
    {
      type: 'list',
      content: [
        'Nom de l\'entreprise (cliquable vers la fiche GBP)',
        'Note moyenne et nombre d\'avis',
        'Catégorie',
        'Adresse',
        'Horaires (ouvert/fermé)',
        'Numéro de téléphone (cliquable sur mobile)',
        'Photo principale',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Facteurs de ranking du Pack Local',
    },
    {
      type: 'text',
      content: 'Google classe les établissements dans le Pack Local selon 3 critères majeurs :',
    },
    {
      type: 'table',
      content: {
        headers: ['Facteur', 'Poids estimé', 'Comment l\'optimiser'],
        rows: [
          ['Pertinence', '~25%', 'Catégories GBP précises, description riche, services détaillés'],
          ['Distance', '~25%', 'Adresse précise, zone de service définie'],
          ['Proéminence', '~50%', 'Avis nombreux et positifs, citations, backlinks, autorité du site'],
        ],
      },
    },
    {
      type: 'text',
      content: 'La proéminence est le facteur sur lequel vous avez le plus de contrôle. C\'est pourquoi la collecte d\'avis et la construction de citations sont si importantes.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Stratégie SEO local étape par étape',
    },
    {
      type: 'text',
      content: 'Voici la méthodologie pour mettre en place une stratégie SEO local complète.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Étape 1 : Audit de l\'existant',
    },
    {
      type: 'text',
      content: 'Avant toute action, évaluez votre situation actuelle :',
    },
    {
      type: 'list',
      content: [
        'Votre fiche Google Business Profile existe-t-elle et est-elle vérifiée ?',
        'Vos informations NAP sont-elles cohérentes partout ?',
        'Combien d\'avis avez-vous ? Quelle note moyenne ?',
        'Sur quels annuaires êtes-vous présent ?',
        'Vos concurrents locaux : comment se positionnent-ils ?',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Étape 2 : Optimisation Google Business Profile',
    },
    {
      type: 'text',
      content: 'Créez ou réclamez votre fiche, puis optimisez chaque élément. Consultez notre guide complet sur l\'optimisation GBP pour les détails.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Étape 3 : Nettoyage et construction des citations',
    },
    {
      type: 'text',
      content: 'Identifiez vos citations existantes et corrigez les incohérences. Puis construisez de nouvelles citations sur les annuaires pertinents pour votre secteur.',
    },
    {
      type: 'table',
      content: {
        headers: ['Type d\'annuaire', 'Exemples', 'Priorité'],
        rows: [
          ['Généralistes', 'Pages Jaunes, Yelp, Foursquare', 'Haute'],
          ['Sectoriels', 'TripAdvisor (resto), Doctolib (santé), Houzz (maison)', 'Très haute'],
          ['Locaux', 'CCI locale, annuaires de ville, associations', 'Moyenne'],
          ['Réseaux sociaux', 'Facebook, LinkedIn (page entreprise)', 'Haute'],
        ],
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Étape 4 : Mise en place de la collecte d\'avis',
    },
    {
      type: 'text',
      content: 'Systématisez la demande d\'avis après chaque interaction client. Consultez notre guide sur la stratégie d\'avis pour les techniques détaillées.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Étape 5 : Optimisation on-site',
    },
    {
      type: 'text',
      content: 'Ajoutez les signaux locaux à votre site web :',
    },
    {
      type: 'list',
      content: [
        'Intégrez votre adresse dans le footer de toutes les pages',
        'Créez une page "Contact" avec carte Google Maps intégrée',
        'Ajoutez le schema markup LocalBusiness',
        'Incluez le nom de votre ville dans les titles et H1 stratégiques',
        'Créez du contenu local (actualités, guides de la ville)',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Schema markup LocalBusiness',
    },
    {
      type: 'text',
      content: 'Les données structurées LocalBusiness aident Google à comprendre votre établissement. Voici un exemple de code à intégrer :',
    },
    {
      type: 'code',
      content: {
        language: 'json',
        code: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Boulangerie du Centre",
  "image": "https://example.com/photos/boulangerie.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 rue du Commerce",
    "addressLocality": "Lyon",
    "postalCode": "69003",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.7640,
    "longitude": 4.8357
  },
  "telephone": "+33472123456",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "19:00"
    }
  ],
  "priceRange": "€€"
}`,
        filename: 'schema-local-business.json',
      },
    },
    {
      type: 'heading',
      level: 2,
      content: 'Erreurs courantes à éviter',
    },
    {
      type: 'text',
      content: 'Les erreurs SEO local les plus fréquentes peuvent ruiner vos efforts :',
    },
    {
      type: 'table',
      content: {
        headers: ['Erreur', 'Conséquence', 'Solution'],
        rows: [
          ['Mots-clés dans le nom GBP', 'Suspension de la fiche', 'Utiliser uniquement le nom légal'],
          ['Adresse incohérente', 'Perte de confiance Google', 'Standardiser le NAP partout'],
          ['Fausse adresse/boîte postale', 'Suspension définitive', 'Adresse physique réelle'],
          ['Ignorer les avis négatifs', 'Perte de clients + signal négatif', 'Répondre professionnellement'],
          ['Catégories non pertinentes', 'Visibilité sur mauvaises requêtes', 'Catégorie principale précise'],
          ['Horaires incorrects', 'Clients mécontents + signal négatif', 'Mettre à jour régulièrement'],
        ],
      },
    },
    // Étude de cas 1
    {
      type: 'heading',
      level: 2,
      content: 'Étude de cas #1 : Restaurateur qui passe de invisible à N°1',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Contexte',
        content: 'Le Petit Bistrot, restaurant de cuisine traditionnelle française à Lyon 6. 45 couverts, ouvert depuis 8 ans. Dépendant du bouche-à-oreille, aucune visibilité en ligne.',
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Problématique identifiée',
    },
    {
      type: 'text',
      content: 'Malgré une excellente réputation locale et des habitués fidèles, le restaurant était invisible sur Google. Les nouveaux clients ne le découvraient que par hasard ou recommandation.',
    },
    {
      type: 'list',
      content: [
        'Fiche Google Business non revendiquée (créée automatiquement par Google)',
        '3 avis seulement, note de 4.3',
        'Aucune photo professionnelle',
        'Horaires incorrects affichés',
        'Site web inexistant',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Solution déployée',
    },
    {
      type: 'text',
      content: 'Plan d\'action SEO local sur 4 mois :',
    },
    {
      type: 'text',
      content: 'Mois 1 : Revendication et optimisation complète de la fiche GBP. Ajout de 30 photos professionnelles. Correction des horaires. Rédaction d\'une description optimisée.',
    },
    {
      type: 'text',
      content: 'Mois 2 : Lancement d\'une campagne de collecte d\'avis. Carte de visite avec QR code vers les avis Google. Email automatique post-visite.',
    },
    {
      type: 'text',
      content: 'Mois 3 : Création d\'un site one-page avec menu, photos, et réservation. Schema markup LocalBusiness + Restaurant. Inscription sur TripAdvisor, TheFork, Yelp.',
    },
    {
      type: 'text',
      content: 'Mois 4 : Posts GBP hebdomadaires (plats du jour, événements). Réponse systématique à tous les avis. Optimisation continue des photos.',
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
          ['Position Pack Local "restaurant Lyon 6"', 'Non visible', '#1', 'Top position'],
          ['Nombre d\'avis Google', '3', '87', '+2 800%'],
          ['Note moyenne', '4.3', '4.7', '+0.4 pts'],
          ['Vues de la fiche GBP/mois', '~200', '~3 500', '+1 650%'],
          ['Appels depuis GBP/mois', '~5', '~120', '+2 300%'],
          ['Demandes d\'itinéraire/mois', '~10', '~180', '+1 700%'],
          ['CA mensuel', '45 000€', '62 000€', '+38%'],
        ],
      },
    },
    // Étude de cas 2
    {
      type: 'heading',
      level: 2,
      content: 'Étude de cas #2 : Artisan plombier qui triple son activité',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Contexte',
        content: 'Jean-Marc Plomberie, artisan plombier-chauffagiste indépendant à Bordeaux. 15 ans d\'expérience. Activité basée sur le bouche-à-oreille et quelques clients récurrents.',
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Problématique identifiée',
    },
    {
      type: 'text',
      content: 'L\'artisan avait créé une fiche Google Business mais ne l\'avait jamais optimisée. Face à la concurrence des grandes enseignes et des plateformes d\'intermédiation, il perdait du terrain.',
    },
    {
      type: 'list',
      content: [
        'Fiche GBP minimaliste : juste le nom et le téléphone',
        '8 avis, note de 4.8 (clients satisfaits mais peu d\'avis)',
        'Aucune zone de service définie',
        'Catégorie imprécise (juste "Plombier")',
        'Pas de photos de réalisations',
        'Présence sur aucun annuaire sectoriel',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Solution déployée',
    },
    {
      type: 'text',
      content: 'Stratégie SEO local complète sur 3 mois :',
    },
    {
      type: 'text',
      content: 'Mois 1 : Refonte complète de la fiche GBP. Ajout de toutes les catégories pertinentes (Plombier, Chauffagiste, Dépannage plomberie). Définition des zones de service (25 communes). 50 photos de chantiers avant/après.',
    },
    {
      type: 'text',
      content: 'Mois 2 : Inscription sur 15 annuaires sectoriels (PagesJaunes, Travaux.com, Houzz, etc.) avec NAP cohérent. SMS systématique post-intervention pour demander un avis.',
    },
    {
      type: 'text',
      content: 'Mois 3 : Création d\'un site vitrine avec pages dédiées par service et par ville. Schema markup LocalBusiness enrichi. Témoignages clients en vidéo.',
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
          ['Avis Google', '8', '52', '+550%'],
          ['Vues fiche/mois', '~150', '~2 800', '+1 767%'],
          ['Appels/mois (GBP + site)', '~12', '~85', '+608%'],
          ['Interventions/mois', '18', '47', '+161%'],
          ['CA mensuel', '6 500€', '19 200€', '+195%'],
          ['Visible dans Pack Local', '0 requête', '12 requêtes', '+12'],
        ],
      },
    },
    // Étude de cas 3
    {
      type: 'heading',
      level: 2,
      content: 'Étude de cas #3 : Cabinet médical qui optimise son flux patients',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Contexte',
        content: 'Cabinet de kinésithérapie à 3 praticiens à Toulouse. Bon carnet de rdv mais dépendance totale à Doctolib. Souhait de diversifier les canaux d\'acquisition.',
      },
    },
    {
      type: 'heading',
      level: 3,
      content: 'Problématique identifiée',
    },
    {
      type: 'text',
      content: 'Le cabinet payait des commissions élevées à Doctolib pour 80% de ses nouveaux patients. La fiche Google existait mais était mal gérée, laissant le champ libre aux concurrents.',
    },
    {
      type: 'list',
      content: [
        'Commission Doctolib : ~800€/mois',
        '15 avis Google seulement (vs 45 pour le concurrent principal)',
        'Pas de différenciation visible (spécialités non mises en avant)',
        'Site web non optimisé pour le local',
        'Pas de stratégie de collecte d\'avis',
      ],
    },
    {
      type: 'heading',
      level: 3,
      content: 'Solution déployée',
    },
    {
      type: 'text',
      content: 'Stratégie d\'indépendance progressive sur 6 mois :',
    },
    {
      type: 'text',
      content: 'Mois 1-2 : Optimisation GBP avec focus sur les spécialités (kiné sportive, rééducation post-op, kiné vestibulaire). Photos du cabinet et de l\'équipe. Posts hebdomadaires sur les pathologies traitées.',
    },
    {
      type: 'text',
      content: 'Mois 3-4 : Système de collecte d\'avis via QR code en salle d\'attente. Email automatisé 48h post-consultation. Formation de l\'équipe à la demande d\'avis.',
    },
    {
      type: 'text',
      content: 'Mois 5-6 : Refonte du site avec pages par spécialité et par pathologie. Prise de rdv directe (sans Doctolib) mise en avant. Blog avec conseils kiné.',
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
          ['Avis Google', '15', '124', '+727%'],
          ['Note moyenne', '4.4', '4.9', '+0.5 pts'],
          ['Nouveaux patients via Google', '~8/mois', '~35/mois', '+337%'],
          ['Nouveaux patients via Doctolib', '~32/mois', '~20/mois', '-37%'],
          ['Commission Doctolib', '800€/mois', '500€/mois', '-37%'],
          ['Économie annuelle', '-', '3 600€', '+3 600€'],
          ['Position Pack Local', '#4', '#1', '+3 places'],
        ],
      },
    },
    {
      type: 'text',
      content: 'Le cabinet a réduit sa dépendance à Doctolib tout en augmentant le nombre total de nouveaux patients. Le ROI du SEO local est immédiat et durable.',
    },
    // Exercices
    {
      type: 'heading',
      level: 2,
      content: 'Exercices pratiques',
    },
    {
      type: 'text',
      content: 'Mettez en pratique vos connaissances avec ces 4 exercices progressifs.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 1 : Audit de votre fiche Google Business',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Objectif',
        content: 'Évaluer la qualité de votre fiche GBP et identifier les optimisations prioritaires.',
      },
    },
    {
      type: 'text',
      content: 'Instructions :',
    },
    {
      type: 'list',
      content: [
        'Connectez-vous à votre Google Business Profile',
        'Notez chaque élément sur 10 : nom, catégories, description, photos, horaires, attributs',
        'Comparez avec les 3 premiers concurrents du Pack Local pour votre requête principale',
        'Identifiez 5 actions d\'optimisation prioritaires',
        'Planifiez leur mise en œuvre sur les 2 prochaines semaines',
      ],
    },
    {
      type: 'text',
      content: 'Livrable attendu : Grille d\'audit remplie + plan d\'action daté.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 2 : Audit de cohérence NAP',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Objectif',
        content: 'Vérifier la cohérence de vos informations NAP sur le web.',
      },
    },
    {
      type: 'text',
      content: 'Instructions :',
    },
    {
      type: 'list',
      content: [
        'Recherchez le nom de votre entreprise sur Google',
        'Listez les 10 premiers sites où votre NAP apparaît',
        'Pour chaque site, notez : Nom (exact/différent), Adresse (exact/différent), Téléphone (exact/différent)',
        'Calculez votre score de cohérence (nombre de NAP identiques / 10)',
        'Planifiez les corrections pour atteindre 100% de cohérence',
      ],
    },
    {
      type: 'text',
      content: 'Livrable attendu : Tableau des citations avec statut de cohérence + plan de correction.',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 3 : Mise en place d\'un système de collecte d\'avis',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Objectif',
        content: 'Créer un processus systématique de demande d\'avis.',
      },
    },
    {
      type: 'text',
      content: 'Instructions :',
    },
    {
      type: 'list',
      content: [
        'Identifiez les 3 moments clés où demander un avis (fin de prestation, 48h après, rappel à J+7)',
        'Créez le lien court direct vers vos avis Google (via GBP > Demander des avis)',
        'Rédigez un script de demande orale + un template email',
        'Créez un QR code vers vos avis (utiliser un générateur gratuit)',
        'Testez le processus sur 5 clients cette semaine',
      ],
    },
    {
      type: 'text',
      content: 'Livrable attendu : Kit de collecte d\'avis complet (script + email + QR code).',
    },
    {
      type: 'heading',
      level: 3,
      content: 'Exercice 4 : Benchmark concurrentiel local',
    },
    {
      type: 'infobox',
      content: {
        type: 'info',
        title: 'Objectif',
        content: 'Analyser vos concurrents locaux pour identifier les opportunités.',
      },
    },
    {
      type: 'text',
      content: 'Instructions :',
    },
    {
      type: 'list',
      content: [
        'Identifiez vos 5 principaux concurrents locaux (ceux du Pack Local)',
        'Pour chacun, analysez : nombre d\'avis, note, nombre de photos, fréquence des posts, catégories utilisées',
        'Identifiez les éléments où vous êtes en retard vs les leaders',
        'Identifiez les opportunités non exploitées par les concurrents',
        'Définissez 3 actions pour vous différencier',
      ],
    },
    {
      type: 'text',
      content: 'Livrable attendu : Matrice concurrentielle + stratégie de différenciation.',
    },
    // Quiz
    {
      type: 'heading',
      level: 2,
      content: 'Quiz de validation',
    },
    {
      type: 'text',
      content: 'Testez vos connaissances sur le SEO local avec ce quiz de 10 questions.',
    },
    {
      type: 'quiz',
      content: {
        title: 'Quiz : Maîtrise du SEO Local',
        questions: [
          {
            question: 'Quel pourcentage des recherches Google ont une intention locale ?',
            options: [
              '15%',
              '28%',
              '46%',
              '62%',
            ],
            correctIndex: 2,
            explanation: '46% des recherches Google ont une intention locale. C\'est pourquoi le SEO local est critique pour les entreprises de proximité - près de la moitié des recherches concernent des établissements locaux.',
          },
          {
            question: 'Combien d\'établissements sont affichés dans le Pack Local Google ?',
            options: [
              '1',
              '3',
              '5',
              '10',
            ],
            correctIndex: 1,
            explanation: 'Le Pack Local affiche 3 établissements avec une carte. Ces 3 positions sont très convoitées car elles apparaissent au-dessus des résultats organiques classiques.',
          },
          {
            question: 'Que signifie NAP en SEO local ?',
            options: [
              'New Advertising Platform',
              'Nom, Adresse, Prix',
              'Nom, Adresse, Téléphone',
              'Network Access Point',
            ],
            correctIndex: 2,
            explanation: 'NAP signifie Nom, Adresse, Téléphone (ou Phone en anglais). La cohérence du NAP sur tous les supports est cruciale pour le SEO local.',
          },
          {
            question: 'Quelle action est une violation des guidelines Google Business Profile ?',
            options: [
              'Ajouter des photos de l\'intérieur',
              'Ajouter des mots-clés dans le nom de l\'entreprise',
              'Publier des posts régulièrement',
              'Répondre aux avis négatifs',
            ],
            correctIndex: 1,
            explanation: 'Ajouter des mots-clés dans le nom (keyword stuffing) est une violation des guidelines qui peut entraîner la suspension de la fiche. Le nom doit correspondre exactement au nom légal de l\'entreprise.',
          },
          {
            question: 'Quel est le facteur de ranking le plus important pour le Pack Local ?',
            options: [
              'Le nombre de pages du site web',
              'La proéminence (avis, citations, autorité)',
              'La date de création de l\'entreprise',
              'Le nombre de catégories GBP',
            ],
            correctIndex: 1,
            explanation: 'La proéminence représente environ 50% du ranking du Pack Local. Elle inclut les avis (quantité, qualité, fraîcheur), les citations NAP, les backlinks et l\'autorité générale.',
          },
          {
            question: 'Qu\'est-ce qu\'une citation en SEO local ?',
            options: [
              'Un avis client positif',
              'Un lien vers votre site',
              'Une mention de votre NAP sur un autre site',
              'Une recommandation sur les réseaux sociaux',
            ],
            correctIndex: 2,
            explanation: 'Une citation est une mention de votre NAP (Nom, Adresse, Téléphone) sur un autre site web, même sans lien. Les annuaires, réseaux sociaux et sites d\'avis génèrent des citations.',
          },
          {
            question: 'Quelle est la longueur maximale de la description Google Business Profile ?',
            options: [
              '160 caractères',
              '500 caractères',
              '750 caractères',
              '1 000 caractères',
            ],
            correctIndex: 2,
            explanation: 'La description GBP peut contenir jusqu\'à 750 caractères. Utilisez-les intelligemment pour décrire votre activité, vos services et votre zone, en incluant naturellement vos mots-clés.',
          },
          {
            question: 'Pourquoi les avis récents sont-ils importants pour le SEO local ?',
            options: [
              'Google les affiche en premier',
              'Ils prouvent que l\'entreprise est toujours active',
              'Ils comptent double dans le calcul de la note',
              'Ils permettent d\'avoir plus de caractères',
            ],
            correctIndex: 1,
            explanation: 'La fraîcheur des avis est un signal de confiance pour Google. Des avis récents prouvent que l\'entreprise est active et que les clients continuent de la recommander.',
          },
          {
            question: 'Quel type de données structurées est recommandé pour le SEO local ?',
            options: [
              'Article',
              'LocalBusiness',
              'Product',
              'WebPage',
            ],
            correctIndex: 1,
            explanation: 'Le schema markup LocalBusiness (et ses sous-types comme Restaurant, MedicalBusiness, etc.) est spécifiquement conçu pour les établissements locaux et aide Google à comprendre votre activité.',
          },
          {
            question: 'Que doit contenir le footer de votre site pour le SEO local ?',
            options: [
              'Uniquement le copyright',
              'Votre adresse complète et numéro de téléphone',
              'Uniquement les liens vers les réseaux sociaux',
              'Une longue description de l\'entreprise',
            ],
            correctIndex: 1,
            explanation: 'Le footer doit contenir votre NAP (adresse complète et téléphone) sur toutes les pages. C\'est un signal local fort et cohérent qui renforce votre présence géographique.',
          },
        ],
      },
    },
    // CTA et liens
    {
      type: 'heading',
      level: 2,
      content: 'Prochaines étapes',
    },
    {
      type: 'text',
      content: 'Vous maîtrisez maintenant les fondamentaux du SEO local. Pour approfondir, consultez nos guides détaillés sur l\'optimisation de Google Business Profile et la stratégie d\'avis clients.',
    },
    {
      type: 'cta',
      content: {
        title: 'Optimisez votre Google Business Profile',
        description: 'Suivez notre guide complet pour créer une fiche GBP parfaitement optimisée et dominer le Pack Local.',
        buttonText: 'Voir le guide GBP',
        buttonLink: '/seo-local/google-business-profile',
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
        'Guide Google Business Profile - Tout savoir sur l\'optimisation de votre fiche',
        'Stratégie d\'avis clients - Collecter et gérer les avis pour booster votre SEO local',
      ],
    },
  ],
};

const childPages: Article[] = [
  {
    slug: 'google-business-profile',
    title: 'Google Business Profile : Guide d\'Optimisation Complet',
    metaTitle: 'Google Business Profile - Optimisation 2026',
    metaDescription: 'Optimisez votre fiche Google Business Profile pour le SEO local. Photos, posts, catégories : toutes les bonnes pratiques.',
    keyword: 'google business profile',
    secondaryKeywords: ['google my business', 'fiche google', 'optimiser gbp'],
    intent: 'info',
    cluster: 'seo-local',
    excerpt: 'Google Business Profile est votre vitrine sur Google. Une fiche bien optimisée peut doubler votre visibilité locale.',
    tableOfContents: true,
    readingTime: 32,
    difficulty: 'debutant',
    lastUpdated: '2026-01-27',
    author: 'thomas-dupont',
    relatedSlugs: ['avis-clients'],
    faq: [
      {
        question: 'Google Business Profile est-il gratuit ?',
        answer: 'Oui, entièrement gratuit. Google ne facture rien pour créer et gérer votre fiche.',
      },
      {
        question: 'Comment vérifier ma fiche GBP ?',
        answer: 'Google envoie une carte postale avec un code à votre adresse. D\'autres méthodes (téléphone, email) sont parfois disponibles selon le type de business.',
      },
    ],
    content: [
      {
        type: 'text',
        content: 'Google Business Profile (GBP), anciennement Google My Business, est l\'outil gratuit de Google pour gérer votre présence dans les résultats locaux et Google Maps. C\'est la pierre angulaire du SEO local : une fiche bien optimisée peut à elle seule vous faire apparaître dans le Pack Local et multiplier votre visibilité. Cette formation complète vous guide pas à pas dans la création et l\'optimisation de votre fiche GBP pour dominer les recherches de proximité.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Ce que vous allez apprendre',
          content: '• Créer et vérifier votre fiche Google Business Profile\\n• Optimiser chaque élément pour maximiser votre visibilité\\n• Choisir les bonnes catégories et attributs\\n• Gérer vos photos et médias efficacement\\n• Publier des posts engageants\\n• Éviter les erreurs qui mènent à la suspension',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Créer et vérifier votre fiche GBP',
      },
      {
        type: 'text',
        content: 'La première étape est de créer votre fiche ou de revendiquer une fiche existante (Google crée parfois automatiquement des fiches à partir de données web).',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Création d\'une nouvelle fiche',
      },
      {
        type: 'list',
        content: [
          'Rendez-vous sur business.google.com',
          'Connectez-vous avec votre compte Google (créez-en un professionnel si nécessaire)',
          'Cliquez sur "Gérer" puis "Ajouter un établissement"',
          'Suivez les étapes : nom, catégorie, adresse, téléphone, site web',
          'Demandez la vérification de votre fiche',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Méthodes de vérification',
      },
      {
        type: 'table',
        content: {
          headers: ['Méthode', 'Délai', 'Disponibilité'],
          rows: [
            ['Carte postale', '5-14 jours', 'Toujours disponible'],
            ['Téléphone', 'Immédiat', 'Certains types d\'entreprises'],
            ['Email', 'Immédiat', 'Certains types d\'entreprises'],
            ['Google Search Console', 'Immédiat', 'Si vous avez déjà validé votre site'],
            ['Vidéo', '5-7 jours', 'Alternative si autres méthodes échouent'],
          ],
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Astuce vérification',
          content: 'Si vous avez déjà validé votre site web dans Google Search Console, la vérification peut être instantanée. Connectez-vous d\'abord à Search Console avec le même compte Google.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Optimisation des informations de base',
      },
      {
        type: 'text',
        content: 'Les informations de base constituent le socle de votre fiche. Chaque élément compte pour le ranking et l\'expérience utilisateur.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Nom de l\'entreprise',
      },
      {
        type: 'text',
        content: 'Le nom doit correspondre exactement à votre nom légal ou commercial utilisé dans le monde réel (enseigne, cartes de visite, etc.).',
      },
      {
        type: 'list',
        content: [
          '✅ Correct : "Boulangerie Martin"',
          '❌ Incorrect : "Boulangerie Martin - Meilleur Pain Bio Lyon Centre"',
          '✅ Correct : "Cabinet Dr. Dupont - Dermatologue"',
          '❌ Incorrect : "Dermatologue Lyon 6 - Dr. Dupont Expert Peau"',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Attention suspension',
          content: 'L\'ajout de mots-clés dans le nom est la cause n°1 de suspension de fiche GBP. Google détecte ces abus et suspend sans préavis. La réactivation peut prendre des semaines.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Catégorie principale et secondaires',
      },
      {
        type: 'text',
        content: 'La catégorie principale est le facteur de ranking le plus important. Choisissez la catégorie la plus spécifique qui décrit votre activité principale.',
      },
      {
        type: 'table',
        content: {
          headers: ['Activité', 'Mauvais choix', 'Bon choix'],
          rows: [
            ['Restaurant italien', 'Restaurant', 'Restaurant italien'],
            ['Plombier-chauffagiste', 'Services', 'Plombier chauffagiste'],
            ['Psychologue enfants', 'Thérapeute', 'Psychologue pour enfants'],
            ['Avocat divorce', 'Avocat', 'Avocat spécialisé en droit de la famille'],
          ],
        },
      },
      {
        type: 'text',
        content: 'Vous pouvez ajouter jusqu\'à 9 catégories secondaires. Utilisez-les pour couvrir vos autres services, mais uniquement s\'ils sont vraiment proposés.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Adresse et zone de service',
      },
      {
        type: 'text',
        content: 'Deux options selon votre modèle d\'activité :',
      },
      {
        type: 'list',
        content: [
          'Établissement avec accueil client : Adresse physique complète affichée',
          'Service à domicile (plombier, coach, etc.) : Masquez l\'adresse et définissez une zone de service',
        ],
      },
      {
        type: 'text',
        content: 'La zone de service peut inclure jusqu\'à 20 zones géographiques (villes, codes postaux, régions).',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Téléphone et site web',
      },
      {
        type: 'list',
        content: [
          'Privilégiez un numéro local (pas de 0800)',
          'Un seul numéro principal par fiche',
          'Le site web doit correspondre exactement à votre domaine',
          'Utilisez https:// (sécurisé)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Horaires d\'ouverture',
      },
      {
        type: 'text',
        content: 'Les horaires doivent être précis et à jour. Mettez-les à jour pour :',
      },
      {
        type: 'list',
        content: [
          'Horaires réguliers (lundi-dimanche)',
          'Horaires spéciaux jours fériés',
          'Fermetures exceptionnelles (vacances, travaux)',
          'Horaires de services spécifiques (si différents)',
        ],
      },
      {
        type: 'heading',
        level: 2,
        content: 'Description optimisée',
      },
      {
        type: 'text',
        content: 'La description de 750 caractères est votre opportunité de vous présenter et d\'inclure vos mots-clés naturellement.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Structure recommandée',
      },
      {
        type: 'list',
        content: [
          'Phrase d\'accroche avec activité principale et localisation',
          'Présentation de vos services/produits principaux',
          'Ce qui vous différencie (expérience, spécialités, certifications)',
          'Zone de service ou quartiers desservis',
          'Appel à l\'action (prenez rdv, venez nous découvrir)',
        ],
      },
      {
        type: 'text',
        content: 'Exemple de description optimisée pour une boulangerie :',
      },
      {
        type: 'quote',
        content: 'Boulangerie artisanale à Lyon 6 depuis 1985, nous proposons pains au levain naturel, viennoiseries maison et pâtisseries traditionnelles. Notre spécialité : le pain de campagne cuit au feu de bois. Farines bio et locales. Ouvert 7j/7, nous vous accueillons au cœur du quartier des Brotteaux. Commandez vos gâteaux d\'anniversaire en ligne !',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Photos et médias : maximiser l\'impact visuel',
      },
      {
        type: 'text',
        content: 'Les fiches avec photos reçoivent 42% de demandes d\'itinéraire en plus et 35% de clics vers le site web en plus. La qualité et la quantité comptent.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Types de photos à ajouter',
      },
      {
        type: 'table',
        content: {
          headers: ['Type', 'Quantité min.', 'Conseils'],
          rows: [
            ['Logo', '1', '720x720 px, fond transparent PNG idéal'],
            ['Photo de couverture', '1', '1080x608 px, photo emblématique'],
            ['Extérieur', '3+', 'Façade de jour, de nuit, différents angles'],
            ['Intérieur', '3+', 'Salle, comptoir, ambiance'],
            ['Équipe', '2+', 'Portraits, équipe au travail'],
            ['Produits/Services', '10+', 'Vos meilleures réalisations'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Bonnes pratiques photos',
      },
      {
        type: 'list',
        content: [
          'Format JPEG ou PNG, minimum 720px de large',
          'Pas de filtres excessifs - restez naturel',
          'Nommez les fichiers avec des mots-clés (boulangerie-lyon-pain-campagne.jpg)',
          'Ajoutez des photos régulièrement (signal d\'activité)',
          'Répondez aux photos ajoutées par les clients',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Vidéos',
      },
      {
        type: 'text',
        content: 'GBP accepte des vidéos de 30 secondes maximum. Idéal pour : visite virtuelle, présentation de l\'équipe, démonstration de service.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Posts Google Business : rester actif',
      },
      {
        type: 'text',
        content: 'Les posts permettent de publier des actualités directement sur votre fiche. Ils expirent après 7 jours (sauf événements). Publier régulièrement montre à Google que vous êtes actif.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Types de posts',
      },
      {
        type: 'table',
        content: {
          headers: ['Type', 'Durée', 'Usage'],
          rows: [
            ['Quoi de neuf', '7 jours', 'Actualités, nouveautés'],
            ['Offre', '7 jours', 'Promotions, réductions'],
            ['Événement', 'Jusqu\'à la date', 'Portes ouvertes, événements'],
            ['Produit', 'Permanent', 'Présentation produits/services'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Anatomie d\'un bon post',
      },
      {
        type: 'list',
        content: [
          'Image accrocheuse (1200x900 px recommandé)',
          'Texte court et percutant (100-300 caractères)',
          'Mots-clés intégrés naturellement',
          'Appel à l\'action clair (Réserver, En savoir plus, Appeler)',
          'Lien vers la page pertinente de votre site',
        ],
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Fréquence recommandée',
          content: 'Publiez au minimum 1 post par semaine. Les fiches avec des posts récents reçoivent plus d\'interactions et signalent à Google que l\'entreprise est active.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Attributs et services',
      },
      {
        type: 'text',
        content: 'Les attributs fournissent des informations supplémentaires sur votre établissement. Ils apparaissent sur votre fiche et aident au filtrage des recherches.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Types d\'attributs courants',
      },
      {
        type: 'list',
        content: [
          'Accessibilité : entrée accessible fauteuil, parking PMR',
          'Paiements : CB acceptée, sans contact, chèques',
          'Services : WiFi gratuit, terrasse, climatisation',
          'Engagement : Entreprise dirigée par une femme, éco-responsable',
          'Santé : Masques requis, désinfection entre clients',
        ],
      },
      {
        type: 'text',
        content: 'Remplissez tous les attributs pertinents. C\'est un signal de complétude pour Google et aide les utilisateurs à filtrer leurs recherches.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Gestion des avis depuis GBP',
      },
      {
        type: 'text',
        content: 'GBP centralise la gestion de vos avis Google. Répondre aux avis (positifs et négatifs) est un facteur de ranking et améliore l\'image de marque.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Répondre aux avis positifs',
      },
      {
        type: 'list',
        content: [
          'Remerciez personnellement par le prénom',
          'Mentionnez un détail de leur expérience',
          'Restez concis (2-3 phrases)',
          'Invitez à revenir',
        ],
      },
      {
        type: 'text',
        content: 'Exemple : "Merci Thomas pour ce retour enthousiaste ! Nous sommes ravis que notre pain au levain vous ait plu. À très bientôt !"',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Répondre aux avis négatifs',
      },
      {
        type: 'list',
        content: [
          'Répondez rapidement (24-48h)',
          'Restez professionnel et empathique',
          'Excusez-vous si justifié',
          'Proposez une solution concrète',
          'Invitez à continuer la conversation en privé',
        ],
      },
      {
        type: 'text',
        content: 'Exemple : "Nous sommes désolés que votre expérience n\'ait pas été à la hauteur de vos attentes. Nous prenons vos remarques très au sérieux. Pouvez-vous nous contacter à contact@... pour que nous puissions en discuter et trouver une solution ?"',
      },
      // Études de cas
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas #1 : Restaurant qui double ses réservations',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'La Table d\'Émile, restaurant gastronomique à Nantes. 30 couverts, ouvert depuis 3 ans. Fiche GBP créée mais jamais optimisée.',
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
          'Fiche minimaliste : nom, adresse, téléphone uniquement',
          '12 avis (vs 85 pour le concurrent principal)',
          '0 photo (vs 120+ pour le concurrent)',
          'Catégorie générique "Restaurant"',
          'Aucun post depuis la création',
          'Pas de menu en ligne',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution déployée',
      },
      {
        type: 'text',
        content: 'Optimisation complète sur 3 semaines :',
      },
      {
        type: 'text',
        content: 'Semaine 1 : Changement catégorie en "Restaurant gastronomique français". Ajout de 50 photos professionnelles (plats, salle, chef, cave). Rédaction description optimisée.',
      },
      {
        type: 'text',
        content: 'Semaine 2 : Ajout du menu complet dans la section dédiée. Création des premiers posts (plat du jour, soirée accord mets-vins). Ajout de tous les attributs pertinents.',
      },
      {
        type: 'text',
        content: 'Semaine 3 : Lancement campagne d\'avis (carte avec QR code, email post-dîner). Formation équipe à la demande d\'avis. Intégration réservation en ligne.',
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
            ['Avis Google', '12', '58', '+383%'],
            ['Photos', '0', '75', '+75'],
            ['Vues fiche/mois', '~400', '~2 800', '+600%'],
            ['Clics site web/mois', '~25', '~180', '+620%'],
            ['Réservations/semaine', '~18', '~42', '+133%'],
            ['Position "restaurant gastronomique Nantes"', 'Non visible', '#2', 'Top 3'],
          ],
        },
      },
      // Étude de cas 2
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas #2 : Salon de coiffure qui récupère sa fiche suspendue',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Coiff\'Style, salon de coiffure à Marseille 8ème. 2 employés. Fiche GBP suspendue depuis 3 mois sans savoir pourquoi.',
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Problématique identifiée',
      },
      {
        type: 'text',
        content: 'La propriétaire avait optimisé sa fiche... en violant les guidelines sans le savoir :',
      },
      {
        type: 'list',
        content: [
          'Nom modifié : "Coiff\'Style - Meilleur Coiffeur Marseille 8 - Coloriste Expert"',
          'Catégories non pertinentes ajoutées (spa, manucure - services non proposés)',
          'Adresse modifiée vers un appartement voisin plus "visible"',
          'Faux avis provenant de comptes suspects',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution déployée',
      },
      {
        type: 'text',
        content: 'Processus de récupération sur 6 semaines :',
      },
      {
        type: 'text',
        content: 'Semaine 1-2 : Identification de toutes les violations. Documentation des informations correctes. Préparation du dossier de réactivation.',
      },
      {
        type: 'text',
        content: 'Semaine 3 : Demande de réactivation via le formulaire Google avec justificatifs (KBIS, bail, photos de l\'enseigne). Engagement à respecter les guidelines.',
      },
      {
        type: 'text',
        content: 'Semaine 4-5 : Attente réponse Google + échanges complémentaires. Fiche réactivée après validation.',
      },
      {
        type: 'text',
        content: 'Semaine 6 : Reprise avec les bonnes pratiques uniquement. Nom correct, catégorie unique "Salon de coiffure", adresse réelle.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats obtenus',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Avant suspension', 'Après réactivation (3 mois)', 'Évolution'],
          rows: [
            ['Visibilité Pack Local', 'Suspendue', '#3 stable', 'Récupérée'],
            ['Avis légitimes', '18', '45', '+150%'],
            ['Appels depuis GBP/mois', '0', '~35', 'Reprise'],
            ['Confiance guidelines', 'Violations', '100% conforme', 'Sécurisée'],
          ],
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Leçon clé',
          content: 'Les shortcuts violent toujours les guidelines. Une fiche conforme mais moins "optimisée" est infiniment plus rentable qu\'une fiche suspendue.',
        },
      },
      // Étude de cas 3
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas #3 : Médecin qui maîtrise sa e-réputation',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Dr. Martin, médecin généraliste à Paris 15. Cabinet individuel. Plusieurs avis négatifs injustifiés impactant son image.',
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
          'Note tombée à 3.2/5 à cause de 3 avis 1 étoile',
          'Avis négatifs provenant de non-patients (confusion avec homonyme)',
          'Aucune réponse aux avis depuis 2 ans',
          '8 avis seulement vs 25+ pour les confrères',
          'Fiche incomplète (pas de spécialités, pas de photos)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution déployée',
      },
      {
        type: 'text',
        content: 'Stratégie de reprise de contrôle sur 4 mois :',
      },
      {
        type: 'text',
        content: 'Mois 1 : Signalement des avis frauduleux à Google (preuves de non-patient). Réponse professionnelle aux autres avis négatifs. Optimisation complète de la fiche.',
      },
      {
        type: 'text',
        content: 'Mois 2-3 : Mise en place d\'une demande systématique d\'avis aux patients satisfaits. Affiche en salle d\'attente. Email de satisfaction post-consultation.',
      },
      {
        type: 'text',
        content: 'Mois 4 : Maintien de la collecte. Posts mensuels sur les actualités santé. Photos cabinet mises à jour.',
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
            ['Note moyenne', '3.2/5', '4.6/5', '+1.4 pts'],
            ['Nombre d\'avis', '8', '47', '+487%'],
            ['Avis frauduleux', '3', '0 (supprimés)', '-100%'],
            ['Nouveaux patients/mois', '~8', '~18', '+125%'],
            ['Position recherche locale', '#8', '#2', '+6 places'],
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
        content: 'Exercice 1 : Audit complet de votre fiche GBP',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Évaluer l\'état actuel de votre fiche et identifier les optimisations.',
        },
      },
      {
        type: 'list',
        content: [
          'Connectez-vous à business.google.com',
          'Notez chaque section sur 10 : nom (conforme), catégories (précision), description (complétude), photos (quantité/qualité), horaires (exactitude), attributs (complétude)',
          'Calculez votre score global sur 60',
          'Identifiez les 3 sections les plus faibles',
          'Planifiez les corrections pour cette semaine',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Benchmark visuel',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Comparer vos photos à celles de vos concurrents.',
        },
      },
      {
        type: 'list',
        content: [
          'Recherchez votre requête principale sur Google Maps',
          'Ouvrez les fiches des 3 premiers résultats',
          'Comptez : nombre de photos, types de photos, qualité perçue',
          'Identifiez les types de photos qui vous manquent',
          'Planifiez une session photo pour combler les gaps',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Rédaction de description optimisée',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Rédiger une description GBP parfaite en 750 caractères.',
        },
      },
      {
        type: 'list',
        content: [
          'Listez vos 5 mots-clés principaux',
          'Listez vos 3 arguments différenciants',
          'Rédigez une première version incluant : activité + localisation + services + différenciateurs + CTA',
          'Vérifiez que vous êtes sous 750 caractères',
          'Faites relire par un proche non-expert',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Planning de posts mensuel',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Créer un calendrier éditorial GBP pour le mois à venir.',
        },
      },
      {
        type: 'list',
        content: [
          'Identifiez 4 thèmes de posts (1 par semaine)',
          'Pour chaque post, définissez : type (actualité/offre/événement), visuel, texte, CTA',
          'Préparez les visuels en 1200x900px',
          'Programmez les publications (ou créez des rappels)',
          'Mesurez les interactions après 1 mois',
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
          title: 'Quiz : Maîtrise de Google Business Profile',
          questions: [
            {
              question: 'Quelle est la longueur maximale de la description GBP ?',
              options: [
                '500 caractères',
                '750 caractères',
                '1 000 caractères',
                '1 500 caractères',
              ],
              correctIndex: 1,
              explanation: 'La description GBP est limitée à 750 caractères. Utilisez-les stratégiquement pour décrire votre activité, vos services et votre localisation.',
            },
            {
              question: 'Combien de catégories secondaires pouvez-vous ajouter à votre fiche ?',
              options: [
                '3',
                '5',
                '9',
                'Illimité',
              ],
              correctIndex: 2,
              explanation: 'Vous pouvez ajouter jusqu\'à 9 catégories secondaires en plus de la catégorie principale. N\'ajoutez que celles qui correspondent à des services réellement proposés.',
            },
            {
              question: 'Quelle action entraîne le plus souvent une suspension de fiche GBP ?',
              options: [
                'Ne pas répondre aux avis',
                'Ajouter des mots-clés dans le nom',
                'Ne pas publier de posts',
                'Avoir peu de photos',
              ],
              correctIndex: 1,
              explanation: 'L\'ajout de mots-clés dans le nom de l\'entreprise (keyword stuffing) est la violation la plus courante et entraîne fréquemment la suspension de la fiche.',
            },
            {
              question: 'Quelle est la durée de vie d\'un post GBP de type "Quoi de neuf" ?',
              options: [
                '24 heures',
                '7 jours',
                '30 jours',
                'Permanent',
              ],
              correctIndex: 1,
              explanation: 'Les posts de type "Quoi de neuf" et "Offre" expirent après 7 jours. Les posts "Événement" restent jusqu\'à la date de l\'événement, et les "Produits" sont permanents.',
            },
            {
              question: 'Quel est l\'impact mesuré des photos sur l\'engagement d\'une fiche GBP ?',
              options: [
                '+10% de clics',
                '+20% de clics',
                '+35% de clics vers le site web',
                '+50% de clics',
              ],
              correctIndex: 2,
              explanation: 'Les fiches avec photos reçoivent 35% de clics en plus vers le site web et 42% de demandes d\'itinéraire en plus. Les photos sont cruciales.',
            },
            {
              question: 'Comment obtenir une vérification instantanée de votre fiche GBP ?',
              options: [
                'Payer une option premium',
                'Avoir déjà validé votre site dans Search Console',
                'Demander par téléphone',
                'Ce n\'est pas possible',
              ],
              correctIndex: 1,
              explanation: 'Si votre site est déjà validé dans Google Search Console avec le même compte Google, vous pouvez souvent bénéficier d\'une vérification instantanée.',
            },
            {
              question: 'Quel format de photo est recommandé pour les posts GBP ?',
              options: [
                '800x600 px',
                '1080x1080 px',
                '1200x900 px',
                '1920x1080 px',
              ],
              correctIndex: 2,
              explanation: 'Le format recommandé pour les posts GBP est 1200x900 pixels (ratio 4:3). Ce format s\'affiche correctement sur tous les appareils.',
            },
            {
              question: 'Combien de zones de service pouvez-vous définir pour une entreprise à domicile ?',
              options: [
                '5',
                '10',
                '20',
                '50',
              ],
              correctIndex: 2,
              explanation: 'Vous pouvez définir jusqu\'à 20 zones de service (villes, codes postaux ou régions) pour une entreprise qui se déplace chez les clients.',
            },
            {
              question: 'Quelle est la meilleure réaction face à un avis négatif ?',
              options: [
                'L\'ignorer pour ne pas attirer l\'attention',
                'Le signaler comme spam',
                'Répondre professionnellement et proposer une solution',
                'Demander à des proches de poster des avis positifs',
              ],
              correctIndex: 2,
              explanation: 'Une réponse professionnelle et empathique montre que vous prenez les retours au sérieux. Cela rassure les futurs clients qui liront l\'échange.',
            },
            {
              question: 'Quelle fréquence de publication de posts est recommandée ?',
              options: [
                '1 par jour',
                '1 par semaine minimum',
                '1 par mois',
                '1 par trimestre',
              ],
              correctIndex: 1,
              explanation: 'Publier au minimum 1 post par semaine maintient votre fiche active et signale à Google que votre entreprise est dynamique.',
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
        content: 'Votre fiche Google Business Profile optimisée, il est temps de mettre en place une stratégie d\'avis clients efficace pour booster votre visibilité locale.',
      },
      {
        type: 'cta',
        content: {
          title: 'Maîtrisez la collecte d\'avis',
          description: 'Découvrez les techniques pour collecter des avis positifs et gérer votre e-réputation locale.',
          buttonText: 'Voir le guide des avis',
          buttonLink: '/seo-local/avis-clients',
          variant: 'primary',
        },
      },
    ],
  },
  {
    slug: 'avis-clients',
    title: 'Avis Clients et SEO Local : Stratégie de Collecte et Gestion',
    metaTitle: 'Avis Clients SEO - Guide 2026',
    metaDescription: 'Les avis Google impactent votre SEO local. Apprenez à les collecter, y répondre et les exploiter pour votre référencement.',
    keyword: 'avis clients seo',
    secondaryKeywords: ['avis google', 'gestion avis', 'collecter avis'],
    intent: 'info',
    cluster: 'seo-local',
    excerpt: 'Les avis clients influencent le ranking local et le taux de conversion. Une stratégie d\'avis est indispensable pour le SEO local.',
    tableOfContents: true,
    readingTime: 30,
    difficulty: 'debutant',
    lastUpdated: '2026-01-25',
    author: 'marie-lefevre',
    relatedSlugs: ['google-business-profile'],
    faq: [
      {
        question: 'Peut-on supprimer un avis négatif ?',
        answer: 'Non, sauf s\'il viole les règles Google (spam, contenu inapproprié). Le mieux est de répondre professionnellement et de noyer les négatifs par des positifs.',
      },
      {
        question: 'Combien d\'avis pour bien ranker ?',
        answer: 'Il n\'y a pas de nombre magique. Visez plus d\'avis que vos concurrents locaux, avec une note supérieure et des avis récents.',
      },
    ],
    content: [
      {
        type: 'text',
        content: '88% des consommateurs font autant confiance aux avis en ligne qu\'aux recommandations personnelles. Pour le SEO local, les avis Google ne sont pas un simple bonus : ils sont un facteur de ranking déterminant pour le Pack Local et un levier de conversion majeur. Cette formation complète vous enseigne comment mettre en place une stratégie d\'avis efficace, de la collecte systématique à la gestion de crise en passant par l\'optimisation de vos réponses.',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Ce que vous allez apprendre',
          content: '• Comprendre l\'impact réel des avis sur votre SEO local et vos conversions\\n• Mettre en place un système de collecte d\'avis automatisé\\n• Rédiger des réponses parfaites aux avis positifs et négatifs\\n• Gérer les avis frauduleux et les situations de crise\\n• Transformer les avis en levier marketing\\n• Respecter les guidelines Google pour éviter les pénalités',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'L\'impact des avis sur le SEO local',
      },
      {
        type: 'text',
        content: 'Les avis Google influencent votre visibilité locale sur 4 dimensions distinctes. Comprendre ces mécanismes est essentiel pour prioriser vos efforts.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Impact sur le ranking du Pack Local',
      },
      {
        type: 'text',
        content: 'Les avis représentent environ 15-17% des facteurs de ranking du Pack Local selon les études annuelles de BrightLocal et Whitespark. Google analyse :',
      },
      {
        type: 'list',
        content: [
          'Quantité : Plus d\'avis = plus de confiance pour Google',
          'Qualité : Note moyenne élevée (impact modéré mais réel)',
          'Fraîcheur : Avis récents valorisés vs avis anciens',
          'Vélocité : Rythme d\'acquisition (régulier > irrégulier)',
          'Diversité : Avis de comptes Google variés',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Impact sur le taux de clic (CTR)',
      },
      {
        type: 'text',
        content: 'Dans le Pack Local, les étoiles et le nombre d\'avis sont visibles directement. Une fiche avec 4.8⭐ et 150 avis aura un CTR bien supérieur à une fiche 4.2⭐ avec 12 avis, même à position égale.',
      },
      {
        type: 'table',
        content: {
          headers: ['Note moyenne', 'Impact CTR estimé', 'Perception client'],
          rows: [
            ['4.8 - 5.0', 'Optimal', 'Excellent, peut sembler "trop beau" si peu d\'avis'],
            ['4.5 - 4.7', 'Très bon', 'Très positif, crédible'],
            ['4.0 - 4.4', 'Bon', 'Acceptable, regardera les négatifs'],
            ['3.5 - 3.9', 'Dégradé', 'Méfiance, comparera aux concurrents'],
            ['< 3.5', 'Très faible', 'Évitement probable'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Impact sur le contenu et les mots-clés',
      },
      {
        type: 'text',
        content: 'Les avis génèrent du contenu unique sur votre fiche. Quand un client écrit "Excellent plombier pour ma fuite d\'eau à Lyon 3", ces mots-clés enrichissent votre fiche et renforcent votre pertinence pour ces requêtes.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Impact sur la conversion',
      },
      {
        type: 'text',
        content: 'Au-delà du SEO, les avis convertissent. Un prospect qui lit 10 avis positifs détaillés est bien plus susceptible de vous contacter qu\'un prospect face à une fiche sans avis.',
      },
      {
        type: 'table',
        content: {
          headers: ['Statistique', 'Source'],
          rows: [
            ['88% font confiance aux avis autant qu\'aux recommandations personnelles', 'BrightLocal 2024'],
            ['72% ne passent à l\'action qu\'après avoir lu des avis positifs', 'Podium 2024'],
            ['Les clients dépensent 31% de plus chez les entreprises bien notées', 'Invesp'],
            ['57% n\'utilisent que des entreprises avec 4+ étoiles', 'BrightLocal 2024'],
          ],
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Mettre en place un système de collecte d\'avis',
      },
      {
        type: 'text',
        content: 'La collecte d\'avis ne peut pas être laissée au hasard. Seuls 5-10% des clients laissent spontanément un avis. Avec un système structuré, vous pouvez atteindre 20-30%.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Le bon moment pour demander',
      },
      {
        type: 'text',
        content: 'Le timing est crucial. Demandez quand le client est encore dans l\'émotion positive de l\'expérience :',
      },
      {
        type: 'table',
        content: {
          headers: ['Type de business', 'Meilleur moment', 'Canal recommandé'],
          rows: [
            ['Restaurant', 'À la fin du repas, avant de partir', 'QR code sur table/addition'],
            ['Commerce', 'Immédiatement après l\'achat', 'QR code sur ticket/sac'],
            ['Service (plombier, coiffeur)', '24-48h après l\'intervention', 'SMS ou email'],
            ['Médical', '48-72h après le RDV', 'Email uniquement'],
            ['E-commerce avec retrait', 'À la remise du colis', 'QR code sur colis'],
          ],
        },
      },
      {
        type: 'heading',
        level: 3,
        content: 'Obtenir votre lien d\'avis Google',
      },
      {
        type: 'text',
        content: 'Google fournit un lien court direct vers le formulaire d\'avis. Pour l\'obtenir :',
      },
      {
        type: 'list',
        content: [
          'Connectez-vous à business.google.com',
          'Sélectionnez votre établissement',
          'Dans le menu gauche, cliquez sur "Accueil"',
          'Trouvez la carte "Obtenir plus d\'avis"',
          'Copiez le lien court fourni',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Les 5 canaux de collecte efficaces',
      },
      {
        type: 'heading',
        level: 4,
        content: '1. QR Code physique',
      },
      {
        type: 'text',
        content: 'Créez un QR code pointant vers votre lien d\'avis. Placez-le sur : comptoir, tables, tickets de caisse, cartes de visite, stickers vitrine, véhicules de service.',
      },
      {
        type: 'heading',
        level: 4,
        content: '2. Email automatisé',
      },
      {
        type: 'text',
        content: 'Envoyez un email 24-72h après l\'interaction. Personnalisez avec le prénom et la prestation. Incluez un lien direct et expliquez que cela prend 2 minutes.',
      },
      {
        type: 'heading',
        level: 4,
        content: '3. SMS de suivi',
      },
      {
        type: 'text',
        content: 'Le SMS a un taux d\'ouverture de 98%. Message court : "Bonjour [Prénom], merci pour votre visite ! Votre avis nous aiderait beaucoup : [lien]. L\'équipe [Nom]"',
      },
      {
        type: 'heading',
        level: 4,
        content: '4. Demande orale directe',
      },
      {
        type: 'text',
        content: 'La demande en personne reste la plus efficace. Formez votre équipe à demander naturellement : "Si vous avez été satisfait, un petit avis Google nous aiderait énormément. Voici un QR code, ça prend 2 minutes !"',
      },
      {
        type: 'heading',
        level: 4,
        content: '5. Signature email',
      },
      {
        type: 'text',
        content: 'Ajoutez un lien d\'avis dans toutes vos signatures email : "Satisfait de nos services ? Laissez-nous un avis Google !"',
      },
      {
        type: 'infobox',
        content: {
          type: 'warning',
          title: 'Ce qui est interdit',
          content: 'Google interdit : les avis contre rémunération, les avis de proches/employés, le filtrage des avis (demander seulement aux satisfaits), les avis depuis le même réseau WiFi. Ces pratiques peuvent entraîner la suppression de tous vos avis.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Rédiger des réponses parfaites',
      },
      {
        type: 'text',
        content: 'Répondre à tous les avis est essentiel. Cela montre votre engagement et influence positivement les futurs clients qui lisent les échanges.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Répondre aux avis positifs (5 étoiles)',
      },
      {
        type: 'text',
        content: 'Structure recommandée en 4 points :',
      },
      {
        type: 'list',
        content: [
          'Remerciement personnalisé (utilisez le prénom)',
          'Mention d\'un détail de leur expérience',
          'Renforcement de ce qui a plu',
          'Invitation à revenir',
        ],
      },
      {
        type: 'text',
        content: 'Exemple :',
      },
      {
        type: 'quote',
        content: 'Merci beaucoup Marie pour ce retour enthousiaste ! Nous sommes ravis que notre équipe ait su vous conseiller pour votre projet de rénovation. La satisfaction de nos clients est notre priorité. Au plaisir de vous revoir pour la suite de vos travaux !',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Répondre aux avis mitigés (3-4 étoiles)',
      },
      {
        type: 'text',
        content: 'Ces avis sont des opportunités d\'amélioration. Remerciez, reconnaissez le point faible mentionné, expliquez comment vous allez vous améliorer.',
      },
      {
        type: 'quote',
        content: 'Merci Pierre pour votre retour. Nous sommes heureux que la qualité de nos plats vous ait plu. Nous prenons note de votre remarque sur le temps d\'attente et travaillons à optimiser notre service en période d\'affluence. Nous espérons vous offrir une expérience parfaite lors de votre prochaine visite.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Répondre aux avis négatifs (1-2 étoiles)',
      },
      {
        type: 'text',
        content: 'Les avis négatifs sont délicats mais une bonne réponse peut retourner la situation. Règles d\'or :',
      },
      {
        type: 'list',
        content: [
          'Répondez rapidement (sous 24-48h)',
          'Restez calme et professionnel (jamais défensif)',
          'Excusez-vous pour l\'expérience négative (pas forcément pour les faits)',
          'Ne contestez jamais publiquement la version du client',
          'Proposez de résoudre le problème en privé',
          'Laissez vos coordonnées directes',
        ],
      },
      {
        type: 'quote',
        content: 'Bonjour Sophie, nous sommes sincèrement désolés que votre expérience n\'ait pas été à la hauteur de vos attentes. Ce n\'est pas représentatif du niveau de service que nous nous efforçons de fournir. Nous aimerions comprendre ce qui s\'est passé et trouver une solution. Pourriez-vous nous contacter au 01.XX.XX.XX.XX ou par email à contact@... ? Nous tenons à rectifier cette situation. Cordialement, [Prénom], Responsable.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'Gérer les avis problématiques',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Avis frauduleux ou de spam',
      },
      {
        type: 'text',
        content: 'Certains avis peuvent être signalés pour suppression :',
      },
      {
        type: 'list',
        content: [
          'Avis de personnes qui ne sont pas clientes (concurrents, erreur de lieu)',
          'Contenu spam ou promotionnel',
          'Langage offensant ou haineux',
          'Informations personnelles publiées',
          'Conflits d\'intérêts évidents',
        ],
      },
      {
        type: 'text',
        content: 'Pour signaler : cliquez sur les 3 points à côté de l\'avis → Signaler comme inapproprié. Google examine sous 3-7 jours.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Avis injustifiés mais réels',
      },
      {
        type: 'text',
        content: 'Parfois un client laisse un avis négatif pour une raison qui vous semble injuste. Vous ne pouvez pas le faire supprimer, mais votre réponse compte énormément pour les futurs lecteurs.',
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Stratégie de dilution',
          content: 'Le meilleur antidote aux avis négatifs est un flux constant d\'avis positifs. 1 avis 1 étoile parmi 5 avis = 3.8 de moyenne. Le même avis parmi 50 avis = 4.8 de moyenne.',
        },
      },
      {
        type: 'heading',
        level: 2,
        content: 'Transformer les avis en levier marketing',
      },
      {
        type: 'text',
        content: 'Vos avis positifs sont une mine d\'or pour votre communication. Exploitez-les légalement.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Utilisations légitimes des avis',
      },
      {
        type: 'list',
        content: [
          'Affichage sur votre site web (avec widget Google ou captures)',
          'Partage sur les réseaux sociaux (remerciement public)',
          'Intégration dans vos supports commerciaux (devis, présentations)',
          'Témoignages sur landing pages',
          'Affichage en vitrine ou dans vos locaux',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Analyser les patterns d\'avis',
      },
      {
        type: 'text',
        content: 'Vos avis contiennent des insights précieux :',
      },
      {
        type: 'list',
        content: [
          'Quels aspects sont le plus souvent mentionnés positivement ? → Renforcez-les',
          'Quelles critiques reviennent ? → Corrigez-les',
          'Quels mots-clés utilisent les clients ? → Intégrez-les à votre SEO',
          'Quels moments génèrent le plus d\'avis ? → Capitalisez dessus',
        ],
      },
      // Études de cas
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas #1 : Hôtel qui transforme sa réputation',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Hôtel Le Parisien, hôtel 3 étoiles à Paris 10. 45 chambres. Note tombée à 3.6 après travaux de rénovation bruyants et plaintes des clients.',
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
          'Note passée de 4.4 à 3.6 en 6 mois',
          '15 avis 1-2 étoiles consécutifs (travaux)',
          'Aucune réponse aux avis depuis le début des travaux',
          'Taux de réservation directe en chute de 40%',
          'Classement OTA dégradé (Booking, Expedia)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution déployée',
      },
      {
        type: 'text',
        content: 'Plan de redressement sur 6 mois post-travaux :',
      },
      {
        type: 'text',
        content: 'Mois 1 : Réponse personnalisée à TOUS les avis négatifs avec excuses sincères + explication des travaux terminés. Geste commercial proposé aux clients impactés.',
      },
      {
        type: 'text',
        content: 'Mois 2-3 : Système de collecte intensif. Email J+1 après le séjour. QR code dans chaque chambre. Formation du personnel à demander les avis au checkout.',
      },
      {
        type: 'text',
        content: 'Mois 4-6 : Maintien de la vélocité. Réponse systématique sous 24h. Communication proactive sur les améliorations post-travaux.',
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
            ['Note moyenne', '3.6', '4.5', '+0.9 pts'],
            ['Nombre d\'avis total', '124', '312', '+152%'],
            ['Avis négatifs récents', '15', '2', '-87%'],
            ['Taux de réponse aux avis', '0%', '100%', '+100%'],
            ['Réservations directes', '-40%', '+15% vs baseline', 'Récupéré'],
            ['Classement Booking arrondissement', '#45', '#12', '+33 places'],
          ],
        },
      },
      // Étude de cas 2
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas #2 : Dentiste qui dépasse ses concurrents',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'Cabinet dentaire Dr. Bernard à Nice. 2 praticiens. Bonne réputation clinique mais visibilité en ligne limitée face à des cabinets plus marketés.',
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
          '18 avis (vs 65 pour le concurrent principal)',
          'Note de 4.6 (excellente mais invisible)',
          'Aucun processus de collecte d\'avis',
          'Secrétaire débordée, pas de temps pour le marketing',
          'Patients satisfaits mais silencieux',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution déployée',
      },
      {
        type: 'text',
        content: 'Automatisation complète de la collecte :',
      },
      {
        type: 'text',
        content: 'Semaine 1 : Configuration d\'un outil de collecte automatique (Podium). Envoi SMS 2h après le RDV avec lien d\'avis. Aucune action manuelle requise.',
      },
      {
        type: 'text',
        content: 'Semaine 2 : Ajout d\'un écran tablette en salle d\'attente avec lien d\'avis. QR code sur le rappel de RDV envoyé par SMS.',
      },
      {
        type: 'text',
        content: 'Mois 2-4 : Maintien automatique. Le Dr. répond personnellement aux avis le samedi matin (20 min/semaine).',
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
            ['Nombre d\'avis', '18', '89', '+394%'],
            ['Note moyenne', '4.6', '4.8', '+0.2 pts'],
            ['Temps investi/semaine', '0', '20 min (réponses)', 'Minimal'],
            ['Position Pack Local', '#5', '#1', '+4 places'],
            ['Nouveaux patients/mois', '~12', '~28', '+133%'],
            ['Avis vs concurrent principal', '18 vs 65', '89 vs 72', 'Dépassé'],
          ],
        },
      },
      // Étude de cas 3
      {
        type: 'heading',
        level: 2,
        content: 'Étude de cas #3 : Restaurant qui gère une crise d\'avis',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Contexte',
          content: 'La Brasserie du Port, restaurant à Marseille. 80 couverts. Victime d\'une attaque d\'avis négatifs suite à un conflit avec un ex-employé.',
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
          '12 avis 1 étoile en 3 jours (comptes suspects)',
          'Note passée de 4.5 à 3.8',
          'Contenus similaires, comptes créés récemment',
          'Signalement à Google sans réponse immédiate',
          'Impact visible sur les réservations (-30%)',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Solution déployée',
      },
      {
        type: 'text',
        content: 'Gestion de crise en 4 phases :',
      },
      {
        type: 'text',
        content: 'Phase 1 (J1-J3) : Documentation de tous les avis suspects (screenshots, dates, similitudes). Signalement groupé à Google avec preuves.',
      },
      {
        type: 'text',
        content: 'Phase 2 (J4-J7) : Réponse professionnelle à chaque avis négatif (même suspects) montrant l\'engagement du restaurant. Communication transparente sur réseaux sociaux.',
      },
      {
        type: 'text',
        content: 'Phase 3 (J8-J30) : Mobilisation des clients fidèles. Email aux abonnés newsletter expliquant la situation et invitant à partager leur vraie expérience.',
      },
      {
        type: 'text',
        content: 'Phase 4 (M2-M3) : Système de collecte pérenne. Relance Google pour suppression. 8 des 12 avis finalement supprimés.',
      },
      {
        type: 'heading',
        level: 3,
        content: 'Résultats obtenus',
      },
      {
        type: 'table',
        content: {
          headers: ['Métrique', 'Pendant crise', 'Après 3 mois', 'Évolution'],
          rows: [
            ['Note moyenne', '3.8', '4.6', '+0.8 pts'],
            ['Avis frauduleux', '12', '4 (restants)', '-67%'],
            ['Nouveaux avis légitimes', '0', '+45', '+45'],
            ['Taux réservation', '-30%', '+5% vs avant crise', 'Récupéré+'],
            ['Image perçue', 'Dégradée', 'Renforcée (résilience)', 'Améliorée'],
          ],
        },
      },
      {
        type: 'infobox',
        content: {
          type: 'tip',
          title: 'Leçon de crise',
          content: 'Une crise bien gérée peut renforcer votre image. Les clients qui ont vu le restaurant répondre avec professionnalisme ont développé plus de confiance qu\'avant la crise.',
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
        content: 'Exercice 1 : Créer votre kit de collecte d\'avis',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Préparer tous les éléments pour systématiser la collecte d\'avis.',
        },
      },
      {
        type: 'list',
        content: [
          'Récupérez votre lien d\'avis Google (dans GBP)',
          'Créez un QR code pointant vers ce lien (générateur gratuit : qr-code-generator.com)',
          'Rédigez un script oral de demande d\'avis (15 mots max)',
          'Rédigez un template SMS (100 caractères max)',
          'Rédigez un template email (150 mots max)',
          'Identifiez où placer le QR code physiquement',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 2 : Audit et réponse à vos avis existants',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Rattraper le retard de réponses et améliorer votre engagement.',
        },
      },
      {
        type: 'list',
        content: [
          'Listez tous vos avis des 6 derniers mois',
          'Identifiez ceux sans réponse',
          'Rédigez une réponse personnalisée pour chacun (même ancien)',
          'Publiez les réponses en commençant par les plus récents',
          'Calculez votre nouveau taux de réponse',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 3 : Benchmark concurrentiel avis',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Comparer votre stratégie d\'avis à celle de vos concurrents.',
        },
      },
      {
        type: 'list',
        content: [
          'Identifiez vos 3 principaux concurrents locaux',
          'Pour chacun, relevez : nombre d\'avis, note moyenne, avis du dernier mois, taux de réponse',
          'Analysez le contenu de leurs avis (points forts/faibles récurrents)',
          'Identifiez leur vélocité (combien d\'avis/semaine)',
          'Définissez un objectif pour les dépasser sous 6 mois',
        ],
      },
      {
        type: 'heading',
        level: 3,
        content: 'Exercice 4 : Simulation gestion de crise',
      },
      {
        type: 'infobox',
        content: {
          type: 'info',
          title: 'Objectif',
          content: 'Préparer votre réponse à différents scénarios d\'avis difficiles.',
        },
      },
      {
        type: 'text',
        content: 'Rédigez des réponses pour ces 4 scénarios fictifs :',
      },
      {
        type: 'list',
        content: [
          'Avis 1 étoile : "Personnel désagréable et impoli, je ne reviendrai jamais"',
          'Avis 2 étoiles : "Trop cher pour ce que c\'est, déçu"',
          'Avis 1 étoile évident fake : "Jamais allé là-bas mais ça a l\'air nul"',
          'Avis 3 étoiles : "Produit ok mais livraison catastrophique"',
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
          title: 'Quiz : Stratégie d\'avis clients',
          questions: [
            {
              question: 'Quel pourcentage de consommateurs font confiance aux avis en ligne autant qu\'aux recommandations personnelles ?',
              options: [
                '58%',
                '72%',
                '88%',
                '95%',
              ],
              correctIndex: 2,
              explanation: '88% des consommateurs font autant confiance aux avis en ligne qu\'aux recommandations de leurs proches. Les avis sont devenus le bouche-à-oreille digital.',
            },
            {
              question: 'Quelle part les avis représentent-ils dans les facteurs de ranking du Pack Local ?',
              options: [
                '5-7%',
                '15-17%',
                '25-30%',
                '40-45%',
              ],
              correctIndex: 1,
              explanation: 'Les avis représentent environ 15-17% des facteurs de ranking du Pack Local selon les études de BrightLocal et Whitespark.',
            },
            {
              question: 'Quel est le meilleur moment pour demander un avis à un client de restaurant ?',
              options: [
                'Par email le lendemain',
                'À la fin du repas, avant de partir',
                'Une semaine après',
                'Au moment de la réservation suivante',
              ],
              correctIndex: 1,
              explanation: 'Le meilleur moment est à chaud, quand le client est encore dans l\'émotion positive. En restaurant, c\'est à la fin du repas avec un QR code sur l\'addition.',
            },
            {
              question: 'Quelle pratique est interdite par Google pour la collecte d\'avis ?',
              options: [
                'Envoyer un email de demande d\'avis',
                'Afficher un QR code en magasin',
                'Offrir une récompense contre un avis',
                'Demander oralement un avis',
              ],
              correctIndex: 2,
              explanation: 'Google interdit formellement les avis contre rémunération (discount, cadeau, etc.). Cette pratique peut entraîner la suppression de tous vos avis.',
            },
            {
              question: 'En combien de temps devez-vous idéalement répondre à un avis négatif ?',
              options: [
                'Dans l\'heure',
                'Sous 24-48h',
                'Sous une semaine',
                'Pas besoin de répondre aux négatifs',
              ],
              correctIndex: 1,
              explanation: 'Répondez aux avis négatifs sous 24-48h. Une réponse rapide montre que vous prenez les retours au sérieux et limite l\'impact négatif.',
            },
            {
              question: 'Quelle est la meilleure stratégie face à des avis négatifs anciens ?',
              options: [
                'Les ignorer car trop vieux',
                'Les signaler pour suppression',
                'Générer un flux d\'avis positifs récents pour les diluer',
                'Demander aux clients de modifier leur avis',
              ],
              correctIndex: 2,
              explanation: 'La stratégie de dilution est la plus efficace. Un flux constant d\'avis positifs récents réduit l\'impact des négatifs et améliore votre note globale.',
            },
            {
              question: 'Quel élément NE DOIT PAS figurer dans une réponse à un avis négatif ?',
              options: [
                'Des excuses pour l\'expérience négative',
                'Une contestation des faits rapportés',
                'Une invitation à continuer en privé',
                'Vos coordonnées directes',
              ],
              correctIndex: 1,
              explanation: 'Ne contestez jamais publiquement la version du client, même si vous pensez qu\'elle est fausse. Cela vous fait paraître défensif et peu professionnel.',
            },
            {
              question: 'Combien de temps Google met-il généralement pour examiner un avis signalé ?',
              options: [
                '24 heures',
                '3-7 jours',
                '2-3 semaines',
                '1-2 mois',
              ],
              correctIndex: 1,
              explanation: 'Google examine généralement les signalements sous 3 à 7 jours. Les signalements bien documentés avec preuves sont traités plus efficacement.',
            },
            {
              question: 'Quel taux de conversion avis peut-on espérer avec un système de collecte structuré ?',
              options: [
                '5-10%',
                '20-30%',
                '50-60%',
                '70-80%',
              ],
              correctIndex: 1,
              explanation: 'Sans système, seuls 5-10% des clients laissent un avis. Avec un processus structuré (multi-canal, bon timing), vous pouvez atteindre 20-30%.',
            },
            {
              question: 'Pourquoi les avis génèrent-ils un bénéfice SEO au-delà du ranking ?',
              options: [
                'Ils augmentent le temps de chargement',
                'Ils créent du contenu unique avec des mots-clés naturels',
                'Ils génèrent des backlinks',
                'Ils améliorent le Core Web Vitals',
              ],
              correctIndex: 1,
              explanation: 'Les avis génèrent du contenu unique sur votre fiche avec des mots-clés naturellement utilisés par vos clients. Cela enrichit votre pertinence sémantique.',
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
        content: 'Vous maîtrisez maintenant la stratégie d\'avis clients. Combinez cette expertise avec une fiche Google Business Profile optimisée pour dominer les recherches locales.',
      },
      {
        type: 'cta',
        content: {
          title: 'Optimisez votre Google Business Profile',
          description: 'Complétez votre stratégie SEO local avec notre guide complet d\'optimisation GBP.',
          buttonText: 'Voir le guide GBP',
          buttonLink: '/seo-local/google-business-profile',
          variant: 'primary',
        },
      },
    ],
  },
];

export const clusterData: ClusterConfig = {
  slug: 'seo-local',
  name: 'SEO Local',
  description: 'Dominez les recherches locales : Google Business Profile, avis clients, citations. Attirez des clients dans votre zone géographique.',
  metaTitle: 'SEO Local | SEOtika 2026',
  metaDescription: 'Formation complète au SEO local : optimisez votre visibilité pour les recherches de proximité.',
  pillarPage,
  childPages,
  icon: 'MapPin',
  color: 'red',
};

export default clusterData;
