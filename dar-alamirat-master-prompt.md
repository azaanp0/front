# 🎯 MASTER PROMPT — إعادة بناء واجهة متجر دار الأميرات بدقة 1:1

---

## 📌 المهمة الرئيسية

أنت مطور frontend خبير متخصص في متاجر التجزئة العربية. مهمتك بناء صفحة رئيسية HTML/CSS/JS كاملة تكون **مطابقة بصرياً بنسبة 100% لمتجر دار الأميرات** (daralamirat.com.sa). يجب أن يكون الناتج ملف HTML واحد self-contained قابل للفتح في أي متصفح، ولا يمكن تمييزه بصرياً عن المتجر الأصلي.

---

## 🎨 نظام الألوان والخطوط (مستخرج مباشرة من CSS المتجر)

```css
:root {
  /* الخط الرئيسي */
  --font-main: 'PingARLT';        /* خط عربي خاص، استخدمه عبر Google Fonts أو استبدله بـ Tajawal/Cairo */

  /* الألوان الأساسية */
  --color-primary: #c6aad0;       /* بنفسجي فاتح — اللون الرئيسي للمتجر */
  --color-primary-dark: #a084aa;  /* بنفسجي داكن */
  --color-primary-light: #ecd0f6; /* بنفسجي شفاف جداً */
  --color-primary-reverse: #472b51; /* بنفسجي عميق للنصوص على خلفية بنفسجية */

  /* الخلفيات */
  --bg-primary: #ffffff;
  --bg-secondary: #ffffff;
  --header-bg: #ffffff;
  --product-bg: #ffffff;

  /* النصوص */
  --header-text-color: #111827;
  --store-text-primary: #111827;
  --store-text-secondary: #4b5563;

  /* البطاقات */
  --product-border-color: #eeeeee;
  --product-image-height: 17rem;
  --product-enhanced-btn-bg: #c7aad1;
  --product-enhanced-btn-color: #ffffff;
  --products-per-row: 4;

  /* الفوتر */
  --footer-bg: #f3f4f6;
  --footer-text-color: #374151;
  --bottom-footer-bg: #F9FAFB;

  /* الشريط السفلي المحمول */
  --bottom-nav-bg: #c7aad1;
  --bottom-nav-text-color: #111827;

  /* واتساب */
  --wa-btn-bg: #22c55e;
  --wa-btn-text-color: #ffffff;

  /* باقي */
  --countdown-bg: #f3f4f6;
  --countdown-color: #111827;
  --product-promo-bg: #b22424;
}
```

**المتجر يدعم Dark Mode:**
```css
.dark {
  --bg-primary: #1d1f1f;
  --bg-secondary: #0e0f0f;
  --header-bg: #0e0f0f;
  --header-text-color: #ffffff;
  --store-text-primary: #ffffff;
  --store-text-secondary: #cccccc;
  --product-bg: #1d1f1f;
  --footer-bg: #0e0f0f;
  --footer-text-color: #ffffff;
  --bottom-footer-bg: #0e0f0f;
  --bottom-nav-bg: #1d1f1f;
  --bottom-nav-text-color: #ffffff;
}
```

---

## 🖼️ الصور والأصول (روابط حقيقية من CDN المتجر)

### الشعار:
```
شعار المتجر: https://cdn.files.salla.network/homepage/1945128061/9303e6d8-0229-4282-aba8-d4638d7f2b95.webp
```

### صور الهيرو / السلايدر الرئيسي:
```
سلايد 1: https://cdn.files.salla.network/homepage/1945128061/b670e782-cda8-4f8d-b811-5756c95bc0fb.webp
```

### بانر التطبيق (App Store):
```
بانر التطبيق: https://cdn.files.salla.network/homepage/1945128061/42e85534-e0b3-481d-bd4b-085e8aadb2a9.webp
```

### البانرات المزدوجة (Double Banner):
```
يسار: https://cdn.files.salla.network/homepage/1945128061/e85faed1-ebc8-4f2b-a1d9-8a5d6fce95e1.webp
يمين: https://cdn.files.salla.network/homepage/1945128061/1a49d4eb-7c8b-406c-8249-fb9df2110eac.webp
```

### البانر الثابت GIF (animated):
```
ديسكتوب: https://cdn.files.salla.network/homepage/1945128061/91659785-534f-4e52-835f-0740bf3c0539.gif
موبايل:   https://cdn.files.salla.network/homepage/1945128061/4ea0b835-d719-4584-a1b9-449b91c5cd01.gif
```

