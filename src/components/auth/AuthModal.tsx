import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "@/stores/auth.store";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function AuthModal() {
  const { t } = useTranslation();
  const open = useAuthStore((s) => s.isAuthModalOpen);
  const close = useAuthStore((s) => s.closeAuthModal);
  const tab = useAuthStore((s) => s.authModalTab);
  const openAuth = useAuthStore((s) => s.openAuthModal);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label={t("common.close")}
            onClick={close}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative z-[1] w-full max-w-md rounded-[var(--radius-lg)] bg-white p-6 shadow-modal"
            role="dialog"
            aria-modal
          >
            <div className="mb-4 flex gap-2 border-b pb-2">
              <button
                type="button"
                className={`flex-1 rounded-md py-2 text-sm font-semibold ${tab === "login" ? "bg-primary text-secondary" : "text-gray-500"}`}
                onClick={() => openAuth("login")}
              >
                {t("auth.login")}
              </button>
              <button
                type="button"
                className={`flex-1 rounded-md py-2 text-sm font-semibold ${tab === "register" ? "bg-primary text-secondary" : "text-gray-500"}`}
                onClick={() => openAuth("register")}
              >
                {t("auth.register")}
              </button>
            </div>
            {tab === "login" ? (
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <Input type="tel" placeholder={t("auth.phone")} dir="ltr" />
                <Input type="password" placeholder={t("auth.password")} />
                <Button type="submit" className="w-full" variant="primary">
                  {t("auth.login")}
                </Button>
              </form>
            ) : (
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder={t("auth.email")} type="email" />
                <Input type="tel" placeholder={t("auth.phone")} dir="ltr" />
                <Input type="password" placeholder={t("auth.password")} />
                <Button type="submit" className="w-full" variant="primary">
                  {t("auth.register")}
                </Button>
              </form>
            )}
            <div className="mt-4 flex justify-between">
              <button type="button" className="text-xs text-primary hover:underline" onClick={close}>
                {t("common.close")}
              </button>
              <button type="button" className="text-xs text-gray-500 hover:underline">
                {t("auth.forgot_password")}
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
