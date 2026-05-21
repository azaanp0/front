import { Helmet } from "react-helmet-async";
import { AccountLayout } from "@/components/user/AccountLayout";
import { AddressList } from "@/components/user/AddressList";
import { useAuthStore } from "@/stores/auth.store";
import { Navigate } from "react-router-dom";

export default function AddressesPage() {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>عناويني — {import.meta.env.VITE_APP_NAME}</title>
      </Helmet>
      <AccountLayout title="عناويني">
        <AddressList />
      </AccountLayout>
    </>
  );
}
