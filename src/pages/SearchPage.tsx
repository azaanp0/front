import { Helmet } from "react-helmet-async";
import { Form, useSearchParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import { STORE } from "@/constants/store";
import { mockProducts } from "@/data/fixtures";
import { ProductGrid } from "@/components/product/ProductGrid";

export default function SearchPage() {
  const { t } = useTranslation();
  const [params] = useSearchParams();
  const q = params.get("q") ?? "";
  const products = mockProducts(8, q || "search");

  return (
    <>
      <Helmet>
        <title>
          {t("mobile_nav.search")} | {STORE.name}
        </title>
      </Helmet>
      <div className="mx-auto max-w-content px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold text-[var(--store-text-primary)]">{t("mobile_nav.search")}</h1>
        <Form method="get" action="/search" className="relative mx-auto flex max-w-xl gap-2">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute start-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--store-text-secondary)]" />
            <input
              name="q"
              defaultValue={q}
              placeholder={t("common.search_placeholder")}
              aria-label={t("common.search_placeholder")}
              className="w-full rounded-lg border border-[var(--product-border-color)] bg-[var(--bg-primary)] py-3 ps-10 pe-4 text-[var(--store-text-primary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30"
            />
          </div>
          <button type="submit" className="product-enhanced-btn rounded-lg px-6 py-3 text-sm font-semibold">
            {t("mobile_nav.search")}
          </button>
        </Form>
        <p className="mt-6 text-[var(--store-text-secondary)]">
          {q ? `نتائج البحث عن «${q}» — ${products.length} منتج` : "ابدئي بالبحث عن منتج أو ماركة"}
        </p>
        <div className="mt-8">
          <ProductGrid products={products} />
        </div>
        <Link to="/" className="mt-8 inline-block text-[var(--color-primary-dark)] hover:underline">
          {t("common.home")}
        </Link>
      </div>
    </>
  );
}
