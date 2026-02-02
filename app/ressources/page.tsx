import { Metadata } from 'next';
import Link from 'next/link';
import { Download, FileText, BookOpen, HelpCircle, CheckSquare, Wrench } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NewsletterForm } from '@/components/conversion/NewsletterForm';

export const metadata: Metadata = {
  title: 'Ressources SEO Gratuites - SEOtika',
  description: 'Accédez à nos ressources SEO gratuites : checklists, templates, glossaire et FAQ. Tout pour améliorer votre référencement.',
  alternates: {
    canonical: 'https://www.seotika.com/ressources',
  },
};

const resources = [
  {
    title: 'Checklist SEO Complète',
    description: 'Liste de contrôle exhaustive pour auditer et optimiser votre site. 100+ points à vérifier.',
    icon: CheckSquare,
    badge: 'PDF Gratuit',
    color: 'text-green-600',
  },
  {
    title: 'Template Audit SEO',
    description: 'Modèle Google Sheets pour réaliser vos audits SEO techniques de manière structurée.',
    icon: FileText,
    badge: 'Template',
    color: 'text-blue-600',
  },
  {
    title: 'Glossaire SEO',
    description: 'Définitions de tous les termes SEO : de A comme Algorithm à Z comme Zero-click.',
    icon: BookOpen,
    badge: '200+ termes',
    color: 'text-purple-600',
  },
  {
    title: 'FAQ SEO',
    description: 'Réponses aux questions les plus fréquentes sur le référencement naturel.',
    icon: HelpCircle,
    badge: '50+ questions',
    color: 'text-orange-600',
  },
  {
    title: 'Template Content Brief',
    description: 'Modèle de brief éditorial pour créer du contenu SEO de qualité.',
    icon: FileText,
    badge: 'Template',
    color: 'text-pink-600',
  },
  {
    title: 'Guide Outils SEO',
    description: 'Comparatif des meilleurs outils SEO gratuits et payants pour chaque besoin.',
    icon: Wrench,
    badge: 'Guide',
    color: 'text-cyan-600',
  },
];

export default function RessourcesPage() {
  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'Ressources', href: '/ressources' }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="secondary" className="mb-4">Ressources Gratuites</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Ressources SEO
        </h1>
        <p className="text-lg text-muted-foreground">
          Checklists, templates, glossaire : tout ce dont vous avez besoin pour
          améliorer votre référencement. Téléchargement gratuit.
        </p>
      </div>

      {/* Resources Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <Card key={resource.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`h-8 w-8 ${resource.color}`} />
                  <Badge variant="outline">{resource.badge}</Badge>
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {resource.description}
                </p>
                <button className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
                  <Download className="h-4 w-4" />
                  Télécharger
                </button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Newsletter CTA */}
      <div className="max-w-xl mx-auto mb-16">
        <NewsletterForm
          title="Recevez nos ressources en avant-première"
          description="Inscrivez-vous pour recevoir nos nouvelles ressources, guides et templates dès leur publication."
          leadMagnet="+ Checklist SEO offerte"
        />
      </div>

      {/* Clusters Links */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          Explorez nos modules de formation
        </h2>
        <p className="text-muted-foreground mb-6">
          Chaque ressource est complémentaire à nos modules de formation gratuits.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/seo-fondamentaux" className="text-sm text-primary hover:underline">
            Fondamentaux SEO
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link href="/recherche-mots-cles" className="text-sm text-primary hover:underline">
            Mots-clés
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link href="/seo-on-page" className="text-sm text-primary hover:underline">
            SEO On-Page
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link href="/seo-technique" className="text-sm text-primary hover:underline">
            SEO Technique
          </Link>
          <span className="text-muted-foreground">•</span>
          <Link href="/geo" className="text-sm text-primary hover:underline">
            GEO
          </Link>
        </div>
      </section>
    </div>
  );
}
