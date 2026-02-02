import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Globe } from "lucide-react";
import { Author } from "@/types";
import { Badge } from "@/components/ui/badge";

interface AuthorCardProps {
  author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="border rounded-lg p-6 my-8 bg-card">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-2xl font-bold">
            {author.name.charAt(0)}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg">{author.name}</h3>
            <Badge variant="secondary">{author.role}</Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{author.bio}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {author.expertise.map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {author.social.twitter && (
              <Link
                href={author.social.twitter}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Twitter de ${author.name}`}
              >
                <Twitter className="h-4 w-4" />
              </Link>
            )}
            {author.social.linkedin && (
              <Link
                href={author.social.linkedin}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn de ${author.name}`}
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            )}
            {author.social.website && (
              <Link
                href={author.social.website}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Site web de ${author.name}`}
              >
                <Globe className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
