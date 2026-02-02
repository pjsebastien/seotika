import Link from "next/link";
import { Sparkles, Twitter, Linkedin, Youtube, Mail } from "lucide-react";
import { footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">
                SEO<span className="text-primary">tika</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Formation SEO et GEO gratuite à l'ère de l'IA. Apprenez le
              référencement naturel et l'optimisation pour les moteurs IA.
            </p>
            <div className="flex space-x-4">
              <Link
                href={siteConfig.links.twitter}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.links.youtube}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:contact@seotika.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Formation */}
          <div>
            <h3 className="font-semibold mb-4">Formation</h3>
            <ul className="space-y-3">
              {footerNavigation.formation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="font-semibold mb-4">Ressources</h3>
            <ul className="space-y-3">
              {footerNavigation.ressources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Outils */}
          <div>
            <h3 className="font-semibold mb-4">Outils</h3>
            <ul className="space-y-3">
              {footerNavigation.outils.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {footerNavigation.entreprise.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SEOtika. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link
                href="/mentions-legales"
                className="hover:text-foreground transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/mentions-legales#confidentialite"
                className="hover:text-foreground transition-colors"
              >
                Confidentialité
              </Link>
              <Link
                href="/mentions-legales#cookies"
                className="hover:text-foreground transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
