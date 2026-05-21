import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { mockProducts } from "@/data/fixtures";
import { STORE } from "@/constants/store";
import { ProductGrid } from "@/components/product/ProductGrid";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const title = slug?.replace(/-/g, " ") ?? "الأقسام";
  const products = mockProducts(12, slug ?? "cat");

  return (
    <>
      <Helmet>
        <title>
          {title} | {STORE.name}
        </title>
      </Helmet>
      <div className="mx-auto max-w-content px-4 py-8">
        <nav className="mb-4 text-sm text-[var(--store-text-secondary)]">
          <Link to="/" className="hover:text-[var(--color-primary)]">
            {t("category.breadcrumb_home")}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--store-text-primary)]">{title}</span>
        </nav>
        <h1 className="text-3xl font-bold capitalize text-[var(--store-text-primary)]">{title}</h1>
        <p className="mt-2 text-[var(--store-text-secondary)]">
          {t("category.products_count", { count: products.length })}
        </p>
        <div className="mt-6 flex flex-col gap-8 lg:flex-row">
          <aside className="w-full shrink-0 rounded-xl border border-[var(--product-border-color)] bg-[var(--product-bg)] p-4 lg:w-64">
            <h2 className="font-bold text-[var(--store-text-primary)]">{t("filters.title")}</h2>
            <div className="mt-4 space-y-3">
              <label className="block text-sm text-[var(--store-text-secondary)]">{t("filters.sort_by")}</label>
              <select className="w-full rounded-md border border-[var(--product-border-color)] bg-[var(--bg-primary)] px-2 py-2 text-sm text-[var(--store-text-primary)]">
                <option>{t("filters.sort_options.recommended")}</option>
                <option>{t("filters.sort_options.bestseller")}</option>
                <option>{t("filters.sort_options.price_low")}</option>
              </select>
            </div>
          </aside>
          <div className="flex-1">
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </>
  );
}
