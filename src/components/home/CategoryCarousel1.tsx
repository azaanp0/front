import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import "swiper/css";

const categories = [
  { label: "المكياج", image: "/images/promo.png" },
  { label: "العناية", image: "/images/hero.png" },
  { label: "العناية الكورية", image: "/images/app_banner.png" },
  { label: "العناية بالشعر", image: "/images/promo.png" },
  { label: "العطور", image: "/images/hero.png" },
  { label: "الهدايا", image: "/images/app_banner.png" },
  { label: "الفيتامينات", image: "/images/promo.png" },
  { label: "صحة الفم", image: "/images/hero.png" },
];

export function CategoryCarousel1() {
  return (
    <section className="s-block rectangular-links py-8 md:py-10">
      <div className="mx-auto max-w-content px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={18}
          slidesPerView={2.4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          breakpoints={{
            480: { slidesPerView: 3 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 7 },
          }}
          className="category-carousel category-carousel-1-swiper"
        >
          {categories.map((item) => (
            <SwiperSlide key={item.label} className="!w-auto">
              <Link
                to="/category"
                className="group block overflow-hidden rounded-[28px] border border-transparent bg-white shadow-[0_20px_55px_rgba(15,23,42,0.06)] transition hover:border-primary/40 hover:shadow-[0_24px_80px_rgba(139,92,246,0.15)]"
                aria-label={`قسم ${item.label}`}
              >
                <div className="relative h-28 overflow-hidden rounded-[28px]">
                  <ResponsiveImage
                    src={item.image}
                    alt={item.label}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
                </div>
                <div className="border-t border-gray-100 px-4 py-3 text-center">
                  <span className="text-sm font-semibold text-gray-900">
                    {item.label}
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
