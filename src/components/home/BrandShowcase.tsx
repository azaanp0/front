import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function BrandShowcase({
  brands,
}: {
  brands: { id: string; name: string; image: string; href: string }[];
}) {
  const { t } = useTranslation();

  return (
    <section className="py-10">
      <div className="mx-auto max-w-content px-4">
        <h2 className="mb-6 text-2xl font-bold text-secondary">{t("home.brands_title")}</h2>
        <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-none">
          {brands.map((b) => (
            <Link
              key={b.id}
              to={b.href}
              className="group flex h-24 min-w-[120px] shrink-0 items-center justify-center rounded-[10px] border border-gray-100 bg-white p-3 grayscale transition hover:grayscale-0"
            >
              <img src={b.image} alt={b.name} className="max-h-14 object-contain" loading="lazy" width={120} height={56} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
