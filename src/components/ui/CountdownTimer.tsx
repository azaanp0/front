import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type UnitKey = "hours" | "minutes" | "seconds";

function getTimeLeft(endsAt: string) {
  const end = new Date(endsAt).getTime();
  const now = Date.now();
  const diff = Math.max(0, end - now);
  const hours = Math.floor(diff / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { hours, minutes, seconds };
}

export function CountdownTimer({
  endsAt,
  className,
}: {
  endsAt: string;
  className?: string;
}) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(endsAt));

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(getTimeLeft(endsAt)), 1000);
    return () => clearInterval(t);
  }, [endsAt]);

  const units: { key: UnitKey; label: string }[] = [
    { key: "hours", label: "h" },
    { key: "minutes", label: "m" },
    { key: "seconds", label: "s" },
  ];

  return (
    <div
      className={cn("flex items-center gap-2 font-mono", className)}
      dir="ltr"
    >
      {units.map(({ key }) => (
        <div
          key={key}
          className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-sm font-bold text-secondary shadow-card"
        >
          {String(timeLeft[key]).padStart(2, "0")}
        </div>
      ))}
    </div>
  );
}
