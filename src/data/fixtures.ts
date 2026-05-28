import { CDN } from "@/constants/store";
import type { Banner } from "@/types/banner.types";
import type { Product } from "@/types/product.types";

const cdnProductImage = (index: number) =>
  CDN.products[index % CDN.products.length];

export const mockPastelProduct: Product = {
  id: 175485149,
  name_ar: "قلم تحديد شفاه باستل — ١٫٤ غرام",
  name_en: "Pastel Lip Liner — 1.4g",
  slug_ar: "pastel-lip-liner-1-14g",
  brand: {
    name_ar: "باستل",
    name_en: "Pastel",
    slug_ar: "pastel",
  },
  primary_image:
    "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800",
  images: [
    "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
  ],
  price_with_tax: 27.6,
  sale_price_with_tax: 17.25,
  discount_percentage: 38,
  average_rating: 4.5,
  reviews_count: 6,
  is_in_stock: true,
  is_on_sale: true,
  is_new_arrival: true,
  is_bestseller: true,
  is_trending: true,
  variant_count: 3,
  model_number: "8690644009518",
  description_ar:
    "قلم تحديد دقيق للشفاه بتركيبة طويلة الثبات. مناسب لتحديد وملء الشفاه بلون غني. يُظهر مظهراً ناعماً غير لامع.",
  description_en: "Precision lip liner with long-wear formula.",
  how_to_use_ar: "ارسمي خط الشفاه ثم املئي الشفاه بلونك المفضل.",
  ingredients_ar: "سليكونات، شمع، أصباغ، فيتامين إي.",
  variants: [
    {
      id: 1,
      name_ar: "BLUEBERRY CHIP",
      name_en: "BLUEBERRY CHIP",
      slug_suffix: "blueberry-chip",
      hex: "#6B4C7A",
    },
    {
      id: 2,
      name_ar: "VINE NUDE",
      name_en: "VINE NUDE",
      slug_suffix: "vine-nude",
      hex: "#A67B5B",
    },
    {
      id: 3,
      name_ar: "Tanny Chip",
      name_en: "Tanny Chip",
      slug_suffix: "tanny-chip",
      hex: "#C68642",
    },
  ],
  badges: ["vegan", "gluten_free", "cruelty_free", "dermatologist_tested"],
};

export function mockProducts(count: number, prefix: string): Product[] {
  return Array.from({ length: count }, (_, i) => ({
    id: 1000 + i,
    name_ar: `منتج عناية ${i + 1}`,
    name_en: `Care product ${i + 1}`,
    slug_ar: `${prefix}-product-${i + 1}`,
    brand: {
      name_ar: "ماركة",
      name_en: "Brand",
      slug_ar: "brand",
    },
    primary_image: cdnProductImage(i),
    price_with_tax: 45 + i,
    sale_price_with_tax: i % 3 === 0 ? 29 + i : undefined,
    discount_percentage: i % 3 === 0 ? 20 : undefined,
    average_rating: 4 + (i % 2) * 0.5,
    reviews_count: 3 + i,
    is_in_stock: true,
    is_on_sale: i % 3 === 0,
    is_new_arrival: i % 4 === 0,
    is_bestseller: i % 5 === 0,
    is_trending: i % 6 === 0,
  }));
}

export const mockHeroBanners: Banner[] = [
  {
    id: 1,
    title_ar: "",
    title_en: "",
    image_desktop: CDN.hero,
    image_mobile: CDN.hero,
    link: "/offers",
    alt_ar: "سحر",
    alt_en: "Sahar",
  },
];

export const mockMiniBanners: Banner[] = [
  {
    id: 3,
    image_desktop:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=640",
    link: "/skin-care",
    alt_ar: "العناية",
    alt_en: "Skin care",
  },
  {
    id: 4,
    image_desktop:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=640",
    link: "/hair",
    alt_ar: "الشعر",
    alt_en: "Hair",
  },
  {
    id: 5,
    image_desktop:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=640",
    link: "/makeup",
    alt_ar: "المكياج",
    alt_en: "Makeup",
  },
  {
    id: 6,
    image_desktop:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=640",
    link: "/kbeauty",
    alt_ar: "كوري",
    alt_en: "K-Beauty",
  },
];

export const mockBrandLogos = [
  {
    id: "b1",
    name: "COSRX",
    image:
      "https://images.unsplash.com/photo-1556228720-192a6af4e86e?auto=format&fit=crop&q=80&w=200",
    href: "/brand/cosrx",
  },
  {
    id: "b2",
    name: "Anua",
    image:
      "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=200",
    href: "/brand/anua",
  },
  {
    id: "b3",
    name: "Pastel",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=200",
    href: "/brand/pastel",
  },
  {
    id: "b4",
    name: "The Ordinary",
    image:
      "https://images.unsplash.com/photo-1615397323064-07b9735d1f85?auto=format&fit=crop&q=80&w=200",
    href: "/brand/the-ordinary",
  },
  {
    id: "b5",
    name: "CeraVe",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200",
    href: "/brand/cerave",
  },
  {
    id: "b6",
    name: "La Roche-Posay",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=200",
    href: "/brand/la-roche-posay",
  },
  {
    id: "b7",
    name: "Eucerin",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=200",
    href: "/brand/eucerin",
  },
  {
    id: "b8",
    name: "Garnier",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200",
    href: "/brand/garnier",
  },
  {
    id: "b9",
    name: "Maybelline",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477eb31f762?auto=format&fit=crop&q=80&w=200",
    href: "/brand/maybelline",
  },
  {
    id: "b10",
    name: "L'Oréal",
    image:
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=200",
    href: "/brand/loreal",
  },
  {
    id: "b11",
    name: "Nivea",
    image:
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=200",
    href: "/brand/nivea",
  },
  {
    id: "b12",
    name: "Bioderma",
    image:
      "https://images.unsplash.com/photo-1512496015851-a1dc8a477de0?auto=format&fit=crop&q=80&w=200",
    href: "/brand/bioderma",
  },
  {
    id: "b13",
    name: "Vichy",
    image:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=200",
    href: "/brand/vichy",
  },
];

export const flashDealEndsAt = new Date(
  Date.now() + 8 * 60 * 60 * 1000,
).toISOString();

export const mockFlashProducts = mockProducts(8, "flash");

export const mockHomepage = {
  hero_banners: mockHeroBanners,
  mini_banners: mockMiniBanners,
  flash_deal_ends_at: flashDealEndsAt,
  flash_deal_products: mockFlashProducts,
  brand_logos: mockBrandLogos,
  kbeauty_products: mockProducts(6, "kb"),
  our_picks: mockProducts(6, "picks"),
  trending: mockProducts(8, "trend"),
};

export type HomepageData = typeof mockHomepage;

export const mockReviews = [
  {
    id: 1,
    user_name: "نورة",
    rating: 5,
    body: "ثبات ممتاز ولون رائع، أنصح به بشدة.",
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    user_name: "لينا",
    rating: 4,
    body: "جودة جيدة وسعر مناسب مع العروض.",
    created_at: new Date().toISOString(),
  },
] as const;
