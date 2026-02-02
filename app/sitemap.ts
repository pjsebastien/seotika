import { MetadataRoute } from 'next';
import { clusterData as geoCluster } from './geo/_data';

const baseUrl = 'https://www.seotika.com';

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
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  // GEO Cluster pages
  const geoPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/geo`,
      lastModified: new Date(geoCluster.pillarPage.lastUpdated),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...geoCluster.childPages.map((page) => ({
      url: `${baseUrl}/geo/${page.slug}`,
      lastModified: new Date(page.lastUpdated),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];

  // Cluster placeholders (add more as clusters are implemented)
  const clusterPillarPages: MetadataRoute.Sitemap = [
    'seo-fondamentaux',
    'recherche-mots-cles',
    'seo-on-page',
    'seo-technique',
    'redaction-seo',
    'netlinking',
    'seo-ia',
    'outils-seo',
    'monetisation',
    'automatisation',
    'seo-local',
    'seo-ecommerce',
    'seo-video',
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...geoPages, ...clusterPillarPages];
}
