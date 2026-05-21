import { cn } from "@/lib/utils";

export function SectionTitle({
  title,
  subtitle,
  className,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "start";
}) {
  return (
    <div className={cn("sahr-section-title mb-8 md:mb-10", align === "start" && "text-start", className)}>
      <h2>{title}</h2>
      <div className={cn("sahr-divider", align === "start" && "justify-start")}>
        <span className="sahr-divider-gem" aria-hidden />
      </div>
      {subtitle ? (
        <p className="mx-auto mt-1 max-w-xl text-sm text-[var(--store-text-secondary)] md:text-base">{subtitle}</p>
      ) : null}
    </div>
  );
}
