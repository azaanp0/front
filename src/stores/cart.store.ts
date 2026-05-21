import { create } from "zustand";
import type { Cart, CartItem, Coupon } from "@/types/cart.types";

interface CartState {
  items: CartItem[];
  coupon: Coupon | null;
  couponDiscount: number;
  subtotal: number;
  total: number;
  shipping: number;
  itemsCount: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  setCart: (cart: Cart) => void;
  optimisticAdd: (item: CartItem) => void;
  optimisticRemove: (lineId: number) => void;
  setQuantity: (lineId: number, quantity: number) => void;
}

function sumItems(items: CartItem[]) {
  const subtotal = items.reduce(
    (acc, i) => acc + i.unit_price_with_tax * i.quantity,
    0,
  );
  const threshold = Number(import.meta.env.VITE_FREE_SHIPPING_THRESHOLD ?? 199);
  const shipping = subtotal >= threshold ? 0 : 25;
  const total = subtotal + shipping;
  const itemsCount = items.reduce((acc, i) => acc + i.quantity, 0);
  return { subtotal, shipping, total, itemsCount };
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  coupon: null,
  couponDiscount: 0,
  subtotal: 0,
  total: 0,
  shipping: 0,
  itemsCount: 0,
  isDrawerOpen: false,
  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false }),
  setCart: (cart) =>
    set({
      items: cart.items,
      coupon: cart.coupon,
      subtotal: cart.subtotal,
      shipping: cart.shipping,
      total: cart.total,
      itemsCount: cart.items_count,
      couponDiscount: cart.coupon ? Math.max(0, cart.subtotal + cart.shipping - cart.total) : 0,
    }),
  optimisticAdd: (item) => {
    const items = [...get().items];
    const idx = items.findIndex(
      (i) => i.product_id === item.product_id && i.id === item.id,
    );
    if (idx >= 0) {
      items[idx] = {
        ...items[idx],
        quantity: items[idx].quantity + item.quantity,
      };
    } else {
      items.push(item);
    }
    const sums = sumItems(items);
    set({ items, ...sums });
  },
  optimisticRemove: (lineId) => {
    const items = get().items.filter((i) => i.id !== lineId);
    const sums = sumItems(items);
    set({ items, ...sums, coupon: items.length ? get().coupon : null });
  },
  setQuantity: (lineId, quantity) => {
    const items = get().items
      .map((i) => (i.id === lineId ? { ...i, quantity: Math.max(1, quantity) } : i))
      .filter((i) => i.quantity > 0);
    const sums = sumItems(items);
    set({ items, ...sums });
  },
}));
