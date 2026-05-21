import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocaleStore } from "@/stores/locale.store";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  const dir = useLocaleStore((s) => s.dir);

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const PrevIcon = dir === "rtl" ? ChevronRight : ChevronLeft;
  const NextIcon = dir === "rtl" ? ChevronLeft : ChevronRight;

  return (
    <nav className={cn("flex items-center justify-center gap-1", className)}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
      >
        <PrevIcon className="h-5 w-5" />
        <span className="sr-only">Previous page</span>
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md border text-sm font-medium transition-colors",
            currentPage === page
              ? "border-primary bg-primary-50 text-secondary"
              : "border-transparent text-gray-700 hover:bg-gray-100"
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
      >
        <NextIcon className="h-5 w-5" />
        <span className="sr-only">Next page</span>
      </button>
    </nav>
  );
}
