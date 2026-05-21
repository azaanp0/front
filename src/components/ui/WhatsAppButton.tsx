import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { STORE } from "@/constants/store";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 180);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "") || STORE.whatsapp;

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=مرحباً%20${encodeURIComponent(STORE.name)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-fab-pulse fixed bottom-24 start-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_8px_32px_rgba(37,211,102,0.45)] transition-all duration-500 hover:scale-110 md:bottom-8 ${
        isVisible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-6"
      }`}
      style={{ background: "var(--wa-btn-bg)" }}
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="relative z-10 h-7 w-7 fill-current" strokeWidth={1.5} />
    </a>
  );
}
