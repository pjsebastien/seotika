import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Article } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DIFFICULTY_LABELS } from "@/lib/constants";

interface RelatedArticlesProps {
  articles: Article[];
  clusterSlug: string;
}

export function RelatedArticles({ articles, clusterSlug }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6">Articles connexes</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Card key={article.slug} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="text-xs">
                  {DIFFICULTY_LABELS[article.difficulty]}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {article.readingTime} min
                </span>
              </div>
              <CardTitle className="text-lg">
                <Link
                  href={`/${clusterSlug}/${article.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {article.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {article.excerpt}
              </p>
              <Link
                href={`/${clusterSlug}/${article.slug}`}
                className="text-sm text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                Lire l'article
                <ArrowRight className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
