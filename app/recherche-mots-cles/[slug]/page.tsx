import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ClusterArticlePage } from '@/components/cluster/ClusterArticlePage';
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
      canonical: `https://www.seotika.com/${clusterData.slug}/${article.slug}`,
    },
  };
}

export default function Page({ params }: PageProps) {
  const article = clusterData.childPages.find((p) => p.slug === params.slug);

  if (!article) {
    notFound();
  }

  return <ClusterArticlePage article={article} cluster={clusterData} />;
}
