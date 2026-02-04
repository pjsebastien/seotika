'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ArticleHeader } from '@/components/content/ArticleHeader';
import { ContentRenderer } from '@/components/content/ContentRenderer';
import { AuthorCard } from '@/components/content/AuthorCard';
import { FaqAccordion } from '@/components/content/FaqAccordion';
import { RelatedArticles } from '@/components/content/RelatedArticles';
import { TableOfContents } from '@/components/layout/TableOfContents';
import { ProgressBar } from '@/components/layout/ProgressBar';
import { NewsletterForm } from '@/components/conversion/NewsletterForm';
import { InlineCTA } from '@/components/conversion/InlineCTA';
import { Button } from '@/components/ui/button';
import { generateArticleJsonLd, generateTableOfContents } from '@/lib/seo-utils';
import { getAuthorBySlug } from '@/data/authors';
import { getRelatedArticles, getPrevNextArticles } from '@/lib/content-utils';
import { Article, ClusterConfig } from '@/types';

interface ClusterArticlePageProps {
  article: Article;
  cluster: ClusterConfig;
}

export function ClusterArticlePage({ article, cluster }: ClusterArticlePageProps) {
  const author = getAuthorBySlug(article.author);
  const jsonLd = generateArticleJsonLd(article, cluster.slug, author?.name || 'SEOtika');
  const toc = generateTableOfContents(article.content);
  const relatedArticles = getRelatedArticles(article, cluster, 3);
  const { prev, next } = getPrevNextArticles(article, cluster);

  return (
    <>
      <ProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: cluster.name, href: `/${cluster.slug}` },
            { label: article.title, href: `/${cluster.slug}/${article.slug}` },
          ]}
        />

        <div className="grid lg:grid-cols-[1fr_280px] gap-8">
          <article className="min-w-0">
            <ArticleHeader
              article={article}
              clusterName={cluster.name}
              clusterSlug={cluster.slug}
            />

            <div className="prose-custom">
              <ContentRenderer content={article.content} />
            </div>

            {article.faq.length > 0 && (
              <FaqAccordion items={article.faq} className="my-12" />
            )}

            {author && <AuthorCard author={author} />}

            <RelatedArticles articles={relatedArticles} clusterSlug={cluster.slug} />

            <nav className="flex items-center justify-between mt-12 pt-8 border-t">
              {prev ? (
                <Link
                  href={`/${cluster.slug}/${prev.slug === 'index' ? '' : prev.slug}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <div className="text-right">
                    <div className="text-xs">Précédent</div>
                    <div className="font-medium text-foreground line-clamp-1 max-w-[200px]">
                      {prev.title}
                    </div>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  href={`/${cluster.slug}/${next.slug}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div>
                    <div className="text-xs">Suivant</div>
                    <div className="font-medium text-foreground line-clamp-1 max-w-[200px]">
                      {next.title}
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ) : (
                <div />
              )}
            </nav>

            <InlineCTA
              title="Continuez votre apprentissage"
              description="Accédez à toutes les formations SEO et GEO."
              buttonText="Voir la formation"
              buttonLink="/formation"
              className="mt-8"
            />
          </article>

          <aside className="hidden lg:block">
            <div className="sticky-toc space-y-6">
              {article.tableOfContents && toc.length > 0 && (
                <TableOfContents items={toc} />
              )}

              <NewsletterForm
                title="Newsletter SEO"
                description="Conseils SEO chaque semaine."
              />

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-3">Module {cluster.name}</h3>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={`/${cluster.slug}`}>Voir tous les articles</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
