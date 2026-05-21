import { Helmet } from "react-helmet-async";
import { AccountLayout } from "@/components/user/AccountLayout";
import { ProfileForm } from "@/components/user/ProfileForm";
import { useAuthStore } from "@/stores/auth.store";
import { Navigate } from "react-router-dom";

export default function AccountPage() {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>ملفي الشخصي — {import.meta.env.VITE_APP_NAME}</title>
      </Helmet>
      <AccountLayout title="ملفي الشخصي">
        <ProfileForm />
      </AccountLayout>
    </>
  );
}
