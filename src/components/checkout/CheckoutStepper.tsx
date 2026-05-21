import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

export interface CheckoutStepperProps {
  currentStep: number;
}

export function CheckoutStepper({ currentStep }: CheckoutStepperProps) {
  const { t } = useTranslation();

  const steps = [
    { id: 1, label: t("checkout.address_step") },
    { id: 2, label: t("checkout.shipping_step") },
    { id: 3, label: t("checkout.payment_step") },
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between relative">
        <div className="absolute left-0 top-1/2 -z-10 h-0.5 w-full -translate-y-1/2 bg-gray-200" />
        {steps.map((step, idx) => {
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;
          return (
            <div key={step.id} className="flex flex-col items-center bg-white px-2">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                  isCompleted
                    ? "bg-primary text-white"
                    : isCurrent
                    ? "border-2 border-primary bg-white text-primary"
                    : "border-2 border-gray-200 bg-white text-gray-400"
                )}
              >
                {isCompleted ? <Check className="h-4 w-4" /> : step.id}
              </div>
              <span
                className={cn(
                  "mt-2 text-xs font-medium",
                  isCurrent || isCompleted ? "text-gray-900" : "text-gray-400"
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
