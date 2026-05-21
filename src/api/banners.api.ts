import { api, unwrapData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { mockHeroBanners } from "@/data/fixtures";

export async function fetchBannersByPosition(position: string) {
  try {
    const res = await api.get(endpoints.banners(position));
    return unwrapData(res);
  } catch {
    if (position === "hero_slider") return mockHeroBanners;
    return [];
  }
}
