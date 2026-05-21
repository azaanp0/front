import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { CDN } from "@/constants/store";
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
            <Link to="/offers" className="block overflow-hidden rounded-md">
              <img
                src={image}
                alt={`بانر دار الأميرات ${i + 1}`}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
