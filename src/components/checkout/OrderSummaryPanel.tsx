import { useTranslation } from "react-i18next";
import { useCartStore } from "@/stores/cart.store";
import { formatPrice } from "@/utils/formatters";
import { useLocaleStore } from "@/stores/locale.store";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function OrderSummaryPanel() {
  const { t } = useTranslation();
  const locale = useLocaleStore((s) => s.locale);
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.subtotal);
  const total = useCartStore((s) => s.total);

  return (
    <div className="sticky top-24 rounded-xl bg-white p-6 shadow-sm border border-gray-100">
      <h3 className="mb-4 text-lg font-bold text-gray-900">{t("cart.title", { count: items.length })}</h3>
      
      <div className="mb-6 max-h-[300px] overflow-y-auto pr-2 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4">
            <img
              src={item.image}
              alt={locale === "ar" ? item.name_ar : item.name_en}
              className="h-16 w-12 rounded-md object-cover border border-gray-100"
            />
            <div className="flex-1">
              <p className="text-sm font-medium line-clamp-2 text-gray-900">
                {locale === "ar" ? item.name_ar : item.name_en}
              </p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {t("product.qty")}: {item.quantity}
                </span>
                <span className="text-sm font-bold text-primary">
                  {formatPrice(item.unit_price_with_tax * item.quantity, locale)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6 flex gap-2">
        <Input placeholder={t("cart.coupon_placeholder")} className="flex-1" />
        <Button variant="outline">{t("common.apply")}</Button>
      </div>

      <div className="space-y-3 border-t pt-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>{t("cart.subtotal")}</span>
          <span>{formatPrice(subtotal, locale)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{t("cart.shipping")}</span>
          <span className="text-success">{t("common.free_shipping")}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{t("checkout.tax", { percent: 15 })}</span>
          <span>{t("common.price_includes_tax")}</span>
        </div>
        <div className="flex justify-between border-t pt-3 text-lg font-bold text-gray-900">
          <span>{t("cart.total")}</span>
          <span>{formatPrice(total, locale)}</span>
        </div>
      </div>
    </div>
  );
}
