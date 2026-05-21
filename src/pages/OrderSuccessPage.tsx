import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useParams, Navigate } from "react-router-dom";
import { OrderSuccess } from "@/components/checkout/OrderSuccess";

export default function OrderSuccessPage() {
  const { t } = useTranslation();
  const { orderId } = useParams();

  if (!orderId) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{t("checkout.order_success")} — {import.meta.env.VITE_APP_NAME}</title>
      </Helmet>
      <div className="mx-auto max-w-content px-4 py-16 sm:py-24">
        <OrderSuccess orderNumber={orderId} />
      </div>
    </>
  );
}
