import { api, unwrapData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

export async function fetchFlashDeals() {
  const res = await api.get(endpoints.flashDeals);
  return unwrapData(res);
}
