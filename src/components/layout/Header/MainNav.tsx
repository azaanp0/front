import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NAV_KEYS = [
  "free_delivery",
  "offers50",
  "half_price",
  "one_plus_one",
  "free_gifts",
  "bundle_offers",
  "makeup",
  "care",
  "kbeauty",
  "hair",
  "body",
  "nails",
  "nail_polish",
  "oral",
  "vitamins",
  "gifts",
] as const;

export function MainNav() {
  const { t } = useTranslation();

  return (
    <nav
      className="main-nav hidden border-t border-[var(--product-border-color)]/60 bg-[var(--bg-elevated)]/50 md:block"
      aria-label="تصفح الأقسام"
    >
      <div className="mx-auto flex max-w-content items-center gap-2 overflow-x-auto px-3 py-2.5 scrollbar-none lg:px-4">
        <Link
          to="/offers"
          className="sahr-pill shrink-0 !bg-gradient-to-r !from-[var(--color-primary-reverse)] !to-[var(--color-primary-dark)] !text-white"
        >
          ✨ العروض
        </Link>
        {NAV_KEYS.map((key) => (
          <Link
            key={key}
            to={`/category/${key}`}
            className="sahr-pill shrink-0 whitespace-nowrap text-xs lg:text-sm"
          >
            {t(`nav.${key}`)}
          </Link>
        ))}
      </div>
    </nav>
  );
}
