/** إعدادات متجر سحر — واجهة مستوحاة من daralamirat.com.sa */

export const STORE = {
  name: "سحر",
  nameEn: "Sahr",
  tagline: "حيث يبدأ سحر الجمال",
  subtitle: "وجهتكِ الأولى للعناية والجمال الفاخر",
  metaDescription:
    "سحر — متجر العناية والجمال: مكياج، عناية بالبشرة والشعر، ماركات عالمية وأصلية مع توصيل سريع داخل المملكة",
  whatsapp: "779782716",
  phone: "+967779782716",
  vat: "310218485500003",
  commercialNumber: "1010359452",
  instagram: "https://www.instagram.com/daralamirat.sa",
  snapchat: "https://www.snapchat.com/add/daralamirat.sa",
  tiktok: "https://www.tiktok.com/@daralamirat.sa",
  appStore: "https://apps.apple.com/sa/app/store/id6741577124",
  playStore: "https://play.google.com/store/apps/details?id=com.salla.vy",
  favicon:
    "https://cdn.salla.sa/onqKZz/m30NwS9uupFBWXvLnvGAhXAaxBDkYbppPP438Zhp.png",
  useTextLogo: true,
} as const;

const cdn = (id: string) =>
  `https://cdn.files.salla.network/homepage/1945128061/${id}`;

export const CDN = {
  logo: cdn("9303e6d8-0229-4282-aba8-d4638d7f2b95.webp"),
  hero: cdn("b670e782-cda8-4f8d-b811-5756c95bc0fb.webp"),
  appBanner: cdn("42e85534-e0b3-481d-bd4b-085e8aadb2a9.webp"),
  doubleLeft: cdn("e85faed1-ebc8-4f2b-a1d9-8a5d6fce95e1.webp"),
  doubleRight: cdn("1a49d4eb-7c8b-406c-8249-fb9df2110eac.webp"),
  double2Left: cdn("3241484f-0224-463a-a4e5-fe5b261a89ee.webp"),
  double2Right: cdn("6dea462b-b2e5-45e1-b7a6-4ca608803686.webp"),
  fixedGifDesktop: cdn("91659785-534f-4e52-835f-0740bf3c0539.gif"),
  fixedGifMobile: cdn("4ea0b835-d719-4584-a1b9-449b91c5cd01.gif"),
  dynamicGifDesktop: cdn("4f611269-c917-4d25-a91d-5ee351679329.gif"),
  dynamicGifMobile: cdn("1d1dc7ad-bd1d-4eb8-96de-eef96c9bb548.gif"),
  categories1: [
    cdn("92a8a91b-464b-4cd4-b2e0-8617a43649b3.webp"),
    cdn("669e932d-dbba-438d-8c69-94dcabd3a76d.webp"),
    cdn("3bf08e7a-9ddc-4190-b654-fa786f64edb2.webp"),
    cdn("fd95b195-c0d3-436a-b872-d9a05f9af81f.webp"),
    cdn("7e425b5a-2850-478e-b572-ce4f91813cd7.webp"),
    cdn("5c033d92-bf5e-47d3-a164-25b7b357d8b7.webp"),
    cdn("045da31c-5678-4175-ac6a-6a5c46c5a878.webp"),
    cdn("c7931133-3b96-49e6-85e9-e1224bb27485.webp"),
    cdn("e74f0315-041c-4886-9a7d-d1e6ae9b8a8e.webp"),
    cdn("9517b42e-16ed-4091-a6ad-e97f5fd3a282.webp"),
  ],
  categories2: [
    cdn("256fdcf7-0e0f-4277-a936-b95d3098d696.webp"),
    cdn("8d836f5b-b9cc-4b13-a2b0-e7cab6a2ed24.webp"),
    cdn("b72f4395-9af6-492e-9b52-8103356cabee.webp"),
    cdn("ef90c0d7-820e-4d9a-8825-ed0a4f2750c0.webp"),
    cdn("abc64516-671a-486c-a127-71abf0f4a1c0.webp"),
    cdn("3cb68d0a-87a9-495f-9ade-b9e2dfe25217.webp"),
    cdn("3ae23854-dfc8-4fc9-b00f-f6a27f61619e.webp"),
    cdn("35148d4d-652b-4e1b-a91d-11aae676b3e9.webp"),
    cdn("20bf1513-1f39-4089-b079-238854173dd6.webp"),
    cdn("3241484f-0224-463a-a4e5-fe5b261a89ee.webp"),
  ],
  products: [
    cdn("6dea462b-b2e5-45e1-b7a6-4ca608803686.webp"),
    cdn("b566d5bf-4edb-407a-8842-6be1d173c313.webp"),
    cdn("c9458e6a-777a-4c47-b5be-6f0e4539fd19.webp"),
    cdn("128b5516-4f7d-40c5-af64-989dcef3225b.webp"),
    cdn("1c34cdc1-3f60-452e-b004-98d59de919af.webp"),
    cdn("afb4f331-5eb6-43cc-8b63-292cb992e828.webp"),
  ],
  sliderBanners: [
    cdn("b670e782-cda8-4f8d-b811-5756c95bc0fb.webp"),
    cdn("b566d5bf-4edb-407a-8842-6be1d173c313.webp"),
    cdn("753ecd14-0a38-480e-aaa2-91f1fd51f2d1.gif"),
    cdn("ecb86f92-07dd-4489-819e-6aaef2a228d0.gif"),
    cdn("a3b8e6aa-3085-4500-8e95-fd0c74597f4c.gif"),
    cdn("46ab9087-f4d5-475a-86ce-ac314c48543f.webp"),
    cdn("32b6092c-f106-4465-882f-681b8928a1a6.webp"),
    cdn("281ce6f4-0405-45ab-a680-a95207f6d9a6.webp"),
  ],
} as const;

