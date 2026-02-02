import { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, ArrowRight, Clock, BarChart3 } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ArticleHeader } from '@/components/content/ArticleHeader';
import { AuthorCard } from '@/components/content/AuthorCard';
import { FaqAccordion } from '@/components/content/FaqAccordion';
import { RelatedArticles } from '@/components/content/RelatedArticles';
import { NewsletterForm } from '@/components/conversion/NewsletterForm';
import { InlineCTA } from '@/components/conversion/InlineCTA';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { generateArticleJsonLd } from '@/lib/seo-utils';
import { getAuthorBySlug } from '@/data/authors';
import { DIFFICULTY_LABELS } from '@/lib/constants';
import { clusterData } from './_data';
import { ContentRenderer } from '@/components/content/ContentRenderer';

export const metadata: Metadata = {
  title: clusterData.metaTitle,
  description: clusterData.metaDescription,
  keywords: [clusterData.pillarPage.keyword, ...clusterData.pillarPage.secondaryKeywords],
  openGraph: {
    title: clusterData.pillarPage.title,
    description: clusterData.pillarPage.excerpt,
    type: 'article',
    publishedTime: clusterData.pillarPage.lastUpdated,
  },
  alternates: {
    canonical: `https://www.seotika.com/geo`,
  },
};

export default function GeoPage() {
  const { pillarPage, childPages } = clusterData;
  const author = getAuthorBySlug(pillarPage.author);
  const jsonLd = generateArticleJsonLd(pillarPage, 'geo', author?.name || 'SEOtika');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-custom py-8">
        <Breadcrumb items={[{ label: 'GEO', href: '/geo' }]} />

        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* Main Content */}
          <article>
            <ArticleHeader
              article={pillarPage}
              clusterName={clusterData.name}
              clusterSlug={clusterData.slug}
            />

            {/* Cluster Overview */}
            <div className="my-8 p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 text-amber-600" />
                <h2 className="text-xl font-semibold">Module GEO</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Ce module couvre toutes les techniques de Generative Engine Optimization
                pour optimiser votre visibilité dans les réponses IA.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-amber-600" />
                  <span>{childPages.length + 1} articles</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BarChart3 className="h-4 w-4 text-amber-600" />
                  <span>Niveau intermédiaire</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose-custom">
              <ContentRenderer content={pillarPage.content} />
            </div>

            {/* Child Pages Navigation */}
            <section className="my-12">
              <h2 className="text-2xl font-bold mb-6">
                Articles du module GEO
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {childPages.map((page) => (
                  <Card key={page.slug} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {DIFFICULTY_LABELS[page.difficulty]}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {page.readingTime} min
                        </span>
                      </div>
                      <CardTitle className="text-lg">
                        <Link
                          href={`/geo/${page.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {page.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {page.excerpt}
                      </p>
                      <Link
                        href={`/geo/${page.slug}`}
                        className="text-sm text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Lire l'article
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <FaqAccordion items={pillarPage.faq} className="my-12" />

            {/* Author Card */}
            {author && <AuthorCard author={author} />}

            {/* CTA */}
            <InlineCTA
              title="Prêt à maîtriser le GEO ?"
              description="Rejoins la formation complète et apprends toutes les techniques pour dominer les moteurs IA."
              buttonText="Voir la formation"
              buttonLink="/formation"
            />
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky-toc">
              {/* Newsletter */}
              <NewsletterForm
                title="Newsletter GEO"
                description="Reçois les dernières actualités sur le SEO et l'IA."
                leadMagnet="Checklist GEO offerte"
                className="mb-6"
              />

              {/* Quick Links */}
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-4">Dans ce module</h3>
                <nav className="space-y-2">
                  {childPages.map((page) => (
                    <Link
                      key={page.slug}
                      href={`/geo/${page.slug}`}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                      {page.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
