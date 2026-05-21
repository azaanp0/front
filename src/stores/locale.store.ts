import { create } from "zustand";
import type { Locale, Dir } from "@/types/locale.types";

interface LocaleState {
  locale: Locale;
  dir: Dir;
  currency: "SAR";
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

function applyDom(locale: Locale, dir: Dir) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = locale;
  document.documentElement.dir = dir;
}

export const useLocaleStore = create<LocaleState>((set, get) => ({
  locale: (import.meta.env.VITE_DEFAULT_LOCALE as Locale) || "ar",
  dir: "rtl",
  currency: "SAR",
  setLocale: (locale) => {
    const dir: Dir = locale === "ar" ? "rtl" : "ltr";
    applyDom(locale, dir);
    set({ locale, dir });
  },
  toggleLocale: () => {
    const next: Locale = get().locale === "ar" ? "en" : "ar";
    get().setLocale(next);
  },
}));

applyDom(useLocaleStore.getState().locale, useLocaleStore.getState().dir);