export const MENU_CATEGORIES = [
  { slug: "makeup", label: "المكياج", image: CDN.categories1[0] },
  { slug: "care", label: "العناية", image: CDN.categories1[1] },
  { slug: "kbeauty", label: "العناية الكورية", image: CDN.categories1[2] },
  { slug: "hair", label: "العناية بالشعر", image: CDN.categories1[3] },
  { slug: "body", label: "العناية بالجسم", image: CDN.categories1[4] },
  { slug: "nails", label: "الأظافر", image: CDN.categories1[5] },
  { slug: "perfume", label: "العطور", image: CDN.categories1[6] },
  { slug: "gifts", label: "الهدايا", image: CDN.categories1[7] },
  { slug: "vitamins", label: "الفيتامينات", image: CDN.categories1[8] },
  { slug: "oral", label: "صحة الفم", image: CDN.categories1[9] },
] as const;

export const MENU_PROMOS = [
  { slug: "offers", label: "العروض", icon: "🏷️" },
  { slug: "free_delivery", label: "توصيل مجاني", icon: "🚚" },
  { slug: "offers50", label: "عروض حتى 50%", icon: "✨" },
  { slug: "half_price", label: "نص السعر", icon: "💜" },
  { slug: "one_plus_one", label: "1+1 مجاناً", icon: "🎁" },
  { slug: "free_gifts", label: "هدايا مجانية", icon: "🎀" },
  { slug: "bundle_offers", label: "عروض المجموعات", icon: "📦" },
] as const;

export const FOOTER_LINKS = {
  important: [
    { to: "/affiliate", label: "برنامج التسويق بالعمولة" },
    { to: "/privacy", label: "سياسة الاستخدام والخصوصية" },
    { to: "/returns", label: "سياسة الاسترجاع والإلغاء" },
    { to: "/shipping", label: "الشحن والتوصيل" },
    { to: "/terms", label: "الشروط والأحكام" },
    { to: "/account/loyalty", label: "نظام الولاء" },
    { to: "/about", label: "من نحن" },
    { to: "/warranty", label: "سياسة الضمان والصيانة" },
    { to: "/branches", label: "فروع سحر" },
  ],
  nav: [
    { to: "/", label: "الرئيسية" },
    { to: "/offers", label: "العروض" },
    { to: "/category", label: "الأقسام" },
    { to: "/brands", label: "الماركات" },
    { to: "/blog", label: "المدونة" },
    { to: "/contact", label: "تواصل معنا" },
  ],
} as const;

export type ProductTabConfig = {
  title: string;
  tabs: { label: string; seed: string }[];
  viewAllHref: string;
};

export const HOME_PRODUCT_SECTIONS: ProductTabConfig[] = [
  {
    title: "عروض مميزة",
    tabs: [
      { label: "جميع العروض", seed: "offers-all" },
      { label: "1+1 مجاناً", seed: "offers-bogo" },
      { label: "نص السعر", seed: "offers-half" },
      { label: "هدايا مجانية", seed: "offers-gifts" },
    ],
    viewAllHref: "/offers",
  },
  {
    title: "الأكثر مبيعاً",
    tabs: [
      { label: "الأكثر مبيعاً", seed: "bestsellers" },
      { label: "الجديد", seed: "new" },
      { label: "العروض", seed: "offers" },
      { label: "المميزة", seed: "featured" },
    ],
    viewAllHref: "/bestsellers",
  },
  {
    title: "اختاري اللي يناسب بشرتك",
    tabs: [
      { label: "بشرة جافة", seed: "skin-dry" },
      { label: "بشرة دهنية", seed: "skin-oily" },
      { label: "بشرة مختلطة", seed: "skin-mixed" },
      { label: "بشرة حساسة", seed: "skin-sensitive" },
    ],
    viewAllHref: "/category/care",
  },
  {
    title: "العناية الكورية",
    tabs: [
      { label: "الأكثر طلباً", seed: "kbeauty-top" },
      { label: "العناية", seed: "kbeauty-care" },
      { label: "الشعر", seed: "kbeauty-hair" },
    ],
    viewAllHref: "/category/kbeauty",
  },
];

export const NAV_CATEGORIES = [
  { to: "/offers", label: "العروض" },
  { to: "/category/makeup", label: "المكياج" },
  { to: "/category/care", label: "العناية" },
  { to: "/category/kbeauty", label: "العناية الكورية" },
  { to: "/category/hair", label: "العناية بالشعر" },
  { to: "/category/body", label: "العناية بالجسم" },
  { to: "/category/nails", label: "الأظافر" },
  { to: "/brands", label: "الماركات" },
  { to: "/new", label: "وصل حديثاً" },
  { to: "/bestsellers", label: "الأكثر مبيعاً" },
] as const;
