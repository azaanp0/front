import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export function ProductRating({
  average_rating,
  reviews_count,
  className,
}: {
  average_rating: number;
  reviews_count: number;
  className?: string;
}) {
  const { t } = useTranslation();
  const full = Math.floor(average_rating);
  const half = average_rating - full >= 0.5;

  return (
    <div className={cn("flex flex-wrap items-center gap-1 text-sm text-gray-600", className)}>
      <div className="flex items-center text-accent" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < full || (i === full && half);
          return (
            <Star
              key={i}
              className={cn("h-4 w-4", filled ? "fill-accent text-accent" : "text-gray-300")}
              strokeWidth={1.2}
            />
          );
        })}
      </div>
      <span className="text-xs text-gray-500">{t("common.reviews_count", { count: reviews_count })}</span>
    </div>
  );
}
