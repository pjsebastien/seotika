import { AlertCircle, Info, Lightbulb, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoBoxProps {
  type: "info" | "warning" | "tip" | "success";
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const icons = {
  info: Info,
  warning: AlertCircle,
  tip: Lightbulb,
  success: CheckCircle,
};

const styles = {
  info: "bg-blue-50 border-blue-500 dark:bg-blue-950/50",
  warning: "bg-yellow-50 border-yellow-500 dark:bg-yellow-950/50",
  tip: "bg-green-50 border-green-500 dark:bg-green-950/50",
  success: "bg-emerald-50 border-emerald-500 dark:bg-emerald-950/50",
};

const iconStyles = {
  info: "text-blue-600 dark:text-blue-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  tip: "text-green-600 dark:text-green-400",
  success: "text-emerald-600 dark:text-emerald-400",
};

const defaultTitles = {
  info: "Information",
  warning: "Attention",
  tip: "Astuce",
  success: "Succès",
};

export function InfoBox({ type, title, children, className }: InfoBoxProps) {
  const Icon = icons[type];

  return (
    <div
      className={cn(
        "p-4 rounded-lg border-l-4 my-6",
        styles[type],
        className
      )}
    >
      <div className="flex gap-3">
        <Icon className={cn("h-5 w-5 flex-shrink-0 mt-0.5", iconStyles[type])} />
        <div className="flex-1">
          {title !== null && (
            <p className="font-semibold mb-1">{title || defaultTitles[type]}</p>
          )}
          <div className="text-sm text-muted-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
}
