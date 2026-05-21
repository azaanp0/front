import { Heart, ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useLocaleStore } from "@/stores/locale.store";
import { useCartStore } from "@/stores/cart.store";
import { useWishlistStore } from "@/stores/wishlist.store";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product.types";
import { ProductBadge } from "@/components/product/ProductBadge";
import { ProductPrice } from "@/components/product/ProductPrice";
import { ProductRating } from "@/components/product/ProductRating";

export function ProductCard({ product }: { product: Product }) {
  const { t } = useTranslation();
  const locale = useLocaleStore((s) => s.locale);
  const optimisticAdd = useCartStore((s) => s.optimisticAdd);
  const openDrawer = useCartStore((s) => s.openDrawer);
  const toggleWishlist = useWishlistStore((s) => s.toggle);
  const inWishlist = useWishlistStore((s) => s.isInWishlist(product.id));

  const name = locale === "ar" ? product.name_ar : product.name_en;
  const brand = locale === "ar" ? product.brand.name_ar : product.brand.name_en;
  const href = `/${product.slug_ar}/p${product.id}`;

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const unit = product.sale_price_with_tax ?? product.price_with_tax;
    optimisticAdd({
      id: Date.now(),
      product_id: product.id,
      name_ar: product.name_ar,
      name_en: product.name_en,
      slug_ar: product.slug_ar,
      image: product.primary_image,
      unit_price_with_tax: unit,
      quantity: 1,
    });
    openDrawer();
    toast.success(t("common.added_to_cart"), { icon: "✨" });
  };

  return (
    <article className="product-card with-shine-animation sahr-card group relative flex h-full flex-col overflow-hidden">
      <Link to={href} className="flex flex-1 flex-col">
        <div
          className="product-card__image relative overflow-hidden"
          style={{ height: "var(--product-image-height)" }}
        >
          <img
            src={product.primary_image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-[1.06]"
            width={400}
            height={400}
          />
          <div className="absolute start-3 top-3 flex flex-wrap gap-1.5">
            <ProductBadge product={product} />
          </div>
          <div className="absolute end-3 top-3 flex flex-col gap-2">
            <button
              type="button"
              aria-label={inWishlist ? t("common.remove_from_wishlist") : t("common.add_to_wishlist")}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-[var(--shadow-soft)] backdrop-blur-sm transition hover:scale-110",
                inWishlist && "text-[#c0394a]",
              )}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleWishlist(product.id);
              }}
            >
              <Heart className={cn("h-4 w-4", inWishlist && "fill-current")} />
            </button>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-2 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              className="product-enhanced-btn inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold"
              onClick={handleAdd}
            >
              <ShoppingCart className="h-4 w-4" />
              {t("common.add_to_cart")}
            </button>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-[var(--color-primary-reverse)] shadow-md">
              <Eye className="h-4 w-4" />
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary-dark)]">{brand}</p>
          <h3 className="line-clamp-2 min-h-[2.75rem] text-sm font-bold leading-snug text-[var(--store-text-primary)] transition group-hover:text-[var(--color-primary-reverse)]">
            {name}
          </h3>
          <ProductRating average_rating={product.average_rating} reviews_count={product.reviews_count} />
          <ProductPrice price_with_tax={product.price_with_tax} sale_price_with_tax={product.sale_price_with_tax} />
        </div>
      </Link>
      <div className="border-t border-[var(--product-border-color)] p-3 md:hidden">
        <button type="button" className="product-enhanced-btn w-full rounded-xl py-3 text-sm font-bold" onClick={handleAdd}>
          {t("common.add_to_cart")}
        </button>
      </div>
    </article>
  );
}
