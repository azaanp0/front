import { api, unwrapData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { mockPastelProduct } from "@/data/fixtures";
import type { Product } from "@/types/product.types";
import type { ApiResponse } from "@/types/api.types";

export async function fetchProductBySlug(slug: string): Promise<Product> {
  try {
    const res = await api.get<ApiResponse<Product>>(endpoints.productBySlug(slug));
    return unwrapData(res);
  } catch {
    if (slug === mockPastelProduct.slug_ar) {
      return mockPastelProduct;
    }
    throw new Error("Product not found");
  }
}

export async function fetchRelatedProducts(productId: number): Promise<Product[]> {
  try {
    const res = await api.get(endpoints.relatedProducts(productId));
    return unwrapData(res) as Product[];
  } catch {
    return [];
  }
}
