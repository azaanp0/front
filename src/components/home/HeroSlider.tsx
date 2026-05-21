import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { STORE } from "@/constants/store";
import type { Banner } from "@/types/banner.types";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export function HeroSlider({ banners, dir }: { banners: Banner[]; dir: "rtl" | "ltr" }) {
  if (!banners.length) return null;

  return (
    <section className="advanced-slider relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1800}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop={banners.length > 1}
        pagination={{ clickable: true }}
        dir={dir}
        className="hero-swiper w-full"
      >
        {banners.map((b) => (
          <SwiperSlide key={b.id}>
            <Link to={b.link} className="advanced-slider__slide relative block w-full" aria-label={b.alt_ar}>
              <picture>
                <source media="(max-width: 767px)" srcSet={b.image_mobile ?? b.image_desktop} />
                <img
                  src={b.image_desktop}
                  alt={b.alt_ar}
                  className="advanced-slider__image h-auto max-h-[min(75vh,780px)] min-h-[280px] w-full object-cover object-center md:min-h-[420px]"
                  loading="eager"
                  fetchPriority="high"
                  width={1920}
                  height={1080}
                />
              </picture>
              <div className="hero-overlay pointer-events-none absolute inset-0" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden md:block">
        <div className="mx-auto max-w-content px-6 pb-16">
          <div className="max-w-lg animate-sahr-float rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <p className="mb-1 text-sm font-medium tracking-widest text-white/90">مرحباً بكِ في</p>
            <h2
              className="text-4xl font-bold text-white drop-shadow-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {STORE.name}
            </h2>
            <p className="mt-2 text-white/85">{STORE.tagline}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
              اكتشفي العروض
              <ChevronLeft className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
