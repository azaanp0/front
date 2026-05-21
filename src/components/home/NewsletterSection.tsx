import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Sparkles } from "lucide-react";
import { STORE } from "@/constants/store";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function NewsletterSection() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("يرجى إدخال بريد إلكتروني صحيح");
      return;
    }
    setError("");
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-light)] via-[var(--bg-primary)] to-[var(--color-gold-light)] opacity-80" />
      <div className="relative mx-auto max-w-content px-4">
        <div className="overflow-hidden rounded-3xl border border-[var(--product-border-color)] bg-[var(--bg-elevated)]/90 p-8 shadow-[var(--shadow-card)] backdrop-blur-md md:p-12">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white shadow-[var(--shadow-glow)]">
              <Mail className="h-7 w-7" />
            </div>
            <SectionTitle
              title={`انضمي لعائلة ${STORE.name}`}
              subtitle={t("home.newsletter_subtitle")}
              className="!mb-6"
            />
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
              <div className="flex flex-col gap-3 sm:flex-row sm:rounded-full sm:border sm:border-[var(--product-border-color)] sm:bg-[var(--bg-primary)] sm:p-1.5 sm:shadow-inner">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="بريدكِ الإلكتروني"
                  className="flex-1 rounded-2xl border border-[var(--product-border-color)] bg-transparent px-5 py-4 text-sm focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/25 sm:border-0 sm:py-3"
                  disabled={isSubmitting || isSubmitted}
                />
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="product-enhanced-btn inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-sm font-bold sm:rounded-full sm:py-3"
                >
                  <Sparkles className="h-4 w-4" />
                  {isSubmitting ? t("common.loading") : isSubmitted ? "✓ تم الاشتراك" : t("common.subscribe")}
                </button>
              </div>
              {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
              <p className="mt-4 text-xs text-[var(--store-text-muted)]">{t("home.newsletter_privacy")}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
