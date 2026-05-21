import type { Locale } from "@/types/locale.types";

const EASTERN_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

function toEasternArabicNumerals(input: string): string {
  return input.replace(/\d/g, (d) => EASTERN_DIGITS[Number(d)] ?? d);
}

export function formatPrice(amount: number, locale: Locale): string {
  const formatted = new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-SA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
  if (locale === "ar") {
    return `${toEasternArabicNumerals(formatted)} ر.س`;
  }
  return `SAR ${formatted}`;
}
