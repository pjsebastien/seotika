import { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'Mentions Légales | SEOtika',
  description: 'Mentions légales, conditions d\'utilisation et politique de confidentialité de SEOtika.',
  alternates: {
    canonical: 'https://www.seotika.com/mentions-legales',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'Mentions légales', href: '/mentions-legales' }]} />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2>Éditeur du site</h2>
            <p>
              Le site SEOtika est édité par :<br />
              <strong>SEOtika SAS</strong><br />
              123 Avenue du Digital<br />
              75001 Paris, France<br />
              SIRET : 123 456 789 00012<br />
              Capital social : 10 000 €
            </p>
            <p>
              <strong>Directeur de la publication :</strong> Thomas Dupont<br />
              <strong>Contact :</strong> contact@seotika.com
            </p>
          </section>

          <section className="mb-12">
            <h2>Hébergement</h2>
            <p>
              Ce site est hébergé par :<br />
              <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary">
                https://vercel.com
              </a>
            </p>
          </section>

          <section className="mb-12">
            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur
              et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les
              documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est
              formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section className="mb-12" id="confidentialite">
            <h2>Politique de confidentialité</h2>

            <h3>Données collectées</h3>
            <p>
              Nous collectons les données suivantes lorsque vous utilisez notre site :
            </p>
            <ul>
              <li>Données de navigation (pages visitées, durée des visites)</li>
              <li>Adresse email (si inscription à la newsletter)</li>
              <li>Informations de contact (si formulaire de contact)</li>
            </ul>

            <h3>Utilisation des données</h3>
            <p>
              Vos données sont utilisées pour :
            </p>
            <ul>
              <li>Améliorer l'expérience utilisateur sur le site</li>
              <li>Envoyer notre newsletter (si consentement)</li>
              <li>Répondre à vos demandes de contact</li>
              <li>Établir des statistiques de fréquentation</li>
            </ul>

            <h3>Cookies</h3>
            <p>
              Ce site utilise des cookies pour améliorer votre expérience de navigation.
              Vous pouvez configurer votre navigateur pour refuser les cookies, sachant que
              cela peut limiter certaines fonctionnalités du site.
            </p>

            <h3>Vos droits</h3>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : <strong>privacy@seotika.com</strong>
            </p>
          </section>

          <section className="mb-12">
            <h2>Conditions d'utilisation</h2>
            <p>
              L'utilisation de ce site implique l'acceptation pleine et entière des conditions générales
              d'utilisation décrites ci-dessus. Ces conditions d'utilisation sont susceptibles d'être modifiées
              ou complétées à tout moment.
            </p>
            <p>
              Les utilisateurs du site sont invités à les consulter régulièrement. Ce site est normalement
              accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique
              peut être toutefois décidée par l'éditeur.
            </p>
          </section>

          <section className="mb-12">
            <h2>Limitation de responsabilité</h2>
            <p>
              SEOtika ne pourra être tenu responsable des dommages directs et indirects causés au matériel
              de l'utilisateur, lors de l'accès au site www.seotika.com.
            </p>
            <p>
              SEOtika décline toute responsabilité quant à l'utilisation qui pourrait être faite des
              informations et contenus présents sur ce site.
            </p>
          </section>

          <section className="mb-12">
            <h2>Liens hypertextes</h2>
            <p>
              Ce site peut contenir des liens hypertextes vers d'autres sites. SEOtika n'a pas la possibilité
              de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité
              de ce fait.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Pour toute question relative aux présentes mentions légales ou pour toute demande concernant
              vos données personnelles, vous pouvez nous contacter :
            </p>
            <ul>
              <li>Par email : contact@seotika.com</li>
              <li>Via notre <a href="/contact" className="text-primary">formulaire de contact</a></li>
            </ul>
            <p className="text-sm text-muted-foreground mt-8">
              Dernière mise à jour : Janvier 2026
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
