import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { CDN, STORE } from "@/constants/store";
import "swiper/css";
import "swiper/css/pagination";

export function AppBanner() {
  return (
    <section className="banners-slider mx-auto max-w-content px-4 py-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="app-banner-swiper"
      >
        <SwiperSlide>
          <a href={STORE.appStore} target="_blank" rel="noopener noreferrer">
            <img
              src={CDN.appBanner}
              alt="تطبيق دار الأميرات"
              className="h-auto w-full rounded-md object-contain"
              loading="lazy"
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
