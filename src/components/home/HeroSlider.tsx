import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { STORE } from "@/constants/store";
import type { Banner } from "@/types/banner.types";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export function HeroSlider({
  banners,
  dir,
}: {
  banners: Banner[];
  dir: "rtl" | "ltr";
}) {
  if (!banners.length) return null;

  return (
    <section className="advanced-slider relative w-full overflow-hidden rounded-[32px] shadow-[0_32px_90px_rgba(15,23,42,0.18)]">
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
            <Link
              to={b.link}
              className="advanced-slider__slide relative block w-full"
              aria-label={b.alt_ar}
            >
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet={b.image_mobile ?? b.image_desktop}
                />
                <ResponsiveImage
                  src={b.image_desktop}
                  alt={b.alt_ar}
                  className="advanced-slider__image h-[min(75vh,760px)] w-full object-cover object-center md:h-[min(85vh,860px)]"
                  loading="eager"
                  fetchPriority="high"
                  width={1920}
                  height={1080}
                />
              </picture>
              <div className="hero-overlay pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-end justify-center px-6 py-8 md:px-12 md:py-14">
                <div className="w-full max-w-3xl rounded-[28px] bg-black/40 p-6 text-white backdrop-blur-xl shadow-2xl shadow-black/20">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-200">
                    عروض حصرية
                  </span>
                  <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
                    {b.title_ar ?? b.alt_ar}
                  </h2>
                  <p className="mt-4 text-sm text-white/80 sm:text-base">
                    اكتشفي أجمل المنتجات والعروض المميزة الآن.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden md:block">
        <div className="mx-auto max-w-content px-6 pb-16">
          <div className="max-w-lg animate-sahr-float rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <p className="mb-1 text-sm font-medium tracking-widest text-white/90">
              مرحباً بكِ في
            </p>
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
