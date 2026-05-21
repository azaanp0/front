import { Link } from "react-router-dom";
import { X, ChevronDown, Home, Tag, Grid3X3, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  CDN,
  FOOTER_LINKS,
  MENU_CATEGORIES,
  MENU_PROMOS,
  STORE,
} from "@/constants/store";
import { StoreLogo } from "@/components/ui/StoreLogo";
import { useUiStore } from "@/stores/ui.store";
import { useAuthStore } from "@/stores/auth.store";
import { useLocaleStore } from "@/stores/locale.store";
import { cn } from "@/lib/utils";

export function SideMenu() {
  const { t } = useTranslation();
  const open = useUiStore((s) => s.mobileMenuOpen);
  const setOpen = useUiStore((s) => s.setMobileMenuOpen);
  const openAuth = useAuthStore((s) => s.openAuthModal);
  const dir = useLocaleStore((s) => s.dir);
  const [catsOpen, setCatsOpen] = useState(true);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  const initialX = dir === "rtl" ? "-100%" : "100%";
  const panelSide = dir === "rtl" ? "start-0" : "end-0";

  const close = () => setOpen(false);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-menu"
          className="fixed inset-0 z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            aria-label={t("common.close")}
            onClick={close}
          />
          <motion.aside
            initial={{ x: initialX }}
            animate={{ x: 0 }}
            exit={{ x: initialX }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={cn(
              "custom-main-menu absolute top-0 flex h-full w-[min(100%,380px)] flex-col bg-[var(--header-bg)] shadow-modal",
              panelSide,
            )}
            aria-label="القائمة"
          >
            <div className="flex items-center justify-between border-b border-[var(--product-border-color)] bg-gradient-to-l from-[var(--color-primary-light)] to-transparent px-4 py-5">
              <StoreLogo size="sm" showTagline />
              <button
                type="button"
                onClick={close}
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[var(--color-primary-light)]"
                aria-label={t("common.close")}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <Link
                to="/"
                onClick={close}
                className="mb-2 flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-[var(--store-text-primary)] hover:bg-[var(--color-primary-light)]"
              >
                <Home className="h-5 w-5 text-[var(--color-primary)]" />
                {t("common.home")}
              </Link>

              <div className="mb-4 rounded-2xl border border-[var(--product-border-color)] bg-gradient-to-br from-[var(--color-primary-light)] to-white p-3 shadow-[var(--shadow-soft)]">
                <p className="mb-2 px-1 text-xs font-bold text-[var(--color-primary-reverse)]">✨ عروض {STORE.name}</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {MENU_PROMOS.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/category/${p.slug}`}
                      onClick={close}
                      className="flex items-center gap-1.5 rounded-xl bg-white/70 px-2 py-2.5 text-xs font-semibold transition hover:bg-white hover:shadow-sm"
                    >
                      <span>{p.icon}</span>
                      <span className="line-clamp-1">{p.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCatsOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 font-bold text-[var(--store-text-primary)] hover:bg-[var(--color-primary-light)]"
              >
                <span className="flex items-center gap-2">
                  <Grid3X3 className="h-5 w-5 text-[var(--color-primary)]" />
                  الأقسام
                </span>
                <ChevronDown className={cn("h-5 w-5 transition", catsOpen && "rotate-180")} />
              </button>

              {catsOpen ? (
                <ul className="mt-2 space-y-1">
                  {MENU_CATEGORIES.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        to={`/category/${cat.slug}`}
                        onClick={close}
                        className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-[var(--color-primary-light)]"
                      >
                        <img
                          src={cat.image}
                          alt=""
                          className="h-12 w-12 shrink-0 rounded-md object-contain"
                          loading="lazy"
                        />
                        <span className="text-sm font-medium text-[var(--store-text-primary)]">{cat.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="my-4 border-t border-[var(--product-border-color)] pt-4">
                <p className="mb-2 px-2 text-xs font-bold text-[var(--store-text-secondary)]">روابط سريعة</p>
                {FOOTER_LINKS.nav.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={close}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-[var(--color-primary-light)]"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <Link
                to="/offers"
                onClick={close}
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-primary-dark)]"
              >
                <Tag className="h-4 w-4" />
                كل العروض
              </Link>
              <Link
                to="/brands"
                onClick={close}
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm"
              >
                <Sparkles className="h-4 w-4" />
                الماركات
              </Link>
              <Link to="/search" onClick={close} className="block rounded-md px-3 py-2.5 text-sm">
                {t("mobile_nav.search")}
              </Link>
              <Link to="/wishlist" onClick={close} className="block rounded-md px-3 py-2.5 text-sm">
                {t("mobile_nav.wishlist")}
              </Link>
              <Link to="/account/orders" onClick={close} className="block rounded-md px-3 py-2.5 text-sm">
                {t("mobile_nav.account")} — طلباتي
              </Link>
            </div>

            <div className="border-t border-[var(--product-border-color)] p-4">
              <button
                type="button"
                className="product-enhanced-btn mb-3 w-full rounded-lg py-3 text-sm font-semibold"
                onClick={() => {
                  close();
                  openAuth("login");
                }}
              >
                {t("auth.login")}
              </button>
              <a
                href={`https://wa.me/${STORE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--color-primary)] py-2.5 text-sm font-medium text-[var(--color-primary-dark)]"
              >
                واتساب {STORE.whatsapp}
              </a>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
