import { api, unwrapData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { type HomepageData, mockHomepage } from "@/data/fixtures";

export async function fetchHomepage(): Promise<HomepageData> {
  try {
    const res = await api.get(endpoints.homepage);
    return unwrapData(res) as HomepageData;
  } catch {
    return mockHomepage;
  }
}
