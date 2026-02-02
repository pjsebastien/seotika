import Link from 'next/link';
import { Search, Home, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NotFound() {
  return (
    <div className="container-custom py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-8xl font-bold text-muted-foreground/30 mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Page introuvable
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Cette page n'existe pas ou a été déplacée.
          Pas de panique, voici quelques suggestions pour continuer votre apprentissage SEO.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/ressources">
              <Search className="mr-2 h-4 w-4" />
              Rechercher un article
            </Link>
          </Button>
        </div>

        <div className="text-left">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Articles populaires
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">
                  <Link href="/geo" className="hover:text-primary transition-colors">
                    Generative Engine Optimization
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Apprenez à optimiser votre contenu pour ChatGPT et les IA.
                </p>
                <Link
                  href="/geo"
                  className="text-sm text-primary font-medium inline-flex items-center gap-1"
                >
                  Lire l'article <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">
                  <Link href="/seo-fondamentaux" className="hover:text-primary transition-colors">
                    Fondamentaux du SEO
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Les bases du référencement naturel pour bien débuter.
                </p>
                <Link
                  href="/seo-fondamentaux"
                  className="text-sm text-primary font-medium inline-flex items-center gap-1"
                >
                  Lire l'article <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">
                  <Link href="/netlinking" className="hover:text-primary transition-colors">
                    Stratégies de Netlinking
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Comment obtenir des backlinks de qualité.
                </p>
                <Link
                  href="/netlinking"
                  className="text-sm text-primary font-medium inline-flex items-center gap-1"
                >
                  Lire l'article <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">
                  <Link href="/formation" className="hover:text-primary transition-colors">
                    Formation SEO Complète
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Notre programme de formation du débutant à l'expert.
                </p>
                <Link
                  href="/formation"
                  className="text-sm text-primary font-medium inline-flex items-center gap-1"
                >
                  Voir la formation <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
