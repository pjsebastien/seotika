import {
  BookOpen,
  Search,
  FileText,
  Settings,
  Link as LinkIcon,
  Sparkles,
  DollarSign,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const features = [
  {
    icon: BookOpen,
    title: "Fondamentaux SEO",
    description:
      "Maîtrisez les bases du référencement naturel : fonctionnement de Google, indexation, et les 3 piliers du SEO.",
    href: "/seo-fondamentaux",
    color: "text-blue-600",
  },
  {
    icon: Search,
    title: "Recherche de mots-clés",
    description:
      "Apprenez à identifier les mots-clés rentables et à construire une stratégie sémantique efficace.",
    href: "/recherche-mots-cles",
    color: "text-purple-600",
  },
  {
    icon: FileText,
    title: "SEO On-Page",
    description:
      "Optimisez vos pages : balises title, meta descriptions, structure Hn, et maillage interne.",
    href: "/seo-on-page",
    color: "text-green-600",
  },
  {
    icon: Settings,
    title: "SEO Technique",
    description:
      "Maîtrisez l'aspect technique : vitesse, Core Web Vitals, crawl, indexation et audits.",
    href: "/seo-technique",
    color: "text-orange-600",
  },
  {
    icon: LinkIcon,
    title: "Netlinking",
    description:
      "Développez votre autorité avec des stratégies de link building éthiques et efficaces.",
    href: "/netlinking",
    color: "text-cyan-600",
  },
  {
    icon: Sparkles,
    title: "GEO (Nouveau)",
    description:
      "Préparez-vous au SEO du futur : optimisation pour ChatGPT, Perplexity et les AI Overviews.",
    href: "/geo",
    color: "text-amber-600",
  },
  {
    icon: DollarSign,
    title: "Monétisation",
    description:
      "Transformez votre trafic en revenus : affiliation, vente de liens, publicité et consulting.",
    href: "/monetisation",
    color: "text-emerald-600",
  },
  {
    icon: Zap,
    title: "Automatisation",
    description:
      "Gagnez du temps avec les outils et workflows pour automatiser vos tâches SEO répétitives.",
    href: "/automatisation",
    color: "text-yellow-600",
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Une formation complète pour maîtriser le SEO
          </h2>
          <p className="text-lg text-muted-foreground">
            Du débutant à l'expert, couvrez tous les aspects du référencement
            naturel moderne avec des contenus pratiques et actionnables.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <Link href={feature.href}>
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${feature.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
