import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  User,
  ShoppingBag,
  MapPin,
  Heart,
  Award,
  Bell,
  LogOut,
} from "lucide-react";
import { useAuthStore } from "@/stores/auth.store";

interface AccountLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AccountLayout({ children, title }: AccountLayoutProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const logout = useAuthStore((s) => s.logout);

  const menuItems = [
    { href: "/account", icon: User, label: "ملفي الشخصي" },
    { href: "/account/orders", icon: ShoppingBag, label: "طلباتي" },
    { href: "/account/addresses", icon: MapPin, label: "عناويني" },
    { href: "/wishlist", icon: Heart, label: "قائمة المفضلة" },
    { href: "/account/loyalty", icon: Award, label: "نقاط الولاء" },
    { href: "/account/notifications", icon: Bell, label: "الإشعارات" },
  ];

  return (
    <div className="mx-auto max-w-content px-4 py-8">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <nav className="flex flex-col gap-1">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary-50 text-secondary"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                );
              })}
              <hr className="my-2 border-gray-100" />
              <button
                onClick={() => {
                  logout();
                  window.location.href = "/";
                }}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sale transition-colors hover:bg-sale-bg"
              >
                <LogOut className="h-5 w-5" />
                {t("auth.logout")}
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
