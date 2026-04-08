# 📋 DarbAlmaha - مشروع موقع شركة تنظيفات قطر

> **نظام إدارة المستندات:** v1.0 | **آخر تحديث:** 2026-04-05 | **المطور:** فريق التطوير

---

## 📑 فهرس المحتويات

1. [نظرة عامة على المشروع](#نظرة-عامة-على-المشروع)
2. [الهيكل التنظيمي للملفات](#الهيكل-التنظيمي-للملفات)
3. [التقنيات المستخدمة](#التقنيات-المستخدمة)
4. [المميزات الرئيسية](#المميزات-الرئيسية)
5. [تحسين محركات البحث (SEO)](#تحسين-محركات-البحث-seo)
6. [الأداء والتحسين](#الأداء-والتحسين)
7. [التصميم المتجاوب](#التصميم-المتجاوب)
8. [دعم اللغات (i18n)](#دعم-اللغات-i18n)
9. [نظام التتبع والإعلانات](#نظام-التتبع-والإعلانات)
10. [الحماية والأمان](#الحماية-والأمان)
11. [قاعدة بيانات التصميم](#قاعدة-بيانات-التصميم)
12. [الأقسام والوظائف](#الأقسام-والوظائف)
13. [دليل النشر](#دليل-النشر)
14. [الصيانة والتحديث](#الصيانة-والتحديث)
15. [المشاكل المعروفة والتحسينات](#المشاكل-المعروفة-والتحسينات)
16. [معلومات الاتصال](#معلومات-الاتصال)

---

## نظرة عامة على المشروع

### الوصف
موقع Landing Page ثنائي اللغة (عربي/إنجليزي) لشركة **درب المها** لتنظيفات قطر. الموقع مصمم لجذب العملاء من خلال عرض خدمات التنظيف ومكافحة الحشرات بأسعار تنافسية.

### الهدف التجاري
- زيادة الحجوزات عبر الهاتف والواتساب
- تحسين الظهور في محركات البحث
- دعم الإعلانات على فيسبوك، تيك توك، سناب شات
- بناء الثقة من خلال التقييمات والشهادات

### معلومات المشروع
| البند | القيمة |
|-------|--------|
| **اسم الشركة** | درب المها (DarbAlmaha) |
| **الدولة** | قطر 🇶🇦 |
| **الهاتف** | 77175355 |
| **واتساب** | +97477175355 |
| **النطاق** | darbalmaha.com |
| **النوع** | Static Landing Page |
| **اللغات** | العربية (RTL) + English (LTR) |

---

## الهيكل التنظيمي للملفات

```
landing4/
│
├── 📄 index.html                 # الصفحة الرئيسية (عربي)
├──  robots.txt                 # توجيه محركات البحث
├──  sitemap.xml                # خريطة الموقع
├── 📄 .htaccess                  # إعدادات Apache
├── 📄 .nojekyll                  # تعطيل Jekyll
├──  package.json               # حزم Node.js
│
├── 📁 css/
│   ├── landing.css               # CSS الرئيسي (تطوير)
│   └── landing.min.css           # CSS مضغوط (إنتاج)
│
├── 📁 js/
│   ├── landing.js                # JS الرئيسي (تطوير)
│   ├── landing.min.js            # JS مضغوط (إنتاج)
│   ├── tracking.js               # تتبع الإعلانات (تطوير)
│   └── tracking.min.js           # تتبع مضغوط (إنتاج)
│
├── 📁 img/
│   ├── logo0.png                 # الشعار (شفاف)
│   ├── banner.webp               # صورة الـ Hero
│   ├── 02.webp                   # عاملات بالساعة
│   ├── 03.webp                   # عاملات ضيافة
│   ├── 05.webp                   # جليسات أطفال
│   ├── 06.webp                   # تنظيف كنب
│   ├── 09.webp                   # تنظيف ستائر
│   ├── 10.webp                   # تنظيف عميق
│   ├── 1.webp                    # تنظيف شقق
│   ├── 4.webp                    # غسيل خزانات
│   ├── 5.webp                    # خدمة 5
│   ├── 6.webp                    # مكافحة حشرات
│   ├── 3.webp                    # خدمة 3
│   ├── clean.webp                # خلفية الإحصائيات
│   ├── success.webp              # أيقونة النجاح
│   ├── efficiency.webp           # أيقونة الكفاءة
│   ├── best-price.webp           # أيقونة الأسعار
│   ├── drilling-machine.webp     # أيقونة المعدات
│   ├── cleaning-3-3-e1741661414357.webp  # صورة إضافية
│   └── r.webp                    # قسم لماذا نحن
│
├── 📁 en/
│   └── index.html                # الصفحة الإنجليزية
│
├── 📁 .qwen/
│   └── settings.json             # إعدادات Qwen Code
│
└──  node_modules/              # أدوات التطوير (لا تُرفع)
    ├── clean-css-cli/            # ضغط CSS
    └── terser/                   # ضغط JavaScript
```

### الملفات التي لا تُرفع على الاستضافة
```
node_modules/
package.json
package-lock.json
.qwen/
```

---

## التقنيات المستخدمة

### Frontend
| التقنية | الإصدار | الغرض |
|---------|---------|-------|
| **HTML5** | - | الهيكل الأساسي |
| **CSS3** | - | التصميم والأنيميشن |
| **JavaScript (Vanilla)** | ES6+ | التفاعلية |
| **Google Fonts - Cairo** | - | خط عربي |
| **Google Fonts - Inter** | - | خط إنجليزي |

### التحسين
| الأداة | الغرض |
|--------|-------|
| **clean-css** | ضغط CSS |
| **Terser** | ضغط JavaScript |

### التتبع
| المنصة | المعرف | الحالة |
|--------|--------|--------|
| Google Tag Manager | `GTM-XXXXXXX` | ⚠️ Placeholder |
| Facebook Pixel | `XXXXXXXXXXXX` | ⚠️ Placeholder |
| TikTok Pixel | `XXXXXXXX` | ⚠️ Placeholder |
| Snapchat Pixel | `XXXXXXXX` | ⚠️ Placeholder |

---

## المميزات الرئيسية

### 1️⃣ تصميم ثنائي اللغة
- **عربي**: RTL مع خط Cairo
- **إنجليزي**: LTR مع خط Inter
- تبديل فوري بدون إعادة تحميل الصفحة
- حفظ التفضيل في localStorage

### 2️⃣ تحسين محركات البحث
- Schema.org شامل (5 أنواع)
- Open Graph + Twitter Cards
- Sitemap.xml مع hreflang
- Meta tags محسّنة
- Canonical URLs

### 3️⃣ أداء عالي
- صور WebP لجميع الصور
- Lazy loading للصور تحت خط الطي
- Preconnect + Preload
- CSS/JS مضغوطين
- Gzip compression
- Browser caching

### 4️⃣ تتبع الإعلانات
- Facebook Pixel events
- TikTok Pixel events
- Snapchat Pixel events
- GA4 events (عبر GTM)
- تتبع مكالمات الهاتف
- تتبع نقرات واتساب

### 5️⃣ تجربة مستخدم
- قائمة موبايل متجاوبة
- Smooth scroll للأقسام
- أنيميشن عند التمرير
- أزرار عائمة (واتساب + اتصال)
- عداد إحصائيات متحرك

### 6️⃣ حماية
- Content Security Policy
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- منع Directory Listing
- حماية ملفات حساسة

---

## تحسين محركات البحث (SEO)

### Meta Tags
```html
<title>شركة تنظيف قطر | درب المها</title>
<meta name="description" content="شركة تنظيفات قطر الأولى...">
<meta name="keywords" content="تنظيف قطر, عاملات نظافة...">
<meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large">
<meta name="author" content="درب المها">
<meta name="theme-color" content="#0a4b86">
```

### Canonical + Hreflang
```html
<link rel="canonical" href="https://darbalmaha.com/">
<link rel="alternate" hreflang="ar" href="https://darbalmaha.com/">
<link rel="alternate" hreflang="en" href="https://darbalmaha.com/en/">
<link rel="alternate" hreflang="x-default" href="https://darbalmaha.com/">
```

### Open Graph
```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://darbalmaha.com/">
<meta property="og:title" content="شركة تنظيف قطر | درب المها">
<meta property="og:description" content="...">
<meta property="og:image" content="https://darbalmaha.com/img/banner.webp">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="ar_QA">
```

### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="شركة تنظيف قطر | درب المها">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="https://darbalmaha.com/img/banner.webp">
<meta name="twitter:site" content="@darbalmaha">
```

### Schema.org (JSON-LD)

#### 1. LocalBusiness
```json
{
  "@type": "HomeAndConstructionBusiness",
  "name": "درب المها",
  "alternateName": "DarbAlmaha Cleaning Services",
  "telephone": "+97477175355",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "347"
  },
  "areaServed": ["الدوحة", "الريان", "الوكرة", "لوسيل", "الخور", "أم صلال"],
  "hasMap": "https://maps.app.goo.gl/...",
  "sameAs": ["فيسبوك", "تيك توك", "انستجرام", "سناب شات"]
}
```

#### 2. BreadcrumbList
#### 3. Service (عام)
#### 4. FAQPage (microdata)
#### 5. Review (microdata على كل شهادة)

### Heading Hierarchy
```
H1 → عنوان الـ Hero (وحيد في الصفحة)
H2 → عناوين الأقسام (خدماتنا، لماذا نحن، آراء العملاء، الأسئلة الشائعة، المناطق، CTA)
H3 → بطاقات الخدمات + بطاقات المناطق
H4 → عناصر المميزات + عناصر "لماذا نحن"
```

### Sitemap.xml
```xml
<url>
  <loc>https://darbalmaha.com/</loc>
  <lastmod>2026-04-05</lastmod>
  <changefreq>monthly</changefreq>
  <priority>1.0</priority>
  <xhtml:link rel="alternate" hreflang="ar" href="https://darbalmaha.com/"/>
  <xhtml:link rel="alternate" hreflang="en" href="https://darbalmaha.com/en/"/>
</url>
<url>
  <loc>https://darbalmaha.com/en/</loc>
  <priority>0.8</priority>
</url>
```

### Robots.txt
```
User-agent: *
Allow: /
Sitemap: https://darbalmaha.com/sitemap.xml
```

---

## الأداء والتحسين

### استراتيجية الصور
| العنصر | التنسيق | التحميل | الأولوية |
|--------|---------|---------|----------|
| Logo | PNG (شفاف) | عادي | fetchpriority="high" |
| Banner | WebP | Preload | fetchpriority="high" |
| بطاقات الخدمات | WebP | Lazy | decoding="async" |
| المميزات | WebP | Lazy | decoding="async" |
| لماذا نحن | WebP | Lazy | decoding="async" |
| الإحصائيات | WebP | Lazy | - |

### Preconnect + Prefetch
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://fonts.gstatic.com">
<link rel="preload" as="image" href="img/banner.webp">
<link rel="preload" as="image" href="img/logo0.png">
```

### CSS Performance
- **الملف**: `landing.min.css` (18 KB مضغوط من 23.8 KB)
- **المتغيرات**: CSS Custom Properties في `:root`
- **الأنيميشن**: GPU-friendly (`transform`, `opacity`)
- **Parallax**: معطّل على الموبايل
- **will-change**: مستخدم بحذر على الـ Hero

### JavaScript Performance
- **الملفات**: `landing.min.js` (2.1 KB) + `tracking.min.js` (1.8 KB)
- **التحميل**: `defer` على جميع السكريبتات
- **Scroll events**: `{ passive: true }`
- **IntersectionObserver**: للعدادات والأنيميشن
- **لا مكتبات خارجية**: Vanilla JS فقط

### Caching Strategy (.htaccess)
| نوع الملف | Cache-Control |Expires |
|-----------|---------------|--------|
| صور (WebP, JPG, PNG) | `public, max-age=31536000, immutable` | سنة |
| خطوط (WOFF2, WOFF) | `public, max-age=31536000, immutable` | سنة |
| CSS | `public, max-age=2592000` | شهر |
| JavaScript | `public, max-age=2592000` | شهر |
| HTML | `public, max-age=3600` | ساعة |

### Gzip Compression
```apache
AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json
```

### WebP Serving
```apache
RewriteCond %{HTTP_ACCEPT} image/webp
RewriteCond %{DOCUMENT_ROOT}/$1.webp -f
RewriteRule ^(img/.+)\.(jpg|jpeg|png|gif)$ $1.webp [T=image/webp,L]
```

---

## التصميم المتجاوب

### Breakpoints
| الشاشات | الكسر | التعديلات |
|---------|-------|-----------|
| Desktop | > 992px | 4 أعمدة، Parallax فعال |
| Tablet | 768px - 992px | 2 أعمدة، قائمة أفقية |
| Mobile | < 768px | عمود واحد، قائمة هامبرغر |

### Header Responsive
| العنصر | Desktop | Tablet | Mobile |
|--------|---------|--------|--------|
| Padding | `12px 0` | `12px 0` | `12px 0` |
| Logo | 85px | 75px | 75px |
| Nav | أفقي | أفقي | قائمة منسدلة |
| Title | يظهر | يظهر | مخفي |
| Hero padding-top | 180px | 100px | 130px |

### Grid Layouts
| القسم | Desktop | Tablet | Mobile |
|-------|---------|--------|--------|
| Services | `repeat(auto-fill, minmax(280px, 1fr))` | 2 أعمدة | عمود واحد |
| Features | 4 أعمدة | 2 أعمدة | عمود واحد |
| Stats | 4 أعمدة | 2 أعمدة | عمود واحد |
| Footer | 3 أعمدة | 2 أعمدة | عمود واحد |
| Areas | `repeat(auto-fill, minmax(250px, 1fr))` | 2 أعمدة | عمود واحد |
| Testimonials | `repeat(auto-fit, minmax(320px, 1fr))` | عمودين | عمود واحد |

### Mobile Menu
- **الفتح**: `top: 75px`, `width: 100%`, `height: calc(100vh - 75px)`
- **RTL**: `right: 0` عند الفتح
- **LTR**: `left: 0` عند الفتح
- **المحاذاة**: Center لكلا النسختين
- **حجم الخط**: `1.25rem`
- **المسافة بين العناصر**: `15px`

---

## دعم اللغات (i18n)

### آلية التبديل
```javascript
// عند الضغط على زر اللغة
const newLang = currentLang === 'ar' ? 'en' : 'ar';
htmlTag.setAttribute('lang', newLang);
htmlTag.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
langBtn.textContent = newLang === 'ar' ? 'English' : 'عربي';

// تحديث كل النصوص
document.querySelectorAll('[data-ar]').forEach(el => {
    el.textContent = el.getAttribute(`data-${newLang}`);
});

// حفظ التفضيل
localStorage.setItem('preferredLang', newLang);
```

### هيكل الترجمة
```html
<!-- عربي (الافتراضي) -->
<h1 data-ar="شركة تنظيفات قطر الأولى | درب المها" 
    data-en="Qatar's Premier Cleaning Company | DarbAlmaha">
    شركة تنظيفات قطر الأولى | درب المها
</h1>

<!-- إنجليزي (عند التبديل) -->
<h1 data-ar="..." data-en="...">Qatar's Premier Cleaning Company | DarbAlmaha</h1>
```

### الخطوط
| اللغة | الخط | الاستخدام |
|-------|------|-----------|
| عربي | Cairo (400, 600, 700, 800) | كل النصوص |
| إنجليزي | Inter (400, 600, 700, 800) | كل النصوص |

---

## نظام التتبع والإعلانات

### الأحداث المتعقبة

#### 1. نقرات الهاتف
```javascript
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        // Facebook: track('Lead', { content_name: 'Phone Call' })
        // TikTok: ttq.track('Lead', { content_name: 'Phone Call' })
        // Snapchat: snaptr('track', 'LEAD', { content_name: 'Phone Call' })
        // GA4: gtag('event', 'phone_call')
    });
});
```

#### 2. نقرات واتساب
```javascript
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        // Facebook: track('Contact', { content_name: 'WhatsApp' })
        // TikTok: ttq.track('Contact', { content_name: 'WhatsApp' })
        // Snapchat: snaptr('track', 'CONTACT', { content_name: 'WhatsApp' })
        // GA4: gtag('event', 'whatsapp_click')
    });
});
```

#### 3. حجوزات الخدمات
```javascript
document.querySelectorAll('.service-btn, .btn-secondary, .cta-banner .btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Facebook: track('Schedule', { content_name: 'Service Booking' })
        // TikTok: ttq.track('Schedule', { content_name: 'Service Booking' })
        // Snapchat: snaptr('track', 'SCHEDULE', { content_name: 'Service Booking' })
        // GA4: gtag('event', 'service_booking')
    });
});
```

#### 4. عمق التمرير
```javascript
// يُرسل عند الوصول إلى 25%, 50%, 75%, 100%
// Facebook: track('ViewContent', { scroll_depth: '75%' })
```

#### 5. وقت على الصفحة
```javascript
// يُرسل بعد 30 ثانية و60 ثانية
// Facebook: track('Engaged', { time_on_page: '30s' })
```

### ملفات Pixels

#### Google Tag Manager
```html
<!-- GTM ID: GTM-XXXXXXX (Placeholder) -->
<script src="https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX"></script>
```

#### Facebook Pixel
```javascript
fbq('init', 'XXXXXXXXXXXX');  // Placeholder
fbq('track', 'PageView');
```

#### TikTok Pixel
```javascript
ttq('load', 'XXXXXXXX');  // Placeholder
ttq('track', 'PageView');
```

#### Snapchat Pixel
```javascript
snaptr('init', 'XXXXXXXX');  // Placeholder
snaptr('track', 'PAGE_VIEW');
```

### ⚠️ مهم: يجب استبدال معرفات Placeholder

| المنصة | المعرف الحالي | المطلوب |
|--------|---------------|---------|
| GTM | `GTM-XXXXXXX` | معرف حقيقي من tagmanager.google.com |
| Facebook | `XXXXXXXXXXXX` | معرف من eventsmanager.facebook.com |
| TikTok | `XXXXXXXX` | معرف من analytics.tiktok.com |
| Snapchat | `XXXXXXXX` | معرف من ads.snapchat.com |

---

## الحماية والأمان

### Security Headers (.htaccess)

#### Content Security Policy
```apache
Header set Content-Security-Policy "
    default-src 'self';
    script-src 'self' 'unsafe-inline' 
        https://fonts.googleapis.com 
        https://www.googletagmanager.com 
        https://connect.facebook.net 
        https://analytics.tiktok.com 
        https://sc-static.net;
    style-src 'self' https://fonts.googleapis.com 'unsafe-inline';
    img-src 'self' data: https:;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' 
        https://www.googletagmanager.com 
        https://www.facebook.com 
        https://analytics.tiktok.com 
        https://sc-static.net;
    frame-ancestors 'none';
    base-uri 'self';
    form-action 'self';
"
```

#### Headers أخرى
| الهيدر | القيمة | الغرض |
|--------|--------|-------|
| X-Frame-Options | DENY | منع Clickjacking |
| X-Content-Type-Options | nosniff | منع MIME sniffing |
| X-XSS-Protection | 1; mode=block | حماية XSS |
| Referrer-Policy | strict-origin-when-cross-origin | تحكم في Referrer |
| Permissions-Policy | geolocation=(), microphone=(), camera=() | تقييد APIs |
| HSTS | ⚠️ مُعلّق | HTTPS إجباري |

### حماية الملفات
```apache
# منع عرض المجلدات
Options -Indexes

# منع الوصول للملفات المخفية
RewriteRule (^\.|/\.) - [F]

# منع الملفات الحساسة
<FilesMatch "\.(env|git|htaccess|ini|log|sql|bak|yml)$">
    Require all denied
</FilesMatch>
```

### ⚠️ HTTPS Redirect (مُعلّق - يجب تفعيله)
```apache
# RewriteCond %{HTTPS} off
# RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## قاعدة بيانات التصميم

### نظام الألوان
| المتغير | اللون | الاستخدام | HEX |
|---------|-------|-----------|-----|
| `--primary` | Deep Blue | العناوين، الأزرار الرئيسية | `#0a4b86` |
| `--secondary` | Orange | الأزرار الثانوية، التأكيد | `#e66a2e` |
| `--accent` | Gold/Yellow | الإحصائيات، النجوم | `#f0bd3a` |
| `--light-bg` | Light Gray | خلفيات الأقسام | `#f8fafc` |
| `--body-bg` | Light Gray | خلفية الصفحة | `#f5f7fa` |
| `--white` | White | البطاقات، الهيدر | `#ffffff` |
| `--dark-text` | Dark | النصوص الرئيسية | `#1e293b` |
| `--light-text` | Gray | النصوص الثانوية | `#64748b` |

### الظلال
| المتغير | القيمة | الاستخدام |
|---------|--------|-----------|
| `--shadow-sm` | `0 4px 10px rgba(0,0,0,0.03)` | البطاقات العادية |
| `--shadow-md` | `0 10px 25px -5px rgba(0,0,0,0.08)` | البطاقات عند Hover، الهيدر |
| `--shadow-lg` | `0 20px 40px -5px rgba(0,0,0,0.12)` | البطاقات عند Hover العميق |

### الانتقالات
```css
--transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
--radius: 16px;
```

### الخطوط
| العنصر | Desktop | Tablet | Mobile |
|--------|---------|--------|--------|
| H1 (Hero) | 4rem | 3rem | 2.5rem |
| H2 (Section) | 2.5rem | 2.2rem | 2rem |
| H3 (Cards) | 1.4rem | 1.3rem | 1.2rem |
| Body | 1rem | 0.95rem | 0.9rem |
| Nav Links | 1.2rem | 1rem | 1.25rem (mobile menu) |

### الأزرار
| النوع | الخلفية | النص | Box Shadow |
|-------|---------|------|------------|
| Primary | `#0a4b86` | أبيض | `0 4px 14px rgba(10,75,134,0.4)` |
| Secondary | `#e66a2e` | أبيض | `0 4px 14px rgba(230,106,46,0.4)` |
| WhatsApp | `#25D366` | أبيض | `0 4px 14px rgba(37,211,102,0.4)` |

### الأيقونات العائمة
| الزر | اللون | الأنيميشن |
|------|-------|-----------|
| واتساب | `#25D366` | pulse-green |
| اتصال | `#e66a2e` | pulse-orange |

---

## الأقسام والوظائف

### 1. Header
```html
<header>
    <div class="container header-container">
        <div class="header-brand">
            <a href="#" class="logo-link">
                <img src="img/logo0.png" alt="شعار درب المها" width="120" height="120">
            </a>
            <div class="header-title">
                <span>شركة تنظيفات قطر الأولى | درب المها</span>
            </div>
        </div>
        <nav class="header-nav">
            <ul class="nav-links">
                <li><a href="#home">الرئيسية</a></li>
                <li><a href="#services">خدماتنا</a></li>
                <li><a href="#why-us">لماذا نحن</a></li>
                <li><a href="#faq">الأسئلة الشائعة</a></li>
                <li><a href="#contact">اتصل بنا</a></li>
            </ul>
        </nav>
        <div class="header-actions">
            <button id="langToggle" class="lang-switch">English</button>
            <button class="mobile-menu-btn">☰</button>
        </div>
    </div>
</header>
```

**المميزات:**
- Fixed position
- يتقلص عند التمرير (`.scrolled`)
- قائمة موبايل بـ hamburger menu
- زر تبديل اللغة

### 2. Hero Section
```html
<section id="home" class="hero">
    <div class="container">
        <div class="hero-content">
            <h1>شركة تنظيفات قطر الأولى | درب المها</h1>
            <p>نقدم خدمات ممتازة بأفضل وأقل الأسعار...</p>
            <div class="hero-btns">
                <a href="tel:77175355" class="btn btn-primary">اتصل الآن 77175355</a>
                <a href="https://wa.me/97477175355" class="btn btn-whatsapp">تواصل عبر الواتساب</a>
            </div>
        </div>
    </div>
</section>
```

**المميزات:**
- خلفية صورة + تدرج أزرق
- محتوى في المنتصف
- Padding-top متجاوب (180px desktop, 130px mobile)
- Parallax على Desktop فقط

### 3. Features Bar
```html
<section class="features-bar-section">
    <div class="features-bar">
        <div class="features-grid">
            <div class="feature-item">
                <div class="feature-icon">
                    <img src="img/success.webp" alt="خبرة 10+ سنوات">
                </div>
                <div class="feature-text">
                    <h4>خبرة 10+ سنوات</h4>
                    <p>فريق محترف ومدرب</p>
                </div>
            </div>
            <!-- 3 مميزات أخرى -->
        </div>
    </div>
</section>
```

**المميزات:**
- يتداخل مع الـ Hero (`margin-top: -20px`)
- 4 أعمدة على Desktop, عمودين على Tablet, عمود على Mobile
- أنيميشن Hover على الأيقونات

### 4. Services Section
```html
<section id="services" class="section-padding bg-light">
    <div class="container">
        <h2 class="section-title">أفضل الخدمات المنزلية في قطر</h2>
        <p class="section-subtitle">اكتشف مجموعة واسعة من خدمات التنظيف...</p>
        <div class="services-grid">
            <article class="service-card">
                <div class="service-img">
                    <img src="img/02.webp" alt="..." width="400" height="250">
                </div>
                <div class="service-content">
                    <h3>عاملات ممتازات بنظام الساعة</h3>
                    <p>...</p>
                    <a href="https://wa.me/97477175355" class="service-btn">احجز الآن ←</a>
                </div>
            </article>
            <!-- 9 خدمات أخرى -->
        </div>
    </div>
</section>
```

**الخدمات (10):**
1. عاملات ممتازات بنظام الساعة
2. عمال خبرة في التنظيف العميق
3. عاملات ضيافة على أعلى مستوى
4. جليسات أطفال وكبار سن
5. تنظيف الكنب والسجاد
6. تنظيف الستاير
7. رش مبيدات حشرية
8. تنظيف عميق للشقة والفيلا
9. غسيل خزان مياه
10. (يوجد المزيد حسب المحتوى)

### 5. Why Us Section
```html
<section id="why-us" class="section-padding why-us">
    <div class="container">
        <div class="why-us-container">
            <div class="why-us-content">
                <h2 class="section-title" style="text-align: right;">لماذا تختار شركة درب المها؟</h2>
                <ul class="why-list">
                    <li>
                        <div class="why-list-icon">✓</div>
                        <div class="why-list-text">
                            <h4>فريق عمل محترف</h4>
                            <p>...</p>
                        </div>
                    </li>
                    <!-- عناصر أخرى -->
                </ul>
            </div>
            <div class="why-us-img">
                <img src="img/r.webp" alt="فريق درب المها المحترف" width="500" height="400">
            </div>
        </div>
    </div>
</section>
```

**المميزات:**
- خلفية بيضاء
- Flexbox: نص + صورة
- صورة بإطار مزخرف (pseudo-element)

### 6. Stats Section
```html
<section class="stats">
    <div class="container">
        <div class="stats-container">
            <div class="stat-item">
                <h3><span class="counter-val" data-target="15000">0</span>+</h3>
                <p>عميل سعيد</p>
            </div>
            <!-- 3 إحصائيات أخرى -->
        </div>
    </div>
</section>
```

**الإحصائيات:**
- 15,000+ عميل سعيد
- 10+ سنوات خبرة
- 45+ عضو فريق
- 16+ خدمة

**المميزات:**
- خلفية صورة + تدرج
- عدادات متحركة (IntersectionObserver)
- Parallax على Desktop فقط

### 7. Testimonials
```html
<section class="section-padding testimonials">
    <div class="container">
        <h2 class="section-title">آراء عملائنا</h2>
        <div class="testimonials-grid">
            <article class="testimonial-card">
                <div class="quote-icon">"</div>
                <p class="testimonial-text">...</p>
                <div class="testimonial-author">
                    <div class="testimonial-avatar">أ</div>
                    <div class="testimonial-info">
                        <h4>أحمد محمد</h4>
                        <div class="stars">★★★★★</div>
                    </div>
                </div>
            </article>
            <!-- شهادتان أخريان -->
        </div>
    </div>
</section>
```

### 8. FAQ Section
```html
<section id="faq" class="section-padding bg-light">
    <div class="container">
        <h2 class="section-title">الأسئلة الشائعة</h2>
        <div class="faq-list">
            <details class="faq-item" itemscope itemtype="https://schema.org/Question">
                <summary itemprop="name">هل تقدمون خدمات التنظيف في جميع مناطق قطر؟</summary>
                <div class="faq-answer" itemscope itemtype="https://schema.org/Answer">
                    <p itemprop="text">نعم، نغطي جميع مناطق قطر...</p>
                </div>
            </details>
            <!-- 4 أسئلة أخرى -->
        </div>
    </div>
</section>
```

**الأسئلة الشائعة (5):**
1. هل تقدمون خدمات التنظيف في جميع مناطق قطر؟
2. ما هي أسعار خدماتكم؟
3. هل مواد التنظيف آمنة؟
4. كم يستغرق التنظيف؟
5. كيف يمكنني الحجز؟

### 9. Service Areas
```html
<section id="service-areas" class="section-padding">
    <div class="container">
        <h2 class="section-title">مناطق الخدمة</h2>
        <div class="areas-grid">
            <div class="area-card">
                <h3>الدوحة</h3>
                <p>تغطية شاملة لجميع مناطق الدوحة...</p>
            </div>
            <!-- 5 مناطق أخرى -->
        </div>
    </div>
</section>
```

**المناطق (6):**
1. الدوحة
2. الريان
3. الوكرة
4. لوسيل
5. الخور
6. أم صلال

### 10. CTA Banner
```html
<section class="cta-banner">
    <div class="container">
        <h2>اطلب خدمتك الآن</h2>
        <p>تواصل معنا واحصل على عرض سعر مجاني</p>
        <div class="hero-btns">
            <a href="tel:77175355" class="btn btn-primary">اتصل الآن 77175355</a>
            <a href="https://wa.me/97477175355" class="btn btn-whatsapp">تواصل عبر الواتساب</a>
        </div>
    </div>
</section>
```

### 11. Footer
```html
<footer>
    <div class="container">
        <div class="footer-grid">
            <div class="footer-about">
                <h3 class="footer-title">درب المها</h3>
                <p class="footer-text">شركة تنظيفات قطر الأولى...</p>
                <div class="social-links">
                    <a href="..." aria-label="Facebook">ⓕ</a>
                    <a href="..." aria-label="TikTok">🎵</a>
                    <a href="..." aria-label="Instagram">📸</a>
                    <a href="..." aria-label="Snapchat">👻</a>
                </div>
            </div>
            <div class="footer-contact">
                <h3 class="footer-title">تواصل معنا</h3>
                <ul class="footer-links">
                    <li>📍 الدوحة، قطر</li>
                    <li>📞 77175355</li>
                    <li>✉️ info@darbalmaha.com</li>
                </ul>
            </div>
            <div class="footer-areas">
                <h3 class="footer-title">مناطق الخدمة</h3>
                <ul class="footer-areas-list">
                    <li class="area-pill">الدوحة</li>
                    <li class="area-pill">الريان</li>
                    <!-- مناطق أخرى -->
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© <span id="year">2026</span> درب المها. جميع الحقوق محفوظة.</p>
        </div>
    </div>
</footer>
```

### 12. Floating Actions
```html
<div class="floating-actions">
    <a href="https://wa.me/97477175355" class="float-btn float-whatsapp" aria-label="تواصل عبر واتساب">
        <!-- أيقونة واتساب -->
    </a>
    <a href="tel:77175355" class="float-btn float-call" aria-label="اتصل بنا">
        <!-- أيقونة اتصال -->
    </a>
</div>
```

**المميزات:**
- Fixed position (أسفل اليمين)
- أنيميشن Pulse (أخضر للواتساب، برتقالي للاتصال)
- تبقى ظاهرة أثناء التمرير

---

## دليل النشر

### المتطلبات
- استضافة Apache (InfinityFree أو أي استضافة تدعم .htaccess)
- دعم PHP غير مطلوب (موقع Static)
- SSL Certificate (HTTPS)
- نطاق مرتبط (darbalmaha.com)

### خطوات الرفع على InfinityFree

#### 1. التحضير
```bash
# تأكد من وجود الملفات التالية:
landing4/
├── index.html              ✅
├── .htaccess               ✅
├── robots.txt              ✅
├── sitemap.xml             ✅
├── css/
│   ├── landing.css         ✅
│   └── landing.min.css     ✅
├── js/
│   ├── landing.js          ✅
│   ├── landing.min.js      ✅
│   ├── tracking.js         ✅
│   └── tracking.min.js     ✅
├── img/                    ✅ (كل الصور)
└── en/
    └── index.html          ✅
```

#### 2. الرفع عبر File Manager
1. ادخل على [InfinityFree Control Panel](https://infinityfree.com)
2. افتح **File Manager**
3. ادخل مجلد **`htdocs`**
4. اضغط **Upload**
5. ارفع كل الملفات والمجلدات

#### 3. الرفع عبر FTP (FileZilla)
```
Host: ftpupload.net
Username: if0_xxxxxxxx
Password: ********
Port: 21
```

#### 4. بعد الرفع
1. افتح الموقع: `darbalmaha.ct.ws` أو الدومين الخاص بك
2. جرّب الموبايل (DevTools → Toggle Device)
3. جرّب النسخة الإنجليزية: `/en/`
4. جرّب الأزرار (اتصل، واتساب، القائمة)
5. جرّب تغيير اللغة
6. امسح الكاش (Ctrl+F5)

### ⚠️ خطوات ما بعد الرفع

#### 1. تفعيل HTTPS
في `.htaccess`، ألغِ التعليق:
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

#### 2. تفعيل HSTS
```apache
Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
```

#### 3. استبدال معرفات التتبع
في `index.html` و `en/index.html` و `js/tracking.js`:
- `GTM-XXXXXXX` → معرف GTM حقيقي
- `XXXXXXXXXXXX` → معرف Facebook Pixel حقيقي
- `XXXXXXXX` → معرف TikTok Pixel حقيقي
- `XXXXXXXX` → معرف Snapchat Pixel حقيقي

#### 4. تحديث Google Search Console
1. سجّل الدخول إلى [Google Search Console](https://search.google.com/search-console)
2. أضف الموقع
3. قدّم sitemap: `https://darbalmaha.com/sitemap.xml`

#### 5. تحديث Google My Business
- تأكد من أن معلومات الاتصال متطابقة
- أضف رابط الموقع

---

## الصيانة والتحديث

### أوامر التطوير
```bash
# تثبيت الحزم
npm install

# ضغط CSS
npx cleancss -o css/landing.min.css css/landing.css

# ضغط JavaScript
npx terser js/landing.js -o js/landing.min.js --compress --mangle
npx terser js/tracking.js -o js/tracking.min.js --compress --mangle

# ضغط الكل مرة واحدة
npm run build  # (إذا أُضيف script)
```

### تحديث المحتوى
#### تغيير الأسعار
في `index.html` و `en/index.html`:
- ابحث عن نصوص الأسعار وعدّلها

#### إضافة خدمة جديدة
```html
<article class="service-card">
    <div class="service-img">
        <img src="img/new-service.webp" alt="..." width="400" height="250" loading="lazy">
    </div>
    <div class="service-content">
        <h3>اسم الخدمة</h3>
        <p>وصف الخدمة</p>
        <a href="https://wa.me/97477175355" class="service-btn">احجز الآن ←</a>
    </div>
</article>
```

#### إضافة منطقة خدمة جديدة
```html
<div class="area-card">
    <h3>اسم المنطقة</h3>
    <p>وصف التغطية</p>
</div>
```

#### تحديث الأرقام (Schema.org)
في JSON-LD:
```json
"aggregateRating": {
    "ratingValue": "4.9",
    "reviewCount": "347"  // حدّث الرقم
}
```

### تحديث الصور
1. حوّل الصورة إلى WebP:
   ```bash
   cwebp input.jpg -q 80 -o output.webp
   ```
2. ارفعها لمجلد `img/`
3. حدّث المرجع في HTML

### إضافة قسم جديد
```html
<section id="new-section" class="section-padding">
    <div class="container">
        <h2 class="section-title">عنوان القسم</h2>
        <p class="section-subtitle">وصف القسم</p>
        <!-- المحتوى -->
    </div>
</section>
```

ثم أضف `#new-section` إلى CSS للـ `scroll-margin-top`.

---

## المشاكل المعروفة والتحسينات

### ⚠️ مشاكل يجب إصلاحها

#### 1. معرفات التتبع Placeholder
**الأولوية**: 🔴 عالية
```
المشكلة: جميع معرفات Pixels وهمية
التأثير: لن يعمل أي تتبع إعلاني
الحل: استبدال المعرفات باللي من لوحات الإعلانات
```

#### 2. HTTPS Redirect مُعلّق
**الأولوية**: 🔴 عالية
```
المشكلة: HTTPS redirect في .htaccess مُعلّق
التأثير: الزوار ممكن يدخلوا HTTP
الحل: إلغاء التعليق عن RewriteCond و RewriteRule
```

#### 3. Twitter Handle في النسخة الإنجليزية
**الأولوية**: 🟡 متوسطة
```
المشكلة: en/index.html فيه @yourdomain بدل @darbalmaha
الحل: استبداله بـ @darbalmaha
```

#### 4. GA4 غير مُحمّل
**الأولوية**: 🟡 متوسطة
```
المشكلة: CONFIG.ga4Id مُعرّف لكن GA4 script غير موجود
الحل: إما تحميل GA4 أو إزالة الكود
```

### 💡 تحسينات مقترحة

#### 1. CSS Minification تلقائي
```json
// في package.json
"scripts": {
    "build:css": "cleancss -o css/landing.min.css css/landing.css",
    "build:js": "terser js/landing.js -o js/landing.min.js && terser js/tracking.js -o js/tracking.min.js",
    "build": "npm run build:css && npm run build:js"
}
```

#### 2. Self-Hosted Fonts
```
المشكلة: Google Fonts render-blocking
الحل: تحميل الخطوط واستضافتها محلياً
```

#### 3. Skip-to-Content Link
```html
<a href="#main-content" class="skip-link">انتقل للمحتوى</a>
```

#### 4. إضافة `<main>` element
```html
<body>
    <header>...</header>
    <main id="main-content">
        <!-- كل المحتوى -->
    </main>
    <footer>...</footer>
</body>
```

#### 5. تحسين Accessibility
- إضافة `aria-expanded` للـ mobile menu button
- إضافة `aria-label` لزر تبديل اللغة
- تحسين تباين الألوان (فحص بـ Lighthouse)

#### 6. Page 404 مخصصة
```apache
ErrorDocument 404 /404.html
```

#### 7. Service Worker (PWA)
```
المشكلة: لا offline support
الحل: إضافة Service Worker للتخزين المؤقت
```

#### 8. Lazy Loading للـ iframes
```html
<iframe src="..." loading="lazy"></iframe>
```

---

## معلومات الاتصال

### فريق التطوير
| الدور | المسؤول |
|-------|---------|
| **التطوير** | فريق Qwen Code |
| **التصميم** | فريق التصميم |
| **SEO** | فريق التسويق |

### روابط مفيدة
| الرابط | الغرض |
|--------|-------|
| [InfinityFree](https://infinityfree.com) | الاستضافة |
| [Google Search Console](https://search.google.com/search-console) | مراقبة SEO |
| [Google PageSpeed Insights](https://pagespeed.web.dev) | اختبار الأداء |
| [Facebook Events Manager](https://www.facebook.com/events_manager2) | Facebook Pixel |
| [TikTok Analytics](https://analytics.tiktok.com) | TikTok Pixel |
| [Snapchat Ads](https://ads.snapchat.com) | Snapchat Pixel |

---

## 📝 سجل التغييرات

| التاريخ | الإصدار | التغييرات |
|---------|---------|-----------|
| 2026-04-05 | 1.0.0 | الإطلاق الأول - إنشاء الموقع بالكامل |

---

## ✅ Checklist قبل الإطلاق

- [ ] استبدال معرفات التتبع (GTM, Facebook, TikTok, Snapchat)
- [ ] تفعيل HTTPS redirect في `.htaccess`
- [ ] تفعيل HSTS header في `.htaccess`
- [ ] تصحيح Twitter handle في `en/index.html`
- [ ] رفع كل الملفات للاستضافة
- [ ] تقديم sitemap لـ Google Search Console
- [ ] اختبار الموقع على Desktop و Mobile
- [ ] اختبار كل الروابط والأزرار
- [ ] اختبار تبديل اللغة
- [ ] مسح الكاش والتحقق من الأداء
- [ ] تفعيل الإعلانات على المنصات

---

**آخر تحديث:** 2026-04-05 | **الإصدار:** 1.0.0


تم إنشاء ملف التوثيق الشامل PROJECT.md ✅

الملف يحتوي على 16 قسم شامل يغطي كل تفاصيل المشروع:

القسم	المحتوى
📋 نظرة عامة	وصف المشروع، المعلومات التجارية
📁 هيكل الملفات	شجرة كاملة مع شرح كل ملف
🔧 التقنيات	HTML5, CSS3, JS, أدوات الضغط
✨ المميزات	ثنائي اللغة، SEO، الأداء، التتبع
🔍 SEO	Meta tags, Schema.org, Open Graph, Sitemap
⚡ الأداء	صور WebP, Lazy loading, Caching, Gzip
📱 التصميم المتجاوب	Breakpoints, Grid layouts, Mobile menu
🌐 دعم اللغات	آلية التبديل, الخطوط, localStorage
📊 التتبع	Facebook, TikTok, Snapchat, GA4 events
🔒 الحماية	CSP, Headers, منع الملفات الحساسة
🎨 قاعدة التصميم	الألوان, الخطوط, الأزرار, الظلال
📑 الأقسام	كل 12 قسم مع الكود والشرح
🚀 دليل النشر	خطوات InfinityFree, FTP, ما بعد الرفع
🔧 الصيانة	الأوامر, التحديثات, إضافة محتوى
⚠️ المشاكل المعروفة	قائمة بالمشاكل والتحسينات
📝 سجل التغييرات	الإصدارات والتحديثات