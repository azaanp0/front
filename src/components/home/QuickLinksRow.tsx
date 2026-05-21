import { Link } from "react-router-dom";
import { Percent, Sparkles, Star, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const links = [
  { key: "quick_offers", to: "/offers", icon: Percent },
  { key: "new_in", to: "/new", icon: Sparkles },
  { key: "recommended", to: "/recommended", icon: Star },
  { key: "bestsellers", to: "/bestsellers", icon: TrendingUp },
] as const;

export function QuickLinksRow() {
  const { t } = useTranslation();

  return (
    <section className="border-b border-gray-100 bg-white py-4">
      <div className="mx-auto flex max-w-content gap-2 overflow-x-auto px-4 scrollbar-none">
        {links.map(({ key, to, icon: Icon }) => (
          <Link
            key={key}
            to={to}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-full border border-primary/40 bg-primary-50 px-4 py-2 text-sm font-semibold text-secondary transition hover:bg-primary hover:text-secondary",
            )}
          >
            <Icon className="h-4 w-4" />
            {t(`home.${key}`)}
          </Link>
        ))}
      </div>
    </section>
  );
}
