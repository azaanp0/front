import axios, { AxiosError, type AxiosResponse, isAxiosError } from "axios";
import { useAuthStore } from "@/stores/auth.store";
import { useLocaleStore } from "@/stores/locale.store";
import { getSessionId } from "@/utils/storage";
import type { ApiResponse } from "@/types/api.types";

export class ValidationError extends Error {
  errors: Record<string, string[]>;
  message_ar?: string;

  constructor(message: string, errors: Record<string, string[]>, message_ar?: string) {
    super(message);
    this.name = "ValidationError";
    this.errors = errors;
    this.message_ar = message_ar;
  }
}

const baseURL = `${import.meta.env.VITE_API_URL ?? "http://localhost:8000"}/api/v1`;

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  const locale = useLocaleStore.getState().locale;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers["Accept-Language"] = locale;
  config.headers["X-Session-ID"] = getSessionId();
  return config;
});

api.interceptors.response.use(
  (res: AxiosResponse<ApiResponse<unknown>>) => {
    if (res.status === 503) {
      window.location.href = "/maintenance";
    }
    return res;
  },
  async (error: AxiosError<ApiResponse<unknown>>) => {
    if (error.response?.status === 401 && useAuthStore.getState().token) {
      useAuthStore.getState().logout();
    }
    if (error.response?.status === 503) {
      window.location.href = "/maintenance";
    }
    if (error.response?.status === 422 && error.response.data?.errors) {
      const d = error.response.data;
      throw new ValidationError(
        d.message ?? "Validation failed",
        d.errors ?? {},
        d.message,
      );
    }
    if (isAxiosError(error) && !error.response) {
      throw new Error(error.message);
    }
    throw error;
  },
);

export function unwrapData<T>(res: AxiosResponse<ApiResponse<T>>): T {
  const body = res.data;
  if (!body || typeof body !== "object") {
    throw new Error("Invalid response");
  }
  if (body && body.success === false && body.errors) {
    const first = Object.values(body.errors).flat()[0];
    throw new ValidationError(
      first ?? body.message,
      body.errors,
      body.message,
    );
  }
  if (body.data === undefined || body.data === null) {
    throw new Error("Invalid response: missing data");
  }
  return body.data;
}
