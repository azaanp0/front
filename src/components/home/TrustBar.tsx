import { Truck, ShieldCheck, Sparkles, RotateCcw } from "lucide-react";
import { STORE } from "@/constants/store";

const ITEMS = [
  { icon: Truck, title: "توصيل سريع", desc: "مجاني فوق 199 ر.س" },
  { icon: ShieldCheck, title: "منتجات أصلية", desc: "ضمان الجودة" },
  { icon: Sparkles, title: STORE.name, desc: "تجربة تسوق فاخرة" },
  { icon: RotateCcw, title: "استرجاع سهل", desc: "سياسة مرنة" },
] as const;

export function TrustBar() {
  return (
    <section className="border-y border-[var(--product-border-color)] bg-[var(--bg-elevated)]/80 py-6 backdrop-blur-sm">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-3 px-4 md:grid-cols-4 md:gap-4">
        {ITEMS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="trust-badge group">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary-light)] to-white shadow-[var(--shadow-soft)] transition group-hover:shadow-[var(--shadow-glow)]">
              <Icon className="h-6 w-6 text-[var(--color-primary-reverse)]" strokeWidth={1.5} />
            </div>
            <p className="text-sm font-bold text-[var(--store-text-primary)]">{title}</p>
            <p className="text-xs text-[var(--store-text-muted)]">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
