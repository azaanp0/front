import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { STORE } from "@/constants/store";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Helmet>
        <title>تواصل معنا | {STORE.name}</title>
      </Helmet>
      <div className="mx-auto max-w-content px-4 py-10">
        <h1 className="mb-8 text-3xl font-bold text-[var(--store-text-primary)]">تواصلي مع {STORE.name}</h1>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <a
              href={`https://wa.me/${STORE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[var(--product-border-color)] p-4 hover:bg-[var(--color-primary-light)]/30"
            >
              <MessageCircle className="h-8 w-8 text-[#22c55e]" />
              <div>
                <p className="font-bold">واتساب</p>
                <p className="text-sm text-[var(--store-text-secondary)]">{STORE.whatsapp}</p>
              </div>
            </a>
            <a
              href={`tel:${STORE.phone}`}
              className="flex items-center gap-3 rounded-xl border border-[var(--product-border-color)] p-4 hover:bg-[var(--color-primary-light)]/30"
            >
              <Phone className="h-8 w-8 text-[var(--color-primary)]" />
              <div>
                <p className="font-bold">الهاتف</p>
                <p className="text-sm">{STORE.phone}</p>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-[var(--product-border-color)] p-4">
              <Mail className="h-8 w-8 text-[var(--color-primary)]" />
              <div>
                <p className="font-bold">البريد</p>
                <p className="text-sm">info@{STORE.nameEn.toLowerCase()}.sa</p>
              </div>
            </div>
          </div>
          <form
            className="rounded-xl border border-[var(--product-border-color)] bg-[var(--product-bg)] p-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <h2 className="mb-4 font-bold">أرسلي رسالة</h2>
            <input
              required
              placeholder="الاسم"
              className="mb-3 w-full rounded-lg border border-[var(--product-border-color)] px-4 py-3 text-sm"
            />
            <input
              required
              type="email"
              placeholder="البريد الإلكتروني"
              className="mb-3 w-full rounded-lg border border-[var(--product-border-color)] px-4 py-3 text-sm"
            />
            <textarea
              required
              rows={4}
              placeholder="رسالتك"
              className="mb-4 w-full rounded-lg border border-[var(--product-border-color)] px-4 py-3 text-sm"
            />
            <button type="submit" className="product-enhanced-btn w-full rounded-lg py-3 font-semibold">
              إرسال
            </button>
            {sent ? <p className="mt-3 text-sm text-green-600">تم استلام رسالتك — سنرد عليكِ قريباً</p> : null}
          </form>
        </div>
        <Link to="/" className="mt-8 inline-block text-[var(--color-primary-dark)] hover:underline">
          العودة للرئيسية
        </Link>
      </div>
    </>
  );
}
