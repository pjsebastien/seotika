import { Author } from '@/types';

export const authors: Author[] = [
  {
    slug: 'thomas-dupont',
    name: 'Thomas Dupont',
    role: 'Expert SEO & Fondateur',
    bio: 'Thomas travaille dans le SEO depuis 2012. Il a accompagné plus de 200 entreprises dans leur stratégie de référencement naturel et formé des milliers de professionnels du marketing digital. Spécialisé dans le SEO technique et les nouvelles approches GEO.',
    avatar: '/images/authors/thomas-dupont.jpg',
    social: {
      twitter: 'https://twitter.com/thomasdupont',
      linkedin: 'https://linkedin.com/in/thomasdupont',
      website: 'https://thomasdupont.fr',
    },
    expertise: ['SEO Technique', 'GEO', 'Stratégie de contenu', 'Audit SEO'],
  },
  {
    slug: 'marie-lefevre',
    name: 'Marie Lefèvre',
    role: 'Consultante SEO & Rédactrice',
    bio: 'Marie est spécialisée en rédaction SEO et optimisation de contenu. Ancienne journaliste, elle combine expertise éditoriale et maîtrise des contraintes SEO pour créer du contenu qui performe.',
    avatar: '/images/authors/marie-lefevre.jpg',
    social: {
      twitter: 'https://twitter.com/marielefevre',
      linkedin: 'https://linkedin.com/in/marielefevre',
    },
    expertise: ['Rédaction SEO', 'Content Marketing', 'E-E-A-T', 'Featured Snippets'],
  },
  {
    slug: 'julien-martin',
    name: 'Julien Martin',
    role: 'Expert Netlinking',
    bio: 'Julien est expert en acquisition de liens et stratégies de netlinking. Il gère les campagnes de link building pour des sites générant plusieurs millions de visiteurs mensuels.',
    avatar: '/images/authors/julien-martin.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/julienmartin',
    },
    expertise: ['Netlinking', 'Digital PR', 'Guest Blogging', 'Link Building'],
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((author) => author.slug === slug);
}

export function getAuthorName(slug: string): string {
  const author = getAuthorBySlug(slug);
  return author?.name || 'SEOtika';
}
