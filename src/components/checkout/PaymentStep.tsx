import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PaymentStepProps {
  onBack: () => void;
  onSubmit: (paymentMethodId: string) => void;
  isSubmitting: boolean;
}

export function PaymentStep({ onBack, onSubmit, isSubmitting }: PaymentStepProps) {
  const { t } = useTranslation();
  const [selectedMethod, setSelectedMethod] = useState<string>("credit_card");

  const paymentMethods = [
    { id: "credit_card", label: t("checkout.payment_methods.credit_card") },
    { id: "mada", label: t("checkout.payment_methods.mada") },
    { id: "apple_pay", label: t("checkout.payment_methods.apple_pay") },
    { id: "stc_pay", label: t("checkout.payment_methods.stc_pay") },
    { id: "tabby", label: t("checkout.payment_methods.tabby") },
    { id: "tamara", label: t("checkout.payment_methods.tamara") },
    { id: "cod", label: t("checkout.payment_methods.cod"), extraFee: 10 },
  ];

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
      <h2 className="mb-6 text-xl font-bold text-gray-900">{t("checkout.payment_step")}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className={cn(
              "flex cursor-pointer flex-col justify-center rounded-lg border p-4 text-center transition-colors",
              selectedMethod === method.id
                ? "border-primary bg-primary-50"
                : "border-gray-200 hover:bg-gray-50"
            )}
          >
            <input
              type="radio"
              name="paymentMethod"
              value={method.id}
              checked={selectedMethod === method.id}
              onChange={() => setSelectedMethod(method.id)}
              className="sr-only"
            />
            <span className="font-medium text-gray-900">{method.label}</span>
            {method.extraFee ? (
              <span className="mt-1 text-xs text-gray-500">
                + {method.extraFee} {t("common.sar")}
              </span>
            ) : null}
          </label>
        ))}
      </div>
      <div className="pt-6 flex justify-between">
        <Button type="button" variant="outline" onClick={onBack} disabled={isSubmitting}>
          {t("common.back")}
        </Button>
        <Button
          type="button"
          variant="primary"
          onClick={() => onSubmit(selectedMethod)}
          isLoading={isSubmitting}
        >
          {t("checkout.place_order")}
        </Button>
      </div>
    </div>
  );
}
