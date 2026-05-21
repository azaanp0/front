import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";

const mockOrders = [
  { id: "DA-2024-1001", date: "2024-05-10", status: "delivered", total: 345.5, items: 3 },
  { id: "DA-2024-1025", date: "2024-05-02", status: "processing", total: 120.0, items: 1 },
];

export function OrdersList() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered": return <Badge variant="success">تم التوصيل</Badge>;
      case "processing": return <Badge variant="accent">قيد التجهيز</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      {mockOrders.map((order) => (
        <div key={order.id} className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-gray-900">{order.id}</span>
              {getStatusBadge(order.status)}
            </div>
            <div className="mt-1 flex items-center gap-4 text-sm text-gray-500">
              <span>{order.date}</span>
              <span>•</span>
              <span>{order.items} منتجات</span>
              <span>•</span>
              <span className="font-semibold text-primary">{order.total} ر.س</span>
            </div>
          </div>
          <Link
            to={`/account/orders/${order.id}`}
            className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-primary"
          >
            التفاصيل
          </Link>
        </div>
      ))}
    </div>
  );
}
