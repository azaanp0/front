import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { FOOTER_LINKS, STORE } from "@/constants/store";
import { StoreLogo } from "@/components/ui/StoreLogo";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { useLocaleStore } from "@/stores/locale.store";

const PAYMENT_METHODS = [
  "مدى",
  "Visa",
  "Mastercard",
  "stc pay",
  "Apple Pay",
  "تابي",
  "تمارا",
  "ميسباي",
];

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--footer-text-color)] shadow-sm transition hover:bg-[var(--color-primary-light)] dark:bg-[var(--product-bg)]"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const toggleLocale = useLocaleStore((s) => s.toggleLocale);
  const locale = useLocaleStore((s) => s.locale);

  return (
    <footer
      className="store-footer relative mt-12 overflow-hidden text-[var(--footer-text-color)]"
      style={{ background: "var(--footer-bg)" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent" />
      <div className="store-footer__inner mx-auto max-w-content px-4 py-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          <div className="col-span-2">
            <div className="flex justify-center lg:justify-start">
              <StoreLogo size="md" showTagline />
            </div>
            <p className="mt-3 text-center text-sm text-[var(--store-text-secondary)] lg:text-start">
              {STORE.tagline}
            </p>
            <div className="footer-badges mt-6 text-center lg:text-start">
              <p className="text-sm text-[var(--store-text-secondary)]">
                الرقم الضريبي
              </p>
              <b className="text-sm">{STORE.vat}</b>
            </div>
            <button
              type="button"
              onClick={toggleLocale}
              className="mt-4 flex w-full items-center justify-center gap-1 text-sm hover:text-[var(--color-primary)] lg:justify-start"
            >
              <span>{locale === "ar" ? "العربية" : "English"}</span>
            </button>
            <div className="mt-4 flex justify-center gap-2 lg:justify-start">
              <SocialIcon href={STORE.instagram} label="Instagram">
                <Instagram className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href={STORE.snapchat} label="Snapchat">
                <span className="text-xs font-bold">SC</span>
              </SocialIcon>
              <SocialIcon href={STORE.tiktok} label="TikTok">
                <span className="text-xs font-bold">TT</span>
              </SocialIcon>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h3 className="footer-title mb-3 text-sm font-bold">روابط مهمة</h3>
            <ul className="footer-list space-y-2 text-sm">
              {FOOTER_LINKS.important.map((l) => (
                <li
                  key={l.to}
                  className="flex items-start gap-2 before:mt-1 before:content-['•'] before:text-[var(--color-primary)]"
                >
                  <Link
                    to={l.to}
                    className="hover:text-[var(--color-primary-dark)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-title mb-3 text-sm font-bold">تصفح المتجر</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.nav.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-[var(--color-primary-dark)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h3 className="mb-3 text-center text-sm font-bold lg:text-start">
              تحميل تطبيق الجوال
            </h3>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href={STORE.appStore}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="App Store"
              >
                <ResponsiveImage
                  src="https://cdn.salla.network/images/appstore.png?v=2.0.5"
                  alt="App Store"
                  width={135}
                  height={40}
                  className="h-10 w-auto"
                  loading="lazy"
                />
              </a>
              <a
                href={STORE.playStore}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Play"
              >
                <ResponsiveImage
                  src="https://cdn.salla.network/images/googleplay.png?v=2.0.5"
                  alt="Google Play"
                  width={135}
                  height={40}
                  className="h-10 w-auto"
                  loading="lazy"
                />
              </a>
            </div>
            <p className="mt-4 text-center text-sm lg:text-start">
              <a href={`tel:${STORE.phone}`} className="hover:underline">
                {STORE.phone}
              </a>
            </p>
            <p className="mt-1 text-center text-sm lg:text-start">
              <a
                href={`https://wa.me/${STORE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                واتساب: {STORE.whatsapp}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 border-t border-gray-200 pt-6 dark:border-gray-700">
          {PAYMENT_METHODS.map((m) => (
            <span
              key={m}
              className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-600 dark:bg-[var(--product-bg)] dark:text-gray-300"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      <div className="footer-bottom border-t border-gray-200 bg-[var(--bottom-footer-bg)] py-4 dark:border-gray-700">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-4 text-sm sm:flex-row">
          <p className="text-[var(--store-text-secondary)]">
            الحقوق محفوظة | 2026 —{" "}
            <Link to="/" className="hover:text-[var(--color-primary)]">
              {STORE.name}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
