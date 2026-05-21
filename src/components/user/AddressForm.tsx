import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  title: z.string().min(2),
  city: z.string().min(2),
  district: z.string().min(2),
  street: z.string().min(2),
});

type FormValues = z.infer<typeof schema>;

export function AddressForm({ onSuccess }: { onSuccess: () => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input label="اسم العنوان (مثل: المنزل)" {...register("title")} error={errors.title?.message} />
      <Input label="المدينة" {...register("city")} error={errors.city?.message} />
      <Input label="الحي" {...register("district")} error={errors.district?.message} />
      <Input label="الشارع" {...register("street")} error={errors.street?.message} />
      <Button type="submit" variant="primary" className="w-full">حفظ العنوان</Button>
    </form>
  );
}
