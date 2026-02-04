import Link from 'next/link';
import { ArrowRight, Clock, BarChart3 } from 'lucide-react';
import * as Icons from 'lucide-react';
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
import { ContentRenderer } from '@/components/content/ContentRenderer';
import { ClusterConfig } from '@/types';

interface ClusterPageProps {
  cluster: ClusterConfig;
}

const colorClasses: Record<string, string> = {
  blue: 'from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800',
  purple: 'from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 border-purple-200 dark:border-purple-800',
  green: 'from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800',
  orange: 'from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-orange-200 dark:border-orange-800',
  pink: 'from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 border-pink-200 dark:border-pink-800',
  cyan: 'from-cyan-50 to-sky-50 dark:from-cyan-950/30 dark:to-sky-950/30 border-cyan-200 dark:border-cyan-800',
  violet: 'from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 border-violet-200 dark:border-violet-800',
  amber: 'from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-amber-950/30 border-amber-200 dark:border-amber-800',
  slate: 'from-slate-50 to-gray-50 dark:from-slate-950/30 dark:to-gray-950/30 border-slate-200 dark:border-slate-800',
  emerald: 'from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border-emerald-200 dark:border-emerald-800',
  yellow: 'from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 border-yellow-200 dark:border-yellow-800',
  red: 'from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 border-red-200 dark:border-red-800',
  indigo: 'from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 border-indigo-200 dark:border-indigo-800',
  rose: 'from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 border-rose-200 dark:border-rose-800',
  lime: 'from-lime-50 to-green-50 dark:from-lime-950/30 dark:to-green-950/30 border-lime-200 dark:border-lime-800',
};

const iconColorClasses: Record<string, string> = {
  blue: 'text-blue-600',
  purple: 'text-purple-600',
  green: 'text-green-600',
  orange: 'text-orange-600',
  pink: 'text-pink-600',
  cyan: 'text-cyan-600',
  violet: 'text-violet-600',
  amber: 'text-amber-600',
  slate: 'text-slate-600',
  emerald: 'text-emerald-600',
  yellow: 'text-yellow-600',
  red: 'text-red-600',
  indigo: 'text-indigo-600',
  rose: 'text-rose-600',
  lime: 'text-lime-600',
};

export function ClusterPage({ cluster }: ClusterPageProps) {
  const { pillarPage, childPages } = cluster;
  const author = getAuthorBySlug(pillarPage.author);
  const jsonLd = generateArticleJsonLd(pillarPage, cluster.slug, author?.name || 'SEOtika');

  // Get the icon component dynamically
  const IconComponent = (Icons as unknown as Record<string, typeof Icons.BookOpen>)[cluster.icon] || Icons.BookOpen;
  const bgColorClass = colorClasses[cluster.color] || colorClasses.blue;
  const iconColorClass = iconColorClasses[cluster.color] || iconColorClasses.blue;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-custom py-8">
        <Breadcrumb items={[{ label: cluster.name, href: `/${cluster.slug}` }]} />

        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          <article className="min-w-0">
            <ArticleHeader
              article={pillarPage}
              clusterName={cluster.name}
              clusterSlug={cluster.slug}
            />

            <div className={`my-8 p-6 bg-gradient-to-br ${bgColorClass} rounded-lg border`}>
              <div className="flex items-center gap-3 mb-4">
                <IconComponent className={`h-6 w-6 ${iconColorClass}`} />
                <h2 className="text-xl font-semibold">Module {cluster.name}</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                {cluster.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className={`h-4 w-4 ${iconColorClass}`} />
                  <span>{childPages.length + 1} articles</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BarChart3 className={`h-4 w-4 ${iconColorClass}`} />
                  <span>Niveau {DIFFICULTY_LABELS[pillarPage.difficulty].toLowerCase()}</span>
                </div>
              </div>
            </div>

            <div className="prose-custom">
              <ContentRenderer content={pillarPage.content} />
            </div>

            <section className="my-12">
              <h2 className="text-2xl font-bold mb-6">
                Articles du module {cluster.name}
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
                          href={`/${cluster.slug}/${page.slug}`}
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
                        href={`/${cluster.slug}/${page.slug}`}
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
              description="Accédez à la formation complète pour maîtriser tous les aspects du SEO."
              buttonText="Voir la formation"
              buttonLink="/formation"
            />
          </article>

          <aside className="hidden lg:block space-y-6">
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
                      href={`/${cluster.slug}/${page.slug}`}
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
