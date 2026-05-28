import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MENU_CATEGORIES, STORE } from "@/constants/store";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export default function CategoriesIndexPage() {
  return (
    <>
      <Helmet>
        <title>الأقسام | {STORE.name}</title>
      </Helmet>
      <div className="mx-auto max-w-content px-4 py-8">
        <h1 className="home-block-title mb-8 text-center text-3xl font-bold text-[var(--store-text-primary)]">
          أقسام {STORE.name}
        </h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {MENU_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className="group flex flex-col items-center gap-3 rounded-xl border border-[var(--product-border-color)] bg-[var(--product-bg)] p-4 transition hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="overflow-hidden rounded-lg">
                <ResponsiveImage
                  src={cat.image}
                  alt={cat.label}
                  className="h-24 w-24 object-contain transition group-hover:scale-110"
                  loading="lazy"
                  width={96}
                  height={96}
                />
              </div>
              <span className="text-center text-sm font-bold text-[var(--store-text-primary)]">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
