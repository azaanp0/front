import { useEffect, useState } from "react";

export function LoadingOverlay() {
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible");

  useEffect(() => {
    const fade = () => setPhase("fading");
    if (document.readyState === "complete") {
      const t = window.setTimeout(fade, 350);
      return () => window.clearTimeout(t);
    }
    window.addEventListener("load", fade);
    const fallback = window.setTimeout(fade, 2200);
    return () => {
      window.removeEventListener("load", fade);
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (phase !== "fading") return;
    const t = window.setTimeout(() => setPhase("gone"), 500);
    return () => window.clearTimeout(t);
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      className="loading-overlay fixed inset-0 z-[99999] flex items-center justify-center backdrop-blur-[20px] transition-opacity duration-500"
      style={{
        backgroundColor: "rgb(255 255 255 / 0.5)",
        opacity: phase === "fading" ? 0 : 1,
      }}
      aria-hidden={phase !== "visible"}
    >
      <div
        className="spinner h-12 w-12 animate-spin rounded-full border-4 border-[var(--color-primary)] border-t-transparent"
        role="status"
        aria-label="جاري التحميل"
      />
    </div>
  );
}