### الروابط السريعة — صف 1 (الكاروسيل الأول - أقسام المنتجات):
```
1: https://cdn.files.salla.network/homepage/1945128061/92a8a91b-464b-4cd4-b2e0-8617a43649b3.webp
2: https://cdn.files.salla.network/homepage/1945128061/669e932d-dbda-438d-8c69-94dcabd3a76d.webp
3: https://cdn.files.salla.network/homepage/1945128061/3bf08e7a-9ddc-4190-b654-fa786f64edb2.webp
4: https://cdn.files.salla.network/homepage/1945128061/fd95b195-c0d3-436a-b872-d9a05f9af81f.webp
5: https://cdn.files.salla.network/homepage/1945128061/7e425b5a-2850-478e-b572-ce4f91813cd7.webp
6: https://cdn.files.salla.network/homepage/1945128061/5c033d92-bf5e-47d3-a164-25b7b357d8b7.webp
7: https://cdn.files.salla.network/homepage/1945128061/045da31c-5678-4175-ac6a-6a5c46c5a878.webp
8: https://cdn.files.salla.network/homepage/1945128061/c7931133-3b96-49e6-85e9-e1224bb27485.webp
9: https://cdn.files.salla.network/homepage/1945128061/e74f0315-041c-4886-9a7d-d1e6ae9b8a8e.webp
10: https://cdn.files.salla.network/homepage/1945128061/9517b42e-16ed-4091-a6ad-e97f5fd3a282.webp
```

### الروابط السريعة — صف 2 (الكاروسيل الثاني):
```
1: https://cdn.files.salla.network/homepage/1945128061/256fdcf7-0e0f-4277-a936-b95d3098d696.webp
2: https://cdn.files.salla.network/homepage/1945128061/8d836f5b-b9cc-4b13-a2b0-e7cab6a2ed24.webp
3: https://cdn.files.salla.network/homepage/1945128061/b72f4395-9af6-492e-9b52-8103356cabee.webp
4: https://cdn.files.salla.network/homepage/1945128061/ef90c0d7-820e-4d9a-8825-ed0a4f2750c0.webp
5: https://cdn.files.salla.network/homepage/1945128061/abc64516-671a-486c-a127-71abf0f4a1c0.webp
6: https://cdn.files.salla.network/homepage/1945128061/3cb68d0a-87a9-495f-9ade-b9e2dfe25217.webp
7: https://cdn.files.salla.network/homepage/1945128061/3ae23854-dfc8-4fc9-b00f-f6a27f61619e.webp
8: https://cdn.files.salla.network/homepage/1945128061/35148d4d-652b-4e1b-a91d-11aae676b3e9.webp
9: https://cdn.files.salla.network/homepage/1945128061/20bf1513-1f39-4089-b079-238854173dd6.webp
10: https://cdn.files.salla.network/homepage/1945128061/3241484f-0224-463a-a4e5-fe5b261a89ee.webp
```

### GIF ديناميكي (animated banner):
```
ديسكتوب: https://cdn.files.salla.network/homepage/1945128061/4f611269-c917-4d25-a91d-5ee351679329.gif
موبايل:   https://cdn.files.salla.network/homepage/1945128061/1d1dc7ad-bd1d-4eb8-96de-eef96c9bb548.gif
```

### صور بطاقات المنتجات (placeholder products):
```
منتج 1: https://cdn.files.salla.network/homepage/1945128061/6dea462b-b2e5-45e1-b7a6-4ca608803686.webp
منتج 2: https://cdn.files.salla.network/homepage/1945128061/b566d5bf-4edb-407a-8842-6be1d173c313.webp
منتج 3: https://cdn.files.salla.network/homepage/1945128061/c9458e6a-777a-4c47-b5be-6f0e4539fd19.webp
منتج 4: https://cdn.files.salla.network/homepage/1945128061/128b5516-4f7d-40c5-af64-989dcef3225b.webp
منتج 5: https://cdn.files.salla.network/homepage/1945128061/1c34cdc1-3f60-452e-b004-98d59de919af.webp
منتج 6: https://cdn.files.salla.network/homepage/1945128061/afb4f331-5eb6-43cc-8b63-292cb992e828.webp
```

---

## 🏗️ هيكل الصفحة — الترتيب الدقيق للسكشنز

ابنِ الصفحة بالترتيب التالي **بدون أي حذف**:

