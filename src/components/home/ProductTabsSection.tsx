import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { mockProducts } from "@/data/fixtures";
import type { ProductTabConfig } from "@/constants/store";
import { cn } from "@/lib/utils";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function ProductTabsSection({ config }: { config: ProductTabConfig }) {
  const [activeTab, setActiveTab] = useState(0);
  const tab = config.tabs[activeTab];
  const products = mockProducts(8, tab.seed);

  return (
    <section className="s-block--product-tabs py-12 md:py-16">
      <div className="mx-auto max-w-content px-4">
        <SectionTitle title={config.title} />

        <div className="product-tabs-container mb-8 flex flex-wrap justify-center gap-2">
          {config.tabs.map((t, i) => (
            <button
              key={t.seed}
              type="button"
              className={cn("sahr-pill", activeTab === i && "active")}
              onClick={() => setActiveTab(i)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div key={activeTab} className="product-tabs-panel rounded-2xl border border-[var(--product-border-color)] bg-[var(--bg-elevated)] p-4 shadow-[var(--shadow-soft)] md:p-6">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={2}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products.map((p) => (
              <SwiperSlide key={`${tab.seed}-${p.id}`} className="!h-auto py-2">
                <ProductCard product={p} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-8 flex justify-center">
            <Link
              to={config.viewAllHref}
              className="product-enhanced-btn inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-bold"
            >
              عرض الكل
              <ChevronLeft className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
