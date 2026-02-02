import { Metadata } from 'next';
import { ClusterPage } from '@/components/cluster/ClusterPage';
import { clusterData } from './_data';

export const metadata: Metadata = {
  title: clusterData.metaTitle,
  description: clusterData.metaDescription,
  keywords: [clusterData.pillarPage.keyword, ...clusterData.pillarPage.secondaryKeywords],
  openGraph: {
    title: clusterData.pillarPage.title,
    description: clusterData.pillarPage.excerpt,
    type: 'article',
  },
  alternates: {
    canonical: `https://www.seotika.com/${clusterData.slug}`,
  },
};

export default function Page() {
  return <ClusterPage cluster={clusterData} />;
}
