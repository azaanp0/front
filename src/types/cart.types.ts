export interface CartItem {
  id: number;
  product_id: number;
  name_ar: string;
  name_en: string;
  slug_ar: string;
  image: string;
  variant_label_ar?: string;
  unit_price_with_tax: number;
  quantity: number;
  max_quantity?: number;
}

export interface Coupon {
  code: string;
  discount_amount: number;
  discount_type: "fixed" | "percent";
}

export interface Cart {
  items: CartItem[];
  coupon: Coupon | null;
  subtotal: number;
  shipping: number;
  tax_note: string;
  total: number;
  items_count: number;
}

export type CartLineInput = {
  product_id: number;
  quantity: number;
  variant_id?: number;
};
