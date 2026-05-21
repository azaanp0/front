import type { ReactNode } from "react";
import { Home, Search, Heart, LayoutGrid, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useUiStore } from "@/stores/ui.store";
import { useAuthStore } from "@/stores/auth.store";
import { cn } from "@/lib/utils";

function NavItem({
  to,
  label,
  icon,
  onClick,
}: {
  to?: string;
  label: string;
  icon: ReactNode;
  onClick?: () => void;
}) {
  const className = ({ isActive }: { isActive: boolean }) =>
    cn(
      "selia-bottom-nav-button flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-medium transition",
      isActive ? "text-[var(--color-primary-reverse)]" : "text-[var(--bottom-nav-text-color)]",
    );

  if (onClick) {
    return (
      <li className="flex flex-1 justify-center">
        <button type="button" onClick={onClick} className={className({ isActive: false })} aria-label={label}>
          {icon}
          <span>{label}</span>
        </button>
      </li>
    );
  }

  return (
    <li className="flex flex-1 justify-center">
      <NavLink to={to!} className={className} aria-label={label}>
        {icon}
        <span>{label}</span>
      </NavLink>
    </li>
  );
}

export function MobileBottomNav() {
  const { t } = useTranslation();
  const setMenuOpen = useUiStore((s) => s.setMobileMenuOpen);
  const openAuth = useAuthStore((s) => s.openAuthModal);

  return (
    <nav
      className="selia-bottom-nav fixed bottom-0 start-0 end-0 z-30 border-t border-[var(--color-primary-dark)]/20 bg-[var(--bottom-nav-bg)] md:hidden"
      aria-label="التنقل السفلي"
    >
      <ul className="selia-bottom-nav-items flex items-stretch justify-around px-1">
        <NavItem to="/" label="الرئيسية" icon={<Home className="h-5 w-5" />} />
        <NavItem
          label="الأقسام"
          icon={<LayoutGrid className="h-5 w-5" />}
          onClick={() => setMenuOpen(true)}
        />
        <NavItem to="/wishlist" label="المفضلة" icon={<Heart className="h-5 w-5" />} />
        <NavItem to="/search" label="بحث" icon={<Search className="h-5 w-5" />} />
        <NavItem
          label="حسابي"
          icon={<User className="h-5 w-5" />}
          onClick={() => openAuth("login")}
        />
      </ul>
    </nav>
  );
}
