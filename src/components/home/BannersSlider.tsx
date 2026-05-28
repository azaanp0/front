import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { CDN } from "@/constants/store";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import "swiper/css";
import "swiper/css/pagination";

export function BannersSlider() {
  return (
    <section className="banners-slider mx-auto max-w-content px-4 py-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
      >
        {CDN.sliderBanners.map((image, i) => (
          <SwiperSlide key={i}>
            <Link
              to="/offers"
              className="block overflow-hidden rounded-[28px] shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
            >
              <ResponsiveImage
                src={image}
                alt={`بانر سحر ${i + 1}`}
                className="h-[min(40vh,440px)] w-full object-cover"
                loading="lazy"
                width={1600}
                height={620}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
