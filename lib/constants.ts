import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'SEOtika',
  description: 'Formation SEO et GEO gratuite à l\'ère de l\'IA. Apprenez le référencement naturel et l\'optimisation pour les moteurs de recherche IA. Cours complets, guides pratiques.',
  url: 'https://www.seotika.com',
  ogImage: 'https://www.seotika.com/og/default.png',
  links: {
    twitter: 'https://twitter.com/seotika',
    linkedin: 'https://linkedin.com/company/seotika',
    youtube: 'https://youtube.com/@seotika',
  },
};

export const CLUSTERS = [
  { slug: 'seo-fondamentaux', name: 'Fondamentaux SEO', icon: 'BookOpen', color: 'blue' },
  { slug: 'recherche-mots-cles', name: 'Recherche de mots-clés', icon: 'Search', color: 'purple' },
  { slug: 'seo-on-page', name: 'SEO On-Page', icon: 'FileText', color: 'green' },
  { slug: 'seo-technique', name: 'SEO Technique', icon: 'Settings', color: 'orange' },
  { slug: 'redaction-seo', name: 'Rédaction SEO', icon: 'PenTool', color: 'pink' },
  { slug: 'netlinking', name: 'Netlinking', icon: 'Link', color: 'cyan' },
  { slug: 'seo-ia', name: 'SEO & IA', icon: 'Bot', color: 'violet' },
  { slug: 'geo', name: 'GEO', icon: 'Sparkles', color: 'amber' },
  { slug: 'outils-seo', name: 'Outils SEO', icon: 'Wrench', color: 'slate' },
  { slug: 'monetisation', name: 'Monétisation', icon: 'DollarSign', color: 'emerald' },
  { slug: 'automatisation', name: 'Automatisation', icon: 'Zap', color: 'yellow' },
  { slug: 'seo-local', name: 'SEO Local', icon: 'MapPin', color: 'red' },
  { slug: 'seo-ecommerce', name: 'SEO E-commerce', icon: 'ShoppingCart', color: 'indigo' },
  { slug: 'seo-video', name: 'SEO Vidéo', icon: 'Video', color: 'rose' },
] as const;

export const DIFFICULTY_LABELS = {
  debutant: 'Débutant',
  intermediaire: 'Intermédiaire',
  avance: 'Avancé',
} as const;

export const INTENT_LABELS = {
  info: 'Informationnel',
  commercial: 'Commercial',
  transactional: 'Transactionnel',
} as const;
