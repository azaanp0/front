import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { STORE, CDN } from "@/constants/store";
import { cn } from "@/lib/utils";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export function StoreLogo({
  className,
  size = "md",
  showTagline = false,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}) {
  const sizes = {
    sm: {
      wrap: "gap-1",
      icon: "h-5 w-5",
      title: "text-2xl",
      sub: "text-[10px]",
    },
    md: {
      wrap: "gap-1.5",
      icon: "h-6 w-6",
      title: "text-[2rem] md:text-[2.25rem]",
      sub: "text-xs",
    },
    lg: { wrap: "gap-2", icon: "h-8 w-8", title: "text-5xl", sub: "text-sm" },
  };
  const s = sizes[size];

  if (!STORE.useTextLogo) {
    return (
      <Link
        to="/"
        className={cn("navbar-brand block", className)}
        aria-label={STORE.name}
      >
        <ResponsiveImage
          src={CDN.logo}
          alt={STORE.name}
          className="logo-normal h-12 w-auto object-contain"
          height={48}
          width={48}
          loading="eager"
        />
      </Link>
    );
  }

  return (
    <Link
      to="/"
      className={cn("navbar-brand group flex flex-col items-center", className)}
      aria-label={STORE.name}
    >
      <span className={cn("flex items-center", s.wrap)}>
        <Sparkles
          className={cn(
            s.icon,
            "text-[var(--color-gold)] transition duration-500 group-hover:rotate-12 group-hover:scale-110",
          )}
          strokeWidth={1.5}
        />
        <span
          className={cn(
            "text-gradient-brand font-bold leading-none tracking-tight",
            s.title,
          )}
          style={{ fontFamily: "var(--font-display)" }}
        >
          {STORE.name}
        </span>
        <Sparkles
          className={cn(
            s.icon,
            "text-[var(--color-primary)] transition duration-500 group-hover:-rotate-12 group-hover:scale-110",
          )}
          strokeWidth={1.5}
        />
      </span>
      {showTagline ? (
        <span
          className={cn(
            "mt-1 font-medium tracking-wide text-[var(--store-text-muted)] transition group-hover:text-[var(--color-primary-dark)]",
            s.sub,
          )}
        >
          {STORE.tagline}
        </span>
      ) : null}
    </Link>
  );
}
