import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const addressSchema = z.object({
  fullName: z.string().min(3),
  phone: z.string().regex(/^05\d{8}$/, "رقم الجوال يجب أن يبدأ بـ 05 ويتكون من 10 أرقام"),
  city: z.string().min(2),
  district: z.string().min(2),
  street: z.string().min(2),
  building: z.string().min(1),
});

type AddressFormValues = z.infer<typeof addressSchema>;

interface AddressStepProps {
  onNext: (data: AddressFormValues) => void;
}

export function AddressStep({ onNext }: AddressStepProps) {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
  });

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
      <h2 className="mb-6 text-xl font-bold text-gray-900">{t("checkout.address_step")}</h2>
      <form onSubmit={handleSubmit(onNext)} className="space-y-4">
        <Input
          label="الاسم الكامل"
          {...register("fullName")}
          error={errors.fullName?.message}
        />
        <Input
          label="رقم الجوال"
          placeholder="05XXXXXXXX"
          dir="ltr"
          className="text-right"
          {...register("phone")}
          error={errors.phone?.message}
        />
        <div className="grid grid-cols-2 gap-4">
          <Input label="المدينة" {...register("city")} error={errors.city?.message} />
          <Input label="الحي" {...register("district")} error={errors.district?.message} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input label="الشارع" {...register("street")} error={errors.street?.message} />
          <Input label="رقم المبنى" {...register("building")} error={errors.building?.message} />
        </div>
        <div className="pt-4 flex justify-end">
          <Button type="submit" variant="primary">
            {t("common.next")}
          </Button>
        </div>
      </form>
    </div>
  );
}