```
1.  HEADER              — شريط التنقل العلوي (sticky)
2.  HERO SLIDER         — السلايدر الرئيسي كامل العرض (fade effect)
3.  APP BANNER          — بانر تطبيق الجوال (carousel)
4.  DOUBLE BANNER       — بانرين جنب بعض (50%/50%)
5.  FIXED BANNER GIF    — بانر GIF متحرك كامل العرض
6.  CATEGORY CAROUSEL 1 — شريط أيقونات الأقسام (يتحرك تلقائياً)
7.  CATEGORY CAROUSEL 2 — شريط أيقونات أقسام ثانٍ (يتحرك تلقائياً)
8.  DOUBLE BANNER 2     — بانرين إضافيين
9.  DYNAMIC GIF BANNER  — بانر GIF متحرك آخر (desktop/mobile مختلفين)
10. PRODUCT TABS        — تابس المنتجات (الأكثر مبيعاً / الجديد / العروض / الخ)
11. BANNERS SLIDER      — سلايدر بانرات
12. NEWSLETTER SECTION  — قسم الاشتراك بالنشرة
13. FOOTER              — الفوتر الكامل
14. BOTTOM NAV          — شريط التنقل السفلي للموبايل
15. WHATSAPP BTN        — زر واتساب عائم
```

---

## 📐 مواصفات التصميم التفصيلية

### الهيدر (Header):
- خلفية بيضاء `#ffffff`، sticky عند التمرير
- الشعار في **المنتصف** تماماً (centered logo layout)
- يسار: أيقونة hamburger menu + كلمة "القائمة" على ديسكتوب
- يمين: أيقونة بحث + أيقونة مستخدم + أيقونة سلة مع badge
- الحد السفلي: خط رفيع `#eeeeee` يظهر عند التمرير
- شفاف عند أعلى الصفحة (`trans_header`) ثم يتحول لأبيض عند السكرول

### السلايدر الرئيسي (Hero):
- **كامل عرض الشاشة** بدون padding
- تأثير fade بين الصور (مش slide)
- نقاط pagination في الأسفل بلون `#c6aad0`
- الصورة تغطي كامل المساحة `object-cover`

### كاروسيل الأقسام:
- الصور دائرية أو مربعة مع border-radius
- تتحرك تلقائياً (autoplay)
- hover effect: تكبر الصورة scale(1.10) مع transition سلس
- على الموبايل: يظهر 3-4 عناصر، على ديسكتوب: 6-8 عناصر

### بطاقات المنتجات:
- بوردر رفيع `1px solid #eeeeee`
- border-radius: `0.75rem` (rounded-xl)
- ارتفاع الصورة: `17rem` ثابت
- `object-fit: contain` للصورة (مش cover)
- اسم المنتج بخط عريض
- السعر بلون `#111827`
- زر "أضف للسلة" بلون `#c7aad1` مع نص أبيض
- hover: ظهور زر سريع مع animation سلسة
- شارة "خصم" بلون أحمر `#b22424`
- التقييم بنجوم ذهبية
- البطاقات: 4 في الصف على ديسكتوب، 2 على موبايل

### تابس المنتجات:
- تابس أفقية بلون `#c6aad0` للتاب النشط
- محتوى كل تاب: سلايدر أفقي للمنتجات
- الانتقال بين التابس بـ fade animation

### الفوتر:
- خلفية `#f3f4f6`
- شعار المتجر في أعلى اليسار
- شعارات طرق الدفع: mada, Visa, Mastercard, stc pay, Apple Pay, Tabby, Tamara
- روابط مهمة: عناوين بـ bullet points
- حقوق النشر: `الحقوق محفوظة | 2026`
- أيقونات السوشيال ميديا (Instagram, Snapchat, TikTok) مع شكل دائري
- الـ bottom footer بخلفية `#F9FAFB`

### Bottom Navigation (موبايل فقط):
- شريط ثابت أسفل الشاشة
- خلفية `#c7aad1` (البنفسجي)
- 5 أيقونات: الرئيسية، البحث، المفضلة، الطلبات، الحساب

### زر الواتساب:
- عائم في الزاوية اليسار السفلى
- دائري، لون `#22c55e`
- رقم الواتساب: `779782716`
- يظهر بعد التمرير

---

## 🔧 المتطلبات التقنية

