import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./locales/ar.json";
import en from "./locales/en.json";
import { useLocaleStore } from "@/stores/locale.store";

const resources = {
  ar: { translation: ar },
  en: { translation: en },
} as const;

void i18n.use(initReactI18next).init({
  resources,
  lng: useLocaleStore.getState().locale,
  fallbackLng: "ar",
  interpolation: { escapeValue: false },
});

let lastLocale = useLocaleStore.getState().locale;
useLocaleStore.subscribe((state) => {
  if (state.locale !== lastLocale) {
    lastLocale = state.locale;
    void i18n.changeLanguage(state.locale);
  }
});

export default i18n;
