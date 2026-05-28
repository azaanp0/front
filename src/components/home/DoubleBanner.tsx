import { CDN, STORE } from "@/constants/store";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export function DoubleBanner() {
  return (
    <section className="s-block--double-banner mx-auto max-w-content px-4 py-4">
      <div className="flex items-stretch gap-2 md:gap-4">
        <a
          href={STORE.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className="banner banner--fixed flex h-auto basis-1/2 overflow-hidden"
          aria-label="بانر"
        >
          <ResponsiveImage
            src={CDN.doubleLeft}
            alt="بانر"
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </a>
        <a
          href={STORE.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className="banner banner--fixed flex h-auto basis-1/2 overflow-hidden"
          aria-label="بانر"
        >
          <ResponsiveImage
            src={CDN.doubleRight}
            alt="بانر"
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </a>
      </div>
    </section>
  );
}
