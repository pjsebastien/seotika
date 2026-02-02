import { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Badge } from '@/components/ui/badge';
import { FaqAccordion } from '@/components/content/FaqAccordion';
import { NewsletterForm } from '@/components/conversion/NewsletterForm';

export const metadata: Metadata = {
  title: 'FAQ SEO - Questions Fréquentes | SEOtika',
  description: 'Réponses aux 50+ questions les plus fréquentes sur le SEO. Débutants et experts trouveront des réponses claires.',
  alternates: {
    canonical: 'https://www.seotika.com/ressources/faq',
  },
};

const faqSections = [
  {
    title: 'Questions Générales',
    questions: [
      {
        question: 'Qu\'est-ce que le SEO ?',
        answer: 'Le SEO (Search Engine Optimization) ou référencement naturel est l\'ensemble des techniques visant à améliorer la visibilité d\'un site web dans les résultats de recherche organiques (non payants) de Google et autres moteurs.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats SEO ?',
        answer: 'En général, il faut entre 3 et 6 mois pour voir des résultats significatifs. Cela dépend de nombreux facteurs : concurrence, autorité actuelle du site, qualité du contenu, et efforts déployés.',
      },
      {
        question: 'Le SEO est-il gratuit ?',
        answer: 'Le SEO lui-même ne coûte rien à Google. Cependant, il nécessite du temps, des compétences et souvent des outils payants. C\'est un investissement en ressources plutôt qu\'un coût publicitaire direct.',
      },
      {
        question: 'Quelle est la différence entre SEO et SEA ?',
        answer: 'Le SEO concerne le référencement naturel (résultats organiques), tandis que le SEA (Search Engine Advertising) concerne la publicité payante (Google Ads). Les deux sont complémentaires.',
      },
      {
        question: 'Le SEO est-il mort avec l\'arrivée de l\'IA ?',
        answer: 'Non, le SEO évolue. L\'IA générative crée de nouvelles opportunités avec le GEO (Generative Engine Optimization). Les sites bien référencés sont souvent cités par les IA.',
      },
    ],
  },
  {
    title: 'SEO Technique',
    questions: [
      {
        question: 'Qu\'est-ce que les Core Web Vitals ?',
        answer: 'Les Core Web Vitals sont des métriques Google mesurant l\'expérience utilisateur : LCP (vitesse de chargement), FID/INP (interactivité) et CLS (stabilité visuelle). Ce sont des facteurs de ranking.',
      },
      {
        question: 'Mon site doit-il être en HTTPS ?',
        answer: 'Oui, absolument. HTTPS est un facteur de ranking depuis 2014. Un site non sécurisé sera désavantagé et affichera des avertissements dans les navigateurs.',
      },
      {
        question: 'Comment savoir si mon site est indexé ?',
        answer: 'Tapez "site:votredomaine.com" dans Google pour voir les pages indexées. Utilisez Google Search Console pour un rapport détaillé sur l\'indexation.',
      },
      {
        question: 'Qu\'est-ce qu\'un sitemap et en ai-je besoin ?',
        answer: 'Un sitemap XML est un fichier listant vos pages pour faciliter le crawl par Google. Il est recommandé pour tous les sites, surtout les gros sites ou ceux avec beaucoup de contenu.',
      },
      {
        question: 'Comment améliorer la vitesse de mon site ?',
        answer: 'Optimisez vos images, activez la compression, utilisez un CDN, minimisez CSS/JS, et choisissez un hébergement performant. Testez avec PageSpeed Insights.',
      },
    ],
  },
  {
    title: 'Contenu SEO',
    questions: [
      {
        question: 'Quelle est la longueur idéale d\'un article SEO ?',
        answer: 'Il n\'y a pas de longueur idéale universelle. Écrivez ce qu\'il faut pour couvrir le sujet. Les contenus longs (1500-3000 mots) performent souvent bien, mais la qualité prime sur la quantité.',
      },
      {
        question: 'Combien de fois dois-je utiliser mon mot-clé ?',
        answer: 'Évitez le keyword stuffing. Utilisez votre mot-clé principal naturellement : dans le titre, l\'introduction, quelques sous-titres, et le corps du texte. La densité n\'est plus un critère important.',
      },
      {
        question: 'Puis-je utiliser l\'IA pour créer du contenu SEO ?',
        answer: 'Oui, mais avec modération. Google ne pénalise pas le contenu IA en soi, mais il doit être utile, original et apporter de la valeur. Relisez et enrichissez toujours le contenu généré.',
      },
      {
        question: 'Qu\'est-ce que E-E-A-T ?',
        answer: 'E-E-A-T signifie Experience, Expertise, Authoritativeness, Trustworthiness. Ce sont les critères de qualité de Google. Montrez votre expertise et citez vos sources.',
      },
      {
        question: 'Dois-je mettre à jour mon ancien contenu ?',
        answer: 'Oui ! La mise à jour de contenu existant est souvent plus efficace que créer du nouveau. Actualisez les informations, ajoutez des sections, et rafraîchissez les dates.',
      },
    ],
  },
  {
    title: 'Netlinking',
    questions: [
      {
        question: 'Les backlinks sont-ils toujours importants ?',
        answer: 'Oui, les backlinks restent un facteur de ranking majeur. Ce qui compte, c\'est la qualité : un lien d\'un site autoritaire vaut mieux que 100 liens de mauvaise qualité.',
      },
      {
        question: 'Comment obtenir des backlinks de qualité ?',
        answer: 'Créez du contenu remarquable que les gens veulent partager. Utilisez le guest posting, les relations presse, le link building cassé, et les mentions de marque.',
      },
      {
        question: 'Qu\'est-ce qu\'un lien nofollow ?',
        answer: 'Un lien nofollow indique à Google de ne pas transférer de PageRank. Il a moins de valeur SEO directe mais peut toujours apporter du trafic et de la notoriété.',
      },
      {
        question: 'Dois-je acheter des liens ?',
        answer: 'L\'achat de liens est contre les guidelines Google et risqué. Préférez des méthodes éthiques comme le contenu sponsorisé clairement identifié ou le guest posting.',
      },
    ],
  },
  {
    title: 'SEO Local',
    questions: [
      {
        question: 'Comment apparaître dans Google Maps ?',
        answer: 'Créez et optimisez votre fiche Google Business Profile. Remplissez toutes les informations, ajoutez des photos, répondez aux avis, et publiez régulièrement.',
      },
      {
        question: 'Les avis Google sont-ils importants pour le SEO ?',
        answer: 'Oui, très importants pour le SEO local. La quantité, la qualité et la récence des avis impactent votre visibilité dans le pack local et Google Maps.',
      },
      {
        question: 'Qu\'est-ce que le NAP et pourquoi est-ce important ?',
        answer: 'NAP = Name, Address, Phone. Ces informations doivent être identiques partout sur le web (site, annuaires, réseaux). La cohérence renforce la confiance de Google.',
      },
    ],
  },
  {
    title: 'Outils et Mesure',
    questions: [
      {
        question: 'Quels sont les outils SEO indispensables ?',
        answer: 'Au minimum : Google Search Console (gratuit), Google Analytics, et un outil de suivi de positions. Pour aller plus loin : Semrush, Ahrefs, ou Screaming Frog.',
      },
      {
        question: 'Comment mesurer le succès de ma stratégie SEO ?',
        answer: 'Suivez le trafic organique, les positions sur vos mots-clés cibles, le nombre de pages indexées, les backlinks acquis, et surtout les conversions (leads, ventes).',
      },
      {
        question: 'Google Search Console est-il suffisant ?',
        answer: 'Pour débuter, oui. GSC montre vos performances, erreurs, et opportunités. Pour une analyse concurrentielle ou des audits approfondis, des outils payants sont utiles.',
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="container-custom py-8">
      <Breadcrumb
        items={[
          { label: 'Ressources', href: '/ressources' },
          { label: 'FAQ', href: '/ressources/faq' },
        ]}
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="secondary" className="mb-4">Ressource Gratuite</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          FAQ SEO
        </h1>
        <p className="text-lg text-muted-foreground">
          Réponses aux questions les plus fréquentes sur le référencement naturel.
          Du débutant à l'expert, trouvez des réponses claires et pratiques.
        </p>
      </div>

      {/* FAQ Sections */}
      <div className="max-w-4xl mx-auto mb-16">
        {faqSections.map((section, index) => (
          <section key={section.title} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-primary" />
              {section.title}
            </h2>
            <FaqAccordion items={section.questions} />
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">
          Vous avez d'autres questions ?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Notre formation couvre tous les aspects du SEO en profondeur.
          De la théorie à la pratique, devenez un expert du référencement.
        </p>
        <Link
          href="/formation"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Voir la formation complète
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Newsletter */}
      <div className="max-w-xl mx-auto mb-16">
        <NewsletterForm
          title="Une question chaque semaine"
          description="Recevez chaque semaine une question SEO décortiquée avec des exemples pratiques."
          leadMagnet="+ Checklist SEO offerte"
        />
      </div>

      {/* Related Links */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ressources complémentaires</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/ressources/glossaire"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Glossaire SEO <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/seo-fondamentaux"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Fondamentaux SEO <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Nous contacter <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
