import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/stores/theme.store";

export function ThemeToggle() {
  const dark = useThemeStore((s) => s.dark);
  const toggle = useThemeStore((s) => s.toggleDark);

  return (
    <button
      type="button"
      onClick={toggle}
      className="header-btn flex h-10 w-10 items-center justify-center rounded-full text-[var(--header-text-color)] transition hover:bg-[var(--color-primary-light)]"
      aria-label={dark ? "الوضع الفاتح" : "الوضع الداكن"}
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
