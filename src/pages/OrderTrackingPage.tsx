import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { OrderDetail } from "@/components/user/OrderDetail";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function OrderTrackingPage() {
  const { t } = useTranslation();
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [searchId, setSearchId] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchId.trim()) {
      navigate(`/order-tracking/${searchId}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>{t("common.track_order", "تتبع طلبك")} — {import.meta.env.VITE_APP_NAME}</title>
      </Helmet>
      <div className="mx-auto max-w-content px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">{t("common.track_order", "تتبع طلبك")}</h1>
          <p className="mb-8 text-gray-600">أدخلي رقم الطلب لتتبع حالة الشحنة</p>
          
          <form onSubmit={handleSearch} className="mb-12 flex max-w-md mx-auto gap-2">
            <Input
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="مثال: DA-2024-1001"
              className="flex-1 text-center"
              dir="ltr"
            />
            <Button type="submit" variant="primary">تتبع</Button>
          </form>

          {orderId && (
            <div className="text-start">
              <OrderDetail orderId={orderId} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
