import { create } from "zustand";

interface ThemeState {
  dark: boolean;
  toggleDark: () => void;
  init: () => void;
}

function applyDark(dark: boolean) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", dark);
  document.body.classList.toggle("dark", dark);
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  dark: false,
  init: () => {
    const saved = localStorage.getItem("store-theme");
    const dark = saved === "dark";
    applyDark(dark);
    set({ dark });
  },
  toggleDark: () => {
    const dark = !get().dark;
    applyDark(dark);
    localStorage.setItem("store-theme", dark ? "dark" : "light");
    set({ dark });
  },
}));
