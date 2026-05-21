import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ProductGrid } from "@/components/product/ProductGrid";
import { mockProducts } from "@/data/fixtures";

const HAIR = ["مصبوغ", "ويفي", "كيرلي", "أملس", "تجعيد خشن وتالف"] as const;

export function HairTypeSelector() {
  const { t } = useTranslation();
  const products = mockProducts(4, "hair");

  return (
    <section className="bg-[var(--bg-primary)] py-10">
      <div className="mx-auto max-w-content px-4">
        <h2 className="home-block-title mb-2 text-center text-3xl font-bold text-[var(--store-text-primary)] sm:text-4xl">
          {t("home.hair_title")}
        </h2>
        <div className="mx-auto mb-6 h-0 w-28 border-2 border-[var(--color-primary)]" />
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {HAIR.map((label) => (
            <button
              key={label}
              type="button"
              className="rounded-full border border-[var(--color-primary)] bg-[var(--bg-primary)] px-4 py-2 text-sm font-medium text-[var(--store-text-primary)] transition hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-reverse)]"
            >
              {label}
            </button>
          ))}
        </div>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}

const MAKEUP_STEPS = [
  "ترطيب البشرة",
  "برايمر",
  "فاونديشن",
  "كونسيلر",
  "بودرة تثبيت",
  "كونتور",
  "برونزر",
  "بلاشر",
  "هايلايتر",
  "ماسكارا",
  "جل الحواجب",
  "كومبو الشفايف",
  "مثبت مكياج",
] as const;

export function MakeupStepsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-10">
      <div className="mx-auto max-w-content px-4">
        <h2 className="text-center text-3xl font-bold text-[var(--store-text-primary)]">{t("home.makeup_title")}</h2>
        <p className="mb-4 text-center text-[var(--store-text-secondary)]">{t("home.makeup_sub")}</p>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {MAKEUP_STEPS.map((name, i) => (
            <div
              key={name}
              className="flex w-28 shrink-0 flex-col items-center gap-2 rounded-xl border border-[var(--product-border-color)] bg-[var(--product-bg)] p-3 text-center shadow-card"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-[var(--color-primary-reverse)]">
                {i + 1}
              </span>
              <span className="text-xs font-medium leading-snug text-[var(--store-text-primary)]">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function KoreanBeautySection() {
  const { t } = useTranslation();
  const products = mockProducts(6, "kb");

  return (
    <section className="bg-[var(--color-primary-light)]/30 py-10">
      <div className="mx-auto max-w-content px-4">
        <h2 className="home-block-title mb-2 text-center text-3xl font-bold text-[var(--store-text-primary)]">
          {t("home.kbeauty_title")}
        </h2>
        <div className="mx-auto mb-6 h-0 w-28 border-2 border-[var(--color-primary)]" />
        <ProductGrid products={products} />
      </div>
    </section>
  );
}

export function ProductVariantShowcase() {
  const { t } = useTranslation();
  const shades = [
    { name: "BLUEBERRY CHIP", hex: "#6B4C7A", href: "/pastel-lip-liner-1-14g/p175485149" },
    { name: "VINE NUDE", hex: "#A67B5B", href: "/pastel-lip-liner-1-14g/p175485149" },
    { name: "Tanny Chip", hex: "#C68642", href: "/pastel-lip-liner-1-14g/p175485149" },
  ];

  return (
    <section className="py-10">
      <div className="mx-auto max-w-content px-4">
        <h2 className="mb-4 text-center text-2xl font-bold text-[var(--store-text-primary)]">{t("home.lip_showcase")}</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {shades.map((s) => (
            <Link key={s.name} to={s.href} className="flex flex-col items-center gap-2">
              <span
                className="h-14 w-14 rounded-full border-2 border-white shadow-card ring-2 ring-[var(--color-primary)]/30"
                style={{ backgroundColor: s.hex }}
              />
              <span className="text-sm font-semibold text-[var(--store-text-primary)]">{s.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EditorialBanner({ titleKey }: { titleKey: string }) {
  const { t } = useTranslation();
  return (
    <section className="mx-4 mb-8 overflow-hidden rounded-xl bg-[var(--color-primary-reverse)] text-white md:mx-auto md:max-w-content">
      <div className="flex min-h-[160px] items-center bg-gradient-to-l from-[var(--color-primary)]/40 to-transparent px-8 py-10">
        <h2 className="text-2xl font-bold md:text-3xl">{t(titleKey)}</h2>
      </div>
    </section>
  );
}

export function ProductRowSection({ titleKey, seed }: { titleKey: string; seed: string }) {
  const { t } = useTranslation();
  const products = mockProducts(4, seed);
  return (
    <section className="py-6">
      <div className="mx-auto max-w-content px-4">
        <h2 className="home-block-title mb-2 text-center text-2xl font-bold text-[var(--store-text-primary)]">
          {t(titleKey)}
        </h2>
        <div className="mx-auto mb-4 h-0 w-20 border-2 border-[var(--color-primary)]" />
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
