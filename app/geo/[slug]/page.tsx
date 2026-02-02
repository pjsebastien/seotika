import { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
import { clusterData } from '../_data';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return clusterData.childPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = clusterData.childPages.find((p) => p.slug === params.slug);

  if (!article) {
    return { title: 'Article non trouvé' };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: [article.keyword, ...article.secondaryKeywords],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.lastUpdated,
    },
    alternates: {
      canonical: `https://www.seotika.com/geo/${article.slug}`,
    },
  };
}

export default function GeoArticlePage({ params }: PageProps) {
  const article = clusterData.childPages.find((p) => p.slug === params.slug);

  if (!article) {
    notFound();
  }

  const author = getAuthorBySlug(article.author);
  const jsonLd = generateArticleJsonLd(article, 'geo', author?.name || 'SEOtika');
  const toc = generateTableOfContents(article.content);
  const relatedArticles = getRelatedArticles(article, clusterData, 3);
  const { prev, next } = getPrevNextArticles(article, clusterData);

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
            { label: 'GEO', href: '/geo' },
            { label: article.title, href: `/geo/${article.slug}` },
          ]}
        />

        <div className="grid lg:grid-cols-[1fr_280px] gap-8">
          {/* Main Content */}
          <article>
            <ArticleHeader
              article={article}
              clusterName={clusterData.name}
              clusterSlug={clusterData.slug}
            />

            {/* Content */}
            <div className="prose-custom">
              <ContentRenderer content={article.content} />
            </div>

            {/* FAQ */}
            {article.faq.length > 0 && (
              <FaqAccordion items={article.faq} className="my-12" />
            )}

            {/* Author Card */}
            {author && <AuthorCard author={author} />}

            {/* Related Articles */}
            <RelatedArticles articles={relatedArticles} clusterSlug="geo" />

            {/* Prev/Next Navigation */}
            <nav className="flex items-center justify-between mt-12 pt-8 border-t">
              {prev ? (
                <Link
                  href={`/geo/${prev.slug === 'index' ? '' : prev.slug}`}
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
                  href={`/geo/${next.slug}`}
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

            {/* CTA */}
            <InlineCTA
              title="Approfondissez vos connaissances"
              description="Rejoins la formation complète pour maîtriser le SEO et le GEO."
              buttonText="Voir la formation"
              buttonLink="/formation"
              className="mt-8"
            />
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky-toc space-y-6">
              {/* Table of Contents */}
              {article.tableOfContents && toc.length > 0 && (
                <TableOfContents items={toc} />
              )}

              {/* Newsletter */}
              <NewsletterForm
                title="Newsletter SEO"
                description="Conseils SEO & GEO chaque semaine."
              />

              {/* Back to Cluster */}
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-3">Module GEO</h3>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/geo">Voir tous les articles</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
