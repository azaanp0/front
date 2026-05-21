import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { STORE } from "@/constants/store";
import { mockBrandLogos } from "@/data/fixtures";

export default function BrandsPage() {
  return (
    <>
      <Helmet>
        <title>الماركات | {STORE.name}</title>
      </Helmet>
      <div className="mx-auto max-w-content px-4 py-8">
        <nav className="mb-4 text-sm text-[var(--store-text-secondary)]">
          <Link to="/">الرئيسية</Link>
          <span className="mx-2">/</span>
          <span>الماركات</span>
        </nav>
        <h1 className="mb-2 text-center text-3xl font-bold text-[var(--store-text-primary)]">ماركات {STORE.name}</h1>
        <p className="mb-8 text-center text-[var(--store-text-secondary)]">تسوقي من أشهر ماركات العناية والجمال</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {mockBrandLogos.map((b) => (
            <Link
              key={b.id}
              to={b.href}
              className="flex flex-col items-center gap-3 rounded-xl border border-[var(--product-border-color)] bg-[var(--product-bg)] p-4 transition hover:shadow-[var(--shadow-card-hover)]"
            >
              <img src={b.image} alt={b.name} className="h-16 w-full object-contain" loading="lazy" />
              <span className="text-sm font-semibold text-[var(--store-text-primary)]">{b.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
