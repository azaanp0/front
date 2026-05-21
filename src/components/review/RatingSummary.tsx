import { Star } from "lucide-react";

interface RatingSummaryProps {
  averageRating: number;
  totalReviews: number;
  ratingCounts: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

export function RatingSummary({ averageRating, totalReviews, ratingCounts }: RatingSummaryProps) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-12 rounded-xl bg-white p-6 shadow-sm border border-gray-100">
      <div className="text-center sm:text-start">
        <h2 className="text-4xl font-bold text-gray-900">{averageRating.toFixed(1)}</h2>
        <div className="mt-2 flex items-center justify-center gap-1 sm:justify-start">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-5 w-5 ${star <= Math.round(averageRating) ? "fill-accent text-accent" : "fill-gray-200 text-gray-200"}`}
            />
          ))}
        </div>
        <p className="mt-1 text-sm text-gray-500">من أصل {totalReviews} تقييم</p>
      </div>

      <div className="flex-1 space-y-2">
        {[5, 4, 3, 2, 1].map((stars) => {
          const count = ratingCounts[stars as keyof typeof ratingCounts] || 0;
          const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
          return (
            <div key={stars} className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-sm font-medium text-gray-700 w-12">
                {stars} <Star className="h-3 w-3 fill-gray-400 text-gray-400" />
              </span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full bg-accent transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-xs text-gray-500 w-8 text-right">{count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
