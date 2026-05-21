import { api } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

export const wishlistApi = {
  list: () => api.get(endpoints.wishlist),
  add: (productId: number) => api.post(endpoints.wishlistProduct(productId)),
  remove: (productId: number) => api.delete(endpoints.wishlistProduct(productId)),
};
