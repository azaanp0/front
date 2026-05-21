import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product.types";

export function ProductBadge({
  product,
  className,
}: {
  product: Pick<
    Product,
    | "is_on_sale"
    | "discount_percentage"
    | "is_new_arrival"
    | "is_trending"
    | "is_bestseller"
    | "is_in_stock"
  >;
  className?: string;
}) {
  const { t } = useTranslation();

  if (!product.is_in_stock) {
    return (
      <span className={cn("rounded-sm bg-gray-200 px-2 py-0.5 text-xs text-gray-600", className)}>
        {t("common.out_of_stock")}
      </span>
    );
  }
  if (product.is_on_sale && product.discount_percentage) {
    return (
      <span className={cn("rounded-sm bg-sale px-2 py-0.5 text-xs font-semibold text-white", className)}>
        {t("product.discount", { percent: product.discount_percentage })}
      </span>
    );
  }
  if (product.is_new_arrival) {
    return (
      <span className={cn("rounded-sm bg-success px-2 py-0.5 text-xs font-semibold text-white", className)}>
        {t("product.badge_new")}
      </span>
    );
  }
  if (product.is_trending) {
    return (
      <span className={cn("rounded-sm bg-primary px-2 py-0.5 text-xs font-semibold text-secondary", className)}>
        {t("product.badge_trend")}
      </span>
    );
  }
  if (product.is_bestseller) {
    return (
      <span className={cn("rounded-sm bg-accent px-2 py-0.5 text-xs font-semibold text-secondary", className)}>
        {t("product.badge_bestseller")}
      </span>
    );
  }
  return null;
}
