"use client";

import * as React from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NewsletterFormProps {
  title?: string;
  description?: string;
  leadMagnet?: string;
  className?: string;
}

export function NewsletterForm({
  title = "Rejoins la newsletter SEO",
  description = "Reçois chaque semaine des conseils SEO exclusifs et les dernières actualités du référencement.",
  leadMagnet,
  className,
}: NewsletterFormProps) {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  React.useEffect(() => {
    const subscribed = localStorage.getItem("newsletter_subscribed");
    if (subscribed === "true") {
      setIsSubscribed(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In production, this would be an actual API call
    setStatus("success");
    localStorage.setItem("newsletter_subscribed", "true");
    setIsSubscribed(true);
    setEmail("");
  };

  if (isSubscribed) {
    return (
      <div className={className}>
        <div className="bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
          <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
          <p className="font-medium text-green-800 dark:text-green-200">
            Tu es déjà inscrit(e) à la newsletter !
          </p>
          <p className="text-sm text-green-700 dark:text-green-300 mt-1">
            Vérifie ta boîte mail pour les prochains conseils SEO.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-lg p-6 md:p-8">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-primary/20 rounded-full p-2">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </div>

        {leadMagnet && (
          <p className="text-sm font-medium text-primary mb-4">
            + {leadMagnet}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="ton@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
            className="bg-background"
          />
          <Button
            type="submit"
            className="w-full"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Inscription...
              </>
            ) : (
              "S'inscrire gratuitement"
            )}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground mt-3 text-center">
          Pas de spam. Désinscription en un clic.
        </p>

        {status === "success" && (
          <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/50 rounded-md text-center">
            <p className="text-sm text-green-700 dark:text-green-300">
              Parfait ! Vérifie ta boîte mail pour confirmer ton inscription.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
