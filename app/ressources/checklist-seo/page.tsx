import { Metadata } from 'next';
import Link from 'next/link';
import { CheckSquare, Download, ArrowRight, Check } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NewsletterForm } from '@/components/conversion/NewsletterForm';

export const metadata: Metadata = {
  title: 'Checklist SEO Complète 2026 - 100+ Points | SEOtika',
  description: 'Téléchargez notre checklist SEO gratuite avec 100+ points de contrôle. Audit technique, on-page, contenu, et netlinking.',
  alternates: {
    canonical: 'https://www.seotika.com/ressources/checklist-seo',
  },
};

const checklistSections = [
  {
    title: 'SEO Technique',
    color: 'text-blue-600',
    items: [
      'Sitemap XML présent et soumis',
      'Robots.txt correctement configuré',
      'HTTPS activé sur tout le site',
      'Temps de chargement < 3 secondes',
      'Core Web Vitals optimisés',
      'Mobile-friendly / Responsive',
      'Pas d\'erreurs 404 internes',
      'Canonicals correctement définis',
      'Structure URL propre et logique',
      'Pagination correcte (rel="next/prev")',
    ],
  },
  {
    title: 'SEO On-Page',
    color: 'text-green-600',
    items: [
      'Balises title uniques et optimisées',
      'Meta descriptions engageantes',
      'Structure Hn hiérarchique (H1-H6)',
      'Un seul H1 par page',
      'URLs descriptives avec mot-clé',
      'Attributs alt sur les images',
      'Liens internes contextuels',
      'Fil d\'Ariane présent',
      'Schema.org implémenté',
      'Open Graph pour les réseaux sociaux',
    ],
  },
  {
    title: 'Contenu',
    color: 'text-purple-600',
    items: [
      'Contenu unique et original',
      'Intention de recherche respectée',
      'Longueur adaptée à la requête',
      'Mots-clés naturellement intégrés',
      'Médias (images, vidéos) optimisés',
      'Mise à jour régulière du contenu',
      'Pas de contenu dupliqué',
      'Contenu E-E-A-T conforme',
      'FAQ pertinente ajoutée',
      'CTA clairs et visibles',
    ],
  },
  {
    title: 'Netlinking',
    color: 'text-orange-600',
    items: [
      'Profil de liens naturel',
      'Backlinks de qualité',
      'Ancres variées et pertinentes',
      'Pas de liens toxiques',
      'Liens internes stratégiques',
      'Guest posting qualitatif',
      'Mentions de marque surveillées',
      'Désaveu de liens si nécessaire',
    ],
  },
];

export default function ChecklistSeoPage() {
  return (
    <div className="container-custom py-8">
      <Breadcrumb
        items={[
          { label: 'Ressources', href: '/ressources' },
          { label: 'Checklist SEO', href: '/ressources/checklist-seo' },
        ]}
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="secondary" className="mb-4">Ressource Gratuite</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Checklist SEO Complète
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Plus de 100 points de contrôle pour auditer et optimiser votre site.
          Technique, on-page, contenu et netlinking couverts.
        </p>
        <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          <Download className="h-5 w-5" />
          Télécharger la checklist PDF
        </button>
      </div>

      {/* Checklist Sections */}
      <div className="grid gap-6 md:grid-cols-2 mb-16">
        {checklistSections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckSquare className={`h-5 w-5 ${section.color}`} />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {section.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 ${section.color} flex-shrink-0`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Download CTA */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Téléchargez la version complète
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          La checklist PDF comprend tous les points détaillés, des explications
          pour chaque élément, et un espace pour noter votre progression.
        </p>
        <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          <Download className="h-5 w-5" />
          Télécharger gratuitement
        </button>
      </div>

      {/* Newsletter */}
      <div className="max-w-xl mx-auto mb-16">
        <NewsletterForm
          title="Recevez nos ressources"
          description="Inscrivez-vous pour recevoir nos nouvelles checklists et templates."
          leadMagnet="Checklist SEO incluse"
        />
      </div>

      {/* Related Links */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ressources complémentaires</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/ressources/templates"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Templates SEO <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/ressources/glossaire"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Glossaire SEO <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/seo-technique"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Formation SEO Technique <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
