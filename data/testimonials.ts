import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sophie Bernard',
    role: 'Fondatrice',
    company: 'NatureBio Shop',
    content: 'Grâce à SEOtika, j\'ai pu faire passer mon e-commerce de 500 à 15 000 visiteurs mensuels en 8 mois. Les formations sont claires, pratiques et vraiment orientées résultats.',
    avatar: '/images/testimonials/sophie.jpg',
    rating: 5,
  },
  {
    id: '2',
    name: 'Pierre Moreau',
    role: 'Consultant Marketing',
    company: 'Digital Agency',
    content: 'La formation sur le GEO m\'a permis de proposer un nouveau service à mes clients. Personne d\'autre en France n\'explique aussi bien ces nouveaux enjeux SEO liés à l\'IA.',
    avatar: '/images/testimonials/pierre.jpg',
    rating: 5,
  },
  {
    id: '3',
    name: 'Camille Dubois',
    role: 'Rédactrice web',
    content: 'Je pensais maîtriser la rédaction SEO, mais j\'ai appris énormément. Les modules sur l\'E-E-A-T et les featured snippets ont transformé ma façon d\'écrire.',
    avatar: '/images/testimonials/camille.jpg',
    rating: 5,
  },
  {
    id: '4',
    name: 'Marc Lambert',
    role: 'Éditeur de sites',
    content: 'Le cluster monétisation vaut son pesant d\'or. J\'ai doublé mes revenus d\'affiliation en appliquant les techniques enseignées sur l\'optimisation des pages commerciales.',
    avatar: '/images/testimonials/marc.jpg',
    rating: 5,
  },
  {
    id: '5',
    name: 'Julie Petit',
    role: 'Responsable SEO',
    company: 'Start-up Tech',
    content: 'Enfin une formation SEO qui ne reste pas en surface. Les explications sur le SEO technique et les Core Web Vitals sont les plus complètes que j\'ai trouvées en français.',
    avatar: '/images/testimonials/julie.jpg',
    rating: 5,
  },
  {
    id: '6',
    name: 'Antoine Roux',
    role: 'Freelance SEO',
    content: 'Le module netlinking est exceptionnel. Des techniques concrètes, des exemples réels, et surtout des résultats. J\'ai décroché mes premiers backlinks DR50+ grâce aux méthodes enseignées.',
    avatar: '/images/testimonials/antoine.jpg',
    rating: 5,
  },
];

export function getRandomTestimonials(count: number = 3): Testimonial[] {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
