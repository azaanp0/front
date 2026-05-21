import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--product-enhanced-btn-bg)] text-[var(--product-enhanced-btn-color)] font-semibold hover:bg-[var(--color-primary-dark)] shadow-card hover:shadow-card-hover",
  secondary: "bg-secondary text-white hover:bg-secondary-dark",
  ghost: "bg-transparent text-secondary hover:bg-primary-50",
  outline: "border border-primary text-secondary hover:bg-primary-50",
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded-[var(--radius-md)] px-4 py-2.5 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
