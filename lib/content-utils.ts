import { Article, ClusterConfig } from '@/types';

// Cache pour les clusters chargés dynamiquement
const clusterCache: Map<string, ClusterConfig> = new Map();

export async function getClusterData(clusterSlug: string): Promise<ClusterConfig | null> {
  if (clusterCache.has(clusterSlug)) {
    return clusterCache.get(clusterSlug)!;
  }

  try {
    // Import dynamique des données du cluster
    const clusterModule = await import(`@/app/${clusterSlug}/_data`);
    const data = clusterModule.default || clusterModule.clusterData;
    clusterCache.set(clusterSlug, data);
    return data;
  } catch {
    return null;
  }
}

export function getArticleBySlug(
  cluster: ClusterConfig,
  slug: string
): Article | null {
  if (cluster.pillarPage.slug === slug) {
    return cluster.pillarPage;
  }
  return cluster.childPages.find((page) => page.slug === slug) || null;
}

export function getAllArticlesFromCluster(cluster: ClusterConfig): Article[] {
  return [cluster.pillarPage, ...cluster.childPages];
}

export function getRelatedArticles(
  currentArticle: Article,
  cluster: ClusterConfig,
  limit: number = 3
): Article[] {
  const allArticles = getAllArticlesFromCluster(cluster);

  // Filtrer l'article actuel et prioriser les articles liés
  const relatedSlugs = currentArticle.relatedSlugs || [];
  const related: Article[] = [];

  // D'abord ajouter les articles explicitement liés
  for (const slug of relatedSlugs) {
    const article = allArticles.find((a) => a.slug === slug);
    if (article && article.slug !== currentArticle.slug) {
      related.push(article);
    }
    if (related.length >= limit) break;
  }

  // Compléter avec d'autres articles du cluster si nécessaire
  if (related.length < limit) {
    for (const article of allArticles) {
      if (
        article.slug !== currentArticle.slug &&
        !related.includes(article)
      ) {
        related.push(article);
      }
      if (related.length >= limit) break;
    }
  }

  return related;
}

export function getPrevNextArticles(
  currentArticle: Article,
  cluster: ClusterConfig
): { prev: Article | null; next: Article | null } {
  const allArticles = getAllArticlesFromCluster(cluster);
  const currentIndex = allArticles.findIndex(
    (a) => a.slug === currentArticle.slug
  );

  return {
    prev: currentIndex > 0 ? allArticles[currentIndex - 1] : null,
    next:
      currentIndex < allArticles.length - 1
        ? allArticles[currentIndex + 1]
        : null,
  };
}

export function getDifficultyColor(
  difficulty: Article['difficulty']
): string {
  switch (difficulty) {
    case 'debutant':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'intermediaire':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'avance':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
}

export function getIntentIcon(intent: Article['intent']): string {
  switch (intent) {
    case 'info':
      return 'BookOpen';
    case 'commercial':
      return 'ShoppingBag';
    case 'transactional':
      return 'CreditCard';
    default:
      return 'FileText';
  }
}
