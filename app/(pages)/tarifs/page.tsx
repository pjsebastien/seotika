import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { FaqAccordion } from '@/components/content/FaqAccordion';
import { formations } from '@/data/formations';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Tarifs Formation SEO - SEOtika',
  description: 'Découvrez nos formations SEO : de la version gratuite à l\'accompagnement expert. Choisissez le programme adapté à vos objectifs.',
  alternates: {
    canonical: 'https://www.seotika.com/tarifs',
  },
};

const pricingFaq = [
  {
    question: 'Puis-je commencer gratuitement ?',
    answer: 'Oui, la formation Fondamentaux est entièrement gratuite. Elle couvre les bases du SEO et vous permet de valider si notre approche vous convient avant d\'investir dans les formations avancées.',
  },
  {
    question: 'Y a-t-il une garantie satisfait ou remboursé ?',
    answer: 'Oui, toutes nos formations payantes sont garanties 30 jours. Si le contenu ne répond pas à vos attentes, nous vous remboursons intégralement, sans question.',
  },
  {
    question: 'Les mises à jour sont-elles incluses ?',
    answer: 'La formation SEO Pro inclut 1 an de mises à jour gratuites. La formation Expert inclut des mises à jour à vie. Le SEO évolue vite, nous gardons le contenu à jour.',
  },
  {
    question: 'Puis-je payer en plusieurs fois ?',
    answer: 'Oui, nous proposons le paiement en 3x sans frais pour les formations Pro et Expert. L\'option apparaît lors du checkout.',
  },
  {
    question: 'Les formations sont-elles finançables (OPCO, CPF) ?',
    answer: 'Nous travaillons actuellement à l\'obtention des certifications nécessaires. Contactez-nous pour les solutions de financement disponibles.',
  },
];

export default function TarifsPage() {
  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'Tarifs', href: '/tarifs' }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Choisissez votre formation
        </h1>
        <p className="text-lg text-muted-foreground">
          Du débutant souhaitant apprendre les bases à l'expert voulant se perfectionner,
          nous avons une formation adaptée à vos objectifs.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-16">
        {formations.map((formation) => {
          const Icon = formation.slug === 'seo-fondamentaux' ? Star :
                      formation.slug === 'seo-pro' ? Zap : Crown;

          return (
            <Card
              key={formation.slug}
              className={`relative flex flex-col ${
                formation.popular
                  ? 'border-primary shadow-lg scale-105'
                  : ''
              }`}
            >
              {formation.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Le plus populaire
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  formation.popular ? 'bg-primary/10' : 'bg-muted'
                }`}>
                  <Icon className={`h-6 w-6 ${formation.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <CardTitle className="text-xl">{formation.title}</CardTitle>
                <CardDescription>{formation.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="text-center mb-6">
                  {formation.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through mr-2">
                      {formation.originalPrice}€
                    </span>
                  )}
                  <span className="text-4xl font-bold">
                    {formation.price === 0 ? 'Gratuit' : `${formation.price}€`}
                  </span>
                  {formation.price > 0 && (
                    <span className="text-muted-foreground ml-1">TTC</span>
                  )}
                </div>

                <div className="text-sm text-muted-foreground text-center mb-6">
                  {formation.duration} de formation
                </div>

                <ul className="space-y-3">
                  {formation.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className="w-full"
                  variant={formation.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  <Link href={`/formation/${formation.slug}`}>
                    {formation.price === 0 ? 'Commencer gratuitement' : 'Choisir cette formation'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {/* Comparison Table */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Comparatif détaillé
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border border-border bg-muted px-4 py-3 text-left">Fonctionnalité</th>
                <th className="border border-border bg-muted px-4 py-3 text-center">Fondamentaux</th>
                <th className="border border-border bg-primary/10 px-4 py-3 text-center">Pro</th>
                <th className="border border-border bg-muted px-4 py-3 text-center">Expert</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-3">Durée de formation</td>
                <td className="border border-border px-4 py-3 text-center">10h</td>
                <td className="border border-border bg-primary/5 px-4 py-3 text-center">40h</td>
                <td className="border border-border px-4 py-3 text-center">40h + 6h</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-3">Fondamentaux SEO</td>
                <td className="border border-border px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                <td className="border border-border bg-primary/5 px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                <td className="border border-border px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-3">SEO Technique avancé</td>
                <td className="border border-border px-4 py-3 text-center">-</td>
                <td className="border border-border bg-primary/5 px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                <td className="border border-border px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-3">Module GEO complet</td>
                <td className="border border-border px-4 py-3 text-center">-</td>
                <td className="border border-border bg-primary/5 px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                <td className="border border-border px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-3">Templates & checklists</td>
                <td className="border border-border px-4 py-3 text-center">Basic</td>
                <td className="border border-border bg-primary/5 px-4 py-3 text-center">Complet</td>
                <td className="border border-border px-4 py-3 text-center">Premium</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-3">Coaching individuel</td>
                <td className="border border-border px-4 py-3 text-center">-</td>
                <td className="border border-border bg-primary/5 px-4 py-3 text-center">-</td>
                <td className="border border-border px-4 py-3 text-center">6 heures</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-3">Audit personnalisé</td>
                <td className="border border-border px-4 py-3 text-center">-</td>
                <td className="border border-border bg-primary/5 px-4 py-3 text-center">-</td>
                <td className="border border-border px-4 py-3 text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-3">Mises à jour</td>
                <td className="border border-border px-4 py-3 text-center">Limitées</td>
                <td className="border border-border bg-primary/5 px-4 py-3 text-center">1 an</td>
                <td className="border border-border px-4 py-3 text-center">À vie</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-3">Support</td>
                <td className="border border-border px-4 py-3 text-center">Communauté</td>
                <td className="border border-border bg-primary/5 px-4 py-3 text-center">Prioritaire</td>
                <td className="border border-border px-4 py-3 text-center">VIP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Ce qu'en disent nos membres
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.slice(0, 4).map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                <div className="font-medium">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                  {testimonial.company && ` · ${testimonial.company}`}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Questions fréquentes
        </h2>
        <FaqAccordion items={pricingFaq} />
      </section>

      {/* CTA */}
      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Encore des questions ?
        </h2>
        <p className="text-muted-foreground mb-6">
          Notre équipe est disponible pour vous aider à choisir la formation
          adaptée à vos objectifs.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Nous contacter</Link>
        </Button>
      </section>
    </div>
  );
}
