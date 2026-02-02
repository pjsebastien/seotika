import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Download, ArrowRight, FileSpreadsheet, FileCode, Clipboard } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NewsletterForm } from '@/components/conversion/NewsletterForm';

export const metadata: Metadata = {
  title: 'Templates SEO Gratuits 2026 | SEOtika',
  description: 'Téléchargez nos templates SEO gratuits : audit technique, content brief, reporting, et plus. Google Sheets et Notion.',
  alternates: {
    canonical: 'https://www.seotika.com/ressources/templates',
  },
};

const templates = [
  {
    title: 'Template Audit SEO Technique',
    description: 'Modèle complet pour réaliser un audit technique : indexation, performance, mobile, sécurité.',
    format: 'Google Sheets',
    icon: FileSpreadsheet,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950/30',
  },
  {
    title: 'Content Brief SEO',
    description: 'Brief éditorial structuré pour créer du contenu optimisé : mots-clés, structure, intention.',
    format: 'Notion / Google Docs',
    icon: FileText,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
  },
  {
    title: 'Template Reporting SEO',
    description: 'Rapport mensuel pour suivre vos KPIs SEO : trafic, positions, conversions.',
    format: 'Google Sheets',
    icon: FileSpreadsheet,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950/30',
  },
  {
    title: 'Grille d\'Analyse Concurrentielle',
    description: 'Comparez votre site à vos concurrents sur les critères SEO essentiels.',
    format: 'Google Sheets',
    icon: FileSpreadsheet,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-950/30',
  },
  {
    title: 'Template Recherche de Mots-clés',
    description: 'Organisez votre recherche de mots-clés : volume, difficulté, intention, priorité.',
    format: 'Google Sheets',
    icon: FileSpreadsheet,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 dark:bg-pink-950/30',
  },
  {
    title: 'Checklist Migration SEO',
    description: 'Liste de contrôle pour réussir une migration sans perdre de trafic.',
    format: 'Notion / Google Docs',
    icon: Clipboard,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950/30',
  },
  {
    title: 'Template Netlinking',
    description: 'Suivez vos campagnes de link building : prospects, outreach, résultats.',
    format: 'Google Sheets',
    icon: FileSpreadsheet,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
  },
  {
    title: 'Schema.org Generator',
    description: 'Templates de données structurées prêts à l\'emploi pour vos pages.',
    format: 'JSON-LD',
    icon: FileCode,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950/30',
  },
];

export default function TemplatesPage() {
  return (
    <div className="container-custom py-8">
      <Breadcrumb
        items={[
          { label: 'Ressources', href: '/ressources' },
          { label: 'Templates', href: '/ressources/templates' },
        ]}
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="secondary" className="mb-4">Ressources Gratuites</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Templates SEO
        </h1>
        <p className="text-lg text-muted-foreground">
          Gagnez du temps avec nos modèles prêts à l'emploi. Audit, reporting,
          content brief : tout ce dont vous avez besoin pour structurer votre travail SEO.
        </p>
      </div>

      {/* Templates Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
        {templates.map((template) => {
          const Icon = template.icon;
          return (
            <Card key={template.title} className="hover:shadow-md transition-shadow flex flex-col">
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 rounded-lg ${template.bgColor} flex items-center justify-center mb-3`}>
                  <Icon className={`h-6 w-6 ${template.color}`} />
                </div>
                <CardTitle className="text-base">{template.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {template.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {template.format}
                  </Badge>
                  <button className="text-sm text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                    <Download className="h-4 w-4" />
                    Télécharger
                  </button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* How to use */}
      <div className="bg-muted/50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Comment utiliser ces templates</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
              1
            </div>
            <h3 className="font-semibold mb-2">Téléchargez</h3>
            <p className="text-sm text-muted-foreground">
              Cliquez sur le template souhaité pour le copier dans votre Drive ou Notion.
            </p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
              2
            </div>
            <h3 className="font-semibold mb-2">Personnalisez</h3>
            <p className="text-sm text-muted-foreground">
              Adaptez le template à votre projet : ajoutez vos données et critères spécifiques.
            </p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
              3
            </div>
            <h3 className="font-semibold mb-2">Utilisez</h3>
            <p className="text-sm text-muted-foreground">
              Suivez la structure pour réaliser vos audits, briefs ou reportings de manière professionnelle.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="max-w-xl mx-auto mb-16">
        <NewsletterForm
          title="Nouveaux templates chaque mois"
          description="Recevez nos nouveaux templates et ressources directement par email."
          leadMagnet="+ Pack de démarrage offert"
        />
      </div>

      {/* Related Links */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ressources complémentaires</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/ressources/checklist-seo"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Checklist SEO <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/outils-seo"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Outils SEO <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/formation"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Formation complète <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
