import { create } from "zustand";

interface UiState {
  mobileMenuOpen: boolean;
  searchFocused: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  setSearchFocused: (v: boolean) => void;
}

export const useUiStore = create<UiState>((set) => ({
  mobileMenuOpen: false,
  searchFocused: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  setSearchFocused: (v) => set({ searchFocused: v }),
}));
