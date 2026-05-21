import { Helmet } from "react-helmet-async";
import { AccountLayout } from "@/components/user/AccountLayout";
import { OrdersList } from "@/components/user/OrdersList";
import { useAuthStore } from "@/stores/auth.store";
import { Navigate } from "react-router-dom";

export default function OrdersPage() {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>طلباتي — {import.meta.env.VITE_APP_NAME}</title>
      </Helmet>
      <AccountLayout title="طلباتي">
        <OrdersList />
      </AccountLayout>
    </>
  );
}
