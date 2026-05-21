import { Helmet } from "react-helmet-async";
import { AccountLayout } from "@/components/user/AccountLayout";
import { OrderDetail } from "@/components/user/OrderDetail";
import { useAuthStore } from "@/stores/auth.store";
import { Navigate, useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function OrderDetailPage() {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const { id } = useParams();

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>تفاصيل الطلب {id} — {import.meta.env.VITE_APP_NAME}</title>
      </Helmet>
      <AccountLayout title="تفاصيل الطلب">
        <Link to="/account/orders" className="mb-4 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary">
          <ArrowRight className="h-4 w-4" />
          العودة للطلبات
        </Link>
        {id && <OrderDetail orderId={id} />}
      </AccountLayout>
    </>
  );
}
