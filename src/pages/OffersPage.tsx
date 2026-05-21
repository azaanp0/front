import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { STORE } from "@/constants/store";
import { mockProducts } from "@/data/fixtures";
import { ProductGrid } from "@/components/product/ProductGrid";

export default function OffersPage() {
  const products = mockProducts(16, "offers").map((p) => ({
    ...p,
    is_on_sale: true,
    sale_price_with_tax: (p.sale_price_with_tax ?? p.price_with_tax) * 0.85,
    discount_percentage: 15,
  }));

  return (
    <>
      <Helmet>
        <title>العروض | {STORE.name}</title>
      </Helmet>
      <div className="mx-auto max-w-content px-4 py-8">
        <nav className="mb-4 text-sm text-[var(--store-text-secondary)]">
          <Link to="/" className="hover:text-[var(--color-primary)]">
            الرئيسية
          </Link>
          <span className="mx-2">/</span>
          <span>العروض</span>
        </nav>
        <div className="home-block-title mb-8 text-center">
          <h1 className="text-3xl font-bold text-[var(--store-text-primary)] sm:text-4xl">عروض {STORE.name}</h1>
          <div className="mx-auto my-2 h-0 w-28 border-2 border-[var(--color-primary)]" />
          <p className="text-[var(--store-text-secondary)]">خصومات حصرية على آلاف المنتجات</p>
        </div>
        <ProductGrid products={products} />
      </div>
    </>
  );
}
