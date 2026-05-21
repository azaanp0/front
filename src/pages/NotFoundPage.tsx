import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { STORE } from "@/constants/store";

export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-content px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-[var(--color-primary)]">404</h1>
      <p className="mt-4 text-lg text-[var(--store-text-secondary)]">{t("common.no_results")}</p>
      <Link
        to="/"
        className="product-enhanced-btn mt-8 inline-block rounded-lg px-8 py-3 font-semibold"
      >
        {t("common.home")} — {STORE.name}
      </Link>
    </div>
  );
}
