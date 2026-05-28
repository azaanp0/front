import { ShoppingBag, Star } from "lucide-react";

export function NotificationsPanel() {
  const notifications = [
    {
      id: 1,
      type: "order",
      title: "تم شحن طلبك!",
      desc: "طلبك رقم DA-1001 في طريقه إليك الآن.",
      time: "منذ ساعتين",
      unread: true,
      icon: ShoppingBag,
    },
    {
      id: 2,
      type: "promo",
      title: "خصم 30% على منتجات العناية بالشعر",
      desc: "استخدمي الكود HAIR30 قبل نهاية اليوم.",
      time: "منذ يوم",
      unread: false,
      icon: Star,
    },
  ];

  return (
    <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b p-4">
        <h3 className="font-bold text-gray-900">الإشعارات</h3>
        <button className="text-sm text-primary hover:underline">
          تحديد الكل كمقروء
        </button>
      </div>
      <div className="divide-y">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`flex gap-4 p-4 transition hover:bg-gray-50 ${n.unread ? "bg-primary-50/30" : ""}`}
          >
            <div
              className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${n.type === "order" ? "bg-success-bg text-success" : "bg-accent-light text-accent"}`}
            >
              <n.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <p
                  className={`text-sm font-medium ${n.unread ? "text-gray-900" : "text-gray-700"}`}
                >
                  {n.title}
                </p>
                <span className="text-xs text-gray-400">{n.time}</span>
              </div>
              <p className="mt-1 text-sm text-gray-500">{n.desc}</p>
            </div>
            {n.unread && (
              <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
