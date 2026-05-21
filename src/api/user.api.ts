import { api } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

export const userApi = {
  profile: () => api.get("user/profile"),
  loyalty: () => api.get(endpoints.loyalty),
  loyaltyTransactions: () => api.get(endpoints.loyaltyTx),
};
