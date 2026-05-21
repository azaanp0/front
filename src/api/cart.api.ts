import { api } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

export const cartApi = {
  get: () => api.get(endpoints.cart),
  addItem: (body: unknown) => api.post(endpoints.cartItems, body),
  updateItem: (id: number, body: unknown) => api.put(endpoints.cartItem(id), body),
  removeItem: (id: number) => api.delete(endpoints.cartItem(id)),
};
