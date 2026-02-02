import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface InlineCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function InlineCTA({
  title,
  description,
  buttonText,
  buttonLink,
  variant = "primary",
  className,
}: InlineCTAProps) {
  return (
    <div
      className={cn(
        "my-8 p-6 rounded-lg border",
        variant === "primary"
          ? "bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/20"
          : "bg-muted border-border",
        className
      )}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Button asChild className="shrink-0">
          <Link href={buttonLink}>
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
