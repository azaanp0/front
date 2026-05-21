import type { Coupon } from "./cart.types";

export interface CouponApplyResult {
  coupon: Coupon;
  subtotal: number;
  discount: number;
  total: number;
}
