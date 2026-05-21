import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { STORE } from "@/constants/store";
import { mockProducts } from "@/data/fixtures";
import { ProductGrid } from "@/components/product/ProductGrid";

export default function BestsellersPage() {
  const products = mockProducts(16, "bestsellers");

  return (
    <>
      <Helmet>
        <title>الأكثر مبيعاً | {STORE.name}</title>
      </Helmet>
      <div className="mx-auto max-w-content px-4 py-8">
        <nav className="mb-4 text-sm text-[var(--store-text-secondary)]">
          <Link to="/">الرئيسية</Link>
          <span className="mx-2">/</span>
          <span>الأكثر مبيعاً</span>
        </nav>
        <h1 className="home-block-title mb-8 text-center text-3xl font-bold">الأكثر مبيعاً في {STORE.name}</h1>
        <ProductGrid products={products} />
      </div>
    </>
  );
}
