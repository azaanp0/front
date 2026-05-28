import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { Star } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  rating: z.number().min(1).max(5),
  body: z.string().min(10, "التقييم يجب أن يكون أكثر من 10 حروف"),
});

type FormValues = z.infer<typeof schema>;

export function ReviewForm({ onSubmit }: { onSubmit: () => void }) {
  const [hoveredStar, setHoveredStar] = useState(0);
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { rating: 5, body: "" },
  });

  const rating = useWatch({ control, name: "rating", defaultValue: 5 });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          تقييمك للمنتج
        </label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setValue("rating", star)}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(0)}
              className="p-1 focus:outline-none"
            >
              <Star
                className={`h-6 w-6 transition-colors ${
                  star <= (hoveredStar || rating)
                    ? "fill-accent text-accent"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          اكتبي تقييمك
        </label>
        <textarea
          {...register("body")}
          rows={4}
          className="w-full rounded-md border border-gray-300 p-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="حدثينا عن تجربتك مع هذا المنتج..."
        />
        {errors.body && (
          <p className="mt-1 text-xs text-sale">{errors.body.message}</p>
        )}
      </div>

      <Button type="submit" variant="primary" className="w-full">
        إرسال التقييم
      </Button>
    </form>
  );
}
