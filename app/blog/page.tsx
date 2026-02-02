import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NewsletterForm } from '@/components/conversion/NewsletterForm';

export const metadata: Metadata = {
  title: 'Blog SEO - Actualités et Conseils | SEOtika',
  description: 'Articles, actualités et conseils SEO. Restez informé des dernières tendances du référencement naturel et de l\'IA.',
  alternates: {
    canonical: 'https://www.seotika.com/blog',
  },
};

const blogPosts = [
  {
    slug: 'google-update-2026',
    title: 'Google Core Update Janvier 2026 : Ce Qui Change',
    excerpt: 'Analyse complète de la mise à jour de janvier 2026 et son impact sur le classement des sites.',
    date: '2026-01-28',
    readingTime: 8,
    category: 'Actualités',
  },
  {
    slug: 'ia-contenu-seo-2026',
    title: 'IA et Contenu SEO : Les Bonnes Pratiques en 2026',
    excerpt: 'Comment utiliser l\'IA pour créer du contenu qui performe tout en restant authentique.',
    date: '2026-01-25',
    readingTime: 12,
    category: 'Guide',
  },
  {
    slug: 'geo-revolution-recherche',
    title: 'GEO : La Révolution de la Recherche par IA',
    excerpt: 'Comprendre le Generative Engine Optimization et préparer son site pour l\'avenir.',
    date: '2026-01-20',
    readingTime: 10,
    category: 'Tendances',
  },
  {
    slug: 'seo-local-2026',
    title: 'SEO Local en 2026 : Stratégies Gagnantes',
    excerpt: 'Les meilleures pratiques pour dominer les résultats locaux et Google Maps.',
    date: '2026-01-15',
    readingTime: 9,
    category: 'Guide',
  },
  {
    slug: 'core-web-vitals-importance',
    title: 'Core Web Vitals : Pourquoi C\'est Plus Important Que Jamais',
    excerpt: 'L\'expérience utilisateur est devenue un facteur SEO majeur. Voici comment l\'optimiser.',
    date: '2026-01-10',
    readingTime: 7,
    category: 'Technique',
  },
  {
    slug: 'netlinking-ethique',
    title: 'Netlinking Éthique : Construire des Liens en 2026',
    excerpt: 'Stratégies de link building qui fonctionnent sans risquer de pénalité.',
    date: '2026-01-05',
    readingTime: 11,
    category: 'Guide',
  },
];

const categories = ['Tous', 'Actualités', 'Guide', 'Tendances', 'Technique'];

export default function BlogPage() {
  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="secondary" className="mb-4">Blog SEO</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Actualités & Conseils SEO
        </h1>
        <p className="text-lg text-muted-foreground">
          Restez informé des dernières tendances du référencement naturel,
          des mises à jour Google et des stratégies qui fonctionnent en 2026.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === 'Tous' ? 'default' : 'outline'}
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="hover:shadow-md transition-shadow flex flex-col">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  {post.category}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {post.readingTime} min
                </div>
              </div>
              <CardTitle className="text-lg line-clamp-2">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </div>
                <span className="text-sm text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                  Lire
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter */}
      <div className="max-w-xl mx-auto mb-16">
        <NewsletterForm
          title="Recevez nos articles par email"
          description="Un article SEO par semaine, directement dans votre boîte mail."
          leadMagnet="+ Checklist SEO offerte"
        />
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          Envie d'aller plus loin ?
        </h2>
        <p className="text-muted-foreground mb-6">
          Découvrez notre formation complète au SEO et au GEO.
        </p>
        <Link
          href="/formation"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Voir la formation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