```
- HTML5 واحد self-contained (CSS و JS داخل الملف)
- اتجاه: RTL (dir="rtl" lang="ar")
- Responsive: يعمل على موبايل وتابلت وديسكتوب
- CSS Variables للألوان (كما في النظام أعلاه)
- استخدم Swiper.js (CDN) للسلايدرات
- استخدم Google Fonts: Tajawal أو Cairo (أقرب للـ PingARLT)
- لا تستخدم frameworks خارجية كثيرة — vanilla JS + CSS
- Lazy loading للصور (loading="lazy")
- Smooth scroll وانيميشنز سلسة على كل التفاعلات
- الأيقونات: استخدم Font Awesome 6 أو Heroicons أو SVG inline
```

---

## ✨ الأنيميشنز والتأثيرات المطلوبة

```
1. Shine animation على البطاقات عند الـ hover (لمعة تجري على الصورة)
2. Scale transition على صور الكاروسيل عند الـ hover (1.0 → 1.10)
3. Sticky header يظهر تدريجياً مع الـ scroll (opacity + shadow)
4. Fade in للسكشنز عند الدخول لنطاق الـ viewport (Intersection Observer)
5. Loading spinner عند أول تحميل الصفحة ثم يختفي بـ fade
6. Smooth scroll عند الضغط على الروابط
7. Toast notification عند إضافة منتج للسلة (يظهر في أعلى الشاشة)
8. Pulse animation على زر الواتساب
```

---

## 💬 تفاصيل المحتوى النصي

```
اسم المتجر: دار الأميرات
الوصف: أكبر تجمع لمنتجات العناية
الشعار الفرعي: متجر العناية والجمال الرائد
واتساب: 779782716
تليفون: +967779782716
إنستغرام: https://www.instagram.com/daralamirat.sa
سناب شات: https://www.snapchat.com/add/daralamirat.sa
تيك توك: https://www.tiktok.com/@daralamirat.sa
App Store: https://apps.apple.com/sa/app/dar-alamirat/id6741577124
Play Store: https://play.google.com/store/apps/details?id=com.salla.vy

أقسام المنتجات (للتابس):
- الأكثر مبيعاً
- الجديد
- العروض
- المميزة

أقسام الموقع (Navigation):
- الرئيسية
- العروض
- الأقسام
- الماركات
- المدونة
- تواصل معنا

روابط الفوتر — روابط مهمة:
- سياسة الخصوصية
- الشروط والأحكام
- سياسة الاستبدال والاسترجاع
- تتبع طلبي
- تسجيل الدخول

طرق الدفع المقبولة: مدى، Visa، Mastercard، stc pay، Apple Pay، تابي، تمارا، ميسباي
```

---

## 🎯 معايير النجاح

الناتج ناجح إذا حقق **كل** النقاط التالية:
- [ ] اللون البنفسجي `#c6aad0` هو اللون الأساسي السائد
- [ ] الشعار في وسط الهيدر
- [ ] السلايدر يغطي كامل عرض الشاشة
- [ ] كاروسيلات الأقسام تتحرك تلقائياً
- [ ] بطاقات المنتجات: 4 في صف ديسكتوب / 2 موبايل
- [ ] البانرات المزدوجة جنب بعض بنسبة 50/50
- [ ] الـ GIF banners تشتغل وتتحرك
- [ ] تابس المنتجات تعمل بدون تحديث الصفحة
- [ ] زر واتساب عائم أخضر في الزاوية
- [ ] الفوتر يحتوي شعارات الدفع والسوشيال
- [ ] Bottom navigation يظهر على الموبايل فقط
- [ ] RTL صحيح على كل العناصر
- [ ] Responsive على 320px → 1920px

---

## ⚠️ تحذيرات مهمة

1. **لا تستبدل الروابط** — استخدم روابط الصور الحقيقية من CDN كما هي
2. **لا تحذف أي سكشن** — كل قسم مهم للتطابق البصري
3. **الخط العربي** — الخط الأصلي PingARLT، استخدم Tajawal كبديل مع نفس الـ weights
4. **الـ GIF** — تأكد أن الصور المتحركة تشتغل بدون `loading="lazy"` عليها
5. **Dark mode** — يجب أن يعمل عبر إضافة class `dark` على الـ body
6. **الـ shine animation** — هي CSS pseudo-element يجري من يمين لشمال على الـ hover

---

**ابدأ مباشرة بكتابة الكود  الكامل. لا تشرح ولا تسأل — فقط ابنِ.**
