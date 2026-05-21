import { create } from "zustand";

interface WishlistState {
  productIds: Set<number>;
  isInWishlist: (id: number) => boolean;
  toggle: (id: number) => void;
  setFromApi: (ids: number[]) => void;
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  productIds: new Set(),
  isInWishlist: (id) => get().productIds.has(id),
  toggle: (id) => {
    const next = new Set(get().productIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    set({ productIds: next });
  },
  setFromApi: (ids) => set({ productIds: new Set(ids) }),
}));
