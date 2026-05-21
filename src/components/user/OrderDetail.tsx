import { Badge } from "@/components/ui/Badge";
import { Check, Truck, Package, CreditCard } from "lucide-react";

export function OrderDetail({ orderId }: { orderId: string }) {
  // Mock data
  const order = {
    id: orderId,
    date: "2024-05-10",
    status: "processing",
    shipping: "توصيل عادي (2-4 أيام)",
    payment: "بطاقة بنكية",
    address: "الرياض، حي الملقا، شارع الأمير محمد بن سعد",
  };

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">الطلب {order.id}</h2>
            <p className="text-sm text-gray-500">{order.date}</p>
          </div>
          <Badge variant="accent">قيد التجهيز</Badge>
        </div>

        {/* Timeline */}
        <div className="py-8">
          <div className="relative mx-auto flex max-w-2xl justify-between">
            <div className="absolute top-5 -z-10 h-0.5 w-full bg-gray-100" />
            <div className="absolute top-5 -z-10 h-0.5 w-1/2 bg-primary transition-all" />
            
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white"><CreditCard className="h-5 w-5" /></div>
              <span className="text-xs font-medium text-gray-900">تم الدفع</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white"><Package className="h-5 w-5" /></div>
              <span className="text-xs font-medium text-gray-900">قيد التجهيز</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-gray-400"><Truck className="h-5 w-5" /></div>
              <span className="text-xs font-medium text-gray-500">تم الشحن</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-gray-400"><Check className="h-5 w-5" /></div>
              <span className="text-xs font-medium text-gray-500">تم التوصيل</span>
            </div>
          </div>
        </div>

        {/* Details Grids */}
        <div className="grid gap-6 border-t pt-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="mb-1 text-sm text-gray-500">عنوان التوصيل</p>
            <p className="text-sm font-medium text-gray-900">{order.address}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-500">طريقة الدفع</p>
            <p className="text-sm font-medium text-gray-900">{order.payment}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-500">طريقة الشحن</p>
            <p className="text-sm font-medium text-gray-900">{order.shipping}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
