import { useTranslation } from "react-i18next";
import { formatPrice } from "@/utils/formatPrice";
import { useLocaleStore } from "@/stores/locale.store";
import { cn } from "@/lib/utils";

export function ProductPrice({
  price_with_tax,
  sale_price_with_tax,
  className,
}: {
  price_with_tax: number;
  sale_price_with_tax?: number;
  className?: string;
}) {
  const { t } = useTranslation();
  const locale = useLocaleStore((s) => s.locale);

  return (
    <div className={cn("price-block", className)}>
      {sale_price_with_tax != null ? (
        <>
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-xl font-bold text-sale">
              {formatPrice(sale_price_with_tax, locale)}
            </span>
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(price_with_tax, locale)}
            </span>
          </div>
          <div className="mt-0.5 text-xs text-gray-500">{t("common.price_includes_tax")}</div>
        </>
      ) : (
        <>
          <span className="text-xl font-bold text-primary">{formatPrice(price_with_tax, locale)}</span>
          <div className="mt-0.5 text-xs text-gray-500">{t("common.price_includes_tax")}</div>
        </>
      )}
    </div>
  );
}
