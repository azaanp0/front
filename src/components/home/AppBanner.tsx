import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { CDN, STORE } from "@/constants/store";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
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
          <a
            href={STORE.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block overflow-hidden rounded-[30px] shadow-[0_24px_70px_rgba(15,23,42,0.14)]"
          >
            <ResponsiveImage
              src={CDN.appBanner}
              alt="تطبيق سحر"
              className="h-[min(35vh,420px)] w-full object-cover"
              loading="lazy"
              width={1600}
              height={420}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
