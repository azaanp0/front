import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { CDN } from "@/constants/store";
import "swiper/css";

export function CategoryCarousel1() {
  return (
    <section className="s-block rectangular-links py-8 md:py-10">
      <div className="mx-auto max-w-content px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={3.2}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          loop
          breakpoints={{
            480: { slidesPerView: 4 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
          }}
          className="category-carousel category-carousel-1-swiper !overflow-visible"
        >
          {CDN.categories1.map((image, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <Link
                to="/category"
                className="group block rounded-2xl border border-transparent p-2 transition hover:border-[var(--color-primary)]/40 hover:bg-white hover:shadow-[var(--shadow-card)]"
                aria-label={`قسم ${index + 1}`}
              >
                <div className="mx-auto w-fit overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[var(--color-primary-light)]/30 p-2">
                  <img
                    src={image}
                    alt={`قسم ${index + 1}`}
                    className="mx-auto h-20 w-20 object-contain md:h-28 md:w-28"
                    loading="lazy"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
