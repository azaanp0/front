import { useQuery } from "@tanstack/react-query";
import { fetchHomepage } from "@/api/homepage.api";

export function useHomepage() {
  return useQuery({
    queryKey: ["homepage"],
    queryFn: fetchHomepage,
    staleTime: 5 * 60 * 1000,
  });
}
