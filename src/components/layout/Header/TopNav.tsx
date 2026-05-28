import { Link } from "react-router-dom";
import { Menu, Search, ShoppingBag, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { STORE } from "@/constants/store";
import { StoreLogo } from "@/components/ui/StoreLogo";
import { useCartStore } from "@/stores/cart.store";
import { useAuthStore } from "@/stores/auth.store";
import { useUiStore } from "@/stores/ui.store";
import { useLocaleStore } from "@/stores/locale.store";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function TopNav({ scrolled }: { scrolled: boolean }) {
  const { t } = useTranslation();
  const itemsCount = useCartStore((s) => s.itemsCount);
  const openDrawer = useCartStore((s) => s.openDrawer);
  const openAuth = useAuthStore((s) => s.openAuthModal);
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const setMobileMenuOpen = useUiStore((s) => s.setMobileMenuOpen);
  const toggleLocale = useLocaleStore((s) => s.toggleLocale);
  const locale = useLocaleStore((s) => s.locale);

  const iconBtn =
    "header-btn flex h-11 w-11 items-center justify-center rounded-full text-[var(--header-text-color)] transition-all duration-300 hover:bg-[var(--color-primary-light)] hover:shadow-[var(--shadow-soft)] hover:scale-105";

  return (
    <div id="mainnav" className="main-nav-container mx-auto max-w-content px-4 py-3 md:py-4">
      <div className="relative flex items-stretch justify-between">
        <div className="flex flex-1 items-center justify-start gap-1">
          <button
            type="button"
            className={cn(iconBtn, "gap-2 px-3 !w-auto min-w-[48px]")}
            aria-label="فتح القائمة"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6 shrink-0" />
            <span className="menu-label hidden text-sm font-bold md:inline">القائمة</span>
          </button>
          <button
            type="button"
            className={cn(iconBtn, "md:hidden")}
            aria-label={t("auth.login")}
            onClick={() => !isLoggedIn && openAuth("login")}
          >
            <User className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <StoreLogo />
        </div>

        <div className="flex flex-1 items-center justify-end gap-1 sm:gap-2">
          <button
            type="button"
            onClick={toggleLocale}
            className="hidden rounded-full border border-[var(--product-border-color)] px-3 py-1.5 text-xs font-bold text-[var(--header-text-color)] transition hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] sm:inline"
          >
            {locale === "ar" ? "EN" : "عربي"}
          </button>
          <ThemeToggle />
          <Link to="/search" className={iconBtn} aria-label="بحث">
            <Search className="h-5 w-5" />
          </Link>
          <button
            type="button"
            className={cn(iconBtn, "hidden md:flex")}
            aria-label={t("auth.login")}
            onClick={() => !isLoggedIn && openAuth("login")}
          >
            <User className="h-5 w-5" />
          </button>
          <button
            type="button"
            className={cn(iconBtn, "relative")}
            aria-label={t("cart.title", { count: itemsCount })}
            onClick={openDrawer}
          >
            <ShoppingBag className="h-5 w-5" />
            {itemsCount > 0 ? (
              <span className="absolute -top-0.5 -end-0.5 flex h-5 min-w-5 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-[#c0394a] to-[#922b3a] px-1 text-[10px] font-bold text-white shadow-md">
                {itemsCount > 99 ? "99+" : itemsCount}
              </span>
            ) : null}
          </button>
        </div>
      </div>
      {!scrolled ? (
        <p className="mt-2 text-center text-xs font-medium tracking-wide text-[var(--store-text-muted)]">
          {STORE.tagline}
        </p>
      ) : null}
    </div>
  );
}
