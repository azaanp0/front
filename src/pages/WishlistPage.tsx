import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Heart } from "lucide-react";
import { STORE } from "@/constants/store";
import { useWishlistStore } from "@/stores/wishlist.store";
import { mockProducts } from "@/data/fixtures";
import { ProductGrid } from "@/components/product/ProductGrid";

export default function WishlistPage() {
  const { t } = useTranslation();
  const productIds = useWishlistStore((s) => s.productIds);
  const all = mockProducts(20, "wishlist");
  const ids = [...productIds];
  const products = ids.length ? all.filter((p) => ids.includes(p.id)) : all.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>
          {t("mobile_nav.wishlist")} | {STORE.name}
        </title>
      </Helmet>
      <div className="mx-auto max-w-content px-4 py-10">
        <div className="mb-8 flex items-center gap-3">
          <Heart className="h-8 w-8 fill-[var(--color-primary)] text-[var(--color-primary)]" />
          <h1 className="text-2xl font-bold text-[var(--store-text-primary)]">{t("mobile_nav.wishlist")}</h1>
        </div>
        {products.length ? (
          <ProductGrid products={products} />
        ) : (
          <div className="py-16 text-center">
            <p className="text-[var(--store-text-secondary)]">{t("common.no_results")}</p>
            <Link to="/" className="product-enhanced-btn mt-6 inline-block rounded-lg px-8 py-3">
              {t("common.home")}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
