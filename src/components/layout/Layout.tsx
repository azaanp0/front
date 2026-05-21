import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { AuthModal } from "@/components/auth/AuthModal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay";

export function Layout() {
  return (
    <div className="app-inner flex min-h-full flex-col bg-[var(--bg-primary)] pb-20 md:pb-0">
      <LoadingOverlay />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <MobileBottomNav />
      <AuthModal />
      <WhatsAppButton />
    </div>
  );
}
