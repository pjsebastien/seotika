import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Award, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { formations } from '@/data/formations';
import { testimonials } from '@/data/testimonials';
import { CLUSTERS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Formation SEO Complète - SEOtika',
  description: 'Apprenez le SEO de A à Z avec notre formation complète : du référencement naturel traditionnel au GEO pour les moteurs IA. Commencez gratuitement.',
  alternates: {
    canonical: 'https://www.seotika.com/formation',
  },
};

export default function FormationPage() {
  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'Formation', href: '/formation' }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="secondary" className="mb-4">Formation SEO 2026</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Maîtrisez le SEO de demain
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Une formation complète qui vous emmène du débutant à l'expert,
          en couvrant le SEO traditionnel et les nouvelles techniques GEO.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#modules">
              Commencer gratuitement
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/tarifs">Voir les tarifs</Link>
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="text-center p-6 bg-muted/50 rounded-lg">
          <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold">40h+</div>
          <div className="text-sm text-muted-foreground">De contenu</div>
        </div>
        <div className="text-center p-6 bg-muted/50 rounded-lg">
          <Users className="h-6 w-6 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold">5000+</div>
          <div className="text-sm text-muted-foreground">Apprenants</div>
        </div>
        <div className="text-center p-6 bg-muted/50 rounded-lg">
          <PlayCircle className="h-6 w-6 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold">150+</div>
          <div className="text-sm text-muted-foreground">Articles</div>
        </div>
        <div className="text-center p-6 bg-muted/50 rounded-lg">
          <Award className="h-6 w-6 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold">4.9/5</div>
          <div className="text-sm text-muted-foreground">Note moyenne</div>
        </div>
      </div>

      {/* Modules */}
      <section id="modules" className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Programme de formation
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CLUSTERS.slice(0, 9).map((cluster) => (
            <Card key={cluster.slug} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">
                  <Link
                    href={`/${cluster.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {cluster.name}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/${cluster.slug}`}
                  className="text-sm text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Voir le module
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* What you'll learn */}
      <section className="mb-16 bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Ce que vous allez apprendre
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            'Comprendre le fonctionnement de Google',
            'Trouver les bons mots-clés pour votre activité',
            'Optimiser vos pages pour le référencement',
            'Maîtriser le SEO technique',
            'Créer du contenu qui performe',
            'Développer votre netlinking',
            'Préparer votre site au GEO (IA)',
            'Mesurer et analyser vos résultats',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Choisissez votre niveau
        </h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {formations.map((formation) => (
            <Card
              key={formation.slug}
              className={formation.popular ? 'border-primary shadow-lg' : ''}
            >
              {formation.popular && (
                <div className="text-center py-2 bg-primary text-primary-foreground text-sm font-medium rounded-t-lg">
                  Le plus populaire
                </div>
              )}
              <CardHeader>
                <CardTitle>{formation.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {formation.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">
                  {formation.price === 0 ? 'Gratuit' : `${formation.price}€`}
                </div>
                <Button
                  asChild
                  className="w-full"
                  variant={formation.popular ? 'default' : 'outline'}
                >
                  <Link href="/tarifs">
                    {formation.price === 0 ? 'Commencer' : 'En savoir plus'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Ils ont suivi la formation
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "{testimonial.content}"
                </p>
                <div className="font-medium">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Prêt à commencer ?
        </h2>
        <p className="mb-6 opacity-90 max-w-2xl mx-auto">
          Rejoins des milliers d'apprenants et commence ton parcours SEO aujourd'hui.
          La formation Fondamentaux est 100% gratuite.
        </p>
        <Button
          size="lg"
          variant="secondary"
          asChild
          className="bg-white text-primary hover:bg-white/90"
        >
          <Link href="/seo-fondamentaux">
            Commencer gratuitement
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
