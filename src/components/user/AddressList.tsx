import { Button } from "@/components/ui/Button";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { AddressForm } from "./AddressForm";
import { Modal } from "@/components/ui/Modal";

export function AddressList() {
  const [addresses, setAddresses] = useState([
    { id: 1, title: "المنزل", full_address: "الرياض، حي الملقا، شارع الأمير محمد بن سعد", is_default: true },
    { id: 2, title: "العمل", full_address: "الرياض، حي العليا، طريق الملك فهد", is_default: false },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button variant="primary" className="gap-2" onClick={() => setIsModalOpen(true)}>
          <Plus className="h-4 w-4" />
          إضافة عنوان جديد
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {addresses.map((addr) => (
          <div key={addr.id} className="relative rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            {addr.is_default && (
              <span className="absolute start-5 top-0 -translate-y-1/2 rounded-full bg-primary-50 px-2 py-0.5 text-xs font-semibold text-secondary">
                الافتراضي
              </span>
            )}
            <h3 className="mb-2 font-bold text-gray-900">{addr.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{addr.full_address}</p>
            
            <div className="mt-4 flex gap-3 border-t pt-3">
              <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary transition">
                <Pencil className="h-4 w-4" />
                تعديل
              </button>
              <button className="flex items-center gap-1 text-sm text-sale hover:text-red-700 transition">
                <Trash2 className="h-4 w-4" />
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="إضافة عنوان جديد">
        <AddressForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}
