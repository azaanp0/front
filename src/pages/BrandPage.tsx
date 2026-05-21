import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { ProductGrid } from "@/components/product/ProductGrid";
import { mockProducts } from "@/data/fixtures";

export default function BrandPage() {
  const { slug } = useParams();
  
  // Mock data
  const brandName = slug ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : "الماركة";
  const products = mockProducts(12, slug || "brand");

  return (
    <>
      <Helmet>
        <title>
          {brandName} | {import.meta.env.VITE_APP_NAME ?? "سحر"}
        </title>
      </Helmet>
      <div className="mx-auto max-w-content px-4 py-12">
        <div className="mb-12 rounded-2xl bg-gray-100 p-8 text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm">
            <span className="text-2xl font-bold text-primary">{brandName.charAt(0)}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{brandName}</h1>
          <p className="mt-2 text-gray-500">تسوقي أحدث منتجات {brandName} الأصلية</p>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">عرض {products.length} منتج</p>
          <select className="rounded-md border-gray-300 text-sm focus:border-primary focus:ring-primary">
            <option>الترتيب: مقترحاتنا</option>
            <option>الأحدث</option>
            <option>السعر: من الأقل</option>
          </select>
        </div>

        <ProductGrid products={products} />
      </div>
    </>
  );
}
