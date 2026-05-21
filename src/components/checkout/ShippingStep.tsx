import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ShippingStepProps {
  onNext: (shippingMethodId: string) => void;
  onBack: () => void;
  cartTotal: number;
}

export function ShippingStep({ onNext, onBack, cartTotal }: ShippingStepProps) {
  const { t } = useTranslation();
  const [selectedMethod, setSelectedMethod] = useState<string>("standard");

  const shippingMethods = [
    { id: "standard", name: "توصيل عادي", price: 25, duration: "2-4 أيام عمل" },
    { id: "express", name: "توصيل سريع", price: 45, duration: "1-2 يوم عمل" },
    {
      id: "free",
      name: "توصيل مجاني",
      price: 0,
      duration: "3-5 أيام",
      disabled: cartTotal < 199,
    },
    { id: "pickup", name: "استلام من الفرع", price: 0, duration: "نفس اليوم" },
  ];

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
      <h2 className="mb-6 text-xl font-bold text-gray-900">{t("checkout.shipping_step")}</h2>
      <div className="space-y-3">
        {shippingMethods.map((method) => (
          <label
            key={method.id}
            className={cn(
              "flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors",
              selectedMethod === method.id ? "border-primary bg-primary-50" : "border-gray-200 hover:bg-gray-50",
              method.disabled && "cursor-not-allowed opacity-50"
            )}
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="shippingMethod"
                value={method.id}
                checked={selectedMethod === method.id}
                onChange={() => setSelectedMethod(method.id)}
                disabled={method.disabled}
                className="h-4 w-4 text-primary focus:ring-primary"
              />
              <div>
                <p className="font-semibold text-gray-900">{method.name}</p>
                <p className="text-sm text-gray-500">{method.duration}</p>
              </div>
            </div>
            <div className="font-bold text-gray-900">
              {method.price === 0 ? "مجاناً" : `${method.price} ${t("common.sar")}`}
            </div>
          </label>
        ))}
      </div>
      <div className="pt-6 flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          {t("common.back")}
        </Button>
        <Button type="button" variant="primary" onClick={() => onNext(selectedMethod)}>
          {t("common.next")}
        </Button>
      </div>
    </div>
  );
}
