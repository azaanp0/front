import { useTranslation } from "react-i18next";

export default function MaintenancePage() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary-50 px-4 text-center">
      <h1 className="text-2xl font-bold text-secondary">503</h1>
      <p className="mt-4 max-w-md text-gray-600">{t("common.loading")}</p>
    </div>
  );
}
