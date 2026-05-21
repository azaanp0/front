import { api } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

export const authApi = {
  login: (body: unknown) => api.post(endpoints.authLogin, body),
  register: (body: unknown) => api.post(endpoints.authRegister, body),
  logout: () => api.post(endpoints.authLogout),
};
