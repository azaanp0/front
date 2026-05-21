import { Link } from "react-router-dom";
import { CDN } from "@/constants/store";

export function FixedGifBanner() {
  return (
    <section className="s-block--fixed-banner w-full">
      <div className="mx-auto max-w-content px-4 py-4">
        <Link to="/offers" className="banner banner--fixed block overflow-hidden" aria-label="بانر متحرك">
          <picture>
            <source media="(max-width: 767px)" srcSet={CDN.fixedGifMobile} />
            <img
              src={CDN.fixedGifDesktop}
              alt="بانر دار الأميرات"
              className="h-auto max-w-full object-contain"
              width={1200}
              height={300}
            />
          </picture>
        </Link>
      </div>
    </section>
  );
}
