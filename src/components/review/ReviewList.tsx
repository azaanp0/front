import { ReviewCard } from "./ReviewCard";
import { type Review } from "@/types/review.types";

interface ReviewListProps {
  reviews: Review[];
}

export function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <div className="py-12 text-center text-gray-500">
        لا توجد تقييمات حتى الآن. كوني أول من يقيم هذا المنتج!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
