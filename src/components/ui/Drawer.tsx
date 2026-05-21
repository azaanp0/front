import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocaleStore } from "@/stores/locale.store";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Drawer({ isOpen, onClose, title, children, className }: DrawerProps) {
  const [mounted, setMounted] = useState(false);
  const dir = useLocaleStore((s) => s.dir);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex bg-black/50 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      <div
        className={cn(
          "relative flex h-full w-[90%] max-w-sm flex-col bg-white shadow-modal transition-transform duration-300 ease-in-out sm:w-full sm:max-w-md",
          dir === "rtl" ? "ms-auto" : "me-auto",
          className
        )}
      >
        <div className="flex items-center justify-between border-b px-4 py-4 sm:px-6">
          {title && <h2 className="text-lg font-bold text-gray-900">{title}</h2>}
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close drawer</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>,
    document.body
  );
}
