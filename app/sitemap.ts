import { MetadataRoute } from 'next';
import { clusterData as geoCluster } from './geo/_data';
import { clusterData as seoFondamentauxCluster } from './seo-fondamentaux/_data';
import { clusterData as rechercheMotsClesCluster } from './recherche-mots-cles/_data';
import { clusterData as seoOnPageCluster } from './seo-on-page/_data';
import { clusterData as seoTechniqueCluster } from './seo-technique/_data';
import { clusterData as redactionSeoCluster } from './redaction-seo/_data';
import { clusterData as netlinkingCluster } from './netlinking/_data';
import { clusterData as seoIaCluster } from './seo-ia/_data';
import { clusterData as outilsSeoCluster } from './outils-seo/_data';
import { clusterData as monetisationCluster } from './monetisation/_data';
import { clusterData as automatisationCluster } from './automatisation/_data';
import { clusterData as seoLocalCluster } from './seo-local/_data';
import { clusterData as seoEcommerceCluster } from './seo-ecommerce/_data';
import { clusterData as seoVideoCluster } from './seo-video/_data';
import { ClusterConfig } from '@/types';
import { blogPosts } from './blog/_data';

const baseUrl = 'https://www.seotika.com';

// All clusters
const allClusters: ClusterConfig[] = [
  geoCluster,
  seoFondamentauxCluster,
  rechercheMotsClesCluster,
  seoOnPageCluster,
  seoTechniqueCluster,
  redactionSeoCluster,
  netlinkingCluster,
  seoIaCluster,
  outilsSeoCluster,
  monetisationCluster,
  automatisationCluster,
  seoLocalCluster,
  seoEcommerceCluster,
  seoVideoCluster,
];

// Generate sitemap entries for a cluster
function generateClusterPages(cluster: ClusterConfig): MetadataRoute.Sitemap {
  const pillarPage = {
    url: `${baseUrl}/${cluster.slug}`,
    lastModified: new Date(cluster.pillarPage.lastUpdated),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  };

  const childPages = cluster.childPages.map((page) => ({
    url: `${baseUrl}/${cluster.slug}/${page.slug}`,
    lastModified: new Date(page.lastUpdated),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [pillarPage, ...childPages];
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/formation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ressources`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ressources/glossaire`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ressources/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ressources/checklist-seo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ressources/templates`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Generate all cluster pages (pillar + children)
  const clusterPages = allClusters.flatMap(generateClusterPages);

  // Blog article pages
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...clusterPages, ...blogPages];
}
