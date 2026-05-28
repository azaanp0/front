import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { STORE } from "@/constants/store";

export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-content px-4 py-20 text-center">
      <div className="mx-auto mb-8 max-w-4xl overflow-hidden rounded-[30px] bg-black/5 shadow-[0_35px_120px_rgba(15,23,42,0.12)]">
        <ResponsiveImage
          src="/images/hero.png"
          alt="الصفحة غير موجودة"
          className="h-80 w-full object-cover"
          width={1200}
          height={500}
          loading="eager"
        />
      </div>
      <div className="mx-auto max-w-2xl rounded-[28px] border border-purple-100 bg-white/90 px-8 py-10 shadow-[0_30px_90px_rgba(139,92,246,0.08)]">
        <h1 className="text-6xl font-black text-[var(--color-primary)]">404</h1>
        <p className="mt-4 text-xl font-semibold text-gray-900">
          الصفحة التي تبحث عنها غير متوفرة.
        </p>
        <p className="mt-3 text-sm leading-7 text-gray-600">
          قد يكون الرابط خاطئاً أو المنتج لم يعد موجوداً. تصفح أفضل المنتجات
          الفاخرة لدينا واستعيد تجربة التسوق المميزة.
        </p>
        <Link
          to="/"
          className="product-enhanced-btn mt-8 inline-block rounded-xl bg-primary px-10 py-3 font-semibold text-white shadow-lg shadow-primary/20"
        >
          {t("common.home")} — {STORE.name}
        </Link>
      </div>
    </div>
  );
}
