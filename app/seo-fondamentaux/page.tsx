import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight, Clock, BarChart3 } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ArticleHeader } from '@/components/content/ArticleHeader';
import { AuthorCard } from '@/components/content/AuthorCard';
import { FaqAccordion } from '@/components/content/FaqAccordion';
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
    canonical: 'https://www.seotika.com/seo-fondamentaux',
  },
};

export default function SeoFondamentauxPage() {
  const { pillarPage, childPages } = clusterData;
  const author = getAuthorBySlug(pillarPage.author);
  const jsonLd = generateArticleJsonLd(pillarPage, 'seo-fondamentaux', author?.name || 'SEOtika');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-custom py-8">
        <Breadcrumb items={[{ label: 'Fondamentaux SEO', href: '/seo-fondamentaux' }]} />

        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          <article>
            <ArticleHeader
              article={pillarPage}
              clusterName={clusterData.name}
              clusterSlug={clusterData.slug}
            />

            <div className="my-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl font-semibold">Module Fondamentaux</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Ce module couvre toutes les bases du référencement naturel.
                Idéal pour débuter en SEO et comprendre les mécanismes de Google.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>{childPages.length + 1} articles</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BarChart3 className="h-4 w-4 text-blue-600" />
                  <span>Niveau débutant</span>
                </div>
              </div>
            </div>

            <div className="prose-custom">
              <ContentRenderer content={pillarPage.content} />
            </div>

            <section className="my-12">
              <h2 className="text-2xl font-bold mb-6">
                Articles du module Fondamentaux
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
                          href={`/seo-fondamentaux/${page.slug}`}
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
                        href={`/seo-fondamentaux/${page.slug}`}
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

            <FaqAccordion items={pillarPage.faq} className="my-12" />

            {author && <AuthorCard author={author} />}

            <InlineCTA
              title="Prêt à aller plus loin ?"
              description="Maîtrisez le SEO avancé avec notre formation complète incluant le GEO."
              buttonText="Voir la formation"
              buttonLink="/formation"
            />
          </article>

          <aside className="space-y-6">
            <div className="sticky-toc">
              <NewsletterForm
                title="Newsletter SEO"
                description="Reçois des conseils SEO chaque semaine."
                leadMagnet="Checklist SEO offerte"
                className="mb-6"
              />

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-4">Dans ce module</h3>
                <nav className="space-y-2">
                  {childPages.map((page) => (
                    <Link
                      key={page.slug}
                      href={`/seo-fondamentaux/${page.slug}`}
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
