import { Helmet } from "react-helmet-async";
import { useHomepage } from "@/hooks/useHomepage";
import { useLocaleStore } from "@/stores/locale.store";
import { mockHomepage } from "@/data/fixtures";
import { STORE, HOME_PRODUCT_SECTIONS } from "@/constants/store";
import { HeroSlider } from "@/components/home/HeroSlider";
import { AppBanner } from "@/components/home/AppBanner";
import { DoubleBanner } from "@/components/home/DoubleBanner";
import { FixedGifBanner } from "@/components/home/FixedGifBanner";
import { CategoryCarousel1 } from "@/components/home/CategoryCarousel1";
import { CategoryCarousel2 } from "@/components/home/CategoryCarousel2";
import { DoubleBanner2 } from "@/components/home/DoubleBanner2";
import { DynamicGifBanner } from "@/components/home/DynamicGifBanner";
import { ProductTabsSection } from "@/components/home/ProductTabsSection";
import { BannersSlider } from "@/components/home/BannersSlider";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { BrandShowcase } from "@/components/home/BrandShowcase";
import { FlashDealsSection } from "@/components/home/FlashDealsSection";
import {
  EditorialBanner,
  HairTypeSelector,
  KoreanBeautySection,
  MakeupStepsSection,
  ProductRowSection,
  ProductVariantShowcase,
} from "@/components/home/MoreSections";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { TrustBar } from "@/components/home/TrustBar";

export default function HomePage() {
  const dir = useLocaleStore((s) => s.dir);
  const { data } = useHomepage();
  const homepage = data ?? mockHomepage;

  return (
    <>
      <Helmet>
        <title>
          {STORE.name} — {STORE.tagline}
        </title>
        <meta name="description" content={STORE.metaDescription} />
      </Helmet>

      <HeroSlider banners={homepage.hero_banners} dir={dir} />
      <TrustBar />

      <FadeInSection>
        <AppBanner />
      </FadeInSection>
      <FadeInSection>
        <DoubleBanner />
      </FadeInSection>
      <FadeInSection>
        <FixedGifBanner />
      </FadeInSection>
      <FadeInSection>
        <CategoryCarousel1 />
      </FadeInSection>
      <FadeInSection>
        <CategoryCarousel2 />
      </FadeInSection>
      <FadeInSection>
        <DoubleBanner2 />
      </FadeInSection>
      <FadeInSection>
        <DynamicGifBanner />
      </FadeInSection>

      {HOME_PRODUCT_SECTIONS.map((section) => (
        <FadeInSection key={section.title}>
          <ProductTabsSection config={section} />
        </FadeInSection>
      ))}

      <FadeInSection>
        <BannersSlider />
      </FadeInSection>
      <FadeInSection>
        <FlashDealsSection endsAt={homepage.flash_deal_ends_at} products={homepage.flash_deal_products} dir={dir} />
      </FadeInSection>
      <FadeInSection>
        <BrandShowcase brands={homepage.brand_logos} />
      </FadeInSection>
      <FadeInSection>
        <EditorialBanner titleKey="home.featured_editorial" />
      </FadeInSection>
      <FadeInSection>
        <HairTypeSelector />
      </FadeInSection>
      <FadeInSection>
        <MakeupStepsSection />
      </FadeInSection>
      <FadeInSection>
        <KoreanBeautySection />
      </FadeInSection>
      <FadeInSection>
        <ProductVariantShowcase />
      </FadeInSection>
      <FadeInSection>
        <ProductRowSection titleKey="home.global_title" seed="global" />
      </FadeInSection>
      <FadeInSection>
        <ProductRowSection titleKey="home.skin_title" seed="skin" />
      </FadeInSection>
      <FadeInSection>
        <BannersSlider />
      </FadeInSection>
      <FadeInSection>
        <NewsletterSection />
      </FadeInSection>
    </>
  );
}
