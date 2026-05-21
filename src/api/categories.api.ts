import { api, unwrapData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { mockCategories } from "@/data/categories.mock";
import type { Category } from "@/types/category.types";

export async function fetchCategories(): Promise<Category[]> {
  try {
    const res = await api.get(endpoints.categories);
    return unwrapData(res) as Category[];
  } catch {
    return mockCategories;
  }
}
