import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { STORE } from "@/constants/store";
import { mockProducts } from "@/data/fixtures";
import { ProductGrid } from "@/components/product/ProductGrid";

export default function NewArrivalsPage() {
  const products = mockProducts(16, "new").map((p) => ({ ...p, is_new_arrival: true }));

  return (
    <>
      <Helmet>
        <title>وصل حديثاً | {STORE.name}</title>
      </Helmet>
      <div className="mx-auto max-w-content px-4 py-8">
        <nav className="mb-4 text-sm text-[var(--store-text-secondary)]">
          <Link to="/">الرئيسية</Link>
          <span className="mx-2">/</span>
          <span>وصل حديثاً</span>
        </nav>
        <h1 className="home-block-title mb-8 text-center text-3xl font-bold">وصل حديثاً — {STORE.name}</h1>
        <ProductGrid products={products} />
      </div>
    </>
  );
}
