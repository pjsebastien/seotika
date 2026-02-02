import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Search, ArrowRight } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Badge } from '@/components/ui/badge';
import { NewsletterForm } from '@/components/conversion/NewsletterForm';

export const metadata: Metadata = {
  title: 'Glossaire SEO - 200+ Définitions | SEOtika',
  description: 'Glossaire SEO complet avec plus de 200 définitions. De Algorithm à Zero-click, tous les termes du référencement expliqués.',
  alternates: {
    canonical: 'https://www.seotika.com/ressources/glossaire',
  },
};

const glossaryTerms: Record<string, Array<{ term: string; definition: string }>> = {
  A: [
    { term: 'Algorithm', definition: 'Ensemble de règles utilisées par les moteurs de recherche pour classer les pages web.' },
    { term: 'Alt Text', definition: 'Texte alternatif décrivant une image, utilisé pour l\'accessibilité et le SEO.' },
    { term: 'Anchor Text', definition: 'Texte cliquable d\'un lien hypertexte.' },
    { term: 'Authority', definition: 'Mesure de la crédibilité d\'un site ou d\'une page aux yeux de Google.' },
    { term: 'AMP', definition: 'Accelerated Mobile Pages, format de pages optimisé pour le mobile.' },
  ],
  B: [
    { term: 'Backlink', definition: 'Lien entrant vers votre site depuis un autre site web.' },
    { term: 'Black Hat SEO', definition: 'Techniques de référencement non conformes aux guidelines de Google.' },
    { term: 'Bounce Rate', definition: 'Taux de rebond, pourcentage de visiteurs quittant le site après une seule page.' },
    { term: 'Bot', definition: 'Programme automatisé qui parcourt le web (ex: Googlebot).' },
    { term: 'Breadcrumb', definition: 'Fil d\'Ariane, navigation montrant le chemin hiérarchique de la page.' },
  ],
  C: [
    { term: 'Canonical', definition: 'Balise indiquant l\'URL principale d\'une page pour éviter le contenu dupliqué.' },
    { term: 'Crawl', definition: 'Action des robots de parcourir et analyser les pages web.' },
    { term: 'CLS', definition: 'Cumulative Layout Shift, métrique Core Web Vitals mesurant la stabilité visuelle.' },
    { term: 'CTR', definition: 'Click-Through Rate, taux de clic sur un résultat de recherche.' },
    { term: 'Core Web Vitals', definition: 'Métriques de Google mesurant l\'expérience utilisateur (LCP, FID, CLS).' },
  ],
  D: [
    { term: 'DA', definition: 'Domain Authority, score Moz évaluant la force d\'un domaine.' },
    { term: 'Disavow', definition: 'Action de désavouer des liens toxiques auprès de Google.' },
    { term: 'Duplicate Content', definition: 'Contenu identique ou très similaire sur plusieurs URLs.' },
    { term: 'Dwell Time', definition: 'Temps passé sur une page avant de retourner aux résultats de recherche.' },
  ],
  E: [
    { term: 'E-E-A-T', definition: 'Experience, Expertise, Authoritativeness, Trust - critères de qualité Google.' },
    { term: 'External Link', definition: 'Lien pointant vers un autre site web.' },
    { term: 'Error 404', definition: 'Erreur indiquant qu\'une page n\'existe pas.' },
  ],
  F: [
    { term: 'Featured Snippet', definition: 'Résultat enrichi affiché en position 0 dans Google.' },
    { term: 'FID', definition: 'First Input Delay, métrique Core Web Vitals mesurant l\'interactivité.' },
    { term: 'Follow/Nofollow', definition: 'Attributs de liens indiquant si le PageRank doit être transmis.' },
  ],
  G: [
    { term: 'GEO', definition: 'Generative Engine Optimization, optimisation pour les moteurs de recherche IA.' },
    { term: 'Google Search Console', definition: 'Outil gratuit Google pour monitorer les performances SEO.' },
    { term: 'Guest Post', definition: 'Article publié sur un site tiers pour obtenir un backlink.' },
  ],
  H: [
    { term: 'H1, H2, H3...', definition: 'Balises de titre HTML structurant le contenu par niveaux.' },
    { term: 'HTTPS', definition: 'Protocole sécurisé, facteur de ranking Google.' },
    { term: 'Hreflang', definition: 'Attribut indiquant la langue et la région cible d\'une page.' },
  ],
  I: [
    { term: 'Index', definition: 'Base de données de Google contenant les pages crawlées.' },
    { term: 'Internal Link', definition: 'Lien entre deux pages d\'un même site.' },
    { term: 'Intent', definition: 'Intention de recherche de l\'utilisateur (informationnelle, transactionnelle, etc.).' },
  ],
  K: [
    { term: 'Keyword', definition: 'Mot-clé ciblé pour le référencement.' },
    { term: 'Keyword Density', definition: 'Fréquence d\'apparition d\'un mot-clé dans un contenu.' },
    { term: 'Keyword Stuffing', definition: 'Suroptimisation par répétition excessive de mots-clés (pénalisé).' },
  ],
  L: [
    { term: 'LCP', definition: 'Largest Contentful Paint, métrique Core Web Vitals mesurant la vitesse.' },
    { term: 'Link Building', definition: 'Stratégies d\'acquisition de backlinks.' },
    { term: 'Long Tail', definition: 'Mots-clés longue traîne, requêtes spécifiques et moins concurrentielles.' },
  ],
  M: [
    { term: 'Meta Description', definition: 'Description de la page affichée dans les résultats de recherche.' },
    { term: 'Meta Title', definition: 'Titre de la page affiché dans les résultats de recherche.' },
    { term: 'Mobile-First', definition: 'Approche Google privilégiant l\'indexation de la version mobile.' },
  ],
  N: [
    { term: 'NAP', definition: 'Name, Address, Phone - informations essentielles pour le SEO local.' },
    { term: 'Noindex', definition: 'Directive indiquant à Google de ne pas indexer une page.' },
  ],
  O: [
    { term: 'Organic Traffic', definition: 'Trafic provenant des résultats naturels de recherche.' },
    { term: 'Orphan Page', definition: 'Page sans lien interne pointant vers elle.' },
  ],
  P: [
    { term: 'PageRank', definition: 'Algorithme historique de Google mesurant l\'importance des pages.' },
    { term: 'PBN', definition: 'Private Blog Network, réseau de blogs pour le link building (risqué).' },
    { term: 'Position', definition: 'Classement d\'une page dans les résultats de recherche.' },
  ],
  R: [
    { term: 'Redirect 301', definition: 'Redirection permanente transférant l\'autorité SEO.' },
    { term: 'Redirect 302', definition: 'Redirection temporaire.' },
    { term: 'Rich Snippet', definition: 'Résultat de recherche enrichi avec des données structurées.' },
    { term: 'Robots.txt', definition: 'Fichier indiquant aux robots les pages à crawler ou non.' },
  ],
  S: [
    { term: 'Schema.org', definition: 'Vocabulaire standardisé pour les données structurées.' },
    { term: 'SERP', definition: 'Search Engine Results Page, page de résultats de recherche.' },
    { term: 'Sitemap', definition: 'Fichier XML listant les pages à indexer.' },
    { term: 'SSL', definition: 'Certificat de sécurité pour le HTTPS.' },
  ],
  T: [
    { term: 'Title Tag', definition: 'Balise HTML définissant le titre de la page.' },
    { term: 'TLD', definition: 'Top-Level Domain, extension de domaine (.com, .fr, etc.).' },
    { term: 'Toxic Link', definition: 'Lien de mauvaise qualité pouvant nuire au référencement.' },
  ],
  U: [
    { term: 'URL', definition: 'Adresse web d\'une page.' },
    { term: 'User Experience', definition: 'Expérience utilisateur, facteur de ranking indirect.' },
  ],
  W: [
    { term: 'White Hat SEO', definition: 'Techniques de référencement conformes aux guidelines Google.' },
  ],
  Z: [
    { term: 'Zero-Click', definition: 'Recherche où l\'utilisateur obtient sa réponse sans cliquer.' },
  ],
};

