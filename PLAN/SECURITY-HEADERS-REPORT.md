# 🔒 تقرير أمان Security Headers + خطة الإصلاح

## 📅 9 أبريل 2026

---

## 📊 نتيجة فحص Security Headers

**التقييم: D** ⚠️

### ✅ الهيدرز الموجودة:
| الهيدر | الحالة |
|--------|--------|
| Strict-Transport-Security | ✅ مفعّل |
| X-Content-Type-Options | ✅ nosniff |

### ❌ الهيدرز المفقودة:
| الهيدر | الحالة | الأهمية |
|--------|--------|---------|
| Content-Security-Policy | ❌ مفقود | ⭐⭐⭐⭐⭐ حماية من XSS |
| X-Frame-Options | ❌ مفقود | ⭐⭐⭐⭐ حماية من Clickjacking |
| Referrer-Policy | ❌ مفقود | ⭐⭐⭐ حماية بيانات الإحالة |
| Permissions-Policy | ❌ مفقود | ⭐⭐⭐ التحكم في صلاحيات المتصفح |

---

## 🔍 ملاحظات مهمة من التقرير

### 1. الموقع مستضاف على Cloudflare
```
server: cloudflare
```
ده معناه إن **بعض الهيدرز بتتحكم فيها Cloudflare مش .htaccess**

### 2. HSTS مفعّل بالفعل ✅
```
strict-transport-security: max-age=31536000; includeSubDomains; preload
```
ده خبر حلو! **HSTS شغال** ✅

### 3. X-Content-Type-Options مفعّل ✅
```
x-content-type-options: nosniff
```
✅ تمام

---

## 🛠️ حل المشكلة: إضافة الهيدرز المفقودة

### الطريقة 1: عبر Cloudflare Dashboard (الأسهل)

#### الخطوة 1: افتح Cloudflare Dashboard
1. اذهب لـ [dash.cloudflare.com](https://dash.cloudflare.com)
2. اختار نطاق `darbalmaha.com`

#### الخطوة 2: أضف الهيدرز في Rules

**المسار:** `Rules` → `Transform Rules` → `Modify Response Header`

أو

**المسار:** `Rules` → `Page Rules` → `Create Page Rule`

---

#### الهيدر 1: Content-Security-Policy

```
Header Name: Content-Security-Policy
Value: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net https://analytics.tiktok.com https://sc-static.net https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.googletagmanager.com https://www.facebook.com https://analytics.tiktok.com https://sc-static.net https://www.google-analytics.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';
```

---

#### الهيدر 2: X-Frame-Options

```
Header Name: X-Frame-Options
Value: DENY
```

---

#### الهيدر 3: Referrer-Policy

```
Header Name: Referrer-Policy
Value: strict-origin-when-cross-origin
```

---

#### الهيدر 4: Permissions-Policy

```
Header Name: Permissions-Policy
Value: geolocation=(), microphone=(), camera=(), payment=(), usb=()
```

---

### الطريقة 2: عبر ملف `_headers` (لو على GitHub Pages)

أنشئ ملف `_headers` في جذر الموقع:

```
/*
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net https://analytics.tiktok.com https://sc-static.net https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.googletagmanager.com https://www.facebook.com https://analytics.tiktok.com https://sc-static.net https://www.google-analytics.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), usb=()
```

---

### الطريقة 3: عبر `.htaccess` (لو على Apache)

أضف هذه الأكواد في نهاية ملف `.htaccess`:

```apache
# Security Headers
<IfModule mod_headers.c>
    # Content Security Policy
    Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net https://analytics.tiktok.com https://sc-static.net https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.googletagmanager.com https://www.facebook.com https://analytics.tiktok.com https://sc-static.net https://www.google-analytics.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"

    # X-Frame-Options
    Header set X-Frame-Options "DENY"

    # Referrer-Policy
    Header set Referrer-Policy "strict-origin-when-cross-origin"

    # Permissions-Policy
    Header set Permissions-Policy "geolocation=(), microphone=(), camera=(), payment=(), usb=()"
</IfModule>
```

---

## ✅ بعد التطبيق - افحص مرة تانية

### أدوات الفحص:

| الأداة | الرابط |
|--------|--------|
| **Security Headers** | securityheaders.com |
| **Mozilla Observatory** | observatory.mozilla.org |
| **SSL Labs** | ssllabs.com/ssltest |

### النتيجة المتوقعة:
- **A** أو **A+** بدلاً من **D** ✅

---

## 📋 ملاحظات إضافية من التقرير

### 1. CORS Policy متساهل
```
access-control-allow-origin: *
```
**المشكلة:** أي موقع يقدر يطلب موارد من موقعك  
**الحل:** استبدل `*` بـ `https://darbalmaha.com` فقط

---

### 2. Cloudflare Cache
```
cf-cache-status: DYNAMIC
```
**الملاحظة:** المحتوى مش متخزن على Cloudflare  
**الحل:** فعّل Cloudflare Cache للصور والـ CSS/JS

---

### 3. Server: cloudflare
**الملاحظة:** Cloudflare بيخفي الخادم الحقيقي  
**الفائدة:** حماية إضافية ✅

---

### 4. Gzip Compression مفعّل
```
content-encoding: gzip
```
**الفائدة:** تقليل حجم الملفات ✅

---

## 🎯 خطوات التنفيذ الفورية

### الخطوة 1 (10 دقائق):
```
اذهب لـ Cloudflare Dashboard → Rules → Modify Response Header
```

### الخطوة 2 (5 دقائق لكل هيدر):
```
أضف الهيدرز الأربعة المفقودة
```

### الخطوة 3 (5 دقائق):
```
افحص مرة تانية على securityheaders.com
```

### الخطوة 4 (متوقعة):
```
النتيجة: A أو A+ ✅
```

---

## 📊 ملخص Security Headers

| الهيدر | قبل | بعد |
|--------|-----|-----|
| Strict-Transport-Security | ✅ | ✅ |
| X-Content-Type-Options | ✅ | ✅ |
| Content-Security-Policy | ❌ | ✅ |
| X-Frame-Options | ❌ | ✅ |
| Referrer-Policy | ❌ | ✅ |
| Permissions-Policy | ❌ | ✅ |
| **التقييم** | **D** | **A** ✅ |

---

## ⚠️ مهم جداً

### لو الموقع على Cloudflare:
- **الهيدرز بتتحكم فيها Cloudflare Rules** مش `.htaccess`
- استخدم **Cloudflare Dashboard** لإضافة الهيدرز

### لو الموقع على Apache مباشر:
- استخدم **`.htaccess`** لإضافة الهيدرز

### لو الموقع على GitHub Pages:
- استخدم ملف **`_headers`** في الجذر

---

## 📞 خلاصة

| البند | الحالة |
|-------|--------|
| **HSTS** | ✅ مفعّل |
| **X-Content-Type-Options** | ✅ مفعّل |
| **Content-Security-Policy** | ⏳ محتاج إضافة |
| **X-Frame-Options** | ⏳ محتاج إضافة |
| **Referrer-Policy** | ⏳ محتاج إضافة |
| **Permissions-Policy** | ⏳ محتاج إضافة |
| **التقييم** | **D → A** بعد الإصلاح |

---

**ابدأ بإضافة الهيدرز في Cloudflare النهاردة!** 🚀
