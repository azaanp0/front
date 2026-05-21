import { useTranslation } from "react-i18next";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import type { Product } from "@/types/product.types";

export function FlashDealsSection({
  endsAt,
  products,
  dir,
}: {
  endsAt: string;
  products: Product[];
  dir: "rtl" | "ltr";
}) {
  const { t } = useTranslation();

  return (
    <section className="bg-primary-50 py-10">
      <div className="mx-auto max-w-content px-4">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-2xl font-bold text-secondary">{t("home.flash_title")}</h2>
          <CountdownTimer endsAt={endsAt} />
        </div>
        <ProductCarousel products={products} dir={dir} />
      </div>
    </section>
  );
}
