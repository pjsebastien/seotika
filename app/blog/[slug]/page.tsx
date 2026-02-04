import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ContentRenderer } from '@/components/content/ContentRenderer';
import { Badge } from '@/components/ui/badge';
import { NewsletterForm } from '@/components/conversion/NewsletterForm';
import { getBlogPostBySlug, getAllBlogSlugs } from '../_data';
import { getAuthorBySlug } from '@/data/authors';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Article non trouvé' };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.seotika.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const author = getAuthorBySlug(post.author);

  return (
    <div className="container-custom py-8">
      <Breadcrumb
        items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <div className="grid lg:grid-cols-[1fr_280px] gap-8">
        <article className="min-w-0">
          {/* Header */}
          <header className="mb-8">
            <Badge variant="outline" className="mb-3">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {author && (
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  <span>{author.name}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min de lecture</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose-custom">
            <ContentRenderer content={post.content} />
          </div>

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour au blog
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky-toc space-y-6">
            <NewsletterForm
              title="Newsletter SEO"
              description="Un article SEO par semaine dans votre boîte mail."
              leadMagnet="+ Checklist SEO offerte"
            />

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-3">Formations populaires</h3>
              <nav className="space-y-2">
                <Link href="/seo-fondamentaux" className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                  SEO Fondamentaux
                </Link>
                <Link href="/geo" className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                  GEO - Optimisation IA
                </Link>
                <Link href="/seo-technique" className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                  SEO Technique
                </Link>
                <Link href="/netlinking" className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                  Netlinking
                </Link>
                <Link href="/outils-seo" className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                  Outils SEO
                </Link>
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
