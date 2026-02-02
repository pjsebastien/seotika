import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  {
    title: 'Apprendre le SEO',
    href: '/seo-fondamentaux',
    children: [
      {
        title: 'Fondamentaux SEO',
        href: '/seo-fondamentaux',
        description: 'Les bases du référencement naturel',
        icon: 'BookOpen',
      },
      {
        title: 'Recherche de mots-clés',
        href: '/recherche-mots-cles',
        description: 'Trouver les bons mots-clés',
        icon: 'Search',
      },
      {
        title: 'SEO On-Page',
        href: '/seo-on-page',
        description: 'Optimiser vos pages',
        icon: 'FileText',
      },
      {
        title: 'SEO Technique',
        href: '/seo-technique',
        description: 'Aspects techniques du SEO',
        icon: 'Settings',
      },
      {
        title: 'Rédaction SEO',
        href: '/redaction-seo',
        description: 'Écrire pour le web',
        icon: 'PenTool',
      },
      {
        title: 'Netlinking',
        href: '/netlinking',
        description: 'Stratégies de liens',
        icon: 'Link',
      },
    ],
  },
  {
    title: 'SEO Avancé',
    href: '/seo-ia',
    children: [
      {
        title: 'SEO & IA',
        href: '/seo-ia',
        description: 'Adapter son SEO à l\'ère de l\'IA',
        icon: 'Bot',
      },
      {
        title: 'GEO',
        href: '/geo',
        description: 'Generative Engine Optimization',
        icon: 'Sparkles',
      },
      {
        title: 'SEO Local',
        href: '/seo-local',
        description: 'Référencement local',
        icon: 'MapPin',
      },
      {
        title: 'SEO E-commerce',
        href: '/seo-ecommerce',
        description: 'Optimiser une boutique',
        icon: 'ShoppingCart',
      },
      {
        title: 'SEO Vidéo',
        href: '/seo-video',
        description: 'YouTube et vidéo',
        icon: 'Video',
      },
      {
        title: 'Automatisation',
        href: '/automatisation',
        description: 'Automatiser le SEO',
        icon: 'Zap',
      },
    ],
  },
  {
    title: 'Monétisation',
    href: '/monetisation',
    children: [
      {
        title: 'Affiliation SEO',
        href: '/monetisation/affiliation-seo',
        description: 'Marketing d\'affiliation',
        icon: 'Users',
      },
      {
        title: 'Services SEO',
        href: '/monetisation/services-seo',
        description: 'Vendre des prestations SEO',
        icon: 'Briefcase',
      },
      {
        title: 'Produits digitaux',
        href: '/monetisation/produits-digitaux',
        description: 'Ebooks, formations, templates',
        icon: 'Package',
      },
    ],
  },
  {
    title: 'Outils',
    href: '/outils-seo',
    children: [
      {
        title: 'Tous les outils',
        href: '/outils-seo',
        description: 'Les meilleurs outils SEO',
        icon: 'Wrench',
      },
      {
        title: 'Google Search Console',
        href: '/outils-seo/google-search-console',
        description: 'Maîtriser la GSC',
        icon: 'BarChart',
      },
      {
        title: 'Outils gratuits',
        href: '/outils-seo/outils-gratuits',
        description: 'Les meilleurs outils gratuits',
        icon: 'Gift',
      },
    ],
  },
  {
    title: 'Ressources',
    href: '/ressources',
    children: [
      {
        title: 'Checklist SEO',
        href: '/ressources/checklist-seo',
        description: 'Checklist complète',
        icon: 'CheckSquare',
      },
      {
        title: 'Templates',
        href: '/ressources/templates',
        description: 'Templates gratuits',
        icon: 'FileCode',
      },
      {
        title: 'Glossaire',
        href: '/ressources/glossaire',
        description: 'Vocabulaire SEO',
        icon: 'Book',
      },
      {
        title: 'FAQ',
        href: '/ressources/faq',
        description: 'Questions fréquentes',
        icon: 'HelpCircle',
      },
      {
        title: 'Blog',
        href: '/blog',
        description: 'Articles et actualités',
        icon: 'Newspaper',
      },
    ],
  },
  {
    title: 'Formation',
    href: '/formation',
  },
];

export const footerNavigation = {
  formation: [
    { title: 'Fondamentaux SEO', href: '/seo-fondamentaux' },
    { title: 'SEO Avancé', href: '/seo-technique' },
    { title: 'GEO', href: '/geo' },
    { title: 'Monétisation', href: '/monetisation' },
    { title: 'Tarifs', href: '/tarifs' },
  ],
  ressources: [
    { title: 'Blog', href: '/blog' },
    { title: 'Glossaire', href: '/ressources/glossaire' },
    { title: 'Checklist SEO', href: '/ressources/checklist-seo' },
    { title: 'Templates', href: '/ressources/templates' },
    { title: 'FAQ', href: '/ressources/faq' },
  ],
  outils: [
    { title: 'Google Search Console', href: '/outils-seo/google-search-console' },
    { title: 'Semrush', href: '/outils-seo/semrush-guide' },
    { title: 'Ahrefs', href: '/outils-seo/ahrefs' },
    { title: 'Outils gratuits', href: '/outils-seo/outils-gratuits' },
  ],
  entreprise: [
    { title: 'À propos', href: '/a-propos' },
    { title: 'Contact', href: '/contact' },
    { title: 'Mentions légales', href: '/mentions-legales' },
    { title: 'Politique de confidentialité', href: '/mentions-legales#confidentialite' },
  ],
};
