export type OrderStatus =
  | "pending_payment"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface OrderSummary {
  id: number;
  number: string;
  created_at: string;
  status: OrderStatus;
  total: number;
}
