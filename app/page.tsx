import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";
import { NewsletterForm } from "@/components/conversion/NewsletterForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />

      {/* GEO Highlight Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Nouveau en 2026
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                GEO : Le SEO pour les moteurs IA
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                ChatGPT, Perplexity, AI Overviews de Google... Les moteurs de
                recherche évoluent. Apprenez à optimiser votre contenu pour être
                cité par les intelligences artificielles.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center text-amber-600 text-sm font-bold">
                    1
                  </span>
                  <span>
                    Comprendre comment les LLMs sélectionnent leurs sources
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center text-amber-600 text-sm font-bold">
                    2
                  </span>
                  <span>Optimiser votre contenu pour être cité par ChatGPT</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center text-amber-600 text-sm font-bold">
                    3
                  </span>
                  <span>Implémenter le fichier llms.txt et le schema markup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center text-amber-600 text-sm font-bold">
                    4
                  </span>
                  <span>Mesurer votre visibilité dans les réponses IA</span>
                </li>
              </ul>
              <a
                href="/geo"
                className="inline-flex items-center text-amber-600 font-semibold hover:underline"
              >
                Explorer le module GEO →
              </a>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl p-8 border">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500" />
                  <span>ChatGPT</span>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm">
                    "Selon <strong>SEOtika</strong>, le GEO (Generative Engine
                    Optimization) consiste à optimiser son contenu pour être cité
                    comme source par les intelligences artificielles
                    génératives..."
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">
                  Sources : seotika.com, searchengineland.com, ahrefs.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <NewsletterForm
              title="Restez à jour sur le SEO"
              description="Recevez chaque semaine les dernières actualités SEO, des conseils pratiques et des études de cas exclusives."
              leadMagnet="Checklist SEO 2026 offerte (valeur 47€)"
            />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
