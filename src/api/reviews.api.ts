import { api } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

export const reviewsApi = {
  create: (body: unknown) => api.post(endpoints.reviews, body),
  vote: (id: number, body: unknown) => api.post(endpoints.reviewVote(id), body),
};
