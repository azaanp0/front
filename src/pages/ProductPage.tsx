import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Share2 } from "lucide-react";
import toast from "react-hot-toast";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import NotFoundPage from "@/pages/NotFoundPage";
import { useProduct } from "@/hooks/useProduct";
import { useLocaleStore } from "@/stores/locale.store";
import { useCartStore } from "@/stores/cart.store";
import { useWishlistStore } from "@/stores/wishlist.store";
import { mockProducts } from "@/data/fixtures";
import { ProductPrice } from "@/components/product/ProductPrice";
import { ProductRating } from "@/components/product/ProductRating";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const tabs = ["description", "how_to_use", "ingredients", "reviews"] as const;

export default function ProductPage() {
  const { slug, productId: _productId } = useParams<{
    slug: string;
    productId: string;
  }>();
  const { t } = useTranslation();
  const locale = useLocaleStore((s) => s.locale);
  const dir = useLocaleStore((s) => s.dir);
  const { data, isLoading, error } = useProduct(slug);
  const [tab, setTab] = useState<(typeof tabs)[number]>("description");
  const [imgIdx, setImgIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const optimisticAdd = useCartStore((s) => s.optimisticAdd);
  const openDrawer = useCartStore((s) => s.openDrawer);
  const toggleWishlist = useWishlistStore((s) => s.toggle);
  const inWishlist = useWishlistStore((s) =>
    data ? s.isInWishlist(data.id) : false,
  );

  const images = useMemo(() => {
    if (!data) return [];
    return data.images?.length ? data.images : [data.primary_image];
  }, [data]);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-content px-4 py-16">
        <div className="h-96 animate-shimmer rounded-[10px]" />
      </div>
    );
  }

  if (error || (!isLoading && !data)) {
    return <NotFoundPage />;
  }

  const name = locale === "ar" ? data.name_ar : data.name_en;
  const brand = locale === "ar" ? data.brand.name_ar : data.brand.name_en;

  const handleAdd = () => {
    const unit = data.sale_price_with_tax ?? data.price_with_tax;
    optimisticAdd({
      id: Date.now(),
      product_id: data.id,
      name_ar: data.name_ar,
      name_en: data.name_en,
      slug_ar: data.slug_ar,
      image: data.primary_image,
      unit_price_with_tax: unit,
      quantity: qty,
    });
    openDrawer();
    toast.success(t("common.added_to_cart"));
  };

  const related = mockProducts(6, `rel-${data.id}`);

  return (
    <>
      <Helmet>
        <title>
          {name} — {brand} — {import.meta.env.VITE_APP_NAME}
        </title>
      </Helmet>
      <div className="mx-auto max-w-content px-4 py-8">
        <nav className="mb-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-secondary">
            {t("common.home")}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-white via-[#fdf8ff] to-[#f4efff] p-4 shadow-[0_32px_90px_rgba(99,102,241,0.12)]">
              <div className="overflow-hidden rounded-[26px] bg-white shadow-[inset_0_0_0_1px_rgba(15,23,42,0.04)]">
                <ResponsiveImage
                  src={images[imgIdx] ?? data.primary_image}
                  alt={name}
                  className="min-h-[420px] h-[min(72vw,640px)] w-full object-cover"
                  width={960}
                  height={760}
                  loading="eager"
                />
              </div>
              {data.is_on_sale && data.discount_percentage ? (
                <span className="absolute start-5 top-5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/25">
                  خصم {data.discount_percentage}%
                </span>
              ) : null}
              <div className="absolute end-5 bottom-5 rounded-3xl bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                صورة كبيرة ومحسّنة للمنتج
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {images.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => setImgIdx(i)}
                  className={cn(
                    "overflow-hidden rounded-[22px] border transition duration-200",
                    i === imgIdx
                      ? "border-primary shadow-[0_0_0_4px_rgba(139,92,246,0.18)]"
                      : "border-gray-200 hover:border-primary",
                  )}
                >
                  <ResponsiveImage
                    src={src}
                    alt={`${name} thumbnail ${i + 1}`}
                    className="h-24 w-full object-cover"
                    width={140}
                    height={140}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
            <p className="mt-3 text-center text-sm text-gray-500" dir="ltr">
              {t("product.image_counter", {
                current: imgIdx + 1,
                total: images.length,
              })}
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {brand} • منتج فاخر
            </p>
            <h1 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">
              {name}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <ProductRating
                average_rating={data.average_rating}
                reviews_count={data.reviews_count}
              />
              <button
                type="button"
                className="text-sm text-primary hover:underline"
              >
                {t("common.write_review")}
              </button>
            </div>
            <div className="mt-5 rounded-3xl bg-gradient-to-r from-white via-purple-50 to-white p-5 shadow-[inset_0_0_0_1px_rgba(139,92,246,0.08)]">
              <ProductPrice
                price_with_tax={data.price_with_tax}
                sale_price_with_tax={data.sale_price_with_tax}
              />
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-600">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                  {data.is_on_sale ? `عرض خاص` : `سعر ممتاز`}
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1">
                  شحن سريع
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1">
                  ضمان الأصالة
                </span>
              </div>
            </div>
            {data.model_number ? (
              <p className="mt-4 text-sm text-gray-600">
                {t("product.model_number")}: {data.model_number}
              </p>
            ) : null}

            {data.variants?.length ? (
              <div className="mt-6">
                <p className="mb-2 text-sm font-semibold text-secondary">
                  {t("product.brand")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.variants.map((v) => (
                    <span
                      key={v.id}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs font-medium"
                    >
                      {v.hex ? (
                        <span
                          className="h-4 w-4 rounded-full border"
                          style={{ backgroundColor: v.hex }}
                        />
                      ) : null}
                      {locale === "ar" ? v.name_ar : v.name_en}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm text-gray-600">{t("product.qty")}</span>
              <div className="flex items-center rounded-md border">
                <button
                  type="button"
                  className="px-3 py-2"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
                <span className="w-10 text-center" dir="ltr">
                  {qty}
                </span>
                <button
                  type="button"
                  className="px-3 py-2"
                  onClick={() => setQty((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <Button
              className="mt-6 w-full max-w-md"
              variant="primary"
              onClick={handleAdd}
            >
              {t("common.add_to_cart")}
            </Button>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className={cn(
                  "text-sm text-primary hover:underline",
                  inWishlist && "font-semibold",
                )}
                onClick={() => toggleWishlist(data.id)}
              >
                {t("product.add_wishlist")}
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-secondary"
              >
                <Share2 className="h-4 w-4" />
                {t("product.share")}
              </button>
            </div>

            {data.badges?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {data.badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-secondary"
                  >
                    {t(`product.${b}`)}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-wrap gap-2 border-b">
            {tabs.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                className={cn(
                  "border-b-2 px-4 py-2 text-sm font-semibold transition",
                  tab === key
                    ? "border-primary text-secondary"
                    : "border-transparent text-gray-500",
                )}
              >
                {t(`product.${key}`)}
              </button>
            ))}
          </div>
          <div className="prose prose-sm mt-6 max-w-none text-gray-700">
            {tab === "description" && (
              <p>
                {locale === "ar" ? data.description_ar : data.description_en}
              </p>
            )}
            {tab === "how_to_use" && <p>{data.how_to_use_ar}</p>}
            {tab === "ingredients" && <p>{data.ingredients_ar}</p>}
            {tab === "reviews" && (
              <ul className="space-y-4">
                {mockReviews.map((r) => (
                  <li
                    key={r.id}
                    className="rounded-[10px] border border-gray-100 bg-white p-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{r.user_name}</span>
                      <span className="text-xs text-gray-500">{r.rating}★</span>
                    </div>
                    <p className="mt-2 text-sm">{r.body}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <section className="mt-16">
          <h2 className="mb-4 text-xl font-bold text-secondary">
            {t("product.related")}
          </h2>
          <ProductCarousel products={related} dir={dir} />
        </section>
      </div>
    </>
  );
}
