import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MessageSquare, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ContactForm } from '@/components/conversion/ContactForm';

export const metadata: Metadata = {
  title: 'Contact - SEOtika',
  description: 'Contactez l\'équipe SEOtika. Nous répondons à vos questions sur nos formations, le SEO, ou pour discuter de partenariats.',
  alternates: {
    canonical: 'https://www.seotika.com/contact',
  },
};

const contactOptions = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Pour toute question générale',
    value: 'contact@seotika.com',
    href: 'mailto:contact@seotika.com',
  },
  {
    icon: MessageSquare,
    title: 'Discord',
    description: 'Rejoins la communauté',
    value: 'discord.gg/seomaster',
    href: 'https://discord.gg/seomaster',
  },
  {
    icon: Clock,
    title: 'Délai de réponse',
    description: 'Nous répondons sous',
    value: '24-48h ouvrées',
  },
];

export default function ContactPage() {
  return (
    <div className="container-custom py-8">
      <Breadcrumb items={[{ label: 'Contact', href: '/contact' }]} />

      {/* Header */}
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contactez-nous
        </h1>
        <p className="text-lg text-muted-foreground">
          Une question sur nos formations ? Besoin d'aide pour choisir ?
          Nous sommes là pour vous accompagner.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12">
        {/* Contact Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Envoyez-nous un message</CardTitle>
              <CardDescription>
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          {contactOptions.map((option) => {
            const Icon = option.icon;
            return (
              <Card key={option.title}>
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{option.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {option.description}
                    </p>
                    {option.href ? (
                      <Link
                        href={option.href}
                        className="text-primary font-medium hover:underline"
                      >
                        {option.value}
                      </Link>
                    ) : (
                      <span className="font-medium">{option.value}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* FAQ Link */}
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Questions fréquentes</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Consultez notre FAQ pour trouver rapidement des réponses à vos questions.
              </p>
              <Link
                href="/ressources/faq"
                className="text-primary font-medium hover:underline"
              >
                Voir la FAQ →
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
