import { AnimatePresence, motion } from "framer-motion";
import { X, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { useCartStore } from "@/stores/cart.store";
import { useLocaleStore } from "@/stores/locale.store";
import { formatPrice } from "@/utils/formatPrice";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const { t } = useTranslation();
  const dir = useLocaleStore((s) => s.dir);
  const locale = useLocaleStore((s) => s.locale);
  const open = useCartStore((s) => s.isDrawerOpen);
  const close = useCartStore((s) => s.closeDrawer);
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.subtotal);
  const shipping = useCartStore((s) => s.shipping);
  const total = useCartStore((s) => s.total);
  const setQty = useCartStore((s) => s.setQuantity);
  const remove = useCartStore((s) => s.optimisticRemove);

  const closedX = dir === "rtl" ? "-100%" : "100%";

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label={t("common.close")}
            className="fixed inset-0 z-[60] bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          <motion.aside
            initial={{ x: closedX }}
            animate={{ x: 0 }}
            exit={{ x: closedX }}
            transition={{ type: "spring", damping: 26 }}
            className="fixed inset-y-0 end-0 z-[70] flex h-full w-full max-w-md flex-col bg-white shadow-modal"
          >
            <div className="flex items-center justify-between border-b px-4 py-3">
              <h2 className="text-lg font-bold text-secondary">
                {t("cart.title", {
                  count: items.reduce((a, i) => a + i.quantity, 0),
                })}
              </h2>
              <button
                type="button"
                onClick={close}
                aria-label={t("common.close")}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
                <ShoppingBagIllustration />
                <p className="text-lg font-semibold text-secondary">
                  {t("cart.empty")}
                </p>
                <p className="text-sm text-gray-500">{t("cart.empty_desc")}</p>
                <Link to="/" onClick={close}>
                  <Button variant="primary">{t("common.home")}</Button>
                </Link>
              </div>
            ) : (
              <>
                <ul className="flex-1 divide-y overflow-y-auto">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-3 p-4">
                      <ResponsiveImage
                        src={item.image}
                        alt={locale === "ar" ? item.name_ar : item.name_en}
                        className="h-20 w-16 shrink-0 rounded-md object-cover"
                        width={64}
                        height={80}
                        loading="lazy"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-2 text-sm font-medium text-gray-900">
                          {locale === "ar" ? item.name_ar : item.name_en}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-primary">
                          {formatPrice(item.unit_price_with_tax, locale)}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            className="rounded border px-2 py-0.5 text-sm"
                            onClick={() => setQty(item.id, item.quantity - 1)}
                          >
                            −
                          </button>
                          <span className="w-6 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            className="rounded border px-2 py-0.5 text-sm"
                            onClick={() => setQty(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                          <button
                            type="button"
                            className="ms-auto text-gray-400 hover:text-sale"
                            aria-label={t("common.delete")}
                            onClick={() => remove(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="border-t bg-gray-50 p-4 text-sm">
                  <div className="flex justify-between py-1">
                    <span>{t("cart.subtotal")}</span>
                    <span>{formatPrice(subtotal, locale)}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>{t("cart.shipping")}</span>
                    <span>
                      {shipping === 0
                        ? t("common.free_shipping")
                        : formatPrice(shipping, locale)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    {t("cart.tax_included_note")}
                  </p>
                  <div className="mt-2 flex justify-between text-base font-bold text-secondary">
                    <span>{t("cart.total")}</span>
                    <span>{formatPrice(total, locale)}</span>
                  </div>
                  <Link to="/checkout" onClick={close} className="mt-4 block">
                    <Button className="w-full" variant="primary">
                      {t("cart.checkout")}
                    </Button>
                  </Link>
                  <Button
                    className="mt-2 w-full"
                    variant="ghost"
                    onClick={close}
                  >
                    {t("cart.continue_shopping")}
                  </Button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

function ShoppingBagIllustration() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 24 24"
      fill="none"
      className="text-primary"
      aria-hidden
    >
      <path
        d="M6 7h15l-1.5 12h-12L6 7zm3-3a3 3 0 0 1 6 0v1H9V4z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
