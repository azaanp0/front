import { Award } from "lucide-react";
import { ProgressBar } from "@/components/ui/ProgressBar";

export function LoyaltyCard() {
  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-xl bg-gradient-to-br from-primary-dark to-secondary p-6 text-white shadow-lg">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-white/20 p-3">
            <Award className="h-8 w-8" />
          </div>
          <div>
            <p className="text-sm text-white/80">رصيد النقاط الحالي</p>
            <h2 className="text-3xl font-bold">1,250 <span className="text-lg font-normal">نقطة</span></h2>
          </div>
        </div>
        
        <div className="mt-8 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
          <div className="mb-2 flex justify-between text-sm">
            <span>المستوى الحالي: فضي</span>
            <span>باقي 750 نقطة للذهبي</span>
          </div>
          <ProgressBar value={1250} max={2000} colorClass="bg-accent" className="bg-white/20" />
        </div>
        
        <div className="mt-6 flex justify-between text-sm">
          <p>قيمة النقاط: <strong>12.5 ر.س</strong></p>
          <p>100 نقطة = 1 ريال سعودي</p>
        </div>
      </div>

      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <h3 className="mb-4 font-bold text-gray-900">سجل النقاط</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-gray-50 pb-3">
            <div>
              <p className="font-medium text-gray-900">شراء طلب #DA-1001</p>
              <p className="text-xs text-gray-500">10 مايو 2024</p>
            </div>
            <span className="font-bold text-success">+345 نقطة</span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-50 pb-3">
            <div>
              <p className="font-medium text-gray-900">استبدال نقاط في طلب #DA-0992</p>
              <p className="text-xs text-gray-500">1 مايو 2024</p>
            </div>
            <span className="font-bold text-sale">-500 نقطة</span>
          </div>
        </div>
      </div>
    </div>
  );
}
