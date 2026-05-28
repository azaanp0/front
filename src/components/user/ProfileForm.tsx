import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useAuthStore } from "@/stores/auth.store";
import toast from "react-hot-toast";

const profileSchema = z.object({
  first_name: z.string().min(2),
  last_name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^05\d{8}$/, "رقم الجوال غير صحيح"),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export function ProfileForm() {
  const { t } = useTranslation();
  const user = useAuthStore((s) => s.user);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      email: user?.email || "",
      phone: user?.phone || "",
    },
  });

  const onSubmit = async (_data: ProfileFormValues) => {
    // Simulate API request
    await new Promise((res) => setTimeout(res, 1000));
    toast.success(t("common.save") + " ✓");
  };

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="الاسم الأول"
            {...register("first_name")}
            error={errors.first_name?.message}
          />
          <Input
            label="الاسم الأخير"
            {...register("last_name")}
            error={errors.last_name?.message}
          />
        </div>
        <Input
          label="البريد الإلكتروني"
          type="email"
          dir="ltr"
          className="text-right"
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          label="رقم الجوال"
          dir="ltr"
          className="text-right"
          {...register("phone")}
          error={errors.phone?.message}
        />

        <div className="pt-4">
          <Button type="submit" variant="primary" isLoading={isSubmitting}>
            {t("common.save")}
          </Button>
        </div>
      </form>
    </div>
  );
}
