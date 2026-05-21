import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface OrderSuccessProps {
  orderNumber: string;
}

export function OrderSuccess({ orderNumber }: OrderSuccessProps) {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-md text-center">
      <div className="mb-6 flex justify-center">
        <div className="rounded-full bg-success-bg p-4 text-success">
          <CheckCircle2 className="h-16 w-16" />
        </div>
      </div>
      <h1 className="mb-2 text-2xl font-bold text-gray-900">{t("checkout.order_success")}</h1>
      <p className="mb-6 text-gray-600">{t("checkout.order_number", { number: orderNumber })}</p>
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button variant="primary" asChild>
          <Link to={`/order-tracking/${orderNumber}`}>{t("common.track_order", { defaultValue: "تتبع طلبك" })}</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/">{t("common.home")}</Link>
        </Button>
      </div>
    </div>
  );
}
