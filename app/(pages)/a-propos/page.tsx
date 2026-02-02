import { Metadata } from 'next';
import Link from 'next/link';
import { Target, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { authors } from '@/data/authors';

export const metadata: Metadata = {
  title: 'À propos - SEOtika',
  description: 'Découvrez l\'équipe derrière SEOtika, la formation SEO francophone de référence. Notre mission, nos valeurs et notre expertise.',
  alternates: {
    canonical: 'https://www.seotika.com/a-propos',
  },
};

const values = [
  {
    icon: Target,
    title: 'Pragmatisme',
    description: 'Des techniques testées et validées sur le terrain, pas de théorie creuse. Chaque conseil est actionnable.',
  },
  {
    icon: Users,
    title: 'Accessibilité',
    description: 'Le SEO expliqué simplement, sans jargon inutile. Du débutant à l\'expert, chacun trouve son niveau.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Contenu de qualité, mis à jour régulièrement. Nous visons l\'excellence dans chaque article.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Toujours à la pointe : GEO, IA, nouvelles tendances. Nous anticipons l\'évolution du SEO.',
  },
];

const stats = [
  { value: '5000+', label: 'SEOs formés' },
  { value: '30+', label: 'Années d\'expérience cumulée' },
  { value: '150+', label: 'Articles et tutoriels' },
  { value: '4.9/5', label: 'Note moyenne' },
];

export default function AProposPage() {
  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'À propos', href: '/a-propos' }]} />

      {/* Header */}
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          La formation SEO francophone de référence
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          SEOtika est né d'une conviction : le SEO mérite une formation
          accessible, pratique et toujours à jour. Nous combinons l'expertise de
          professionnels expérimentés avec une pédagogie claire pour vous
          transmettre les compétences qui comptent vraiment.
        </p>
        <p className="text-lg text-muted-foreground">
          Alors que le paysage de la recherche évolue avec l'IA, nous sommes
          pionniers sur le GEO (Generative Engine Optimization) en France,
          préparant nos membres au SEO de demain.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center p-6 bg-muted/50 rounded-lg">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Mission */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Notre mission</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-muted-foreground mb-4">
              Démocratiser le SEO en proposant une formation complète,
              accessible à tous, qui couvre autant les fondamentaux que les
              techniques avancées.
            </p>
            <p className="text-muted-foreground mb-4">
              Nous croyons que le SEO n'est pas réservé aux grandes entreprises
              avec des budgets conséquents. Avec les bonnes connaissances, tout
              le monde peut améliorer sa visibilité en ligne.
            </p>
            <p className="text-muted-foreground">
              Notre approche : moins de théorie, plus de pratique. Des
              techniques testées, des exemples concrets, des résultats
              mesurables.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-lg p-8">
            <blockquote className="text-lg italic mb-4">
              "Le meilleur SEO, c'est celui qui apporte de la valeur aux
              utilisateurs. Tout le reste découle de ce principe fondamental."
            </blockquote>
            <div className="font-medium">— Thomas Dupont, Fondateur</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Nos valeurs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">L'équipe</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {authors.map((author) => (
            <Card key={author.slug}>
              <CardContent className="pt-6">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {author.name.charAt(0)}
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg">{author.name}</h3>
                  <p className="text-sm text-primary mb-3">{author.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {author.bio}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {author.expertise.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-muted/50 rounded-lg p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Prêt à apprendre le SEO ?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Rejoins des milliers de professionnels qui ont choisi SEOtika pour
          développer leurs compétences en référencement naturel.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/formation">
              Commencer gratuitement
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/tarifs">Voir les tarifs</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
