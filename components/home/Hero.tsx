import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-blue-600/5" />

      <div className="container-custom relative">
        <div className="flex flex-col items-center text-center py-16 md:py-24 lg:py-32">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6">
            <Star className="h-3 w-3 mr-1 fill-yellow-500 text-yellow-500" />
            +5000 SEOs formés en 2025
          </Badge>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mb-6">
            Formation SEO & GEO{" "}
            <span className="text-primary">Gratuite</span>
            <br />
            <span className="gradient-text">à l'Ère de l'IA</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            Apprenez le référencement naturel et l'optimisation pour les moteurs de recherche IA.
            Du SEO traditionnel au GEO (Generative Engine Optimization). 100% gratuit.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="xl" asChild>
              <Link href="/formation">
                Commencer gratuitement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link href="/geo">
                <Play className="mr-2 h-4 w-4" />
                Voir le module GEO
              </Link>
            </Button>
          </div>

          {/* Trust elements */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span>+5000 membres actifs</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-500 text-yellow-500"
                />
              ))}
              <span className="ml-1">4.9/5 (247 avis)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
