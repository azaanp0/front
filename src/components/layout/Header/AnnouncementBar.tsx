import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";

export function AnnouncementBar() {
  const { t } = useTranslation();
  const msg = t("announcement.ticker");
  const repeated = Array.from({ length: 8 }, (_, i) => (
    <span key={i} className="mx-12 inline-flex items-center gap-2 whitespace-nowrap">
      <Sparkles className="h-3.5 w-3.5 shrink-0 opacity-90" />
      {msg}
    </span>
  ));

  return (
    <div
      className="announcement-bar flex h-[var(--announcement-height)] items-center overflow-hidden text-sm font-semibold text-white"
      role="region"
      aria-label={msg}
    >
      <div className="flex min-w-full shrink-0 animate-marquee-rtl">{repeated}</div>
    </div>
  );
}
