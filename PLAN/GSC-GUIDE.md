# 📊 دليل ربط Google Search Console - درب المها

## ✅ الوضع الحالي
- الموقع مسجل في GSC: `darbalmaha.com` ✅
- Sitemap مُضاف: `https://darbalmaha.com/sitemap.xml` ✅
- عدد الصفحات المكتشفة: 2 (الرئيسية + الإنجليزية) ✅
- آخر قراءة: 08/04/2026 ✅

---

## 🔍 خطوات التأكيد والتحقق

### الخطوة 1: تأكيد الملكية (إذا لم تكن مؤكدة)

#### الطريقة الأسهل: HTML Tag
1. اذهب إلى [Google Search Console](https://search.google.com/search-console)
2. اختر `darbalmaha.com`
3. إذا طلب تأكيد، اختر طريقة **HTML Tag**
4. انسخ الكود (مثال):
```html
<meta name="google-site-verification" content="XXXXXXXXXXXXXXXXXXXXXXXX" />
```
5. ضعه في ملف `index.html` داخل `<head>` قبل أي tag آخر

#### الطريقة البديلة: رفع ملف HTML
1. اختر طريقة **HTML File**
2. حمّل الملف (`googleXXXXXXXXXXXXXXXX.html`) في جذر الموقع
3. تأكد إن الرابط شغال: `https://darbalmaha.com/googleXXXXXXXXXXXXXXXX.html`

#### الطريقة المثالية: DNS Record (موصى بها)
1. اختر طريقة **DNS**
2. اذهب لاستضافة DNS بتاعتك
3. أضف TXT record:
```
Type: TXT
Name: @
Value: google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXX
TTL: 1 hour
```

---

### الخطوة 2: إعادة إرسال Sitemap

1. في GSC اذهب إلى **Sitemaps**
2. احذف الـ Sitemap القديم (إذا فيه)
3. أضف: `sitemap.xml`
4. انتظر حتى يقولك **Success**

---

### الخطوة 3: طلب فهرسة الصفحات الجديدة

1. في GSC اذهب إلى **URL Inspection**
2. اكتب: `https://darbalmaha.com/`
3. اضغط **Request Indexing**
4. كرر للصفحة الإنجليزية: `https://darbalmaha.com/en/`

---

### الخطوة 4: مراقبة الأداء

#### بعد أسبوع:
- اذهب لـ **Performance**
- شوف الكلمات اللي بتطلع بيها
- شوف Impressions و Clicks

#### بعد شهر:
- شوف **Search Results** → **Search appearance**
- تأكد إن الـ Rich Results شغالة (FAQ, Reviews, Local Business)

---

## 📈 أهم البيانات اللي تتابعها

### 1. Performance → Search Results
| البيانات | المعنى |
|---------|--------|
| **Total Clicks** | عدد النقرات من نتائج البحث |
| **Total Impressions** | عدد مرات الظهور |
| **Average CTR** | نسبة النقر للظهور (استهدف >3%) |
| **Average Position** | متوسط الترتيب (استهدف Top 10) |

### 2. Indexing → Pages
| البيانات | المعنى |
|---------|--------|
| **Indexed** | صفحات مفهرسة ✅ |
| **Not Indexed** | صفحات مش مفهرسة ❌ |

### 3. Experience → Core Web Vitals
| البيانات | الهدف |
|---------|--------|
| **LCP** | < 2.5 ثانية |
| **FID** | < 100 مللي ثانية |
| **CLS** | < 0.1 |

---

## ⚠️ مشاكل شائعة وحلولها

### مشكلة: صفحات مش مفهرسة
**الحل:**
1. تأكد إن الصفحات مش فيها `noindex`
2. تأكد إن الـ Sitemap محدّث
3. اطلب فهرسة يدوية من URL Inspection

### مشكلة: Rich Results مش شغالة
**الحل:**
1. استخدم [Rich Results Test](https://search.google.com/test/rich-results)
2. صلح أي أخطاء في Schema.org
3. اطلب إعادة الفهرسة

### مشكلة: Mobile Usability Errors
**الحل:**
1. اذهب لـ **Experience → Mobile Usability**
2. شوف الأخطاء
3. صلحها واطلب Validation

---

## 🔗 روابط مهمة

| الرابط | الغرض |
|--------|--------|
| [Search Console](https://search.google.com/search-console) | لوحة التحكم الرئيسية |
| [URL Inspection](https://search.google.com/search-console/url-inspection) | فحص صفحة معينة |
| [Rich Results Test](https://search.google.com/test/rich-results) | اختبار الـ Schema |
| [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) | اختبار التوافق مع الموبايل |
| [PageSpeed Insights](https://pagespeed.web.dev/) | اختبار سرعة الصفحة |

---

## ✅ Checklist نهائي

- [x] تأكيد الملكية في GSC
- [x] إرسال Sitemap محدّث
- [x] طلب فهرسة الصفحة الرئيسية
- [x] طلب فهرسة الصفحة الإنجليزية
- [x] إصلاح خطأ Review Schema (`itemReviewed`)
- [ ] التأكد من عدم وجود أخطاء Mobile Usability
- [ ] التأكد من Rich Results شغالة بعد الإصلاح
- [ ] إعداد تنبيهات GSC بالإيميل
- [ ] ربط GSC مع Google Analytics 4

---

## 📊 تقارير أسبوعية مقترحة

### كل أسبوع:
1. شوف **Performance** → كم Click و Impression؟
2. شوف **Indexing** → هل كل الصفحات مفهرسة؟
3. شوف **Coverage** → هل فيه أخطاء جديدة؟
4. سجل الملاحظات في ملف Excel

### كل شهر:
1. قارن الأداء مع الشهر اللي فات
2. شوف الكلمات الجديدة اللي طلعت
3. حلل الـ CTR وحسّنه
4. حدّث الـ Sitemap إذا فيه صفحات جديدة
