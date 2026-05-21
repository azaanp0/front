import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "@/stores/cart.store";
import { CheckoutStepper } from "@/components/checkout/CheckoutStepper";
import { AddressStep } from "@/components/checkout/AddressStep";
import { ShippingStep } from "@/components/checkout/ShippingStep";
import { PaymentStep } from "@/components/checkout/PaymentStep";
import { OrderSummaryPanel } from "@/components/checkout/OrderSummaryPanel";
import { EmptyState } from "@/components/ui/EmptyState";
import { ShoppingCart } from "lucide-react";

export default function CheckoutPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const items = useCartStore((s) => s.items);
  const total = useCartStore((s) => s.total);
  const clearCart = useCartStore((s) => s.setCart);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form Data
  const [addressData, setAddressData] = useState<any>(null);
  const [shippingMethod, setShippingMethod] = useState<string | null>(null);

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-content px-4 py-16">
        <EmptyState
          icon={<ShoppingCart className="h-12 w-12" />}
          title={t("cart.empty")}
          description={t("cart.empty_desc")}
        />
      </div>
    );
  }

  const handlePlaceOrder = (paymentMethodId: string) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      clearCart({ items: [], subtotal: 0, total: 0, itemsCount: 0, coupon: null, couponDiscount: 0, isDrawerOpen: false } as any);
      const mockOrderId = `DA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      navigate(`/order-success/${mockOrderId}`, { replace: true });
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>{t("checkout.title")} — {import.meta.env.VITE_APP_NAME}</title>
      </Helmet>
      <div className="mx-auto max-w-content px-4 py-8">
        <h1 className="mb-8 text-2xl font-bold text-gray-900">{t("checkout.title")}</h1>
        
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <CheckoutStepper currentStep={step} />
            
            <div className="mt-8">
              {step === 1 && (
                <AddressStep
                  onNext={(data) => {
                    setAddressData(data);
                    setStep(2);
                  }}
                />
              )}
              {step === 2 && (
                <ShippingStep
                  cartTotal={total}
                  onBack={() => setStep(1)}
                  onNext={(method) => {
                    setShippingMethod(method);
                    setStep(3);
                  }}
                />
              )}
              {step === 3 && (
                <PaymentStep
                  isSubmitting={isSubmitting}
                  onBack={() => setStep(2)}
                  onSubmit={handlePlaceOrder}
                />
              )}
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <OrderSummaryPanel />
          </div>
        </div>
      </div>
    </>
  );
}
