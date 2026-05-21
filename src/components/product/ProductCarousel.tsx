import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import type { Product } from "@/types/product.types";
import { ProductCard } from "@/components/product/ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function ProductCarousel({
  products,
  dir,
}: {
  products: Product[];
  dir: "rtl" | "ltr";
}) {
  const { i18n } = useTranslation();

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      dir={dir}
      spaceBetween={16}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      key={i18n.language}
      className="product-carousel !pb-10"
    >
      {products.map((p) => (
        <SwiperSlide key={p.id} className="!h-auto">
          <ProductCard product={p} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
