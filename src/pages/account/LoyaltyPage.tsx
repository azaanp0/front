import { Helmet } from "react-helmet-async";
import { AccountLayout } from "@/components/user/AccountLayout";
import { LoyaltyCard } from "@/components/user/LoyaltyCard";
import { useAuthStore } from "@/stores/auth.store";
import { Navigate } from "react-router-dom";

export default function LoyaltyPage() {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>نقاط الولاء — {import.meta.env.VITE_APP_NAME}</title>
      </Helmet>
      <AccountLayout title="نقاط الولاء">
        <LoyaltyCard />
      </AccountLayout>
    </>
  );
}
