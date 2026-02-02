import { Formation } from '@/types';

export const formations: Formation[] = [
  {
    slug: 'seo-fondamentaux',
    title: 'SEO Fondamentaux',
    description: 'Maîtrisez les bases du référencement naturel. Formation idéale pour débuter et comprendre les mécanismes de Google.',
    price: 0,
    duration: '10 heures',
    level: 'debutant',
    modules: [
      {
        title: 'Introduction au SEO',
        lessons: [
          'Qu\'est-ce que le SEO ?',
          'Comment fonctionne Google',
          'Les 3 piliers du référencement',
        ],
      },
      {
        title: 'Recherche de mots-clés',
        lessons: [
          'Comprendre l\'intention de recherche',
          'Trouver les bons mots-clés',
          'Analyser la concurrence',
        ],
      },
      {
        title: 'Optimisation On-Page',
        lessons: [
          'Optimiser vos balises title',
          'Rédiger des meta descriptions',
          'Structurer avec les balises Hn',
        ],
      },
    ],
    features: [
      'Accès illimité au contenu',
      'Quiz de validation',
      'Certificat de completion',
      'Communauté Discord',
    ],
  },
  {
    slug: 'seo-pro',
    title: 'SEO Pro',
    description: 'Formation complète pour devenir un expert SEO. Couvre tous les aspects du référencement moderne incluant le GEO.',
    price: 497,
    originalPrice: 697,
    duration: '40 heures',
    level: 'intermediaire',
    popular: true,
    modules: [
      {
        title: 'SEO Technique Avancé',
        lessons: [
          'Audit technique complet',
          'Optimisation Core Web Vitals',
          'JavaScript SEO',
          'Gestion du crawl budget',
        ],
      },
      {
        title: 'Rédaction SEO Expert',
        lessons: [
          'E-E-A-T en pratique',
          'Optimisation sémantique avancée',
          'Featured Snippets',
          'Content refresh strategy',
        ],
      },
      {
        title: 'Netlinking Avancé',
        lessons: [
          'Stratégies d\'acquisition',
          'Digital PR',
          'Link building scalable',
          'Analyse de profil',
        ],
      },
      {
        title: 'GEO - Generative Engine Optimization',
        lessons: [
          'Comprendre les moteurs IA',
          'Être cité par ChatGPT',
          'Optimiser pour AI Overviews',
          'Fichier llms.txt',
        ],
      },
    ],
    features: [
      'Tout le contenu Fondamentaux',
      '40h de formation avancée',
      'Templates et checklists',
      'Études de cas réelles',
      'Support prioritaire',
      '1 an de mises à jour',
    ],
  },
  {
    slug: 'seo-expert',
    title: 'SEO Expert + Coaching',
    description: 'La formation ultime avec coaching personnalisé. Pour ceux qui veulent des résultats concrets accompagnés par des experts.',
    price: 1497,
    originalPrice: 1997,
    duration: '40h + 6h coaching',
    level: 'avance',
    modules: [
      {
        title: 'Tout le programme SEO Pro',
        lessons: ['Accès complet à SEO Pro'],
      },
      {
        title: 'Coaching personnalisé',
        lessons: [
          '6 heures de coaching individuel',
          'Audit de votre site',
          'Plan d\'action personnalisé',
          'Suivi trimestriel',
        ],
      },
      {
        title: 'Ressources exclusives',
        lessons: [
          'Accès groupe Mastermind',
          'Templates premium',
          'Outils SEO offerts (valeur 500€)',
        ],
      },
    ],
    features: [
      'Tout le contenu SEO Pro',
      '6h de coaching 1-to-1',
      'Audit personnalisé',
      'Accès Mastermind',
      'Outils SEO offerts',
      'Mises à jour à vie',
      'Support VIP',
    ],
  },
];

export function getFormationBySlug(slug: string): Formation | undefined {
  return formations.find((f) => f.slug === slug);
}
