import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Accès gratuit aux fondamentaux",
  "150+ articles et tutoriels",
  "Communauté Discord active",
  "Mises à jour régulières",
];

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à dominer les SERPs ?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Rejoins des milliers de professionnels qui ont choisi SEOtika pour
            se former au référencement naturel moderne.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-sm bg-white/10 rounded-full px-4 py-2"
              >
                <CheckCircle className="h-4 w-4" />
                {benefit}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              variant="secondary"
              asChild
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link href="/formation">
                Commencer gratuitement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              asChild
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Link href="/tarifs">Voir les tarifs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