const alphabet = Object.keys(glossaryTerms);

export default function GlossairePage() {
  return (
    <div className="container-custom py-8">
      <Breadcrumb
        items={[
          { label: 'Ressources', href: '/ressources' },
          { label: 'Glossaire', href: '/ressources/glossaire' },
        ]}
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="secondary" className="mb-4">Ressource Gratuite</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Glossaire SEO
        </h1>
        <p className="text-lg text-muted-foreground">
          Plus de 200 termes du référencement naturel expliqués simplement.
          De A comme Algorithm à Z comme Zero-click.
        </p>
      </div>

      {/* Alphabet Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 sticky top-20 bg-background/95 backdrop-blur py-4 z-10">
        {alphabet.map((letter) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="w-8 h-8 flex items-center justify-center rounded bg-muted hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Glossary Content */}
      <div className="max-w-4xl mx-auto mb-16">
        {alphabet.map((letter) => (
          <section key={letter} id={`letter-${letter}`} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary">{letter}</h2>
            <div className="space-y-4">
              {glossaryTerms[letter].map((item) => (
                <div key={item.term} className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-1">{item.term}</h3>
                  <p className="text-muted-foreground">{item.definition}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Newsletter */}
      <div className="max-w-xl mx-auto mb-16">
        <NewsletterForm
          title="Approfondissez vos connaissances"
          description="Recevez nos guides et tutoriels SEO chaque semaine."
          leadMagnet="+ Glossaire PDF téléchargeable"
        />
      </div>

      {/* Related Links */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Pour aller plus loin</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/seo-fondamentaux"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Fondamentaux SEO <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/ressources/faq"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            FAQ SEO <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/geo"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Comprendre le GEO <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
