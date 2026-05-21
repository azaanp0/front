import { api, unwrapData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

export async function searchProducts(q: string) {
  const res = await api.get(endpoints.search(q));
  return unwrapData(res);
}

export async function suggestSearch(q: string) {
  const res = await api.get(endpoints.searchSuggest(q));
  return unwrapData(res);
}

export async function trendingSearches() {
  const res = await api.get(endpoints.searchTrending);
  return unwrapData(res);
}
