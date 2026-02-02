import Link from "next/link";
import { Calendar, Clock, User, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Article } from "@/types";
import { formatDate } from "@/lib/utils";
import { DIFFICULTY_LABELS } from "@/lib/constants";
import { getDifficultyColor } from "@/lib/content-utils";
import { getAuthorName } from "@/data/authors";

interface ArticleHeaderProps {
  article: Article;
  clusterName: string;
  clusterSlug: string;
}

export function ArticleHeader({
  article,
  clusterName,
  clusterSlug,
}: ArticleHeaderProps) {
  const authorName = getAuthorName(article.author);

  return (
    <header className="mb-8">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Badge variant="outline">
          <Link href={`/${clusterSlug}`}>{clusterName}</Link>
        </Badge>
        <Badge className={getDifficultyColor(article.difficulty)}>
          {DIFFICULTY_LABELS[article.difficulty]}
        </Badge>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {article.title}
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground mb-6">
        {article.excerpt}
      </p>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <User className="h-4 w-4" />
          <span>{authorName}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          <time dateTime={article.lastUpdated}>
            Mis à jour le {formatDate(article.lastUpdated)}
          </time>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          <span>{article.readingTime} min de lecture</span>
        </div>
      </div>
    </header>
  );
}
