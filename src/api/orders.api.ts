import { api } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

export const ordersApi = {
  list: () => api.get(endpoints.userOrders),
  detail: (orderNumber: string) => api.get(endpoints.userOrder(orderNumber)),
};
