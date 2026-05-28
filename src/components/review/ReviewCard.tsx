import { Star, ThumbsUp } from "lucide-react";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { type Review } from "@/types/review.types";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-secondary font-bold">
            {review.user_name.charAt(0)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{review.user_name}</h4>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              {review.created_at}
              {review.is_verified_purchase && (
                <>
                  <span className="mx-1">•</span>
                  <span className="text-success">مشتري مؤكد ✓</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-4 w-4 ${star <= review.rating ? "fill-accent text-accent" : "fill-gray-200 text-gray-200"}`}
            />
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-700 leading-relaxed">{review.body}</p>

      {review.images && review.images.length > 0 && (
        <div className="mt-4 flex gap-2 overflow-x-auto">
          {review.images.map((img, i) => (
            <ResponsiveImage
              key={i}
              src={img}
              alt={`صورة مراجعة ${i + 1}`}
              className="h-16 w-16 rounded-md object-cover border border-gray-100"
              width={64}
              height={64}
              loading="lazy"
            />
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center justify-end">
        <button className="flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50 transition">
          <ThumbsUp className="h-3 w-3" />
          مفيد (0)
        </button>
      </div>
    </div>
  );
}
