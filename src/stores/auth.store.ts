import { create } from "zustand";
import type { User } from "@/types/user.types";
import { storageRemove, storageSet } from "@/utils/storage";

const TOKEN_KEY = "da_access_token";
const REFRESH_KEY = "da_refresh_token";

interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  isAuthModalOpen: boolean;
  authModalTab: "login" | "register";
  setUser: (user: User) => void;
  setTokens: (token: string, refreshToken: string) => void;
  logout: () => void;
  openAuthModal: (tab?: "login" | "register") => void;
  closeAuthModal: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isAuthModalOpen: false,
  authModalTab: "login",
  setUser: (user) => set({ user, isLoggedIn: true }),
  setTokens: (token, refreshToken) => {
    storageSet(TOKEN_KEY, token);
    storageSet(REFRESH_KEY, refreshToken);
    set({ token, refreshToken, isLoggedIn: true });
  },
  logout: () => {
    storageRemove(TOKEN_KEY);
    storageRemove(REFRESH_KEY);
    set({
      user: null,
      token: null,
      refreshToken: null,
      isLoggedIn: false,
      isAuthModalOpen: false,
    });
  },
  openAuthModal: (tab = "login") =>
    set({ isAuthModalOpen: true, authModalTab: tab }),
  closeAuthModal: () => set({ isAuthModalOpen: false }),
}));
